(function() {
  var vwup, ___exports, ___extend,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
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

  if (___exports.vwup == null) {
    ___exports.vwup = {};
  }

  vwup = ___exports.vwup;

  ___extend(vwup, {
    "index": {},
    "orange": {},
    "perfectbook": {}
  });

  ___exports.vwup.ViewController = vwup.ViewController = (function(_super) {
    __extends(ViewController, _super);

    function ViewController() {
      ViewController.__super__.constructor.call(this);
    }

    ViewController.prototype.bubble = function(model, event) {
      return model.on(event, function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        args.unshift(event);
        return this.trigger.apply(this, args);
      }, this);
    };

    return ViewController;

  })(Backbone.View);

  ___exports.vwup.index.OpeningViewController = vwup.index.OpeningViewController = (function(_super) {
    __extends(OpeningViewController, _super);

    OpeningViewController.prototype.el = '.openingContainer';

    OpeningViewController.prototype.events = {
      'click .skipButton': 'onSkipButtonClicked'
    };

    function OpeningViewController() {
      this.hide = __bind(this.hide, this);
      OpeningViewController.__super__.constructor.call(this);
    }

    OpeningViewController.prototype.start = function() {
      return this.timeoutId = setTimeout(this.hide, 5000);
    };

    OpeningViewController.prototype.onSkipButtonClicked = function() {
      if (this.isHiding) {
        return;
      }
      return this.hide();
    };

    OpeningViewController.prototype.hide = function() {
      var _this = this;
      this.isHiding = true;
      clearTimeout(this.timeoutId);
      return this.$el.stop(true, true).fadeOut(800).promise().then(function() {
        return _this.trigger('complete');
      });
    };

    return OpeningViewController;

  })(vwup.ViewController);

  ___exports.vwup.index.ResizeController = vwup.index.ResizeController = (function(_super) {
    __extends(ResizeController, _super);

    ResizeController.prototype.el = '#titlePage';

    function ResizeController() {
      var _this = this;
      ResizeController.__super__.constructor.call(this);
      this.footerHeight = this.$('#footer').height();
      this.bannerHeight = this.$('.areaBanner').height();
      this.$contentWrapper = this.$('.contentWrapper');
      this.$areaMainImage = this.$('.areaMainImage');
      $.$window.on('load resize', function(e) {
        return _this.adjust();
      });
    }

    ResizeController.prototype.adjust = function() {
      var height, windowHeight;
      windowHeight = $.$window.height();
      height = windowHeight < 670 ? 670 : windowHeight > 776 ? 776 : windowHeight;
      this.$contentWrapper.height(height -= this.footerHeight);
      return this.$areaMainImage.height(height -= this.bannerHeight);
    };

    return ResizeController;

  })(vwup.ViewController);

  ___exports.vwup.index.SwitcherViewController = vwup.index.SwitcherViewController = (function(_super) {
    __extends(SwitcherViewController, _super);

    SwitcherViewController.prototype.el = '.pageSwitcherContainer';

    SwitcherViewController.prototype.events = {
      'mouseenter .nav .buttons li': 'onNavOver'
    };

    function SwitcherViewController() {
      var _this = this;
      SwitcherViewController.__super__.constructor.call(this);
      this.sceneNames = [];
      this.$imageContainer = this.$('.mainImageList');
      this.$images = this.$imageContainer.find('li');
      this.$images.find('img').hide();
      this.$overs = this.$('.nav .over li');
      this.$overs.eq(0).addClass('is-current');
      this.$('.nav .buttons li').each(function(i, el) {
        var $li;
        $li = $(el);
        return _this.sceneNames[i] = _.find($li.attr('class').split(' '), function(className) {
          return className !== 'right';
        });
      });
      this.updateAt(0, true);
    }

    SwitcherViewController.prototype.onNavOver = function(e) {
      var $li, index;
      $li = $(e.currentTarget);
      index = $li.index();
      return this.updateAt(index);
    };

    SwitcherViewController.prototype.updateAt = function(index, isStatic) {
      var $image, $img;
      if (isStatic == null) {
        isStatic = false;
      }
      if (index === this.index) {
        return;
      }
      this.index = index;
      this.$overs.removeClass('is-current').eq(index).addClass('is-current');
      $image = this.$images.eq(index);
      $img = $image.find('img').hide();
      $image.appendTo(this.$imageContainer);
      return $img.fadeIn(400);
    };

    return SwitcherViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.BodyColorViewController = vwup.orange.BodyColorViewController = (function(_super) {
    __extends(BodyColorViewController, _super);

    BodyColorViewController.prototype.el = '.areaInner';

    BodyColorViewController.prototype.events = {
      'click .colorDot li': 'onDotClicked'
    };

    function BodyColorViewController() {
      this.onDotClicked = __bind(this.onDotClicked, this);
      BodyColorViewController.__super__.constructor.call(this);
      this.$carsContainer = this.$('.carColorVariation');
      this.$cars = this.$carsContainer.children();
      this.$dots = this.$('.colorDot').children();
      this.$names = this.$('.colorName').children();
      if ($.browser.msie && $.browser.versionNumber < 9) {
        this.$cars.find('img').alphaImageLoader();
      }
      this.showAt(0, true);
    }

    BodyColorViewController.prototype.reset = function() {
      return this.showAt(0, true);
    };

    BodyColorViewController.prototype.onDotClicked = function(e) {
      var $el;
      $el = $(e.currentTarget);
      if ($el.hasClass('is-selected')) {
        e.preventDefault();
        return;
      }
      return this.showAt($el.index());
    };

    BodyColorViewController.prototype.showAt = function(index, isStatic) {
      var _this = this;
      if (isStatic == null) {
        isStatic = false;
      }
      if (isStatic) {
        this.$cars.stop(true, false).fadeOut(0).eq(index).appendTo(this.$carsContainer).fadeIn(0);
      } else {
        this.$cars.stop(true, false).fadeIn(0).eq(index).fadeOut(0).appendTo(this.$carsContainer).fadeIn(600, 'easeOutQuad', function() {
          return _this.$cars.filter(function(i) {
            return i !== index;
          }).fadeOut(0);
        });
      }
      this.$dots.removeClass('is-selected').eq(index).addClass('is-selected');
      return this.$names.removeClass('is-selected').eq(index).addClass('is-selected');
    };

    return BodyColorViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.FloatingViewController = vwup.orange.FloatingViewController = (function(_super) {
    __extends(FloatingViewController, _super);

    FloatingViewController.prototype.el = '.floating';

    FloatingViewController.prototype.events = {
      'click .closeButton': 'hide',
      'click': 'onOverlayClicked'
    };

    function FloatingViewController() {
      var _this = this;
      FloatingViewController.__super__.constructor.call(this);
      this.$box = this.$('.floatingContents');
      this.$contents = this.$('.floatContentArea');
      this.$container = this.$contents.parent();
      $.$window.on('load resize', function(e) {
        return _this.adjust();
      });
    }

    FloatingViewController.prototype.adjust = function() {
      return this.$el.css({
        height: $.$window.height() < vwup.orange.ResizeController.MIN_HEIGHT ? vwup.orange.ResizeController.MIN_HEIGHT : ''
      });
    };

    FloatingViewController.prototype.show = function(name) {
      var _this = this;
      this.$contents.each(function(i, el) {
        var $el;
        $el = $(el);
        if ($el.hasClass(name)) {
          return $el.appendTo(_this.$container);
        }
      });
      return this.$el.fadeIn(300);
    };

    FloatingViewController.prototype.hide = function() {
      return this.$el.fadeOut(150);
    };

    FloatingViewController.prototype.onOverlayClicked = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is(this.$el) || $target.is(this.$box)) {
        return this.hide();
      }
    };

    return FloatingViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.OrangeViewController = vwup.orange.OrangeViewController = (function(_super) {
    __extends(OrangeViewController, _super);

    function OrangeViewController(el) {
      this.el = el;
      OrangeViewController.__super__.constructor.call(this);
      this.$el.show();
      this.$oranges = this.$el.find('.orange').wrapInner('<div>').children().css({
        position: 'relative'
      });
      if ($.browser.msie && $.browser.versionNumber < 9) {
        this.$oranges.find('img').alphaImageLoader();
      }
      this.isAnimating = false;
    }

    OrangeViewController.prototype.show = function() {
      var _this = this;
      this.isAnimating = true;
      return $.parallel(_.map(this.$oranges, function(orange, i) {
        return $(orange).stop(true, false).css({
          top: 100,
          opacity: 0
        }).delay(150 * i).animate({
          top: 0,
          opacity: 1
        }, 1600, 'easeOutExpo').promise();
      })).then(function() {
        return _this.isAnimating = false;
      });
    };

    OrangeViewController.prototype.hide = function(isStatic) {
      var style,
        _this = this;
      if (isStatic == null) {
        isStatic = false;
      }
      style = {
        top: 1000
      };
      if (isStatic) {
        return this.$oranges.css(style);
      } else {
        this.isAnimating = true;
        return $.parallel(_.map(this.$oranges, function(orange, i) {
          return $(orange).stop(true, false).delay(150 * (2 - i)).animate(style, 600, 'easeInSine').promise();
        })).then(function() {
          return _this.isAnimating = false;
        });
      }
    };

    return OrangeViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.PointerViewController = vwup.orange.PointerViewController = (function(_super) {
    __extends(PointerViewController, _super);

    PointerViewController.prototype.events = {
      'mouseenter .circle': 'onPointerMouseEnter',
      'mouseleave .circle': 'onPointerMouseLeave',
      'click .circle': 'onPointerClicked'
    };

    function PointerViewController(maskOrigins) {
      this.onPointerClicked = __bind(this.onPointerClicked, this);
      this.onPointerMouseLeave = __bind(this.onPointerMouseLeave, this);
      this.onPointerMouseEnter = __bind(this.onPointerMouseEnter, this);
      PointerViewController.__super__.constructor.call(this);
      this.$pointers = this.$('.pointer').each(function(i, el) {
        var $blow, $el, $mask, $point;
        $el = $(el);
        $el.find('.circle').data({
          $pointer: $el
        });
        $blow = $el.find('.blow').mask(maskOrigins[i]);
        $mask = $blow.find('.js-mask').css({
          width: 0,
          height: 0
        });
        $point = $el.find('.point');
        if ($.browser.msie && $.browser.versionNumber < 9) {
          $point.find('img').alphaImageLoader();
        }
        return $el.data({
          $point: $point,
          $mask: $mask
        });
      });
    }

    PointerViewController.prototype.reset = function() {
      if ($.support.transition) {
        return this.$pointers.each(function(i, el) {
          return $(el).pause().css({
            scale: 1.5,
            opacity: 0
          });
        });
      } else {
        return this.$pointers.each(function(i, el) {
          return $(el).stop(true, false).css({
            opacity: 0
          });
        });
      }
    };

    PointerViewController.prototype.show = function() {
      return this.$pointers.data({
        enabled: false
      }).each(function(i, el) {
        if ($.support.transition) {
          return $(el).transit({
            delay: 50 + 100 * i,
            scale: 1,
            opacity: 1
          }, 600, 'easeOutBack', function() {
            return $(this).data({
              enabled: true
            });
          });
        } else {
          return $(el).delay(50 + 100 * i).animate({
            opacity: 1
          }, 400, 'linear', function() {
            return $(this).data({
              enabled: true
            });
          });
        }
      });
    };

    PointerViewController.prototype.hide = function() {
      if ($.support.transition) {
        return this.$pointers.data({
          enabled: false
        }).css({
          scale: 1.5,
          opacity: 0
        });
      } else {
        return this.$pointers.data({
          enabled: false
        }).stop(true, false).css({
          opacity: 0
        });
      }
    };

    PointerViewController.prototype.onPointerMouseEnter = function(e) {
      var $el;
      $el = $(e.currentTarget).data('$pointer');
      if (!$el.data('enabled')) {
        return;
      }
      if ($.support.transition) {
        $el.data('$point').transit({
          scale: 1.3
        }, 100, 'linear');
      }
      return $el.data('$mask').stop(true, false).animate({
        width: '100%',
        height: '100%'
      }, 600, 'easeOutExpo');
    };

    PointerViewController.prototype.onPointerMouseLeave = function(e) {
      var $el;
      $el = $(e.currentTarget).data('$pointer');
      if ($.support.transition) {
        $el.data('$point').transit({
          scale: 1
        }, 50, 'linear');
      }
      return $el.data('$mask').stop(true, false).animate({
        width: 0,
        height: 0
      }, 200);
    };

    PointerViewController.prototype.onPointerClicked = function(e) {
      var $el, classNames, name;
      $el = $(e.currentTarget).data('$pointer');
      classNames = $el.attr('class').split(' ');
      name = _.find(classNames, function(className) {
        return !/^pointer/.test(className);
      });
      return this.trigger('float', name);
    };

    return PointerViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.ExteriorPointerViewController = vwup.orange.ExteriorPointerViewController = (function(_super) {
    __extends(ExteriorPointerViewController, _super);

    ExteriorPointerViewController.prototype.el = '.sceneExterior .pointerList';

    function ExteriorPointerViewController() {
      ExteriorPointerViewController.__super__.constructor.call(this, [$.TOP_RIGHT, $.BOTTOM_RIGHT, $.BOTTOM_LEFT]);
    }

    return ExteriorPointerViewController;

  })(vwup.orange.PointerViewController);

  ___exports.vwup.orange.InteriorPointerViewController = vwup.orange.InteriorPointerViewController = (function(_super) {
    __extends(InteriorPointerViewController, _super);

    InteriorPointerViewController.prototype.el = '.sceneInterior .pointerList';

    function InteriorPointerViewController() {
      InteriorPointerViewController.__super__.constructor.call(this, [$.BOTTOM_LEFT, $.BOTTOM_LEFT]);
    }

    return InteriorPointerViewController;

  })(vwup.orange.PointerViewController);

  ___exports.vwup.orange.ResizeController = vwup.orange.ResizeController = (function(_super) {
    __extends(ResizeController, _super);

    ResizeController.MAX_HEIGHT = 776;

    ResizeController.MIN_HEIGHT = 670;

    ResizeController.prototype.el = '#orange';

    function ResizeController() {
      var _this = this;
      ResizeController.__super__.constructor.call(this);
      this.diffHeight = this.$('.areaNav').height() + this.$('#footer').height();
      this.$contentWrapper = this.$('.contentWrapper');
      this.$floating = $('.floating');
      $.$window.on('load resize', function(e) {
        return _this.adjust();
      });
    }

    ResizeController.prototype.adjust = function() {
      var height, windowHeight;
      windowHeight = $.$window.height();
      height = windowHeight < ResizeController.MIN_HEIGHT ? ResizeController.MIN_HEIGHT : windowHeight > ResizeController.MAX_HEIGHT ? ResizeController.MAX_HEIGHT : windowHeight;
      return this.$contentWrapper.height(height - this.diffHeight);
    };

    return ResizeController;

  })(vwup.ViewController);

  ___exports.vwup.orange.SceneController = vwup.orange.SceneController = (function(_super) {
    __extends(SceneController, _super);

    SceneController.prototype.el = '#orange';

    function SceneController(sceneMap) {
      var _this = this;
      this.sceneMap = sceneMap;
      SceneController.__super__.constructor.call(this);
      this.sceneNames = [];
      this.$buttons = $('.buttonContentsChange').children();
      this.$navs = this.$('.nav').children().filter(function(i, el) {
        var href;
        href = $(el).find('a').attr('href');
        if (href.charAt(0) !== '#') {
          return false;
        }
        _this.sceneNames.push(href.substr(1));
        return true;
      });
      this.index = 0;
      this.length = this.sceneNames.length;
      this.$('.contentWrapper').on('mousewheel', function(e) {
        var deltaX, deltaY, isAnimating, name, sceneViewController, _ref;
        deltaX = e.deltaX, deltaY = e.deltaY;
        if (!(Math.abs(deltaY) > Math.abs(deltaX))) {
          return;
        }
        isAnimating = false;
        _ref = _this.sceneMap;
        for (name in _ref) {
          sceneViewController = _ref[name];
          isAnimating || (isAnimating = sceneViewController.animating());
        }
        if (isAnimating) {
          return;
        }
        return _this.next(deltaY < 0 ? -1 : 1);
      });
    }

    SceneController.prototype.next = function(direction) {
      var index;
      index = _.indexOf(this.sceneNames, this.sceneName);
      index += direction;
      if (index < 0) {
        return;
      }
      index = index % this.length;
      return this.trigger('navigate', this.sceneNames[index], {
        trigger: true
      });
    };

    SceneController.prototype.update = function(sceneName) {
      var index, name, prevSceneViewController, scene, _ref,
        _this = this;
      index = _.indexOf(this.sceneNames, sceneName);
      if (sceneName === this.sceneName) {
        return;
      }
      this.sceneName = sceneName;
      prevSceneViewController = this.sceneViewController;
      this.sceneViewController = this.sceneMap[sceneName];
      this.$buttons.removeClass('is-current');
      this.$navs.removeClass('is-current').eq(index).addClass('is-current');
      if (prevSceneViewController != null) {
        return prevSceneViewController.hide().then(function() {
          return _this.sceneViewController.show();
        }).then(function() {
          return _this.$buttons.eq(index).addClass('is-current');
        });
      } else {
        _ref = this.sceneMap;
        for (name in _ref) {
          scene = _ref[name];
          scene.hide(true);
        }
        this.$('.contentsArea').css({
          visibility: 'visible'
        });
        return $.wait(1000).then(function() {
          return _this.sceneViewController.show();
        }).then(function() {
          return _this.$buttons.eq(index).addClass('is-current');
        });
      }
    };

    return SceneController;

  })(vwup.ViewController);

  ___exports.vwup.orange.SceneViewController = vwup.orange.SceneViewController = (function(_super) {
    __extends(SceneViewController, _super);

    function SceneViewController() {
      SceneViewController.__super__.constructor.call(this);
      this.orangeViewController = new vwup.orange.OrangeViewController(this.orange);
      this.$button = $(this.button);
      this.isShown = true;
    }

    SceneViewController.prototype.animating = function() {
      return this.orangeViewController.isAnimating;
    };

    SceneViewController.prototype.show = function() {
      var d, delay, dfd, duration, easing, y;
      if (this.isShown) {
        d = $.Deferred();
        d.reject();
        return d.promise();
      }
      this.isShown = true;
      delay = 150;
      y = 0;
      duration = 1500;
      easing = 'easeOutExpo';
      this.orangeViewController.show();
      this.$el.show();
      if ($.support.transition) {
        this.$title.transit({
          y: y
        }, duration, easing);
        dfd = this.$car.transit({
          delay: delay,
          y: y
        }, duration, easing);
        if (this.$other != null) {
          dfd = this.$other.transit({
            delay: delay * 2,
            y: y
          }, duration, easing);
        }
      } else {
        this.$title.animate({
          top: y
        }, duration, easing);
        dfd = this.$car.delay(delay).animate({
          top: y
        }, duration, easing);
        if (this.$other != null) {
          dfd = this.$other.delay(delay * 2).animate({
            top: y
          }, duration, easing);
        }
      }
      return dfd.promise();
    };

    SceneViewController.prototype.hide = function(isStatic) {
      var $el, d, delay, duration, easing, y,
        _this = this;
      if (isStatic == null) {
        isStatic = false;
      }
      if (!this.isShown) {
        d = $.Deferred();
        d.reject();
        return d.promise();
      }
      this.isShown = false;
      delay = 100;
      y = 800;
      duration = 600;
      easing = 'easeInQuad';
      this.orangeViewController.hide(isStatic);
      $el = this.$title.add(this.$car).add(this.$other);
      if ($.support.transition) {
        if (isStatic) {
          $el.css({
            y: y
          });
          return this.$el.hide();
        } else {
          if (this.$other != null) {
            this.$other.transit({
              y: y
            }, duration, easing);
          }
          this.$car.transit({
            delay: delay,
            y: y
          }, duration, easing);
          return this.$title.transit({
            delay: delay * 2,
            y: y
          }, duration, easing, function() {
            return _this.$el.hide();
          }).promise();
        }
      } else {
        if (isStatic) {
          $el.css({
            top: y
          });
          return this.$el.hide();
        } else {
          if (this.$other != null) {
            this.$other.animate({
              top: y
            }, duration, easing);
          }
          this.$car.delay(delay).animate({
            top: y
          }, duration, easing);
          return this.$title.delay(delay * 2).animate({
            top: y
          }, duration, easing, function() {
            return _this.$el.hide();
          }).promise();
        }
      }
    };

    return SceneViewController;

  })(vwup.ViewController);

  ___exports.vwup.orange.ExteriorViewController = vwup.orange.ExteriorViewController = (function(_super) {
    __extends(ExteriorViewController, _super);

    ExteriorViewController.prototype.el = '.sceneExterior';

    ExteriorViewController.prototype.button = '.buttonToInterior';

    ExteriorViewController.prototype.orange = '.orangeImagesExterior';

    function ExteriorViewController() {
      ExteriorViewController.__super__.constructor.call(this);
      this.$title = this.$('.imageTitle').children().css({
        position: 'relative'
      });
      this.$car = this.$('.carContainer').children().css({
        position: 'relative'
      });
      this.$other = this.$('.dotContainer').children().css({
        position: 'relative'
      });
      this.pointerViewController = new vwup.orange.ExteriorPointerViewController();
      this.bubble(this.pointerViewController, 'float');
      this.bodyColorViewController = new vwup.orange.BodyColorViewController();
    }

    ExteriorViewController.prototype.show = function() {
      var _this = this;
      this.pointerViewController.reset();
      this.bodyColorViewController.reset();
      return ExteriorViewController.__super__.show.call(this).then(function() {
        return _this.pointerViewController.show();
      });
    };

    ExteriorViewController.prototype.hide = function(isStatic) {
      if (isStatic == null) {
        isStatic = false;
      }
      this.pointerViewController.hide(isStatic);
      return ExteriorViewController.__super__.hide.call(this, isStatic);
    };

    return ExteriorViewController;

  })(vwup.orange.SceneViewController);

  ___exports.vwup.orange.IndexViewController = vwup.orange.IndexViewController = (function(_super) {
    __extends(IndexViewController, _super);

    IndexViewController.prototype.el = '.sceneTop';

    IndexViewController.prototype.button = '.buttonToExterior';

    IndexViewController.prototype.orange = '.orangeImagesTop';

    function IndexViewController() {
      IndexViewController.__super__.constructor.call(this);
      this.$title = this.$('.imageTitle').children().css({
        position: 'relative'
      });
      this.$car = this.$('.imageCar').children().css({
        position: 'relative'
      });
      this.$other = this.$('.bannerList').children().css({
        position: 'relative'
      });
    }

    return IndexViewController;

  })(vwup.orange.SceneViewController);

  ___exports.vwup.orange.InteriorViewController = vwup.orange.InteriorViewController = (function(_super) {
    __extends(InteriorViewController, _super);

    InteriorViewController.prototype.el = '.sceneInterior';

    InteriorViewController.prototype.button = '.buttonToOrangeTop';

    InteriorViewController.prototype.orange = '.orangeImagesInterior';

    function InteriorViewController() {
      InteriorViewController.__super__.constructor.call(this);
      this.$title = this.$('.imageTitle').children().css({
        position: 'relative'
      });
      this.$car = this.$('.carContainer').children().css({
        position: 'relative'
      });
      this.pointerViewController = new vwup.orange.InteriorPointerViewController();
      this.bubble(this.pointerViewController, 'float');
    }

    InteriorViewController.prototype.show = function() {
      var _this = this;
      this.pointerViewController.reset();
      return InteriorViewController.__super__.show.call(this).then(function() {
        return _this.pointerViewController.show();
      });
    };

    InteriorViewController.prototype.hide = function(isStatic) {
      if (isStatic == null) {
        isStatic = false;
      }
      this.pointerViewController.hide(isStatic);
      return InteriorViewController.__super__.hide.call(this, isStatic);
    };

    return InteriorViewController;

  })(vwup.orange.SceneViewController);

  ___exports.vwup.perfectbook.GlobalNavViewController = vwup.perfectbook.GlobalNavViewController = (function(_super) {
    __extends(GlobalNavViewController, _super);

    GlobalNavViewController.prototype.el = '.gmenu';

    function GlobalNavViewController() {
      this.adjust = __bind(this.adjust, this);
      GlobalNavViewController.__super__.constructor.call(this);
      this.$buttons = this.$('ul').children();
      this.$tooltips = this.$('.tooltips').children();
      this.$window = $(window).on({
        'load resize': this.adjust
      });
    }

    GlobalNavViewController.prototype.adjust = function() {
      var deltaX, windowWidth,
        _this = this;
      windowWidth = this.$window.width();
      if (windowWidth >= 1100) {
        this.$buttons.css({
          marginLeft: ''
        });
      } else {
        if (windowWidth > 980) {
          deltaX = windowWidth - 1100;
        } else {
          deltaX = 980 - 1100;
        }
        deltaX /= 5;
        this.$buttons.each(function(i, el) {
          var $button;
          $button = $(el);
          if (i <= 5) {
            return $button.css({
              marginLeft: deltaX * i
            });
          }
        });
      }
      return this.$tooltips.each(function(i, el) {
        var $button, $tooltip;
        $tooltip = $(el);
        $button = _this.$buttons.eq(i + 2);
        return $tooltip.css({
          left: $button.position().left + parseFloat($button.css('marginLeft')) + $button.width() / 2 - 6
        });
      });
    };

    return GlobalNavViewController;

  })(vwup.ViewController);

  ___exports.vwup.perfectbook.TVCMFloatingViewController = vwup.perfectbook.TVCMFloatingViewController = (function(_super) {
    __extends(TVCMFloatingViewController, _super);

    TVCMFloatingViewController.prototype.el = '.floatingTvcm';

    TVCMFloatingViewController.prototype.events = {
      'click .closeButton': 'onCloseButtonClicked',
      'click': 'onOverlayClicked'
    };

    function TVCMFloatingViewController() {
      TVCMFloatingViewController.__super__.constructor.call(this);
      this.$html = $('html');
    }

    TVCMFloatingViewController.prototype.onCloseButtonClicked = function() {
      return this.hide();
    };

    TVCMFloatingViewController.prototype.onOverlayClicked = function(e) {
      var $el;
      $el = $(e.target);
      if ($el.hasClass('floatingTvcm') || $el.hasClass('floatingContents')) {
        return this.hide();
      }
    };

    TVCMFloatingViewController.prototype.show = function(_arg) {
      var name, url;
      name = _arg.name, url = _arg.url;
      if (url != null) {
        this.$el.find('iframe').attr('src', url);
      }
      this.$html.addClass('is-floatingOpen');
      return this.$el.stop(true, false).hide().filter(function(i, el) {
        return $(el).hasClass(name);
      }).fadeIn(600);
    };

    TVCMFloatingViewController.prototype.hide = function() {
      this.$el.find('iframe').attr('src', '');
      this.$html.removeClass('is-floatingOpen');
      return this.$el.stop(true, false).fadeOut(400);
    };

    return TVCMFloatingViewController;

  })(vwup.ViewController);

  ___exports.vwup.perfectbook.TVCMViewController = vwup.perfectbook.TVCMViewController = (function(_super) {
    __extends(TVCMViewController, _super);

    TVCMViewController.prototype.el = '#animationLayer7';

    TVCMViewController.prototype.events = {
      'click .movieArea a': 'onMovieClicked',
      'click .buttonMaking': 'onMakingClicked'
    };

    function TVCMViewController() {
      TVCMViewController.__super__.constructor.call(this);
    }

    TVCMViewController.prototype.onMovieClicked = function(e) {
      var $a;
      e.preventDefault();
      $a = $(e.currentTarget);
      return this.trigger('float', {
        name: 'movie',
        url: $a.attr('href')
      });
    };

    TVCMViewController.prototype.onMakingClicked = function() {
      return this.trigger('float', {
        name: 'making'
      });
    };

    return TVCMViewController;

  })(vwup.ViewController);

  ___exports.vwup.index.Main = vwup.index.Main = (function(_super) {
    __extends(Main, _super);

    Main.prototype.routes = {
      ':hash': 'redirect'
    };

    Main.prototype.redirects = ['upedia', 'dna', 'photogallery', 'tvcm', 'kubota01', 'kubota02'];

    function Main() {
      this.onLoad = __bind(this.onLoad, this);
      this.onReady = __bind(this.onReady, this);
      Main.__super__.constructor.call(this);
      $.$document.once('ready', this.onReady);
      $.$window.once('load', this.onLoad);
      Backbone.history.start();
    }

    Main.prototype.onReady = function() {
      this.$loading = $('.loading');
      this.$contents = $('.contentsArea');
      new vwup.index.ResizeController();
      this.openingViewController = new vwup.index.OpeningViewController();
      return this.switcherViewController = new vwup.index.SwitcherViewController();
    };

    Main.prototype.onLoad = function() {
      this.$contents.css({
        visibility: 'visible'
      });
      this.$loading.fadeOut(800);
      return this.openingViewController.start();
    };

    Main.prototype.redirect = function(hash) {
      if (_.indexOf(this.redirects, hash) === -1) {
        return;
      }
      this.navigate('', {
        replace: true
      });
      return location.href = "perfectbook/#" + hash;
    };

    return Main;

  })(Backbone.Router);

  ___exports.vwup.orange.Main = vwup.orange.Main = (function(_super) {
    __extends(Main, _super);

    Main.prototype.routes = {
      '': 'routeIndex',
      'exterior': 'routeExterior',
      'interior': 'routeInterior'
    };

    function Main() {
      this.onLoad = __bind(this.onLoad, this);
      this.onReady = __bind(this.onReady, this);
      Main.__super__.constructor.call(this);
      $.$document.once('ready', this.onReady);
      $.$window.once('load', this.onLoad);
    }

    Main.prototype.onReady = function() {
      var name, sceneMap, sceneViewController, _results;
      this.$loading = $('.loading');
      new vwup.orange.ResizeController();
      sceneMap = {
        '': new vwup.orange.IndexViewController(),
        'exterior': new vwup.orange.ExteriorViewController(),
        'interior': new vwup.orange.InteriorViewController()
      };
      this.sceneController = new vwup.orange.SceneController(sceneMap).on({
        navigate: this.navigate
      }, this);
      this.floatingViewController = new vwup.orange.FloatingViewController();
      _results = [];
      for (name in sceneMap) {
        sceneViewController = sceneMap[name];
        _results.push(sceneViewController.on({
          float: this.floatingViewController.show
        }, this.floatingViewController));
      }
      return _results;
    };

    Main.prototype.onLoad = function() {
      var _this = this;
      return this.$loading.fadeOut(800, function() {
        return Backbone.history.start();
      });
    };

    Main.prototype.routeIndex = function() {
      return this.sceneController.update('');
    };

    Main.prototype.routeExterior = function() {
      return this.sceneController.update('exterior');
    };

    Main.prototype.routeInterior = function() {
      return this.sceneController.update('interior');
    };

    return Main;

  })(Backbone.Router);

  ___exports.vwup.perfectbook.Main = vwup.perfectbook.Main = (function() {
    function Main() {
      this.onReady = __bind(this.onReady, this);
      $(document).one('ready', this.onReady);
    }

    Main.prototype.onReady = function() {
      new vwup.perfectbook.TVCMViewController().on({
        float: this.float
      }, this);
      this.tvcmFloatingViewController = new vwup.perfectbook.TVCMFloatingViewController();
      return this.globalNavViewController = new vwup.perfectbook.GlobalNavViewController();
    };

    Main.prototype.float = function(data) {
      return this.tvcmFloatingViewController.show(data);
    };

    return Main;

  })();

}).call(this);

/*
//@ sourceMappingURL=vwup.map
*/
