(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/orderCoupon"],{"009c":function(t,s,i){"use strict";var e=i("6c55"),a=i.n(e);a.a},6815:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={data:function(){return{couponValidList:[],couponinvalidList:[],headerTop:0,typeClass:"valid",subState:""}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(s){var i=this;t.request({url:this.$tempUrl+"buyer/coupons/listForOrder",method:"GET",data:{amount:parseInt(s.goodsPrice),openId:t.getStorageSync("openId"),shopId:t.getStorageSync("shopId")},success:function(t){var s=t.data.data;i.couponValidList=s.unable,i.couponinvalidList=s.disable}})},methods:{selected:function(s){t.setStorage({key:"confirmCoupon",data:s,success:function(){t.navigateBack({})}})},switchType:function(s){var i=this;this.typeClass!=s&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=s,this.subState=""==this.typeClass?"":"show"+s,setTimeout(function(){i.subState="valid"==i.typeClass?"":i.subState},200))}}};s.default=i}).call(this,i("543d")["default"])},"6c55":function(t,s,i){},"86de":function(t,s,i){"use strict";i.r(s);var e=i("6815"),a=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(s,t,function(){return e[t]})}(n);s["default"]=a.a},"92e5":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("view",{staticClass:"tabr",style:{top:t.headerTop}},[i("view",{class:{on:"valid"==t.typeClass},attrs:{eventid:"48942efa-0"},on:{tap:function(s){t.switchType("valid")}}},[t._v("可用("+t._s(t.couponValidList.length)+")")]),i("view",{class:{on:"invalid"==t.typeClass},attrs:{eventid:"48942efa-1"},on:{tap:function(s){t.switchType("invalid")}}},[t._v("不可用")]),i("view",{staticClass:"border",class:t.typeClass})]),i("view",{staticClass:"place"}),i("view",{staticClass:"list"},[i("view",{staticClass:"sub-list valid",class:t.subState},[0==t.couponValidList.length?i("view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponValidList,function(s,e){return i("view",{key:e,staticClass:"row"},[i("view",{staticClass:"carrier",attrs:{eventid:"48942efa-2-"+e},on:{tap:function(i){t.selected(s)}}},[i("view",{staticClass:"left"},[i("view",{staticClass:"title"},[t._v(t._s(s.couponsName))]),i("view",{staticClass:"term"},[t._v(t._s(s.effectiveDate)+" ~ "+t._s(s.expiryDate))]),i("view",{staticClass:"gap-top"}),i("view",{staticClass:"gap-bottom"})]),i("view",{staticClass:"right",class:4===s.couponsScope?"":"onlyShop"},[i("view",{staticClass:"ticket"},[i("view",{staticClass:"num"},[t._v(t._s(s.couponsAmount))]),i("view",{staticClass:"unit"},[t._v("元")])]),0!==s.minimumAmount?i("view",{staticClass:"criteria"},[t._v("满"+t._s(s.minimumAmount)+"使用")]):t._e(),0===s.minimumAmount?i("view",{staticClass:"criteria"},[t._v("无门槛")]):t._e(),i("view",{staticClass:"use",class:4===s.couponsScope?"":"onlyShop"},[t._v("去使用")])])])])})],2),i("view",{staticClass:"sub-list invalid",class:t.subState},[0==t.couponinvalidList.length?i("view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponinvalidList,function(s,e){return i("view",{key:e,staticClass:"row"},[i("view",{staticClass:"carrier"},[i("view",{staticClass:"left"},[i("view",{staticClass:"title"},[t._v(t._s(s.couponsName))]),i("view",{staticClass:"notMsg"},[t._v(t._s(s.effectiveDate)+" ~ "+t._s(s.expiryDate))]),i("view",{staticClass:"notMsg"},[t._v("详细信息："+t._s(s.notMsg))]),i("view",{staticClass:"gap-top"}),i("view",{staticClass:"gap-bottom"})]),i("view",{staticClass:"right invalid"},[i("view",{staticClass:"ticket"},[i("view",{staticClass:"num"},[t._v(t._s(s.couponsAmount))]),i("view",{staticClass:"unit"},[t._v("元")])]),0!==s.minimumAmount?i("view",{staticClass:"criteria"},[t._v("满"+t._s(s.minimumAmount)+"使用")]):t._e(),0===s.minimumAmount?i("view",{staticClass:"criteria"},[t._v("无门槛")]):t._e(),i("view",{staticClass:"use2"},[t._v("不可用")])])])])})],2)])])},a=[];i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a})},"952a":function(t,s,i){"use strict";i("4436");var e=n(i("b0ce")),a=n(i("ac28"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},ac28:function(t,s,i){"use strict";i.r(s);var e=i("92e5"),a=i("86de");for(var n in a)"default"!==n&&function(t){i.d(s,t,function(){return a[t]})}(n);i("009c");var o=i("2877"),c=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);s["default"]=c.exports}},[["952a","common/runtime","common/vendor"]]]);