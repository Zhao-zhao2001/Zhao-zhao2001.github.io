if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,s)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/05/hello-world/index.html",revision:"c7f52076ee1c8fb7d89d18543deecc46"},{url:"404.html",revision:"36257b12d5bc0aa303bb3955eb0f013a"},{url:"archives/2021/04/index.html",revision:"820185b1bd200319f970c6734aae7aef"},{url:"archives/2021/index.html",revision:"04bc9784f2c562c99d83ed4a58cc6630"},{url:"archives/index.html",revision:"123c0c2ea2580067ab7c6892e9a262b3"},{url:"css/index.css",revision:"0b5369c1ee66695521649a4514c2c793"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/001.jpg",revision:"9c2a8ca608b20f06b08089b12ac3dd52"},{url:"img/002.jpg",revision:"8baa514f1a92cd5673db39412b34c8fc"},{url:"img/003.jpg",revision:"d8409e910d9c98774fbd8b10533d562d"},{url:"img/004.jpg",revision:"d2158376b341f44674dce876eac958cf"},{url:"img/005.jpg",revision:"ca77394fbcc09cbc8e1aaa6ba8074ee0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/back_1.png",revision:"18d5fec7df9a1bbd9aff9aa9d92d3687"},{url:"img/back_2.png",revision:"051d04cd6d06d49555b93ca423664a1a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/self.png",revision:"d381093c549af2ed151f712d7d992455"},{url:"index.html",revision:"c84919b52a7a35e0ae392c3206d81334"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"d3608765b00c1cef1d6f664d20169eb3"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"cebc506f92b7cb4640347ae1d09a5f5e"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"814084edfca521aea7c069da8e0698ad"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"4043e88982a0fe93478345b7d443c489"},{url:"live2d-widget/waifu-tips.js",revision:"4652df4af173626f510297f4c3204b4e"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"tags/index.html",revision:"da97d1ddf21276b14889fc5b9acf2b3e"}],{})}));
//# sourceMappingURL=service-worker.js.map