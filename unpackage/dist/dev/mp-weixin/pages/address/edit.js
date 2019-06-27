(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/address/edit"],{

/***/ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/main.js?{\"page\":\"pages%2Faddress%2Fedit\"}":
/*!**********************************************************************************************!*\
  !*** C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/main.js?{"page":"pages%2Faddress%2Fedit"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _edit = _interopRequireDefault(__webpack_require__(/*! ./pages/address/edit.vue */ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_edit.default));

/***/ }),

/***/ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue":
/*!***************************************************************************!*\
  !*** C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=8df4b6dc& */ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=scss& */ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc&":
/*!**********************************************************************************************************!*\
  !*** C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=8df4b6dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_8df4b6dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
















































{
  data: function data() {
    return {
      editType: 'edit',
      id: '',
      name: '',
      tel: '',
      isDefault: true,
      region: { address: '请点击选择地址' },
      label: null };

  },
  methods: {
    radioChange: function radioChange(evt) {
      this.label = evt.detail.value;
      // console.log(evt.detail.value);
      // console.log(this.label);
      // console.log(evt.detail.value === this.label);
    },
    chooseCity: function chooseCity() {var _this = this;
      uni.chooseLocation({
        success: function success(res) {
          // console.log(res);
          _this.region = res;
        } });

    },
    isDefaultChange: function isDefaultChange(e) {
      this.isDefault = e.detail.value;
    },
    del: function del() {var _this2 = this;
      uni.showModal({
        title: '提示',
        content: '确认删除此地址？',
        success: function success(res) {
          if (res.confirm) {
            uni.request({
              url: _this2.$tempUrl + 'userAddress/delete',
              method: 'DELETE',
              data: { id: _this2.id, openId: uni.getStorageSync('openId') },
              success: function success(res) {
                if (res.data.code === 0) {
                  uni.getStorage({
                    key: 'confirmAddr',
                    success: function success(ret) {
                      if (ret.data.id == _this2.id) {
                        uni.removeStorage({
                          key: 'confirmAddr',
                          success: function success() {
                            uni.navigateBack({ delta: 1 });
                          } });

                      } else {
                        uni.navigateBack({ delta: 1 });
                      }
                    } });

                }
              } });

          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        } });

    },
    save: function save() {
      var data = {
        userWechatOpenid: uni.getStorageSync('openId'),
        contactName: this.name,
        contactPhone: this.tel,
        areaName: this.region.address,
        address: this.region.name,
        latitude: this.region.latitude,
        longitude: this.region.longitude,
        label: this.label
        // isDefault: this.isDefault
      };
      if (this.editType == 'edit') {
        data.id = this.id;
      }
      if (!data.contactName) {
        uni.showToast({ title: '请输入收件人姓名', icon: 'none' });
        return;
      }
      if (!data.contactPhone) {
        uni.showToast({ title: '请输入收件人电话号码', icon: 'none' });
        return;
      }
      if (!data.areaName == '请点击选择地址') {
        uni.showToast({ title: '请选择收件地址', icon: 'none' });
        return;
      }
      if (!data.address) {
        uni.showToast({ title: '请输入收件人详细地址', icon: 'none' });
        return;
      }
      // uni.showLoading({
      // 	title: '正在提交'
      // });
      //实际应用中请提交ajax,模板定时器模拟提交效果
      if (this.editType == 'edit') {
        uni.request({
          url: this.$tempUrl + 'userAddress/updateForLatitudeAndLongitude',
          method: 'PUT',
          data: data,
          success: function success(res) {
            if (res.data.code === 0) {
              uni.setStorage({
                key: 'confirmAddr',
                data: data,
                success: function success() {
                  // uni.hideLoading();
                  uni.showToast({ title: '编辑地址成功', icon: 'none' });
                  setTimeout(function () {
                    uni.navigateBack({ delta: 2 });
                  }, 200);
                } });

            } else {
              uni.showToast({ title: '失败', icon: 'none' });
            }
          } });

      } else {
        uni.request({
          url: this.$tempUrl + 'userAddress/insertForLatitudeAndLongitude',
          method: 'POST',
          data: data,
          success: function success(res) {
            if (res.data.code === 0) {
              uni.setStorage({
                key: 'confirmAddr',
                data: data,
                success: function success() {
                  // uni.hideLoading();
                  uni.showToast({ title: '新建地址成功', icon: 'none' });
                  setTimeout(function () {
                    uni.navigateBack({ delta: 2 });
                  }, 200);
                } });

            } else {
              uni.showToast({ title: '失败', icon: 'none' });
            }
          } });

      }
    } },

  onLoad: function onLoad(e) {
    //获取传递过来的参数
    this.editType = e.type;
    if (e.type == 'edit') {
      uni.setNavigationBarTitle({
        title: '编辑收货地址' });

      // uni.getStorage({
      // 	key: 'address',
      // 	success: e => {
      this.id = e.id;
      this.name = e.contactName;
      this.tel = e.contactPhone;
      this.region.address = e.areaName;
      this.region.name = e.address;
      this.region.latitude = e.latitude;
      this.region.longitude = e.longitude;
      console.log(e.label);
      this.label = e.label;
      // this.isDefault = e.isDefault;
      // 	}
      // });
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/64165/Desktop/桶装水/tongzhuangshui_h5/pages/address/edit.vue?vue&type=template&id=8df4b6dc& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: "content" }, [
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("收件人")]),
        _c("view", { staticClass: "input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            attrs: {
              placeholder: "请输入收件人姓名",
              type: "text",
              eventid: "d8a346d6-0"
            },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          })
        ])
      ]),
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("电话号码")]),
        _c("view", { staticClass: "input" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tel,
                expression: "tel"
              }
            ],
            attrs: {
              placeholder: "请输入收件人电话号码",
              type: "text",
              eventid: "d8a346d6-1"
            },
            domProps: { value: _vm.tel },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tel = $event.target.value
              }
            }
          })
        ])
      ]),
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("所在地区")]),
        _c(
          "view",
          {
            staticClass: "input",
            attrs: { eventid: "d8a346d6-2" },
            on: { tap: _vm.chooseCity }
          },
          [_vm._v(_vm._s(_vm.region.address))]
        )
      ]),
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("详细地址")]),
        _c("view", { staticClass: "input" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.region.name,
                expression: "region.name"
              }
            ],
            attrs: {
              "auto-height": "true",
              placeholder: "输入详细地址",
              eventid: "d8a346d6-3"
            },
            domProps: { value: _vm.region.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.region.name = $event.target.value
              }
            }
          })
        ])
      ]),
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("标签")]),
        _c(
          "view",
          { staticClass: "input" },
          [
            _c(
              "radio-group",
              {
                attrs: { eventid: "d8a346d6-4", mpcomid: "d8a346d6-0" },
                on: { change: _vm.radioChange }
              },
              [
                _c(
                  "label",
                  { staticClass: "radio" },
                  [
                    _c("radio", {
                      attrs: {
                        value: "0",
                        checked: _vm.label === "0",
                        color: "#f06c7a"
                      }
                    }),
                    _vm._v("家")
                  ],
                  1
                ),
                _c(
                  "label",
                  { staticClass: "radio" },
                  [
                    _c("radio", {
                      attrs: {
                        value: "1",
                        checked: _vm.label === "1",
                        color: "#f06c7a"
                      }
                    }),
                    _vm._v("公司")
                  ],
                  1
                ),
                _c(
                  "label",
                  { staticClass: "radio" },
                  [
                    _c("radio", {
                      attrs: {
                        value: "2",
                        checked: _vm.label === "2",
                        color: "#f06c7a"
                      }
                    }),
                    _vm._v("学校")
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _c("view", { staticClass: "row" }, [
        _c("view", { staticClass: "nominal" }, [_vm._v("设置默认地址")]),
        _c("view", { staticClass: "input switch" }, [
          _c("switch", {
            attrs: {
              color: "#f06c7a",
              checked: _vm.isDefault,
              eventid: "d8a346d6-5"
            },
            on: { change: _vm.isDefaultChange }
          })
        ])
      ]),
      _vm.editType == "edit"
        ? _c(
            "view",
            {
              staticClass: "row",
              attrs: { eventid: "d8a346d6-6" },
              on: { tap: _vm.del }
            },
            [_c("view", { staticClass: "del" }, [_vm._v("删除收货地址")])]
          )
        : _vm._e()
    ]),
    _c(
      "view",
      {
        staticClass: "save",
        attrs: { eventid: "d8a346d6-7" },
        on: { tap: _vm.save }
      },
      [_c("view", { staticClass: "btn" }, [_vm._v("保存地址")])]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../Users/64165/Desktop/桶装水/tongzhuangshui_h5/main.js?{\"page\":\"pages%2Faddress%2Fedit\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/address/edit.js.map