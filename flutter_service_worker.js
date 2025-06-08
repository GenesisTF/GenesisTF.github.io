'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e16c50bfca04c1d99ffe7f5813e34a1f",
"assets/AssetManifest.bin.json": "b1e8f47d589f66a89d5dbff2e019342f",
"assets/AssetManifest.json": "804e192e5963b742848d10c0ee5a9bf7",
"assets/assets/fondo.jpeg": "444a751828c82fe4e288cd3828ebda02",
"assets/assets/fondos/CreacionDeProducto.svg": "97cf8e18f6646b8036141ef5338946fd",
"assets/assets/fondos/CreacionDeProveedor.svg": "56511b9fcb984f62fcfb5f12b5465033",
"assets/assets/fondos/SinCompras.svg": "d87335d54e37246d7386193780d4c4c3",
"assets/assets/fondos/SinCuentas.svg": "ef2ae388dea24c98ba253f88e9d184f5",
"assets/assets/fondos/SinInventario.svg": "4d237c2f882cc97a84fdb29992edde48",
"assets/assets/fondos/SinProveedores.svg": "a23203475c2860a20d1730620e1715d4",
"assets/assets/fondos/SinVentas.svg": "f63481197cae6649eec38ad32229dbaa",
"assets/assets/iconos/Iconos/Aceptar.svg": "0422d8e274572d5f171f9c938900edae",
"assets/assets/iconos/Iconos/Agregar.svg": "9e072d4a0ba6807543211ab9ca8002cd",
"assets/assets/iconos/Iconos/AgregarFoto.svg": "d7cfef0455e5bfcdc4d86bc53b783d94",
"assets/assets/iconos/Iconos/Ajustes.svg": "4d2db03eea9b5fead535556a04149f1c",
"assets/assets/iconos/Iconos/Almacenable.svg": "ed9edcae9a63c1cc7f42a65cd3c778c4",
"assets/assets/iconos/Iconos/Ayuda.svg": "d5d5d26a3c606332bb4a008fab9afdd9",
"assets/assets/iconos/Iconos/Buscar.svg": "3057a021a9283a70f36c937dc43b4135",
"assets/assets/iconos/Iconos/CadenaDeSuministro.svg": "27ee5256f7e97d82a4c22f5e136851e5",
"assets/assets/iconos/Iconos/Calculadora.svg": "6b4b5ba24d2f0d58ad7b2537f0b29c78",
"assets/assets/iconos/Iconos/Calendario.svg": "2fd8a920c2d645088b1813ae22a57beb",
"assets/assets/iconos/Iconos/CDS.svg": "fb5ddbd0839c70afa1b73bf5e5267efa",
"assets/assets/iconos/Iconos/Clientes.svg": "c146f919f35709b449c77ab0713faadb",
"assets/assets/iconos/Iconos/Clientes2.svg": "0c1c26bd7cfe0d5158c7b780c91795d1",
"assets/assets/iconos/Iconos/Compras.svg": "0d50363386ad1a1c55a1285806907014",
"assets/assets/iconos/Iconos/Consumible.svg": "48d5fdfa9dc57e7a98de27ceda1d5750",
"assets/assets/iconos/Iconos/Contabilidad.svg": "e5e4941d7c649d22d3ee3d1a7a02c43d",
"assets/assets/iconos/Iconos/CreacionDeProducto.svg": "912f9df04b3d27266e79943c8fd978ca",
"assets/assets/iconos/Iconos/CreacionDeProveedor.svg": "38700c1ba4ce3bcf17258eb65b90a189",
"assets/assets/iconos/Iconos/Descargar.svg": "2a77220594456cc24c35542f459b8f71",
"assets/assets/iconos/Iconos/Editar.svg": "60ffee2197f592eb43939a60d32ce23e",
"assets/assets/iconos/Iconos/Eliminar1.svg": "370a86d2cab7114e234a304da1f59a5e",
"assets/assets/iconos/Iconos/Eliminar2.svg": "25c91065acb6f7d38e1dfd58c835fc17",
"assets/assets/iconos/Iconos/Eliminar3.svg": "44a8a96d2a7e38d8fa9f3eb5fa7118ab",
"assets/assets/iconos/Iconos/Empleados.svg": "8897919b71dce2b6ad74d07ad0792466",
"assets/assets/iconos/Iconos/Empleados2.svg": "74e4773248a2a912cd1b6abfcc06826e",
"assets/assets/iconos/Iconos/Entradas.svg": "1b306499f9b039aa831e95f65fc71e35",
"assets/assets/iconos/Iconos/Extranjero.svg": "d550243afe696868078d0acf93e272d3",
"assets/assets/iconos/Iconos/Fabricacion.svg": "867fbccbc92e131d5e04b5e291905b76",
"assets/assets/iconos/Iconos/Favoritos1.svg": "444f71a3ef15f0219a6d1154b898b33f",
"assets/assets/iconos/Iconos/Favoritos2.svg": "8de4998ace6dc35e327112ab34aa0ee7",
"assets/assets/iconos/Iconos/Favoritos3.svg": "d960f81c2a79e4c16b89ab9eb03e8230",
"assets/assets/iconos/Iconos/Filtros.svg": "1fb2ef065deafe8b72e1433f6019b83d",
"assets/assets/iconos/Iconos/Finanzas.svg": "bdfe63cba99b07a02e2cc1f9330f2f82",
"assets/assets/iconos/Iconos/Imprimir.svg": "91c9106c7fbeb8875f4e9bf17ded660e",
"assets/assets/iconos/Iconos/Insumo.svg": "05847da63caef1033a42afe48e455996",
"assets/assets/iconos/Iconos/Inventario.svg": "d2a8c38e056f02afeacdffd6144b8a0b",
"assets/assets/iconos/Iconos/Manual1.svg": "98783402bf4e53867737231633da078f",
"assets/assets/iconos/Iconos/Manual2.svg": "42e2773dee18066f6b77219801e4ed3d",
"assets/assets/iconos/Iconos/MenuPrincipal.svg": "d0356812aec61b19034282d5ae8c8abb",
"assets/assets/iconos/Iconos/ModoCuadricula.svg": "0273a971d026be0c6e977c6bfd83ea06",
"assets/assets/iconos/Iconos/ModoLista.svg": "c23396ca8e4f6b8439f1a6757971d1fe",
"assets/assets/iconos/Iconos/MovimientosInternos.svg": "2c0b9557cd686d0e58babc9b38867532",
"assets/assets/iconos/Iconos/Nacional.svg": "c2a6131ec98820938cddaf54d280ed41",
"assets/assets/iconos/Iconos/Notificaciones.svg": "8f33c6e79b55ddcb89226e933e895c96",
"assets/assets/iconos/Iconos/Refrescar.svg": "dff98491b60272e782c01555fef84afd",
"assets/assets/iconos/Iconos/Regresar.svg": "2e50970d6928a4d68739cbff3d7430d4",
"assets/assets/iconos/Iconos/Salidas.svg": "19a52f2b451ca4c3831292591bc45bb6",
"assets/assets/iconos/Iconos/SeleccionMultiple.svg": "fe452bd0bf36a1a8f10cdffb90e2f4f2",
"assets/assets/iconos/Iconos/SinAlmacenes.svg": "3869be19424df9d4d3208e322dbc92ea",
"assets/assets/iconos/Iconos/SinCompras.svg": "46c302e6ad29851c513506096a0366f0",
"assets/assets/iconos/Iconos/SinCuentas.svg": "f3902fb4b07f66bef92fc2b42c638b37",
"assets/assets/iconos/Iconos/SinInventario.svg": "ffffcafd2fc417744cf80b0bcda36022",
"assets/assets/iconos/Iconos/SinProveedores.svg": "1d0fc4e9d1b4758c744ae67e3451f9cd",
"assets/assets/iconos/Iconos/SinVentas.svg": "77eba627d8409240df5ef6d1f7c3eb80",
"assets/assets/iconos/Iconos/Terminado.svg": "406a30376801b6f1396d27bf8951d7b0",
"assets/assets/iconos/Iconos/Usuario.svg": "f2e25b8ccd7a303687866ed5d2718119",
"assets/assets/iconos/Iconos/Ventas.svg": "058d27b2ce29f4686aad9b47607e8a00",
"assets/assets/logo.jpeg": "c97290d204b0a7e0b9558346cc830135",
"assets/assets/logo.png": "4f262fae4bb54fd158300015435c7c52",
"assets/assets/vacio.png": "0b50460eaeaad1303e75211c7433258d",
"assets/assets/vacio_proveedores.png": "600aa67a81230846572aec538fe26b90",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "254ffcc0ae66b748970dbb7cea215519",
"assets/NOTICES": "4281add2bf845585a0ed6f1c5ced8e2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a5ebbaa365529f53259f1940f700c811",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f63dd0b8c4efd11d6bade887154584bc",
"/": "f63dd0b8c4efd11d6bade887154584bc",
"main.dart.js": "b0f28b96deaef7504f78832331b4fbe4",
"manifest.json": "92eb3d3153089018a0a0648b7c3fae60",
"version.json": "9f0ff7c4946a01a9498da88473abbeff"};
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
