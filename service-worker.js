if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,c,r)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=r(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/08/Hexo-建站笔记/index.html",revision:"60327fe6a47d0bc4632a4f41c4b73d0e"},{url:"2021/04/09/PicGo-Gitee-搭建免费图床/index.html",revision:"292f59945078b1b1efb6e840c5228c0f"},{url:"2021/04/17/密码学笔记之（一）-古典密码/index.html",revision:"01c9f01988dc54456ddcf257b6ec20d5"},{url:"404.html",revision:"7318631f61b295e196b2bca459faba66"},{url:"about/index.html",revision:"796a08cfc0bafc72de9ff001187d0427"},{url:"archives/2021/04/index.html",revision:"0e0faa9a86bec7616604a033322587be"},{url:"archives/2021/index.html",revision:"8f6315f66b36c58db63027a4bef62034"},{url:"archives/index.html",revision:"db1c0fea348695eb0f26dd594fefb58e"},{url:"categories/密码学/index.html",revision:"68f8d8d8efea7437e98c72dd92d919c0"},{url:"categories/Gitee/index.html",revision:"f91f76198b57591f6125c154779b4a0d"},{url:"categories/Hexo/index.html",revision:"3c1f58c5e941365b3e0fd72399a7917f"},{url:"categories/index.html",revision:"ed2964e4826c6cfb22b49675cff430a1"},{url:"css/custom.css",revision:"c59d4079d1703d3624c1252c655a9d7f"},{url:"css/icon.css",revision:"b07c9f4eab5aaa316a389ccac0c88a92"},{url:"css/index.css",revision:"ecfe1a4906d52b5b82f75ac3258429ea"},{url:"css/self_define.css",revision:"df19855adcb6221db1e4ad74544a8c59"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img_source/001.jpg",revision:"9c2a8ca608b20f06b08089b12ac3dd52"},{url:"img_source/002.jpg",revision:"8baa514f1a92cd5673db39412b34c8fc"},{url:"img_source/003.jpg",revision:"d8409e910d9c98774fbd8b10533d562d"},{url:"img_source/004.jpg",revision:"d2158376b341f44674dce876eac958cf"},{url:"img_source/005.jpg",revision:"ca77394fbcc09cbc8e1aaa6ba8074ee0"},{url:"img_source/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img_source/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img_source/back_1.png",revision:"18d5fec7df9a1bbd9aff9aa9d92d3687"},{url:"img_source/back_2.png",revision:"051d04cd6d06d49555b93ca423664a1a"},{url:"img_source/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img_source/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img_source/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img_source/qq.jpg",revision:"0f64a24240a2ab225682b82fc79280c7"},{url:"img_source/self.png",revision:"d381093c549af2ed151f712d7d992455"},{url:"img_source/wechat.jpg",revision:"a8cd80def84717d616d173181538726b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"95f085d4d20ac628ccd004fc7fef58e5"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link_source/blog_cover/001.jpg",revision:"ffde7ff5e016b8481b8449ddaf9d6ceb"},{url:"link_source/site_shot/52pojie_shot.png",revision:"78536d32bc490c874f3079f809030484"},{url:"link_source/site_shot/52pojie.png",revision:"a8c22d1f493fcd5070b93e3772055a7a"},{url:"link_source/site_shot/babeijing_shot.png",revision:"91745fc79c0ed8908388e51b3424f5e2"},{url:"link_source/site_shot/babeijing.png",revision:"c49f748f1a2ddd7306374280f3535219"},{url:"link_source/site_shot/harveyhust.png",revision:"547340edc55c7fd5d390a5f41cb3a975"},{url:"link_source/site_shot/Jerry.png",revision:"afaacbc3dadcb0d8eb0151820726ac03"},{url:"link_source/site_shot/wleoo.png",revision:"a9fe4463e2783e579642654444534dd0"},{url:"link/index.html",revision:"04affa46cde01e745ffd6612f74ccb99"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"cebc506f92b7cb4640347ae1d09a5f5e"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"814084edfca521aea7c069da8e0698ad"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"3d7233f7971913d0ec0f363a14a11cc3"},{url:"live2d-widget/waifu-tips.js",revision:"4652df4af173626f510297f4c3204b4e"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"tags/教程/index.html",revision:"f814399fad15edc0044f163d2241dd1a"},{url:"tags/密码学/index.html",revision:"99fe090ce3c0963e01ee45c5fa07e912"},{url:"tags/算法/index.html",revision:"1746733cab65ac759044cf9d32e20d69"},{url:"tags/图床/index.html",revision:"14be66747409dc14d100fb018a3f4694"},{url:"tags/Gitee/index.html",revision:"233d51b942420c032a6f6430a9d254cd"},{url:"tags/Hexo/index.html",revision:"aaa51c69ae27d6459325da351ca6ad61"},{url:"tags/index.html",revision:"f148404262968e0e70ec800c8a8f5a8a"}],{})}));
//# sourceMappingURL=service-worker.js.map
