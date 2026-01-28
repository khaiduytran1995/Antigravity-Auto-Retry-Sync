import subprocess
import os

# Paths
source_asar = r"D:\14012026Veo Automation Setup 1.2.1\$PLUGINSDIR\Filegocdeupdate\Super Tools Veo Automation (pass 123)\Veo Automation\resources\veoapp.asar"
dest_folder = r"C:\Users\hp\.gemini\antigravity\scratch\veoapp_extracted"

# Create destination folder if not exists
os.makedirs(dest_folder, exist_ok=True)

# Run npx command
cmd = f'npx.cmd -y @electron/asar extract "{source_asar}" "{dest_folder}"'
print(f"Running: {cmd}")
result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=r"C:\Users\hp\.gemini\antigravity\scratch")
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Return code:", result.returncode)
