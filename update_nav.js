const fs = require('fs');
const path = require('path');

const dirPath = __dirname;

const desktopPattern = /<button class="nav-link( active)?" data-page="home1" onclick="showPage\('home1'\)">\s*Home\s*<\/button>\s*<button class="nav-link( active)?" data-page="home2" onclick="showPage\('home2'\)">\s*Platform\s*<\/button>/g;

const desktopReplacement = `<div class="nav-dropdown">
<button class="nav-link$1$2">
Home <i class="fa-solid fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>
</button>
<div class="nav-dropdown-menu">
<button class="nav-dropdown-item" onclick="showPage('home1')">Home 1</button>
<button class="nav-dropdown-item" onclick="showPage('home2')">Home 2</button>
</div>
</div>`;

const mobilePattern = /<button onclick="showPage\('home1'\);closeMobile\(\)"><i class="fa-solid fa-house"><\/i><span>Home<\/span><\/button>\s*<button onclick="showPage\('home2'\);closeMobile\(\)"><i class="fa-solid fa-layer-group"><\/i><span>Platform<\/span><\/button>/g;

const mobileReplacement = `<button onclick="showPage('home1');closeMobile()"><i class="fa-solid fa-house"></i><span>Home 1</span></button>
<button onclick="showPage('home2');closeMobile()"><i class="fa-solid fa-layer-group"></i><span>Home 2</span></button>`;

fs.readdirSync(dirPath).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(desktopPattern, desktopReplacement);
        newContent = newContent.replace(mobilePattern, mobileReplacement);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
