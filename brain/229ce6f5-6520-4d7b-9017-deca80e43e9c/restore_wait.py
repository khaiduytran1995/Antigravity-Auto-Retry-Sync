js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted_working\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Current: passes immediately
old_immediate = 'await Promise.resolve({ valid: true, days: 30001 });'

# New: wait for Supabase silently (no UI shown, just blocks)
new_wait_silent = '''await new Promise((resolve) => {
          const check = () => {
            if (window._SUPABASE_AUTHED === true) {
              resolve({ valid: true, days: 30001 });
            } else {
              setTimeout(check, 50);
            }
          };
          check();
        });'''

c = c.replace(old_immediate, new_wait_silent)

open(js, 'w', encoding='utf-8').write(c)
print('License now waits for Supabase silently (no UI)!')
