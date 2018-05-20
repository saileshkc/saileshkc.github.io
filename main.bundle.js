webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\">\n  <div class=\"container ptb-50\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n        <img src=\"{{aboutPageDetail.image}}\" class=\"img-fluid\" />\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 ptb-80\">\n        <h1 class=\"heading-font-color heading-font-size heading-font-name\">{{aboutPageDetail.title}}</h1>\n        <div [innerHTML]=\"aboutPageDetail.body\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"primary-bg-color\">\n  <div class=\"container ptb-50\">\n    <h1 class=\"secondary-heading-color page-title-font-name page-title-font-size text-center\">At a glance</h1>\n    <div class=\"row\">\n      <div class=\"col-md-3 text-center at-glance-items\" *ngFor=\"let item of atGlanceItems\">\n        <div>\n          <i [ngClass]=\"item.icon\" class=\"fa fa-2x\"></i>\n          <h3 class=\"white-text mtb-10\"><strong>{{item.time}}</strong></h3>\n          <h5 class=\"secondary-heading-color\">{{item.subtitle}}</h5>\n        </div>\n      </div>\n    </div>\n    <a class=\"btn btn-amenities button-bg-color button-font-color button-border-color text-center\" href=\"location#amenties-map\">View Amenities Map</a>\n  </div>\n</div>\n<div class=\"body-foreground-color\">\n  <div class=\"container ptb-50\">\n    <div class=\"row\">\n      <div class=\"comm-living accent-bg-color\">\n        <h1 class=\"cultivated-heading white-text heading-font-name\">{{aboutPageDetail.secondary_title}}</h1>\n        <div class=\"col-md-12 white-text\" [innerHTML]=\"aboutPageDetail.secondary_body\"></div>\n        <img src=\"https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/welshfooter.png\" class=\"image-center mt-10\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n        <h1 class=\"heading-font-color heading-font-name heading-font-size text-center\"><strong>Register Your Interest</strong></h1>\n        <app-enquiry-header></app-enquiry-header>\n        <br /><br />\n        <app-enquiry-form enquiryFormId=\"generalEnquiryForm\"></app-enquiry-form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_model__ = __webpack_require__("../../../../../src/app/about/about.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(cmsApiService) {
        this.cmsApiService = cmsApiService;
        this.aboutPageDetail = new __WEBPACK_IMPORTED_MODULE_1__about_model__["a" /* AboutPageDetails */];
        this.atGlanceItems = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    AboutComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterItems(data);
        });
    };
    AboutComponent.prototype.filterItems = function (data) {
        var pageItem = data.find(function (item) { return (item.id === 'about'); });
        var glanceItems = data.filter(function (item) { return (item.parentId === 'about'); });
        this.createPageDetail(pageItem);
        this.createPageItems(glanceItems);
    };
    AboutComponent.prototype.createPageDetail = function (item) {
        this.aboutPageDetail = {
            title: item.properties.headline,
            body: item.properties.body,
            image: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.featured_image,
            secondary_title: item.properties.secondary_headline,
            secondary_body: item.properties.secondary_body,
            secondary_image: item.properties.secondary_image
        };
    };
    AboutComponent.prototype.createPageItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            var atGlanceItems = {
                icon: item.properties.icon,
                time: item.properties.time,
                subtitle: item.properties.subtitle
            };
            _this.atGlanceItems.push(atGlanceItems);
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageDetails; });
var AboutPageDetails = (function () {
    function AboutPageDetails() {
    }
    return AboutPageDetails;
}());

//# sourceMappingURL=about.model.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n  <app-header></app-header>\n  <div class=\"body-contents\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_service__ = __webpack_require__("../../../../../src/app/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, cmsApiService, themeControlService) {
        this.router = router;
        this.cmsApiService = cmsApiService;
        this.themeControlService = themeControlService;
        this.fetchData();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.fetchData = function () {
        var _this = this;
        if (localStorage.getItem('theme')) {
            var data = localStorage.getItem('theme');
            var theme = JSON.parse(data);
            this.themeControlService.createTheme(theme);
        }
        this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.themeControlService.filterItems(data);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__theme_service__["a" /* ThemeControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__theme_service__["a" /* ThemeControlService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runway_asset__ = __webpack_require__("../../../../@runway/asset/modules/asset.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__runway_estate__ = __webpack_require__("../../../../@runway/estate/modules/estate.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__runway_land__ = __webpack_require__("../../../../@runway/land/modules/land.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__runway_maps__ = __webpack_require__("../../../../@runway/maps/modules/maps.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__runway_r4masterplan__ = __webpack_require__("../../../../@runway/r4masterplan/modules/r4masterplan.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__runway_r6api__ = __webpack_require__("../../../../@runway/r6api/modules/r6api.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__runway_enquiry__ = __webpack_require__("../../../../@runway/enquiry/modules/enquiry.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__runway_home__ = __webpack_require__("../../../../@runway/home/modules/home.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_contact_details_service__ = __webpack_require__("../../../../../src/app/contact/contact-details-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_sharing_service__ = __webpack_require__("../../../../../src/app/data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__enquiry_form_enquiry_service__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__theme_service__ = __webpack_require__("../../../../../src/app/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tracking_service_tracking_service__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__header_footer_header_footer_module__ = __webpack_require__("../../../../../src/app/header-footer/header-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_page_home_page_module__ = __webpack_require__("../../../../../src/app/home-page/home-page.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__hnl_hnl_module__ = __webpack_require__("../../../../../src/app/hnl/hnl.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__landlist_landlist_module__ = __webpack_require__("../../../../../src/app/landlist/landlist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__location_location_module__ = __webpack_require__("../../../../../src/app/location/location.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__land_for_sale_land_for_sale_module__ = __webpack_require__("../../../../../src/app/land-for-sale/land-for-sale.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__map_direction_map_direction_module__ = __webpack_require__("../../../../../src/app/map-direction/map-direction.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__news_news_module__ = __webpack_require__("../../../../../src/app/news/news.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_33__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__runway_asset__["a" /* AssetModule */],
            __WEBPACK_IMPORTED_MODULE_7__runway_commonutils__["a" /* CommonUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_8__runway_estate__["a" /* EstateModule */],
            __WEBPACK_IMPORTED_MODULE_9__runway_handl__["a" /* HandlModule */],
            __WEBPACK_IMPORTED_MODULE_27__hnl_hnl_module__["a" /* HnlModule */],
            __WEBPACK_IMPORTED_MODULE_10__runway_land__["a" /* LandModule */],
            __WEBPACK_IMPORTED_MODULE_31__map_direction_map_direction_module__["a" /* MapDirectionModule */],
            __WEBPACK_IMPORTED_MODULE_11__runway_maps__["a" /* MapsModule */],
            __WEBPACK_IMPORTED_MODULE_12__runway_r4masterplan__["a" /* MasterplanModule */],
            __WEBPACK_IMPORTED_MODULE_32__news_news_module__["a" /* NewsModule */],
            __WEBPACK_IMPORTED_MODULE_13__runway_r6api__["a" /* R6ApiModule */],
            __WEBPACK_IMPORTED_MODULE_23__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_24__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_25__header_footer_header_footer_module__["a" /* HeaderFooterModule */],
            __WEBPACK_IMPORTED_MODULE_26__home_page_home_page_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_28__landlist_landlist_module__["a" /* LandListModule */],
            __WEBPACK_IMPORTED_MODULE_30__land_for_sale_land_for_sale_module__["a" /* LandForSaleModule */],
            __WEBPACK_IMPORTED_MODULE_29__location_location_module__["a" /* LocationModule */],
            __WEBPACK_IMPORTED_MODULE_34__app_routing__["a" /* appRouting */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_34__app_routing__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_16__cms_service_cms_service__["a" /* CmsApiService */],
            __WEBPACK_IMPORTED_MODULE_17__contact_contact_details_service__["a" /* ContactDetailsService */],
            __WEBPACK_IMPORTED_MODULE_18__data_sharing_service__["a" /* DataSharingService */],
            __WEBPACK_IMPORTED_MODULE_15__runway_home__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_21__theme_service__["a" /* ThemeControlService */],
            __WEBPACK_IMPORTED_MODULE_22__tracking_service_tracking_service__["a" /* TrackingService */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__runway_enquiry__["a" /* EnquiryService */], useClass: __WEBPACK_IMPORTED_MODULE_19__enquiry_form_enquiry_service__["a" /* EnquiryExtendedService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_9__runway_handl__["b" /* HandlParams */], useClass: __WEBPACK_IMPORTED_MODULE_20__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_10__runway_land__["b" /* LandParams */], useClass: __WEBPACK_IMPORTED_MODULE_20__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_12__runway_r4masterplan__["b" /* MasterplanParams */], useClass: __WEBPACK_IMPORTED_MODULE_20__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_7__runway_commonutils__["b" /* LoanCalculatorParams */], useClass: __WEBPACK_IMPORTED_MODULE_7__runway_commonutils__["b" /* LoanCalculatorParams */] },
            { provide: __WEBPACK_IMPORTED_MODULE_13__runway_r6api__["b" /* R6ApiParams */], useClass: __WEBPACK_IMPORTED_MODULE_20__environment_service__["a" /* EnvironmentService */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_33__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hnl_hnl_list_hnl_component__ = __webpack_require__("../../../../../src/app/hnl/hnl-list/hnl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hnl_hnl_master_details_hnl_details_housedetails_component__ = __webpack_require__("../../../../../src/app/hnl/hnl-master-details/hnl-details/housedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landlist_landlist_component__ = __webpack_require__("../../../../../src/app/landlist/landlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landlist_land_detail_extended_component__ = __webpack_require__("../../../../../src/app/landlist/land-detail-extended.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__land_for_sale_land_for_sale_component__ = __webpack_require__("../../../../../src/app/land-for-sale/land-for-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location_component__ = __webpack_require__("../../../../../src/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_news_detail_component__ = __webpack_require__("../../../../../src/app/news/news-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });












var appRoutes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'houseandland-list', component: __WEBPACK_IMPORTED_MODULE_4__hnl_hnl_list_hnl_component__["a" /* HnlComponent */] },
    { path: 'houseandland-detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__hnl_hnl_master_details_hnl_details_housedetails_component__["a" /* HouseDetailsComponent */] },
    { path: 'land-list', component: __WEBPACK_IMPORTED_MODULE_6__landlist_landlist_component__["a" /* LandlistExtendedComponent */] },
    { path: 'land-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__landlist_land_detail_extended_component__["a" /* LandDetailExtendedComponent */] },
    { path: 'land-for-sale', component: __WEBPACK_IMPORTED_MODULE_8__land_for_sale_land_for_sale_component__["a" /* LandForSaleComponent */] },
    { path: 'location', component: __WEBPACK_IMPORTED_MODULE_9__location_location_component__["a" /* LocationComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_11__news_news_detail_component__["a" /* NewsDetailComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_10__news_news_component__["a" /* NewsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */] }
];
var appRoutingProviders = [];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/cms-service/cms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CmsApiService = (function () {
    function CmsApiService(http) {
        this.http = http;
    }
    CmsApiService.prototype.getAllContent = function () {
        if (!this.data) {
            var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].cmsApiUrl + '?token=' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].cmsToken;
            var headers = this.buildRequestHeader();
            this.data = this.http.get(url, { headers: headers })
                .map(function (response) { return response.json(); })
                .publishReplay(1)
                .refCount();
        }
        return this.data;
    };
    CmsApiService.prototype.buildRequestHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({
            'Content-Type': 'application/json',
            'Cache-control': 'no-cache, private, no-store, must-revalidate, max-age=0',
            'Expires': '0',
            'Pragma': 'no-cache'
        });
        return headers;
    };
    CmsApiService.prototype.handleErrorObservable = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return CmsApiService;
}());
CmsApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CmsApiService);

var _a;
//# sourceMappingURL=cms.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-details-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailsService = (function () {
    function ContactDetailsService(cmsApiService) {
        this.cmsApiService = cmsApiService;
        this.contactPageDetails = new __WEBPACK_IMPORTED_MODULE_2__contact_model__["a" /* ContactPageDetails */];
        this.fetchData();
    }
    ContactDetailsService.prototype.fetchData = function () {
        return this.cmsApiService.getAllContent();
    };
    ContactDetailsService.prototype.filterItems = function (data) {
        var items = data.find(function (item) { return (item.id === 'contact'); });
        this.createPageDetail(items);
    };
    ContactDetailsService.prototype.createPageDetail = function (item) {
        var contactPageDetails = {
            headline: item.properties.headline,
            phone: item.properties.phone,
            hours: item.properties.hours,
            address: item.properties.address,
            body: item.properties.body,
            latitude: item.properties.sales_office_latitude,
            longitude: item.properties.sales_office_longitude,
            twitterUrl: item.properties.twitter_url,
            facebookUrl: item.properties.facebook_url,
            instagramUrl: item.properties.instagram_url
        };
        localStorage.setItem('contact', JSON.stringify(contactPageDetails));
        return contactPageDetails;
    };
    return ContactDetailsService;
}());
ContactDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object])
], ContactDetailsService);

var _a;
//# sourceMappingURL=contact-details-service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\">\n  <div class=\"container\">\n    <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center m-35\">Get in touch</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 image-center\">\n        <div class=\"text-center\" [innerHTML]=\"contactPageDetails.body\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container ptb-30\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-mobile\">\n        <h1 class=\"heading-font-color heading-font-name heading-font-size\">Sales office</h1>\n        <h4 class=\"toll-no\"><strong>{{contactPageDetails.phone}}</strong></h4>\n        <h6>{{contactPageDetails.hours}}<br> {{contactPageDetails.address}}</h6>\n        <a *ngIf=\"mapDirectionUrl\" class=\"btn btn-direction button-bg-color button-font-color button-border-color\" href=\"{{mapDirectionUrl}}\" target=\"_blank\">Get Directions</a>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-md-6\">\n        <h2 class=\"heading-font-color heading-font-name heading-font-size\">Register Your Interest</h2>\n        <app-enquiry-form enquiryFormId=\"generalEnquiryForm\"></app-enquiry-form>\n      </div>\n    </div>\n  </div>\n  <div class=\"map-section\">\n    <div id=\"googleMap\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_details_service__ = __webpack_require__("../../../../../src/app/contact/contact-details-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_direction_map_loader_service__ = __webpack_require__("../../../../../src/app/map-direction/map-loader.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(contactDetailsService) {
        var _this = this;
        this.contactDetailsService = contactDetailsService;
        this.contactPageDetails = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactPageDetails */];
        __WEBPACK_IMPORTED_MODULE_3__map_direction_map_loader_service__["a" /* GoogleMapsLoader */].load()
            .then(function (res) {
            _this.fetchData();
        });
    }
    ContactComponent.prototype.fetchData = function () {
        var _this = this;
        if (localStorage.getItem('contact')) {
            this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        }
        this.contactDetailsService.fetchData()
            .subscribe(function (data) {
            _this.contactDetailsService.filterItems(data);
            _this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
            _this.loadMap();
        });
    };
    ContactComponent.prototype.loadMap = function () {
        // tslint:disable-next-line:max-line-length
        this.mapDirectionUrl = 'http://maps.google.com/?daddr=' + this.contactPageDetails.latitude + ',' + this.contactPageDetails.longitude + '&directionsmode=driving';
        var center = new google.maps.LatLng(this.contactPageDetails.latitude, this.contactPageDetails.longitude);
        var mapProp = {
            center: center,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scaleControl: true,
            zoomControl: true,
        };
        this.map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
        var marker = new google.maps.Marker({
            position: center,
            map: this.map,
            icon: {
                url: 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/fairmile/fairmile_map_icon%402x.png',
                scaledSize: new google.maps.Size(80, 60)
            }
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageDetails; });
var ContactPageDetails = (function () {
    function ContactPageDetails() {
    }
    return ContactPageDetails;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_header_component__ = __webpack_require__("../../../../../src/app/contact/enquiry-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sales_details_component__ = __webpack_require__("../../../../../src/app/contact/sales-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_4__enquiry_header_component__["a" /* EnquiryHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__sales_details_component__["a" /* SalesDetailsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_4__enquiry_header_component__["a" /* EnquiryHeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__sales_details_component__["a" /* SalesDetailsComponent */]]
    })
], ContactModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/enquiry-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" [innerHTML]=\"contactPageDetails.body\"></div>"

/***/ }),

/***/ "../../../../../src/app/contact/enquiry-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_details_service__ = __webpack_require__("../../../../../src/app/contact/contact-details-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnquiryHeaderComponent = (function () {
    function EnquiryHeaderComponent(contactDetailsService) {
        this.contactDetailsService = contactDetailsService;
        this.contactPageDetails = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactPageDetails */];
        this.fetchData();
    }
    EnquiryHeaderComponent.prototype.fetchData = function () {
        var _this = this;
        if (localStorage.getItem('contact')) {
            this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        }
        this.contactDetailsService.fetchData()
            .subscribe(function (data) {
            _this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        });
    };
    return EnquiryHeaderComponent;
}());
EnquiryHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enquiry-header',
        template: __webpack_require__("../../../../../src/app/contact/enquiry-header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */]) === "function" && _a || Object])
], EnquiryHeaderComponent);

var _a;
//# sourceMappingURL=enquiry-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/sales-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">For more information, call our Sales Centre on</h6>\n<h3 class=\"text-center\"><strong>{{contactPageDetails.phone}}</strong></h3><br />\n<p class=\"text-center\"><span>{{contactPageDetails.address}}</span><br><span>{{contactPageDetails.hours}}</span></p>"

/***/ }),

/***/ "../../../../../src/app/contact/sales-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_details_service__ = __webpack_require__("../../../../../src/app/contact/contact-details-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesDetailsComponent = (function () {
    function SalesDetailsComponent(contactDetailsService) {
        this.contactDetailsService = contactDetailsService;
        this.contactPageDetails = new __WEBPACK_IMPORTED_MODULE_1__contact_model__["a" /* ContactPageDetails */];
        this.fetchData();
    }
    SalesDetailsComponent.prototype.fetchData = function () {
        var _this = this;
        if (localStorage.getItem('contact')) {
            this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        }
        this.contactDetailsService.fetchData()
            .subscribe(function (data) {
            _this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        });
    };
    return SalesDetailsComponent;
}());
SalesDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-details',
        template: __webpack_require__("../../../../../src/app/contact/sales-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_details_service__["a" /* ContactDetailsService */]) === "function" && _a || Object])
], SalesDetailsComponent);

var _a;
//# sourceMappingURL=sales-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSharingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataSharingService = (function () {
    function DataSharingService() {
        this.handlSummaries = [];
    }
    DataSharingService.prototype.getHandlSummaries = function () {
        return this.handlSummaries;
    };
    DataSharingService.prototype.setHandlSummaries = function (handlSummaries) {
        this.handlSummaries = handlSummaries;
    };
    return DataSharingService;
}());
DataSharingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataSharingService);

//# sourceMappingURL=data-sharing.service.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry-form-params.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enquiryFormParams; });
var enquiryFormParams = [
    {
        formId: 'generalEnquiryForm',
        selectProfileQuestions: [
            {
                questionName: 'How did you hear about us?',
                questionId: '0V1A5T2P636V3F3O4C400E5K9U7L',
                answerList: []
            }
        ],
        hiddenFormParameters: {
            'GroupID': '0U1U5X2X6C60373L286T8M360K7I',
            'LocationID': '0F1W5U276X62383V6B3S0Q6I7Z0Q',
            'TemplateID': '',
            'NotificationTemplateID': '',
            'EmailOptOut': 'N',
            'NewContactStatusID': '2f3c4880-dcd5-102c-8f29-644220d7d8b3',
            'Source': 'Fairmile Website',
            '-alwaysnotify': 'true',
            'sendNotificationTo': 'SALESREP'
        }
    }
];
//# sourceMappingURL=enquiry-form-params.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form autocomplete=\"false\" id=\"register-form\" [formGroup]=\"enquiryForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group col-md-12\">\n      <input name=\"FirstName\" autocomplete='given-name' formControlName=\"FirstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name*\" id=\"fname\"\n        required>\n      <app-control-messages [control]=\"enquiryForm.controls.FirstName\" class=\"err-alert\"></app-control-messages>\n    </div>\n    <div class=\"form-group col-md-12\">\n      <input name=\"LastName\" autocomplete='family-name' formControlName=\"LastName\" type=\"text\" class=\"form-control\" placeholder=\"Last Name*\" id=\"lname\" required>\n      <app-control-messages [control]=\"enquiryForm.controls.LastName\" class=\"err-alert\"></app-control-messages>\n    </div>\n    <div class=\"form-group col-md-12\">\n      <input name=\"Email\" autocomplete='email' formControlName=\"Email\" type=\"email\" class=\"form-control\" placeholder=\"Email Address*\" id=\"email\" required>\n      <app-control-messages [control]=\"enquiryForm.controls.Email\" class=\"err-alert\"></app-control-messages>\n    </div>\n    <div class=\"form-group col-md-12\">\n      <input name=\"Phone\" autocomplete='phone' formControlName=\"Phone\" type=\"number\" class=\"form-control\" placeholder=\"Phone\" id=\"mobile\" required>\n    </div>\n    <div class=\"form-group col-md-12\">\n      <input name=\"Postcode\" type=\"number\" formControlName=\"Postcode\" autocomplete='postal-code' class=\"form-control\" placeholder=\"Postcode\">\n    </div>\n    <div class=\"form-group col-md-12\">\n      <input name=\"Comment\" type=\"text\" formControlName=\"Comment\" class=\"form-control\" placeholder=\"Message\">\n    </div>\n    <div class=\"form-group col-md-12\" *ngFor=\"let selectProfileQuestion of selectProfileQuestions\">\n      <input name=\"\" type=\"text\" formControlName=\"{{selectProfileQuestion.questionId}}\" class=\"form-control\" placeholder=\"{{selectProfileQuestion.questionName}}\">\n    </div>\n    <br />\n    <button [disabled]=\"disabledButton\" type=\"submit\" class=\"btn submit-button button-bg-color button-font-color button-border-color\" (click)=\"submitTrackingEvent()\">{{ disabledButton === true ? 'Sending...' : 'Submit' }}</button>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_enquiry__ = __webpack_require__("../../../../@runway/enquiry/modules/enquiry.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryFormComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EnquiryFormComponent = (function (_super) {
    __extends(EnquiryFormComponent, _super);
    function EnquiryFormComponent(fbBuilderExtended, enquiryServiceExtended, routerExtended, trackingService) {
        var _this = _super.call(this, fbBuilderExtended, enquiryServiceExtended, routerExtended) || this;
        _this.fbBuilderExtended = fbBuilderExtended;
        _this.enquiryServiceExtended = enquiryServiceExtended;
        _this.routerExtended = routerExtended;
        _this.trackingService = trackingService;
        _this.disabledButton = false;
        return _this;
    }
    EnquiryFormComponent.prototype.ngOnInit = function () {
        this.populateForm();
    };
    EnquiryFormComponent.prototype.populateForm = function () {
        this.enquiryForm = this.fbBuilderExtended.group({
            FirstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            Email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            Postcode: [''],
            Comment: ['']
        });
        this.initializeProfileQuestions();
    };
    EnquiryFormComponent.prototype.onSubmit = function () {
        var reference = this.enquiryForm.value.FirstName + ' ' + this.enquiryForm.value.LastName;
        this.submitTrackingEvent(reference);
        console.log(this.enquiryForm);
        if (this.enquiryForm.valid) {
            this.disabledButton = true;
            _super.prototype.onSubmit.call(this, __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].globalFormUrl, null, this.message);
        }
    };
    EnquiryFormComponent.prototype.submitTrackingEvent = function (reference) {
        var event = 'Submitted Contact Form';
        this.trackingService.eventTracking(event, reference, null, null);
    };
    EnquiryFormComponent.prototype.message = function (isSuccess) {
        console.log(this.disabledButton.valueOf);
        if (isSuccess === true) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Thank You', 'Your message has been sent', 'success');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Something went wrong',
                showConfirmButton: false
            }).catch(__WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.noop);
        }
    };
    return EnquiryFormComponent;
}(__WEBPACK_IMPORTED_MODULE_4__runway_enquiry__["c" /* EnquiryComponent */]));
EnquiryFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enquiry-form',
        template: __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__runway_enquiry__["a" /* EnquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_enquiry__["a" /* EnquiryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */]) === "function" && _d || Object])
], EnquiryFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=enquiry-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_enquiry__ = __webpack_require__("../../../../@runway/enquiry/modules/enquiry.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquiry_form_component__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryFormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EnquiryFormModule = (function () {
    function EnquiryFormModule() {
    }
    return EnquiryFormModule;
}());
EnquiryFormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__runway_enquiry__["b" /* FormValidationModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__enquiry_form_component__["a" /* EnquiryFormComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__enquiry_form_component__["a" /* EnquiryFormComponent */]],
    })
], EnquiryFormModule);

//# sourceMappingURL=enquiry-form.module.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry-form/enquiry.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runway_enquiry__ = __webpack_require__("../../../../@runway/enquiry/modules/enquiry.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enquiry_form_params__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form-params.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryExtendedService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EnquiryExtendedService = (function (_super) {
    __extends(EnquiryExtendedService, _super);
    function EnquiryExtendedService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnquiryExtendedService.prototype.getEnquiryFormParams = function () {
        return __WEBPACK_IMPORTED_MODULE_2__enquiry_form_params__["a" /* enquiryFormParams */];
    };
    return EnquiryExtendedService;
}(__WEBPACK_IMPORTED_MODULE_1__runway_enquiry__["a" /* EnquiryService */]));
EnquiryExtendedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EnquiryExtendedService);

//# sourceMappingURL=enquiry.service.js.map

/***/ }),

/***/ "../../../../../src/app/environment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EnvironmentService = (function () {
    function EnvironmentService() {
    }
    EnvironmentService.prototype.getR6ApiUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].r6apiServiceUrl;
    };
    EnvironmentService.prototype.getR6SecurityToken = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].r6SecurityToken;
    };
    EnvironmentService.prototype.getR6AuthApiKey = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].r6AuthApiKey;
    };
    EnvironmentService.prototype.getMasterplanUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].masterplanUrl;
    };
    EnvironmentService.prototype.getPollingIntervalForApi = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].pollingIntervalForApi;
    };
    EnvironmentService.prototype.getPageSizeForHomeList = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].pageSizeForHomeList;
    };
    EnvironmentService.prototype.getPageSizeForHandlList = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].pageSizeForHandlList;
    };
    EnvironmentService.prototype.getPageSizeForLandList = function () {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].pageSizeForLandList;
    };
    return EnvironmentService;
}());
EnvironmentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EnvironmentService);

//# sourceMappingURL=environment.service.js.map

/***/ }),

/***/ "../../../../../src/app/header-footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"primary-bg-color white-text\">\n  <div class=\"container ptb-20 mlr-48\">\n    <div class=\"row\">\n      <div class=\"col-md-4 text-center social-icons pb-20\">\n        <a *ngIf=\"contactPageDetails.facebookUrl\" target=\"_blank\" href=\"{{contactPageDetails.facebookUrl}}\"><i class=\"fa fa-facebook primary-font-color\"></i></a>\n        <a *ngIf=\"contactPageDetails.twitterUrl\" target=\"_blank\" href=\"{{contactPageDetails.twitterUrl}}\"><i class=\"fa fa-twitter primary-font-color\"></i></a>\n        <a *ngIf=\"contactPageDetails.instagramUrl\" target=\"_blank\" href=\"{{contactPageDetails.instagramUrl}}\"><i class=\"fa fa-instagram primary-font-color\"></i></a>\n      </div>\n      <div class=\"col-md-4 text-center pb-20\">\n        <img src=\"https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/welshfooter.png\" />\n      </div>\n      <div class=\"col-md-4 text-center pb-20 rpm-logo\">\n        <img src=\"https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/fairmile/petal.png\" />\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact_model__ = __webpack_require__("../../../../../src/app/contact/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_details_service__ = __webpack_require__("../../../../../src/app/contact/contact-details-service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(contactDetailsService) {
        this.contactDetailsService = contactDetailsService;
        this.contactPageDetails = new __WEBPACK_IMPORTED_MODULE_1__contact_contact_model__["a" /* ContactPageDetails */];
        this.fetchData();
    }
    FooterComponent.prototype.fetchData = function () {
        var _this = this;
        if (localStorage.getItem('contact')) {
            this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        }
        this.contactDetailsService.fetchData()
            .subscribe(function (data) {
            _this.contactDetailsService.filterItems(data);
            _this.contactPageDetails = JSON.parse(localStorage.getItem('contact'));
        });
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/header-footer/footer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_contact_details_service__["a" /* ContactDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__contact_contact_details_service__["a" /* ContactDetailsService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-footer/header-footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/header-footer/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/header-footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderFooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderFooterModule = (function () {
    function HeaderFooterModule() {
    }
    return HeaderFooterModule;
}());
HeaderFooterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], HeaderFooterModule);

//# sourceMappingURL=header-footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/header-footer/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrap-header primary-bg-color\">\n  <div class=\"wrap-header\">\n    <div class=\"wrap\">\n      <div class=\"logo\">\n        <a href=\"homepage\">\n        <img src=\"https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/fairmile/logo.png\" alt=\"logo\">\n      </a>\n      </div>\n      <div class=\"custom-toggle\">\n        <a (click)=\"toggleClick()\"><i class=\"fa fa-bars fa-2x\"></i></a>\n      </div>\n    </div>\n    <div>\n      <nav class=\"navbar navbar-expand-md navbar-dark\">\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n          <ul class=\"navbar-nav secondary-border-color\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"land-for-sale\" [ngClass]=\"{'accent-active-link': currentPage === 'land-for-sale'}\">Land For Sale</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"houseandland-list\" [ngClass]=\"{'accent-active-link': currentPage === 'houseandland-list'}\">House and Land</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"about\" [ngClass]=\"{'accent-active-link': currentPage === 'about'}\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"location\" [ngClass]=\"{'accent-active-link': currentPage === 'location'}\">Location</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"news\" [ngClass]=\"{'accent-active-link': currentPage === 'news'}\">News</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link accent-hover-menu\" href=\"contact\" [ngClass]=\"{'accent-active-link': currentPage === 'contact'}\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n  <div id=\"register-now\">\n    <a (click)=\"scrollToView('register-form')\"><button class=\"btn btn-interest-header button-font-color accent-bg-color accent-border-color white-text\">Register your interest</button></a>\n  </div>\n</div>\n\n<div class=\"list-group custom-side-menu primary-bg-color\" id=\"sidemenu\">\n  <div class=\"side-bar-overlay white-opacity-wrapper\">\n    <a href=\"homepage\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'homepage'}\">Home</a>\n    <a href=\"land-for-sale\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'land-for-sale'}\">Land For Sale</a>\n    <a href=\"houseandland-list\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'houseandland-list'}\">House and Land</a>\n    <a href=\"about\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'about'}\">About</a>\n    <a href=\"location\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'location'}\">Location</a>\n    <a href=\"news\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'news'}\">News</a>\n    <a href=\"contact\" class=\"list-group-item list-group-item-action\" [ngClass]=\"{'accent-active-bg': currentPage === 'contact'}\">Contact</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-footer/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracking_service_tracking_service__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, trackingService) {
        this.router = router;
        this.trackingService = trackingService;
        this.isSidebarOpen = false;
        this.currentPage = 'homepage';
        this.isPage = false;
        this.defaultMessage = 'Visit Page';
        this.trackingDetails = [];
    }
    HeaderComponent.prototype.beforeunloadHandler = function (event) {
        this.checkWindowUnload();
    };
    HeaderComponent.prototype.onClick = function (event, targetElement) {
        this.isPage = true;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSession();
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.currentPage = (_this.router.url).split('/')[1];
            }
        });
    };
    HeaderComponent.prototype.checkWindowUnload = function () {
        if (!this.isPage) {
            this.trackingService.stopTracking();
        }
    };
    HeaderComponent.prototype.checkSession = function () {
        if (sessionStorage.getItem('trackerid') === null) {
            this.trackingService.initiateTracking();
        }
        else {
            this.trackingService.eventTracking();
        }
    };
    HeaderComponent.prototype.toggleClick = function () {
        if (this.isSidebarOpen === true) {
            document.getElementById('sidemenu').classList.remove('active');
            this.isSidebarOpen = false;
            return;
        }
        document.getElementById('sidemenu').classList.add('active');
        this.isSidebarOpen = true;
    };
    HeaderComponent.prototype.scrollToView = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            this.router.navigate(['contact']);
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "beforeunloadHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onClick", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header-footer/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tracking_service_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tracking_service_tracking_service__["a" /* TrackingService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/handl-filter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandLFilter; });
var HandLFilter = (function () {
    function HandLFilter() {
    }
    return HandLFilter;
}());

//# sourceMappingURL=handl-filter.model.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-list/hnl.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\">\n  <div class=\"container\">\n    <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center m-35\">House & Land</h1>\n    <nav class=\"navbar navbar-expand-md navbar-dark list-header primary-bg-color\">\n      <div class=\"navbar-left\">\n        <span class=\"landlist-title white-text\">House & Land</span>\n      </div>\n      <div class=\"collapse navbar-collapse filter-navbar\" id=\"myNavbar2\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-sm dropdown-toggle\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n               Builder\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n                <a class=\"dropdown-item\" *ngFor=\"let builder of buildersList\" (click)=\"searchBuilder(builder)\">{{builder}}</a>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Price\n              </button>\n              <div class=\"dropdown-menu slider-menu\">\n                <ion-range-slider #sliderElement name=\"priceRange\" type=\"double\" [min]=\"minPriceRange\" [max]=\"maxPriceRange\" from_shadow=\"true\" to_shadow=\"true\"\n                  prefix=\"$\" postfix=\"\" decorate_both=\"false\" (onChange)=\"onPriceChange($event)\"></ion-range-slider>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Frontage\n              </button>\n              <div class=\"dropdown-menu slider-menu\">\n                <ion-range-slider #sliderElement name=\"frontageRange\" type=\"double\" [min]=\"minFrontage\" [max]=\"maxFrontage\" from_shadow=\"true\" to_shadow=\"true\"\n                  prefix=\"\" postfix=\"\" decorate_both=\"false\" (onChange)=\"onFrontageChange($event)\"></ion-range-slider>\n              </div>\n            </div>\n          </li>\n          <li class=\"nav-item\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Bedroom\n              </button>\n              <div class=\"dropdown-menu checkbox-menu\">\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [(ngModel)]=\"bedroom1check\" name=\"noOfBedRooms1\" (ngModelChange)=\"searchBedrooms(1)\">\n                  <label class=\"form-check-label\" for=\"inlineCheckbox1\">1</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [(ngModel)]=\"bedroom2check\" name=\"noOfBedRooms2\" (ngModelChange)=\"searchBedrooms(2)\">\n                  <label class=\"form-check-label\" for=\"inlineCheckbox2\">2</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [(ngModel)]=\"bedroom3check\" name=\"noOfBedRooms3\" (ngModelChange)=\"searchBedrooms(3)\">\n                  <label class=\"form-check-label\" for=\"inlineCheckbox2\">3</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [(ngModel)]=\"bedroom4check\" name=\"noOfBedRooms4\" (ngModelChange)=\"searchBedrooms(4)\">\n                  <label class=\"form-check-label\" for=\"inlineCheckbox2\">4</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [(ngModel)]=\"bedroom5check\" name=\"noOfBedRooms5\" (ngModelChange)=\"searchBedrooms(5)\">\n                  <label class=\"form-check-label\" for=\"inlineCheckbox2\">5</label>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"gap\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"not-found-container\" *ngIf=\"pageLoaded\">\n        <div class=\"not-found-container\" *ngIf=\"searchFilteredList.length == 0\">\n          <i class=\"fa fa-search\"></i>\n          <h3>Sorry</h3>\n          <p>No Packages were found</p>\n        </div>\n      </div>\n      <div class=\"not-found-container\" *ngIf=\"!pageLoaded\">\n        <i class=\"fa fa-spinner\"></i>\n        <h3>Loading...</h3>\n        <p>Please wait while we fetch data</p>\n      </div>\n      <ng-container *ngFor=\"let handl of searchFilteredList| paginationFilterPipe: displayCounter; let i = index\">\n        <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 handl-cursor\" (click)=\"onHandlClick(handl)\">\n          <div class=\"design-back\">\n            <div class=\"hlimage\">\n              <img src=\"{{handl.imagepath}}\" class=\"handl-image\">\n            </div>\n            <div class=\"hnl-box-height\">\n              <div class=\"row\">\n                <div class=\"col-xs-5\">\n                  <img src=\"{{handl.builderlogourl}}\" class=\"builder-logo box-image-radius\">\n                </div>\n                <div class=\"col-xs-7 hnlalign pull-right\">\n                  <span class=\"bedroom-text\"> {{handl.noofbedrooms}}</span>\n                  <i class=\"fa fa-bed\"></i>\n                  <span class=\"bathroom-text\"> {{handl.noofbathrooms}} </span>\n                  <i class=\"fa fa-bath\"></i>\n                  <span class=\"parking-text\"> {{handl.noofcarparks}} </span>\n                  <i class=\"fa fa-car\"></i>\n                </div>\n              </div>\n              <div class=\"row hnl-card-pad\">\n                <div class=\"col-sm-6\">\n                  <h5>\n                    <strong>{{handl.designproductname}} {{handl.planproductname}}</strong>\n                  </h5>\n                  <h6 class=\"rboldtext\">Lot {{handl.lotproductname}}, Stage {{handl.stageproductname}}</h6>\n                  <h5>\n                    <strong>From ${{handl.productprice | number:'1.0-0'}}*</strong>\n                  </h5>\n                </div>\n                <div class=\"col-sm-6\">\n                  <h6 class=\"rboldtext-home\">Home Area: {{handl.homesize}}m\n                    <sup>2</sup>\n                  </h6>\n                  <h6 class=\"rboldtext-home\">Frontage: {{handl.lotwidth}}m</h6>\n                  <h6 class=\"rboldtext-home\">Lot Area: {{handl.lotsize}}m\n                    <sup>2</sup>\n                  </h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <button *ngIf=\"showViewMore()\" class=\"btn more-button image-center button-bg-color button-font-color button-border-color\" (click)=\"onViewMore()\">View More</button>\n    <br />\n    <br />\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n        <h1 class=\"heading-font-color heading-font-name heading-font-size text-center\">\n          <strong>Register Your Interest</strong>\n        </h1>\n        <app-enquiry-header></app-enquiry-header>\n        <br />\n        <br />\n        <app-enquiry-form enquiryFormId=\"generalEnquiryForm\"></app-enquiry-form>\n      </div>\n    </div>\n    <br />\n    <br />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-list/hnl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_estate__ = __webpack_require__("../../../../@runway/estate/modules/estate.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runway_home__ = __webpack_require__("../../../../@runway/home/modules/home.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_sharing_service__ = __webpack_require__("../../../../../src/app/data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handl_filter_model__ = __webpack_require__("../../../../../src/app/hnl/handl-filter.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_handl_pipe__ = __webpack_require__("../../../../../src/app/hnl/search-handl.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HnlComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HnlComponent = (function (_super) {
    __extends(HnlComponent, _super);
    function HnlComponent(handlService, homeService, estateService, handParams, router, dataSharingService, searchHouseAndLand) {
        var _this = _super.call(this, handlService, handParams, router) || this;
        _this.handlService = handlService;
        _this.homeService = homeService;
        _this.estateService = estateService;
        _this.handParams = handParams;
        _this.router = router;
        _this.dataSharingService = dataSharingService;
        _this.searchHouseAndLand = searchHouseAndLand;
        _this.estateCpId = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].estateCpId;
        _this.buildersList = [];
        _this.bedroom1check = false;
        _this.bedroom2check = false;
        _this.bedroom3check = false;
        _this.bedroom4check = false;
        _this.bedroom5check = false;
        _this.minPriceRange = 0;
        _this.maxPriceRange = 1000000;
        _this.minFrontage = 0;
        _this.maxFrontage = 30;
        _this.pageLoaded = false;
        _this.searchHandlFilter = new __WEBPACK_IMPORTED_MODULE_7__handl_filter_model__["a" /* HandLFilter */]();
        _this.searchHandlFilter.noofbedrooms = 0;
        _this.searchHandlFilter.bedroomsArray = [];
        _this.searchFilteredList = [];
        return _this;
    }
    HnlComponent.prototype.ngOnInit = function () {
        this.pageLoaded = false;
        this.listHandLSummary();
    };
    HnlComponent.prototype.onPriceChange = function (event) {
        this.searchHandlFilter.priceFrom = event.from;
        this.searchHandlFilter.priceTo = event.to;
        this.searchFilteredList = this.searchHouseAndLand.transform(this.dataSharingService.getHandlSummaries(), this.searchHandlFilter);
    };
    HnlComponent.prototype.onFrontageChange = function (event) {
        this.searchHandlFilter.frontageFrom = event.from;
        this.searchHandlFilter.frontageTo = event.to;
        this.searchFilteredList = this.searchHouseAndLand.transform(this.dataSharingService.getHandlSummaries(), this.searchHandlFilter);
    };
    HnlComponent.prototype.listHandLSummary = function () {
        var _this = this;
        return this.handlService.listPublishedHandlSummaryByEstate(this.estateCpId)
            .subscribe(function (handlList) {
            _this.dataSharingService.setHandlSummaries(handlList);
            _this.setBuildersList(handlList);
            _this.setMinAndMaxPriceValues();
            _this.pageLoaded = true;
        });
    };
    HnlComponent.prototype.setBuildersList = function (list) {
        var _this = this;
        list.forEach(function (el) {
            if (!_this.buildersList.includes(el.buildername)) {
                _this.buildersList.push(el.buildername);
            }
        });
    };
    HnlComponent.prototype.searchBuilder = function (builder) {
        this.searchHandlFilter.builder = builder;
        this.searchFilteredList = this.searchHouseAndLand.transform(this.dataSharingService.getHandlSummaries(), this.searchHandlFilter);
    };
    HnlComponent.prototype.onHandlClick = function (selectedPackage) {
        var link = ['/houseandland-detail', selectedPackage.cpidstring];
        this.router.navigate(link);
    };
    HnlComponent.prototype.searchBedrooms = function (bedroom) {
        this.searchHandlFilter.bedroomsArray = [];
        if (this.bedroom1check) {
            this.searchHandlFilter.bedroomsArray.push(1);
        }
        if (this.bedroom2check) {
            this.searchHandlFilter.bedroomsArray.push(2);
        }
        if (this.bedroom3check) {
            this.searchHandlFilter.bedroomsArray.push(3);
        }
        if (this.bedroom4check) {
            this.searchHandlFilter.bedroomsArray.push(4);
        }
        if (this.bedroom5check) {
            this.searchHandlFilter.bedroomsArray.push(5);
        }
        this.searchFilteredList = this.searchHouseAndLand.transform(this.dataSharingService.getHandlSummaries(), this.searchHandlFilter);
    };
    HnlComponent.prototype.setMinAndMaxPriceValues = function () {
        var minPrice = 0;
        var maxPrice = 0;
        var minFrontage = 0;
        var maxFrontage = 0;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.dataSharingService.getHandlSummaries())) {
            this.dataSharingService.getHandlSummaries().forEach(function (handl) {
                if ((minPrice === 0 || handl.productprice < minPrice) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(handl.productprice)) {
                    minPrice = handl.productprice;
                }
                if (maxPrice === 0 || handl.productprice > maxPrice) {
                    maxPrice = handl.productprice;
                }
                if ((minFrontage === 0 || handl.lotwidth < minFrontage) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(handl.lotwidth)) {
                    minFrontage = handl.lotwidth;
                }
                if ((maxFrontage === 0 || handl.lotwidth > maxFrontage) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(handl.lotwidth)) {
                    maxFrontage = handl.lotwidth;
                }
            });
        }
        if (minPrice !== 0) {
            minPrice = (Math.round(minPrice / 10000) - 1) * 10000;
        }
        maxPrice = Math.floor(Math.round(maxPrice / 10000) + 1) * 10000;
        this.minPriceRange = minPrice;
        this.maxPriceRange = maxPrice;
        this.minFrontage = minFrontage;
        this.maxFrontage = maxFrontage;
        this.searchHandlFilter.priceFrom = minPrice;
        this.searchHandlFilter.priceTo = maxPrice;
        this.searchHandlFilter.frontageFrom = minFrontage;
        this.searchHandlFilter.frontageTo = maxFrontage;
        this.searchFilteredList = this.searchHouseAndLand.transform(this.dataSharingService.getHandlSummaries(), this.searchHandlFilter);
    };
    return HnlComponent;
}(__WEBPACK_IMPORTED_MODULE_4__runway_handl__["e" /* HandlListComponent */]));
HnlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hnl',
        template: __webpack_require__("../../../../../src/app/hnl/hnl-list/hnl.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__runway_handl__["c" /* HandlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_handl__["c" /* HandlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__runway_home__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__runway_home__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__runway_estate__["b" /* EstateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__runway_estate__["b" /* EstateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__runway_handl__["b" /* HandlParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_handl__["b" /* HandlParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__data_sharing_service__["a" /* DataSharingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__data_sharing_service__["a" /* DataSharingService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__search_handl_pipe__["a" /* SearchHandlPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__search_handl_pipe__["a" /* SearchHandlPipe */]) === "function" && _g || Object])
], HnlComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=hnl.component.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-master-details/hnl-details/housedetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center m-35\">House & Land</h1>\n  <a href=\"houseandland-list\"><button class=\"btn btn-back button-bg-color button-font-color button-border-color\"> < Back to List</button></a>\n  <div class=\"masonry-contents\">\n    <div class=\"row\">\n      <div class=\"col-md-6 boxes\" id=\"magin-bot\">\n        <a href=\"{{handlSummary.imagepath}}\" data-group=\"package-detail-gallery\" data-title=\"facade\" class=\"html5lightbox\">\n               <img src=\"{{handlSummary.imagepath}}\"\n               class=\"img-fluid box-image-radius\" appCapsuleImage [masonaryGridClass]=\"'masonry-contents'\" [lightBoxClass]=\"'html5lightbox'\">\n               </a>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\">\n        <div class=\"box\" appCapsuleMasonary [masonaryGridClass]=\"'masonry-contents'\">\n          <div>\n            <h3><strong>{{handlSummary.designproductname}} {{handlSummary.planproductname}}</strong></h3>\n            <h5>Lot {{handlSummary.lotproductname}}, Stage {{handlSummary.stageproductname}}</h5>\n          </div>\n          <hr>\n          <nav class=\"level\">\n            <div class=\"level-item pull-left\">\n              <h6>PACKAGE PRICE</h6>\n              <h3><strong>${{handlSummary.productprice | number:'1.0-0'}}*</strong></h3>\n            </div>\n            <div class=\"level-item pull-right\">\n              <img class=\"builder-logo box-image-radius\" src=\"{{handlSummary.builderlogourl}}\">\n            </div>\n            <div class=\"clearfix\"></div>\n            <hr>\n          </nav>\n          <div>\n            <span class=\"bedroom-text\"><strong>{{handlSummary.noofbedrooms}}</strong></span>\n            <i class=\"fa fa-bed\"></i>\n            <span class=\"bathroom-text\"><strong>{{handlSummary.noofbathrooms}}</strong></span>\n            <i class=\"fa fa-bath\"></i>\n            <span class=\"parking-text\"><strong>{{handlSummary.noofcarparks}}</strong></span>\n            <i class=\"fa fa-car\"></i>\n          </div><br/>\n          <div>\n            <a (click)=\"scrollToView('register-form')\">\n              <button class=\"btn btn-enquire button-bg-color button-font-color button-border-color\">Enquire</button>\n            </a>\n            <a  href=\"{{handlSummary.developerpdfurl}}\" (click)=\"eventTracking('Download PDF', handlSummary.productname)\" target=\"_blank\">\n              <button class=\"btn btn-enquire button-bg-color button-font-color button-border-color\">Download Flyer</button>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\">\n          <div class=\"box\" appCapsuleMasonary [masonaryGridClass]=\"'masonry-contents'\">\n            <div class=\"house-details\">\n              <h3>Dimensions</h3>\n              <hr>\n              <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <td><strong>Lot Frontage</strong></td>\n                    <td>{{handlSummary.lotwidth}}m</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Lot Area</strong></td>\n                    <td>{{handlSummary.lotsize}}m<sup>2</sup></td>\n                  </tr>\n                  <tr>\n                    <td><strong>Home Area</strong></td>\n                    <td>{{handlSummary.homesize}}m<sup>2</sup></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\">\n            <div class=\"box house-details \">\n              <h3 class=\"title is-3\">Features</h3>\n              <div appCapsuleMasonary [masonaryGridClass]=\"'house-detail-contents'\" *ngIf=\"handlDetail && handlDetail.publishdescription\"\n                [innerHtml]=\"handlDetail.publishdescription.split('\\n').join('<br/>')\"></div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\" *ngIf=\"inclusionList\">\n            <div class=\"box house-details inclusions-box\">\n              <h3 class=\"title is-3\">Inclusion List</h3>\n              <ul>\n                  <li *ngFor=\"let inclusion of inclusionList\">{{inclusion}}</li>\n              </ul>\n            </div>\n          </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\">\n        <div class=\"box\">\n          <a href=\"{{handlSummary.floorplanimageurl}}\" data-group=\"package-detail-gallery\" data-title=\"floorplan\" class=\"html5lightbox\">\n            <img src=\"{{handlSummary.floorplanimageurl}}\" class=\"img-fluid box-image-radius\" alt=\"Image\" appCapsuleImage [lightBoxClass]=\"'html5lightbox'\"\n            [masonaryGridClass]=\"'masonry-contents'\"/>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\">\n          <div class=\"box\" appCapsuleMasonary [masonaryGridClass]=\"'masonry-contents'\">\n            <h3>Siting</h3><br>\n            <img src=\"{{handlSummary.siteplanpngurl}}\" class=\"img-fluid box-image-radius\" alt=\"\" appCapsuleImage [lightBoxClass]=\"'html5lightbox'\" [masonaryGridClass]=\"'masonry-contents'\"/>\n          </div>\n        </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 boxes\" *ngIf=\"gallery\">\n        <div class=\"box\">\n          <h3>Gallery</h3>\n          <div class=\"row\" appCapsuleMasonary [masonaryGridClass]=\"'masonry-contents'\">\n            <ng-container *ngFor=\"let image of gallery.imageslist\">\n              <div class=\"col-md-4\">\n                <a href=\"{{image.assettype === 'Video'? image.assetcaption: image.asseturl}}\" data-group=\"package-detail-gallery\" data-title=\"interior\"\n                  class=\"html5lightbox\"><img\n                  src=\"{{image.asseturl}}\" class=\"img-fluid box-image-radius\" (error)=\"handleInvalidAssetUrl(image)\" alt=\"\"\n                  appCapsuleImage [lightBoxClass]=\"'html5lightbox'\" [masonaryGridClass]=\"'masonry-contents'\"/></a>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"gap\"></div>\n<app-similar-package *ngIf=\"handlSummary\" [selectedHandlSummary]=\"handlSummary\"></app-similar-package>\n<br />\n<br />\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n      <h1 class=\"heading-font-color heading-font-name heading-font-size text-center\">\n        <strong>Register Your Interest</strong>\n      </h1>\n      <app-enquiry-header></app-enquiry-header>\n      <br />\n      <br />\n      <app-enquiry-form enquiryFormId=\"generalEnquiryForm\" [r4ProductId]=\"handlSummary.r4Productid\"></app-enquiry-form>\n    </div>\n  </div>\n</div>\n<br />\n<br />\n"

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-master-details/hnl-details/housedetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runway_asset__ = __webpack_require__("../../../../@runway/asset/modules/asset.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_home__ = __webpack_require__("../../../../@runway/home/modules/home.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseDetailsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HouseDetailsComponent = (function (_super) {
    __extends(HouseDetailsComponent, _super);
    function HouseDetailsComponent(handlService, galleryService, activatedRoute, homeService, router, trackingService) {
        var _this = _super.call(this, handlService, galleryService, activatedRoute) || this;
        _this.handlService = handlService;
        _this.galleryService = galleryService;
        _this.activatedRoute = activatedRoute;
        _this.homeService = homeService;
        _this.router = router;
        _this.trackingService = trackingService;
        _this.productType = 'H&L Package';
        _this.inclusionList = [];
        _this.activatedRoute.params.forEach(function (params) {
            _this.productId = params['id'];
            _this.houseSummary();
        });
        return _this;
    }
    HouseDetailsComponent.prototype.eventTracking = function (event, referrer) {
        var message;
        if (event) {
            message = event;
        }
        else {
            message = 'Viewed H&L package';
        }
        this.trackingService.eventTracking(message, referrer, this.productId, this.productType);
    };
    HouseDetailsComponent.prototype.houseSummary = function () {
        var _this = this;
        this.handlService.getHandlSummary(this.productId).subscribe(function (data) {
            _this.eventTracking(null, data.productname);
        });
        this.handlService.getHandlDetail(this.productId).subscribe(function (data) {
            var drips = data.handldrips.find(function (drip) { return (drip.dripname === 'GLOBAL DRIP' && drip.dripposition === 1); }).dripdescription;
            _this.inclusionList = drips.split('\n');
        });
    };
    HouseDetailsComponent.prototype.listRangeSummary = function () {
        var _this = this;
        this.rangeList = [];
        return this.homeService.listRangeSummary()
            .subscribe(function (rangeList) {
            _this.rangeList = rangeList;
        });
    };
    HouseDetailsComponent.prototype.getRangeLogoURL = function (rangeName) {
        var rangeLogo;
        this.rangeList.forEach(function (range) {
            if (range.productname === rangeName) {
                rangeLogo = range.imagepath;
                return rangeLogo;
            }
        });
        return rangeLogo;
    };
    HouseDetailsComponent.prototype.scrollToView = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            this.router.navigate(['contact']);
        }
    };
    return HouseDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_3__runway_handl__["d" /* HandlDetailComponent */]));
HouseDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-housedetail',
        template: __webpack_require__("../../../../../src/app/hnl/hnl-master-details/hnl-details/housedetails.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__runway_handl__["c" /* HandlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__runway_handl__["c" /* HandlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__runway_asset__["g" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__runway_asset__["g" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__runway_home__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_home__["a" /* HomeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */]) === "function" && _f || Object])
], HouseDetailsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=housedetails.component.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"similarHandlSummaries.lenght > 0\" class=\"section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center\">Similar House and Land Packages</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 handl-cursor\" *ngFor=\"let handl of similarHandlSummaries\" (click)=\"onHandlClick(handl)\">\n        <div class=\"design-back\">\n          <div class=\"hlimage\">\n            <img src=\"{{handl.imagepath}}\" class=\"handl-image\">\n          </div>\n          <div class=\"row pad-6\">\n            <div class=\"col-md-5\">\n              <img src=\"{{handl.builderlogourl}}\" class=\"builder-logo box-image-radius\">\n            </div>\n            <div class=\"col-md-7 hnlalign\">\n              <span class=\"bedroom-text\"> {{handl.noofbedrooms}}</span>\n              <i class=\"fa fa-bed\"></i>\n              <span class=\"bathroom-text\"> {{handl.noofbathrooms}} </span>\n              <i class=\"fa fa-bath\"></i>\n              <span class=\"parking-text\"> {{handl.noofcarparks}} </span>\n              <i class=\"fa fa-car\"></i>\n            </div>\n          </div>\n          <div class=\"row pad-6\">\n            <div class=\"col-md-6\">\n              <h5>\n                <strong>{{handl.rangeproductname}}</strong>\n              </h5>\n              <h6 class=\"rboldtext\">Lot {{handl.lotproductname}}, {{handl.stageproductname}}</h6>\n              <h5>\n                <strong>From ${{handl.productprice | number:'1.0-0'}}*</strong>\n              </h5>\n            </div>\n            <div class=\"col-md-6 pad-0\">\n              <h6 class=\"rboldtext\">Home Area: {{handl.homesize}}m\n                <sup>2</sup>\n              </h6>\n              <h6 class=\"rboldtext\">Frontage: {{handl.homewidth}}m</h6>\n              <h6 class=\"rboldtext\">Lot Area: {{handl.lotsize}}m\n                <sup>2</sup>\n              </h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sharing_service__ = __webpack_require__("../../../../../src/app/data-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_asset__ = __webpack_require__("../../../../@runway/asset/modules/asset.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runway_home__ = __webpack_require__("../../../../@runway/home/modules/home.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarPckgComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SimilarPckgComponent = (function (_super) {
    __extends(SimilarPckgComponent, _super);
    function SimilarPckgComponent(dataSharingService, handlService, router, galleryService, activatedRoute) {
        var _this = _super.call(this, handlService, galleryService, activatedRoute) || this;
        _this.dataSharingService = dataSharingService;
        _this.handlService = handlService;
        _this.router = router;
        _this.galleryService = galleryService;
        _this.activatedRoute = activatedRoute;
        _this.pageLoaded = false;
        return _this;
    }
    SimilarPckgComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['selectedHandlSummary']) {
            this.fetchRelatedPackagesForLot();
        }
        if (changes['selectedHomeSummary']) {
            if (this.dataSharingService.getHandlSummaries().length === 0) {
                this.handlService.listHandlSummaryByEstate(null)
                    .subscribe(function (handlList) {
                    _this.dataSharingService.setHandlSummaries(handlList);
                    _this.fetchRelatedPackagesForHome();
                });
            }
            else {
                this.fetchRelatedPackagesForHome();
            }
        }
    };
    SimilarPckgComponent.prototype.onHandlClick = function (selectedPackage) {
        var link = ['/houseandland-detail', selectedPackage.cpidstring];
        this.router.navigate(link);
    };
    SimilarPckgComponent.prototype.fetchRelatedPackagesForLot = function () {
        var _this = this;
        this.similarHandlSummaries = this.dataSharingService.getHandlSummaries()
            .filter(function (handlSummary) { return handlSummary.cpidstring !== _this.selectedHandlSummary.cpidstring
            && handlSummary.lotcpidstring === _this.selectedHandlSummary.lotcpidstring; });
        this.pageLoaded = true;
    };
    SimilarPckgComponent.prototype.fetchRelatedPackagesForHome = function () {
        var _this = this;
        this.similarHandlSummaries = this.dataSharingService.getHandlSummaries()
            .filter(function (handlSummary) { return handlSummary.cpidstring !== _this.selectedHomeSummary.cpidstring
            && handlSummary.designproductname === _this.selectedHomeSummary.designproductname; });
    };
    return SimilarPckgComponent;
}(__WEBPACK_IMPORTED_MODULE_4__runway_handl__["d" /* HandlDetailComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__runway_handl__["f" /* HandlSummary */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_handl__["f" /* HandlSummary */]) === "function" && _a || Object)
], SimilarPckgComponent.prototype, "selectedHandlSummary", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__runway_home__["b" /* HomeSummary */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__runway_home__["b" /* HomeSummary */]) === "function" && _b || Object)
], SimilarPckgComponent.prototype, "selectedHomeSummary", void 0);
SimilarPckgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-similar-package',
        template: __webpack_require__("../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_sharing_service__["a" /* DataSharingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_sharing_service__["a" /* DataSharingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__runway_handl__["c" /* HandlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_handl__["c" /* HandlService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__runway_asset__["g" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__runway_asset__["g" /* GalleryService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object])
], SimilarPckgComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=similar-pckg.component.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__similar_pckg_component__ = __webpack_require__("../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimilarPckgModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimilarPckgModule = (function () {
    function SimilarPckgModule() {
    }
    return SimilarPckgModule;
}());
SimilarPckgModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__similar_pckg_component__["a" /* SimilarPckgComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__similar_pckg_component__["a" /* SimilarPckgComponent */]],
        providers: [],
    })
], SimilarPckgModule);

//# sourceMappingURL=similar-pckg.module.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/hnl.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__runway_r6api__ = __webpack_require__("../../../../@runway/r6api/modules/r6api.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__ = __webpack_require__("../../../../ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hnl_list_hnl_component__ = __webpack_require__("../../../../../src/app/hnl/hnl-list/hnl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hnl_master_details_hnl_details_housedetails_component__ = __webpack_require__("../../../../../src/app/hnl/hnl-master-details/hnl-details/housedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hnl_master_details_similar_package_similar_pckg_module__ = __webpack_require__("../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_handl_pipe__ = __webpack_require__("../../../../../src/app/hnl/search-handl.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__enquiry_form_enquiry_form_component__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HnlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var HnlModule = (function () {
    function HnlModule() {
    }
    return HnlModule;
}());
HnlModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["a" /* CommonUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_14__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */],
            __WEBPACK_IMPORTED_MODULE_6__runway_handl__["a" /* HandlModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__["IonRangeSliderModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_15__hnl_master_details_similar_package_similar_pckg_module__["a" /* SimilarPckgModule */],
            __WEBPACK_IMPORTED_MODULE_7__runway_r6api__["a" /* R6ApiModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_16__search_handl_pipe__["a" /* SearchHandlPipe */], __WEBPACK_IMPORTED_MODULE_11__hnl_list_hnl_component__["a" /* HnlComponent */], __WEBPACK_IMPORTED_MODULE_12__hnl_master_details_hnl_details_housedetails_component__["a" /* HouseDetailsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_11__hnl_list_hnl_component__["a" /* HnlComponent */], __WEBPACK_IMPORTED_MODULE_12__hnl_master_details_hnl_details_housedetails_component__["a" /* HouseDetailsComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_17__enquiry_form_enquiry_form_component__["a" /* EnquiryFormComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__search_handl_pipe__["a" /* SearchHandlPipe */],
            __WEBPACK_IMPORTED_MODULE_6__runway_handl__["c" /* HandlService */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__runway_handl__["b" /* HandlParams */], useClass: __WEBPACK_IMPORTED_MODULE_10__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_7__runway_r6api__["b" /* R6ApiParams */], useClass: __WEBPACK_IMPORTED_MODULE_10__environment_service__["a" /* EnvironmentService */] },
        ],
    })
], HnlModule);

//# sourceMappingURL=hnl.module.js.map

/***/ }),

/***/ "../../../../../src/app/hnl/search-handl.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHandlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchHandlPipe = (function () {
    function SearchHandlPipe() {
    }
    SearchHandlPipe.prototype.transform = function (houseandlandArray, searchFilter) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(searchFilter)) {
            return houseandlandArray;
        }
        return houseandlandArray.filter(function (handl) {
            return ((searchFilter.bedroomsArray.length === 0) || (searchFilter.bedroomsArray.includes(handl.noofbedrooms)))
                && (handl.productprice >= searchFilter.priceFrom)
                && (handl.productprice <= searchFilter.priceTo)
                && (handl.lotwidth >= searchFilter.frontageFrom)
                && (handl.lotwidth <= searchFilter.frontageTo)
                && ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(searchFilter.builder)) || (handl.buildername === searchFilter.builder) || (searchFilter.builder === 'undefined'));
        });
    };
    return SearchHandlPipe;
}());
SearchHandlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchHandlPipe'
    })
], SearchHandlPipe);

//# sourceMappingURL=search-handl.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\" *ngIf=\"homePageDetails\">\n  <div class=\"container ptb-50\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n        <img src=\"{{homePageDetails.image}}\" class=\"img-fluid\"/>\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 ptb-home-80\">\n        <h1 class=\"heading-font-color heading-font-name heading-font-size\">{{homePageDetails.title}}</h1>\n        <div [innerHTML]=\"homePageDetails.body\"></div>\n        <br/>\n        <a (click)=\"scrollToView('register-form')\">\n          <button class=\"btn btn-interest button-bg-color button-font-color button-border-color\">Register your interest</button>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"primary-bg-color\" *ngIf=\"homeItems\">\n  <div class=\"container ptb-70\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let item of homeItems\">\n        <div class=\"card card-custom\">\n          <img class=\"card-img-top img-fluid\" src=\"{{item.image}}\" alt=\"Design\">\n          <div class=\"card-body\">\n            <h1 class=\"secondary-heading-color secondary-heading-font-name secondary-heading-font-size text-center\">{{item.title}}</h1>\n            <div [innerHTML]=\"item.subtitle\" class=\"white-text center-text\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"about\" class=\"btn more-button image-center button-bg-color button-font-color button-border-color\" >Find out more</a>\n  </div>\n</div>\n<div class=\"body-foreground-color\">\n  <div class=\"container ptb-50\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n        <h1 class=\"heading-font-color heading-font-name heading-font-size text-center\"><strong>Register Your Interest</strong></h1>\n        <app-enquiry-header></app-enquiry-header>\n        <br /><br />\n        <app-enquiry-form enquiryFormId=\"generalEnquiryForm\"></app-enquiry-form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container ptb-50\">\n  <div class=\"row\">\n    <div class=\"col-md-5 col-sm-12 col-xs-12 block-center\">\n      <app-sales-details></app-sales-details>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_model__ = __webpack_require__("../../../../../src/app/home-page/home.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageComponent = (function () {
    function HomePageComponent(cmsApiService, router) {
        this.cmsApiService = cmsApiService;
        this.router = router;
        this.homePageDetails = new __WEBPACK_IMPORTED_MODULE_2__home_model__["a" /* HomePageDetails */];
        this.homeItems = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    HomePageComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterItems(data);
        });
    };
    HomePageComponent.prototype.filterItems = function (data) {
        var pageItem = data.find(function (item) { return (item.id === 'home'); });
        var homeItems = data.filter(function (item) { return (item.parentId === 'home'); });
        this.createPageDetail(pageItem);
        this.createPageItems(homeItems);
    };
    HomePageComponent.prototype.createPageDetail = function (item) {
        this.homePageDetails = {
            title: item.properties.headline,
            body: item.properties.body,
            image: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.featured_image
        };
    };
    HomePageComponent.prototype.createPageItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            var homePageItem = {
                title: item.properties.headline,
                subtitle: item.properties.subtitle,
                image: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.image
            };
            _this.homeItems.push(homePageItem);
        });
    };
    HomePageComponent.prototype.scrollToView = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            this.router.navigate(['contact']);
        }
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_land__ = __webpack_require__("../../../../@runway/land/modules/land.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_r6api__ = __webpack_require__("../../../../@runway/r6api/modules/r6api.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_footer_header_footer_module__ = __webpack_require__("../../../../../src/app/header-footer/header-footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hnl_hnl_module__ = __webpack_require__("../../../../../src/app/hnl/hnl.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__runway_commonutils__["a" /* CommonUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_3__runway_land__["a" /* LandModule */],
            __WEBPACK_IMPORTED_MODULE_4__runway_r6api__["a" /* R6ApiModule */],
            __WEBPACK_IMPORTED_MODULE_8__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */],
            __WEBPACK_IMPORTED_MODULE_10__hnl_hnl_module__["a" /* HnlModule */],
            __WEBPACK_IMPORTED_MODULE_9__header_footer_header_footer_module__["a" /* HeaderFooterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__home_page_component__["a" /* HomePageComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__home_page_component__["a" /* HomePageComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_3__runway_land__["b" /* LandParams */], useClass: __WEBPACK_IMPORTED_MODULE_5__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_4__runway_r6api__["b" /* R6ApiParams */], useClass: __WEBPACK_IMPORTED_MODULE_5__environment_service__["a" /* EnvironmentService */] },
        ],
    })
], HomePageModule);

//# sourceMappingURL=home-page.module.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageDetails; });
var HomePageDetails = (function () {
    function HomePageDetails() {
    }
    return HomePageDetails;
}());

//# sourceMappingURL=home.model.js.map

/***/ }),

/***/ "../../../../../src/app/land-for-sale/land-for-sale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center m-35\">Land For Sale</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12 pad-0\">\n      <iframe src=\"https://propertiesaws.masterplans.com.au/masterplan-sokdev/published/map/0S1K56203G5I228D0U9D667P6N6T\" class=\"masterplan-frame\"></iframe>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 pad-0\">\n      <app-landlist></app-landlist>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/land-for-sale/land-for-sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandForSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandForSaleComponent = (function () {
    function LandForSaleComponent() {
    }
    return LandForSaleComponent;
}());
LandForSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-land-for-sale',
        template: __webpack_require__("../../../../../src/app/land-for-sale/land-for-sale.component.html")
    }),
    __metadata("design:paramtypes", [])
], LandForSaleComponent);

//# sourceMappingURL=land-for-sale.component.js.map

/***/ }),

/***/ "../../../../../src/app/land-for-sale/land-for-sale.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__land_for_sale_component__ = __webpack_require__("../../../../../src/app/land-for-sale/land-for-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landlist_landlist_module__ = __webpack_require__("../../../../../src/app/landlist/landlist.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandForSaleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandForSaleModule = (function () {
    function LandForSaleModule() {
    }
    return LandForSaleModule;
}());
LandForSaleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */],
            __WEBPACK_IMPORTED_MODULE_4__landlist_landlist_module__["a" /* LandListModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__land_for_sale_component__["a" /* LandForSaleComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__land_for_sale_component__["a" /* LandForSaleComponent */]]
    })
], LandForSaleModule);

//# sourceMappingURL=land-for-sale.module.js.map

/***/ }),

/***/ "../../../../../src/app/landlist/land-detail-extended.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mtb-30\">\n    <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center m-35\">Lot Detail</h1>\n    <a href=\"land-for-sale\"><button class=\"btn btn-back button-bg-color button-font-color button-border-color\"> < Back to List</button></a>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"detail-masterplan pad-left-0\" *ngIf=\"stagePlanUrl\">\n        <div class=\"box\" style=\"background: #f3f3f4\">\n          <iframe id=\"stageplan\" [src]=\"stagePlanUrl\" frameborder=\"0\" style=\"height: 437px;width:100%\"></iframe>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"box\">\n        <nav class=\"level\">\n          <div class=\"level-item pull-left\">\n            <h2>\n              <strong>Lot {{lotSummary.productname}}</strong>\n            </h2>\n            <h3>{{lotSummary.estateproductname}}</h3>\n          </div>\n          <div class=\"level-item pull-right\">\n            <div>\n              <a (click)=\"scrollToView('register-form')\">\n                <button class=\"btn btn-enquire button-bg-color button-font-color button-border-color\">Enquire</button>\n              </a>\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n        </nav>\n\n        <div class=\"gap\"></div>\n\n        <hr>\n        <div class=\"gap\"></div>\n        <nav class=\"level\">\n          <div class=\"level-item has-text-centered\">\n            <div>\n              <p>LAND PRICE</p>\n              <h3>\n                <strong>{{lotSummary.productprice | currency:'USD':true:'2.0'}}</strong>\n              </h3>\n            </div>\n          </div>\n        </nav>\n        <hr>\n        <div class=\"gap\"></div>\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <td>Frontage</td>\n              <td>{{lotSummary.productwidth}}m</td>\n            </tr>\n            <tr>\n              <td>Area</td>\n              <td>{{lotSummary.productsize}}m<sup>2</sup>\n              </td>\n            </tr>\n            <tr>\n              <td>Estimated Title Date</td>\n              <td>{{today | date}}</td>\n            </tr>\n            <tr>\n              <td>Status</td>\n              <td>\n                <span class=\"tag is-warning\">{{lotSummary.currentstatusname}}</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-similar-package [selectedHandlSummary]=\"handlSummary\"></app-similar-package>\n      <br />\n      <br />\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n      <h1 class=\"heading-font-color heading-font-name heading-font-size text-center\">\n        <strong>Register Your Interest</strong>\n      </h1>\n      <app-enquiry-header></app-enquiry-header>\n      <br />\n      <br />\n      <app-enquiry-form enquiryFormId=\"generalEnquiryForm\" [r4ProductId]=\"lotSummary.r4Productid\"></app-enquiry-form>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landlist/land-detail-extended.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_land__ = __webpack_require__("../../../../@runway/land/modules/land.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandDetailExtendedComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandDetailExtendedComponent = (function (_super) {
    __extends(LandDetailExtendedComponent, _super);
    function LandDetailExtendedComponent(landService, activatedRoute, trackingService, sanitizer, http, router) {
        var _this = _super.call(this, landService, activatedRoute) || this;
        _this.landService = landService;
        _this.activatedRoute = activatedRoute;
        _this.trackingService = trackingService;
        _this.sanitizer = sanitizer;
        _this.http = http;
        _this.router = router;
        _this.options = {
            lotStyles: {
                stroke: '#373C40',
                strokeWidth: 1.5,
                fill: '#ea8d8d',
                color: '#fffff'
            }
        };
        _this.today = Date.now();
        _this.productType = 'Land';
        window.scrollTo(0, 0);
        _this.activatedRoute.params.forEach(function (params) {
            _this.productId = params['id'];
            _this.fetchLotSummary();
        });
        return _this;
    }
    LandDetailExtendedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.activatedRoute.fragment.subscribe(function (fragment) {
            if (fragment) {
                _this.scrollToView('register-form');
            }
        });
    };
    LandDetailExtendedComponent.prototype.fetchLotSummary = function () {
        var _this = this;
        this.landService.getLotSummary(this.productId).subscribe(function (data) {
            _this.eventTracking('Lot ' + data.productname);
            _this.stagePlanUrl = _this.sanitizer.bypassSecurityTrustResourceUrl('https://d3myrsvzulg5g3.cloudfront.net/lot-highlight-view/'
                + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].r6SecurityToken + '/' + data.stagecpidstring + '/' + data.productname);
        });
    };
    LandDetailExtendedComponent.prototype.eventTracking = function (referrer) {
        var event = 'Viewed Land Detail';
        this.trackingService.eventTracking(event, referrer, this.productId, this.productType);
    };
    LandDetailExtendedComponent.prototype.scrollToView = function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else {
            this.router.navigate(['contact']);
        }
    };
    return LandDetailExtendedComponent;
}(__WEBPACK_IMPORTED_MODULE_4__runway_land__["c" /* LandDetailComponent */]));
LandDetailExtendedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-land-detail',
        template: __webpack_require__("../../../../../src/app/landlist/land-detail-extended.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__runway_land__["d" /* LandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_land__["d" /* LandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tracking_service_tracking_service__["a" /* TrackingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === "function" && _f || Object])
], LandDetailExtendedComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=land-detail-extended.component.js.map

/***/ }),

/***/ "../../../../../src/app/landlist/land-filter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandFilter; });
var LandFilter = (function () {
    function LandFilter() {
    }
    return LandFilter;
}());

//# sourceMappingURL=land-filter.model.js.map

/***/ }),

/***/ "../../../../../src/app/landlist/landlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"land-list-back-color primary-bg-color\">\n  <div class=\"white-opacity-wrapper p-50\">\n    <div class=\"container-fluid\" *ngIf=\"pageLoaded\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-12 col-sm-6 land-filter-color primary-bg-color\">\n          <label class=\"label white-text\">FRONTAGE</label>\n          <ion-range-slider #sliderElement name=\"priceRange\" type=\"double\" [min]=\"minFrontage\" [max]=\"maxFrontage\" from_shadow=\"true\" to_shadow=\"true\" prefix=\"\"\n            postfix=\"m\" decorate_both=\"false\" (onChange)=\"onFrontageChange($event)\"></ion-range-slider>\n          <br />\n          <label class=\"label white-text\">AREA</label>\n          <ion-range-slider #sliderElement name=\"priceRange\" type=\"double\" [min]=\"minArea\" [max]=\"maxArea\" from_shadow=\"true\" to_shadow=\"true\"\n            prefix=\"\" postfix=\"m<sup>2</sup>\" decorate_both=\"false\" (onChange)=\"onAreaChange($event)\"></ion-range-slider>\n          <br />\n          <label class=\"label white-text\">PRICE</label>\n          <ion-range-slider #sliderElement name=\"priceRange\" type=\"double\" [min]=\"minPriceRange\" [max]=\"maxPriceRange\" from_shadow=\"true\" to_shadow=\"true\"\n            prefix=\"$\" postfix=\"\" decorate_both=\"false\" (onChange)=\"onPriceChange($event)\"></ion-range-slider>\n          <br />\n          <h2 class=\"text-center white-text\">\n            <strong>{{searchFilteredList.length}}</strong>\n          </h2>\n          <h5 class=\"text-center secondary-font-color\">Available Lots</h5>\n        </div>\n        <div class=\"col-lg-8 offset-lg-1 col-md-12 landfilter-btn\">\n          <div class=\"row\">\n            <div class=\"col-lg-1\">\n              <h5 class=\"stage-text white-text\">Stage:</h5>\n            </div>\n            <div class=\"col-lg-2 selectParent\">\n              <select class=\"form-control\" name=\"stage\" [(ngModel)]=\"selectedStage\" (change)=\"onStageChange(selectedStage)\">\n                <option class=\"default-options\" value=\"undefined\">All</option>\n                <option  *ngFor=\"let stage of stageList\" [value]=\"stage\">{{stage}}</option>\n              </select>\n            </div>\n          </div>\n          <br />\n          <div class=\"row land-list-table-back white-bg\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Lot</th>\n                    <th>Stage</th>\n                    <th class=\"hidden-sm\">Frontage (m)</th>\n                    <th class=\"hidden-sm\">Depth (m)</th>\n                    <th class=\"hidden-sm\">Area(m<sup>2</sup>)</th>\n                    <th>Packages</th>\n                    <th>Enquire</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let lot of searchFilteredList| paginationFilterPipe: displayCounter\" (click)=\"onLotClick(lot)\" class=\"mouse-cursor\">\n                    <td (click)=\"onLotClick(lot)\">{{lot.productname}}</td>\n                    <td>{{lot.stageproductname}}</td>\n                    <td class=\"hidden-sm\">{{lot.productwidth}} m</td>\n                    <td class=\"hidden-sm\">{{lot.productdepth}} m</td>\n                    <td class=\"hidden-sm\">{{lot.productsize}} m<sup>2</sup></td>\n                    <td>\n                      <i *ngIf=\"lot.packaged\" class=\"fa fa-check-circle primary-font-color\"></i>\n                    </td>\n                    <td (click)=\"goToLotEnquiry(lot)\">\n                      <i class=\"fa fa-envelope primary-font-color\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <a *ngIf=\"displayCounter.getDisplayedSize() < displayCounter.getTotalSize()\" class=\"view-more-btn button-bg-color button-font-color button-border-color\" (click)=\"onViewMore()\">View More</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landlist/landlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_land__ = __webpack_require__("../../../../@runway/land/modules/land.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__land_filter_model__ = __webpack_require__("../../../../../src/app/landlist/land-filter.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_land_pipe__ = __webpack_require__("../../../../../src/app/landlist/search-land.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* unused harmony export areaRangeList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandlistExtendedComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var areaRangeList = [
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](0, 100, '0-100'),
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](101, 200, '101-300000'),
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](201, 300, '201-500000'),
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](301, 400, '301-1000000'),
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](401, 500, '401-1000000'),
    new __WEBPACK_IMPORTED_MODULE_5__runway_commonutils__["c" /* RangeFilter */](501, -1, '501+'),
];
var LandlistExtendedComponent = (function (_super) {
    __extends(LandlistExtendedComponent, _super);
    function LandlistExtendedComponent(landService, router, searchLand, landParams, handlService) {
        var _this = _super.call(this, router, landService, landParams) || this;
        _this.landService = landService;
        _this.router = router;
        _this.searchLand = searchLand;
        _this.landParams = landParams;
        _this.handlService = handlService;
        _this.estateCpId = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].estateCpId;
        _this.stageList = [];
        _this.pageLoaded = false;
        _this.minPriceRange = 10000;
        _this.maxPriceRange = 100000;
        _this.minFrontage = 0;
        _this.maxFrontage = 25;
        _this.minArea = 0;
        _this.maxArea = 1000;
        _this.searchLandFilter = new __WEBPACK_IMPORTED_MODULE_6__land_filter_model__["a" /* LandFilter */]();
        _this.searchLandFilter.priceFrom = 0;
        _this.searchLandFilter.priceTo = 800000;
        _this.searchLandFilter.areaFrom = 0;
        _this.searchLandFilter.areaTo = 1000;
        _this.searchLandFilter.frontageFrom = 0;
        _this.searchLandFilter.frontageTo = 25;
        _this.searchLandFilter.status = 'Available';
        _this.lotList = [];
        _this.searchFilteredList = _this.lotList;
        return _this;
    }
    LandlistExtendedComponent.prototype.ngOnInit = function () {
        // /* Override default behaviour of LandList by setting lotStatus = Available*/
        this.lotCriteria.status = 'Available';
        this.lotSummaryList = [];
        this.estateSummaryList = [];
        this.handlSummaryList = [];
        this.estateNameList = [];
        this.listHandLSummary();
    };
    LandlistExtendedComponent.prototype.listHandLSummary = function () {
        var _this = this;
        return this.handlService.listPublishedHandlSummaryByEstate(this.estateCpId)
            .subscribe(function (handlList) {
            _this.handlSummaryList = handlList;
            _this.listLotSummary();
        });
    };
    LandlistExtendedComponent.prototype.checkPackage = function () {
        var _this = this;
        this.handlSummaryList.forEach(function (handlSummary) {
            if (_this.lotList !== undefined) {
                _this.lotList.forEach(function (lot) {
                    if (handlSummary.lotproductname === lot.productname) {
                        lot.packaged = true;
                    }
                });
            }
        });
    };
    LandlistExtendedComponent.prototype.listLotSummary = function () {
        var _this = this;
        return this.landService.listLotSummaryByEstate(this.estateCpId)
            .subscribe(function (lotList) {
            _this.lotList = lotList;
            _this.setStageSummary();
            _this.checkPackage();
            _this.searchFilteredList = _this.searchLand.transform(_this.lotList, _this.searchLandFilter);
            _this.setMinAndMaxPriceValues();
            _this.pageLoaded = true;
        });
    };
    LandlistExtendedComponent.prototype.setStageSummary = function () {
        var _this = this;
        this.lotList.forEach(function (element) {
            if (!_this.stageList.includes(element.stageproductname)) {
                _this.stageList.push(element.stageproductname);
            }
        });
    };
    LandlistExtendedComponent.prototype.setLotListSummaryResponse = function (lotList) {
        this.lotSummaryList = lotList;
        this.lotNumberList = [];
        for (var _i = 0, _a = this.lotSummaryList; _i < _a.length; _i++) {
            var lotSummary = _a[_i];
            this.lotNumberList.push(lotSummary.productname);
        }
    };
    LandlistExtendedComponent.prototype.onLotClick = function (selectedLot) {
        var link = ['/land-detail', selectedLot.cpidstring];
        this.router.navigate(link);
    };
    LandlistExtendedComponent.prototype.goToLotEnquiry = function (selectedLot) {
        var link = ['/land-detail', selectedLot.cpidstring];
        this.router.navigate(link, { fragment: 'register-form' });
    };
    LandlistExtendedComponent.prototype.onPriceChange = function (event) {
        this.searchLandFilter.priceFrom = event.from;
        this.searchLandFilter.priceTo = event.to;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.onAreaChange = function (event) {
        this.searchLandFilter.areaFrom = event.from;
        this.searchLandFilter.areaTo = event.to;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.onFrontageChange = function (event) {
        this.searchLandFilter.frontageFrom = event.from;
        this.searchLandFilter.frontageTo = event.to;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.onStageChange = function () {
        if (this.selectedStage !== 'undefined') {
            this.searchLandFilter.stage = this.selectedStage;
        }
        else {
            this.searchLandFilter.stage = null;
        }
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.searchStatus = function (status) {
        this.searchLandFilter.status = status;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.onLotProjectChange = function (selectedProjectName) {
        _super.prototype.resetPagination.call(this);
        this.lotCriteria.estatename = selectedProjectName;
        this.searchLandFilter.project = this.lotCriteria.estatename;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    LandlistExtendedComponent.prototype.getAreaRangeList = function () {
        return areaRangeList;
    };
    LandlistExtendedComponent.prototype.contactPage = function (productId) {
        this.router.navigate(['contact']);
    };
    LandlistExtendedComponent.prototype.setMinAndMaxPriceValues = function () {
        var minPrice = 0;
        var maxPrice = 0;
        var minFrontage = 0;
        var maxFrontage = 0;
        var minArea = 0;
        var maxArea = 0;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(this.searchFilteredList)) {
            this.searchFilteredList.forEach(function (handl) {
                if ((minPrice === 0 || handl.productprice < minPrice) && handl.productprice !== null) {
                    minPrice = handl.productprice;
                }
                if (maxPrice === 0 || handl.productprice > maxPrice) {
                    maxPrice = handl.productprice;
                }
                if ((minFrontage === 0 || handl.productwidth < minFrontage) && handl.productwidth !== null) {
                    minFrontage = handl.productwidth;
                }
                if (maxFrontage === 0 || handl.productwidth > maxFrontage) {
                    maxFrontage = handl.productwidth;
                }
                if ((minArea === 0 || handl.productsize < minArea) && handl.productsize !== null) {
                    minArea = handl.productsize;
                }
                if (maxArea === 0 || handl.productsize > maxArea) {
                    maxArea = handl.productsize;
                }
            });
        }
        if (minPrice !== 0) {
            minPrice = (Math.round(minPrice / 10000) - 1) * 10000;
        }
        maxPrice = Math.floor(Math.round(maxPrice / 10000) + 1) * 10000;
        this.minPriceRange = minPrice;
        this.maxPriceRange = maxPrice;
        this.minFrontage = minFrontage;
        this.maxFrontage = maxFrontage;
        this.minArea = minArea;
        this.maxArea = maxArea;
        this.searchLandFilter.priceFrom = minPrice;
        this.searchLandFilter.priceTo = maxPrice;
        this.searchLandFilter.frontageFrom = minFrontage;
        this.searchLandFilter.frontageTo = maxFrontage;
        this.searchLandFilter.areaFrom = minArea;
        this.searchLandFilter.areaTo = maxArea;
        this.searchFilteredList = this.searchLand.transform(this.lotList, this.searchLandFilter);
    };
    return LandlistExtendedComponent;
}(__WEBPACK_IMPORTED_MODULE_4__runway_land__["e" /* LandListComponent */]));
LandlistExtendedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landlist',
        template: __webpack_require__("../../../../../src/app/landlist/landlist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__runway_land__["d" /* LandService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_land__["d" /* LandService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__search_land_pipe__["a" /* SearchLandPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__search_land_pipe__["a" /* SearchLandPipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__runway_land__["b" /* LandParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__runway_land__["b" /* LandParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__runway_handl__["c" /* HandlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__runway_handl__["c" /* HandlService */]) === "function" && _e || Object])
], LandlistExtendedComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=landlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/landlist/landlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_handl__ = __webpack_require__("../../../../@runway/handl/modules/handl.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runway_land__ = __webpack_require__("../../../../@runway/land/modules/land.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runway_r4masterplan__ = __webpack_require__("../../../../@runway/r4masterplan/modules/r4masterplan.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__runway_r6api__ = __webpack_require__("../../../../@runway/r6api/modules/r6api.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__ = __webpack_require__("../../../../ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hnl_hnl_master_details_similar_package_similar_pckg_module__ = __webpack_require__("../../../../../src/app/hnl/hnl-master-details/similar-package/similar-pckg.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landlist_component__ = __webpack_require__("../../../../../src/app/landlist/landlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__land_detail_extended_component__ = __webpack_require__("../../../../../src/app/landlist/land-detail-extended.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_land_pipe__ = __webpack_require__("../../../../../src/app/landlist/search-land.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var LandListModule = (function () {
    function LandListModule() {
    }
    return LandListModule;
}());
LandListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__runway_commonutils__["a" /* CommonUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_4__runway_handl__["a" /* HandlModule */],
            __WEBPACK_IMPORTED_MODULE_5__runway_land__["a" /* LandModule */],
            __WEBPACK_IMPORTED_MODULE_6__runway_r4masterplan__["a" /* MasterplanModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_ion_range_slider__["IonRangeSliderModule"],
            __WEBPACK_IMPORTED_MODULE_7__runway_r6api__["a" /* R6ApiModule */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_10__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */],
            __WEBPACK_IMPORTED_MODULE_11__hnl_hnl_master_details_similar_package_similar_pckg_module__["a" /* SimilarPckgModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_15__search_land_pipe__["a" /* SearchLandPipe */], __WEBPACK_IMPORTED_MODULE_13__landlist_component__["a" /* LandlistExtendedComponent */], __WEBPACK_IMPORTED_MODULE_14__land_detail_extended_component__["a" /* LandDetailExtendedComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_13__landlist_component__["a" /* LandlistExtendedComponent */], __WEBPACK_IMPORTED_MODULE_14__land_detail_extended_component__["a" /* LandDetailExtendedComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__search_land_pipe__["a" /* SearchLandPipe */],
            __WEBPACK_IMPORTED_MODULE_5__runway_land__["d" /* LandService */],
            __WEBPACK_IMPORTED_MODULE_4__runway_handl__["c" /* HandlService */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__runway_handl__["b" /* HandlParams */], useClass: __WEBPACK_IMPORTED_MODULE_12__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_5__runway_land__["b" /* LandParams */], useClass: __WEBPACK_IMPORTED_MODULE_12__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_6__runway_r4masterplan__["b" /* MasterplanParams */], useClass: __WEBPACK_IMPORTED_MODULE_12__environment_service__["a" /* EnvironmentService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_7__runway_r6api__["b" /* R6ApiParams */], useClass: __WEBPACK_IMPORTED_MODULE_12__environment_service__["a" /* EnvironmentService */] },
        ],
    })
], LandListModule);

//# sourceMappingURL=landlist.module.js.map

/***/ }),

/***/ "../../../../../src/app/landlist/search-land.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLandPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchLandPipe = (function () {
    function SearchLandPipe() {
    }
    SearchLandPipe.prototype.transform = function (LandArray, searchFilter) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(searchFilter)) {
            return LandArray;
        }
        return LandArray.filter(function (lot) {
            return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(searchFilter.status) || (lot.currentstatusname === searchFilter.status))
                && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(searchFilter.stage) || (lot.stageproductname === searchFilter.stage))
                && (lot.productprice >= searchFilter.priceFrom)
                && (lot.productprice <= searchFilter.priceTo)
                && (lot.productsize >= searchFilter.areaFrom)
                && (lot.productsize <= searchFilter.areaTo)
                && (lot.productwidth >= searchFilter.frontageFrom)
                && (lot.productwidth <= searchFilter.frontageTo);
        });
    };
    return SearchLandPipe;
}());
SearchLandPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchLandPipe'
    })
], SearchLandPipe);

//# sourceMappingURL=search-land.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\">\n  <div class=\"container ptb-50\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n        <img src=\"{{locationPageDetail.image}}\" class=\"img-fluid\" />\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 ptb-80\">\n        <h1 class=\"heading-font-color heading-font-size\">{{locationPageDetail.title}}</h1>\n        <div [innerHTML]=\"locationPageDetail.body\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12\" id=\"amenties-map\">\n    <div class=\"direction-section primary-bg-color\">\n      <h1 class=\"secondary-heading-color page-title-font-name page-title-font-size text-center\">Explore Fairmile</h1>\n      <app-map-direction></app-map-direction>\n    </div>\n  </div>\n  <br/>\n  <br/>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 block-center\">\n        <h1 class=\"heading-font-color heading-font-size text-center\">\n          <strong>Register Your Interest</strong>\n        </h1>\n        <app-enquiry-header></app-enquiry-header>\n        <br />\n        <br />\n        <app-enquiry-form enquiryFormId=\"generalEnquiryForm\"></app-enquiry-form>\n        <br />\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_model__ = __webpack_require__("../../../../../src/app/location/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationComponent = (function () {
    function LocationComponent(cmsApiService) {
        this.cmsApiService = cmsApiService;
        this.locationPageDetail = new __WEBPACK_IMPORTED_MODULE_2__location_model__["a" /* LocationItem */];
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    LocationComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterItems(data);
        });
    };
    LocationComponent.prototype.filterItems = function (data) {
        var pageItem = data.find(function (item) { return (item.id === 'location'); });
        this.createLocationDetail(pageItem);
    };
    LocationComponent.prototype.createLocationDetail = function (item) {
        this.locationPageDetail = {
            title: item.properties.title,
            body: item.properties.body,
            image: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.image
        };
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-location',
        template: __webpack_require__("../../../../../src/app/location/location.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object])
], LocationComponent);

var _a;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/app/location/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationItem; });
var LocationItem = (function () {
    function LocationItem() {
    }
    return LocationItem;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ "../../../../../src/app/location/location.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_component__ = __webpack_require__("../../../../../src/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_module__ = __webpack_require__("../../../../../src/app/contact/contact.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_direction_map_direction_module__ = __webpack_require__("../../../../../src/app/map-direction/map-direction.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LocationModule = (function () {
    function LocationModule() {
    }
    return LocationModule;
}());
LocationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__contact_contact_module__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */],
            __WEBPACK_IMPORTED_MODULE_5__map_direction_map_direction_module__["a" /* MapDirectionModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__location_component__["a" /* LocationComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__location_component__["a" /* LocationComponent */]]
    })
], LocationModule);

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ "../../../../../src/app/map-direction/map-direction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'all'}\" class=\"btn bnt-light btn-sm s btn-block poi-button\" id=\"all\"\n                (click)=\"showOnly('all')\">Show All</button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'education'}\" class=\"btn bnt-light btn-sm btn-block poi-button\"\n                id=\"education\" (click)=\"showOnly('education')\">Education</button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'transport'}\" class=\"btn bnt-light btn-sm btn-block poi-button\"\n                id=\"transport\" (click)=\"showOnly('transport')\">Transport</button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'shopping'}\" class=\"btn bnt-light btn-sm btn-block poi-button\"\n                id=\"shopping\" (click)=\"showOnly('shopping')\">Shopping</button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'recreation'}\" class=\"btn bnt-light btn-sm btn-block poi-button\"\n                id=\"recreation\" (click)=\"showOnly('recreation')\">Recreation</button>\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" [ngClass]=\"{'active':activeMarker == 'health'}\" class=\"btn bnt-light btn-sm btn-block poi-button\" id=\"health\"\n                (click)=\"showOnly('health')\">Health</button>\n        </div>\n    </div>\n</div>\n<div class=\"map-section\">\n    <div id=\"googleMap\"></div>\n    <div class=\"method-sidebar\" id=\"distanceBar\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <h5><span id=\"distanceTitle\"></span></h5>\n                <div class=\"d-flex align-items-start\">\n                    <div class=\"image-container align-self-center\">\n                        <div [ngClass]=\"currentMethod\" class=\"method-icon\"></div>\n                    </div>\n                    <div class=\"align-self-center align-self-middle\">\n                        <p>\n                            <small>Distance:</small>\n                            <strong id=\"distanceData\"></strong>\n                        </p>\n                        <p>\n                            <small>Time:</small>\n                            <strong id=\"durationData\"></strong>\n                        </p>\n                    </div>\n                </div>\n            </div>                       \n        </div>\n        <div class=\"btn-group btn-group-sm direction-buttons\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" [ngClass]=\"{'active':currentMethod == 'driving'}\" class=\"direction-button  btn btn-secondary\" (click)=\"travelMethod('DRIVING')\">Driving</button>\n            <button type=\"button\" [ngClass]=\"{'active':currentMethod == 'bicycling'}\" class=\"direction-button  btn btn-secondary\" (click)=\"travelMethod('BICYCLING')\">Bicycling</button>\n            <button type=\"button\" [ngClass]=\"{'active':currentMethod == 'walking'}\" class=\"direction-button  btn btn-secondary\" (click)=\"travelMethod('WALKING')\">Walking</button>\n        </div>\n    </div>\n    <!-- <button class=\"btn mt-20 btn-general button-bg-color button-font-color button-border-color text-center\">Download Aerial Map</button> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map-direction/map-direction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_loader_service__ = __webpack_require__("../../../../../src/app/map-direction/map-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location_component__ = __webpack_require__("../../../../../src/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poi_model__ = __webpack_require__("../../../../../src/app/map-direction/poi.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapDirectionComponent = (function () {
    function MapDirectionComponent(cmsApiService, locationComponent) {
        var _this = this;
        this.cmsApiService = cmsApiService;
        this.locationComponent = locationComponent;
        this.activeMarker = 'all';
        this.currentMethod = 'driving';
        this.displayMarkers = [];
        this.markers = [];
        this.poiDetail = new __WEBPACK_IMPORTED_MODULE_4__poi_model__["a" /* PoiItem */]();
        __WEBPACK_IMPORTED_MODULE_2__map_loader_service__["a" /* GoogleMapsLoader */].load()
            .then(function (res) {
            _this.loadMap();
            _this.fetchData();
        });
    }
    MapDirectionComponent.prototype.loadMap = function () {
        var mapProp = {
            center: new google.maps.LatLng(this.centerLat, this.centerLng),
            zoom: 1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scaleControl: true,
            zoomControl: true,
            styles: [
                {
                    'featureType': 'administrative',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'administrative.neighborhood',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                }
            ]
        };
        this.map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
        this.directionsService = new google.maps.DirectionsService;
        this.distanceService = new google.maps.DistanceMatrixService();
        this.startDirectionDisplay();
    };
    MapDirectionComponent.prototype.startDirectionDisplay = function () {
        if (this.directionsDisplay == null) {
            this.directionsDisplay = new google.maps.DirectionsRenderer;
            this.directionsDisplay.setMap(this.map);
            this.directionsDisplay.setOptions({ suppressMarkers: true });
        }
    };
    MapDirectionComponent.prototype.stopDirectionDisplay = function () {
        if (this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }
    };
    MapDirectionComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterItems(data);
        });
    };
    MapDirectionComponent.prototype.filterItems = function (items) {
        var _this = this;
        var poiItems = items.filter(function (item) { return (item.parentId === 'location'); });
        poiItems.forEach(function (item, index) {
            _this.createPoiDetails(item, index);
        });
    };
    MapDirectionComponent.prototype.createPoiDetails = function (item, index) {
        var poiItem = {
            title: item.properties.name,
            description: item.properties.description,
            lat: item.properties.latitude,
            lng: item.properties.longitude,
            icon: {
                url: this.createIcon(item.properties.category)
            },
            category: item.properties.category,
            visible: true
        };
        this.gatherMarkers(poiItem, index);
        if (poiItem.category === 'sales_office') {
            this.centerLat = poiItem.lat;
            this.centerLng = poiItem.lng;
        }
    };
    MapDirectionComponent.prototype.createIcon = function (category) {
        switch (category) {
            case 'education':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/location/education%402x.png';
            case 'health':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/location/health%402x.png';
            case 'transport':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/location/transport%402x.png';
            case 'shopping':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/location/shopping%402x.png';
            case 'recreation':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/thornhillpark/location/recreation_1%402x.png';
            case 'sales_office':
                return 'https://s3-ap-southeast-2.amazonaws.com/sog-microsites-assets/fairmile/fairmile_map_icon%402x.png';
            default:
                return '';
        }
    };
    MapDirectionComponent.prototype.gatherMarkers = function (detail, index) {
        var marker = new google.maps.Marker({
            title: detail.title,
            description: detail.description,
            category: detail.category,
            icon: detail.icon,
            position: new google.maps.LatLng(detail.lat, detail.lng),
            visible: detail.display
        });
        if (detail.category !== 'sales_office') {
            this.eventListener(marker);
        }
        this.markers.push(marker);
        this.setMarkers(index, this.map);
    };
    MapDirectionComponent.prototype.setMarkers = function (index, map) {
        this.markers[index].setMap(map);
        this.fitBounds(this.markers);
    };
    MapDirectionComponent.prototype.fitBounds = function (markers) {
        var _this = this;
        this.bounds = new google.maps.LatLngBounds();
        markers.forEach(function (item) {
            _this.bounds.extend(item.getPosition());
        });
        this.map.fitBounds(this.bounds);
    };
    MapDirectionComponent.prototype.showOnly = function (marker) {
        var _this = this;
        document.getElementById('distanceBar').classList.remove('active');
        this.currentMethod = 'driving';
        this.stopDirectionDisplay();
        if (this.activeMarker === marker) {
            return;
        }
        this.activeMarker = marker;
        this.displayMarkers = [];
        this.markers.forEach(function (item, index) {
            if (marker === 'all' || item.category === marker || item.category === 'sales_office') {
                _this.displayMarkers.push(_this.markers[index]);
                _this.setMarkers(index, _this.map);
            }
            else {
                _this.setMarkers(index, null);
            }
        });
        this.fitBounds(this.displayMarkers);
    };
    MapDirectionComponent.prototype.eventListener = function (marker) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function (event) {
            _this.origin = new google.maps.LatLng(_this.centerLat, _this.centerLng);
            _this.destination = marker.position;
            _this.currentMethod = 'driving';
            document.getElementById('distanceTitle').innerHTML = marker.title;
            _this.initDirection();
        });
    };
    MapDirectionComponent.prototype.travelMethod = function (method) {
        if ((this.origin && this.destination) !== undefined) {
            this.initDirection(method);
        }
    };
    MapDirectionComponent.prototype.initDirection = function (method) {
        var _this = this;
        if (method) {
            this.currentMethod = method.toLowerCase();
        }
        document.getElementById('distanceBar').classList.add('active');
        this.startDirectionDisplay();
        this.directionsService.route({
            origin: this.origin,
            destination: this.destination,
            travelMode: method || 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
                document.getElementById('distanceData').innerHTML = response.routes[0].legs[0].distance.text;
                document.getElementById('durationData').innerHTML = response.routes[0].legs[0].duration.text;
            }
            else {
                console.log(status);
            }
        });
    };
    return MapDirectionComponent;
}());
MapDirectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-direction',
        template: __webpack_require__("../../../../../src/app/map-direction/map-direction.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__location_location_component__["a" /* LocationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_location_component__["a" /* LocationComponent */]) === "function" && _b || Object])
], MapDirectionComponent);

var _a, _b;
//# sourceMappingURL=map-direction.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-direction/map-direction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runway_commonutils__ = __webpack_require__("../../../../@runway/commonutils/modules/commonutils.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runway_r6api__ = __webpack_require__("../../../../@runway/r6api/modules/r6api.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_service__ = __webpack_require__("../../../../../src/app/environment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_direction_component__ = __webpack_require__("../../../../../src/app/map-direction/map-direction.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDirectionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapDirectionModule = (function () {
    function MapDirectionModule() {
    }
    return MapDirectionModule;
}());
MapDirectionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__runway_commonutils__["a" /* CommonUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_4__runway_r6api__["a" /* R6ApiModule */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyA-tvF78Fm3NiqRIpm6JCXAiaXn251Y-Gw'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__map_direction_component__["a" /* MapDirectionComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__map_direction_component__["a" /* MapDirectionComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__runway_r6api__["a" /* R6ApiModule */], useClass: __WEBPACK_IMPORTED_MODULE_5__environment_service__["a" /* EnvironmentService */] }
        ]
    })
], MapDirectionModule);

//# sourceMappingURL=map-direction.module.js.map

/***/ }),

/***/ "../../../../../src/app/map-direction/map-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsLoader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var url = 'https://maps.googleapis.com/maps/api/js?key=' + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].googleApiKey + '&callback=initMap';
var GoogleMapsLoader = GoogleMapsLoader_1 = (function () {
    function GoogleMapsLoader() {
    }
    GoogleMapsLoader.load = function () {
        if (!GoogleMapsLoader_1.promise) {
            GoogleMapsLoader_1.promise = new Promise(function (resolve) {
                window['initMap'] = function (ev) {
                    resolve('google maps api loaded');
                    resolve(window['google']['maps']);
                };
                var node = document.createElement('script');
                node.src = url;
                node.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(node);
            });
        }
        return GoogleMapsLoader_1.promise;
    };
    return GoogleMapsLoader;
}());
GoogleMapsLoader = GoogleMapsLoader_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GoogleMapsLoader);

var GoogleMapsLoader_1;
//# sourceMappingURL=map-loader.service.js.map

/***/ }),

/***/ "../../../../../src/app/map-direction/poi.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiItem; });
var PoiItem = (function () {
    function PoiItem() {
    }
    return PoiItem;
}());

//# sourceMappingURL=poi.model.js.map

/***/ }),

/***/ "../../../../../src/app/news/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-interest\">\n    <div class=\"container pb-20\">\n        <div class=\"news-detail\">            \n            <h2 class=\"heading-color\">{{post.title}}</h2>\n            <h6 class=\"accent-font-color\">{{post.createdDate | date:'fullDate'}}</h6>\n            <div class=\"col-xs-12 featured-image\">\n                <img src=\"{{post.featuredImage}}\" class=\"img-fluid \" />\n            </div>\n            <div class=\"col-xs-12\" [innerHTML]=\"post.body\"></div>\n        </div>\n        <a href=\"news\" class=\"btn more-button button-bg-color button-font-color button-border-color\"><< RETURN TO NEWS</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_model__ = __webpack_require__("../../../../../src/app/news/news.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsDetailComponent = (function () {
    function NewsDetailComponent(cmsApiService, route) {
        this.cmsApiService = cmsApiService;
        this.route = route;
        this.post = new __WEBPACK_IMPORTED_MODULE_4__news_model__["a" /* NewsItems */];
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.newsId = params['id'];
            _this.fetchData();
        });
    };
    NewsDetailComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterNews(data);
        });
    };
    NewsDetailComponent.prototype.filterNews = function (data) {
        var _this = this;
        var items = data.find(function (item) { return (item.id === _this.newsId); });
        this.createNews(items);
    };
    NewsDetailComponent.prototype.createNews = function (item) {
        this.post = {
            id: item.id,
            parentId: item.parentId,
            createdDate: item.createDate,
            isPublised: item.isPublised,
            title: item.properties.title,
            summary: item.properties.summary,
            body: item.properties.body,
            featuredImage: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.featured_image
        };
    };
    return NewsDetailComponent;
}());
NewsDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], NewsDetailComponent);

var _a, _b;
//# sourceMappingURL=news-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body-foreground-color\">\n  <div class=\"container\">\n    <h1 class=\"page-title-color page-title-font-name page-title-font-size text-center\">Latest News</h1>\n    <p class=\"text-center\">Here you’ll find all the latest on releases and<br> new developments, as well as articles curating<br> the best of the\n      West for you and your family.</p><br>\n    <div class=\"row\" *ngFor=\"let post of news | slice:0:1\">\n      <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n        <img src=\"{{post.featuredImage}}\" class=\"img-fluid \"/>\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 ptb-80\" *ngFor=\"let post of news | slice:0:1\">\n        <h6 class=\"secondary-heading-color\">{{post.createdDate | date:'fullDate'}}</h6>\n        <h1 class=\"heading-font-color heading-font-name\">{{post.title}}</h1>\n        <p>{{post.summary}}</p>\n        <a href=\"news/{{post.id}}\" class=\"secondary-heading-color\">READ MORE >></a>\n      </div>\n    </div>\n  </div><br /><br />\n</div>\n<div class=\"news-cards-section\">\n<div class=\"container ptb-50\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let post of news | slice:1\">\n      <div class=\"card card-custom\">\n        <img class=\"card-img-top img-fluid\" src=\"{{post.featuredImage}}\" alt=\"Design\">\n        <div class=\"card-body card-body-custom\">\n          <h6 class=\"secondary-heading-color\">{{post.createdDate | date:'fullDate'}}</h6>\n          <h2 class=\"heading-font-color heading-font-name\">{{post.title}}</h2>\n          <p class=\"\">{{post.summary}}</p>\n          <a href=\"news/{{post.id}}\" class=\"secondary-heading-color\">READ MORE >></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__ = __webpack_require__("../../../../../src/app/cms-service/cms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsComponent = (function () {
    function NewsComponent(cmsApiService) {
        this.cmsApiService = cmsApiService;
        this.news = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    NewsComponent.prototype.fetchData = function () {
        var _this = this;
        return this.cmsApiService.getAllContent()
            .subscribe(function (data) {
            _this.filterNews(data);
        });
    };
    NewsComponent.prototype.filterNews = function (data) {
        var items = data.filter(function (item) { return (item.parentId === 'news'); });
        this.createNews(items);
    };
    NewsComponent.prototype.createNews = function (items) {
        var _this = this;
        items.forEach(function (item) {
            var post = {
                id: item.id,
                parentId: item.parentId,
                createdDate: item.createDate,
                isPublised: item.isPublised,
                title: item.properties.title,
                summary: item.properties.summary,
                body: item.properties.body,
                featuredImage: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].cmsMediaUrl + item.properties.featured_image
            };
            _this.news.push(post);
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__["a" /* CmsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cms_service_cms_service__["a" /* CmsApiService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItems; });
var NewsItems = (function () {
    function NewsItems() {
    }
    return NewsItems;
}());

//# sourceMappingURL=news.model.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_detail_component__ = __webpack_require__("../../../../../src/app/news/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__ = __webpack_require__("../../../../../src/app/enquiry-form/enquiry-form.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__enquiry_form_enquiry_form_module__["a" /* EnquiryFormModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_3__news_detail_component__["a" /* NewsDetailComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_3__news_detail_component__["a" /* NewsDetailComponent */]]
    })
], NewsModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ "../../../../../src/app/theme.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeDetails; });
var ThemeDetails = (function () {
    function ThemeDetails() {
    }
    return ThemeDetails;
}());

//# sourceMappingURL=theme.model.js.map

/***/ }),

/***/ "../../../../../src/app/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_model__ = __webpack_require__("../../../../../src/app/theme.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ThemeControlService = (function () {
    function ThemeControlService() {
        this.themeDetails = new __WEBPACK_IMPORTED_MODULE_1__theme_model__["a" /* ThemeDetails */];
        this.styles = '/* CSS3 syntax */';
    }
    ThemeControlService.prototype.filterItems = function (data) {
        var details = data.find(function (item) { return (item.id === 'theme'); });
        this.createDetails(details);
    };
    ThemeControlService.prototype.createDetails = function (details) {
        var theme = {
            primaryColor: details.properties.primary_color,
            secondaryColor: details.properties.secondary_color,
            accentColor: details.properties.accent_color,
            buttonColor: details.properties.button_color,
            headingColor: details.properties.heading_color,
            headingFontUrl: details.properties.heading_font_url,
            headingFontName: details.properties.heading_font_name,
            headingFontSize: details.properties.heading_font_size,
            pageTitleColor: details.properties.page_title_color,
            pageTitleFontName: details.properties.page_title_font_name,
            pageTitleFontSize: details.properties.page_title_font_size,
            secondaryHeadingColor: details.properties.secondary_heading_color,
            secondaryHeadingFontUrl: details.properties.secondary_heading_font_url,
            secondaryHeadingFontName: details.properties.secondary_heading_font_name,
            secondaryHeadingFontSize: details.properties.secondary_heading_font_size,
            bodyFontColor: details.properties.body_font_color,
            bodyFontUrl: details.properties.body_font_url,
            bodyFontName: details.properties.body_font_name,
            bodyFontSize: details.properties.body_font_size,
            secondaryFontColor: details.properties.secondary_font_color,
            secondaryFontUrl: details.properties.secondary_font_url,
            secondaryFontName: details.properties.secondary_font_name,
            secondaryFontSize: details.properties.secondary_font_size
        };
        localStorage.setItem('theme', JSON.stringify(theme));
        this.createTheme(theme);
    };
    ThemeControlService.prototype.createTheme = function (theme) {
        if (theme.primaryColor) {
            var color = theme.primaryColor;
            this.applyTheme('primary-bg-color', 'background-color', color);
            this.applyTheme('primary-font-color', 'color', color);
            this.applyTheme('primary-active', 'color', color);
        }
        if (theme.secondaryColor) {
            var color = theme.secondaryColor;
            this.applyTheme('secondary-bg-color', 'background-color', color);
            this.applyTheme('secondary-border-color', 'border-color', color);
            this.applyTheme('secondary-font-color', 'color', color);
        }
        if (theme.accentColor) {
            var color = theme.accentColor;
            this.applyTheme('accent-bg-color', 'background-color', color);
            this.applyTheme('accent-font-color', 'color', color);
            this.applyTheme('accent-border-color', 'border-color', color);
            this.applyTheme('accent-hover-menu:hover', 'border-color', color);
            this.applyTheme('accent-active-link', 'border-color', color);
        }
        if (theme.buttonColor) {
            var color = theme.buttonColor;
            this.applyTheme('button-bg-color', 'background-color', color);
            this.applyTheme('button-border-color', 'border-color', color);
        }
        if (theme.headingColor) {
            var color = theme.headingColor;
            this.applyTheme('heading-font-color', 'color', color);
        }
        if (theme.headingFontName) {
            var fontName = theme.headingFontName;
            this.getFont(fontName);
            this.applyTheme('heading-font', 'font-family', '\'' + fontName + '\'');
        }
        if (theme.headingFontSize) {
            var fontSize = theme.bodyFontSize;
            this.applyTheme('heading-font-size', 'font-size', fontSize);
        }
        if (theme.pageTitleColor) {
            var color = theme.pageTitleColor;
            this.applyTheme('page-title-font-name', 'color', color);
        }
        if (theme.pageTitleFontName) {
            var fontName = theme.pageTitleFontName;
            this.getFont(fontName);
            this.applyTheme('page-title-font-name', 'font-family', '\'' + fontName + '\'');
        }
        if (theme.pageTitleFontSize) {
            var fontSize = theme.pageTitleFontSize;
            this.applyTheme('page-title-font-size', 'font-size', fontSize);
        }
        if (theme.secondaryHeadingColor) {
            var color = theme.secondaryHeadingColor;
            this.applyTheme('secondary-heading-color', 'color', color);
        }
        if (theme.secondaryFontName) {
            var fontName = theme.secondaryFontColor;
            this.getFont(fontName);
            this.applyTheme('secondary-font-name', 'font-family', '\'' + fontName + '\', \'museo sans\'');
        }
        if (theme.secondaryFontSize) {
            var fontSize = theme.secondaryFontSize;
            this.applyTheme('secondary-font-size', 'font-size', fontSize);
        }
        if (theme.bodyFontColor) {
            var color = theme.bodyFontColor;
            this.applyTheme('body-text-color', 'color', color);
        }
        if (theme.bodyFontName) {
            var fontName = theme.bodyFontName;
            this.getFont(fontName);
            this.applyTheme('body-font', 'font-family', '\'' + fontName + '\', \'museo sans\'');
        }
        if (theme.bodyFontSize) {
            var fontSize = theme.bodyFontSize;
            this.applyTheme('body-font-size', 'size', fontSize);
        }
        if (theme.secondaryColor) {
            var color = theme.secondaryColor;
            this.applyTheme('secondary-font-color', 'color', color);
        }
        if (theme.secondaryFontSize) {
            var fontSize = theme.bodyFontSize;
            this.applyTheme('secondary-font-size', 'font-size', fontSize);
        }
        this.createStyleNode();
    };
    ThemeControlService.prototype.applyTheme = function (className, styleName, style) {
        this.styles += '.' + className + '{' + styleName + ':' + style + '!important;}';
    };
    ThemeControlService.prototype.getFont = function (font) {
        document.addEventListener('DOMContentLoaded', function (event) {
            WebFont.load({
                google: {
                    families: [font]
                }
            });
        });
    };
    ThemeControlService.prototype.createStyleNode = function () {
        var node = document.createElement('style');
        node.type = 'text/css';
        node.id = 'cms-theme';
        node.innerHTML = this.styles;
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    return ThemeControlService;
}());
ThemeControlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ThemeControlService);

//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ "../../../../../src/app/tracking-service/event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventItems; });
var EventItems = (function () {
    function EventItems() {
    }
    return EventItems;
}());

//# sourceMappingURL=event.model.js.map

/***/ }),

/***/ "../../../../../src/app/tracking-service/tracking.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingItems; });
var TrackingItems = (function () {
    function TrackingItems() {
    }
    return TrackingItems;
}());

//# sourceMappingURL=tracking.model.js.map

/***/ }),

/***/ "../../../../../src/app/tracking-service/tracking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_model__ = __webpack_require__("../../../../../src/app/tracking-service/event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tracking_model__ = __webpack_require__("../../../../../src/app/tracking-service/tracking.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TrackingService = (function () {
    function TrackingService(http, router) {
        this.http = http;
        this.router = router;
        this.initTrackingUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].trackerApi + 'initiatetrackerlog';
        this.eventTrackingUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].trackerApi + 'publisheventlogtracker';
        this.finishTrackingUrl = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].trackerApi + 'finishtrackerlog';
    }
    TrackingService.prototype.initiateTracking = function () {
        var _this = this;
        var trackingItems = new __WEBPACK_IMPORTED_MODULE_7__tracking_model__["a" /* TrackingItems */];
        return Promise.all([
            this.getIp().then(function (data) { return trackingItems.trackerip = data; }),
            this.getFingerprint().then(function (data) { return trackingItems.fingerprint = data; }),
            trackingItems.capsuleid = this.getCapsuleId(),
            trackingItems.referrer = this.getReferrer(),
            trackingItems.trackersource = this.getSource(),
            trackingItems.trackeragent = this.getUserAgent(),
            trackingItems.trackermessage = this.setTrackerMessage('Initated tracker'),
        ]).then(function (response) {
            _this.postTracking(_this.initTrackingUrl, trackingItems).subscribe(function (res) {
                if (res.trackerid) {
                    sessionStorage.setItem('trackerid', res.trackerid);
                }
            });
        }).catch(function (err) {
            throw err;
        });
    };
    TrackingService.prototype.eventTracking = function (event, reference, productId, productType) {
        var _this = this;
        var eventItems = new __WEBPACK_IMPORTED_MODULE_6__event_model__["a" /* EventItems */];
        return Promise.all([
            eventItems.trackerid = this.getTrackerId(),
            eventItems.productreference = this.getReference(reference),
            eventItems.capsuleid = this.getCapsuleId(),
            eventItems.productid = this.getProductId(productId),
            eventItems.producttype = this.getProductType(productType),
            eventItems.eventname = this.setTrackerMessage(event),
        ]).then(function (response) {
            _this.postTracking(_this.eventTrackingUrl, eventItems).subscribe(function (res) {
                return res;
            });
        });
    };
    TrackingService.prototype.stopTracking = function () {
        var trackerid = this.getTrackerId();
        this.http.get(this.finishTrackingUrl + '?trackerId=' + trackerid).map(function (res) {
            return res;
        }).subscribe();
        sessionStorage.removeItem('trackerid');
    };
    TrackingService.prototype.getCapsuleId = function () {
        return __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].capsuleId;
    };
    TrackingService.prototype.getFingerprint = function () {
        return new Promise(function (resolve) {
            new Fingerprint2().get(function (result) {
                resolve(result);
            });
        }).then(function (response) {
            return response;
        });
    };
    TrackingService.prototype.getCurrentTime = function () {
        var now = new Date();
        return new Date(now).toISOString();
    };
    TrackingService.prototype.getReferrer = function () {
        return document.referrer;
    };
    TrackingService.prototype.getIp = function () {
        var url = 'https://ipapi.co/json/';
        return fetch(url)
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            return data.ip;
        })
            .catch(function (err) {
            throw err;
        });
    };
    TrackingService.prototype.getProductId = function (productId) {
        if (productId) {
            return productId;
        }
        return '';
    };
    TrackingService.prototype.getProductType = function (productType) {
        if (productType) {
            return productType;
        }
        return '';
    };
    TrackingService.prototype.getUserAgent = function () {
        return navigator.userAgent;
    };
    TrackingService.prototype.getSource = function () {
        return window.location.href;
    };
    TrackingService.prototype.getReference = function (reference) {
        if (reference) {
            return reference;
        }
        return '';
    };
    TrackingService.prototype.setTrackerMessage = function (event) {
        var message = '';
        if (event) {
            message = event + ' on page ' + window.location.href;
        }
        else {
            message = 'Viewed Page ' + window.location.href;
        }
        return message;
    };
    TrackingService.prototype.getTrackerId = function () {
        return sessionStorage.getItem('trackerid');
    };
    TrackingService.prototype.buildRequestHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]({
            'Content-Type': 'application/json',
            'x-api-key': __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].trackerKey
        });
        return headers;
    };
    TrackingService.prototype.postTracking = function (url, data) {
        var headers = this.buildRequestHeader();
        return this.http.post(url, data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleErrorObservable);
    };
    TrackingService.prototype.handleErrorObservable = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    return TrackingService;
}());
TrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object])
], TrackingService);

var _a, _b;
//# sourceMappingURL=tracking.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    envName: 'Dev',
    r6apiServiceUrl: 'https://r6api.runway.com.au/runwaywsrest',
    r6AuthApiKey: 'Basic cGlwZWxpbmUyd3M6VzNsY29tZSEyMw==',
    r6SecurityToken: '7234845757733604734801867255404686401526795397963',
    estateCpId: '2561372347301514558242426488451487051523529309438',
    googleApiKey: 'AIzaSyAqc_q_0GJxWrygadMsy3Mj--SDl-FLBFs',
    masterplanUrl: {
        '0S1K56203G5I228D0U9D667P6N6T': 'https://propertiesaws.masterplans.com.au/masterplan-sokdev/published/'
    },
    globalFormUrl: 'http://propertiesaws.runway.com.au/actions/form/globalformaction.jsp',
    pollingIntervalForApi: 30000,
    // Page Sizes
    pageSizeForHomeList: 10,
    pageSizeForHandlList: 10,
    pageSizeForLandList: 10,
    // Cms Config
    cmsApiUrl: 'http://13.54.15.51/api/e2767894704e47b8d1b7/staging/content',
    cmsMediaUrl: 'http://13.54.15.51/media/e2767894704e47b8d1b7/staging/',
    cmsToken: '38781ada5c803c86506c30c202784817676d489e',
    // Tracking Config
    capsuleId: '7764565',
    trackerApi: 'https://jos1eygaik.execute-api.ap-southeast-2.amazonaws.com/live/',
    trackerKey: '0CmmBaaTCr3thPCAEQ4rf3oHaS8cB8lw9rnKjQLx'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map