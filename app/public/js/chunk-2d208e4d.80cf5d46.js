(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208e4d"],{a778:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",{style:{marginBottom:"16px"}},[t._v(" demo1 打开文件夹实现 ")]),e("a-list",{attrs:{bordered:"","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(n){return e("a-list-item",{on:{click:function(e){return t.openDirectry(n.id)}}},[t._v(" "+t._s(n.content)+" "),e("a-button",{attrs:{type:"link"}},[t._v(" 打开 ")])],1)}}])})],1)},i=[],r=e("b775"),c={outApi:"/v1/outApi",openDir:"/v1/example/openLocalDir",uploadFile:"/v1/example/uploadFile"};function a(t){return Object(r["b"])({url:c.openDir,method:"post",data:t})}var u=[{content:"【下载】目录",id:"download"},{content:"【图片】目录",id:"picture"},{content:"【文档】目录",id:"doc"},{content:"【音乐】目录",id:"music"}],d={data:function(){return{data:u}},methods:{openDirectry:function(t){console.log("id:",t);var n={id:t};a(n).then((function(t){if(0!==t.code)return!1})).catch((function(t){console.log("err:",t)}))}}},l=d,p=e("2877"),s=Object(p["a"])(l,o,i,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d208e4d.80cf5d46.js.map