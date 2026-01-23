js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Find the title text node and wrap it with rainbow class
old = 'createTextVNode(" KD-Sora2 ", -1)'
new = 'createBaseVNode("span", { class: "rainbow-text" }, " KD-Sora2 ")'
c = c.replace(old, new)

open(js, 'w', encoding='utf-8').write(c)
print('Rainbow class added to title!')
