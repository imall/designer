if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const d=s=>i(s,l),g={module:{uri:l},exports:u,require:d};e[l]=Promise.all(r.map((s=>g[s]||d(s)))).then((s=>(n(...s),u)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"bos-designer"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/designer/assets/images/error.svg",revision:"f779f546018e7b3be7c84e1a0aac99df"},{url:"/designer/assets/images/success.svg",revision:"54e9652ed63a219d898f6dd320fb72d7"},{url:"/designer/css/113.265c2d63.css",revision:null},{url:"/designer/css/170.17005f6e.css",revision:null},{url:"/designer/css/184.71529f79.css",revision:null},{url:"/designer/css/209.fea68020.css",revision:null},{url:"/designer/css/324.ff38aed0.css",revision:null},{url:"/designer/css/369.b82df50c.css",revision:null},{url:"/designer/css/550.948bfd5a.css",revision:null},{url:"/designer/css/630.4f2bab50.css",revision:null},{url:"/designer/css/791.f4d3e06b.css",revision:null},{url:"/designer/css/83.6739277e.css",revision:null},{url:"/designer/css/879.814798b0.css",revision:null},{url:"/designer/css/app.378d96cc.css",revision:null},{url:"/designer/css/chunk-vendors.386ba17f.css",revision:null},{url:"/designer/img/Group.63e87261.svg",revision:null},{url:"/designer/img/background.a967eb4f.svg",revision:null},{url:"/designer/img/bottom-circle.5e5d2d4a.png",revision:null},{url:"/designer/img/calendar-check-regular.20a22088.svg",revision:null},{url:"/designer/img/calendar-days-regular.23986aa5.svg",revision:null},{url:"/designer/img/chart-mixed-solid.096fb115.svg",revision:null},{url:"/designer/img/clock-regular.81063c4e.svg",revision:null},{url:"/designer/img/deyer.cb484e50.svg",revision:null},{url:"/designer/img/file-invoice-dollar-regular.3fe13742.svg",revision:null},{url:"/designer/img/home.ba251606.svg",revision:null},{url:"/designer/img/scissors-left.b78fd955.svg",revision:null},{url:"/designer/img/scissors-right.c99cf72f.svg",revision:null},{url:"/designer/img/top-circle.69ec19d2.png",revision:null},{url:"/designer/img/triangle.dce1d329.svg",revision:null},{url:"/designer/img/users-light.3357b944.svg",revision:null},{url:"/designer/index.html",revision:"0d2ed8189ddfc8fd5dbb9536728d5a06"},{url:"/designer/js/111.f4a66461.js",revision:null},{url:"/designer/js/113.ef66241c.js",revision:null},{url:"/designer/js/154.5454ffc8.js",revision:null},{url:"/designer/js/170.edda035e.js",revision:null},{url:"/designer/js/175.b8e6283c.js",revision:null},{url:"/designer/js/184.2ce8591e.js",revision:null},{url:"/designer/js/203.9f8fbbc8.js",revision:null},{url:"/designer/js/209.4955b1f1.js",revision:null},{url:"/designer/js/230.e36b36d4.js",revision:null},{url:"/designer/js/240.bc34061a.js",revision:null},{url:"/designer/js/297.0a63f99d.js",revision:null},{url:"/designer/js/309.6c9da593.js",revision:null},{url:"/designer/js/324.f8e36945.js",revision:null},{url:"/designer/js/331.4d823712.js",revision:null},{url:"/designer/js/337.23f91b54.js",revision:null},{url:"/designer/js/353.f421e060.js",revision:null},{url:"/designer/js/369.ff8c62f5.js",revision:null},{url:"/designer/js/417.804f1af8.js",revision:null},{url:"/designer/js/475.8c5d9032.js",revision:null},{url:"/designer/js/518.893ce1c8.js",revision:null},{url:"/designer/js/528.113e56f8.js",revision:null},{url:"/designer/js/538.48566757.js",revision:null},{url:"/designer/js/543.8ad8acc4.js",revision:null},{url:"/designer/js/550.59e7f09c.js",revision:null},{url:"/designer/js/559.b6a12bd9.js",revision:null},{url:"/designer/js/56.9a170d3a.js",revision:null},{url:"/designer/js/630.28b9414a.js",revision:null},{url:"/designer/js/640.f20fc5f5.js",revision:null},{url:"/designer/js/666.41261d05.js",revision:null},{url:"/designer/js/707.62f5789b.js",revision:null},{url:"/designer/js/731.2bfa0986.js",revision:null},{url:"/designer/js/74.5aa98ed2.js",revision:null},{url:"/designer/js/774.843065e2.js",revision:null},{url:"/designer/js/791.fb22f371.js",revision:null},{url:"/designer/js/813.1a44cb32.js",revision:null},{url:"/designer/js/83.c0ded958.js",revision:null},{url:"/designer/js/864.9060c63c.js",revision:null},{url:"/designer/js/865.23817a63.js",revision:null},{url:"/designer/js/879.fc8a8a2c.js",revision:null},{url:"/designer/js/923.2e9f2c13.js",revision:null},{url:"/designer/js/93.84d93c0e.js",revision:null},{url:"/designer/js/948.d7cff880.js",revision:null},{url:"/designer/js/973.610bd4e6.js",revision:null},{url:"/designer/js/985.ad28e5a8.js",revision:null},{url:"/designer/js/999.f76ce688.js",revision:null},{url:"/designer/js/app.1fbc1c4e.js",revision:null},{url:"/designer/js/chunk-vendors.290f004a.js",revision:null},{url:"/designer/manifest.json",revision:"fc4121c68753bb82e0599287d4eec0df"},{url:"/designer/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
