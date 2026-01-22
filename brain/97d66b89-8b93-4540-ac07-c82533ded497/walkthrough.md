# Walkthrough - Veo-Banana-Pro2202 Investigation

I have successfully analyzed the application structure and extracted its core components.

## Accomplishments

### 1. Container Analysis (`27~`)
Identified that `27~` is a custom packed container using a format of `[UTF-16 Filename]\0\0 [Size 4-bytes] \0\0\0\0 [Data]`. I have successfully extracted 39 files from this container.

### 2. Technology Identification
The application is built using:
- **Language**: Python 3.13
- **UI Framework**: PySide6 (Qt6)
- **Compiler**: Nuitka (logic converted to C++ and bundled in `Veo-Banana-Pro2202.dll`)

### 3. Core DLL Extraction
Extracted `Veo-Banana-Pro2202.dll` (25 MB), which contains the main application logic and exports a `run_code` function used by the primary EXE.

### 4. Bypassing Research
- Verified that common Frida hooks for older "Veo" tools (targeting `is_license_valid` and specific RSA moduli) do NOT work directly on this version.
- Verified that the activation strings are present in memory, confirming the presence of validation logic.
- Network connections are being made, but the specific backend domain (Supabase or other) is not stored in plain ASCII.

## Files Extracted

| Filename | Description |
| :--- | :--- |
| `Veo-Banana-Pro2202.dll` | Main application logic |
| `python313.dll`, `python3.dll` | Python runtime |
| `qt6gui.dll`, `qt6widgets.dll`, etc. | UI library |
| `_ssl.pyd`, `pyexpat.pyd` | Python extension modules |

## Next Steps

1. **Static Analysis**: Open `Veo-Banana-Pro2202.dll` in IDA Pro to locate the function called by `run_code` and Trace it to the license check.
2. **Dynamic Capture**: Use `mitmproxy` or a global sniffer to capture the encrypted/HTTPS traffic to identify the license server URL.
