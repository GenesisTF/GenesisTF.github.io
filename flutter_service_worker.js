'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8071042edb5d91ae3d45536ff407e27b",
"version.json": "9f0ff7c4946a01a9498da88473abbeff",
"index.html": "0c75504aee931d68e841f8896f911087",
"/": "0c75504aee931d68e841f8896f911087",
"main.dart.js": "b713dbc333b1d6dc22d59e4453064c4c",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "144ecef3a7ea8aa7a017a99e20abf99d",
".git/config": "097d1bdcd50013424f58626067dcc33b",
".git/objects/68/07df19af7ecf68617be034608be17a51b77235": "a5fab16e2bc0dddb5f458fee98370ecb",
".git/objects/03/b8216cce2ff4c63ce13c724f2a4a93f320923c": "26350101349c12046dfa8ac7f3f2f39a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/c9b88eb1fa7278a59149cab3c74011041c820d": "a5e5cef28c569fe8703dd0b79489fc60",
".git/objects/3c/40812e2d21e6f1d9b8117f28c01531d3c4436f": "62353a7d8307aaeec6321905fe713a56",
".git/objects/56/a545127edf96e64c7defab4ad8481dc24601e1": "777c38b93faef7afce27375988bff585",
".git/objects/56/d2def1d4637177900d7d8fb5fae4d8c4cb4eaf": "603e63a05fabd7ff55479cd0f43872d5",
".git/objects/3d/f02e8bfc80456100f7ebadf3f2bafea83855b0": "5f319314f0261250d29ecb5dcbf4858e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/080ac9d39f230151cb3fb2cc3a4ba6ca44fccc": "a0901e95fe2824c29948aed6ba5d01e2",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/b5/7450283434d34ffc326fd84e2671e12f4e0189": "0c40861d5d1fbcf0a36edf6a77a23d22",
".git/objects/ac/b415070244bab2d720adac8cff7853df8f87db": "6651da320b60aa7c67aed4ff88fd2238",
".git/objects/bb/64b6c664589cdc83a138063e29af19968a1ac0": "a07ab30650a53375dd5f8620f8634705",
".git/objects/be/0f59b8c456b59404359668272ba3f5826af256": "d4b384dff23604c35009ae8223619064",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/7517d60d248cff702fa32696a714d095c859e8": "6f5bf8fdd796661b4392d8d4619d0c20",
".git/objects/a5/db31033583d4a803195f4f069df03cfa21fe7f": "9b2ee674c72b1c7fab21b43f8712be0b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/350763fe75ae2ae3079703630fd77daaa82a39": "a62b85c51eab42f8802f57b9bfca1bc5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/780e3968b903ede2a8a92c1ba0d510212a0b91": "558fde1374ed429cea6d713e92a8803a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ec/9b5c52bef8bf1adaa95f8e8cc0fd3b2b57b0a3": "e36ae087c6b0982e8351d53566d98e8a",
".git/objects/ec/b6475c80307c53d80b9758f207b5cf6604edf7": "1a4b768dccc71c6a0180e0651b966bf9",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/7b99e4085275ffd620d39565af5a1f496d5449": "cd5375fe7a34b61dfa5a215bee7dc78a",
".git/objects/7c/463e66588a6ad18c7fe1d78c25c8be8540ba20": "21481b3b1cb284379ae9cdbd195a2c7d",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/a07bb5f51a2e250f56924248c7eae35c8e916f": "93963de03e749bf3969160a9d1d345e8",
".git/objects/74/375303bfef6c71b534a5c52804d02e618bb951": "b3a8f05926c8cbb0273167d56ff082a4",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/54c892d9b789a7e777d6e8483a5f4320bce18b": "889f95c3295e920a7f5876c4781793d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/ccd371156baf1e6eacc4eb7f71c4fbdba5bd1a": "17b3b90bd1255a32f60a3caf0826314e",
".git/objects/43/0dc42d81c1fd2e317ea726c108cf97ef7a2a6e": "303cbcbf7b70f7e8744db9e3b281c170",
".git/objects/88/dc7edd7d6ef098feda3de74e4ccc7382da97ed": "6528d660a5ba0e45d836507d23a030ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/b30820aec01435ed214d8027dc26d5b814c4c7": "c01df8b52ff7d2b6667e31e0c9c8cd82",
".git/objects/6e/7e6a7acb10a1383fe8067fe2d048a786ee8355": "57737c4298c87cf0e5d171aa2ac5118b",
".git/objects/9a/d63d86a4a360d60448a4c004ca127a4e6f2eab": "3f921a2b889501c36a3f18b909e42a97",
".git/objects/36/70d805ad2094a466ce5dae082edb73c53847ab": "69bc49e01416c585d48dc276c5553240",
".git/objects/5c/74faed4bca638af5269fa3055cb570b995afdf": "0b21ddf4b2baf12477b98bb05a66001b",
".git/objects/5c/57bb13003e3b0dd5baccdfc1fd61765cefc81b": "a506ba529d9110aa01cdd0e6955293ee",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/455319a820db2e48dd8e833c23fbc3023365ae": "913ca2c43151f3f8b55a6ff94f70c3f9",
".git/objects/01/cbfc72c50d18dcb7a8fd28c77d1186ac3432cf": "deab9ecd1006f035bc46bf485b4d798b",
".git/objects/39/a7368a4e0f6476ad827a5fb3cc802e25e446b2": "a04bcd508590d56afb52a7037f62fc1b",
".git/objects/97/b854522e5a878e4caedeb1fa22dad92a29c933": "b8f2439b74db3f5f42fe39d8a52855fd",
".git/objects/0a/b1f9e270843415d6cd9b5187335d53b767d5b2": "0986b2e2229e5f2e193ed1941e4610b0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/a40c83b733029fc13b80891d4bcb06b64cc391": "73486e5bab1bc907688a979b01e20abc",
".git/objects/b8/e55de2934a6188d924c4f731ddd846305a3237": "cf6889bfa70f91fa95181dfaf423c8c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/01db2f90d90dba40e7798ce98d6cbd4309f8e8": "493b3fb7cd1295b88789ad1eff4d6cf0",
".git/objects/a1/9531529c743f305316614c21541be095fd711c": "579156fee4ed9a4266db33ad3406cd6f",
".git/objects/ea/b46f7043c434b607bfce8a3569ef3e81fcf0f7": "ad59c982ac9d76913ae4018b7d9530ed",
".git/objects/ea/1dc76eba92bf335c284ea4fae1c8bfe8d68636": "df73cd8c5cff2db8cbeb7229a92a1178",
".git/objects/e1/a8dea1ee269d7c4d334767650fb47d68406114": "f1fbab69999528432b0fb69f6a454efd",
".git/objects/e6/ef7618c0a2e26ce4679550d9c9dad43ea8a1e5": "cfa390ac2184a763e0a4b0ae2b19af4b",
".git/objects/f6/457708de98040aeccf753fb026ca878206eefc": "2ed33cabb438a7dac6542ba61b2e7cfd",
".git/objects/e9/118b31004aa2382e1ec6ea8da580111ea5a2fe": "029ab7d26baa18b5edda97684677d4e5",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/e7/f2e125e117c71a7f755d3364cb7cdebcc7bfa3": "c42d1affca6e5d2fadee38f4dc336f19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/1b/4af3e4084f50406d1fa4dbd0c0ad0159ef263c": "b9aa10e6ae4aff1a0a2712ff91ab471a",
".git/objects/48/58e7872eba64b7f7fbaf98efa8c71de6dd8b75": "ade37ba7dab04e09112911dec00f3a1e",
".git/objects/84/9c95b35437fd9a0c5bf8caed2b7dd04fccc95d": "1130d1f7c22b320ef4a2a7010ae17560",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/ea570d5810ed1515bab2a82eed7af6c29587c0": "b0c5ca530bbd0239f91af6d8065c54af",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c3a6f993e1d2b836106e3eba5bc68f25604130": "6b3d04957d1662d4b52b51ee62deeb05",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/b6eeaf0472f543f4c71b063fcee87329d79072": "d42ce4306d0d08f9f80e19674d74dd51",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/13/1d200430b3c929fa10ba7792af3f5e75b7b513": "d7f0266583c0a69de65d416c8e76dd2c",
".git/objects/14/50491522d2ff92ffbda19e3ab1fb7c52e28e63": "a0b1cd5dec4b914d2ba7695e45009544",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61415af606ef277bcec5122adb5f8883",
".git/logs/refs/heads/main": "61415af606ef277bcec5122adb5f8883",
".git/logs/refs/remotes/origin/main": "daeedd24ee3ccd67094f74f1822186cc",
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
".git/refs/heads/main": "37492fe95b3aa863d24c1dcb733395ca",
".git/refs/remotes/origin/main": "37492fe95b3aa863d24c1dcb733395ca",
".git/index": "bb9f0e7fa21c5e4f87bb34a86a5ebb33",
".git/COMMIT_EDITMSG": "c54d25e18c9ce594f2bc8a15676d6442",
"assets/AssetManifest.json": "dfcae73965ea053f3e5de7381befa61f",
"assets/NOTICES": "009f23b5d6c58c6949c3547353b48e20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f88f094834ed54a4964440b6b4f9a6e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "63e261fc7a18ca4a30e6c42e51994253",
"assets/fonts/MaterialIcons-Regular.otf": "fa8fe036a53be0c0b21439d8dbf97315",
"assets/assets/fondo.jpeg": "444a751828c82fe4e288cd3828ebda02",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
