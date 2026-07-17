PICO TAMACHIBI — FAITHFUL PHONE PWA PORT
============================================================

This project is a fresh, faithful phone-oriented port of the current v48 Pico
Tamachibi game. It preserves the original monochrome 128x64 game presentation,
uses a separate 128x32-style needs display, starts from a four-egg selection,
and expands the physical device controls for a phone without replacing the
original three-button and view-dial interaction model.

CORE CONTENT INCLUDED
---------------------
- Four-egg selection and five-minute egg hatch.
- Original stage timing: Baby day 0-1, Child day 1-3, Teen day 3-6,
  Adult day 6-20, Elder day 20 onward.
- Exact 50 adult/elder 32x32 sprites extracted from the v48 source.
- Faithful baby, child, and teen growth silhouettes.
- Food, happiness, energy, cleanliness, health, discipline, sickness,
  poop, care mistakes, bond, trust, school, work, sleep, offline progression.
- Potentiometer-style three-stop phone slider reserved for Tama/Home/City.
- Focused one-item monochrome main menu navigated with D0/D1/D2.
- Dynamic home layouts with no empty spouse placeholder.
- Garden, indoor plants, aquarium, cooking, rooms, hats, city, neighbors,
  clinic, careers, family, children, companion, generations and album.
- 13 arcade games and 25 life-stage schedule games.
- 65 age-coherent parent dialogue topics.
- 240 procedural life events.
- 27 Growing Together feature families and the source scenario database.
- Paradise planet level, missions, fields, toys, egg hunt, space travel,
  cell treatment and code terminal.
- IndexedDB autosave, elapsed-time catch-up, JSON export/import and reset.
- Imported MP3 storage, Artist_Song parsing, artist browsing, favorites,
  recent songs, volume, previous/pause/next and Media Session controls.
- Installable offline PWA shell and best-effort care notifications.

IMPORTANT PWA LIMITATION
------------------------
A serverless PWA cannot guarantee exact closed-app care alerts. Browsers decide
when service workers or periodic background sync may run. The game always uses
the saved timestamp to apply exact elapsed-time progression when reopened.

HOW TO TEST
-----------
Do not open index.html directly as a file.

Windows:
  Double-click serve.bat, then open http://localhost:8080

macOS/Linux:
  Run ./serve.sh, then open http://localhost:8080

PHONE INSTALLATION
------------------
Upload the contents of this folder to GitHub Pages, Netlify, Cloudflare Pages,
or another HTTPS static host. Open the HTTPS URL in Chrome on Android and choose
Install app / Add to Home screen.

FIRST START
-----------
The first launch has no ready-made baby. It shows four original-style eggs.
Use D0 and D2 to browse and D1 to choose. The selected egg hatches after one
five-minute life tick, matching the Pico project.

CONTROL MODEL
-------------
View Dial slider:
  Tama / Home / City normally
  Music volume during Music Disc playback

D0:
  Previous item, room, place or previous song
D1:
  Select/open, pause/resume during music
D2:
  Next item, room, place or next song
Hold D2:
  Back/close current device mode; stop music and return to selection

DATA COUNTS
-----------
Species sprites: 50
Parent dialogue topics: 65
Procedural life events: 240
Growing Together feature families: 27
Arcade games: 13
Life-stage schedule games: 25
