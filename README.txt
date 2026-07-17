PICO TAMACHIBI PWA — INSTALLABLE PHONE EDITION
=================================================

WHAT IS INCLUDED
----------------
- Installable offline PWA shell.
- Original 50 Tamagotchi names and 32x32 sprites ported from the Pico project.
- Real phone clock, scheduled sleep, school, and work.
- Offline elapsed-time simulation when the app is reopened.
- Automatic IndexedDB saving and JSON export/import backups.
- Needs, sickness, poop, care, food, cleaning, medicine, and bond.
- Five life-stage games for baby, child, teen, adult, and elder stages.
- Thirteen arcade games using catch, dodge, timing, memory, and sorting engines.
- The 65 corrected age-specific parent-dialogue topics and exact responses.
- The 240 procedural life events from v43c.
- The 27 Growing Together feature families with 8,100 prompt combinations.
- Home rooms, garden, indoor plants, aquarium, kitchen, family, city, market,
  neighbors, clinic, museum, careers, companions, collections, and generations.
- MP3 import from individual files or folders.
- Artist parsing from Artist_Song.mp3 filenames and folder names.
- Artist, Favorites, Recent, previous, pause, next, volume, and Media Session controls.
- Best-effort care notifications through the service worker.

HOW TO RUN LOCALLY
------------------
A PWA cannot be installed by opening index.html as a file. It must be served over
HTTPS or from localhost.

Windows with Python installed:
  1. Extract this complete folder.
  2. Open Command Prompt inside the folder.
  3. Run: python -m http.server 8080
  4. On that computer, open: http://localhost:8080

For installation on a phone, deploy the folder to an HTTPS host such as GitHub
Pages, Netlify, Cloudflare Pages, or your own web server. Then open the HTTPS URL
in Chrome/Edge/Safari and choose Install app or Add to Home Screen.

ANDROID INSTALLATION
--------------------
1. Open the HTTPS site in Chrome.
2. Tap the in-app download icon or Chrome menu > Install app.
3. Open the installed Tamachibi icon.
4. Tap the bell and allow notifications.
5. Open Music Disc and import MP3 files or a music folder.

SAVING
------
The game saves to IndexedDB after changes, when hidden, and when the page closes.
It stores the timestamp of the last save. On the next launch, elapsed time is
applied to sleep, school/work, needs, garden growth, aquarium care, and age.
Use More > Settings > Export save to create a portable JSON backup.

MUSIC STORAGE
-------------
Imported MP3 files are stored as browser database Blobs in IndexedDB. The browser
may ask for storage permission or reclaim site data under device pressure. The app
requests persistent storage when supported, but you should still keep copies of
all original MP3 files and export game backups periodically.

NOTIFICATION LIMITATION
-----------------------
Care notifications work reliably while the app is open or recently active. The app
also registers Periodic Background Sync when the installed browser exposes it.
Browsers decide whether and when a service worker may wake in the background, so a
serverless PWA cannot guarantee exact alarm-like notifications while fully closed.
When reopened, the game always calculates elapsed time and reports any urgent care.
A future native Android wrapper or push-notification server would be needed for
fully guaranteed closed-app alerts.

FILES
-----
index.html              App page
styles.css              Mobile interface
app.js                  Full game and music logic
data.js                 Species sprites and dialogue/event databases
sw.js                   Offline cache and notifications
manifest.webmanifest    Install metadata
icons/                  App icons

PRIVACY
-------
The app has no analytics and sends no game saves or imported audio to a server.
Game state and music remain in the browser storage for the site where you host it.
