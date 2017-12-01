"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6760266244cd978a890181b82293679c"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/main.e2471618.js","d91d23fa6140e38c6d94ef79dfb977c1"],["/static/media/browserify_scope.d62873c6.png","d62873c6d25f45231cd5a11009aa6534"],["/static/media/default_export.6898eae9.png","6898eae938d8188c9ac419d651488bcd"],["/static/media/default_import.9ed35643.png","9ed35643105e4055b27939696fe19cdc"],["/static/media/export_from.96320057.png","96320057e006f531512ab8b064b2104e"],["/static/media/export_from_before.9b6580ff.png","9b6580ffb9338e839472449384831327"],["/static/media/export_ns.ed706017.png","ed706017c3c96930944514a17da66291"],["/static/media/module1.934e423a.png","934e423a587eeb666aa47cf4db6fb351"],["/static/media/module1_compiled.688c527d.png","688c527dd90e4f58ad5ca9e1cd05ae3b"],["/static/media/named_export.963a23e0.png","963a23e0679ac25135fa976ea3569de0"],["/static/media/named_import.c8cf20f0.png","c8cf20f055d1a09286335967c3be3908"],["/static/media/named_import_ns.d34b79d5.png","d34b79d586d6e2fb54f0e73208f2bc53"],["/static/media/plugins.86430075.png","8643007558c082a3cf851f527690934d"],["/static/media/rollup.753a87a1.svg","753a87a10f0ea9dbb2438b3402dd651d"],["/static/media/rollup_config.2e7a79d8.png","2e7a79d8cebd361775b76a0fb8e51c4b"],["/static/media/treeshaking1.718e8fdd.png","718e8fdd7cfd56c5d753c05350346671"],["/static/media/treeshaking2.16f04884.png","16f0488472d3acf4226f6bde3066ad11"],["/static/media/treeshaking3.ce480c6e.png","ce480c6e75a7125f455ca73c62fb4502"],["/static/media/twitter.2b3ca9fb.png","2b3ca9fbebb1836393297a11acea779e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});