"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 7886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




const PlaceCard = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-e4904fdeed6c899a" + " " + "place-card-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: props.link,
                        rel: "noopener noreferrer dofollow",
                        className: "jsx-e4904fdeed6c899a",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            alt: props.imageAlt,
                            src: props.image,
                            className: "jsx-e4904fdeed6c899a" + " " + "place-card-image"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-e4904fdeed6c899a" + " " + "place-card-container1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: props.link,
                                rel: "nofollow",
                                className: "jsx-e4904fdeed6c899a",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-e4904fdeed6c899a" + " " + "place-card-text",
                                    children: props.title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-e4904fdeed6c899a" + " " + "place-card-text1",
                                children: props.description
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e4904fdeed6c899a",
                children: ".place-card-container.jsx-e4904fdeed6c899a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;max-width:300px;margin:0 auto}.place-card-image.jsx-e4904fdeed6c899a{width:100%;height:auto;-webkit-border-top-left-radius:var(--dl-radius-radius-radius8);-moz-border-radius-topleft:var(--dl-radius-radius-radius8);border-top-left-radius:var(--dl-radius-radius-radius8);-webkit-border-top-right-radius:var(--dl-radius-radius-radius8);-moz-border-radius-topright:var(--dl-radius-radius-radius8);border-top-right-radius:var(--dl-radius-radius-radius8)}.place-card-container1.jsx-e4904fdeed6c899a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:var(--dl-space-space-unit)}.place-card-text.jsx-e4904fdeed6c899a{font-size:22px;font-style:normal;font-weight:700;padding-bottom:var(--dl-space-space-halfunit)}.place-card-text1.jsx-e4904fdeed6c899a{font-size:12px;margin-bottom:var(--dl-space-space-doubleunit)}@media(min-width:768px){.place-card-container.jsx-e4904fdeed6c899a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media(min-width:1200px){.place-card-container.jsx-e4904fdeed6c899a{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.place-card-container1.jsx-e4904fdeed6c899a{margin-left:var(--dl-space-space-unit)}}"
            })
        ]
    });
};
PlaceCard.defaultProps = {
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000",
    imageAlt: "image",
    title: "Title Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
};
PlaceCard.propTypes = {
    ID: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    image: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    imageAlt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    category: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    link: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceCard);


/***/ })

};
;