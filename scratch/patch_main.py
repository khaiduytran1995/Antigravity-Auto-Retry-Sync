"""
Patch main.js to inject global.SECRET_CONFIG for license bypass
"""

import os
import shutil

TARGET_FILE = r"D:\14012026Veo Automation Setup 1.2.1\$PLUGINSDIR\Filegocdeupdate\Super Tools Veo Automation (pass 123)\Veo Automation\resources\app\dist-electron\main.js"

# Backup
BACKUP_FILE = TARGET_FILE + ".backup"

# SECRET_CONFIG to inject
SECRET_CONFIG = """
// PATCHED: Injecting SECRET_CONFIG for license bypass
global.SECRET_CONFIG = {
    apiEndpoint: 'https://aisandbox-pa.googleapis.com/v1/',
    appName: 'Veo Automation',
    version: '1.2.1',
    timeout: 60000,
    latestVersion: '1.2.1',
    downloadUrl: null
};
"""

def main():
    print(f"Target: {TARGET_FILE}")
    
    if not os.path.exists(TARGET_FILE):
        print("ERROR: Target file not found!")
        return False
    
    # Create backup
    if not os.path.exists(BACKUP_FILE):
        shutil.copy2(TARGET_FILE, BACKUP_FILE)
        print(f"Backup created: {BACKUP_FILE}")
    else:
        print("Backup already exists, skipping...")
    
    # Read current content
    with open(TARGET_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already patched
    if 'global.SECRET_CONFIG' in content and '// PATCHED:' in content:
        print("File already patched!")
        return True
    
    # Inject SECRET_CONFIG after 'use strict';
    if content.startswith("'use strict';"):
        patched_content = "'use strict';" + SECRET_CONFIG + content[13:]
        print("Injected SECRET_CONFIG after 'use strict';")
    else:
        # Fallback: prepend
        patched_content = SECRET_CONFIG + content
        print("Injected SECRET_CONFIG at beginning")
    
    # Write patched content
    with open(TARGET_FILE, 'w', encoding='utf-8') as f:
        f.write(patched_content)
    
    print("SUCCESS: main.js patched!")
    print(f"File size: {os.path.getsize(TARGET_FILE)} bytes")
    return True

if __name__ == "__main__":
    main()
