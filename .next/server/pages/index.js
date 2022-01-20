(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/core/Button.tsx":
/*!************************************!*\
  !*** ./components/core/Button.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\core\\Button.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Styled <button> component for the patient facing product
 */


const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => {
  const {
    asLink,
    children,
    buttonType,
    className,
    disabled,
    hidden,
    outline,
    processing
  } = props,
        otherProps = _objectWithoutProperties(props, ["asLink", "children", "buttonType", "className", "disabled", "hidden", "outline", "processing"]);

  const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()("items-center justify-center p-3", "rounded outline-none focus:outline-none", {
    flex: !hidden,
    hidden: hidden,
    disabled: disabled // "bg-red-400": !buttonType,

  }, !outline ? {
    "text-white shadow bg-darkGray hover:bg-darkGray-800 active:bg-darkGray-800": !disabled && buttonType === "cta",
    "text-white shadow bg-coral hover:bg-coral-500 active:bg-coral-500": !disabled && buttonType === "primary" || !buttonType,
    "text-darkGray bg-transparent text-darkGray border border-solid border-darkGray hover:bg-darkGray hover:text-white rounded-full": buttonType === "header",
    "bg-gray-300 hover:bg-gray-300": disabled
  } : {
    "border border-coral text-coral hover:bg-coral hover:text-white": true
  }, className);

  if (asLink) {
    return (
      /*#__PURE__*/
      // @ts-ignore
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread(_objectSpread({
        className: buttonClass
      }, otherProps), {}, {
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 7
      }, undefined)
    );
  }

  return (
    /*#__PURE__*/
    // @ts-ignore
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", _objectSpread(_objectSpread({
      className: buttonClass,
      disabled: disabled
    }, otherProps), {}, {
      children: [children, processing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        className: "animate-spin ml-2 h-5 w-5 text-white",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined) : null]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }, undefined)
  );
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/landing/CTAButton.tsx":
/*!******************************************!*\
  !*** ./components/landing/CTAButton.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\CTAButton.tsx";

/**
 * Call to action button for landing page
 */




const CTAButton = ({
  className,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/onboarding/intro/start",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex items-center text-center rounded-full bg-teal hover:bg-teal-400 uppercase text-white text-sm font-bold p-2", className),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-center ml-auto",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-auto rounded-full flex items-center justify-center bg-seashell p-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            d: "M9.78009 0.982666L8.60321 2.15955L15.9447 9.52906L0.445312 9.445V11.1263L15.9727 11.2103L8.77133 18.3837L9.94822 19.5886L19.1671 10.3697L9.78009 0.982666Z",
            fill: "#374146"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CTAButton);

/***/ }),

/***/ "./components/landing/EmergencyBar.tsx":
/*!*********************************************!*\
  !*** ./components/landing/EmergencyBar.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\EmergencyBar.tsx";

/**
 * Shows numbers to call/dial in case of an emergency for landing
 */


const EmergencyBar = ({
  data
}) => {
  const {
    phoneNumberText,
    phoneNumberBelowText,
    tollFreeNumber,
    tollFreeNumberBelowText
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-1 space-y-8 md:grid-cols-2 md:space-y-0",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/distress.svg",
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-4 max-w-xs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-3xl mb-6",
          children: phoneNumberText ? phoneNumberText : '741-741'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: phoneNumberBelowText ? phoneNumberBelowText : 'If you&apos;re in emotional distress, text HOME to connect with a counselor immediately.'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/emergency.svg",
        className: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-4 max-w-xs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text-3xl mb-6",
          children: tollFreeNumber ? tollFreeNumber : '911'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: tollFreeNumberBelowText ? tollFreeNumberBelowText : 'If you&apos;re having a medical or mental health emergency, call 911 or go to your local ER.'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmergencyBar);

/***/ }),

/***/ "./components/landing/FAQ.tsx":
/*!************************************!*\
  !*** ./components/landing/FAQ.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "@contentful/rich-text-react-renderer");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FAQItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FAQItem */ "./components/landing/FAQItem.tsx");
/* harmony import */ var _core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Button */ "./components/core/Button.tsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.ts");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\FAQ.tsx";

/**
 * Component used to display FAQ on landing page and FAQ page.
 * Dynamically pulls list of states operated in from backend
 */









const FAQ = ({
  faq,
  title,
  showButton = true
}) => {
  const {
    0: states,
    1: setStates
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__.getStates)().then(setStates);
  }, []);
  const stateList = states.map(s => s.name);
  const stateEnding = stateList.slice(0, -1).join(", ") + " and " + stateList[stateList.length - 1];
  const StyledFaq = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
width:100%;
display: flex;
flex-direction:column;
justify-content:center;
.ansclass-3{
  display: flex;
  flex-direction: column;
  justify-content:start;
  & > p{
    margin-bottom:15px;
  }
}
.ansclass-5{
  display: flex;
  flex-direction: column;
  justify-content:start;
  & > p{
    margin-bottom:10px;
  }
  & > h4{
    margin-bottom:10px;
    font-weight: 700;
  }
}
.ansclass-6{
  display: flex;
  flex-direction: column;
  justify-content:start;  
  & > p{
    margin-bottom:10px;
  }
}
`;

  const answeredRendered = (ans, index) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledFaq, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `ansclass-${index + 1}`,
        children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_4__.documentToReactComponents)(ans)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col justify-center items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-3xl md:text-4xl text-center md:text-left mb-16",
      children: title ? title : "FAQs"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "w-full space-y-8",
      children: faq.map(({
        fields
      }, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FAQItem__WEBPACK_IMPORTED_MODULE_5__.default, {
          title: fields.question,
          children: answeredRendered(fields.faqanswer, index)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), showButton ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/faq",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        asLink: true,
        href: "#",
        buttonType: "secondary",
        className: "mt-8 w-full md:w-max text-center border border-darkGray border-1 hover:bg-darkGray hover:text-white",
        children: "Get answers to other questions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./components/landing/FAQItem.tsx":
/*!****************************************!*\
  !*** ./components/landing/FAQItem.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\FAQItem.tsx";

/**
 * Individual question/answer in the FAQ
 */



const FAQItem = ({
  title,
  children
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "border-b border-darkGray pb-2 flex flex-col justify-between items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "w-full flex items-center text-left focus:outline-none",
      onClick: () => setOpen(!open),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-lg font-light",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "ml-auto",
        children: open ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          className: "w-6 h-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1,
            d: "M20 12H4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          className: "w-6 h-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1,
            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
      show: open,
      className: "py-4",
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FAQItem);

/***/ }),

/***/ "./components/landing/Footer.tsx":
/*!***************************************!*\
  !*** ./components/landing/Footer.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LegitscriptSeal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LegitscriptSeal */ "./components/landing/LegitscriptSeal.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/landing/Logo.tsx");
/* harmony import */ var _svg_SocialMedia_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/SocialMedia/Facebook */ "./components/svg/SocialMedia/Facebook.tsx");
/* harmony import */ var _svg_SocialMedia_Instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/SocialMedia/Instagram */ "./components/svg/SocialMedia/Instagram.tsx");
/* harmony import */ var _svg_SocialMedia_LinkedIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../svg/SocialMedia/LinkedIn */ "./components/svg/SocialMedia/LinkedIn.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Footer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Footer for landing page
 */








const SocialMediaLink = ({
  href,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
  target: "_blank",
  rel: "noreferrer",
  className: "w-6",
  href: href,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

const FooterItem = (_ref) => {
  let {
    href,
    children,
    external = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children", "external"]);

  const link = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", _objectSpread(_objectSpread({
    className: "border-b border-current hover:border-none",
    href: external ? href : undefined
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: external ? link : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: href,
      children: link
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 10
  }, undefined);
};

const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    id: "footer",
    className: "px-6 py-12 md:py-28 flex justify-center bg-seashell",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container grid grid-cols-1 md:grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LegitscriptSeal__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-8 md:mt-0 p-4 md:p-0 grid grid-cols-1 md:grid-cols-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "text-sm mb-4 lg:mb-8 flex flex-col gap-y-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "/terms-of-service",
            children: "Terms of Service"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "/privacy-policy",
            children: "Privacy Policy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "mailto:press@hellolina.com",
            external: true,
            children: "Press Inquiries"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "https://boards.greenhouse.io/lina",
            target: "_blank",
            external: true,
            children: "Careers"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "/refer-friend",
            children: "Refer a Friend"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "/blog",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "flex flex-col text-sm gap-y-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "mailto:support@hellolina.com",
            external: true,
            children: "support@hellolina.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterItem, {
            href: "/faq",
            children: "FAQ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: "9am-5pm EST, M-F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "flex pt-3 gap-x-3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialMediaLink, {
              href: "https://www.instagram.com/linamentalhealth/?hl=en",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_SocialMedia_Instagram__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialMediaLink, {
              href: "https://www.linkedin.com/company/hellolina/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_SocialMedia_LinkedIn__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialMediaLink, {
              href: "https://www.facebook.com/people/Lina/100068077291395/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_SocialMedia_Facebook__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "text-xs mt-8",
          children: "\xA9 2021 Lina, a B&G Innovations company. All rights reserved."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/landing/Header.tsx":
/*!***************************************!*\
  !*** ./components/landing/Header.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/landing/Logo.tsx");
/* harmony import */ var _core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Button */ "./components/core/Button.tsx");


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Header.tsx";

/**
 * Header for landing page
 */








const Header = ({
  title,
  startOffer,
  startColor,
  hideMenu
}) => {
  const {
    0: showOffer,
    1: setShowOffer
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!!startOffer);
  const {
    0: showSidebar,
    1: setShowSidebar
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isTop,
    1: setIsTop
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);

  const onScroll = () => {
    setIsTop(window.pageYOffset < 32);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleClose = () => setShowSidebar(false);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("w-full flex flex-col items-center justify-center fixed top-0 left-0 z-50 transition-colors duration-500", {
        "shadow-md": !isTop
      }, isTop ? startColor || "bg-seashell" : "bg-white"),
      children: [showOffer ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "z-50 t-0 bg-darkGray text-white h-8 w-full flex items-center justify-center text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/onboarding/intro/start",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "underline hover:no-underline mx-auto",
            children: startOffer
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => setShowOffer(false),
          className: "mr-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1,
              d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "flex container items-center px-6 md:px-0 py-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "flex items-center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("ml-auto md:hidden", hideMenu ? "hidden" : ""),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: () => setShowSidebar(true),
            className: "flex items-center py-2 px-3 text-coral rounded",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6 text-darkGray",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "hidden lg:flex lg:items-center lg:w-auto lg:space-x-8 ml-auto mr-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden lg:flex",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
                href: "#",
                asLink: true,
                buttonType: "secondary",
                className: "text-darkGray hover:underline",
                children: "Log In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/onboarding/intro/start",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
                buttonType: "header",
                className: "ml-2 uppercase text-sm px-4",
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {
      show: showSidebar,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
        enter: "transition-opacity ease-linear duration-100",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition-opacity ease-linear duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "fixed inset-0 bg-blueGray-800 opacity-25",
          onClick: () => setShowSidebar(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
        enter: "transition-all ease-linear duration-300",
        enterFrom: "-ml-64",
        enterTo: "ml-0",
        leave: "transition-all ease-linear duration-50",
        leaveTo: "-ml-64",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: "py-3 px-6 border-r top-0 w-96 bg-white fixed h-full overflow-auto z-50 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center mb-8 ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => setShowSidebar(false),
              className: "ml-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                className: "h-6 w-6 cursor-pointer hover:text-blueGray-500",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "hidden",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block p-4 text-sm",
                  href: "/#get_treatment",
                  onClick: toggleClose,
                  children: "Get Treatment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block p-4 text-sm",
                  href: "/#care_process",
                  onClick: toggleClose,
                  children: "Care Process"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block p-4 text-sm",
                  href: "/#pricing",
                  onClick: toggleClose,
                  children: "Pricing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "mb-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "block p-4 text-sm",
                  href: "/#faq",
                  onClick: toggleClose,
                  children: "FAQ"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mt-4 pt-6 border-t border-blueGray-100",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/onboarding/intro/start",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
                  asLink: true,
                  children: "Get Started"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
                  asLink: true,
                  buttonType: "secondary",
                  className: "text-coral mt-2 border",
                  children: "Log In"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), showOffer ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-16 bg-seashell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-8 bg-seashell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(showOffer ? "mt-8" : undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/landing/LandingTemplate.tsx":
/*!************************************************!*\
  !*** ./components/landing/LandingTemplate.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_offer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hooks/offer */ "./lib/hooks/offer.ts");
/* harmony import */ var _lib_hooks_utm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/hooks/utm */ "./lib/hooks/utm.ts");
/* harmony import */ var _EmergencyBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmergencyBar */ "./components/landing/EmergencyBar.tsx");
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FAQ */ "./components/landing/FAQ.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/landing/Footer.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./components/landing/Header.tsx");
/* harmony import */ var _MedicalTeam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MedicalTeam */ "./components/landing/MedicalTeam.tsx");
/* harmony import */ var _NewCareProcess__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NewCareProcess */ "./components/landing/NewCareProcess.tsx");
/* harmony import */ var _Pricing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pricing */ "./components/landing/Pricing.tsx");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Section */ "./components/landing/Section.tsx");
/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Testimonials */ "./components/landing/Testimonials.tsx");
/* harmony import */ var _WhatWeTreat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WhatWeTreat */ "./components/landing/WhatWeTreat.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\LandingTemplate.tsx";

/**
 * Wrapper component used to provide template for the landing page.
 * Use this to create multiple variations of the landing page with
 * the same structure.
 */














const LandingTemplate = ({
  data,
  children
}) => {
  console.log('All data', data);
  const {
    faq,
    page
  } = data;
  const {
    fields
  } = page;
  const {
    careProcessHeading,
    careProcess,
    testimonialsHeading,
    testimonials,
    anxietyAndDepressionHeading,
    anxietyAndDepressionShortDescription,
    depressionListItems,
    teamHeading,
    teamList,
    heroSectionImage
  } = fields;
  console.log('Titlte', careProcessHeading);
  (0,_lib_hooks_utm__WEBPACK_IMPORTED_MODULE_3__.useUtm)();
  const {
    offerText
  } = (0,_lib_hooks_offer__WEBPACK_IMPORTED_MODULE_2__.useOffer)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
      title: "Lina",
      startOffer: offerText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "desc",
      className: "flex justify-center bg-seashell relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container grid grid-cols-1 md:grid-cols-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative mt-8 md:mt-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/ctabg.svg",
            width: "400",
            className: "ml-auto",
            style: {
              right: "4px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            width: "340",
            src: heroSectionImage.fields.file.url,
            className: "heroimage rounded-full absolute top-0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "care_process",
      className: "flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewCareProcess__WEBPACK_IMPORTED_MODULE_9__.default, {
          heading: careProcessHeading,
          data: careProcess
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "testimonials",
      className: "flex justify-center bg-seashell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Testimonials__WEBPACK_IMPORTED_MODULE_12__.default, {
          heading: testimonialsHeading,
          data: testimonials
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "what_we_treat",
      className: "flex justify-center bg-seashell",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WhatWeTreat__WEBPACK_IMPORTED_MODULE_13__.default, {
          heading: anxietyAndDepressionHeading,
          subText: anxietyAndDepressionShortDescription,
          data: depressionListItems
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "medical_team",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MedicalTeam__WEBPACK_IMPORTED_MODULE_8__.default, {
        heading: teamHeading,
        data: teamList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "pricing",
      className: "bg-seashell",
      noPadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pricing__WEBPACK_IMPORTED_MODULE_10__.default, {
        data: fields
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "faq",
      className: "flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FAQ__WEBPACK_IMPORTED_MODULE_5__.default, {
          faq: faq
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_11__.default, {
      id: "emergency",
      className: "flex justify-center",
      style: {
        backgroundColor: "rgba(244, 218, 213, 0.6)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EmergencyBar__WEBPACK_IMPORTED_MODULE_4__.default, {
          data: fields
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LandingTemplate);

/***/ }),

/***/ "./components/landing/LegitscriptSeal.tsx":
/*!************************************************!*\
  !*** ./components/landing/LegitscriptSeal.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\LegitscriptSeal.tsx";

/**
 * Displays the legit script seal with an <img>
 */


const LegitscriptSeal = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "https://legitscript.com/pharmacy/hellolina.com",
    target: "_blank",
    title: "Verify LegitScript Approval",
    rel: "noreferrer",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://static.legitscript.com/seals/10768692.png",
      alt: "LegitScript approved",
      width: "140",
      height: "100"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LegitscriptSeal);

/***/ }),

/***/ "./components/landing/Logo.tsx":
/*!*************************************!*\
  !*** ./components/landing/Logo.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Logo.tsx";

/**
 * Lina logo as an SVG
 */


const Logo = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "96",
    height: "24",
    viewBox: "5 0 50 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      r: "5.49671",
      transform: "matrix(-1 0 0 1 8.02234 5.79923)",
      fill: "#FF877A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      r: "2.52551",
      transform: "matrix(-1 0 0 1 2.52575 14.3453)",
      fill: "#FF877A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M18.4585 0V15.6582H20.3162V0H18.4585Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M23.6435 4.51168V15.6582H25.5013V4.51168H23.6435ZM23.1791 1.41543C23.1791 2.18949 23.7762 2.78662 24.5724 2.78662C25.3686 2.78662 25.9657 2.18949 25.9657 1.41543C25.9657 0.61925 25.3686 0 24.5724 0C23.7762 0 23.1791 0.61925 23.1791 1.41543Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M37.6292 7.80697C37.6292 5.59536 36.3906 4.33475 34.356 4.33475C32.8078 4.33475 31.4809 5.13093 30.6626 6.56847V4.51168H28.8048V15.6582H30.6626V10.9917C30.6626 7.89543 32.1886 6.01557 33.8473 6.01557C35.0858 6.01557 35.7714 6.76751 35.7714 8.29352V15.6582H37.6292V7.80697Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M42.4373 12.4513C42.4373 11.1907 43.4989 10.483 45.4009 10.483H47.3913V10.7484C47.3913 13.2696 45.7105 14.1543 44.273 14.1543C43.1008 14.1543 42.4373 13.5129 42.4373 12.4513ZM49.2491 8.5368C49.2491 5.57325 47.4134 4.33475 44.9586 4.33475C42.8575 4.33475 41.3094 5.5069 40.9998 7.38676L42.6364 7.76274C42.8796 6.65693 43.8085 6.01557 44.9586 6.01557C46.3076 6.01557 47.3913 6.59059 47.3913 8.31564V8.80219H45.5778C42.5258 8.80219 40.5353 10.0628 40.5353 12.4513C40.5353 14.8399 42.1277 15.8351 43.9854 15.8351C45.6442 15.8351 46.7721 15.1053 47.4798 14.0879L47.7894 15.6582H49.2491V8.5368Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/landing/MedicalTeam.tsx":
/*!********************************************!*\
  !*** ./components/landing/MedicalTeam.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "@contentful/rich-text-react-renderer");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\MedicalTeam.tsx";

/**
 * Component displaying Dr. Patel and Dr. Patil
 * TODO: Can include more people + a link to everyone
 */



const PractitionerCard = ({
  title,
  name,
  imageUrl,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-white border solid shadow-lg rounded-lg p-8 max-w-md md:max-w-lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-16 w-16 mr-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "rounded-full border b-2",
          src: imageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "font-bold text-xl",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-blue-400",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

const MedicalTeam = ({
  heading,
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-3xl md:text-4xl text-center mb-8",
        children: heading ? heading : 'Your medical team'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8",
      children: data && data.map(({
        fields
      }, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PractitionerCard, {
          name: fields.name,
          title: fields.title,
          imageUrl: fields.profileImage.fields.file.url,
          children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__.documentToReactComponents)(fields.description)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MedicalTeam);

/***/ }),

/***/ "./components/landing/NewCareProcess.tsx":
/*!***********************************************!*\
  !*** ./components/landing/NewCareProcess.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\NewCareProcess.tsx";

/**
 * Shows the steps for the care process. "new" prefix is
 * a relic of when we had two options
 */


const StepNumber = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "border border-coral-300 inline-flex items-center justify-center  w-14 h-14 md:w-16 md:h-16 bg-seashell rounded-full text-coral text-xl font-bold",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

const Line = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bg-coral h-12",
      style: {
        width: "2px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

const NewCareProcess = ({
  heading,
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-1 md:grid-cols-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-3xl md:text-4xl text-center md:text-left mb-8",
      children: heading ? heading : 'Our care process'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-2 gap-y-2 md:gap-y-4 gap-x-1 mb-20 md:mb-0",
        children: [data && data.map(({
          fields
        }, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StepNumber, {
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "h-12 flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "font-bold",
                children: fields.careProcessName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-sm",
                children: fields.careProcessDescription
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, undefined), data.length != index + 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 44
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, undefined)]
          }, void 0, true);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-1 md:grid-cols-2 mx-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-3xl md:text-4xl text-center md:text-left",
        children: "Our care process"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:-mt-8 grid grid-cols-2 space-y-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center  items-center px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/images/assessment.svg",
          className: "mr-4 mt-12"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-xs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-xl mb-4",
          children: "Personalized Assessments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "opacity-70",
          children: "In 10 minutes, we'll get to know you and suggest a provider that fits your unique needs."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/images/appointment.svg",
          className: "mr-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-xs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-xl mb-4",
          children: "Convenient Appointments"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "opacity-70",
          children: "Meet with a clinician from the comfort of your home."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/images/prescription.svg",
          className: "mr-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-xs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-xl mb-4",
          children: "Free Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "opacity-70",
          children: "FREE medicine delivery in 2-3 business days."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewCareProcess);

/***/ }),

/***/ "./components/landing/Pricing.tsx":
/*!****************************************!*\
  !*** ./components/landing/Pricing.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "../node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CTAButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CTAButton */ "./components/landing/CTAButton.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Pricing.tsx";

/**
 * Component to display pricing on the landing page
 */




const Checkmark = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ml-4 md:ml-0 mr-4 flex-shrink-0",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.84799 13.1968L15.6924 1.51835L14.0627 0.28418L6.44555 10.3421L1.93885 7.13624L0.753906 8.80196L6.84799 13.1968Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

const Pricing = ({
  data
}) => {
  const {
    affordablePlansHeading,
    startingAsLowHeadingText,
    startingAsLowBelowText,
    pringHeightPoints,
    insuranceAcceptedText,
    insuranceAcceptedBelowText
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-1 md:py-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "md:hidden z-10 absolute t-0 h-full w-full bg-black opacity-30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "z-30 block md:hidden absolute t-0 h-full w-full text-center text-white text-3xl md:text-4xl mb-12",
        style: {
          top: "45%",
          bottom: "50%"
        },
        children: "It's time to be yourself again."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-96 md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/images/pricing_image_3.jpeg",
          layout: "fill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-4 md:px-10 py-12 md:py-4 md:max-w-xl flex flex-col justify-center mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-center text-3xl md:text-4xl mb-8",
        children: affordablePlansHeading ? affordablePlansHeading : 'Affordable plans to help you feel better'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-2xl text-center mb-2 font-bold",
        children: startingAsLowHeadingText ? startingAsLowHeadingText : 'Starting as low as <s>$95</s> $5 for your first month.'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center text-sm mb-10",
        children: startingAsLowBelowText ? startingAsLowBelowText : 'Just $95 a month after that.'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "flex flex-col gap-y-2 mb-8 w-full mx-auto md:w-4/5",
        children: pringHeightPoints && pringHeightPoints.map(({
          fields
        }, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkmark, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined), fields.item]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CTAButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: "w-72 md:w-full mx-auto",
        children: "Start free assessment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-8 font-bold text-center",
        children: insuranceAcceptedText ? insuranceAcceptedText : 'Insurance accepted, but not needed.'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-center",
        children: insuranceAcceptedBelowText ? insuranceAcceptedBelowText : 'Easy out of network claims. HSA/FSA eligible. Medications eligible for insurance coverage are billed separately.'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./components/landing/Section.tsx":
/*!****************************************!*\
  !*** ./components/landing/Section.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Section.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Used to denoate a section on the landing page
 */



const Section = (_ref) => {
  let {
    children,
    className,
    noPadding
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "noPadding"]);

  const combinedClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(!noPadding ? "py-12 md:py-28 px-6" : "", className);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", _objectSpread(_objectSpread({
    className: combinedClass
  }, otherProps), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/landing/SharpStars.tsx":
/*!*******************************************!*\
  !*** ./components/landing/SharpStars.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\SharpStars.tsx";

/**
 * SVG displaying 5 pointed stars on the landing page
 */


const SharpStars = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "128",
    height: "21",
    viewBox: "0 0 128 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.1892 0.719791C11.0994 0.724152 11.0131 0.755698 10.9416 0.810267C10.8702 0.864835 10.817 0.939844 10.7891 1.02533L8.56326 7.70368H1.43465C1.34142 7.70398 1.25065 7.73366 1.17525 7.78851C1.09986 7.84336 1.04367 7.92057 1.01467 8.00919C0.985671 8.09781 0.98534 8.19331 1.01372 8.28212C1.04211 8.37094 1.09776 8.44854 1.17278 8.50391L6.96296 12.7379L4.73709 19.649C4.70812 19.7382 4.70817 19.8343 4.73725 19.9235C4.76632 20.0127 4.82292 20.0904 4.89891 20.1453C4.9749 20.2003 5.06635 20.2298 5.16014 20.2295C5.25392 20.2292 5.3452 20.1992 5.42085 20.1437L11.211 15.9098L17.0012 20.1437C17.0769 20.1992 17.1682 20.2292 17.2619 20.2295C17.3557 20.2298 17.4472 20.2003 17.5232 20.1453C17.5992 20.0904 17.6558 20.0127 17.6848 19.9235C17.7139 19.8343 17.714 19.7382 17.685 19.649L15.4591 12.7379L21.2493 8.50391C21.3243 8.44854 21.38 8.37094 21.4083 8.28212C21.4367 8.19331 21.4364 8.09781 21.4074 8.00919C21.3784 7.92057 21.3222 7.84336 21.2468 7.78851C21.1714 7.73366 21.0807 7.70398 20.9874 7.70368H13.8588L11.6329 1.02533C11.6028 0.932745 11.543 0.85266 11.4628 0.797438C11.3826 0.742216 11.2865 0.714932 11.1892 0.719791Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M64.1912 0.719791C64.1014 0.724152 64.015 0.755698 63.9436 0.810267C63.8721 0.864835 63.8189 0.939844 63.7911 1.02533L61.5652 7.70368H54.4366C54.3434 7.70398 54.2526 7.73366 54.1772 7.78851C54.1018 7.84336 54.0456 7.92057 54.0166 8.00919C53.9876 8.09781 53.9873 8.19331 54.0157 8.28212C54.0441 8.37094 54.0997 8.44854 54.1747 8.50391L59.9649 12.7379L57.739 19.649C57.7101 19.7382 57.7101 19.8343 57.7392 19.9235C57.7683 20.0127 57.8249 20.0904 57.9009 20.1453C57.9768 20.2003 58.0683 20.2298 58.1621 20.2295C58.2559 20.2292 58.3472 20.1992 58.4228 20.1437L64.213 15.9098L70.0032 20.1437C70.0788 20.1992 70.1701 20.2292 70.2639 20.2295C70.3577 20.2298 70.4491 20.2003 70.5251 20.1453C70.6011 20.0904 70.6577 20.0127 70.6868 19.9235C70.7159 19.8343 70.7159 19.7382 70.6869 19.649L68.4611 12.7379L74.2513 8.50391C74.3263 8.44854 74.3819 8.37094 74.4103 8.28212C74.4387 8.19331 74.4384 8.09781 74.4094 8.00919C74.3804 7.92057 74.3242 7.84336 74.2488 7.78851C74.1734 7.73366 74.0826 7.70398 73.9894 7.70368H66.8608L64.6349 1.02533C64.6047 0.932745 64.5449 0.85266 64.4647 0.797438C64.3846 0.742216 64.2884 0.714932 64.1912 0.719791Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M37.6902 0.719791C37.6004 0.724152 37.514 0.755698 37.4426 0.810267C37.3711 0.864835 37.318 0.939844 37.2901 1.02533L35.0642 7.70368H27.9356C27.8424 7.70398 27.7516 7.73366 27.6762 7.78851C27.6008 7.84336 27.5446 7.92057 27.5156 8.00919C27.4866 8.09781 27.4863 8.19331 27.5147 8.28212C27.5431 8.37094 27.5987 8.44854 27.6738 8.50391L33.4639 12.7379L31.2381 19.649C31.2091 19.7382 31.2091 19.8343 31.2382 19.9235C31.2673 20.0127 31.3239 20.0904 31.3999 20.1453C31.4759 20.2003 31.5673 20.2298 31.6611 20.2295C31.7549 20.2292 31.8462 20.1992 31.9218 20.1437L37.712 15.9098L43.5022 20.1437C43.5779 20.1992 43.6691 20.2292 43.7629 20.2295C43.8567 20.2298 43.9482 20.2003 44.0241 20.1453C44.1001 20.0904 44.1567 20.0127 44.1858 19.9235C44.2149 19.8343 44.2149 19.7382 44.186 19.649L41.9601 12.7379L47.7503 8.50391C47.8253 8.44854 47.8809 8.37094 47.9093 8.28212C47.9377 8.19331 47.9374 8.09781 47.9084 8.00919C47.8794 7.92057 47.8232 7.84336 47.7478 7.78851C47.6724 7.73366 47.5816 7.70398 47.4884 7.70368H40.3598L38.1339 1.02533C38.1038 0.932745 38.044 0.85266 37.9638 0.797438C37.8836 0.742216 37.7874 0.714932 37.6902 0.719791Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M90.6926 0.719791C90.6028 0.724152 90.5165 0.755698 90.445 0.810267C90.3736 0.864835 90.3204 0.939844 90.2926 1.02533L88.0667 7.70368H80.9381C80.8448 7.70398 80.7541 7.73366 80.6787 7.78851C80.6033 7.84336 80.5471 7.92057 80.5181 8.00919C80.4891 8.09781 80.4888 8.19331 80.5171 8.28212C80.5455 8.37094 80.6012 8.44854 80.6762 8.50391L86.4664 12.7379L84.2405 19.649C84.2115 19.7382 84.2116 19.8343 84.2407 19.9235C84.2697 20.0127 84.3263 20.0904 84.4023 20.1453C84.4783 20.2003 84.5698 20.2298 84.6636 20.2295C84.7573 20.2292 84.8486 20.1992 84.9243 20.1437L90.7145 15.9098L96.5046 20.1437C96.5803 20.1992 96.6716 20.2292 96.7654 20.2295C96.8591 20.2298 96.9506 20.2003 97.0266 20.1453C97.1026 20.0904 97.1592 20.0127 97.1882 19.9235C97.2173 19.8343 97.2174 19.7382 97.1884 19.649L94.9625 12.7379L100.753 8.50391C100.828 8.44854 100.883 8.37094 100.912 8.28212C100.94 8.19331 100.94 8.09781 100.911 8.00919C100.882 7.92057 100.826 7.84336 100.75 7.78851C100.675 7.73366 100.584 7.70398 100.491 7.70368H93.3622L91.1364 1.02533C91.1062 0.932745 91.0464 0.85266 90.9662 0.797438C90.886 0.742216 90.7899 0.714932 90.6926 0.719791Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M117.194 0.719791C117.104 0.724152 117.017 0.755698 116.946 0.810267C116.875 0.864835 116.821 0.939844 116.794 1.02533L114.568 7.70368H107.439C107.346 7.70398 107.255 7.73366 107.18 7.78851C107.104 7.84336 107.048 7.92057 107.019 8.00919C106.99 8.09781 106.99 8.19331 107.018 8.28212C107.047 8.37094 107.102 8.44854 107.177 8.50391L112.967 12.7379L110.741 19.649C110.713 19.7382 110.713 19.8343 110.742 19.9235C110.771 20.0127 110.827 20.0904 110.903 20.1453C110.979 20.2003 111.071 20.2298 111.165 20.2295C111.258 20.2292 111.35 20.1992 111.425 20.1437L117.215 15.9098L123.006 20.1437C123.081 20.1992 123.173 20.2292 123.266 20.2295C123.36 20.2298 123.452 20.2003 123.528 20.1453C123.604 20.0904 123.66 20.0127 123.689 19.9235C123.718 19.8343 123.718 19.7382 123.689 19.649L121.464 12.7379L127.254 8.50391C127.329 8.44854 127.384 8.37094 127.413 8.28212C127.441 8.19331 127.441 8.09781 127.412 8.00919C127.383 7.92057 127.327 7.84336 127.251 7.78851C127.176 7.73366 127.085 7.70398 126.992 7.70368H119.863L117.637 1.02533C117.607 0.932745 117.547 0.85266 117.467 0.797438C117.387 0.742216 117.291 0.714932 117.194 0.719791Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SharpStars);

/***/ }),

/***/ "./components/landing/Testimonials.tsx":
/*!*********************************************!*\
  !*** ./components/landing/Testimonials.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SharpStars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharpStars */ "./components/landing/SharpStars.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\Testimonials.tsx";

/**
 * Shows testimonials on the landing page
 */



const Testimonial = ({
  title,
  children,
  style
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-8 max-w-sm mb-4 w-full md:w-96 flex-shrink-0",
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm font-bold mb-8",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "leading-relaxed mb-8",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SharpStars__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

const testimonials = [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {
  title: "Patient from Miami",
  style: {
    backgroundColor: "rgba(77, 188, 195, 0.1)"
  },
  children: "My provider was kind and considerate. He asked me a lot of questions to get to the root of my feelings. The medication shipment was also super convenient for me. I'm so glad I was able to quickly book an appointment with Lina."
}, "testimonial-2", false, {
  fileName: _jsxFileName,
  lineNumber: 27,
  columnNumber: 3
}, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {
  title: "Patient from Pensacola",
  style: {
    backgroundColor: "rgba(255, 217, 208, 0.7)"
  },
  children: "I was able to book an appointment with Dr. P within a day. He was understanding, straightforward, and caring. He answered all my questions and made me feel confident about my treatment. It's been a great experience so far."
}, "testimonial-3", false, {
  fileName: _jsxFileName,
  lineNumber: 39,
  columnNumber: 3
}, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {
  title: "Patient from Tampa Bay",
  style: {
    backgroundColor: "rgba(77, 188, 195, 0.1)"
  },
  children: "Telehealth is so important, it enables people to get care with an actual person over video. Sometimes we can't physically get to a doctor's office, but now Lina offers something for everyone who can't do in-person. Thanks for creating this platform!"
}, "testimonial-1", false, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined)];

const Testimonials = ({
  heading,
  data
}) => {
  console.log('Heading inside', data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col md:flex-row",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:w-1/3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-3xl md:text-4xl text-center md:text-left mb-8",
        children: heading ? heading : 'Life changing results from real members'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex flex-col justify-center md:justify-start md:flex-row overflow-auto md:space-x-4",
      children: data && data.map(({
        fields
      }, index) => {
        if (index % 2 == 0) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {
            title: fields.clientName,
            style: {
              backgroundColor: "rgba(77, 188, 195, 0.1)"
            },
            children: fields.testimonial
          }, `testimonial-${index + 1}`, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 19
          }, undefined);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {
            title: fields.clientName,
            style: {
              backgroundColor: "rgba(255, 217, 208, 0.7)"
            },
            children: fields.testimonial
          }, `testimonial-${index + 1}`, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 19
          }, undefined);
        }
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./components/landing/WhatWeTreat.tsx":
/*!********************************************!*\
  !*** ./components/landing/WhatWeTreat.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\landing\\WhatWeTreat.tsx";

/**
 * Shows list of conditions treated.
 * unused?
 */


const Checkmark = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "16",
    height: "14",
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ml-4 md:ml-0 mr-4 flex-shrink-0 text-darkGray",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.84799 13.1968L15.6924 1.51835L14.0627 0.28418L6.44555 10.3421L1.93885 7.13624L0.753906 8.80196L6.84799 13.1968Z",
      fill: "#374146"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

const TreatmentItem = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkmark, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

const WhatWeTreat = ({
  heading,
  subText,
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col md:flex-row",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full md:w-1/3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-3xl md:text-4xl text-center md:text-left mb-8",
        children: heading ? heading : 'Anxiety and depression come in many forms'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center md:text-left",
        children: subText ? subText : 'That&apos;s why we specialize in treating the full spectrum of related conditions with personalized treatment plans that are right for you.'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "mt-8 md:mt-0 grid grid-cols-2 mx-auto gap-x-4 gap-y-4 text-sm md:text-md",
      children: data && data.map(({
        fields
      }, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TreatmentItem, {
          children: fields.depressionItem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WhatWeTreat);

/***/ }),

/***/ "./components/svg/SocialMedia/Facebook.tsx":
/*!*************************************************!*\
  !*** ./components/svg/SocialMedia/Facebook.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\svg\\SocialMedia\\Facebook.tsx";


const Facebook = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    d: "M512 257.555c0-141.385-114.615-256-256-256S0 116.17 0 257.555c0 127.777 93.616 233.685 216 252.89v-178.89h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281c-31.801 0-41.719 19.733-41.719 39.978v48.022h71l-11.35 74H296v178.89c122.385-19.205 216-125.113 216-252.89z",
    fillRule: "nonzero",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "./components/svg/SocialMedia/Instagram.tsx":
/*!**************************************************!*\
  !*** ./components/svg/SocialMedia/Instagram.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\svg\\SocialMedia\\Instagram.tsx";


const Instagram = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  viewBox: "0 0 600 600",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
    fillRule: "nonzero",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M300 44c-69.526 0-78.244.295-105.549 1.54-27.248 1.244-45.858 5.571-62.142 11.9-16.834 6.542-31.11 15.296-45.342 29.528-14.232 14.231-22.986 28.508-29.528 45.342-6.329 16.283-10.656 34.893-11.9 62.141C44.295 221.756 44 230.474 44 300c0 69.524.294 78.242 1.54 105.547 1.243 27.248 5.57 45.858 11.9 62.141 6.541 16.834 15.295 31.11 29.527 45.344 14.231 14.231 28.508 22.985 45.342 29.527 16.284 6.328 34.894 10.656 62.142 11.899 27.305 1.245 36.023 1.54 105.549 1.54 69.524 0 78.242-.295 105.547-1.54 27.248-1.243 45.858-5.571 62.141-11.899 16.834-6.542 31.11-15.296 45.344-29.527 14.231-14.233 22.985-28.51 29.527-45.344 6.328-16.283 10.656-34.893 11.899-62.14 1.245-27.306 1.54-36.024 1.54-105.548 0-69.526-.295-78.244-1.54-105.549-1.243-27.248-5.571-45.858-11.899-62.141-6.542-16.834-15.296-31.11-29.527-45.342-14.233-14.232-28.51-22.986-45.344-29.528-16.283-6.329-34.893-10.656-62.14-11.9C378.241 44.296 369.523 44 300 44zm0 46.127c68.354 0 76.45.26 103.445 1.492 24.96 1.139 38.514 5.31 47.535 8.814 11.95 4.644 20.477 10.192 29.435 19.15 8.959 8.958 14.506 17.487 19.15 29.435 3.506 9.02 7.676 22.576 8.815 47.535 1.231 26.995 1.492 35.092 1.492 103.447 0 68.354-.26 76.45-1.492 103.445-1.139 24.96-5.31 38.514-8.815 47.535-4.644 11.95-10.191 20.477-19.15 29.435-8.958 8.959-17.486 14.506-29.435 19.15-9.02 3.506-22.576 7.676-47.535 8.814-26.99 1.232-35.086 1.493-103.445 1.493-68.36 0-76.455-.26-103.447-1.493-24.96-1.138-38.514-5.308-47.535-8.814-11.95-4.644-20.477-10.191-29.436-19.15-8.958-8.958-14.506-17.486-19.149-29.435-3.506-9.02-7.676-22.576-8.815-47.535-1.232-26.994-1.492-35.091-1.492-103.445 0-68.355.26-76.452 1.492-103.447 1.139-24.96 5.31-38.514 8.815-47.535 4.643-11.948 10.191-20.477 19.15-29.435 8.958-8.958 17.486-14.506 29.435-19.15 9.02-3.505 22.576-7.675 47.535-8.814 26.995-1.232 35.092-1.492 103.447-1.492z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M300 385.332c-47.13 0-85.334-38.205-85.334-85.332 0-47.13 38.205-85.334 85.334-85.334 47.127 0 85.332 38.205 85.332 85.334 0 47.127-38.205 85.332-85.332 85.332zm0-216.792c-72.604 0-131.46 58.856-131.46 131.46 0 72.602 58.856 131.458 131.46 131.458 72.602 0 131.458-58.856 131.458-131.458 0-72.604-58.856-131.46-131.458-131.46zM467.372 163.346c0 16.967-13.754 30.72-30.72 30.72s-30.72-13.753-30.72-30.72c0-16.966 13.754-30.719 30.72-30.719s30.72 13.753 30.72 30.72z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ }),

/***/ "./components/svg/SocialMedia/LinkedIn.tsx":
/*!*************************************************!*\
  !*** ./components/svg/SocialMedia/LinkedIn.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\components\\svg\\SocialMedia\\LinkedIn.tsx";


const LinkedIn = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
    d: "M473.305-1.353c20.88 0 37.885 16.533 37.885 36.926v438.251c0 20.393-17.005 36.954-37.885 36.954H36.846c-20.839 0-37.773-16.561-37.773-36.954V35.573c0-20.393 16.934-36.926 37.773-36.926h436.459zm-37.829 436.389V301.002c0-65.822-14.212-116.427-91.12-116.427-36.955 0-61.739 20.263-71.867 39.476h-1.04V190.64h-72.811v244.396h75.866V314.158c0-31.883 6.031-62.773 45.554-62.773 38.981 0 39.468 36.461 39.468 64.802v118.849h75.95zM150.987 190.64H74.953v244.396h76.034V190.64zM112.99 69.151c-24.395 0-44.066 19.735-44.066 44.047 0 24.318 19.671 44.052 44.066 44.052 24.299 0 44.026-19.734 44.026-44.052 0-24.312-19.727-44.047-44.026-44.047z",
    fillRule: "nonzero",
    fill: "currentColor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (LinkedIn);

/***/ }),

/***/ "./context/AppContext.tsx":
/*!********************************!*\
  !*** ./context/AppContext.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContextProvider": function() { return /* binding */ AppContextProvider; },
/* harmony export */   "useAppContext": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\context\\AppContext.tsx";

/**
 * The primary context used in our frontend, which is done during onboarding.
 * Once a user signs up we can rely more on server state.
 */
 // This should be switched to useReducer or recoil.js at this point

// @ts-ignore
const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AppContextProvider = ({
  children
}) => {
  const {
    0: selectedTimeSlot,
    1: setSelectedTimeSlot
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: residenceState,
    1: setResidenceState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: discountCode,
    1: setDiscountCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: intakeId,
    1: setIntakeId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: firstName,
    1: setFirstName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: lastName,
    1: setLastName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: zipCode,
    1: setZipCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: currentQuestionIdx,
    1: setCurrentQuestionIdx
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: answers,
    1: setAnswers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: birthdate,
    1: setBirthdate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
  const {
    0: notification,
    1: setNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: initialParams,
    1: setInitialParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: bookingContext,
    1: setBookingContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    slotId: "",
    slotDate: new Date()
  });
  const state = {
    onboarding: {
      selectedTimeSlot,
      setSelectedTimeSlot,
      email,
      setEmail,
      residenceState,
      setResidenceState,
      intakeId,
      setIntakeId,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      phone,
      setPhone,
      zipCode,
      setZipCode,
      currentQuestionIdx,
      setCurrentQuestionIdx,
      answers,
      setAnswers,
      birthdate,
      setBirthdate,
      notification,
      setNotification,
      error,
      setError
    },
    booking: bookingContext,
    setBookingContext: setBookingContext,
    discountCode,
    setDiscountCode,
    initialParams,
    setInitialParams
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 10
  }, undefined);
};
function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
}

/***/ }),

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStates": function() { return /* binding */ getStates; },
/* harmony export */   "register": function() { return /* binding */ register; },
/* harmony export */   "submitQuiz": function() { return /* binding */ submitQuiz; },
/* harmony export */   "submitCheckin": function() { return /* binding */ submitCheckin; },
/* harmony export */   "getProgressHistory": function() { return /* binding */ getProgressHistory; },
/* harmony export */   "checkState": function() { return /* binding */ checkState; },
/* harmony export */   "checkZip": function() { return /* binding */ checkZip; },
/* harmony export */   "joinWaitlist": function() { return /* binding */ joinWaitlist; },
/* harmony export */   "getAvailability": function() { return /* binding */ getAvailability; },
/* harmony export */   "getStripeClientSecret": function() { return /* binding */ getStripeClientSecret; },
/* harmony export */   "confirmPayment": function() { return /* binding */ confirmPayment; },
/* harmony export */   "updatePaymentMethod": function() { return /* binding */ updatePaymentMethod; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "superuser": function() { return /* binding */ superuser; },
/* harmony export */   "loginAs": function() { return /* binding */ loginAs; },
/* harmony export */   "bookAppointment": function() { return /* binding */ bookAppointment; },
/* harmony export */   "getUpcomingAppointment": function() { return /* binding */ getUpcomingAppointment; },
/* harmony export */   "getPreviousAppointments": function() { return /* binding */ getPreviousAppointments; },
/* harmony export */   "getProfile": function() { return /* binding */ getProfile; },
/* harmony export */   "updateEmail": function() { return /* binding */ updateEmail; },
/* harmony export */   "updateAddress": function() { return /* binding */ updateAddress; },
/* harmony export */   "updatePhone": function() { return /* binding */ updatePhone; },
/* harmony export */   "updateDob": function() { return /* binding */ updateDob; },
/* harmony export */   "updateEmergencyContact": function() { return /* binding */ updateEmergencyContact; },
/* harmony export */   "forgotPassword": function() { return /* binding */ forgotPassword; },
/* harmony export */   "resetPassword": function() { return /* binding */ resetPassword; },
/* harmony export */   "checkIntake": function() { return /* binding */ checkIntake; },
/* harmony export */   "getOnboardingStatus": function() { return /* binding */ getOnboardingStatus; },
/* harmony export */   "verifyId": function() { return /* binding */ verifyId; },
/* harmony export */   "createNewThread": function() { return /* binding */ createNewThread; },
/* harmony export */   "getThread": function() { return /* binding */ getThread; },
/* harmony export */   "postMessage": function() { return /* binding */ postMessage; },
/* harmony export */   "getInbox": function() { return /* binding */ getInbox; },
/* harmony export */   "getUnreadMessageCount": function() { return /* binding */ getUnreadMessageCount; },
/* harmony export */   "submitMedicalIntake": function() { return /* binding */ submitMedicalIntake; },
/* harmony export */   "submitReferral": function() { return /* binding */ submitReferral; },
/* harmony export */   "getReferralCode": function() { return /* binding */ getReferralCode; },
/* harmony export */   "submitStartIntake": function() { return /* binding */ submitStartIntake; },
/* harmony export */   "getPrescriptions": function() { return /* binding */ getPrescriptions; },
/* harmony export */   "getVideoToken": function() { return /* binding */ getVideoToken; },
/* harmony export */   "getPharmacies": function() { return /* binding */ getPharmacies; },
/* harmony export */   "setPharmacy": function() { return /* binding */ setPharmacy; },
/* harmony export */   "getPharmacy": function() { return /* binding */ getPharmacy; },
/* harmony export */   "addPrimaryCarePhysicianInfo": function() { return /* binding */ addPrimaryCarePhysicianInfo; },
/* harmony export */   "addExternalTherapistInfo": function() { return /* binding */ addExternalTherapistInfo; },
/* harmony export */   "markOnboardingComplete": function() { return /* binding */ markOnboardingComplete; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./lib/util.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * All API calls utilized by the patient facing product.
 */



const getUrl = endpoint => {
  if (window.location.href.indexOf("https://hgstaging.ngrok.io") > -1) {
    return `https://hgapi.ngrok.io${endpoint}`;
  }

  const baseUrl = localStorage.getItem("base_url") || process.env.NEXT_PUBLIC_HG_BASE_API_URL;
  return `${baseUrl}${endpoint}`;
};

const AUTH_TOKEN_KEY = "auth_token";

class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);

    _defineProperty(this, "statusCode", void 0);

    this.statusCode = statusCode;
  }

}

const apiFetch = async (method, url, body) => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get(AUTH_TOKEN_KEY);
  const headers = {
    "Content-Type": "application/json"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(getUrl(url), {
    headers,
    method,
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await response.json();

  if (!response.ok) {
    throw new ApiError(json.error || response.statusText, response.status);
  }

  return json;
};

const fileUpload = async (url, body) => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get(AUTH_TOKEN_KEY);
  const headers = {
    Authorization: `Bearer ${token}`
  };
  const method = "POST";
  return fetch(getUrl(url), {
    headers,
    method,
    body
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};

const get = async (endpoint, params) => {
  // @ts-ignore
  const paramString = new URLSearchParams(params).toString();
  const url = paramString.length > 0 ? `${endpoint}?${paramString}` : endpoint;
  return await apiFetch("GET", url, undefined);
};

const post = async (url, request) => {
  return await apiFetch("POST", url, request);
};

const getStates = async () => {
  return await get("/api/states").then(r => r.states).then(states => states.sort((a, b) => a.name.localeCompare(b.name)));
};
const register = async (registration) => {
  const {
    consent
  } = registration,
        body = _objectWithoutProperties(registration, ["consent"]);

  return await post("/api/signup", registration).then(r => r.token);
};
const submitQuiz = async quiz => {
  return await post("/api/submit_quiz", {
    answers: quiz
  }).then(r => r.id);
};
const submitCheckin = async responses => {
  return await post("/api/patient/submit_checkin", {
    responses
  });
};
const getProgressHistory = async historyType => {
  return await get("/api/patient/progress_history", {
    historyType
  });
};
const checkState = async state => {
  return await post("/api/patient/check_state", {
    state
  }).then(r => r.available);
};
const checkZip = async zip => {
  return await get("/api/check_zip", {
    zip
  }).then(r => r.available);
};
const joinWaitlist = async (email, state) => {
  return await post("/api/join_waitlist", {
    email,
    state
  });
};
const getAvailability = async () => {
  return await get("/api/patient/availability");
};
const getStripeClientSecret = async promotionCode => {
  return await get("/api/patient/payment_setup", {
    promotionCode
  }).then(r => r.clientSecret);
};
const confirmPayment = async paymentIntentId => {
  return await post("/api/patient/confirm_payment", {
    paymentIntentId
  });
};
const updatePaymentMethod = async paymentMethodId => {
  return await post("/api/patient/update_payment_method", {
    paymentMethodId
  });
};
const login = async (email, password) => {
  return await post("/api/login", {
    email,
    password
  }).then(r => r.token);
};
const superuser = async password => {
  return await post("/api/superuser", {
    password
  }).then(r => r.token);
};
const loginAs = async email => {
  return await post("/api/login_as", {
    email
  }).then(r => r.token);
};
const bookAppointment = async slotId => {
  return await post("/api/patient/schedule_appointment", {
    slotId
  });
};
const getUpcomingAppointment = async () => {
  return await get("/api/patient/upcoming_appointment");
};
const getPreviousAppointments = async () => {
  return await get("/api/patient/previous_appointments").then(r => r.previousAppointments);
};
const getProfile = async () => {
  return await get("/api/patient/me");
};
const updateEmail = async email => {
  return await post("/api/patient/update_email", {
    email
  });
};
const updateAddress = async (address, isOnboarding = false) => {
  return await post("/api/patient/update_address", _objectSpread(_objectSpread({}, address), {}, {
    isOnboarding
  }));
};
const updatePhone = async phone => {
  return await post("/api/patient/update_phone", {
    phone
  });
};
const updateDob = async date => {
  return await post("/api/patient/update_birthdate", {
    birthdate: (0,_util__WEBPACK_IMPORTED_MODULE_1__.normalizeDateToUTC)(date)
  });
};
const updateEmergencyContact = async (params) => {
  return await post("/api/patient/emergency_contact", params);
};
const forgotPassword = async email => {
  return await post("/api/forgot_password", {
    email
  });
};
const resetPassword = async (token, password) => {
  return await post("/api/reset_password", {
    token,
    password
  });
};
const checkIntake = async intakeId => {
  return await get(`/api/check_intake?id=${intakeId}`);
};
const getOnboardingStatus = async () => {
  return await get("/api/patient/status");
};
const verifyId = async inquiryId => {
  return await post("/api/patient/verify_id", {
    inquiryId
  });
};
const createNewThread = async params => {
  return await post("/api/create_thread", params);
};
const getThread = async threadId => {
  return get(`/api/thread/${threadId}`);
};
const postMessage = async (threadId, content) => {
  return post(`/api/thread/${threadId}`, {
    content
  });
};
const getInbox = async () => {
  return get("/api/messages");
};
const getUnreadMessageCount = async () => {
  return get("/api/messages/unread").then(r => r.unreadMessages);
};
const submitMedicalIntake = async answers => {
  return await post("/api/patient/update_intake", {
    answers
  });
};
const submitReferral = async referral => {
  return await post("/api/refer_patient", referral);
};
const getReferralCode = async (name, email) => {
  return await post("/api/referral_code", {
    name,
    email
  }).then(r => r.code);
};
const submitStartIntake = async (params) => {
  return await post("/api/start_intake", params);
};
const getPrescriptions = async () => {
  return await get("/api/patient/prescriptions").then(r => r.prescriptions);
};
const getVideoToken = async identity => {
  return await get("/api/video/token", {
    identity
  }).then(r => r.token);
};
const getPharmacies = async (params) => {
  return await get("/api/patient/pharmacies", params).then(r => r.pharmacies);
};
const setPharmacy = async pharmacyId => {
  return await post("/api/patient/pharmacy", {
    pharmacyId
  });
};
const getPharmacy = async () => {
  return await get("/api/patient/pharmacy");
};
const addPrimaryCarePhysicianInfo = async (name, phone, email, allowSharing) => {
  return await post("/api/patient/update_pcp", {
    name,
    phone,
    email,
    allowSharing
  });
};
const addExternalTherapistInfo = async (name, phone, email, allowSharing) => {
  return await post("/api/patient/update_therapist", {
    name,
    phone,
    email,
    allowSharing
  });
};
const markOnboardingComplete = async () => {
  return await post("/api/patient/onboarding_complete", {});
};

/***/ }),

/***/ "./lib/hooks/offer.ts":
/*!****************************!*\
  !*** ./lib/hooks/offer.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOffer": function() { return /* binding */ useOffer; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ "./context/AppContext.tsx");
/**
 * React hook used to set a discount code in the application context
 * based on the current page URL.
 */



const useOffer = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    discountCode,
    setDiscountCode
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys(router.query).length > 0) {
      const {
        offer
      } = router.query;

      if (offer) {
        setDiscountCode(offer);
      }
    }
  }, [router.query]);
  const offerText = "Start your first month for just $5";
  return {
    discountCode,
    offerText
  };
};

/***/ }),

/***/ "./lib/hooks/utm.ts":
/*!**************************!*\
  !*** ./lib/hooks/utm.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUtm": function() { return /* binding */ useUtm; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/AppContext */ "./context/AppContext.tsx");
/**
 * React hook used to set UTM parameters in the application context
 * based on the current page URL. Used to track conversions / event
 * attribution on the server.
 */



const useUtm = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    initialParams,
    setInitialParams
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useAppContext)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (initialParams !== null && initialParams !== void 0 && initialParams.utmSource) {
      return;
    }

    if (Object.keys(router.query).length > 0) {
      const {
        ref: referralCode
      } = router.query;

      if (!referralCode) {
        const {
          utm_source,
          utm_medium,
          utm_campaign,
          utm_content,
          utm_term,
          term
        } = router.query;
        setInitialParams({
          utmSource: utm_source,
          utmMedium: utm_medium,
          utmCampaign: utm_campaign,
          utmContent: utm_content,
          utmTerm: utm_term || term,
          rawUrl: router.asPath
        });
      } else {
        setInitialParams({
          utmSource: "user_referral",
          utmMedium: "copy_link",
          utmCampaign: "refer_friend_page",
          utmContent: referralCode
        });
      }
    }
  }, [router.query]);
};

/***/ }),

/***/ "./lib/util.tsx":
/*!**********************!*\
  !*** ./lib/util.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailIsValid": function() { return /* binding */ emailIsValid; },
/* harmony export */   "getOrdinalNum": function() { return /* binding */ getOrdinalNum; },
/* harmony export */   "dateToTimeString": function() { return /* binding */ dateToTimeString; },
/* harmony export */   "dayWithOrdinal": function() { return /* binding */ dayWithOrdinal; },
/* harmony export */   "getDayName": function() { return /* binding */ getDayName; },
/* harmony export */   "getMonthName": function() { return /* binding */ getMonthName; },
/* harmony export */   "formatPhoneNumber": function() { return /* binding */ formatPhoneNumber; },
/* harmony export */   "capitalize": function() { return /* binding */ capitalize; },
/* harmony export */   "getTimezoneAbbreviation": function() { return /* binding */ getTimezoneAbbreviation; },
/* harmony export */   "getTimezoneName": function() { return /* binding */ getTimezoneName; },
/* harmony export */   "normalizeDateToUTC": function() { return /* binding */ normalizeDateToUTC; }
/* harmony export */ });
/**
 * simple utility functions
 */
const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const getOrdinalNum = n => {
  return n + (n > 0 ? ["th", "st", "nd", "rd"][n > 3 && n < 21 || n % 10 > 3 ? 0 : n % 10] : "");
};
const dateToTimeString = date => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric" // timeZoneName: Intl.DateTimeFormat().resolvedOptions().timeZone,

  });
};
const dayWithOrdinal = date => {
  return `${getOrdinalNum(date.getDate())}`;
};
const getDayName = date => {
  return date.toLocaleDateString("default", {
    weekday: "long"
  });
};
const getMonthName = date => {
  return date.toLocaleString("default", {
    month: "long"
  });
};
const formatPhoneNumber = phone => phone.replace(/\D+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
const capitalize = s => (s.charAt(0).toUpperCase() + s.slice(1)).trim();
const getTimezoneAbbreviation = () => new Date().toLocaleTimeString("en-us", {
  timeZoneName: "short"
}).split(" ")[2];
const getTimezoneName = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
const normalizeDateToUTC = date => {
  const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getUTCDate());
  return new Date(utcDate).toISOString();
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_landing_CTAButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/landing/CTAButton */ "./components/landing/CTAButton.tsx");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contentful */ "contentful");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_landing_LandingTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/landing/LandingTemplate */ "./components/landing/LandingTemplate.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\pages\\index.tsx";

/**
 * Landing page
 */




const client = (0,contentful__WEBPACK_IMPORTED_MODULE_3__.createClient)({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

const HomeIndex = props => {
  const {
    page
  } = props;
  const {
    fields
  } = page;
  const {
    heroSectionHeading,
    heroSectionContent,
    heroSectionButtonBelowText
  } = fields;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landing_LandingTemplate__WEBPACK_IMPORTED_MODULE_4__.default, {
    data: props,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-3xl md:text-4xl mb-4 md:mb-8",
      children: heroSectionHeading ? heroSectionHeading : 'Mental healthcare without the wait. Finally.'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "font-light leading-relaxed mb-4 md:mb-8",
      children: heroSectionContent ? heroSectionContent : 'Online psychiatry and medication for depression and anxiety. Prescribed responsibly, provided affordably, with support from a team of providers.'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_landing_CTAButton__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: "Start free assessment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-sm mt-2 text-center font-light",
      children: heroSectionButtonBelowText ? heroSectionButtonBelowText : 'Book online in 10 minutes.'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "faq",
    order: 'sys.createdAt'
  });
  const {
    items
  } = await client.getEntries({
    content_type: 'home',
    'fields.slug': 'home'
  });
  return {
    props: {
      faq: res.items,
      page: items[0]
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (HomeIndex);

/***/ }),

/***/ "../node_modules/next/dist/client/image.js":
/*!*************************************************!*\
  !*** ../node_modules/next/dist/client/image.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!********************************************************************!*\
  !*** ../node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
/*!*****************************************************************!*\
  !*** ../node_modules/next/dist/client/request-idle-callback.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../node_modules/next/dist/client/route-loader.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/route-loader.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/use-intersection.js":
/*!************************************************************!*\
  !*** ../node_modules/next/dist/client/use-intersection.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "../node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "../node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?9d88"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!************************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "../node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "../node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "../node_modules/next/image.js":
/*!*************************************!*\
  !*** ../node_modules/next/image.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "../node_modules/next/dist/client/image.js")


/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!***************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \***************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!**************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@contentful/rich-text-react-renderer":
/*!*******************************************************!*\
  !*** external "@contentful/rich-text-react-renderer" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@contentful/rich-text-react-renderer");;

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@headlessui/react");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("contentful");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?9d88":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvY29yZS9CdXR0b24udHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL0NUQUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb21wb25lbnRzL2xhbmRpbmcvRW1lcmdlbmN5QmFyLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9GQVEudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL0ZBUUl0ZW0udHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb21wb25lbnRzL2xhbmRpbmcvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9MYW5kaW5nVGVtcGxhdGUudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL0xlZ2l0c2NyaXB0U2VhbC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb21wb25lbnRzL2xhbmRpbmcvTG9nby50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb21wb25lbnRzL2xhbmRpbmcvTWVkaWNhbFRlYW0udHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL05ld0NhcmVQcm9jZXNzLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9QcmljaW5nLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9TZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9TaGFycFN0YXJzLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbGFuZGluZy9UZXN0aW1vbmlhbHMudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYW5kaW5nL1doYXRXZVRyZWF0LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvc3ZnL1NvY2lhbE1lZGlhL0ZhY2Vib29rLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvc3ZnL1NvY2lhbE1lZGlhL0luc3RhZ3JhbS50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb21wb25lbnRzL3N2Zy9Tb2NpYWxNZWRpYS9MaW5rZWRJbi50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9jb250ZXh0L0FwcENvbnRleHQudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vbGliL2FwaS50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2xpYi9ob29rcy9vZmZlci50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2xpYi9ob29rcy91dG0udHMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9saWIvdXRpbC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXJcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcIkBoZWFkbGVzc3VpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9pZ25vcmVkfEY6XFxOZXh0anMtUHJvamVjdHNcXGhlYWx0aGdlbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJSZWFjdCIsInByb3BzIiwicmVmIiwiYXNMaW5rIiwiY2hpbGRyZW4iLCJidXR0b25UeXBlIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJoaWRkZW4iLCJvdXRsaW5lIiwicHJvY2Vzc2luZyIsIm90aGVyUHJvcHMiLCJidXR0b25DbGFzcyIsImN4IiwiZmxleCIsIkNUQUJ1dHRvbiIsIkVtZXJnZW5jeUJhciIsImRhdGEiLCJwaG9uZU51bWJlclRleHQiLCJwaG9uZU51bWJlckJlbG93VGV4dCIsInRvbGxGcmVlTnVtYmVyIiwidG9sbEZyZWVOdW1iZXJCZWxvd1RleHQiLCJGQVEiLCJmYXEiLCJ0aXRsZSIsInNob3dCdXR0b24iLCJzdGF0ZXMiLCJzZXRTdGF0ZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFN0YXRlcyIsInRoZW4iLCJzdGF0ZUxpc3QiLCJtYXAiLCJzIiwibmFtZSIsInN0YXRlRW5kaW5nIiwic2xpY2UiLCJqb2luIiwibGVuZ3RoIiwiU3R5bGVkRmFxIiwic3R5bGVkIiwiYW5zd2VyZWRSZW5kZXJlZCIsImFucyIsImluZGV4IiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyIsImZpZWxkcyIsInF1ZXN0aW9uIiwiZmFxYW5zd2VyIiwiRkFRSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwiU29jaWFsTWVkaWFMaW5rIiwiaHJlZiIsIkZvb3Rlckl0ZW0iLCJleHRlcm5hbCIsImxpbmsiLCJ1bmRlZmluZWQiLCJGb290ZXIiLCJIZWFkZXIiLCJzdGFydE9mZmVyIiwic3RhcnRDb2xvciIsImhpZGVNZW51Iiwic2hvd09mZmVyIiwic2V0U2hvd09mZmVyIiwic2hvd1NpZGViYXIiLCJzZXRTaG93U2lkZWJhciIsImlzVG9wIiwic2V0SXNUb3AiLCJvblNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVDbG9zZSIsIkxhbmRpbmdUZW1wbGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIiwiY2FyZVByb2Nlc3NIZWFkaW5nIiwiY2FyZVByb2Nlc3MiLCJ0ZXN0aW1vbmlhbHNIZWFkaW5nIiwidGVzdGltb25pYWxzIiwiYW54aWV0eUFuZERlcHJlc3Npb25IZWFkaW5nIiwiYW54aWV0eUFuZERlcHJlc3Npb25TaG9ydERlc2NyaXB0aW9uIiwiZGVwcmVzc2lvbkxpc3RJdGVtcyIsInRlYW1IZWFkaW5nIiwidGVhbUxpc3QiLCJoZXJvU2VjdGlvbkltYWdlIiwidXNlVXRtIiwib2ZmZXJUZXh0IiwidXNlT2ZmZXIiLCJyaWdodCIsImZpbGUiLCJ1cmwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJMZWdpdHNjcmlwdFNlYWwiLCJMb2dvIiwiUHJhY3RpdGlvbmVyQ2FyZCIsImltYWdlVXJsIiwiTWVkaWNhbFRlYW0iLCJoZWFkaW5nIiwicHJvZmlsZUltYWdlIiwiZGVzY3JpcHRpb24iLCJTdGVwTnVtYmVyIiwiTGluZSIsIndpZHRoIiwiTmV3Q2FyZVByb2Nlc3MiLCJjYXJlUHJvY2Vzc05hbWUiLCJjYXJlUHJvY2Vzc0Rlc2NyaXB0aW9uIiwiQ2hlY2ttYXJrIiwiUHJpY2luZyIsImFmZm9yZGFibGVQbGFuc0hlYWRpbmciLCJzdGFydGluZ0FzTG93SGVhZGluZ1RleHQiLCJzdGFydGluZ0FzTG93QmVsb3dUZXh0IiwicHJpbmdIZWlnaHRQb2ludHMiLCJpbnN1cmFuY2VBY2NlcHRlZFRleHQiLCJpbnN1cmFuY2VBY2NlcHRlZEJlbG93VGV4dCIsInRvcCIsImJvdHRvbSIsIml0ZW0iLCJTZWN0aW9uIiwibm9QYWRkaW5nIiwiY29tYmluZWRDbGFzcyIsIlNoYXJwU3RhcnMiLCJUZXN0aW1vbmlhbCIsInN0eWxlIiwiVGVzdGltb25pYWxzIiwiY2xpZW50TmFtZSIsInRlc3RpbW9uaWFsIiwiVHJlYXRtZW50SXRlbSIsIldoYXRXZVRyZWF0Iiwic3ViVGV4dCIsImRlcHJlc3Npb25JdGVtIiwiRmFjZWJvb2siLCJJbnN0YWdyYW0iLCJMaW5rZWRJbiIsIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwQ29udGV4dFByb3ZpZGVyIiwic2VsZWN0ZWRUaW1lU2xvdCIsInNldFNlbGVjdGVkVGltZVNsb3QiLCJlbWFpbCIsInNldEVtYWlsIiwicmVzaWRlbmNlU3RhdGUiLCJzZXRSZXNpZGVuY2VTdGF0ZSIsImRpc2NvdW50Q29kZSIsInNldERpc2NvdW50Q29kZSIsImludGFrZUlkIiwic2V0SW50YWtlSWQiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsInppcENvZGUiLCJzZXRaaXBDb2RlIiwiY3VycmVudFF1ZXN0aW9uSWR4Iiwic2V0Q3VycmVudFF1ZXN0aW9uSWR4IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJiaXJ0aGRhdGUiLCJzZXRCaXJ0aGRhdGUiLCJEYXRlIiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsImluaXRpYWxQYXJhbXMiLCJzZXRJbml0aWFsUGFyYW1zIiwiYm9va2luZ0NvbnRleHQiLCJzZXRCb29raW5nQ29udGV4dCIsInNsb3RJZCIsInNsb3REYXRlIiwic3RhdGUiLCJvbmJvYXJkaW5nIiwiYm9va2luZyIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiZ2V0VXJsIiwiZW5kcG9pbnQiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJiYXNlVXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19IR19CQVNFX0FQSV9VUkwiLCJBVVRIX1RPS0VOX0tFWSIsIkFwaUVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwiYXBpRmV0Y2giLCJtZXRob2QiLCJib2R5IiwidG9rZW4iLCJDb29raWVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJvayIsInN0YXR1c1RleHQiLCJzdGF0dXMiLCJmaWxlVXBsb2FkIiwiZ2V0IiwicGFyYW1zIiwicGFyYW1TdHJpbmciLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsInBvc3QiLCJyZXF1ZXN0IiwiciIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImNvbnNlbnQiLCJzdWJtaXRRdWl6IiwicXVpeiIsImlkIiwic3VibWl0Q2hlY2tpbiIsInJlc3BvbnNlcyIsImdldFByb2dyZXNzSGlzdG9yeSIsImhpc3RvcnlUeXBlIiwiY2hlY2tTdGF0ZSIsImF2YWlsYWJsZSIsImNoZWNrWmlwIiwiemlwIiwiam9pbldhaXRsaXN0IiwiZ2V0QXZhaWxhYmlsaXR5IiwiZ2V0U3RyaXBlQ2xpZW50U2VjcmV0IiwicHJvbW90aW9uQ29kZSIsImNsaWVudFNlY3JldCIsImNvbmZpcm1QYXltZW50IiwicGF5bWVudEludGVudElkIiwidXBkYXRlUGF5bWVudE1ldGhvZCIsInBheW1lbnRNZXRob2RJZCIsImxvZ2luIiwicGFzc3dvcmQiLCJzdXBlcnVzZXIiLCJsb2dpbkFzIiwiYm9va0FwcG9pbnRtZW50IiwiZ2V0VXBjb21pbmdBcHBvaW50bWVudCIsImdldFByZXZpb3VzQXBwb2ludG1lbnRzIiwicHJldmlvdXNBcHBvaW50bWVudHMiLCJnZXRQcm9maWxlIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVBZGRyZXNzIiwiYWRkcmVzcyIsImlzT25ib2FyZGluZyIsInVwZGF0ZVBob25lIiwidXBkYXRlRG9iIiwiZGF0ZSIsIm5vcm1hbGl6ZURhdGVUb1VUQyIsInVwZGF0ZUVtZXJnZW5jeUNvbnRhY3QiLCJmb3Jnb3RQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJjaGVja0ludGFrZSIsImdldE9uYm9hcmRpbmdTdGF0dXMiLCJ2ZXJpZnlJZCIsImlucXVpcnlJZCIsImNyZWF0ZU5ld1RocmVhZCIsImdldFRocmVhZCIsInRocmVhZElkIiwicG9zdE1lc3NhZ2UiLCJjb250ZW50IiwiZ2V0SW5ib3giLCJnZXRVbnJlYWRNZXNzYWdlQ291bnQiLCJ1bnJlYWRNZXNzYWdlcyIsInN1Ym1pdE1lZGljYWxJbnRha2UiLCJzdWJtaXRSZWZlcnJhbCIsInJlZmVycmFsIiwiZ2V0UmVmZXJyYWxDb2RlIiwiY29kZSIsInN1Ym1pdFN0YXJ0SW50YWtlIiwiZ2V0UHJlc2NyaXB0aW9ucyIsInByZXNjcmlwdGlvbnMiLCJnZXRWaWRlb1Rva2VuIiwiaWRlbnRpdHkiLCJnZXRQaGFybWFjaWVzIiwicGhhcm1hY2llcyIsInNldFBoYXJtYWN5IiwicGhhcm1hY3lJZCIsImdldFBoYXJtYWN5IiwiYWRkUHJpbWFyeUNhcmVQaHlzaWNpYW5JbmZvIiwiYWxsb3dTaGFyaW5nIiwiYWRkRXh0ZXJuYWxUaGVyYXBpc3RJbmZvIiwibWFya09uYm9hcmRpbmdDb21wbGV0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsIm9mZmVyIiwidXRtU291cmNlIiwicmVmZXJyYWxDb2RlIiwidXRtX3NvdXJjZSIsInV0bV9tZWRpdW0iLCJ1dG1fY2FtcGFpZ24iLCJ1dG1fY29udGVudCIsInV0bV90ZXJtIiwidGVybSIsInV0bU1lZGl1bSIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bVRlcm0iLCJyYXdVcmwiLCJhc1BhdGgiLCJlbWFpbElzVmFsaWQiLCJ0ZXN0IiwiZ2V0T3JkaW5hbE51bSIsIm4iLCJkYXRlVG9UaW1lU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsImhvdXIxMiIsIm1pbnV0ZSIsImRheVdpdGhPcmRpbmFsIiwiZ2V0RGF0ZSIsImdldERheU5hbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwiZ2V0TW9udGhOYW1lIiwidG9Mb2NhbGVTdHJpbmciLCJtb250aCIsImZvcm1hdFBob25lTnVtYmVyIiwicmVwbGFjZSIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInRyaW0iLCJnZXRUaW1lem9uZUFiYnJldmlhdGlvbiIsInRpbWVab25lTmFtZSIsInNwbGl0IiwiZ2V0VGltZXpvbmVOYW1lIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwidGltZVpvbmUiLCJ1dGNEYXRlIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldFVUQ0RhdGUiLCJ0b0lTT1N0cmluZyIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInNwYWNlIiwiQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ09OVEVOVEZVTF9BQ0NFU1NfS0VZIiwiSG9tZUluZGV4IiwiaGVyb1NlY3Rpb25IZWFkaW5nIiwiaGVyb1NlY3Rpb25Db250ZW50IiwiaGVyb1NlY3Rpb25CdXR0b25CZWxvd1RleHQiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJvcmRlciIsIml0ZW1zIiwicmV2YWxpZGF0ZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwia2luZCIsIlNldCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInVybFF1ZXJ5IiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQThDQSxNQUFNQSxNQUFNLGdCQUFHQyx1REFBQSxDQUFtQyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDaEUsUUFBTTtBQUNKQyxVQURJO0FBRUpDLFlBRkk7QUFHSkMsY0FISTtBQUlKQyxhQUpJO0FBS0pDLFlBTEk7QUFNSkMsVUFOSTtBQU9KQyxXQVBJO0FBUUpDO0FBUkksTUFVRlQsS0FWSjtBQUFBLFFBU0tVLFVBVEwsNEJBVUlWLEtBVko7O0FBV0EsUUFBTVcsV0FBVyxH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Z0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSxtSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BLGtFOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3R5bGVkIDxidXR0b24+IGNvbXBvbmVudCBmb3IgdGhlIHBhdGllbnQgZmFjaW5nIHByb2R1Y3RcbiAqL1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8vIFVzZWQgdG8gc3R5bGUgdGhlIGJ1dHRvbiBkaWZmZXJlbnRseSBiYXNlZCBvbiB3aGVyZSBpbiB0aGUgYXBwIGl0IGlzXG4gIGJ1dHRvblR5cGU/OiBcImN0YVwiIHwgXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiIHwgXCJoZWFkZXJcIjtcbiAgLy8gVXNlIGFuIDxhPiB0YWcgaW5zdGVhZCBvZiBhIGJ1dHRvblxuICBhc0xpbms/OiBib29sZWFuO1xuICAvLyBXaGV0aGVyIHRoZSBidXR0b24gaXMgZGlzYWJsZWRcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAvLyBXaGV0aGVyIHRoZSBidXR0b24gaXMgb3V0bGluZWQgb3IgZmlsbGVkIGluXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvLyBXaWxsIHNob3cgYSBsb2FkaW5nIGNpcmNsZSBpZiB0cnVlXG4gIHByb2Nlc3Npbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkFzQnV0dG9uUHJvcHNcbiAgZXh0ZW5kcyBQcm9wcyxcbiAgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGEgYnV0dG9uXG4gICAqL1xuICB0YWc/OiBcImJ1dHRvblwiO1xuICAvKipcbiAgICogVGhlIG5hdGl2ZSBIVE1MIGJ1dHRvbiB0eXBlXG4gICAqL1xuICB0eXBlPzogXCJidXR0b25cIiB8IFwic3VibWl0XCIgfCBcInJlc2V0XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQXNBbmNob3JQcm9wc1xuICBleHRlbmRzIFByb3BzLFxuICBSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4ge1xuICB0YWc6IFwiYVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkFzT3RoZXJQcm9wc1xuICBleHRlbmRzIFByb3BzLFxuICBSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4ge1xuICB0YWc6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQnV0dG9uUHJvcHMgPVxuICB8IEJ1dHRvbkFzQnV0dG9uUHJvcHNcbiAgfCBCdXR0b25Bc0FuY2hvclByb3BzXG4gIHwgQnV0dG9uQXNPdGhlclByb3BzO1xuXG50eXBlIFJlZiA9IFJlYWN0Tm9kZSB8IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xuY29uc3QgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIEJ1dHRvblByb3BzPigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXNMaW5rLFxuICAgIGNoaWxkcmVuLFxuICAgIGJ1dHRvblR5cGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGRpc2FibGVkLFxuICAgIGhpZGRlbixcbiAgICBvdXRsaW5lLFxuICAgIHByb2Nlc3NpbmcsXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGJ1dHRvbkNsYXNzID0gY3goXG4gICAgXCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zXCIsXG4gICAgXCJyb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICB7XG4gICAgICBmbGV4OiAhaGlkZGVuLFxuICAgICAgaGlkZGVuOiBoaWRkZW4sXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAvLyBcImJnLXJlZC00MDBcIjogIWJ1dHRvblR5cGUsXG4gICAgfSxcbiAgICAhb3V0bGluZVxuICAgICAgPyB7XG4gICAgICAgIFwidGV4dC13aGl0ZSBzaGFkb3cgYmctZGFya0dyYXkgaG92ZXI6YmctZGFya0dyYXktODAwIGFjdGl2ZTpiZy1kYXJrR3JheS04MDBcIjpcbiAgICAgICAgICAhZGlzYWJsZWQgJiYgYnV0dG9uVHlwZSA9PT0gXCJjdGFcIixcbiAgICAgICAgXCJ0ZXh0LXdoaXRlIHNoYWRvdyBiZy1jb3JhbCBob3ZlcjpiZy1jb3JhbC01MDAgYWN0aXZlOmJnLWNvcmFsLTUwMFwiOlxuICAgICAgICAgICghZGlzYWJsZWQgJiYgYnV0dG9uVHlwZSA9PT0gXCJwcmltYXJ5XCIpIHx8ICFidXR0b25UeXBlLFxuICAgICAgICBcInRleHQtZGFya0dyYXkgYmctdHJhbnNwYXJlbnQgdGV4dC1kYXJrR3JheSBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1kYXJrR3JheSBob3ZlcjpiZy1kYXJrR3JheSBob3Zlcjp0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbFwiOlxuICAgICAgICAgIGJ1dHRvblR5cGUgPT09IFwiaGVhZGVyXCIsXG4gICAgICAgIFwiYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0zMDBcIjogZGlzYWJsZWQsXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgXCJib3JkZXIgYm9yZGVyLWNvcmFsIHRleHQtY29yYWwgaG92ZXI6YmctY29yYWwgaG92ZXI6dGV4dC13aGl0ZVwiOlxuICAgICAgICAgIHRydWUsXG4gICAgICB9LFxuXG4gICAgY2xhc3NOYW1lXG4gICk7XG4gIGlmIChhc0xpbmspIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgPGEgY2xhc3NOYW1lPXtidXR0b25DbGFzc30gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9IGRpc2FibGVkPXtkaXNhYmxlZH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3Byb2Nlc3NpbmcgPyAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gbWwtMiBoLTUgdy01IHRleHQtd2hpdGVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIlxuICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICBjeT1cIjEyXCJcbiAgICAgICAgICAgIHI9XCIxMFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvYnV0dG9uPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsIi8qKlxuICogQ2FsbCB0byBhY3Rpb24gYnV0dG9uIGZvciBsYW5kaW5nIHBhZ2VcbiAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBDVEFCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvb25ib2FyZGluZy9pbnRyby9zdGFydFwiPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXRlYWwgaG92ZXI6YmctdGVhbC00MDAgdXBwZXJjYXNlIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgcC0yXCIsXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1sLWF1dG9cIj57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNlYXNoZWxsIHAtMlwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTkuNzgwMDkgMC45ODI2NjZMOC42MDMyMSAyLjE1OTU1TDE1Ljk0NDcgOS41MjkwNkwwLjQ0NTMxMiA5LjQ0NVYxMS4xMjYzTDE1Ljk3MjcgMTEuMjEwM0w4Ljc3MTMzIDE4LjM4MzdMOS45NDgyMiAxOS41ODg2TDE5LjE2NzEgMTAuMzY5N0w5Ljc4MDA5IDAuOTgyNjY2WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjMzc0MTQ2XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENUQUJ1dHRvbjtcbiIsIi8qKlxuICogU2hvd3MgbnVtYmVycyB0byBjYWxsL2RpYWwgaW4gY2FzZSBvZiBhbiBlbWVyZ2VuY3kgZm9yIGxhbmRpbmdcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmNvbnN0IEVtZXJnZW5jeUJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtkYXRhfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcGhvbmVOdW1iZXJUZXh0LFxuICAgIHBob25lTnVtYmVyQmVsb3dUZXh0LFxuICAgIHRvbGxGcmVlTnVtYmVyLFxuICAgIHRvbGxGcmVlTnVtYmVyQmVsb3dUZXh0XG4gIH0gPSBkYXRhXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNwYWNlLXktOCBtZDpncmlkLWNvbHMtMiBtZDpzcGFjZS15LTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZGlzdHJlc3Muc3ZnXCIgY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IG1heC13LXhzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+e3Bob25lTnVtYmVyVGV4dCA/IHBob25lTnVtYmVyVGV4dCA6ICc3NDEtNzQxJ308L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Bob25lTnVtYmVyQmVsb3dUZXh0ID8gcGhvbmVOdW1iZXJCZWxvd1RleHQgOiAnSWYgeW91JmFwb3M7cmUgaW4gZW1vdGlvbmFsIGRpc3RyZXNzLCB0ZXh0IEhPTUUgdG8gY29ubmVjdCB3aXRoIGEgY291bnNlbG9yIGltbWVkaWF0ZWx5Lid9ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2VtZXJnZW5jeS5zdmdcIiBjbGFzc05hbWU9XCJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTQgbWF4LXcteHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj57dG9sbEZyZWVOdW1iZXIgPyB0b2xsRnJlZU51bWJlciA6ICc5MTEnfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dG9sbEZyZWVOdW1iZXJCZWxvd1RleHQgPyB0b2xsRnJlZU51bWJlckJlbG93VGV4dCA6ICdJZiB5b3UmYXBvcztyZSBoYXZpbmcgYSBtZWRpY2FsIG9yIG1lbnRhbCBoZWFsdGggZW1lcmdlbmN5LCBjYWxsIDkxMSBvciBnbyB0byB5b3VyIGxvY2FsIEVSLid9ICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWVyZ2VuY3lCYXI7XG4iLCIvKipcbiAqIENvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgRkFRIG9uIGxhbmRpbmcgcGFnZSBhbmQgRkFRIHBhZ2UuXG4gKiBEeW5hbWljYWxseSBwdWxscyBsaXN0IG9mIHN0YXRlcyBvcGVyYXRlZCBpbiBmcm9tIGJhY2tlbmRcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcbmltcG9ydCBGQVFJdGVtIGZyb20gXCIuL0ZBUUl0ZW1cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgeyBVU1N0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9zcmMvdXRpbHMvc3RhdGVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFN0YXRlcyB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBzaG93QnV0dG9uPzogYm9vbGVhbjtcbn1cblxuY29uc3QgRkFROiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmYXEsIHRpdGxlLCBzaG93QnV0dG9uID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZXMsIHNldFN0YXRlc10gPSB1c2VTdGF0ZTxBcnJheTxVU1N0YXRlPj4oW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFN0YXRlcygpLnRoZW4oc2V0U3RhdGVzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0YXRlTGlzdCA9IHN0YXRlcy5tYXAoKHMpID0+IHMubmFtZSk7XG4gIGNvbnN0IHN0YXRlRW5kaW5nID1cbiAgICBzdGF0ZUxpc3Quc2xpY2UoMCwgLTEpLmpvaW4oXCIsIFwiKSArXG4gICAgXCIgYW5kIFwiICtcbiAgICBzdGF0ZUxpc3Rbc3RhdGVMaXN0Lmxlbmd0aCAtIDFdO1xuICBcbmNvbnN0IFN0eWxlZEZhcSA9IHN0eWxlZC5kaXZgXG53aWR0aDoxMDAlO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG4uYW5zY2xhc3MtM3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAmID4gcHtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gIH1cbn1cbi5hbnNjbGFzcy01e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gICYgPiBwe1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgfVxuICAmID4gaDR7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cbi5hbnNjbGFzcy02e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7ICBcbiAgJiA+IHB7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICB9XG59XG5gXG4gIGNvbnN0IGFuc3dlcmVkUmVuZGVyZWQgPSAoYW5zLCBpbmRleCk9PntcbiAgICByZXR1cm4oXG4gICAgICA8U3R5bGVkRmFxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFuc2NsYXNzLSR7aW5kZXgrMX1gfT5cbiAgICAgICAge2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMoYW5zKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZEZhcT4gICAgICBcbiAgICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1iLTE2XCI+XG4gICAgICAgIHt0aXRsZSA/IHRpdGxlIDogXCJGQVFzXCJ9XG4gICAgICA8L2gxPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LThcIj5cbiAgICAgICAgeyBmYXEubWFwKCh7ZmllbGRzfSwgaW5kZXgpPT57XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEZBUUl0ZW0gdGl0bGU9e2ZpZWxkcy5xdWVzdGlvbn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHthbnN3ZXJlZFJlbmRlcmVkKGZpZWxkcy5mYXFhbnN3ZXIsIGluZGV4KX1cbiAgICAgICAgICAgICAgey8qIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGZpZWxkcy5mYXFhbnN3ZXIpfSAqL31cbiAgICAgICAgICAgIDwvRkFRSXRlbT4gIFxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIHsvKiA8RkFRSXRlbSB0aXRsZT1cIldoYXQgaXMgTGluYT9cIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExpbmEgYWxsb3dzIHBhdGllbnRzIHRvIHNlZSBsaWNlbnNlZCBwc3ljaGlhdHJ5IHByb2Zlc3Npb25hbHMgdmlhIGFuXG4gICAgICAgICAgICBvbmxpbmUgdmlkZW8gY29uc3VsdGF0aW9uLsKgV2UgZW5hYmxlIGdyZWF0ZXIgYWNjZXNzIHRvIGhpZ2ggcXVhbGl0eSxcbiAgICAgICAgICAgIGNvbnZlbmllbnQsIGFuZCBhZmZvcmRhYmxlIHBzeWNoaWF0cmljIGNhcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiV2hhdCBpcyB0aGUgY29zdD9cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgICAgICBZb3VyIGZpcnN0IG1vbnRoIGlzIGp1c3QgJDUuIFdpdGhvdXQgaW5zdXJhbmNlLCBtZW1iZXJzaGlwIGlzICQ5NSBhXG4gICAgICAgICAgICBtb250aC4gVGhpcyBpbmNsdWRlcyB2aXNpdHMgd2l0aCB5b3VyIHByb3ZpZGVyLiBZb3VyIGluc3VyYW5jZSBtYXlcbiAgICAgICAgICAgIGNvdmVyIHNvbWUgb2YgdGhlIGNvc3RzIG9mIHlvdXIgbWVkaWNhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRkFRSXRlbT5cbiAgICAgICAgPEZBUUl0ZW0gdGl0bGU9XCJIb3cgZG9lcyB0aGlzIHdvcms/XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCAgXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgMSkgQ29tcGxldGUgb3VyIGJyaWVmIGFzc2Vzc21lbnQgb25saW5lIHNvIHdlIGNhbiBsZWFybiBhYm91dCB5b3VyXG4gICAgICAgICAgICAgIG1lZGljYWwgaGlzdG9yeS4gQmFzZWQgb24gdGhpcywgd2Ugd2lsbCBhc3Nlc3Mgd2hldGhlciB3ZSBjYW4gaGVscFxuICAgICAgICAgICAgICB5b3UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgMikgSWYgeW91IGFyZSBhIGZpdCBmb3Igb3VyIHByYWN0aWNlLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNjaGVkdWxlXG4gICAgICAgICAgICAgIGFuIG9ubGluZSB2aXNpdC4gUGxlYXNlIG5vdGUgdGhhdCB3ZSBhcmUgaGFwcHkgdG8gdGFrZSBwYXRpZW50c1xuICAgICAgICAgICAgICBldmVuIGlmIHRoZXkgaGF2ZSBub3QgYmVlbiB0cmVhdGVkIHByZXZpb3VzbHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgMykgQmVmb3JlIHlvdXIgcmVzZXJ2YXRpb24gaXMgY29uZmlybWVkLCB5b3Ugd2lsbCBuZWVkIHVwbG9hZFxuICAgICAgICAgICAgICBpbWFnZXMgb2YgZ292ZXJubWVudC1pc3N1ZWQgcGhvdG8gSUQgYXMgd2VsbCBhcyBmaWxsIG91dCBmdXJ0aGVyXG4gICAgICAgICAgICAgIGludGFrZSBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA0KSBBIHZpc2l0IHdpdGggTGluYSBpcyBtdWNoIGxpa2UgYSByZWd1bGFyIGRvY3RvciB2aXNpdCwgZXhjZXB0XG4gICAgICAgICAgICAgIHRoYXQgaXQgaXMgY29uZHVjdGVkIGRpZ2l0YWxseS4gV2UgdGFrZSBjeWJlci1zZWN1cml0eSBzZXJpb3VzbHk7XG4gICAgICAgICAgICAgIGFsbCB2aXNpdHMgYXJlIGRvbmUgdmlhIGEgc2VjdXJlLCBISVBBQS1jb21wbGlhbnQgdmlkZW9jaGF0LiBUaGVcbiAgICAgICAgICAgICAgZmlyc3QgdmlzaXQgaXMgYW4gb25saW5lIHZpc2l0IHdpdGggYSBtZW50YWwgaGVhbHRoIGV4cGVydC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXZSBkbyBub3QgY3V0IGNvcm5lcnMgb3Igc2tpcCBhbnkgaW1wb3J0YW50IGFzcGVjdHMgb2YgYSBmdWxsXG4gICAgICAgICAgICAgIHBzeWNoaWF0cmljIGV2YWx1YXRpb247IHlvdXIgcHJvdmlkZXIgd2lsbCBwZXJmb3JtIGEgZnVsbFxuICAgICAgICAgICAgICBwc3ljaGlhdHJpYyBldmFsdWF0aW9uLiBPdXIgcHJvdmlkZXJzIG9ubHkgcHJlc2NyaWJlIG1lZGljYXRpb24gaWZcbiAgICAgICAgICAgICAgaXQgaXMgYXBwcm9wcmlhdGUgZm9yIHlvdXIgc2l0dWF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiV2hhdCBzdGF0ZXMgZG8geW91IG9wZXJhdGUgaW4/XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBjdXJyZW50bHkgb3BlcmF0ZSBpbiB7c3RhdGVFbmRpbmd9LiBXZSZhcG9zO3JlIGFsd2F5cyB0cnlpbmcgdG9cbiAgICAgICAgICAgIGhlbHAgYXMgbWFueSBwZW9wbGUgYXMgcG9zc2libGUuIElmIHlvdXIgc3RhdGUgaXMgbm90IGxpc3RlZCBoZXJlLFxuICAgICAgICAgICAgcGxlYXNlIGNvbXBsZXRlIG91ciBvbmxpbmUgYXNzZXNzbWVudCBhbmQgd2UmYXBvcztsbCBwcmlvcml0aXplIHlvdVxuICAgICAgICAgICAgb24gb3VyIHdhaXRsaXN0LiBXZSByZXF1aXJlIHByb29mIG9mIHJlc2lkZW5jeSB1cG9uIGJvb2tpbmcgYW5cbiAgICAgICAgICAgIGFwcG9pbnRtZW50IChhIGRyaXZlciZhcG9zO3MgbGljZW5zZSB3b3JrcykuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiRG8geW91IGFjY2VwdCBpbnN1cmFuY2U/XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICBUaGUgc2hvcnQgYW5zd2VyIGlzIHllcy4g8J+ZgyBIZXJlJmFwb3M7cyB0aGUgbG9uZ2VyIGFuc3dlcjpcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5WaXNpdHM8L2g0PlxuICAgICAgICAgICAgTGluYSBpcyBhbiBvdXQtb2YtbmV0d29yayBwcm92aWRlciB3aXRoIGluc3VyYW5jZSBjb21wYW5pZXMgZm9yXG4gICAgICAgICAgICB2aXNpdHMuIEFuIDxiPm91dC1vZi1uZXR3b3JrPC9iPiBjbGFpbSBtZWFucyB0aGF0IHlvdXIgaGVhbHRoXG4gICAgICAgICAgICBpbnN1cmFuY2UgY29tcGFueSBjYW4gcmVpbWJ1cnNlIHlvdSBmb3IgbW9uZXkgc3BlbnQgb24gaGVhbHRoY2FyZVxuICAgICAgICAgICAgdGhhdCBpcyBmcm9tIGEgcHJvdmlkZXIgbm90IG5vcm1hbGx5IGNvdmVyZWQgaW4geW91clxuICAgICAgICAgICAgaW5zdXJhbmNlJmFwb3M7cyBuZXR3b3JrLiBMaW5hIHByb3ZpZGVzIHlvdSB3aXRoIGEgc3VwZXJiaWxsIHRvXG4gICAgICAgICAgICBzdWJtaXQgdG8geW91ciBpbnN1cmFuY2UgdG8gY292ZXIgdmlzaXQgZmVlcy5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtdC00IGZvbnQtYm9sZFwiPk1lZGljYXRpb248L2g0PlxuICAgICAgICAgICAgWW91IGNhbiB1c2UgeW91ciBpbnN1cmFuY2UgdG8gcGF5IGZvciBtZWRpY2F0aW9uIGF0IHlvdXIgbG9jYWxcbiAgICAgICAgICAgIHBoYXJtYWN5LiBJZiB5b3Ugd2FudCB5b3VyIHByZXNjcmlwdGlvbiBzaGlwcGVkLCB3ZSBjaGFyZ2UgJDE1IGZvclxuICAgICAgICAgICAgYWxsIG1lZGljYXRpb24sIHdpdGggc2hpcHBpbmcgaW5jbHVkZWQgZm9yIGZyZWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiRG9lcyBMaW5hIHNoaXAgbWVkaWNhdGlvbnM/XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBZZXMsIExpbmEgcGFydG5lcnMgd2l0aCBtYWlsIG9yZGVyIHBoYXJtYWNpZXMgdG8gZGVsaXZlciBtZWRpY2F0aW9uc1xuICAgICAgICAgICAgYXQgdGhlIGxvd2VzdCBjb3N0IHBvc3NpYmxlIHRvIG91ciBtZW1iZXJzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICBPdXIgcGFydG5lciBwaGFybWFjeSBpcyBSaWRnZXdheSBQaGFybWFjeS5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQ29udGFjdCBJbmZvcm1hdGlvbjpcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUmlkZ2V3YXkgUGhhcm1hY3ksIENsb3NlZCBEb29yXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDI4MjQgSHd5IDkzIE48YnIgLz5cbiAgICAgICAgICAgIFZpY3RvciwgTVQgNTk4NzUtMDAwMFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBOYW1lIG9mIFBJQzogS2xpbnRvbiBLLiBDdXJ0aXNcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgUHJvZmVzc2lvbmFsIERlZ3JlZSBvZiBQSUM6IFJlZ2lzdGVyZWQgUGhhcm1hY2lzdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9GQVFJdGVtPlxuICAgICAgICA8RkFRSXRlbSB0aXRsZT1cIkFyZSB5b3UgSElQQUEgY29tcGxpYW50P1wiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgdGFrZSBhbGwgc2VjdXJpdHkgYW5kIHByaXZhY3kgaXNzdWVzIHZlcnkgc2VyaW91c2x5LiBUaGUgTGluYVxuICAgICAgICAgICAgcGxhdGZvcm0gaXMgZnVsbHkgSElQQUEgY29tcGxpYW50LiBBbGwgcGF0aWVudCBkYXRhIGFuZCBtZXNzYWdlcyBhcmVcbiAgICAgICAgICAgIHN0cmljdGx5IGNvbmZpZGVudGlhbC4gUGxlYXNlIHNlZSBvdXJ7XCIgXCJ9XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRkFRSXRlbT5cbiAgICAgICAgPEZBUUl0ZW0gdGl0bGU9XCJXaGF0IHF1YWxpZmljYXRpb25zIGRvIHlvdXIgcHJvdmlkZXJzIGhhdmU/XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBBbGwgb2Ygb3VyIHByb3ZpZGVycyBhcmUgbGljZW5zZWQgdG8gcHJhY3RpY2UgbWVkaWNpbmUgaW4gdGhlIFVuaXRlZFxuICAgICAgICAgICAgU3RhdGVzIGFuZCBhcmUgYm9hcmQtY2VydGlmaWVkIGluIHZhcmlvdXMgYXJlYXMgb2Ygc3BlY2lhbHR5IHN1Y2ggYXNcbiAgICAgICAgICAgIHBzeWNoaWF0cnkgYW5kIGZhbWlseSBtZWRpY2luZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPdXIgbnVyc2UgcHJhY3RpdGlvbmVycyBhbmQgcGh5c2ljaWFu4oCZcyBhc3Npc3RhbnRzIGFyZSBhbHNvIGFsbFxuICAgICAgICAgICAgbGljZW5zZWQgb3IgY2VydGlmaWVkIGluIHRoZSBzdGF0ZXMgaW4gd2hpY2ggdGhleSBwcm92aWRlIHBhdGllbnRcbiAgICAgICAgICAgIGNhcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiQ2FuIEkgcGljayBteSBwcm92aWRlcj9cIj5cbiAgICAgICAgICBZZXMhIFdlIHRoaW5rIGl0JmFwb3M7cyBpbXBvcnRhbnQgeW91IGZpbmQgYSBwcm92aWRlciB0aGF0IHlvdSBjYW5cbiAgICAgICAgICBmZWVsIGNvbWZvcnRhYmxlIHNwZWFraW5nIHdpdGguIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG9cbiAgICAgICAgICAmcXVvdDtjbGljayZxdW90OyB3aXRoIHlvdXIgcHJvdmlkZXIuXG4gICAgICAgIDwvRkFRSXRlbT5cbiAgICAgICAgPEZBUUl0ZW0gdGl0bGU9XCJBcmUgdGhlcmUgY29uZGl0aW9ucyB0aGF0IHlvdSBkb27igJl0IGNvdmVyP1wiPlxuICAgICAgICAgIEF0IHRoaXMgdGltZSwgd2UgY2Fubm90IHRyZWF0IGFkZGljdGlvbiwgYmlwb2xhciBkaXNvcmRlciBvclxuICAgICAgICAgIHNjaGl6b3BocmVuaWEuXG4gICAgICAgIDwvRkFRSXRlbT5cbiAgICAgICAgPEZBUUl0ZW0gdGl0bGU9XCJDYW4gSSBzZWUgbXkgcHJvdmlkZXIgaW4tcGVyc29uP1wiPlxuICAgICAgICAgIEF0IHRoaXMgdGltZSwgd2UgYXJlIG9ubGluZS1vbmx5LlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiV2hhdCBpcyBpbmNsdWRlZCBpbiBteSBzdWJzY3JpcHRpb24/IEhvdyBvZnRlbiBjYW4gSSBzZWUgbXkgcHJvdmlkZXI/XCI+XG4gICAgICAgICAgWW91ciBzdWJzY3JpcHRpb24gaW5jbHVkZXMgdW5saW1pdGVkIHZpc2l0cyB0byB5b3VyIHByb3ZpZGVyLFxuICAgICAgICAgIHVubGltaXRlZCBtZXNzYWdpbmcgd2l0aCB5b3VyIHByb3ZpZGVyIGFuZCBjYXJlIHRlYW0uIFlvdXIgaW5zdXJhbmNlXG4gICAgICAgICAgbWF5IGNvdmVyIHNvbWUgb2YgdGhlIGNvc3RzIG9mIHlvdXIgbWVkaWNhdGlvbi5cbiAgICAgICAgPC9GQVFJdGVtPlxuICAgICAgICA8RkFRSXRlbSB0aXRsZT1cIldoYXQgaXMgeW91ciByZXNjaGVkdWxpbmcgcG9saWN5P1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBcIj5cbiAgICAgICAgICAgIFBsZWFzZSBnaXZlIHVzIDQ4IGhvdXJzIG5vdGljZSBmb3IgYW55IGNhbmNlbGxhdGlvbnMgb3IgcmVzY2hlZHVsZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZBUUl0ZW0+XG4gICAgICAgIDxGQVFJdGVtIHRpdGxlPVwiV2hhdCBoYXBwZW5zIGlmIEkgYW0gbGF0ZSB0byBteSBhcHBvaW50bWVudD9cIj5cbiAgICAgICAgICBJZiB5b3UgYXJlIGxhdGUgdG8geW91ciBhcHBvaW50bWVudCBieSBtb3JlIHRoYW4gMTUgbWludXRlcywgd2Ugd2lsbFxuICAgICAgICAgIHdpbGwgY291bnQgdGhpcyBhcyBhbiBhcHBvaW50bWVudCBjYW5jZWxsYXRpb24uXG4gICAgICAgIDwvRkFRSXRlbT4gKi99XG4gICAgICA8L3VsPlxuICAgICAge3Nob3dCdXR0b24gPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYXNMaW5rPXt0cnVlfVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IHctZnVsbCBtZDp3LW1heCB0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLWRhcmtHcmF5IGJvcmRlci0xIGhvdmVyOmJnLWRhcmtHcmF5IGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBhbnN3ZXJzIHRvIG90aGVyIHF1ZXN0aW9uc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZBUTtcbiIsIi8qKlxuICogSW5kaXZpZHVhbCBxdWVzdGlvbi9hbnN3ZXIgaW4gdGhlIEZBUVxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBGQVFJdGVtOiBSZWFjdC5GQzx7IHRpdGxlOiBzdHJpbmcgfT4gPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1kYXJrR3JheSBwYi0yIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZWZ0IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbGlnaHRcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgZD1cIk0yMCAxMkg0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgNnY2bTAgMHY2bTAtNmg2bS02IDBINlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgc2hvdz17b3Blbn1cbiAgICAgICAgY2xhc3NOYW1lPVwicHktNFwiXG4gICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRkFRSXRlbTtcbiIsIi8qKlxuICogRm9vdGVyIGZvciBsYW5kaW5nIHBhZ2VcbiAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMZWdpdHNjcmlwdFNlYWwgZnJvbSBcIi4vTGVnaXRzY3JpcHRTZWFsXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5cbmltcG9ydCBGYWNlYm9vayBmcm9tIFwiLi4vc3ZnL1NvY2lhbE1lZGlhL0ZhY2Vib29rXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9zdmcvU29jaWFsTWVkaWEvSW5zdGFncmFtXCI7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSBcIi4uL3N2Zy9Tb2NpYWxNZWRpYS9MaW5rZWRJblwiO1xuXG50eXBlIFNvY2lhbE1lZGlhTGlua1Byb3BzID0ge1xuICBocmVmOiBzdHJpbmc7XG59O1xuXG5jb25zdCBTb2NpYWxNZWRpYUxpbms6IEZDPFNvY2lhbE1lZGlhTGlua1Byb3BzPiA9ICh7IGhyZWYsIGNoaWxkcmVuIH0pID0+IChcbiAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInctNlwiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9hPlxuKTtcblxudHlwZSBGb290ZXJJdGVtUHJvcHMgPSBIVE1MUHJvcHM8SFRNTEFuY2hvckVsZW1lbnQ+ICYge1xuICBocmVmOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgZXh0ZXJuYWw/OiBib29sZWFuO1xufTtcblxuY29uc3QgRm9vdGVySXRlbTogRkM8Rm9vdGVySXRlbVByb3BzPiA9ICh7XG4gIGhyZWYsXG4gIGNoaWxkcmVuLFxuICBleHRlcm5hbCA9IGZhbHNlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBsaW5rID0gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItY3VycmVudCBob3Zlcjpib3JkZXItbm9uZVwiXG4gICAgICBocmVmPXtleHRlcm5hbCA/IGhyZWYgOiB1bmRlZmluZWR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcblxuICByZXR1cm4gPGxpPntleHRlcm5hbCA/IGxpbmsgOiA8TGluayBocmVmPXtocmVmfT57bGlua308L0xpbms+fTwvbGk+O1xufTtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXJcbiAgICAgIGlkPVwiZm9vdGVyXCJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMTIgbWQ6cHktMjggZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1zZWFzaGVsbFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8TGVnaXRzY3JpcHRTZWFsIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMCBwLTQgbWQ6cC0wIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi00IGxnOm1iLTggZmxleCBmbGV4LWNvbCBnYXAteS0xXCI+XG4gICAgICAgICAgICA8Rm9vdGVySXRlbSBocmVmPVwiL3Rlcm1zLW9mLXNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9Gb290ZXJJdGVtPlxuICAgICAgICAgICAgPEZvb3Rlckl0ZW0gaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlByaXZhY3kgUG9saWN5PC9Gb290ZXJJdGVtPlxuICAgICAgICAgICAgPEZvb3Rlckl0ZW0gaHJlZj1cIm1haWx0bzpwcmVzc0BoZWxsb2xpbmEuY29tXCIgZXh0ZXJuYWw+XG4gICAgICAgICAgICAgIFByZXNzIElucXVpcmllc1xuICAgICAgICAgICAgPC9Gb290ZXJJdGVtPlxuICAgICAgICAgICAgPEZvb3Rlckl0ZW1cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYm9hcmRzLmdyZWVuaG91c2UuaW8vbGluYVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGV4dGVybmFsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhcmVlcnNcbiAgICAgICAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgICAgICAgIDxGb290ZXJJdGVtIGhyZWY9XCIvcmVmZXItZnJpZW5kXCI+UmVmZXIgYSBGcmllbmQ8L0Zvb3Rlckl0ZW0+XG4gICAgICAgICAgICA8Rm9vdGVySXRlbSBocmVmPVwiL2Jsb2dcIj5CbG9nPC9Gb290ZXJJdGVtPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1zbSBnYXAteS0xXCI+XG4gICAgICAgICAgICA8Rm9vdGVySXRlbSBocmVmPVwibWFpbHRvOnN1cHBvcnRAaGVsbG9saW5hLmNvbVwiIGV4dGVybmFsPlxuICAgICAgICAgICAgICBzdXBwb3J0QGhlbGxvbGluYS5jb21cbiAgICAgICAgICAgIDwvRm9vdGVySXRlbT5cbiAgICAgICAgICAgIDxGb290ZXJJdGVtIGhyZWY9XCIvZmFxXCI+RkFRPC9Gb290ZXJJdGVtPlxuICAgICAgICAgICAgPGxpPjlhbS01cG0gRVNULCBNLUY8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggcHQtMyBnYXAteC0zXCI+XG4gICAgICAgICAgICAgIDxTb2NpYWxNZWRpYUxpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbGluYW1lbnRhbGhlYWx0aC8/aGw9ZW5cIj5cbiAgICAgICAgICAgICAgICA8SW5zdGFncmFtIC8+XG4gICAgICAgICAgICAgIDwvU29jaWFsTWVkaWFMaW5rPlxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWFMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9oZWxsb2xpbmEvXCI+XG4gICAgICAgICAgICAgICAgPExpbmtlZEluIC8+XG4gICAgICAgICAgICAgIDwvU29jaWFsTWVkaWFMaW5rPlxuICAgICAgICAgICAgICA8U29jaWFsTWVkaWFMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGVvcGxlL0xpbmEvMTAwMDY4MDc3MjkxMzk1L1wiPlxuICAgICAgICAgICAgICAgIDxGYWNlYm9vayAvPlxuICAgICAgICAgICAgICA8L1NvY2lhbE1lZGlhTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LThcIj5cbiAgICAgICAgICAgICZjb3B5OyAyMDIxIExpbmEsIGEgQiZhbXA7RyBJbm5vdmF0aW9ucyBjb21wYW55LiBBbGwgcmlnaHRzXG4gICAgICAgICAgICByZXNlcnZlZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCIvKipcbiAqIEhlYWRlciBmb3IgbGFuZGluZyBwYWdlXG4gKi9cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29yZS9CdXR0b25cIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3RhcnRDb2xvcj86IHN0cmluZztcbiAgc3RhcnRPZmZlcj86IHN0cmluZztcbiAgaGlkZU1lbnU/OiBib29sZWFuO1xufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBzdGFydE9mZmVyLFxuICBzdGFydENvbG9yLFxuICBoaWRlTWVudSxcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dPZmZlciwgc2V0U2hvd09mZmVyXSA9IHVzZVN0YXRlKCEhc3RhcnRPZmZlcik7XG4gIGNvbnN0IFtzaG93U2lkZWJhciwgc2V0U2hvd1NpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgIHNldElzVG9wKHdpbmRvdy5wYWdlWU9mZnNldCA8IDMyKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZUNsb3NlID0gKCkgPT4gc2V0U2hvd1NpZGViYXIoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgXCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZml4ZWQgdG9wLTAgbGVmdC0wIHotNTAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwXCIsXG4gICAgICAgICAgeyBcInNoYWRvdy1tZFwiOiAhaXNUb3AgfSxcbiAgICAgICAgICBpc1RvcCA/IHN0YXJ0Q29sb3IgfHwgXCJiZy1zZWFzaGVsbFwiIDogXCJiZy13aGl0ZVwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtzaG93T2ZmZXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHQtMCBiZy1kYXJrR3JheSB0ZXh0LXdoaXRlIGgtOCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25ib2FyZGluZy9pbnRyby9zdGFydFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtzdGFydE9mZmVyfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFNob3dPZmZlcihmYWxzZSl9IGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAgICAgICAgICAgZD1cIk0xMCAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMm03LTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRhaW5lciBpdGVtcy1jZW50ZXIgcHgtNiBtZDpweC0wIHB5LTRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgey8qIDxzcGFuPkxpbmE8L3NwYW4+ICovfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJtbC1hdXRvIG1kOmhpZGRlblwiLCBoaWRlTWVudSA/IFwiaGlkZGVuXCIgOiBcIlwiKX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yIHB4LTMgdGV4dC1jb3JhbCByb3VuZGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1kYXJrR3JheVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTUuMTIxIDE3LjgwNEExMy45MzcgMTMuOTM3IDAgMDExMiAxNmMyLjUgMCA0Ljg0Ny42NTUgNi44NzkgMS44MDRNMTUgMTBhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwem02IDJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29uYm9hcmRpbmcvaW50cm8vc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvbi1ibHVlIHRleHQtc20gdy1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggbGc6aXRlbXMtY2VudGVyIGxnOnctYXV0byBsZzpzcGFjZS14LTggbWwtYXV0byBtci00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBhc0xpbmtcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1kYXJrR3JheSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25ib2FyZGluZy9pbnRyby9zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiB1cHBlcmNhc2UgdGV4dC1zbSBweC00XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJib3JkZXItMSBzb2xpZCBib3JkZXItZ3JheS0yMDAgbXgtMTBcIiAvPiAqL31cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHJhbnNpdGlvbiBzaG93PXtzaG93U2lkZWJhcn0+XG4gICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZWFzZS1saW5lYXIgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsdWVHcmF5LTgwMCBvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKGZhbHNlKX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24tYWxsIGVhc2UtbGluZWFyIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgZW50ZXJGcm9tPVwiLW1sLTY0XCJcbiAgICAgICAgICBlbnRlclRvPVwibWwtMFwiXG4gICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLWFsbCBlYXNlLWxpbmVhciBkdXJhdGlvbi01MFwiXG4gICAgICAgICAgbGVhdmVUbz1cIi1tbC02NFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB5LTMgcHgtNiBib3JkZXItciB0b3AtMCB3LTk2IGJnLXdoaXRlIGZpeGVkIGgtZnVsbCBvdmVyZmxvdy1hdXRvIHotNTAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTggXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dTaWRlYmFyKGZhbHNlKX0gY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlR3JheS01MDBcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBwLTQgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI2dldF90cmVhdG1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgR2V0IFRyZWF0bWVudFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHAtNCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jY2FyZV9wcm9jZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhcmUgUHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHAtNCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jcHJpY2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQcmljaW5nXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcC00IHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNmYXFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRkFRXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHB0LTYgYm9yZGVyLXQgYm9yZGVyLWJsdWVHcmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb25ib2FyZGluZy9pbnRyby9zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhc0xpbms+R2V0IFN0YXJ0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY29yYWwgbXQtMiBib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAge3Nob3dPZmZlciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xNiBiZy1zZWFzaGVsbFwiPjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGJnLXNlYXNoZWxsXCI+PC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHNob3dPZmZlciA/IFwibXQtOFwiIDogdW5kZWZpbmVkKX0+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKipcbiAqIFdyYXBwZXIgY29tcG9uZW50IHVzZWQgdG8gcHJvdmlkZSB0ZW1wbGF0ZSBmb3IgdGhlIGxhbmRpbmcgcGFnZS5cbiAqIFVzZSB0aGlzIHRvIGNyZWF0ZSBtdWx0aXBsZSB2YXJpYXRpb25zIG9mIHRoZSBsYW5kaW5nIHBhZ2Ugd2l0aFxuICogdGhlIHNhbWUgc3RydWN0dXJlLlxuICovXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VPZmZlciB9IGZyb20gXCIuLi8uLi9saWIvaG9va3Mvb2ZmZXJcIjtcbmltcG9ydCB7IHVzZVV0bSB9IGZyb20gXCIuLi8uLi9saWIvaG9va3MvdXRtXCI7XG5pbXBvcnQgRW1lcmdlbmN5QmFyIGZyb20gXCIuL0VtZXJnZW5jeUJhclwiO1xuaW1wb3J0IEZBUSBmcm9tIFwiLi9GQVFcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1lZGljYWxUZWFtIGZyb20gXCIuL01lZGljYWxUZWFtXCI7XG5pbXBvcnQgTmV3Q2FyZVByb2Nlc3MgZnJvbSBcIi4vTmV3Q2FyZVByb2Nlc3NcIjtcbmltcG9ydCBQcmljaW5nIGZyb20gXCIuL1ByaWNpbmdcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb25cIjtcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4vVGVzdGltb25pYWxzXCI7XG5pbXBvcnQgV2hhdFdlVHJlYXQgZnJvbSBcIi4vV2hhdFdlVHJlYXRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBMYW5kaW5nVGVtcGxhdGU6IE5leHRQYWdlPFByb3BzPiA9ICh7IGRhdGEsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ0FsbCBkYXRhJywgZGF0YSlcbiAgY29uc3QgeyBmYXEsIHBhZ2UgfSA9IGRhdGFcbiAgY29uc3QgeyBmaWVsZHMgfSA9IHBhZ2VcbiAgY29uc3Qge1xuICAgIGNhcmVQcm9jZXNzSGVhZGluZyxcbiAgICBjYXJlUHJvY2VzcyxcbiAgICB0ZXN0aW1vbmlhbHNIZWFkaW5nLFxuICAgIHRlc3RpbW9uaWFscyxcbiAgICBhbnhpZXR5QW5kRGVwcmVzc2lvbkhlYWRpbmcsXG4gICAgYW54aWV0eUFuZERlcHJlc3Npb25TaG9ydERlc2NyaXB0aW9uLFxuICAgIGRlcHJlc3Npb25MaXN0SXRlbXMsXG4gICAgdGVhbUhlYWRpbmcsXG4gICAgdGVhbUxpc3QsXG4gICAgaGVyb1NlY3Rpb25JbWFnZVxuICB9ID0gZmllbGRzXG4gIGNvbnNvbGUubG9nKCdUaXRsdGUnLCBjYXJlUHJvY2Vzc0hlYWRpbmcpXG4gIHVzZVV0bSgpO1xuICBjb25zdCB7IG9mZmVyVGV4dCB9ID0gdXNlT2ZmZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiTGluYVwiIHN0YXJ0T2ZmZXI9e29mZmVyVGV4dH0gLz5cbiAgICAgIDxTZWN0aW9uIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgYmctc2Vhc2hlbGwgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxuICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtOCBtZDptdC0wXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvY3RhYmcuc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0MDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcmlnaHQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzQwXCJcbiAgICAgICAgICAgICAgc3JjPXtoZXJvU2VjdGlvbkltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyb2ltYWdlIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSB0b3AtMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGlkPVwiY2FyZV9wcm9jZXNzXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOZXdDYXJlUHJvY2VzcyBoZWFkaW5nPXtjYXJlUHJvY2Vzc0hlYWRpbmd9IGRhdGE9e2NhcmVQcm9jZXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cblxuICAgICAgPFNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGJnLXNlYXNoZWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFRlc3RpbW9uaWFscyBoZWFkaW5nPXt0ZXN0aW1vbmlhbHNIZWFkaW5nfSBkYXRhPXt0ZXN0aW1vbmlhbHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiBpZD1cIndoYXRfd2VfdHJlYXRcIiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGJnLXNlYXNoZWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFdoYXRXZVRyZWF0IGhlYWRpbmc9e2FueGlldHlBbmREZXByZXNzaW9uSGVhZGluZ30gc3ViVGV4dD17YW54aWV0eUFuZERlcHJlc3Npb25TaG9ydERlc2NyaXB0aW9ufSBkYXRhPXtkZXByZXNzaW9uTGlzdEl0ZW1zfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiBpZD1cIm1lZGljYWxfdGVhbVwiPlxuICAgICAgICA8TWVkaWNhbFRlYW0gaGVhZGluZz17dGVhbUhlYWRpbmd9IGRhdGE9e3RlYW1MaXN0fSAvPlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJiZy1zZWFzaGVsbFwiIG5vUGFkZGluZz5cbiAgICAgICAgPFByaWNpbmcgZGF0YT17ZmllbGRzfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuXG4gICAgICA8U2VjdGlvbiBpZD1cImZhcVwiIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8RkFRIGZhcT17ZmFxfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uXG4gICAgICAgIGlkPVwiZW1lcmdlbmN5XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI0NCwgMjE4LCAyMTMsIDAuNilcIiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxFbWVyZ2VuY3lCYXIgZGF0YT17ZmllbGRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdUZW1wbGF0ZTtcbiIsIi8qKlxuICogRGlzcGxheXMgdGhlIGxlZ2l0IHNjcmlwdCBzZWFsIHdpdGggYW4gPGltZz5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmNvbnN0IExlZ2l0c2NyaXB0U2VhbDogUmVhY3QuRkM8UHJvcHM+ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBocmVmPVwiaHR0cHM6Ly9sZWdpdHNjcmlwdC5jb20vcGhhcm1hY3kvaGVsbG9saW5hLmNvbVwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgdGl0bGU9XCJWZXJpZnkgTGVnaXRTY3JpcHQgQXBwcm92YWxcIlxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy5sZWdpdHNjcmlwdC5jb20vc2VhbHMvMTA3Njg2OTIucG5nXCJcbiAgICAgICAgYWx0PVwiTGVnaXRTY3JpcHQgYXBwcm92ZWRcIlxuICAgICAgICB3aWR0aD1cIjE0MFwiXG4gICAgICAgIGhlaWdodD1cIjEwMFwiXG4gICAgICAvPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZ2l0c2NyaXB0U2VhbDtcbiIsIi8qKlxuICogTGluYSBsb2dvIGFzIGFuIFNWR1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBMb2dvOiBSZWFjdC5GQzxQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCI5NlwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiNSAwIDUwIDE3XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgcj1cIjUuNDk2NzFcIlxuICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLTEgMCAwIDEgOC4wMjIzNCA1Ljc5OTIzKVwiXG4gICAgICAgIGZpbGw9XCIjRkY4NzdBXCJcbiAgICAgIC8+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIHI9XCIyLjUyNTUxXCJcbiAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC0xIDAgMCAxIDIuNTI1NzUgMTQuMzQ1MylcIlxuICAgICAgICBmaWxsPVwiI0ZGODc3QVwiXG4gICAgICAvPlxuICAgICAgPHBhdGggZD1cIk0xOC40NTg1IDBWMTUuNjU4MkgyMC4zMTYyVjBIMTguNDU4NVpcIiBmaWxsPVwiIzM3NDE0NlwiIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIzLjY0MzUgNC41MTE2OFYxNS42NTgySDI1LjUwMTNWNC41MTE2OEgyMy42NDM1Wk0yMy4xNzkxIDEuNDE1NDNDMjMuMTc5MSAyLjE4OTQ5IDIzLjc3NjIgMi43ODY2MiAyNC41NzI0IDIuNzg2NjJDMjUuMzY4NiAyLjc4NjYyIDI1Ljk2NTcgMi4xODk0OSAyNS45NjU3IDEuNDE1NDNDMjUuOTY1NyAwLjYxOTI1IDI1LjM2ODYgMCAyNC41NzI0IDBDMjMuNzc2MiAwIDIzLjE3OTEgMC42MTkyNSAyMy4xNzkxIDEuNDE1NDNaXCJcbiAgICAgICAgZmlsbD1cIiMzNzQxNDZcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzcuNjI5MiA3LjgwNjk3QzM3LjYyOTIgNS41OTUzNiAzNi4zOTA2IDQuMzM0NzUgMzQuMzU2IDQuMzM0NzVDMzIuODA3OCA0LjMzNDc1IDMxLjQ4MDkgNS4xMzA5MyAzMC42NjI2IDYuNTY4NDdWNC41MTE2OEgyOC44MDQ4VjE1LjY1ODJIMzAuNjYyNlYxMC45OTE3QzMwLjY2MjYgNy44OTU0MyAzMi4xODg2IDYuMDE1NTcgMzMuODQ3MyA2LjAxNTU3QzM1LjA4NTggNi4wMTU1NyAzNS43NzE0IDYuNzY3NTEgMzUuNzcxNCA4LjI5MzUyVjE1LjY1ODJIMzcuNjI5MlY3LjgwNjk3WlwiXG4gICAgICAgIGZpbGw9XCIjMzc0MTQ2XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQyLjQzNzMgMTIuNDUxM0M0Mi40MzczIDExLjE5MDcgNDMuNDk4OSAxMC40ODMgNDUuNDAwOSAxMC40ODNINDcuMzkxM1YxMC43NDg0QzQ3LjM5MTMgMTMuMjY5NiA0NS43MTA1IDE0LjE1NDMgNDQuMjczIDE0LjE1NDNDNDMuMTAwOCAxNC4xNTQzIDQyLjQzNzMgMTMuNTEyOSA0Mi40MzczIDEyLjQ1MTNaTTQ5LjI0OTEgOC41MzY4QzQ5LjI0OTEgNS41NzMyNSA0Ny40MTM0IDQuMzM0NzUgNDQuOTU4NiA0LjMzNDc1QzQyLjg1NzUgNC4zMzQ3NSA0MS4zMDk0IDUuNTA2OSA0MC45OTk4IDcuMzg2NzZMNDIuNjM2NCA3Ljc2Mjc0QzQyLjg3OTYgNi42NTY5MyA0My44MDg1IDYuMDE1NTcgNDQuOTU4NiA2LjAxNTU3QzQ2LjMwNzYgNi4wMTU1NyA0Ny4zOTEzIDYuNTkwNTkgNDcuMzkxMyA4LjMxNTY0VjguODAyMTlINDUuNTc3OEM0Mi41MjU4IDguODAyMTkgNDAuNTM1MyAxMC4wNjI4IDQwLjUzNTMgMTIuNDUxM0M0MC41MzUzIDE0LjgzOTkgNDIuMTI3NyAxNS44MzUxIDQzLjk4NTQgMTUuODM1MUM0NS42NDQyIDE1LjgzNTEgNDYuNzcyMSAxNS4xMDUzIDQ3LjQ3OTggMTQuMDg3OUw0Ny43ODk0IDE1LjY1ODJINDkuMjQ5MVY4LjUzNjhaXCJcbiAgICAgICAgZmlsbD1cIiMzNzQxNDZcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCIvKipcbiAqIENvbXBvbmVudCBkaXNwbGF5aW5nIERyLiBQYXRlbCBhbmQgRHIuIFBhdGlsXG4gKiBUT0RPOiBDYW4gaW5jbHVkZSBtb3JlIHBlb3BsZSArIGEgbGluayB0byBldmVyeW9uZVxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgUHJhY3RpdGlvbmVyQ2FyZDogUmVhY3QuRkM8e1xuICB0aXRsZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG59PiA9ICh7IHRpdGxlLCBuYW1lLCBpbWFnZVVybCwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIHNvbGlkIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtOCBtYXgtdy1tZCBtZDptYXgtdy1sZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHctMTYgbXItNFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBiLTJcIiBzcmM9e2ltYWdlVXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj57bmFtZX08L2gzPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3RpdGxlfTwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y2hpbGRyZW59PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWVkaWNhbFRlYW06IFJlYWN0LkZDPFByb3BzPiA9ICh7IGhlYWRpbmcsIGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICB7aGVhZGluZyA/IGhlYWRpbmcgOiAnWW91ciBtZWRpY2FsIHRlYW0nfSAgICAgICAgICBcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTggbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtOFwiPlxuICAgICAgICB7IGRhdGEgJiYgZGF0YS5tYXAoKHtmaWVsZHN9LCBpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFByYWN0aXRpb25lckNhcmRcbiAgICAgICAgICAgICAgICBuYW1lPXtmaWVsZHMubmFtZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtmaWVsZHMucHJvZmlsZUltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGZpZWxkcy5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgICAgIDwvUHJhY3RpdGlvbmVyQ2FyZD5cbiAgICAgICAgICAgICkgXG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGljYWxUZWFtO1xuIiwiLyoqXG4gKiBTaG93cyB0aGUgc3RlcHMgZm9yIHRoZSBjYXJlIHByb2Nlc3MuIFwibmV3XCIgcHJlZml4IGlzXG4gKiBhIHJlbGljIG9mIHdoZW4gd2UgaGFkIHR3byBvcHRpb25zXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBTdGVwTnVtYmVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1jb3JhbC0zMDAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICB3LTE0IGgtMTQgbWQ6dy0xNiBtZDpoLTE2IGJnLXNlYXNoZWxsIHJvdW5kZWQtZnVsbCB0ZXh0LWNvcmFsIHRleHQteGwgZm9udC1ib2xkXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNvcmFsIGgtMTJcIiBzdHlsZT17eyB3aWR0aDogXCIycHhcIiB9fT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE5ld0NhcmVQcm9jZXNzOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBoZWFkaW5nLCBkYXRhIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBtYi04XCI+XG4gICAgICAgIHtoZWFkaW5nID8gaGVhZGluZyA6ICdPdXIgY2FyZSBwcm9jZXNzJ31cbiAgICAgIDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG1iLThcIj5HZXR0aW5nIFN0YXJ0ZWQ8L2gyPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC15LTIgbWQ6Z2FwLXktNCBnYXAteC0xIG1iLTIwIG1kOm1iLTBcIj5cblxuICAgICAgICAgIHsgZGF0YSAmJiBkYXRhLm1hcCgoe2ZpZWxkc30sIGluZGV4KT0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U3RlcE51bWJlcj57aW5kZXgrMX08L1N0ZXBOdW1iZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntmaWVsZHMuY2FyZVByb2Nlc3NOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21cIj57ZmllbGRzLmNhcmVQcm9jZXNzRGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtkYXRhLmxlbmd0aCAhPSBpbmRleCsxICYmIDxMaW5lIC8+fVxuICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgPC8+IFxuICAgICAgICAgICAgKSBcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7LyogPFN0ZXBOdW1iZXI+MTwvU3RlcE51bWJlcj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5GcmVlIEFzc2Vzc21lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+SXQgb25seSB0YWtlcyA1IG1pbnV0ZXMuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiAvPlxuXG4gICAgICAgICAgPFN0ZXBOdW1iZXI+MjwvU3RlcE51bWJlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+QXBwb2ludG1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIE1lZXQgd2l0aCBhIGNsaW5pY2lhbiBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgLz5cblxuICAgICAgICAgIDxTdGVwTnVtYmVyPjM8L1N0ZXBOdW1iZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj5QcmVzY3JpcHRpb248L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIEZSRUUgbWVkaWNhdGlvbiBhbmQgZGVsaXZlcnkgaW4gMi0zIGJ1c2luZXNzIGRheXMuXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2IC8+XG5cbiAgICAgICAgICA8U3RlcE51bWJlcj40PC9TdGVwTnVtYmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgXCI+UmVndWxhciBDaGVjay1pbnM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIEdldCByZWZpbGxzLCBjaGVjayBpbiB3aXRoIHlvdXIgcHJvdmlkZXIsIGFuZCB0cmFjayB5b3VyIHByb2dyZXNzXG4gICAgICAgICAgICAgIC0gYWxsIGF0IHlvdXIgb3duIHBhY2UuXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAvPiAqL31cblxuXG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBteC00XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgT3VyIGNhcmUgcHJvY2Vzc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOi1tdC04IGdyaWQgZ3JpZC1jb2xzLTIgc3BhY2UteS0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgIGl0ZW1zLWNlbnRlciBweC00XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fzc2Vzc21lbnQuc3ZnXCIgY2xhc3NOYW1lPVwibXItNCBtdC0xMlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhzXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPlBlcnNvbmFsaXplZCBBc3Nlc3NtZW50czwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICBJbiAxMCBtaW51dGVzLCB3ZSZhcG9zO2xsIGdldCB0byBrbm93IHlvdSBhbmQgc3VnZ2VzdCBhIHByb3ZpZGVyXG4gICAgICAgICAgICB0aGF0IGZpdHMgeW91ciB1bmlxdWUgbmVlZHMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC00XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FwcG9pbnRtZW50LnN2Z1wiIGNsYXNzTmFtZT1cIm1yLTRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5Db252ZW5pZW50IEFwcG9pbnRtZW50czwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICBNZWV0IHdpdGggYSBjbGluaWNpYW4gZnJvbSB0aGUgY29tZm9ydCBvZiB5b3VyIGhvbWUuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweC00XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3ByZXNjcmlwdGlvbi5zdmdcIiBjbGFzc05hbWU9XCJtci00XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteHNcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+RnJlZSBEZWxpdmVyeTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICBGUkVFIG1lZGljaW5lIGRlbGl2ZXJ5IGluIDItMyBidXNpbmVzcyBkYXlzLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FyZVByb2Nlc3M7XG4iLCIvKipcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IHByaWNpbmcgb24gdGhlIGxhbmRpbmcgcGFnZVxuICovXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDVEFCdXR0b24gZnJvbSBcIi4vQ1RBQnV0dG9uXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgQ2hlY2ttYXJrID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGNsYXNzTmFtZT1cIm1sLTQgbWQ6bWwtMCBtci00IGZsZXgtc2hyaW5rLTBcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNi44NDc5OSAxMy4xOTY4TDE1LjY5MjQgMS41MTgzNUwxNC4wNjI3IDAuMjg0MThMNi40NDU1NSAxMC4zNDIxTDEuOTM4ODUgNy4xMzYyNEwwLjc1MzkwNiA4LjgwMTk2TDYuODQ3OTkgMTMuMTk2OFpcIlxuICAgICAgICBmaWxsPVwiIzM3NDE0NlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3QgUHJpY2luZzogUmVhY3QuRkM8UHJvcHM+ID0gKHtkYXRhfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYWZmb3JkYWJsZVBsYW5zSGVhZGluZyxcbiAgICBzdGFydGluZ0FzTG93SGVhZGluZ1RleHQsXG4gICAgc3RhcnRpbmdBc0xvd0JlbG93VGV4dCxcbiAgICBwcmluZ0hlaWdodFBvaW50cyxcbiAgICBpbnN1cmFuY2VBY2NlcHRlZFRleHQsXG4gICAgaW5zdXJhbmNlQWNjZXB0ZWRCZWxvd1RleHRcbiAgfSA9IGRhdGFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6cHktMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gei0xMCBhYnNvbHV0ZSB0LTAgaC1mdWxsIHctZnVsbCBiZy1ibGFjayBvcGFjaXR5LTMwXCIgLz5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3NOYW1lPVwiei0zMCBibG9jayBtZDpoaWRkZW4gYWJzb2x1dGUgdC0wIGgtZnVsbCB3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBtYi0xMlwiXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjQ1JVwiLCBib3R0b206IFwiNTAlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEl0JmFwb3M7cyB0aW1lIHRvIGJlIHlvdXJzZWxmIGFnYWluLlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTYgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvcHJpY2luZ19pbWFnZV8zLmpwZWdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtZDpweC0xMCBweS0xMiBtZDpweS00IG1kOm1heC13LXhsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICB7LyogPGgxIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayB0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBtYi04XCI+XG4gICAgICAgICAgQWZmb3JkYWJsZSBwbGFucyB0byBoZWxwIHlvdSBmZWVsIGJldHRlclxuICAgICAgICA8L2gxPiAqL31cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIG1kOnRleHQtNHhsIG1iLThcIj5cbiAgICAgICAgICB7YWZmb3JkYWJsZVBsYW5zSGVhZGluZyA/IGFmZm9yZGFibGVQbGFuc0hlYWRpbmcgOiAnQWZmb3JkYWJsZSBwbGFucyB0byBoZWxwIHlvdSBmZWVsIGJldHRlcid9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgbWItMiBmb250LWJvbGRcIj5cbiAgICAgICAgICB7c3RhcnRpbmdBc0xvd0hlYWRpbmdUZXh0ID8gc3RhcnRpbmdBc0xvd0hlYWRpbmdUZXh0IDogJ1N0YXJ0aW5nIGFzIGxvdyBhcyA8cz4kOTU8L3M+ICQ1IGZvciB5b3VyIGZpcnN0IG1vbnRoLid9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc20gbWItMTBcIj5cbiAgICAgICAgICB7c3RhcnRpbmdBc0xvd0JlbG93VGV4dCA/IHN0YXJ0aW5nQXNMb3dCZWxvd1RleHQgOiAnSnVzdCAkOTUgYSBtb250aCBhZnRlciB0aGF0Lid9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTIgbWItOCB3LWZ1bGwgbXgtYXV0byBtZDp3LTQvNVwiPlxuICAgICAgICB7IHByaW5nSGVpZ2h0UG9pbnRzICYmIHByaW5nSGVpZ2h0UG9pbnRzLm1hcCgoe2ZpZWxkc30sIGluZGV4KT0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2ttYXJrIC8+XG4gICAgICAgICAgICAgICAge2ZpZWxkcy5pdGVtfVxuICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgICkgXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENoZWNrbWFyayAvPlxuICAgICAgICAgICAgVW5saW1pdGVkIHZpZGVvIGNvbnN1bHRhdGlvbnMgd2l0aCB5b3VyIHByb3ZpZGVyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDaGVja21hcmsgLz5cbiAgICAgICAgICAgIFVubGltaXRlZCBtZXNzYWdpbmcgd2l0aCB5b3VyIHByb3ZpZGVyXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDaGVja21hcmsgLz5cbiAgICAgICAgICAgIEZyZWUgbWVkaWNhdGlvbiBkZWxpdmVyeSB0byB5b3VyIGRvb3JcbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENoZWNrbWFyayAvPlxuICAgICAgICAgICAgUmVndWxhciBwcm9ncmVzcyB0cmFja2luZ1xuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Q1RBQnV0dG9uIGNsYXNzTmFtZT1cInctNzIgbWQ6dy1mdWxsIG14LWF1dG9cIj5cbiAgICAgICAgICBTdGFydCBmcmVlIGFzc2Vzc21lbnRcbiAgICAgICAgPC9DVEFCdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7aW5zdXJhbmNlQWNjZXB0ZWRUZXh0ID8gaW5zdXJhbmNlQWNjZXB0ZWRUZXh0IDogJ0luc3VyYW5jZSBhY2NlcHRlZCwgYnV0IG5vdCBuZWVkZWQuJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHtpbnN1cmFuY2VBY2NlcHRlZEJlbG93VGV4dCA/IGluc3VyYW5jZUFjY2VwdGVkQmVsb3dUZXh0IDogJ0Vhc3kgb3V0IG9mIG5ldHdvcmsgY2xhaW1zLiBIU0EvRlNBIGVsaWdpYmxlLiBNZWRpY2F0aW9ucyBlbGlnaWJsZSBmb3IgaW5zdXJhbmNlIGNvdmVyYWdlIGFyZSBiaWxsZWQgc2VwYXJhdGVseS4nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcbiIsIi8qKlxuICogVXNlZCB0byBkZW5vYXRlIGEgc2VjdGlvbiBvbiB0aGUgbGFuZGluZyBwYWdlXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBpZCB0YWcgZm9yIHRoZSBzZWN0aW9uXG4gIGlkPzogc3RyaW5nO1xuICAvLyBhbnkgQ1NTIGNsYXNzZXMgdG8gYXBwbHksIGlmIGFwcGxpY2FibGVcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAvLyB3aGV0aGVyIHRvIHJlbW92ZSBwYWRkaW5nXG4gIG5vUGFkZGluZz86IGJvb2xlYW47XG4gIC8vIG9wdGlvbmFsIENTUyBwcm9wZXJ0aWVzXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbn1cblxuY29uc3QgU2VjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgbm9QYWRkaW5nLFxuICAuLi5vdGhlclByb3BzXG59KSA9PiB7XG4gIGNvbnN0IGNvbWJpbmVkQ2xhc3MgPSBjeCghbm9QYWRkaW5nID8gXCJweS0xMiBtZDpweS0yOCBweC02XCIgOiBcIlwiLCBjbGFzc05hbWUpO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y29tYmluZWRDbGFzc30gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCIvKipcbiAqIFNWRyBkaXNwbGF5aW5nIDUgcG9pbnRlZCBzdGFycyBvbiB0aGUgbGFuZGluZyBwYWdlXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmNvbnN0IFNoYXJwU3RhcnM6IFJlYWN0LkZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEyOCAyMVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTExLjE4OTIgMC43MTk3OTFDMTEuMDk5NCAwLjcyNDE1MiAxMS4wMTMxIDAuNzU1Njk4IDEwLjk0MTYgMC44MTAyNjdDMTAuODcwMiAwLjg2NDgzNSAxMC44MTcgMC45Mzk4NDQgMTAuNzg5MSAxLjAyNTMzTDguNTYzMjYgNy43MDM2OEgxLjQzNDY1QzEuMzQxNDIgNy43MDM5OCAxLjI1MDY1IDcuNzMzNjYgMS4xNzUyNSA3Ljc4ODUxQzEuMDk5ODYgNy44NDMzNiAxLjA0MzY3IDcuOTIwNTcgMS4wMTQ2NyA4LjAwOTE5QzAuOTg1NjcxIDguMDk3ODEgMC45ODUzNCA4LjE5MzMxIDEuMDEzNzIgOC4yODIxMkMxLjA0MjExIDguMzcwOTQgMS4wOTc3NiA4LjQ0ODU0IDEuMTcyNzggOC41MDM5MUw2Ljk2Mjk2IDEyLjczNzlMNC43MzcwOSAxOS42NDlDNC43MDgxMiAxOS43MzgyIDQuNzA4MTcgMTkuODM0MyA0LjczNzI1IDE5LjkyMzVDNC43NjYzMiAyMC4wMTI3IDQuODIyOTIgMjAuMDkwNCA0Ljg5ODkxIDIwLjE0NTNDNC45NzQ5IDIwLjIwMDMgNS4wNjYzNSAyMC4yMjk4IDUuMTYwMTQgMjAuMjI5NUM1LjI1MzkyIDIwLjIyOTIgNS4zNDUyIDIwLjE5OTIgNS40MjA4NSAyMC4xNDM3TDExLjIxMSAxNS45MDk4TDE3LjAwMTIgMjAuMTQzN0MxNy4wNzY5IDIwLjE5OTIgMTcuMTY4MiAyMC4yMjkyIDE3LjI2MTkgMjAuMjI5NUMxNy4zNTU3IDIwLjIyOTggMTcuNDQ3MiAyMC4yMDAzIDE3LjUyMzIgMjAuMTQ1M0MxNy41OTkyIDIwLjA5MDQgMTcuNjU1OCAyMC4wMTI3IDE3LjY4NDggMTkuOTIzNUMxNy43MTM5IDE5LjgzNDMgMTcuNzE0IDE5LjczODIgMTcuNjg1IDE5LjY0OUwxNS40NTkxIDEyLjczNzlMMjEuMjQ5MyA4LjUwMzkxQzIxLjMyNDMgOC40NDg1NCAyMS4zOCA4LjM3MDk0IDIxLjQwODMgOC4yODIxMkMyMS40MzY3IDguMTkzMzEgMjEuNDM2NCA4LjA5NzgxIDIxLjQwNzQgOC4wMDkxOUMyMS4zNzg0IDcuOTIwNTcgMjEuMzIyMiA3Ljg0MzM2IDIxLjI0NjggNy43ODg1MUMyMS4xNzE0IDcuNzMzNjYgMjEuMDgwNyA3LjcwMzk4IDIwLjk4NzQgNy43MDM2OEgxMy44NTg4TDExLjYzMjkgMS4wMjUzM0MxMS42MDI4IDAuOTMyNzQ1IDExLjU0MyAwLjg1MjY2IDExLjQ2MjggMC43OTc0MzhDMTEuMzgyNiAwLjc0MjIxNiAxMS4yODY1IDAuNzE0OTMyIDExLjE4OTIgMC43MTk3OTFaXCJcbiAgICAgICAgZmlsbD1cIiMzNzQxNDZcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNjQuMTkxMiAwLjcxOTc5MUM2NC4xMDE0IDAuNzI0MTUyIDY0LjAxNSAwLjc1NTY5OCA2My45NDM2IDAuODEwMjY3QzYzLjg3MjEgMC44NjQ4MzUgNjMuODE4OSAwLjkzOTg0NCA2My43OTExIDEuMDI1MzNMNjEuNTY1MiA3LjcwMzY4SDU0LjQzNjZDNTQuMzQzNCA3LjcwMzk4IDU0LjI1MjYgNy43MzM2NiA1NC4xNzcyIDcuNzg4NTFDNTQuMTAxOCA3Ljg0MzM2IDU0LjA0NTYgNy45MjA1NyA1NC4wMTY2IDguMDA5MTlDNTMuOTg3NiA4LjA5NzgxIDUzLjk4NzMgOC4xOTMzMSA1NC4wMTU3IDguMjgyMTJDNTQuMDQ0MSA4LjM3MDk0IDU0LjA5OTcgOC40NDg1NCA1NC4xNzQ3IDguNTAzOTFMNTkuOTY0OSAxMi43Mzc5TDU3LjczOSAxOS42NDlDNTcuNzEwMSAxOS43MzgyIDU3LjcxMDEgMTkuODM0MyA1Ny43MzkyIDE5LjkyMzVDNTcuNzY4MyAyMC4wMTI3IDU3LjgyNDkgMjAuMDkwNCA1Ny45MDA5IDIwLjE0NTNDNTcuOTc2OCAyMC4yMDAzIDU4LjA2ODMgMjAuMjI5OCA1OC4xNjIxIDIwLjIyOTVDNTguMjU1OSAyMC4yMjkyIDU4LjM0NzIgMjAuMTk5MiA1OC40MjI4IDIwLjE0MzdMNjQuMjEzIDE1LjkwOThMNzAuMDAzMiAyMC4xNDM3QzcwLjA3ODggMjAuMTk5MiA3MC4xNzAxIDIwLjIyOTIgNzAuMjYzOSAyMC4yMjk1QzcwLjM1NzcgMjAuMjI5OCA3MC40NDkxIDIwLjIwMDMgNzAuNTI1MSAyMC4xNDUzQzcwLjYwMTEgMjAuMDkwNCA3MC42NTc3IDIwLjAxMjcgNzAuNjg2OCAxOS45MjM1QzcwLjcxNTkgMTkuODM0MyA3MC43MTU5IDE5LjczODIgNzAuNjg2OSAxOS42NDlMNjguNDYxMSAxMi43Mzc5TDc0LjI1MTMgOC41MDM5MUM3NC4zMjYzIDguNDQ4NTQgNzQuMzgxOSA4LjM3MDk0IDc0LjQxMDMgOC4yODIxMkM3NC40Mzg3IDguMTkzMzEgNzQuNDM4NCA4LjA5NzgxIDc0LjQwOTQgOC4wMDkxOUM3NC4zODA0IDcuOTIwNTcgNzQuMzI0MiA3Ljg0MzM2IDc0LjI0ODggNy43ODg1MUM3NC4xNzM0IDcuNzMzNjYgNzQuMDgyNiA3LjcwMzk4IDczLjk4OTQgNy43MDM2OEg2Ni44NjA4TDY0LjYzNDkgMS4wMjUzM0M2NC42MDQ3IDAuOTMyNzQ1IDY0LjU0NDkgMC44NTI2NiA2NC40NjQ3IDAuNzk3NDM4QzY0LjM4NDYgMC43NDIyMTYgNjQuMjg4NCAwLjcxNDkzMiA2NC4xOTEyIDAuNzE5NzkxWlwiXG4gICAgICAgIGZpbGw9XCIjMzc0MTQ2XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTM3LjY5MDIgMC43MTk3OTFDMzcuNjAwNCAwLjcyNDE1MiAzNy41MTQgMC43NTU2OTggMzcuNDQyNiAwLjgxMDI2N0MzNy4zNzExIDAuODY0ODM1IDM3LjMxOCAwLjkzOTg0NCAzNy4yOTAxIDEuMDI1MzNMMzUuMDY0MiA3LjcwMzY4SDI3LjkzNTZDMjcuODQyNCA3LjcwMzk4IDI3Ljc1MTYgNy43MzM2NiAyNy42NzYyIDcuNzg4NTFDMjcuNjAwOCA3Ljg0MzM2IDI3LjU0NDYgNy45MjA1NyAyNy41MTU2IDguMDA5MTlDMjcuNDg2NiA4LjA5NzgxIDI3LjQ4NjMgOC4xOTMzMSAyNy41MTQ3IDguMjgyMTJDMjcuNTQzMSA4LjM3MDk0IDI3LjU5ODcgOC40NDg1NCAyNy42NzM4IDguNTAzOTFMMzMuNDYzOSAxMi43Mzc5TDMxLjIzODEgMTkuNjQ5QzMxLjIwOTEgMTkuNzM4MiAzMS4yMDkxIDE5LjgzNDMgMzEuMjM4MiAxOS45MjM1QzMxLjI2NzMgMjAuMDEyNyAzMS4zMjM5IDIwLjA5MDQgMzEuMzk5OSAyMC4xNDUzQzMxLjQ3NTkgMjAuMjAwMyAzMS41NjczIDIwLjIyOTggMzEuNjYxMSAyMC4yMjk1QzMxLjc1NDkgMjAuMjI5MiAzMS44NDYyIDIwLjE5OTIgMzEuOTIxOCAyMC4xNDM3TDM3LjcxMiAxNS45MDk4TDQzLjUwMjIgMjAuMTQzN0M0My41Nzc5IDIwLjE5OTIgNDMuNjY5MSAyMC4yMjkyIDQzLjc2MjkgMjAuMjI5NUM0My44NTY3IDIwLjIyOTggNDMuOTQ4MiAyMC4yMDAzIDQ0LjAyNDEgMjAuMTQ1M0M0NC4xMDAxIDIwLjA5MDQgNDQuMTU2NyAyMC4wMTI3IDQ0LjE4NTggMTkuOTIzNUM0NC4yMTQ5IDE5LjgzNDMgNDQuMjE0OSAxOS43MzgyIDQ0LjE4NiAxOS42NDlMNDEuOTYwMSAxMi43Mzc5TDQ3Ljc1MDMgOC41MDM5MUM0Ny44MjUzIDguNDQ4NTQgNDcuODgwOSA4LjM3MDk0IDQ3LjkwOTMgOC4yODIxMkM0Ny45Mzc3IDguMTkzMzEgNDcuOTM3NCA4LjA5NzgxIDQ3LjkwODQgOC4wMDkxOUM0Ny44Nzk0IDcuOTIwNTcgNDcuODIzMiA3Ljg0MzM2IDQ3Ljc0NzggNy43ODg1MUM0Ny42NzI0IDcuNzMzNjYgNDcuNTgxNiA3LjcwMzk4IDQ3LjQ4ODQgNy43MDM2OEg0MC4zNTk4TDM4LjEzMzkgMS4wMjUzM0MzOC4xMDM4IDAuOTMyNzQ1IDM4LjA0NCAwLjg1MjY2IDM3Ljk2MzggMC43OTc0MzhDMzcuODgzNiAwLjc0MjIxNiAzNy43ODc0IDAuNzE0OTMyIDM3LjY5MDIgMC43MTk3OTFaXCJcbiAgICAgICAgZmlsbD1cIiMzNzQxNDZcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNOTAuNjkyNiAwLjcxOTc5MUM5MC42MDI4IDAuNzI0MTUyIDkwLjUxNjUgMC43NTU2OTggOTAuNDQ1IDAuODEwMjY3QzkwLjM3MzYgMC44NjQ4MzUgOTAuMzIwNCAwLjkzOTg0NCA5MC4yOTI2IDEuMDI1MzNMODguMDY2NyA3LjcwMzY4SDgwLjkzODFDODAuODQ0OCA3LjcwMzk4IDgwLjc1NDEgNy43MzM2NiA4MC42Nzg3IDcuNzg4NTFDODAuNjAzMyA3Ljg0MzM2IDgwLjU0NzEgNy45MjA1NyA4MC41MTgxIDguMDA5MTlDODAuNDg5MSA4LjA5NzgxIDgwLjQ4ODggOC4xOTMzMSA4MC41MTcxIDguMjgyMTJDODAuNTQ1NSA4LjM3MDk0IDgwLjYwMTIgOC40NDg1NCA4MC42NzYyIDguNTAzOTFMODYuNDY2NCAxMi43Mzc5TDg0LjI0MDUgMTkuNjQ5Qzg0LjIxMTUgMTkuNzM4MiA4NC4yMTE2IDE5LjgzNDMgODQuMjQwNyAxOS45MjM1Qzg0LjI2OTcgMjAuMDEyNyA4NC4zMjYzIDIwLjA5MDQgODQuNDAyMyAyMC4xNDUzQzg0LjQ3ODMgMjAuMjAwMyA4NC41Njk4IDIwLjIyOTggODQuNjYzNiAyMC4yMjk1Qzg0Ljc1NzMgMjAuMjI5MiA4NC44NDg2IDIwLjE5OTIgODQuOTI0MyAyMC4xNDM3TDkwLjcxNDUgMTUuOTA5OEw5Ni41MDQ2IDIwLjE0MzdDOTYuNTgwMyAyMC4xOTkyIDk2LjY3MTYgMjAuMjI5MiA5Ni43NjU0IDIwLjIyOTVDOTYuODU5MSAyMC4yMjk4IDk2Ljk1MDYgMjAuMjAwMyA5Ny4wMjY2IDIwLjE0NTNDOTcuMTAyNiAyMC4wOTA0IDk3LjE1OTIgMjAuMDEyNyA5Ny4xODgyIDE5LjkyMzVDOTcuMjE3MyAxOS44MzQzIDk3LjIxNzQgMTkuNzM4MiA5Ny4xODg0IDE5LjY0OUw5NC45NjI1IDEyLjczNzlMMTAwLjc1MyA4LjUwMzkxQzEwMC44MjggOC40NDg1NCAxMDAuODgzIDguMzcwOTQgMTAwLjkxMiA4LjI4MjEyQzEwMC45NCA4LjE5MzMxIDEwMC45NCA4LjA5NzgxIDEwMC45MTEgOC4wMDkxOUMxMDAuODgyIDcuOTIwNTcgMTAwLjgyNiA3Ljg0MzM2IDEwMC43NSA3Ljc4ODUxQzEwMC42NzUgNy43MzM2NiAxMDAuNTg0IDcuNzAzOTggMTAwLjQ5MSA3LjcwMzY4SDkzLjM2MjJMOTEuMTM2NCAxLjAyNTMzQzkxLjEwNjIgMC45MzI3NDUgOTEuMDQ2NCAwLjg1MjY2IDkwLjk2NjIgMC43OTc0MzhDOTAuODg2IDAuNzQyMjE2IDkwLjc4OTkgMC43MTQ5MzIgOTAuNjkyNiAwLjcxOTc5MVpcIlxuICAgICAgICBmaWxsPVwiIzM3NDE0NlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMTcuMTk0IDAuNzE5NzkxQzExNy4xMDQgMC43MjQxNTIgMTE3LjAxNyAwLjc1NTY5OCAxMTYuOTQ2IDAuODEwMjY3QzExNi44NzUgMC44NjQ4MzUgMTE2LjgyMSAwLjkzOTg0NCAxMTYuNzk0IDEuMDI1MzNMMTE0LjU2OCA3LjcwMzY4SDEwNy40MzlDMTA3LjM0NiA3LjcwMzk4IDEwNy4yNTUgNy43MzM2NiAxMDcuMTggNy43ODg1MUMxMDcuMTA0IDcuODQzMzYgMTA3LjA0OCA3LjkyMDU3IDEwNy4wMTkgOC4wMDkxOUMxMDYuOTkgOC4wOTc4MSAxMDYuOTkgOC4xOTMzMSAxMDcuMDE4IDguMjgyMTJDMTA3LjA0NyA4LjM3MDk0IDEwNy4xMDIgOC40NDg1NCAxMDcuMTc3IDguNTAzOTFMMTEyLjk2NyAxMi43Mzc5TDExMC43NDEgMTkuNjQ5QzExMC43MTMgMTkuNzM4MiAxMTAuNzEzIDE5LjgzNDMgMTEwLjc0MiAxOS45MjM1QzExMC43NzEgMjAuMDEyNyAxMTAuODI3IDIwLjA5MDQgMTEwLjkwMyAyMC4xNDUzQzExMC45NzkgMjAuMjAwMyAxMTEuMDcxIDIwLjIyOTggMTExLjE2NSAyMC4yMjk1QzExMS4yNTggMjAuMjI5MiAxMTEuMzUgMjAuMTk5MiAxMTEuNDI1IDIwLjE0MzdMMTE3LjIxNSAxNS45MDk4TDEyMy4wMDYgMjAuMTQzN0MxMjMuMDgxIDIwLjE5OTIgMTIzLjE3MyAyMC4yMjkyIDEyMy4yNjYgMjAuMjI5NUMxMjMuMzYgMjAuMjI5OCAxMjMuNDUyIDIwLjIwMDMgMTIzLjUyOCAyMC4xNDUzQzEyMy42MDQgMjAuMDkwNCAxMjMuNjYgMjAuMDEyNyAxMjMuNjg5IDE5LjkyMzVDMTIzLjcxOCAxOS44MzQzIDEyMy43MTggMTkuNzM4MiAxMjMuNjg5IDE5LjY0OUwxMjEuNDY0IDEyLjczNzlMMTI3LjI1NCA4LjUwMzkxQzEyNy4zMjkgOC40NDg1NCAxMjcuMzg0IDguMzcwOTQgMTI3LjQxMyA4LjI4MjEyQzEyNy40NDEgOC4xOTMzMSAxMjcuNDQxIDguMDk3ODEgMTI3LjQxMiA4LjAwOTE5QzEyNy4zODMgNy45MjA1NyAxMjcuMzI3IDcuODQzMzYgMTI3LjI1MSA3Ljc4ODUxQzEyNy4xNzYgNy43MzM2NiAxMjcuMDg1IDcuNzAzOTggMTI2Ljk5MiA3LjcwMzY4SDExOS44NjNMMTE3LjYzNyAxLjAyNTMzQzExNy42MDcgMC45MzI3NDUgMTE3LjU0NyAwLjg1MjY2IDExNy40NjcgMC43OTc0MzhDMTE3LjM4NyAwLjc0MjIxNiAxMTcuMjkxIDAuNzE0OTMyIDExNy4xOTQgMC43MTk3OTFaXCJcbiAgICAgICAgZmlsbD1cIiMzNzQxNDZcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJwU3RhcnM7XG4iLCIvKipcbiAqIFNob3dzIHRlc3RpbW9uaWFscyBvbiB0aGUgbGFuZGluZyBwYWdlXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaGFycFN0YXJzIGZyb20gXCIuL1NoYXJwU3RhcnNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5jb25zdCBUZXN0aW1vbmlhbDogUmVhY3QuRkM8eyB0aXRsZTogc3RyaW5nOyBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB9PiA9ICh7XG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgc3R5bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicC04IG1heC13LXNtIG1iLTQgdy1mdWxsIG1kOnctOTYgZmxleC1zaHJpbmstMFwiXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCBtYi04XCI+e3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgbWItOFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxTaGFycFN0YXJzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gIDxUZXN0aW1vbmlhbFxuICAgIGtleT1cInRlc3RpbW9uaWFsLTJcIlxuICAgIHRpdGxlPVwiUGF0aWVudCBmcm9tIE1pYW1pXCJcbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNzcsIDE4OCwgMTk1LCAwLjEpXCIsXG4gICAgfX1cbiAgPlxuICAgIE15IHByb3ZpZGVyIHdhcyBraW5kIGFuZCBjb25zaWRlcmF0ZS4gSGUgYXNrZWQgbWUgYSBsb3Qgb2YgcXVlc3Rpb25zIHRvIGdldFxuICAgIHRvIHRoZSByb290IG9mIG15IGZlZWxpbmdzLiBUaGUgbWVkaWNhdGlvbiBzaGlwbWVudCB3YXMgYWxzbyBzdXBlclxuICAgIGNvbnZlbmllbnQgZm9yIG1lLiBJJmFwb3M7bSBzbyBnbGFkIEkgd2FzIGFibGUgdG8gcXVpY2tseSBib29rIGFuXG4gICAgYXBwb2ludG1lbnQgd2l0aCBMaW5hLlxuICA8L1Rlc3RpbW9uaWFsPixcbiAgPFRlc3RpbW9uaWFsXG4gICAga2V5PVwidGVzdGltb25pYWwtM1wiXG4gICAgdGl0bGU9XCJQYXRpZW50IGZyb20gUGVuc2Fjb2xhXCJcbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDIxNywgMjA4LCAwLjcpXCIgfX1cbiAgPlxuICAgIEkgd2FzIGFibGUgdG8gYm9vayBhbiBhcHBvaW50bWVudCB3aXRoIERyLiBQIHdpdGhpbiBhIGRheS4gSGUgd2FzXG4gICAgdW5kZXJzdGFuZGluZywgc3RyYWlnaHRmb3J3YXJkLCBhbmQgY2FyaW5nLiBIZSBhbnN3ZXJlZCBhbGwgbXkgcXVlc3Rpb25zIGFuZFxuICAgIG1hZGUgbWUgZmVlbCBjb25maWRlbnQgYWJvdXQgbXkgdHJlYXRtZW50LiBJdCZhcG9zO3MgYmVlbiBhIGdyZWF0IGV4cGVyaWVuY2VcbiAgICBzbyBmYXIuXG4gIDwvVGVzdGltb25pYWw+LFxuICA8VGVzdGltb25pYWxcbiAgICBrZXk9XCJ0ZXN0aW1vbmlhbC0xXCJcbiAgICB0aXRsZT1cIlBhdGllbnQgZnJvbSBUYW1wYSBCYXlcIlxuICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc3LCAxODgsIDE5NSwgMC4xKVwiIH19XG4gID5cbiAgICBUZWxlaGVhbHRoIGlzIHNvIGltcG9ydGFudCwgaXQgZW5hYmxlcyBwZW9wbGUgdG8gZ2V0IGNhcmUgd2l0aCBhbiBhY3R1YWxcbiAgICBwZXJzb24gb3ZlciB2aWRlby4gU29tZXRpbWVzIHdlIGNhbiZhcG9zO3QgcGh5c2ljYWxseSBnZXQgdG8gYSBkb2N0b3ImYXBvcztzXG4gICAgb2ZmaWNlLCBidXQgbm93IExpbmEgb2ZmZXJzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUgd2hvIGNhbiZhcG9zO3QgZG9cbiAgICBpbi1wZXJzb24uIFRoYW5rcyBmb3IgY3JlYXRpbmcgdGhpcyBwbGF0Zm9ybSFcbiAgPC9UZXN0aW1vbmlhbD4sXG5dO1xuXG5jb25zdCBUZXN0aW1vbmlhbHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGhlYWRpbmcsIGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnSGVhZGluZyBpbnNpZGUnLCBkYXRhKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvM1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1iLThcIj5cbiAgICAgICAgICAgIHtoZWFkaW5nID8gaGVhZGluZyA6ICdMaWZlIGNoYW5naW5nIHJlc3VsdHMgZnJvbSByZWFsIG1lbWJlcnMnfSAgICAgICAgICBcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IG1kOmZsZXgtcm93IG92ZXJmbG93LWF1dG8gbWQ6c3BhY2UteC00XCI+XG4gICAgICAgIHsvKiB7dGVzdGltb25pYWxzfSAqL31cbiAgICAgICAgeyBkYXRhICYmIGRhdGEubWFwKCh7ZmllbGRzfSwgaW5kZXgpPT57ICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYoaW5kZXggJSAyID09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2B0ZXN0aW1vbmlhbC0ke2luZGV4KzF9YH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpZWxkcy5jbGllbnROYW1lfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NywgMTg4LCAxOTUsIDAuMSlcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZmllbGRzLnRlc3RpbW9uaWFsfVxuICAgICAgICAgICAgICAgICAgPC9UZXN0aW1vbmlhbD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsXG4gICAgICAgICAgICAgICAgICAgIGtleT17YHRlc3RpbW9uaWFsLSR7aW5kZXgrMX1gfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZmllbGRzLmNsaWVudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyMTcsIDIwOCwgMC43KVwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtmaWVsZHMudGVzdGltb25pYWx9XG4gICAgICAgICAgICAgICAgICA8L1Rlc3RpbW9uaWFsPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XG4iLCIvKipcbiAqIFNob3dzIGxpc3Qgb2YgY29uZGl0aW9ucyB0cmVhdGVkLlxuICogdW51c2VkP1xuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuY29uc3QgQ2hlY2ttYXJrID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIGNsYXNzTmFtZT1cIm1sLTQgbWQ6bWwtMCBtci00IGZsZXgtc2hyaW5rLTAgdGV4dC1kYXJrR3JheVwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk02Ljg0Nzk5IDEzLjE5NjhMMTUuNjkyNCAxLjUxODM1TDE0LjA2MjcgMC4yODQxOEw2LjQ0NTU1IDEwLjM0MjFMMS45Mzg4NSA3LjEzNjI0TDAuNzUzOTA2IDguODAxOTZMNi44NDc5OSAxMy4xOTY4WlwiXG4gICAgICAgIGZpbGw9XCIjMzc0MTQ2XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5jb25zdCBUcmVhdG1lbnRJdGVtOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxDaGVja21hcmsgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgV2hhdFdlVHJlYXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGhlYWRpbmcsIHN1YlRleHQsIGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzNcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBtYi04XCI+XG4gICAgICAgICAge2hlYWRpbmcgPyBoZWFkaW5nIDogJ0FueGlldHkgYW5kIGRlcHJlc3Npb24gY29tZSBpbiBtYW55IGZvcm1zJ30gXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAge3N1YlRleHQgPyBzdWJUZXh0IDogJ1RoYXQmYXBvcztzIHdoeSB3ZSBzcGVjaWFsaXplIGluIHRyZWF0aW5nIHRoZSBmdWxsIHNwZWN0cnVtIG9mIHJlbGF0ZWQgY29uZGl0aW9ucyB3aXRoIHBlcnNvbmFsaXplZCB0cmVhdG1lbnQgcGxhbnMgdGhhdCBhcmUgcmlnaHQgZm9yIHlvdS4nfSBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC04IG1kOm10LTAgZ3JpZCBncmlkLWNvbHMtMiBteC1hdXRvIGdhcC14LTQgZ2FwLXktNCB0ZXh0LXNtIG1kOnRleHQtbWRcIj5cbiAgICAgIHsgZGF0YSAmJiBkYXRhLm1hcCgoe2ZpZWxkc30sIGluZGV4KT0+e1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxUcmVhdG1lbnRJdGVtPntmaWVsZHMuZGVwcmVzc2lvbkl0ZW19PC9UcmVhdG1lbnRJdGVtPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9ICBcbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaGF0V2VUcmVhdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRmFjZWJvb2sgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICBzdHJva2VNaXRlcmxpbWl0PVwiMlwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk01MTIgMjU3LjU1NWMwLTE0MS4zODUtMTE0LjYxNS0yNTYtMjU2LTI1NlMwIDExNi4xNyAwIDI1Ny41NTVjMCAxMjcuNzc3IDkzLjYxNiAyMzMuNjg1IDIxNiAyNTIuODl2LTE3OC44OWgtNjV2LTc0aDY1di01Ni40YzAtNjQuMTYgMzguMjE5LTk5LjYgOTYuNjk1LTk5LjYgMjguMDA5IDAgNTcuMzA1IDUgNTcuMzA1IDV2NjNoLTMyLjI4MWMtMzEuODAxIDAtNDEuNzE5IDE5LjczMy00MS43MTkgMzkuOTc4djQ4LjAyMmg3MWwtMTEuMzUgNzRIMjk2djE3OC44OWMxMjIuMzg1LTE5LjIwNSAyMTYtMTI1LjExMyAyMTYtMjUyLjg5elwiXG4gICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9vaztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5zdGFncmFtID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgdmlld0JveD1cIjAgMCA2MDAgNjAwXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjJcIlxuICA+XG4gICAgPGcgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMwMCA0NGMtNjkuNTI2IDAtNzguMjQ0LjI5NS0xMDUuNTQ5IDEuNTQtMjcuMjQ4IDEuMjQ0LTQ1Ljg1OCA1LjU3MS02Mi4xNDIgMTEuOS0xNi44MzQgNi41NDItMzEuMTEgMTUuMjk2LTQ1LjM0MiAyOS41MjgtMTQuMjMyIDE0LjIzMS0yMi45ODYgMjguNTA4LTI5LjUyOCA0NS4zNDItNi4zMjkgMTYuMjgzLTEwLjY1NiAzNC44OTMtMTEuOSA2Mi4xNDFDNDQuMjk1IDIyMS43NTYgNDQgMjMwLjQ3NCA0NCAzMDBjMCA2OS41MjQuMjk0IDc4LjI0MiAxLjU0IDEwNS41NDcgMS4yNDMgMjcuMjQ4IDUuNTcgNDUuODU4IDExLjkgNjIuMTQxIDYuNTQxIDE2LjgzNCAxNS4yOTUgMzEuMTEgMjkuNTI3IDQ1LjM0NCAxNC4yMzEgMTQuMjMxIDI4LjUwOCAyMi45ODUgNDUuMzQyIDI5LjUyNyAxNi4yODQgNi4zMjggMzQuODk0IDEwLjY1NiA2Mi4xNDIgMTEuODk5IDI3LjMwNSAxLjI0NSAzNi4wMjMgMS41NCAxMDUuNTQ5IDEuNTQgNjkuNTI0IDAgNzguMjQyLS4yOTUgMTA1LjU0Ny0xLjU0IDI3LjI0OC0xLjI0MyA0NS44NTgtNS41NzEgNjIuMTQxLTExLjg5OSAxNi44MzQtNi41NDIgMzEuMTEtMTUuMjk2IDQ1LjM0NC0yOS41MjcgMTQuMjMxLTE0LjIzMyAyMi45ODUtMjguNTEgMjkuNTI3LTQ1LjM0NCA2LjMyOC0xNi4yODMgMTAuNjU2LTM0Ljg5MyAxMS44OTktNjIuMTQgMS4yNDUtMjcuMzA2IDEuNTQtMzYuMDI0IDEuNTQtMTA1LjU0OCAwLTY5LjUyNi0uMjk1LTc4LjI0NC0xLjU0LTEwNS41NDktMS4yNDMtMjcuMjQ4LTUuNTcxLTQ1Ljg1OC0xMS44OTktNjIuMTQxLTYuNTQyLTE2LjgzNC0xNS4yOTYtMzEuMTEtMjkuNTI3LTQ1LjM0Mi0xNC4yMzMtMTQuMjMyLTI4LjUxLTIyLjk4Ni00NS4zNDQtMjkuNTI4LTE2LjI4My02LjMyOS0zNC44OTMtMTAuNjU2LTYyLjE0LTExLjlDMzc4LjI0MSA0NC4yOTYgMzY5LjUyMyA0NCAzMDAgNDR6bTAgNDYuMTI3YzY4LjM1NCAwIDc2LjQ1LjI2IDEwMy40NDUgMS40OTIgMjQuOTYgMS4xMzkgMzguNTE0IDUuMzEgNDcuNTM1IDguODE0IDExLjk1IDQuNjQ0IDIwLjQ3NyAxMC4xOTIgMjkuNDM1IDE5LjE1IDguOTU5IDguOTU4IDE0LjUwNiAxNy40ODcgMTkuMTUgMjkuNDM1IDMuNTA2IDkuMDIgNy42NzYgMjIuNTc2IDguODE1IDQ3LjUzNSAxLjIzMSAyNi45OTUgMS40OTIgMzUuMDkyIDEuNDkyIDEwMy40NDcgMCA2OC4zNTQtLjI2IDc2LjQ1LTEuNDkyIDEwMy40NDUtMS4xMzkgMjQuOTYtNS4zMSAzOC41MTQtOC44MTUgNDcuNTM1LTQuNjQ0IDExLjk1LTEwLjE5MSAyMC40NzctMTkuMTUgMjkuNDM1LTguOTU4IDguOTU5LTE3LjQ4NiAxNC41MDYtMjkuNDM1IDE5LjE1LTkuMDIgMy41MDYtMjIuNTc2IDcuNjc2LTQ3LjUzNSA4LjgxNC0yNi45OSAxLjIzMi0zNS4wODYgMS40OTMtMTAzLjQ0NSAxLjQ5My02OC4zNiAwLTc2LjQ1NS0uMjYtMTAzLjQ0Ny0xLjQ5My0yNC45Ni0xLjEzOC0zOC41MTQtNS4zMDgtNDcuNTM1LTguODE0LTExLjk1LTQuNjQ0LTIwLjQ3Ny0xMC4xOTEtMjkuNDM2LTE5LjE1LTguOTU4LTguOTU4LTE0LjUwNi0xNy40ODYtMTkuMTQ5LTI5LjQzNS0zLjUwNi05LjAyLTcuNjc2LTIyLjU3Ni04LjgxNS00Ny41MzUtMS4yMzItMjYuOTk0LTEuNDkyLTM1LjA5MS0xLjQ5Mi0xMDMuNDQ1IDAtNjguMzU1LjI2LTc2LjQ1MiAxLjQ5Mi0xMDMuNDQ3IDEuMTM5LTI0Ljk2IDUuMzEtMzguNTE0IDguODE1LTQ3LjUzNSA0LjY0My0xMS45NDggMTAuMTkxLTIwLjQ3NyAxOS4xNS0yOS40MzUgOC45NTgtOC45NTggMTcuNDg2LTE0LjUwNiAyOS40MzUtMTkuMTUgOS4wMi0zLjUwNSAyMi41NzYtNy42NzUgNDcuNTM1LTguODE0IDI2Ljk5NS0xLjIzMiAzNS4wOTItMS40OTIgMTAzLjQ0Ny0xLjQ5MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMwMCAzODUuMzMyYy00Ny4xMyAwLTg1LjMzNC0zOC4yMDUtODUuMzM0LTg1LjMzMiAwLTQ3LjEzIDM4LjIwNS04NS4zMzQgODUuMzM0LTg1LjMzNCA0Ny4xMjcgMCA4NS4zMzIgMzguMjA1IDg1LjMzMiA4NS4zMzQgMCA0Ny4xMjctMzguMjA1IDg1LjMzMi04NS4zMzIgODUuMzMyem0wLTIxNi43OTJjLTcyLjYwNCAwLTEzMS40NiA1OC44NTYtMTMxLjQ2IDEzMS40NiAwIDcyLjYwMiA1OC44NTYgMTMxLjQ1OCAxMzEuNDYgMTMxLjQ1OCA3Mi42MDIgMCAxMzEuNDU4LTU4Ljg1NiAxMzEuNDU4LTEzMS40NTggMC03Mi42MDQtNTguODU2LTEzMS40Ni0xMzEuNDU4LTEzMS40NnpNNDY3LjM3MiAxNjMuMzQ2YzAgMTYuOTY3LTEzLjc1NCAzMC43Mi0zMC43MiAzMC43MnMtMzAuNzItMTMuNzUzLTMwLjcyLTMwLjcyYzAtMTYuOTY2IDEzLjc1NC0zMC43MTkgMzAuNzItMzAuNzE5czMwLjcyIDEzLjc1MyAzMC43MiAzMC43MnpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGlua2VkSW4gPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICBzdHJva2VNaXRlcmxpbWl0PVwiMlwiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk00NzMuMzA1LTEuMzUzYzIwLjg4IDAgMzcuODg1IDE2LjUzMyAzNy44ODUgMzYuOTI2djQzOC4yNTFjMCAyMC4zOTMtMTcuMDA1IDM2Ljk1NC0zNy44ODUgMzYuOTU0SDM2Ljg0NmMtMjAuODM5IDAtMzcuNzczLTE2LjU2MS0zNy43NzMtMzYuOTU0VjM1LjU3M2MwLTIwLjM5MyAxNi45MzQtMzYuOTI2IDM3Ljc3My0zNi45MjZoNDM2LjQ1OXptLTM3LjgyOSA0MzYuMzg5VjMwMS4wMDJjMC02NS44MjItMTQuMjEyLTExNi40MjctOTEuMTItMTE2LjQyNy0zNi45NTUgMC02MS43MzkgMjAuMjYzLTcxLjg2NyAzOS40NzZoLTEuMDRWMTkwLjY0aC03Mi44MTF2MjQ0LjM5Nmg3NS44NjZWMzE0LjE1OGMwLTMxLjg4MyA2LjAzMS02Mi43NzMgNDUuNTU0LTYyLjc3MyAzOC45ODEgMCAzOS40NjggMzYuNDYxIDM5LjQ2OCA2NC44MDJ2MTE4Ljg0OWg3NS45NXpNMTUwLjk4NyAxOTAuNjRINzQuOTUzdjI0NC4zOTZoNzYuMDM0VjE5MC42NHpNMTEyLjk5IDY5LjE1MWMtMjQuMzk1IDAtNDQuMDY2IDE5LjczNS00NC4wNjYgNDQuMDQ3IDAgMjQuMzE4IDE5LjY3MSA0NC4wNTIgNDQuMDY2IDQ0LjA1MiAyNC4yOTkgMCA0NC4wMjYtMTkuNzM0IDQ0LjAyNi00NC4wNTIgMC0yNC4zMTItMTkuNzI3LTQ0LjA0Ny00NC4wMjYtNDQuMDQ3elwiXG4gICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRJbjtcbiIsIi8qKlxuICogVGhlIHByaW1hcnkgY29udGV4dCB1c2VkIGluIG91ciBmcm9udGVuZCwgd2hpY2ggaXMgZG9uZSBkdXJpbmcgb25ib2FyZGluZy5cbiAqIE9uY2UgYSB1c2VyIHNpZ25zIHVwIHdlIGNhbiByZWx5IG1vcmUgb24gc2VydmVyIHN0YXRlLlxuICovXG5pbXBvcnQge1xuICBEaXNjb3VudENvZGUsXG4gIFF1ZXN0aW9uUmVzcG9uc2UsXG4gIFVzZXJSZWZlcnJlclR5cGUsXG59IGZyb20gXCJAaGVhbHRoZ2VudC9zZXJ2ZXIvc3JjL2xpYi9hcGlfdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LFxuICBEaXNwYXRjaCxcbiAgU2V0U3RhdGVBY3Rpb24sXG4gIHVzZUNvbnRleHQsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcblxuLy8gVGhpcyBzaG91bGQgYmUgc3dpdGNoZWQgdG8gdXNlUmVkdWNlciBvciByZWNvaWwuanMgYXQgdGhpcyBwb2ludFxuXG5pbnRlcmZhY2UgT25ib2FyZGluZ0NvbnRleHQge1xuICAvLyBUaGUgdGltZSBzbG90IHRoZSB1c2VyIHNlbGVjdGVkIGZvciB0aGVpciBpbml0aWFsIGFwcG9pbnRtZW50XG4gIHNlbGVjdGVkVGltZVNsb3Q6IHN0cmluZztcbiAgc2V0U2VsZWN0ZWRUaW1lU2xvdDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFVzZXIncyBlbWFpbFxuICBlbWFpbDogc3RyaW5nO1xuICBzZXRFbWFpbDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFVzZXIncyBwaG9uZSBudW1iZXJcbiAgcGhvbmU6IHN0cmluZztcbiAgc2V0UGhvbmU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAvLyBUaGUgc3RhdGUgdGhlIHVzZXIgbGl2ZXMgaW4uIFVzZWQgdG8gZGV0ZXJtaW5lIGVsaWdpYmlsaXR5XG4gIHJlc2lkZW5jZVN0YXRlOiBzdHJpbmc7XG4gIHNldFJlc2lkZW5jZVN0YXRlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVGhlIGludGFrZSBpZCByZXR1cm5lZCBieSB0aGUgc2VydmVyIG9uY2UgdGhlIHVzZXIgZmlsbHMgb3V0IHRoZSBxdWl6XG4gIGludGFrZUlkOiBzdHJpbmc7XG4gIHNldEludGFrZUlkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVXNlcidzIGZpcnN0IG5hbWVcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHNldEZpcnN0TmFtZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFVzZXIncyBsYXN0IG5hbWVcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgc2V0TGFzdE5hbWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAvLyBVc2VyJ3MgemlwIGNvZGVcbiAgemlwQ29kZTogc3RyaW5nO1xuICBzZXRaaXBDb2RlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVGhlIGN1cnJlbnQgcXVlc3Rpb24gaW5kZXggd2l0aGluIHRoZSBxdWl6XG4gIGN1cnJlbnRRdWVzdGlvbklkeDogbnVtYmVyO1xuICBzZXRDdXJyZW50UXVlc3Rpb25JZHg6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAvLyBVc2VyJ3MgZGF0ZSBvZiBiaXJ0aFxuICBiaXJ0aGRhdGU6IERhdGU7XG4gIHNldEJpcnRoZGF0ZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RGF0ZT4+O1xuICAvLyBBIG5vdGlmaWNhdGlvbiB0byBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgZHVyaW5nIG9uYm9hcmRpbmcsIGlmIGFueVxuICBub3RpZmljYXRpb24/OiBzdHJpbmc7XG4gIHNldE5vdGlmaWNhdGlvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIEFuIGVycm9yIHRvIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBkdXJpbmcgb25ib2FyZGluZywgaWYgYW55XG4gIGVycm9yPzogc3RyaW5nO1xuICBzZXRFcnJvcjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFVzZXIncyByZXNwb25zZXMgdG8gdGhlIHF1aXpcbiAgYW5zd2VyczogQXJyYXk8UXVlc3Rpb25SZXNwb25zZT47XG4gIHNldEFuc3dlcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEFycmF5PFF1ZXN0aW9uUmVzcG9uc2U+Pj47XG59XG5cbmludGVyZmFjZSBCb29raW5nQ29udGV4dCB7XG4gIC8vIFNlcnZlciB0aW1lc2xvdCBJRFxuICBzbG90SWQ6IHN0cmluZztcbiAgLy8gYXBwb2ludG1lbnQgdGltZXN0YW1wXG4gIHNsb3REYXRlOiBEYXRlO1xufVxuXG5pbnRlcmZhY2UgQ29udGV4dFR5cGUge1xuICBvbmJvYXJkaW5nOiBPbmJvYXJkaW5nQ29udGV4dDtcbiAgYm9va2luZzogQm9va2luZ0NvbnRleHQ7XG4gIHNldEJvb2tpbmdDb250ZXh0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxCb29raW5nQ29udGV4dD4+O1xuICBkaXNjb3VudENvZGU/OiBEaXNjb3VudENvZGU7XG4gIHNldERpc2NvdW50Q29kZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RGlzY291bnRDb2RlIHwgdW5kZWZpbmVkPj47XG4gIGluaXRpYWxQYXJhbXM/OiBVc2VyUmVmZXJyZXJUeXBlO1xuICBzZXRJbml0aWFsUGFyYW1zOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxVc2VyUmVmZXJyZXJUeXBlIHwgdW5kZWZpbmVkPj47XG59XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRUeXBlPih7fSk7XG5cbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0UHJvdmlkZXI6IFJlYWN0LkZDPHt9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkVGltZVNsb3QsIHNldFNlbGVjdGVkVGltZVNsb3RdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXNpZGVuY2VTdGF0ZSwgc2V0UmVzaWRlbmNlU3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkaXNjb3VudENvZGUsIHNldERpc2NvdW50Q29kZV0gPSB1c2VTdGF0ZTxEaXNjb3VudENvZGUgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtpbnRha2VJZCwgc2V0SW50YWtlSWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ppcENvZGUsIHNldFppcENvZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb25JZHgsIHNldEN1cnJlbnRRdWVzdGlvbklkeF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGU8QXJyYXk8UXVlc3Rpb25SZXNwb25zZT4+KFtdKTtcbiAgY29uc3QgW2JpcnRoZGF0ZSwgc2V0QmlydGhkYXRlXSA9IHVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbml0aWFsUGFyYW1zLCBzZXRJbml0aWFsUGFyYW1zXSA9IHVzZVN0YXRlPFVzZXJSZWZlcnJlclR5cGU+KCk7XG5cbiAgY29uc3QgW2Jvb2tpbmdDb250ZXh0LCBzZXRCb29raW5nQ29udGV4dF0gPSB1c2VTdGF0ZTxCb29raW5nQ29udGV4dD4oe1xuICAgIHNsb3RJZDogXCJcIixcbiAgICBzbG90RGF0ZTogbmV3IERhdGUoKSxcbiAgfSk7XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgb25ib2FyZGluZzoge1xuICAgICAgc2VsZWN0ZWRUaW1lU2xvdCxcbiAgICAgIHNldFNlbGVjdGVkVGltZVNsb3QsXG4gICAgICBlbWFpbCxcbiAgICAgIHNldEVtYWlsLFxuICAgICAgcmVzaWRlbmNlU3RhdGUsXG4gICAgICBzZXRSZXNpZGVuY2VTdGF0ZSxcbiAgICAgIGludGFrZUlkLFxuICAgICAgc2V0SW50YWtlSWQsXG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBzZXRGaXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZSxcbiAgICAgIHNldExhc3ROYW1lLFxuICAgICAgcGhvbmUsXG4gICAgICBzZXRQaG9uZSxcbiAgICAgIHppcENvZGUsXG4gICAgICBzZXRaaXBDb2RlLFxuICAgICAgY3VycmVudFF1ZXN0aW9uSWR4LFxuICAgICAgc2V0Q3VycmVudFF1ZXN0aW9uSWR4LFxuICAgICAgYW5zd2VycyxcbiAgICAgIHNldEFuc3dlcnMsXG4gICAgICBiaXJ0aGRhdGUsXG4gICAgICBzZXRCaXJ0aGRhdGUsXG4gICAgICBub3RpZmljYXRpb24sXG4gICAgICBzZXROb3RpZmljYXRpb24sXG4gICAgICBlcnJvcixcbiAgICAgIHNldEVycm9yLFxuICAgIH0sXG4gICAgYm9va2luZzogYm9va2luZ0NvbnRleHQsXG4gICAgc2V0Qm9va2luZ0NvbnRleHQ6IHNldEJvb2tpbmdDb250ZXh0LFxuICAgIGRpc2NvdW50Q29kZSxcbiAgICBzZXREaXNjb3VudENvZGUsXG4gICAgaW5pdGlhbFBhcmFtcyxcbiAgICBzZXRJbml0aWFsUGFyYW1zLFxuICB9O1xuICByZXR1cm4gPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT57Y2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dDxDb250ZXh0VHlwZT4oQXBwQ29udGV4dCk7XG59XG4iLCIvKipcbiAqIEFsbCBBUEkgY2FsbHMgdXRpbGl6ZWQgYnkgdGhlIHBhdGllbnQgZmFjaW5nIHByb2R1Y3QuXG4gKi9cbmltcG9ydCB7XG4gIEFkZHJlc3MsXG4gIEFwcG9pbnRtZW50LFxuICBBdmFpbGFiaWxpdHlSZXNwb25zZSxcbiAgVGhyZWFkLFxuICBVc2VyUHJvZmlsZSxcbiAgVXNlclJlZ2lzdHJhdGlvbixcbiAgSW50YWtlRXZhbHVhdGlvblJlc3BvbnNlLFxuICBPbmJvYXJkaW5nU3RhdHVzLFxuICBJbmJveCxcbiAgUXVlc3Rpb25SZXNwb25zZSxcbiAgQ3JlYXRlVGhyZWFkUGFyYW1zLFxuICBQYXRpZW50UmVmZXJyYWwsXG4gIFByZXNjcmlwdGlvbixcbiAgUGhhcm1hY3ksXG4gIFByb2dyZXNzQ2hhcnQsXG59IGZyb20gXCJAaGVhbHRoZ2VudC9zZXJ2ZXIvc3JjL2xpYi9hcGlfdHlwZXNcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IFVTU3RhdGUgfSBmcm9tIFwiLi4vLi4vc2VydmVyL3NyYy91dGlscy9zdGF0ZXNcIjtcbmltcG9ydCB7bm9ybWFsaXplRGF0ZVRvVVRDfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGdldFVybCA9IChlbmRwb2ludDogc3RyaW5nKSA9PiB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKFwiaHR0cHM6Ly9oZ3N0YWdpbmcubmdyb2suaW9cIikgPiAtMSkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9oZ2FwaS5uZ3Jvay5pbyR7ZW5kcG9pbnR9YDtcbiAgfVxuICBjb25zdCBiYXNlVXJsID1cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2VfdXJsXCIpIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hHX0JBU0VfQVBJX1VSTDtcbiAgcmV0dXJuIGAke2Jhc2VVcmx9JHtlbmRwb2ludH1gO1xufTtcblxuY29uc3QgQVVUSF9UT0tFTl9LRVkgPSBcImF1dGhfdG9rZW5cIjtcblxuY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1c0NvZGUhOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG5cbmNvbnN0IGFwaUZldGNoID0gYXN5bmMgPFQ+KFxuICBtZXRob2Q6IHN0cmluZyxcbiAgdXJsOiBzdHJpbmcsXG4gIGJvZHk/OiBPYmplY3Rcbik6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KEFVVEhfVE9LRU5fS0VZKTtcbiAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH07XG4gIGlmICh0b2tlbikge1xuICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICB9XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VXJsKHVybCksIHtcbiAgICBoZWFkZXJzLFxuICAgIG1ldGhvZCxcbiAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsXG4gIH0pO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKGpzb24uZXJyb3IgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgfVxuICByZXR1cm4ganNvbiBhcyBQcm9taXNlPFQ+O1xufTtcblxuY29uc3QgZmlsZVVwbG9hZCA9IGFzeW5jIDxUPih1cmw6IHN0cmluZywgYm9keTogRm9ybURhdGEpOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChBVVRIX1RPS0VOX0tFWSk7XG4gIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH07XG4gIGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xuXG4gIHJldHVybiBmZXRjaChnZXRVcmwodXJsKSwge1xuICAgIGhlYWRlcnMsXG4gICAgbWV0aG9kLFxuICAgIGJvZHksXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8VD47XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0ID0gYXN5bmMgPFQ+KFxuICBlbmRwb2ludDogc3RyaW5nLFxuICBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUHJvbWlzZTxUPiA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgcGFyYW1TdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKTtcbiAgY29uc3QgdXJsID0gcGFyYW1TdHJpbmcubGVuZ3RoID4gMCA/IGAke2VuZHBvaW50fT8ke3BhcmFtU3RyaW5nfWAgOiBlbmRwb2ludDtcbiAgcmV0dXJuIGF3YWl0IGFwaUZldGNoKFwiR0VUXCIsIHVybCwgdW5kZWZpbmVkKTtcbn07XG5cbmNvbnN0IHBvc3QgPSBhc3luYyA8VD4odXJsOiBzdHJpbmcsIHJlcXVlc3Q6IE9iamVjdCk6IFByb21pc2U8VD4gPT4ge1xuICByZXR1cm4gYXdhaXQgYXBpRmV0Y2goXCJQT1NUXCIsIHVybCwgcmVxdWVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGVzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0PHsgc3RhdGVzOiBBcnJheTxVU1N0YXRlPiB9PihcIi9hcGkvc3RhdGVzXCIpXG4gICAgLnRoZW4oKHIpID0+IHIuc3RhdGVzKVxuICAgIC50aGVuKChzdGF0ZXMpID0+IHN0YXRlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoXG4gIHJlZ2lzdHJhdGlvbjogVXNlclJlZ2lzdHJhdGlvblxuKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgY29uc3QgeyBjb25zZW50LCAuLi5ib2R5IH0gPSByZWdpc3RyYXRpb247XG4gIHJldHVybiBhd2FpdCBwb3N0PHsgdG9rZW46IHN0cmluZyB9PihcIi9hcGkvc2lnbnVwXCIsIHJlZ2lzdHJhdGlvbikudGhlbihcbiAgICAocikgPT4gci50b2tlblxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdFF1aXogPSBhc3luYyAocXVpejogQXJyYXk8UXVlc3Rpb25SZXNwb25zZT4pID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3Q8eyBpZDogc3RyaW5nIH0+KFwiL2FwaS9zdWJtaXRfcXVpelwiLCB7XG4gICAgYW5zd2VyczogcXVpeixcbiAgfSkudGhlbigocikgPT4gci5pZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWl0Q2hlY2tpbiA9IGFzeW5jIChyZXNwb25zZXM6IEFycmF5PFF1ZXN0aW9uUmVzcG9uc2U+KSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3N1Ym1pdF9jaGVja2luXCIsIHsgcmVzcG9uc2VzIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzSGlzdG9yeSA9IGFzeW5jIChoaXN0b3J5VHlwZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXQ8UHJvZ3Jlc3NDaGFydD4oXCIvYXBpL3BhdGllbnQvcHJvZ3Jlc3NfaGlzdG9yeVwiLCB7XG4gICAgaGlzdG9yeVR5cGUsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrU3RhdGUgPSBhc3luYyAoc3RhdGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdDx7IGF2YWlsYWJsZTogYm9vbGVhbiB9PihcIi9hcGkvcGF0aWVudC9jaGVja19zdGF0ZVwiLCB7XG4gICAgc3RhdGUsXG4gIH0pLnRoZW4oKHIpID0+IHIuYXZhaWxhYmxlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja1ppcCA9IGFzeW5jICh6aXA6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0PHsgYXZhaWxhYmxlOiBib29sZWFuIH0+KFwiL2FwaS9jaGVja196aXBcIiwge1xuICAgIHppcCxcbiAgfSkudGhlbigocikgPT4gci5hdmFpbGFibGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGpvaW5XYWl0bGlzdCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9qb2luX3dhaXRsaXN0XCIsIHsgZW1haWwsIHN0YXRlIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF2YWlsYWJpbGl0eSA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDxBdmFpbGFiaWxpdHlSZXNwb25zZT4oXCIvYXBpL3BhdGllbnQvYXZhaWxhYmlsaXR5XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmlwZUNsaWVudFNlY3JldCA9IGFzeW5jIChwcm9tb3Rpb25Db2RlPzogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXQ8eyBjbGllbnRTZWNyZXQ6IHN0cmluZyB9PihcIi9hcGkvcGF0aWVudC9wYXltZW50X3NldHVwXCIsIHtcbiAgICBwcm9tb3Rpb25Db2RlLFxuICB9KS50aGVuKChyKSA9PiByLmNsaWVudFNlY3JldCk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlybVBheW1lbnQgPSBhc3luYyAocGF5bWVudEludGVudElkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3QoXCIvYXBpL3BhdGllbnQvY29uZmlybV9wYXltZW50XCIsIHtcbiAgICBwYXltZW50SW50ZW50SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBheW1lbnRNZXRob2QgPSBhc3luYyAocGF5bWVudE1ldGhvZElkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3QoXCIvYXBpL3BhdGllbnQvdXBkYXRlX3BheW1lbnRfbWV0aG9kXCIsIHsgcGF5bWVudE1ldGhvZElkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKFxuICBlbWFpbDogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdDx7IHRva2VuOiBzdHJpbmcgfT4oXCIvYXBpL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pLnRoZW4oXG4gICAgKHIpID0+IHIudG9rZW5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdXBlcnVzZXIgPSBhc3luYyAocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0PHsgdG9rZW46IHN0cmluZyB9PihcIi9hcGkvc3VwZXJ1c2VyXCIsIHsgcGFzc3dvcmQgfSkudGhlbihcbiAgICAocikgPT4gci50b2tlblxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQXMgPSBhc3luYyAoZW1haWw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0PHsgdG9rZW46IHN0cmluZyB9PihcIi9hcGkvbG9naW5fYXNcIiwgeyBlbWFpbCB9KS50aGVuKFxuICAgIChyKSA9PiByLnRva2VuXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgYm9va0FwcG9pbnRtZW50ID0gYXN5bmMgKHNsb3RJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3NjaGVkdWxlX2FwcG9pbnRtZW50XCIsIHtcbiAgICBzbG90SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVwY29taW5nQXBwb2ludG1lbnQgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXQ8eyBhcHBvaW50bWVudD86IEFwcG9pbnRtZW50IH0+KFxuICAgIFwiL2FwaS9wYXRpZW50L3VwY29taW5nX2FwcG9pbnRtZW50XCJcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcmV2aW91c0FwcG9pbnRtZW50cyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDx7IHByZXZpb3VzQXBwb2ludG1lbnRzOiBBcnJheTxBcHBvaW50bWVudD4gfT4oXG4gICAgXCIvYXBpL3BhdGllbnQvcHJldmlvdXNfYXBwb2ludG1lbnRzXCJcbiAgKS50aGVuKChyKSA9PiByLnByZXZpb3VzQXBwb2ludG1lbnRzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0PFVzZXJQcm9maWxlPihcIi9hcGkvcGF0aWVudC9tZVwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbWFpbCA9IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3VwZGF0ZV9lbWFpbFwiLCB7IGVtYWlsIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFkZHJlc3MgPSBhc3luYyAoYWRkcmVzczogQWRkcmVzcywgaXNPbmJvYXJkaW5nID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3QoXCIvYXBpL3BhdGllbnQvdXBkYXRlX2FkZHJlc3NcIiwge1xuICAgIC4uLmFkZHJlc3MsXG4gICAgaXNPbmJvYXJkaW5nLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQaG9uZSA9IGFzeW5jIChwaG9uZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3VwZGF0ZV9waG9uZVwiLCB7IHBob25lIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURvYiA9IGFzeW5jIChkYXRlOiBEYXRlKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3VwZGF0ZV9iaXJ0aGRhdGVcIiwge1xuICAgIGJpcnRoZGF0ZTogbm9ybWFsaXplRGF0ZVRvVVRDKGRhdGUpLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbWVyZ2VuY3lDb250YWN0ID0gYXN5bmMgKFxuICBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3Q8eyBzdWNjZXNzOiBib29sZWFuIH0+KFxuICAgIFwiL2FwaS9wYXRpZW50L2VtZXJnZW5jeV9jb250YWN0XCIsXG4gICAgcGFyYW1zXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBhc3luYyAoZW1haWw6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdChcIi9hcGkvZm9yZ290X3Bhc3N3b3JkXCIsIHsgZW1haWwgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jICh0b2tlbjogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9yZXNldF9wYXNzd29yZFwiLCB7IHRva2VuLCBwYXNzd29yZCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja0ludGFrZSA9IGFzeW5jIChpbnRha2VJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXQ8SW50YWtlRXZhbHVhdGlvblJlc3BvbnNlPihcbiAgICBgL2FwaS9jaGVja19pbnRha2U/aWQ9JHtpbnRha2VJZH1gXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0T25ib2FyZGluZ1N0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDxPbmJvYXJkaW5nU3RhdHVzPihcIi9hcGkvcGF0aWVudC9zdGF0dXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgdmVyaWZ5SWQgPSBhc3luYyAoaW5xdWlyeUlkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3QoXCIvYXBpL3BhdGllbnQvdmVyaWZ5X2lkXCIsIHsgaW5xdWlyeUlkIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld1RocmVhZCA9IGFzeW5jIChwYXJhbXM6IENyZWF0ZVRocmVhZFBhcmFtcykgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdChcIi9hcGkvY3JlYXRlX3RocmVhZFwiLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRocmVhZCA9IGFzeW5jICh0aHJlYWRJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBnZXQ8VGhyZWFkPihgL2FwaS90aHJlYWQvJHt0aHJlYWRJZH1gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0TWVzc2FnZSA9IGFzeW5jICh0aHJlYWRJZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHBvc3QoYC9hcGkvdGhyZWFkLyR7dGhyZWFkSWR9YCwgeyBjb250ZW50IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEluYm94ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZ2V0PEluYm94PihcIi9hcGkvbWVzc2FnZXNcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VW5yZWFkTWVzc2FnZUNvdW50ID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZ2V0PHsgdW5yZWFkTWVzc2FnZXM6IG51bWJlciB9PihcIi9hcGkvbWVzc2FnZXMvdW5yZWFkXCIpLnRoZW4oXG4gICAgKHIpID0+IHIudW5yZWFkTWVzc2FnZXNcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRNZWRpY2FsSW50YWtlID0gYXN5bmMgKGFuc3dlcnM6IE9iamVjdCkgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdDx7IGlkOiBzdHJpbmcgfT4oXCIvYXBpL3BhdGllbnQvdXBkYXRlX2ludGFrZVwiLCB7IGFuc3dlcnMgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VibWl0UmVmZXJyYWwgPSBhc3luYyAocmVmZXJyYWw6IFBhdGllbnRSZWZlcnJhbCkgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdChcIi9hcGkvcmVmZXJfcGF0aWVudFwiLCByZWZlcnJhbCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVmZXJyYWxDb2RlID0gYXN5bmMgKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdDx7IGNvZGU6IHN0cmluZyB9PihcIi9hcGkvcmVmZXJyYWxfY29kZVwiLCB7XG4gICAgbmFtZSxcbiAgICBlbWFpbCxcbiAgfSkudGhlbigocikgPT4gci5jb2RlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRTdGFydEludGFrZSA9IGFzeW5jIChwYXJhbXM6IHtcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBpbnRha2VJZDogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gYXdhaXQgcG9zdChcIi9hcGkvc3RhcnRfaW50YWtlXCIsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJlc2NyaXB0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDx7IHByZXNjcmlwdGlvbnM6IEFycmF5PFByZXNjcmlwdGlvbj4gfT4oXG4gICAgXCIvYXBpL3BhdGllbnQvcHJlc2NyaXB0aW9uc1wiXG4gICkudGhlbigocikgPT4gci5wcmVzY3JpcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRWaWRlb1Rva2VuID0gYXN5bmMgKGlkZW50aXR5OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDx7IHRva2VuOiBzdHJpbmcgfT4oXCIvYXBpL3ZpZGVvL3Rva2VuXCIsIHsgaWRlbnRpdHkgfSkudGhlbihcbiAgICAocikgPT4gci50b2tlblxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBoYXJtYWNpZXMgPSBhc3luYyAocGFyYW1zOiB7XG4gIHppcD86IHN0cmluZztcbiAgbGF0PzogbnVtYmVyO1xuICBsb24/OiBudW1iZXI7XG59KSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXQ8eyBwaGFybWFjaWVzOiBBcnJheTxQaGFybWFjeT4gfT4oXG4gICAgXCIvYXBpL3BhdGllbnQvcGhhcm1hY2llc1wiLFxuICAgIHBhcmFtc1xuICApLnRoZW4oKHIpID0+IHIucGhhcm1hY2llcyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UGhhcm1hY3kgPSBhc3luYyAocGhhcm1hY3lJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3BoYXJtYWN5XCIsIHsgcGhhcm1hY3lJZCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQaGFybWFjeSA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldDxQaGFybWFjeT4oXCIvYXBpL3BhdGllbnQvcGhhcm1hY3lcIik7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJpbWFyeUNhcmVQaHlzaWNpYW5JbmZvID0gYXN5bmMgKFxuICBuYW1lOiBzdHJpbmcsXG4gIHBob25lOiBzdHJpbmcsXG4gIGVtYWlsOiBzdHJpbmcsXG4gIGFsbG93U2hhcmluZzogYm9vbGVhblxuKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L3VwZGF0ZV9wY3BcIiwge1xuICAgIG5hbWUsXG4gICAgcGhvbmUsXG4gICAgZW1haWwsXG4gICAgYWxsb3dTaGFyaW5nLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFeHRlcm5hbFRoZXJhcGlzdEluZm8gPSBhc3luYyAoXG4gIG5hbWU6IHN0cmluZyxcbiAgcGhvbmU6IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgYWxsb3dTaGFyaW5nOiBib29sZWFuXG4pID0+IHtcbiAgcmV0dXJuIGF3YWl0IHBvc3QoXCIvYXBpL3BhdGllbnQvdXBkYXRlX3RoZXJhcGlzdFwiLCB7XG4gICAgbmFtZSxcbiAgICBwaG9uZSxcbiAgICBlbWFpbCxcbiAgICBhbGxvd1NoYXJpbmcsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcmtPbmJvYXJkaW5nQ29tcGxldGUgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBhd2FpdCBwb3N0KFwiL2FwaS9wYXRpZW50L29uYm9hcmRpbmdfY29tcGxldGVcIiwge30pO1xufTtcbiIsIi8qKlxuICogUmVhY3QgaG9vayB1c2VkIHRvIHNldCBhIGRpc2NvdW50IGNvZGUgaW4gdGhlIGFwcGxpY2F0aW9uIGNvbnRleHRcbiAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2UgVVJMLlxuICovXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERpc2NvdW50Q29kZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvc3JjL2xpYi9hcGlfdHlwZXNcIjtcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VPZmZlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGlzY291bnRDb2RlLCBzZXREaXNjb3VudENvZGUgfSA9IHVzZUFwcENvbnRleHQoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IG9mZmVyIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICBpZiAob2ZmZXIpIHtcbiAgICAgICAgc2V0RGlzY291bnRDb2RlKG9mZmVyIGFzIERpc2NvdW50Q29kZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG4gIGNvbnN0IG9mZmVyVGV4dCA9IFwiU3RhcnQgeW91ciBmaXJzdCBtb250aCBmb3IganVzdCAkNVwiO1xuICByZXR1cm4geyBkaXNjb3VudENvZGUsIG9mZmVyVGV4dCB9O1xufTtcbiIsIi8qKlxuICogUmVhY3QgaG9vayB1c2VkIHRvIHNldCBVVE0gcGFyYW1ldGVycyBpbiB0aGUgYXBwbGljYXRpb24gY29udGV4dFxuICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBVUkwuIFVzZWQgdG8gdHJhY2sgY29udmVyc2lvbnMgLyBldmVudFxuICogYXR0cmlidXRpb24gb24gdGhlIHNlcnZlci5cbiAqL1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VVdG0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGluaXRpYWxQYXJhbXMsIHNldEluaXRpYWxQYXJhbXMgfSA9IHVzZUFwcENvbnRleHQoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbFBhcmFtcz8udXRtU291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgcmVmOiByZWZlcnJhbENvZGUgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgIGlmICghcmVmZXJyYWxDb2RlKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB1dG1fc291cmNlLFxuICAgICAgICAgIHV0bV9tZWRpdW0sXG4gICAgICAgICAgdXRtX2NhbXBhaWduLFxuICAgICAgICAgIHV0bV9jb250ZW50LFxuICAgICAgICAgIHV0bV90ZXJtLFxuICAgICAgICAgIHRlcm0sXG4gICAgICAgIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgICAgIHNldEluaXRpYWxQYXJhbXMoe1xuICAgICAgICAgIHV0bVNvdXJjZTogdXRtX3NvdXJjZSxcbiAgICAgICAgICB1dG1NZWRpdW06IHV0bV9tZWRpdW0sXG4gICAgICAgICAgdXRtQ2FtcGFpZ246IHV0bV9jYW1wYWlnbixcbiAgICAgICAgICB1dG1Db250ZW50OiB1dG1fY29udGVudCxcbiAgICAgICAgICB1dG1UZXJtOiB1dG1fdGVybSB8fCB0ZXJtLFxuICAgICAgICAgIHJhd1VybDogcm91dGVyLmFzUGF0aCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbml0aWFsUGFyYW1zKHtcbiAgICAgICAgICB1dG1Tb3VyY2U6IFwidXNlcl9yZWZlcnJhbFwiLFxuICAgICAgICAgIHV0bU1lZGl1bTogXCJjb3B5X2xpbmtcIixcbiAgICAgICAgICB1dG1DYW1wYWlnbjogXCJyZWZlcl9mcmllbmRfcGFnZVwiLFxuICAgICAgICAgIHV0bUNvbnRlbnQ6IHJlZmVycmFsQ29kZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG59O1xuIiwiLyoqXG4gKiBzaW1wbGUgdXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuXG5leHBvcnQgY29uc3QgZW1haWxJc1ZhbGlkID0gKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGluYWxOdW0gPSAobjogbnVtYmVyKSA9PiB7XG4gIHJldHVybiAoXG4gICAgbiArXG4gICAgKG4gPiAwXG4gICAgICA/IFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdWyhuID4gMyAmJiBuIDwgMjEpIHx8IG4gJSAxMCA+IDMgPyAwIDogbiAlIDEwXVxuICAgICAgOiBcIlwiKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGVUb1RpbWVTdHJpbmcgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgaG91cjEyOiB0cnVlLFxuICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgLy8gdGltZVpvbmVOYW1lOiBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRheVdpdGhPcmRpbmFsID0gKGRhdGU6IERhdGUpID0+IHtcbiAgcmV0dXJuIGAke2dldE9yZGluYWxOdW0oZGF0ZS5nZXREYXRlKCkpfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF5TmFtZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImRlZmF1bHRcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb250aE5hbWUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhcImRlZmF1bHRcIiwgeyBtb250aDogXCJsb25nXCIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UGhvbmVOdW1iZXIgPSAocGhvbmU6IHN0cmluZykgPT5cbiAgcGhvbmUucmVwbGFjZSgvXFxEKy9nLCBcIlwiKS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCBcIigkMSkgJDItJDNcIik7XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHM6IHN0cmluZykgPT5cbiAgKHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpKS50cmltKCk7XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lem9uZUFiYnJldmlhdGlvbiA9ICgpID0+XG4gIG5ldyBEYXRlKClcbiAgICAudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tdXNcIiwgeyB0aW1lWm9uZU5hbWU6IFwic2hvcnRcIiB9KVxuICAgIC5zcGxpdChcIiBcIilbMl07XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lem9uZU5hbWUgPSAoKSA9PlxuICBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVEYXRlVG9VVEMgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHV0Y0RhdGUgPSBEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXRVVENEYXRlKCkpO1xuICByZXR1cm4gbmV3IERhdGUodXRjRGF0ZSkudG9JU09TdHJpbmcoKTtcbn07XG4iLCIvKipcbiAqIExhbmRpbmcgcGFnZVxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ1RBQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2xhbmRpbmcvQ1RBQnV0dG9uXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdjb250ZW50ZnVsJ1xuaW1wb3J0IExhbmRpbmdUZW1wbGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdUZW1wbGF0ZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZLFxufSlcblxuY29uc3QgSG9tZUluZGV4OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWdlIH0gPSBwcm9wc1xuICBjb25zdCB7IGZpZWxkcyB9ID0gcGFnZVxuICBjb25zdCB7XG4gICAgaGVyb1NlY3Rpb25IZWFkaW5nLFxuICAgIGhlcm9TZWN0aW9uQ29udGVudCxcbiAgICBoZXJvU2VjdGlvbkJ1dHRvbkJlbG93VGV4dFxuICB9ID0gZmllbGRzXG4gIHJldHVybiAoXG4gICAgPExhbmRpbmdUZW1wbGF0ZSBkYXRhPXtwcm9wc30+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgbWItNCBtZDptYi04XCI+XG4gICAgICAgIHtoZXJvU2VjdGlvbkhlYWRpbmcgPyBoZXJvU2VjdGlvbkhlYWRpbmcgOiAnTWVudGFsIGhlYWx0aGNhcmUgd2l0aG91dCB0aGUgd2FpdC4gRmluYWxseS4nfVxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgbWItNCBtZDptYi04XCI+XG4gICAgICAgIHtoZXJvU2VjdGlvbkNvbnRlbnQgPyBoZXJvU2VjdGlvbkNvbnRlbnQgOiAnT25saW5lIHBzeWNoaWF0cnkgYW5kIG1lZGljYXRpb24gZm9yIGRlcHJlc3Npb24gYW5kIGFueGlldHkuIFByZXNjcmliZWQgcmVzcG9uc2libHksIHByb3ZpZGVkIGFmZm9yZGFibHksIHdpdGggc3VwcG9ydCBmcm9tIGEgdGVhbSBvZiBwcm92aWRlcnMuJ30gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8Q1RBQnV0dG9uPlN0YXJ0IGZyZWUgYXNzZXNzbWVudDwvQ1RBQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTIgdGV4dC1jZW50ZXIgZm9udC1saWdodFwiPlxuICAgICAgICB7aGVyb1NlY3Rpb25CdXR0b25CZWxvd1RleHQgPyBoZXJvU2VjdGlvbkJ1dHRvbkJlbG93VGV4dCA6ICdCb29rIG9ubGluZSBpbiAxMCBtaW51dGVzLid9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xhbmRpbmdUZW1wbGF0ZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7IGNvbnRlbnRfdHlwZTogXCJmYXFcIiwgb3JkZXI6ICdzeXMuY3JlYXRlZEF0JyB9KVxuXG4gY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ2hvbWUnLFxuICAgICdmaWVsZHMuc2x1Zyc6ICdob21lJ1xuICB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmYXE6IHJlcy5pdGVtcyxcbiAgICAgIHBhZ2U6IGl0ZW1zWzBdXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUluZGV4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZigod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtzcmM6c3JjLGRlY29kaW5nOlwiYXN5bmNcIixzaXplczpzaXplcyxzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaGVhZGxlc3N1aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9