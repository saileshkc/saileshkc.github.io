webpackJsonp([2],{

/***/ "../../../../../assets/css/core.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../assets/css/core.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/index.js??postcss!./core.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/index.js??postcss!./core.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../assets/css/sweetalert2.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../assets/css/sweetalert2.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/index.js??postcss!./sweetalert2.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/index.js??postcss!./sweetalert2.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../assets/css/core.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Dancing+Script);", ""]);

// module
exports.push([module.i, ".btn-amenities{padding:12px;width:250px;margin:100px auto;display:block;border-radius:0px}.comm-living{padding:55px;position:relative;top:-100px;max-width:700px;margin:0 auto}.cultivated-heading{text-align:center;margin-bottom:40px}.mt-10{top:20px;position:relative}.at-glance-items{padding-top:20px}.at-glance-items .fa{color:#f1f1f1;font-size:50px;text-align:center}.ptb-30{padding:30px 15px}.contact-sub-heading{font-weight:600}.btn-direction{color:#fff;padding:12px;font-size:20px;width:250px;border-radius:0px;margin:20px 0px}.toll-no{margin:20px 0px}@media only screen and (max-width: 600px){.btn-direction{width:100%}}@font-face{font-family:museoSans;src:url(https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/fonts/MuseoSans.otf)}.ptb-50{padding:50px 0px}.ptb-80{padding:36px 15px}.ptb-home-80{padding-top:75px}.btn-interest{border-radius:0px;padding:12px;width:250px}.more-button{border-radius:0px;padding:12px;width:27%}.submit-button{border-radius:0px;padding:12px;margin:0 auto;display:block;width:35%}.img-fullwidth{width:100%}.card-custom{background-color:transparent !important;border:none !important;width:100%}.card-text-custom{color:#fff;text-align:center}.block-center{margin:0 auto}@media only screen and (max-width: 600px){.more-button{margin-left:27px;width:85%}.navbar-dark .navbar-toggler{position:absolute;top:-47px;right:23px}.main-wrap-header .wrap-header{width:100% !important}.wrap{width:90% !important}.logo{width:100% !important}.card-custom{width:100%}.block-center{margin:0 11px}.btn-interest{width:100%}.ptb-50{padding:16px 16px}.ptb-home-80{padding-top:5px}}@media only screen and (min-width: 768px) and (max-width: 999px){.card-custom{width:100%}.more-button{margin-left:280px;width:28%}}@media only screen and (min-width: 768px) and (max-width: 1024px){.main-wrap-header .wrap-header{width:100% !important}.wrap{width:90% !important}.logo img{padding:0px !important}}@media only screen and (min-width: 1024px) and (max-width: 1290px){.main-wrap-header .wrap-header{width:100% !important}.wrap{width:90% !important}}.hlimage{position:relative}.hlimage img.handl-image{width:100%;height:233px;-o-object-fit:cover;object-fit:cover}.hnlalign{padding:12px;text-align:right;width:65%}.hnl-card-pad .col-sm-6:first-child{padding-left:0}.hnl-box-height{height:auto}.hnl-box-height .row{margin:0}.hnl-box-height .builder-logo{max-height:60px;max-width:100px;margin:auto;-o-object-fit:contain;object-fit:contain;padding:5px;border-radius:10px}.hnl-card-pad{padding:8px 0px 6px 12px}.list-header li{margin:0px 20px}.checkbox-text{font-size:18px;vertical-align:middle}.check-filter{margin-left:10px}.landlist-title{font-size:20px}.landfilter-btn select{border-radius:5px;margin:0px 10px}.landfilter-btn select.form-control:not([size]):not([multiple]){height:calc(2rem + 2px)}.handl-list-back-color{background-color:#525f86;padding:50px}.handl-list-back-color .fa{color:#000}.handl-list-back-color .table td{text-align:center}.handl-list-back-color .stage-text{color:#fff;margin-top:7px}.handl-list-back-color .lot-no{font-size:40px;font-weight:100}.handl-list-back-color input[type=\"checkbox\"]{width:19px;height:19px;vertical-align:middle}.mtb-20{margin-top:20px}.mtb-10{margin-top:15px}.bathroom-text{margin-left:20px}.parking-text{margin-left:20px}.rboldtext{font-weight:100}.rboldtext-home{font-size:13px}.imgbox{border-radius:0px;box-shadow:0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);display:block;padding:1.25rem;width:100%;margin-bottom:40px}.handl-cursor{cursor:pointer;margin-bottom:30px}.pad-6{padding:10px}.pad-6 img{padding:13px 0px}.pad-6 span{font-size:17px;font-weight:700}.design-back{box-shadow:0px 1px 5px -1px #777777;background-color:#fff}.gap{margin-top:20px}.gap40{margin-top:40px}.clearfix{clear:both}.not-found-container{text-align:center;margin:0 auto;width:100%}.not-found-container i{font-size:120px;text-align:center;color:#ddd}.not-found-container h1{font-size:50px;text-align:center;color:#333}.not-found-container p{font-size:20px;text-align:center;color:#333}.not-found-container .fa-search{color:#043957}.not-found-container .fa-spinner{color:#043957}@media screen and (min-width: 768px) and (max-width: 1024px){.handl-image{width:100% !important;height:188px !important}.bathroom-text{margin-left:12px}.parking-text{margin-left:12px}.pad-0{padding:0px}}@media screen and (min-width: 1025px) and (max-width: 1055px){.bathroom-text{margin-left:12px}.parking-text{margin-left:12px}}@media screen and (min-width: 601px) and (max-width: 767px){.pad-0{padding:16px !important}}@media only screen and (max-width: 600px){.handl-image{width:100% !important;height:270px !important}#mason-img{width:100% !important}.mtbhandl-20{margin-top:30px}.land-list-back-color{padding:15px}.btn-enquire{width:100% !important}.pad-0{padding:16px !important}}.builder-logo{max-width:100px;padding:0px}.filter-navbar .nav-item .dropdown .btn{background:rgba(255,255,255,0.5)}.filter-navbar .nav-item .dropdown .slider-menu{width:240px;padding:10px}.filter-navbar .nav-item .dropdown .slider-menu .irs-from{background:#fff !important;color:#111}.filter-navbar .nav-item .dropdown .slider-menu .irs-to{background:#fff !important;color:#111}.filter-navbar .nav-item .dropdown .checkbox-menu{width:240px;padding:10px}.mlr-48{width:48%}.fmt-10{margin-top:15px}.social-icons i{height:30px;width:30px;padding:5px;background:#fff;border-radius:3px}.social-icons i.fa{font-size:20px !important}.social-icons:hover.fa{opacity:0.8}.rpm-logo img{height:45px}.main-wrap-header{width:100%;height:170px;overflow:hidden;text-align:center;z-index:999999;transition:height 0.2s ease-in-out}.main-wrap-header .wrap-header{width:100%;margin:0 auto}.main-wrap-header .navbar{padding:0px;position:relative;top:0px}.main-wrap-header .logo{padding:15px}.main-wrap-header .logo img{height:70px;width:auto}.main-wrap-header .logo-scroll{float:left;padding:12px 15px}.main-wrap-header .logo-scroll img{height:38px;width:auto}.main-wrap-header .wrap{margin:0 auto;width:100%}.main-wrap-header .custom-toggle{position:absolute;right:20px;top:17px;visibility:hidden;cursor:pointer}.main-wrap-header .custom-toggle .fa{color:#fff}.border-top-scroll{border-top:none !important}.navbar-dark .navbar-nav{margin:0 auto}.navbar-dark .navbar-nav.secondary-border-color{border-top:2px solid #525f86}.navbar-dark .navbar-nav .nav-link{color:#fff;padding:20px 20px 10px 20px;border-bottom:2px solid transparent}.navbar-dark .navbar-nav .nav-link:hover{border-color:#8777ae}.navbar-dark .navbar-nav .nav-link.accent-active-link{border-color:#8777ae}#register-now{position:fixed;top:0px;right:0px;display:none}.fixed{position:fixed;top:0;left:0;width:100%;height:70px;transition:all 0.3s ease-in-out}.nav-link-scroll{border-top:none !important;width:100%;right:150px}.logo-scroll-img{height:40px;width:auto;padding:0px !important}.btn-interest-header{border-radius:0px;padding:16px;width:250px;height:70px}@media only screen and (max-width: 1399px){#register-now{display:none !important}}@media only screen and (max-width: 1024px){.main-wrap-header{height:64px;transition:height 0s ease-in-out}.main-wrap-header .custom-toggle{visibility:visible}.main-wrap-header .navbar{display:none}.main-wrap-header .logo,.main-wrap-header .logo-scroll{padding:12px 15px !important;float:none}.main-wrap-header .logo img,.main-wrap-header .logo-scroll img{height:38px;width:auto;padding:0 !important}}@media only screen and (min-width: 1025px){.custom-side-menu{visibility:hidden !important}}.custom-side-menu{visibility:visible;transition:right 0.3s ease-in-out;box-shadow:3px 3px 5px 6px rgba(0,0,0,0.1)}.custom-side-menu.list-group{width:300px;right:-310px;position:fixed;height:100%;z-index:9999;overflow:scroll;cursor:pointer}.custom-side-menu.list-group.active{right:0}.custom-side-menu.list-group .list-group-item{background:transparent;border:none;padding-top:20px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.3);text-align:center;color:#fff}.custom-side-menu.list-group .list-group-item:first-child{border-radius:0}.custom-side-menu.list-group .list-group-item:last-child{border-radius:0}.custom-side-menu.list-group .list-group-item:hover{background:#8777ae;color:#fff}.custom-side-menu.list-group .list-group-item.accent-active-bg{background-color:#8777ae;color:#fff}#myNavbar2 .navbar-nav{margin-left:40px !important}.form-group.landfilter-btn{margin-bottom:0px !important}.blue-opacity{background-color:#525f86;width:100%;height:100%}.land-list-back-color .table td{text-align:center}.land-list-back-color .stage-text{margin-top:7px}.land-list-back-color .lot-no{font-weight:100}.land-list-back-color .form-control:focus{border-color:transparent;box-shadow:none}.land-list-table-back{padding:20px;border-radius:12px}.land-list-table-back .table th{border-top:none !important;text-align:center}.land-filter-color{padding:30px;border-radius:12px;max-height:540px}.land-filter-color .label{font-weight:100}.card-body-custom{padding:30px 6px !important}.news-detail{padding:20px 0}.news-detail h2{text-align:center;font-weight:700}.news-detail h6{text-align:center}.news-detail .featured-image{margin:20px auto}.news-detail .featured-image img{max-height:400px;-o-object-fit:cover;object-fit:cover;width:100%;margin:auto}.news-cards-section{background:rgba(255,255,255,0.8);padding:20px 0}.details-back h1.title{padding-top:11px}.details-back .gap{margin-top:50px}.btn-back{padding:12px;width:250px;border-radius:0px;margin:20px 14px}#html5-watermark{display:none !important}.btn-enquire{padding:12px;width:170px !important;border-radius:0px;margin:5px}.box{border-radius:3px;box-shadow:0 2px 3px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);display:block;padding:1.25rem;width:100%;margin-bottom:40px;background-color:#fff}.box img{border-radius:50%;padding:5px}.box table td{border:0px !important}.box .box-image-radius{border-radius:0px !important}#magin-bot{margin-bottom:40px}#mason-img{max-height:70px;width:170px;-o-object-fit:fill;object-fit:fill;border-radius:0px}@media only screen and (min-width: 768px) and (max-width: 999px){.btn-enquire{margin:5px;width:100%}#mason-img{width:100%}}body{min-width:320px;font-family:museoSans}#wrapper{transition:all 0.3s ease-in-out}#wrapper.shift-right{position:relative;right:300px}#main-container{background-color:#dbe4e6}.body-foreground-color{background-color:#dbe4e6}.center-text{text-align:center !important}.primary-bg-color{background-color:#364571}.primary-font-color{color:#364571}.primary-active{color:#fff;background-color:#8777ae}.secondary-bg-color{background-color:#525f86}.secondary-border-color{border-color:#525f86}.secondary-font-color{color:#525f86}.accent-bg-color{background-color:#8777ae}.accent-active-bg{background-color:#8777ae}.accent-active-link{border-color:#8777ae}.accent-font-color{color:#8777ae}.accent-border-color{border-color:#8777ae}.accent-hover-menu:hover{border-color:blue #8777ae}.button-bg-color{background-color:#3e82d0}.button-bg-color.btn:hover{opacity:0.7 !important}.button-font-color{color:#fff}.button-border-color{border-color:#3e82d0}.button-font-color{color:#fff}.heading-font-color{color:#364571}.heading-font-name{font-family:museoSans}.heading-font-size{font-size:35px}.page-title-color{color:#364571}.page-title-font-name{font-family:\"Dancing Script\",cursive}.page-title-font-size{font-size:85px}.secondary-heading-color{color:#edea9c}.secondary-heading-font-name{color:museoSans}.secondary-heading-font-size{font-size:30px}.body-font-color{color:#212529}.body-font-name{color:museoSans}.body-font-size{font-size:16px}.secondary-font-color{color:#73d3ff}.secondary-font-bg-color{background-color:#73d3ff}.secondary-font-name{color:museoSans}.secondary-font-size{font-size:16px}.white-text{color:#ffffff}.white-bg{background-color:#ffffff}h1,h2,h3,h4,h5{font-family:museoSans}.pad-0{padding:0px}.mtb-30{margin-top:30px}.pad-18{padding:18px}.m-35{margin-top:35px;margin-bottom:35px}#register-form .form-control{padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:transparent;border-radius:0rem;border-bottom:1px solid #8777ae;border-left:0px;border-radius:0px;border-top:0px;border-right:0px;padding:.375rem 0em;margin-bottom:5px}#register-form .form-control:focus{color:#495057;background-color:transparent;border-color:transparent;outline:none;box-shadow:none;border-bottom:1px solid black}#register-form .form-group{padding:0px;margin-bottom:0px}.err-alert{color:red}.image-center{display:block;margin:0 auto}.irs-line{width:100% !important;height:2px !important;top:36px !important}.irs-bar{background:#cfd3dd !important;border:none !important;height:2px !important;top:36px !important}.irs-to{background:transparent !important;margin-left:-5px !important}.irs-from{background:transparent !important;margin-left:5px !important}.irs-slider{top:30px !important;width:15px !important;height:15px !important;background:#73d3ff !important;box-shadow:none !important;border:none !important}.irs-min{color:#73d3ff !important}.irs-max{color:#73d3ff !important}.handl-filter-color{background-color:#364571;padding:20px;border-radius:12px;max-height:650px}.handl-filter-color .label{color:#fff;font-size:20px;font-weight:100;margin-top:20px}.masterplan-frame{width:100%;height:700px}.view-more-btn{color:#fff !important;background-color:#364571;padding:12px;font-size:20px;width:250px;border-radius:0px;margin:20px 0px;display:block;text-align:center;cursor:pointer}.mt-20{margin-top:20px !important}.mb-20{margin-bottom:20px !important}.ptb-20{padding-top:20px;padding-bottom:20px}.pb-20{padding-bottom:20px !important}.p-50{padding:50px !important}.ptb-70{padding-top:70px !important;padding-bottom:70px !important}.mouse-cursor{cursor:pointer}.masterplan-frame{margin-bottom:-12px}.white-opacity-wrapper{width:100%;height:100%;background:rgba(255,255,255,0.3)}.direction-section{padding:20px 0 0 0}.direction-section .poi-button{width:100%;margin:10px;color:#fff;border-radius:5px;height:30px}.direction-section .poi-button#all{background:rgba(255,255,255,0.33);border-color:#fff;color:#333}.direction-section .poi-button#all.active{background:#fff}.direction-section .poi-button#education{background:rgba(255,87,87,0.33);border-color:#FF5757}.direction-section .poi-button#education.active{background:#FF5757}.direction-section .poi-button#transport{background:rgba(15,144,255,0.33);border-color:#0F90FF}.direction-section .poi-button#transport.active{background:#0F90FF}.direction-section .poi-button#shopping{background:rgba(217,103,204,0.33);border-color:#D967CC}.direction-section .poi-button#shopping.active{background:#D967CC}.direction-section .poi-button#health{background:rgba(216,134,64,0.33);border-color:#D88640}.direction-section .poi-button#health.active{background:#D88640}.direction-section .poi-button#recreation{background:rgba(27,168,186,0.33);border-color:#1BA8BA}.direction-section .poi-button#recreation.active{background:#1BA8BA}.direction-section .poi-button:hover{opacity:0.7}.direction-section .direction-buttons{width:100%}.direction-section .direction-buttons .direction-button{width:100%;opacity:0.9}.direction-section .direction-buttons .direction-button.active{opacity:1}.map-section{margin-top:15px;overflow:hidden;position:relative}.map-section #googleMap{min-height:600px;width:100%;margin-bottom:0px}.map-section .method-sidebar{position:absolute;width:18rem;height:100%;background:rgba(255,255,255,0.7);left:-400px;top:30px;bottom:0;background:none;border-radius:20px}.map-section .method-sidebar.active{left:20px}.map-section .method-sidebar .card{color:#fff;background:rgba(54,69,113,0.9);width:18rem;border-radius:15px}.map-section .method-sidebar .card .image-container{-webkit-box-flex:0.5;-ms-flex-positive:0.5;flex-grow:0.5;min-height:50px}.map-section .method-sidebar .card .image-container .method-icon-car{height:30px;width:auto}.map-section .method-sidebar .card .image-container .method-icon{min-height:50px;display:block;text-indent:-9999px;height:auto}.map-section .method-sidebar .card .image-container .method-icon.driving{width:50px;background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Layer_1\" data-name=\"Layer 1\" viewBox=\"0 0 37.21 21.47\"><defs><style>.cls-1{fill:none;}.cls-2{fill:%23fff;}</style></defs><title>car_icon</title><path class=\"cls-1\" d=\"M9.11,14.57A2.84,2.84,0,1,0,12,17.41,2.85,2.85,0,0,0,9.11,14.57Zm0,4.56a1.71,1.71,0,1,1,1.71-1.71A1.72,1.72,0,0,1,9.11,19.12Z\"/><path class=\"cls-1\" d=\"M31.49,14.57a2.84,2.84,0,1,0,2.84,2.84A2.85,2.85,0,0,0,31.49,14.57Zm0,4.56a1.71,1.71,0,1,1,1.71-1.71A1.72,1.72,0,0,1,31.49,19.12Z\"/><path class=\"cls-1\" d=\"M12.45,3.48a3.6,3.6,0,0,0,.95,3c4.3.14,9.86.92,11.48,1.15C18.52,3,13.27,3.39,12.45,3.48Z\"/><path class=\"cls-2\" d=\"M12.18,2.28l-.9.13,0,.9c-.15,2.9,1.31,4,1.47,4.15l.27.2h.33c4.51.15,10.49,1,11.63,1.18h.17a1.29,1.29,0,0,0,1-.49h0a1.09,1.09,0,0,0-.23-1.53C18.53,1.45,12.44,2.24,12.18,2.28ZM13.4,6.45a3.6,3.6,0,0,1-.95-3c.81-.09,6.06-.44,12.42,4.12C23.26,7.36,17.7,6.59,13.4,6.45ZM25.59,8h0Z\"/><path class=\"cls-2\" d=\"M25.2,16.65H13.1a4,4,0,0,1,.08.76,4,4,0,0,1,0,.46H25.2a.61.61,0,0,0,0-1.22Z\"/><path class=\"cls-2\" d=\"M37.19,13.16a5.15,5.15,0,0,0-2.71-4.83A37.83,37.83,0,0,0,29.34,6a11.47,11.47,0,0,1-1.93-1c-.62-.54-6.29-5.27-13.83-5A25.35,25.35,0,0,0,4.9,1.5,2.31,2.31,0,0,0,3.1,4,3.26,3.26,0,0,1,2,6.16L2,6.23C1.79,6.38-2,9.87,1.37,17.09l.36.78H3.44a.61.61,0,1,0,0-1.22H2.52l0-.07c-3-6.41.16-9.32.3-9.45A4.45,4.45,0,0,0,4.32,4c0-1.11.66-1.28.89-1.33a24.12,24.12,0,0,1,8.37-1.44C20.69,1,26,5.45,26.65,6a12.35,12.35,0,0,0,2.27,1.17,36.68,36.68,0,0,1,5,2.23A3.92,3.92,0,0,1,36,13.11v3.54h-.49a4,4,0,0,1,.08.76,4,4,0,0,1,0,.46H37.2Z\"/><path class=\"cls-2\" d=\"M12,17.26a.61.61,0,0,1,.61-.61h.53a4.11,4.11,0,1,0,0,1.22h-.56A.61.61,0,0,1,12,17.26Zm-2.84,3A2.84,2.84,0,1,1,12,17.41,2.85,2.85,0,0,1,9.11,20.25Z\"/><path class=\"cls-2\" d=\"M13.1,16.65h-.53a.61.61,0,1,0,0,1.22h.56a4,4,0,0,0,0-.46A4,4,0,0,0,13.1,16.65Z\"/><path class=\"cls-2\" d=\"M34.56,17.26a.61.61,0,0,1,.61-.61h.31a4.11,4.11,0,1,0,0,1.22h-.34A.61.61,0,0,1,34.56,17.26Zm-3.07,3a2.84,2.84,0,1,1,2.84-2.84A2.85,2.85,0,0,1,31.49,20.25Z\"/><path class=\"cls-2\" d=\"M35.48,16.65h-.31a.61.61,0,1,0,0,1.22h.34a4,4,0,0,0,0-.46A4,4,0,0,0,35.48,16.65Z\"/><circle class=\"cls-2\" cx=\"31.49\" cy=\"17.41\" r=\"1.71\"/><circle class=\"cls-2\" cx=\"9.11\" cy=\"17.41\" r=\"1.71\"/></svg>');background-repeat:no-repeat;background-position:center;background-size:auto auto}.map-section .method-sidebar .card .image-container .method-icon.bicycling{width:50px;background:url('data:image/svg+xml;utf8,<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26.32 37.03\"><defs><style>.cls-1{fill:%23fff;}</style></defs><title>bike_icon</title><path class=\"cls-1\" d=\"M13.16,16a.74.74,0,0,0-.84.77V36.21a.84.84,0,0,0,1.68,0V16.72A.74.74,0,0,0,13.16,16Z\"/><path class=\"cls-1\" d=\"M25.71,0H20.88c-1.33,0-2.69.9-4.16,1.87a10.68,10.68,0,0,1-2.34,1.31H11.95A10.78,10.78,0,0,1,9.58,1.85C8.14.9,6.77,0,5.44,0H.61a.61.61,0,0,0,0,1.22H5.44c1,0,2.18.8,3.49,1.67s2.34,1.51,3,1.51h.61V9.84h-.48a4.16,4.16,0,0,0-3.59,4.1V27a2.39,2.39,0,0,0,1,1.64,1.56,1.56,0,0,0,1,.33,1.62,1.62,0,0,0,1.28-.64.61.61,0,1,0-1-.75.37.37,0,0,1-.53.09,1.28,1.28,0,0,1-.52-.73v-13a2.93,2.93,0,0,1,2.46-2.88h1.93a2.93,2.93,0,0,1,2.54,2.89V26.8a1.11,1.11,0,0,1-.38.75.39.39,0,0,1-.56,0,.61.61,0,1,0-.88.84,1.62,1.62,0,0,0,2.28.05,2.36,2.36,0,0,0,.76-1.59V13.94a4.17,4.17,0,0,0-3.68-4.1h-.4V4.39h.61c.67,0,1.67-.62,3-1.53s2.5-1.65,3.46-1.65h4.83a.61.61,0,1,0,0-1.22Z\"/><path class=\"cls-1\" d=\"M7.3,24h-2a1,1,0,1,0,0,2h2a1,1,0,1,0,0-2Z\"/><path class=\"cls-1\" d=\"M21.05,18.08H19a1,1,0,0,0,0,2h2a1,1,0,1,0,0-2Z\"/></svg>');background-repeat:no-repeat;background-position:center;background-size:auto auto}.map-section .method-sidebar .card .image-container .method-icon.walking{width:50px;background:url('data:image/svg+xml;utf8,<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25.51 33.88\"><defs><style>.cls-1{fill:%23fff;}</style></defs><title>walk_icon</title><path class=\"cls-1\" d=\"M9.28,18.08,2.33,19.18l0,.65a7.29,7.29,0,0,0,.08,1.91c.32,1.86,1.47,4.12,3.34,5A3.64,3.64,0,0,0,7.24,27a4.29,4.29,0,0,0,2.26-.69l.12-.09c2-2,.75-5.32-.16-7.72Zm-.48,7.27a2.67,2.67,0,0,1-2.56.25C4.78,24.94,3.84,23,3.59,21.53a5.42,5.42,0,0,1-.08-1.3l5-.79C9.41,21.91,10,24,8.79,25.35Z\"/><path class=\"cls-1\" d=\"M2.46,19l6.79-1-.1-.61a8.69,8.69,0,0,1,.39-4.83c.09-.27.18-.55.26-.84A10.18,10.18,0,0,0,9.69,6c-.55-2.39-1.36-5-3.2-5.77A3.83,3.83,0,0,0,2.95.72C-.64,3.34-.06,8.62.21,10.17A33.86,33.86,0,0,0,1.52,15c.07.24.16.5.27.78a8.61,8.61,0,0,1,.62,2.55Zm-1-9c-.48-2.84-.14-6.5,2.2-8.22a3.45,3.45,0,0,1,1.66-.53A1.78,1.78,0,0,1,6,1.37C7.52,2,8.21,5,8.5,6.31a9.07,9.07,0,0,1,.12,5c-.08.28-.16.54-.25.8a9.62,9.62,0,0,0-.52,4.79l-4.3.66a10.57,10.57,0,0,0-.62-2.23c-.09-.25-.18-.47-.25-.71A33.05,33.05,0,0,1,1.41,10Z\"/><path class=\"cls-1\" d=\"M15.57,24.79l-.21.45c-1.06,2.33-2.52,5.53-.65,7.69l.11.1a4.19,4.19,0,0,0,2.44.84,3.64,3.64,0,0,0,1.3-.24c1.92-.73,3.22-2.91,3.65-4.74a7.87,7.87,0,0,0,.22-2.06l-.09-.52ZM21,28.61c-.35,1.47-1.4,3.32-2.9,3.89a2.65,2.65,0,0,1-2.54-.42c-1.12-1.37-.4-3.47.68-5.88l4.93,1.11A5.6,5.6,0,0,1,21,28.61Z\"/><path class=\"cls-1\" d=\"M22.93,7.83a3.8,3.8,0,0,0-3.44-.65c-1.89.7-2.86,3.2-3.55,5.53a10.22,10.22,0,0,0-.47,5.64c.06.29.14.58.21.86A8.67,8.67,0,0,1,15.75,24l-.14.6,6.71,1.47.09-.65a8.67,8.67,0,0,1,.79-2.5c.12-.27.23-.52.31-.73a33.77,33.77,0,0,0,1.62-4.74C25.49,15.95,26.4,10.72,22.93,7.83Zm1,9.36a33,33,0,0,1-1.58,4.59c-.07.21-.17.43-.28.67a10.59,10.59,0,0,0-.76,2.19l-4.25-.93a9.61,9.61,0,0,0-.21-4.81c-.07-.27-.14-.53-.2-.82a9.1,9.1,0,0,1,.44-5c.37-1.25,1.24-4.17,2.81-4.75a2.58,2.58,0,0,1,2.3.48C24.49,10.72,24.6,14.39,23.94,17.2Z\"/></svg>');background-repeat:no-repeat;background-position:center;background-size:auto auto}.btn.btn-general{border-radius:0px;padding:12px;margin:0 auto;display:block;text-align:center}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../assets/css/sweetalert2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sweetalert2/dist/sweetalert2.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Ion.RangeSlider\n// css version 2.0.3\n// © 2013-2014 Denis Ineshin | IonDen.com\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// RangeSlider */\n\n.irs {\n    position: relative; display: block;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n    .irs-line {\n        position: relative; display: block;\n        overflow: hidden;\n        outline: none !important;\n    }\n        .irs-line-left, .irs-line-mid, .irs-line-right {\n            position: absolute; display: block;\n            top: 0;\n        }\n        .irs-line-left {\n            left: 0; width: 11%;\n        }\n        .irs-line-mid {\n            left: 9%; width: 82%;\n        }\n        .irs-line-right {\n            right: 0; width: 11%;\n        }\n\n    .irs-bar {\n        position: absolute; display: block;\n        left: 0; width: 0;\n    }\n        .irs-bar-edge {\n            position: absolute; display: block;\n            top: 0; left: 0;\n        }\n\n    .irs-shadow {\n        position: absolute; display: none;\n        left: 0; width: 0;\n    }\n\n    .irs-slider {\n        position: absolute; display: block;\n        cursor: default;\n        z-index: 1;\n    }\n        .irs-slider.single {\n\n        }\n        .irs-slider.from {\n\n        }\n        .irs-slider.to {\n\n        }\n        .irs-slider.type_last {\n            z-index: 2;\n        }\n\n    .irs-min {\n        position: absolute; display: block;\n        left: 0;\n        cursor: default;\n    }\n    .irs-max {\n        position: absolute; display: block;\n        right: 0;\n        cursor: default;\n    }\n\n    .irs-from, .irs-to, .irs-single {\n        position: absolute; display: block;\n        top: 0; left: 0;\n        cursor: default;\n        white-space: nowrap;\n    }\n\n.irs-grid {\n    position: absolute; display: none;\n    bottom: 0; left: 0;\n    width: 100%; height: 20px;\n}\n.irs-with-grid .irs-grid {\n    display: block;\n}\n    .irs-grid-pol {\n        position: absolute;\n        top: 0; left: 0;\n        width: 1px; height: 8px;\n        background: #000;\n    }\n    .irs-grid-pol.small {\n        height: 4px;\n    }\n    .irs-grid-text {\n        position: absolute;\n        bottom: 0; left: 0;\n        white-space: nowrap;\n        text-align: center;\n        font-size: 9px; line-height: 9px;\n        padding: 0 3px;\n        color: #000;\n    }\n\n.irs-disable-mask {\n    position: absolute; display: block;\n    top: 0; left: -1%;\n    width: 102%; height: 100%;\n    cursor: default;\n    background: rgba(0,0,0,0.0);\n    z-index: 2;\n}\n.lt-ie9 .irs-disable-mask {\n    background: #000;\n    filter: alpha(opacity=0);\n    cursor: not-allowed;\n}\n\n.irs-disabled {\n    opacity: 0.4;\n}\n\n\n.irs-hidden-input {\n    position: absolute !important;\n    display: block !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 0 !important;\n    height: 0 !important;\n    font-size: 0 !important;\n    line-height: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    overflow: hidden;\n    outline: none !important;\n    z-index: -9999 !important;\n    background: none !important;\n    border-style: solid !important;\n    border-color: transparent !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.skinHTML5.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Ion.RangeSlider, Simple Skin\n// css version 2.0.3\n// © Denis Ineshin, 2014    https://github.com/IonDen\n// © guybowden, 2014        https://github.com/guybowden\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// Skin details */\n\n.irs {\n    height: 55px;\n}\n.irs-with-grid {\n    height: 75px;\n}\n.irs-line {\n    height: 10px; top: 33px;\n    background: #EEE;\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\n    border: 1px solid #CCC;\n    border-radius: 16px;\n    -moz-border-radius: 16px;\n}\n    .irs-line-left {\n        height: 8px;\n    }\n    .irs-line-mid {\n        height: 8px;\n    }\n    .irs-line-right {\n        height: 8px;\n    }\n\n.irs-bar {\n    height: 10px; top: 33px;\n    border-top: 1px solid #428bca;\n    border-bottom: 1px solid #428bca;\n    background: #428bca;\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n}\n    .irs-bar-edge {\n        height: 10px; top: 33px;\n        width: 14px;\n        border: 1px solid #428bca;\n        border-right: 0;\n        background: #428bca;\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n        border-radius: 16px 0 0 16px;\n        -moz-border-radius: 16px 0 0 16px;\n    }\n\n.irs-shadow {\n    height: 2px; top: 38px;\n    background: #000;\n    opacity: 0.3;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n}\n.lt-ie9 .irs-shadow {\n    filter: alpha(opacity=30);\n}\n\n.irs-slider {\n    top: 25px;\n    width: 27px; height: 27px;\n    border: 1px solid #AAA;\n    background: #DDD;\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\n    border-radius: 27px;\n    -moz-border-radius: 27px;\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\n    cursor: pointer;\n}\n\n.irs-slider.state_hover, .irs-slider:hover {\n    background: #FFF;\n}\n\n.irs-min, .irs-max {\n    color: #333;\n    font-size: 12px; line-height: 1.333;\n    text-shadow: none;\n    top: 0;\n    padding: 1px 5px;\n    background: rgba(0,0,0,0.1);\n    border-radius: 3px;\n    -moz-border-radius: 3px;\n}\n\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\n    background: #ccc;\n}\n\n.irs-from, .irs-to, .irs-single {\n    color: #fff;\n    font-size: 14px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 5px;\n    background: #428bca;\n    border-radius: 3px;\n    -moz-border-radius: 3px;\n}\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\n    background: #999;\n}\n\n.irs-grid {\n    height: 27px;\n}\n.irs-grid-pol {\n    opacity: 0.5;\n    background: #428bca;\n}\n.irs-grid-pol.small {\n    background: #999;\n}\n\n.irs-grid-text {\n    bottom: 5px;\n    color: #99a4ac;\n}\n\n.irs-disabled {\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sweetalert2/dist/sweetalert2.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-modal .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-buttonswrapper {\n    margin-top: 15px; }\n    .swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-modal .swal2-styled:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    transition: border-color .3s, box-shadow .3s; }\n    .swal2-modal .swal2-input.swal2-inputerror,\n    .swal2-modal .swal2-file.swal2-inputerror,\n    .swal2-modal .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-modal .swal2-input::-webkit-input-placeholder,\n    .swal2-modal .swal2-file::-webkit-input-placeholder,\n    .swal2-modal .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input:-ms-input-placeholder,\n    .swal2-modal .swal2-file:-ms-input-placeholder,\n    .swal2-modal .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input::-ms-input-placeholder,\n    .swal2-modal .swal2-file::-ms-input-placeholder,\n    .swal2-modal .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input::-webkit-input-placeholder,\n    .swal2-modal .swal2-file::-webkit-input-placeholder,\n    .swal2-modal .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input:-ms-input-placeholder,\n    .swal2-modal .swal2-file:-ms-input-placeholder,\n    .swal2-modal .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert .3s;\n          animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert .15s forwards;\n          animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  -webkit-animation: animate-success-tip .75s;\n          animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  -webkit-animation: animate-success-long .75s;\n          animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  -webkit-animation: animate-error-icon .5s;\n          animation: animate-error-icon .5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  -webkit-animation: animate-x-mark .5s;\n          animation: animate-x-mark .5s; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../ion-rangeslider/css/ion.rangeSlider.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--8-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--8-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../ion-rangeslider/css/ion.rangeSlider.skinHTML5.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.skinHTML5.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--8-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.skinHTML5.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--8-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.skinHTML5.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../assets/css/core.css");
__webpack_require__("../../../../../assets/css/sweetalert2.css");
__webpack_require__("../../../../ion-rangeslider/css/ion.rangeSlider.css");
module.exports = __webpack_require__("../../../../ion-rangeslider/css/ion.rangeSlider.skinHTML5.css");


/***/ })

},[0]);
//# sourceMappingURL=styles.bundle.js.map