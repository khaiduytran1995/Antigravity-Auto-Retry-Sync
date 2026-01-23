import sqlite3
import os

db_path = r'C:\Users\hp\AppData\Roaming\fastsora\.soratool\tokens.db'
output_file = r'C:\Users\hp\.gemini\antigravity\brain\229ce6f5-6520-4d7b-9017-deca80e43e9c\saved_tokens.txt'

if not os.path.exists(db_path):
    print(f'Database not found: {db_path}')
    exit()

try:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Get table names
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    print(f'Tables found: {tables}')
    
    # Try to get all data
    all_tokens = []
    for table in tables:
        table_name = table[0]
        try:
            cursor.execute(f'SELECT * FROM {table_name}')
            rows = cursor.fetchall()
            
            # Get column names
            cursor.execute(f'PRAGMA table_info({table_name})')
            columns = [col[1] for col in cursor.fetchall()]
            
            for row in rows:
                all_tokens.append({
                    'table': table_name,
                    'columns': columns,
                    'data': row
                })
        except Exception as e:
            print(f'Error reading table {table_name}: {e}')
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('=== TOKENS ĐÃ LƯU TỪ DATABASE ===\n\n')
        
        for i, item in enumerate(all_tokens, 1):
            f.write(f'\n--- Entry {i} ---\n')
            f.write(f'Table: {item["table"]}\n')
            for col, val in zip(item["columns"], item["data"]):
                f.write(f'  {col}: {val}\n')
    
    conn.close()
    print(f'Exported {len(all_tokens)} entries to: {output_file}')
    
except Exception as e:
    print(f'Error: {e}')
