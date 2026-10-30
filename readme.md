# ZANA Kids Coloring World

Interactive kids coloring and early learning PWA for iPad, Apple Pencil, tablets, phones, and desktop browsers, with local child profiles and user-isolated saves.

## What Is Included

| File | Purpose |
|---|---|
| `index.html` | Main PWA app shell and book library |
| `app.css` | Responsive app UI, toolbar, library cards, reader layout |
| `app.js` | Book loading, child profiles, isolated progress, coloring tools, drawing layer, save/reset/undo/redo |
| `manifest.webmanifest` | Add to Home Screen / install metadata |
| `service-worker.js` | Offline cache for the app and all book files |
| `offline.html` | Offline fallback page |
| `icon.svg` | App icon |
| `netlify.toml` | Netlify static hosting config |

## Books

| File | Book | Mode | Pages |
|---|---|---|---:|
| `sea-animals-coloring-book.html` | Sea Animals Coloring Book | Coloring | 16 |
| `african-animals-coloring-book.html` | African Wild Animals Coloring Book | Coloring | 16 |
| `princess-coloring-book.html` | Princess Coloring Book | Coloring | 16 |
| `pony-unicorn-coloring-book.html` | Pony & Unicorn Coloring Book | Coloring | 16 |
| `occupations-coloring-book.html` | My Future Job Coloring Book | Coloring | 16 |
| `prek-skills-workbook.html` | Pre-K Skills Workbook | Learning | 51 |
| `preschool-workbook-Ages 3–5.html` | My First Preschool Activity Book | Learning | 3 |

Total: 7 premium PNG books, 105 pages.


## Premium PNG Style-Master Books

The app library now uses the generated style-master PNG page sets for:

- Sea Animals Premium Coloring Book
- African Animals Premium Coloring Book
- Princess Premium Coloring Book
- Pony & Unicorn Premium Coloring Book
- Children in Harboland Coloring Book
- ZANA Kid Perfume Everyday Life Coloring Book
- ZANA Kid Perfume Everyday Life Coloring Book

These books render as full-page PNG artwork with a canvas coloring layer for Apple Pencil, touch, and desktop pointer input. Premium PNG books now use a canvas compositor: a dedicated paint layer is composited with the original line-art layer so the child sees real coloring on the canvas while black outlines remain on top.
## Smart Region Lock

Premium PNG books use Tap Fill as the main coloring mode. Tapping a closed line-art area detects the raster region, creates a mask, fills only inside that region, and keeps the black line art visually on top. Brush and eraser are secondary tools and are clipped to the selected region.

## App Features

- Library home with cover previews, page count, age label, user-specific progress, Start, and Continue.
- Coloring Mode with palette, fill bucket, brush, eraser, undo, redo, reset, zoom, page navigation, and artwork download.
- Learning Mode for workbook pages with brush/eraser tracing, undo, redo, reset, zoom, page navigation, and progress.
- Child profile switcher with isolated localStorage keys for progress, fill colors, and canvas strokes.
- Uses the original printable HTML books as source artwork, so each book can still be opened and printed directly.
- Works as a static site with no build step.
- Offline-ready after the first successful online visit.
- No external font dependency in the app shell, so the PWA can load cleanly offline.

## Local Preview

Run a local static server from this folder:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8765/index.html
```

## Netlify Deploy

Upload this folder or `kids-book-netlify-v2-back-home.zip` to Netlify. No build command is required.

Recommended settings:

- Build command: leave empty
- Publish directory: `.`

## QA Notes

Verified locally on `http://127.0.0.1:8765/`:

- Library renders 7 book cards.
- Total page count shows 105.
- Reader opens image-based premium books with PNG artwork and canvas compositor.
- Fill Bucket applies selected color to SVG shapes.
- Brush tool draws and saves state.
- Pre-K workbook opens in Learning Mode and hides Fill Bucket.
- Console error check returned no errors during smoke test.


## v15 canvas coloring

- Service worker pre-caches only the app shell, not all 80 premium PNG pages.
- Premium pages are cached on demand after first view.
- Premium PNG pages render through a canvas compositor: white paper, saved paint layer, then original black line art.
- Tap Fill remains the main tool; Brush and Eraser stay clipped to the selected Smart Region.


## v15 book library update

- Added the ZANA Kid Perfume everyday-life set as a 9-page premium PNG coloring book.
- Total library count is now 6 books / 89 pages.


## v16 book library update

- Added ZANA Kid Perfume Everyday Life Coloring Book as a 16-page premium PNG coloring book.
- The new princess set uses the real Kid Perfumed bottle and box as repeated line-art product motifs.
- Total library count is now 7 books / 105 pages.

## v17 unlock-code access

- Sea Animals was the free demo book through v19. In v20 it is locked and ZANA Kid Perfume Everyday Life is the featured free book.
- Other premium books require a one-book unlock code saved to the customer's device.
- Current unlock codes:
  - African Animals: ZANA-AFRICA-2026
  - Princess: ZANA-PRINCESS-2026
  - Pony & Unicorn: ZANA-PONY-2026
  - Children in Harboland: ZANA-HARBOLAND-2026
  - ZANA Kid Perfume Everyday Life: ZANA-KIDPERFUME-2026
  - ZANA Kid Perfume Everyday Life: ZANA-PERFUMEPRINCESS-2026

Static unlock codes are suitable for lightweight purchase incentives. For one-time, non-shareable customer codes, add a backend or edge function to validate and redeem codes server-side.


## v18 customer-ready unlock flow

- Library copy now explains that Sea Animals is the free demo and purchased books require store-provided unlock codes.
- Locked book cards show Thai unlock labels, code input, and clearer error messages.
- Correct codes now open the purchased book immediately after unlocking.
- Direct links can include ?code=CODE or ?unlock=CODE to unlock the matching book on the customer's device, then the code is removed from the URL.
- This remains a lightweight static unlock gate. For true one-time, non-shareable redemption, move code validation to a backend or Cloudflare Worker with a redemption database.


## v19 Thank you card free-book campaign

- Added 100 static Thank you card codes from ZANA-THANKYOU-0001 to ZANA-THANKYOU-0100.
- These codes unlock ZANA Kid Perfume Everyday Life Coloring Book.
- Admin tracker: admin/thankyou-card-unlock-codes.csv.
- Admin SOP: admin/thankyou-card-free-book-sop.md.
- Customer claim links support direct unlock with ?code=ZANA-THANKYOU-0001.
- Production URL should be shared as https://coloring.zanadynasty.site/?v=20.

This remains a lightweight frontend unlock system. Move to Cloudflare Worker + database redemption when one-time, non-shareable codes are required.


## v20 featured brand book

- ZANA Kid Perfume Everyday Life Coloring Book is now the first book in the library.
- ZANA Kid Perfume Everyday Life is the free/featured customer memory book.
- Sea Animals Premium Coloring Book is now locked and requires ZANA-SEA-2026 to unlock.
- Thank you card claim links were updated to use ?v=20.
- Production URL should be shared as https://coloring.zanadynasty.site/?v=20.

