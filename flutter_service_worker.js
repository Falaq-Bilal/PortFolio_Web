'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "889feb883fc486a5a655a5aacf982435",
".git/config": "0c997855ae5b1f949ea7e74454f588c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "55d3cc85a005c6f09f863e958d97248f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f27b9c9ec1f7aeeab5222aec72930ef0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2be6da390683109bebe43db362f6c80f",
".git/logs/refs/heads/master": "2be6da390683109bebe43db362f6c80f",
".git/logs/refs/remotes/origin/HEAD": "a5a392079e0ecb0076357ccf4637dcc0",
".git/logs/refs/remotes/origin/master": "5fd729a633619904923e757b50f7eab9",
".git/objects/0b/a82305f82b2242b40f3317e18e8a0165397ee8": "185084a57c8865390a9b22fa5bfbea5d",
".git/objects/18/b7cd435996b45e6278576053f1f65577e8ea93": "2d4b81c9e82c41332639c7fa1c839f42",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/c3980085b0f644b3a0c4c56417cac16f086711": "4787ccbce607d53c262cadbafd53a823",
".git/objects/2d/5e9a513a2bc6a53f111ef43d2adfd15c3326aa": "25a34463600c5db79076ab4c243ce608",
".git/objects/30/915a32b382c404251fc100a723f6c46c281d0d": "577a197851f69e0c864431e14ebee4c9",
".git/objects/36/ba6d1dee93c4c957b378fd11d832378cff1149": "01b36e34cb274941e1e5da8c359f9d9a",
".git/objects/39/d6cd4949b512298eb5f58d8392ab5b3bbf1c21": "a3348b50ef0e4af86883cad822f3a7b6",
".git/objects/3a/1e1b78e9a6fbb7269a9e8db9809671eefbf8f1": "7e242d2566fbdba49fdcc27ecc8ba8df",
".git/objects/3e/7a0d64daddd930cde8319d253a9a44d2015a55": "76c8e0121aee0b22dcc19bf5431ba020",
".git/objects/42/e1894907bebd6d1ed57df2a1306cedab8abd4f": "c31f6e300e6e70558336fd7d54bba816",
".git/objects/45/a871f9c46cc013b48010c904dfcf6c66e6395b": "e665e822ee553d3d471205e56f04721d",
".git/objects/45/b7db32e9b231e0bc218d1d33935244ecd4166b": "6434ce0f3577b937139b3012ccfb15bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/97d8bd168655c5037436b317e7eaa42e95b5d0": "a36d016860c4703bffcce9a235eccae8",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/e684a3c18a0c90d2db1de41244ef5988edff83": "8cf40fa0791a710e111b66cc66827203",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/054080b51945a788685256e0e1193a7e829cc8": "cd47a9a17b21736846fdcb14d4e21061",
".git/objects/67/275e257b36865bdfad859982b9a7cb659175c5": "c22937e96e507870dc5a28ae065e2d97",
".git/objects/68/bfc47ed77706a45709916ce0a3943290804af0": "e19e2401b662391d4ad1f68f693690c8",
".git/objects/6a/45a6a1d819d5ec84ecda8764aba55913fe7400": "fefdffce1d7e50fddf2d55e8857e43e0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/53475c7e87d86198af02e06f7657d18fe9c5d9": "c3737d452a94d8b7be3b6632672309fb",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/81/66c5270a2cb59f22d447c6861e2f68650d2625": "4a9ae04ca0034d53c2be45f8a5520861",
".git/objects/85/fa31638b9b20a17c5be4dee753999220b5208c": "cdc6ea21317f441c712cb5bb93190ae0",
".git/objects/86/909df19cc43684aee5e1ddf1b76d4076ac6f30": "dec5889a8677908a89952056e6ffb4e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/83c743919f18ac97a4be80b02b209d68a7a9c9": "2e4376028cccae6fadf4f80a53477090",
".git/objects/98/45415dc4f2bc8f5beb508a36964b5e04ba48be": "dd284aec962344870aa002eb63ef5642",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/dbfb85032b93d32e2835ae09948becea7fc39b": "c5b3127e6171c3f473df00a87f8bc3a2",
".git/objects/a8/d8ac6b782601b35e309b20748c98b2731df70b": "40b8b85a82faaadb1ae8402c60e10382",
".git/objects/b2/c1be20c032bef351dc594eb1f39c4948186706": "c6000dfea995daee3477a3968fa7bc9d",
".git/objects/b6/8c9cbc2f7722ca2f3dc97a6611574f58956caf": "530997b264cd28b6a9b0d3ba9caf0c10",
".git/objects/b6/aeafa596ee92fd21f30325d02f36d175a8eb54": "4c4e707a7187376a1f0b3ac4e5924d57",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/89fdce6138ad4f9efdbb2723509d0dd77651ac": "cb7e06001467c9293039f2cb88d4ae3b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/90f3cf7cb1458f8a97b5335f9c0ad9ea68e919": "192d375d133b88aa54c01fac8f58ec79",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/8992382e4d6241d08be5f465632a07d3f774d3": "d6d7874e2a2c280c6cfb1633c65200d2",
".git/objects/d7/d617c85c00932721402a44d5333632e64d991f": "fde2f992e62b1a21535f4c94d081bdf0",
".git/objects/d9/1524f5fa728a9e777b3298f56b83f30b6ca00b": "42ca7569a316072a027fa96a0d414052",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/9d03f220414782234e99f51c05f33c9c49a323": "ebf925d8996b6eb268c2eccc1c5e0103",
".git/objects/e8/4ac19334f7618171e30e33da4c75f03c0c8498": "4d2c1db1a09bc8df41df93e710aa1163",
".git/objects/e8/cff4b08994796834ff2622b9099a84fd2902d2": "2aa043cfad08f8ffee1f40153600709b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/94028735d602c4dd0cd66d2dfe535b9111bba7": "f3c15eb271ac5b927497c6b7c0ecf364",
".git/objects/f7/ad617ee5f60d2c26c8c709bc7c96764cc4c405": "f6509cec61c4efca2da1b40e47c80355",
".git/objects/fa/e4c6f6bc09286f56711dcc31898049190ff47c": "794b96d4bd6f71a565070c3591ac1fef",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "08e3aa0e94aabe1f545cc3622a42634a",
".git/refs/heads/master": "e3c303835a267e3ae344712b02947292",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e3c303835a267e3ae344712b02947292",
".github/workflows/static.yml": "460c55729583fa21ec248ef3b182e75a",
"assets/AssetManifest.bin": "51e813e2d0f521822e7942a6f7137344",
"assets/AssetManifest.bin.json": "1c7106c879dad83b52ff418701370069",
"assets/AssetManifest.json": "f2d45a05b1d5475fe7b6deb00b608cd1",
"assets/assets/cool_bg.png": "51eda9fcc3ad853cb7dcd7538db527a3",
"assets/assets/Falaq.jpg": "a6087d09a4e325b5c84db0e06aebf461",
"assets/assets/google%25202.png": "4afe376102fe2f8e1daadeb092211aa2",
"assets/assets/heart_frame.png": "de99a45debf883e104322dc524e97f82",
"assets/assets/Profile_Page.jpg": "3e8afacc17192e04575034b5f399ae51",
"assets/assets/Sign_Up.jpg": "b83f3d057a6e9b8eb7ac6574e1e86d97",
"assets/assets/whatsapp_screen.jpg": "32e8b67cca064cdf1161fddcc23ca349",
"assets/assets/Youtube_Screen.jpg": "1065a861239df6244c0f3385e1382f99",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "09691fd3ed5ea2c179fb8be14420e6e4",
"assets/NOTICES": "f94f442c3c23139c4274f373b2a1c71f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7821aa4c1634f7e6fe0782432868a969",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "c0aab0a2d59e5dd0737b2142ca028ff5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
