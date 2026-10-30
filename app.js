const BOOKS = [
  { id: 'sea', format: 'image', folder: 'premium-pages/sea-animals-premium', coverImage: 'covers/sea.png', title: 'Sea Animals Premium Coloring Book', thai: 'Sea Animals Premium', pages: 16, imageFiles: ['01-cover.png', '02-dolphin.png', '03-octopus.png', '04-sea-turtle.png', '05-starfish-shells.png', '06-crab.png', '07-whale.png', '08-seahorse.png', '09-jellyfish.png', '10-shark.png', '11-clownfish.png', '12-coral-reef.png', '13-stingray.png', '14-narwhal.png', '15-fish-friends.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#83d8f7', b: '#2f96d8', description: 'Premium PNG coloring pages generated from the Sea Animals style master.' },
  { id: 'african', format: 'image', folder: 'premium-pages/african-animals-premium', coverImage: 'covers/african.png', title: 'African Animals Premium Coloring Book', thai: 'African Animals Premium', pages: 16, imageFiles: ['01-cover.png', '02-lion.png', '03-elephant.png', '04-giraffe.png', '05-zebra.png', '06-hippo.png', '07-rhino.png', '08-cheetah.png', '09-crocodile.png', '10-monkey.png', '11-ostrich.png', '12-meerkat.png', '13-warthog.png', '14-acacia-tree.png', '15-baby-elephant.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#ffd166', b: '#ef7b45', description: 'Premium savanna animal pages generated from the African Animals style master.' },
  { id: 'princess', format: 'image', folder: 'premium-pages/princess-premium', coverImage: 'covers/princess.png', title: 'Princess Premium Coloring Book', thai: 'Princess Premium', pages: 16, imageFiles: ['01-cover.png', '02-ball-gown.png', '03-royal-crown.png', '04-castle.png', '05-magic-wand.png', '06-glass-slipper.png', '07-carriage.png', '08-unicorn.png', '09-jewels.png', '10-royal-ball.png', '11-garden.png', '12-dove.png', '13-treasure.png', '14-mermaid.png', '15-throne.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#ffb3d9', b: '#8067d8', description: 'Premium princess pages generated from the Princess style master.' },
  { id: 'pony', format: 'image', folder: 'premium-pages/pony-unicorn-premium', coverImage: 'covers/pony.png', title: 'Pony & Unicorn Premium Coloring Book', thai: 'Pony and Unicorn Premium', pages: 16, imageFiles: ['01-cover.png', '02-pony.png', '03-unicorn.png', '04-unicorn-head.png', '05-running-pony.png', '06-rainbow.png', '07-flower-crown.png', '08-baby-pony.png', '09-winged-unicorn.png', '10-meadow.png', '11-magic-horn.png', '12-two-ponies.png', '13-clouds.png', '14-saddle.png', '15-magic-pattern.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#bdf4e7', b: '#f58bd0', description: 'Premium pony and unicorn pages generated from the Unicorn Pony style master.' },
  { id: 'harboland', format: 'image', folder: 'premium-pages/children-in-harboland-premium', coverImage: 'covers/harboland.png', title: 'Children in Harboland Coloring Book', thai: 'Indoor Playland Premium', pages: 16, imageFiles: ['01-cover.png', '02-slide.png', '03-ball-pit.png', '04-climb.png', '05-blocks.png', '06-tunnel.png', '07-bridge.png', '08-trampoline.png', '09-zipline.png', '10-play-tower.png', '11-little-chef.png', '12-building-blocks.png', '13-balloon-party.png', '14-safety-mats.png', '15-play-pattern.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#ffcf33', b: '#55caa8', description: 'Premium indoor playland pages generated from the Children in Harboland style master.' },
  { id: 'kid-perfume', format: 'image', folder: 'premium-pages/kid-perfume-everyday-life', coverImage: 'covers/kid-perfume.png', title: 'ZANA Kid Perfume Everyday Life Coloring Book', thai: 'ZANA Kid Perfume Everyday Life', pages: 9, imageFiles: ['cover.png', 'page-01-good-morning.png', 'page-02-good-night.png', 'page-03-helping-at-home.png', 'page-04-play-time.png', 'page-05-snack-time.png', 'page-06-getting-ready.png', 'page-07-off-to-school.png', 'page-08-zana-coloring-book.png'], age: 'Ages 2+', mode: 'coloring', a: '#ffd6e8', b: '#ffcf33', description: 'ZANA Kid Perfume everyday-life coloring pages for customer demos and brand engagement.' },
  { id: 'kid-perfume-zoo', format: 'image', folder: 'premium-pages/kid-perfume-zoo-adventure', coverImage: 'covers/kid-perfume-zoo.png', title: 'ZANA Kid Perfume Zoo Adventure Coloring Book', thai: 'ZANA Kid Perfume เที่ยวสวนสัตว์', pages: 16, imageFiles: ['01-cover.png', '02-zoo-entrance.png', '03-giraffe-feeding.png', '04-elephant-splash.png', '05-lion-family.png', '06-penguin-parade.png', '07-monkey-fun.png', '08-flamingo-walk.png', '09-panda-picnic.png', '10-hippo-pond.png', '11-zebra-zoo-tram.png', '12-koala-keeper.png', '13-meerkat-lookout.png', '14-zana-zoo-shop.png', '15-zoo-group-photo.png', '16-great-job-zoo-explorer.png'], age: 'Ages 3-8', mode: 'coloring', a: '#bdf4e7', b: '#ffd166', description: 'A clean, child-friendly zoo adventure featuring ZANA Kid Perfume mascots, animals, and the real product bottle.' },
  { id: 'kid-perfume-halloween', format: 'image', folder: 'premium-pages/kid-perfume-halloween-adventure', coverImage: 'covers/kid-perfume-halloween.png', title: 'ZANA Kid Perfume Halloween Adventure Coloring Book', thai: 'ZANA Kid Perfume ฮาโลวีนแสนสนุก', pages: 16, imageFiles: ['01-cover.png', '02-pumpkin-gate.png', '03-pumpkin-decorating.png', '04-trick-or-treat.png', '05-friendly-ghost.png', '06-broom-ride.png', '07-pumpkin-tea-party.png', '08-corn-maze.png', '09-jack-o-lantern.png', '10-candy-cauldron.png', '11-baby-bat.png', '12-candy-castle.png', '13-costume-parade.png', '14-halloween-gift-shop.png', '15-group-photo.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#ffcf66', b: '#9b7ede', description: 'A cheerful, non-scary Halloween adventure with ZANA Kid Perfume mascots, friendly costumes, pumpkins, and the real product bottle.' },
  { id: 'kid-perfume-christmas', format: 'image', folder: 'premium-pages/kid-perfume-christmas-adventure', coverImage: 'covers/kid-perfume-christmas.png', title: 'ZANA Kid Perfume Christmas Adventure Coloring Book', thai: 'ZANA Kid Perfume คริสต์มาสแสนสุข', pages: 16, imageFiles: ['01-title-page.png', '02-decorate-tree.png', '03-gingerbread-cookies.png', '04-build-snowman.png', '05-wrap-gift.png', '06-reindeer-ride.png', '07-fireplace-stocking.png', '08-christmas-train.png', '09-christmas-story.png', '10-hot-cocoa.png', '11-polar-bear.png', '12-gingerbread-house.png', '13-christmas-carols.png', '14-christmas-gift-shop.png', '15-group-portrait.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#e74c4c', b: '#2f9e66', description: 'A warm Christmas adventure with ZANA Kid Perfume mascots, gifts, a snowman, reindeer, and festive family activities.' },
  { id: 'kid-perfume-racing', format: 'image', folder: 'premium-pages/kid-perfume-racing-adventure', coverImage: 'covers/kid-perfume-racing.png', title: 'ZANA Kid Perfume Racing Adventure Coloring Book', thai: 'ZANA Kid Perfume รถแข่งแสนสนุก', pages: 16, imageFiles: ['01-title-page.png', '02-helmet-start.png', '03-tire-check.png', '04-side-by-side-race.png', '05-car-wash.png', '06-trophy-shelf.png', '07-go-kart-practice.png', '08-friendly-tunnel.png', '09-track-map.png', '10-pit-stop.png', '11-finish-line.png', '12-friendship-medal.png', '13-sports-car-showroom.png', '14-night-celebration.png', '15-group-portrait.png', '16-great-job.png'], age: 'Ages 3-8', mode: 'coloring', a: '#4da3ff', b: '#ffd23f', description: 'A friendly racing adventure with two original boy racers, sports cars, safe track activities, teamwork, and trophies.' },
  { id: 'kid-perfume-princess', format: 'image', folder: 'premium-pages/kid-perfume-princess-premium', coverImage: 'covers/kid-perfume-princess.png', title: 'ZANA Kid Perfume Princess Coloring Book', thai: 'ZANA Kid Perfume Princess', pages: 16, imageFiles: ['01-cover.png', '02-flower-cake-princess.png', '03-sweet-powder-cloud-princess.png', '04-fruity-camomile-garden.png', '05-lavender-bedtime-princess.png', '06-royal-vanity-perfume-room.png', '07-princess-dress-up.png', '08-flower-cake-tea-party.png', '09-cloud-castle-balcony.png', '10-magical-perfume-garden.png', '11-perfume-bottle-and-box.png', '12-perfume-shop-playtime.png', '13-princess-getting-ready.png', '14-gift-basket-for-mommy.png', '15-best-friends-castle-party.png', '16-great-job-princess.png'], age: 'Ages 2+', mode: 'coloring', a: '#ffd6e8', b: '#bda7ff', description: 'Princess-inspired ZANA Kid Perfume coloring pages using real bottle and box product motifs.' }
];

const FEATURED_BOOK_ID = 'kid-perfume';
BOOKS.sort((a, b) => (a.id === FEATURED_BOOK_ID ? -1 : b.id === FEATURED_BOOK_ID ? 1 : 0));
const LEGACY_FREE_BOOK_REDIRECTS = {
  'kid-perfume-princess': FEATURED_BOOK_ID
};

const COLORS = [
  ['Red', '#ef4444'], ['Orange', '#fb923c'], ['Yellow', '#facc15'], ['Light Yellow', '#fef08a'],
  ['Green', '#22c55e'], ['Mint', '#5eead4'], ['Cyan', '#22d3ee'], ['Blue', '#3b82f6'],
  ['Dark Blue', '#1d4ed8'], ['Purple', '#8b5cf6'], ['Pink', '#f472b6'], ['Brown', '#92400e'],
  ['Gray', '#9ca3af'], ['Black', '#111827'], ['White', '#ffffff']
];

const PROFILE_STORAGE_KEY = 'zana:profiles:v1';
const ACTIVE_PROFILE_KEY = 'zana:activeProfile:v1';
const LEGACY_MIGRATION_KEY = 'zana:legacyMigrated:v1';
const UNLOCK_STORAGE_KEY = 'zana:unlockedBooks:v1';
const CUSTOM_COLORS_KEY = 'zana:customColors:v1';
const FREE_BOOK_IDS = ['kid-perfume'];
const UNLOCK_CODES = [
  { code: 'ZANA-SEA-2026', bookId: 'sea' },
  { code: 'ZANA-AFRICA-2026', bookId: 'african' },
  { code: 'ZANA-PRINCESS-2026', bookId: 'princess' },
  { code: 'ZANA-PONY-2026', bookId: 'pony' },
  { code: 'ZANA-HARBOLAND-2026', bookId: 'harboland' },
  { code: 'ZANA-KIDPERFUME-2026', bookId: 'kid-perfume' },
  { code: 'ZANA-PERFUMEPRINCESS-2026', bookId: 'kid-perfume-princess' },
  { code: 'ZANA-CLBOOK-SEA', bookId: 'sea' },
  { code: 'ZANA-CLBOOK-AFRICA', bookId: 'african' },
  { code: 'ZANA-CLBOOK-PRINCESS', bookId: 'princess' },
  { code: 'ZANA-CLBOOK-PONY', bookId: 'pony' },
  { code: 'ZANA-CLBOOK-HARBOLAND', bookId: 'harboland' },
  { code: 'ZANA-CLBOOK-EVERYDAY', bookId: 'kid-perfume' },
  { code: 'ZANA-CLBOOK-ZOO', bookId: 'kid-perfume-zoo' },
  { code: 'ZANA-CLBOOK-HALLOWEEN', bookId: 'kid-perfume-halloween' },
  { code: 'ZANA-CLBOOK-CHRISTMAS', bookId: 'kid-perfume-christmas' },
  { code: 'ZANA-CLBOOK-RACING', bookId: 'kid-perfume-racing' },
  { code: 'ZANA-VIP-SEA-AFRICA', bookIds: ['sea', 'african'] },
  { code: 'ZANA-VIP-SEA-PRINCESS', bookIds: ['sea', 'princess'] },
  { code: 'ZANA-VIP-SEA-PONY', bookIds: ['sea', 'pony'] },
  { code: 'ZANA-VIP-SEA-HARBOLAND', bookIds: ['sea', 'harboland'] },
  { code: 'ZANA-VIP-SEA-EVERYDAY', bookIds: ['sea', 'kid-perfume'] },
  { code: 'ZANA-VIP-AFRICA-PRINCESS', bookIds: ['african', 'princess'] },
  { code: 'ZANA-VIP-AFRICA-PONY', bookIds: ['african', 'pony'] },
  { code: 'ZANA-VIP-AFRICA-HARBOLAND', bookIds: ['african', 'harboland'] },
  { code: 'ZANA-VIP-AFRICA-EVERYDAY', bookIds: ['african', 'kid-perfume'] },
  { code: 'ZANA-VIP-PRINCESS-PONY', bookIds: ['princess', 'pony'] },
  { code: 'ZANA-VIP-PRINCESS-HARBOLAND', bookIds: ['princess', 'harboland'] },
  { code: 'ZANA-VIP-PRINCESS-EVERYDAY', bookIds: ['princess', 'kid-perfume'] },
  { code: 'ZANA-VIP-PONY-HARBOLAND', bookIds: ['pony', 'harboland'] },
  { code: 'ZANA-VIP-PONY-EVERYDAY', bookIds: ['pony', 'kid-perfume'] },
  { code: 'ZANA-VIP-HARBOLAND-EVERYDAY', bookIds: ['harboland', 'kid-perfume'] },
  { code: 'ZANA-THANKYOU-0001', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0002', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0003', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0004', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0005', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0006', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0007', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0008', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0009', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0010', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0011', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0012', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0013', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0014', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0015', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0016', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0017', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0018', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0019', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0020', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0021', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0022', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0023', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0024', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0025', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0026', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0027', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0028', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0029', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0030', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0031', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0032', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0033', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0034', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0035', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0036', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0037', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0038', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0039', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0040', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0041', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0042', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0043', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0044', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0045', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0046', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0047', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0048', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0049', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0050', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0051', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0052', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0053', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0054', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0055', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0056', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0057', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0058', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0059', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0060', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0061', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0062', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0063', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0064', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0065', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0066', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0067', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0068', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0069', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0070', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0071', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0072', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0073', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0074', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0075', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0076', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0077', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0078', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0079', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0080', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0081', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0082', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0083', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0084', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0085', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0086', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0087', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0088', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0089', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0090', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0091', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0092', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0093', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0094', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0095', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0096', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0097', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0098', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0099', bookId: 'kid-perfume' },
  { code: 'ZANA-THANKYOU-0100', bookId: 'kid-perfume' },
];
const DEFAULT_PROFILES = [
  { id: 'kid-1', name: 'Kid 1', color: '#ffcf33' },
  { id: 'kid-2', name: 'Kid 2', color: '#55caa8' }
];
const PROFILE_COLORS = ['#ffcf33', '#55caa8', '#ff6b6b', '#2f96d8', '#8067d8', '#f472b6'];
const IMAGE_BOUNDARY_LUMINANCE = 195;
const IMAGE_DISPLAY_LINE_LUMINANCE = 150;
// Page PNGs ship with bold, gap-sealed outlines, so fills may run right up to (and under) the line.
const IMAGE_BOUNDARY_DILATE_RADIUS = 0;
const MAX_IMAGE_REGION_RATIO = .72;
const MOBILE_READER_QUERY = '(max-width: 920px)';
const MOBILE_IMAGE_MAX_EDGE = 960;

const state = {
  book: null,
  page: 1,
  tool: 'fill',
  color: COLORS[7][1],
  zoom: 1,
  sourceDoc: null,
  sourceStyle: '',
  drawing: false,
  lastPoint: null,
  undo: [],
  redo: [],
  deferredInstall: null,
  profiles: [],
  currentUserId: '',
  customColors: [],
  lineArtCanvas: null,
  lineArtData: null,
  regionMaskCanvas: null,
  scratchCanvas: null,
  paintCanvas: null,
  activePointerId: null,
  saveCanvasTimer: null,
  pendingUnlockBookId: ''
};

const els = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheEls();
  initProfiles();
  initCustomColors();
  processUnlockCodeFromUrl();
  renderProfileUI();
  renderLibrary();
  renderPalette();
  bindEvents();
  registerServiceWorker();
  route();
});

window.addEventListener('hashchange', route);

function cacheEls() {
  Object.assign(els, {
    libraryView: document.getElementById('libraryView'),
    readerView: document.getElementById('readerView'),
    bookGrid: document.getElementById('bookGrid'),
    bookCount: document.getElementById('bookCount'),
    pageCount: document.getElementById('pageCount'),
    backButton: document.getElementById('backButton'),
    statusPill: document.getElementById('statusPill'),
    installButton: document.getElementById('installButton'),
    profileButton: document.getElementById('profileButton'),
    profileAvatar: document.getElementById('profileAvatar'),
    profileName: document.getElementById('profileName'),
    userModal: document.getElementById('userModal'),
    userList: document.getElementById('userList'),
    addUserButton: document.getElementById('addUserButton'),
    closeUserModal: document.getElementById('closeUserModal'),
    readerBookTitle: document.getElementById('readerBookTitle'),
    readerBookMeta: document.getElementById('readerBookMeta'),
    modeBadge: document.getElementById('modeBadge'),
    coloringTools: document.getElementById('coloringTools'),
    palette: document.getElementById('palette'),
    brushSize: document.getElementById('brushSize'),
    undoButton: document.getElementById('undoButton'),
    redoButton: document.getElementById('redoButton'),
    resetButton: document.getElementById('resetButton'),
    zoomInButton: document.getElementById('zoomInButton'),
    zoomOutButton: document.getElementById('zoomOutButton'),
    saveButton: document.getElementById('saveButton'),
    prevPageButton: document.getElementById('prevPageButton'),
    nextPageButton: document.getElementById('nextPageButton'),
    pageSlider: document.getElementById('pageSlider'),
    sourceLink: document.getElementById('sourceLink'),
    readerStage: document.getElementById('readerStage'),
    pageHost: document.getElementById('pageHost'),
    canvas: document.getElementById('drawCanvas'),
    loadingCard: document.getElementById('loadingCard')
  });
}

function bindEvents() {
  els.backButton.addEventListener('click', () => { location.hash = ''; });
  els.installButton.addEventListener('click', installApp);
  els.profileButton.addEventListener('click', openUserModal);
  els.addUserButton.addEventListener('click', addUserProfile);
  els.closeUserModal.addEventListener('click', closeUserModal);
  els.userModal.addEventListener('click', event => {
    if (event.target === els.userModal) closeUserModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !els.userModal.hidden) closeUserModal();
  });
  document.querySelectorAll('[data-tool]').forEach(button => {
    button.addEventListener('click', () => selectTool(button.dataset.tool));
  });
  els.undoButton.addEventListener('click', undo);
  els.redoButton.addEventListener('click', redo);
  els.resetButton.addEventListener('click', resetPage);
  els.zoomInButton.addEventListener('click', () => setZoom(state.zoom + .1));
  els.zoomOutButton.addEventListener('click', () => setZoom(state.zoom - .1));
  els.saveButton.addEventListener('click', saveArtwork);
  els.prevPageButton.addEventListener('click', () => goPage(state.page - 1));
  els.nextPageButton.addEventListener('click', () => goPage(state.page + 1));
  els.pageSlider.addEventListener('input', () => goPage(Number(els.pageSlider.value)));
  els.canvas.addEventListener('pointerdown', startStroke);
  els.canvas.addEventListener('pointermove', continueStroke);
  els.canvas.addEventListener('pointerup', endStroke);
  els.canvas.addEventListener('pointercancel', endStroke);
  els.pageHost.addEventListener('pointerdown', fillTarget);
  els.pageHost.addEventListener('click', fillTarget);
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    state.deferredInstall = event;
    els.installButton.hidden = false;
  });
}

function isImageBook(book) {
  return book?.format === 'image';
}

function imagePageSrc(book, page = 1) {
  const file = book.imageFiles?.[clamp(page, 1, book.pages) - 1];
  return `${book.folder}/${file}`;
}
function initProfiles() {
  let profiles = [];
  try {
    profiles = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '[]');
  } catch {
    profiles = [];
  }
  if (!Array.isArray(profiles) || !profiles.length) {
    profiles = DEFAULT_PROFILES;
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profiles));
  }
  state.profiles = profiles.map((profile, index) => ({
    id: String(profile.id || `kid-${index + 1}`),
    name: cleanProfileName(profile.name || `Kid ${index + 1}`),
    color: profile.color || PROFILE_COLORS[index % PROFILE_COLORS.length]
  }));
  const savedActive = localStorage.getItem(ACTIVE_PROFILE_KEY);
  state.currentUserId = state.profiles.some(profile => profile.id === savedActive)
    ? savedActive
    : state.profiles[0].id;
  localStorage.setItem(ACTIVE_PROFILE_KEY, state.currentUserId);
  migrateLegacySaves(state.currentUserId);
}

function renderProfileUI() {
  const user = currentUser();
  if (!user) return;
  els.profileName.textContent = user.name;
  els.profileAvatar.textContent = user.name.trim().charAt(0).toUpperCase() || 'K';
  els.profileAvatar.style.background = user.color;
  renderUserList();
}

function openUserModal() {
  renderUserList();
  els.userModal.hidden = false;
}

function closeUserModal() {
  els.userModal.hidden = true;
}

function renderUserList() {
  els.userList.innerHTML = state.profiles.map(profile => {
    const active = profile.id === state.currentUserId;
    const initial = profile.name.trim().charAt(0).toUpperCase() || 'K';
    return `
      <button class="user-card ${active ? 'active' : ''}" type="button" data-profile="${profile.id}" aria-pressed="${active}">
        <span class="profile-avatar" style="background:${profile.color}">${initial}</span>
        <span><strong>${escapeHtml(profile.name)}</strong><small>${active ? 'Active profile' : 'Switch profile'}</small></span>
      </button>
    `;
  }).join('');
  els.userList.querySelectorAll('[data-profile]').forEach(button => {
    button.addEventListener('click', () => switchUserProfile(button.dataset.profile));
  });
}

function addUserProfile() {
  const name = cleanProfileName(prompt('Child name', `Kid ${state.profiles.length + 1}`));
  if (!name) return;
  const profile = {
    id: `kid-${Date.now().toString(36)}`,
    name,
    color: PROFILE_COLORS[state.profiles.length % PROFILE_COLORS.length]
  };
  state.profiles.push(profile);
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.profiles));
  switchUserProfile(profile.id);
}

function switchUserProfile(profileId) {
  if (!state.profiles.some(profile => profile.id === profileId)) return;
  state.currentUserId = profileId;
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
  state.undo = [];
  state.redo = [];
  renderProfileUI();
  renderLibrary();
  closeUserModal();
  if (state.book) renderPage();
  setStatus('Profile switched');
}

function currentUser() {
  return state.profiles.find(profile => profile.id === state.currentUserId) || state.profiles[0];
}

function cleanProfileName(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, 24);
}

function userKey(name) {
  const profile = currentUser();
  return `zana:user:${profile.id}:${name}`;
}

function migrateLegacySaves(profileId) {
  if (localStorage.getItem(LEGACY_MIGRATION_KEY)) return;
  const legacyPrefixes = ['zana:done:', 'zana:last:', 'zana:fills:', 'zana:canvas:'];
  Object.keys(localStorage).forEach(key => {
    if (!legacyPrefixes.some(prefix => key.startsWith(prefix))) return;
    const scoped = `zana:user:${profileId}:${key.slice('zana:'.length)}`;
    if (!localStorage.getItem(scoped)) {
      localStorage.setItem(scoped, localStorage.getItem(key));
    }
  });
  localStorage.setItem(LEGACY_MIGRATION_KEY, profileId);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}
function renderLibrary() {
  els.bookCount.textContent = BOOKS.length;
  els.pageCount.textContent = BOOKS.reduce((sum, book) => sum + book.pages, 0);
  els.bookGrid.innerHTML = BOOKS.map(book => {
    const progress = getBookProgress(book);
    const pct = Math.round((progress.completed / book.pages) * 100);
    const unlocked = isBookUnlocked(book);
    const free = FREE_BOOK_IDS.includes(book.id);
    const accessLabel = free ? 'ทดลองฟรี' : (unlocked ? 'ปลดล็อกแล้ว' : 'ต้องใช้รหัส');
    const actionLabel = progress.lastPage > 1 ? 'เล่นต่อ' : 'เริ่มระบาย';
    return `
      <article class="book-card ${unlocked ? 'unlocked' : 'locked'}" style="--card-a:${book.a};--card-b:${book.b}">
        <div class="book-cover" data-cover="${book.id}">
          <div class="cover-page"><span>${book.title}</span></div>
          ${unlocked ? '' : '<span class="book-lock-badge">ต้องใช้รหัส</span>'}
        </div>
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>${book.thai}</p>
          <p>${book.description}</p>
          <div class="meta-row"><span>${book.pages} pages</span><span>${book.age}</span><span>${book.mode === 'coloring' ? 'Coloring' : 'Learning'}</span><span class="access-meta">${accessLabel}</span></div>
          <div class="progress-track" aria-label="${pct}% complete"><i style="width:${pct}%"></i></div>
          <p>${pct}% complete</p>
          ${unlocked ? `
            <div class="card-actions">
              <button type="button" data-start="${book.id}" class="primary">${actionLabel}</button>
              <button type="button" data-continue="${book.id}">หน้าเดิม</button>
            </div>
          ` : `
            <form class="unlock-panel" data-unlock-form="${book.id}">
              <label for="unlock-${book.id}">กรอกรหัสเพื่อปลดล็อกเล่มนี้</label>
              <div class="unlock-row">
                <input id="unlock-${book.id}" data-unlock-input="${book.id}" type="text" inputmode="latin" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="กรอกรหัสจากร้าน">
                <button type="submit">ปลดล็อก</button>
              </div>
              <p class="unlock-hint" data-unlock-message="${book.id}">รหัส 1 ชุดปลดล็อกได้ 1 เล่มบนเครื่องนี้</p>
            </form>
          `}
        </div>
      </article>
    `;
  }).join('');

  els.bookGrid.querySelectorAll('[data-start]').forEach(button => {
    button.addEventListener('click', () => openBook(button.dataset.start, 1));
  });
  els.bookGrid.querySelectorAll('[data-continue]').forEach(button => {
    button.addEventListener('click', () => {
      const book = BOOKS.find(item => item.id === button.dataset.continue);
      if (book) openBook(book.id, getBookProgress(book).lastPage || 1);
    });
  });
  els.bookGrid.querySelectorAll('[data-unlock-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const bookId = form.dataset.unlockForm;
      const input = form.querySelector('[data-unlock-input]');
      unlockBookWithCode(bookId, input?.value || '');
    });
  });
  hydrateCovers();
  if (state.pendingUnlockBookId) {
    requestAnimationFrame(() => focusUnlockInput(state.pendingUnlockBookId));
  }
}

async function hydrateCovers() {
  for (const book of BOOKS) {
    try {
      const cover = document.querySelector(`[data-cover="${book.id}"] .cover-page`);
      if (!cover) continue;
      if (book.coverImage || isImageBook(book)) {
        const coverSrc = book.coverImage || imagePageSrc(book, 1);
        cover.innerHTML = `<img src="${coverSrc}" alt="${escapeHtml(book.title)} cover" loading="lazy" decoding="async">`;
        continue;
      }
      const doc = await fetchBookDoc(book);
      const firstSvg = doc.querySelector('#book .page svg, .page svg');
      if (firstSvg) {
        const svg = firstSvg.cloneNode(true);
        svg.removeAttribute('style');
        cover.innerHTML = '';
        cover.appendChild(svg);
      }
    } catch {
      setStatus('Cover skipped');
    }
  }
}

function renderPalette() {
  const standardSwatches = COLORS.map(([name, value]) => (
    `<button class="color-swatch" type="button" style="background:${value}" data-color="${value}" aria-label="${name}" title="${name}"></button>`
  )).join('');
  const customSwatches = state.customColors.map(value => (
    `<button class="color-swatch custom-swatch" type="button" style="background:${value}" data-color="${value}" aria-label="Custom color ${value}" title="${value}"></button>`
  )).join('');
  els.palette.innerHTML = `${standardSwatches}${customSwatches}
    <label class="custom-color-picker" style="--picked:${state.color}" title="เลือกสีเอง" aria-label="เลือกสีเอง">
      <input type="color" value="${state.color}" aria-label="เลือกสีเอง">
      <span aria-hidden="true">+</span>
    </label>`;
  els.palette.querySelectorAll('.color-swatch').forEach(button => {
    button.addEventListener('click', () => {
      setActiveColor(button.dataset.color);
    });
  });
  const customPicker = els.palette.querySelector('.custom-color-picker');
  const colorInput = customPicker?.querySelector('input');
  colorInput?.addEventListener('input', () => {
    const color = normalizeHexColor(colorInput.value);
    if (!color) return;
    state.color = color;
    customPicker.style.setProperty('--picked', color);
    markActivePaletteColor(color);
  });
  colorInput?.addEventListener('change', () => {
    const color = normalizeHexColor(colorInput.value);
    if (!color) return;
    state.color = color;
    addCustomColor(color);
    renderPalette();
  });
  markActivePaletteColor(state.color);
}

function initCustomColors() {
  try {
    const saved = JSON.parse(localStorage.getItem(CUSTOM_COLORS_KEY) || '[]');
    state.customColors = Array.isArray(saved)
      ? saved.map(normalizeHexColor).filter(Boolean).slice(0, 10)
      : [];
  } catch {
    state.customColors = [];
  }
}

function normalizeHexColor(value) {
  const color = String(value || '').trim().toLowerCase();
  return /^#[0-9a-f]{6}$/.test(color) ? color : '';
}

function setActiveColor(color) {
  const nextColor = normalizeHexColor(color);
  if (!nextColor) return;
  state.color = nextColor;
  markActivePaletteColor(nextColor);
}

function addCustomColor(color) {
  const nextColor = normalizeHexColor(color);
  if (!nextColor) return;
  const standardColors = new Set(COLORS.map(([, value]) => value.toLowerCase()));
  if (standardColors.has(nextColor)) return;
  state.customColors = [nextColor, ...state.customColors.filter(item => item !== nextColor)].slice(0, 10);
  localStorage.setItem(CUSTOM_COLORS_KEY, JSON.stringify(state.customColors));
}

function markActivePaletteColor(color) {
  const activeColor = normalizeHexColor(color);
  els.palette.querySelectorAll('.color-swatch').forEach(item => {
    item.classList.toggle('active', item.dataset.color === activeColor);
  });
  const customPicker = els.palette.querySelector('.custom-color-picker');
  if (customPicker) {
    const matchedSwatch = els.palette.querySelector(`.color-swatch[data-color="${activeColor}"]`);
    customPicker.classList.toggle('active', !matchedSwatch);
    customPicker.style.setProperty('--picked', activeColor || state.color);
    const input = customPicker.querySelector('input');
    if (input && activeColor) input.value = activeColor;
  }
}

function route() {
  const match = location.hash.match(/^#book=([^&]+)(?:&page=(\d+))?/);
  if (!match) {
    showLibrary();
    return;
  }
  const requestedBookId = match[1];
  const targetBookId = LEGACY_FREE_BOOK_REDIRECTS[requestedBookId] || requestedBookId;
  if (targetBookId !== requestedBookId) {
    location.replace(`${location.pathname}${location.search}#book=${targetBookId}&page=${Number(match[2] || 1)}`);
    return;
  }
  openBook(targetBookId, Number(match[2] || 1), true);
}

function showLibrary() {
  document.body.classList.remove('reader-open', 'tool-fill', 'image-reader');
  els.readerView.hidden = true;
  els.libraryView.hidden = false;
  renderLibrary();
}

async function openBook(bookId, page = 1, routed = false) {
  const book = BOOKS.find(item => item.id === bookId);
  if (!book) return showLibrary();
  if (!isBookUnlocked(book)) {
    requestBookUnlock(book);
    return;
  }
  if (!routed) {
    const nextHash = `#book=${book.id}&page=${clamp(page, 1, book.pages)}`;
    if (location.hash !== nextHash) {
      location.hash = nextHash;
      return;
    }
  }
  state.book = book;
  state.page = clamp(page, 1, book.pages);
  state.zoom = 1;
  state.undo = [];
  state.redo = [];
  document.body.classList.add('reader-open');
  document.body.classList.toggle('image-reader', isImageBook(book));
  els.libraryView.hidden = true;
  els.readerView.hidden = false;
  els.loadingCard.hidden = false;
  els.readerBookTitle.textContent = book.title;
  els.readerBookMeta.textContent = `${book.thai} · Page ${state.page} / ${book.pages}`;
  els.modeBadge.textContent = book.mode === 'coloring' ? 'COLORING MODE' : 'LEARNING MODE';
  els.coloringTools.hidden = false;
  const fillButton = document.querySelector('[data-tool="fill"]');
  const canFill = book.mode === 'coloring';
  fillButton.hidden = !canFill;
  fillButton.disabled = !canFill;
  els.sourceLink.href = isImageBook(book) ? imagePageSrc(book, state.page) : book.file;
  els.sourceLink.textContent = isImageBook(book) ? 'PNG page' : 'Printable version';
  els.pageSlider.max = book.pages;
  els.pageSlider.value = state.page;
  selectTool(canFill ? 'fill' : 'brush');

  try {
    if (isImageBook(book)) {
      state.sourceDoc = null;
      state.sourceStyle = '';
    } else {
      state.sourceDoc = await fetchBookDoc(book);
      const style = state.sourceDoc.querySelector('style');
      state.sourceStyle = style ? style.textContent : '';
    }
    await renderPage();
    setStatus('Ready');
  } catch (error) {
    els.pageHost.innerHTML = `<div class="loading-card">Could not load ${book.title}</div>`;
    setStatus('Load error');
  } finally {
    els.loadingCard.hidden = true;
  }
}

async function fetchBookDoc(book) {
  const response = await fetch(book.file, { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Unable to load ${book.file}`);
  const html = await response.text();
  return new DOMParser().parseFromString(html, 'text/html');
}

async function renderPage() {
  if (isImageBook(state.book)) {
    return renderImagePage();
  }
  const page = state.sourceDoc.querySelector(`#page-${state.page}`) || state.sourceDoc.querySelectorAll('.page')[state.page - 1];
  if (!page) return;
  const clone = page.cloneNode(true);
  clone.classList.add('active');
  clone.querySelectorAll('script').forEach(node => node.remove());
  const root = bookRoot();
  root.innerHTML = '';
  const scopedStyle = document.createElement('style');
  scopedStyle.textContent = state.sourceStyle;
  const appStyle = document.createElement('style');
  appStyle.textContent = `
    :host{display:block;width:100%}
    .toolbar,.no-print{display:none!important}
    .page{display:flex!important;width:100%!important;min-height:calc(11in * var(--zoom, 1))!important;box-shadow:0 12px 35px rgba(0,0,0,.22)!important;border-radius:8px!important}
    svg{max-width:100%}
  `;
  root.append(scopedStyle, appStyle, clone);
  clone.addEventListener('pointerdown', fillTarget);
  clone.addEventListener('click', fillTarget);
  assignColorIds(clone);
  restoreFills();
  setZoom(state.zoom);
  await nextFrame();
  resizeCanvas();
  restoreCanvas();
  updateReaderMeta();
  markProgress();
  saveProgress();
}

async function renderImagePage() {
  resetImageRegionEngine();
  const root = bookRoot();
  root.innerHTML = '';
  const appStyle = document.createElement('style');
  appStyle.textContent = `
    :host{display:block;width:100%}
    .page{position:relative!important;display:flex!important;width:100%!important;min-height:calc(11in * var(--zoom, 1))!important;box-shadow:0 12px 35px rgba(0,0,0,.22)!important;border-radius:8px!important;background:#fff!important;overflow:hidden!important}
    .image-page img{display:block;width:100%;height:auto;object-fit:contain;user-select:none;-webkit-user-drag:none;opacity:0;pointer-events:none}
  `;
  const page = document.createElement('div');
  page.className = 'page image-page active';
  const image = document.createElement('img');
  image.className = 'line-art-image';
  image.decoding = 'async';
  image.fetchPriority = 'high';
  image.src = imagePageSrc(state.book, state.page);
  image.alt = `${state.book.title} page ${state.page}`;
  page.appendChild(image);
  root.append(appStyle, page);
  els.sourceLink.href = image.src;
  setZoom(state.zoom);
  await new Promise(resolve => {
    if (image.complete) resolve();
    else {
      image.onload = resolve;
      image.onerror = resolve;
    }
  });
  await nextFrame();
  resizeCanvas();
  prepareImageRegionEngine();
  restoreCanvas();
  updateReaderMeta();
  markProgress();
  saveProgress();
}
function assignColorIds(root) {
  root.querySelectorAll('path, circle, ellipse, rect, polygon, polyline, text').forEach((node, index) => {
    node.dataset.colorId = String(index);
    node.classList.add('colorable-shape');
  });
}

function fillTarget(event) {
  if (state.tool !== 'fill' || !state.book || state.book.mode !== 'coloring') return;
  const origin = event.composedPath?.()[0] || event.target;
  let target = origin?.closest?.('.colorable-shape');
  if (!target && Number.isFinite(event.clientX) && Number.isFinite(event.clientY)) {
    target = shapeFromPoint(event.clientX, event.clientY);
  }
  fillElement(target);
}

function fillAtPoint(event) {
  if (isImageBook(state.book)) {
    tapFillImageRegion(event);
    return;
  }
  fillElement(shapeFromPoint(event.clientX, event.clientY));
}

function shapeFromPoint(clientX, clientY) {
  return [...bookRoot().querySelectorAll('.colorable-shape')]
    .map(shape => ({ shape, rect: shape.getBoundingClientRect() }))
    .filter(({ rect }) => clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom)
    .sort((a, b) => (a.rect.width * a.rect.height) - (b.rect.width * b.rect.height))[0]?.shape || null;
}

function fillElement(target) {
  if (!target) return;
  pushHistory();
  target.setAttribute('fill', state.color);
  target.style.fill = state.color;
  saveFills();
  setStatus('Filled');
}

function selectTool(tool) {
  state.tool = tool;
  document.body.classList.toggle('tool-fill', tool === 'fill');
  document.querySelectorAll('[data-tool]').forEach(button => button.classList.toggle('active', button.dataset.tool === tool));
  els.canvas.style.pointerEvents = 'auto';
}

function startStroke(event) {
  if (state.tool === 'fill') {
    event.preventDefault();
    fillAtPoint(event);
    return;
  }
  event.preventDefault();
  const point = pointFromEvent(event);
  if (isImageBook(state.book)) {
    if (!state.regionMaskCanvas || !pointInImageRegion(point)) {
      if (!selectImageRegion(point)) return;
    }
    pushHistory();
    try { els.canvas.setPointerCapture(event.pointerId); } catch {}
    state.drawing = true;
    state.activePointerId = event.pointerId;
    state.lastPoint = point;
    drawMaskedStroke(point, point);
    return;
  }
  pushHistory();
  try { els.canvas.setPointerCapture(event.pointerId); } catch {}
  state.drawing = true;
  state.activePointerId = event.pointerId;
  state.lastPoint = point;
}

function continueStroke(event) {
  if (!state.drawing || state.tool === 'fill' || event.pointerId !== state.activePointerId) return;
  event.preventDefault();
  const pointerEvents = typeof event.getCoalescedEvents === 'function'
    ? event.getCoalescedEvents()
    : [event];
  const points = pointerEvents.length
    ? pointerEvents.map(pointFromEvent)
    : [pointFromEvent(event)];
  if (isImageBook(state.book)) {
    drawMaskedStrokePath(state.lastPoint, points);
    state.lastPoint = points[points.length - 1];
    return;
  }
  const ctx = els.canvas.getContext('2d');
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = Number(els.brushSize.value);
  if (state.tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
  } else {
    ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = state.color;
  }
  ctx.beginPath();
  ctx.moveTo(state.lastPoint.x, state.lastPoint.y);
  points.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.stroke();
  state.lastPoint = points[points.length - 1];
}

function endStroke(event) {
  if (!state.drawing || (event?.pointerId != null && event.pointerId !== state.activePointerId)) return;
  if (event?.type === 'pointerup') continueStroke(event);
  state.drawing = false;
  state.activePointerId = null;
  state.lastPoint = null;
  scheduleCanvasSave();
  setStatus('Saved');
}

function scheduleCanvasSave() {
  if (state.saveCanvasTimer) clearTimeout(state.saveCanvasTimer);
  const key = canvasKey();
  const canvas = isImageBook(state.book) ? state.paintCanvas : els.canvas;
  state.saveCanvasTimer = setTimeout(() => {
    state.saveCanvasTimer = null;
    if (!canvas) return;
    try { localStorage.setItem(key, canvas.toDataURL('image/png')); } catch { setStatus('Storage full'); }
  }, 120);
}


function ensurePaintCanvas() {
  if (!state.paintCanvas || state.paintCanvas.width !== els.canvas.width || state.paintCanvas.height !== els.canvas.height) {
    state.paintCanvas = document.createElement('canvas');
    state.paintCanvas.width = els.canvas.width;
    state.paintCanvas.height = els.canvas.height;
  }
  return state.paintCanvas;
}

function paintCanvasDataUrl() {
  if (!state.paintCanvas || state.paintCanvas.width < 1 || state.paintCanvas.height < 1) return '';
  try { return state.paintCanvas.toDataURL('image/png'); } catch { return ''; }
}

function resetImageRegionEngine() {
  state.lineArtCanvas = null;
  state.lineArtData = null;
  state.regionMaskCanvas = null;
  state.scratchCanvas = null;
}

function renderDisplayCanvas() {
  if (!isImageBook(state.book) || !els.canvas.width || !els.canvas.height) return;
  const ctx = els.canvas.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, els.canvas.width, els.canvas.height);
  if (state.paintCanvas) ctx.drawImage(state.paintCanvas, 0, 0);
  if (state.lineArtCanvas) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(state.lineArtCanvas, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
  }
}

function renderDisplayCanvasRegion(bounds) {
  if (!isImageBook(state.book) || !bounds) return;
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;
  if (width < 1 || height < 1) return;
  const ctx = els.canvas.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(bounds.minX, bounds.minY, width, height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(bounds.minX, bounds.minY, width, height);
  if (state.paintCanvas) {
    ctx.drawImage(state.paintCanvas, bounds.minX, bounds.minY, width, height, bounds.minX, bounds.minY, width, height);
  }
  if (state.lineArtCanvas) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(state.lineArtCanvas, bounds.minX, bounds.minY, width, height, bounds.minX, bounds.minY, width, height);
    ctx.globalCompositeOperation = 'source-over';
  }
}

function prepareImageRegionEngine() {
  if (!isImageBook(state.book) || !els.canvas.width || !els.canvas.height) return false;
  const image = bookRoot().querySelector('.image-page img');
  if (!image || !image.complete || image.naturalWidth < 1) return false;
  ensurePaintCanvas();
  const lineCanvas = document.createElement('canvas');
  lineCanvas.width = els.canvas.width;
  lineCanvas.height = els.canvas.height;
  const ctx = lineCanvas.getContext('2d', { willReadFrequently: true });
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, lineCanvas.width, lineCanvas.height);
  ctx.drawImage(image, 0, 0, lineCanvas.width, lineCanvas.height);
  try {
    const sourceData = ctx.getImageData(0, 0, lineCanvas.width, lineCanvas.height);
    const boundaryData = buildLineBoundaryData(sourceData);
    const displayData = buildDisplayLineArtData(sourceData);
    ctx.putImageData(displayData, 0, 0);
    state.lineArtCanvas = lineCanvas;
    state.lineArtData = boundaryData;
  } catch {
    state.lineArtCanvas = lineCanvas;
    state.lineArtData = null;
  }
  renderDisplayCanvas();
  return Boolean(state.lineArtData);
}

function imagePixelIsBoundary(data, index) {
  const alpha = data[index + 3];
  if (alpha < 16) return false;
  const lum = data[index] * .299 + data[index + 1] * .587 + data[index + 2] * .114;
  return lum < 128;
}

function sourcePixelIsLine(data, index) {
  const alpha = data[index + 3];
  if (alpha < 16) return false;
  const lum = data[index] * .299 + data[index + 1] * .587 + data[index + 2] * .114;
  return lum < IMAGE_BOUNDARY_LUMINANCE;
}

function buildLineBoundaryData(sourceData) {
  const width = sourceData.width;
  const height = sourceData.height;
  const src = sourceData.data;
  const boundary = new Uint8Array(width * height);

  for (let pixel = 0; pixel < boundary.length; pixel += 1) {
    if (!sourcePixelIsLine(src, pixel * 4)) continue;
    const x = pixel % width;
    const y = (pixel / width) | 0;
    for (let dy = -IMAGE_BOUNDARY_DILATE_RADIUS; dy <= IMAGE_BOUNDARY_DILATE_RADIUS; dy += 1) {
      const ny = y + dy;
      if (ny < 0 || ny >= height) continue;
      for (let dx = -IMAGE_BOUNDARY_DILATE_RADIUS; dx <= IMAGE_BOUNDARY_DILATE_RADIUS; dx += 1) {
        const nx = x + dx;
        if (nx < 0 || nx >= width) continue;
        boundary[ny * width + nx] = 1;
      }
    }
  }

  const out = new ImageData(width, height);
  for (let pixel = 0; pixel < boundary.length; pixel += 1) {
    const index = pixel * 4;
    const isBoundary = boundary[pixel] === 1;
    const value = isBoundary ? 0 : 255;
    out.data[index] = value;
    out.data[index + 1] = value;
    out.data[index + 2] = value;
    out.data[index + 3] = 255;
  }
  return out;
}

function buildDisplayLineArtData(sourceData) {
  const display = new ImageData(sourceData.width, sourceData.height);
  const src = sourceData.data;
  for (let index = 0; index < src.length; index += 4) {
    const lum = src[index] * .299 + src[index + 1] * .587 + src[index + 2] * .114;
    // Keep the outline's anti-aliased edge (multiplied over the paint) so strokes stay smooth, not jagged.
    const value = src[index + 3] <= 16 || lum >= 235 ? 255 : lum < IMAGE_DISPLAY_LINE_LUMINANCE ? Math.min(lum, 40) : lum;
    display.data[index] = value;
    display.data[index + 1] = value;
    display.data[index + 2] = value;
    display.data[index + 3] = 255;
  }
  return display;
}

function buildImageRegionMask(point) {
  if (!state.lineArtData && !prepareImageRegionEngine()) return null;
  const source = state.lineArtData;
  const width = source.width;
  const height = source.height;
  const startX = clamp(Math.round(point.x), 0, width - 1);
  const startY = clamp(Math.round(point.y), 0, height - 1);
  const startIndex = (startY * width + startX) * 4;
  if (imagePixelIsBoundary(source.data, startIndex)) return null;

  const visited = new Uint8Array(width * height);
  const stack = new Int32Array(width * height);
  let top = 0;
  let count = 0;
  let minX = startX;
  let maxX = startX;
  let minY = startY;
  let maxY = startY;
  stack[top++] = startY * width + startX;

  while (top) {
    const pixel = stack[--top];
    if (visited[pixel]) continue;
    const x = pixel % width;
    const y = (pixel / width) | 0;
    const dataIndex = pixel * 4;
    if (imagePixelIsBoundary(source.data, dataIndex)) continue;

    visited[pixel] = 1;
    count += 1;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;

    if (x > 0 && !visited[pixel - 1]) stack[top++] = pixel - 1;
    if (x < width - 1 && !visited[pixel + 1]) stack[top++] = pixel + 1;
    if (y > 0 && !visited[pixel - width]) stack[top++] = pixel - width;
    if (y < height - 1 && !visited[pixel + width]) stack[top++] = pixel + width;
  }

  if (!count || count > width * height * MAX_IMAGE_REGION_RATIO) return null;
  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = width;
  maskCanvas.height = height;
  const maskCtx = maskCanvas.getContext('2d');
  const maskImage = maskCtx.createImageData(width, height);
  const output = maskImage.data;
  for (let i = 0; i < visited.length; i += 1) {
    if (!visited[i]) continue;
    const out = i * 4;
    output[out] = 255;
    output[out + 1] = 255;
    output[out + 2] = 255;
    output[out + 3] = 255;
  }
  maskCtx.putImageData(maskImage, 0, 0);
  return { canvas: maskCanvas, count, bounds: { minX, minY, maxX, maxY } };
}

function selectImageRegion(point) {
  const region = buildImageRegionMask(point);
  if (!region) {
    setStatus('Tap inside area');
    return false;
  }
  state.regionMaskCanvas = region.canvas;
  setStatus('Region locked');
  return true;
}

function pointInImageRegion(point) {
  if (!state.regionMaskCanvas) return false;
  const x = clamp(Math.round(point.x), 0, state.regionMaskCanvas.width - 1);
  const y = clamp(Math.round(point.y), 0, state.regionMaskCanvas.height - 1);
  const alpha = state.regionMaskCanvas.getContext('2d').getImageData(x, y, 1, 1).data[3];
  return alpha > 0;
}

function tapFillImageRegion(event) {
  const point = pointFromEvent(event);
  const region = buildImageRegionMask(point);
  if (!region) {
    setStatus('Tap inside area');
    return;
  }
  pushHistory();
  state.regionMaskCanvas = region.canvas;
  applyColorToImageRegion(region.canvas);
  saveCanvas();
  setStatus('Filled');
}

function applyColorToImageRegion(maskCanvas) {
  const paint = ensurePaintCanvas();
  const ctx = paint.getContext('2d');
  const scratch = ensureScratchCanvas();
  const scratchCtx = scratch.getContext('2d');
  scratchCtx.clearRect(0, 0, scratch.width, scratch.height);
  scratchCtx.globalCompositeOperation = 'source-over';
  scratchCtx.fillStyle = state.color;
  scratchCtx.fillRect(0, 0, scratch.width, scratch.height);
  scratchCtx.globalCompositeOperation = 'destination-in';
  scratchCtx.drawImage(maskCanvas, 0, 0);
  scratchCtx.globalCompositeOperation = 'source-over';
  ctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(scratch, 0, 0);
  renderDisplayCanvas();
}

function drawMaskedStroke(from, to) {
  drawMaskedStrokePath(from, [to]);
}

function drawMaskedStrokePath(from, points) {
  if (!state.regionMaskCanvas) return;
  const scale = imageCanvasScale();
  const lineWidth = Number(els.brushSize.value) * scale;
  const allPoints = [from, ...points];
  const padding = Math.ceil(lineWidth / 2) + 3;
  const minX = clamp(Math.floor(Math.min(...allPoints.map(point => point.x)) - padding), 0, els.canvas.width);
  const minY = clamp(Math.floor(Math.min(...allPoints.map(point => point.y)) - padding), 0, els.canvas.height);
  const maxX = clamp(Math.ceil(Math.max(...allPoints.map(point => point.x)) + padding), 0, els.canvas.width);
  const maxY = clamp(Math.ceil(Math.max(...allPoints.map(point => point.y)) + padding), 0, els.canvas.height);
  const width = maxX - minX;
  const height = maxY - minY;
  if (width < 1 || height < 1) return;

  const scratch = ensureScratchCanvas();
  const scratchCtx = scratch.getContext('2d');
  scratchCtx.clearRect(minX, minY, width, height);
  scratchCtx.globalCompositeOperation = 'source-over';
  scratchCtx.lineCap = 'round';
  scratchCtx.lineJoin = 'round';
  scratchCtx.lineWidth = lineWidth;
  scratchCtx.strokeStyle = state.tool === 'eraser' ? '#000' : state.color;
  scratchCtx.beginPath();
  scratchCtx.moveTo(from.x, from.y);
  points.forEach(point => scratchCtx.lineTo(point.x, point.y));
  scratchCtx.stroke();
  scratchCtx.globalCompositeOperation = 'destination-in';
  scratchCtx.drawImage(state.regionMaskCanvas, minX, minY, width, height, minX, minY, width, height);
  scratchCtx.globalCompositeOperation = 'source-over';

  const paint = ensurePaintCanvas();
  const ctx = paint.getContext('2d');
  ctx.globalCompositeOperation = state.tool === 'eraser' ? 'destination-out' : 'source-over';
  ctx.drawImage(scratch, minX, minY, width, height, minX, minY, width, height);
  ctx.globalCompositeOperation = 'source-over';
  renderDisplayCanvasRegion({ minX, minY, maxX, maxY });
}

function imageCanvasScale() {
  const rect = els.canvas.getBoundingClientRect();
  return rect.width ? els.canvas.width / rect.width : 1;
}

function ensureScratchCanvas() {
  if (!state.scratchCanvas || state.scratchCanvas.width !== els.canvas.width || state.scratchCanvas.height !== els.canvas.height) {
    state.scratchCanvas = document.createElement('canvas');
    state.scratchCanvas.width = els.canvas.width;
    state.scratchCanvas.height = els.canvas.height;
  }
  return state.scratchCanvas;
}

function pointFromEvent(event) {
  const rect = els.canvas.getBoundingClientRect();
  const scaleX = els.canvas.width / rect.width;
  const scaleY = els.canvas.height / rect.height;
  return { x: (event.clientX - rect.left) * scaleX, y: (event.clientY - rect.top) * scaleY };
}

function isMobileReader() {
  return window.matchMedia?.(MOBILE_READER_QUERY).matches || window.innerWidth <= 920;
}

function imageCanvasSize(image, rect) {
  const naturalWidth = Math.max(1, image?.naturalWidth || Math.round(rect.width));
  const naturalHeight = Math.max(1, image?.naturalHeight || Math.round(rect.height));
  if (!isMobileReader()) return { width: naturalWidth, height: naturalHeight };

  const ratio = naturalHeight / naturalWidth;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let width = Math.min(naturalWidth, Math.max(1, Math.round(rect.width * pixelRatio)));
  let height = Math.max(1, Math.round(width * ratio));
  const largestEdge = Math.max(width, height);
  if (largestEdge > MOBILE_IMAGE_MAX_EDGE) {
    const scale = MOBILE_IMAGE_MAX_EDGE / largestEdge;
    width = Math.max(1, Math.round(width * scale));
    height = Math.max(1, Math.round(height * scale));
  }
  return { width, height };
}

function resizeCanvas() {
  const page = bookRoot().querySelector('.page');
  if (!page) return;
  const previous = isImageBook(state.book)
    ? paintCanvasDataUrl()
    : (els.canvas.width > 1 && els.canvas.height > 1 ? els.canvas.toDataURL('image/png') : '');
  const rect = page.getBoundingClientRect();
  const image = isImageBook(state.book) ? bookRoot().querySelector('.image-page img') : null;
  const ratio = isImageBook(state.book) ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const imageSize = isImageBook(state.book) && image?.naturalWidth ? imageCanvasSize(image, rect) : null;
  els.canvas.width = imageSize ? imageSize.width : Math.max(1, Math.round(rect.width * ratio));
  els.canvas.height = imageSize ? imageSize.height : Math.max(1, Math.round(rect.height * ratio));
  els.canvas.style.width = `${rect.width}px`;
  els.canvas.style.height = `${rect.height}px`;
  els.readerStage.style.minHeight = `${rect.height}px`;
  if (isImageBook(state.book)) {
    state.paintCanvas = null;
    resetImageRegionEngine();
    ensurePaintCanvas();
    prepareImageRegionEngine();
    if (previous.length > 100) drawDataUrl(previous);
    else renderDisplayCanvas();
    return;
  }
  if (previous.length > 100) drawDataUrl(previous);
}

function drawDataUrl(dataUrl) {
  const img = new Image();
  img.onload = () => {
    if (isImageBook(state.book)) {
      const paint = ensurePaintCanvas();
      const ctx = paint.getContext('2d');
      ctx.clearRect(0, 0, paint.width, paint.height);
      ctx.drawImage(img, 0, 0, paint.width, paint.height);
      renderDisplayCanvas();
      return;
    }
    const ctx = els.canvas.getContext('2d');
    ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
    ctx.drawImage(img, 0, 0, els.canvas.width, els.canvas.height);
  };
  img.src = dataUrl;
}

function pushHistory() {
  state.undo.push(captureState());
  if (state.undo.length > 20) state.undo.shift();
  state.redo = [];
}

function captureState() {
  return {
    fills: getFillData(),
    canvas: isImageBook(state.book) ? paintCanvasDataUrl() : els.canvas.toDataURL('image/png')
  };
}

function restoreState(snapshot) {
  applyFillData(snapshot.fills);
  clearCanvas();
  drawDataUrl(snapshot.canvas);
  saveFills();
  saveCanvas();
}

function undo() {
  if (!state.undo.length) return;
  state.redo.push(captureState());
  restoreState(state.undo.pop());
  setStatus('Undo');
}

function redo() {
  if (!state.redo.length) return;
  state.undo.push(captureState());
  restoreState(state.redo.pop());
  setStatus('Redo');
}

function resetPage() {
  pushHistory();
  localStorage.removeItem(fillKey());
  localStorage.removeItem(canvasKey());
  renderPage();
  setStatus('Reset');
}

function getFillData() {
  return [...bookRoot().querySelectorAll('.colorable-shape')].map(node => ({
    id: node.dataset.colorId,
    fill: node.getAttribute('fill'),
    styleFill: node.style.fill
  }));
}

function applyFillData(data = []) {
  const map = new Map(data.map(item => [item.id, item]));
  bookRoot().querySelectorAll('.colorable-shape').forEach(node => {
    const item = map.get(node.dataset.colorId);
    if (!item) return;
    if (item.fill === null) node.removeAttribute('fill'); else node.setAttribute('fill', item.fill);
    node.style.fill = item.styleFill || '';
  });
}

function saveFills() {
  localStorage.setItem(fillKey(), JSON.stringify(getFillData().filter(item => item.styleFill || item.fill)));
}

function restoreFills() {
  const raw = localStorage.getItem(fillKey());
  if (!raw) return;
  try { applyFillData(JSON.parse(raw)); } catch { localStorage.removeItem(fillKey()); }
}

function saveCanvas() {
  const canvas = isImageBook(state.book) ? state.paintCanvas : els.canvas;
  if (!canvas) return;
  try { localStorage.setItem(canvasKey(), canvas.toDataURL('image/png')); } catch { setStatus('Storage full'); }
}

function restoreCanvas() {
  clearCanvas();
  const data = localStorage.getItem(canvasKey());
  if (data) drawDataUrl(data);
}

function clearCanvas() {
  if (isImageBook(state.book)) {
    const paint = ensurePaintCanvas();
    paint.getContext('2d').clearRect(0, 0, paint.width, paint.height);
    renderDisplayCanvas();
    return;
  }
  const ctx = els.canvas.getContext('2d');
  ctx.clearRect(0, 0, els.canvas.width, els.canvas.height);
}

function goPage(page) {
  const next = clamp(page, 1, state.book.pages);
  if (next === state.page) return;
  state.page = next;
  location.hash = `book=${state.book.id}&page=${state.page}`;
}

function setZoom(value) {
  state.zoom = clamp(Number(value.toFixed(2)), .65, 1.65);
  els.readerStage.style.setProperty('--zoom', state.zoom);
  resizeCanvas();
}

function updateReaderMeta() {
  els.readerBookMeta.textContent = `${state.book.thai} · Page ${state.page} / ${state.book.pages}`;
  els.pageSlider.value = state.page;
  els.prevPageButton.disabled = state.page === 1;
  els.nextPageButton.disabled = state.page === state.book.pages;
}

function markProgress() {
  const key = userKey(`done:${state.book.id}`);
  const done = new Set(JSON.parse(localStorage.getItem(key) || '[]'));
  done.add(state.page);
  localStorage.setItem(key, JSON.stringify([...done]));
}

function saveProgress() {
  localStorage.setItem(userKey(`last:${state.book.id}`), String(state.page));
}

function getBookProgress(book) {
  const done = new Set(JSON.parse(localStorage.getItem(userKey(`done:${book.id}`)) || '[]'));
  return { completed: done.size, lastPage: Number(localStorage.getItem(userKey(`last:${book.id}`)) || 1) };
}

function getUnlockedBookIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(UNLOCK_STORAGE_KEY) || '[]'));
  } catch {
    localStorage.removeItem(UNLOCK_STORAGE_KEY);
    return new Set();
  }
}

function saveUnlockedBookIds(ids) {
  localStorage.setItem(UNLOCK_STORAGE_KEY, JSON.stringify([...ids]));
}

function isBookUnlocked(book) {
  if (!book) return false;
  return FREE_BOOK_IDS.includes(book.id) || getUnlockedBookIds().has(book.id);
}

function unlockBook(bookId) {
  const ids = getUnlockedBookIds();
  ids.add(bookId);
  saveUnlockedBookIds(ids);
}

function normalizeUnlockCode(value) {
  return String(value || '').trim().toUpperCase().replace(/\s+/g, '');
}

function findUnlockCodeMatch(code) {
  return UNLOCK_CODES.find(item => item.code === code);
}

function getUnlockBookIds(match) {
  if (!match) return [];
  if (Array.isArray(match.bookIds)) return match.bookIds;
  return match.bookId ? [match.bookId] : [];
}

function getBookTitleList(bookIds) {
  return bookIds.map(id => BOOKS.find(item => item.id === id)?.title || id).join(', ');
}

function unlockBookWithCode(bookId, rawCode) {
  const book = BOOKS.find(item => item.id === bookId);
  if (!book) return;
  const code = normalizeUnlockCode(rawCode);
  if (!code) {
    setUnlockMessage(bookId, 'กรุณากรอกรหัสจากร้านก่อน', false);
    focusUnlockInput(bookId);
    return;
  }
  const match = findUnlockCodeMatch(code);
  if (!match) {
    setUnlockMessage(bookId, 'รหัสไม่ถูกต้อง กรุณาตรวจสอบรหัสจากร้าน', false);
    focusUnlockInput(bookId);
    return;
  }
  const bookIds = getUnlockBookIds(match);
  if (!bookIds.includes(bookId)) {
    setUnlockMessage(bookId, `รหัสนี้เป็นของเล่ม ${getBookTitleList(bookIds)}`, false);
    return;
  }
  bookIds.forEach(unlockBook);
  state.pendingUnlockBookId = '';
  setStatus(bookIds.length > 1 ? `ปลดล็อกแล้ว ${bookIds.length} เล่ม` : 'ปลดล็อกแล้ว');
  openBook(bookId, getBookProgress(book).lastPage || 1);
}

function requestBookUnlock(book) {
  state.pendingUnlockBookId = book.id;
  showLibrary();
  setStatus('ใส่รหัส');
  setUnlockMessage(book.id, 'เล่มนี้ต้องใช้รหัสจากร้านก่อนเริ่มระบาย', false);
  if (location.hash) {
    history.replaceState(null, '', `${location.pathname}${location.search}#`);
  }
  requestAnimationFrame(() => focusUnlockInput(book.id));
}

function focusUnlockInput(bookId) {
  const input = document.querySelector(`[data-unlock-input="${bookId}"]`);
  input?.focus({ preventScroll: true });
  input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function setUnlockMessage(bookId, message, success) {
  const node = document.querySelector(`[data-unlock-message="${bookId}"]`);
  if (!node) return;
  node.textContent = message;
  node.classList.toggle('success', Boolean(success));
}

function processUnlockCodeFromUrl() {
  const params = new URLSearchParams(location.search);
  const code = normalizeUnlockCode(params.get('code') || params.get('unlock'));
  if (!code) return;
  const match = findUnlockCodeMatch(code);
  const cleanUrl = new URL(location.href);
  cleanUrl.searchParams.delete('code');
  cleanUrl.searchParams.delete('unlock');
  if (!match) {
    history.replaceState(null, '', `${cleanUrl.pathname}${cleanUrl.search}${location.hash || '#'}`);
    setStatus('รหัสไม่ถูกต้อง');
    return;
  }
  const bookIds = getUnlockBookIds(match);
  bookIds.forEach(unlockBook);
  const nextHash = `#book=${bookIds[0]}&page=1`;
  history.replaceState(null, '', `${cleanUrl.pathname}${cleanUrl.search}${location.hash || nextHash}`);
  setStatus(bookIds.length > 1 ? `ปลดล็อกแล้ว ${bookIds.length} เล่ม` : 'ปลดล็อกแล้ว');
}

function fillKey() { return userKey(`fills:${state.book.id}:${state.page}`); }
// Bump LINE_ART_VERSION whenever page PNGs are redrawn: paint saved against older art no longer lines up.
const LINE_ART_VERSION = 'a3';
function canvasKey() { return userKey(`canvas:${LINE_ART_VERSION}:${state.book.id}:${state.page}`); }

function saveArtwork() {
  if (isImageBook(state.book)) {
    saveImageArtwork();
    return;
  }
  const page = bookRoot().querySelector('.page');
  if (!page) return;
  const pageHtml = new XMLSerializer().serializeToString(page);
  const canvasData = els.canvas.toDataURL('image/png');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${els.canvas.width}" height="${els.canvas.height}" viewBox="0 0 ${els.canvas.width} ${els.canvas.height}"><foreignObject width="100%" height="100%">${pageHtml}</foreignObject><image href="${canvasData}" x="0" y="0" width="${els.canvas.width}" height="${els.canvas.height}"/></svg>`;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${state.book.id}-page-${state.page}-artwork.svg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setStatus('Downloaded');
}

function saveImageArtwork() {
  const output = document.createElement('canvas');
  output.width = els.canvas.width;
  output.height = els.canvas.height;
  const ctx = output.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, output.width, output.height);
  ctx.drawImage(els.canvas, 0, 0);
  const link = document.createElement('a');
  link.href = output.toDataURL('image/png');
  link.download = `${state.book.id}-page-${state.page}-artwork.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setStatus('Downloaded');
}

async function installApp() {
  if (!state.deferredInstall) return;
  state.deferredInstall.prompt();
  await state.deferredInstall.userChoice;
  state.deferredInstall = null;
  els.installButton.hidden = true;
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('service-worker.js')
    .then(() => setStatus('Offline ready'))
    .catch(() => setStatus('Online only'));
}

function setStatus(text) {
  els.statusPill.textContent = text;
}

function bookRoot() {
  if (!els.pageHost.shadowRoot) {
    els.pageHost.attachShadow({ mode: 'open' });
  }
  return els.pageHost.shadowRoot;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}















