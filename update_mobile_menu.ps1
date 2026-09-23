$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Define the old block regex to match the button list
    $pattern = '(?s)<div class="container mobile-menu-grid">.*?</div>'
    
    $replacement = '<div class="container mobile-menu-grid">
<button onclick="showPage(''home1'');closeMobile()">Home 1</button>
<button onclick="showPage(''home2'');closeMobile()">Home 2</button>
<button onclick="showPage(''about'');closeMobile()">About</button>
<button onclick="showPage(''services'');closeMobile()">Services</button>
<button onclick="showPage(''features'');closeMobile()">Features</button>
<button onclick="showPage(''industries'');closeMobile()">Industries</button>
<button onclick="showPage(''pricing'');closeMobile()">Pricing</button>
<button onclick="showPage(''contact'');closeMobile()">Contact</button>
<button onclick="showPage(''dashboard'');closeMobile()">Dashboard</button>
<div class="mobile-nav-controls" style="display:flex; align-items:center; gap:7px; margin-top:15px;">
<button class="icon-btn rtl-control" onclick="toggleRTL();closeMobile()" title="RTL" aria-label="Toggle RTL">
<i class="fa-solid fa-right-left"></i>
</button>
<button class="icon-btn theme-control" onclick="toggleTheme();closeMobile()" title="Theme" aria-label="Toggle theme">
<i class="fa-solid fa-moon"></i>
</button>
<button class="btn btn-primary login-nav" onclick="showPage(''login'');closeMobile()" style="flex:1; justify-content:center; padding:0 20px;">
<i class="fa-solid fa-right-to-bracket"></i> Login
</button>
</div>
</div>'

    $newContent = $content -replace $pattern, $replacement
    Set-Content -Path $file.FullName -Value $newContent -NoNewline
}
