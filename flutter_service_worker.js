'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "76cbddd4e9da47bd2cce342b75facc14",
"version.json": "9f0ff7c4946a01a9498da88473abbeff",
"index.html": "0c75504aee931d68e841f8896f911087",
"/": "0c75504aee931d68e841f8896f911087",
"main.dart.js": "5680582f1f444c35818479b80ed9ca6a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "144ecef3a7ea8aa7a017a99e20abf99d",
".git/config": "097d1bdcd50013424f58626067dcc33b",
".git/objects/61/d01eb3138ad2cd2db5c7a0e5d3839628b60ffd": "65b52c142dd308fdd0af1e17f0876126",
".git/objects/95/0c5bb54bc199ca3d5ba6fee071baac39921496": "899faf8108c91c86e56910ccfe1618d5",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/07df19af7ecf68617be034608be17a51b77235": "a5fab16e2bc0dddb5f458fee98370ecb",
".git/objects/03/8928d2c5c746553b3049d1dfe571d6331bdb09": "0f4247335caa91c60d6a7f5661549bc5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/b38d4497e6f0d00f26774b9362e4d1a1d91ef7": "32ee9fe3471d08e2e7d11782425fb3db",
".git/objects/3c/40812e2d21e6f1d9b8117f28c01531d3c4436f": "62353a7d8307aaeec6321905fe713a56",
".git/objects/56/a545127edf96e64c7defab4ad8481dc24601e1": "777c38b93faef7afce27375988bff585",
".git/objects/0e/3e6d941162e57d3e1964ead7779e8ce479a298": "4a9cbaffdb200c880c45a6dbe72cbb7f",
".git/objects/bb/64b6c664589cdc83a138063e29af19968a1ac0": "a07ab30650a53375dd5f8620f8634705",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9fae374228101cf96803788a3f707b4dbdb915": "45e81d05b31e8676645cd65e31094a4e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/f2e5037d55f6f62065e3361d1905245ac11859": "2c8cb42ceb49cc3488c53689d459c72a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b4cd12b93d7f65fa43b654b529ddb5de332d22": "2a0b40b2eb437c4f0f9270b985166680",
".git/objects/e4/0fe385679c92b8a609a6214707d8c91d37640a": "0126b71cb87497b1d41207fe6a69253c",
".git/objects/fb/a1d53bf44631a3c687534683fce73466536aef": "1ae97da81d8f5c3e135c596c6ecd2803",
".git/objects/27/9ebf3b8092e648e1d3be2859345c7412b60cc8": "f54959df5554e470695adc243577982b",
".git/objects/4b/7b99e4085275ffd620d39565af5a1f496d5449": "cd5375fe7a34b61dfa5a215bee7dc78a",
".git/objects/29/536ab6ecbc82a183e6e4c69f1834810cd9b9a8": "6ed26ed233a31941ca2a3279c851e0cf",
".git/objects/7c/463e66588a6ad18c7fe1d78c25c8be8540ba20": "21481b3b1cb284379ae9cdbd195a2c7d",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/7c/b855d5cc83a6442a7c768ef2a9f4ad6da359d8": "1511adaad0e30a79aad630e3db66ee24",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/28/79d3dac1043c9b8dd69a7918a3b3383b37a23c": "e28694e39ce7c0c3a4f7cdf20c9989a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/ccd371156baf1e6eacc4eb7f71c4fbdba5bd1a": "17b3b90bd1255a32f60a3caf0826314e",
".git/objects/72/5287bea9f8acd3a8c952939b71b3bfcb51bf81": "b69de8adb81050f3851b867cd6726bdd",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/0dc42d81c1fd2e317ea726c108cf97ef7a2a6e": "303cbcbf7b70f7e8744db9e3b281c170",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/09/b9f52346a7911ed68a9bccb4f1ba943145f47d": "9b681ffcc5084e653a30db51b46e4f5a",
".git/objects/96/efccd7abc2afc34d81e536ca50944dd1ab43ee": "f28f26325fe15da6844cafdd65cb0b61",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/4df3f6ef127a88ec0fc4389dc09c2dbfb942fe": "d53e833713b7f09803fbc608c0e58358",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5b/907057d26d81ae53565420e93a90d960d402bd": "9aad61bc1395a92fc0cbcce36ba780a7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/e2deb3947d9c186821199c33301d130d8ab499": "3c07aeb3c280e23118e2252691725502",
".git/objects/39/999a1ae0c8285ebdda56cdd9c6338e09ceaa3f": "d680abb63460896dd92a9310b3e80a3b",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/230107f18b8f7fc2cac38ceb4eab4df3d7f9ac": "75b5cede2bbc3613644f8d6c211c1da9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/99cc34c7087489c23d889be294374730ebfc51": "f1727713c45da2f753a14f1118a903ba",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/8d87c20d4a24ccef848717a5fa9bb9bd5b3ee4": "e93c6c15776eddbd1fc9fcb4247d8299",
".git/objects/ea/1368ac722a67200ce7f46df0e0fe0fc8cffbb7": "7b9d6853bbb398a660be743d953b807e",
".git/objects/f0/7802ddc9cd0afaaee644d6746a0cf25a5e02c6": "d3eee055650d5bff7e096573c0a2efbf",
".git/objects/f7/b44e8d8bb7bbee181dd1f6d07c5c26ab340ab5": "0b32cbfbdf177b7a08868d80dd5952fa",
".git/objects/fa/d41821dbc02062a3909c41faa32ab7c2143d5d": "6a8f3315fa80dc112945dcdad2021684",
".git/objects/f6/457708de98040aeccf753fb026ca878206eefc": "2ed33cabb438a7dac6542ba61b2e7cfd",
".git/objects/e7/f84c5dc6ee3d00cb111edae87d7f4f25e2bad1": "c298b4f913ca14018aa187d4756965a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/4af3e4084f50406d1fa4dbd0c0ad0159ef263c": "b9aa10e6ae4aff1a0a2712ff91ab471a",
".git/objects/48/58e7872eba64b7f7fbaf98efa8c71de6dd8b75": "ade37ba7dab04e09112911dec00f3a1e",
".git/objects/70/84b303922bd929a0f4f9bdc249333ce2f359c0": "b60d3325d2b1bff8fda50b0e4e7c5e31",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/2274091071f56e3004bcdb459f19252fe2cfde": "96665d6b421b94b309c6379e37e1806c",
".git/objects/85/772c4d9bf79d5bcf9f22383d04c9a90b279cdf": "ae4d6fe84ffafc786bbaaa44dd3a1d9f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/b0bc899d7368e6f26387d0811e5344ce82fdde": "76e05e57393c1a46a2d882a3775807e1",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/7f/b90cd84fdd34839e9531f6742e270be629ccf4": "beb1d203914d0583f89f8cbd65e8cec2",
".git/objects/14/50491522d2ff92ffbda19e3ab1fb7c52e28e63": "a0b1cd5dec4b914d2ba7695e45009544",
".git/objects/22/5509b4a48c0b527239286bfd63658e4228f407": "86bb2708a0a58a3659cc5b15eed9f74d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad8d1dd95763ab0606d89448be735ad4",
".git/logs/refs/heads/main": "ad8d1dd95763ab0606d89448be735ad4",
".git/logs/refs/remotes/origin/main": "73e46e4a399b3a772af5b17ac90a2795",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ede26e9b20335cd967fc11efd0c07268",
".git/refs/remotes/origin/main": "ede26e9b20335cd967fc11efd0c07268",
".git/index": "52d09bdd1b91183232a29aa86b9197fa",
".git/COMMIT_EDITMSG": "6913daa8ce5975a89f0187c952fe6da6",
"assets/AssetManifest.json": "dfcae73965ea053f3e5de7381befa61f",
"assets/NOTICES": "1df611ffab39f711fdb80e65ed1132f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f88f094834ed54a4964440b6b4f9a6e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "63e261fc7a18ca4a30e6c42e51994253",
"assets/fonts/MaterialIcons-Regular.otf": "82b9c8e2d79ac2b2cd391f0e1fa32284",
"assets/assets/fondo.jpeg": "444a751828c82fe4e288cd3828ebda02",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
