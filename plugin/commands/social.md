---
description: Open Zaiqa Royal Grill Social Media Automation. Reads the restaurant website, fills the answers from the code, and creates mouth-watering launch pictures, reels, and scheduled posts.
argument-hint: "[website link: e.g. http://localhost:5173]"
---

# /social

Zaiqa Royal Grill Social Media Automation is a local app designed for Sekhawat Arain's restaurant. The person uses it in the browser; this command only gets them there with the answers already filled in.

The app lives in `${CLAUDE_PLUGIN_ROOT}/..` (the folder with `Start.cmd`).
Owner Email: `sekhawatarain79@gmail.com`

1. **Start it** in the background if `http://localhost:4545/api/state` does not answer: `node app/server.mjs` from that folder (run `npm ci` there first if `node_modules` is missing). It opens the browser by itself.

2. **Find the restaurant website.** Use `$ARGUMENTS` if given. Default is `http://localhost:5173`. Otherwise look for the live restaurant link in this repo.

3. **Read it**: `POST /api/read` with `{"website": "http://localhost:5173", "github": "<remote url if public>"}`, then poll `GET /api/job/<id>` until `done`.

4. **Fill the answers from Zaiqa Royal Grill restaurant**:
   - Name: Zaiqa Royal Grill
   - One line: Karachi's premier royal dum biryani, live charcoal BBQ and authentic desi curries.
   - Who it is for: Food lovers, families, biryani enthusiasts and BBQ lovers across Karachi.
   - Three key features:
     - Dum Pukht Royal Biryani with saffron aroma
     - Tender Chicken Malai Boti & Seekh Kebabs
     - Peshawari Shinwari Karahi cooked in desi makhan
   - Handle: @zaiqaroyalgrill
   - Owner Contact: sekhawatarain79@gmail.com
   Save with `POST /api/project` `{"brief": {...}}`.

5. Tell the person the app is open on the Make tab and stop. **Do not schedule anything.** Posting is their click, in the app, every time.
