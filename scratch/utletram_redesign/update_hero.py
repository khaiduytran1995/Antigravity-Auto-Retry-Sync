
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\elementor_snippet.html"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start and end lines
start_index = -1
end_index = -1

for i, line in enumerate(lines):
    if "/* Hero Content Bottom Center (Mobile) */" in line:
        start_index = i
    if "/* Hero Slider Shadow */" in line:
        # We want to include this block, so we look for the closing brace after it
        # The shadow block ends at line 832 in the view, which is a closing brace
        # Let's look for </style> and go back one line?
        pass
    if "</style>" in line and start_index != -1:
        end_index = i
        break

if start_index != -1 and end_index != -1:
    print(f"Found block from line {start_index+1} to {end_index}")
    
    new_content = """    /* Hero Content Bottom Center (Desktop Only) */
    @media (min-width: 993px) {
        .ut-le-tram-custom-design .slide-content {
            top: auto !important;
            bottom: 50px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            text-align: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
            width: 80% !important;
            max-width: 800px !important;
        }
        
        .ut-le-tram-custom-design .slide-title {
            font-size: 4rem !important;
            margin-bottom: 20px !important;
        }
        
        .ut-le-tram-custom-design .slide-desc {
            font-size: 1.4rem !important;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    /* Hero Slider Shadow (Desktop Only) */
    .ut-le-tram-custom-design .hero-desktop {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
"""
    # Replace the lines
    # We want to keep </style> (end_index)
    lines[start_index:end_index] = [new_content + "\n"]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("File updated successfully.")
else:
    print("Could not find the target block.")
