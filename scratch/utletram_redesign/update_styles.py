
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\styles.css"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start line
start_index = -1

for i, line in enumerate(lines):
    if "/* Hero Content Bottom Center (Mobile) */" in line:
        start_index = i
        break

if start_index != -1:
    print(f"Found block starting at line {start_index+1}")
    
    # Remove everything from start_index to the end
    new_lines = lines[:start_index]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("File updated successfully.")
else:
    print("Could not find the target block.")
