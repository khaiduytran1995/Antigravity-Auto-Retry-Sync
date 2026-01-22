
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\elementor_snippet.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the old block (using a unique part of it to locate)
start_marker = "/* Hero Content Bottom Center (Desktop Only) */"
end_marker = "/* Hero Slider Shadow (Desktop Only) */"

start_index = content.find(start_marker)
end_index = content.find(end_marker)

if start_index != -1 and end_index != -1:
    print(f"Found block from index {start_index} to {end_index}")
    
    new_content = """    /* Hero Content Bottom Center (Desktop Only) */
    @media (min-width: 993px) {
        .ut-le-tram-custom-design .slide-content {
            top: auto !important;
            bottom: 60px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            text-align: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 1100px !important;
        }
        
        .ut-le-tram-custom-design .slide-title {
            font-size: 3.2rem !important;
            margin-bottom: 15px !important;
            letter-spacing: 1px;
            line-height: 1.2 !important;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
        }
        
        .ut-le-tram-custom-design .slide-desc {
            font-size: 1.1rem !important;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.5 !important;
            font-weight: 400;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
        }
    }

"""
    # Replace the content
    updated_content = content[:start_index] + new_content + content[end_index:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print("File updated successfully.")
else:
    print("Could not find the target block.")
