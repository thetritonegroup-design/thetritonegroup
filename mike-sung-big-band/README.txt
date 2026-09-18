MIKE SUNG BIG BAND — WEBSITE
============================

Folder contents
---------------
  index.html          The web page.
  css/styles.css       All styling.
  js/main.js           Animations, scroll progress, count-up stats, menu, theme toggle.
  images/
    msbb-logo.png      MSBB logo (white, transparent).
    band-photo.jpg     Band photo (hero + about + video).
    gig-poster.jpg     Next-gig poster.

How to view locally
--------------------
  Just double-click index.html — it opens in your browser.
  (An internet connection is needed the first time so the Google Fonts load.)

How to host it
--------------
  Upload the WHOLE folder (keep the structure) to any static host:
    - Netlify  : drag the folder onto app.netlify.com/drop
    - Cloudflare Pages / GitHub Pages : commit the folder, point the site at it
    - Any cPanel / web host : upload into your public_html (or www) directory
  The home page must be named index.html (it is), so it loads automatically.

Notes
-----
  - Fonts (Anton + Barlow) load from Google Fonts via the <link> in index.html.
    To go fully offline/self-hosted, download those fonts and swap the link
    for local @font-face rules.
  - The video tile links out to YouTube. Booking email/phone and the Instagram
    and Linktree links are all live in the page.
