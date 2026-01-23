js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()
old = 'licenseDays.value > 3e4 ? "Lifetime" : licenseDays.value + " days left"'
new_str = '"Lifetime"'
c = c.replace(old, new_str)
open(js, 'w', encoding='utf-8').write(c)
print('License patched!')
