(function(e){function n(n){for(var a,s,o=n[0],u=n[1],i=n[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var o=t[s];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},s={app:0},c={app:0},r=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0cf38b6e":"73befe57","chunk-25a0809c":"02387fee","chunk-26360310":"90f0183a","chunk-26fcacb7":"ea9d617c","chunk-2f42023a":"248fc31f","chunk-30d91a2c":"75899154","chunk-4557c3f4":"1b432690","chunk-490df4c2":"c8a48363","chunk-4d0be246":"c4270f08","chunk-5d9adce2":"1c2491c7","chunk-72d90f2a":"bd6dc740","chunk-9234b1da":"fc4b38c0","chunk-94d99d1e":"e7d74208","chunk-b67071c4":"2a87e101","chunk-b8ab1f0c":"0f41b54b"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0cf38b6e":1,"chunk-25a0809c":1,"chunk-26360310":1,"chunk-26fcacb7":1,"chunk-2f42023a":1,"chunk-30d91a2c":1,"chunk-4557c3f4":1,"chunk-490df4c2":1,"chunk-4d0be246":1,"chunk-5d9adce2":1,"chunk-72d90f2a":1,"chunk-9234b1da":1,"chunk-94d99d1e":1,"chunk-b67071c4":1,"chunk-b8ab1f0c":1};s[e]?n.push(s[e]):0!==s[e]&&t[e]&&n.push(s[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0cf38b6e":"6a9bab8f","chunk-25a0809c":"f5788196","chunk-26360310":"4b14b6bb","chunk-26fcacb7":"6c177387","chunk-2f42023a":"64a5cb0d","chunk-30d91a2c":"fc17c30a","chunk-4557c3f4":"69d9af12","chunk-490df4c2":"11e2850e","chunk-4d0be246":"94e812c5","chunk-5d9adce2":"c38e352c","chunk-72d90f2a":"ffa3e4f4","chunk-9234b1da":"0f3904b9","chunk-94d99d1e":"8159476a","chunk-b67071c4":"a4424700","chunk-b8ab1f0c":"9e732e2f"}[e]+".css",c=u.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],d=i.getAttribute("data-href");if(d===a||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[e],l.parentNode.removeChild(l),t(r)},l.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=o(e);var f=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},2061:function(e,n,t){},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var n=c(e);return t(n)}function c(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},"541c":function(e,n,t){"use strict";t("2061")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("a026"),s=t("f23d"),c=(t("3aed"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),r=[],o={name:"App",components:{},data:function(){return{}},watch:{},methods:{}},u=o,i=(t("034f"),t("2877")),d=Object(i["a"])(u,c,r,!1,null,null,null),f=d.exports,l=t("8c4f"),m=(t("d3b7"),t("3ca3"),t("ddb0"),function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("a-layout",{attrs:{id:"app-layout-sider"}},[a("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"},model:{value:e.collapsed,callback:function(n){e.collapsed=n},expression:"collapsed"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"pic-logo",attrs:{src:t("cf05")}})]),a("a-menu",{staticClass:"menu-item",attrs:{theme:"light",mode:"inline","default-selected-keys":["menu_1"]},on:{click:e.menuHandle}},e._l(e.menu,(function(n,t){return a("a-menu-item",{key:t},[a("a-icon",{attrs:{type:n.icon}}),e._v(" "+e._s(n.title)+" ")],1)})),1)],1),a("a-layout",[a("a-layout-content",{staticClass:"layout-content"},[a("router-view")],1)],1)],1)}),b=[],p={name:"AppSider",data:function(){return{collapsed:!0,menu:{menu_1:{icon:"home",title:"功能",pageName:"BaseIndex",params:{}},menu_2:{icon:"profile",title:"其它",pageName:"OtherIndex",params:{}}}}},created:function(){},mounted:function(){this.menuHandle({key:"menu_1"})},methods:{menuHandle:function(e){var n=this.menu[e.key];console.log("[home] load page:",n.pageName),this.$router.push({name:n.pageName,params:n.params})}}},h=p,j=(t("abf6"),Object(i["a"])(h,m,b,!1,null,"9dbf58d6",null)),k=j.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a-layout",{attrs:{id:"app-menu"}},[t("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"}},[t("a-menu",{attrs:{theme:"light",mode:"inline","default-selected-keys":["menu_100"]}},e._l(e.menu,(function(n,a){return t("a-menu-item",{key:a},[t("router-link",{attrs:{to:{name:n.pageName,params:n.params}}},[t("span",[e._v(e._s(n.title))])])],1)})),1)],1),t("a-layout",[t("a-layout-content",[t("router-view")],1)],1)],1)},y=[],v={data:function(){return{menu:{menu_100:{icon:"profile",title:"文件",pageName:"BaseFileIndex",params:{}},menu_300:{icon:"profile",title:"通信",pageName:"BaseSocketIndex",params:{}},menu_301:{icon:"profile",title:"数据库",pageName:"BaseDBIndex",params:{}},menu_400:{icon:"profile",title:"视图",pageName:"BaseWindowViewIndex",params:{}},menu_401:{icon:"profile",title:"窗口",pageName:"BaseWindowIndex",params:{}},menu_403:{icon:"profile",title:"扩展程序",pageName:"BaseExtensionIndex",params:{}},menu_405:{icon:"profile",title:"桌面通知",pageName:"BaseNotificationIndex",params:{}},menu_407:{icon:"profile",title:"电源监控",pageName:"BasePowerMonitorIndex",params:{}},menu_409:{icon:"profile",title:"屏幕信息",pageName:"BaseScreenIndex",params:{}},menu_411:{icon:"profile",title:"系统主题",pageName:"BaseThemeIndex",params:{}},menu_412:{icon:"profile",title:"自动更新",pageName:"BaseUpdaterIndex",params:{}},menu_500:{icon:"profile",title:"软件调用",pageName:"BaseSoftwareIndex",params:{}},menu_900:{icon:"profile",title:"测试",pageName:"BaseTestApiIndex",params:{}}}}},created:function(){},mounted:function(){this.menuHandle({key:"menu_100"})},methods:{menuHandle:function(e){var n=this.menu[e.key];this.$router.push({name:n.pageName,params:n.params})}}},x=v,w=(t("541c"),Object(i["a"])(x,g,y,!1,null,"6f147216",null)),_=w.exports,B=[{path:"/",component:k,children:[{path:"/base",name:"Base",component:_,children:[{path:"/base/index",name:"BaseIndex",component:function(){return t.e("chunk-5d9adce2").then(t.bind(null,"c9d6"))}},{path:"/base/file/index",name:"BaseFileIndex",component:function(){return t.e("chunk-5d9adce2").then(t.bind(null,"c9d6"))}},{path:"/base/socket/index",name:"BaseSocketIndex",component:function(){return t.e("chunk-2f42023a").then(t.bind(null,"27be"))}},{path:"/base/db/index",name:"BaseDBIndex",component:function(){return t.e("chunk-4557c3f4").then(t.bind(null,"e091"))}},{path:"/base/windowview/index",name:"BaseWindowViewIndex",component:function(){return t.e("chunk-4d0be246").then(t.bind(null,"ae87"))}},{path:"/base/window/index",name:"BaseWindowIndex",component:function(){return t.e("chunk-490df4c2").then(t.bind(null,"889f"))}},{path:"/base/extension/index",name:"BaseExtensionIndex",component:function(){return t.e("chunk-30d91a2c").then(t.bind(null,"1cf8"))}},{path:"/base/notification/index",name:"BaseNotificationIndex",component:function(){return t.e("chunk-9234b1da").then(t.bind(null,"03e3"))}},{path:"/base/powermonitor/index",name:"BasePowerMonitorIndex",component:function(){return t.e("chunk-b8ab1f0c").then(t.bind(null,"8a01"))}},{path:"/base/screen/index",name:"BaseScreenIndex",component:function(){return t.e("chunk-b67071c4").then(t.bind(null,"5bda"))}},{path:"/base/theme/index",name:"BaseThemeIndex",component:function(){return t.e("chunk-72d90f2a").then(t.bind(null,"db5a"))}},{path:"/base/software/open",name:"BaseSoftwareIndex",component:function(){return t.e("chunk-94d99d1e").then(t.bind(null,"0570"))}},{path:"/base/system/index",name:"BaseSystemIndex",component:function(){return t.e("chunk-26fcacb7").then(t.bind(null,"4a19"))}},{path:"/base/testapi/index",name:"BaseTestApiIndex",component:function(){return t.e("chunk-25a0809c").then(t.bind(null,"acbf"))}},{path:"/base/updater/index",name:"BaseUpdaterIndex",component:function(){return t.e("chunk-26360310").then(t.bind(null,"8f7f"))}}]},{path:"/other/index",name:"OtherIndex",component:function(){return t.e("chunk-0cf38b6e").then(t.bind(null,"2034"))}}]}],I=l["a"].prototype.push;l["a"].prototype.push=function(e,n,t){return n||t?I.call(this,e,n,t):I.call(this,e).catch((function(e){return e}))},a["a"].use(l["a"]);var N=new l["a"]({mode:"history",routes:B}),z=t("b775"),O=window.require&&window.require("electron")||{},S=O.ipcRenderer,E=function(e,n,t){return new Promise((function(a){e.once(n,(function(e,n){console.log("[ipcRenderer] [call] result:",n),a(n)})),e.send(n,t)}))},C={install:function(e){e.prototype.$ipc=S,e.prototype.$ipcCall=function(e,n){return E(S,e,n)}}};a["a"].use(s["a"]),a["a"].use(z["a"]),a["a"].use(C),a["a"].config.productionTip=!1,new a["a"]({router:N,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){},9090:function(e,n,t){},abf6:function(e,n,t){"use strict";t("9090")},b775:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));t("d3b7");var a=t("bc3a"),s=t.n(a),c=t("8ded"),r=t.n(c),o=t("56cd"),u={vm:{},install:function(e,n){this.installed||(this.installed=!0,n?(e.axios=n,Object.defineProperties(e.prototype,{axios:{get:function(){return n}},$http:{get:function(){return n}}})):console.error("You have to install axios"))}},i=s.a.create({baseURL:"",timeout:6e4}),d=function(e){if(e.response){var n=e.response.data;403===e.response.status&&o["a"].error({message:"Forbidden",description:n.message}),401!==e.response.status||n.result&&n.result.isLogin||o["a"].error({message:"Unauthorized",description:"Authorization verification failed"})}return Promise.reject(e)};i.interceptors.request.use((function(e){var n=r.a.get("token");return n&&(e.headers["Access-Token"]=n),e}),d),i.interceptors.response.use((function(e){return e.data}),d);var f={vm:{},install:function(e){e.use(u,i)}};n["b"]=i},cf05:function(e,n,t){e.exports=t.p+"img/logo.18776b4e.png"}});
//# sourceMappingURL=app.886b57a8.js.map