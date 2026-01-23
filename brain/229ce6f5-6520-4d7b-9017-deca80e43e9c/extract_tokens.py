import os
import re

# Search for token-like patterns in LevelDB files
leveldb_dir = r'C:\Users\hp\AppData\Roaming\fastsora\Local Storage\leveldb'
tokens = []

if os.path.exists(leveldb_dir):
    for file in os.listdir(leveldb_dir):
        if file.endswith('.log') or file.endswith('.ldb'):
            try:
                with open(os.path.join(leveldb_dir, file), 'rb') as f:
                    content = f.read()
                    # Find sk-sora tokens
                    matches = re.findall(b'(sk-sora-[a-zA-Z0-9-]+)', content)
                    for match in matches:
                        token = match.decode('utf-8', errors='ignore')
                        if token not in tokens and len(token) > 10:
                            tokens.append(token)
            except:
                pass

if tokens:
    output_file = r'C:\Users\hp\.gemini\antigravity\brain\229ce6f5-6520-4d7b-9017-deca80e43e9c\saved_tokens.txt'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('=== TOKENS ĐÃ LƯU ===\n\n')
        for i, token in enumerate(tokens, 1):
            f.write(f'{i}. {token}\n')
    print(f'Found {len(tokens)} tokens, saved to: {output_file}')
else:
    print('No tokens found in LevelDB')
