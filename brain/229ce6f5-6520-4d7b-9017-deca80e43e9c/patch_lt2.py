js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Find and replace the Hạn dùng display to add lightning class via innerHTML
old_header = 'Hạn dùng: " + toDisplayString("Lifetime")'
new_header = 'Hạn dùng: <span class=\"lightning-text\">Lifetime</span>"'
if old_header in c:
    c = c.replace(old_header, new_header)
    print('Patched header display')
else:
    print('Trying alternative approach...')
    # Just patch the text display to use innerHTML with v-html
    old = 'toDisplayString("Lifetime")'
    new = '"<span class=lightning-text>Lifetime</span>"'
    c = c.replace(old, new)

open(js, 'w', encoding='utf-8').write(c)
print('Done!')
