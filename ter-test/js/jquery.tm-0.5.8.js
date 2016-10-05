(function() {
  var $, ___exports, ___extend,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ___exports = (typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? module.exports : typeof window !== "undefined" && window !== null ? window : {};

  ___extend = function(child, parent) {
    var key, val, _results;
    _results = [];
    for (key in parent) {
      val = parent[key];
      if (!Object.prototype.hasOwnProperty.call(parent, key)) {
        continue;
      }
      if (Object.prototype.toString.call(val) === '[object Object]') {
        child[key] = {};
        _results.push(___extend(child[key], val));
      } else {
        _results.push(child[key] = val);
      }
    }
    return _results;
  };

  if (___exports.$ == null) {
    ___exports.$ = {};
  }

  $ = ___exports.$;

  ___extend($, {
    "tm": {
      "stylable": {},
      "ui": {}
    }
  });

  (function($) {
    var round;
    round = Math.round;
    $.extend($.cssNumber, {
      numericText: true,
      typingText: true,
      sprite: true
    });
    $.extend($.cssHooks, {
      numericText: {
        get: function(elem, computed, extra) {
          return +$._data(elem, 'numericText') || 0;
        },
        set: function(elem, value) {
          return $._data(elem, 'numericText', value);
        }
      },
      typingText: {
        get: function(elem, computed, extra) {
          return +$._data(elem, 'typingText') || 0;
        },
        set: function(elem, value) {
          return $._data(elem, 'typingText', value);
        }
      },
      sprite: {
        get: function(elem, computed, extra) {
          return +$._data(elem, 'sprite') || 0;
        },
        set: function(elem, value) {
          return $._data(elem, 'sprite', value);
        }
      }
    });
    return $.fn.extend({
      /**
      隕∫ｴ�縺ｮ繝�く繧ｹ繝医ｒ謨ｰ蟄励→縺励※蜿門ｾ励＠縲∬｡ｨ遉ｺ縺吶ｋ謨ｰ蟄励ｒ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励∪縺�
      @namespace $.fn
      @param {Number} to 陦ｨ遉ｺ縺吶ｋ謨ｰ蟄励〒縺�
      @param {Number} duration 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励※縺�ｋ譎る俣(ms)縺ｧ縺�
      @param {String} easing 繧､繝ｼ繧ｸ繝ｳ繧ｰ縺ｧ縺�
      @param {Function} complete 繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ縺ｧ縺�
      @return {jQueryObject} 閾ｪ霄ｫ縺ｮ蜿ら�縺ｧ縺�
      */

      animateNumericText: function(to, duration, easing, complete) {
        return this.each(function() {
          var $el, from;
          $el = $(this);
          from = +$el.text();
          if (isNaN(from)) {
            from = 0;
            $el.text(from);
          }
          return $el.css({
            numericText: from
          }).animate({
            numericText: to
          }, {
            duration: duration,
            easing: easing,
            step: function(current) {
              return $el.text(round(current));
            },
            complete: complete
          });
        });
      },
      /**
      荳譁�ｭ励★縺､繝�く繧ｹ繝医ｒ陦ｨ遉ｺ縺励∪縺�
      @namespace $.fn
      @param {String} text 陦ｨ遉ｺ縺吶ｋ繝�く繧ｹ繝医〒縺�
      @param {Number} duration 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励※縺�ｋ譎る俣(ms)縺ｧ縺�
      @param {String} easing 繧､繝ｼ繧ｸ繝ｳ繧ｰ縺ｧ縺�
      @param {Function} complete 繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ縺ｧ縺�
      @return {jQueryObject} 閾ｪ霄ｫ縺ｮ蜿ら�縺ｧ縺�
      */

      animateTypingText: function(text, duration, easing, complete) {
        return this.each(function() {
          var $el, from, to;
          $el = $(this);
          to = text.length;
          from = 0;
          return $el.css({
            typingText: from
          }).animate({
            typingText: to
          }, {
            duration: duration,
            easing: easing,
            step: function(current) {
              return $el.text(text.substr(0, round(current)));
            },
            complete: complete
          });
        });
      },
      /**
      荳譁�ｭ励★縺､繝�く繧ｹ繝医ｒ陦ｨ遉ｺ縺励∪縺�
      @namespace $.fn
      @param {String} text 陦ｨ遉ｺ縺吶ｋ繝�く繧ｹ繝医〒縺�
      @param {Number} fps 1繝輔Ξ繝ｼ繝�霎ｺ繧翫�繧ｳ繝樊焚縺ｧ縺�
      @param {Function} complete 繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ縺ｧ縺�
      @return {jQueryObject} 閾ｪ霄ｫ縺ｮ蜿ら�縺ｧ縺�
      */

      animateTypingTextFPS: function(text, fps, complete) {
        return this.each(function() {
          var $el, from, to;
          $el = $(this);
          to = text.length;
          from = 0;
          return $el.css({
            typingText: from
          }).animate({
            typingText: to
          }, {
            duration: (to - from) / fps1000,
            easing: 'linear',
            step: function(current) {
              return $el.text(text.substr(0, round(current)));
            },
            complete: complete
          });
        });
      },
      /**
      蟄占ｦ∫ｴ�繧偵せ繝励Λ繧､繝医い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励∪縺�
      @namespace $.fn
      @param {Number} duration 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励※縺�ｋ譎る俣(ms)縺ｧ縺�
      @param {String} easing 繧､繝ｼ繧ｸ繝ｳ繧ｰ縺ｧ縺�
      @param {Function} complete 繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ縺ｧ縺�
      @return {jQueryObject} 閾ｪ霄ｫ縺ｮ蜿ら�縺ｧ縺�
      */

      animateSprite: function(duration, easing, complete) {
        if (easing == null) {
          easing = 'linear';
        }
        return this.each(function() {
          var $children, $el, child, from, i, showAt, to, _i, _len;
          showAt = function(current) {
            return $children.hide().eq(round(current)).show();
          };
          $el = $(this);
          $children = $el.children();
          to = $children.length - 1;
          for (i = _i = 0, _len = $children.length; _i < _len; i = ++_i) {
            child = $children[i];
            if ($(child).is(':visible')) {
              from = i;
              break;
            }
          }
          if ((from == null) || from >= to - 1) {
            from = 0;
          }
          showAt(from);
          return $el.css({
            sprite: from
          }).animate({
            sprite: to
          }, {
            duration: duration,
            easing: easing,
            step: showAt,
            complete: complete
          });
        });
      },
      /*
      蟄占ｦ∫ｴ�繧偵せ繝励Λ繧､繝医い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺励∪縺�
      @namespace $.fn
      @param {Number} fps 1繝輔Ξ繝ｼ繝�霎ｺ繧翫�繧ｳ繝樊焚縺ｧ縺�
      @param {Function} complete 繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ縺ｧ縺�
      @return {jQueryObject} 閾ｪ霄ｫ縺ｮ蜿ら�縺ｧ縺�
      */

      animateSpriteFPS: function(fps, complete) {
        return this.each(function() {
          var $children, $el, from, now, showAt, to;
          now = null;
          showAt = function() {
            var n;
            n = $el.css('sprite') >> 0;
            if (n !== now) {
              now = n;
              return $children.hide().eq(now).show();
            }
          };
          $el = $(this);
          $children = $el.children();
          to = $children.length;
          if (to === 0) {
            return;
          }
          from = $el.css('sprite') >> 0;
          if (from >= to) {
            from = 0;
          }
          return $el.css({
            sprite: from
          }).animate({
            sprite: to
          }, {
            duration: (to - from) / fps * 1000,
            easing: 'linear',
            progress: showAt,
            complete: complete
          });
        });
      }
    });
  })(jQuery);

  (function($) {
    var R_CHROME, R_MOZILLA, R_MSIE, R_OPERA, R_WEBKIT, UA, browser, name, version, _ref;
    if ($.browser == null) {
      UA = window.navigator.userAgent.toLowerCase();
      R_CHROME = /(chrome)[ \/]([\w.]+)/;
      R_WEBKIT = /(webkit)[ \/]([\w.]+)/;
      R_OPERA = /(opera)(?:.*version|)[ \/]([\w.]+)/;
      R_MSIE = /(msie) ([\w.]+)/;
      R_MOZILLA = /(mozilla)(?:.*? rv:([\w.]+)|)/;
      _ref = R_CHROME.exec(UA) || R_WEBKIT.exec(UA) || R_OPERA.exec(UA) || R_MSIE.exec(UA) || UA.indexOf("compatible") < 0 && R_MOZILLA.exec(UA) || [], _ref[0], name = _ref[1], version = _ref[2];
      browser = {};
      if (name) {
        browser[name] = true;
        browser.version = version;
      }
      if (browser.chrome) {
        browser.webkit = true;
      } else if (browser.webkit) {
        browser.safari = true;
      }
      $.extend({
        browser: browser
      });
    }
    return $.extend($.browser, {
      versionNumber: parseInt($.browser.version, 10)
    });
  })(jQuery);

  (function($) {
    return $.extend({
      parallel: function(ds) {
        var d;
        d = new $.Deferred;
        $.when.apply(null, ds).done(ds.length <= 1 ? function() {
          var results;
          results = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return d.resolve([results]);
        } : function() {
          var results;
          results = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return d.resolve(results);
        }).fail(d.reject);
        return d.promise();
      },
      wait: function() {
        var args, d, ms;
        ms = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (ms == null) {
          ms = 0;
        }
        d = new $.Deferred;
        setTimeout(function() {
          return d.resolve.apply(d, args);
        }, ms);
        return d.promise();
      }
    });
  })(jQuery);

  (function($) {
    var PI, PI_2, abs, asin, cos, pow, sin, sqrt;
    PI = Math.PI, abs = Math.abs, pow = Math.pow, sqrt = Math.sqrt, sin = Math.sin, cos = Math.cos, asin = Math.asin;
    PI_2 = PI / 2;
    $.extend({
      easingFactory: {
        linear: function() {
          return function(x, t, b, c, d) {
            return c * t / d + b;
          };
        },
        easeInBack: function(s) {
          s = s || 1.70158;
          return function(x, t, b, c, d) {
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          };
        },
        easeInOutBack: function(s) {
          s = s || 1.70158;
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * (t * t * (((s * 1.525) + 1) * t - s * 1.525)) + b;
            }
            return c / 2 * ((t -= 2) * t * (((s * 1.525) + 1) * t + s * 1.525) + 2) + b;
          };
        },
        easeOutBack: function(s) {
          s = s || 1.70158;
          return function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          };
        },
        easeOutInBack: function(s) {
          s = s || 1.70158;
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return (c / 2) * ((t = (t * 2) / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            }
            return (c / 2) * (t = (t * 2 - d) / d) * t * ((s + 1) * t - s) + (b + c / 2);
          };
        },
        easeInBounce: function() {
          return function(x, t, b, c, d) {
            if ((t = (d - t) / d) < 0.36363636363636365) {
              return c - (c * (7.5625 * t * t)) + b;
            }
            if (t < 0.7272727272727273) {
              return c - (c * (7.5625 * (t -= 0.5454545454545454) * t + 0.75)) + b;
            }
            if (t < 0.9090909090909091) {
              return c - (c * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375)) + b;
            }
            return c - (c * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375)) + b;
          };
        },
        easeInOutBounce: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              if ((t = (d - t * 2) / d) < 0.36363636363636365) {
                return (c - (c * (7.5625 * t * t))) * 0.5 + b;
              }
              if (t < 0.7272727272727273) {
                return (c - (c * (7.5625 * (t -= 0.5454545454545454) * t + 0.75))) * 0.5 + b;
              }
              if (t < 0.9090909090909091) {
                return (c - (c * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375))) * 0.5 + b;
              }
              return (c - (c * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375))) * 0.5 + b;
            } else {
              if ((t = (t * 2 - d) / d) < 0.36363636363636365) {
                return (c * (7.5625 * t * t)) * 0.5 + c * 0.5 + b;
              }
              if (t < 0.7272727272727273) {
                return (c * (7.5625 * (t -= 0.5454545454545454) * t + 0.75)) * 0.5 + c * 0.5 + b;
              }
              if (t < 0.9090909090909091) {
                return (c * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375)) * 0.5 + c * 0.5 + b;
              }
              return (c * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375)) * 0.5 + c * 0.5 + b;
            }
          };
        },
        easeOutBounce: function() {
          return function(x, t, b, c, d) {
            if ((t /= d) < 0.36363636363636365) {
              return c * (7.5625 * t * t) + b;
            }
            if (t < 0.7272727272727273) {
              return c * (7.5625 * (t -= 0.5454545454545454) * t + 0.75) + b;
            }
            if (t < 0.9090909090909091) {
              return c * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375) + b;
            }
            return c * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375) + b;
          };
        },
        easeOutInBounce: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              if ((t = (t * 2) / d) < 0.36363636363636365) {
                return (c / 2) * (7.5625 * t * t) + b;
              }
              if (t < 0.7272727272727273) {
                return (c / 2) * (7.5625 * (t -= 0.5454545454545454) * t + 0.75) + b;
              }
              if (t < 0.9090909090909091) {
                return (c / 2) * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375) + b;
              }
              return (c / 2) * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375) + b;
            } else {
              if ((t = (d - (t * 2 - d)) / d) < 0.36363636363636365) {
                return (c / 2) - ((c / 2) * (7.5625 * t * t)) + (b + c / 2);
              }
              if (t < 0.7272727272727273) {
                return (c / 2) - ((c / 2) * (7.5625 * (t -= 0.5454545454545454) * t + 0.75)) + (b + c / 2);
              }
              if (t < 0.9090909090909091) {
                return (c / 2) - ((c / 2) * (7.5625 * (t -= 0.8181818181818182) * t + 0.9375)) + (b + c / 2);
              }
              return (c / 2) - ((c / 2) * (7.5625 * (t -= 0.9545454545454546) * t + 0.984375)) + (b + c / 2);
            }
          };
        },
        easeInCirc: function() {
          return function(x, t, b, c, d) {
            return -c * (sqrt(1 - (t /= d) * t) - 1) + b;
          };
        },
        easeInOutCirc: function() {
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return -c / 2 * (sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (sqrt(1 - (t -= 2) * t) + 1) + b;
          };
        },
        easeOutCirc: function() {
          return function(x, t, b, c, d) {
            return c * sqrt(1 - (t = t / d - 1) * t) + b;
          };
        },
        easeOutInCirc: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return (c / 2) * sqrt(1 - (t = (t * 2) / d - 1) * t) + b;
            }
            return -(c / 2) * (sqrt(1 - (t = (t * 2 - d) / d) * t) - 1) + (b + c / 2);
          };
        },
        easeInCubic: function() {
          return function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
          };
        },
        easeInOutCubic: function() {
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t + b;
            } else {
              return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
          };
        },
        easeOutCubic: function() {
          return function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          };
        },
        easeOutInCubic: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return c / 2 * ((t = t * 2 / d - 1) * t * t + 1) + b;
            } else {
              return c / 2 * (t = (t * 2 - d) / d) * t * t + b + c / 2;
            }
          };
        },
        easeInElastic: function(a, p) {
          a = a || 0;
          p = p || 0;
          return function(x, t, b, c, d) {
            var s;
            s = void 0;
            if (t === 0) {
              return b;
            }
            if ((t /= d) === 1) {
              return b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (!a || a < abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * PI) * asin(c / a);
            }
            return -(a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * (2 * PI) / p)) + b;
          };
        },
        easeInOutElastic: function(a, p) {
          a = a || 0;
          p = p || 0;
          return function(x, t, b, c, d) {
            var s;
            s = void 0;
            if (t === 0) {
              return b;
            }
            if ((t /= d / 2) === 2) {
              return b + c;
            }
            if (!p) {
              p = d * (0.3 * 1.5);
            }
            if (!a || a < abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * PI) * asin(c / a);
            }
            if (t < 1) {
              return -0.5 * (a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * (2 * PI) / p)) + b;
            }
            return a * pow(2, -10 * (t -= 1)) * sin((t * d - s) * (2 * PI) / p) * 0.5 + c + b;
          };
        },
        easeOutElastic: function(a, p) {
          a = a || 0;
          p = p || 0;
          return function(x, t, b, c, d) {
            var s;
            s = void 0;
            if (t === 0) {
              return b;
            }
            if ((t /= d) === 1) {
              return b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (!a || a < abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * PI) * asin(c / a);
            }
            return a * pow(2, -10 * t) * sin((t * d - s) * (2 * PI) / p) + c + b;
          };
        },
        easeOutInElastic: function(a, p) {
          a = a || 0;
          p = p || 0;
          return function(x, t, b, c, d) {
            var s;
            s = void 0;
            c /= 2;
            if (t < d / 2) {
              if ((t *= 2) === 0) {
                return b;
              }
              if ((t /= d) === 1) {
                return b + c;
              }
              if (!p) {
                p = d * 0.3;
              }
              if (!a || a < abs(c)) {
                a = c;
                s = p / 4;
              } else {
                s = p / (2 * PI) * asin(c / a);
              }
              return a * pow(2, -10 * t) * sin((t * d - s) * (2 * PI) / p) + c + b;
            } else {
              if ((t = t * 2 - d) === 0) {
                return b + c;
              }
              if ((t /= d) === 1) {
                return (b + c) + c;
              }
              if (!p) {
                p = d * 0.3;
              }
              if (!a || a < abs(c)) {
                a = c;
                s = p / 4;
              } else {
                s = p / (2 * PI) * asin(c / a);
              }
              return -(a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * (2 * PI) / p)) + (b + c);
            }
          };
        },
        easeInExpo: function() {
          return function(x, t, b, c, d) {
            if (t === 0) {
              return b;
            } else {
              return c * pow(2, 10 * (t / d - 1)) + b;
            }
          };
        },
        easeInOutExpo: function() {
          return function(x, t, b, c, d) {
            if (t === 0) {
              return b;
            }
            if (t === d) {
              return b + c;
            }
            if ((t /= d / 2) < 1) {
              return c / 2 * pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (2 - pow(2, -10 * --t)) + b;
          };
        },
        easeOutExpo: function() {
          return function(x, t, b, c, d) {
            if (t === d) {
              return b + c;
            }
            return c * (1 - pow(2, -10 * t / d)) + b;
          };
        },
        easeOutInExpo: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return (t * 2 === d ? b + c / 2 : c / 2 * (1 - pow(2, -10 * t * 2 / d)) + b);
            }
            if ((t * 2 - d) === 0) {
              return b + c / 2;
            } else {
              return c / 2 * pow(2, 10 * ((t * 2 - d) / d - 1)) + b + c / 2;
            }
          };
        },
        easeInQuad: function() {
          return function(x, t, b, c, d) {
            return c * (t /= d) * t + b;
          };
        },
        easeInOutQuad: function() {
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
          };
        },
        easeOutQuad: function() {
          return function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          };
        },
        easeOutInQuad: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return -(c / 2) * (t = t * 2 / d) * (t - 2) + b;
            }
            return (c / 2) * (t = (t * 2 - d) / d) * t + (b + c / 2);
          };
        },
        easeInQuart: function() {
          return function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          };
        },
        easeInOutQuart: function() {
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t * t + b;
            }
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          };
        },
        easeOutQuart: function() {
          return function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          };
        },
        easeOutInQuart: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return -(c / 2) * ((t = (t * 2) / d - 1) * t * t * t - 1) + b;
            }
            return (c / 2) * (t = (t * 2 - d) / d) * t * t * t + (b + c / 2);
          };
        },
        easeInQuint: function() {
          return function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          };
        },
        easeInOutQuint: function() {
          return function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          };
        },
        easeOutQuint: function() {
          return function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          };
        },
        easeOutInQuint: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return (c / 2) * ((t = (t * 2) / d - 1) * t * t * t * t + 1) + b;
            }
            return (c / 2) * (t = (t * 2 - d) / d) * t * t * t * t + (b + c / 2);
          };
        },
        easeInSine: function() {
          return function(x, t, b, c, d) {
            return -c * cos(t / d * PI_2) + c + b;
          };
        },
        easeInOutSine: function() {
          return function(x, t, b, c, d) {
            return -c / 2 * (cos(PI * t / d) - 1) + b;
          };
        },
        easeOutSine: function() {
          return function(x, t, b, c, d) {
            return c * sin(t / d * PI_2) + b;
          };
        },
        easeOutInSine: function() {
          return function(x, t, b, c, d) {
            if (t < d / 2) {
              return (c / 2) * sin((t * 2) / d * PI_2) + b;
            }
            return -(c / 2) * cos((t * 2 - d) / d * PI_2) + (c / 2) + (b + c / 2);
          };
        }
      }
    });
    return $.extend($.easing, (function() {
      var easing, func, name, _ref;
      easing = {};
      _ref = $.easingFactory;
      for (name in _ref) {
        func = _ref[name];
        easing[name] = func();
      }
      easing.ease = easing.easeOutQuad;
      return easing;
    })());
  })(jQuery);

  (function($) {
    var $document, doNothing, hook;
    $document = $(document);
    doNothing = function() {};
    hook = function(selectors, events, callback) {
      var event, handle, special, _i, _len, _results;
      $document.on(events.join(' '), selectors.join(','), doNothing);
      _results = [];
      for (_i = 0, _len = events.length; _i < _len; _i++) {
        event = events[_i];
        if ((special = $.event.special[event]) == null) {
          special = $.event.special[event] = {};
        }
        handle = special.handle;
        _results.push($.extend(special, {
          handle: callback(handle)
        }));
      }
      return _results;
    };
    hook(['a'], ['click', 'dblclick', 'focusout', 'hover', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup'], function(handle) {
      return function(_arg) {
        var currentTarget, handler, preventDefault, _ref;
        (_ref = _arg.handleObj, handler = _ref.handler), currentTarget = _arg.currentTarget, preventDefault = _arg.preventDefault;
        if ($(currentTarget).prop('disabled')) {
          preventDefault();
          return false;
        }
        return (handle != null ? handle : handler).apply(this, arguments);
      };
    });
    hook(['input', 'textarea'], ['input', 'propertychange'], function(handle) {
      return function(_arg) {
        var currentTarget, handler, _ref;
        (_ref = _arg.handleObj, handler = _ref.handler), currentTarget = _arg.currentTarget;
        (handle != null ? handle : handler).apply(this, arguments);
        return $(currentTarget).trigger('valuechange');
      };
    });
    return hook([':radio', ':checkbox'], ['change'], function(handle) {
      return function(_arg) {
        var $currentTarget, currentTarget, handler, _ref;
        (_ref = _arg.handleObj, handler = _ref.handler), currentTarget = _arg.currentTarget;
        (handle != null ? handle : handler).apply(this, arguments);
        $currentTarget = $(currentTarget);
        return $("input[type=\"" + ($currentTarget.attr('type')) + "\"][name=\"" + ($currentTarget.attr('name')) + "\"]").trigger('valuechange');
      };
    });
  })(jQuery);

  (function($) {
    $.Event.prototype.clone = function() {
      return $.extend($.Event(), this);
    };
    return $.fn.once = $.fn.one;
  })(jQuery);

  (function($) {
    var $html, $window;
    $html = $('html');
    $window = $(window);
    return $.extend({
      /*
      蛻晄悄蛹匁凾繝ｻ繝ｪ繧ｵ繧､繧ｺ譎ゅ�繝�ヰ繧､繧ｹ蝗櫁ｻ｢譎ゅ↓繧ｳ繝ｳ繝�Φ繝��蟷�ｒ繝�ヰ繧､繧ｹ縺ｮ繧ｦ繧｣繝ｳ繝峨え蟷�↓
      蜷医ｏ縺帙∪縺吶�

      iPhone縺ｯ`<meta name="viewport" content="width=***">`縺ｮ蛟､繧偵さ繝ｳ繝�Φ繝��蟷�↓
      險ｭ螳壹＠縺ｾ縺吶�
      Android縺ｯ`<html style="zoom:***">`繧�(繝�ヰ繧､繧ｹ縺ｮ繧ｦ繧｣繝ｳ繝峨え蟷�/繧ｳ繝ｳ繝�Φ繝��蟷�)縺ｫ
      險ｭ螳壹＠縺ｾ縺吶�

      ```js
      $.fitViewport();
      ```

      @param {Number}  viewport 縺ｮ蟷�
      @param {Boolean} 繝ｦ繝ｼ繧ｶ縺ｮ蜈･蜉帙〒繧ｹ繧ｱ繝ｼ繝ｫ繧貞､画峩蜿ｯ閭ｽ縺�
      @param {Boolean} 繝｢繝舌う繝ｫ縺ｮ縺ｿ縺ｧ讖溯�縺吶ｋ縺�
      */

      fitViewport: function(width, userScalable, withScale) {
        var $head, $meta, content, fit, key, props, scale, tmp;
        if (width == null) {
          width = 640;
        }
        if (userScalable == null) {
          userScalable = false;
        }
        if (withScale == null) {
          withScale = false;
        }
        $head = $('head');
        $meta = $head.find('meta[name="viewport"]');
        props = {};
        if (!userScalable) {
          props['user-scalable'] = 'no';
        }
        if ($.os.ios) {
          props = {
            width: width
          };
          if (withScale) {
            scale = 320 / width;
            props['initial-scale'] = scale;
            props['minimum-scale'] = scale;
            props['maximum-scale'] = scale;
          }
        }
        tmp = [];
        for (key in props) {
          tmp.push(key + '=' + props[key]);
        }
        content = tmp.join(',');
        if ($meta.length !== 0) {
          if (typeof console !== "undefined" && console !== null) {
            console.warn('$.fitViewport 縺悟ｮ夂ｾｩ貂医∩縺ｮ viewport 縺ｮ險ｭ螳壹ｒ荳頑嶌縺阪＠縺ｾ縺励◆');
          }
        } else {
          $meta = $('<meta>').attr('name', 'viewport').prependTo($head);
        }
        $meta.attr('content', content);
        if ($.os.ios) {
          $html.data('zoom', 1);
          return;
        }
        fit = function() {
          var zoom;
          zoom = window.innerWidth / width;
          return $html.data('zoom', zoom).css('zoom', zoom);
        };
        fit();
        return $window.on('load resize', fit);
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      /*
      a 繧ｿ繧ｰ縺ｫ target 螻樊ｧ縺瑚ｨｭ螳壹＆繧後※縺�※ _self 莉･螟悶↑繧牙ｼｷ蛻ｶ逧�↓蛻･遯薙ｒ髢九″縺ｾ縺吶�
      */

      forceTarget: function() {
        return this.on('click', function(e) {
          var $a, target;
          $a = $(this);
          if (!$a.is('a')) {
            return;
          }
          target = $a.attr('target');
          if (target === '_self') {
            return;
          }
          e.preventDefault();
          return window.open($a.attr('href'), target);
        });
      }
    });
  })(jQuery);

  (function($) {
    $.extend({
      ga: function(id) {
        var ga, gaq, s;
        gaq = window._gaq || [];
        gaq.push(['_setAccount', id]);
        gaq.push(['_trackPageview']);
        ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = "" + (document.location.protocol === 'https:' ? 'https://ssl' : 'http://www') + ".google-analytics.com/ga.js";
        s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
        return window._gaq = gaq;
      },
      gaPageview: function(page, callback) {
        return _gaq.push([
          '_trackPageview', {
            page: page,
            hitCallback: callback
          }
        ]);
      }
    });
    return $.fn.extend({
      gaPageview: function(attr) {
        return this.on('click', function(e) {
          var $el, callback, page, target;
          $el = $(this);
          page = $el.attr(attr);
          if (page == null) {
            return;
          }
          if ($el.is('a')) {
            target = $el.attr('target');
            if (!e.ctrlKey && !e.metaKey && (!target || target === '_self')) {
              e.preventDefault();
              callback = function() {
                return location.href = $el.attr('href');
              };
            }
          }
          return $.gaPageview(page, callback);
        });
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      alphaImageLoader: function() {
        return this.each(function() {
          var $el;
          $el = $(this);
          return $el.css({
            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"" + ($el.attr('src')) + "\", sizingMethod=\"scale\");"
          });
        });
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      lines: function(lines, ellipsis) {
        var walk;
        if (ellipsis == null) {
          ellipsis = '';
        }
        walk = function($el) {
          var goAhead, goBack, height, iChar, iLine, maxChar, text;
          text = $el.text();
          $el.text('');
          if (lines === 0) {
            return this;
          }
          height = $el.height();
          iLine = 0;
          iChar = 0;
          maxChar = text.length;
          goAhead = function() {
            var h;
            while (iChar++ < maxChar) {
              $el.text(text.substr(0, iChar));
              if ((h = $el.height()) > height) {
                height = h;
                iLine++;
                if (iLine > lines) {
                  goBack();
                  break;
                }
              }
            }
            return iLine;
          };
          goBack = function() {
            var h, _results;
            _results = [];
            while (iLine > lines) {
              $el.text(text.substr(0, --iChar) + ellipsis);
              if ((h = $el.height()) < height) {
                height = h;
                _results.push(iLine--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          };
          return goAhead();
        };
        if (lines == null) {
          return walk(this);
        } else {
          return this.each(function(i, el) {
            return walk($(el));
          });
        }
      }
    });
  })(jQuery);

  (function($) {
    var directions;
    directions = {
      TOP: parseInt('000001', 2),
      BOTTOM: parseInt('000010', 2),
      LEFT: parseInt('000100', 2),
      RIGHT: parseInt('001000', 2)
    };
    directions.TOP_LEFT = directions.TOP | directions.LEFT;
    directions.TOP_RIGHT = directions.TOP | directions.RIGHT;
    directions.BOTTOM_LEFT = directions.BOTTOM | directions.LEFT;
    directions.BOTTOM_RIGHT = directions.BOTTOM | directions.RIGHT;
    $.extend(directions);
    return $.fn.extend({
      /**
      繝槭せ繧ｯ陦ｨ迴ｾ縺ｫ蠢�ｦ√↑隕∫ｴ�繧定ｿｽ蜉�縺励∪縺吶�
      ```html
      <div class="mask"><img src="images/dummy.png"></div>
      ```
      ```javascript
      $('div.mask')
      .mask($.RIGHT_BOTTOM)
      .css({
        width: 0,
        height: 0
      })
      .animate({
        width: '100%',
        height: '100%'
      });
      ```
      @param {int|object} origin 繝槭せ繧ｯ縺ｮ蜴溽せ菴咲ｽｮ繧堤､ｺ縺吶ヵ繝ｩ繧ｰ縺気SS繧ｪ繝悶ず繧ｧ繧ｯ繝医〒縺吶�
      */

      mask: function(origin) {
        var pos;
        if ($.isNumeric(origin)) {
          pos = {};
          if ((origin & $.TOP) === $.TOP) {
            pos.top = 0;
          } else if ((origin & $.BOTTOM) === $.BOTTOM) {
            pos.bottom = 0;
          }
          if ((origin & $.LEFT) === $.LEFT) {
            pos.left = 0;
          } else if ((origin & $.RIGHT) === $.RIGHT) {
            pos.right = 0;
          }
          origin = pos;
        }
        if (origin == null) {
          origin = {
            top: 0,
            left: 0
          };
        }
        return this.each(function() {
          var $el, $mask, $outer, height, width;
          $el = $(this);
          if ($el.find('.js-mask').length !== 0) {
            return;
          }
          $el.wrapInner('<div><div><div>');
          width = $el.width();
          height = $el.height();
          $outer = $el.children().addClass('js-outer').css({
            position: 'relative',
            width: width,
            height: height
          });
          $mask = $outer.children().addClass('js-mask').css($.extend(origin, {
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }));
          return $mask.children().addClass('js-inner').css($.extend(origin, {
            position: 'absolute',
            width: width,
            height: height
          }));
        });
      },
      /**
      `$.fn.mask`縺ｧ霑ｽ蜉�縺励◆隕∫ｴ�繧貞炎髯､縺励∪縺吶�
      */

      unmask: function() {
        return this.each(function() {
          var $el;
          $el = $(this);
          return $el.find('.js-inner').children().unwrap().unwrap().unwrap().css({
            position: '',
            top: '',
            bottom: '',
            left: '',
            right: '',
            width: '',
            height: ''
          });
        });
      }
    });
  })(jQuery);

  (function($) {
    var $window, windowLoaded;
    $window = $(window);
    windowLoaded = false;
    $(window).one("load", function() {
      return windowLoaded = true;
    });
    return $.extend({
      /*
      繧ｳ繝ｳ繝�Φ繝��繝ｭ繝ｼ繝牙ｮ御ｺ�ｾ後√い繝峨Ξ繧ｹ繝舌�繧帝國縺励∪縺吶�

      繝｢繝舌う繝ｫ縺ｮ蝣ｴ蜷医�縺ｿ蜍穂ｽ懊＠縺ｾ縺吶�
      繧ｳ繝ｳ繝�Φ繝��繝ｭ繝ｼ繝牙ｮ御ｺ�凾縺ｫ譌｢縺ｫ繝ｦ繝ｼ繧ｶ繝ｼ縺後せ繧ｯ繝ｭ繝ｼ繝ｫ縺励※縺�◆蝣ｴ蜷医�蜍穂ｽ懊＠縺ｾ縺帙ｓ縲�
      縺薙ｌ縺ｯ繝ｦ繝ｼ繧ｶ縺ｮ莉ｻ諢上�謫堺ｽ懊ｒ髦ｻ螳ｳ縺励↑縺�◆繧√�謗ｪ鄂ｮ縺ｧ縺吶�

      ```js
      $.hideAddressBar();
      ```
      */

      hideAddressBar: function() {
        var hide;
        hide = function() {
          if ($window.scrollTop() === 0) {
            return $window.scrollTop(1);
          }
        };
        if (windowLoaded) {
          return hide();
        } else if ($.os.iOS && $.os.versionNumber < 5) {
          return $window.one('load', function() {
            return setTimeout(hide, 0);
          });
        } else {
          return $window.one('load', hide);
        }
      },
      /*
      蜈ｨ隕∫ｴ�縺ｫ騾乗�縺ｮbackground-image繧定ｨｭ鄂ｮ縺吶ｋ

      Android 4.x 邉ｻ縺ｧ縲後�繝ｼ繧ｸ縺ｮ閾ｪ蜍戊ｪｿ謨ｴ縲阪′ON縺ｫ縺ｪ縺｣縺ｦ縺�ｋ縺ｨ蜍晄焔縺ｫ謾ｹ陦後＆繧後ｋ蝠城｡後ｒ隗｣豎ｺ
      */

      disableAutoFitPage: function() {
        if ($.os.android && $.os.versionNumber >= 4) {
          return $('<style>').text("html, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=) no-repeat;\n}").appendTo('head');
        }
      }
    });
  })(jQuery);

  (function($) {
    var R_ANDROID, R_I_PAD, R_I_PHONE, R_I_POD, R_LINUX, R_MAC, R_WINDOWS, UA, name, os, version, _ref;
    UA = window.navigator.userAgent.toLowerCase();
    R_I_PHONE = /\((iphone).*?os ([\d_]+).*?\)/;
    R_I_POD = /\((ipod).*?os ([\d_]+).*?\)/;
    R_I_PAD = /\((ipad).*?os ([\d_]+).*?\)/;
    R_ANDROID = /\(.*?(android) ([\d\.]+).*?\)/;
    R_MAC = /\(.*?(mac) os x ([\d_\.]+).*?\)/;
    R_LINUX = /\(.*?(linux) (\w+)v\)/;
    R_WINDOWS = /\(.*?(windows) (\w+).*?\)/;
    _ref = R_I_PHONE.exec(UA) || R_I_POD.exec(UA) || R_I_PAD.exec(UA) || R_ANDROID.exec(UA) || R_MAC.exec(UA) || R_WINDOWS.exec(UA) || R_LINUX.exec(UA) || [], _ref[0], name = _ref[1], version = _ref[2];
    os = {};
    if (name != null) {
      os[name] = true;
      os.version = version.split('_').join('.');
    }
    if (os.iphone || os.ipod || os.ipad) {
      os.ios = true;
    }
    if (os.ios || os.android) {
      os.mobile = true;
    }
    if (os.version != null) {
      os.versionNumber = parseInt(os.version, 10);
    }
    return $.extend({
      os: os
    });
  })(jQuery);

  (function($) {
    var findURL, validate;
    findURL = function(el, urls) {
      var bgImage, url, _ref;
      if (el.nodeName === 'IMG' && ((url = $(el).attr('src')) != null)) {
        urls.push(url);
      }
      if ((bgImage = $(el).css('background-image')) !== 'none' && ((url = (_ref = /url\("?(.*?)"?\)/.exec(bgImage)) != null ? _ref[1] : void 0) != null)) {
        return urls.push(url);
      }
    };
    validate = function(urls) {
      var filtered, storage, url, _i, _len;
      filtered = [];
      storage = {};
      for (_i = 0, _len = urls.length; _i < _len; _i++) {
        url = urls[_i];
        if ((url != null) && !/^\s*$/.test(url) && !storage[url]) {
          filtered.push(url);
        }
        storage[url] = true;
      }
      return filtered;
    };
    return $.fn.extend({
      preload: function(urls) {
        var el, loaded, search, total, url, _fn, _i, _j, _k, _len, _len1, _len2, _ref,
          _this = this;
        if (urls == null) {
          urls = [];
        }
        for (_i = 0, _len = this.length; _i < _len; _i++) {
          el = this[_i];
          findURL(el, urls);
          _ref = $(el).find('*');
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            el = _ref[_j];
            findURL(el, urls);
          }
        }
        urls = validate(urls);
        total = urls.length;
        if (total === 0) {
          setTimeout(function() {
            return _this.trigger($.Event('complete'));
          }, 0);
          return this;
        }
        search = $.browser.msie && $.browser.versionNumber < 9 ? "?timestamp=" + (new Date().getTime()) : '';
        loaded = 0;
        _fn = function(url) {
          return $('<img>').one('load error', function() {
            _this.trigger($.Event('progress', {
              loadedFiles: ++loaded,
              totalFiles: total
            }));
            if (loaded === total) {
              return _this.trigger($.Event('complete'));
            }
          }).attr('src', url + search);
        };
        for (_k = 0, _len2 = urls.length; _k < _len2; _k++) {
          url = urls[_k];
          _fn(url);
        }
        return this;
      }
    });
  })(jQuery);

  (function($) {
    return $.extend($.propHooks, {
      disabled: {
        get: function(elem, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('input, textarea, select, button')) {
            return null;
          }
          return !!$elem.data('disabled');
        },
        set: function(elem, value, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('input, textarea, select, button')) {
            return void 0;
          }
          if (value === $elem.data('disabled')) {
            return null;
          }
          value = !!value;
          return $elem.data('disabled', value).trigger($.Event('change:disabled', {
            bubbles: false,
            disabled: value
          }));
        }
      },
      checked: {
        get: function(elem, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is(':checkbox, :radio')) {
            return null;
          }
          return !!$elem.data('checked');
        },
        set: function(elem, value, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is(':checkbox, :radio')) {
            return void 0;
          }
          if (value === $elem.data('checked')) {
            return null;
          }
          value = !!value;
          return $elem.data('checked', value).trigger($.Event('change:checked', {
            bubbles: false,
            checked: value
          }));
        }
      },
      selected: {
        get: function(elem, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('option')) {
            return null;
          }
          return !!$elem.data('selected');
        },
        set: function(elem, value, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('option')) {
            return void 0;
          }
          if (value === $elem.data('selected')) {
            return null;
          }
          value = !!value;
          return $elem.data('selected', value).trigger($.Event('change:selected', {
            bubbles: false,
            selected: value
          }));
        }
      },
      selectedIndex: {
        get: function(elem, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('select')) {
            return null;
          }
          return $elem.data('selectedIndex' != null ? 'selectedIndex' : -1);
        },
        set: function(elem, value, name) {
          var $elem;
          $elem = $(elem);
          if ($elem.is('select')) {
            return void 0;
          }
          value = +value;
          if (value === $elem.data('selectedIndex')) {
            return null;
          }
          return $elem.data('selectedIndex', value).trigger($.Event('change:selectedIndex', {
            bubbles: false,
            selectedIndex: value
          }));
        }
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      mapScheme: function() {
        return this.on('click', function(e) {
          var $el, href, query, time, url;
          e.preventDefault();
          $el = $(this);
          href = $el.attr('href');
          query = href.match(/(\?q=.*)/)[1];
          url = 'comgooglemaps://' + query;
          time = +(new Date);
          setTimeout(function() {
            if (+(new Date) - time < 2000) {
              return location.href = href;
            }
          }, 500);
          return window.open(url, '_self');
        });
      }
    });
  })(jQuery);

  (function($) {
    var currentTop, onScroll, onTouchMove, planeQueues, rangeQueues;
    currentTop = null;
    planeQueues = null;
    rangeQueues = null;
    onTouchMove = function() {};
    onScroll = function() {
      var dist, easing, from, func, isInit, maxHeight, pos, ratio, to, top, _i, _j, _len, _len1, _ref, _ref1;
      top = $('body').scrollTop();
      maxHeight = $.$body.height() - $.$window.height();
      for (_i = 0, _len = planeQueues.length; _i < _len; _i++) {
        _ref = planeQueues[_i], pos = _ref.pos, func = _ref.func;
        if (pos < 0) {
          pos += maxHeight;
        }
        isInit = currentTop == null;
        if ((isInit || currentTop < pos) && top >= pos) {
          func(1, isInit);
        } else if ((isInit || currentTop > pos) && top <= pos) {
          func(-1, isInit);
        }
      }
      for (_j = 0, _len1 = rangeQueues.length; _j < _len1; _j++) {
        _ref1 = rangeQueues[_j], from = _ref1.from, to = _ref1.to, dist = _ref1.dist, func = _ref1.func, easing = _ref1.easing;
        if (from < 0) {
          from += maxHeight;
        }
        if (to < 0) {
          to += maxHeight;
        }
        ratio = (top - from) / dist;
        ratio = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio;
        func(easing(null, ratio, 0, 1, 1));
      }
      return currentTop = top;
    };
    return $.extend({
      delegateScroll: function(queues, context) {
        var dist, easing, event, from, func, funcs, i, pos, to, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
        planeQueues = [];
        rangeQueues = [];
        for (event in queues) {
          funcs = queues[event];
          if (!$.isArray(funcs)) {
            funcs = [funcs];
          }
          if (context != null) {
            for (i = _i = 0, _len = funcs.length; _i < _len; i = ++_i) {
              func = funcs[i];
              funcs[i] = $.proxy(func, context);
            }
          }
          _ref = event.split(/\s+/), pos = _ref[0], easing = _ref[1];
          _ref1 = pos.split('~'), from = _ref1[0], to = _ref1[1];
          from = +from;
          to = +to;
          if (isNaN(to)) {
            for (_j = 0, _len1 = funcs.length; _j < _len1; _j++) {
              func = funcs[_j];
              planeQueues.push({
                pos: from,
                func: func
              });
            }
          } else {
            dist = to - from;
            easing = $.easing[easing] || $.easing.linear;
            for (_k = 0, _len2 = funcs.length; _k < _len2; _k++) {
              func = funcs[_k];
              rangeQueues.push({
                from: from,
                to: to,
                dist: dist,
                func: func,
                easing: easing
              });
            }
          }
        }
        $.$document.off('touchmove', onTouchMove).on('touchmove', onTouchMove);
        $.$window.off('scroll', onScroll).on('scroll', onScroll);
        return onScroll();
      },
      undelegateScroll: function() {
        $.$window.off('scroll', onScroll);
        currentTop = null;
        planeQueues = null;
        return rangeQueues = null;
      }
    });
  })(jQuery);

  (function($) {
    var $window, calculateTop;
    $window = $(window);
    $.fn.extend({
      pos: function() {
        var position, prop, zoom;
        position = $(this).offset();
        if ((zoom = $('html').data('zoom')) != null) {
          for (prop in position) {
            position[prop] *= zoom;
          }
        }
        return position;
      }
    });
    calculateTop = function(top) {
      var $el, type;
      type = Object.prototype.toString.call(top);
      if (type === '[object Number]') {
        return top;
      } else if (top === '#') {
        if ($.os.android) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (type === '[object String]') {
          if (top.indexOf('/') !== -1) {
            return -1;
          }
        }
        $el = $(top);
        if ($el.length === 0) {
          return -1;
        }
        return $el.pos().top;
      }
    };
    return $.extend({
      startScroll: function(top, options) {
        top = calculateTop(top);
        if (top < 0) {
          return false;
        }
        $('html, body').stop(true, false).animate({
          scrollTop: top
        }, options);
        return true;
      },
      stopScroll: function() {
        return $('html, body').stop(true, false);
      },
      setScroll: function(top) {
        top = calculateTop(top);
        if (top < 0) {
          return false;
        }
        $('html, body').stop(true, false).scrollTop(top);
        return true;
      }
    });
  })(jQuery);

  (function($) {
    var stringify;
    stringify = function(obj) {
      var prop, queries, val;
      queries = [];
      for (prop in obj) {
        val = obj[prop];
        queries.push("" + prop + "=" + (encodeURIComponent(val)));
      }
      return queries.join('&');
    };
    $.extend({
      facebook: {
        createShareURL: function(url) {
          return "http://www.facebook.com/share.php?" + (stringify({
            u: url
          }));
        }
      },
      twitter: {
        createTweetURL: function(text, url) {
          return "http://twitter.com/share?" + (stringify({
            text: text,
            url: url
          }));
        }
      },
      googlePlus: {
        createShareURL: function(url) {
          return "https://plus.google.com/share?" + (stringify({
            url: url
          }));
        }
      },
      line: {
        createChatURL: function(text) {
          if ($.os.mobile) {
            return "line://msg/text/" + text;
          } else {
            return "http://line.naver.jp/R/msg/text/?" + text;
          }
        }
      }
    });
    return $.fn.extend({
      facebookShare: function(urlAttr, outputAttr) {
        var $el;
        if (urlAttr == null) {
          urlAttr = 'data-url';
        }
        if (outputAttr == null) {
          outputAttr = 'href';
        }
        $el = $(this);
        return $el.attr(outputAttr, $.facebook.createShareURL($el.attr(urlAttr)));
      },
      twitterTweet: function(textAttr, urlAttr, outputAttr) {
        var $el;
        if (textAttr == null) {
          textAttr = 'data-text';
        }
        if (urlAttr == null) {
          urlAttr = 'data-url';
        }
        if (outputAttr == null) {
          outputAttr = 'href';
        }
        $el = $(this);
        return $el.attr(outputAttr, $.twitter.createTweetURL($el.attr(textAttr), $el.attr(urlAttr)));
      },
      googlePlusShare: function(urlAttr, outputAttr) {
        var $el;
        if (urlAttr == null) {
          urlAttr = 'data-url';
        }
        if (outputAttr == null) {
          outputAttr = 'href';
        }
        $el = $(this);
        return $el.attr(outputAttr, $.googlePlus.createShareURL($el.attr(urlAttr)));
      },
      lineChat: function() {
        return this.each(function() {
          var $el, text;
          $el = $(this);
          if ($el.is('a')) {
            text = encodeURIComponent(text);
            $el.attr({
              href: $.line.createChatURL(text)
            });
            if (!$.os.mobile && (($el.attr('target')) == null)) {
              return $el.attr({
                target: '_blank'
              });
            }
          }
        });
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      stylable: function() {
        return this.each(function() {
          var $el;
          $el = $(this);
          if ($el.is('select')) {
            return new $.tm.stylable.Select($el);
          } else if ($el.is('input[type="radio"]')) {
            return new $.tm.stylable.Radio($el);
          } else if ($el.is('input[type="checkbox"]')) {
            return new $.tm.stylable.Checkbox($el);
          }
        });
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      style: function() {
        var el, prop, r, style, val, _i, _len, _ref, _ref1;
        el = this.get(0);
        r = {};
        if (window.getComputedStyle != null) {
          style = window.getComputedStyle(el, '');
          for (_i = 0, _len = style.length; _i < _len; _i++) {
            prop = style[_i];
            val = style.getPropertyValue(prop);
            if (val) {
              r[prop] = val;
            }
          }
        } else if (el.currentStyle != null) {
          _ref = el.currentStyle;
          for (prop in _ref) {
            val = _ref[prop];
            r[prop] = val;
          }
        } else if (el.style != null) {
          _ref1 = el.style;
          for (prop in _ref1) {
            val = _ref1[prop];
            if (typeof val !== 'function') {
              r[prop] = val;
            }
          }
        }
        return r;
      },
      copyStyle: function(el, forces, ignores) {
        var diff, dst, prop, src, val;
        if (forces == null) {
          forces = [];
        }
        if (ignores == null) {
          ignores = [];
        }
        dst = this.style();
        src = $(el).style();
        diff = {};
        for (prop in src) {
          val = src[prop];
          if ($.inArray(prop, forces) !== -1 || $.inArray(prop, ignores) === -1 && dst[prop] !== val) {
            diff[prop] = val;
          }
        }
        this.css(diff);
        return this;
      }
    });
  })(jQuery);

  (function($) {
    return $.extend($.support, {
      placeholder: 'placeholder' in document.createElement('input')
    });
  })(jQuery);

  (function() {
    return $.fn.extend({
      pause: function(clearQueue, jumpToEnd) {
        if (clearQueue == null) {
          clearQueue = false;
        }
        if (jumpToEnd == null) {
          jumpToEnd = false;
        }
        return this.each(function() {
          var $el;
          $el = $(this);
          return $el.css($.support.transition, '');
        });
      }
    });
  })();

  (function($) {
    return $.fn.extend({
      /**
      n逡ｪ逶ｮ縺ｮ蟄占ｦ∫ｴ�繧貞叙蠕励＠縺ｾ縺吶�
      @param {int} index 蜿門ｾ励☆繧玖ｦ∫ｴ�縺ｮ繧､繝ｳ繝�ャ繧ｯ繧ｹ
      */

      childAt: function(index) {
        return this.children().eq(index);
      },
      /**
      閾ｪ蛻�→蟄占ｦ∫ｴ�縺九ｉ隕∫ｴ�繧呈､懃ｴ｢縺励∪縺吶�
      @param {String} selector 讀懃ｴ｢縺吶ｋ繧ｻ繝ｬ繧ｯ繧ｿ
      */

      findWithSelf: function(selector) {
        return this.find('*').addBack().filter(selector);
      },
      /**
      閾ｪ蛻�→隕ｪ隕∫ｴ�縺九ｉ隕∫ｴ�繧呈､懃ｴ｢縺励∪縺吶�
      @param {String} selector 讀懃ｴ｢縺吶ｋ繧ｻ繝ｬ繧ｯ繧ｿ
      */

      findWithParent: function(selector) {
        return this.parents('*').addBack().filter(selector);
      }
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      /**
      蜀�Κ繝ｪ繝ｳ繧ｯ縺ｮ繧ｿ繝ｼ繧ｲ繝�ヨ縺ｮ菴咲ｽｮ縺ｾ縺ｧ`<body>`繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ讖溯�繧定ｿｽ蜉�縺励∪縺吶�

      驕ｷ遘ｻ荳ｭ縺ｫ繝ｦ繝ｼ繧ｶ縺後�繧ｦ繧ｹ繝帙う繝ｼ繝ｫ縺ｮ蜈･蜉帙☆繧九→驕ｷ遘ｻ繧貞●豁｢縺励√Θ繝ｼ繧ｶ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蜈･蜉帙ｒ蜆ｪ蜈医＠縺ｾ縺吶�
      縺薙ｌ縺ｯ繝ｦ繝ｼ繧ｶ繝薙Μ繝�ぅ繧堤｢ｺ菫昴☆繧九◆繧√�謗ｪ鄂ｮ縺ｧ縺吶�

      繝上ャ繧ｷ繝･繧呈欠螳壹＠縺ｦ縺�ｋ蜈ｨ縺ｦ縺ｮ`<a>`縺ｫ蜀�Κ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ讖溯�繧定ｿｽ蜉�縺励∪縺吶�
      ```js
      $(function () {
        $('a[href^=#]').anchor();
      });
      ```

      @param {Object} [options]                      繧ｪ繝励す繝ｧ繝ｳ
      @param {Number} [options.duration=350]        繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ譎る俣(ms)
      @param {String} [options.easing='easeOutQuad'] 繧､繝ｼ繧ｸ繝ｳ繧ｰ
      @return {jQuery}                               jQuery繧ｪ繝悶ず繧ｧ繧ｯ繝�
      */

      uiAnchor: function(options) {
        return this.each(function() {
          return new $.tm.ui.Anchor(this, $.extend({
            duration: 350
          }, options));
        });
      },
      /**
      繝槭え繧ｹ繧�ち繝�メ縺ｮ迥ｶ諷九ｒ繧ｯ繝ｩ繧ｹ縺ｨ縺励※莉倅ｸ弱＠縺ｾ縺�
      ```js
      $('.button').uiButton({
        out: 'out',
        over: 'over',
        down: 'down'
      });
      ```
      */

      uiButton: function(postfixes, classes, options) {
        var recursive, toggle, _ref;
        _ref = $.extend({
          recursive: true,
          toggle: false
        }, options), recursive = _ref.recursive, toggle = _ref.toggle;
        return this.each(function() {
          return new $.tm.ui.Button(this, postfixes, classes, recursive, toggle);
        });
      },
      uiSelector: function() {
        new $.tm.ui.Selector(this);
        return this;
      },
      /**
      CheckBox 繧剃ｽ懊ｊ縺ｾ縺�
      @param check {String|HTMLElement|jQueryObject} 繝√ぉ繝�け繧堤､ｺ縺吶そ繝ｬ繧ｯ繧ｿ繧ゅ＠縺上�繧ｨ繝ｬ繝｡繝ｳ繝医〒縺�
      */

      uiCheckbox: function(check) {
        return this.each(function() {
          return new $.tm.ui.Checkbox(this, check);
        });
      },
      uiRadio: function(check) {
        var $radios;
        $radios = this;
        return this.each(function() {
          return new $.tm.ui.Radio(this, check, $radios);
        });
      },
      uiSlider: function(options, animateOptions) {
        var bounceRatio, gap, isLoop, step, _ref;
        _ref = $.extend({
          step: 1,
          isLoop: true,
          gap: 0,
          bounceRatio: 0.5
        }, options), step = _ref.step, isLoop = _ref.isLoop, gap = _ref.gap, bounceRatio = _ref.bounceRatio;
        animateOptions = $.extend({
          duration: 500,
          easing: 'out'
        }, animateOptions);
        return this.each(function() {
          return new $.tm.ui.Slider(this, step, isLoop, gap, bounceRatio, animateOptions);
        });
      },
      uiDrawer: function(content) {
        return this.each(function() {
          return new $.tm.ui.Drawer(this, content);
        });
      },
      uiPlaceholder: function(options) {
        if ($.support.placeholder) {
          return;
        }
        return this.each(function() {
          return new $.tm.ui.Placeholder(this, options);
        });
      }
    });
  })(jQuery);

  (function($) {
    return $.extend($.valHooks, {
      select: {
        set: function(elem, value, name) {
          var $elem, $option;
          $elem = $(elem);
          $option = $elem.find("option[value='" + value + "']");
          if ($option.length > 0 && value !== $elem.find('option:selected').attr('value')) {
            $elem.trigger($.Event('willChange:value', {
              bubbles: false,
              value: value,
              $option: $option
            }));
          }
        }
      }
    });
  })(jQuery);

  (function($) {
    var add, groupWithName;
    groupWithName = function($el) {
      var groups, name, names;
      groups = [];
      names = {};
      $el.each(function() {
        return names[$(this).attr('name')] = true;
      });
      for (name in names) {
        if (names.hasOwnProperty(name)) {
          groups.push($el.filter("[name=\"" + name + "\"]"));
        }
      }
      return groups;
    };
    add = function(obj, name, val) {
      var v;
      if (name == null) {
        return;
      }
      if ((v = obj[name]) != null) {
        if ($.isArray(v)) {
          return v.push(val);
        } else {
          return obj[name] = [v, val];
        }
      } else {
        return obj[name] = val;
      }
    };
    return $.fn.extend({
      value: function(data) {
        var $group, name, val, _i, _len, _ref, _results;
        if (data == null) {
          data = {};
          this.findWithSelf(':input:not(:radio,:checkbox)').each(function() {
            var $el;
            $el = $(this);
            return add(data, $el.attr('name'), $el.val());
          });
          _ref = groupWithName(this.findWithSelf(':radio')).concat(groupWithName(this.findWithSelf(':checkbox')));
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $group = _ref[_i];
            $group.each(function() {
              var $el;
              $el = $(this);
              if ($el.prop('checked')) {
                return add(data, $el.attr('name'), $el.val());
              }
            });
            if (data[$group.attr('name')] == null) {
              data[$group.attr('name')] = void 0;
            }
          }
          return data;
        } else {
          _results = [];
          for (name in data) {
            val = data[name];
            _results.push(this.findWithSelf("[name=\"" + name + "\"]").val(val));
          }
          return _results;
        }
      }
    });
  })(jQuery);

  (function($) {
    return $.extend({
      $window: $(window),
      $document: $(document)
    });
  })(jQuery);

  (function($) {
    return $.fn.extend({
      wrapAbsolutely: function(css) {
        return this.each(function() {
          var $el;
          $el = $(this);
          return $el.width($el.width()).height($el.height()).wrapInner('<div>').children().css($.extend({
            position: 'absolute',
            width: '100%',
            height: '100%'
          }, css));
        });
      }
    });
  })(jQuery);

  ___exports.$.tm.Component = $.tm.Component = (function() {
    function Component(el) {
      var oldUI;
      this.$el = $(el);
      oldUI = this.$el.data(this.name);
      if (oldUI instanceof Component) {
        oldUI.destruct();
      }
      this.$el.data(this.name, this);
    }

    Component.prototype.destruct = function() {
      this.$el.off(this.events);
      this.$el.removeData(this.name);
      delete this.events;
      return delete this.$el;
    };

    Component.prototype.delegateEvents = function(events) {
      this.events = events;
      return this.$el.on(events);
    };

    return Component;

  })();

  ___exports.$.tm.stylable.Stylable = $.tm.stylable.Stylable = (function(_super) {
    var ignores, transparent;

    __extends(Stylable, _super);

    transparent = {
      opacity: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'inline',
      width: '100%',
      height: '100%'
    };

    ignores = (function() {
      var prop, _results;
      _results = [];
      for (prop in transparent) {
        _results.push(prop);
      }
      return _results;
    })();

    ignores.push('-webkit-appearance');

    function Stylable(el) {
      Stylable.__super__.constructor.call(this, el);
      this.$el.data('stylable', true);
      this.$el.wrap('<div>');
      this.className = "tm-" + this.name;
      this.$wrapper = this.$el.parent().addClass(this.className);
      if (this.$wrapper.css('position') === 'static') {
        this.$wrapper.css({
          position: 'relative'
        });
      }
      this.$el.css(transparent);
    }

    Stylable.prototype.destruct = function() {
      Stylable.__super__.destruct.call(this);
      return this.$el.unwrap().removeData('stylable');
    };

    return Stylable;

  })($.tm.Component);

  ___exports.$.tm.stylable.Radio = $.tm.stylable.Radio = (function(_super) {
    __extends(Radio, _super);

    Radio.prototype.name = 'radio';

    function Radio(el) {
      this.onChanged = __bind(this.onChanged, this);
      var $dummy;
      Radio.__super__.constructor.call(this, el);
      $dummy = $('<div>').addClass("" + this.className + " " + this.className + "Checked").css({
        display: 'none'
      });
      this.$wrapper.after($dummy);
      this.delegateEvents({
        'valuechange': this.onChanged
      });
      this.onChanged();
    }

    Radio.prototype.onChanged = function() {
      if (this.$el.prop('checked')) {
        return this.$wrapper.addClass("" + this.className + "Checked");
      } else {
        return this.$wrapper.removeClass("" + this.className + "Checked");
      }
    };

    return Radio;

  })($.tm.stylable.Stylable);

  ___exports.$.tm.stylable.Checkbox = $.tm.stylable.Checkbox = (function(_super) {
    __extends(Checkbox, _super);

    Checkbox.prototype.name = 'checkbox';

    function Checkbox(el) {
      Checkbox.__super__.constructor.call(this, el);
    }

    return Checkbox;

  })($.tm.stylable.Radio);

  ___exports.$.tm.stylable.Select = $.tm.stylable.Select = (function(_super) {
    __extends(Select, _super);

    Select.prototype.name = 'select';

    function Select(el) {
      this.onWillChange = __bind(this.onWillChange, this);
      this.onChanged = __bind(this.onChanged, this);
      Select.__super__.constructor.call(this, el);
      this.$label = $('<span>').addClass("" + this.className + "Label").appendTo(this.$wrapper);
      this.delegateEvents({
        'change': this.onChanged,
        'willChange:value': this.onWillChange
      });
      this.onChanged();
    }

    Select.prototype.onChanged = function() {
      return this.$label.text(this.$el.find('option:selected').text());
    };

    Select.prototype.onWillChange = function(e) {
      return this.$label.text(e.$option.text());
    };

    return Select;

  })($.tm.stylable.Stylable);

  ___exports.$.tm.ui.Anchor = $.tm.ui.Anchor = (function(_super) {
    __extends(Anchor, _super);

    Anchor.prototype.name = 'anchor';

    function Anchor(el, options) {
      this.options = options;
      this._clicked = __bind(this._clicked, this);
      Anchor.__super__.constructor.call(this, el);
      this.delegateEvents({
        'click': this._clicked
      });
    }

    Anchor.prototype._clicked = function(e) {
      var href;
      href = this.$el.attr('href');
      if (!$.startScroll(href, this.options)) {
        return;
      }
      return e.preventDefault();
    };

    return Anchor;

  })($.tm.Component);

  ___exports.$.tm.ui.Button = $.tm.ui.Button = (function(_super) {
    var unique;

    __extends(Button, _super);

    unique = function(array) {
      var storage, uniqueArray, value, _i, _len;
      storage = {};
      uniqueArray = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        value = array[_i];
        if (storage[value]) {
          continue;
        }
        storage[value] = true;
        uniqueArray[uniqueArray.length] = value;
      }
      return uniqueArray;
    };

    Button.prototype.name = 'button';

    function Button(el, postfixes, classes, recursive, toggle) {
      var $imgs, i, img, key, nameParts, postfix, src, unloadedPostfixes, _i, _j, _len, _len1, _ref, _ref1;
      this.postfixes = postfixes;
      this.classes = classes;
      this.recursive = recursive;
      this.toggle = toggle;
      this._onClick = __bind(this._onClick, this);
      this._onMouseUp = __bind(this._onMouseUp, this);
      this._onMouseDown = __bind(this._onMouseDown, this);
      this._onMouseOver = __bind(this._onMouseOver, this);
      this._onMouseOut = __bind(this._onMouseOut, this);
      this._updateSelected = __bind(this._updateSelected, this);
      this._updateDisabled = __bind(this._updateDisabled, this);
      Button.__super__.constructor.call(this, el);
      if (!(((_ref = this.$el) != null ? _ref.length : void 0) > 0)) {
        return typeof console !== "undefined" && console !== null ? console.error('element isn\'t exist') : void 0;
      }
      if (this.$el[0].nodeName === 'IMG') {
        $imgs = this.$el;
      } else if (this.recursive) {
        $imgs = this.$el.find('img');
      } else {
        $imgs = this.$el.children('img');
      }
      this._namePartsRegistry = {};
      this._$imgs = $();
      postfixes = [];
      _ref1 = this.postfixes;
      for (key in _ref1) {
        postfix = _ref1[key];
        postfixes.push(postfix);
      }
      postfixes = unique(postfixes);
      for (_i = 0, _len = $imgs.length; _i < _len; _i++) {
        img = $imgs[_i];
        src = $(img).attr('src');
        if (src == null) {
          continue;
        }
        for (i = _j = 0, _len1 = postfixes.length; _j < _len1; i = ++_j) {
          postfix = postfixes[i];
          if (postfix == null) {
            continue;
          }
          nameParts = src.match(RegExp("^(.*)" + postfix + "([^/]*)$"));
          if ((nameParts != null ? nameParts.length : void 0) !== 3) {
            continue;
          }
          $._data(img, 'nameParts', nameParts);
          unloadedPostfixes = postfixes.slice();
          unloadedPostfixes.splice(i, 1);
          this._preload(nameParts, unloadedPostfixes);
          this._$imgs = this._$imgs.add(img);
          break;
        }
      }
      this.delegateEvents({
        'change:disabled': this._updateDisabled,
        'change:selected': this._updateSelected,
        'mouseleave': this._onMouseOut,
        'mouseenter': this._onMouseOver,
        'mousedown': this._onMouseDown,
        'mouseup': this._onMouseUp,
        'click': this._onClick
      });
      this._updateDisabled();
    }

    Button.prototype.destruct = function() {
      var img, _i, _len, _ref;
      _ref = this._$imgs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        img = _ref[_i];
        $._removeData(img, 'nameParts');
      }
      delete this.postfixes;
      delete this.recursive;
      delete this._currentStyle;
      delete this._isMouseOver;
      delete this._namePartsRegistry;
      delete this._$imgs;
      return Button.__super__.destruct.call(this);
    };

    Button.prototype._preload = function(nameParts, postfixes) {
      var postfix, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = postfixes.length; _i < _len; _i++) {
        postfix = postfixes[_i];
        if (postfix == null) {
          continue;
        }
        _results.push($('<img>').attr('src', nameParts[1] + postfix + nameParts[2]));
      }
      return _results;
    };

    Button.prototype._updateDisabled = function() {
      if (this.$el.prop('disabled')) {
        this.$el.css('cursor', 'default');
        this._isMouseOver = false;
      } else {
        this.$el.css('cursor', 'pointer');
      }
      return this._updateStyle();
    };

    Button.prototype._updateSelected = function() {
      return this._updateStyle();
    };

    Button.prototype._onMouseOut = function(e) {
      this._isMouseOver = false;
      return this._updateStyle();
    };

    Button.prototype._onMouseOver = function(e) {
      this._isMouseOver = true;
      return this._updateStyle();
    };

    Button.prototype._onMouseDown = function(e) {
      this._isMouseDown = true;
      return this._updateStyle();
    };

    Button.prototype._onMouseUp = function(e) {
      this._isMouseDown = false;
      return this._updateStyle();
    };

    Button.prototype._onClick = function(e) {
      if (this.toggle) {
        return this.$el.prop('selected', !this.$el.prop('selected'));
      }
    };

    Button.prototype._updateStyle = function() {
      if (this.$el.prop('selected')) {
        return this._style('selected');
      } else if (this.$el.prop('disabled')) {
        return this._style('disabled');
      } else if (this._isMouseDown) {
        return this._style('down');
      } else if (this._isMouseOver) {
        return this._style('over');
      } else {
        return this._style('out');
      }
    };

    Button.prototype._style = function(style) {
      var className, img, nameParts, postfix, src, status, vml, _i, _len, _ref, _ref1, _ref2, _results;
      if (!style) {
        return this._currentStyle;
      }
      if (this._currentStyle === style) {
        return this;
      }
      this._currentStyle = style;
      if (this.postfixes != null) {
        postfix = (_ref = this.postfixes[style]) != null ? _ref : this.postfixes.out;
        _ref1 = this._$imgs;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          img = _ref1[_i];
          nameParts = $._data(img, 'nameParts');
          src = nameParts[1] + postfix + nameParts[2];
          vml = img.vml;
          if (vml) {
            vml.image.fill.setAttribute('src', src);
            continue;
          }
          $(img).attr('src', src);
        }
      }
      if (this.classes != null) {
        _ref2 = this.classes;
        _results = [];
        for (status in _ref2) {
          className = _ref2[status];
          if (className) {
            if (status === style) {
              _results.push(this.$el.addClass(className));
            } else {
              _results.push(this.$el.removeClass(className));
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    return Button;

  })($.tm.Component);

  ___exports.$.tm.ui.Checkbox = $.tm.ui.Checkbox = (function(_super) {
    __extends(Checkbox, _super);

    Checkbox.prototype.name = 'checkbox';

    function Checkbox(el, check) {
      this._onClick = __bind(this._onClick, this);
      this._updateCheck = __bind(this._updateCheck, this);
      Checkbox.__super__.constructor.call(this, el);
      this.$check = this.$el.find(check);
      this.delegateEvents({
        'change:checked': this._updateCheck,
        'click': this._onClick
      });
      this._updateCheck();
    }

    Checkbox.prototype._updateCheck = function() {
      var checked;
      checked = this.$el.prop('checked');
      if (checked) {
        this.$check.show();
      } else {
        this.$check.hide();
      }
      return checked;
    };

    Checkbox.prototype._onClick = function() {
      this.$el.prop('checked', !this.$el.prop('checked'));
      return this.$el.trigger($.Event('change'));
    };

    return Checkbox;

  })($.tm.Component);

  ___exports.$.tm.ui.Radio = $.tm.ui.Radio = (function(_super) {
    __extends(Radio, _super);

    Radio.prototype.name = 'radio';

    function Radio(el, check, $radios) {
      this._onClick = __bind(this._onClick, this);
      this.$radios = $radios.not(el);
      Radio.__super__.constructor.call(this, el, check);
    }

    Radio.prototype.destruct = function() {
      Radio.__super__.destruct.call(this);
      return delete this.$radios;
    };

    Radio.prototype._onClick = function() {
      if (this.$el.prop('checked')) {
        return;
      }
      this.$el.prop('checked', true);
      this.$radios.prop('checked', false);
      return this.$el.trigger($.Event('change'));
    };

    return Radio;

  })($.tm.ui.Checkbox);

  ___exports.$.tm.ui.Drawer = $.tm.ui.Drawer = (function(_super) {
    __extends(Drawer, _super);

    Drawer.prototype.name = 'drawer';

    function Drawer(el, content) {
      this._onClick = __bind(this._onClick, this);
      this._updateSelected = __bind(this._updateSelected, this);
      Drawer.__super__.constructor.call(this, el);
      this.$content = $(content);
      this.delegateEvents({
        'change:selected': this._updateSelected,
        'click': this._onClick
      });
      this._updateSelected();
    }

    Drawer.prototype._updateSelected = function() {
      if (this.$el.prop('selected')) {
        return this.$content.stop(true, false).slideDown();
      } else {
        return this.$content.stop(true, false).slideUp();
      }
    };

    Drawer.prototype._onClick = function() {
      return this.$el.prop('selected', !this.$el.prop('selected'));
    };

    return Drawer;

  })($.tm.Component);

  ___exports.$.tm.ui.Placeholder = $.tm.ui.Placeholder = (function(_super) {
    __extends(Placeholder, _super);

    Placeholder.prototype.name = 'placeholder';

    function Placeholder(el, options) {
      this.options = options != null ? options : {};
      this._onSubmit = __bind(this._onSubmit, this);
      this._onBlur = __bind(this._onBlur, this);
      this._onFocus = __bind(this._onFocus, this);
      Placeholder.__super__.constructor.call(this, el);
      this._placeholder = this.$el.attr('placeholder');
      this._onBlur();
      this.delegateEvents({
        'focus': this._onFocus,
        'blur': this._onBlur
      });
      this.$el.closest('form').on({
        'submit': this._onSubmit
      });
    }

    Placeholder.prototype._onFocus = function() {
      if (!this._isFilled) {
        return;
      }
      this.$el.val('');
      if (this.options.color != null) {
        return this.$el.css('color', '');
      }
    };

    Placeholder.prototype._onBlur = function() {
      var val;
      val = this.$el.val();
      this._isFilled = val === '' || val === this._placeholder;
      if (!this._isFilled) {
        return;
      }
      this.$el.val(this._placeholder);
      if (this.options.color != null) {
        return this.$el.css('color', this.options.color);
      }
    };

    Placeholder.prototype._onSubmit = function(e) {
      if (!this._isFilled) {
        return;
      }
      return e.preventDefault();
    };

    return Placeholder;

  })($.tm.Component);

  ___exports.$.tm.ui.Selector = $.tm.ui.Selector = (function(_super) {
    __extends(Selector, _super);

    Selector.prototype.name = 'selector';

    function Selector(el) {
      this._onClick = __bind(this._onClick, this);
      this._updateSelectedIndex = __bind(this._updateSelectedIndex, this);
      Selector.__super__.constructor.call(this, el);
      this.delegateEvents({
        'change:selectedIndex': this._updateSelectedIndex,
        'click': this._onClick
      });
    }

    Selector.prototype._updateSelectedIndex = function(_arg) {
      var selectedIndex,
        _this = this;
      selectedIndex = _arg.selectedIndex;
      return _.defer(function() {
        return _this._updateProps(selectedIndex);
      });
    };

    Selector.prototype._onClick = function(_arg) {
      var currentTarget, deselectedIndex, selectedIndex,
        _this = this;
      currentTarget = _arg.currentTarget;
      selectedIndex = this.$el.index(currentTarget);
      deselectedIndex = this.$el.prop('selectedIndex');
      if (selectedIndex === deselectedIndex) {
        return;
      }
      this.$el.prop('selectedIndex', selectedIndex);
      $(currentTarget).trigger($.Event('change', {
        selectedIndex: selectedIndex
      }));
      return _.defer(function() {
        return _this._updateProps(selectedIndex);
      });
    };

    Selector.prototype._updateProps = function(selectedIndex) {
      return this.$el.each(function(i) {
        var selected;
        selected = i === selectedIndex;
        return $(this).prop({
          selected: selected
        });
      });
    };

    return Selector;

  })($.tm.Component);

  ___exports.$.tm.ui.Slider = $.tm.ui.Slider = (function(_super) {
    var $document, abs, getTouch;

    __extends(Slider, _super);

    abs = Math.abs;

    $document = $(document);

    getTouch = function(e) {
      var pageX, pageY, touch, _ref;
      _ref = e.originalEvent.touches[0], pageX = _ref.pageX, pageY = _ref.pageY;
      touch = {
        pageX: pageX,
        pageY: pageY,
        time: new Date().getTime()
      };
      return touch;
    };

    Slider.prototype.name = 'slider';

    function Slider(el, step, isLoop, gap, bounceRatio, animateOptions) {
      var $child, $cloned, child, deltaIndex, i, left, width, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
      this.step = step != null ? step : 1;
      this.isLoop = isLoop != null ? isLoop : true;
      this.gap = gap != null ? gap : 0;
      this.bounceRatio = bounceRatio != null ? bounceRatio : 0.5;
      this.animateOptions = animateOptions;
      this._ticked = __bind(this._ticked, this);
      this._onTouchEnd = __bind(this._onTouchEnd, this);
      this._onTouchMove = __bind(this._onTouchMove, this);
      this._onTouchStart = __bind(this._onTouchStart, this);
      this.adjust = __bind(this.adjust, this);
      Slider.__super__.constructor.call(this, el);
      this._auto = false;
      this._selectedIndex = 0;
      this._x = 0;
      this._deltaX = 0;
      this._containerWidth = this.$el.width();
      this._$children = this.$el.children();
      this._length = this._$children.length;
      this._contentWidth = 0;
      this._widthList = [];
      _ref = this._$children;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        width = $(child).outerWidth(true);
        if (width === 0) {
          width = $(child).children().width();
        }
        this._widthList[i] = width;
        this._contentWidth += width;
      }
      this._enabled = this._contentWidth > this.$el.outerWidth(false);
      this.$el.wrapInner('<div>');
      this._$content = this.$el.children().css({
        position: 'relative'
      }).addClass("js-" + this.name + "-content");
      if (this.$el.css('position') === 'static') {
        this.$el.css({
          position: 'relative'
        });
      }
      _ref1 = (this.isLoop ? [-1, 0, 1] : [0]);
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        deltaIndex = _ref1[i];
        left = this.gap + this._contentWidth * deltaIndex;
        _ref2 = this._$children;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          child = _ref2[_k];
          $child = $(child);
          $cloned = deltaIndex === 0 ? $child : $child.clone();
          $cloned.css({
            position: 'absolute',
            top: 0,
            left: left
          }).appendTo(this._$content);
          left += this._widthList[i];
        }
      }
      this._$content.css({
        x: 0
      });
      if (this._enabled) {
        this.$el.on({
          touchstart: this._onTouchStart
        });
      }
      $(window).on({
        'load resize': this.adjust
      });
    }

    Slider.prototype.destruct = function() {
      this.$el.off({
        touchstart: this._onTouchStart
      });
      this._stopListen();
      this._clearTick();
      return Slider.__super__.destruct.call(this);
    };

    Slider.prototype.adjust = function() {
      var $child, child, contentHeight, height, i, left, width, _i, _j, _len, _len1, _ref, _ref1;
      this._containerWidth = this.$el.width();
      this._contentWidth = 0;
      contentHeight = 0;
      _ref = this._$children;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        child = _ref[i];
        $child = $(child);
        width = $child.outerWidth(true);
        height = $child.outerHeight(true);
        this._widthList[i] = width;
        this._contentWidth += width;
        contentHeight = Math.max(height, contentHeight);
      }
      left = (this.isLoop ? this.gap - this._contentWidth : this.gap);
      _ref1 = this._$content.children();
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        child = _ref1[i];
        $(child).css({
          left: left
        });
        left += this._widthList[i % this._length];
      }
      this._$content.css({
        height: contentHeight
      });
      return this.moveTo(this._selectedIndex, null, true, true);
    };

    Slider.prototype._onTouchStart = function(e) {
      if ($(window).data('isScrolling')) {
        return;
      }
      if ((this._touch0 != null) || (this._touch1 != null)) {
        return;
      }
      this._deltaX = 0;
      this._startTime = new Date().getTime();
      this._touch1 = getTouch(e);
      this._clearTick();
      return this._startListen();
    };

    Slider.prototype._onTouchMove = function(e) {
      var isFirstMove, x;
      isFirstMove = this._touch0 == null;
      this._touch0 = this._touch1;
      this._touch1 = getTouch(e);
      if (isFirstMove) {
        if (abs(this._touch1.pageY - this._touch0.pageY) > abs(this._touch1.pageX - this._touch0.pageX)) {
          this._stopListen();
          this._requestTick();
          return;
        }
        this._$content.stop(true, false);
      }
      e.preventDefault();
      this._deltaX = this._touch1.pageX - this._touch0.pageX;
      x = this._x + (this._touch1.pageX - this._touch0.pageX);
      if (this.isLoop) {
        while (x <= -this._contentWidth) {
          x += this._contentWidth;
        }
        while (x > 0) {
          x -= this._contentWidth;
        }
        x %= this._contentWidth;
        this._x = x;
      } else {
        this._x = x;
        if (x > 0) {
          x *= this.bounceRatio;
        } else if (x < -this._contentWidth + this._containerWidth) {
          x = -this._contentWidth + this._containerWidth + (x - (-this._contentWidth + this._containerWidth)) * this.bounceRatio;
        }
      }
      this._$content.css({
        x: x
      });
      return this._touchedTime = new Date().getTime();
    };

    Slider.prototype._onTouchEnd = function(e) {
      var deltaX, i, iLen, isQuick, j, l, left, overEdge, r, right, selectedIndex, speed, speedAbs, time, width, x;
      if (this._touch0 == null) {
        return;
      }
      e.preventDefault();
      x = this._x;
      deltaX = this._touch1.pageX - this._touch0.pageX;
      time = this._touch1.time - this._touch0.time;
      speed = deltaX / time;
      speedAbs = Math.abs(speed);
      isQuick = speedAbs > 0.5;
      selectedIndex = this._selectedIndex;
      i = 0;
      iLen = this._widthList.length;
      left = 0;
      while (i < iLen) {
        j = this.step;
        right = left;
        while (j--) {
          if ((width = this._widthList[i + j]) == null) {
            break;
          }
          right -= width;
        }
        if (this._x < left && right < this._x) {
          if (isQuick) {
            if (deltaX < 0) {
              this._selectedIndex = i + 1;
              this._x = right;
            } else {
              this._selectedIndex = i;
              this._x = left;
            }
          } else {
            l = left - this._x;
            r = this._x - right;
            if (l > r) {
              this._selectedIndex = i + 1;
              this._x = right;
            } else {
              this._selectedIndex = i;
              this._x = left;
            }
          }
          break;
        }
        left = right;
        i += this.step;
      }
      overEdge = false;
      if (this.isLoop) {
        this._selectedIndex = this._normalizeIndex(this._selectedIndex, this._length);
      } else {
        if (this._x >= 0) {
          overEdge = true;
          this._selectedIndex = 0;
          this._x = 0;
        } else if (this._x <= -this._contentWidth + this._containerWidth) {
          overEdge = true;
          this._selectedIndex = this._length - this.step;
          this._x = -this._contentWidth + this._containerWidth;
        }
      }
      this._$content.transition({
        x: this._x
      }, this.animateOptions.duration * Math.abs(this._x - x) / this._containerWidth, this.animateOptions.easing);
      this._stopListen();
      this._requestTick();
      if (this._selectedIndex !== selectedIndex) {
        e = $.Event('change');
        e.selectedIndex = this._selectedIndex;
        return this.$el.trigger(e);
      }
    };

    Slider.prototype._startListen = function() {
      return $document.on({
        touchmove: this._onTouchMove,
        touchend: this._onTouchEnd
      });
    };

    Slider.prototype._stopListen = function() {
      $document.off({
        touchmove: this._onTouchMove,
        touchend: this._onTouchEnd
      });
      this._deltaX = 0;
      delete this._touch0;
      return delete this._touch1;
    };

    Slider.prototype._normalizeIndex = function(index, length) {
      while (index < 0) {
        index += length;
      }
      return index % length;
    };

    Slider.prototype._clearTick = function() {
      clearTimeout(this._timeoutId);
      return delete this._timeoutId;
    };

    Slider.prototype._requestTick = function() {
      var interval;
      if (!this._auto || (this._autoInterval == null) || (this._autoDeltaIndex == null)) {
        return;
      }
      if ($.isArray(this._autoInterval)) {
        interval = this._autoInterval[this._selectedIndex];
      } else {
        interval = this._autoInterval;
      }
      if ((interval == null) || interval <= 0) {
        return;
      }
      this._clearTick();
      return this._timeoutId = setTimeout(this._ticked, interval);
    };

    Slider.prototype._ticked = function() {
      var index;
      index = this._selectedIndex + this._autoDeltaIndex * this.step;
      if (!this.isLoop) {
        index = (index < 0 ? this._length - 1 : (index > this._length - 1 ? 0 : index));
      }
      return this.moveTo(index, this._requestTick, true);
    };

    Slider.prototype.move = function(deltaIndex, callback, isTrigger) {
      if (isTrigger == null) {
        isTrigger = false;
      }
      return this.moveTo(this._selectedIndex + deltaIndex * this.step, callback, isTrigger);
    };

    Slider.prototype._calcPos = function(index) {
      var i, x;
      x = 0;
      i = 0;
      if (index > 0) {
        i = 0;
        while (i < index) {
          x -= this._widthList[this._normalizeIndex(i, this._length)];
          i++;
        }
      } else {
        i = 0;
        while (i > index) {
          x += this._widthList[this._normalizeIndex(i, this._length)];
          i--;
        }
      }
      return x;
    };

    Slider.prototype.moveTo = function(index, callback, isTrigger, isForce) {
      var deltaIndex, e, fromIndex, fromX, toIndex, toX,
        _this = this;
      if (isTrigger == null) {
        isTrigger = false;
      }
      if (isForce == null) {
        isForce = false;
      }
      if (this._isMoving) {
        return;
      }
      index = this.step * Math.ceil(index / this.step);
      if (!this.isLoop) {
        index = (index <= 0 ? 0 : (index > this._length - this.step ? this._length - this.step : index));
      }
      deltaIndex = index - this._selectedIndex;
      toIndex = this._normalizeIndex(index, this._length);
      fromIndex = toIndex - deltaIndex;
      if (!isForce && fromIndex === toIndex) {
        return;
      }
      toX = this._calcPos(toIndex);
      fromX = this._calcPos(fromIndex);
      fromX += this._deltaX;
      this._selectedIndex = toIndex;
      this._x = toX;
      if (isForce) {
        this._$content.css({
          x: toX
        });
      } else {
        this._clearTick();
        this._isMoving = true;
        this._$content.stop(true, false).css({
          x: fromX
        }).transition({
          x: toX
        }, this.animateOptions.duration, this.animateOptions.easing, function() {
          _this._requestTick();
          if (callback != null) {
            callback();
          }
          return _this._isMoving = false;
        });
      }
      if (isTrigger) {
        e = $.Event('change');
        e.selectedIndex = this._selectedIndex;
        return this.$el.trigger(e);
      }
    };

    Slider.prototype.length = function() {
      return Math.ceil(this._length / this.step);
    };

    Slider.prototype.selectedIndex = function() {
      return Math.ceil(this._selectedIndex / this.step);
    };

    Slider.prototype.startAuto = function(interval, deltaIndex) {
      if (interval == null) {
        interval = 5000;
      }
      if (deltaIndex == null) {
        deltaIndex = 1;
      }
      this._auto = true;
      this._autoInterval = interval;
      this._autoDeltaIndex = deltaIndex;
      return this._requestTick();
    };

    Slider.prototype.stopAuto = function() {
      this._auto = false;
      return this._clearTick();
    };

    Slider.prototype.connect = function(dotNav) {
      var self;
      self = this;
      dotNav.length(this.length());
      dotNav.selectedIndex(self.selectedIndex());
      dotNav.on('change', function(e) {
        return self.moveTo(e.selectedIndex);
      });
      return this.on('change', function() {
        return dotNav.selectedIndex(self.selectedIndex());
      });
    };

    return Slider;

  })($.tm.Component);

  (function($) {
    var Timer, Watcher;
    ___exports.Watcher = Watcher = (function() {
      Watcher._watchers = {};

      Watcher.push = function(event) {
        var touch, touches, _i, _len, _results;
        touches = event.originalEvent.touches;
        _results = [];
        for (_i = 0, _len = touches.length; _i < _len; _i++) {
          touch = touches[_i];
          _results.push(this._watchers[touch.identifier] = new Watcher(event, touch));
        }
        return _results;
      };

      Watcher.filter = function(event) {
        var identifier, touch, touchMap, touches, watcher, _i, _len, _ref, _results;
        touches = event.originalEvent.touches;
        touchMap = {};
        for (_i = 0, _len = touches.length; _i < _len; _i++) {
          touch = touches[_i];
          touchMap[touch.identifer] = touch;
        }
        _ref = this._watchers;
        _results = [];
        for (identifier in _ref) {
          watcher = _ref[identifier];
          if (!touchMap.hasOwnProperty(identifier)) {
            _results.push(this.remove(watcher));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Watcher.remove = function(watcher) {
        delete this._watchers[watcher.touch.identifier];
        return watcher.destruct();
      };

      function Watcher(event, touch) {
        this.event = event;
        this.touch = touch;
        this.timeout = __bind(this.timeout, this);
        this._timer = new Timer;
        this._timer.startTimer(1000, this.timeout);
      }

      Watcher.prototype.destruct = function() {
        this._timer.destruct();
        delete this.touch;
        return delete this._timer;
      };

      Watcher.prototype.timeout = function() {
        var event;
        event = this.event.clone();
        event.type = 'longtap';
        $(event.target).trigger($.Event('longtap'));
        return Watcher.remove(this);
      };

      return Watcher;

    })();
    ___exports.Timer = Timer = (function() {
      function Timer() {}

      Timer.prototype.destruct = function() {
        this.stopTimer();
        delete this.interval;
        return delete this.callback;
      };

      Timer.prototype.stopTimer = function() {
        return clearTimeout(this.timeoutId);
      };

      Timer.prototype.startTimer = function(interval, callback) {
        this.stopTimer();
        return this.timeoutId = setTimeout(callback, interval);
      };

      return Timer;

    })();
    return $(document).on({
      touchstart: function(e) {
        return Watcher.push(e);
      },
      touchend: function(e) {
        return Watcher.filter(e);
      }
    });
  })(jQuery);

}).call(this);

/*
//@ sourceMappingURL=jquery.tm-0.5.8.map
*/
