js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted_working\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Find and modify license bypass to wait for Supabase auth
old_bypass = 'await Promise.resolve({ valid: true, days: 999 });'

# New logic: wait for window._SUPABASE_AUTHED flag (set after login)
new_bypass = '''await new Promise((resolve) => {
          const checkAuth = () => {
            if (window._SUPABASE_AUTHED) {
              resolve({ valid: true, days: 999 });
            } else {
              setTimeout(checkAuth, 100);
            }
          };
          checkAuth();
        });'''

c = c.replace(old_bypass, new_bypass)

open(js, 'w', encoding='utf-8').write(c)
print('License bypass now waits for Supabase auth!')
