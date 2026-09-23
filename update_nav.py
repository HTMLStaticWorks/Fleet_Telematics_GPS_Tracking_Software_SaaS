import os
import re

dir_path = r"d:\September websites\Fleet Telematics & GPS Tracking Software (SaaS)"

desktop_pattern = re.compile(
    r'<button class="nav-link( active)?" data-page="home1" onclick="showPage\(\'home1\'\)">\s*Home\s*</button>\s*<button class="nav-link( active)?" data-page="home2" onclick="showPage\(\'home2\'\)">\s*Platform\s*</button>'
)

desktop_replacement = r"""<div class="nav-dropdown">
<button class="nav-link\1\2">
Home <i class="fa-solid fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>
</button>
<div class="nav-dropdown-menu">
<button class="nav-dropdown-item" onclick="showPage('home1')">Home 1</button>
<button class="nav-dropdown-item" onclick="showPage('home2')">Home 2</button>
</div>
</div>"""

mobile_pattern = re.compile(
    r'<button onclick="showPage\(\'home1\'\);closeMobile\(\)"><i class="fa-solid fa-house"></i><span>Home</span></button>\s*<button onclick="showPage\(\'home2\'\);closeMobile\(\)"><i class="fa-solid fa-layer-group"></i><span>Platform</span></button>'
)

mobile_replacement = r"""<button onclick="showPage('home1');closeMobile()"><i class="fa-solid fa-house"></i><span>Home 1</span></button>
<button onclick="showPage('home2');closeMobile()"><i class="fa-solid fa-layer-group"></i><span>Home 2</span></button>"""

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = desktop_pattern.sub(desktop_replacement, content)
            new_content = mobile_pattern.sub(mobile_replacement, new_content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")
