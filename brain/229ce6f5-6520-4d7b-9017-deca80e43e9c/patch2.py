js = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\extracted\out\renderer\assets\index-Bd_Kd268.js'
c = open(js, 'r', encoding='utf-8').read()

# Patch sidebar to always show Vĩnh viễn
old = 'result.days ? Còn ${result.days} ngày : "Vĩnh viễn"'
new = '"Vĩnh viễn"'
# Use template literal syntax
import re
pattern = r'result\.days \? Còn \$\{result\.days\} ngày : "Vĩnh viễn"'
c = re.sub(pattern, '"Vĩnh viễn"', c)

open(js, 'w', encoding='utf-8').write(c)
print('Sidebar patched!')
