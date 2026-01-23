js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Wrap Lifetime text with lightning class
old = '"Lifetime"'
new = '"<span class=\\'lightning-text\\'>⚡ Lifetime ⚡</span>"'
c = c.replace(old, new, 1)

open(js, 'w', encoding='utf-8').write(c)
print('Lightning effect added to Lifetime!')
