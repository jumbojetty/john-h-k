(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28594f30"],{7163:function(t,n,e){"use strict";e("df07")},c259:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app-demo-powermonitor"}},[t._m(0),e("div",{staticClass:"one-block-2"},[e("a-space",[e("p",[t._v("当前状态："+t._s(t.currentStatus))])]),e("p",[t._v("* 拔掉电源，使用电池供电")]),e("p",[t._v("* 接入电源")]),e("p",[t._v("* 锁屏")]),e("p",[t._v("* 解锁")])],1)])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"one-block-1"},[e("span",[t._v(" 1. 监控电源状态 ")])])}],c=(e("d3b7"),{data:function(){return{currentStatus:"无"}},mounted:function(){this.init()},methods:{init:function(){var t=this;t.$ipc.on("example.initPowerMonitor",(function(n,e){"[object Object]"==Object.prototype.toString.call(e)&&(t.currentStatus=e.msg,t.$message.info(e.msg))})),this.$ipc.send("example.initPowerMonitor","")}}}),s=c,r=(e("7163"),e("2877")),a=Object(r["a"])(s,i,o,!1,null,"e8675844",null);n["default"]=a.exports},df07:function(t,n,e){}}]);
//# sourceMappingURL=chunk-28594f30.76724dcb.js.map