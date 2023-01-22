(self["webpackChunkprivy"] = self["webpackChunkprivy"] || []).push([["resources_js_pages_Analytics_jsx"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./resources/js/components/analytics/Desktop.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/components/analytics/Desktop.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321, _templateObject322, _templateObject323, _templateObject324, _templateObject325, _templateObject326, _templateObject327, _templateObject328, _templateObject329, _templateObject330, _templateObject331, _templateObject332, _templateObject333, _templateObject334, _templateObject335, _templateObject336, _templateObject337, _templateObject338, _templateObject339, _templateObject340, _templateObject341, _templateObject342, _templateObject343, _templateObject344, _templateObject345, _templateObject346, _templateObject347, _templateObject348, _templateObject349, _templateObject350, _templateObject351, _templateObject352, _templateObject353, _templateObject354, _templateObject355, _templateObject356, _templateObject357, _templateObject358, _templateObject359, _templateObject360, _templateObject361, _templateObject362, _templateObject363, _templateObject364, _templateObject365, _templateObject366, _templateObject367, _templateObject368, _templateObject369, _templateObject370, _templateObject371, _templateObject372, _templateObject373, _templateObject374, _templateObject375, _templateObject376, _templateObject377, _templateObject378, _templateObject379, _templateObject380, _templateObject381, _templateObject382, _templateObject383, _templateObject384, _templateObject385, _templateObject386, _templateObject387, _templateObject388, _templateObject389, _templateObject390, _templateObject391, _templateObject392, _templateObject393, _templateObject394, _templateObject395, _templateObject396, _templateObject397, _templateObject398, _templateObject399, _templateObject400, _templateObject401, _templateObject402, _templateObject403, _templateObject404, _templateObject405, _templateObject406, _templateObject407, _templateObject408, _templateObject409, _templateObject410, _templateObject411, _templateObject412, _templateObject413, _templateObject414, _templateObject415, _templateObject416, _templateObject417, _templateObject418, _templateObject419, _templateObject420, _templateObject421, _templateObject422, _templateObject423, _templateObject424, _templateObject425, _templateObject426, _templateObject427, _templateObject428, _templateObject429, _templateObject430, _templateObject431, _templateObject432, _templateObject433, _templateObject434, _templateObject435, _templateObject436, _templateObject437, _templateObject438, _templateObject439, _templateObject440, _templateObject441, _templateObject442, _templateObject443, _templateObject444, _templateObject445, _templateObject446, _templateObject447, _templateObject448, _templateObject449, _templateObject450, _templateObject451, _templateObject452, _templateObject453;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }






var Desktop = function Desktop(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DesktopRootRoot, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MelonFlexColumn, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ativo, {
        src: "https://file.rendit.io/n/ybqb2h7MIL1HxCW7GGW1.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image1, {
          src: "https://file.rendit.io/n/QJetYAXuYf7eLomvq8dk.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare, {})]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn1, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text1, {
            children: "Dashboard"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow1, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow2, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text2, {
                children: "Search"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SearchIcon, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fill, {
                  src: "https://file.rendit.io/n/uc7ynKUgRVKKX6DOqNVw.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Fill1, {
                  src: "https://file.rendit.io/n/uoW9UZy5HnAlUZIvE8Vy.svg"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow3, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Oval, {
                    src: "https://file.rendit.io/n/Pg1Xu1A7ZHKDioB6pzM6.svg"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Profile, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow4, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ProfileIcon, {
                    src: "https://file.rendit.io/n/XpbsUivn9nsrqWJy3VcK.png"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DanielleCampbell, {
                    children: "Danielle Campbell "
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Path, {
                  src: "https://file.rendit.io/n/Tc2vc4ZGGzKWilQOcFgz.svg"
                })]
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line, {
        src: "https://file.rendit.io/n/bY1J2PhgmbBdXC6S0pTE.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text3, {
          children: "Welcome, Danielle Campbell "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text4, {
          children: "Here are your stats for today"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn3, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn4, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image2, {
            src: "https://file.rendit.io/n/rerYcGAqvM1czv378GD6.svg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow5, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn5, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn6, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow6, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K, {
                      children: "3.4"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue, {
                      children: "Privy Score"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn7, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn8, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GraySquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GrayRectangle, {})]
                          })
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                        children: "( Average )"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow7, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                      src: "https://file.rendit.io/n/guL7ge35h5nk1iB3d8hm.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element1, {
                      children: "+3%"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image4, {
                  src: "https://file.rendit.io/n/11tQdNdJlAh7GguRUp7d.svg"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn5, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract4, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow8, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn11, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn12, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue4, {
                        children: "Total Favorites"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K6, {
                        children: "135"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow9, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Mask2, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image5, {
                          src: "https://file.rendit.io/n/mzqFbapJmKl2VNtxUGbd.svg"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn13, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element5, {
                          children: "+25%"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn14, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GraySquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GrayRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image6, {
                  src: "https://file.rendit.io/n/WvHKQ6vlQ4jX3smtseoh.svg"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn16, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract1, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow10, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn17, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue4, {
                      children: "Category Rank"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(K6, {
                      children: ["22/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K1, {
                        children: "19,978"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn14, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GraySquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GrayRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow9, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Mask2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image5, {
                      src: "https://file.rendit.io/n/mzqFbapJmKl2VNtxUGbd.svg"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element5, {
                      children: "+5%"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn5, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract2, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow12, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn22, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue4, {
                      children: "Overall Privy Rank"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(K6, {
                      children: ["31/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K1, {
                        children: "19,878"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn14, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GraySquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GrayRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow13, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Mask2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image5, {
                      src: "https://file.rendit.io/n/mzqFbapJmKl2VNtxUGbd.svg"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element3, {
                    children: "+13%"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn25, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract3, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn26, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow14, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn27, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue4, {
                        children: "Reviews Flagged"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K6, {
                        children: "24"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn14, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GraySquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GrayRectangle, {})]
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow15, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                      src: "https://file.rendit.io/n/JGXV0ZgFus4FvQamoSr9.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element4, {
                      children: "-11%"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image10, {
                  src: "https://file.rendit.io/n/7hRMe9KdDcLsgVjZO4Jw.svg"
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow16, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn30, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn31, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract6, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow17, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow18, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ProfileVists, {
                    children: "Profile Vists "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn32, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn1, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text6, {
                        children: "Day"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn35, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text7, {
                          children: "Month"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text8, {
                            children: "Year"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line9, {
                      src: "https://file.rendit.io/n/bupj0GlBio8j92qXhsG2.svg"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow20, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn38, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text9, {
                    children: "10,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text10, {
                    children: "8,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text11, {
                    children: "6,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text12, {
                    children: "4,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text13, {
                    children: "2,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text14, {
                    children: "1,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text15, {
                    children: "0"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn39, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow21, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element59, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image11, {
                      src: "https://file.rendit.io/n/EeKwWG9MlkLMWj4U3f76.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image12, {
                      src: "https://file.rendit.io/n/X3r6aJDG4oSO1j0ZAKI7.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image13, {
                      src: "https://file.rendit.io/n/4xf8lvYrNUy1whFLstRm.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image14, {
                      src: "https://file.rendit.io/n/nLkYG5Zi9TL0nXqbe736.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image15, {
                      src: "https://file.rendit.io/n/nLkYG5Zi9TL0nXqbe736.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image16, {
                      src: "https://file.rendit.io/n/WGtLUODOeiVG8alJFbQz.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image17, {
                      src: "https://file.rendit.io/n/p4I07WP4mGo9TJZonIyf.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image16, {
                      src: "https://file.rendit.io/n/VjOxBMapvo7bmyiDfkmL.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image16, {
                      src: "https://file.rendit.io/n/abvazPh5YCoRK3bBCsee.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image20, {
                      src: "https://file.rendit.io/n/WGtLUODOeiVG8alJFbQz.svg"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow22, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text16, {
                      children: "Oct 24"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text17, {
                      children: "Oct 23"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text18, {
                      children: "Oct 22"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text19, {
                      children: "Oct 21"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text20, {
                      children: "Oct 20"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn40, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text21, {
                    children: "+600"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line1, {
                    src: "https://file.rendit.io/n/35hnkGQTagMHFtxSC4ne.svg"
                  })]
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn2, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow23, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                src: "https://file.rendit.io/n/WbWttt55V4l8jQ5KIHZ6.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn42, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Reviews1, {
                  children: " 10 Reviews "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse18, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                    })
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow24, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Text22, {
                children: ["Excellent", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Excellent, {
                  children: " "
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow25, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn45, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text23, {
                  children: "80% ( 8 )"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow26, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text24, {
                children: "Good"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow27, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn46, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle1, {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text25, {
                  children: "20% ( 2 )"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn47, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow28, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Avarage, {
                  children: "Avarage "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow29, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle2, {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text26, {
                    children: "0% ( 0 )"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow30, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Poor, {
                  children: "Poor "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow29, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle2, {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text26, {
                    children: "0% ( 0 )"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow32, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Bad, {
                  children: "Bad "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn3, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle2, {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text26, {
                    children: "0% ( 0 )"
                  })]
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn48, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow34, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn49, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn50, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract5, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow35, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow36, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text29, {
                      children: "Engagement"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn51, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse5, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn52, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle2, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle3, {})]
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn53, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn55, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text30, {
                            children: "2022"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn56, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text7, {
                              children: "2021"
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text8, {
                                children: "2020"
                              })
                            })
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line9, {
                          src: "https://file.rendit.io/n/bupj0GlBio8j92qXhsG2.svg"
                        })]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn59, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn60, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow38, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn61, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text33, {
                          children: "100"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text34, {
                          children: "80"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text35, {
                          children: "60"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text36, {
                          children: "30"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text37, {
                          children: "20"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text38, {
                          children: "10"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text39, {
                          children: "0"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn62, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn63, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                            src: "https://file.rendit.io/n/tY9muJheEJaMHFoV0K2h.svg"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn64, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line3, {
                              src: "https://file.rendit.io/n/fZKH2ppVSEHnwZ1SqwJi.svg"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow39, {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element59, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow40, {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4, {
                                    src: "https://file.rendit.io/n/A7lgsT8ASXVqIk0XWzCK.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image23, {
                                    src: "https://file.rendit.io/n/OlZfIcM5MQ77ng1JxZqL.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line5, {
                                    src: "https://file.rendit.io/n/A7lgsT8ASXVqIk0XWzCK.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image24, {
                                    src: "https://file.rendit.io/n/YKp9errI7w5RnNQn5MQc.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line6, {
                                    src: "https://file.rendit.io/n/A7lgsT8ASXVqIk0XWzCK.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image25, {
                                    src: "https://file.rendit.io/n/SH1T7RBmUN7Vx0WvPRwS.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line7, {
                                    src: "https://file.rendit.io/n/A7lgsT8ASXVqIk0XWzCK.svg"
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image26, {
                                    src: "https://file.rendit.io/n/WGtLUODOeiVG8alJFbQz.svg"
                                  })]
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line8, {
                                  src: "https://file.rendit.io/n/fZKH2ppVSEHnwZ1SqwJi.svg"
                                })]
                              })
                            })]
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow41, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Jan, {
                            children: "Jan "
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Feb, {
                            children: "Feb "
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text40, {
                            children: "March"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text41, {
                            children: "April"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Feb, {
                            children: "May "
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text42, {
                            children: "June"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Feb, {
                            children: "July "
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text43, {
                            children: "Aug"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text44, {
                            children: "Sep"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text45, {
                            children: "Oct"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text46, {
                            children: "Nov"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text47, {
                            children: "Dec"
                          })]
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image27, {
                      src: "https://file.rendit.io/n/292lZ38BUHmGBU3Ap4CE.svg"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow42, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavyBlueSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                        children: "Dashboard Vists"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NeonCarrotSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ReviewResponse, {
                        children: "Review Response "
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlackSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                        children: "Review invitation sent"
                      })]
                    })]
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn66, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn3, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow46, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                      src: "https://file.rendit.io/n/WbWttt55V4l8jQ5KIHZ6.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn69, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SourceOfReviews, {
                        children: " Source of Reviews "
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse19, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                          })
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow47, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text23, {
                      children: "Organic "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow25, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn45, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text23, {
                        children: "80% ( 8 )"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow49, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text51, {
                      children: "Invite"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow27, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn46, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle1, {})]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text25, {
                        children: "20% ( 2 )"
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow51, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow52, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text53, {
                        children: "organic"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow53, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Invite1, {
                        children: "invite "
                      })]
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn4, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow54, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                      src: "https://file.rendit.io/n/RjdAnUIchAEWXA7ZH0BY.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn76, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text54, {
                        children: "Avarage star rating"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse17, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                          })
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn80, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow55, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text55, {
                          children: "Past 7 Days"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn81, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle7, {})
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text56, {
                          children: "4.5"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow56, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow57, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text57, {
                            children: "Current month"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn46, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle8, {})]
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text58, {
                          children: "2.2"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow58, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text59, {
                          children: "Current year"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn83, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle8, {})]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text60, {
                          children: "1.5"
                        })]
                      })]
                    })
                  })]
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow59, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn84, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract7, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow35, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow61, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ProfileVists, {
                    children: ["Reviews", "  "]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn85, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn87, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn5, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Days, {
                          children: "Days "
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn89, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Months, {
                            children: "Months "
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text61, {
                              children: "Years"
                            })
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line9, {
                        src: "https://file.rendit.io/n/bupj0GlBio8j92qXhsG2.svg"
                      })]
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn92, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow63, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn93, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text62, {
                      children: "1,000"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text63, {
                      children: "800"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text63, {
                      children: "600"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text65, {
                      children: "400"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text63, {
                      children: "200"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text67, {
                      children: "100"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text68, {
                      children: "0"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow64, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element61, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image30, {
                      src: "https://file.rendit.io/n/knE2iLWBkl6IF8M4EqIM.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image31, {
                      src: "https://file.rendit.io/n/GMM8PyEo6ro4Whmshh5M.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image32, {
                      src: "https://file.rendit.io/n/ywszJj3UNE6JjK61Mc1E.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image33, {
                      src: "https://file.rendit.io/n/GMM8PyEo6ro4Whmshh5M.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image34, {
                      src: "https://file.rendit.io/n/YHVTjyYbeqKA7MbIJBXi.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image35, {
                      src: "https://file.rendit.io/n/YgnzOJL3XtSXadlzlXQB.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image36, {
                      src: "https://file.rendit.io/n/YgnzOJL3XtSXadlzlXQB.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image35, {
                      src: "https://file.rendit.io/n/soXRqtIothv5Td7zyRbP.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image35, {
                      src: "https://file.rendit.io/n/soXRqtIothv5Td7zyRbP.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image39, {
                      src: "https://file.rendit.io/n/soXRqtIothv5Td7zyRbP.svg"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image40, {
                    src: "https://file.rendit.io/n/DShxWzk3ySOLJsbO9K9c.svg"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow65, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text69, {
                    children: "Oct 25"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text70, {
                    children: "Oct 24"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text69, {
                    children: "Oct 23"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text72, {
                    children: "Oct 22"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text73, {
                    children: "Oct 21"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn94, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract9, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow66, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow67, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ProfileVists, {
                      children: ["Reviews insights", "  "]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn32, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow68, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn6, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow69, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image41, {
                          src: "https://file.rendit.io/n/kJ96BYoTiWCt9iknvIHy.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text74, {
                          children: "Sort"
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn1, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text6, {
                              children: "Age"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn99, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text7, {
                                children: "Gender"
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text77, {
                                  children: "Location"
                                })
                              })
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line9, {
                            src: "https://file.rendit.io/n/bupj0GlBio8j92qXhsG2.svg"
                          })]
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn102, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow71, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn103, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text65, {
                        children: "5 Star"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text79, {
                        children: "4 Star"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text62, {
                        children: "3 Star"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text81, {
                        children: "2 Star"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text68, {
                        children: "1 Star"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow72, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow73, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element62, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image42, {
                          src: "https://file.rendit.io/n/piKHRzvOdtjV1Mourgyy.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image43, {
                          src: "https://file.rendit.io/n/OkJvHa4Df3opQoLafUhw.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image44, {
                          src: "https://file.rendit.io/n/h3NC8PzYSPYdbDQaPuxf.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image45, {
                          src: "https://file.rendit.io/n/p3kANigebEEx52KF6BYa.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image46, {
                          src: "https://file.rendit.io/n/8pwvfTGqpiTNoBoBwruZ.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image47, {
                          src: "https://file.rendit.io/n/EoPQAbPCNRnrFjErbTZ6.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image47, {
                          src: "https://file.rendit.io/n/H2NrwedgJiqoxcomhamv.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image47, {
                          src: "https://file.rendit.io/n/ueg3SPmdWY2spSGGUa1e.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image47, {
                          src: "https://file.rendit.io/n/ueg3SPmdWY2spSGGUa1e.svg"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image51, {
                          src: "https://file.rendit.io/n/CfcW6oFUL1e1uHG6ix4V.svg"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn104, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element63, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
                          children: "18-24 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn105, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element64, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
                          children: "25-34 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn106, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element65, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
                          children: "35-44 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn107, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element66, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text47, {
                          children: "45-54 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn108, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element67, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
                          children: "55-64 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn109, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element68, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text47, {
                          children: "65-74 Years"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn110, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element69, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
                          children: "75 Years & older"
                        })]
                      })]
                    })]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn111, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn112, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn8, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow74, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                      src: "https://file.rendit.io/n/xfEW7ZLWy5kmvXSJVupK.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn114, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text90, {
                        children: "Reviews invites"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                          })
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn117, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn118, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn119, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle4, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle10, {})]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn120, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow75, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text91, {
                            children: "Accepted ( 50 )"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text74, {
                            children: "Used ( 50 )"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn121, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn9, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn122, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn123, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text93, {
                      children: "Reviews response"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                        })
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow76, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn129, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TotalReviews3, {
                              children: ["Total Reviews", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TotalReviews, {
                                children: " "
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TotalReviews1, {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "  "]
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TotalReviews2, {
                                children: " "
                              })]
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text94, {
                              children: "2000"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse10, {
                              src: "https://file.rendit.io/n/JkEdEhEXwWJdteuZaxYC.svg"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse11, {
                              src: "https://file.rendit.io/n/ghNqAAXGEez8rBd44XUi.svg"
                            })]
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow77, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn130, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow78, {
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonSquare2, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text95, {
                                children: "responded"
                              })]
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow79, {
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfSquare2, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text74, {
                                children: "not responded"
                              })]
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn131, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text97, {
                              children: "%50"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text98, {
                              children: "%50"
                            })]
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn132, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonFlexColumn, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text99, {
                  children: "Top"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn10, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow80, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                      src: "https://file.rendit.io/n/X5dawTt3EremZbQAXPIe.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn134, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TopPerformingTags, {
                        children: ["Top performing tags", " "]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn43, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse21, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                          })
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn138, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow81, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text100, {
                          children: "1-"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                              children: "#lorem ipsum"
                            })
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow82, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                          children: "2-"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                              children: "#lorem ipsum"
                            })
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn141, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow83, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                            children: "3-"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                                children: "#lorem ipsum"
                              })
                            })
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow83, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                            children: "4-"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                                children: "#lorem ipsum"
                              })
                            })
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow85, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                            children: "5-"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                                children: "#lorem ipsum"
                              })
                            })
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow86, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                            children: "6-"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn11, {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text101, {
                                children: "#lorem ipsum"
                              })
                            })
                          })]
                        })]
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn30, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn17, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {
                        src: "https://file.rendit.io/n/ah3hQ1SUVNeFGgZmhCul.svg"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn149, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Text112, {
                          children: ["Avarage rank on", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Google search"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text113, {
                          children: "50"
                        })]
                      })]
                    })
                  })
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow88, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn150, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract8, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow89, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow90, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text29, {
                    children: "Organic reach"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn85, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse6, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn33, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteRectangle, {})]
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn5, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Days, {
                        children: "Days "
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn89, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Months, {
                          children: "Months "
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text61, {
                            children: "Years"
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line9, {
                      src: "https://file.rendit.io/n/bupj0GlBio8j92qXhsG2.svg"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow92, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn157, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text116, {
                    children: "100"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text116, {
                    children: "80"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text118, {
                    children: "60"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text119, {
                    children: "40"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text116, {
                    children: "20"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text121, {
                    children: "10"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text122, {
                    children: "0"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow93, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element70, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image54, {
                    src: "https://file.rendit.io/n/vXJLLSEdKmguurhcYYUc.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image55, {
                    src: "https://file.rendit.io/n/UIiQEsGlmqWsodsGf0gb.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image56, {
                    src: "https://file.rendit.io/n/6KO54vBD5Pvm9HYommVM.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image57, {
                    src: "https://file.rendit.io/n/UIiQEsGlmqWsodsGf0gb.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image58, {
                    src: "https://file.rendit.io/n/vXJLLSEdKmguurhcYYUc.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image59, {
                    src: "https://file.rendit.io/n/LmjDijFTC3X27l4zKS3W.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image60, {
                    src: "https://file.rendit.io/n/P6QWKeJ2rpUX33Fu9BWd.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image59, {
                    src: "https://file.rendit.io/n/7tV8KzKiZbhcITtU2c07.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image59, {
                    src: "https://file.rendit.io/n/7tV8KzKiZbhcITtU2c07.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image63, {
                    src: "https://file.rendit.io/n/yfQTUubk56Q9IMTjXuke.svg"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image64, {
                  src: "https://file.rendit.io/n/YM4VNcfM4d5WfxFBFpsS.svg"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow94, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text69, {
                  children: "Oct 25"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text70, {
                  children: "Oct 24"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text69, {
                  children: "Oct 23"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text72, {
                  children: "Oct 22"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text73, {
                  children: "Oct 21"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow95, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavyBlueSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(DailyGoogleRanking, {
                    children: ["Daily Google Ranking", " "]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow97, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlackSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text128, {
                    children: "Daily click thru-rate"
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn158, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn159, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteFlexColumn19, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn161, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UsefulReviews, {
                      children: "Useful reviews "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text129, {
                      children: "50"
                    })]
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow98, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CornflowerFlexColumn, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow99, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Text130, {
                    children: ["Send ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text131, {
                      children: "Review"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Paragraph, {
                      children: [" ", "invites and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "get more accurate ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "insights", " "]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn162, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse13, {
                      src: "https://file.rendit.io/n/17hsWXPlBqTLg8ZOMCqj.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image65, {
                      src: "https://file.rendit.io/n/i5g6hbk91bXHk5fH3RBa.svg"
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MelonText, {
                  children: "Send"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse16, {
                src: "https://file.rendit.io/n/SQKbEXweykaD29IswGgu.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn163, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse14, {
                  src: "https://file.rendit.io/n/GKj7vQVfzbL9ahe13SDM.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse15, {
                  src: "https://file.rendit.io/n/KMxCMPwinWgGtYBdlQzJ.svg"
                })]
              })]
            })]
          })]
        })]
      })]
    })]
  });
};

var Notification1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexColumn5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 210px;\n  height: 99px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Ellipse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 2.92px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/j7xL3oaQLlWiX1rgsf3D.svg\");\n"])));
var FlexColumn9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  gap: 0.39px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var GraySquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 1.17px;\n  border-radius: 6px;\n  background-color: #9e9e9e;\n"])));
var GrayRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 3.11px;\n  border-radius: 6px;\n  background-color: #9e9e9e;\n"])));
var Image3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 17.5px;\n  height: 17.5px;\n"])));
var ClearedQeue4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var K6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var Mask2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 5.66px 5.95px 6.13px 5.82px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/M6lDyeFFIN24OHxxQExv.svg\");\n"])));
var Image5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 5.73px;\n"])));
var Element5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  height: 16px;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n"])));
var FlexColumn14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 6px 0px 0px 0px;\n"])));
var K1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: contents;\n  color: #ffffff;\n  font-size: 16px;\n  font-family: Konnect;\n"])));
var FlexColumn30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n"])));
var ProfileVists = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexColumn32 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 6px 0px 0px 0px;\n"])));
var Ellipse6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/a5oOEWSPAL9vFcDGRvGA.svg\");\n"])));
var FlexColumn33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  gap: 0.56px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var WhiteSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  height: 1.67px;\n  border-radius: 6px;\n  background-color: #ffffff;\n"])));
var WhiteRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  height: 4.44px;\n  border-radius: 6px;\n  background-color: #ffffff;\n"])));
var WhiteFlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  height: 18px;\n  gap: 3.5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0px 44px 0px 60px;\n  background-color: #f9f9f9;\n"])));
var FlexRow19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 158px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var Text6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 0.09px 46px 0px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 22px 0px 12px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 3px;\n"])));
var Line9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 19px;\n  height: 0.5px;\n"])));
var Element59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 597px;\n  height: 215px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Image16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  position: relative;\n  margin: 0px 98.2px 0px 0px;\n"])));
var Image21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n"])));
var FlexColumn43 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  gap: 16.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var FlexColumn45 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 3.82px 0px 0px 0px;\n"])));
var TimberwolfFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 38.7px 0px 0px;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  height: 6.3px;\n  border-radius: 5px;\n  background-color: #ff7682;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n"])));
var Text23 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  width: 51px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow27 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  gap: 16.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexColumn46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  width: 44.6px;\n  height: 11.5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  padding: 2.55px 127px 2.55px 0px;\n"])));
var TimberwolfRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  width: 172px;\n  height: 6.3px;\n  left: 0px;\n  top: 7.64px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  height: 6.37px;\n  position: relative;\n  border-radius: 5px;\n  background-color: #ff7682;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n"])));
var Text25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  width: 49.7px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow29 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  gap: 17.8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var TimberwolfFlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  height: 6.3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 4.5px 0px 0px 0px;\n  padding: 0px 164px 0px 0px;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  height: 5.09px;\n  border-radius: 5px;\n  background-color: #ff7682;\n"])));
var Text26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  width: 44.6px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow35 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n"])));
var Text29 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Feb = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  margin: 0px 28px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: pre-wrap;\n"])));
var Text47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow43 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  gap: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var NavyBlueSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #008cfb;\n"])));
var Text48 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var WildWatermelonRectangle8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  height: 6.37px;\n  position: relative;\n  border-radius: 5px;\n  background-color: #ff7682;\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n"])));
var FlexColumn85 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 0px 6px 0px;\n"])));
var WhiteFlexColumn5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  height: 18px;\n  gap: 3.5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0px 44px 0px 61px;\n  background-color: #f9f9f9;\n"])));
var Days = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 0.09px 43px 0px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexColumn89 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 30px 0px 0px;\n"])));
var Months = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 20px 0px 12px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 3px;\n"])));
var Text62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  margin: 0px 0px 20px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  margin: 0px 0px 21px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  margin: 0px 0px 19px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text68 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Image35 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 219px;\n  position: relative;\n  margin: 0px 99px 0px 0px;\n"])));
var Text69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  margin: 0px 66px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text70 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  margin: 0px 67px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text72 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  margin: 0px 69px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text73 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text74 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  font-size: 8px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Image47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 214px;\n  position: relative;\n  margin: 0px 95.1px 0px 0px;\n"])));
var Text83 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var WhiteFlexColumn11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 6.37px 58.6px 7.64px 58.6px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n"])));
var Text101 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  height: 17.8px;\n  font-size: 11px;\n  font-family: Konnect;\n  text-decoration: underline;\n"])));
var Text102 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 17.8px;\n  align-self: flex-start;\n  margin: 6.37px 0px 0px 0px;\n  font-size: 11px;\n  font-family: Konnect;\n"])));
var FlexRow83 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  gap: 5.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 20.4px 0px;\n"])));
var Text116 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  height: 16.5px;\n  margin: 0px 0px 13.2px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n"])));
var Image59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 183px;\n  position: relative;\n  margin: 0px 96.1px 0px 0px;\n"])));
var DesktopRootRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  width: -1440px;\n  height: 917px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 660px 1440px;\n  border-radius: 40px;\n  background-color: #f2f2f2;\n  overflow: hidden;\n"])));
var MelonFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  width: 90px;\n  height: 641px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 65px 97px 1531px 20px;\n  border-radius: 40px;\n  background-color: #ffb8aa;\n"])));
var Ativo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  width: 90px;\n  height: 27px;\n"])));
var FlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n  width: 70px;\n  height: 509px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0px 6px 0px 14px;\n"])));
var Image1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n  width: 28.5px;\n  height: 487px;\n  left: 34.8px;\n  top: 21.6px;\n  position: absolute;\n"])));
var WhiteSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  height: 70px;\n  position: relative;\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n"])));
var WhiteFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  width: 1312px;\n  height: 2138px;\n  left: 128px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 41px 0px 58px 0px;\n  border-radius: 40px;\n  background-color: #f5f6fa;\n"])));
var FlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 22px 38px;\n"])));
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n"])));
var Text1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n  color: #1f192f;\n  font-size: 32px;\n  font-weight: 700;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n  width: 761px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: stretch;\n  align-items: center;\n  padding: 0px 0px 5px 0px;\n"])));
var FlexRow2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n  width: 370px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 21.3px 11.1px 21px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/3q9wpMM8G6Tit6pQxmm1.svg\");\n"])));
var Text2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0px 0.87px 0px;\n  font-size: 12px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n  width: 17.9px;\n  height: 17.9px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Fill = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n  width: 4.17px;\n  height: 4.17px;\n  left: 5.96px;\n  top: 2.38px;\n  position: absolute;\n"])));
var Fill1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n  width: 18.9px;\n  height: 18.9px;\n  position: relative;\n"])));
var FlexRow3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n  gap: 50.6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n  padding: 5px 0px;\n"])));
var Notification = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n  height: 16.1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.94px 0.41px 1.94px 9px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/B0t2v4uk2j2Zx4XKhv4h.svg\");\n"])));
var Oval = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n  height: 7px;\n"])));
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n  gap: 21px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n"])));
var FlexRow4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n  width: 146px;\n  height: 30px;\n  gap: 7.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var ProfileIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n  width: 31px;\n  height: 31px;\n"])));
var DanielleCampbell = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["\n  color: #54657e;\n  font-size: 12px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Path = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["\n  width: 8.01px;\n  height: 4.11px;\n  margin: 0px 0px 12.9px 0px;\n"])));
var Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n  width: 1312px;\n  height: 1px;\n  align-self: stretch;\n  margin: 0px 0px 23px 0px;\n"])));
var FlexColumn2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 47px 38px;\n"])));
var Text3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  font-size: 32px;\n  font-weight: 600;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 29px 36px;\n"])));
var FlexColumn4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["\n  width: 1226px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Image2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n  width: 281px;\n  height: 19.8px;\n  left: 678px;\n  top: 18.5px;\n  position: absolute;\n"])));
var FlexRow5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n  height: 101px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n"])));
var Ract = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["\n  gap: 53.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 13px 25.1px 17.5px 31px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/SvhjXX3ape0in500YN9B.svg\");\n"])));
var FlexColumn6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["\n  width: 93px;\n  gap: 9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n"])));
var FlexRow6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["\n  width: 93px;\n  position: relative;\n  gap: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 6px 0px 0px 0px;\n"])));
var K = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["\n  position: relative;\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var ClearedQeue = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["\n  width: 91.2px;\n  height: 19.5px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n"])));
var FlexColumn7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["\n  width: 53px;\n  height: 43px;\n  position: relative;\n  gap: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-end;\n"])));
var FlexColumn8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 6px 0px 0px;\n"])));
var Text5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  color: #191919;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["\n  height: 18.5px;\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])));
var Element1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n  width: 27px;\n  height: 18px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Image4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n  width: 15.4px;\n  height: 24px;\n  margin: 7.5px 0px 0px 0px;\n"])));
var Ract4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["\n  gap: 34px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 13px 27px 19.5px 29px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/SvhjXX3ape0in500YN9B.svg\");\n"])));
var FlexRow8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n  gap: 9px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n  width: 95px;\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n"])));
var FlexColumn12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexColumn13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 0.52px 0px 0px 0px;\n"])));
var Image6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["\n  width: 17px;\n  height: 16px;\n  margin: 9px 0px 0px 0px;\n"])));
var FlexColumn16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["\n  width: 210px;\n  height: 99px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var Ract1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["\n  width: 112px;\n  height: 81px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 13px 77px 13px 29px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/SvhjXX3ape0in500YN9B.svg\");\n"])));
var FlexRow10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["\n  gap: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexColumn17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["\n  width: 102px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n"])));
var Ract2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["\n  width: 132px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 13px 57px 18.5px 29px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/SvhjXX3ape0in500YN9B.svg\");\n"])));
var FlexRow12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["\n  gap: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexColumn22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n  width: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexRow13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["\n  height: 19.5px;\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])));
var Element3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["\n  width: 31px;\n  height: 18px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["\n  width: 210px;\n  height: 99px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: center;\n"])));
var Ract3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["\n  width: 182px;\n  gap: 27px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 13px 18px 18.5px 18px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/SvhjXX3ape0in500YN9B.svg\");\n"])));
var FlexColumn26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n  width: 125px;\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexRow14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["\n  gap: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn27 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["\n  width: 113px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexRow15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["\n  height: 18.5px;\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Element4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Image10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["\n  width: 19px;\n  height: 19px;\n  margin: 4px 0px 0px 0px;\n"])));
var FlexRow16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["\n  gap: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: center;\n  margin: 0px 0px 9.85px 0px;\n  padding: 0px 51.1px 0px 38px;\n"])));
var FlexColumn31 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["\n  height: 330px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Ract6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n  width: 753px;\n  gap: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 27px 24px 19px 34px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/20YmzHeNhvpMevUZjRb7.svg\");\n"])));
var FlexRow17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: stretch;\n  align-items: flex-end;\n  padding: 0px 0px 0px 4px;\n"])));
var FlexRow18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["\n  gap: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var FlexColumn35 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 33px 0px 0px;\n"])));
var FlexRow20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["\n  width: 658px;\n  position: relative;\n  gap: 19.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var FlexColumn38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["\n  width: 39.4px;\n  height: 247px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n"])));
var Text9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  margin: 0px 0px 18.1px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  margin: 0px 0px 14.6px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var Text11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  margin: 0px 0px 13.9px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var Text12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  margin: 0px 0px 18.3px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var Text13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  margin: 0px 0px 16.6px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var Text14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  margin: 0px 0px 12.8px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var Text15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  text-align: right;\n"])));
var FlexColumn39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["\n  height: 247px;\n  position: relative;\n  gap: 5.2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var FlexRow21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["\n  width: 397px;\n  height: 217px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 102px 0px 100px;\n"])));
var Image11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 1px;\n  left: 0px;\n  top: 71px;\n  position: absolute;\n"])));
var Image12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 1px;\n  left: 0px;\n  top: 35.9px;\n  position: absolute;\n"])));
var Image13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 1px;\n  left: 0px;\n  top: 106px;\n  position: absolute;\n"])));
var Image14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 1px;\n  left: 0px;\n  top: 141px;\n  position: absolute;\n"])));
var Image15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 1px;\n  left: 0px;\n  top: 176px;\n  position: absolute;\n"])));
var Image17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  position: relative;\n  margin: 0px 97.4px 0px 0px;\n"])));
var Image20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  position: relative;\n"])));
var FlexRow22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-start;\n  padding: 0px 71.5px 0px 80.8px;\n"])));
var Text16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 19.5px;\n  align-self: center;\n  margin: 0px 65.9px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  text-align: center;\n"])));
var Text17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["\n  width: 42.9px;\n  height: 15.6px;\n  margin: 0px 53.1px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  text-align: center;\n"])));
var Text18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["\n  width: 42.9px;\n  height: 15.6px;\n  margin: 0px 49.9px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  text-align: center;\n"])));
var Text19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["\n  width: 50.7px;\n  height: 15.6px;\n  margin: 1px 54.3px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  text-align: center;\n"])));
var Text20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["\n  width: 50.7px;\n  height: 15.6px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  text-align: center;\n"])));
var FlexColumn40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["\n  width: 29.9px;\n  left: 39.1px;\n  top: 135px;\n  position: absolute;\n  gap: 3.36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 29.1px 303px 33.4px 305px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/zdk9d3YeUfmvV0eKcLbG.svg\");\n"])));
var Text21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  padding: 3px 9.89px 3.64px 8px;\n  font-size: 5px;\n  font-family: Konnect;\n  white-space: nowrap;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/XibJ56bMHlgszjzNTQxv.svg\");\n"])));
var Line1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["\n  width: 0.5px;\n  height: 37px;\n  margin: 0px 0px 0px 13.5px;\n"])));
var WhiteFlexColumn2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["\n  height: 279px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 26px 42.3px 26px 26.8px;\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexRow23 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["\n  gap: 5.68px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-start;\n  margin: 0px 0px 28.3px 0px;\n  padding: 0px 7.25px;\n"])));
var FlexColumn42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["\n  width: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  padding: 13px 6.31px 10.6px 93.2px;\n"])));
var Reviews1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["\n  width: 110px;\n  height: 26.8px;\n  left: 0px;\n  top: 6.84px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Ellipse18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/xTB0Tf43rU9W2FIkyGXg.svg\");\n"])));
var FlexRow24 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["\n  gap: 7.64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n  margin: 0px 0px 20.4px 0px;\n"])));
var Text22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["\n  width: 56px;\n  height: 26.8px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var Excellent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["\n  height: 20.4px;\n  gap: 28px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 21.6px 0px;\n"])));
var Text24 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["\n  width: 35.7px;\n  height: 16.6px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexColumn47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["\n  width: 298px;\n  height: 102px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow28 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["\n  height: 19.1px;\n  gap: 10.2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 24.2px 0px;\n"])));
var Avarage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["\n  width: 53.5px;\n  height: 16.6px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["\n  gap: 34.4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 24.2px 0px;\n"])));
var Poor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["\n  width: 29.3px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow32 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["\n  height: 17.8px;\n  gap: 39.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Bad = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["\n  width: 24.2px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["\n  gap: 17.8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var TimberwolfFlexColumn3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["\n  height: 6.3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0px 164px 0px 0px;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var FlexColumn48 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["\n  width: 1226px;\n  height: 1469px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-self: stretch;\n  padding: 0px 48px 0px 38px;\n"])));
var FlexRow34 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["\n  position: relative;\n  gap: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])));
var FlexColumn49 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 16px 0px 0px 0px;\n"])));
var FlexColumn50 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["\n  height: 363px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Ract5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["\n  width: 748px;\n  gap: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 29px 25px 27px 38px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/9VxHcYpjXQRIbnXtelcm.svg\");\n"])));
var FlexRow36 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["\n  gap: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var FlexColumn51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 0px 5.7px 0px;\n"])));
var Ellipse5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["\n  height: 11px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/eaWXRNrwGT7rEv3ouavg.svg\");\n"])));
var FlexColumn52 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral(["\n  gap: 0.61px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var WhiteRectangle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["\n  height: 1.83px;\n  border-radius: 6px;\n  background-color: #ffffff;\n"])));
var WhiteRectangle3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["\n  height: 4.89px;\n  border-radius: 6px;\n  background-color: #ffffff;\n"])));
var FlexColumn53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 2px 0px 0px 0px;\n"])));
var FlexColumn55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["\n  height: 18px;\n  gap: 3.5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0px 45px 0px 59px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/nWj27U9dKelCFAxyjqFU.svg\");\n"])));
var Text30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 44px 0.91px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 39px 0px 0px;\n"])));
var FlexColumn59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["\n  gap: 10.6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 0px 73.5px 0px 8px;\n"])));
var FlexColumn60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral(["\n  width: 643px;\n  height: 249px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  padding: 0px 0px 0px 23.7px;\n"])));
var FlexRow38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  gap: 10.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var FlexColumn61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["\n  width: 36.4px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n"])));
var Text33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["\n  height: 19.5px;\n  align-self: stretch;\n  margin: 0px 0px 13.6px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n"])));
var Text34 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["\n  margin: 0px 0.39px 21.1px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text35 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["\n  margin: 0px 0.39px 19.4px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text36 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["\n  margin: 0px 0.39px 18.8px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text37 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["\n  margin: 0px 0.39px 20.1px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["\n  margin: 0px 0.39px 20.3px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["\n  margin: 0px 2.39px 0px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["\n  width: 607px;\n  height: 240px;\n  gap: 4.51px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])));
var FlexColumn63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["\n  width: 599px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 7.88px 0px 0.12px;\n"])));
var Image22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral(["\n  width: 599px;\n  height: 217px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n"])));
var FlexColumn64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral(["\n  width: 599px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Line3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  left: 452px;\n  top: 1.71px;\n  position: absolute;\n"])));
var FlexRow39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral(["\n  width: 496px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 0px 51.5px 0px 51.1px;\n"])));
var FlexRow40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral(["\n  width: 347px;\n  height: 218px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Line4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  align-self: flex-end;\n  margin: 0px 48.1px 0px 0px;\n"])));
var Image23 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  margin: 0px 49.9px 0px 0px;\n"])));
var Line5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  align-self: flex-end;\n  margin: 0px 47.4px 0px 0px;\n"])));
var Image24 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  margin: 0px 47.6px 0px 0px;\n"])));
var Line6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  align-self: flex-end;\n  margin: 0px 48.8px 0px 0px;\n"])));
var Image25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n  margin: 0px 46.2px 0px 0px;\n"])));
var Line7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  align-self: flex-end;\n  margin: 0px 51px 0px 0px;\n"])));
var Image26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 217px;\n"])));
var Line8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 216px;\n  position: relative;\n"])));
var FlexRow41 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral(["\n  height: 12.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n"])));
var Jan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral(["\n  margin: 0px 32px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: pre-wrap;\n"])));
var Text40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral(["\n  margin: 0px 23px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text41 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral(["\n  margin: 0px 29px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral(["\n  margin: 0px 27.3px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text43 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral(["\n  margin: 0px 33px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text44 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral(["\n  margin: 0px 36px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text45 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral(["\n  margin: 0px 26px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 31px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Image27 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral(["\n  height: 218px;\n  position: relative;\n"])));
var FlexRow42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral(["\n  width: 363px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0px 139px 0px 0px;\n"])));
var NeonCarrotSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #ff9501;\n"])));
var ReviewResponse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral(["\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var BlackSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #333333;\n"])));
var FlexColumn66 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral(["\n  width: 372px;\n  gap: 6.39px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n"])));
var WhiteFlexColumn3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral(["\n  height: 166px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 27px 41px 28.9px 28px;\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexRow46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral(["\n  height: 32.6px;\n  gap: 9.68px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0px 0px 34.7px 0px;\n  padding: 0px 5.98px;\n"])));
var FlexColumn69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 15.7px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-end;\n  padding: 5.54px 24.6px 5.54px 146px;\n"])));
var SourceOfReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral(["\n  width: 181px;\n  height: 26.8px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Ellipse19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/d0GB4IafRkRIangd0cdv.svg\");\n"])));
var FlexRow47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral(["\n  height: 19.1px;\n  gap: 12.7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 20.4px 0px;\n"])));
var FlexRow49 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral(["\n  height: 17.8px;\n  gap: 25.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: flex-start;\n  margin: 0px 1.27px 28.4px 0px;\n"])));
var Text51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral(["\n  width: 34.4px;\n  height: 16.6px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral(["\n  gap: 31.2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: center;\n  margin: 0px 0px 0px 90.4px;\n"])));
var FlexRow52 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral(["\n  gap: 3.18px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var WildWatermelonSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral(["\n  width: 6.37px;\n  height: 6.37px;\n  align-self: flex-start;\n  margin: 2.13px 0px 0px 0px;\n  background-color: #ff7682;\n"])));
var Text53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral(["\n  width: 38.2px;\n  height: 12.7px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var FlexRow53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral(["\n  gap: 4.22px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var TimberwolfSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral(["\n  width: 6.37px;\n  height: 6.37px;\n  align-self: flex-start;\n  margin: 2.13px 0px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var Invite1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral(["\n  width: 26.8px;\n  height: 12.7px;\n  font-size: 8px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var WhiteFlexColumn4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral(["\n  gap: 35.9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 28px 34.7px 34.4px 35.7px;\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexRow54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral(["\n  height: 30.3px;\n  gap: 16.4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 0px 3.34px;\n"])));
var FlexColumn76 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral(["\n  width: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-end;\n  padding: 6.82px 27px 9.93px 151px;\n"])));
var Text54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral(["\n  width: 189px;\n  height: 26.8px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n"])));
var Ellipse17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/idwHq5RbVL0MHnBn7gZE.svg\");\n"])));
var FlexColumn80 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral(["\n  height: 90.4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral(["\n  height: 19.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 19.1px 0px;\n"])));
var Text55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral(["\n  width: 68.8px;\n  height: 16.6px;\n  align-self: flex-start;\n  margin: 0px 26.8px 0px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexColumn81 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 16.3px 0px 0px;\n"])));
var WildWatermelonRectangle7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral(["\n  height: 6.3px;\n  border-radius: 5px;\n  background-color: #ff7682;\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n"])));
var Text56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral(["\n  width: 17.8px;\n  height: 16.6px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral(["\n  gap: 16.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 19.1px 0px;\n"])));
var FlexRow57 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral(["\n  gap: 5.09px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var Text57 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral(["\n  width: 90.4px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var Text58 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral(["\n  width: 17.8px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow58 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral(["\n  width: 299px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: center;\n"])));
var Text59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral(["\n  width: 77.7px;\n  height: 16.6px;\n  margin: 0px 17.8px 0px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexColumn83 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral(["\n  width: 86.6px;\n  height: 11.5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  margin: 0px 16.3px 0px 0px;\n  padding: 2.55px 85.3px 2.55px 0px;\n"])));
var Text60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral(["\n  width: 15.3px;\n  height: 16.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral(["\n  width: 1224px;\n  left: 38px;\n  top: 396px;\n  position: absolute;\n  gap: 44px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n"])));
var FlexColumn84 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral(["\n  width: 807px;\n  height: 864px;\n  gap: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var Ract7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral(["\n  width: 745px;\n  height: 304px;\n  gap: 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 17px 27px 17px 39px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/20YmzHeNhvpMevUZjRb7.svg\");\n"])));
var FlexRow61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral(["\n  gap: 9px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var FlexColumn87 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 1px 0px 0px 0px;\n"])));
var FlexColumn92 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral(["\n  gap: 4.88px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 68.5px 0px 4px;\n"])));
var FlexRow63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral(["\n  width: 673px;\n  position: relative;\n  gap: 19.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-end;\n"])));
var FlexColumn93 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral(["\n  width: 31px;\n  height: 233px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-end;\n"])));
var Text67 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral(["\n  margin: 0px 0px 25px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral(["\n  width: 400px;\n  height: 219px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 103px 0px 101px;\n"])));
var Element61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral(["\n  width: 602px;\n  height: 217px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Image30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral(["\n  width: 604px;\n  height: 1px;\n  left: 0px;\n  top: 71.5px;\n  position: absolute;\n"])));
var Image31 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral(["\n  width: 604px;\n  height: 1px;\n  left: 0px;\n  top: 36.2px;\n  position: absolute;\n"])));
var Image32 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral(["\n  width: 604px;\n  height: 1px;\n  left: 0px;\n  top: 107px;\n  position: absolute;\n"])));
var Image33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral(["\n  width: 604px;\n  height: 1px;\n  left: 0px;\n  top: 142px;\n  position: absolute;\n"])));
var Image34 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral(["\n  width: 604px;\n  height: 1px;\n  left: 0px;\n  top: 178px;\n  position: absolute;\n"])));
var Image36 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 219px;\n  position: relative;\n  margin: 0px 98.2px 0px 0px;\n"])));
var Image39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 219px;\n  position: relative;\n"])));
var Image40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral(["\n  width: 646px;\n  height: 184px;\n  left: 26.6px;\n  top: 43px;\n  position: absolute;\n"])));
var FlexRow65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 106px 0px 139px;\n"])));
var FlexColumn94 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral(["\n  width: 803px;\n  height: 330px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: center;\n"])));
var Ract9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral(["\n  width: 749px;\n  height: 299px;\n  gap: 32.1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 19.6px 23px 19.6px 39px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/20YmzHeNhvpMevUZjRb7.svg\");\n"])));
var FlexRow66 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: stretch;\n  align-items: flex-end;\n"])));
var FlexRow67 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral(["\n  gap: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n  padding: 0px 0px 1px 0px;\n"])));
var FlexRow68 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral(["\n  height: 19px;\n  gap: 9px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var WhiteFlexColumn6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral(["\n  height: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-end;\n  padding: 3px 7px;\n  border-radius: 5px;\n  background-color: #ebebeb;\n"])));
var FlexRow69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral(["\n  gap: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Image41 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral(["\n  width: 7px;\n  height: 6px;\n  align-self: flex-end;\n  margin: 0px 0px 1px 0px;\n"])));
var FlexColumn99 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 29px 0px 0px;\n"])));
var Text77 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 10px 0px 12px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 3px;\n"])));
var FlexColumn102 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 0px 30px;\n"])));
var FlexRow71 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral(["\n  gap: 11px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var FlexColumn103 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral(["\n  width: 35px;\n  height: 173px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 28.9px 0px;\n"])));
var Text79 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  margin: 0px 0px 19px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text81 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral(["\n  margin: 0px 0px 17px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow72 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral(["\n  width: 566px;\n  height: 195px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding: 35.9px 7.97px 0px 7.97px;\n"])));
var FlexRow73 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral(["\n  width: 385px;\n  height: 214px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 99.2px 0px 97.4px;\n"])));
var Element62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral(["\n  width: 580px;\n  height: 212px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Image42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral(["\n  width: 582px;\n  height: 1px;\n  left: 0px;\n  top: 70px;\n  position: absolute;\n"])));
var Image43 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral(["\n  width: 582px;\n  height: 1px;\n  left: 0px;\n  top: 35.4px;\n  position: absolute;\n"])));
var Image44 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral(["\n  width: 582px;\n  height: 1px;\n  left: 0px;\n  top: 105px;\n  position: absolute;\n"])));
var Image45 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral(["\n  width: 582px;\n  height: 1px;\n  left: 0px;\n  top: 139px;\n  position: absolute;\n"])));
var Image46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral(["\n  width: 582px;\n  height: 1px;\n  left: 0px;\n  top: 174px;\n  position: absolute;\n"])));
var Image51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 214px;\n  position: relative;\n"])));
var FlexColumn104 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral(["\n  width: 57px;\n  position: relative;\n  gap: 5.69px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: flex-end;\n  margin: 0px 22.1px 0px 0px;\n"])));
var Element63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral(["\n  width: 56px;\n  height: 177px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn105 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral(["\n  width: 59px;\n  position: relative;\n  gap: 3.6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 22px 0.78px 0px;\n"])));
var Element64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral(["\n  width: 56px;\n  height: 144px;\n  margin: 0px 0px 0px 0.88px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn106 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral(["\n  width: 59px;\n  position: relative;\n  gap: 4.9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0px 21.9px 0.76px 0px;\n"])));
var Element65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral(["\n  width: 56.2px;\n  height: 39.7px;\n  margin: 0px 1.06px 0px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn107 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral(["\n  width: 59.5px;\n  position: relative;\n  gap: 5.38px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 22px 0px 0px;\n"])));
var Element66 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral(["\n  width: 56px;\n  height: 109px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn108 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral(["\n  width: 59px;\n  position: relative;\n  gap: 4.9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0px 21.5px 0.21px 0px;\n"])));
var Element67 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral(["\n  width: 56.2px;\n  height: 92.3px;\n  margin: 0px 1.04px 0px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn109 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral(["\n  width: 60.3px;\n  position: relative;\n  gap: 4.69px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: flex-start;\n  margin: 0px 14.8px 0px 0px;\n"])));
var Element68 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral(["\n  width: 57px;\n  height: 178px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn110 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral(["\n  width: 77px;\n  position: relative;\n  gap: 4.9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 0.69px 0px;\n"])));
var Element69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral(["\n  width: 56.2px;\n  height: 62.8px;\n  margin: 0px 0px 0px 7.22px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexColumn111 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral(["\n  height: 864px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])));
var FlexColumn112 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 10px 0px;\n"])));
var WhiteFlexColumn8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral(["\n  gap: 22.9px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 14px 101px 16.2px 41px;\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexRow74 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral(["\n  height: 30.1px;\n  gap: 10.2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn114 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 15.5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-end;\n  padding: 5.65px 12.4px 5.65px 123px;\n"])));
var Text90 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral(["\n  width: 145px;\n  height: 26.8px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n"])));
var FlexColumn117 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral(["\n  height: 34.8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexColumn118 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral(["\n  gap: 14.1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexColumn119 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral(["\n  width: 94px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  padding: 0px 92.6px 0px 0px;\n"])));
var TimberwolfRectangle4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral(["\n  width: 187px;\n  height: 6.84px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral(["\n  height: 6.91px;\n  position: relative;\n  border-radius: 5px;\n  background-color: #ff7682;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);\n"])));
var FlexColumn120 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 0px 5px;\n"])));
var FlexRow75 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var WildWatermelonSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral(["\n  width: 6.91px;\n  height: 6.91px;\n  margin: 2px 4.09px 0px 0px;\n  border-radius: 1px;\n  background-color: #ff7682;\n"])));
var Text91 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral(["\n  width: 81.6px;\n  height: 13.8px;\n  align-self: center;\n  margin: 0px 0.44px 0px 0px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var TimberwolfSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral(["\n  width: 6.91px;\n  height: 6.91px;\n  margin: 2.15px 4.12px 0px 0px;\n  border-radius: 1px;\n  background-color: #d9d9d9;\n"])));
var FlexColumn121 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 10px 0px;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var WhiteFlexColumn9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 18.2px 63.9px 17.2px 47.4px;\n  border-radius: 20px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexColumn122 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral(["\n  gap: 10.1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n"])));
var FlexColumn123 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral(["\n  width: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  padding: 6.81px 109px 9.94px 142px;\n"])));
var Text93 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral(["\n  width: 172px;\n  height: 26.8px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n"])));
var FlexRow76 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral(["\n  gap: 30.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexColumn129 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral(["\n  width: 48.4px;\n  height: 96.8px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 48.4px 0px 0px;\n"])));
var TotalReviews3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral(["\n  left: 17.3px;\n  top: 35.5px;\n  position: absolute;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var TotalReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: pre-wrap;\n"])));
var TotalReviews1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: pre-wrap;\n"])));
var TotalReviews2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 8px;\n  font-weight: 600;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text94 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral(["\n  left: 34.3px;\n  top: 50.5px;\n  position: absolute;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Ellipse10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral(["\n  width: 58.8px;\n  height: 96.8px;\n  left: 38px;\n  top: 0px;\n  position: absolute;\n"])));
var Ellipse11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral(["\n  height: 96.5px;\n  position: relative;\n"])));
var FlexRow77 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral(["\n  gap: 13px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n  padding: 28px 0px 27.4px 0px;\n"])));
var FlexColumn130 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral(["\n  width: 70px;\n  gap: 6.26px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 5px 0px 0px 0px;\n"])));
var FlexRow78 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral(["\n  gap: 6.52px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 0px 0.11px;\n"])));
var WildWatermelonSquare2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject380 || (_templateObject380 = _taggedTemplateLiteral(["\n  width: 6.37px;\n  height: 6.37px;\n  align-self: flex-start;\n  margin: 2.78px 0px 0px 0px;\n  border-radius: 1px;\n  background-color: #fe6976;\n"])));
var Text95 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject381 || (_templateObject381 = _taggedTemplateLiteral(["\n  width: 53.5px;\n  height: 12.7px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var FlexRow79 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral(["\n  gap: 6.63px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var TimberwolfSquare2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral(["\n  width: 6.37px;\n  height: 6.37px;\n  align-self: flex-end;\n  margin: 0px 0px 0.63px 0px;\n  border-radius: 1px;\n  background-color: #d9d9d9;\n"])));
var FlexColumn131 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral(["\n  width: 31.8px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Text97 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text98 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral(["\n  height: 20.4px;\n  align-self: stretch;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: Konnect;\n"])));
var FlexColumn132 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral(["\n  width: 372px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  margin: 0px 0px 10.1px 0px;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var WildWatermelonFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral(["\n  height: 8.92px;\n  left: 262px;\n  top: 79px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 11.5px;\n  border-radius: 5px;\n  background-color: #fe6976;\n"])));
var Text99 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral(["\n  width: 8.92px;\n  height: 6.37px;\n  color: #ffffff;\n  font-size: 4px;\n  font-family: Konnect;\n"])));
var WhiteFlexColumn10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject390 || (_templateObject390 = _taggedTemplateLiteral(["\n  gap: 19.1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 25px 71.3px 24.2px 32px;\n  border-radius: 20px;\n  background-color: #ffffff;\n"])));
var FlexRow80 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject391 || (_templateObject391 = _taggedTemplateLiteral(["\n  height: 31px;\n  gap: 9.32px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn134 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral(["\n  width: 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-end;\n  padding: 7.11px 26.7px 9.64px 161px;\n"])));
var TopPerformingTags = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral(["\n  width: 197px;\n  height: 26.8px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Ellipse21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral(["\n  height: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 4.17px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/oSf9yCLq3gr7fCdLBdYg.svg\");\n"])));
var FlexColumn138 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral(["\n  height: 287px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow81 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral(["\n  height: 31.8px;\n  gap: 7.64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 19.1px 0px;\n"])));
var Text100 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral(["\n  width: 11.5px;\n  height: 17.8px;\n  align-self: flex-start;\n  margin: 6.37px 0px 0px 0px;\n  font-size: 11px;\n  font-family: Konnect;\n"])));
var FlexRow82 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral(["\n  height: 31.8px;\n  gap: 5.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 19.1px 0px;\n"])));
var FlexColumn141 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral(["\n  height: 185px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow85 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject400 || (_templateObject400 = _taggedTemplateLiteral(["\n  gap: 5.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 16.6px 0px;\n"])));
var FlexRow86 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject401 || (_templateObject401 = _taggedTemplateLiteral(["\n  gap: 5.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var WhiteFlexColumn17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 17px 18.5px 15px 19px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var Component = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral(["\n  width: 19px;\n  height: 18px;\n  align-self: flex-start;\n  margin: 1px 0px 0px 0px;\n"])));
var FlexColumn149 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral(["\n  width: 120px;\n  gap: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Text112 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  font-size: 15px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text113 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral(["\n  width: 17.2px;\n  margin: 0px 0px 0px 43px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: Konnect;\n"])));
var FlexRow88 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral(["\n  position: relative;\n  gap: 41.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexColumn150 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral(["\n  width: 803px;\n  height: 375px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Ract8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject409 || (_templateObject409 = _taggedTemplateLiteral(["\n  width: 748px;\n  height: 326px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 26px 23px 31px 40px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/5Tj48Qwf6CXMVDQIBBYi.svg\");\n"])));
var FlexRow89 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: stretch;\n  align-items: flex-end;\n  margin: 0px 0px 40px 0px;\n"])));
var FlexRow90 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral(["\n  gap: 13px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n  padding: 0px 0px 3px 0px;\n"])));
var FlexRow92 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral(["\n  width: 641px;\n  position: relative;\n  gap: 19.1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0px 0px 8px 16px;\n  padding: 0px 0px 0.33px 0px;\n"])));
var FlexColumn157 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral(["\n  width: 35.6px;\n  height: 198px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n"])));
var Text118 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral(["\n  height: 16.5px;\n  margin: 0px 0px 14.3px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n"])));
var Text119 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral(["\n  height: 16.5px;\n  margin: 0px 0px 12.1px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n"])));
var Text121 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0.61px 19px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text122 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0.61px 0px 0px;\n  color: #4f4f4f;\n  font-size: 12px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow93 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral(["\n  width: 389px;\n  height: 183px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 99.6px 0px 98.1px;\n"])));
var Element70 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral(["\n  width: 584px;\n  height: 181px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Image54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral(["\n  width: 586px;\n  height: 1px;\n  left: 0px;\n  top: 59.9px;\n  position: absolute;\n"])));
var Image55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral(["\n  width: 586px;\n  height: 1px;\n  left: 0px;\n  top: 30.3px;\n  position: absolute;\n"])));
var Image56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral(["\n  width: 586px;\n  height: 1px;\n  left: 0px;\n  top: 89.5px;\n  position: absolute;\n"])));
var Image57 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral(["\n  width: 586px;\n  height: 1px;\n  left: 0px;\n  top: 119px;\n  position: absolute;\n"])));
var Image58 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral(["\n  width: 586px;\n  height: 1px;\n  left: 0px;\n  top: 149px;\n  position: absolute;\n"])));
var Image60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 183px;\n  position: relative;\n  margin: 0px 95.3px 0px 0px;\n"])));
var Image63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 183px;\n  position: relative;\n"])));
var Image64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral(["\n  width: 629px;\n  height: 190px;\n  left: 31px;\n  top: 34.6px;\n  position: absolute;\n"])));
var FlexRow94 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: center;\n  margin: 0px 0px 32px 0px;\n  padding: 0px 168px 0px 152px;\n"])));
var FlexRow95 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral(["\n  gap: 61px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 0px 230px;\n"])));
var DailyGoogleRanking = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow97 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral(["\n  gap: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var BlackSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #000000;\n"])));
var Text128 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral(["\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn158 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral(["\n  width: 382px;\n  height: 352px;\n  gap: 37px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  align-items: flex-end;\n  padding: 11.5px 0px;\n"])));
var FlexColumn159 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 2px 0px 0px;\n"])));
var WhiteFlexColumn19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 29px 39px 27px 38.6px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexColumn161 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral(["\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var UsefulReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  font-size: 15px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text129 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral(["\n  width: 16px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: Konnect;\n"])));
var FlexRow98 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral(["\n  width: 375px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: stretch;\n  align-items: flex-end;\n  padding: 1px 0px 6.52px 6.52px;\n"])));
var CornflowerFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral(["\n  width: 344px;\n  height: 136px;\n  left: 6.53px;\n  top: 0px;\n  position: absolute;\n  gap: 11.7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 8.42px 4.75px 8.42px 24px;\n  border-radius: 10px;\n  background-color: #80cae5;\n"])));
var FlexRow99 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral(["\n  gap: 34px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Text130 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral(["\n  margin: 13.6px 0px 0px 0px;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text131 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral(["\n  display: contents;\n  color: #ffb8aa;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: Konnect;\n"])));
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral(["\n  display: contents;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexColumn162 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral(["\n  width: 117px;\n  height: 97.9px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  padding: 0px 17.3px 0px 0px;\n"])));
var Ellipse13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral(["\n  width: 68.2px;\n  height: 68.2px;\n  left: 66.1px;\n  top: 0px;\n  position: absolute;\n"])));
var Image65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral(["\n  height: 78.3px;\n  position: relative;\n"])));
var MelonText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin: 0px 0px 0px 87px;\n  padding: 5px 63px 4px 64px;\n  color: #ffffff;\n  font-size: 10px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 5px;\n  background-color: #ffb8aa;\n"])));
var Ellipse16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject450 || (_templateObject450 = _taggedTemplateLiteral(["\n  width: 48px;\n  height: 48px;\n  position: relative;\n"])));
var FlexColumn163 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject451 || (_templateObject451 = _taggedTemplateLiteral(["\n  width: 83px;\n  height: 153px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n"])));
var Ellipse14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral(["\n  width: 68.2px;\n  height: 68.2px;\n  left: 14.8px;\n  top: 0px;\n  position: absolute;\n"])));
var Ellipse15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral(["\n  height: 83px;\n  position: relative;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Desktop);

/***/ }),

/***/ "./resources/js/components/analytics/Mobile.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/analytics/Mobile.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }






var Mobile = function Mobile(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MobileRootRoot, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(IPhoneXOrNewer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LeftSide, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Time, {
          src: "https://file.rendit.io/n/2ArdTYElB3vLXnU7AAsM.svg"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notch1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(RightSide, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileSignal, {
          src: "https://file.rendit.io/n/cTuNOowvoxBXXP24cGSm.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wifi, {
          src: "https://file.rendit.io/n/hJLj5XZ0Hq80XsS50kGc.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Battery, {
          src: "https://file.rendit.io/n/VJCO3WyJ9xsHj91a4pYG.svg"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image1, {
          src: "https://file.rendit.io/n/IiLjZ3LFRo2gLnNvZg9I.svg"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image2, {
        src: "https://file.rendit.io/n/WIVuYaRFavdps0zBwQF7.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ativo, {
        src: "https://file.rendit.io/n/zUuzEFqNZv3NJyuFZ28W.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification1, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Notification, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Oval, {
            src: "https://file.rendit.io/n/tWmQur4Cc07MjO7cgpH1.svg"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ProfileIcon, {
        src: "https://file.rendit.io/n/2lNdL2NLhimMo4HBKygC.png"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Path1, {
        src: "https://file.rendit.io/n/DV0LkWsCwWryZ6vKxPt2.svg"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line, {
      src: "https://file.rendit.io/n/44n57YUsgPUHSyoIbTUM.svg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text1, {
        children: "Welcome, Danielle campbell "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text2, {
        children: "Here are your stats for today"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn1, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn5, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn6, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K, {
                    children: "3.4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue, {
                    children: "Privy Score"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text3, {
                    children: "( Average )"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow1, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                    src: "https://file.rendit.io/n/8z08qCxGbmmg9qIcaliJ.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text4, {
                    children: "+15%"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image4, {
                src: "https://file.rendit.io/n/FvdoMUisjMtlU7HHVBMY.svg"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract2, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn9, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn10, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue2, {
                  children: "Total favorites"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K3, {
                  children: "135"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow1, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                  src: "https://file.rendit.io/n/8z08qCxGbmmg9qIcaliJ.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text4, {
                  children: "+25%"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image6, {
              src: "https://file.rendit.io/n/OhyaagTZLlrxBB3bJbL3.svg"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract1, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn12, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn10, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue2, {
                children: "Category Rank"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(K3, {
                children: ["22/", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K1, {
                  children: "19,987"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow1, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                src: "https://file.rendit.io/n/8z08qCxGbmmg9qIcaliJ.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text4, {
                children: "+5%"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image8, {
            src: "https://file.rendit.io/n/wSLIxsJSKAlYuT14WY7r.svg"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn15, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract3, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn16, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue2, {
                children: "Overall Privy rank"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(K5, {
                children: ["31/ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K1, {
                  children: "19,987"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image9, {
              src: "https://file.rendit.io/n/wSLIxsJSKAlYuT14WY7r.svg"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow4, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow5, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                src: "https://file.rendit.io/n/8z08qCxGbmmg9qIcaliJ.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element4, {
                children: "+13%"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Iconparkranking, {
              src: "undefined"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract4, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn18, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn10, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClearedQeue2, {
                  children: "Reviews Flagged"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(K3, {
                  children: "24"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow6, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image3, {
                  src: "https://file.rendit.io/n/yePIjukXtB4jj04C7zUX.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text4, {
                  children: "-11%"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image12, {
              src: "https://file.rendit.io/n/2x1T9vbSEBar0kg53yFV.svg"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow7, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image13, {
              src: "https://file.rendit.io/n/qFVnhkRRMn0KGdgVfcXe.svg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Reviews1, {
              children: " 10 Reviews "
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn22, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow8, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Text5, {
                children: ["Excellent", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Excellent, {
                  children: " "
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow9, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text6, {
                  children: "80% ( 8 )"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow10, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text7, {
                children: "Good"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow11, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn1, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text8, {
                  children: "20% ( 2 )"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn24, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow12, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Avarage, {
                  children: "Avarage "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow13, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle2, {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text9, {
                    children: "0% ( 0 )"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow14, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Poor, {
                  children: "Poor "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow13, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn25, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonSquare, {})]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text9, {
                    children: "0% ( 0 )"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow16, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Poor, {
                  children: "Bad "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow17, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn3, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text9, {
                    children: "0% ( 0 )"
                  })]
                })]
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn1, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow18, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image13, {
              src: "https://file.rendit.io/n/qFVnhkRRMn0KGdgVfcXe.svg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SourceOfReviews, {
                children: " Source of Reviews "
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn29, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow19, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Organic, {
                children: "Organic "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow20, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn4, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Organic, {
                  children: "80% ( 8 )"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow21, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text13, {
                children: "invite"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow11, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn5, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text14, {
                  children: "20% ( 2 )"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow23, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow24, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle5, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text15, {
                children: "organic"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow24, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Invite1, {
                children: "invite "
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn2, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow26, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image15, {
            src: "https://file.rendit.io/n/dgDGMeaMwiKHc76OW0M9.svg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text16, {
              children: "Avarage star rating"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn34, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow27, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Poor, {
                  children: "Past 7 Days "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow28, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn36, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn6, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                    children: "4.5"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow29, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text18, {
                children: "Current month"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn7, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text19, {
                children: "3.1"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow30, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CurrentYear, {
                children: "Current year "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn8, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                children: "2.6"
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn37, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Path, {
        src: "undefined"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn38, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn3, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow31, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image13, {
                src: "https://file.rendit.io/n/zD1vBSPUgRvs5YT2zOFc.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SourceOfReviews, {
                    children: "Top performing tags "
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow32, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                children: "1-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexRow, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text22, {
                        children: "#lorem ipsum"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonText, {
                        children: "Top"
                      })]
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                children: "2-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text5, {
                children: "3-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text25, {
                children: "4-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text26, {
                children: "5-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow33, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text26, {
                children: "6-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow38, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text28, {
                children: "7-"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WhiteText, {
                      children: "#lorem ipsum"
                    })
                  })
                })
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn4, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn65, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow39, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ProfileVists, {
                children: "Profile Vists "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn5, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow40, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text29, {
                      children: "Day"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn67, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text30, {
                        children: "Month"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn69, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element58, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text31, {
                          children: "Year"
                        })]
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line5, {
                    src: "https://file.rendit.io/n/T4Bc2GsBSpC633q9ajj6.svg"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn70, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow41, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn71, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text32, {
                    children: "10,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text33, {
                    children: "8,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text34, {
                    children: "6,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text35, {
                    children: "4,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text36, {
                    children: "2,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text37, {
                    children: "1,000"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text38, {
                    children: "0"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow42, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn72, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text39, {
                      children: "+600"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image17, {
                    src: "https://file.rendit.io/n/9bfdR3YQscTA1QMtA1XO.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image18, {
                    src: "https://file.rendit.io/n/EUwAui5ktTOCsFHUGpGP.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image19, {
                    src: "https://file.rendit.io/n/ian6TwAvJfhkhxKdsEbN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image20, {
                    src: "https://file.rendit.io/n/W0PNsDsKHAfNxzp0lxV0.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                    src: "https://file.rendit.io/n/Z7T4su0b85h61tnYmalb.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/JwAAFR2YA9Fl6yroFweN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image23, {
                    src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn73, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4, {
                      src: "https://file.rendit.io/n/n5SOBciVB2IB6oIRkOJs.svg"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/022Hnizj90mUd7kLItOG.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image25, {
                    src: "https://file.rendit.io/n/jkKkdX5rK6UvpyXhPsUk.svg"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image26, {
                  src: "https://file.rendit.io/n/41tUrbQBMisQK7ES5n0U.svg"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow43, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text40, {
                  children: "Oct 24"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text41, {
                  children: "Oct 23"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text42, {
                  children: "Oct 22"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text41, {
                  children: "Oct 21"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text44, {
                  children: "Oct 20"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn74, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn75, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text45, {
                children: "Reviews Response"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn76, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse1, {
                  src: "https://file.rendit.io/n/5Ksv3JOEYvTbXECFJohH.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse2, {
                  src: "https://file.rendit.io/n/QVcktvRZlxB4rXUmdeG0.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TotalReviews, {
                  children: "Total Reviews "
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text46, {
                  children: "2000"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow44, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse3, {
                  src: "https://file.rendit.io/n/FZ59RSF5qlNkw04feot8.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Responded1, {
                  children: ["R", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Responded, {
                    children: "esponded ( 50 )"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Ellipse3, {
                  src: "https://file.rendit.io/n/T5dB0XcF36dcnBPYOPK2.svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(NotResponded1, {
                  children: ["Not responded ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Responded, {
                    children: "( 50 )"
                  })]
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn6, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn79, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text47, {
              children: "Engagement"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow45, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn80, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                  children: "100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text49, {
                  children: "60"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text50, {
                  children: "20"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text51, {
                  children: "0"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text52, {
                  children: "-20"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text53, {
                  children: "-60"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text54, {
                  children: "-100"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn81, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn82, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow46, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn72, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text55, {
                        children: "+60"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image17, {
                      src: "https://file.rendit.io/n/9bfdR3YQscTA1QMtA1XO.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image18, {
                      src: "https://file.rendit.io/n/EUwAui5ktTOCsFHUGpGP.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image19, {
                      src: "https://file.rendit.io/n/ian6TwAvJfhkhxKdsEbN.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image20, {
                      src: "https://file.rendit.io/n/W0PNsDsKHAfNxzp0lxV0.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                      src: "https://file.rendit.io/n/Z7T4su0b85h61tnYmalb.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                      src: "https://file.rendit.io/n/JwAAFR2YA9Fl6yroFweN.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image23, {
                      src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                      src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                      src: "https://file.rendit.io/n/022Hnizj90mUd7kLItOG.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image25, {
                      src: "https://file.rendit.io/n/jkKkdX5rK6UvpyXhPsUk.svg"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn84, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4, {
                      src: "https://file.rendit.io/n/n5SOBciVB2IB6oIRkOJs.svg"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow47, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text56, {
                    children: "Daily"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text57, {
                    children: "weekly"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Monthly, {
                    children: "monthly "
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow48, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow49, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavyBlueSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text58, {
                  children: "Dashboard Vists"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow49, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NeonCarrotSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ReviewResponse, {
                  children: "Review Response "
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow49, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlackSquare, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text58, {
                  children: "Review invitation sent"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn85, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text60, {
              children: "Reviews invites"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn86, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn87, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn86, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfFlexColumn9, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle9, {})
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn89, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow52, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WildWatermelonRectangle10, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text61, {
                      children: "Accepted ( 50 )"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TimberwolfRectangle2, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text62, {
                      children: "Used ( 50 )"
                    })]
                  })
                })]
              })
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn7, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text63, {
            children: "Reviews"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn92, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow53, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn93, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text64, {
                  children: "1,000"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text65, {
                  children: "800"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                  children: "600"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                  children: "400"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text48, {
                  children: "200"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text69, {
                  children: "100"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text38, {
                  children: "0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn94, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow54, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn72, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text39, {
                      children: "+600"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image17, {
                    src: "https://file.rendit.io/n/9bfdR3YQscTA1QMtA1XO.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image18, {
                    src: "https://file.rendit.io/n/EUwAui5ktTOCsFHUGpGP.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image19, {
                    src: "https://file.rendit.io/n/ian6TwAvJfhkhxKdsEbN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image20, {
                    src: "https://file.rendit.io/n/W0PNsDsKHAfNxzp0lxV0.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                    src: "https://file.rendit.io/n/Z7T4su0b85h61tnYmalb.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/JwAAFR2YA9Fl6yroFweN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image23, {
                    src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn73, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4, {
                      src: "https://file.rendit.io/n/n5SOBciVB2IB6oIRkOJs.svg"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/022Hnizj90mUd7kLItOG.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image25, {
                    src: "https://file.rendit.io/n/jkKkdX5rK6UvpyXhPsUk.svg"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image46, {
                  src: "https://file.rendit.io/n/uDL6ZaICZei1NtB9wQZI.svg"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow47, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text56, {
                children: "Daily"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text57, {
                children: "weekly"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Monthly, {
                children: "monthly "
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow56, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UsefulReviews, {
              children: "Useful reviews "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text74, {
              children: "50"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn20, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Ract5, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow57, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ReviewsInsights, {
            children: ["Reviews insights", "  "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn8, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn99, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow52, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text75, {
                    children: "age"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn100, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text30, {
                      children: "Gender"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn101, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text77, {
                        children: "location"
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line6, {
                src: "https://file.rendit.io/n/rFD3xZHvZt10ggvfALH3.svg"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn103, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow59, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn106, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text78, {
                    children: "5 star"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text79, {
                    children: "4 star"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text80, {
                    children: "3 start"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text81, {
                    children: "2 star"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text82, {
                    children: "1 star"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow60, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow61, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element59, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image47, {
                      src: "https://file.rendit.io/n/DZd5Yrs0wx13fYVnBNRQ.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image48, {
                      src: "https://file.rendit.io/n/545s1v3UuCgZxWCqC7Hb.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image49, {
                      src: "https://file.rendit.io/n/8PLv3OxvRGYRVEN94znP.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image50, {
                      src: "https://file.rendit.io/n/cuy5m6JUVcMqUxNorBQw.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image51, {
                      src: "https://file.rendit.io/n/vyBgZ79SYJev3d9i94Yi.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image52, {
                      src: "https://file.rendit.io/n/kkh6Kmi2RBTb67XeECFI.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image53, {
                      src: "https://file.rendit.io/n/0PBLyXF3jBzhPYECmThT.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element60, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image54, {
                      src: "https://file.rendit.io/n/3Nk4AGfbJbVPVN51FoZ3.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element61, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element62, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image55, {
                      src: "https://file.rendit.io/n/3Nk4AGfbJbVPVN51FoZ3.svg"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image56, {
                      src: "https://file.rendit.io/n/kkh6Kmi2RBTb67XeECFI.svg"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element63, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow62, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element64, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element65, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Element66, {})]
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow63, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
              children: "18-24 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
              children: "25-34 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text83, {
              children: "35-44 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text86, {
              children: "45-54 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text86, {
              children: "55-64 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text86, {
              children: "65-74 Years"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text86, {
              children: "75 Years & older"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn107, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn2, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(WhiteFlexColumn9, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text90, {
            children: "Organic reach"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow64, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn109, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text64, {
                children: "100"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text92, {
                children: "80"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text93, {
                children: "60"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text94, {
                children: "40"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text95, {
                children: "20"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text96, {
                children: "10"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text97, {
                children: "0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn110, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexColumn111, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow46, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn72, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text39, {
                      children: "+600"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image17, {
                    src: "https://file.rendit.io/n/9bfdR3YQscTA1QMtA1XO.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image18, {
                    src: "https://file.rendit.io/n/EUwAui5ktTOCsFHUGpGP.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image19, {
                    src: "https://file.rendit.io/n/ian6TwAvJfhkhxKdsEbN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image20, {
                    src: "https://file.rendit.io/n/W0PNsDsKHAfNxzp0lxV0.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image21, {
                    src: "https://file.rendit.io/n/Z7T4su0b85h61tnYmalb.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/JwAAFR2YA9Fl6yroFweN.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image23, {
                    src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image22, {
                    src: "https://file.rendit.io/n/022Hnizj90mUd7kLItOG.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Image25, {
                    src: "https://file.rendit.io/n/jkKkdX5rK6UvpyXhPsUk.svg"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FlexColumn113, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Line4, {
                    src: "https://file.rendit.io/n/n5SOBciVB2IB6oIRkOJs.svg"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow66, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text99, {
                  children: "25 oct"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text100, {
                  children: "24 oct"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text100, {
                  children: "23 oct"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text102, {
                  children: "22 oct"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text86, {
                  children: "21 oct"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow67, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow68, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavyBlueSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ReviewResponse, {
                children: "Daily Google Ranking "
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow69, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlackSquare1, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text104, {
                children: "Daily click thru-rate"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow70, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {
              src: "https://file.rendit.io/n/8THiKXLDIiI240uMwd9P.svg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FlexRow71, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text105, {
                children: "Avarage Ranking on Google search"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text74, {
                children: "50"
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HomeIndicator1, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HomeIndicator, {})
    })]
  });
};

var FlexColumn2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 17.5px;\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Image3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 17.5px;\n  height: 17.5px;\n"])));
var Text4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 46px;\n  height: 16px;\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n"])));
var FlexColumn10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var ClearedQeue2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var K3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var K1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: contents;\n  color: #ffffff;\n  font-size: 16px;\n  font-family: Konnect;\n"])));
var FlexColumn20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 20px 0px;\n"])));
var Image13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  align-self: flex-end;\n"])));
var Text5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var WildWatermelonRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 7px;\n  background-color: #ff7682;\n"])));
var FlexRow11 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  gap: 13.2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexRow13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  gap: 12.4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Text9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 42.6px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var Poor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var SourceOfReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Organic = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 41.3px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow24 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  gap: 5.16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexRow33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  gap: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 14px 0px;\n"])));
var WhiteText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  height: 14px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 5px 77px 6px 77px;\n  font-size: 11px;\n  font-family: Konnect;\n  text-decoration: underline;\n  white-space: nowrap;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n"])));
var Text26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0px 5px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Text38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 3px 0px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn72 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  height: 88px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 10px 144px 10px 143px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Text39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 2px 0px 1px;\n  font-size: 5px;\n  font-family: Konnect;\n  white-space: nowrap;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/E46PlvbfDIhzWY4OVlV0.svg\");\n"])));
var Image17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 304px;\n  height: 1px;\n  left: 0px;\n  top: 35.7px;\n  position: absolute;\n"])));
var Image18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 304px;\n  height: 1px;\n  left: 0px;\n  top: 17.9px;\n  position: absolute;\n"])));
var Image19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 304px;\n  height: 1px;\n  left: 0px;\n  top: 53.5px;\n  position: absolute;\n"])));
var Image20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 304px;\n  height: 1px;\n  left: 0px;\n  top: 71.3px;\n  position: absolute;\n"])));
var Image21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  width: 304px;\n  height: 1px;\n  left: 0px;\n  top: 89.1px;\n  position: absolute;\n"])));
var Image22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 110px;\n  position: relative;\n  margin: 0px 49.3px 0px 0px;\n"])));
var Image23 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 110px;\n  position: relative;\n  margin: 0px 48.9px 0px 0px;\n"])));
var FlexColumn73 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  height: 108px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 0px 49.3px 0px 0px;\n  padding: 1.01px 0.07px 1.01px 0.43px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/aCgwmDLBRt2sKYRNCLW3.svg\");\n"])));
var Line4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  height: 86px;\n"])));
var Image25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 110px;\n  position: relative;\n"])));
var Text41 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  margin: 0px 24px 0px 0px;\n  color: #4f4f4f;\n  font-size: 8px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Ellipse3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  width: 9px;\n  height: 9px;\n  margin: 0px 4px 0px 0px;\n"])));
var Responded = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 6px;\n  font-family: Konnect;\n  text-transform: lowercase;\n"])));
var Text48 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  margin: 0px 0px 11px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  width: 202px;\n  left: 2.85px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 51.4px 0px 50.6px;\n"])));
var FlexRow47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0px 29px;\n"])));
var Text56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  margin: 0px 71px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text57 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  margin: 0px 67px 0px 0px;\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Monthly = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 10px;\n  font-family: Inter;\n  white-space: pre-wrap;\n"])));
var FlexRow49 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  gap: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Text58 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var ReviewResponse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexColumn86 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n"])));
var FlexRow52 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Text64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  margin: 0px 0px 11px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text74 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 14.3px;\n  font-size: 13px;\n  font-family: Konnect;\n"])));
var Text83 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  color: #4f4f4f;\n  font-size: 5px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text86 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 5px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text100 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  margin: 0px 34px 0px 0px;\n  color: #4f4f4f;\n  font-size: 5px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var MobileRootRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  width: 414px;\n  max-width: 700px;\n  height: 3439px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin: auto;\n  padding: 1.75px 0px 70px 0px;\n  background-color: #f5f6fa;\n  overflow: hidden;\n"])));
var IPhoneXOrNewer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  width: 375px;\n  height: 31.5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: flex-end;\n  align-items: flex-end;\n  margin: 0px 0px 13.7px 0px;\n  padding: 0px 14.7px 0px 21px;\n  background-color: #f5f6fa;\n  overflow: hidden;\n"])));
var LeftSide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 21px 0px 0px;\n"])));
var Time = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  height: 19.5px;\n"])));
var Notch1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  width: -219px;\n  height: 28px;\n  align-self: flex-start;\n  margin: 0px 14.7px 0px 0px;\n  padding: 0px 219px;\n"])));
var RightSide = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  width: 66.7px;\n  height: 11.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 2.86px 0px;\n"])));
var MobileSignal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  width: 17px;\n  height: 10.7px;\n  margin: 0px 5.03px 0px 0px;\n"])));
var Wifi = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  width: 15.3px;\n  height: 11px;\n  align-self: flex-start;\n  margin: 0px 5.03px 0px 0px;\n"])));
var Battery = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  width: 24.3px;\n  height: 11.3px;\n"])));
var FlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-end;\n  margin: 0px 0px 6px 0px;\n  padding: 0px 26px 0px 21px;\n"])));
var Ellipse = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: center;\n  margin: 0px 16px 0px 0px;\n  padding: 9.5px 7.5px 8.5px 7.5px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/RVuEB7lcWkLU6IFksloe.svg\");\n"])));
var Image1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  height: 11px;\n"])));
var Image2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  margin: 0px 93px 7px 0px;\n"])));
var Ativo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  width: 54px;\n  height: 16px;\n  margin: 0px 72px 5px 0px;\n"])));
var Notification1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  height: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  margin: 0px 46.8px 0px 0px;\n"])));
var Notification = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  height: 10.5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.26px 0.27px 1.26px 5.85px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/em9F6SHsaG7rQ84V1upl.svg\");\n"])));
var Oval = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  height: 4.55px;\n"])));
var ProfileIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  width: 22px;\n  height: 22px;\n  margin: 0px 4.5px 1.5px 0px;\n"])));
var Path1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 3px;\n  margin: 0px 0px 10px 0px;\n"])));
var Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  height: 1px;\n  align-self: stretch;\n  margin: 0px 0px 29px 0px;\n"])));
var FlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  width: 222px;\n  gap: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: flex-start;\n  margin: 0px 0px 29px 22px;\n"])));
var Text1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  width: 326px;\n  height: 575px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 0px 0px 28px 0px;\n"])));
var Ract = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 13px 48.1px 12.5px 25px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/n8VQd7pnwVBVS8FA0oKv.svg\");\n"])));
var FlexColumn5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  width: 96px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexColumn6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["\n  width: 96px;\n  height: 49px;\n  position: relative;\n  gap: 6.54px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var K = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n  left: 0px;\n  top: 18px;\n  position: absolute;\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var ClearedQeue = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n  width: 91.2px;\n  height: 19.5px;\n  position: relative;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n"])));
var Text3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n  position: relative;\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Image4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n  width: 15.4px;\n  height: 24px;\n  margin: 7.5px 0px 0px 0px;\n"])));
var Ract2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 13px 46px 12.5px 25px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/n8VQd7pnwVBVS8FA0oKv.svg\");\n"])));
var FlexColumn9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n  width: 94px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Image6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["\n  width: 17px;\n  height: 16px;\n  margin: 9px 0px 0px 0px;\n"])));
var Ract1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px 42.2px 13.5px 25px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/OgJwRrX9b9MXdup7IDaS.svg\");\n"])));
var FlexColumn12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n  width: 101px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Image8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n  width: 21.3px;\n  height: 19.8px;\n  margin: 5.5px 0px 0px 0px;\n"])));
var FlexColumn15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n  width: 131px;\n  height: 119px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0px 170px 0px 25px;\n"])));
var Ract3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["\n  width: 259px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 13px 42.2px 37px 25px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/n8VQd7pnwVBVS8FA0oKv.svg\");\n"])));
var FlexColumn16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n  width: 117px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var K5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Image9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n  width: 21.3px;\n  height: 19.8px;\n  margin: 3.5px 0px 0px 0px;\n"])));
var FlexRow4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n  position: relative;\n  gap: 26px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexRow5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n  height: 19.5px;\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n  padding: 0px 0px 30.5px 0px;\n"])));
var Element4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  color: #ffffff;\n  font-size: 14px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Iconparkranking = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n"])));
var Ract4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 13px 43px 12.5px 25px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/n8VQd7pnwVBVS8FA0oKv.svg\");\n"])));
var FlexColumn18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n  width: 113px;\n  gap: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexRow6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["\n  gap: 6.04px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Image12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["\n  width: 19px;\n  height: 19px;\n  margin: 4px 0px 0px 0px;\n"])));
var WhiteFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["\n  height: 210px;\n  gap: 23px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 25px 20px 25px 21px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  box-shadow: 0px 1px 4px 0px #e5e9f2;\n"])));
var FlexRow7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["\n  gap: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 100px 0px 76px;\n"])));
var Reviews1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["\n  width: 86px;\n  height: 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexColumn22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexRow8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n  gap: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n  margin: 0px 0px 16px 0px;\n"])));
var Excellent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["\n  display: contents;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var FlexRow9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["\n  gap: 15.9px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var TimberwolfFlexColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 38px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var Text6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["\n  width: 50.1px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["\n  height: 16px;\n  gap: 22px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 0px 17px 0px;\n"])));
var Text7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["\n  width: 28px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var TimberwolfFlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  padding: 0px 127px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var Text8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n  width: 46.8px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexColumn24 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["\n  width: 274px;\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var FlexRow12 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n  height: 15px;\n  gap: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Avarage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var TimberwolfFlexColumn2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 0px 2.47px 0px;\n  padding: 0px 162px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n  height: 6px;\n  background-color: #ff7682;\n"])));
var FlexRow14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n  gap: 28px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexColumn25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n  width: 7px;\n  height: 9px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-self: stretch;\n  padding: 2px 162px 2px 0px;\n"])));
var TimberwolfRectangle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n  width: 169px;\n  height: 7px;\n  left: 0px;\n  top: 3.53px;\n  position: absolute;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["\n  height: 7px;\n  position: relative;\n  background-color: #ff7682;\n"])));
var FlexRow16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["\n  height: 14px;\n  gap: 31px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexRow17 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["\n  gap: 12.4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var TimberwolfFlexColumn3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 0px 2px 0px;\n  padding: 0px 162px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var WhiteFlexColumn1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["\n  height: 125px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 25px 40.7px 24px 40px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var FlexRow18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["\n  gap: 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0px 0px 28px 0px;\n  padding: 0px 27px;\n"])));
var FlexColumn29 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0px 0px 21px 0px;\n"])));
var FlexRow19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["\n  height: 15px;\n  gap: 10.3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var FlexRow20 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n  gap: 13.2px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var TimberwolfFlexColumn4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 30.9px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var FlexRow21 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["\n  height: 14px;\n  gap: 21.7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0px 1.03px 0px 0px;\n"])));
var Text13 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["\n  width: 26.8px;\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var TimberwolfFlexColumn5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  padding: 0px 103px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var Text14 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n  width: 40.2px;\n  font-size: 10px;\n  font-family: Konnect;\n"])));
var FlexRow23 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["\n  gap: 22.7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n  margin: 0px 74.4px 0px 0px;\n"])));
var WildWatermelonRectangle5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["\n  width: 5.16px;\n  height: 5px;\n  align-self: flex-end;\n  margin: 0px 0px 2px 0px;\n  background-color: #ff7682;\n"])));
var Text15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["\n  width: 30.9px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var TimberwolfRectangle1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["\n  width: 5.16px;\n  height: 5px;\n  align-self: flex-end;\n  margin: 0px 0px 2px 0px;\n  background-color: #d9d9d9;\n"])));
var Invite1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["\n  width: 21.7px;\n  font-size: 8px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var WhiteFlexColumn2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["\n  height: 134px;\n  gap: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 19px 42.2px 19px 42px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var FlexRow26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["\n  gap: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 19px;\n"])));
var Image15 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  align-self: flex-start;\n"])));
var Text16 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["\n  height: 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn34 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["\n  height: 69px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n"])));
var FlexRow27 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["\n  gap: 21px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexRow28 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["\n  gap: 7.78px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var FlexColumn36 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 2px 0px 0px 0px;\n"])));
var TimberwolfFlexColumn6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 22px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var FlexRow29 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["\n  width: 239px;\n  height: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-start;\n  align-items: flex-end;\n"])));
var Text18 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["\n  margin: 0px 5px 0px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var TimberwolfFlexColumn7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 7.78px 3px 0px;\n  padding: 0px 109px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var Text19 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow30 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["\n  width: 241px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var CurrentYear = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["\n  margin: 0px 14px 0px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var TimberwolfFlexColumn8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 7.78px 1px 0px;\n  padding: 0px 76px 0px 0px;\n  background-color: #d9d9d9;\n"])));
var FlexColumn37 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["\n  width: 326px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  margin: 0px 0px 20px 0px;\n  padding: 0px 44px;\n"])));
var Path = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["\n  width: 0px;\n  height: 0px;\n  left: -9148px;\n  top: 154px;\n  position: absolute;\n"])));
var FlexColumn38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var WhiteFlexColumn3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\n  height: 316px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 18px 49px 18px 35px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var FlexRow31 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["\n  gap: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0px 0px 24px 0px;\n  padding: 0px 22px;\n"])));
var FlexRow32 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["\n  gap: 7px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 13px 0px;\n"])));
var WhiteFlexRow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["\n  gap: 42px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 5px 10px 6px 10px;\n  border-radius: 5px;\n  background-color: #f9f9f9;\n"])));
var Text22 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["\n  font-size: 11px;\n  font-family: Konnect;\n  text-decoration: underline;\n  white-space: nowrap;\n"])));
var WildWatermelonText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["\n  width: 7px;\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 0px 9px;\n  color: #ffffff;\n  font-size: 4px;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 5px;\n  background-color: #fe6976;\n"])));
var Text25 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0px 3px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow38 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["\n  gap: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var Text28 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  margin: 4px 0px 0px 0px;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var WhiteFlexColumn4 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["\n  gap: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 26px 24px 19px 21px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var FlexColumn65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["\n  gap: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n"])));
var FlexRow39 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["\n  gap: 82px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0px 2px;\n"])));
var ProfileVists = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var WhiteFlexColumn5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["\n  height: 22px;\n  gap: 5.79px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0px 20.3px 0px 13px;\n  background-color: #f9f9f9;\n"])));
var FlexRow40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["\n  width: 113px;\n  height: 8.71px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  align-items: center;\n"])));
var Text29 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  margin: 0.06px 29.4px 0px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn67 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n  margin: 0px 18.1px 0px 0px;\n"])));
var FlexColumn69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 8.71px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0px 11.7px 0px 8.56px;\n"])));
var Element58 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["\n  width: 34.2px;\n  height: 7.13px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-radius: 3px;\n"])));
var Text31 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["\n  position: relative;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var Line5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["\n  width: 26px;\n  height: 0.5px;\n"])));
var FlexColumn70 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["\n  gap: 2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var FlexRow41 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["\n  width: 329px;\n  position: relative;\n  gap: 4.33px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var FlexColumn71 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["\n  width: 21px;\n  height: 114px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-start;\n"])));
var Text32 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 0px 11px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text33 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["\n  align-self: center;\n  margin: 0px 0px 9px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text34 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["\n  align-self: center;\n  margin: 0px 0px 11px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text35 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["\n  margin: 0px 0px 12px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text36 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["\n  margin: 0px 0px 10px 1px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text37 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["\n  margin: 0px 0px 12px 2px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["\n  width: 202px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 51.4px 0px 50.6px;\n"])));
var Image26 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["\n  width: 317px;\n  height: 85.8px;\n  left: 17.5px;\n  top: 20.1px;\n  position: absolute;\n"])));
var FlexRow43 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0px 38px;\n"])));
var Text40 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["\n  margin: 0px 23px 0px 0px;\n  color: #4f4f4f;\n  font-size: 8px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text42 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["\n  margin: 0px 26px 0px 0px;\n  color: #4f4f4f;\n  font-size: 8px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text44 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 8px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn74 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 91px 0px 0px;\n"])));
var FlexColumn75 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["\n  height: 134px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Text45 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["\n  margin: 0px 0px 14px 9px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn76 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["\n  width: 51px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0px 0px 12.8px 23px;\n  padding: 30.5px 15.2px 27.7px 15px;\n"])));
var Ellipse1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["\n  width: 46.2px;\n  height: 81.2px;\n  left: 35.1px;\n  top: 0px;\n  position: absolute;\n"])));
var Ellipse2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral(["\n  width: 40.6px;\n  height: 81.1px;\n  left: 0px;\n  top: 0.08px;\n  position: absolute;\n"])));
var TotalReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["\n  position: relative;\n  align-self: stretch;\n  font-size: 8px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Text46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["\n  position: relative;\n  font-size: 10px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow44 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var Responded1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 3px 0px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n  text-transform: uppercase;\n"])));
var NotResponded1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var WhiteFlexColumn6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["\n  gap: 41px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 26px 24px 26.2px 25px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var FlexColumn79 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["\n  height: 188px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Text47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral(["\n  margin: 0px 0px 17px 12px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow45 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["\n  gap: 1.48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  margin: 0px 0px 15px 0px;\n"])));
var FlexColumn80 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["\n  width: 17px;\n  height: 128px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n"])));
var Text49 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["\n  margin: 0px 2px 9px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text50 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["\n  margin: 0px 2px 11px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["\n  margin: 0px 4px 12px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text52 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["\n  margin: 0px 3px 10px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["\n  align-self: center;\n  margin: 0px 0px 12px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn81 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["\n  width: 307px;\n  height: 128px;\n  gap: 0.97px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])));
var FlexColumn82 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["\n  width: 307px;\n  height: 113px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var Text55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["\n  width: 9px;\n  height: 7px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 3px;\n  font-size: 5px;\n  font-family: Konnect;\n  white-space: nowrap;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/E46PlvbfDIhzWY4OVlV0.svg\");\n"])));
var FlexColumn84 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 4.87px 153px 4.03px 154px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/ZvZzaZwpRBcChdFZK8hm.svg\");\n"])));
var FlexRow48 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral(["\n  width: 291px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-self: flex-end;\n  align-items: center;\n  margin: 0px 8px 0px 0px;\n"])));
var NavyBlueSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #008cfb;\n"])));
var NeonCarrotSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #ff9501;\n"])));
var BlackSquare = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  background-color: #333333;\n"])));
var FlexColumn85 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral(["\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0px 38px 0px 11px;\n"])));
var Text60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral(["\n  width: 93px;\n  height: 17px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 0px 1px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn87 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral(["\n  gap: 13.4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var TimberwolfFlexColumn9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 127px 0px 0px;\n  border-radius: 5px;\n  background-color: #d9d9d9;\n"])));
var WildWatermelonRectangle9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral(["\n  height: 7px;\n  border-radius: 5px;\n  background-color: #ff7682;\n"])));
var FlexColumn89 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 0px 5px;\n"])));
var WildWatermelonRectangle10 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral(["\n  width: 6.91px;\n  height: 6.71px;\n  margin: 1.6px 4.09px 0px 0px;\n  border-radius: 1px;\n  background-color: #ff7682;\n"])));
var Text61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral(["\n  width: 81.6px;\n  height: 13.4px;\n  align-self: center;\n  margin: 0px 0.44px 0px 0px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var TimberwolfRectangle2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral(["\n  width: 6.91px;\n  height: 6.71px;\n  margin: 2.09px 4.12px 0px 0px;\n  border-radius: 1px;\n  background-color: #d9d9d9;\n"])));
var Text62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 9.71px;\n  font-size: 8px;\n  font-family: Konnect;\n"])));
var WhiteFlexColumn7 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral(["\n  height: 199px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 26px 24px 36.6px 26px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var Text63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral(["\n  margin: 0px 0px 17px 11px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn92 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral(["\n  gap: 2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: stretch;\n  margin: 0px 0px 22px 0px;\n"])));
var FlexRow53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral(["\n  gap: 1.48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var FlexColumn93 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 114px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var Text65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral(["\n  margin: 0px 0px 9px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n  margin: 0px 0px 12px 2px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn94 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral(["\n  width: 307px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20.1px 0px 18.1px 0px;\n"])));
var FlexRow54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral(["\n  width: 202px;\n  left: 2.85px;\n  top: 2px;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 51.4px 0px 50.6px;\n"])));
var Image46 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral(["\n  width: 307px;\n  height: 75.8px;\n  position: relative;\n"])));
var FlexRow56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral(["\n  gap: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 0px 11px;\n"])));
var UsefulReviews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral(["\n  width: 89px;\n  height: 14.3px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var Ract5 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral(["\n  gap: 13.2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 34px 44px 33px 42px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/qjDZij0yuDPZ9ccsh5Rt.svg\");\n"])));
var FlexRow57 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral(["\n  gap: 23px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: center;\n"])));
var ReviewsInsights = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: pre-wrap;\n"])));
var WhiteFlexColumn8 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral(["\n  height: 22px;\n  gap: 4.16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0px 4px 0px 8px;\n  background-color: #f2f2f2;\n"])));
var FlexColumn99 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-end;\n"])));
var Text75 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 1.01px 37.6px 0px 0px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexColumn100 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 1.9px 21.4px 0px 0px;\n"])));
var FlexColumn101 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n"])));
var Text77 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral(["\n  height: 9.87px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 1.23px 6.76px 1.23px 10.3px;\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n  border-radius: 3px;\n"])));
var Line6 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral(["\n  width: 27px;\n  height: 0.5px;\n"])));
var FlexColumn103 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral(["\n  width: 286px;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var FlexRow59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral(["\n  gap: 8.61px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var FlexColumn106 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral(["\n  width: 19px;\n  height: 90.6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 19.2px 0px 22px 0px;\n"])));
var Text78 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral(["\n  margin: 0px 0px 13.3px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text79 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral(["\n  margin: 0px 0px 14.1px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text80 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral(["\n  align-self: stretch;\n  margin: 0px 0px 13.3px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text81 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral(["\n  margin: 0px 0px 14.9px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text82 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral(["\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral(["\n  width: 243px;\n  position: relative;\n  gap: 85px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding: 21.8px 4.49px 0px 4.49px;\n"])));
var FlexRow61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral(["\n  width: 235px;\n  height: 131px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 8.65px;\n"])));
var Element59 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral(["\n  width: 250px;\n  height: 129px;\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n"])));
var Image47 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral(["\n  width: 252px;\n  height: 1px;\n  left: 0px;\n  top: 42.7px;\n  position: absolute;\n"])));
var Image48 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral(["\n  width: 252px;\n  height: 1px;\n  left: 0px;\n  top: 21.5px;\n  position: absolute;\n"])));
var Image49 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral(["\n  width: 252px;\n  height: 1px;\n  left: 0px;\n  top: 64px;\n  position: absolute;\n"])));
var Image50 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral(["\n  width: 252px;\n  height: 1px;\n  left: 0px;\n  top: 85.2px;\n  position: absolute;\n"])));
var Image51 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral(["\n  width: 252px;\n  height: 1px;\n  left: 0px;\n  top: 106px;\n  position: absolute;\n"])));
var Image52 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 131px;\n  left: 83.6px;\n  top: 0px;\n  position: absolute;\n"])));
var Image53 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 131px;\n  left: 125px;\n  top: 0px;\n  position: absolute;\n"])));
var Element60 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral(["\n  width: 24.4px;\n  height: 37.7px;\n  position: relative;\n  align-self: flex-end;\n  margin: 0px 8.94px 0.77px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var Image54 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 131px;\n  position: relative;\n  margin: 0px 38.4px 0px 0px;\n"])));
var Element61 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral(["\n  width: 24.4px;\n  height: 24.4px;\n  position: relative;\n  align-self: flex-end;\n  margin: 0px 12px 0.14px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var Element62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral(["\n  width: 24.4px;\n  height: 43.2px;\n  position: relative;\n  align-self: flex-end;\n  margin: 0px 24.8px 0.27px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var Image55 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 131px;\n  position: relative;\n  margin: 0px 40.7px 0px 0px;\n"])));
var Image56 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 131px;\n  position: relative;\n"])));
var Element63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 89px;\n  position: relative;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexRow62 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral(["\n  width: 93.5px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: flex-end;\n"])));
var Element64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 67px;\n  margin: 0px 12px 0px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var Element65 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 110px;\n  align-self: center;\n  margin: 0px 8.13px 0px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var Element66 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral(["\n  width: 24.4px;\n  height: 38.5px;\n  margin: 0px 0px 0.47px 0px;\n  border-radius: 10px 10px 0px 0px;\n  background-image: linear-gradient(\n    180deg,\n    #fe6976 0%,\n    rgba(254, 105, 118, 0) 115%\n  );\n"])));
var FlexRow63 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral(["\n  height: 7px;\n  gap: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-self: stretch;\n  align-items: flex-end;\n"])));
var FlexColumn107 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 0px 9px 0px;\n"])));
var WhiteFlexColumn9 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral(["\n  height: 218px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 26px 24px 25px 29px;\n  border-radius: 10px;\n  background-color: #ffffff;\n"])));
var Text90 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral(["\n  margin: 0px 0px 17px 8px;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow64 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral(["\n  gap: 3.48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  margin: 0px 0px 12px 0px;\n"])));
var FlexColumn109 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral(["\n  width: 11px;\n  height: 122px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n"])));
var Text92 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral(["\n  margin: 0px 0px 9px 1px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text93 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral(["\n  margin: 0px 0px 11px 1px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text94 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral(["\n  margin: 0px 0px 12px 1px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text95 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 1px 10px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text96 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 1px 12px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text97 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  margin: 0px 2px 0px 0px;\n  color: #4f4f4f;\n  font-size: 6px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexColumn110 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral(["\n  width: 307px;\n  height: 122px;\n  gap: 2.45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])));
var FlexColumn111 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral(["\n  width: 307px;\n  height: 112px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n"])));
var FlexColumn113 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral(["\n  height: 88.3px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 2.55px 152px 2.55px 154px;\n  background-size: cover;\n  background-image: url(\"https://file.rendit.io/n/8ztxhMF7XEhdw1kWHsKP.svg\");\n"])));
var FlexRow66 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px 44px 0px 47.5px;\n"])));
var Text99 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral(["\n  margin: 0px 33px 0px 0px;\n  color: #4f4f4f;\n  font-size: 5px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var Text102 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral(["\n  margin: 0px 35px 0px 0px;\n  color: #4f4f4f;\n  font-size: 5px;\n  font-family: Inter;\n  white-space: nowrap;\n"])));
var FlexRow67 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral(["\n  gap: 22px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 26px 78px;\n"])));
var FlexRow68 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral(["\n  gap: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var NavyBlueSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 6px;\n  border-radius: 1px;\n  background-color: #008cfb;\n"])));
var FlexRow69 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral(["\n  gap: 4px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: stretch;\n  align-items: center;\n"])));
var BlackSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 6px;\n  border-radius: 1px;\n  background-color: #000000;\n"])));
var Text104 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral(["\n  font-size: 6px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var FlexRow70 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral(["\n  gap: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-self: stretch;\n  align-items: center;\n  padding: 0px 3px;\n"])));
var Component = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral(["\n  width: 11px;\n  height: 11px;\n  align-self: flex-end;\n  margin: 0px 0px 1px 0px;\n"])));
var FlexRow71 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral(["\n  height: 15px;\n  gap: 14px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n"])));
var Text105 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  font-size: 10px;\n  font-family: Konnect;\n  white-space: nowrap;\n"])));
var HomeIndicator1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-self: flex-start;\n  padding: 10px 137px 8px 138px;\n"])));
var HomeIndicator = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral(["\n  height: 5px;\n  border-radius: 100px;\n  background-color: #111111;\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);

/***/ }),

/***/ "./resources/js/pages/Analytics.jsx":
/*!******************************************!*\
  !*** ./resources/js/pages/Analytics.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_analytics_Desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/analytics/Desktop */ "./resources/js/components/analytics/Desktop.jsx");
/* harmony import */ var _components_analytics_Mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/analytics/Mobile */ "./resources/js/components/analytics/Mobile.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Analytics() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: window.innerWidth > 480 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_analytics_Desktop__WEBPACK_IMPORTED_MODULE_1__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_analytics_Mobile__WEBPACK_IMPORTED_MODULE_2__["default"], {})
  });
}

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
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

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
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
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
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
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
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

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Je),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ Ge),
/* harmony export */   "ThemeProvider": () => (/* binding */ Fe),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ke),
/* harmony export */   "createGlobalStyle": () => (/* binding */ We),
/* harmony export */   "css": () => (/* binding */ Ce),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ Ue),
/* harmony export */   "useTheme": () => (/* binding */ Ze),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Xe)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.6",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.6"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.6");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.6"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1__.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1__.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1__.Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1__.createContext(),Le=Ge.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1__.createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.6"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1__.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1__.memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1__.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1__.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1__.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ })

}]);