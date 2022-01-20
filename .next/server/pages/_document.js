(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

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

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "../node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_event_logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/event_logging */ "./lib/event_logging/index.ts");

var _jsxFileName = "F:\\Nextjs-Projects\\healthgent\\frontend\\pages\\_document.js";

/**
 * Loads tracking pixels
 * See next.js documentation:
 * https://nextjs.org/docs/advanced-features/custom-document
 */



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.FB_PIXEL_ID});
              `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("noscript", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: "1",
            width: "1",
            style: {
              display: "none"
            },
            src: `https://www.facebook.com/tr?id=${_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.FB_PIXEL_ID}&ev=PageView&noscript=1`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: (0,_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.renderSegmentSnippet)()
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
                    !function (w, d, t) {
                    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

                    ttq.load('${_lib_event_logging__WEBPACK_IMPORTED_MODULE_3__.TIKTOK_ID}');
                    ttq.page();
                    }(window, document, 'ttq');
                    `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "google-site-verification",
          content: "nuoTmtJgEH5HVnLkZX_wsIJ7KAG1he2KFA7k6sgiCkM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "google-signin-client_id",
          content: "743742727469-ioqhndhvso01ccte7943fouv3t6a33i3.apps.googleusercontent.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "keywords",
          content: "hellolina, lina, add treatment los angeles, add treatment san francisco, add treatment san diego, adhd treatment, dextroamphetamine, add assessment, vyvance effect, adult add diagnosis, adhd treatment los angeles, adhd treatment san francisco, adhd treatment san diego, psychiatrist san diego, psychiatrist san francisco, psychiatrist los angeles, mental health help online, online adhd help, adult attention deficit, online psychiatrist, vyvanse price, adderall price, adderall XR side effect, adderall XR price, miami adhd treatment"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "description",
          content: "Lina offers online treatment for anxiety, depression, insomnia and ADHD. Includes psychiatrist visits and medication delivery."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "og:description",
          content: "Lina offers online treatment for anxiety, depression, insomnia and ADHD. Includes psychiatrists visits and medication delivery."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "og:title",
          content: "Lina | Online depression, anxiety, insomnia treatment and medication delivered to you"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "og:image",
          content: "https://hellolina.com/images/share.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "og:type",
          content: "website"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "twitter:card",
          content: "summary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "twitter:creator",
          content: "Lina"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "twitter:title",
          content: "Lina | Online depression, anxiety, insomnia treatment and medication delivered to you"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "twitter:description",
          content: "Lina | Online depression, anxiety, insomnia treatment and medication delivered to you"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "../node_modules/next/dist/client/head-manager.js":
/*!********************************************************!*\
  !*** ../node_modules/next/dist/client/head-manager.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

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

/***/ "../node_modules/next/dist/client/script.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/script.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "../node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/pages/_document.js":
/*!****************************************************!*\
  !*** ../node_modules/next/dist/pages/_document.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "../node_modules/next/dist/client/script.js"));

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
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "../node_modules/next/dist/server/htmlescape.js":
/*!******************************************************!*\
  !*** ../node_modules/next/dist/server/htmlescape.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "../node_modules/next/document.js":
/*!****************************************!*\
  !*** ../node_modules/next/document.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "../node_modules/next/dist/pages/_document.js")


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

/***/ "@segment/snippet":
/*!***********************************!*\
  !*** external "@segment/snippet" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@segment/snippet");;

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL2xpYi9ldmVudF9sb2dnaW5nL2luZGV4LnRzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4vbGliL2V2ZW50X2xvZ2dpbmcvc2VnbWVudC50cyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9AaGVhbHRoZ2VudC9mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2VnbWVudC9zbmlwcGV0XCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0BoZWFsdGhnZW50L2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vQGhlYWx0aGdlbnQvZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwiQURXT1JEU19JRCIsIkZCX1BJWEVMX0lEIiwiU05BUF9JRCIsIlRJS1RPS19JRCIsImxvZ0dvb2dsZVBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImFyZ3MiLCJkYXRhTGF5ZXIiLCJwdXNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJsb2dHb29nbGVDb252ZXJzaW9uIiwiZXZlbnQiLCJzZW5kX3RvIiwidHJhbnNhY3Rpb25faWQiLCJsb2dGYWNlYm9va0V2ZW50Iiwib3B0aW9ucyIsInRyYWNrIiwiZmJxIiwidHJhY2tDdXN0b20iLCJmYkV2ZW50IiwibG9nVGlrVG9rRXZlbnQiLCJ0dEV2ZW50IiwidHRxIiwiZXJyb3IiLCJsb2dTbmFwRXZlbnQiLCJzbmFwRXZlbnQiLCJsb2dQYWdlVmlldyIsImxvZ1NlZ21lbnRFdmVudCIsImxvZ0V2ZW50IiwiaWRlbnRpZnlVc2VyIiwiaWRlbnRpZmllcnMiLCJpZGVudGlmeVNlZ21lbnQiLCJyZW5kZXJTZWdtZW50U25pcHBldCIsIm5vZGVFbnYiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQU5BTFlUSUNTX1dSSVRFX0tFWSIsIm9wdHMiLCJwYWdlIiwic25pcHBldCIsInByb3BlcnRpZXMiLCJhbmFseXRpY3MiLCJsb2dTZWdtZW50UGFnZVZpZXciLCJpZGVuaWZpZXJzIiwiaWRlbnRpZnkiLCJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJyZW5kZXIiLCJfX2h0bWwiLCJkaXNwbGF5IiwiZXhwb3J0cyIsImluaXRIZWFkTWFuYWdlciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiYWNjZXB0Q2hhcnNldCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJub01vZHVsZSIsInJlYWN0RWxlbWVudFRvRE9NIiwidHlwZSIsInByb3BzIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwidXBkYXRlRWxlbWVudHMiLCJjb21wb25lbnRzIiwiaGVhZEVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWFkQ291bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJjb250ZW50Iiwib2xkVGFncyIsImkiLCJqIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImluaXRTY3JpcHRMb2FkZXIiLCJfZXh0ZW5kczIiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfcmVhY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJTY3JpcHRDYWNoZSIsIk1hcCIsIkxvYWRDYWNoZSIsImlnbm9yZVByb3BzIiwibG9hZFNjcmlwdCIsInNyYyIsIm9uTG9hZCIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGwiLCJzZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwiZGVmYXVsdCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJIdG1sIiwiTWFpbiIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwib2JqIiwiX19lc01vZHVsZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwiX2J1aWxkTWFuaWZlc3QkbG93UHJpIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlQXBwIiwiQXBwIiwiaHRtbCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIkRvY3VtZW50Q29tcG9uZW50IiwiUHJvdmlkZXIiLCJIZWFkIiwiTmV4dFNjcmlwdCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImxvY2FsZSIsImxhbmciLCJhbXAiLCJjb25zdHJ1Y3RvciIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImZyb20iLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImlzU2hhcmVkRmlsZSIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJtYWtlU3R5bGVzaGVldEluZXJ0Iiwibm9kZSIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwiY2xvbmVFbGVtZW50IiwiX3RoaXMkcHJvcHMkbm9uY2UiLCJfdGhpcyRwcm9wcyRub25jZTIiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJfY2hpbGQkcHJvcHMyIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsImN1clN0eWxlcyIsImhhc1N0eWxlcyIsIl9lbCRwcm9wcyIsIl9lbCRwcm9wcyRkYW5nZXJvdXNseSIsIkZyYWdtZW50IiwiY291bnQiLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsInJlcGxhY2UiLCJnZXRBbXBQYXRoIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJBTVBfUkVOREVSX1RBUkdFVCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLGNBQWMsR0FBRyxjQUF2QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxjQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxlQUFwQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxzQ0FBaEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsc0JBQWxCLEMsQ0FFUDs7QUFDTyxNQUFNQyxpQkFBaUIsR0FBSUMsR0FBRCxJQUFpQjtBQUNoRDtBQUNBQyxRQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCUixjQUF0QixFQUFzQztBQUNwQ1MsYUFBUyxFQUFFSDtBQUR5QixHQUF0QztBQUdELENBTE07O0FBT1AsTUFBTUUsSUFBSSxHQUFHLENBQUMsR0FBR0UsSUFBSixLQUFvQjtBQUMvQixNQUFJO0FBQ0Y7QUFDQUgsVUFBTSxDQUFDSSxTQUFQLENBQWlCQyxJQUFqQixDQUFzQixHQUFHRixJQUF6QjtBQUNELEdBSEQsQ0FHRSxPQUFPRyxDQUFQLEVBQVU7QUFDVkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUNGLENBUEQsQyxDQVNBO0FBQ0E7OztBQUNPLE1BQU1HLG1CQUFtQixHQUFJQyxLQUFELElBQXNCO0FBQ3ZELE1BQUlBLEtBQUssS0FBSyxVQUFkLEVBQTBCO0FBQ3hCVCxRQUFJLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0I7QUFDMUJVLGFBQU8sRUFBRSxtQ0FEaUI7QUFFMUJDLG9CQUFjLEVBQUU7QUFGVSxLQUF4QixDQUFKO0FBSUQsR0FMRCxNQUtPLElBQUlGLEtBQUssS0FBSyxnQkFBZCxFQUFnQztBQUNyQ1QsUUFBSSxDQUFDLE9BQUQsRUFBVSxZQUFWLEVBQXdCO0FBQzFCVSxhQUFPLEVBQUU7QUFEaUIsS0FBeEIsQ0FB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Q0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7O0FDZkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgcGl4ZWwgdHJhY2tpbmdcbiAqL1xuZXhwb3J0IHsgcmVuZGVyU2VnbWVudFNuaXBwZXQgfSBmcm9tIFwiLi9zZWdtZW50XCI7XG5pbXBvcnQgeyBpZGVudGlmeVNlZ21lbnQsIGxvZ1NlZ21lbnRFdmVudCB9IGZyb20gXCIuL3NlZ21lbnRcIjtcbmltcG9ydCB7IEV2ZW50VHlwZSwgRXZlbnRPcHRpb25zLCBVc2VySWRlbnRpZmllcnMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBcIkctUFA3RkJNUkNXMlwiO1xuZXhwb3J0IGNvbnN0IEFEV09SRFNfSUQgPSBcIkFXLTQ2ODQwOTM0N1wiO1xuZXhwb3J0IGNvbnN0IEZCX1BJWEVMX0lEID0gNzMyMDI4NzAxMDQ2OTY2O1xuZXhwb3J0IGNvbnN0IFNOQVBfSUQgPSBcIjRlYWRlMDIwLWQ5ZjktNDg5MS1hMmU4LWU4OTZiZTMxNmJkNVwiO1xuZXhwb3J0IGNvbnN0IFRJS1RPS19JRCA9IFwiQzBSQTdSSFVSTUg5NTlTQlFRTTBcIjtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IGxvZ0dvb2dsZVBhZ2V2aWV3ID0gKHVybDogc3RyaW5nKSA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSk7XG59O1xuXG5jb25zdCBndGFnID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCguLi5hcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59O1xuXG4vLyBPbmx5IGxvZ3MgYW4gZXZlbnQgaWYgaXQncyBhbiBhZHMgY29udmVyc2lvbiwgbm9ybWFsIGV2ZW50c1xuLy8gZ28gdG8gYW5hbHl0aWNzIHRocm91Z2ggR1RNXG5leHBvcnQgY29uc3QgbG9nR29vZ2xlQ29udmVyc2lvbiA9IChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gIGlmIChldmVudCA9PT0gXCJwdXJjaGFzZVwiKSB7XG4gICAgZ3RhZyhcImV2ZW50XCIsIFwiY29udmVyc2lvblwiLCB7XG4gICAgICBzZW5kX3RvOiBcIkFXLTM0NzQ4NzQ5OC9UYi01Q0lHaTVkZ0NFSXI2MktVQlwiLFxuICAgICAgdHJhbnNhY3Rpb25faWQ6IFwiXCIsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZXZlbnQgPT09IFwiY3JlYXRlLWFjY291bnRcIikge1xuICAgIGd0YWcoXCJldmVudFwiLCBcImNvbnZlcnNpb25cIiwge1xuICAgICAgc2VuZF90bzogXCJBVy0zNDc0ODc0OTgvN0d2MUNNdnZ1dGdDRUlyNjJLVUJcIixcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLXBpeGVsL2FkdmFuY2VkL1xuZXhwb3J0IGNvbnN0IGxvZ0ZhY2Vib29rRXZlbnQgPSAoXG4gIGV2ZW50OiBFdmVudFR5cGUsXG4gIG9wdGlvbnMgPSB7fSBhcyBFdmVudE9wdGlvbnNcbikgPT4ge1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHRyYWNrID0gKGU6IHN0cmluZykgPT4gd2luZG93LmZicShcInRyYWNrXCIsIGUsIG9wdGlvbnMpO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHRyYWNrQ3VzdG9tID0gKGU6IHN0cmluZykgPT4gd2luZG93LmZicShcInRyYWNrQ3VzdG9tXCIsIGUsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZiRXZlbnQgPSBudWxsO1xuICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgY2FzZSBcInBhZ2Utdmlld1wiOlxuICAgICAgdHJhY2soXCJQYWdlVmlld1wiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdGFydC1jaGVja291dFwiOlxuICAgICAgdHJhY2soXCJJbml0aWF0ZUNoZWNrb3V0XCIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInB1cmNoYXNlXCI6XG4gICAgICAvLyBUT0RPKHNiYik6IGFkZCBwcmVkaWN0ZWQgTFRWP1xuICAgICAgdHJhY2soXCJTdWJzY3JpYmVcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiY3JlYXRlLWFjY291bnRcIjpcbiAgICAgIHRyYWNrKFwiQ29tcGxldGVSZWdpc3RyYXRpb25cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiam9pbi13YWl0bGlzdFwiOlxuICAgIGNhc2UgXCJzdGFydC1hc3Nlc3NtZW50XCI6XG4gICAgY2FzZSBcImNvbXBsZXRlLWFzc2Vzc21lbnRcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgdHJhY2tDdXN0b20oZXZlbnQpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dUaWtUb2tFdmVudCA9IChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gIGxldCB0dEV2ZW50ID0gbnVsbDtcbiAgc3dpdGNoIChldmVudCkge1xuICAgIGNhc2UgXCJwYWdlLXZpZXdcIjpcbiAgICAgIHR0RXZlbnQgPSBcIkJyb3dzZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0YXJ0LWNoZWNrb3V0XCI6XG4gICAgICB0dEV2ZW50ID0gXCJTdGFydC1DaGVja291dFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInB1cmNoYXNlXCI6XG4gICAgICB0dEV2ZW50ID0gXCJQdXJjaGFzZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNyZWF0ZS1hY2NvdW50XCI6XG4gICAgICB0dEV2ZW50ID0gXCJSZWdpc3RyYXRpb25cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJqb2luLXdhaXRsaXN0XCI6XG4gICAgY2FzZSBcInN0YXJ0LWFzc2Vzc21lbnRcIjpcbiAgICBjYXNlIFwiY29tcGxldGUtYXNzZXNzbWVudFwiOlxuICAgICAgdHRFdmVudCA9IGV2ZW50O1xuICB9XG4gIHRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdpbmRvdy50dHEudHJhY2sodHRFdmVudCk7XG4gIH0gY2F0Y2gge1xuICAgIGNvbnNvbGUuZXJyb3IoYGZhaWxlZCB0byBsb2cgdGlrdG9rIGV2ZW50OiAke2V2ZW50fWApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9nU25hcEV2ZW50ID0gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgbGV0IHNuYXBFdmVudCA9IG51bGw7XG4gIHN3aXRjaCAoZXZlbnQpIHtcbiAgICBjYXNlIFwicGFnZS12aWV3XCI6XG4gICAgICBzbmFwRXZlbnQgPSBcIlBBR0VfVklFV1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0YXJ0LWNoZWNrb3V0XCI6XG4gICAgICBzbmFwRXZlbnQgPSBcIlNUQVJUX0NIRUNLT1VUXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicHVyY2hhc2VcIjpcbiAgICAgIHNuYXBFdmVudCA9IFwiUFVSQ0hBU0VcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjcmVhdGUtYWNjb3VudFwiOlxuICAgICAgc25hcEV2ZW50ID0gXCJTSUdOX1VQXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiam9pbi13YWl0bGlzdFwiOlxuICAgIGNhc2UgXCJzdGFydC1hc3Nlc3NtZW50XCI6XG4gICAgY2FzZSBcImNvbXBsZXRlLWFzc2Vzc21lbnRcIjpcbiAgICAgIHNuYXBFdmVudCA9IGV2ZW50O1xuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgLy8gd2luZG93LnNuYXB0cihcInRyYWNrXCIsIHNuYXBFdmVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nUGFnZVZpZXcgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBHb29nbGUgcmVxdWlyZXMgYSB1cmxcbiAgLy8gbG9nR29vZ2xlUGFnZXZpZXcodXJsKTtcblxuICBsb2dTZWdtZW50RXZlbnQoXCJwYWdlLXZpZXdcIik7XG4gIGxvZ0ZhY2Vib29rRXZlbnQoXCJwYWdlLXZpZXdcIik7XG4gIC8vIGxvZ1NuYXBFdmVudChcInBhZ2Utdmlld1wiKTtcbiAgbG9nVGlrVG9rRXZlbnQoXCJwYWdlLXZpZXdcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nRXZlbnQgPSAoZXZlbnQ6IEV2ZW50VHlwZSwgb3B0aW9ucyA9IHt9IGFzIEV2ZW50T3B0aW9ucykgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxvZ0dvb2dsZUNvbnZlcnNpb24oZXZlbnQpO1xuICBsb2dGYWNlYm9va0V2ZW50KGV2ZW50KTtcbiAgbG9nU2VnbWVudEV2ZW50KGV2ZW50LCBvcHRpb25zKTtcbiAgLy8gbG9nU25hcEV2ZW50KGV2ZW50KTtcbiAgbG9nVGlrVG9rRXZlbnQoZXZlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlkZW50aWZ5VXNlciA9IChpZGVudGlmaWVyczogVXNlcklkZW50aWZpZXJzKSA9PiB7XG4gIGlkZW50aWZ5U2VnbWVudChpZGVudGlmaWVycyk7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICAvLyB3aW5kb3cuc25hcHRyKFwiaW5pdFwiLCBTTkFQX0lELCB7IHVzZXJfZW1haWw6IGlkZW50aWZpZXJzLmVtYWlsIH0pO1xufTtcbiIsIi8qKlxuICogU2VnbWVudCBzbmlwcGV0IHJlbmRlcmluZyArIHRyYWNraW5nIGltcGxlbWVudGF0aW9uXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBzbmlwcGV0IGZyb20gXCJAc2VnbWVudC9zbmlwcGV0XCI7XG5pbXBvcnQgeyBFdmVudFR5cGUsIEV2ZW50T3B0aW9ucywgVXNlcklkZW50aWZpZXJzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclNlZ21lbnRTbmlwcGV0ID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG5vZGVFbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA/PyBcImRldmVsb3BtZW50XCI7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19XUklURV9LRVk7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgYXBpS2V5LFxuICAgIHBhZ2U6IHRydWUsXG4gIH07XG4gIHJldHVybiBub2RlRW52ID09PSBcImRldmVsb3BtZW50XCIgPyBzbmlwcGV0Lm1heChvcHRzKSA6IHNuaXBwZXQubWluKG9wdHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ1NlZ21lbnRFdmVudCA9IChcbiAgZXZlbnQ6IEV2ZW50VHlwZSxcbiAgcHJvcGVydGllcyA9IHt9IGFzIEV2ZW50T3B0aW9uc1xuKTogdm9pZCA9PiB7XG4gIGlmIChldmVudCAhPT0gXCJwYWdlLXZpZXdcIikge1xuICAgIHdpbmRvdy5hbmFseXRpY3MudHJhY2soZXZlbnQsIHByb3BlcnRpZXMpO1xuICB9IGVsc2Uge1xuICAgIGxvZ1NlZ21lbnRQYWdlVmlldygpO1xuICB9XG59O1xuXG5jb25zdCBsb2dTZWdtZW50UGFnZVZpZXcgPSAoKSA9PiB7XG4gIHdpbmRvdy5hbmFseXRpY3MucGFnZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlkZW50aWZ5U2VnbWVudCA9IChpZGVuaWZpZXJzOiBVc2VySWRlbnRpZmllcnMpID0+IHtcbiAgd2luZG93LmFuYWx5dGljcy5pZGVudGlmeShpZGVuaWZpZXJzKTtcbn07XG4iLCIvKipcbiAqIExvYWRzIHRyYWNraW5nIHBpeGVsc1xuICogU2VlIG5leHQuanMgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FkdmFuY2VkLWZlYXR1cmVzL2N1c3RvbS1kb2N1bWVudFxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQge1xuICBGQl9QSVhFTF9JRCxcbiAgR0FfVFJBQ0tJTkdfSUQsXG4gIEFEV09SRFNfSUQsXG4gIHJlbmRlclNlZ21lbnRTbmlwcGV0LFxuICBTTkFQX0lELFxuICBUSUtUT0tfSUQsXG59IGZyb20gXCIuLi9saWIvZXZlbnRfbG9nZ2luZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7LyogR2xvYmFsIFNpdGUgQ29kZSBQaXhlbCAtIEZhY2Vib29rIFBpeGVsICovfVxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgICFmdW5jdGlvbihmLGIsZSx2LG4sdCxzKVxuICAgICAgICAgICAgICAgIHtpZihmLmZicSlyZXR1cm47bj1mLmZicT1mdW5jdGlvbigpe24uY2FsbE1ldGhvZD9cbiAgICAgICAgICAgICAgICBuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtcbiAgICAgICAgICAgICAgICBpZighZi5fZmJxKWYuX2ZicT1uO24ucHVzaD1uO24ubG9hZGVkPSEwO24udmVyc2lvbj0nMi4wJztcbiAgICAgICAgICAgICAgICBuLnF1ZXVlPVtdO3Q9Yi5jcmVhdGVFbGVtZW50KGUpO3QuYXN5bmM9ITA7XG4gICAgICAgICAgICAgICAgdC5zcmM9djtzPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSlbMF07XG4gICAgICAgICAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHMpfSh3aW5kb3csIGRvY3VtZW50LCdzY3JpcHQnLFxuICAgICAgICAgICAgICAgICdodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL2ZiZXZlbnRzLmpzJyk7XG4gICAgICAgICAgICAgICAgZmJxKCdpbml0JywgJHtGQl9QSVhFTF9JRH0pO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD0ke0ZCX1BJWEVMX0lEfSZldj1QYWdlVmlldyZub3NjcmlwdD0xYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9ub3NjcmlwdD5cblxuICAgICAgICAgIHsvKiBTZWdtZW50IHRyYWNraW5nIGNvZGUgKi99XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiByZW5kZXJTZWdtZW50U25pcHBldCgpIH19XG4gICAgICAgICAgPjwvc2NyaXB0PlxuXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbiAodywgZCwgdCkge1xuICAgICAgICAgICAgICAgICAgICB3LlRpa3Rva0FuYWx5dGljc09iamVjdD10O3ZhciB0dHE9d1t0XT13W3RdfHxbXTt0dHEubWV0aG9kcz1bXCJwYWdlXCIsXCJ0cmFja1wiLFwiaWRlbnRpZnlcIixcImluc3RhbmNlc1wiLFwiZGVidWdcIixcIm9uXCIsXCJvZmZcIixcIm9uY2VcIixcInJlYWR5XCIsXCJhbGlhc1wiLFwiZ3JvdXBcIixcImVuYWJsZUNvb2tpZVwiLFwiZGlzYWJsZUNvb2tpZVwiXSx0dHEuc2V0QW5kRGVmZXI9ZnVuY3Rpb24odCxlKXt0W2VdPWZ1bmN0aW9uKCl7dC5wdXNoKFtlXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKSl9fTtmb3IodmFyIGk9MDtpPHR0cS5tZXRob2RzLmxlbmd0aDtpKyspdHRxLnNldEFuZERlZmVyKHR0cSx0dHEubWV0aG9kc1tpXSk7dHRxLmluc3RhbmNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10dHEuX2lbdF18fFtdLG49MDtuPHR0cS5tZXRob2RzLmxlbmd0aDtuKyspdHRxLnNldEFuZERlZmVyKGUsdHRxLm1ldGhvZHNbbl0pO3JldHVybiBlfSx0dHEubG9hZD1mdW5jdGlvbihlLG4pe3ZhciBpPVwiaHR0cHM6Ly9hbmFseXRpY3MudGlrdG9rLmNvbS9pMThuL3BpeGVsL2V2ZW50cy5qc1wiO3R0cS5faT10dHEuX2l8fHt9LHR0cS5faVtlXT1bXSx0dHEuX2lbZV0uX3U9aSx0dHEuX3Q9dHRxLl90fHx7fSx0dHEuX3RbZV09K25ldyBEYXRlLHR0cS5fbz10dHEuX298fHt9LHR0cS5fb1tlXT1ufHx7fTt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO28udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLG8uYXN5bmM9ITAsby5zcmM9aStcIj9zZGtpZD1cIitlK1wiJmxpYj1cIit0O3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxhKX07XG5cbiAgICAgICAgICAgICAgICAgICAgdHRxLmxvYWQoJyR7VElLVE9LX0lEfScpO1xuICAgICAgICAgICAgICAgICAgICB0dHEucGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KHdpbmRvdywgZG9jdW1lbnQsICd0dHEnKTtcbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBHb29nbGUgY29uc29sZSAqL31cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PVwibnVvVG10SmdFSDVIVm5Ma1pYX3dzSUo3S0FHMWhlMktGQTdrNnNnaUNrTVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cImdvb2dsZS1zaWduaW4tY2xpZW50X2lkXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCI3NDM3NDI3Mjc0NjktaW9xaG5kaHZzbzAxY2N0ZTc5NDNmb3V2M3Q2YTMzaTMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgICBjb250ZW50PVwiaGVsbG9saW5hLCBsaW5hLCBhZGQgdHJlYXRtZW50IGxvcyBhbmdlbGVzLCBhZGQgdHJlYXRtZW50IHNhbiBmcmFuY2lzY28sIGFkZCB0cmVhdG1lbnQgc2FuIGRpZWdvLCBhZGhkIHRyZWF0bWVudCwgZGV4dHJvYW1waGV0YW1pbmUsIGFkZCBhc3Nlc3NtZW50LCB2eXZhbmNlIGVmZmVjdCwgYWR1bHQgYWRkIGRpYWdub3NpcywgYWRoZCB0cmVhdG1lbnQgbG9zIGFuZ2VsZXMsIGFkaGQgdHJlYXRtZW50IHNhbiBmcmFuY2lzY28sIGFkaGQgdHJlYXRtZW50IHNhbiBkaWVnbywgcHN5Y2hpYXRyaXN0IHNhbiBkaWVnbywgcHN5Y2hpYXRyaXN0IHNhbiBmcmFuY2lzY28sIHBzeWNoaWF0cmlzdCBsb3MgYW5nZWxlcywgbWVudGFsIGhlYWx0aCBoZWxwIG9ubGluZSwgb25saW5lIGFkaGQgaGVscCwgYWR1bHQgYXR0ZW50aW9uIGRlZmljaXQsIG9ubGluZSBwc3ljaGlhdHJpc3QsIHZ5dmFuc2UgcHJpY2UsIGFkZGVyYWxsIHByaWNlLCBhZGRlcmFsbCBYUiBzaWRlIGVmZmVjdCwgYWRkZXJhbGwgWFIgcHJpY2UsIG1pYW1pIGFkaGQgdHJlYXRtZW50XCJcbiAgICAgICAgICA+PC9tZXRhPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkxpbmEgb2ZmZXJzIG9ubGluZSB0cmVhdG1lbnQgZm9yIGFueGlldHksIGRlcHJlc3Npb24sIGluc29tbmlhIGFuZCBBREhELiBJbmNsdWRlcyBwc3ljaGlhdHJpc3QgdmlzaXRzIGFuZCBtZWRpY2F0aW9uIGRlbGl2ZXJ5LlwiXG4gICAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJMaW5hIG9mZmVycyBvbmxpbmUgdHJlYXRtZW50IGZvciBhbnhpZXR5LCBkZXByZXNzaW9uLCBpbnNvbW5pYSBhbmQgQURIRC4gSW5jbHVkZXMgcHN5Y2hpYXRyaXN0cyB2aXNpdHMgYW5kIG1lZGljYXRpb24gZGVsaXZlcnkuXCJcbiAgICAgICAgICA+PC9tZXRhPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwib2c6dGl0bGVcIlxuICAgICAgICAgICAgY29udGVudD1cIkxpbmEgfCBPbmxpbmUgZGVwcmVzc2lvbiwgYW54aWV0eSwgaW5zb21uaWEgdHJlYXRtZW50IGFuZCBtZWRpY2F0aW9uIGRlbGl2ZXJlZCB0byB5b3VcIlxuICAgICAgICAgID48L21ldGE+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9oZWxsb2xpbmEuY29tL2ltYWdlcy9zaGFyZS5qcGdcIlxuICAgICAgICAgID48L21ldGE+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiPjwvbWV0YT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIj48L21ldGE+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJMaW5hXCI+PC9tZXRhPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidHdpdHRlcjp0aXRsZVwiXG4gICAgICAgICAgICBjb250ZW50PVwiTGluYSB8IE9ubGluZSBkZXByZXNzaW9uLCBhbnhpZXR5LCBpbnNvbW5pYSB0cmVhdG1lbnQgYW5kIG1lZGljYXRpb24gZGVsaXZlcmVkIHRvIHlvdVwiXG4gICAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkxpbmEgfCBPbmxpbmUgZGVwcmVzc2lvbiwgYW54aWV0eSwgaW5zb21uaWEgdHJlYXRtZW50IGFuZCBtZWRpY2F0aW9uIGRlbGl2ZXJlZCB0byB5b3VcIlxuICAgICAgICAgID48L21ldGE+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PWluaXRIZWFkTWFuYWdlcjtleHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzPXZvaWQgMDtjb25zdCBET01BdHRyaWJ1dGVOYW1lcz17YWNjZXB0Q2hhcnNldDonYWNjZXB0LWNoYXJzZXQnLGNsYXNzTmFtZTonY2xhc3MnLGh0bWxGb3I6J2ZvcicsaHR0cEVxdWl2OidodHRwLWVxdWl2Jyxub01vZHVsZTonbm9Nb2R1bGUnfTtleHBvcnRzLkRPTUF0dHJpYnV0ZU5hbWVzPURPTUF0dHJpYnV0ZU5hbWVzO2Z1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHt0eXBlLHByb3BzfSl7Y29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtmb3IoY29uc3QgcCBpbiBwcm9wcyl7aWYoIXByb3BzLmhhc093blByb3BlcnR5KHApKWNvbnRpbnVlO2lmKHA9PT0nY2hpbGRyZW4nfHxwPT09J2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyljb250aW51ZTsvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbmlmKHByb3BzW3BdPT09dW5kZWZpbmVkKWNvbnRpbnVlO2NvbnN0IGF0dHI9RE9NQXR0cmlidXRlTmFtZXNbcF18fHAudG9Mb3dlckNhc2UoKTtpZih0eXBlPT09J3NjcmlwdCcmJihhdHRyPT09J2FzeW5jJ3x8YXR0cj09PSdkZWZlcid8fGF0dHI9PT0nbm9Nb2R1bGUnKSl7O2VsW2F0dHJdPSEhcHJvcHNbcF07fWVsc2V7ZWwuc2V0QXR0cmlidXRlKGF0dHIscHJvcHNbcF0pO319Y29uc3R7Y2hpbGRyZW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx9PXByb3BzO2lmKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtlbC5pbm5lckhUTUw9ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfHwnJzt9ZWxzZSBpZihjaGlsZHJlbil7ZWwudGV4dENvbnRlbnQ9dHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZyc/Y2hpbGRyZW46QXJyYXkuaXNBcnJheShjaGlsZHJlbik/Y2hpbGRyZW4uam9pbignJyk6Jyc7fXJldHVybiBlbDt9ZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZSxjb21wb25lbnRzKXtjb25zdCBoZWFkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtjb25zdCBoZWFkQ291bnRFbD1oZWFkRWwucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIWhlYWRDb3VudEVsKXtjb25zb2xlLmVycm9yKCdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnKTtyZXR1cm47fX1jb25zdCBoZWFkQ291bnQ9TnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpO2NvbnN0IG9sZFRhZ3M9W107Zm9yKGxldCBpPTAsaj1oZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO2k8aGVhZENvdW50O2krKyxqPWoucHJldmlvdXNFbGVtZW50U2libGluZyl7aWYoai50YWdOYW1lLnRvTG93ZXJDYXNlKCk9PT10eXBlKXtvbGRUYWdzLnB1c2goaik7fX1jb25zdCBuZXdUYWdzPWNvbXBvbmVudHMubWFwKHJlYWN0RWxlbWVudFRvRE9NKS5maWx0ZXIobmV3VGFnPT57Zm9yKGxldCBrPTAsbGVuPW9sZFRhZ3MubGVuZ3RoO2s8bGVuO2srKyl7Y29uc3Qgb2xkVGFnPW9sZFRhZ3Nba107aWYob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpe29sZFRhZ3Muc3BsaWNlKGssMSk7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fSk7b2xkVGFncy5mb3JFYWNoKHQ9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSk7bmV3VGFncy5mb3JFYWNoKHQ9PmhlYWRFbC5pbnNlcnRCZWZvcmUodCxoZWFkQ291bnRFbCkpO2hlYWRDb3VudEVsLmNvbnRlbnQ9KGhlYWRDb3VudC1vbGRUYWdzLmxlbmd0aCtuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKTt9ZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCl7bGV0IHVwZGF0ZVByb21pc2U9bnVsbDtyZXR1cm57bW91bnRlZEluc3RhbmNlczpuZXcgU2V0KCksdXBkYXRlSGVhZDpoZWFkPT57Y29uc3QgcHJvbWlzZT11cGRhdGVQcm9taXNlPVByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntpZihwcm9taXNlIT09dXBkYXRlUHJvbWlzZSlyZXR1cm47dXBkYXRlUHJvbWlzZT1udWxsO2NvbnN0IHRhZ3M9e307aGVhZC5mb3JFYWNoKGg9PntpZigvLyBJZiB0aGUgZm9udCB0YWcgaXMgbG9hZGVkIG9ubHkgb24gY2xpZW50IG5hdmlnYXRpb25cbi8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG5oLnR5cGU9PT0nbGluaycmJmgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10mJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWApKXtoLnByb3BzLmhyZWY9aC5wcm9wc1snZGF0YS1ocmVmJ107aC5wcm9wc1snZGF0YS1ocmVmJ109dW5kZWZpbmVkO31jb25zdCBjb21wb25lbnRzPXRhZ3NbaC50eXBlXXx8W107Y29tcG9uZW50cy5wdXNoKGgpO3RhZ3NbaC50eXBlXT1jb21wb25lbnRzO30pO2NvbnN0IHRpdGxlQ29tcG9uZW50PXRhZ3MudGl0bGU/dGFncy50aXRsZVswXTpudWxsO2xldCB0aXRsZT0nJztpZih0aXRsZUNvbXBvbmVudCl7Y29uc3R7Y2hpbGRyZW59PXRpdGxlQ29tcG9uZW50LnByb3BzO3RpdGxlPXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31pZih0aXRsZSE9PWRvY3VtZW50LnRpdGxlKWRvY3VtZW50LnRpdGxlPXRpdGxlO1snbWV0YScsJ2Jhc2UnLCdsaW5rJywnc3R5bGUnLCdzY3JpcHQnXS5mb3JFYWNoKHR5cGU9Pnt1cGRhdGVFbGVtZW50cyh0eXBlLHRhZ3NbdHlwZV18fFtdKTt9KTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pbml0U2NyaXB0TG9hZGVyPWluaXRTY3JpcHRMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfaGVhZE1hbmFnZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlcj1yZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBTY3JpcHRDYWNoZT1uZXcgTWFwKCk7Y29uc3QgTG9hZENhY2hlPW5ldyBTZXQoKTtjb25zdCBpZ25vcmVQcm9wcz1bJ29uTG9hZCcsJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJywnY2hpbGRyZW4nLCdvbkVycm9yJywnc3RyYXRlZ3knXTtjb25zdCBsb2FkU2NyaXB0PXByb3BzPT57Y29uc3R7c3JjLGlkLG9uTG9hZD0oKT0+e30sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsY2hpbGRyZW49Jycsb25FcnJvcn09cHJvcHM7Y29uc3QgY2FjaGVLZXk9aWR8fHNyYztpZihTY3JpcHRDYWNoZS5oYXMoc3JjKSl7aWYoIUxvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKXtMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTsvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG5TY3JpcHRDYWNoZS5nZXQoc3JjKS50aGVuKG9uTG9hZCxvbkVycm9yKTt9cmV0dXJuO31jb25zdCBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtjb25zdCBsb2FkUHJvbWlzZT1uZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57ZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtyZXNvbHZlKCk7aWYob25Mb2FkKXtvbkxvYWQuY2FsbCh0aGlzKTt9fSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLGZ1bmN0aW9uKCl7cmVqZWN0KCk7aWYob25FcnJvcil7b25FcnJvcigpO319KTt9KTtpZihzcmMpe1NjcmlwdENhY2hlLnNldChzcmMsbG9hZFByb21pc2UpO0xvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO31pZihkYW5nZXJvdXNseVNldElubmVySFRNTCl7ZWwuaW5uZXJIVE1MPWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbHx8Jyc7fWVsc2UgaWYoY2hpbGRyZW4pe2VsLnRleHRDb250ZW50PXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31lbHNlIGlmKHNyYyl7ZWwuc3JjPXNyYzt9Zm9yKGNvbnN0W2ssdmFsdWVdb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKXtpZih2YWx1ZT09PXVuZGVmaW5lZHx8aWdub3JlUHJvcHMuaW5jbHVkZXMoaykpe2NvbnRpbnVlO31jb25zdCBhdHRyPV9oZWFkTWFuYWdlci5ET01BdHRyaWJ1dGVOYW1lc1trXXx8ay50b0xvd2VyQ2FzZSgpO2VsLnNldEF0dHJpYnV0ZShhdHRyLHZhbHVlKTt9ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7fTtmdW5jdGlvbiBoYW5kbGVDbGllbnRTY3JpcHRMb2FkKHByb3BzKXtjb25zdHtzdHJhdGVneT0nYWZ0ZXJJbnRlcmFjdGl2ZSd9PXByb3BzO2lmKHN0cmF0ZWd5PT09J2FmdGVySW50ZXJhY3RpdmUnKXtsb2FkU2NyaXB0KHByb3BzKTt9ZWxzZSBpZihzdHJhdGVneT09PSdsYXp5T25sb2FkJyl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PmxvYWRTY3JpcHQocHJvcHMpKTt9KTt9fWZ1bmN0aW9uIGxvYWRMYXp5U2NyaXB0KHByb3BzKXtpZihkb2N1bWVudC5yZWFkeVN0YXRlPT09J2NvbXBsZXRlJyl7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PmxvYWRTY3JpcHQocHJvcHMpKTt9ZWxzZXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+bG9hZFNjcmlwdChwcm9wcykpO30pO319ZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtcyl7c2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKTt9ZnVuY3Rpb24gU2NyaXB0KHByb3BzKXtjb25zdHtzcmM9Jycsb25Mb2FkPSgpPT57fSxzdHJhdGVneT0nYWZ0ZXJJbnRlcmFjdGl2ZScsb25FcnJvcn09cHJvcHMscmVzdFByb3BzPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShwcm9wcyxbXCJzcmNcIixcIm9uTG9hZFwiLFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIixcInN0cmF0ZWd5XCIsXCJvbkVycm9yXCJdKTsvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbmNvbnN0e3VwZGF0ZVNjcmlwdHMsc2NyaXB0c309KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKHN0cmF0ZWd5PT09J2FmdGVySW50ZXJhY3RpdmUnKXtsb2FkU2NyaXB0KHByb3BzKTt9ZWxzZSBpZihzdHJhdGVneT09PSdsYXp5T25sb2FkJyl7bG9hZExhenlTY3JpcHQocHJvcHMpO319LFtwcm9wcyxzdHJhdGVneV0pO2lmKHN0cmF0ZWd5PT09J2JlZm9yZUludGVyYWN0aXZlJyl7aWYodXBkYXRlU2NyaXB0cyl7c2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZT0oc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLmNvbmNhdChbKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtzcmMsb25Mb2FkLG9uRXJyb3J9LHJlc3RQcm9wcyldKTt1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO319cmV0dXJuIG51bGw7fXZhciBfZGVmYXVsdD1TY3JpcHQ7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NyaXB0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuSHRtbD1IdG1sO2V4cG9ydHMuTWFpbj1NYWluO2V4cG9ydHMuTmV4dFNjcmlwdD1leHBvcnRzLkhlYWQ9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF9nZXRQYWdlRmlsZXM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlc1wiKTt2YXIgX3V0aWxzMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzXCIpO3ZhciBfaHRtbGVzY2FwZT1yZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7dmFyIF9zY3JpcHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2xpZW50L3NjcmlwdFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCxwYXRobmFtZSxpbkFtcE1vZGUpe2NvbnN0IHNoYXJlZEZpbGVzPSgwLF9nZXRQYWdlRmlsZXMuZ2V0UGFnZUZpbGVzKShidWlsZE1hbmlmZXN0LCcvX2FwcCcpO2NvbnN0IHBhZ2VGaWxlcz1pbkFtcE1vZGU/W106KDAsX2dldFBhZ2VGaWxlcy5nZXRQYWdlRmlsZXMpKGJ1aWxkTWFuaWZlc3QscGF0aG5hbWUpO3JldHVybntzaGFyZWRGaWxlcyxwYWdlRmlsZXMsYWxsRmlsZXM6Wy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLC4uLnBhZ2VGaWxlc10pXX07fWZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LHByb3BzKXsvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbi8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuY29uc3R7YXNzZXRQcmVmaXgsYnVpbGRNYW5pZmVzdCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLmZpbHRlcihwb2x5ZmlsbD0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpJiYhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH0pKTt9ZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dCxwcm9wcyl7Y29uc3R7c2NyaXB0TG9hZGVyLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmV8fFtdKS5tYXAoZmlsZT0+e2NvbnN0e3N0cmF0ZWd5LC4uLnNjcmlwdFByb3BzfT1maWxlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7fSxzY3JpcHRQcm9wcyx7ZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpO30pO31mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKGNvbnRleHQscHJvcHMsZmlsZXMpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGlzRGV2ZWxvcG1lbnQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcChmaWxlPT57aWYoIWZpbGUuZW5kc1dpdGgoJy5qcycpfHxmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhmaWxlKSlyZXR1cm4gbnVsbDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzohaXNEZXZlbG9wbWVudCYmZGlzYWJsZU9wdGltaXplZExvYWRpbmcsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGtleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSk7fWZ1bmN0aW9uIGdldFNjcmlwdHMoY29udGV4dCxwcm9wcyxmaWxlcyl7dmFyIF9idWlsZE1hbmlmZXN0JGxvd1ByaTtjb25zdHthc3NldFByZWZpeCxidWlsZE1hbmlmZXN0LGlzRGV2ZWxvcG1lbnQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz0oX2J1aWxkTWFuaWZlc3QkbG93UHJpPWJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcyk9PW51bGw/dm9pZCAwOl9idWlsZE1hbmlmZXN0JGxvd1ByaS5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTpwcm9wcy5ub25jZSxhc3luYzohaXNEZXZlbG9wbWVudCYmZGlzYWJsZU9wdGltaXplZExvYWRpbmcsZGVmZXI6IWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGNyb3NzT3JpZ2luOnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSk7fS8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL2NsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHsvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7Y29uc3QgZW5oYW5jZUFwcD1BcHA9PntyZXR1cm4gcHJvcHM9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6cHJvcHN9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50Q29tcG9uZW50LHByb3BzKSk7fXJlbmRlcigpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbixudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LG51bGwpKSk7fX1leHBvcnRzLmRlZmF1bHQ9RG9jdW1lbnQ7ZnVuY3Rpb24gSHRtbChwcm9wcyl7Y29uc3R7aW5BbXBNb2RlLGRvY0NvbXBvbmVudHNSZW5kZXJlZCxsb2NhbGV9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWw9dHJ1ZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIixPYmplY3QuYXNzaWduKHt9LHByb3BzLHtsYW5nOnByb3BzLmxhbmd8fGxvY2FsZXx8dW5kZWZpbmVkLGFtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fWNsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldENzc0xpbmtzKGZpbGVzKXtjb25zdHthc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxkeW5hbWljSW1wb3J0c309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzLmFsbEZpbGVzLmZpbHRlcihmPT5mLmVuZHNXaXRoKCcuY3NzJykpO2NvbnN0IHNoYXJlZEZpbGVzPW5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpOy8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbmxldCB1bm1hbmdlZEZpbGVzPW5ldyBTZXQoW10pO2xldCBkeW5hbWljQ3NzRmlsZXM9QXJyYXkuZnJvbShuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuY3NzJykpKSk7aWYoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCl7Y29uc3QgZXhpc3Rpbmc9bmV3IFNldChjc3NGaWxlcyk7ZHluYW1pY0Nzc0ZpbGVzPWR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoZj0+IShleGlzdGluZy5oYXMoZil8fHNoYXJlZEZpbGVzLmhhcyhmKSkpO3VubWFuZ2VkRmlsZXM9bmV3IFNldChkeW5hbWljQ3NzRmlsZXMpO2Nzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKTt9bGV0IGNzc0xpbmtFbGVtZW50cz1bXTtjc3NGaWxlcy5mb3JFYWNoKGZpbGU9Pntjb25zdCBpc1NoYXJlZEZpbGU9c2hhcmVkRmlsZXMuaGFzKGZpbGUpO2lmKCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTKXtjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmAke2ZpbGV9LXByZWxvYWRgLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInN0eWxlXCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKTt9Y29uc3QgaXNVbm1hbmFnZWRGaWxlPXVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInN0eWxlc2hlZXRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcImRhdGEtbi1nXCI6aXNVbm1hbmFnZWRGaWxlP3VuZGVmaW5lZDppc1NoYXJlZEZpbGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1uLXBcIjppc1VubWFuYWdlZEZpbGU/dW5kZWZpbmVkOmlzU2hhcmVkRmlsZT91bmRlZmluZWQ6Jyd9KSk7fSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpe2Nzc0xpbmtFbGVtZW50cz10aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY3NzTGlua0VsZW1lbnRzKTt9cmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGg9PT0wP251bGw6Y3NzTGlua0VsZW1lbnRzO31nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcChmaWxlPT57aWYoIWZpbGUuZW5kc1dpdGgoJy5qcycpKXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixrZXk6ZmlsZSxocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KTt9KS8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbi5maWx0ZXIoQm9vbGVhbik7fWdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpe2NvbnN0e2Fzc2V0UHJlZml4LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLHNjcmlwdExvYWRlcn09dGhpcy5jb250ZXh0O2NvbnN0IHByZWxvYWRGaWxlcz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZmlsZT0+e3JldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKTt9KTtyZXR1cm5bLi4uKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUuc3JjLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6ZmlsZS5zcmMsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpLC4uLnByZWxvYWRGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSldO31nZXREeW5hbWljQ2h1bmtzKGZpbGVzKXtyZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFByZU5leHRTY3JpcHRzKCl7cmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9Z2V0U2NyaXB0cyhmaWxlcyl7cmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXtyZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzKTt9aGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbil7Y29uc3R7c2NyaXB0TG9hZGVyfT10aGlzLmNvbnRleHQ7Y29uc3Qgc2NyaXB0TG9hZGVySXRlbXM9W107Y29uc3QgZmlsdGVyZWRDaGlsZHJlbj1bXTtfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLGNoaWxkPT57aWYoY2hpbGQudHlwZT09PV9zY3JpcHQuZGVmYXVsdCl7aWYoY2hpbGQucHJvcHMuc3RyYXRlZ3k9PT0nYmVmb3JlSW50ZXJhY3RpdmUnKXtzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmU9KHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZXx8W10pLmNvbmNhdChbey4uLmNoaWxkLnByb3BzfV0pO3JldHVybjt9ZWxzZSBpZihbJ2xhenlPbmxvYWQnLCdhZnRlckludGVyYWN0aXZlJ10uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpKXtzY3JpcHRMb2FkZXJJdGVtcy5wdXNoKGNoaWxkLnByb3BzKTtyZXR1cm47fX1maWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpO30pO3RoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlcj1zY3JpcHRMb2FkZXJJdGVtcztyZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjt9bWFrZVN0eWxlc2hlZXRJbmVydChub2RlKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG5vZGUsYz0+e2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiZfY29uc3RhbnRzLk9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh7dXJsfSk9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKXtjb25zdCBuZXdQcm9wcz17Li4uKGMucHJvcHN8fHt9KX07bmV3UHJvcHNbJ2RhdGEtaHJlZiddPW5ld1Byb3BzWydocmVmJ107bmV3UHJvcHNbJ2hyZWYnXT11bmRlZmluZWQ7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9ZWxzZSBpZihjLnByb3BzJiZjLnByb3BzWydjaGlsZHJlbiddKXtjLnByb3BzWydjaGlsZHJlbiddPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKTt9cmV0dXJuIGM7fSk7fXJlbmRlcigpe3ZhciBfdGhpcyRwcm9wcyRub25jZSxfdGhpcyRwcm9wcyRub25jZTI7Y29uc3R7c3R5bGVzLGFtcFBhdGgsaW5BbXBNb2RlLGh5YnJpZEFtcCxjYW5vbmljYWxCYXNlLF9fTkVYVF9EQVRBX18sZGFuZ2Vyb3VzQXNQYXRoLGhlYWRUYWdzLHVuc3RhYmxlX3J1bnRpbWVKUyx1bnN0YWJsZV9Kc1ByZWxvYWQsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PXRoaXMuY29udGV4dDtjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0IGRpc2FibGVKc1ByZWxvYWQ9dW5zdGFibGVfSnNQcmVsb2FkPT09ZmFsc2V8fCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZzt0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQ9dHJ1ZTtsZXR7aGVhZH09dGhpcy5jb250ZXh0O2xldCBjc3NQcmVsb2Fkcz1bXTtsZXQgb3RoZXJIZWFkRWxlbWVudHM9W107aWYoaGVhZCl7aGVhZC5mb3JFYWNoKGM9PntpZihjJiZjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ3JlbCddPT09J3ByZWxvYWQnJiZjLnByb3BzWydhcyddPT09J3N0eWxlJyl7Y3NzUHJlbG9hZHMucHVzaChjKTt9ZWxzZXtjJiZvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO319KTtoZWFkPWNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cyk7fWxldCBjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57dmFyIF9jaGlsZCRwcm9wcztjb25zdCBpc1JlYWN0SGVsbWV0PWNoaWxkPT1udWxsP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKCFpc1JlYWN0SGVsbWV0KXt2YXIgX2NoaWxkJHByb3BzMjtpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J3RpdGxlJyl7Y29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiKTt9ZWxzZSBpZigoY2hpbGQ9PW51bGw/dm9pZCAwOmNoaWxkLnR5cGUpPT09J21ldGEnJiYoY2hpbGQ9PW51bGw/dm9pZCAwOihfY2hpbGQkcHJvcHMyPWNoaWxkLnByb3BzKT09bnVsbD92b2lkIDA6X2NoaWxkJHByb3BzMi5uYW1lKT09PSd2aWV3cG9ydCcpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCIpO319cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFpbkFtcE1vZGUpe2NoaWxkcmVuPXRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbik7fWNoaWxkcmVuPXRoaXMuaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbik7bGV0IGhhc0FtcGh0bWxSZWw9ZmFsc2U7bGV0IGhhc0Nhbm9uaWNhbFJlbD1mYWxzZTsvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG5oZWFkPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkfHxbXSxjaGlsZD0+e2lmKCFjaGlsZClyZXR1cm4gY2hpbGQ7Y29uc3R7dHlwZSxwcm9wc309Y2hpbGQ7aWYoaW5BbXBNb2RlKXtsZXQgYmFkUHJvcD0nJztpZih0eXBlPT09J21ldGEnJiZwcm9wcy5uYW1lPT09J3ZpZXdwb3J0Jyl7YmFkUHJvcD0nbmFtZT1cInZpZXdwb3J0XCInO31lbHNlIGlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdjYW5vbmljYWwnKXtoYXNDYW5vbmljYWxSZWw9dHJ1ZTt9ZWxzZSBpZih0eXBlPT09J3NjcmlwdCcpey8vIG9ubHkgYmxvY2sgaWZcbi8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3Jcbi8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbmlmKHByb3BzLnNyYyYmcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKTwtMXx8cHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJighcHJvcHMudHlwZXx8cHJvcHMudHlwZT09PSd0ZXh0L2phdmFzY3JpcHQnKSl7YmFkUHJvcD0nPHNjcmlwdCc7T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcD0+e2JhZFByb3ArPWAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO30pO2JhZFByb3ArPScvPic7fX1pZihiYWRQcm9wKXtjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYCk7cmV0dXJuIG51bGw7fX1lbHNley8vIG5vbi1hbXAgbW9kZVxuaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2FtcGh0bWwnKXtoYXNBbXBodG1sUmVsPXRydWU7fX1yZXR1cm4gY2hpbGQ7fSk7Ly8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG5jb25zdCBjdXJTdHlsZXM9QXJyYXkuaXNBcnJheShzdHlsZXMpP3N0eWxlczpbXTtpZihpbkFtcE1vZGUmJnN0eWxlcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pKXtjb25zdCBoYXNTdHlsZXM9ZWw9Pnt2YXIgX2VsJHByb3BzLF9lbCRwcm9wcyRkYW5nZXJvdXNseTtyZXR1cm4gZWw9PW51bGw/dm9pZCAwOihfZWwkcHJvcHM9ZWwucHJvcHMpPT1udWxsP3ZvaWQgMDooX2VsJHByb3BzJGRhbmdlcm91c2x5PV9lbCRwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCk9PW51bGw/dm9pZCAwOl9lbCRwcm9wcyRkYW5nZXJvdXNseS5fX2h0bWw7fTsvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkPT57aWYoQXJyYXkuaXNBcnJheShjaGlsZCkpe2NoaWxkLmZvckVhY2goZWw9Pmhhc1N0eWxlcyhlbCkmJmN1clN0eWxlcy5wdXNoKGVsKSk7fWVsc2UgaWYoaGFzU3R5bGVzKGNoaWxkKSl7Y3VyU3R5bGVzLnB1c2goY2hpbGQpO319KTt9Y29uc3QgZmlsZXM9Z2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCx0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLGluQW1wTW9kZSk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsdGhpcy5wcm9wcyx0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZCxkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6bm9uZX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpibG9ja31gfX0pKSksY2hpbGRyZW4scHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtZm9udC1wcmVjb25uZWN0XCJ9KSxoZWFkLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1oZWFkLWNvdW50XCIsY29udGVudDpfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkfHxbXSkudG9TdHJpbmcoKX0pLGluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJ9KSwhaGFzQ2Fub25pY2FsUmVsJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiY2Fub25pY2FsXCIsaHJlZjpjYW5vbmljYWxCYXNlKygwLF91dGlsczIuY2xlYW5BbXBQYXRoKShkYW5nZXJvdXNBc1BhdGgpfSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixhczpcInNjcmlwdFwiLGhyZWY6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSksc3R5bGVzJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWN1c3RvbVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpjdXJTdHlsZXMubWFwKHN0eWxlPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywnJyl9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWB9fSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsc3JjOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pKSwhaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFoYXNBbXBodG1sUmVsJiZoeWJyaWRBbXAmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJhbXBodG1sXCIsaHJlZjpjYW5vbmljYWxCYXNlK2dldEFtcFBhdGgoYW1wUGF0aCxkYW5nZXJvdXNBc1BhdGgpfSksIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJnRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uLWNzc1wiOihfdGhpcyRwcm9wcyRub25jZT10aGlzLnByb3BzLm5vbmNlKSE9bnVsbD9fdGhpcyRwcm9wcyRub25jZTonJ30pLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9JTUFHRVMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1pbWFnZS1wcmVsb2FkXCJ9KSwhZGlzYWJsZVJ1bnRpbWVKUyYmIWRpc2FibGVKc1ByZWxvYWQmJnRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmIWRpc2FibGVKc1ByZWxvYWQmJnRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwhZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFNjcmlwdHMoZmlsZXMpLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJnRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW4tY3NzXCI6KF90aGlzJHByb3BzJG5vbmNlMj10aGlzLnByb3BzLm5vbmNlKSE9bnVsbD9fdGhpcyRwcm9wcyRub25jZTI6Jyd9KSx0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qLyAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4vLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbi8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse2lkOlwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJ9KSxzdHlsZXN8fG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihoZWFkVGFnc3x8W10pKSk7fX1leHBvcnRzLkhlYWQ9SGVhZDtIZWFkLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0hlYWQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O2Z1bmN0aW9uIE1haW4oKXtjb25zdHtpbkFtcE1vZGUsaHRtbCxkb2NDb21wb25lbnRzUmVuZGVyZWR9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dCk7ZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW49dHJ1ZTtpZihpbkFtcE1vZGUpcmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpcIl9fbmV4dFwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6aHRtbH19KTt9Y2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0RHluYW1pY0NodW5rcyhmaWxlcyl7cmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQcmVOZXh0U2NyaXB0cygpe3JldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fWdldFNjcmlwdHMoZmlsZXMpe3JldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7cmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fXN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wcyl7Y29uc3R7X19ORVhUX0RBVEFfX309ZG9jdW1lbnRQcm9wczt0cnl7Y29uc3QgZGF0YT1KU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtyZXR1cm4oMCxfaHRtbGVzY2FwZS5odG1sRXNjYXBlSnNvblN0cmluZykoZGF0YSk7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpe3Rocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYCk7fXRocm93IGVycjt9fXJlbmRlcigpe2NvbnN0e2Fzc2V0UHJlZml4LGluQW1wTW9kZSxidWlsZE1hbmlmZXN0LHVuc3RhYmxlX3J1bnRpbWVKUyxkb2NDb21wb25lbnRzUmVuZGVyZWQsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PXRoaXMuY29udGV4dDtjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2RvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0PXRydWU7aWYoaW5BbXBNb2RlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyl7cmV0dXJuIG51bGw7fWNvbnN0IGFtcERldkZpbGVzPVsuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcywuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGFtcERldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pKSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWNvbnN0IGZpbGVzPWdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxpbkFtcE1vZGUpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWRpc2FibGVSdW50aW1lSlMmJmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXM/YnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpOm51bGwsZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KX19KSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZU5leHRTY3JpcHRzKCksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSk7fX1leHBvcnRzLk5leHRTY3JpcHQ9TmV4dFNjcmlwdDtOZXh0U2NyaXB0LmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O05leHRTY3JpcHQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O05leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXg9JyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztmdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsYXNQYXRoKXtyZXR1cm4gYW1wUGF0aHx8YCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/Jyk/JyYnOic/J31hbXA9MWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2RvY3VtZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzZWdtZW50L3NuaXBwZXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9