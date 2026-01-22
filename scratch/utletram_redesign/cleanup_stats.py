
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\elementor_snippet.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the block to remove
# It starts after the new mobile media query closing brace
# and ends before the original .stat-number rule

# Let's identify it by its content
redundant_block = """    .ut-le-tram-custom-design .stat-number {
            font-size: 1.8rem;
        }
        
        .ut-le-tram-custom-design .stat-label {
            font-size: 0.8rem;
        }

    @media (max-width: 768px) {
        .ut-le-tram-custom-design .stats-grid {
            flex-direction: column;
            gap: 30px;
        }
    }"""

# Try to find it. Note: whitespace might be slightly off.
# Let's try to construct it exactly as it appeared in the view_file output.
# View file output lines 735-748:
redundant_block_exact = """    .ut-le-tram-custom-design .stat-number {
            font-size: 1.8rem;
        }
        
        .ut-le-tram-custom-design .stat-label {
            font-size: 0.8rem;
        }

    @media (max-width: 768px) {
        .ut-le-tram-custom-design .stats-grid {
            flex-direction: column;
            gap: 30px;
        }
    }"""

if redundant_block_exact in content:
    print("Found exact redundant block.")
    content = content.replace(redundant_block_exact, "")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Removed redundant block.")
else:
    print("Could not find exact block. Trying looser match.")
    # Fallback: find by start and end markers
    start_marker = ".ut-le-tram-custom-design .stat-number {\n            font-size: 1.8rem;"
    end_marker = "gap: 30px;\n        }\n    }"
    
    start_pos = content.find(start_marker)
    end_pos = content.find(end_marker, start_pos)
    
    if start_pos != -1 and end_pos != -1:
        print(f"Found block from {start_pos} to {end_pos}")
        # Include the closing brace of the media query (length of end_marker)
        end_pos += len(end_marker)
        
        # Remove it
        content = content[:start_pos] + content[end_pos:]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Removed redundant block via markers.")
    else:
        print("Could not find block via markers.")
