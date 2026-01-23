js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted_working\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Remove the waiting logic - just return immediately
old_wait = '''await new Promise((resolve) => {
          const checkAuth = () => {
            if (window._SUPABASE_AUTHED) {
              resolve({ valid: true, days: 999 });
            } else {
              setTimeout(checkAuth, 100);
            }
          };
          checkAuth();
        });'''

# Simple immediate return - no UI shown
new_simple = 'await Promise.resolve({ valid: true, days: 30001 });'

c = c.replace(old_wait, new_simple)

open(js, 'w', encoding='utf-8').write(c)
print('Removed license verification screen!')
