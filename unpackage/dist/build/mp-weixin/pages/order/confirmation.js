(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"7ba1":function(t,e,s){"use strict";s.r(e);var a=s("f858"),i=s("c45d");for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);s("f8bf");var n=s("2877"),c=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"8d43":function(t,e,s){},c0a6:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("bca8"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniPopup:a.default},data:function(){return{addrMain:{contactName:"点击选择地址"},buylist:[],goodsPrice:0,sumPrice:0,freight:0,note:"",int:1200,deduction:0,coupon:{}}},onShow:function(){var e=this;t.getStorage({key:"confirmCoupon",success:function(t){e.coupon=t.data,e.deduction=t.data.couponsAmount}}),t.getStorage({key:"confirmAddr",success:function(t){e.addrMain=t.data},fail:function(){e.addrMain={contactName:"点击选择地址"}}}),t.getStorage({key:"buylist",success:function(t){e.buylist=t.data,e.goodsPrice=0;for(var s=e.buylist.length,a=0;a<s;a++)e.goodsPrice=e.goodsPrice+e.buylist[a].stock*e.buylist[a].price;e.sumPrice=e.goodsPrice-e.deduction+e.freight}})},onHide:function(){this.clearOrder()},onBackPress:function(){this.clearOrder()},computed:{sumPriceFixed:function(){return this.sumPrice.toFixed(2)},goodsPriceFixed:function(){return this.goodsPrice.toFixed(2)},freightFixed:function(){return this.freight.toFixed(2)}},methods:{changeAddr:function(){t.navigateTo({url:"../address/address"})},clearOrder:function(){},toPay:function(){var e=this;if(this.addrMain.contactPhone){for(var s=[],a=this.buylist.length,i=0;i<a;i++){var o={price:0,productId:1,productName:"string",quantity:1};o.price=this.buylist[i].price,o.productId=this.buylist[i].id,o.productName=this.buylist[i].name,o.quantity=this.buylist[i].stock,s.push(o)}t.request({url:this.$tempUrl+"buyer/order/create",method:"POST",data:{orderDetailBeans:s,remark:this.note,shopId:t.getStorageSync("shopId"),userAddress:this.addrMain.address,userCouponsId:this.coupon.userCouponsId,userName:this.addrMain.contactName,userPhone:this.addrMain.contactPhone,userWechatOpenid:t.getStorageSync("openId")},success:function(s){2===s.data.code?t.showModal({title:"失败",content:s.data.message,showCancel:!1}):(t.showLoading({title:"提交中..."}),setTimeout(function(){t.hideLoading(),e.payment(s.data.data.id)},500))}})}else t.showModal({title:"提交失败",content:"请选择收货地址",showCancel:!1})},payment:function(e){var s=this;t.showModal({title:"支付",content:"确认支付￥"+this.sumPrice,success:function(a){a.confirm?t.request({url:s.$tempUrl+"buyer/order/paid",method:"POST",data:{openId:t.getStorageSync("openId"),orderId:e},success:function(e){0===e.data.code?t.reLaunch({url:"../tabBar/user",success:function(){t.showToast({title:"支付成功",icon:"success"})}}):t.showModal({title:"提示",content:"订单异常，支付失败",showCancel:!1})}}):a.cancel&&t.reLaunch({url:"../tabBar/user",success:function(){t.showToast({title:"支付已取消，请尽快完成付款",icon:"none"})}})}})},toCoupon:function(e){t.navigateTo({url:"orderCoupon?goodsPrice="+e})}}};e.default=o}).call(this,s("543d")["default"])},c45d:function(t,e,s){"use strict";s.r(e);var a=s("c0a6"),i=s.n(a);for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},dbb0:function(t,e,s){"use strict";s("4436");var a=o(s("b0ce")),i=o(s("7ba1"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},f858:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"addr",attrs:{eventid:"abfeaab4-0"},on:{tap:t.changeAddr}},[t._m(0),s("view",{staticClass:"right"},[s("view",{staticClass:"tel-name"},[s("view",{staticClass:"name"},[t._v(t._s(t.addrMain.contactName))]),s("view",{staticClass:"tel"},[t._v(t._s(t.addrMain.contactPhone))])]),t.addrMain.area?s("view",{staticClass:"addres"},[t._v(t._s(t.addrMain.area.label)+"-"+t._s(t.addrMain.address))]):t._e(),t.addrMain.areaName?s("view",{staticClass:"addres"},[t._v(t._s(t.addrMain.areaName)+"-"+t._s(t.addrMain.address))]):t._e()])]),s("view",{staticClass:"buy-list"},t._l(t.buylist,function(e,a){return s("view",{key:a,staticClass:"row"},[s("view",{staticClass:"goods-info"},[s("view",{staticClass:"img"},[s("image",{attrs:{src:e.cover}})]),s("view",{staticClass:"info"},[s("view",{staticClass:"title"},[t._v(t._s(e.name))]),s("view",{staticClass:"spec"},[t._v(t._s(e.promotion)+" 数量:"+t._s(e.stock))]),s("view",{staticClass:"price-number"},[s("view",{staticClass:"price"},[t._v("￥"+t._s(e.price*e.stock))]),s("view",{staticClass:"number"})])])])])})),s("view",{staticClass:"order"},[s("view",{staticClass:"row",attrs:{eventid:"abfeaab4-1"},on:{tap:function(e){t.toCoupon(t.goodsPrice)}}},[s("view",{staticClass:"left"},[t._v("优惠券 :")]),s("view",{staticClass:"right"},[s("label",{directives:[{name:"show",rawName:"v-show",value:!t.coupon.couponsAmount,expression:"!coupon.couponsAmount"}]},[t._v("点击选择")]),s("label",{directives:[{name:"show",rawName:"v-show",value:t.coupon.couponsAmount,expression:"coupon.couponsAmount"}]},[t._v("已选择"+t._s(t.coupon.couponsName)+"，优惠￥"+t._s(t.coupon.couponsAmount))]),s("label",{staticStyle:{"margin-left":"10rpx",color:"#2F4056"}},[t._v(">")]),t._v(">")],1)]),s("view",{staticClass:"row"},[s("view",{staticClass:"left"},[t._v("备注 :")]),s("view",{staticClass:"right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],attrs:{placeholder:"选填,备注内容",eventid:"abfeaab4-2"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})])])]),s("view",{staticClass:"detail"},[s("view",{staticClass:"row"},[s("view",{staticClass:"nominal"},[t._v("商品金额")]),s("view",{staticClass:"content"},[t._v("￥"+t._s(t.goodsPrice))])]),t.coupon.couponsAmount?s("view",{staticClass:"row"},[s("view",{staticClass:"nominal"},[t._v("优惠券")]),s("view",{staticClass:"content"},[t._v("-￥"+t._s(t.deduction))])]):t._e()]),s("view",{staticClass:"blck"}),s("view",{staticClass:"footer"},[s("view",{staticClass:"settlement"},[s("view",{staticClass:"sum"},[t._v("合计:"),s("view",{staticClass:"money"},[t._v("￥"+t._s(t.sumPriceFixed))])]),s("view",{staticClass:"btn",attrs:{eventid:"abfeaab4-3"},on:{tap:t.toPay}},[t._v("提交订单")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"icon"},[s("image",{attrs:{src:"../../static/img/addricon.png",mode:""}})])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},f8bf:function(t,e,s){"use strict";var a=s("8d43"),i=s.n(a);i.a}},[["dbb0","common/runtime","common/vendor"]]]);