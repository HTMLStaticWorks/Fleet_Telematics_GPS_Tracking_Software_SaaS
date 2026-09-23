const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const featuresHtml = fs.readFileSync(path.join(dirPath, 'features.html'), 'utf8');

// Extract navbar and head
const navSplit = featuresHtml.split('<!-- =========================================================\nFEATURES\n========================================================= -->');
let headerHtml = navSplit[0];
// Ensure the active class is reset in headerHtml for the new pages
headerHtml = headerHtml.replace('class="nav-link active" data-page="features"', 'class="nav-link" data-page="features"');

// Extract footer
const footerSplit = featuresHtml.split('<!-- =========================================================\nFOOTER\n========================================================= -->');
const footerHtml = '\n<!-- =========================================================\nFOOTER\n========================================================= -->' + footerSplit[1];

// Generate about.html
const aboutHeader = headerHtml.replace('class="nav-link" data-page="about"', 'class="nav-link active" data-page="about"');
const aboutBody = `
<!-- =========================================================
ABOUT
========================================================= -->
<main id="about" class="page active">
<section class="hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=90') center/cover no-repeat;">
<div class="container">
<div class="hero-copy" style="text-align: center; max-width: 800px; margin: 0 auto;">
<span class="eyebrow" style="color: #05d7ff; border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.1);">
About Us
</span>
<h1 style="color: #fff;">
Driving the future of <span>fleet management.</span>
</h1>
<p style="color: rgba(255,255,255,0.9);">
We're on a mission to simplify operations for fleets worldwide.
</p>
<div class="hero-buttons" style="justify-content: center;">
<button class="btn btn-primary" onclick="showPage('contact')">
Join Our Team
</button>
</div>
</div>
</div>
</section>

<!-- SECTION 1 -->
<section class="section">
<div class="container">
<div class="emoji-panel">
<div class="emoji">🌍</div>
<h2>Our Global Mission</h2>
<p style="max-width:650px;margin:9px auto 19px;color:var(--muted);font-size:16px;">
FleetX was founded with a singular goal: to provide unparalleled visibility and control for commercial fleets across the globe, ensuring safety, efficiency, and sustainability.
</p>
</div>
</div>
</section>

<!-- SECTION 2 -->
<section class="section">
<div class="container">
<div class="section-title">
<span class="eyebrow">Core Values</span>
<h2>Built on trust and innovation.</h2>
</div>
<div class="info-band">
<div class="info-box">
<div class="info-number">01</div>
<h3>Transparency</h3>
<p>We believe in open data and clear insights for every vehicle in your fleet.</p>
</div>
<div class="info-box">
<div class="info-number">02</div>
<h3>Reliability</h3>
<p>Uptime is critical. Our systems are built to ensure constant connectivity.</p>
</div>
<div class="info-box">
<div class="info-number">03</div>
<h3>Innovation</h3>
<p>Continuously evolving our telematics algorithms to stay ahead of the curve.</p>
</div>
</div>
</div>
</section>

<!-- SECTION 3 -->
<section class="section" style="background: rgba(8,108,255,0.03);">
<div class="container">
<div class="section-title">
<span class="eyebrow">By The Numbers</span>
<h2>Our Impact</h2>
</div>
<div class="stat-strip">
<div class="stat-box">
<h3>10k+</h3>
<span>Active Fleets</span>
</div>
<div class="stat-box">
<h3>50B+</h3>
<span>Miles Tracked</span>
</div>
<div class="stat-box">
<h3>99.99%</h3>
<span>System Uptime</span>
</div>
<div class="stat-box">
<h3>120+</h3>
<span>Countries Served</span>
</div>
</div>
</div>
</section>

<!-- SECTION 4 -->
<section class="section">
<div class="container">
<div class="emoji-panel" style="background: linear-gradient(135deg, var(--surface), rgba(8,108,255,0.1));">
<div class="emoji">🚀</div>
<h2>Ready to join the journey?</h2>
<p style="max-width:650px;margin:9px auto 19px;color:var(--muted);font-size:16px;">
We are constantly looking for bright minds to help us build the next generation of logistics technology.
</p>
<button class="btn btn-primary" onclick="showPage('contact')" style="width: auto; padding: 0 28px; white-space: nowrap;">
View Open Positions
</button>
</div>
</div>
</section>
</main>
`;
fs.writeFileSync(path.join(dirPath, 'about.html'), aboutHeader + aboutBody + footerHtml, 'utf8');

// Generate services.html
const servicesHeader = headerHtml.replace('class="nav-link" data-page="services"', 'class="nav-link active" data-page="services"');
const servicesBody = `
<!-- =========================================================
SERVICES
========================================================= -->
<main id="services" class="page active">
<section class="hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=90') center/cover no-repeat;">
<div class="container">
<div class="hero-copy" style="text-align: center; max-width: 800px; margin: 0 auto;">
<span class="eyebrow" style="color: #05d7ff; border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.1);">
Our Services
</span>
<h1 style="color: #fff;">
Comprehensive solutions for <span>your fleet.</span>
</h1>
<p style="color: rgba(255,255,255,0.9);">
From implementation to ongoing support, we provide end-to-end services to ensure your success.
</p>
<div class="hero-buttons" style="justify-content: center;">
<button class="btn btn-primary" onclick="showPage('contact')">
Get in Touch
</button>
</div>
</div>
</div>
</section>

<!-- SECTION 1 -->
<section class="section">
<div class="container">
<div class="showcase">
<div class="showcase-content">
<span class="eyebrow">Service 01</span>
<h2>Implementation & Onboarding</h2>
<p>
Our expert deployment team works on-site and remotely to ensure every tracker is installed correctly, and your command center is fully configured from day one.
</p>
<ul class="check-list">
<li><i class="fa-solid fa-check"></i> Hardware installation guidance</li>
<li><i class="fa-solid fa-check"></i> Software configuration & tailoring</li>
<li><i class="fa-solid fa-check"></i> Legacy data migration</li>
</ul>
</div>
<div class="showcase-visual" style="border-radius: 26px; overflow: hidden; height: 350px;">
<img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?auto=format&fit=crop&w=800&q=80" alt="Implementation" style="width: 100%; height: 100%; object-fit: cover;">
</div>
</div>
</div>
</section>

<!-- SECTION 2 -->
<section class="section" style="background: rgba(8,108,255,0.03);">
<div class="container">
<div class="showcase" style="flex-direction: row-reverse;">
<div class="showcase-content">
<span class="eyebrow">Service 02</span>
<h2>Custom API Integrations</h2>
<p>
Connect FleetX with your existing ERP, payroll, or routing software. Our engineering team provides custom API middleware to keep your data flowing seamlessly.
</p>
<ul class="check-list">
<li><i class="fa-solid fa-check"></i> REST and GraphQL architectures</li>
<li><i class="fa-solid fa-check"></i> Real-time webhooks</li>
<li><i class="fa-solid fa-check"></i> Secure authentication flows</li>
</ul>
</div>
<div class="showcase-visual" style="border-radius: 26px; overflow: hidden; height: 350px;">
<img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80" alt="API code" style="width: 100%; height: 100%; object-fit: cover;">
</div>
</div>
</div>
</section>

<!-- SECTION 3 -->
<section class="section">
<div class="container">
<div class="info-band">
<div class="info-box">
<div class="info-number">03</div>
<h3>Training Workshops</h3>
<p>On-site or virtual training for your dispatchers and fleet managers to maximize platform utilization.</p>
</div>
<div class="info-box">
<div class="info-number">04</div>
<h3>Strategy Consulting</h3>
<p>Data analysts review your fleet's metrics quarterly to identify fuel and routing optimizations.</p>
</div>
<div class="info-box">
<div class="info-number">05</div>
<h3>24/7 Support</h3>
<p>Dedicated account managers and technical support available around the clock.</p>
</div>
</div>
</div>
</section>

<!-- SECTION 4 -->
<section class="section">
<div class="container">
<div class="emoji-panel">
<div class="emoji">🤝</div>
<h2>Partner with FleetX</h2>
<p style="max-width:650px;margin:9px auto 19px;color:var(--muted);font-size:16px;">
Let our services team act as an extension of your fleet operations.
</p>
<button class="btn btn-primary" onclick="showPage('pricing')" style="width: auto; padding: 0 28px; white-space: nowrap;">
View Service Packages
</button>
</div>
</div>
</section>
</main>
`;
fs.writeFileSync(path.join(dirPath, 'services.html'), servicesHeader + servicesBody + footerHtml, 'utf8');

console.log("about.html and services.html created successfully.");
