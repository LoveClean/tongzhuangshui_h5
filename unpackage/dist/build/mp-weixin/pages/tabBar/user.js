(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user"],{4052:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{temp:{},isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,user:{username:"Love clean",face:"../../static/img/log.png",signature:"我的个性签名。",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"已完成",icon:"pingjia"},{text:"已取消",icon:"tuihuo"}],mytoolbarList:[{text:"我的订单",img:"../../static/img/user/point.png"},{text:"优惠券",img:"../../static/img/user/quan.png"},{text:"收货地址",img:"../../static/img/user/addr.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){var e=this;t.getSystemInfo({success:function(t){e.temp=t,console.log(t.model)}}),this.temp.level=wx.getBatteryInfoSync().level,this.temp.isCharging=wx.getBatteryInfoSync().isCharging,this.statusHeight=0},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;t.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(t){}})},methods:{box:function(e){"我的订单"===e.text?t.navigateTo({url:"../user/order_list/order_list_temp?tbIndex=-1"}):"收货地址"===e.text?t.navigateTo({url:"../address/address"}):"优惠券"===e.text&&t.navigateTo({url:"../user/coupon/coupon"})},toMsg:function(){t.navigateTo({url:"../msg/msg"})},toOrderList:function(e){t.navigateTo({url:"../user/order_list/order_list_temp?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e}}};e.default=s}).call(this,s("543d")["default"])},8327:function(t,e,s){"use strict";var i=s("f6c3"),a=s.n(i);a.a},a754:function(t,e,s){"use strict";s.r(e);var i=s("4052"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},b070:function(t,e,s){"use strict";s.r(e);var i=s("c62a"),a=s("a754");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("8327");var o=s("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},c62a:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop}}),s("view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop}},[s("view",{staticClass:"addr"}),s("view",{staticClass:"input-box"})]),s("view",{staticClass:"place"}),s("view",{staticClass:"user"},[s("view",{staticClass:"headView"},[s("open-data",{staticClass:"icon",attrs:{type:"userAvatarUrl",mpcomid:"7f64c7ac-0"}}),s("view",{staticClass:"icon"}),s("view",{staticClass:"iconBorder"})],1),s("view",{staticClass:"right"},[s("view",{staticClass:"username"},[s("open-data",{attrs:{type:"userNickName",mpcomid:"7f64c7ac-1"}})],1),s("view",{staticClass:"signature"},[t._v("性别："),s("open-data",{attrs:{type:"userGender",lang:"zh_CN",mpcomid:"7f64c7ac-2"}})],1)])]),s("view",{staticClass:"VIP"},[t._m(0),s("view",{staticClass:"title"},[t._v("剩余电量:"+t._s(t.temp.level)+","+t._s(t.temp.isCharging?"充电中":"未充电"))]),s("view",{staticClass:"tis"},[t._v("手机型号:"+t._s(t.temp.model))])]),s("view",{staticClass:"order"},[s("view",{staticClass:"list"},t._l(t.orderList,function(e,i){return s("view",{key:i,staticClass:"box",attrs:{eventid:"7f64c7ac-0-"+i},on:{tap:function(e){t.toOrderList(i)}}},[s("view",{staticClass:"img"},[s("view",{staticClass:"icon",class:e.icon})]),s("view",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),s("view",{staticClass:"toolbar"},[s("view",{staticClass:"title"},[t._v("我的工具栏")]),s("view",{staticClass:"list"},t._l(t.mytoolbarList,function(e,i){return s("view",{key:i,staticClass:"box",attrs:{eventid:"7f64c7ac-1-"+i},on:{tap:function(s){t.box(e)}}},[s("view",{staticClass:"img"},[s("image",{attrs:{src:e.img}})]),s("view",{staticClass:"text"},[t._v(t._s(e.text))])])}))]),s("view",{staticClass:"place-bottom"})])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"img"},[s("image",{attrs:{src:"../../static/img/VIP.png"}})])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},f42e:function(t,e,s){"use strict";s("4436");var i=n(s("b0ce")),a=n(s("b070"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},f6c3:function(t,e,s){}},[["f42e","common/runtime","common/vendor"]]]);