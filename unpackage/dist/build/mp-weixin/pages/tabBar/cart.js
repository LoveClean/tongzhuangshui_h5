(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart"],{"0895":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("uni-popup",{attrs:{h5Top:t.flag,show:"middle-list"===t.type,position:"middle",mode:"fixed",eventid:"7f5c5701-1",mpcomid:"7f5c5701-0"},on:{hidePopup:function(s){t.togglePopup("")}}},t._l(t.items,function(s,i){return e("view",{key:i},[e("view",{staticClass:"popup",attrs:{eventid:"7f5c5701-0-"+i},on:{tap:function(e){t.addrChange(s)}}},[e("view",{staticClass:"left"},[e("view",{staticClass:"icon"},[e("image",{attrs:{src:"../../static/img/log.png",mode:""}})]),e("view",[e("view",{staticClass:"tel-name"},[e("view",{staticClass:"name"},[t._v(t._s(s.name))]),e("view",{staticClass:"tel"},[t._v(t._s(s.contact))]),e("view",{directives:[{name:"show",rawName:"v-show",value:s.distance<1e3,expression:"item.distance < 1000"}],staticClass:"distance"},[t._v("距离:"+t._s(s.distance)+"m")]),e("view",{directives:[{name:"show",rawName:"v-show",value:s.distance>1e3,expression:"item.distance > 1000"}],staticClass:"distance"},[t._v("距离:"+t._s(s.distance/1e3)+"km")])]),e("view",{staticClass:"addres"},[t._v(t._s(s.areaName)+" "+t._s(s.address))])])])])])})),e("view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop},attrs:{eventid:"7f5c5701-2"},on:{tap:t.toAddress}},[e("label",{staticStyle:{"padding-left":"20rpx"}}),e("uni-icon",{attrs:{type:"location-filled",color:"#FFB800",size:"16",mpcomid:"7f5c5701-1"}}),e("label",{staticStyle:{"font-size":"30rpx",padding:"0 5rpx"}},[t._v(t._s(t.myAddrMain.address))]),e("label",{staticStyle:{"font-size":"20rpx"}},[t._v(">")])],1),e("view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop}},[t.addrMain.name?e("view",{staticClass:"main"},[e("view",{staticClass:"left"},[t._m(0),e("view",[e("view",{staticClass:"tel-name"},[e("view",{staticClass:"name"},[t._v(t._s(t.addrMain.name))]),e("view",{staticClass:"tel",attrs:{eventid:"7f5c5701-3"},on:{tap:function(s){t.toCall(t.addrMain.contact)}}},[t._v(t._s(t.addrMain.contact)),e("uni-icon",{staticClass:"phone-icon",attrs:{type:"phone-filled",color:"#f06c7a",size:"18",mpcomid:"7f5c5701-2"}})],1)]),e("view",{staticClass:"addres"},[t._v(t._s(t.addrMain.address))])])]),t.items.length>1?e("view",{staticClass:"btn",attrs:{eventid:"7f5c5701-4"},on:{tap:function(s){t.togglePopup("middle-list")}}},[t._v("更换")]):t._e()]):t._e()]),e("view",{staticClass:"place"}),e("view",{staticClass:"goods-list"},[0==t.goodsList.length?e("view",{staticStyle:{"text-align":"center","padding-top":"20%"}},[e("image",{attrs:{src:"../../static/img/logo.jpg",mode:"aspectFit"}}),e("br"),e("br")],1):t._e(),t._l(t.goodsList,function(s,i){return e("view",{key:i,staticClass:"row"},[e("view",{staticClass:"menu",attrs:{eventid:"7f5c5701-5-"+i},on:{tap:function(e){e.stopPropagation(),t.deleteGoods(s.id)}}},[e("view",{staticClass:"icon shanchu"})]),e("view",{staticClass:"carrier",class:[t.theIndex==i?"open":t.oldIndex==i?"close":""],attrs:{eventid:"7f5c5701-11-"+i},on:{touchstart:function(s){t.touchStart(i,s)},touchmove:function(s){t.touchMove(i,s)},touchend:function(s){t.touchEnd(i,s)},tap:function(s){t.selected(i)}}},[e("view",{staticClass:"checkbox-box"},[e("view",{staticClass:"checkbox"},[e("view",{class:[s.selected?"on":""]})])]),e("view",{staticClass:"goods-info",attrs:{eventid:"7f5c5701-10-"+i},on:{tap:function(e){t.toGoods(s)}}},[e("view",{staticClass:"img"},[e("image",{attrs:{src:s.cover}})]),e("view",{staticClass:"info"},[e("view",{staticClass:"title"},[t._v(t._s(s.name))]),e("view",{staticClass:"spec"},[t._v(t._s(s.promotion))]),e("view",{staticClass:"price-number"},[e("view",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),e("view",{staticClass:"number"},[e("view",{staticClass:"sub",attrs:{eventid:"7f5c5701-6-"+i},on:{tap:function(s){s.stopPropagation(),t.sub(i)}}},[e("view",{staticClass:"icon jian"})]),e("view",{staticClass:"input",attrs:{eventid:"7f5c5701-8-"+i},on:{tap:function(s){s.stopPropagation(),t.discard(s)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.stock,expression:"row.stock"}],attrs:{type:"number",eventid:"7f5c5701-7-"+i},domProps:{value:s.stock},on:{input:[function(t){t.target.composing||(s.stock=t.target.value)},t.sum]}})]),e("view",{staticClass:"add",attrs:{eventid:"7f5c5701-9-"+i},on:{tap:function(s){s.stopPropagation(),t.add(i)}}},[e("view",{staticClass:"icon jia"})])])])])])])])})],2),e("view",{staticClass:"footer"},[e("view",{staticClass:"checkbox-box",attrs:{eventid:"7f5c5701-12"},on:{tap:t.allSelect}},[e("view",{staticClass:"checkbox"},[e("view",{class:[t.isAllselected?"on":""]})]),e("view",{staticClass:"text"},[t._v("全选")])]),t.selectedList.length>0?e("view",{staticClass:"delBtn",attrs:{eventid:"7f5c5701-13"},on:{tap:t.deleteList}},[t._v("删除")]):t._e(),e("view",{staticClass:"settlement"},[e("view",{staticClass:"sum"},[t._v("合计:"),e("view",{staticClass:"money"},[t._v("￥"+t._s(t.sumPrice))])]),e("view",{staticClass:"btn",attrs:{eventid:"7f5c5701-14"},on:{tap:t.toConfirmation}},[t._v("结算("+t._s(t.selectedList.length)+")")])])])],1)},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"icon"},[e("image",{attrs:{src:"../../static/img/log.png",mode:""}})])}];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},"23bd":function(t,s,e){"use strict";e("4436");var i=n(e("b0ce")),o=n(e("9ac3"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},"3c55":function(t,s,e){"use strict";e.r(s);var i=e("b923"),o=e("ea34");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("49a0");var a=e("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=c.exports},"3ecc":function(t,s,e){},"49a0":function(t,s,e){"use strict";var i=e("3ecc"),o=e.n(i);o.a},"4ef5":function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=n(e("3c55")),o=n(e("bca8"));function n(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniPopup:o.default,uniIcon:i.default},data:function(){return{flag:!0,type:"",addrMain:{},myAddrMain:{},items:[],sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,selectedList:[],isAllselected:!1,goodsList:[],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.reFlash(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onShow:function(){this.reFlash()},onLoad:function(){t.login({provider:"weixin",success:function(s){console.log(s),console.log(s.code),t.request({url:"https://tzs.yuanfudashi.com/wechat/getOpenIdXcx",data:{appid:"wxc04f9bfb1157e062",secret:"9258da2f76f0de7ff1b3d740be743128",js_code:s.code,grant_type:"authorization_code"},method:"GET",success:function(s){t.setStorageSync("openId",s.data.openid),t.request({url:"https://tzs.yuanfudashi.com/user/insert?wechatOpenid="+t.getStorageSync("openId"),method:"POST",success:function(t){}})}})}})},onBackPress:function(){if(""!==this.type)return this.type="",!0},methods:{reFlash:function(){var s=this;t.getStorage({key:"confirmAddr",success:function(t){s.myAddrMain.address!=t.data.address&&(console.log("地址已更换"),console.log(t),s.myAddrMain=t.data,s.loadShopList(t.data))},fail:function(){s.myAddrMain={address:"点击选择地址"},console.log(s.myAddrMain),t.getLocation({type:"wgs84",success:function(e){console.log("当前位置的经度："+e.longitude),console.log("当前位置的纬度："+e.latitude),s.loadShopList(e),t.request({url:s.$tempUrl+"common/geocoderByLocation",method:"GET",data:{lat:e.latitude,lng:e.longitude},success:function(t){s.myAddrMain={address:t.data.result.address_component.street_number}}})}})}})},toAddress:function(){t.navigateTo({url:"../address/address"})},loadShopList:function(s){var e=this;t.showLoading({title:"加载中"}),t.request({url:this.$tempUrl+"shop/listByAddress",method:"GET",data:{longitude:s.longitude,latitude:s.latitude,distance:2500},success:function(s){0===s.data.data.length?(t.hideLoading(),e.addrMain={},e.goodsList=[],t.showModal({title:"啊哦，加载失败",content:"您附近暂无入驻商家哦，去更换一个新地址吧～",success:function(s){s.confirm?(console.log("用户点击确定2"),t.navigateTo({url:"../address/address"})):s.cancel&&(console.log("用户点击取消"),t.switchTab({url:"user"}))}})):(t.showToast({title:"商铺加载完毕",icon:"success"}),e.loadProduct(s))}})},loadProduct:function(s){var e=this;this.items=s.data.data,this.addrMain=this.items[0],t.request({url:this.$tempUrl+"product/list",data:{shopId:this.items[0].id},method:"GET",success:function(s){t.hideLoading(),e.goodsList=s.data.data,0===s.data.data.length&&t.showToast({title:"啊哦，此商家还未上架商品，换家点吧>.<#",icon:"none"})}})},addrChange:function(s){var e=this;console.log(s.id),this.type="",this.addrMain=s,t.request({url:this.$tempUrl+"product/list",data:{shopId:s.id},method:"GET",success:function(s){console.log(s.data.data),e.goodsList=s.data.data,0===s.data.data.length&&t.showToast({title:"啊哦，此商家还未上架商品，换家点吧>.<#",icon:"none"})}})},togglePopup:function(t){this.type=t},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(t){console.log("点击了商品"+t.id)},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):(t.setStorageSync("shopId",this.addrMain.id),t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../order/confirmation",complete:function(){t.removeStorage({key:"confirmCoupon",success:function(t){console.log("remove confirmCoupon success")}})}})}}))},deleteGoods:function(t){for(var s=this.goodsList.length,e=0;e<s;e++)if(t==this.goodsList[e].id){this.goodsList.splice(e,1);break}this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){for(var t=this.selectedList.length,s=0;s<t;s++)this.deleteGoods(this.selectedList[s]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].stock<=1||(this.goodsList[t].stock--,this.sum())},add:function(t){this.goodsList[t].stock++,this.sum()},sum:function(){this.sumPrice=0;for(var t=this.goodsList.length,s=0;s<t;s++)this.goodsList[s].selected&&(this.sumPrice=this.sumPrice+this.goodsList[s].stock*this.goodsList[s].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){},toCall:function(s){t.showModal({title:"提示",content:"是否拨打商家电话？",success:function(e){e.confirm?(console.log("用户点击确定"),t.makePhoneCall({phoneNumber:s})):e.cancel&&console.log("用户点击取消")}})}}};s.default=a}).call(this,e("543d")["default"])},"56cd":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};s.default=i},7331:function(t,s,e){"use strict";e.r(s);var i=e("4ef5"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a},"9ac3":function(t,s,e){"use strict";e.r(s);var i=e("0895"),o=e("7331");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("c738");var a=e("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=c.exports},b923:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"612d91db-0"},on:{click:function(s){t.onClick()}}})},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},c738:function(t,s,e){"use strict";var i=e("f873"),o=e.n(i);o.a},ea34:function(t,s,e){"use strict";e.r(s);var i=e("56cd"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a},f873:function(t,s,e){}},[["23bd","common/runtime","common/vendor"]]]);