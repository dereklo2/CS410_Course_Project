(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 543:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1IwEk",
	"logo": "Footer_logo__Gk619"
};


/***/ }),

/***/ 298:
/***/ ((module) => {

// Exports
module.exports = {
	"head": "Header_head__UmTtN"
};


/***/ }),

/***/ 54:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(543);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/index.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
            href: "https://github.com/ibnzUK/next-chrome-starter",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Footer V.0.0.1",
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: (Footer_module_default()).logo,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "icons/icon16.png",
                        alt: "Logo",
                        width: 16,
                        height: 16
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(298);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/index.js


function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
            className: (Header_module_default()).head,
            children: "Header / Menu / Navigation"
        })
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(54)));
module.exports = __webpack_exports__;

})();