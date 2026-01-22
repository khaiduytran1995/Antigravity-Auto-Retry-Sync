"""
Simple Tikdown V2 - License Bypass Launcher
Intercepts license checks by redirecting crm.alosoft.vn through a local proxy
"""

import os
import sys
import ssl
import json
import time
import socket
import threading
import subprocess
import urllib.request
import urllib.error
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
import ctypes

# ==================== CONFIGURATION ====================
APP_PATH = r"C:\Program Files\Simple Tikdown V2\Simple Tikdown V2.exe"
TARGET_DOMAIN = "crm.alosoft.vn"
LOCAL_PORT = 443
HOSTS_FILE = r"C:\Windows\System32\drivers\etc\hosts"

# Fake license response
FAKE_LICENSE = {
    "success": True,
    "data": {
        "key": "ATP-TIKTOK-VIP",
        "license_key": "ATP-TIKTOK-VIP", 
        "tier": "VIP",
        "plan": "VIP",
        "remaining_days": 365,
        "remainingDays": 365,
        "expire_date": "2027-01-01T00:00:00Z",
        "expires": "2027-01-01T00:00:00Z",
        "isValid": True,
        "valid": True,
        "threads": 999,
        "max_threads": 999
    },
    "message": "License valid",
    "remaining_days": 365
}

# ==================== ADMIN CHECK ====================
def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def run_as_admin():
    if not is_admin():
        print("[!] Requesting administrator privileges...")
        ctypes.windll.shell32.ShellExecuteW(
            None, "runas", sys.executable, " ".join([f'"{arg}"' for arg in sys.argv]), None, 1
        )
        sys.exit(0)

# ==================== HOSTS FILE ====================
def add_hosts_entry():
    print(f"[*] Adding hosts entry: 127.0.0.1 {TARGET_DOMAIN}")
    try:
        with open(HOSTS_FILE, 'r') as f:
            content = f.read()
        
        if TARGET_DOMAIN not in content:
            with open(HOSTS_FILE, 'a') as f:
                f.write(f"\n127.0.0.1 {TARGET_DOMAIN}  # Tikdown Bypass\n")
            print("[+] Hosts entry added")
        else:
            print("[*] Hosts entry already exists")
        return True
    except Exception as e:
        print(f"[-] Error adding hosts entry: {e}")
        return False

def remove_hosts_entry():
    print(f"[*] Removing hosts entry for {TARGET_DOMAIN}")
    try:
        with open(HOSTS_FILE, 'r') as f:
            lines = f.readlines()
        
        with open(HOSTS_FILE, 'w') as f:
            for line in lines:
                if TARGET_DOMAIN not in line and "Tikdown Bypass" not in line:
                    f.write(line)
        print("[+] Hosts entry removed")
    except Exception as e:
        print(f"[-] Error removing hosts entry: {e}")

def flush_dns():
    print("[*] Flushing DNS cache...")
    try:
        subprocess.run(["ipconfig", "/flushdns"], capture_output=True)
        print("[+] DNS cache flushed")
    except:
        pass

# ==================== SSL CERTIFICATE ====================
def generate_self_signed_cert():
    cert_file = os.path.join(os.path.dirname(__file__), "server.pem")
    key_file = os.path.join(os.path.dirname(__file__), "server.key")
    
    if os.path.exists(cert_file) and os.path.exists(key_file):
        return cert_file, key_file
    
    print("[*] Generating self-signed certificate...")
    try:
        from cryptography import x509
        from cryptography.x509.oid import NameOID
        from cryptography.hazmat.primitives import hashes, serialization
        from cryptography.hazmat.primitives.asymmetric import rsa
        from cryptography.hazmat.backends import default_backend
        import datetime
        
        # Generate key
        key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048,
            backend=default_backend()
        )
        
        # Generate certificate
        subject = issuer = x509.Name([
            x509.NameAttribute(NameOID.COUNTRY_NAME, "VN"),
            x509.NameAttribute(NameOID.STATE_OR_PROVINCE_NAME, "HCM"),
            x509.NameAttribute(NameOID.LOCALITY_NAME, "Ho Chi Minh"),
            x509.NameAttribute(NameOID.ORGANIZATION_NAME, "Tikdown Bypass"),
            x509.NameAttribute(NameOID.COMMON_NAME, TARGET_DOMAIN),
        ])
        
        cert = x509.CertificateBuilder().subject_name(
            subject
        ).issuer_name(
            issuer
        ).public_key(
            key.public_key()
        ).serial_number(
            x509.random_serial_number()
        ).not_valid_before(
            datetime.datetime.utcnow()
        ).not_valid_after(
            datetime.datetime.utcnow() + datetime.timedelta(days=365)
        ).add_extension(
            x509.SubjectAlternativeName([x509.DNSName(TARGET_DOMAIN)]),
            critical=False,
        ).sign(key, hashes.SHA256(), default_backend())
        
        # Save certificate
        with open(cert_file, "wb") as f:
            f.write(cert.public_bytes(serialization.Encoding.PEM))
        
        with open(key_file, "wb") as f:
            f.write(key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.TraditionalOpenSSL,
                encryption_algorithm=serialization.NoEncryption()
            ))
        
        print("[+] Certificate generated")
        return cert_file, key_file
        
    except ImportError:
        print("[-] cryptography module not found, using openssl...")
        # Fallback to openssl
        try:
            subprocess.run([
                "openssl", "req", "-x509", "-newkey", "rsa:2048",
                "-keyout", key_file, "-out", cert_file,
                "-days", "365", "-nodes",
                "-subj", f"/CN={TARGET_DOMAIN}"
            ], capture_output=True)
            return cert_file, key_file
        except:
            print("[-] Failed to generate certificate")
            return None, None

# ==================== PROXY SERVER ====================
class ProxyHandler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[PROXY] {args[0]}")
    
    def do_GET(self):
        self.handle_request("GET")
    
    def do_POST(self):
        self.handle_request("POST")
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "*")
        self.end_headers()
    
    def handle_request(self, method):
        path = self.path
        
        # Check if license-related request
        if any(x in path.lower() for x in ['license', 'check', 'key', 'verify', 'validate']):
            print(f"[BYPASS] Intercepted license request: {path}")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(FAKE_LICENSE).encode())
            return
        
        # Forward other requests to real server
        try:
            real_url = f"https://{TARGET_DOMAIN}{path}"
            print(f"[PROXY] Forwarding: {real_url}")
            
            # Read request body for POST
            body = None
            if method == "POST":
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length)
            
            # Create request
            req = urllib.request.Request(real_url, data=body, method=method)
            
            # Copy headers (except Host)
            for header, value in self.headers.items():
                if header.lower() not in ['host', 'connection']:
                    req.add_header(header, value)
            
            # Create SSL context that ignores certificate
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            
            # Send request
            with urllib.request.urlopen(req, context=ctx, timeout=30) as response:
                self.send_response(response.status)
                for header, value in response.headers.items():
                    if header.lower() not in ['transfer-encoding', 'connection']:
                        self.send_header(header, value)
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(response.read())
                
        except Exception as e:
            print(f"[ERROR] Proxy error: {e}")
            self.send_response(502)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(f"Proxy error: {e}".encode())

def start_server(cert_file, key_file):
    print(f"[*] Starting HTTPS server on port {LOCAL_PORT}...")
    
    try:
        server = HTTPServer(('127.0.0.1', LOCAL_PORT), ProxyHandler)
        
        # Wrap with SSL
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.load_cert_chain(cert_file, key_file)
        server.socket = context.wrap_socket(server.socket, server_side=True)
        
        print(f"[+] Server started on https://127.0.0.1:{LOCAL_PORT}")
        server.serve_forever()
        
    except OSError as e:
        if "address already in use" in str(e).lower() or e.errno == 10048:
            print(f"[-] Port {LOCAL_PORT} is already in use")
        else:
            print(f"[-] Server error: {e}")
    except Exception as e:
        print(f"[-] Server error: {e}")

# ==================== MAIN ====================
def main():
    print("=" * 50)
    print("  Simple Tikdown V2 - License Bypass Launcher")
    print("=" * 50)
    print()
    
    # Check admin
    run_as_admin()
    
    # Generate certificate
    cert_file, key_file = generate_self_signed_cert()
    if not cert_file:
        print("[-] Failed to generate certificate. Exiting.")
        input("Press Enter to exit...")
        return
    
    # Add hosts entry
    if not add_hosts_entry():
        print("[-] Failed to add hosts entry. Exiting.")
        input("Press Enter to exit...")
        return
    
    flush_dns()
    
    # Start server in background thread
    server_thread = threading.Thread(target=start_server, args=(cert_file, key_file), daemon=True)
    server_thread.start()
    
    time.sleep(2)  # Wait for server to start
    
    # Launch application
    print(f"\n[*] Launching: {APP_PATH}")
    try:
        process = subprocess.Popen([APP_PATH])
        print("[+] Application launched")
        print("\n[*] Bypass is active. Close this window when done.")
        print("[*] Press Ctrl+C to stop the bypass and restore settings.\n")
        
        # Wait for app to close
        process.wait()
        
    except FileNotFoundError:
        print(f"[-] Application not found: {APP_PATH}")
    except KeyboardInterrupt:
        print("\n[*] Interrupted by user")
    except Exception as e:
        print(f"[-] Error launching app: {e}")
    
    # Cleanup
    print("\n[*] Cleaning up...")
    remove_hosts_entry()
    flush_dns()
    print("[+] Done!")
    input("Press Enter to exit...")

if __name__ == "__main__":
    main()
