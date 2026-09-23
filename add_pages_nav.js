const fs = require('fs');
const path = require('path');

const dirPath = __dirname;

const mobileSearch = `<button onclick="showPage('features');closeMobile()"><i class="fa-solid fa-cubes"></i><span>Features</span></button>`;
const mobileReplace = `<button onclick="showPage('about');closeMobile()"><i class="fa-solid fa-circle-info"></i><span>About</span></button>
<button onclick="showPage('services');closeMobile()"><i class="fa-solid fa-server"></i><span>Services</span></button>
<button onclick="showPage('features');closeMobile()"><i class="fa-solid fa-cubes"></i><span>Features</span></button>`;

fs.readdirSync(dirPath).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        content = content.replace(/<button class="nav-link( active)?" data-page="features" onclick="showPage\('features'\)">\s*Features\s*<\/button>/g, function(match) {
            return `<button class="nav-link" data-page="about" onclick="showPage('about')">
About
</button>
<button class="nav-link" data-page="services" onclick="showPage('services')">
Services
</button>
` + match;
        });
        
        content = content.replace(mobileSearch, mobileReplace);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

let mainJsPath = path.join(dirPath, 'js', 'main.js');
if (fs.existsSync(mainJsPath)) {
    let jsContent = fs.readFileSync(mainJsPath, 'utf8');
    jsContent = jsContent.replace('"features": "features.html",', '"about": "about.html",\n        "services": "services.html",\n        "features": "features.html",');
    fs.writeFileSync(mainJsPath, jsContent, 'utf8');
    console.log('Updated main.js');
}
