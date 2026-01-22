
import os

file_path = r"c:\Users\hp\.gemini\antigravity\scratch\utletram_redesign\elementor_snippet.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Stats Grid Mobile
# Find the block for @media (max-width: 768px) around line 710
stats_block_start = content.find(".ut-le-tram-custom-design .stats-grid {", content.find("@media (max-width: 768px)"))
if stats_block_start != -1:
    # Find the closing brace for this rule
    stats_block_end = content.find("}", stats_block_start)
    if stats_block_end != -1:
        old_stats_rule = content[stats_block_start:stats_block_end+1]
        print(f"Found stats rule: {old_stats_rule}")
        
        new_stats_rule = """.ut-le-tram-custom-design .stats-grid {
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
        
        content = content.replace(old_stats_rule, new_stats_rule)
        print("Replaced stats rule.")

# 2. Update Section Title Mobile
# Find .ut-le-tram-custom-design .section-title inside @media (max-width: 480px)
# It's around line 806
mobile_media_start = content.find("@media (max-width: 480px)")
if mobile_media_start != -1:
    section_title_start = content.find(".ut-le-tram-custom-design .section-title {", mobile_media_start)
    if section_title_start != -1:
        section_title_end = content.find("}", section_title_start)
        if section_title_end != -1:
            old_title_rule = content[section_title_start:section_title_end+1]
            print(f"Found title rule: {old_title_rule}")
            
            new_title_rule = """.ut-le-tram-custom-design .section-title {
            margin-bottom: 0.2rem !important;
            font-size: 1.6rem !important;
            line-height: 1.3 !important;
        }"""
            
            content = content.replace(old_title_rule, new_title_rule)
            print("Replaced title rule.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("File updated successfully.")
