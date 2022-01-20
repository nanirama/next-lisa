(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/metrics/PageViewTracker.tsx":
/*!************************************************!*\
  !*** ./components/metrics/PageViewTracker.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_event_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/event_logging */ "./lib/event_logging/index.ts");



/**
 * Used to track page views with our event logging library. Hooks into
 * next.js router events in order to trigger the log pageview function
 * upon every navigation event.
 */




const handleRouteChange = url => {
  (0,_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.logPageView)(url);
};

const PageViewTracker = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // trigger on initial page view
    (0,_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.logPageView)(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (PageViewTracker);

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

/***/ "./lib/event_logging/index.ts":
/*!************************************!*\
  !*** ./lib/event_logging/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSegmentSnippet": function() { return /* reexport safe */ _segment__WEBPACK_IMPORTED_MODULE_0__.renderSegmentSnippet; },
/* harmony export */   "GA_TRACKING_ID": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "ADWORDS_ID": function() { return /* binding */ ADWORDS_ID; },
/* harmony export */   "FB_PIXEL_ID": function() { return /* binding */ FB_PIXEL_ID; },
/* harmony export */   "SNAP_ID": function() { return /* binding */ SNAP_ID; },
/* harmony export */   "TIKTOK_ID": function() { return /* binding */ TIKTOK_ID; },
/* harmony export */   "logGooglePageview": function() { return /* binding */ logGooglePageview; },
/* harmony export */   "logGoogleConversion": function() { return /* binding */ logGoogleConversion; },
/* harmony export */   "logFacebookEvent": function() { return /* binding */ logFacebookEvent; },
/* harmony export */   "logTikTokEvent": function() { return /* binding */ logTikTokEvent; },
/* harmony export */   "logSnapEvent": function() { return /* binding */ logSnapEvent; },
/* harmony export */   "logPageView": function() { return /* binding */ logPageView; },
/* harmony export */   "logEvent": function() { return /* binding */ logEvent; },
/* harmony export */   "identifyUser": function() { return /* binding */ identifyUser; }
/* harmony export */ });
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment */ "./lib/event_logging/segment.ts");
/**
 * Utility functions for managing pixel tracking
 */


const GA_TRACKING_ID = "G-PP7FBMRCW2";
const ADWORDS_ID = "AW-468409347";
const FB_PIXEL_ID = 732028701046966;
const SNAP_ID = "4eade020-d9f9-4891-a2e8-e896be316bd5";
const TIKTOK_ID = "C0RA7RHURMH959SBQQM0"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const logGooglePageview = url => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

const gtag = (...args) => {
  try {
    // @ts-ignore
    window.dataLayer.push(...args);
  } catch (e) {
    console.log(e);
  }
}; // Only logs an event if it's an ads conversion, normal events
// go to analytics through GTM


const logGoogleConversion = event => {
  if (event === "purchase") {
    gtag("event", "conversion", {
      send_to: "AW-347487498/Tb-5CIGi5dgCEIr62KUB",
      transaction_id: ""
    });
  } else if (event === "create-account") {
    gtag("event", "conversion", {
      send_to: "AW-347487498/7Gv1CMvvutgCEIr62KUB"
    });
  }
}; // https://developers.facebook.com/docs/facebook-pixel/advanced/

const logFacebookEvent = (event, options = {}) => {
  // @ts-ignore
  const track = e => window.fbq("track", e, options); // @ts-ignore


  const trackCustom = e => window.fbq("trackCustom", e, options);

  const fbEvent = null;

  switch (event) {
    case "page-view":
      track("PageView");
      break;

    case "start-checkout":
      track("InitiateCheckout");
      break;

    case "purchase":
      // TODO(sbb): add predicted LTV?
      track("Subscribe");
      break;

    case "create-account":
      track("CompleteRegistration");
      break;

    case "join-waitlist":
    case "start-assessment":
    case "complete-assessment":
    default:
      trackCustom(event);
      break;
  }
};
const logTikTokEvent = event => {
  let ttEvent = null;

  switch (event) {
    case "page-view":
      ttEvent = "Browse";
      break;

    case "start-checkout":
      ttEvent = "Start-Checkout";
      break;

    case "purchase":
      ttEvent = "Purchase";
      break;

    case "create-account":
      ttEvent = "Registration";
      break;

    case "join-waitlist":
    case "start-assessment":
    case "complete-assessment":
      ttEvent = event;
  }

  try {
    // @ts-ignore
    window.ttq.track(ttEvent);
  } catch {
    console.error(`failed to log tiktok event: ${event}`);
  }
};
const logSnapEvent = event => {
  let snapEvent = null;

  switch (event) {
    case "page-view":
      snapEvent = "PAGE_VIEW";
      break;

    case "start-checkout":
      snapEvent = "START_CHECKOUT";
      break;

    case "purchase":
      snapEvent = "PURCHASE";
      break;

    case "create-account":
      snapEvent = "SIGN_UP";
      break;

    case "join-waitlist":
    case "start-assessment":
    case "complete-assessment":
      snapEvent = event;
  } // @ts-ignore
  // window.snaptr("track", snapEvent);

};
const logPageView = url => {
  if (true) {
    return;
  } // Google requires a url
  // logGooglePageview(url);


  (0,_segment__WEBPACK_IMPORTED_MODULE_0__.logSegmentEvent)("page-view");
  logFacebookEvent("page-view"); // logSnapEvent("page-view");

  logTikTokEvent("page-view");
};
const logEvent = (event, options = {}) => {
  if (true) {
    return;
  }

  logGoogleConversion(event);
  logFacebookEvent(event);
  (0,_segment__WEBPACK_IMPORTED_MODULE_0__.logSegmentEvent)(event, options); // logSnapEvent(event);

  logTikTokEvent(event);
};
const identifyUser = identifiers => {
  (0,_segment__WEBPACK_IMPORTED_MODULE_0__.identifySegment)(identifiers); // @ts-ignore
  // window.snaptr("init", SNAP_ID, { user_email: identifiers.email });
};

/***/ }),

/***/ "./lib/event_logging/segment.ts":
/*!**************************************!*\
  !*** ./lib/event_logging/segment.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSegmentSnippet": function() { return /* binding */ renderSegmentSnippet; },
/* harmony export */   "logSegmentEvent": function() { return /* binding */ logSegmentEvent; },
/* harmony export */   "identifySegment": function() { return /* binding */ identifySegment; }
/* harmony export */ });
/* harmony import */ var _segment_snippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @segment/snippet */ "@segment/snippet");
/* harmony import */ var _segment_snippet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_segment_snippet__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Segment snippet rendering + tracking implementation
 */
// @ts-ignore

const renderSegmentSnippet = () => {
  var _process$env$NODE_ENV;

  const nodeEnv = (_process$env$NODE_ENV = "development") !== null && _process$env$NODE_ENV !== void 0 ? _process$env$NODE_ENV : "development";
  const apiKey = process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY;
  const opts = {
    apiKey,
    page: true
  };
  return nodeEnv === "development" ? _segment_snippet__WEBPACK_IMPORTED_MODULE_0___default().max(opts) : _segment_snippet__WEBPACK_IMPORTED_MODULE_0___default().min(opts);
};
const logSegmentEvent = (event, properties = {}) => {
  if (event !== "page-view") {
    window.analytics.track(event, properties);
  } else {
    logSegmentPageView();
  }
};

const logSegmentPageView = () => {
  window.analytics.page();
};

const identifySegment = idenifiers => {
  window.analytics.identify(idenifiers);
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_metrics_PageViewTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/metrics/PageViewTracker */ "./components/metrics/PageViewTracker.tsx");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ "./context/AppContext.tsx");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _healthgent_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @healthgent/common */ "../common/src/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * See next.js documentation:
 * https://nextjs.org/docs/advanced-features/custom-app
 */








const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_5__.RecoilRoot, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_metrics_PageViewTracker__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_healthgent_common__WEBPACK_IMPORTED_MODULE_6__.AuthProvider, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.AppContextProvider, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ "../common/src/components/ProgressBar.tsx":
/*!************************************************!*\
  !*** ../common/src/components/ProgressBar.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\components\\ProgressBar.tsx";

/**
 * Component used to display a progress bar
 */



const ProgressBar = ({
  percent,
  color,
  rounded,
  bgGray,
  marker,
  markerStyle
}) => {
  const width = percent + "%";
  const lineColor = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    "bg-red-500": color === "red",
    "bg-yellow-300": color === "yellow",
    "bg-blue-500": color === "blue",
    "bg-green-500": color === "green",
    "bg-yellow-500": color === "orange",
    "bg-coral": color === "coral" || !color
  });
  const bgColor = classnames__WEBPACK_IMPORTED_MODULE_2___default()(!bgGray ? {
    "bg-red-200": color === "red",
    "bg-yellow-200": color === "yellow",
    "bg-blue-200": color === "blue",
    "bg-coral-200": color === "coral" || !color,
    "bg-green-200": color === "green"
  } : "bg-gray-200");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative w-full",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("overflow-hidden h-2 text-xs flex", bgColor, {
        rounded
      }),
      children: [marker || 0 > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("absolute h-full", markerStyle),
        style: {
          width: "1px",
          marginLeft: `${marker}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          width
        },
        className: `shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${lineColor}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "../common/src/components/index.ts":
/*!*****************************************!*\
  !*** ../common/src/components/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBar": function() { return /* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar */ "../common/src/components/ProgressBar.tsx");
/**
 * Exports common components
 */


/***/ }),

/***/ "../common/src/context/auth.tsx":
/*!**************************************!*\
  !*** ../common/src/context/auth.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; },
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; },
/* harmony export */   "useAuth": function() { return /* binding */ useAuth; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\context\\auth.tsx";

/**
 * Stores authentication context in JS cookies, with the
 * context containing a JSON Web Token
 */


// @ts-ignore
const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const AuthProvider = ({
  tokenKey,
  children
}) => {
  const cookieKey = tokenKey !== null && tokenKey !== void 0 ? tokenKey : "auth_token";
  const {
    0: token,
    1: setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const isLoggedInAsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    isLoggedInAsRef.current = !!localStorage.getItem("logged_in_as");
    setToken(js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(cookieKey));
    setLoading(false);
  }, []);

  const login = t => {
    setLoading(true);
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default().set(cookieKey, t, {
      expires: 0.5
    });
    setToken(t);
    setLoading(false);
  };

  const loginAs = t => {
    localStorage.setItem("logged_in_as", "1");
    isLoggedInAsRef.current = true;
    login(t);
  };

  const logout = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default().remove(cookieKey);
    localStorage.removeItem("logged_in_as");
    isLoggedInAsRef.current = false;
    setToken("");
  };

  const state = {
    isAuthenticated: !!token,
    isLoggedInAs: !!isLoggedInAsRef.current,
    isLoading: loading,
    login,
    loginAs,
    logout
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 10
  }, undefined);
};
const useAuth = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

/***/ }),

/***/ "../common/src/forms/AddressForm.tsx":
/*!*******************************************!*\
  !*** ../common/src/forms/AddressForm.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");
/* harmony import */ var _healthgent_server_src_utils_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @healthgent/server/src/utils/states */ "../server/src/utils/states.ts");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectInput */ "../common/src/forms/SelectInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\AddressForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * generic form used to enter a US mailing address
 */







const AddressForm = ({
  address,
  children,
  handleSubmit,
  eligibleStates
}) => {
  const stateList = eligibleStates || _healthgent_server_src_utils_states__WEBPACK_IMPORTED_MODULE_5__.states;
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: _objectSpread({
      streetAddress: "",
      unitNumber: "",
      city: "",
      state: "",
      zip: ""
    }, address),
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      streetAddress: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      unitNumber: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
      city: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      state: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      zip: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required")
    }),
    onSubmit: values => {
      setError("");
      handleSubmit(values).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
      className: "flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "Street Address",
        name: "streetAddress"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "Unit/Apartment # (optional)",
        name: "unitNumber"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "City",
        name: "city"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectInput__WEBPACK_IMPORTED_MODULE_6__.default, {
        name: "state",
        label: "State",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          children: "Select State"
        }, "", false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), stateList.map(({
          name,
          abbreviation
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: abbreviation,
          children: name
        }, abbreviation, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "Zip Code",
        name: "zip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AddressForm);

/***/ }),

/***/ "../common/src/forms/ChangePasswordForm.tsx":
/*!**************************************************!*\
  !*** ../common/src/forms/ChangePasswordForm.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\ChangePasswordForm.tsx";

/**
 * Generic form used to change a password
 */





const ChangePasswordForm = ({
  children,
  handleSubmit
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      currentPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      newPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      confirmPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_3__.ref("newPassword"), null], "Passwords do not match").required("Required")
    }),
    onSubmit: values => {
      setError("");
      setSuccess("");
      handleSubmit(values.currentPassword, values.newPassword).then(() => setSuccess("Successfully updated password")).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "password",
        label: "Current Password",
        name: "currentPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "password",
        label: "New Password",
        name: "newPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "password",
        label: "Confirm New Password",
        name: "confirmPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 18
      }, undefined) : null, success ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-green-400",
        children: success
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 20
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChangePasswordForm);

/***/ }),

/***/ "../common/src/forms/CheckboxInput.tsx":
/*!*********************************************!*\
  !*** ../common/src/forms/CheckboxInput.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\CheckboxInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Generic styled checkbox component
 */



const CheckboxInput = (_ref) => {
  let {
    children,
    name
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "name"]);

  const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col mb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex w-full items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread(_objectSpread({
        className: "text-input mr-3 text-coral"
      }, field), props), {}, {
        type: "checkbox",
        checked: field.value
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        className: "font-light text-xs",
        htmlFor: name,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), meta.touched && meta.error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xs text-red-400",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxInput);

/***/ }),

/***/ "../common/src/forms/EmailForm.tsx":
/*!*****************************************!*\
  !*** ../common/src/forms/EmailForm.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\EmailForm.tsx";

/**
 * Form used to enter an email
 * same as a textbox but uses Yup to validate an email is in the right format
 */





const EmailForm = ({
  email,
  onSubmit,
  children
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      email
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email("Invalid email address").required("Required")
    }),
    onSubmit: values => {
      if (!values.email) {
        setError("Required");
        return;
      }

      setError("");
      onSubmit(values.email).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "",
        name: "email",
        placeholder: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ }),

/***/ "../common/src/forms/EmergencyContactForm.tsx":
/*!****************************************************!*\
  !*** ../common/src/forms/EmergencyContactForm.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneInput */ "../common/src/forms/PhoneInput.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\EmergencyContactForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Form used to enter the name, relationship, and other contact info
 * for a patient emergency contact
 */






const EmergencyContactForm = ({
  emergencyContact,
  children,
  handleSubmit
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: _objectSpread({
      firstName: "",
      lastName: "",
      relationship: "",
      phoneNumber: ""
    }, emergencyContact),
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      firstName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      lastName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      relationship: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      phoneNumber: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required")
    }),
    onSubmit: values => {
      setError("");
      handleSubmit(values).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        type: "text",
        label: "First Name",
        name: "firstName"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        type: "text",
        label: "Last Name",
        name: "lastName"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        type: "text",
        label: "Relationship",
        name: "relationship"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "Phone Number",
        name: "phoneNumber"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmergencyContactForm);

/***/ }),

/***/ "../common/src/forms/ExternalProviderForm.tsx":
/*!****************************************************!*\
  !*** ../common/src/forms/ExternalProviderForm.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");
/* harmony import */ var _PhoneInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhoneInput */ "../common/src/forms/PhoneInput.tsx");
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CheckboxInput */ "../common/src/forms/CheckboxInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\ExternalProviderForm.tsx";

/**
 * Form used to enter the name of an outside clinician, which can be used
 * to get the name of a therapist or outside PCP
 */







const ExternalProviderForm = ({
  children,
  handleSubmit
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      name: "",
      phone: "",
      email: "",
      share: true
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      name: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
      phone: yup__WEBPACK_IMPORTED_MODULE_3__.string(),
      email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email(),
      share: yup__WEBPACK_IMPORTED_MODULE_3__.boolean()
    }),
    onSubmit: values => {
      setError("");
      handleSubmit(values).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "text",
        label: "Name",
        name: "name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhoneInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        type: "text",
        label: "Phone Number (optional)",
        name: "phone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "email",
        label: "Email (optional)",
        name: "email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CheckboxInput__WEBPACK_IMPORTED_MODULE_6__.default, {
        label: "Share information",
        name: "share",
        children: "Lina can share important treatment information with my provider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalProviderForm);

/***/ }),

/***/ "../common/src/forms/FileUpload.tsx":
/*!******************************************!*\
  !*** ../common/src/forms/FileUpload.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\FileUpload.tsx";
// @ts-nocheck

/**
 * File upload form
 * Don't think this is actively used at the moment
 */


const FileUpload = ({
  label,
  subtext,
  onChange,
  currentFile
}) => {
  const handleUpload = e => {
    var _e$target;

    if (((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files.length) > 0) {
      var _e$target2;

      onChange((_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.files[0]);
    }
  };

  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const openFileDialog = () => {
    inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.click();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col max-w-xl max-h-xl mb-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full text-sm flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex-1",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), currentFile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: openFileDialog,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      hidden: true,
      type: "file",
      ref: inputRef,
      onChange: handleUpload
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: openFileDialog,
      className: "w-full h-full flex flex-col justify-center flex-grow-0 border border-gray-200",
      children: [!currentFile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex text-center items-center justify-center  text-gray-400 px-4",
        children: ["Click to upload or take a picture", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          className: "w-16 h-16",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined), currentFile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-full h-full",
        src: URL.createObjectURL(currentFile)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

/***/ }),

/***/ "../common/src/forms/MaskedTextInput.tsx":
/*!***********************************************!*\
  !*** ../common/src/forms/MaskedTextInput.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-text-mask */ "react-text-mask");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\MaskedTextInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Used to enter a masked text input, one where you want
 * it to render in a specific format.
 * e.g. Phone number being formatted as
 * (aaa) bbb-cccc
 */




const MaskedTextInput = (_ref) => {
  let {
    name,
    label,
    type,
    mask
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "label", "type", "mask"]);

  const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col mb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      className: " font-light text-sm",
      htmlFor: name,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative rounded-md shadow-sm",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_text_mask__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread(_objectSpread({
        className: "focus:ring-darkGray focus:border-darkGray focus:ring-0 block w-full pl-4 sm:text-sm border-darkGray-300 rounded-lg"
      }, field), props), {}, {
        type: type,
        value: field.value,
        mask: mask
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), meta.touched && meta.error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xs text-red-400 leading-none mt-1",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MaskedTextInput);

/***/ }),

/***/ "../common/src/forms/NewThreadForm.tsx":
/*!*********************************************!*\
  !*** ../common/src/forms/NewThreadForm.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectInput */ "../common/src/forms/SelectInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\NewThreadForm.tsx";

/**
 * This is used to initiate a thread from the patient side, with the patient being
 * able to select a type of thread (treatment question, refill, etc).
 */





const NewThreadForm = ({
  handleSubmit,
  children
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      threadType: "TREATMENT_QUESTION",
      content: ""
    } // validationSchema={Yup.object({})}
    ,
    onSubmit: values => {
      setError("");
      handleSubmit(values).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      className: "flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        name: "threadType",
        label: "Concern",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "TREATMENT_QUESTION",
          children: "Treatment Question"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: "PRESCRIPTION_REFILL",
          children: "Prescription Refill"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_3__.default, {
        textArea: true,
        label: "Message",
        name: "content"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewThreadForm);

/***/ }),

/***/ "../common/src/forms/PasswordResetForm.tsx":
/*!*************************************************!*\
  !*** ../common/src/forms/PasswordResetForm.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\PasswordResetForm.tsx";

/**
 * generic password reset form
 */





const PasswordResetForm = ({
  onComplete,
  children,
  handleSubmit
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      password: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      confirmPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_3__.ref("password"), null], "Passwords do not match").required("Required")
    }),
    onSubmit: values => {
      setError("");
      handleSubmit(values.password).then(onComplete).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "password",
        label: "Password",
        name: "password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "password",
        label: "Confirm Password",
        name: "confirmPassword"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 18
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordResetForm);

/***/ }),

/***/ "../common/src/forms/PasswordStrength/Requirement.tsx":
/*!************************************************************!*\
  !*** ../common/src/forms/PasswordStrength/Requirement.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\PasswordStrength\\Requirement.tsx";

/**
 * Shows if a requirement for password strength is fulfilled or not.
 * Red text + x if not, checkmark + green if so
 */



const Requirement = ({
  isValid,
  validMessage,
  invalidMessage,
  htmlFor
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
    htmlFor: htmlFor,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("flex items-center text-sm", isValid ? "text-green-500" : "text-red-500"),
    children: [isValid ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: "w-5 h-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 13l4 4L19 7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: "w-5 h-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M6 18L18 6M6 6l12 12"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: !isValid ? invalidMessage : validMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Requirement);

/***/ }),

/***/ "../common/src/forms/PasswordStrength/index.tsx":
/*!******************************************************!*\
  !*** ../common/src/forms/PasswordStrength/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Requirement */ "../common/src/forms/PasswordStrength/Requirement.tsx");


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\PasswordStrength\\index.tsx";

/**
 * Used to display a list of criteria for password strength
 * e.g. length, upper/lower case, as a number
 */



const PasswordStrength = ({
  password
}) => {
  if (password === undefined) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
  } // TODO(sbb): pass this from above


  const longEnough = password.length >= 8;
  const hasUppercase = !!password.match("[A-Z]");
  const hasLowercase = !!password.match("[a-z]");
  const hasNumber = !!password.match("[0-9]");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "ml-1 mt-1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Requirement__WEBPACK_IMPORTED_MODULE_2__.default, {
      isValid: longEnough,
      validMessage: "is at least 8 characters long",
      invalidMessage: "is at least 8 characters long"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Requirement__WEBPACK_IMPORTED_MODULE_2__.default, {
      isValid: hasUppercase,
      validMessage: "has at least 1 uppercase letter",
      invalidMessage: "has at least 1 uppercase letter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Requirement__WEBPACK_IMPORTED_MODULE_2__.default, {
      isValid: hasLowercase,
      validMessage: "has at least 1 lowercase letter",
      invalidMessage: "has at least 1 lowercase letter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Requirement__WEBPACK_IMPORTED_MODULE_2__.default, {
      isValid: hasNumber,
      validMessage: "has at least 1 number",
      invalidMessage: "has at least 1 number"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordStrength);

/***/ }),

/***/ "../common/src/forms/PhoneForm.tsx":
/*!*****************************************!*\
  !*** ../common/src/forms/PhoneForm.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneInput */ "../common/src/forms/PhoneInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\PhoneForm.tsx";

/**
 * Phone form using a phone input (see PhoneInput.tsx) and basic validation for the format
 * I don't think this is used because of the text mask input (see MaskedTextInput.tsx)
 */





const EmailForm = ({
  phone,
  onSubmit,
  children
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      phone
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      phone: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required")
    }),
    onSubmit: values => {
      if (!values.phone) {
        setError("required");
        return;
      }

      setError("");
      onSubmit(values.phone).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        name: "phone",
        label: "",
        placeholder: phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 18
      }, undefined) : null, children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ }),

/***/ "../common/src/forms/PhoneInput.tsx":
/*!******************************************!*\
  !*** ../common/src/forms/PhoneInput.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\PhoneInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Phone input - I don't think this is used because of the text mask
 */



const formatPhoneNumber = phone => phone.replace(/\D+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

const PhoneInput = (_ref) => {
  let {
    label,
    name,
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "name", "type"]);

  const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col mb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      className: "mb-1 font-light text-sm",
      htmlFor: name,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
      className: "focus:ring-darkGray focus:border-darkGray focus:ring-0 block w-full pl-4 sm:text-sm border-darkGray-300 rounded-lg",
      type: "text",
      value: field.value,
      onChange: e => {
        if (formatPhoneNumber(e.target.value).length <= 14) {
          field.onChange(name)(formatPhoneNumber(e.target.value));
        }
      }
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), meta.touched && meta.error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xs text-red-400",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneInput);

/***/ }),

/***/ "../common/src/forms/ReferralForm.tsx":
/*!********************************************!*\
  !*** ../common/src/forms/ReferralForm.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneInput */ "../common/src/forms/PhoneInput.tsx");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextInput */ "../common/src/forms/TextInput.tsx");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\ReferralForm.tsx";

/**
 * Patient referral from the landing page
 * I don't think this is actively used anymore.
 */






const ReferralForm = ({
  onSubmit
}) => {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      providerName: "",
      providerEmail: "",
      providerPhone: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__.object({
      patientName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      patientEmail: yup__WEBPACK_IMPORTED_MODULE_3__.string().email().required("Required"),
      patientPhone: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required"),
      providerName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required("Required")
    }),
    onSubmit: values => {
      onSubmit(values).catch(e => setError(e.toString()));
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl",
        children: "Patient Info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "patientName",
        label: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "patientEmail",
        label: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        name: "patientPhone",
        label: "Phone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl",
        children: "Provider Info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "providerName",
        label: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextInput__WEBPACK_IMPORTED_MODULE_5__.default, {
        name: "providerEmail",
        label: "Email (optional)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PhoneInput__WEBPACK_IMPORTED_MODULE_4__.default, {
        name: "providerPhone",
        label: "Phone (optional)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-red-400",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 18
      }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: "primary-button-blue",
        children: "Submit Referral"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReferralForm);

/***/ }),

/***/ "../common/src/forms/SelectInput.tsx":
/*!*******************************************!*\
  !*** ../common/src/forms/SelectInput.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\SelectInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Generic <select> tag with some minimal styling
 */



const SelectInput = (_ref) => {
  let {
    label,
    name,
    hideError,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "name", "hideError", "children"]);

  const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col w-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      className: "ml-1 font-light text-sm",
      htmlFor: name,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", _objectSpread(_objectSpread(_objectSpread({
      className: "text-input w-full"
    }, field), props), {}, {
      value: field.value,
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), meta.touched && meta.error && !hideError ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xs text-red-400",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "../common/src/forms/TextInput.tsx":
/*!*****************************************!*\
  !*** ../common/src/forms/TextInput.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\forms\\TextInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Generic <input> with some styling, with the option of using a
 * <textarea> tag if the input text is large
 */




const TextInput = (_ref) => {
  let {
    label,
    name,
    type = "text",
    hideError,
    textArea,
    showChevron
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "name", "type", "hideError", "textArea", "showChevron"]);

  const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useField)(name);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col w-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      className: "font-light text-sm",
      htmlFor: name,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), textArea ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", _objectSpread(_objectSpread(_objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("text-input w-full", props.className)
    }, field), props), {}, {
      value: field.value
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative rounded-md shadow-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread(_objectSpread({
        className: "focus:ring-darkGray focus:border-darkGray focus:ring-0 block w-full pl-4 sm:text-sm border-darkGray-300 rounded-lg"
      }, field), props), {}, {
        type: type,
        value: field.value
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined), showChevron ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: "outline-none absolute inset-y-0 right-0 pr-3 flex items-center",
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
            d: "M9 5l7 7-7 7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined), meta.touched && meta.error && !hideError ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xs text-red-400 leading-none mt-1",
      children: meta.error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "../common/src/hoc/ProtectedView.tsx":
/*!*******************************************!*\
  !*** ../common/src/hoc/ProtectedView.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _healthgent_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @healthgent/common */ "../common/src/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\hoc\\ProtectedView.tsx";

/**
 * Used to ensure a particular page/view is only viewed by authenticated users
 */




const ProtectedView = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    isAuthenticated,
    isLoading,
    logout
  } = (0,_healthgent_common__WEBPACK_IMPORTED_MODULE_1__.useAuth)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (true) {
      return;
    }

    if (!isAuthenticated) {
      router.push("/login");
    }

    if (!isLoading && !isAuthenticated) {
      logout();
      router.push("/login");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedView);

/***/ }),

/***/ "../common/src/hooks/key.ts":
/*!**********************************!*\
  !*** ../common/src/hooks/key.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyPress": function() { return /* binding */ useKeyPress; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook used to detect a key press
 */

const useKeyPress = targetKey => {
  const {
    0: keyPressed,
    1: setKeyPressed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function downHandler({
    key
  }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({
    key
  }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};

/***/ }),

/***/ "../common/src/hooks/speech_recognition.ts":
/*!*************************************************!*\
  !*** ../common/src/hooks/speech_recognition.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSpeechRecognition": function() { return /* binding */ useSpeechRecognition; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// @ts-nocheck

/**
 * Prototype of using the Chrome browser speech recognition API.
 * We had this as a feature in the EMR briefly but it was not
 * polished enough for production use. Useful as a reference
 * if this is ever implemented properly.
 */

const useSpeechRecognition = () => {
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: interim,
    1: setInterim
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: recognition,
    1: setRecognition
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const rec = new window.webkitSpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;

    rec.onresult = event => {
      const current = [];
      const processing = [];

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          current.push(event.results[i][0].transcript);
        } else {
          processing.push(event.results[i][0].transcript);
        }
      }

      setResults(prevResults => [...prevResults, ...current]);
      setInterim(processing);
    };

    setRecognition(rec);
  }, []);
  const startRecognition = recognition !== undefined ? () => recognition.start() : undefined;
  const stopRecognition = recognition !== undefined ? () => recognition.stop() : undefined;
  return {
    results,
    interim,
    startRecognition,
    stopRecognition
  };
};

/***/ }),

/***/ "../common/src/index.ts":
/*!******************************!*\
  !*** ../common/src/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressForm": function() { return /* reexport safe */ _forms_AddressForm__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "EmergencyContactForm": function() { return /* reexport safe */ _forms_EmergencyContactForm__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "FileUpload": function() { return /* reexport safe */ _forms_FileUpload__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "PhoneInput": function() { return /* reexport safe */ _forms_PhoneInput__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "TextInput": function() { return /* reexport safe */ _forms_TextInput__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "MaskedTextInput": function() { return /* reexport safe */ _forms_MaskedTextInput__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "EmailForm": function() { return /* reexport safe */ _forms_EmailForm__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "PhoneForm": function() { return /* reexport safe */ _forms_PhoneForm__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "PasswordResetForm": function() { return /* reexport safe */ _forms_PasswordResetForm__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "ChangePasswordForm": function() { return /* reexport safe */ _forms_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "ReferralForm": function() { return /* reexport safe */ _forms_ReferralForm__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "PasswordStrength": function() { return /* reexport safe */ _forms_PasswordStrength__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "NewThreadForm": function() { return /* reexport safe */ _forms_NewThreadForm__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "ExternalProviderForm": function() { return /* reexport safe */ _forms_ExternalProviderForm__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "AuthProvider": function() { return /* reexport safe */ _context_auth__WEBPACK_IMPORTED_MODULE_14__.AuthProvider; },
/* harmony export */   "useAuth": function() { return /* reexport safe */ _context_auth__WEBPACK_IMPORTED_MODULE_14__.useAuth; },
/* harmony export */   "ProtectedView": function() { return /* reexport safe */ _hoc_ProtectedView__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "ChatWindow": function() { return /* reexport safe */ _messaging_ChatWindow__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "ThreadList": function() { return /* reexport safe */ _messaging_ThreadList__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "Message": function() { return /* reexport safe */ _messaging_Message__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "MessageThread": function() { return /* reexport safe */ _messaging_MessageThread__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "ProfilePicture": function() { return /* reexport safe */ _messaging_ProfilePicture__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "useKeyPress": function() { return /* reexport safe */ _hooks_key__WEBPACK_IMPORTED_MODULE_21__.useKeyPress; },
/* harmony export */   "useSpeechRecognition": function() { return /* reexport safe */ _hooks_speech_recognition__WEBPACK_IMPORTED_MODULE_22__.useSpeechRecognition; }
/* harmony export */ });
/* harmony import */ var _forms_AddressForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/AddressForm */ "../common/src/forms/AddressForm.tsx");
/* harmony import */ var _forms_EmergencyContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/EmergencyContactForm */ "../common/src/forms/EmergencyContactForm.tsx");
/* harmony import */ var _forms_FileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/FileUpload */ "../common/src/forms/FileUpload.tsx");
/* harmony import */ var _forms_PhoneInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/PhoneInput */ "../common/src/forms/PhoneInput.tsx");
/* harmony import */ var _forms_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/TextInput */ "../common/src/forms/TextInput.tsx");
/* harmony import */ var _forms_MaskedTextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/MaskedTextInput */ "../common/src/forms/MaskedTextInput.tsx");
/* harmony import */ var _forms_EmailForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/EmailForm */ "../common/src/forms/EmailForm.tsx");
/* harmony import */ var _forms_PhoneForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/PhoneForm */ "../common/src/forms/PhoneForm.tsx");
/* harmony import */ var _forms_PasswordResetForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/PasswordResetForm */ "../common/src/forms/PasswordResetForm.tsx");
/* harmony import */ var _forms_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/ChangePasswordForm */ "../common/src/forms/ChangePasswordForm.tsx");
/* harmony import */ var _forms_ReferralForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/ReferralForm */ "../common/src/forms/ReferralForm.tsx");
/* harmony import */ var _forms_PasswordStrength__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/PasswordStrength */ "../common/src/forms/PasswordStrength/index.tsx");
/* harmony import */ var _forms_NewThreadForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/NewThreadForm */ "../common/src/forms/NewThreadForm.tsx");
/* harmony import */ var _forms_ExternalProviderForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/ExternalProviderForm */ "../common/src/forms/ExternalProviderForm.tsx");
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./context/auth */ "../common/src/context/auth.tsx");
/* harmony import */ var _hoc_ProtectedView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hoc/ProtectedView */ "../common/src/hoc/ProtectedView.tsx");
/* harmony import */ var _messaging_ChatWindow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messaging/ChatWindow */ "../common/src/messaging/ChatWindow.tsx");
/* harmony import */ var _messaging_ThreadList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messaging/ThreadList */ "../common/src/messaging/ThreadList.tsx");
/* harmony import */ var _messaging_Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./messaging/Message */ "../common/src/messaging/Message.tsx");
/* harmony import */ var _messaging_MessageThread__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messaging/MessageThread */ "../common/src/messaging/MessageThread.tsx");
/* harmony import */ var _messaging_ProfilePicture__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./messaging/ProfilePicture */ "../common/src/messaging/ProfilePicture.tsx");
/* harmony import */ var _hooks_key__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hooks/key */ "../common/src/hooks/key.ts");
/* harmony import */ var _hooks_speech_recognition__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hooks/speech_recognition */ "../common/src/hooks/speech_recognition.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components */ "../common/src/components/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components__WEBPACK_IMPORTED_MODULE_23__) if(["default","AddressForm","EmergencyContactForm","FileUpload","PhoneInput","TextInput","MaskedTextInput","EmailForm","PhoneForm","PasswordResetForm","ChangePasswordForm","ReferralForm","PasswordStrength","NewThreadForm","ExternalProviderForm","AuthProvider","useAuth","ProtectedView","ChatWindow","ThreadList","Message","MessageThread","ProfilePicture","useKeyPress","useSpeechRecognition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components__WEBPACK_IMPORTED_MODULE_23__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/**
 * Exports all common components/hooks
 */

























/***/ }),

/***/ "../common/src/messaging/ChatWindow.tsx":
/*!**********************************************!*\
  !*** ../common/src/messaging/ChatWindow.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MessageThread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageThread */ "../common/src/messaging/MessageThread.tsx");
/* harmony import */ var _hooks_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/key */ "../common/src/hooks/key.ts");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\messaging\\ChatWindow.tsx";

/**
 * Used to display an entire chat window, which includes
 * the message thread, the text entry box, send button, and context
 * such as the name of the thread.
 */

// import ChevronRight from "../../../frontend/components/svg/ChevronRight";



const ChatWindow = ({
  thread,
  sendMessage,
  onBack
}) => {
  const {
    0: currentMessage,
    1: setCurrentMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: sending,
    1: setSending
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const enterPressed = (0,_hooks_key__WEBPACK_IMPORTED_MODULE_3__.useKeyPress)("Enter");

  const onChange = e => {
    setCurrentMessage(e.target.value);
  };

  const addMessage = () => {
    const msg = currentMessage.trim();

    if (sending || !msg) {
      return;
    }

    setSending(true);
    sendMessage(msg).then(() => setCurrentMessage("")).finally(() => setSending(false));
  };

  if (enterPressed) {
    addMessage();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "p-4 pb-2 flex-col",
    style: {
      height: "80vh",
      maxHeight: "500px"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex border-gray-200 border-b-2 py-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: onBack,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          className: "w-6 h-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 19l-7-7 7-7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "ml-2",
        children: thread.subject
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full overflow-auto h-96 flex flex-col-reverse",
      children: thread ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageThread__WEBPACK_IMPORTED_MODULE_2__.default, {
        thread: thread
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full flex justify-between relative bottom-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        className: "w-full h-10 outline-none flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none",
        placeholder: "Message...",
        value: currentMessage,
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "m-2 text-blue-400 outline-none focus:outline-none",
        onClick: addMessage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          className: "w-5 h-5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 5l7 7-7 7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChatWindow);

/***/ }),

/***/ "../common/src/messaging/Message.tsx":
/*!*******************************************!*\
  !*** ../common/src/messaging/Message.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\messaging\\Message.tsx";

/**
 * Single chat bubble in a message thread
 */



const MessageComponent = ({
  message
}) => {
  const {
    content,
    sender
  } = message;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex mx-2", {
      "flex-row-reverse": !message.inbound
    }),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-xs text-gray-500",
        children: sender.displayName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "self-start max-w-sm inline-block bg-gray-300 w-min sm:w-auto p-2 rounded-lg",
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MessageComponent);

/***/ }),

/***/ "../common/src/messaging/MessageThread.tsx":
/*!*************************************************!*\
  !*** ../common/src/messaging/MessageThread.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "../common/src/messaging/Message.tsx");


var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\messaging\\MessageThread.tsx";

/**
 * Shows a message thread as a list of messages in chronological order
 */



const MessageThread = ({
  thread
}) => {
  var _thread$messages;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (_thread$messages = thread.messages) === null || _thread$messages === void 0 ? void 0 : _thread$messages.sort((a, b) => b.timestamp - a.timestamp).map(m => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_2__.default, {
        message: m
      }, m.id, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 18
      }, undefined);
    })
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (MessageThread);

/***/ }),

/***/ "../common/src/messaging/ProfilePicture.tsx":
/*!**************************************************!*\
  !*** ../common/src/messaging/ProfilePicture.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\messaging\\ProfilePicture.tsx";

/**
 * Used to display a rounded profile picture for a user (patient/provider/support team)
 */


const ProfilePicture = ({
  url,
  initials
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-wrap",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-12 h-12",
      children: url ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: url,
        alt: "...",
        className: "shadow rounded-full w-12 h-12 align-middle border-none"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "shadow rounded-full w-12 h-12 align-middle border-none bg-blue-400 text-white font-semibold",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex w-full h-full items-center justify-center text-uppercase",
          children: initials
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePicture);

/***/ }),

/***/ "../common/src/messaging/ThreadList.tsx":
/*!**********************************************!*\
  !*** ../common/src/messaging/ThreadList.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\common\\src\\messaging\\ThreadList.tsx";

/**
 * Shows a list of message threads for a user, ordered chronologically
 */




const Preview = ({
  thread,
  url
}) => {
  const containerClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col justify-between h-16 border-b p-2 hover:bg-blueGray-50");
  const lastMessageTime = new Date(thread.lastMessageTime);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: url,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: containerClass,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center justify-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-semibold flex items-center",
          children: [thread.unreadMessages > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "rounded-full bg-blue-500 w-2 h-2 -ml-4 mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined) : null, thread.title]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "self-end text-sm text-gray-400",
          children: lastMessageTime.toLocaleDateString()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-gray-400 overflow-hidden mr-2 md:mr-8",
        children: thread.messagePreview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

const ThreadList = ({
  threads,
  threadToUrl
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full flex flex-col",
    children: threads.sort((a, b) => b.lastMessageTime - a.lastMessageTime).map(t => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Preview, {
      thread: t,
      url: threadToUrl(t.id)
    }, t.id, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ThreadList);

/***/ }),

/***/ "../server/src/utils/states.ts":
/*!*************************************!*\
  !*** ../server/src/utils/states.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": function() { return /* binding */ states; },
/* harmony export */   "eligibleStates": function() { return /* binding */ eligibleStates; },
/* harmony export */   "isEligibleState": function() { return /* binding */ isEligibleState; },
/* harmony export */   "stateNameToAbbreviation": function() { return /* binding */ stateNameToAbbreviation; },
/* harmony export */   "stateAbbreviationToName": function() { return /* binding */ stateAbbreviationToName; }
/* harmony export */ });
/**
 * List of US states + abbreviations
 */
const states = [{
  name: "Alabama",
  abbreviation: "AL"
}, {
  name: "Alaska",
  abbreviation: "AK"
}, {
  name: "Arizona",
  abbreviation: "AZ"
}, {
  name: "Arkansas",
  abbreviation: "AR"
}, {
  name: "California",
  abbreviation: "CA"
}, {
  name: "Colorado",
  abbreviation: "CO"
}, {
  name: "Connecticut",
  abbreviation: "CT"
}, {
  name: "Delaware",
  abbreviation: "DE"
}, {
  name: "District Of Columbia",
  abbreviation: "DC"
}, {
  name: "Florida",
  abbreviation: "FL"
}, {
  name: "Georgia",
  abbreviation: "GA"
}, {
  name: "Hawaii",
  abbreviation: "HI"
}, {
  name: "Idaho",
  abbreviation: "ID"
}, {
  name: "Illinois",
  abbreviation: "IL"
}, {
  name: "Indiana",
  abbreviation: "IN"
}, {
  name: "Iowa",
  abbreviation: "IA"
}, {
  name: "Kansas",
  abbreviation: "KS"
}, {
  name: "Kentucky",
  abbreviation: "KY"
}, {
  name: "Louisiana",
  abbreviation: "LA"
}, {
  name: "Maine",
  abbreviation: "ME"
}, {
  name: "Maryland",
  abbreviation: "MD"
}, {
  name: "Massachusetts",
  abbreviation: "MA"
}, {
  name: "Michigan",
  abbreviation: "MI"
}, {
  name: "Minnesota",
  abbreviation: "MN"
}, {
  name: "Mississippi",
  abbreviation: "MS"
}, {
  name: "Missouri",
  abbreviation: "MO"
}, {
  name: "Montana",
  abbreviation: "MT"
}, {
  name: "Nebraska",
  abbreviation: "NE"
}, {
  name: "Nevada",
  abbreviation: "NV"
}, {
  name: "New Hampshire",
  abbreviation: "NH"
}, {
  name: "New Jersey",
  abbreviation: "NJ"
}, {
  name: "New Mexico",
  abbreviation: "NM"
}, {
  name: "New York",
  abbreviation: "NY"
}, {
  name: "North Carolina",
  abbreviation: "NC"
}, {
  name: "North Dakota",
  abbreviation: "ND"
}, {
  name: "Ohio",
  abbreviation: "OH"
}, {
  name: "Oklahoma",
  abbreviation: "OK"
}, {
  name: "Oregon",
  abbreviation: "OR"
}, {
  name: "Pennsylvania",
  abbreviation: "PA"
}, {
  name: "Puerto Rico",
  abbreviation: "PR"
}, {
  name: "Rhode Island",
  abbreviation: "RI"
}, {
  name: "South Carolina",
  abbreviation: "SC"
}, {
  name: "South Dakota",
  abbreviation: "SD"
}, {
  name: "Tennessee",
  abbreviation: "TN"
}, {
  name: "Texas",
  abbreviation: "TX"
}, {
  name: "Utah",
  abbreviation: "UT"
}, {
  name: "Vermont",
  abbreviation: "VT"
}, {
  name: "Virginia",
  abbreviation: "VA"
}, {
  name: "Washington",
  abbreviation: "WA"
}, {
  name: "West Virginia",
  abbreviation: "WV"
}, {
  name: "Wisconsin",
  abbreviation: "WI"
}, {
  name: "Wyoming",
  abbreviation: "WY"
}];
const eligibleStates = states.filter(s => ["FL", "NV", "OH", "NC", "CA"].includes(s.abbreviation));
const isEligibleState = state => {
  return eligibleStates.map(s => s.abbreviation).includes(state);
};
const stateNameToAbbreviation = name => {
  const state = states.find(s => s.name === name);
  return (state === null || state === void 0 ? void 0 : state.abbreviation) || "";
};
const stateAbbreviationToName = abbreviation => {
  const state = states.find(s => s.abbreviation === abbreviation);
  return (state === null || state === void 0 ? void 0 : state.name) || "";
};

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/***/ (function() {



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

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


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

/***/ "@segment/snippet":
/*!***********************************!*\
  !*** external "@segment/snippet" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@segment/snippet");;

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ "react-text-mask":
/*!**********************************!*\
  !*** external "react-text-mask" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-text-mask");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("recoil");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2NvbXBvbmVudHMvbWV0cmljcy9QYWdlVmlld1RyYWNrZXIudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vY29udGV4dC9BcHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2xpYi9ldmVudF9sb2dnaW5nL2luZGV4LnRzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vbGliL2V2ZW50X2xvZ2dpbmcvc2VnbWVudC50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvY29udGV4dC9hdXRoLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL0FkZHJlc3NGb3JtLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL0NoYW5nZVBhc3N3b3JkRm9ybS50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9DaGVja2JveElucHV0LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL0VtYWlsRm9ybS50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9FbWVyZ2VuY3lDb250YWN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9FeHRlcm5hbFByb3ZpZGVyRm9ybS50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9GaWxlVXBsb2FkLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL01hc2tlZFRleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9OZXdUaHJlYWRGb3JtLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL1Bhc3N3b3JkUmVzZXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2Zvcm1zL1Bhc3N3b3JkU3RyZW5ndGgvUmVxdWlyZW1lbnQudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvZm9ybXMvUGFzc3dvcmRTdHJlbmd0aC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9QaG9uZUZvcm0udHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvZm9ybXMvUGhvbmVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vY29tbW9uL3NyYy9mb3Jtcy9SZWZlcnJhbEZvcm0udHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvZm9ybXMvU2VsZWN0SW5wdXQudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvZm9ybXMvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2hvYy9Qcm90ZWN0ZWRWaWV3LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2hvb2tzL2tleS50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2hvb2tzL3NwZWVjaF9yZWNvZ25pdGlvbi50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvbWVzc2FnaW5nL0NoYXRXaW5kb3cudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvbWVzc2FnaW5nL01lc3NhZ2UudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvbWVzc2FnaW5nL01lc3NhZ2VUaHJlYWQudHN4Iiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL2NvbW1vbi9zcmMvbWVzc2FnaW5nL1Byb2ZpbGVQaWN0dXJlLnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9jb21tb24vc3JjL21lc3NhZ2luZy9UaHJlYWRMaXN0LnRzeCIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9zZXJ2ZXIvc3JjL3V0aWxzL3N0YXRlcy50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2VnbWVudC9zbmlwcGV0XCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXRleHQtbWFza1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWNvaWxcIiIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC9leHRlcm5hbCBcInl1cFwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2lnbm9yZWR8RjpcXE5leHRqcy1Qcm9qZWN0c1xcaGVhbHRoZ2VudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwibG9nUGFnZVZpZXciLCJQYWdlVmlld1RyYWNrZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInBhdGhuYW1lIiwiZXZlbnRzIiwib24iLCJvZmYiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcENvbnRleHRQcm92aWRlciIsInNlbGVjdGVkVGltZVNsb3QiLCJzZXRTZWxlY3RlZFRpbWVTbG90IiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicmVzaWRlbmNlU3RhdGUiLCJzZXRSZXNpZGVuY2VTdGF0ZSIsImRpc2NvdW50Q29kZSIsInNldERpc2NvdW50Q29kZSIsImludGFrZUlkIiwic2V0SW50YWtlSWQiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsInppcENvZGUiLCJzZXRaaXBDb2RlIiwiY3VycmVudFF1ZXN0aW9uSWR4Iiwic2V0Q3VycmVudFF1ZXN0aW9uSWR4IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJiaXJ0aGRhdGUiLCJzZXRCaXJ0aGRhdGUiLCJEYXRlIiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsImluaXRpYWxQYXJhbXMiLCJzZXRJbml0aWFsUGFyYW1zIiwiYm9va2luZ0NvbnRleHQiLCJzZXRCb29raW5nQ29udGV4dCIsInNsb3RJZCIsInNsb3REYXRlIiwic3RhdGUiLCJvbmJvYXJkaW5nIiwiYm9va2luZyIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiR0FfVFJBQ0tJTkdfSUQiLCJBRFdPUkRTX0lEIiwiRkJfUElYRUxfSUQiLCJTTkFQX0lEIiwiVElLVE9LX0lEIiwibG9nR29vZ2xlUGFnZXZpZXciLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiYXJncyIsImRhdGFMYXllciIsInB1c2giLCJlIiwiY29uc29sZSIsImxvZyIsImxvZ0dvb2dsZUNvbnZlcnNpb24iLCJldmVudCIsInNlbmRfdG8iLCJ0cmFuc2FjdGlvbl9pZCIsImxvZ0ZhY2Vib29rRXZlbnQiLCJvcHRpb25zIiwidHJhY2siLCJmYnEiLCJ0cmFja0N1c3RvbSIsImZiRXZlbnQiLCJsb2dUaWtUb2tFdmVudCIsInR0RXZlbnQiLCJ0dHEiLCJsb2dTbmFwRXZlbnQiLCJzbmFwRXZlbnQiLCJsb2dTZWdtZW50RXZlbnQiLCJsb2dFdmVudCIsImlkZW50aWZ5VXNlciIsImlkZW50aWZpZXJzIiwiaWRlbnRpZnlTZWdtZW50IiwicmVuZGVyU2VnbWVudFNuaXBwZXQiLCJub2RlRW52IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FOQUxZVElDU19XUklURV9LRVkiLCJvcHRzIiwicGFnZSIsInNuaXBwZXQiLCJwcm9wZXJ0aWVzIiwiYW5hbHl0aWNzIiwibG9nU2VnbWVudFBhZ2VWaWV3IiwiaWRlbmlmaWVycyIsImlkZW50aWZ5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsZW5ndGgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiUHJvZ3Jlc3NCYXIiLCJwZXJjZW50IiwiY29sb3IiLCJyb3VuZGVkIiwiYmdHcmF5IiwibWFya2VyIiwibWFya2VyU3R5bGUiLCJ3aWR0aCIsImxpbmVDb2xvciIsImN4IiwiYmdDb2xvciIsIm1hcmdpbkxlZnQiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInRva2VuS2V5IiwiY29va2llS2V5IiwidG9rZW4iLCJzZXRUb2tlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNMb2dnZWRJbkFzUmVmIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkNvb2tpZXMiLCJsb2dpbiIsInQiLCJleHBpcmVzIiwibG9naW5BcyIsInNldEl0ZW0iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNMb2dnZWRJbkFzIiwiaXNMb2FkaW5nIiwidXNlQXV0aCIsImNvbnRleHQiLCJBZGRyZXNzRm9ybSIsImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJlbGlnaWJsZVN0YXRlcyIsInN0YXRlTGlzdCIsInN0YXRlcyIsInN0cmVldEFkZHJlc3MiLCJ1bml0TnVtYmVyIiwiY2l0eSIsInppcCIsIll1cCIsInJlcXVpcmVkIiwidmFsdWVzIiwidG9TdHJpbmciLCJhYmJyZXZpYXRpb24iLCJDaGFuZ2VQYXNzd29yZEZvcm0iLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwib25lT2YiLCJDaGVja2JveElucHV0IiwibWV0YSIsInVzZUZpZWxkIiwidG91Y2hlZCIsIkVtYWlsRm9ybSIsIm9uU3VibWl0IiwiRW1lcmdlbmN5Q29udGFjdEZvcm0iLCJlbWVyZ2VuY3lDb250YWN0IiwicmVsYXRpb25zaGlwIiwicGhvbmVOdW1iZXIiLCJFeHRlcm5hbFByb3ZpZGVyRm9ybSIsInNoYXJlIiwiRmlsZVVwbG9hZCIsImxhYmVsIiwic3VidGV4dCIsIm9uQ2hhbmdlIiwiY3VycmVudEZpbGUiLCJoYW5kbGVVcGxvYWQiLCJmaWxlcyIsImlucHV0UmVmIiwib3BlbkZpbGVEaWFsb2ciLCJjbGljayIsImNyZWF0ZU9iamVjdFVSTCIsIk1hc2tlZFRleHRJbnB1dCIsIm1hc2siLCJOZXdUaHJlYWRGb3JtIiwidGhyZWFkVHlwZSIsIlBhc3N3b3JkUmVzZXRGb3JtIiwib25Db21wbGV0ZSIsInBhc3N3b3JkIiwiUmVxdWlyZW1lbnQiLCJpc1ZhbGlkIiwidmFsaWRNZXNzYWdlIiwiaW52YWxpZE1lc3NhZ2UiLCJodG1sRm9yIiwiUGFzc3dvcmRTdHJlbmd0aCIsImxvbmdFbm91Z2giLCJoYXNVcHBlcmNhc2UiLCJtYXRjaCIsImhhc0xvd2VyY2FzZSIsImhhc051bWJlciIsImZvcm1hdFBob25lTnVtYmVyIiwiUGhvbmVJbnB1dCIsIlJlZmVycmFsRm9ybSIsInBhdGllbnROYW1lIiwicGF0aWVudEVtYWlsIiwicGF0aWVudFBob25lIiwicHJvdmlkZXJOYW1lIiwicHJvdmlkZXJFbWFpbCIsInByb3ZpZGVyUGhvbmUiLCJTZWxlY3RJbnB1dCIsImhpZGVFcnJvciIsIlRleHRJbnB1dCIsInRleHRBcmVhIiwic2hvd0NoZXZyb24iLCJjbGFzc05hbWUiLCJQcm90ZWN0ZWRWaWV3IiwidXNlS2V5UHJlc3MiLCJ0YXJnZXRLZXkiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VTcGVlY2hSZWNvZ25pdGlvbiIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaW50ZXJpbSIsInNldEludGVyaW0iLCJyZWNvZ25pdGlvbiIsInNldFJlY29nbml0aW9uIiwicmVjIiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJjb250aW51b3VzIiwiaW50ZXJpbVJlc3VsdHMiLCJvbnJlc3VsdCIsInByb2Nlc3NpbmciLCJyZXN1bHRJbmRleCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0IiwicHJldlJlc3VsdHMiLCJzdGFydFJlY29nbml0aW9uIiwic3RvcFJlY29nbml0aW9uIiwic3RvcCIsIkNoYXRXaW5kb3ciLCJ0aHJlYWQiLCJzZW5kTWVzc2FnZSIsIm9uQmFjayIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsImVudGVyUHJlc3NlZCIsImFkZE1lc3NhZ2UiLCJtc2ciLCJ0cmltIiwiZmluYWxseSIsImhlaWdodCIsIm1heEhlaWdodCIsInN1YmplY3QiLCJNZXNzYWdlQ29tcG9uZW50Iiwic2VuZGVyIiwiaW5ib3VuZCIsIk1lc3NhZ2VUaHJlYWQiLCJtZXNzYWdlcyIsInNvcnQiLCJhIiwiYiIsInRpbWVzdGFtcCIsIlByb2ZpbGVQaWN0dXJlIiwiaW5pdGlhbHMiLCJQcmV2aWV3IiwiY29udGFpbmVyQ2xhc3MiLCJsYXN0TWVzc2FnZVRpbWUiLCJ1bnJlYWRNZXNzYWdlcyIsInRpdGxlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibWVzc2FnZVByZXZpZXciLCJUaHJlYWRMaXN0IiwidGhyZWFkcyIsInRocmVhZFRvVXJsIiwicyIsImlzRWxpZ2libGVTdGF0ZSIsInN0YXRlTmFtZVRvQWJicmV2aWF0aW9uIiwiZmluZCIsInN0YXRlQWJicmV2aWF0aW9uVG9OYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGlCQUFpQixHQUFJQyxHQUFELElBQWlCO0FBQ3pDQyxpRUFBVyxDQUFDRCxHQUFELENBQVg7QUFDRCxDQUZEOztBQUlBLE1BQU1FLGVBQTZCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDdEQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDZDtBQUNBTCxtRUFBVyxDQUFDRyxNQUFNLENBQUNHLFFBQVIsQ0FBWDtBQUVBSCxVQUFNLENBQUNJLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NWLGlCQUF4QztBQUNBLFdBQU8sTUFBTTtBQUNYSyxZQUFNLENBQUNJLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNYLGlCQUF6QztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0ssTUFBTSxDQUFDSSxNQUFSLENBUk0sQ0FBVDtBQVVBLHNCQUFPO0FBQUEsY0FBR0w7QUFBSCxtQkFBUDtBQUNELENBZEQ7O0FBZ0JBLCtEQUFlRCxlQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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OiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2VkIHRvIHRyYWNrIHBhZ2Ugdmlld3Mgd2l0aCBvdXIgZXZlbnQgbG9nZ2luZyBsaWJyYXJ5LiBIb29rcyBpbnRvXG4gKiBuZXh0LmpzIHJvdXRlciBldmVudHMgaW4gb3JkZXIgdG8gdHJpZ2dlciB0aGUgbG9nIHBhZ2V2aWV3IGZ1bmN0aW9uXG4gKiB1cG9uIGV2ZXJ5IG5hdmlnYXRpb24gZXZlbnQuXG4gKi9cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsb2dQYWdlVmlldyB9IGZyb20gXCIuLi8uLi9saWIvZXZlbnRfbG9nZ2luZ1wiO1xuXG5jb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICBsb2dQYWdlVmlldyh1cmwpO1xufTtcblxuY29uc3QgUGFnZVZpZXdUcmFja2VyOiBSZWFjdC5GQzx7fT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdHJpZ2dlciBvbiBpbml0aWFsIHBhZ2Ugdmlld1xuICAgIGxvZ1BhZ2VWaWV3KHJvdXRlci5wYXRobmFtZSk7XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVZpZXdUcmFja2VyO1xuIiwiLyoqXG4gKiBUaGUgcHJpbWFyeSBjb250ZXh0IHVzZWQgaW4gb3VyIGZyb250ZW5kLCB3aGljaCBpcyBkb25lIGR1cmluZyBvbmJvYXJkaW5nLlxuICogT25jZSBhIHVzZXIgc2lnbnMgdXAgd2UgY2FuIHJlbHkgbW9yZSBvbiBzZXJ2ZXIgc3RhdGUuXG4gKi9cbmltcG9ydCB7XG4gIERpc2NvdW50Q29kZSxcbiAgUXVlc3Rpb25SZXNwb25zZSxcbiAgVXNlclJlZmVycmVyVHlwZSxcbn0gZnJvbSBcIkBoZWFsdGhnZW50L3NlcnZlci9zcmMvbGliL2FwaV90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIERpc3BhdGNoLFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgdXNlQ29udGV4dCxcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBUaGlzIHNob3VsZCBiZSBzd2l0Y2hlZCB0byB1c2VSZWR1Y2VyIG9yIHJlY29pbC5qcyBhdCB0aGlzIHBvaW50XG5cbmludGVyZmFjZSBPbmJvYXJkaW5nQ29udGV4dCB7XG4gIC8vIFRoZSB0aW1lIHNsb3QgdGhlIHVzZXIgc2VsZWN0ZWQgZm9yIHRoZWlyIGluaXRpYWwgYXBwb2ludG1lbnRcbiAgc2VsZWN0ZWRUaW1lU2xvdDogc3RyaW5nO1xuICBzZXRTZWxlY3RlZFRpbWVTbG90OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVXNlcidzIGVtYWlsXG4gIGVtYWlsOiBzdHJpbmc7XG4gIHNldEVtYWlsOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVXNlcidzIHBob25lIG51bWJlclxuICBwaG9uZTogc3RyaW5nO1xuICBzZXRQaG9uZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFRoZSBzdGF0ZSB0aGUgdXNlciBsaXZlcyBpbi4gVXNlZCB0byBkZXRlcm1pbmUgZWxpZ2liaWxpdHlcbiAgcmVzaWRlbmNlU3RhdGU6IHN0cmluZztcbiAgc2V0UmVzaWRlbmNlU3RhdGU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAvLyBUaGUgaW50YWtlIGlkIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIgb25jZSB0aGUgdXNlciBmaWxscyBvdXQgdGhlIHF1aXpcbiAgaW50YWtlSWQ6IHN0cmluZztcbiAgc2V0SW50YWtlSWQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAvLyBVc2VyJ3MgZmlyc3QgbmFtZVxuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgc2V0Rmlyc3ROYW1lOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVXNlcidzIGxhc3QgbmFtZVxuICBsYXN0TmFtZTogc3RyaW5nO1xuICBzZXRMYXN0TmFtZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gIC8vIFVzZXIncyB6aXAgY29kZVxuICB6aXBDb2RlOiBzdHJpbmc7XG4gIHNldFppcENvZGU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAvLyBUaGUgY3VycmVudCBxdWVzdGlvbiBpbmRleCB3aXRoaW4gdGhlIHF1aXpcbiAgY3VycmVudFF1ZXN0aW9uSWR4OiBudW1iZXI7XG4gIHNldEN1cnJlbnRRdWVzdGlvbklkeDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gIC8vIFVzZXIncyBkYXRlIG9mIGJpcnRoXG4gIGJpcnRoZGF0ZTogRGF0ZTtcbiAgc2V0QmlydGhkYXRlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxEYXRlPj47XG4gIC8vIEEgbm90aWZpY2F0aW9uIHRvIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlciBkdXJpbmcgb25ib2FyZGluZywgaWYgYW55XG4gIG5vdGlmaWNhdGlvbj86IHN0cmluZztcbiAgc2V0Tm90aWZpY2F0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gQW4gZXJyb3IgdG8gYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGR1cmluZyBvbmJvYXJkaW5nLCBpZiBhbnlcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIHNldEVycm9yOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgLy8gVXNlcidzIHJlc3BvbnNlcyB0byB0aGUgcXVpelxuICBhbnN3ZXJzOiBBcnJheTxRdWVzdGlvblJlc3BvbnNlPjtcbiAgc2V0QW5zd2VyczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248QXJyYXk8UXVlc3Rpb25SZXNwb25zZT4+Pjtcbn1cblxuaW50ZXJmYWNlIEJvb2tpbmdDb250ZXh0IHtcbiAgLy8gU2VydmVyIHRpbWVzbG90IElEXG4gIHNsb3RJZDogc3RyaW5nO1xuICAvLyBhcHBvaW50bWVudCB0aW1lc3RhbXBcbiAgc2xvdERhdGU6IERhdGU7XG59XG5cbmludGVyZmFjZSBDb250ZXh0VHlwZSB7XG4gIG9uYm9hcmRpbmc6IE9uYm9hcmRpbmdDb250ZXh0O1xuICBib29raW5nOiBCb29raW5nQ29udGV4dDtcbiAgc2V0Qm9va2luZ0NvbnRleHQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEJvb2tpbmdDb250ZXh0Pj47XG4gIGRpc2NvdW50Q29kZT86IERpc2NvdW50Q29kZTtcbiAgc2V0RGlzY291bnRDb2RlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxEaXNjb3VudENvZGUgfCB1bmRlZmluZWQ+PjtcbiAgaW5pdGlhbFBhcmFtcz86IFVzZXJSZWZlcnJlclR5cGU7XG4gIHNldEluaXRpYWxQYXJhbXM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFVzZXJSZWZlcnJlclR5cGUgfCB1bmRlZmluZWQ+Pjtcbn1cblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dFR5cGU+KHt9KTtcblxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHRQcm92aWRlcjogUmVhY3QuRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRUaW1lU2xvdCwgc2V0U2VsZWN0ZWRUaW1lU2xvdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc2lkZW5jZVN0YXRlLCBzZXRSZXNpZGVuY2VTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rpc2NvdW50Q29kZSwgc2V0RGlzY291bnRDb2RlXSA9IHVzZVN0YXRlPERpc2NvdW50Q29kZSB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW2ludGFrZUlkLCBzZXRJbnRha2VJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbemlwQ29kZSwgc2V0WmlwQ29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbklkeCwgc2V0Q3VycmVudFF1ZXN0aW9uSWR4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZTxBcnJheTxRdWVzdGlvblJlc3BvbnNlPj4oW10pO1xuICBjb25zdCBbYmlydGhkYXRlLCBzZXRCaXJ0aGRhdGVdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2luaXRpYWxQYXJhbXMsIHNldEluaXRpYWxQYXJhbXNdID0gdXNlU3RhdGU8VXNlclJlZmVycmVyVHlwZT4oKTtcblxuICBjb25zdCBbYm9va2luZ0NvbnRleHQsIHNldEJvb2tpbmdDb250ZXh0XSA9IHVzZVN0YXRlPEJvb2tpbmdDb250ZXh0Pih7XG4gICAgc2xvdElkOiBcIlwiLFxuICAgIHNsb3REYXRlOiBuZXcgRGF0ZSgpLFxuICB9KTtcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBvbmJvYXJkaW5nOiB7XG4gICAgICBzZWxlY3RlZFRpbWVTbG90LFxuICAgICAgc2V0U2VsZWN0ZWRUaW1lU2xvdCxcbiAgICAgIGVtYWlsLFxuICAgICAgc2V0RW1haWwsXG4gICAgICByZXNpZGVuY2VTdGF0ZSxcbiAgICAgIHNldFJlc2lkZW5jZVN0YXRlLFxuICAgICAgaW50YWtlSWQsXG4gICAgICBzZXRJbnRha2VJZCxcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIHNldEZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgc2V0TGFzdE5hbWUsXG4gICAgICBwaG9uZSxcbiAgICAgIHNldFBob25lLFxuICAgICAgemlwQ29kZSxcbiAgICAgIHNldFppcENvZGUsXG4gICAgICBjdXJyZW50UXVlc3Rpb25JZHgsXG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb25JZHgsXG4gICAgICBhbnN3ZXJzLFxuICAgICAgc2V0QW5zd2VycyxcbiAgICAgIGJpcnRoZGF0ZSxcbiAgICAgIHNldEJpcnRoZGF0ZSxcbiAgICAgIG5vdGlmaWNhdGlvbixcbiAgICAgIHNldE5vdGlmaWNhdGlvbixcbiAgICAgIGVycm9yLFxuICAgICAgc2V0RXJyb3IsXG4gICAgfSxcbiAgICBib29raW5nOiBib29raW5nQ29udGV4dCxcbiAgICBzZXRCb29raW5nQ29udGV4dDogc2V0Qm9va2luZ0NvbnRleHQsXG4gICAgZGlzY291bnRDb2RlLFxuICAgIHNldERpc2NvdW50Q29kZSxcbiAgICBpbml0aWFsUGFyYW1zLFxuICAgIHNldEluaXRpYWxQYXJhbXMsXG4gIH07XG4gIHJldHVybiA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0PENvbnRleHRUeXBlPihBcHBDb250ZXh0KTtcbn1cbiIsIi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIHBpeGVsIHRyYWNraW5nXG4gKi9cbmV4cG9ydCB7IHJlbmRlclNlZ21lbnRTbmlwcGV0IH0gZnJvbSBcIi4vc2VnbWVudFwiO1xuaW1wb3J0IHsgaWRlbnRpZnlTZWdtZW50LCBsb2dTZWdtZW50RXZlbnQgfSBmcm9tIFwiLi9zZWdtZW50XCI7XG5pbXBvcnQgeyBFdmVudFR5cGUsIEV2ZW50T3B0aW9ucywgVXNlcklkZW50aWZpZXJzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gXCJHLVBQN0ZCTVJDVzJcIjtcbmV4cG9ydCBjb25zdCBBRFdPUkRTX0lEID0gXCJBVy00Njg0MDkzNDdcIjtcbmV4cG9ydCBjb25zdCBGQl9QSVhFTF9JRCA9IDczMjAyODcwMTA0Njk2NjtcbmV4cG9ydCBjb25zdCBTTkFQX0lEID0gXCI0ZWFkZTAyMC1kOWY5LTQ4OTEtYTJlOC1lODk2YmUzMTZiZDVcIjtcbmV4cG9ydCBjb25zdCBUSUtUT0tfSUQgPSBcIkMwUkE3UkhVUk1IOTU5U0JRUU0wXCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcbmV4cG9ydCBjb25zdCBsb2dHb29nbGVQYWdldmlldyA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgcGFnZV9wYXRoOiB1cmwsXG4gIH0pO1xufTtcblxuY29uc3QgZ3RhZyA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICB0cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufTtcblxuLy8gT25seSBsb2dzIGFuIGV2ZW50IGlmIGl0J3MgYW4gYWRzIGNvbnZlcnNpb24sIG5vcm1hbCBldmVudHNcbi8vIGdvIHRvIGFuYWx5dGljcyB0aHJvdWdoIEdUTVxuZXhwb3J0IGNvbnN0IGxvZ0dvb2dsZUNvbnZlcnNpb24gPSAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4ge1xuICBpZiAoZXZlbnQgPT09IFwicHVyY2hhc2VcIikge1xuICAgIGd0YWcoXCJldmVudFwiLCBcImNvbnZlcnNpb25cIiwge1xuICAgICAgc2VuZF90bzogXCJBVy0zNDc0ODc0OTgvVGItNUNJR2k1ZGdDRUlyNjJLVUJcIixcbiAgICAgIHRyYW5zYWN0aW9uX2lkOiBcIlwiLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImNyZWF0ZS1hY2NvdW50XCIpIHtcbiAgICBndGFnKFwiZXZlbnRcIiwgXCJjb252ZXJzaW9uXCIsIHtcbiAgICAgIHNlbmRfdG86IFwiQVctMzQ3NDg3NDk4LzdHdjFDTXZ2dXRnQ0VJcjYyS1VCXCIsXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1waXhlbC9hZHZhbmNlZC9cbmV4cG9ydCBjb25zdCBsb2dGYWNlYm9va0V2ZW50ID0gKFxuICBldmVudDogRXZlbnRUeXBlLFxuICBvcHRpb25zID0ge30gYXMgRXZlbnRPcHRpb25zXG4pID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCB0cmFjayA9IChlOiBzdHJpbmcpID0+IHdpbmRvdy5mYnEoXCJ0cmFja1wiLCBlLCBvcHRpb25zKTtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCB0cmFja0N1c3RvbSA9IChlOiBzdHJpbmcpID0+IHdpbmRvdy5mYnEoXCJ0cmFja0N1c3RvbVwiLCBlLCBvcHRpb25zKTtcblxuICBjb25zdCBmYkV2ZW50ID0gbnVsbDtcbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgXCJwYWdlLXZpZXdcIjpcbiAgICAgIHRyYWNrKFwiUGFnZVZpZXdcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3RhcnQtY2hlY2tvdXRcIjpcbiAgICAgIHRyYWNrKFwiSW5pdGlhdGVDaGVja291dFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwdXJjaGFzZVwiOlxuICAgICAgLy8gVE9ETyhzYmIpOiBhZGQgcHJlZGljdGVkIExUVj9cbiAgICAgIHRyYWNrKFwiU3Vic2NyaWJlXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNyZWF0ZS1hY2NvdW50XCI6XG4gICAgICB0cmFjayhcIkNvbXBsZXRlUmVnaXN0cmF0aW9uXCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImpvaW4td2FpdGxpc3RcIjpcbiAgICBjYXNlIFwic3RhcnQtYXNzZXNzbWVudFwiOlxuICAgIGNhc2UgXCJjb21wbGV0ZS1hc3Nlc3NtZW50XCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHRyYWNrQ3VzdG9tKGV2ZW50KTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nVGlrVG9rRXZlbnQgPSAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4ge1xuICBsZXQgdHRFdmVudCA9IG51bGw7XG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlIFwicGFnZS12aWV3XCI6XG4gICAgICB0dEV2ZW50ID0gXCJCcm93c2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFydC1jaGVja291dFwiOlxuICAgICAgdHRFdmVudCA9IFwiU3RhcnQtQ2hlY2tvdXRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwdXJjaGFzZVwiOlxuICAgICAgdHRFdmVudCA9IFwiUHVyY2hhc2VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjcmVhdGUtYWNjb3VudFwiOlxuICAgICAgdHRFdmVudCA9IFwiUmVnaXN0cmF0aW9uXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiam9pbi13YWl0bGlzdFwiOlxuICAgIGNhc2UgXCJzdGFydC1hc3Nlc3NtZW50XCI6XG4gICAgY2FzZSBcImNvbXBsZXRlLWFzc2Vzc21lbnRcIjpcbiAgICAgIHR0RXZlbnQgPSBldmVudDtcbiAgfVxuICB0cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3aW5kb3cudHRxLnRyYWNrKHR0RXZlbnQpO1xuICB9IGNhdGNoIHtcbiAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gbG9nIHRpa3RvayBldmVudDogJHtldmVudH1gKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ1NuYXBFdmVudCA9IChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gIGxldCBzbmFwRXZlbnQgPSBudWxsO1xuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSBcInBhZ2Utdmlld1wiOlxuICAgICAgc25hcEV2ZW50ID0gXCJQQUdFX1ZJRVdcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFydC1jaGVja291dFwiOlxuICAgICAgc25hcEV2ZW50ID0gXCJTVEFSVF9DSEVDS09VVFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInB1cmNoYXNlXCI6XG4gICAgICBzbmFwRXZlbnQgPSBcIlBVUkNIQVNFXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3JlYXRlLWFjY291bnRcIjpcbiAgICAgIHNuYXBFdmVudCA9IFwiU0lHTl9VUFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImpvaW4td2FpdGxpc3RcIjpcbiAgICBjYXNlIFwic3RhcnQtYXNzZXNzbWVudFwiOlxuICAgIGNhc2UgXCJjb21wbGV0ZS1hc3Nlc3NtZW50XCI6XG4gICAgICBzbmFwRXZlbnQgPSBldmVudDtcbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIC8vIHdpbmRvdy5zbmFwdHIoXCJ0cmFja1wiLCBzbmFwRXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ1BhZ2VWaWV3ID0gKHVybDogc3RyaW5nKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gR29vZ2xlIHJlcXVpcmVzIGEgdXJsXG4gIC8vIGxvZ0dvb2dsZVBhZ2V2aWV3KHVybCk7XG5cbiAgbG9nU2VnbWVudEV2ZW50KFwicGFnZS12aWV3XCIpO1xuICBsb2dGYWNlYm9va0V2ZW50KFwicGFnZS12aWV3XCIpO1xuICAvLyBsb2dTbmFwRXZlbnQoXCJwYWdlLXZpZXdcIik7XG4gIGxvZ1Rpa1Rva0V2ZW50KFwicGFnZS12aWV3XCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ0V2ZW50ID0gKGV2ZW50OiBFdmVudFR5cGUsIG9wdGlvbnMgPSB7fSBhcyBFdmVudE9wdGlvbnMpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHJldHVybjtcbiAgfVxuICBsb2dHb29nbGVDb252ZXJzaW9uKGV2ZW50KTtcbiAgbG9nRmFjZWJvb2tFdmVudChldmVudCk7XG4gIGxvZ1NlZ21lbnRFdmVudChldmVudCwgb3B0aW9ucyk7XG4gIC8vIGxvZ1NuYXBFdmVudChldmVudCk7XG4gIGxvZ1Rpa1Rva0V2ZW50KGV2ZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpZGVudGlmeVVzZXIgPSAoaWRlbnRpZmllcnM6IFVzZXJJZGVudGlmaWVycykgPT4ge1xuICBpZGVudGlmeVNlZ21lbnQoaWRlbnRpZmllcnMpO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgLy8gd2luZG93LnNuYXB0cihcImluaXRcIiwgU05BUF9JRCwgeyB1c2VyX2VtYWlsOiBpZGVudGlmaWVycy5lbWFpbCB9KTtcbn07XG4iLCIvKipcbiAqIFNlZ21lbnQgc25pcHBldCByZW5kZXJpbmcgKyB0cmFja2luZyBpbXBsZW1lbnRhdGlvblxuICovXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgc25pcHBldCBmcm9tIFwiQHNlZ21lbnQvc25pcHBldFwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlLCBFdmVudE9wdGlvbnMsIFVzZXJJZGVudGlmaWVycyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJTZWdtZW50U25pcHBldCA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBub2RlRW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPz8gXCJkZXZlbG9wbWVudFwiO1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTkFMWVRJQ1NfV1JJVEVfS0VZO1xuICBjb25zdCBvcHRzID0ge1xuICAgIGFwaUtleSxcbiAgICBwYWdlOiB0cnVlLFxuICB9O1xuICByZXR1cm4gbm9kZUVudiA9PT0gXCJkZXZlbG9wbWVudFwiID8gc25pcHBldC5tYXgob3B0cykgOiBzbmlwcGV0Lm1pbihvcHRzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dTZWdtZW50RXZlbnQgPSAoXG4gIGV2ZW50OiBFdmVudFR5cGUsXG4gIHByb3BlcnRpZXMgPSB7fSBhcyBFdmVudE9wdGlvbnNcbik6IHZvaWQgPT4ge1xuICBpZiAoZXZlbnQgIT09IFwicGFnZS12aWV3XCIpIHtcbiAgICB3aW5kb3cuYW5hbHl0aWNzLnRyYWNrKGV2ZW50LCBwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIHtcbiAgICBsb2dTZWdtZW50UGFnZVZpZXcoKTtcbiAgfVxufTtcblxuY29uc3QgbG9nU2VnbWVudFBhZ2VWaWV3ID0gKCkgPT4ge1xuICB3aW5kb3cuYW5hbHl0aWNzLnBhZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpZGVudGlmeVNlZ21lbnQgPSAoaWRlbmlmaWVyczogVXNlcklkZW50aWZpZXJzKSA9PiB7XG4gIHdpbmRvdy5hbmFseXRpY3MuaWRlbnRpZnkoaWRlbmlmaWVycyk7XG59O1xuIiwiLyoqXG4gKiBTZWUgbmV4dC5qcyBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYWR2YW5jZWQtZmVhdHVyZXMvY3VzdG9tLWFwcFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFpbHdpbmQuY3NzXCI7XG5cbmltcG9ydCBQYWdlVmlld1RyYWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWV0cmljcy9QYWdlVmlld1RyYWNrZXJcIjtcbmltcG9ydCB7IEFwcENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiQGhlYWx0aGdlbnQvY29tbW9uXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICA8UGFnZVZpZXdUcmFja2VyPlxuICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8QXBwQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FwcENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgICAgPC9QYWdlVmlld1RyYWNrZXI+XG4gICAgICA8L1JlY29pbFJvb3Q+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbiddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7aWYocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpe2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCIvKipcbiAqIENvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSBwcm9ncmVzcyBiYXJcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBlcmNlbnQ6IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHJvdW5kZWQ/OiBib29sZWFuO1xuICBiZ0dyYXk/OiBib29sZWFuO1xuICBtYXJrZXI/OiBudW1iZXI7XG4gIC8vIENTUyBjbGFzcyBmb3IgdGhlIG1hcmtlcnNcbiAgbWFya2VyU3R5bGU/OiBzdHJpbmc7XG59XG5jb25zdCBQcm9ncmVzc0JhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgcGVyY2VudCxcbiAgY29sb3IsXG4gIHJvdW5kZWQsXG4gIGJnR3JheSxcbiAgbWFya2VyLFxuICBtYXJrZXJTdHlsZSxcbn0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSBwZXJjZW50ICsgXCIlXCI7XG4gIGNvbnN0IGxpbmVDb2xvciA9IGN4KHtcbiAgICBcImJnLXJlZC01MDBcIjogY29sb3IgPT09IFwicmVkXCIsXG4gICAgXCJiZy15ZWxsb3ctMzAwXCI6IGNvbG9yID09PSBcInllbGxvd1wiLFxuICAgIFwiYmctYmx1ZS01MDBcIjogY29sb3IgPT09IFwiYmx1ZVwiLFxuICAgIFwiYmctZ3JlZW4tNTAwXCI6IGNvbG9yID09PSBcImdyZWVuXCIsXG4gICAgXCJiZy15ZWxsb3ctNTAwXCI6IGNvbG9yID09PSBcIm9yYW5nZVwiLFxuICAgIFwiYmctY29yYWxcIjogY29sb3IgPT09IFwiY29yYWxcIiB8fCAhY29sb3IsXG4gIH0pO1xuICBjb25zdCBiZ0NvbG9yID0gY3goXG4gICAgIWJnR3JheVxuICAgICAgPyB7XG4gICAgICAgIFwiYmctcmVkLTIwMFwiOiBjb2xvciA9PT0gXCJyZWRcIixcbiAgICAgICAgXCJiZy15ZWxsb3ctMjAwXCI6IGNvbG9yID09PSBcInllbGxvd1wiLFxuICAgICAgICBcImJnLWJsdWUtMjAwXCI6IGNvbG9yID09PSBcImJsdWVcIixcbiAgICAgICAgXCJiZy1jb3JhbC0yMDBcIjogY29sb3IgPT09IFwiY29yYWxcIiB8fCAhY29sb3IsXG4gICAgICAgIFwiYmctZ3JlZW4tMjAwXCI6IGNvbG9yID09PSBcImdyZWVuXCIsXG4gICAgICB9XG4gICAgICA6IFwiYmctZ3JheS0yMDBcIlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcIm92ZXJmbG93LWhpZGRlbiBoLTIgdGV4dC14cyBmbGV4XCIsIGJnQ29sb3IsIHtcbiAgICAgICAgICByb3VuZGVkLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge21hcmtlciB8fCAwID4gMCA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFwiYWJzb2x1dGUgaC1mdWxsXCIsIG1hcmtlclN0eWxlKX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjFweFwiLCBtYXJnaW5MZWZ0OiBgJHttYXJrZXJ9JWAgfX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGggfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BzaGFkb3ctbm9uZSBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgJHtsaW5lQ29sb3J9YH1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsIi8qKlxuICogRXhwb3J0cyBjb21tb24gY29tcG9uZW50c1xuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2dyZXNzQmFyIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbiIsIi8qKlxuICogU3RvcmVzIGF1dGhlbnRpY2F0aW9uIGNvbnRleHQgaW4gSlMgY29va2llcywgd2l0aCB0aGVcbiAqIGNvbnRleHQgY29udGFpbmluZyBhIEpTT04gV2ViIFRva2VuXG4gKi9cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5pbnRlcmZhY2UgSUF1dGhDb250ZXh0IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBpc0xvZ2dlZEluQXM6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgbG9naW46ICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkO1xuICBsb2dpbkFzOiAodG9rZW46IHN0cmluZykgPT4gdm9pZDtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xufVxuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dD4oe30pO1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IHRva2VuS2V5Pzogc3RyaW5nIH0+ID0gKHtcbiAgdG9rZW5LZXksXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBjb29raWVLZXkgPSB0b2tlbktleSA/PyBcImF1dGhfdG9rZW5cIjtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBpc0xvZ2dlZEluQXNSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW5Bc1JlZi5jdXJyZW50ID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2dlZF9pbl9hc1wiKTtcbiAgICBzZXRUb2tlbihDb29raWVzLmdldChjb29raWVLZXkpKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gKHQ6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgQ29va2llcy5zZXQoY29va2llS2V5LCB0LCB7IGV4cGlyZXM6IDAuNSB9KTtcbiAgICBzZXRUb2tlbih0KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBsb2dpbkFzID0gKHQ6IHN0cmluZykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nZ2VkX2luX2FzXCIsIFwiMVwiKTtcbiAgICBpc0xvZ2dlZEluQXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgbG9naW4odCk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKGNvb2tpZUtleSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dnZWRfaW5fYXNcIik7XG4gICAgaXNMb2dnZWRJbkFzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBzZXRUb2tlbihcIlwiKTtcbiAgfTtcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdG9rZW4sXG4gICAgaXNMb2dnZWRJbkFzOiAhIWlzTG9nZ2VkSW5Bc1JlZi5jdXJyZW50LFxuICAgIGlzTG9hZGluZzogbG9hZGluZyxcbiAgICBsb2dpbixcbiAgICBsb2dpbkFzLFxuICAgIGxvZ291dCxcbiAgfTtcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCk6IElBdXRoQ29udGV4dCA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQgYXMgSUF1dGhDb250ZXh0O1xufTtcbiIsIi8qKlxuICogZ2VuZXJpYyBmb3JtIHVzZWQgdG8gZW50ZXIgYSBVUyBtYWlsaW5nIGFkZHJlc3NcbiAqL1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcbmltcG9ydCB7IHN0YXRlcywgVVNTdGF0ZSB9IGZyb20gXCJAaGVhbHRoZ2VudC9zZXJ2ZXIvc3JjL3V0aWxzL3N0YXRlc1wiO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gXCIuL1NlbGVjdElucHV0XCI7XG5cbmludGVyZmFjZSBBZGRyZXNzIHtcbiAgc3RyZWV0QWRkcmVzczogc3RyaW5nO1xuICB1bml0TnVtYmVyPzogc3RyaW5nO1xuICBjaXR5OiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHppcDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWRkcmVzcz86IEFkZHJlc3M7XG4gIGhhbmRsZVN1Ym1pdDogKGE6IEFkZHJlc3MpID0+IFByb21pc2U8dW5rbm93bj47XG4gIGVsaWdpYmxlU3RhdGVzPzogQXJyYXk8VVNTdGF0ZT47XG59XG5cbmNvbnN0IEFkZHJlc3NGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBhZGRyZXNzLFxuICBjaGlsZHJlbixcbiAgaGFuZGxlU3VibWl0LFxuICBlbGlnaWJsZVN0YXRlcyxcbn0pID0+IHtcbiAgY29uc3Qgc3RhdGVMaXN0ID0gZWxpZ2libGVTdGF0ZXMgfHwgc3RhdGVzO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgc3RyZWV0QWRkcmVzczogXCJcIixcbiAgICAgICAgdW5pdE51bWJlcjogXCJcIixcbiAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgc3RhdGU6IFwiXCIsXG4gICAgICAgIHppcDogXCJcIixcbiAgICAgICAgLi4uYWRkcmVzcyxcbiAgICAgIH19XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgc3RyZWV0QWRkcmVzczogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIHVuaXROdW1iZXI6IFl1cC5zdHJpbmcoKSxcbiAgICAgICAgY2l0eTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIHN0YXRlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICAgICAgemlwOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpLmNhdGNoKChlKSA9PiBzZXRFcnJvcihlLnRvU3RyaW5nKCkpKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAgPFRleHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiU3RyZWV0IEFkZHJlc3NcIiBuYW1lPVwic3RyZWV0QWRkcmVzc1wiIC8+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbGFiZWw9XCJVbml0L0FwYXJ0bWVudCAjIChvcHRpb25hbClcIlxuICAgICAgICAgIG5hbWU9XCJ1bml0TnVtYmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ2l0eVwiIG5hbWU9XCJjaXR5XCIgLz5cbiAgICAgICAgPFNlbGVjdElucHV0IG5hbWU9XCJzdGF0ZVwiIGxhYmVsPVwiU3RhdGVcIj5cbiAgICAgICAgICA8b3B0aW9uIGtleT17XCJcIn0+U2VsZWN0IFN0YXRlPC9vcHRpb24+XG4gICAgICAgICAge3N0YXRlTGlzdC5tYXAoKHsgbmFtZSwgYWJicmV2aWF0aW9uIH0pID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXthYmJyZXZpYXRpb259IHZhbHVlPXthYmJyZXZpYXRpb259PlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdElucHV0PlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJaaXAgQ29kZVwiIG5hbWU9XCJ6aXBcIiAvPlxuICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzRm9ybTtcbiIsIi8qKlxuICogR2VuZXJpYyBmb3JtIHVzZWQgdG8gY2hhbmdlIGEgcGFzc3dvcmRcbiAqL1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGFuZGxlU3VibWl0OiAoY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgQ2hhbmdlUGFzc3dvcmRGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgaGFuZGxlU3VibWl0IH0pID0+IHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBjdXJyZW50UGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBcIlwiLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXG4gICAgICB9fVxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XG4gICAgICAgIGN1cnJlbnRQYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBZdXAuc3RyaW5nKClcbiAgICAgICAgICAub25lT2YoW1l1cC5yZWYoXCJuZXdQYXNzd29yZFwiKSwgbnVsbF0sIFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKVxuICAgICAgICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgICAgfSl9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xuICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgc2V0U3VjY2VzcyhcIlwiKTtcbiAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcy5jdXJyZW50UGFzc3dvcmQsIHZhbHVlcy5uZXdQYXNzd29yZClcbiAgICAgICAgICAudGhlbigoKSA9PiBzZXRTdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgcGFzc3dvcmRcIikpXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiBzZXRFcnJvcihlLnRvU3RyaW5nKCkpKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGxhYmVsPVwiQ3VycmVudCBQYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cImN1cnJlbnRQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIiBuYW1lPVwibmV3UGFzc3dvcmRcIiAvPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge3N1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwXCI+e3N1Y2Nlc3N9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlUGFzc3dvcmRGb3JtO1xuIiwiLyoqXG4gKiBHZW5lcmljIHN0eWxlZCBjaGVja2JveCBjb21wb25lbnRcbiAqL1xuaW1wb3J0IHsgdXNlRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgW3g6IHN0cmluZ106IGFueTtcbn1cblxuY29uc3QgQ2hlY2tib3hJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIG5hbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCBtZXRhXSA9IHVzZUZpZWxkKG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0IG1yLTMgdGV4dC1jb3JhbFwiXG4gICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICB0eXBlPXtcImNoZWNrYm94XCJ9XG4gICAgICAgICAgY2hlY2tlZD17ZmllbGQudmFsdWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQteHNcIiBodG1sRm9yPXtuYW1lfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTQwMFwiPnttZXRhLmVycm9yfTwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hJbnB1dDtcbiIsIi8qKlxuICogRm9ybSB1c2VkIHRvIGVudGVyIGFuIGVtYWlsXG4gKiBzYW1lIGFzIGEgdGV4dGJveCBidXQgdXNlcyBZdXAgdG8gdmFsaWRhdGUgYW4gZW1haWwgaXMgaW4gdGhlIHJpZ2h0IGZvcm1hdFxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgSGVhbHRoZ2VudEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vZnJvbnRlbmQvY29tcG9uZW50cy9jb3JlL0hlYWx0aGdlbnRCdXR0b25cIjtcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSBcIi4vVGV4dElucHV0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBvblN1Ym1pdDogKGVtYWlsOiBzdHJpbmcpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgRW1haWxGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBlbWFpbCwgb25TdWJtaXQsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfX1cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgICAgICAgc2V0RXJyb3IoXCJSZXF1aXJlZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIG9uU3VibWl0KHZhbHVlcy5lbWFpbCkuY2F0Y2goKGU6IEVycm9yKSA9PiBzZXRFcnJvcihlLnRvU3RyaW5nKCkpKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZvcm0+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIlwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPXtlbWFpbH0gLz5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxGb3JtO1xuIiwiLyoqXG4gKiBGb3JtIHVzZWQgdG8gZW50ZXIgdGhlIG5hbWUsIHJlbGF0aW9uc2hpcCwgYW5kIG90aGVyIGNvbnRhY3QgaW5mb1xuICogZm9yIGEgcGF0aWVudCBlbWVyZ2VuY3kgY29udGFjdFxuICovXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgUGhvbmVJbnB1dCBmcm9tIFwiLi9QaG9uZUlucHV0XCI7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgRW1lcmdlbmN5Q29udGFjdCB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICByZWxhdGlvbnNoaXA6IHN0cmluZztcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZW1lcmdlbmN5Q29udGFjdD86IEVtZXJnZW5jeUNvbnRhY3Q7XG4gIGhhbmRsZVN1Ym1pdDogKGVjOiBFbWVyZ2VuY3lDb250YWN0KSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IEVtZXJnZW5jeUNvbnRhY3RGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBlbWVyZ2VuY3lDb250YWN0LFxuICBjaGlsZHJlbixcbiAgaGFuZGxlU3VibWl0LFxufSkgPT4ge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxuICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgcmVsYXRpb25zaGlwOiBcIlwiLFxuICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgICAgLi4uZW1lcmdlbmN5Q29udGFjdCxcbiAgICAgIH19XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgZmlyc3ROYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICAgICAgbGFzdE5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgICAgICByZWxhdGlvbnNoaXA6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgICAgICBwaG9uZU51bWJlcjogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKS5jYXRjaCgoZSkgPT4gc2V0RXJyb3IoZS50b1N0cmluZygpKSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJGaXJzdCBOYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiIC8+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkxhc3QgTmFtZVwiIG5hbWU9XCJsYXN0TmFtZVwiIC8+XG4gICAgICAgIDxUZXh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIlJlbGF0aW9uc2hpcFwiIG5hbWU9XCJyZWxhdGlvbnNoaXBcIiAvPlxuICAgICAgICA8UGhvbmVJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCIgbmFtZT1cInBob25lTnVtYmVyXCIgLz5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1lcmdlbmN5Q29udGFjdEZvcm07XG4iLCIvKipcbiAqIEZvcm0gdXNlZCB0byBlbnRlciB0aGUgbmFtZSBvZiBhbiBvdXRzaWRlIGNsaW5pY2lhbiwgd2hpY2ggY2FuIGJlIHVzZWRcbiAqIHRvIGdldCB0aGUgbmFtZSBvZiBhIHRoZXJhcGlzdCBvciBvdXRzaWRlIFBDUFxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuaW1wb3J0IFBob25lSW5wdXQgZnJvbSBcIi4vUGhvbmVJbnB1dFwiO1xuaW1wb3J0IENoZWNrYm94SW5wdXQgZnJvbSBcIi4vQ2hlY2tib3hJbnB1dFwiO1xuXG50eXBlIEV4dGVybmFsUHJvdmlkZXIgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgc2hhcmU6IGJvb2xlYW47XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm92aWRlclR5cGU6IFwiVEhFUkFQSVNUXCIgfCBcIlBDUFwiO1xuICBoYW5kbGVTdWJtaXQ6IChlOiBFeHRlcm5hbFByb3ZpZGVyKSA9PiBQcm9taXNlPHVua25vd24+O1xufVxuXG5jb25zdCBFeHRlcm5hbFByb3ZpZGVyRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHNoYXJlOiB0cnVlLFxuICAgICAgfX1cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICBuYW1lOiBZdXAuc3RyaW5nKCksXG4gICAgICAgIHBob25lOiBZdXAuc3RyaW5nKCksXG4gICAgICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoKSxcbiAgICAgICAgc2hhcmU6IFl1cC5ib29sZWFuKCksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKS5jYXRjaCgoZSkgPT4gc2V0RXJyb3IoZS50b1N0cmluZygpKSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICA8UGhvbmVJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiUGhvbmUgTnVtYmVyIChvcHRpb25hbClcIiBuYW1lPVwicGhvbmVcIiAvPlxuICAgICAgICA8VGV4dElucHV0IHR5cGU9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWwgKG9wdGlvbmFsKVwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxDaGVja2JveElucHV0IGxhYmVsPVwiU2hhcmUgaW5mb3JtYXRpb25cIiBuYW1lPVwic2hhcmVcIj5cbiAgICAgICAgICBMaW5hIGNhbiBzaGFyZSBpbXBvcnRhbnQgdHJlYXRtZW50IGluZm9ybWF0aW9uIHdpdGggbXkgcHJvdmlkZXJcbiAgICAgICAgPC9DaGVja2JveElucHV0PlxuICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbFByb3ZpZGVyRm9ybTtcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIEZpbGUgdXBsb2FkIGZvcm1cbiAqIERvbid0IHRoaW5rIHRoaXMgaXMgYWN0aXZlbHkgdXNlZCBhdCB0aGUgbW9tZW50XG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN1YnRleHQ/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoZmlsZTogRmlsZSkgPT4gdm9pZDtcbiAgY3VycmVudEZpbGU/OiBGaWxlO1xufVxuXG5jb25zdCBGaWxlVXBsb2FkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgc3VidGV4dCxcbiAgb25DaGFuZ2UsXG4gIGN1cnJlbnRGaWxlLFxufSkgPT4ge1xuICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQ/LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9uQ2hhbmdlKGUudGFyZ2V0Py5maWxlc1swXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICBjb25zdCBvcGVuRmlsZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudC5jbGljaygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYXgtdy14bCBtYXgtaC14bCBtYi00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIGZsZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj57bGFiZWx9PC9kaXY+XG4gICAgICAgIHtjdXJyZW50RmlsZSAmJiA8YnV0dG9uIG9uQ2xpY2s9e29wZW5GaWxlRGlhbG9nfT5FZGl0PC9idXR0b24+fVxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXQgaGlkZGVuIHR5cGU9XCJmaWxlXCIgcmVmPXtpbnB1dFJlZn0gb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17b3BlbkZpbGVEaWFsb2d9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWdyb3ctMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCJcbiAgICAgID5cbiAgICAgICAgeyFjdXJyZW50RmlsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgdGV4dC1ncmF5LTQwMCBweC00XCI+XG4gICAgICAgICAgICBDbGljayB0byB1cGxvYWQgb3IgdGFrZSBhIHBpY3R1cmVcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgaC0xNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTMgOWEyIDIgMCAwMTItMmguOTNhMiAyIDAgMDAxLjY2NC0uODlsLjgxMi0xLjIyQTIgMiAwIDAxMTAuMDcgNGgzLjg2YTIgMiAwIDAxMS42NjQuODlsLjgxMiAxLjIyQTIgMiAwIDAwMTguMDcgN0gxOWEyIDIgMCAwMTIgMnY5YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY5elwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTE1IDEzYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjdXJyZW50RmlsZSAmJiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgICBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwoY3VycmVudEZpbGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XG4iLCIvKipcbiAqIFVzZWQgdG8gZW50ZXIgYSBtYXNrZWQgdGV4dCBpbnB1dCwgb25lIHdoZXJlIHlvdSB3YW50XG4gKiBpdCB0byByZW5kZXIgaW4gYSBzcGVjaWZpYyBmb3JtYXQuXG4gKiBlLmcuIFBob25lIG51bWJlciBiZWluZyBmb3JtYXR0ZWQgYXNcbiAqIChhYWEpIGJiYi1jY2NjXG4gKi9cbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gXCJyZWFjdC10ZXh0LW1hc2tcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIG1hc2s6IChzdHJpbmcgfCBSZWdFeHApW107XG4gIFt4OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5jb25zdCBNYXNrZWRUZXh0SW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICB0eXBlLFxuICBtYXNrLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQobmFtZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1iLTJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCIgZm9udC1saWdodCB0ZXh0LXNtXCIgaHRtbEZvcj17bmFtZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cbiAgICAgICAgPE1hc2tlZElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6cmluZy1kYXJrR3JheSBmb2N1czpib3JkZXItZGFya0dyYXkgZm9jdXM6cmluZy0wIGJsb2NrIHctZnVsbCBwbC00IHNtOnRleHQtc20gYm9yZGVyLWRhcmtHcmF5LTMwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgIG1hc2s9e21hc2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmVkLTQwMCBsZWFkaW5nLW5vbmUgbXQtMVwiPlxuICAgICAgICAgIHttZXRhLmVycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkVGV4dElucHV0O1xuIiwiLyoqXG4gKiBUaGlzIGlzIHVzZWQgdG8gaW5pdGlhdGUgYSB0aHJlYWQgZnJvbSB0aGUgcGF0aWVudCBzaWRlLCB3aXRoIHRoZSBwYXRpZW50IGJlaW5nXG4gKiBhYmxlIHRvIHNlbGVjdCBhIHR5cGUgb2YgdGhyZWFkICh0cmVhdG1lbnQgcXVlc3Rpb24sIHJlZmlsbCwgZXRjKS5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tIFwiLi9TZWxlY3RJbnB1dFwiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcblxuaW50ZXJmYWNlIENyZWF0ZVRocmVhZFBhcmFtcyB7XG4gIHRocmVhZFR5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaGFuZGxlU3VibWl0OiAodDogQ3JlYXRlVGhyZWFkUGFyYW1zKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IE5ld1RocmVhZEZvcm06IFJlYWN0LkZDPFByb3BzPiA9ICh7IGhhbmRsZVN1Ym1pdCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgdGhyZWFkVHlwZTogXCJUUkVBVE1FTlRfUVVFU1RJT05cIixcbiAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgIH19XG4gICAgICAvLyB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHt9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKS5jYXRjaCgoZSkgPT4gc2V0RXJyb3IoZS50b1N0cmluZygpKSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgIDxTZWxlY3RJbnB1dCBuYW1lPVwidGhyZWFkVHlwZVwiIGxhYmVsPVwiQ29uY2VyblwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUUkVBVE1FTlRfUVVFU1RJT05cIj5UcmVhdG1lbnQgUXVlc3Rpb248L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJFU0NSSVBUSU9OX1JFRklMTFwiPlByZXNjcmlwdGlvbiBSZWZpbGw8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3RJbnB1dD5cbiAgICAgICAgPFRleHRJbnB1dCB0ZXh0QXJlYT17dHJ1ZX0gbGFiZWw9XCJNZXNzYWdlXCIgbmFtZT1cImNvbnRlbnRcIiAvPlxuICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Gb3JtaWs+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdUaHJlYWRGb3JtO1xuIiwiLyoqXG4gKiBnZW5lcmljIHBhc3N3b3JkIHJlc2V0IGZvcm1cbiAqL1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tIFwiLi9UZXh0SW5wdXRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25Db21wbGV0ZT86ICgpID0+IHZvaWQ7XG4gIGhhbmRsZVN1Ym1pdDogKHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgUGFzc3dvcmRSZXNldEZvcm06IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIG9uQ29tcGxldGUsXG4gIGNoaWxkcmVuLFxuICBoYW5kbGVTdWJtaXQsXG59KSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgfX1cbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xuICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogWXVwLnN0cmluZygpXG4gICAgICAgICAgLm9uZU9mKFtZdXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIilcbiAgICAgICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICAgIH0pfVxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMucGFzc3dvcmQpXG4gICAgICAgICAgLnRoZW4ob25Db21wbGV0ZSlcbiAgICAgICAgICAuY2F0Y2goKGUpID0+IHNldEVycm9yKGUudG9TdHJpbmcoKSkpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8Rm9ybT5cbiAgICAgICAgPFRleHRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRSZXNldEZvcm07XG4iLCIvKipcbiAqIFNob3dzIGlmIGEgcmVxdWlyZW1lbnQgZm9yIHBhc3N3b3JkIHN0cmVuZ3RoIGlzIGZ1bGZpbGxlZCBvciBub3QuXG4gKiBSZWQgdGV4dCArIHggaWYgbm90LCBjaGVja21hcmsgKyBncmVlbiBpZiBzb1xuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc1ZhbGlkOiBib29sZWFuO1xuICB2YWxpZE1lc3NhZ2U6IHN0cmluZztcbiAgaW52YWxpZE1lc3NhZ2U6IHN0cmluZztcbiAgaHRtbEZvcj86IHN0cmluZztcbn1cblxuY29uc3QgUmVxdWlyZW1lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGlzVmFsaWQsXG4gIHZhbGlkTWVzc2FnZSxcbiAgaW52YWxpZE1lc3NhZ2UsXG4gIGh0bWxGb3IsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxhYmVsXG4gICAgICBodG1sRm9yPXtodG1sRm9yfVxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtXCIsXG4gICAgICAgIGlzVmFsaWQgPyBcInRleHQtZ3JlZW4tNTAwXCIgOiBcInRleHQtcmVkLTUwMFwiXG4gICAgICApfVxuICAgID5cbiAgICAgIHtpc1ZhbGlkID8gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICBkPVwiTTUgMTNsNCA0TDE5IDdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKSA6IChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICl9XG4gICAgICA8c3Bhbj57IWlzVmFsaWQgPyBpbnZhbGlkTWVzc2FnZSA6IHZhbGlkTWVzc2FnZX08L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVtZW50O1xuIiwiLyoqXG4gKiBVc2VkIHRvIGRpc3BsYXkgYSBsaXN0IG9mIGNyaXRlcmlhIGZvciBwYXNzd29yZCBzdHJlbmd0aFxuICogZS5nLiBsZW5ndGgsIHVwcGVyL2xvd2VyIGNhc2UsIGFzIGEgbnVtYmVyXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlcXVpcmVtZW50IGZyb20gXCIuL1JlcXVpcmVtZW50XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufVxuXG5jb25zdCBQYXNzd29yZFN0cmVuZ3RoOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwYXNzd29yZCB9KSA9PiB7XG4gIGlmIChwYXNzd29yZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG4gIC8vIFRPRE8oc2JiKTogcGFzcyB0aGlzIGZyb20gYWJvdmVcbiAgY29uc3QgbG9uZ0Vub3VnaCA9IHBhc3N3b3JkLmxlbmd0aCA+PSA4O1xuICBjb25zdCBoYXNVcHBlcmNhc2UgPSAhIXBhc3N3b3JkLm1hdGNoKFwiW0EtWl1cIik7XG4gIGNvbnN0IGhhc0xvd2VyY2FzZSA9ICEhcGFzc3dvcmQubWF0Y2goXCJbYS16XVwiKTtcbiAgY29uc3QgaGFzTnVtYmVyID0gISFwYXNzd29yZC5tYXRjaChcIlswLTldXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMSBtdC0xXCI+XG4gICAgICA8UmVxdWlyZW1lbnRcbiAgICAgICAgaXNWYWxpZD17bG9uZ0Vub3VnaH1cbiAgICAgICAgdmFsaWRNZXNzYWdlPVwiaXMgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmdcIlxuICAgICAgICBpbnZhbGlkTWVzc2FnZT1cImlzIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nXCJcbiAgICAgIC8+XG4gICAgICA8UmVxdWlyZW1lbnRcbiAgICAgICAgaXNWYWxpZD17aGFzVXBwZXJjYXNlfVxuICAgICAgICB2YWxpZE1lc3NhZ2U9XCJoYXMgYXQgbGVhc3QgMSB1cHBlcmNhc2UgbGV0dGVyXCJcbiAgICAgICAgaW52YWxpZE1lc3NhZ2U9XCJoYXMgYXQgbGVhc3QgMSB1cHBlcmNhc2UgbGV0dGVyXCJcbiAgICAgIC8+XG4gICAgICA8UmVxdWlyZW1lbnRcbiAgICAgICAgaXNWYWxpZD17aGFzTG93ZXJjYXNlfVxuICAgICAgICB2YWxpZE1lc3NhZ2U9XCJoYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyXCJcbiAgICAgICAgaW52YWxpZE1lc3NhZ2U9XCJoYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyXCJcbiAgICAgIC8+XG4gICAgICA8UmVxdWlyZW1lbnRcbiAgICAgICAgaXNWYWxpZD17aGFzTnVtYmVyfVxuICAgICAgICB2YWxpZE1lc3NhZ2U9XCJoYXMgYXQgbGVhc3QgMSBudW1iZXJcIlxuICAgICAgICBpbnZhbGlkTWVzc2FnZT1cImhhcyBhdCBsZWFzdCAxIG51bWJlclwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRTdHJlbmd0aDtcbiIsIi8qKlxuICogUGhvbmUgZm9ybSB1c2luZyBhIHBob25lIGlucHV0IChzZWUgUGhvbmVJbnB1dC50c3gpIGFuZCBiYXNpYyB2YWxpZGF0aW9uIGZvciB0aGUgZm9ybWF0XG4gKiBJIGRvbid0IHRoaW5rIHRoaXMgaXMgdXNlZCBiZWNhdXNlIG9mIHRoZSB0ZXh0IG1hc2sgaW5wdXQgKHNlZSBNYXNrZWRUZXh0SW5wdXQudHN4KVxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1paywgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuaW1wb3J0IFBob25lSW5wdXQgZnJvbSBcIi4vUGhvbmVJbnB1dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwaG9uZT86IHN0cmluZztcbiAgb25TdWJtaXQ6IChwaG9uZTogc3RyaW5nKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IEVtYWlsRm9ybTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcGhvbmUsIG9uU3VibWl0LCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBwaG9uZSxcbiAgICAgIH19XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgcGhvbmU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgICAgfSl9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlcy5waG9uZSkge1xuICAgICAgICAgIHNldEVycm9yKFwicmVxdWlyZWRcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEVycm9yKFwiXCIpO1xuICAgICAgICBvblN1Ym1pdCh2YWx1ZXMucGhvbmUpLmNhdGNoKChlOiBFcnJvcikgPT4gc2V0RXJyb3IoZS50b1N0cmluZygpKSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtPlxuICAgICAgICA8UGhvbmVJbnB1dCBuYW1lPVwicGhvbmVcIiBsYWJlbD1cIlwiIHBsYWNlaG9sZGVyPXtwaG9uZX0gLz5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxGb3JtO1xuIiwiLyoqXG4gKiBQaG9uZSBpbnB1dCAtIEkgZG9uJ3QgdGhpbmsgdGhpcyBpcyB1c2VkIGJlY2F1c2Ugb2YgdGhlIHRleHQgbWFza1xuICovXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBbeDogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBmb3JtYXRQaG9uZU51bWJlciA9IChwaG9uZTogc3RyaW5nKSA9PlxuICBwaG9uZS5yZXBsYWNlKC9cXEQrL2csIFwiXCIpLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sIFwiKCQxKSAkMi0kM1wiKTtcblxuY29uc3QgUGhvbmVJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbGFiZWwsIG5hbWUsIHR5cGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCBtZXRhXSA9IHVzZUZpZWxkKG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtYi0yXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMSBmb250LWxpZ2h0IHRleHQtc21cIiBodG1sRm9yPXtuYW1lfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpyaW5nLWRhcmtHcmF5IGZvY3VzOmJvcmRlci1kYXJrR3JheSBmb2N1czpyaW5nLTAgYmxvY2sgdy1mdWxsIHBsLTQgc206dGV4dC1zbSBib3JkZXItZGFya0dyYXktMzAwIHJvdW5kZWQtbGdcIlxuICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBpZiAoZm9ybWF0UGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpLmxlbmd0aCA8PSAxNCkge1xuICAgICAgICAgICAgZmllbGQub25DaGFuZ2UobmFtZSkoZm9ybWF0UGhvbmVOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgICB7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC00MDBcIj57bWV0YS5lcnJvcn08L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBob25lSW5wdXQ7XG4iLCIvKipcbiAqIFBhdGllbnQgcmVmZXJyYWwgZnJvbSB0aGUgbGFuZGluZyBwYWdlXG4gKiBJIGRvbid0IHRoaW5rIHRoaXMgaXMgYWN0aXZlbHkgdXNlZCBhbnltb3JlLlxuICovXG5pbXBvcnQgeyBQYXRpZW50UmVmZXJyYWwgfSBmcm9tIFwiQGhlYWx0aGdlbnQvc2VydmVyL3NyYy9saWIvYXBpX3R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgUGhvbmVJbnB1dCBmcm9tIFwiLi9QaG9uZUlucHV0XCI7XG5pbXBvcnQgVGV4dElucHV0IGZyb20gXCIuL1RleHRJbnB1dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvblN1Ym1pdDogKGQ6IFBhdGllbnRSZWZlcnJhbCkgPT4gUHJvbWlzZTx1bmtub3duPjtcbn1cblxuY29uc3QgUmVmZXJyYWxGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgaW5pdGlhbFZhbHVlcz17e1xuICAgICAgICBwYXRpZW50TmFtZTogXCJcIixcbiAgICAgICAgcGF0aWVudEVtYWlsOiBcIlwiLFxuICAgICAgICBwYXRpZW50UGhvbmU6IFwiXCIsXG4gICAgICAgIHByb3ZpZGVyTmFtZTogXCJcIixcbiAgICAgICAgcHJvdmlkZXJFbWFpbDogXCJcIixcbiAgICAgICAgcHJvdmlkZXJQaG9uZTogXCJcIixcbiAgICAgIH19XG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcbiAgICAgICAgcGF0aWVudE5hbWU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgICAgICBwYXRpZW50RW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIHBhdGllbnRQaG9uZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICAgIHByb3ZpZGVyTmFtZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgICB9KX1cbiAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgIG9uU3VibWl0KHZhbHVlcykuY2F0Y2goKGUpID0+IHNldEVycm9yKGUudG9TdHJpbmcoKSkpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8Rm9ybT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+UGF0aWVudCBJbmZvPC9oMj5cbiAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwicGF0aWVudE5hbWVcIiBsYWJlbD1cIk5hbWVcIiAvPlxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJwYXRpZW50RW1haWxcIiBsYWJlbD1cIkVtYWlsXCIgLz5cbiAgICAgICAgPFBob25lSW5wdXQgbmFtZT1cInBhdGllbnRQaG9uZVwiIGxhYmVsPVwiUGhvbmVcIiAvPlxuXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlByb3ZpZGVyIEluZm88L2gyPlxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJwcm92aWRlck5hbWVcIiBsYWJlbD1cIk5hbWVcIiAvPlxuICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJwcm92aWRlckVtYWlsXCIgbGFiZWw9XCJFbWFpbCAob3B0aW9uYWwpXCIgLz5cbiAgICAgICAgPFBob25lSW5wdXQgbmFtZT1cInByb3ZpZGVyUGhvbmVcIiBsYWJlbD1cIlBob25lIChvcHRpb25hbClcIiAvPlxuICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvbi1ibHVlXCI+XG4gICAgICAgICAgU3VibWl0IFJlZmVycmFsXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJyYWxGb3JtO1xuIiwiLyoqXG4gKiBHZW5lcmljIDxzZWxlY3Q+IHRhZyB3aXRoIHNvbWUgbWluaW1hbCBzdHlsaW5nXG4gKi9cbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGhpZGVFcnJvcj86IGJvb2xlYW47XG4gIFt4OiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IFNlbGVjdElucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgbmFtZSxcbiAgaGlkZUVycm9yLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2ZpZWxkLCBtZXRhXSA9IHVzZUZpZWxkKG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGxcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC0xIGZvbnQtbGlnaHQgdGV4dC1zbVwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0IHctZnVsbFwiXG4gICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB2YWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yICYmICFoaWRlRXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC00MDBcIj57bWV0YS5lcnJvcn08L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0O1xuIiwiLyoqXG4gKiBHZW5lcmljIDxpbnB1dD4gd2l0aCBzb21lIHN0eWxpbmcsIHdpdGggdGhlIG9wdGlvbiBvZiB1c2luZyBhXG4gKiA8dGV4dGFyZWE+IHRhZyBpZiB0aGUgaW5wdXQgdGV4dCBpcyBsYXJnZVxuICovXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGhpZGVFcnJvcj86IGJvb2xlYW47XG4gIHRleHRBcmVhPzogYm9vbGVhbjtcbiAgc2hvd0NoZXZyb24/OiBib29sZWFuO1xuICBbeDogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCBUZXh0SW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGxhYmVsLFxuICBuYW1lLFxuICB0eXBlID0gXCJ0ZXh0XCIsXG4gIGhpZGVFcnJvcixcbiAgdGV4dEFyZWEsXG4gIHNob3dDaGV2cm9uLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQobmFtZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1zbVwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPlxuICAgICAge3RleHRBcmVhID8gKFxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KFwidGV4dC1pbnB1dCB3LWZ1bGxcIiwgcHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvY3VzOnJpbmctZGFya0dyYXkgZm9jdXM6Ym9yZGVyLWRhcmtHcmF5IGZvY3VzOnJpbmctMCBibG9jayB3LWZ1bGwgcGwtNCBzbTp0ZXh0LXNtIGJvcmRlci1kYXJrR3JheS0zMDAgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7c2hvd0NoZXZyb24gPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgcHItMyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNOSA1bDcgNy03IDdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciAmJiAhaGlkZUVycm9yID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1yZWQtNDAwIGxlYWRpbmctbm9uZSBtdC0xXCI+XG4gICAgICAgICAge21ldGEuZXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIiwiLyoqXG4gKiBVc2VkIHRvIGVuc3VyZSBhIHBhcnRpY3VsYXIgcGFnZS92aWV3IGlzIG9ubHkgdmlld2VkIGJ5IGF1dGhlbnRpY2F0ZWQgdXNlcnNcbiAqL1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAaGVhbHRoZ2VudC9jb21tb25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb3RlY3RlZFZpZXc6IFJlYWN0LkZDPHt9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBpc0xvYWRpbmcsIGxvZ291dCB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gICAgaWYgKCFpc0xvYWRpbmcgJiYgIWlzQXV0aGVudGljYXRlZCkge1xuICAgICAgbG9nb3V0KCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWQsIGlzTG9hZGluZ10pO1xuXG4gIGlmIChpc0xvYWRpbmcgfHwgIWlzQXV0aGVudGljYXRlZCkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3RlY3RlZFZpZXc7XG4iLCIvKipcbiAqIFJlYWN0IGhvb2sgdXNlZCB0byBkZXRlY3QgYSBrZXkgcHJlc3NcbiAqL1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IHVzZUtleVByZXNzID0gKHRhcmdldEtleTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtrZXlQcmVzc2VkLCBzZXRLZXlQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcih7IGtleSB9OiB7IGtleTogc3RyaW5nIH0pIHtcbiAgICBpZiAoa2V5ID09PSB0YXJnZXRLZXkpIHtcbiAgICAgIHNldEtleVByZXNzZWQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBIYW5kbGVyID0gKHsga2V5IH06IHsga2V5OiBzdHJpbmcgfSkgPT4ge1xuICAgIGlmIChrZXkgPT09IHRhcmdldEtleSkge1xuICAgICAgc2V0S2V5UHJlc3NlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBrZXlQcmVzc2VkO1xufTtcbiIsIi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFByb3RvdHlwZSBvZiB1c2luZyB0aGUgQ2hyb21lIGJyb3dzZXIgc3BlZWNoIHJlY29nbml0aW9uIEFQSS5cbiAqIFdlIGhhZCB0aGlzIGFzIGEgZmVhdHVyZSBpbiB0aGUgRU1SIGJyaWVmbHkgYnV0IGl0IHdhcyBub3RcbiAqIHBvbGlzaGVkIGVub3VnaCBmb3IgcHJvZHVjdGlvbiB1c2UuIFVzZWZ1bCBhcyBhIHJlZmVyZW5jZVxuICogaWYgdGhpcyBpcyBldmVyIGltcGxlbWVudGVkIHByb3Blcmx5LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIGNvbnRpbnVvdXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgdXNlU3BlZWNoUmVjb2duaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcbiAgY29uc3QgW2ludGVyaW0sIHNldEludGVyaW1dID0gdXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xuICBjb25zdCBbcmVjb2duaXRpb24sIHNldFJlY29nbml0aW9uXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZWMgPSBuZXcgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgcmVjLmNvbnRpbnVvdXMgPSB0cnVlO1xuICAgIHJlYy5pbnRlcmltUmVzdWx0cyA9IHRydWU7XG4gICAgcmVjLm9ucmVzdWx0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBjb25zdCBwcm9jZXNzaW5nOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gZXZlbnQucmVzdWx0SW5kZXg7IGkgPCBldmVudC5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChldmVudC5yZXN1bHRzW2ldLmlzRmluYWwpIHtcbiAgICAgICAgICBjdXJyZW50LnB1c2goZXZlbnQucmVzdWx0c1tpXVswXS50cmFuc2NyaXB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzaW5nLnB1c2goZXZlbnQucmVzdWx0c1tpXVswXS50cmFuc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UmVzdWx0cygocHJldlJlc3VsdHMpID0+IFsuLi5wcmV2UmVzdWx0cywgLi4uY3VycmVudF0pO1xuICAgICAgc2V0SW50ZXJpbShwcm9jZXNzaW5nKTtcbiAgICB9O1xuICAgIHNldFJlY29nbml0aW9uKHJlYyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdGFydFJlY29nbml0aW9uID1cbiAgICByZWNvZ25pdGlvbiAhPT0gdW5kZWZpbmVkID8gKCkgPT4gcmVjb2duaXRpb24uc3RhcnQoKSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgc3RvcFJlY29nbml0aW9uID1cbiAgICByZWNvZ25pdGlvbiAhPT0gdW5kZWZpbmVkID8gKCkgPT4gcmVjb2duaXRpb24uc3RvcCgpIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiB7IHJlc3VsdHMsIGludGVyaW0sIHN0YXJ0UmVjb2duaXRpb24sIHN0b3BSZWNvZ25pdGlvbiB9O1xufTtcbiIsIi8qKlxuICogRXhwb3J0cyBhbGwgY29tbW9uIGNvbXBvbmVudHMvaG9va3NcbiAqL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkZHJlc3NGb3JtIH0gZnJvbSBcIi4vZm9ybXMvQWRkcmVzc0Zvcm1cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW1lcmdlbmN5Q29udGFjdEZvcm0gfSBmcm9tIFwiLi9mb3Jtcy9FbWVyZ2VuY3lDb250YWN0Rm9ybVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlVXBsb2FkIH0gZnJvbSBcIi4vZm9ybXMvRmlsZVVwbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaG9uZUlucHV0IH0gZnJvbSBcIi4vZm9ybXMvUGhvbmVJbnB1dFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0SW5wdXQgfSBmcm9tIFwiLi9mb3Jtcy9UZXh0SW5wdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkVGV4dElucHV0IH0gZnJvbSBcIi4vZm9ybXMvTWFza2VkVGV4dElucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVtYWlsRm9ybSB9IGZyb20gXCIuL2Zvcm1zL0VtYWlsRm9ybVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaG9uZUZvcm0gfSBmcm9tIFwiLi9mb3Jtcy9QaG9uZUZvcm1cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFzc3dvcmRSZXNldEZvcm0gfSBmcm9tIFwiLi9mb3Jtcy9QYXNzd29yZFJlc2V0Rm9ybVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGFuZ2VQYXNzd29yZEZvcm0gfSBmcm9tIFwiLi9mb3Jtcy9DaGFuZ2VQYXNzd29yZEZvcm1cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVmZXJyYWxGb3JtIH0gZnJvbSBcIi4vZm9ybXMvUmVmZXJyYWxGb3JtXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhc3N3b3JkU3RyZW5ndGggfSBmcm9tIFwiLi9mb3Jtcy9QYXNzd29yZFN0cmVuZ3RoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5ld1RocmVhZEZvcm0gfSBmcm9tIFwiLi9mb3Jtcy9OZXdUaHJlYWRGb3JtXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4dGVybmFsUHJvdmlkZXJGb3JtIH0gZnJvbSBcIi4vZm9ybXMvRXh0ZXJuYWxQcm92aWRlckZvcm1cIjtcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aCB9IGZyb20gXCIuL2NvbnRleHQvYXV0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm90ZWN0ZWRWaWV3IH0gZnJvbSBcIi4vaG9jL1Byb3RlY3RlZFZpZXdcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGF0V2luZG93IH0gZnJvbSBcIi4vbWVzc2FnaW5nL0NoYXRXaW5kb3dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGhyZWFkTGlzdCB9IGZyb20gXCIuL21lc3NhZ2luZy9UaHJlYWRMaXN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdpbmcvTWVzc2FnZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZXNzYWdlVGhyZWFkIH0gZnJvbSBcIi4vbWVzc2FnaW5nL01lc3NhZ2VUaHJlYWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZmlsZVBpY3R1cmUgfSBmcm9tIFwiLi9tZXNzYWdpbmcvUHJvZmlsZVBpY3R1cmVcIjtcblxuZXhwb3J0IHsgdXNlS2V5UHJlc3MgfSBmcm9tIFwiLi9ob29rcy9rZXlcIjtcbmV4cG9ydCB7IHVzZVNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSBcIi4vaG9va3Mvc3BlZWNoX3JlY29nbml0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG4iLCIvKipcbiAqIFVzZWQgdG8gZGlzcGxheSBhbiBlbnRpcmUgY2hhdCB3aW5kb3csIHdoaWNoIGluY2x1ZGVzXG4gKiB0aGUgbWVzc2FnZSB0aHJlYWQsIHRoZSB0ZXh0IGVudHJ5IGJveCwgc2VuZCBidXR0b24sIGFuZCBjb250ZXh0XG4gKiBzdWNoIGFzIHRoZSBuYW1lIG9mIHRoZSB0aHJlYWQuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaHJlYWQgfSBmcm9tIFwiQGhlYWx0aGdlbnQvc2VydmVyL3NyYy9saWIvYXBpX3R5cGVzXCI7XG4vLyBpbXBvcnQgQ2hldnJvblJpZ2h0IGZyb20gXCIuLi8uLi8uLi9mcm9udGVuZC9jb21wb25lbnRzL3N2Zy9DaGV2cm9uUmlnaHRcIjtcbmltcG9ydCBNZXNzYWdlVGhyZWFkIGZyb20gXCIuL01lc3NhZ2VUaHJlYWRcIjtcbmltcG9ydCB7IHVzZUtleVByZXNzIH0gZnJvbSBcIi4uL2hvb2tzL2tleVwiO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhyZWFkOiBUaHJlYWQ7XG4gIHNlbmRNZXNzYWdlOiAoY29udGVudDogc3RyaW5nKSA9PiBhbnk7XG4gIG9uQmFjaz86ICgpID0+IGFueTtcbn1cblxuY29uc3QgQ2hhdFdpbmRvdzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGhyZWFkLCBzZW5kTWVzc2FnZSwgb25CYWNrIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRNZXNzYWdlLCBzZXRDdXJyZW50TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbmRpbmcsIHNldFNlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBlbnRlclByZXNzZWQgPSB1c2VLZXlQcmVzcyhcIkVudGVyXCIpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Q3VycmVudE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbXNnID0gY3VycmVudE1lc3NhZ2UudHJpbSgpO1xuICAgIGlmIChzZW5kaW5nIHx8ICFtc2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0U2VuZGluZyh0cnVlKTtcbiAgICBzZW5kTWVzc2FnZShtc2cpXG4gICAgICAudGhlbigoKSA9PiBzZXRDdXJyZW50TWVzc2FnZShcIlwiKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldFNlbmRpbmcoZmFsc2UpKTtcbiAgfTtcblxuICBpZiAoZW50ZXJQcmVzc2VkKSB7XG4gICAgYWRkTWVzc2FnZSgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJwLTQgcGItMiBmbGV4LWNvbFwiXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiODB2aFwiLCBtYXhIZWlnaHQ6IFwiNTAwcHhcIiB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWItMiBweS0yXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25CYWNrfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgZD1cIk0xNSAxOWwtNy03IDctN1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnt0aHJlYWQuc3ViamVjdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG92ZXJmbG93LWF1dG8gaC05NiBmbGV4IGZsZXgtY29sLXJldmVyc2VcIj5cbiAgICAgICAge3RocmVhZCA/IDxNZXNzYWdlVGhyZWFkIHRocmVhZD17dGhyZWFkfSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIGJvdHRvbS0wXCI+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTEwIG91dGxpbmUtbm9uZSBmbGV4LWdyb3cgbS0yIHB5LTIgcHgtNCBtci0xIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMjAwIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UuLi5cIlxuICAgICAgICAgIHZhbHVlPXtjdXJyZW50TWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0yIHRleHQtYmx1ZS00MDAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgb25DbGljaz17YWRkTWVzc2FnZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkPVwiTTkgNWw3IDctNyA3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0V2luZG93O1xuIiwiLyoqXG4gKiBTaW5nbGUgY2hhdCBidWJibGUgaW4gYSBtZXNzYWdlIHRocmVhZFxuICovXG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiQGhlYWx0aGdlbnQvc2VydmVyL3NyYy9saWIvYXBpX3R5cGVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG59XG5cbmNvbnN0IE1lc3NhZ2VDb21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xuICBjb25zdCB7IGNvbnRlbnQsIHNlbmRlciB9ID0gbWVzc2FnZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJmbGV4IG14LTJcIiwgeyBcImZsZXgtcm93LXJldmVyc2VcIjogIW1lc3NhZ2UuaW5ib3VuZCB9KX0+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIG14LTJcIj57cHJvZmlsZVBpY3R1cmV9PC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+e3NlbmRlci5kaXNwbGF5TmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0IG1heC13LXNtIGlubGluZS1ibG9jayBiZy1ncmF5LTMwMCB3LW1pbiBzbTp3LWF1dG8gcC0yIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb21wb25lbnQ7XG4iLCIvKipcbiAqIFNob3dzIGEgbWVzc2FnZSB0aHJlYWQgYXMgYSBsaXN0IG9mIG1lc3NhZ2VzIGluIGNocm9ub2xvZ2ljYWwgb3JkZXJcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhyZWFkIH0gZnJvbSBcIkBoZWFsdGhnZW50L3NlcnZlci9zcmMvbGliL2FwaV90eXBlc1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuaW1wb3J0IFByb2ZpbGVQaWN0dXJlIGZyb20gXCIuL1Byb2ZpbGVQaWN0dXJlXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRocmVhZDogVGhyZWFkO1xufVxuXG5jb25zdCBNZXNzYWdlVGhyZWFkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0aHJlYWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGhyZWFkLm1lc3NhZ2VzXG4gICAgICAgID8uc29ydCgoYSwgYikgPT4gYi50aW1lc3RhbXAgLSBhLnRpbWVzdGFtcClcbiAgICAgICAgLm1hcCgobSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8TWVzc2FnZSBrZXk9e20uaWR9IG1lc3NhZ2U9e219IC8+O1xuICAgICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VUaHJlYWQ7XG4iLCIvKipcbiAqIFVzZWQgdG8gZGlzcGxheSBhIHJvdW5kZWQgcHJvZmlsZSBwaWN0dXJlIGZvciBhIHVzZXIgKHBhdGllbnQvcHJvdmlkZXIvc3VwcG9ydCB0ZWFtKVxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVybD86IHN0cmluZztcbiAgaW5pdGlhbHM6IHN0cmluZztcbn1cblxuY29uc3QgUHJvZmlsZVBpY3R1cmU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHVybCwgaW5pdGlhbHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyXCI+XG4gICAgICAgIHt1cmwgPyAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICBhbHQ9XCIuLi5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQtZnVsbCB3LTEyIGgtMTIgYWxpZ24tbWlkZGxlIGJvcmRlci1ub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQtZnVsbCB3LTEyIGgtMTIgYWxpZ24tbWlkZGxlIGJvcmRlci1ub25lIGJnLWJsdWUtNDAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgIHtpbml0aWFsc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGljdHVyZTtcbiIsIi8qKlxuICogU2hvd3MgYSBsaXN0IG9mIG1lc3NhZ2UgdGhyZWFkcyBmb3IgYSB1c2VyLCBvcmRlcmVkIGNocm9ub2xvZ2ljYWxseVxuICovXG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5ib3gsIFRocmVhZCB9IGZyb20gXCJAaGVhbHRoZ2VudC9zZXJ2ZXIvc3JjL2xpYi9hcGlfdHlwZXNcIjtcblxuY29uc3QgUHJldmlldzogUmVhY3QuRkM8e1xuICB0aHJlYWQ6IFRocmVhZDtcbiAgdXJsOiBzdHJpbmc7XG59PiA9ICh7IHRocmVhZCwgdXJsIH0pID0+IHtcbiAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjeChcbiAgICBcImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtMTYgYm9yZGVyLWIgcC0yIGhvdmVyOmJnLWJsdWVHcmF5LTUwXCJcbiAgKTtcbiAgY29uc3QgbGFzdE1lc3NhZ2VUaW1lID0gbmV3IERhdGUodGhyZWFkLmxhc3RNZXNzYWdlVGltZSk7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17dXJsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAge3RocmVhZC51bnJlYWRNZXNzYWdlcyA+IDAgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWJsdWUtNTAwIHctMiBoLTIgLW1sLTQgbXItMlwiPjwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7dGhyZWFkLnRpdGxlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWVuZCB0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHtsYXN0TWVzc2FnZVRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBvdmVyZmxvdy1oaWRkZW4gbXItMiBtZDptci04XCI+XG4gICAgICAgICAge3RocmVhZC5tZXNzYWdlUHJldmlld31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhyZWFkczogQXJyYXk8VGhyZWFkPjtcbiAgdGhyZWFkVG9Vcmw6ICh0OiBzdHJpbmcpID0+IHN0cmluZztcbn1cblxuY29uc3QgVGhyZWFkTGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGhyZWFkcywgdGhyZWFkVG9VcmwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIHt0aHJlYWRzXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxhc3RNZXNzYWdlVGltZSAtIGEubGFzdE1lc3NhZ2VUaW1lKVxuICAgICAgICAubWFwKCh0KSA9PiAoXG4gICAgICAgICAgPFByZXZpZXcgdGhyZWFkPXt0fSBrZXk9e3QuaWR9IHVybD17dGhyZWFkVG9VcmwodC5pZCl9IC8+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhyZWFkTGlzdDtcbiIsIi8qKlxuICogTGlzdCBvZiBVUyBzdGF0ZXMgKyBhYmJyZXZpYXRpb25zXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBVU1N0YXRlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhYmJyZXZpYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHN0YXRlczogQXJyYXk8VVNTdGF0ZT4gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkFsYWJhbWFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiQUxcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWxhc2thXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIkFLXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFyaXpvbmFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiQVpcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXJrYW5zYXNcIixcbiAgICBhYmJyZXZpYXRpb246IFwiQVJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2FsaWZvcm5pYVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJDQVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb2xvcmFkb1wiLFxuICAgIGFiYnJldmlhdGlvbjogXCJDT1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb25uZWN0aWN1dFwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJDVFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZWxhd2FyZVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJERVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaXN0cmljdCBPZiBDb2x1bWJpYVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJEQ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGbG9yaWRhXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIkZMXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdlb3JnaWFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiR0FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSGF3YWlpXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIkhJXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIklkYWhvXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIklEXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIklsbGlub2lzXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIklMXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkluZGlhbmFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiSU5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW93YVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJJQVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYW5zYXNcIixcbiAgICBhYmJyZXZpYXRpb246IFwiS1NcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2VudHVja3lcIixcbiAgICBhYmJyZXZpYXRpb246IFwiS1lcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG91aXNpYW5hXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIkxBXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1haW5lXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk1FXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcnlsYW5kXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk1EXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hc3NhY2h1c2V0dHNcIixcbiAgICBhYmJyZXZpYXRpb246IFwiTUFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWljaGlnYW5cIixcbiAgICBhYmJyZXZpYXRpb246IFwiTUlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWlubmVzb3RhXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk1OXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1pc3Npc3NpcHBpXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk1TXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1pc3NvdXJpXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk1PXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1vbnRhbmFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiTVRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmVicmFza2FcIixcbiAgICBhYmJyZXZpYXRpb246IFwiTkVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmV2YWRhXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk5WXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5ldyBIYW1wc2hpcmVcIixcbiAgICBhYmJyZXZpYXRpb246IFwiTkhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmV3IEplcnNleVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJOSlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZXcgTWV4aWNvXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk5NXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5ldyBZb3JrXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk5ZXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5vcnRoIENhcm9saW5hXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk5DXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5vcnRoIERha290YVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJORFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPaGlvXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk9IXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk9rbGFob21hXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIk9LXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk9yZWdvblwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJPUlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZW5uc3lsdmFuaWFcIixcbiAgICBhYmJyZXZpYXRpb246IFwiUEFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHVlcnRvIFJpY29cIixcbiAgICBhYmJyZXZpYXRpb246IFwiUFJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmhvZGUgSXNsYW5kXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIlJJXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNvdXRoIENhcm9saW5hXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIlNDXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNvdXRoIERha290YVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJTRFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUZW5uZXNzZWVcIixcbiAgICBhYmJyZXZpYXRpb246IFwiVE5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGV4YXNcIixcbiAgICBhYmJyZXZpYXRpb246IFwiVFhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVXRhaFwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJVVFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWZXJtb250XCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIlZUXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZpcmdpbmlhXCIsXG4gICAgYWJicmV2aWF0aW9uOiBcIlZBXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldhc2hpbmd0b25cIixcbiAgICBhYmJyZXZpYXRpb246IFwiV0FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VzdCBWaXJnaW5pYVwiLFxuICAgIGFiYnJldmlhdGlvbjogXCJXVlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXaXNjb25zaW5cIixcbiAgICBhYmJyZXZpYXRpb246IFwiV0lcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV3lvbWluZ1wiLFxuICAgIGFiYnJldmlhdGlvbjogXCJXWVwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGVsaWdpYmxlU3RhdGVzID0gc3RhdGVzLmZpbHRlcigocykgPT5cbiAgW1wiRkxcIiwgXCJOVlwiLCBcIk9IXCIsIFwiTkNcIiwgXCJDQVwiXS5pbmNsdWRlcyhzLmFiYnJldmlhdGlvbilcbik7XG5cbmV4cG9ydCBjb25zdCBpc0VsaWdpYmxlU3RhdGUgPSAoc3RhdGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gZWxpZ2libGVTdGF0ZXMubWFwKChzKSA9PiBzLmFiYnJldmlhdGlvbikuaW5jbHVkZXMoc3RhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0YXRlTmFtZVRvQWJicmV2aWF0aW9uID0gKG5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHN0YXRlID0gc3RhdGVzLmZpbmQoKHMpID0+IHMubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiBzdGF0ZT8uYWJicmV2aWF0aW9uIHx8IFwiXCI7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVBYmJyZXZpYXRpb25Ub05hbWUgPSAoYWJicmV2aWF0aW9uOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5maW5kKChzKSA9PiBzLmFiYnJldmlhdGlvbiA9PT0gYWJicmV2aWF0aW9uKTtcbiAgcmV0dXJuIHN0YXRlPy5uYW1lIHx8IFwiXCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNlZ21lbnQvc25pcHBldFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10ZXh0LW1hc2tcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=