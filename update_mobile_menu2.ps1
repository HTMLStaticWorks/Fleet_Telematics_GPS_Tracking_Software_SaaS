$htmlFiles = Get-ChildItem -Filter *.html
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    $basename = $file.BaseName
    $pageId = $basename
    if ($basename -eq "index") {
        $pageId = "home1"
    }

    $pattern = '(?s)<div class="mobile-menu" id="mobileMenu">.*?</nav>'
    
    $replacement = @"
<div class="mobile-menu" id="mobileMenu">
<div class="container mobile-menu-grid">
<button onclick="showPage('home1');closeMobile()">Home 1</button>
<button onclick="showPage('home2');closeMobile()">Home 2</button>
<button onclick="showPage('about');closeMobile()">About</button>
<button onclick="showPage('services');closeMobile()">Services</button>
<button onclick="showPage('features');closeMobile()">Features</button>
<button onclick="showPage('industries');closeMobile()">Industries</button>
<button onclick="showPage('pricing');closeMobile()">Pricing</button>
<button onclick="showPage('contact');closeMobile()">Contact</button>
<button onclick="showPage('dashboard');closeMobile()">Dashboard</button>
<div class="mobile-nav-controls" style="display:flex; flex-direction:column; gap:10px; margin-top:15px; border-top:1px solid var(--border); padding-top:15px;">
<div style="display:flex; gap:10px;">
<button class="icon-btn rtl-control" onclick="toggleRTL();closeMobile()" title="RTL" aria-label="Toggle RTL" style="flex:1; height:42px;">
<i class="fa-solid fa-right-left"></i>
</button>
<button class="icon-btn theme-control" onclick="toggleTheme();closeMobile()" title="Theme" aria-label="Toggle theme" style="flex:1; height:42px;">
<i class="fa-solid fa-moon"></i>
</button>
</div>
<button class="btn btn-primary login-nav" onclick="showPage('login');closeMobile()" style="width:100%; justify-content:center; padding:0 20px; height:42px;">
<i class="fa-solid fa-right-to-bracket"></i> Login
</button>
</div>
</div>
</div>
</nav>
"@

    $targetString = "<button onclick=`"showPage('$pageId');closeMobile()`">"
    $activeString = "<button class=`"active`" onclick=`"showPage('$pageId');closeMobile()`">"
    
    $replacementWithActive = $replacement.Replace($targetString, $activeString)

    $newContent = $content -replace $pattern, $replacementWithActive
    Set-Content -Path $file.FullName -Value $newContent -NoNewline
}
