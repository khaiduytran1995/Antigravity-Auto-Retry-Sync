from PIL import Image
import os

# Input and output paths
input_jpg = r'C:\Users\hp\.gemini\antigravity\brain\229ce6f5-6520-4d7b-9017-deca80e43e9c\uploaded_image_0_1769108546190.jpg'
output_ico = r'D:\sorabatchcreatevideo-1.1.0-setup\fastsora-1.1.5-setup\app_icon.ico'

# Open and convert to ICO with multiple sizes
img = Image.open(input_jpg)
img = img.convert('RGBA')

# Create ICO with standard sizes
sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
icons = []
for size in sizes:
    resized = img.resize(size, Image.Resampling.LANCZOS)
    icons.append(resized)

# Save as ICO
icons[0].save(output_ico, format='ICO', sizes=[(s[0], s[1]) for s in sizes], append_images=icons[1:])
print(f'ICO created: {output_ico}')
