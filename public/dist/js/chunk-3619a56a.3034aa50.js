(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3619a56a"],{"7e0b":function(e,a,t){"use strict";t("b92b")},a358:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return o}));t("b775");var n={messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",socketMessageStart:"controller.example.socketMessageStart",socketMessageStop:"controller.example.socketMessageStop",hello:"controller.example.hello",executeJS:"controller.example.executeJS",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",uploadFile:"controller.example.uploadFile"},o={appUpdater:"app.updater"}},b0c0:function(e,a,t){var n=t("83ab"),o=t("5e77").EXISTS,l=t("e330"),s=t("9bf2").f,r=Function.prototype,c=l(r.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,p=l(i.exec),u="name";n&&!o&&s(r,u,{configurable:!0,get:function(){try{return p(i,c(this))[1]}catch(e){return""}}})},b92b:function(e,a,t){},e091:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app-base-db"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:8}},[e._v(" • LowDB本地JSON数据库 ")]),t("a-col",{attrs:{span:8}},[e._v(" • 可使用lodash语法 ")]),t("a-col",{attrs:{span:8}})],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.all_list)+" ")])],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.name,"addon-before":"姓名"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.age,"addon-before":"年龄"},model:{value:e.age,callback:function(a){e.age=a},expression:"age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(a){return e.dbOperation("add")}}},[e._v(" 添加 ")])],1)],1)],1),e._m(3),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.search_age,"addon-before":"年龄"},model:{value:e.search_age,callback:function(a){e.search_age=a},expression:"search_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(a){return e.dbOperation("get")}}},[e._v(" 查找 ")])],1)],1),t("a-row",[t("a-col",{attrs:{span:24}},[e._v(" "+e._s(e.userList)+" ")])],1)],1),e._m(4),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_name,"addon-before":"姓名"},model:{value:e.update_name,callback:function(a){e.update_name=a},expression:"update_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.update_age,"addon-before":"年龄"},model:{value:e.update_age,callback:function(a){e.update_age=a},expression:"update_age"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(a){return e.dbOperation("update")}}},[e._v(" 更新 ")])],1)],1)],1),e._m(5),t("div",{staticClass:"one-block-2"},[t("a-row",[t("a-col",{attrs:{span:6}},[t("a-input",{attrs:{value:e.delete_name,"addon-before":"姓名"},model:{value:e.delete_name,callback:function(a){e.delete_name=a},expression:"delete_name"}})],1),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}}),t("a-col",{attrs:{span:3}}),t("a-col",{attrs:{span:6}},[t("a-button",{on:{click:function(a){return e.dbOperation("del")}}},[e._v(" 删除 ")])],1)],1)],1)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 本地数据库 ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 测试数据 (egg http服务) ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 3. 添加数据 ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 4. 获取数据 ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 5. 修改数据 ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 6. 删除数据 ")])])}],l=(t("b0c0"),t("a358")),s={data:function(){return{name:"张三",age:10,userList:["空"],search_age:10,update_name:"张三",update_age:21,delete_name:"张三",all_list:["空"]}},mounted:function(){this.getAllTestData()},methods:{getAllTestData:function(){var e=this,a={action:"all"};this.$ipcCall(l["a"].dbOperation,a).then((function(a){if(console.log("res:",a),0==a.all_list.length)return!1;e.all_list=a.all_list}))},dbOperation:function(e){var a=this,t={action:e,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==e&&0==this.name.length&&a.$message.error("请填写数据"),this.$ipcCall(l["a"].dbOperation,t).then((function(t){if(console.log("res:",t),"get"==e){if(0==t.result.length)return void a.$message.error("没有数据");a.userList=t.result}0!=t.all_list.length&&(a.all_list=t.all_list,a.$message.success("success"))}))}}},r=s,c=(t("7e0b"),t("2877")),i=Object(c["a"])(r,n,o,!1,null,"2e0e3bf7",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-3619a56a.3034aa50.js.map