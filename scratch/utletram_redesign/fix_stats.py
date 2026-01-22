
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\elementor_snippet.html"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We need to replace the section from where .stats-grid starts (around line 703)
# up to the end of the media query (around line 728)

start_index = -1
end_index = -1

for i, line in enumerate(lines):
    if ".ut-le-tram-custom-design .stats-grid {" in line:
        if start_index == -1:
            start_index = i
    
    if "@media (max-width: 768px) {" in line and start_index != -1:
        # We found the start of the media query, now look for its closing brace
        # But wait, we want to replace the whole block including the messed up part before it
        pass

# Let's find the start of .stat-number which is after the media query
stat_number_index = -1
for i, line in enumerate(lines):
    if ".ut-le-tram-custom-design .stat-number {" in line:
        # There are two of these now. The first one is inside the messed up block (line 715)
        # The second one is the original one (line 730)
        # We want the second one.
        pass

# Alternative approach: Read the whole content and use string replacement with context
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Identify the messed up block
# It starts with:
messed_up_start = """.ut-le-tram-custom-design .stats-grid {
            flex-direction: row;"""

# And the original media query block follows it.
# Let's construct the "bad" block we want to remove/replace.
# It seems I replaced:
# .ut-le-tram-custom-design .stats-grid {
#     display: flex;
#     justify-content: space-around;
#     flex-wrap: wrap;
#     gap: 40px;
# }
# with the new code.

# So I should look for the new code I inserted and replace it with the correct combo.

bad_code_snippet = """    .ut-le-tram-custom-design .stats-grid {
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 10px;
            justify-content: center;
        }
        
        .ut-le-tram-custom-design .stat-item {
            flex: 1;
            padding: 0 5px;
        }
        
        .ut-le-tram-custom-design .stat-number {
            font-size: 1.8rem;
        }
        
        .ut-le-tram-custom-design .stat-label {
            font-size: 0.8rem;
        }"""

# And the old media query that is still there
old_media_query = """    @media (max-width: 768px) {
        .ut-le-tram-custom-design .stats-grid {
            flex-direction: column;
            gap: 30px;
        }
    }"""

# The correct content should be:
correct_content = """    .ut-le-tram-custom-design .stats-grid {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
    }

    @media (max-width: 768px) {
        .ut-le-tram-custom-design .stats-grid {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            gap: 5px !important;
            justify-content: space-between !important;
        }

        .ut-le-tram-custom-design .stat-item {
            flex: 1;
            padding: 0 2px;
        }

        .ut-le-tram-custom-design .stat-number {
            font-size: 1.5rem !important;
            margin-bottom: 5px !important;
        }

        .ut-le-tram-custom-design .stat-label {
            font-size: 0.7rem !important;
            line-height: 1.2;
            display: block;
        }
    }"""

# Perform replacement
# Note: whitespace might be tricky, so let's try to match loosely or use the exact string from the view
# From view_file output:
# 703:     .ut-le-tram-custom-design .stats-grid {
# 704:             flex-direction: row;
# ...
# 721:         }

# I'll try to locate the start and end indices in the content string
start_marker = ".ut-le-tram-custom-design .stats-grid {"
end_marker = "    .ut-le-tram-custom-design .stat-number {" # The original one starts here

start_pos = content.find(start_marker, content.find(".stats-section")) # Start searching after stats section
end_pos = content.find(end_marker, start_pos)

if start_pos != -1 and end_pos != -1:
    print(f"Found block to replace from {start_pos} to {end_pos}")
    
    # Check if we are capturing the right thing
    # The block to replace includes the messed up stats-grid rule AND the old media query
    
    new_content = content[:start_pos] + correct_content + "\n\n" + content[end_pos:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("File fixed successfully.")
else:
    print("Could not find the block.")
