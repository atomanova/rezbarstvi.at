// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
    'use strict'
  
    var keyCounter = 0
    var allWaypoints = {}
  
    /* http://imakewebthings.com/waypoints/api/waypoint */
    function Waypoint(options) {
      if (!options) {
        throw new Error('No options passed to Waypoint constructor')
      }
      if (!options.element) {
        throw new Error('No element option passed to Waypoint constructor')
      }
      if (!options.handler) {
        throw new Error('No handler option passed to Waypoint constructor')
      }
  
      this.key = 'waypoint-' + keyCounter
      this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
      this.element = this.options.element
      this.adapter = new Waypoint.Adapter(this.element)
      this.callback = options.handler
      this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
      this.enabled = this.options.enabled
      this.triggerPoint = null
      this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      })
      this.context = Waypoint.Context.findOrCreateByElement(this.options.context)
  
      if (Waypoint.offsetAliases[this.options.offset]) {
        this.options.offset = Waypoint.offsetAliases[this.options.offset]
      }
      this.group.add(this)
      this.context.add(this)
      allWaypoints[this.key] = this
      keyCounter += 1
    }
  
    /* Private */
    Waypoint.prototype.queueTrigger = function(direction) {
      this.group.queueTrigger(this, direction)
    }
  
    /* Private */
    Waypoint.prototype.trigger = function(args) {
      if (!this.enabled) {
        return
      }
      if (this.callback) {
        this.callback.apply(this, args)
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy */
    Waypoint.prototype.destroy = function() {
      this.context.remove(this)
      this.group.remove(this)
      delete allWaypoints[this.key]
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable */
    Waypoint.prototype.disable = function() {
      this.enabled = false
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable */
    Waypoint.prototype.enable = function() {
      this.context.refresh()
      this.enabled = true
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/next */
    Waypoint.prototype.next = function() {
      return this.group.next(this)
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/previous */
    Waypoint.prototype.previous = function() {
      return this.group.previous(this)
    }
  
    /* Private */
    Waypoint.invokeAll = function(method) {
      var allWaypointsArray = []
      for (var waypointKey in allWaypoints) {
        allWaypointsArray.push(allWaypoints[waypointKey])
      }
      for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
        allWaypointsArray[i][method]()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/destroy-all */
    Waypoint.destroyAll = function() {
      Waypoint.invokeAll('destroy')
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/disable-all */
    Waypoint.disableAll = function() {
      Waypoint.invokeAll('disable')
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/enable-all */
    Waypoint.enableAll = function() {
      Waypoint.Context.refreshAll()
      for (var waypointKey in allWaypoints) {
        allWaypoints[waypointKey].enabled = true
      }
      return this
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/refresh-all */
    Waypoint.refreshAll = function() {
      Waypoint.Context.refreshAll()
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-height */
    Waypoint.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/viewport-width */
    Waypoint.viewportWidth = function() {
      return document.documentElement.clientWidth
    }
  
    Waypoint.adapters = []
  
    Waypoint.defaults = {
      context: window,
      continuous: true,
      enabled: true,
      group: 'default',
      horizontal: false,
      offset: 0
    }
  
    Waypoint.offsetAliases = {
      'bottom-in-view': function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      'right-in-view': function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
      }
    }
  
    window.Waypoint = Waypoint
  }())
  ;(function() {
    'use strict'
  
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  
    var keyCounter = 0
    var contexts = {}
    var Waypoint = window.Waypoint
    var oldWindowLoad = window.onload
  
    /* http://imakewebthings.com/waypoints/api/context */
    function Context(element) {
      this.element = element
      this.Adapter = Waypoint.Adapter
      this.adapter = new this.Adapter(element)
      this.key = 'waypoint-context-' + keyCounter
      this.didScroll = false
      this.didResize = false
      this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }
      this.waypoints = {
        vertical: {},
        horizontal: {}
      }
  
      element.waypointContextKey = this.key
      contexts[element.waypointContextKey] = this
      keyCounter += 1
      if (!Waypoint.windowContext) {
        Waypoint.windowContext = true
        Waypoint.windowContext = new Context(window)
      }
  
      this.createThrottledScrollHandler()
      this.createThrottledResizeHandler()
    }
  
    /* Private */
    Context.prototype.add = function(waypoint) {
      var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
      this.waypoints[axis][waypoint.key] = waypoint
      this.refresh()
    }
  
    /* Private */
    Context.prototype.checkEmpty = function() {
      var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
      var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
      var isWindow = this.element == this.element.window
      if (horizontalEmpty && verticalEmpty && !isWindow) {
        this.adapter.off('.waypoints')
        delete contexts[this.key]
      }
    }
  
    /* Private */
    Context.prototype.createThrottledResizeHandler = function() {
      var self = this
  
      function resizeHandler() {
        self.handleResize()
        self.didResize = false
      }
  
      this.adapter.on('resize.waypoints', function() {
        if (!self.didResize) {
          self.didResize = true
          Waypoint.requestAnimationFrame(resizeHandler)
        }
      })
    }
  
    /* Private */
    Context.prototype.createThrottledScrollHandler = function() {
      var self = this
      function scrollHandler() {
        self.handleScroll()
        self.didScroll = false
      }
  
      this.adapter.on('scroll.waypoints', function() {
        if (!self.didScroll || Waypoint.isTouch) {
          self.didScroll = true
          Waypoint.requestAnimationFrame(scrollHandler)
        }
      })
    }
  
    /* Private */
    Context.prototype.handleResize = function() {
      Waypoint.Context.refreshAll()
    }
  
    /* Private */
    Context.prototype.handleScroll = function() {
      var triggeredGroups = {}
      var axes = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left'
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up'
        }
      }
  
      for (var axisKey in axes) {
        var axis = axes[axisKey]
        var isForward = axis.newScroll > axis.oldScroll
        var direction = isForward ? axis.forward : axis.backward
  
        for (var waypointKey in this.waypoints[axisKey]) {
          var waypoint = this.waypoints[axisKey][waypointKey]
          if (waypoint.triggerPoint === null) {
            continue
          }
          var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
          var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
          var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
          var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
          if (crossedForward || crossedBackward) {
            waypoint.queueTrigger(direction)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
        }
      }
  
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
  
      this.oldScroll = {
        x: axes.horizontal.newScroll,
        y: axes.vertical.newScroll
      }
    }
  
    /* Private */
    Context.prototype.innerHeight = function() {
      /*eslint-disable eqeqeq */
      if (this.element == this.element.window) {
        return Waypoint.viewportHeight()
      }
      /*eslint-enable eqeqeq */
      return this.adapter.innerHeight()
    }
  
    /* Private */
    Context.prototype.remove = function(waypoint) {
      delete this.waypoints[waypoint.axis][waypoint.key]
      this.checkEmpty()
    }
  
    /* Private */
    Context.prototype.innerWidth = function() {
      /*eslint-disable eqeqeq */
      if (this.element == this.element.window) {
        return Waypoint.viewportWidth()
      }
      /*eslint-enable eqeqeq */
      return this.adapter.innerWidth()
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-destroy */
    Context.prototype.destroy = function() {
      var allWaypoints = []
      for (var axis in this.waypoints) {
        for (var waypointKey in this.waypoints[axis]) {
          allWaypoints.push(this.waypoints[axis][waypointKey])
        }
      }
      for (var i = 0, end = allWaypoints.length; i < end; i++) {
        allWaypoints[i].destroy()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-refresh */
    Context.prototype.refresh = function() {
      /*eslint-disable eqeqeq */
      var isWindow = this.element == this.element.window
      /*eslint-enable eqeqeq */
      var contextOffset = isWindow ? undefined : this.adapter.offset()
      var triggeredGroups = {}
      var axes
  
      this.handleScroll()
      axes = {
        horizontal: {
          contextOffset: isWindow ? 0 : contextOffset.left,
          contextScroll: isWindow ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: 'right',
          backward: 'left',
          offsetProp: 'left'
        },
        vertical: {
          contextOffset: isWindow ? 0 : contextOffset.top,
          contextScroll: isWindow ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: 'down',
          backward: 'up',
          offsetProp: 'top'
        }
      }
  
      for (var axisKey in axes) {
        var axis = axes[axisKey]
        for (var waypointKey in this.waypoints[axisKey]) {
          var waypoint = this.waypoints[axisKey][waypointKey]
          var adjustment = waypoint.options.offset
          var oldTriggerPoint = waypoint.triggerPoint
          var elementOffset = 0
          var freshWaypoint = oldTriggerPoint == null
          var contextModifier, wasBeforeScroll, nowAfterScroll
          var triggeredBackward, triggeredForward
  
          if (waypoint.element !== waypoint.element.window) {
            elementOffset = waypoint.adapter.offset()[axis.offsetProp]
          }
  
          if (typeof adjustment === 'function') {
            adjustment = adjustment.apply(waypoint)
          }
          else if (typeof adjustment === 'string') {
            adjustment = parseFloat(adjustment)
            if (waypoint.options.offset.indexOf('%') > - 1) {
              adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
            }
          }
  
          contextModifier = axis.contextScroll - axis.contextOffset
          waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
          wasBeforeScroll = oldTriggerPoint < axis.oldScroll
          nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
          triggeredBackward = wasBeforeScroll && nowAfterScroll
          triggeredForward = !wasBeforeScroll && !nowAfterScroll
  
          if (!freshWaypoint && triggeredBackward) {
            waypoint.queueTrigger(axis.backward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
          else if (!freshWaypoint && triggeredForward) {
            waypoint.queueTrigger(axis.forward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
          else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
            waypoint.queueTrigger(axis.forward)
            triggeredGroups[waypoint.group.id] = waypoint.group
          }
        }
      }
  
      Waypoint.requestAnimationFrame(function() {
        for (var groupKey in triggeredGroups) {
          triggeredGroups[groupKey].flushTriggers()
        }
      })
  
      return this
    }
  
    /* Private */
    Context.findOrCreateByElement = function(element) {
      return Context.findByElement(element) || new Context(element)
    }
  
    /* Private */
    Context.refreshAll = function() {
      for (var contextId in contexts) {
        contexts[contextId].refresh()
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/context-find-by-element */
    Context.findByElement = function(element) {
      return contexts[element.waypointContextKey]
    }
  
    window.onload = function() {
      if (oldWindowLoad) {
        oldWindowLoad()
      }
      Context.refreshAll()
    }
  
  
    Waypoint.requestAnimationFrame = function(callback) {
      var requestFn = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        requestAnimationFrameShim
      requestFn.call(window, callback)
    }
    Waypoint.Context = Context
  }())
  ;(function() {
    'use strict'
  
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint
    }
  
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint
    }
  
    var groups = {
      vertical: {},
      horizontal: {}
    }
    var Waypoint = window.Waypoint
  
    /* http://imakewebthings.com/waypoints/api/group */
    function Group(options) {
      this.name = options.name
      this.axis = options.axis
      this.id = this.name + '-' + this.axis
      this.waypoints = []
      this.clearTriggerQueues()
      groups[this.axis][this.name] = this
    }
  
    /* Private */
    Group.prototype.add = function(waypoint) {
      this.waypoints.push(waypoint)
    }
  
    /* Private */
    Group.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      }
    }
  
    /* Private */
    Group.prototype.flushTriggers = function() {
      for (var direction in this.triggerQueues) {
        var waypoints = this.triggerQueues[direction]
        var reverse = direction === 'up' || direction === 'left'
        waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
        for (var i = 0, end = waypoints.length; i < end; i += 1) {
          var waypoint = waypoints[i]
          if (waypoint.options.continuous || i === waypoints.length - 1) {
            waypoint.trigger([direction])
          }
        }
      }
      this.clearTriggerQueues()
    }
  
    /* Private */
    Group.prototype.next = function(waypoint) {
      this.waypoints.sort(byTriggerPoint)
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      var isLast = index === this.waypoints.length - 1
      return isLast ? null : this.waypoints[index + 1]
    }
  
    /* Private */
    Group.prototype.previous = function(waypoint) {
      this.waypoints.sort(byTriggerPoint)
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      return index ? this.waypoints[index - 1] : null
    }
  
    /* Private */
    Group.prototype.queueTrigger = function(waypoint, direction) {
      this.triggerQueues[direction].push(waypoint)
    }
  
    /* Private */
    Group.prototype.remove = function(waypoint) {
      var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
      if (index > -1) {
        this.waypoints.splice(index, 1)
      }
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/first */
    Group.prototype.first = function() {
      return this.waypoints[0]
    }
  
    /* Public */
    /* http://imakewebthings.com/waypoints/api/last */
    Group.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
    }
  
    /* Private */
    Group.findOrCreate = function(options) {
      return groups[options.axis][options.name] || new Group(options)
    }
  
    Waypoint.Group = Group
  }())
  ;(function() {
    'use strict'
  
    var $ = window.jQuery
    var Waypoint = window.Waypoint
  
    function JQueryAdapter(element) {
      this.$element = $(element)
    }
  
    $.each([
      'innerHeight',
      'innerWidth',
      'off',
      'offset',
      'on',
      'outerHeight',
      'outerWidth',
      'scrollLeft',
      'scrollTop'
    ], function(i, method) {
      JQueryAdapter.prototype[method] = function() {
        var args = Array.prototype.slice.call(arguments)
        return this.$element[method].apply(this.$element, args)
      }
    })
  
    $.each([
      'extend',
      'inArray',
      'isEmptyObject'
    ], function(i, method) {
      JQueryAdapter[method] = $[method]
    })
  
    Waypoint.adapters.push({
      name: 'jquery',
      Adapter: JQueryAdapter
    })
    Waypoint.Adapter = JQueryAdapter
  }())
  ;(function() {
    'use strict'
  
    var Waypoint = window.Waypoint
  
    function createExtension(framework) {
      return function() {
        var waypoints = []
        var overrides = arguments[0]
  
        if (framework.isFunction(arguments[0])) {
          overrides = framework.extend({}, arguments[1])
          overrides.handler = arguments[0]
        }
  
        this.each(function() {
          var options = framework.extend({}, overrides, {
            element: this
          })
          if (typeof options.context === 'string') {
            options.context = framework(this).closest(options.context)[0]
          }
          waypoints.push(new Waypoint(options))
        })
  
        return waypoints
      }
    }
  
    if (window.jQuery) {
      window.jQuery.fn.waypoint = createExtension(window.jQuery)
    }
    if (window.Zepto) {
      window.Zepto.fn.waypoint = createExtension(window.Zepto)
    }
  }())
  ;

/**
 * Owl Carousel v2.3.0
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {
    
        /**
         * Creates a carousel.
         * @class The Owl Carousel.
         * @public
         * @param {HTMLElement|jQuery} element - The element to create the carousel for.
         * @param {Object} [options] - The options
         */
        function Owl(element, options) {
    
            /**
             * Current settings for the carousel.
             * @public
             */
            this.settings = null;
    
            /**
             * Current options set by the caller including defaults.
             * @public
             */
            this.options = $.extend({}, Owl.Defaults, options);
    
            /**
             * Plugin element.
             * @public
             */
            this.$element = $(element);
    
            /**
             * Proxied event handlers.
             * @protected
             */
            this._handlers = {};
    
            /**
             * References to the running plugins of this carousel.
             * @protected
             */
            this._plugins = {};
    
            /**
             * Currently suppressed events to prevent them from being retriggered.
             * @protected
             */
            this._supress = {};
    
            /**
             * Absolute current position.
             * @protected
             */
            this._current = null;
    
            /**
             * Animation speed in milliseconds.
             * @protected
             */
            this._speed = null;
    
            /**
             * Coordinates of all items in pixel.
             * @todo The name of this member is missleading.
             * @protected
             */
            this._coordinates = [];
    
            /**
             * Current breakpoint.
             * @todo Real media queries would be nice.
             * @protected
             */
            this._breakpoint = null;
    
            /**
             * Current width of the plugin element.
             */
            this._width = null;
    
            /**
             * All real items.
             * @protected
             */
            this._items = [];
    
            /**
             * All cloned items.
             * @protected
             */
            this._clones = [];
    
            /**
             * Merge values of all items.
             * @todo Maybe this could be part of a plugin.
             * @protected
             */
            this._mergers = [];
    
            /**
             * Widths of all items.
             */
            this._widths = [];
    
            /**
             * Invalidated parts within the update process.
             * @protected
             */
            this._invalidated = {};
    
            /**
             * Ordered list of workers for the update process.
             * @protected
             */
            this._pipe = [];
    
            /**
             * Current state information for the drag operation.
             * @todo #261
             * @protected
             */
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            };
    
            /**
             * Current state information and their tags.
             * @type {Object}
             * @protected
             */
            this._states = {
                current: {},
                tags: {
                    'initializing': [ 'busy' ],
                    'animating': [ 'busy' ],
                    'dragging': [ 'interacting' ]
                }
            };
    
            $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
                this._handlers[handler] = $.proxy(this[handler], this);
            }, this));
    
            $.each(Owl.Plugins, $.proxy(function(key, plugin) {
                this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                    = new plugin(this);
            }, this));
    
            $.each(Owl.Workers, $.proxy(function(priority, worker) {
                this._pipe.push({
                    'filter': worker.filter,
                    'run': $.proxy(worker.run, this)
                });
            }, this));
    
            this.setup();
            this.initialize();
        }
    
        /**
         * Default options for the carousel.
         * @public
         */
        Owl.Defaults = {
            items: 3,
            loop: false,
            center: false,
            rewind: false,
    
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            freeDrag: false,
    
            margin: 0,
            stagePadding: 0,
    
            merge: false,
            mergeFit: true,
            autoWidth: false,
    
            startPosition: 0,
            rtl: false,
    
            smartSpeed: 250,
            fluidSpeed: false,
            dragEndSpeed: false,
    
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: window,
    
            fallbackEasing: 'swing',
    
            info: false,
    
            nestedItemSelector: false,
            itemElement: 'div',
            stageElement: 'div',
    
            refreshClass: 'owl-refresh',
            loadedClass: 'owl-loaded',
            loadingClass: 'owl-loading',
            rtlClass: 'owl-rtl',
            responsiveClass: 'owl-responsive',
            dragClass: 'owl-drag',
            itemClass: 'owl-item',
            stageClass: 'owl-stage',
            stageOuterClass: 'owl-stage-outer',
            grabClass: 'owl-grab'
        };
    
        /**
         * Enumeration for width.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Width = {
            Default: 'default',
            Inner: 'inner',
            Outer: 'outer'
        };
    
        /**
         * Enumeration for types.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Type = {
            Event: 'event',
            State: 'state'
        };
    
        /**
         * Contains all registered plugins.
         * @public
         */
        Owl.Plugins = {};
    
        /**
         * List of workers involved in the update process.
         */
        Owl.Workers = [ {
            filter: [ 'width', 'settings' ],
            run: function() {
                this._width = this.$element.width();
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current = this._items && this._items[this.relative(this._current)];
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                this.$stage.children('.cloned').remove();
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var margin = this.settings.margin || '',
                    grid = !this.settings.autoWidth,
                    rtl = this.settings.rtl,
                    css = {
                        'width': 'auto',
                        'margin-left': rtl ? margin : '',
                        'margin-right': rtl ? '' : margin
                    };
    
                !grid && this.$stage.children().css(css);
    
                cache.css = css;
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    merge = null,
                    iterator = this._items.length,
                    grid = !this.settings.autoWidth,
                    widths = [];
    
                cache.items = {
                    merge: false,
                    width: width
                };
    
                while (iterator--) {
                    merge = this._mergers[iterator];
                    merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
    
                    cache.items.merge = merge > 1 || cache.items.merge;
    
                    widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
                }
    
                this._widths = widths;
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                var clones = [],
                    items = this._items,
                    settings = this.settings,
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4),
                    size = Math.ceil(items.length / 2) * 2,
                    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                    append = '',
                    prepend = '';
    
                repeat /= 2;
    
                while (repeat > 0) {
                    // Switch to only using appended clones
                    clones.push(this.normalize(clones.length / 2, true));
                    append = append + items[clones[clones.length - 1]][0].outerHTML;
                    clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                    prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                    repeat -= 1;
                }
    
                this._clones = clones;
    
                $(append).addClass('cloned').appendTo(this.$stage);
                $(prepend).addClass('cloned').prependTo(this.$stage);
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    size = this._clones.length + this._items.length,
                    iterator = -1,
                    previous = 0,
                    current = 0,
                    coordinates = [];
    
                while (++iterator < size) {
                    previous = coordinates[iterator - 1] || 0;
                    current = this._widths[this.relative(iterator)] + this.settings.margin;
                    coordinates.push(previous + current * rtl);
                }
    
                this._coordinates = coordinates;
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var padding = this.settings.stagePadding,
                    coordinates = this._coordinates,
                    css = {
                        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                        'padding-left': padding || '',
                        'padding-right': padding || ''
                    };
    
                this.$stage.css(css);
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var iterator = this._coordinates.length,
                    grid = !this.settings.autoWidth,
                    items = this.$stage.children();
    
                if (grid && cache.items.merge) {
                    while (iterator--) {
                        cache.css.width = this._widths[this.relative(iterator)];
                        items.eq(iterator).css(cache.css);
                    }
                } else if (grid) {
                    cache.css.width = cache.items.width;
                    items.css(cache.css);
                }
            }
        }, {
            filter: [ 'items' ],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr('style');
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
                cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
                this.reset(cache.current);
            }
        }, {
            filter: [ 'position' ],
            run: function() {
                this.animate(this.coordinates(this._current));
            }
        }, {
            filter: [ 'width', 'position', 'items', 'settings' ],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    padding = this.settings.stagePadding * 2,
                    begin = this.coordinates(this.current()) + padding,
                    end = begin + this.width() * rtl,
                    inner, outer, matches = [], i, n;
    
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    inner = this._coordinates[i - 1] || 0;
                    outer = Math.abs(this._coordinates[i]) + padding * rtl;
    
                    if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                        || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                        matches.push(i);
                    }
                }
    
                this.$stage.children('.active').removeClass('active');
                this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
    
                this.$stage.children('.center').removeClass('center');
                if (this.settings.center) {
                    this.$stage.children().eq(this.current()).addClass('center');
                }
            }
        } ];
    
        /**
         * Initializes the carousel.
         * @protected
         */
        Owl.prototype.initialize = function() {
            this.enter('initializing');
            this.trigger('initialize');
    
            this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
    
            if (this.settings.autoWidth && !this.is('pre-loading')) {
                var imgs, nestedSelector, width;
                imgs = this.$element.find('img');
                nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
                width = this.$element.children(nestedSelector).width();
    
                if (imgs.length && width <= 0) {
                    this.preloadAutoWidthImages(imgs);
                }
            }
    
            this.$element.addClass(this.options.loadingClass);
    
            // create stage
            this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
                .wrap('<div class="' + this.settings.stageOuterClass + '"/>');
    
            // append stage
            this.$element.append(this.$stage.parent());
    
            // append content
            this.replace(this.$element.children().not(this.$stage.parent()));
    
            // check visibility
            if (this.$element.is(':visible')) {
                // update view
                this.refresh();
            } else {
                // invalidate width
                this.invalidate('width');
            }
    
            this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
    
            // register event handlers
            this.registerEventHandlers();
    
            this.leave('initializing');
            this.trigger('initialized');
        };
    
        /**
         * Setups the current settings.
         * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
         * @todo Support for media queries by using `matchMedia` would be nice.
         * @public
         */
        Owl.prototype.setup = function() {
            var viewport = this.viewport(),
                overwrites = this.options.responsive,
                match = -1,
                settings = null;
    
            if (!overwrites) {
                settings = $.extend({}, this.options);
            } else {
                $.each(overwrites, function(breakpoint) {
                    if (breakpoint <= viewport && breakpoint > match) {
                        match = Number(breakpoint);
                    }
                });
    
                settings = $.extend({}, this.options, overwrites[match]);
                if (typeof settings.stagePadding === 'function') {
                    settings.stagePadding = settings.stagePadding();
                }
                delete settings.responsive;
    
                // responsive class
                if (settings.responsiveClass) {
                    this.$element.attr('class',
                        this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                    );
                }
            }
    
            this.trigger('change', { property: { name: 'settings', value: settings } });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', { property: { name: 'settings', value: this.settings } });
        };
    
        /**
         * Updates option logic if necessery.
         * @protected
         */
        Owl.prototype.optionsLogic = function() {
            if (this.settings.autoWidth) {
                this.settings.stagePadding = false;
                this.settings.merge = false;
            }
        };
    
        /**
         * Prepares an item before add.
         * @todo Rename event parameter `content` to `item`.
         * @protected
         * @returns {jQuery|HTMLElement} - The item container.
         */
        Owl.prototype.prepare = function(item) {
            var event = this.trigger('prepare', { content: item });
    
            if (!event.data) {
                event.data = $('<' + this.settings.itemElement + '/>')
                    .addClass(this.options.itemClass).append(item)
            }
    
            this.trigger('prepared', { content: event.data });
    
            return event.data;
        };
    
        /**
         * Updates the view.
         * @public
         */
        Owl.prototype.update = function() {
            var i = 0,
                n = this._pipe.length,
                filter = $.proxy(function(p) { return this[p] }, this._invalidated),
                cache = {};
    
            while (i < n) {
                if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                    this._pipe[i].run(cache);
                }
                i++;
            }
    
            this._invalidated = {};
    
            !this.is('valid') && this.enter('valid');
        };
    
        /**
         * Gets the width of the view.
         * @public
         * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
         * @returns {Number} - The width of the view in pixel.
         */
        Owl.prototype.width = function(dimension) {
            dimension = dimension || Owl.Width.Default;
            switch (dimension) {
                case Owl.Width.Inner:
                case Owl.Width.Outer:
                    return this._width;
                default:
                    return this._width - this.settings.stagePadding * 2 + this.settings.margin;
            }
        };
    
        /**
         * Refreshes the carousel primarily for adaptive purposes.
         * @public
         */
        Owl.prototype.refresh = function() {
            this.enter('refreshing');
            this.trigger('refresh');
    
            this.setup();
    
            this.optionsLogic();
    
            this.$element.addClass(this.options.refreshClass);
    
            this.update();
    
            this.$element.removeClass(this.options.refreshClass);
    
            this.leave('refreshing');
            this.trigger('refreshed');
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onThrottledResize = function() {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onResize = function() {
            if (!this._items.length) {
                return false;
            }
    
            if (this._width === this.$element.width()) {
                return false;
            }
    
            if (!this.$element.is(':visible')) {
                return false;
            }
    
            this.enter('resizing');
    
            if (this.trigger('resize').isDefaultPrevented()) {
                this.leave('resizing');
                return false;
            }
    
            this.invalidate('width');
    
            this.refresh();
    
            this.leave('resizing');
            this.trigger('resized');
        };
    
        /**
         * Registers event handlers.
         * @todo Check `msPointerEnabled`
         * @todo #261
         * @protected
         */
        Owl.prototype.registerEventHandlers = function() {
            if ($.support.transition) {
                this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
            }
    
            if (this.settings.responsive !== false) {
                this.on(window, 'resize', this._handlers.onThrottledResize);
            }
    
            if (this.settings.mouseDrag) {
                this.$element.addClass(this.options.dragClass);
                this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
                this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
            }
    
            if (this.settings.touchDrag){
                this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
                this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
            }
        };
    
        /**
         * Handles `touchstart` and `mousedown` events.
         * @todo Horizontal swipe threshold as option
         * @todo #261
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragStart = function(event) {
            var stage = null;
    
            if (event.which === 3) {
                return;
            }
    
            if ($.support.transform) {
                stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
                stage = {
                    x: stage[stage.length === 16 ? 12 : 4],
                    y: stage[stage.length === 16 ? 13 : 5]
                };
            } else {
                stage = this.$stage.position();
                stage = {
                    x: this.settings.rtl ?
                        stage.left + this.$stage.width() - this.width() + this.settings.margin :
                        stage.left,
                    y: stage.top
                };
            }
    
            if (this.is('animating')) {
                $.support.transform ? this.animate(stage.x) : this.$stage.stop()
                this.invalidate('position');
            }
    
            this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
    
            this.speed(0);
    
            this._drag.time = new Date().getTime();
            this._drag.target = $(event.target);
            this._drag.stage.start = stage;
            this._drag.stage.current = stage;
            this._drag.pointer = this.pointer(event);
    
            $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
    
            $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
                var delta = this.difference(this._drag.pointer, this.pointer(event));
    
                $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
    
                if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                    return;
                }
    
                event.preventDefault();
    
                this.enter('dragging');
                this.trigger('drag');
            }, this));
        };
    
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragMove = function(event) {
            var minimum = null,
                maximum = null,
                pull = null,
                delta = this.difference(this._drag.pointer, this.pointer(event)),
                stage = this.difference(this._drag.stage.start, delta);
    
            if (!this.is('dragging')) {
                return;
            }
    
            event.preventDefault();
    
            if (this.settings.loop) {
                minimum = this.coordinates(this.minimum());
                maximum = this.coordinates(this.maximum() + 1) - minimum;
                stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
            } else {
                minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
                maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
                pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
                stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
            }
    
            this._drag.stage.current = stage;
    
            this.animate(stage.x);
        };
    
        /**
         * Handles the `touchend` and `mouseup` events.
         * @todo #261
         * @todo Threshold for click event
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragEnd = function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event)),
                stage = this._drag.stage.current,
                direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    
            $(document).off('.owl.core');
    
            this.$element.removeClass(this.options.grabClass);
    
            if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
                this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
                this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
                this.invalidate('position');
                this.update();
    
                this._drag.direction = direction;
    
                if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                    this._drag.target.one('click.owl.core', function() { return false; });
                }
            }
    
            if (!this.is('dragging')) {
                return;
            }
    
            this.leave('dragging');
            this.trigger('dragged');
        };
    
        /**
         * Gets absolute position of the closest item for a coordinate.
         * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
         * @protected
         * @param {Number} coordinate - The coordinate in pixel.
         * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
         * @return {Number} - The absolute position of the closest item.
         */
        Owl.prototype.closest = function(coordinate, direction) {
            var position = -1,
                pull = 30,
                width = this.width(),
                coordinates = this.coordinates();
    
            if (!this.settings.freeDrag) {
                // check closest item
                $.each(coordinates, $.proxy(function(index, value) {
                    // on a left pull, check on current index
                    if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                        position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                    } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                        position = index + 1;
                    } else if (this.op(coordinate, '<', value)
                        && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                        position = direction === 'left' ? index + 1 : index;
                    }
                    return position === -1;
                }, this));
            }
    
            if (!this.settings.loop) {
                // non loop boundries
                if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                    position = coordinate = this.minimum();
                } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                    position = coordinate = this.maximum();
                }
            }
    
            return position;
        };
    
        /**
         * Animates the stage.
         * @todo #270
         * @public
         * @param {Number} coordinate - The coordinate in pixels.
         */
        Owl.prototype.animate = function(coordinate) {
            var animate = this.speed() > 0;
    
            this.is('animating') && this.onTransitionEnd();
    
            if (animate) {
                this.enter('animating');
                this.trigger('translate');
            }
    
            if ($.support.transform3d && $.support.transition) {
                this.$stage.css({
                    transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                    transition: (this.speed() / 1000) + 's'
                });
            } else if (animate) {
                this.$stage.animate({
                    left: coordinate + 'px'
                }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
            } else {
                this.$stage.css({
                    left: coordinate + 'px'
                });
            }
        };
    
        /**
         * Checks whether the carousel is in a specific state or not.
         * @param {String} state - The state to check.
         * @returns {Boolean} - The flag which indicates if the carousel is busy.
         */
        Owl.prototype.is = function(state) {
            return this._states.current[state] && this._states.current[state] > 0;
        };
    
        /**
         * Sets the absolute position of the current item.
         * @public
         * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
         * @returns {Number} - The absolute position of the current item.
         */
        Owl.prototype.current = function(position) {
            if (position === undefined) {
                return this._current;
            }
    
            if (this._items.length === 0) {
                return undefined;
            }
    
            position = this.normalize(position);
    
            if (this._current !== position) {
                var event = this.trigger('change', { property: { name: 'position', value: position } });
    
                if (event.data !== undefined) {
                    position = this.normalize(event.data);
                }
    
                this._current = position;
    
                this.invalidate('position');
    
                this.trigger('changed', { property: { name: 'position', value: this._current } });
            }
    
            return this._current;
        };
    
        /**
         * Invalidates the given part of the update routine.
         * @param {String} [part] - The part to invalidate.
         * @returns {Array.<String>} - The invalidated parts.
         */
        Owl.prototype.invalidate = function(part) {
            if ($.type(part) === 'string') {
                this._invalidated[part] = true;
                this.is('valid') && this.leave('valid');
            }
            return $.map(this._invalidated, function(v, i) { return i });
        };
    
        /**
         * Resets the absolute position of the current item.
         * @public
         * @param {Number} position - The absolute position of the new item.
         */
        Owl.prototype.reset = function(position) {
            position = this.normalize(position);
    
            if (position === undefined) {
                return;
            }
    
            this._speed = 0;
            this._current = position;
    
            this.suppress([ 'translate', 'translated' ]);
    
            this.animate(this.coordinates(position));
    
            this.release([ 'translate', 'translated' ]);
        };
    
        /**
         * Normalizes an absolute or a relative position of an item.
         * @public
         * @param {Number} position - The absolute or relative position to normalize.
         * @param {Boolean} [relative=false] - Whether the given position is relative or not.
         * @returns {Number} - The normalized position.
         */
        Owl.prototype.normalize = function(position, relative) {
            var n = this._items.length,
                m = relative ? 0 : this._clones.length;
    
            if (!this.isNumeric(position) || n < 1) {
                position = undefined;
            } else if (position < 0 || position >= n + m) {
                position = ((position - m / 2) % n + n) % n + m / 2;
            }
    
            return position;
        };
    
        /**
         * Converts an absolute position of an item into a relative one.
         * @public
         * @param {Number} position - The absolute position to convert.
         * @returns {Number} - The converted position.
         */
        Owl.prototype.relative = function(position) {
            position -= this._clones.length / 2;
            return this.normalize(position, true);
        };
    
        /**
         * Gets the maximum position for the current item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.maximum = function(relative) {
            var settings = this.settings,
                maximum = this._coordinates.length,
                iterator,
                reciprocalItemsWidth,
                elementWidth;
    
            if (settings.loop) {
                maximum = this._clones.length / 2 + this._items.length - 1;
            } else if (settings.autoWidth || settings.merge) {
                iterator = this._items.length;
                if (iterator) {
                    reciprocalItemsWidth = this._items[--iterator].width();
                    elementWidth = this.$element.width();
                    while (iterator--) {
                        reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                        if (reciprocalItemsWidth > elementWidth) {
                            break;
                        }
                    }
                }
                maximum = iterator + 1;
            } else if (settings.center) {
                maximum = this._items.length - 1;
            } else {
                maximum = this._items.length - settings.items;
            }
    
            if (relative) {
                maximum -= this._clones.length / 2;
            }
    
            return Math.max(maximum, 0);
        };
    
        /**
         * Gets the minimum position for the current item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.minimum = function(relative) {
            return relative ? 0 : this._clones.length / 2;
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.items = function(position) {
            if (position === undefined) {
                return this._items.slice();
            }
    
            position = this.normalize(position, true);
            return this._items[position];
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.mergers = function(position) {
            if (position === undefined) {
                return this._mergers.slice();
            }
    
            position = this.normalize(position, true);
            return this._mergers[position];
        };
    
        /**
         * Gets the absolute positions of clones for an item.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
         */
        Owl.prototype.clones = function(position) {
            var odd = this._clones.length / 2,
                even = odd + this._items.length,
                map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
    
            if (position === undefined) {
                return $.map(this._clones, function(v, i) { return map(i) });
            }
    
            return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
        };
    
        /**
         * Sets the current animation speed.
         * @public
         * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
         * @returns {Number} - The current animation speed in milliseconds.
         */
        Owl.prototype.speed = function(speed) {
            if (speed !== undefined) {
                this._speed = speed;
            }
    
            return this._speed;
        };
    
        /**
         * Gets the coordinate of an item.
         * @todo The name of this method is missleanding.
         * @public
         * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
         * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
         */
        Owl.prototype.coordinates = function(position) {
            var multiplier = 1,
                newPosition = position - 1,
                coordinate;
    
            if (position === undefined) {
                return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                    return this.coordinates(index);
                }, this));
            }
    
            if (this.settings.center) {
                if (this.settings.rtl) {
                    multiplier = -1;
                    newPosition = position + 1;
                }
    
                coordinate = this._coordinates[position];
                coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
            } else {
                coordinate = this._coordinates[newPosition] || 0;
            }
    
            coordinate = Math.ceil(coordinate);
    
            return coordinate;
        };
    
        /**
         * Calculates the speed for a translation.
         * @protected
         * @param {Number} from - The absolute position of the start item.
         * @param {Number} to - The absolute position of the target item.
         * @param {Number} [factor=undefined] - The time factor in milliseconds.
         * @returns {Number} - The time in milliseconds for the translation.
         */
        Owl.prototype.duration = function(from, to, factor) {
            if (factor === 0) {
                return 0;
            }
    
            return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
        };
    
        /**
         * Slides to the specified item.
         * @public
         * @param {Number} position - The position of the item.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.to = function(position, speed) {
            var current = this.current(),
                revert = null,
                distance = position - this.relative(current),
                direction = (distance > 0) - (distance < 0),
                items = this._items.length,
                minimum = this.minimum(),
                maximum = this.maximum();
    
            if (this.settings.loop) {
                if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                    distance += direction * -1 * items;
                }
    
                position = current + distance;
                revert = ((position - minimum) % items + items) % items + minimum;
    
                if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                    current = revert - distance;
                    position = revert;
                    this.reset(current);
                }
            } else if (this.settings.rewind) {
                maximum += 1;
                position = (position % maximum + maximum) % maximum;
            } else {
                position = Math.max(minimum, Math.min(maximum, position));
            }
    
            this.speed(this.duration(current, position, speed));
            this.current(position);
    
            if (this.$element.is(':visible')) {
                this.update();
            }
        };
    
        /**
         * Slides to the next item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.next = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) + 1, speed);
        };
    
        /**
         * Slides to the previous item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.prev = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) - 1, speed);
        };
    
        /**
         * Handles the end of an animation.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onTransitionEnd = function(event) {
    
            // if css2 animation then event object is undefined
            if (event !== undefined) {
                event.stopPropagation();
    
                // Catch only owl-stage transitionEnd event
                if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                    return false;
                }
            }
    
            this.leave('animating');
            this.trigger('translated');
        };
    
        /**
         * Gets viewport width.
         * @protected
         * @return {Number} - The width in pixel.
         */
        Owl.prototype.viewport = function() {
            var width;
            if (this.options.responsiveBaseElement !== window) {
                width = $(this.options.responsiveBaseElement).width();
            } else if (window.innerWidth) {
                width = window.innerWidth;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                width = document.documentElement.clientWidth;
            } else {
                console.warn('Can not detect viewport width.');
            }
            return width;
        };
    
        /**
         * Replaces the current content.
         * @public
         * @param {HTMLElement|jQuery|String} content - The new content.
         */
        Owl.prototype.replace = function(content) {
            this.$stage.empty();
            this._items = [];
    
            if (content) {
                content = (content instanceof jQuery) ? content : $(content);
            }
    
            if (this.settings.nestedItemSelector) {
                content = content.find('.' + this.settings.nestedItemSelector);
            }
    
            content.filter(function() {
                return this.nodeType === 1;
            }).each($.proxy(function(index, item) {
                item = this.prepare(item);
                this.$stage.append(item);
                this._items.push(item);
                this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            }, this));
    
            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    
            this.invalidate('items');
        };
    
        /**
         * Adds an item.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {HTMLElement|jQuery|String} content - The item content to add.
         * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
         */
        Owl.prototype.add = function(content, position) {
            var current = this.relative(this._current);
    
            position = position === undefined ? this._items.length : this.normalize(position, true);
            content = content instanceof jQuery ? content : $(content);
    
            this.trigger('add', { content: content, position: position });
    
            content = this.prepare(content);
    
            if (this._items.length === 0 || position === this._items.length) {
                this._items.length === 0 && this.$stage.append(content);
                this._items.length !== 0 && this._items[position - 1].after(content);
                this._items.push(content);
                this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            } else {
                this._items[position].before(content);
                this._items.splice(position, 0, content);
                this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            }
    
            this._items[current] && this.reset(this._items[current].index());
    
            this.invalidate('items');
    
            this.trigger('added', { content: content, position: position });
        };
    
        /**
         * Removes an item by its position.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {Number} position - The relative position of the item to remove.
         */
        Owl.prototype.remove = function(position) {
            position = this.normalize(position, true);
    
            if (position === undefined) {
                return;
            }
    
            this.trigger('remove', { content: this._items[position], position: position });
    
            this._items[position].remove();
            this._items.splice(position, 1);
            this._mergers.splice(position, 1);
    
            this.invalidate('items');
    
            this.trigger('removed', { content: null, position: position });
        };
    
        /**
         * Preloads images with auto width.
         * @todo Replace by a more generic approach
         * @protected
         */
        Owl.prototype.preloadAutoWidthImages = function(images) {
            images.each($.proxy(function(i, element) {
                this.enter('pre-loading');
                element = $(element);
                $(new Image()).one('load', $.proxy(function(e) {
                    element.attr('src', e.target.src);
                    element.css('opacity', 1);
                    this.leave('pre-loading');
                    !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
            }, this));
        };
    
        /**
         * Destroys the carousel.
         * @public
         */
        Owl.prototype.destroy = function() {
    
            this.$element.off('.owl.core');
            this.$stage.off('.owl.core');
            $(document).off('.owl.core');
    
            if (this.settings.responsive !== false) {
                window.clearTimeout(this.resizeTimer);
                this.off(window, 'resize', this._handlers.onThrottledResize);
            }
    
            for (var i in this._plugins) {
                this._plugins[i].destroy();
            }
    
            this.$stage.children('.cloned').remove();
    
            this.$stage.unwrap();
            this.$stage.children().contents().unwrap();
            this.$stage.children().unwrap();
            this.$stage.remove();
            this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
                .removeData('owl.carousel');
        };
    
        /**
         * Operators to calculate right-to-left and left-to-right.
         * @protected
         * @param {Number} [a] - The left side operand.
         * @param {String} [o] - The operator.
         * @param {Number} [b] - The right side operand.
         */
        Owl.prototype.op = function(a, o, b) {
            var rtl = this.settings.rtl;
            switch (o) {
                case '<':
                    return rtl ? a > b : a < b;
                case '>':
                    return rtl ? a < b : a > b;
                case '>=':
                    return rtl ? a <= b : a >= b;
                case '<=':
                    return rtl ? a >= b : a <= b;
                default:
                    break;
            }
        };
    
        /**
         * Attaches to an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The event handler to attach.
         * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
         */
        Owl.prototype.on = function(element, event, listener, capture) {
            if (element.addEventListener) {
                element.addEventListener(event, listener, capture);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, listener);
            }
        };
    
        /**
         * Detaches from an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The attached event handler to detach.
         * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
         */
        Owl.prototype.off = function(element, event, listener, capture) {
            if (element.removeEventListener) {
                element.removeEventListener(event, listener, capture);
            } else if (element.detachEvent) {
                element.detachEvent('on' + event, listener);
            }
        };
    
        /**
         * Triggers a public event.
         * @todo Remove `status`, `relatedTarget` should be used instead.
         * @protected
         * @param {String} name - The event name.
         * @param {*} [data=null] - The event data.
         * @param {String} [namespace=carousel] - The event namespace.
         * @param {String} [state] - The state which is associated with the event.
         * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
         * @returns {Event} - The event arguments.
         */
        Owl.prototype.trigger = function(name, data, namespace, state, enter) {
            var status = {
                item: { count: this._items.length, index: this.current() }
            }, handler = $.camelCase(
                $.grep([ 'on', name, namespace ], function(v) { return v })
                    .join('-').toLowerCase()
            ), event = $.Event(
                [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );
    
            if (!this._supress[name]) {
                $.each(this._plugins, function(name, plugin) {
                    if (plugin.onTrigger) {
                        plugin.onTrigger(event);
                    }
                });
    
                this.register({ type: Owl.Type.Event, name: name });
                this.$element.trigger(event);
    
                if (this.settings && typeof this.settings[handler] === 'function') {
                    this.settings[handler].call(this, event);
                }
            }
    
            return event;
        };
    
        /**
         * Enters a state.
         * @param name - The state name.
         */
        Owl.prototype.enter = function(name) {
            $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
                if (this._states.current[name] === undefined) {
                    this._states.current[name] = 0;
                }
    
                this._states.current[name]++;
            }, this));
        };
    
        /**
         * Leaves a state.
         * @param name - The state name.
         */
        Owl.prototype.leave = function(name) {
            $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
                this._states.current[name]--;
            }, this));
        };
    
        /**
         * Registers an event or state.
         * @public
         * @param {Object} object - The event or state to register.
         */
        Owl.prototype.register = function(object) {
            if (object.type === Owl.Type.Event) {
                if (!$.event.special[object.name]) {
                    $.event.special[object.name] = {};
                }
    
                if (!$.event.special[object.name].owl) {
                    var _default = $.event.special[object.name]._default;
                    $.event.special[object.name]._default = function(e) {
                        if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                            return _default.apply(this, arguments);
                        }
                        return e.namespace && e.namespace.indexOf('owl') > -1;
                    };
                    $.event.special[object.name].owl = true;
                }
            } else if (object.type === Owl.Type.State) {
                if (!this._states.tags[object.name]) {
                    this._states.tags[object.name] = object.tags;
                } else {
                    this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
                }
    
                this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                    return $.inArray(tag, this._states.tags[object.name]) === i;
                }, this));
            }
        };
    
        /**
         * Suppresses events.
         * @protected
         * @param {Array.<String>} events - The events to suppress.
         */
        Owl.prototype.suppress = function(events) {
            $.each(events, $.proxy(function(index, event) {
                this._supress[event] = true;
            }, this));
        };
    
        /**
         * Releases suppressed events.
         * @protected
         * @param {Array.<String>} events - The events to release.
         */
        Owl.prototype.release = function(events) {
            $.each(events, $.proxy(function(index, event) {
                delete this._supress[event];
            }, this));
        };
    
        /**
         * Gets unified pointer coordinates from event.
         * @todo #261
         * @protected
         * @param {Event} - The `mousedown` or `touchstart` event.
         * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
         */
        Owl.prototype.pointer = function(event) {
            var result = { x: null, y: null };
    
            event = event.originalEvent || event || window.event;
    
            event = event.touches && event.touches.length ?
                event.touches[0] : event.changedTouches && event.changedTouches.length ?
                    event.changedTouches[0] : event;
    
            if (event.pageX) {
                result.x = event.pageX;
                result.y = event.pageY;
            } else {
                result.x = event.clientX;
                result.y = event.clientY;
            }
    
            return result;
        };
    
        /**
         * Determines if the input is a Number or something that can be coerced to a Number
         * @protected
         * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
         * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
         */
        Owl.prototype.isNumeric = function(number) {
            return !isNaN(parseFloat(number));
        };
    
        /**
         * Gets the difference of two vectors.
         * @todo #261
         * @protected
         * @param {Object} - The first vector.
         * @param {Object} - The second vector.
         * @returns {Object} - The difference.
         */
        Owl.prototype.difference = function(first, second) {
            return {
                x: first.x - second.x,
                y: first.y - second.y
            };
        };
    
        /**
         * The jQuery Plugin for the Owl Carousel
         * @todo Navigation plugin `next` and `prev`
         * @public
         */
        $.fn.owlCarousel = function(option) {
            var args = Array.prototype.slice.call(arguments, 1);
    
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('owl.carousel');
    
                if (!data) {
                    data = new Owl(this, typeof option == 'object' && option);
                    $this.data('owl.carousel', data);
    
                    $.each([
                        'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                    ], function(i, event) {
                        data.register({ type: Owl.Type.Event, name: event });
                        data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                            if (e.namespace && e.relatedTarget !== this) {
                                this.suppress([ event ]);
                                data[event].apply(this, [].slice.call(arguments, 1));
                                this.release([ event ]);
                            }
                        }, data));
                    });
                }
    
                if (typeof option == 'string' && option.charAt(0) !== '_') {
                    data[option].apply(data, args);
                }
            });
        };
    
        /**
         * The constructor for the jQuery Plugin
         * @public
         */
        $.fn.owlCarousel.Constructor = Owl;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * AutoRefresh Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the auto refresh plugin.
         * @class The Auto Refresh Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoRefresh = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Refresh interval.
             * @protected
             * @type {number}
             */
            this._interval = null;
    
            /**
             * Whether the element is currently visible or not.
             * @protected
             * @type {Boolean}
             */
            this._visible = null;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoRefresh) {
                        this.watch();
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        AutoRefresh.Defaults = {
            autoRefresh: true,
            autoRefreshInterval: 500
        };
    
        /**
         * Watches the element.
         */
        AutoRefresh.prototype.watch = function() {
            if (this._interval) {
                return;
            }
    
            this._visible = this._core.$element.is(':visible');
            this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
        };
    
        /**
         * Refreshes the element.
         */
        AutoRefresh.prototype.refresh = function() {
            if (this._core.$element.is(':visible') === this._visible) {
                return;
            }
    
            this._visible = !this._visible;
    
            this._core.$element.toggleClass('owl-hidden', !this._visible);
    
            this._visible && (this._core.invalidate('width') && this._core.refresh());
        };
    
        /**
         * Destroys the plugin.
         */
        AutoRefresh.prototype.destroy = function() {
            var handler, property;
    
            window.clearInterval(this._interval);
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Lazy Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the lazy plugin.
         * @class The Lazy Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Lazy = function(carousel) {
    
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Already loaded items.
             * @protected
             * @type {Array.<jQuery>}
             */
            this._loaded = [];
    
            /**
             * Event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }
    
                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }
    
                    if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                        var settings = this._core.settings,
                            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                            i = ((settings.center && n * -1) || 0),
                            position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function(i, v) { this.load(v) }, this);
    
                        while (i++ < n) {
                            this.load(clones / 2 + this._core.relative(position));
                            clones && $.each(this._core.clones(this._core.relative(position)), load);
                            position++;
                        }
                    }
                }, this)
            };
    
            // set the default options
            this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
    
            // register event handler
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Lazy.Defaults = {
            lazyLoad: false
        };
    
        /**
         * Loads all resources of an item at the specified position.
         * @param {Number} position - The absolute position of the item.
         * @protected
         */
        Lazy.prototype.load = function(position) {
            var $item = this._core.$stage.children().eq(position),
                $elements = $item && $item.find('.owl-lazy');
    
            if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
                return;
            }
    
            $elements.each($.proxy(function(index, element) {
                var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
    
                this._core.trigger('load', { element: $element, url: url }, 'lazy');
    
                if ($element.is('img')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        $element.css('opacity', 1);
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('src', url);
                } else {
                    image = new Image();
                    image.onload = $.proxy(function() {
                        $element.css({
                            'background-image': 'url("' + url + '")',
                            'opacity': '1'
                        });
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this);
                    image.src = url;
                }
            }, this));
    
            this._loaded.push($item.get(0));
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Lazy.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this._core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * AutoHeight Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the auto height plugin.
         * @class The Auto Height Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoHeight = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight) {
                        this.update();
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
                        this.update();
                    }
                }, this),
                'loaded.owl.lazy': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight
                        && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                        this.update();
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        AutoHeight.Defaults = {
            autoHeight: false,
            autoHeightClass: 'owl-height'
        };
    
        /**
         * Updates the view.
         */
        AutoHeight.prototype.update = function() {
            var start = this._core._current,
                end = start + this._core.settings.items,
                visible = this._core.$stage.children().toArray().slice(start, end),
                heights = [],
                maxheight = 0;
    
            $.each(visible, function(index, item) {
                heights.push($(item).height());
            });
    
            maxheight = Math.max.apply(null, heights);
    
            this._core.$stage.parent()
                .height(maxheight)
                .addClass(this._core.settings.autoHeightClass);
        };
    
        AutoHeight.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Video Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the video plugin.
         * @class The Video Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Video = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Cache all video URLs.
             * @protected
             * @type {Object}
             */
            this._videos = {};
    
            /**
             * Current playing item.
             * @protected
             * @type {jQuery}
             */
            this._playing = null;
    
            /**
             * All event handlers.
             * @todo The cloned content removale is too late
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                    }
                }, this),
                'resize.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                        e.preventDefault();
                    }
                }, this),
                'refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.is('resizing')) {
                        this._core.$stage.find('.cloned .owl-video-frame').remove();
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'position' && this._playing) {
                        this.stop();
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }
    
                    var $element = $(e.content).find('.owl-video');
    
                    if ($element.length) {
                        $element.css('display', 'none');
                        this.fetch($element, $(e.content));
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Video.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
    
            this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
                this.play(e);
            }, this));
        };
    
        /**
         * Default options.
         * @public
         */
        Video.Defaults = {
            video: false,
            videoHeight: false,
            videoWidth: false
        };
    
        /**
         * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {jQuery} item - The item containing the video.
         */
        Video.prototype.fetch = function(target, item) {
                var type = (function() {
                        if (target.attr('data-vimeo-id')) {
                            return 'vimeo';
                        } else if (target.attr('data-vzaar-id')) {
                            return 'vzaar'
                        } else {
                            return 'youtube';
                        }
                    })(),
                    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
                    width = target.attr('data-width') || this._core.settings.videoWidth,
                    height = target.attr('data-height') || this._core.settings.videoHeight,
                    url = target.attr('href');
    
            if (url) {
    
                /*
                        Parses the id's out of the following urls (and probably more):
                        https://www.youtube.com/watch?v=:id
                        https://youtu.be/:id
                        https://vimeo.com/:id
                        https://vimeo.com/channels/:channel/:id
                        https://vimeo.com/groups/:group/videos/:id
                        https://app.vzaar.com/videos/:id
    
                        Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
                */
    
                id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
    
                if (id[3].indexOf('youtu') > -1) {
                    type = 'youtube';
                } else if (id[3].indexOf('vimeo') > -1) {
                    type = 'vimeo';
                } else if (id[3].indexOf('vzaar') > -1) {
                    type = 'vzaar';
                } else {
                    throw new Error('Video URL not supported.');
                }
                id = id[6];
            } else {
                throw new Error('Missing video URL.');
            }
    
            this._videos[url] = {
                type: type,
                id: id,
                width: width,
                height: height
            };
    
            item.attr('data-video', url);
    
            this.thumbnail(target, this._videos[url]);
        };
    
        /**
         * Creates video thumbnail.
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {Object} info - The video info object.
         * @see `fetch`
         */
        Video.prototype.thumbnail = function(target, video) {
            var tnLink,
                icon,
                path,
                dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
                customTn = target.find('img'),
                srcType = 'src',
                lazyClass = '',
                settings = this._core.settings,
                create = function(path) {
                    icon = '<div class="owl-video-play-icon"></div>';
    
                    if (settings.lazyLoad) {
                        tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                    } else {
                        tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                    }
                    target.after(tnLink);
                    target.after(icon);
                };
    
            // wrap video content into owl-video-wrapper div
            target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
    
            if (this._core.settings.lazyLoad) {
                srcType = 'data-src';
                lazyClass = 'owl-lazy';
            }
    
            // custom thumbnail
            if (customTn.length) {
                create(customTn.attr(srcType));
                customTn.remove();
                return false;
            }
    
            if (video.type === 'youtube') {
                path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
                create(path);
            } else if (video.type === 'vimeo') {
                $.ajax({
                    type: 'GET',
                    url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                    jsonp: 'callback',
                    dataType: 'jsonp',
                    success: function(data) {
                        path = data[0].thumbnail_large;
                        create(path);
                    }
                });
            } else if (video.type === 'vzaar') {
                $.ajax({
                    type: 'GET',
                    url: '//vzaar.com/api/videos/' + video.id + '.json',
                    jsonp: 'callback',
                    dataType: 'jsonp',
                    success: function(data) {
                        path = data.framegrab_url;
                        create(path);
                    }
                });
            }
        };
    
        /**
         * Stops the current video.
         * @public
         */
        Video.prototype.stop = function() {
            this._core.trigger('stop', null, 'video');
            this._playing.find('.owl-video-frame').remove();
            this._playing.removeClass('owl-video-playing');
            this._playing = null;
            this._core.leave('playing');
            this._core.trigger('stopped', null, 'video');
        };
    
        /**
         * Starts the current video.
         * @public
         * @param {Event} event - The event arguments.
         */
        Video.prototype.play = function(event) {
            var target = $(event.target),
                item = target.closest('.' + this._core.settings.itemClass),
                video = this._videos[item.attr('data-video')],
                width = video.width || '100%',
                height = video.height || this._core.$stage.height(),
                html;
    
            if (this._playing) {
                return;
            }
    
            this._core.enter('playing');
            this._core.trigger('play', null, 'video');
    
            item = this._core.items(this._core.relative(item.index()));
    
            this._core.reset(item.index());
    
            if (video.type === 'youtube') {
                html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                    video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
            } else if (video.type === 'vimeo') {
                html = '<iframe src="//player.vimeo.com/video/' + video.id +
                    '?autoplay=1" width="' + width + '" height="' + height +
                    '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            } else if (video.type === 'vzaar') {
                html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                    '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                    'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
            }
    
            $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
    
            this._playing = item.addClass('owl-video-playing');
        };
    
        /**
         * Checks whether an video is currently in full screen mode or not.
         * @todo Bad style because looks like a readonly method but changes members.
         * @protected
         * @returns {Boolean}
         */
        Video.prototype.isInFullScreen = function() {
            var element = document.fullscreenElement || document.mozFullScreenElement ||
                    document.webkitFullscreenElement;
    
            return element && $(element).parent().hasClass('owl-video-frame');
        };
    
        /**
         * Destroys the plugin.
         */
        Video.prototype.destroy = function() {
            var handler, property;
    
            this._core.$element.off('click.owl.video');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Video = Video;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Animate Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the animate plugin.
         * @class The Navigation Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Animate = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Animate.Defaults, this.core.options);
            this.swapping = true;
            this.previous = undefined;
            this.next = undefined;
    
            this.handlers = {
                'change.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name == 'position') {
                        this.previous = this.core.current();
                        this.next = e.property.value;
                    }
                }, this),
                'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        this.swapping = e.type == 'translated';
                    }
                }, this),
                'translate.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                        this.swap();
                    }
                }, this)
            };
    
            this.core.$element.on(this.handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Animate.Defaults = {
            animateOut: false,
            animateIn: false
        };
    
        /**
         * Toggles the animation classes whenever an translations starts.
         * @protected
         * @returns {Boolean|undefined}
         */
        Animate.prototype.swap = function() {
    
            if (this.core.settings.items !== 1) {
                return;
            }
    
            if (!$.support.animation || !$.support.transition) {
                return;
            }
    
            this.core.speed(0);
    
            var left,
                clear = $.proxy(this.clear, this),
                previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next),
                incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;
    
            if (this.core.current() === this.previous) {
                return;
            }
    
            if (outgoing) {
                left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
                previous.one($.support.animation.end, clear)
                    .css( { 'left': left + 'px' } )
                    .addClass('animated owl-animated-out')
                    .addClass(outgoing);
            }
    
            if (incoming) {
                next.one($.support.animation.end, clear)
                    .addClass('animated owl-animated-in')
                    .addClass(incoming);
            }
        };
    
        Animate.prototype.clear = function(e) {
            $(e.target).css( { 'left': '' } )
                .removeClass('animated owl-animated-out owl-animated-in')
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut);
            this.core.onTransitionEnd();
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Animate.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Autoplay Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author Artus Kolanowski
     * @author David Deutsch
     * @author Tom De Caluwé
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the autoplay plugin.
         * @class The Autoplay Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Autoplay = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * The autoplay timeout id.
             * @type {Number}
             */
            this._call = null;
    
            /**
             * Depending on the state of the plugin, this variable contains either
             * the start time of the timer or the current timer value if it's
             * paused. Since we start in a paused state we initialize the timer
             * value.
             * @type {Number}
             */
            this._time = 0;
    
            /**
             * Stores the timeout currently used.
             * @type {Number}
             */
            this._timeout = 0;
    
            /**
             * Indicates whenever the autoplay is paused.
             * @type {Boolean}
             */
            this._paused = true;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'settings') {
                        if (this._core.settings.autoplay) {
                            this.play();
                        } else {
                            this.stop();
                        }
                    } else if (e.namespace && e.property.name === 'position' && this._paused) {
                        // Reset the timer. This code is triggered when the position
                        // of the carousel was changed through user interaction.
                        this._time = 0;
                    }
                }, this),
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoplay) {
                        this.play();
                    }
                }, this),
                'play.owl.autoplay': $.proxy(function(e, t, s) {
                    if (e.namespace) {
                        this.play(t, s);
                    }
                }, this),
                'stop.owl.autoplay': $.proxy(function(e) {
                    if (e.namespace) {
                        this.stop();
                    }
                }, this),
                'mouseover.owl.autoplay': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.pause();
                    }
                }, this),
                'mouseleave.owl.autoplay': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.play();
                    }
                }, this),
                'touchstart.owl.core': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.pause();
                    }
                }, this),
                'touchend.owl.core': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause) {
                        this.play();
                    }
                }, this)
            };
    
            // register event handlers
            this._core.$element.on(this._handlers);
    
            // set default options
            this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
        };
    
        /**
         * Default options.
         * @public
         */
        Autoplay.Defaults = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            autoplaySpeed: false
        };
    
        /**
         * Transition to the next slide and set a timeout for the next transition.
         * @private
         * @param {Number} [speed] - The animation speed for the animations.
         */
        Autoplay.prototype._next = function(speed) {
            this._call = window.setTimeout(
                $.proxy(this._next, this, speed),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
            );
    
            if (this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }
    
        /**
         * Reads the current timer value when the timer is playing.
         * @public
         */
        Autoplay.prototype.read = function() {
            return new Date().getTime() - this._time;
        };
    
        /**
         * Starts the autoplay.
         * @public
         * @param {Number} [timeout] - The interval before the next animation starts.
         * @param {Number} [speed] - The animation speed for the animations.
         */
        Autoplay.prototype.play = function(timeout, speed) {
            var elapsed;
    
            if (!this._core.is('rotating')) {
                this._core.enter('rotating');
            }
    
            timeout = timeout || this._core.settings.autoplayTimeout;
    
            // Calculate the elapsed time since the last transition. If the carousel
            // wasn't playing this calculation will yield zero.
            elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
    
            if (this._paused) {
                // Start the clock.
                this._time = this.read();
                this._paused = false;
            } else {
                // Clear the active timeout to allow replacement.
                window.clearTimeout(this._call);
            }
    
            // Adjust the origin of the timer to match the new timeout value.
            this._time += this.read() % timeout - elapsed;
    
            this._timeout = timeout;
            this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
        };
    
        /**
         * Stops the autoplay.
         * @public
         */
        Autoplay.prototype.stop = function() {
            if (this._core.is('rotating')) {
                // Reset the clock.
                this._time = 0;
                this._paused = true;
    
                window.clearTimeout(this._call);
                this._core.leave('rotating');
            }
        };
    
        /**
         * Pauses the autoplay.
         * @public
         */
        Autoplay.prototype.pause = function() {
            if (this._core.is('rotating') && !this._paused) {
                // Pause the clock.
                this._time = this.read();
                this._paused = true;
    
                window.clearTimeout(this._call);
            }
        };
    
        /**
         * Destroys the plugin.
         */
        Autoplay.prototype.destroy = function() {
            var handler, property;
    
            this.stop();
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Navigation Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the navigation plugin.
         * @class The Navigation Plugin
         * @param {Owl} carousel - The Owl Carousel.
         */
        var Navigation = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Indicates whether the plugin is initialized or not.
             * @protected
             * @type {Boolean}
             */
            this._initialized = false;
    
            /**
             * The current paging indexes.
             * @protected
             * @type {Array}
             */
            this._pages = [];
    
            /**
             * All DOM elements of the user interface.
             * @protected
             * @type {Object}
             */
            this._controls = {};
    
            /**
             * Markup for an indicator.
             * @protected
             * @type {Array.<String>}
             */
            this._templates = [];
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * Overridden methods of the carousel.
             * @protected
             * @type {Object}
             */
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            };
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                            $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                    }
                }, this),
                'added.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.splice(e.position, 0, this._templates.pop());
                    }
                }, this),
                'remove.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.splice(e.position, 1);
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name == 'position') {
                        this.draw();
                    }
                }, this),
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && !this._initialized) {
                        this._core.trigger('initialize', null, 'navigation');
                        this.initialize();
                        this.update();
                        this.draw();
                        this._initialized = true;
                        this._core.trigger('initialized', null, 'navigation');
                    }
                }, this),
                'refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._initialized) {
                        this._core.trigger('refresh', null, 'navigation');
                        this.update();
                        this.draw();
                        this._core.trigger('refreshed', null, 'navigation');
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
    
            // register event handlers
            this.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         * @todo Rename `slideBy` to `navBy`
         */
        Navigation.Defaults = {
            nav: false,
            navText: [
                '<span aria-label="' + 'prev' + '">&#x2039;</span>',
                '<span aria-label="' + 'next' + '">&#x203a;</span>'
            ],
            navSpeed: false,
            navElement: 'button role="presentation"',
            navContainer: false,
            navContainerClass: 'owl-nav',
            navClass: [
                'owl-prev',
                'owl-next'
            ],
            slideBy: 1,
            dotClass: 'owl-dot',
            dotsClass: 'owl-dots',
            dots: true,
            dotsEach: false,
            dotsData: false,
            dotsSpeed: false,
            dotsContainer: false
        };
    
        /**
         * Initializes the layout of the plugin and extends the carousel.
         * @protected
         */
        Navigation.prototype.initialize = function() {
            var override,
                settings = this._core.settings;
    
            // create DOM structure for relative navigation
            this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
                : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
    
            this._controls.$previous = $('<' + settings.navElement + '>')
                .addClass(settings.navClass[0])
                .html(settings.navText[0])
                .prependTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.prev(settings.navSpeed);
                }, this));
            this._controls.$next = $('<' + settings.navElement + '>')
                .addClass(settings.navClass[1])
                .html(settings.navText[1])
                .appendTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.next(settings.navSpeed);
                }, this));
    
            // create DOM structure for absolute navigation
            if (!settings.dotsData) {
                this._templates = [ $('<button>')
                    .addClass(settings.dotClass)
                    .append($('<span>'))
                    .prop('outerHTML') ];
            }
    
            this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
                : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
    
            this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
                var index = $(e.target).parent().is(this._controls.$absolute)
                    ? $(e.target).index() : $(e.target).parent().index();
    
                e.preventDefault();
    
                this.to(index, settings.dotsSpeed);
            }, this));
    
            /*$el.on('focusin', function() {
                $(document).off(".carousel");
    
                $(document).on('keydown.carousel', function(e) {
                    if(e.keyCode == 37) {
                        $el.trigger('prev.owl')
                    }
                    if(e.keyCode == 39) {
                        $el.trigger('next.owl')
                    }
                });
            });*/
    
            // override public methods of the carousel
            for (override in this._overrides) {
                this._core[override] = $.proxy(this[override], this);
            }
        };
    
        /**
         * Destroys the plugin.
         * @protected
         */
        Navigation.prototype.destroy = function() {
            var handler, control, property, override;
    
            for (handler in this._handlers) {
                this.$element.off(handler, this._handlers[handler]);
            }
            for (control in this._controls) {
                if (control === '$relative' && settings.navContainer) {
                    this._controls[control].html('');
                } else {
                    this._controls[control].remove();
                }
            }
            for (override in this.overides) {
                this._core[override] = this._overrides[override];
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        /**
         * Updates the internal state.
         * @protected
         */
        Navigation.prototype.update = function() {
            var i, j, k,
                lower = this._core.clones().length / 2,
                upper = lower + this._core.items().length,
                maximum = this._core.maximum(true),
                settings = this._core.settings,
                size = settings.center || settings.autoWidth || settings.dotsData
                    ? 1 : settings.dotsEach || settings.items;
    
            if (settings.slideBy !== 'page') {
                settings.slideBy = Math.min(settings.slideBy, settings.items);
            }
    
            if (settings.dots || settings.slideBy == 'page') {
                this._pages = [];
    
                for (i = lower, j = 0, k = 0; i < upper; i++) {
                    if (j >= size || j === 0) {
                        this._pages.push({
                            start: Math.min(maximum, i - lower),
                            end: i - lower + size - 1
                        });
                        if (Math.min(maximum, i - lower) === maximum) {
                            break;
                        }
                        j = 0, ++k;
                    }
                    j += this._core.mergers(this._core.relative(i));
                }
            }
        };
    
        /**
         * Draws the user interface.
         * @todo The option `dotsData` wont work.
         * @protected
         */
        Navigation.prototype.draw = function() {
            var difference,
                settings = this._core.settings,
                disabled = this._core.items().length <= settings.items,
                index = this._core.relative(this._core.current()),
                loop = settings.loop || settings.rewind;
    
            this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
    
            if (settings.nav) {
                this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
                this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
            }
    
            this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
    
            if (settings.dots) {
                difference = this._pages.length - this._controls.$absolute.children().length;
    
                if (settings.dotsData && difference !== 0) {
                    this._controls.$absolute.html(this._templates.join(''));
                } else if (difference > 0) {
                    this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
                } else if (difference < 0) {
                    this._controls.$absolute.children().slice(difference).remove();
                }
    
                this._controls.$absolute.find('.active').removeClass('active');
                this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
            }
        };
    
        /**
         * Extends event data.
         * @protected
         * @param {Event} event - The event object which gets thrown.
         */
        Navigation.prototype.onTrigger = function(event) {
            var settings = this._core.settings;
    
            event.page = {
                index: $.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: settings && (settings.center || settings.autoWidth || settings.dotsData
                    ? 1 : settings.dotsEach || settings.items)
            };
        };
    
        /**
         * Gets the current page position of the carousel.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.current = function() {
            var current = this._core.relative(this._core.current());
            return $.grep(this._pages, $.proxy(function(page, index) {
                return page.start <= current && page.end >= current;
            }, this)).pop();
        };
    
        /**
         * Gets the current succesor/predecessor position.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.getPosition = function(successor) {
            var position, length,
                settings = this._core.settings;
    
            if (settings.slideBy == 'page') {
                position = $.inArray(this.current(), this._pages);
                length = this._pages.length;
                successor ? ++position : --position;
                position = this._pages[((position % length) + length) % length].start;
            } else {
                position = this._core.relative(this._core.current());
                length = this._core.items().length;
                successor ? position += settings.slideBy : position -= settings.slideBy;
            }
    
            return position;
        };
    
        /**
         * Slides to the next item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.next = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        };
    
        /**
         * Slides to the previous item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.prev = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        };
    
        /**
         * Slides to the specified item or page.
         * @public
         * @param {Number} position - The position of the item or page.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
         */
        Navigation.prototype.to = function(position, speed, standard) {
            var length;
    
            if (!standard && this._pages.length) {
                length = this._pages.length;
                $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
            } else {
                $.proxy(this._overrides.to, this._core)(position, speed);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Hash Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the hash plugin.
         * @class The Hash Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Hash = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Hash index for the items.
             * @protected
             * @type {Object}
             */
            this._hashes = {};
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                        $(window).trigger('hashchange.owl.navigation');
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
    
                        if (!hash) {
                            return;
                        }
    
                        this._hashes[hash] = e.content;
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'position') {
                        var current = this._core.items(this._core.relative(this._core.current())),
                            hash = $.map(this._hashes, function(item, hash) {
                                return item === current ? hash : null;
                            }).join();
    
                        if (!hash || window.location.hash.slice(1) === hash) {
                            return;
                        }
    
                        window.location.hash = hash;
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Hash.Defaults, this._core.options);
    
            // register the event handlers
            this.$element.on(this._handlers);
    
            // register event listener for hash navigation
            $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
                var hash = window.location.hash.substring(1),
                    items = this._core.$stage.children(),
                    position = this._hashes[hash] && items.index(this._hashes[hash]);
    
                if (position === undefined || position === this._core.current()) {
                    return;
                }
    
                this._core.to(this._core.relative(position), false, true);
            }, this));
        };
    
        /**
         * Default options.
         * @public
         */
        Hash.Defaults = {
            URLhashListener: false
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Hash.prototype.destroy = function() {
            var handler, property;
    
            $(window).off('hashchange.owl.navigation');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Support Plugin
     *
     * @version 2.1.0
     * @author Vivid Planet Software GmbH
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        var style = $('<support>').get(0).style,
            prefixes = 'Webkit Moz O ms'.split(' '),
            events = {
                transition: {
                    end: {
                        WebkitTransition: 'webkitTransitionEnd',
                        MozTransition: 'transitionend',
                        OTransition: 'oTransitionEnd',
                        transition: 'transitionend'
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: 'webkitAnimationEnd',
                        MozAnimation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        animation: 'animationend'
                    }
                }
            },
            tests = {
                csstransforms: function() {
                    return !!test('transform');
                },
                csstransforms3d: function() {
                    return !!test('perspective');
                },
                csstransitions: function() {
                    return !!test('transition');
                },
                cssanimations: function() {
                    return !!test('animation');
                }
            };
    
        function test(property, prefixed) {
            var result = false,
                upper = property.charAt(0).toUpperCase() + property.slice(1);
    
            $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
                if (style[property] !== undefined) {
                    result = prefixed ? property : true;
                    return false;
                }
            });
    
            return result;
        }
    
        function prefixed(property) {
            return test(property, true);
        }
    
        if (tests.csstransitions()) {
            /* jshint -W053 */
            $.support.transition = new String(prefixed('transition'))
            $.support.transition.end = events.transition.end[ $.support.transition ];
        }
    
        if (tests.cssanimations()) {
            /* jshint -W053 */
            $.support.animation = new String(prefixed('animation'))
            $.support.animation.end = events.animation.end[ $.support.animation ];
        }
    
        if (tests.csstransforms()) {
            /* jshint -W053 */
            $.support.transform = new String(prefixed('transform'));
            $.support.transform3d = tests.csstransforms3d();
        }
    
    })(window.Zepto || window.jQuery, window, document);


///
// SmoothScroll for websites v1.4.6 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function () {
    
  // Scroll Variables (tweakable)
  var defaultOptions = {
  
      // Scrolling Core
      frameRate        : 150, // [Hz]
      animationTime    : 400, // [ms]
      stepSize         : 100, // [px]
  
      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm   : true,
      pulseScale       : 4,
      pulseNormalize   : 1,
  
      // Acceleration
      accelerationDelta : 50,  // 50
      accelerationMax   : 3,   // 3
  
      // Keyboard Settings
      keyboardSupport   : true,  // option
      arrowScroll       : 50,    // [px]
  
      // Other
      fixedBackground   : true, 
      excluded          : ''    
  };
  
  var options = defaultOptions;
  
  
  // Other Variables
  var isExcluded = false;
  var isFrame = false;
  var direction = { x: 0, y: 0 };
  var initDone  = false;
  var root = document.documentElement;
  var activeElement;
  var observer;
  var refreshSize;
  var deltaBuffer = [];
  var isMac = /^Mac/.test(navigator.platform);
  
  var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
              pageup: 33, pagedown: 34, end: 35, home: 36 };
  var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  
  /***********************************************
   * INITIALIZE
   ***********************************************/
  
  /**
   * Tests if smooth scrolling is allowed. Shuts down everything if not.
   */
  function initTest() {
      if (options.keyboardSupport) {
          addEvent('keydown', keydown);
      }
  }
  
  /**
   * Sets up scrolls array, determines if frames are involved.
   */
  function init() {
    
      if (initDone || !document.body) return;
  
      initDone = true;
  
      var body = document.body;
      var html = document.documentElement;
      var windowHeight = window.innerHeight; 
      var scrollHeight = body.scrollHeight;
      
      // check compat mode for root element
      root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
      activeElement = body;
      
      initTest();
  
      // Checks if this script is running in a frame
      if (top != self) {
          isFrame = true;
      }
  
      /**
       * Safari 10 fixed it, Chrome fixed it in v45:
       * This fixes a bug where the areas left and right to 
       * the content does not trigger the onmousewheel event
       * on some pages. e.g.: html, body { height: 100% }
       */
      else if (isOldSafari &&
               scrollHeight > windowHeight &&
              (body.offsetHeight <= windowHeight || 
               html.offsetHeight <= windowHeight)) {
  
          var fullPageElem = document.createElement('div');
          fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                       'top:0; left:0; right:0; height:' + 
                                        root.scrollHeight + 'px';
          document.body.appendChild(fullPageElem);
          
          // DOM changed (throttled) to fix height
          var pendingRefresh;
          refreshSize = function () {
              if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
              pendingRefresh = setTimeout(function () {
                  if (isExcluded) return; // could be running after cleanup
                  fullPageElem.style.height = '0';
                  fullPageElem.style.height = root.scrollHeight + 'px';
                  pendingRefresh = null;
              }, 500); // act rarely to stay fast
          };
    
          setTimeout(refreshSize, 10);
  
          addEvent('resize', refreshSize);
  
          // TODO: attributeFilter?
          var config = {
              attributes: true, 
              childList: true, 
              characterData: false 
              // subtree: true
          };
  
          observer = new MutationObserver(refreshSize);
          observer.observe(body, config);
  
          if (root.offsetHeight <= windowHeight) {
              var clearfix = document.createElement('div');   
              clearfix.style.clear = 'both';
              body.appendChild(clearfix);
          }
      }
  
      // disable fixed background
      if (!options.fixedBackground && !isExcluded) {
          body.style.backgroundAttachment = 'scroll';
          html.style.backgroundAttachment = 'scroll';
      }
  }
  
  /**
   * Removes event listeners and other traces left on the page.
   */
  function cleanup() {
      observer && observer.disconnect();
      removeEvent(wheelEvent, wheel);
      removeEvent('mousedown', mousedown);
      removeEvent('keydown', keydown);
      removeEvent('resize', refreshSize);
      removeEvent('load', init);
  }
  
  
  /************************************************
   * SCROLLING 
   ************************************************/
   
  var que = [];
  var pending = false;
  var lastScroll = Date.now();
  
  /**
   * Pushes scroll actions to the scrolling queue.
   */
  function scrollArray(elem, left, top) {
      
      directionCheck(left, top);
  
      if (options.accelerationMax != 1) {
          var now = Date.now();
          var elapsed = now - lastScroll;
          if (elapsed < options.accelerationDelta) {
              var factor = (1 + (50 / elapsed)) / 2;
              if (factor > 1) {
                  factor = Math.min(factor, options.accelerationMax);
                  left *= factor;
                  top  *= factor;
              }
          }
          lastScroll = Date.now();
      }          
      
      // push a scroll command
      que.push({
          x: left, 
          y: top, 
          lastX: (left < 0) ? 0.99 : -0.99,
          lastY: (top  < 0) ? 0.99 : -0.99, 
          start: Date.now()
      });
          
      // don't act if there's a pending queue
      if (pending) {
          return;
      }  
  
      var scrollWindow = (elem === document.body);
      
      var step = function (time) {
          
          var now = Date.now();
          var scrollX = 0;
          var scrollY = 0; 
      
          for (var i = 0; i < que.length; i++) {
              
              var item = que[i];
              var elapsed  = now - item.start;
              var finished = (elapsed >= options.animationTime);
              
              // scroll position: [0, 1]
              var position = (finished) ? 1 : elapsed / options.animationTime;
              
              // easing [optional]
              if (options.pulseAlgorithm) {
                  position = pulse(position);
              }
              
              // only need the difference
              var x = (item.x * position - item.lastX) >> 0;
              var y = (item.y * position - item.lastY) >> 0;
              
              // add this to the total scrolling
              scrollX += x;
              scrollY += y;            
              
              // update last values
              item.lastX += x;
              item.lastY += y;
          
              // delete and step back if it's over
              if (finished) {
                  que.splice(i, 1); i--;
              }           
          }
  
          // scroll left and top
          if (scrollWindow) {
              window.scrollBy(scrollX, scrollY);
          } 
          else {
              if (scrollX) elem.scrollLeft += scrollX;
              if (scrollY) elem.scrollTop  += scrollY;                    
          }
          
          // clean up if there's nothing left to do
          if (!left && !top) {
              que = [];
          }
          
          if (que.length) { 
              requestFrame(step, elem, (1000 / options.frameRate + 1)); 
          } else { 
              pending = false;
          }
      };
      
      // start a new queue of actions
      requestFrame(step, elem, 0);
      pending = true;
  }
  
  
  /***********************************************
   * EVENTS
   ***********************************************/
  
  /**
   * Mouse wheel handler.
   * @param {Object} event
   */
  function wheel(event) {
  
      if (!initDone) {
          init();
      }
      
      var target = event.target;
  
      // leave early if default action is prevented   
      // or it's a zooming event with CTRL 
      if (event.defaultPrevented || event.ctrlKey) {
          return true;
      }
      
      // leave embedded content alone (flash & pdf)
      if (isNodeName(activeElement, 'embed') || 
         (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
          isNodeName(activeElement, 'object') ||
          target.shadowRoot) {
          return true;
      }
  
      var deltaX = -event.wheelDeltaX || event.deltaX || 0;
      var deltaY = -event.wheelDeltaY || event.deltaY || 0;
      
      if (isMac) {
          if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
              deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
          }
          if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
              deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
          }
      }
      
      // use wheelDelta if deltaX/Y is not available
      if (!deltaX && !deltaY) {
          deltaY = -event.wheelDelta || 0;
      }
  
      // line based scrolling (Firefox mostly)
      if (event.deltaMode === 1) {
          deltaX *= 40;
          deltaY *= 40;
      }
  
      var overflowing = overflowingAncestor(target);
  
      // nothing to do if there's no element that's scrollable
      if (!overflowing) {
          // except Chrome iframes seem to eat wheel events, which we need to 
          // propagate up, if the iframe has nothing overflowing to scroll
          if (isFrame && isChrome)  {
              // change target to iframe element itself for the parent frame
              Object.defineProperty(event, "target", {value: window.frameElement});
              return parent.wheel(event);
          }
          return true;
      }
      
      // check if it's a touchpad scroll that should be ignored
      if (isTouchpad(deltaY)) {
          return true;
      }
  
      // scale by step size
      // delta is 120 most of the time
      // synaptics seems to send 1 sometimes
      if (Math.abs(deltaX) > 1.2) {
          deltaX *= options.stepSize / 120;
      }
      if (Math.abs(deltaY) > 1.2) {
          deltaY *= options.stepSize / 120;
      }
      
      scrollArray(overflowing, deltaX, deltaY);
      event.preventDefault();
      scheduleClearCache();
  }
  
  /**
   * Keydown event handler.
   * @param {Object} event
   */
  function keydown(event) {
  
      var target   = event.target;
      var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                    (event.shiftKey && event.keyCode !== key.spacebar);
      
      // our own tracked active element could've been removed from the DOM
      if (!document.body.contains(activeElement)) {
          activeElement = document.activeElement;
      }
  
      // do nothing if user is editing text
      // or using a modifier key (except shift)
      // or in a dropdown
      // or inside interactive elements
      var inputNodeNames = /^(textarea|select|embed|object)$/i;
      var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if ( event.defaultPrevented ||
           inputNodeNames.test(target.nodeName) ||
           isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
           isNodeName(activeElement, 'video') ||
           isInsideYoutubeVideo(event) ||
           target.isContentEditable || 
           modifier ) {
        return true;
      }
  
      // [spacebar] should trigger button press, leave it alone
      if ((isNodeName(target, 'button') ||
           isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
          event.keyCode === key.spacebar) {
        return true;
      }
  
      // [arrwow keys] on radio buttons should be left alone
      if (isNodeName(target, 'input') && target.type == 'radio' &&
          arrowKeys[event.keyCode])  {
        return true;
      }
      
      var shift, x = 0, y = 0;
      var overflowing = overflowingAncestor(activeElement);
  
      if (!overflowing) {
          // Chrome iframes seem to eat key events, which we need to 
          // propagate up, if the iframe has nothing overflowing to scroll
          return (isFrame && isChrome) ? parent.keydown(event) : true;
      }
  
      var clientHeight = overflowing.clientHeight; 
  
      if (overflowing == document.body) {
          clientHeight = window.innerHeight;
      }
  
      switch (event.keyCode) {
          case key.up:
              y = -options.arrowScroll;
              break;
          case key.down:
              y = options.arrowScroll;
              break;         
          case key.spacebar: // (+ shift)
              shift = event.shiftKey ? 1 : -1;
              y = -shift * clientHeight * 0.9;
              break;
          case key.pageup:
              y = -clientHeight * 0.9;
              break;
          case key.pagedown:
              y = clientHeight * 0.9;
              break;
          case key.home:
              y = -overflowing.scrollTop;
              break;
          case key.end:
              var scroll = overflowing.scrollHeight - overflowing.scrollTop;
              var scrollRemaining = scroll - clientHeight;
              y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
              break;
          case key.left:
              x = -options.arrowScroll;
              break;
          case key.right:
              x = options.arrowScroll;
              break;            
          default:
              return true; // a key we don't care about
      }
  
      scrollArray(overflowing, x, y);
      event.preventDefault();
      scheduleClearCache();
  }
  
  /**
   * Mousedown event only for updating activeElement
   */
  function mousedown(event) {
      activeElement = event.target;
  }
  
  
  /***********************************************
   * OVERFLOW
   ***********************************************/
  
  var uniqueID = (function () {
      var i = 0;
      return function (el) {
          return el.uniqueID || (el.uniqueID = i++);
      };
  })();
  
  var cache = {}; // cleared out after a scrolling session
  var clearCacheTimer;
  
  //setInterval(function () { cache = {}; }, 10 * 1000);
  
  function scheduleClearCache() {
      clearTimeout(clearCacheTimer);
      clearCacheTimer = setInterval(function () { cache = {}; }, 1*1000);
  }
  
  function setCache(elems, overflowing) {
      for (var i = elems.length; i--;)
          cache[uniqueID(elems[i])] = overflowing;
      return overflowing;
  }
  
  //  (body)                (root)
  //         | hidden | visible | scroll |  auto  |
  // hidden  |   no   |    no   |   YES  |   YES  |
  // visible |   no   |   YES   |   YES  |   YES  |
  // scroll  |   no   |   YES   |   YES  |   YES  |
  // auto    |   no   |   YES   |   YES  |   YES  |
  
  function overflowingAncestor(el) {
      var elems = [];
      var body = document.body;
      var rootScrollHeight = root.scrollHeight;
      do {
          var cached = cache[uniqueID(el)];
          if (cached) {
              return setCache(elems, cached);
          }
          elems.push(el);
          if (rootScrollHeight === el.scrollHeight) {
              var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
              var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
              if (isFrame && isContentOverflowing(root) || 
                 !isFrame && isOverflowCSS) {
                  return setCache(elems, getScrollRoot()); 
              }
          } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
              return setCache(elems, el);
          }
      } while (el = el.parentElement);
  }
  
  function isContentOverflowing(el) {
      return (el.clientHeight + 10 < el.scrollHeight);
  }
  
  // typically for <body> and <html>
  function overflowNotHidden(el) {
      var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
      return (overflow !== 'hidden');
  }
  
  // for all other elements
  function overflowAutoOrScroll(el) {
      var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
      return (overflow === 'scroll' || overflow === 'auto');
  }
  
  
  /***********************************************
   * HELPERS
   ***********************************************/
  
  function addEvent(type, fn) {
      window.addEventListener(type, fn, false);
  }
  
  function removeEvent(type, fn) {
      window.removeEventListener(type, fn, false);  
  }
  
  function isNodeName(el, tag) {
      return (el.nodeName||'').toLowerCase() === tag.toLowerCase();
  }
  
  function directionCheck(x, y) {
      x = (x > 0) ? 1 : -1;
      y = (y > 0) ? 1 : -1;
      if (direction.x !== x || direction.y !== y) {
          direction.x = x;
          direction.y = y;
          que = [];
          lastScroll = 0;
      }
  }
  
  var deltaBufferTimer;
  
  if (window.localStorage && localStorage.SS_deltaBuffer) {
      try { // #46 Safari throws in private browsing for localStorage 
          deltaBuffer = localStorage.SS_deltaBuffer.split(',');
      } catch (e) { } 
  }
  
  function isTouchpad(deltaY) {
      if (!deltaY) return;
      if (!deltaBuffer.length) {
          deltaBuffer = [deltaY, deltaY, deltaY];
      }
      deltaY = Math.abs(deltaY);
      deltaBuffer.push(deltaY);
      deltaBuffer.shift();
      clearTimeout(deltaBufferTimer);
      deltaBufferTimer = setTimeout(function () {
          try { // #46 Safari throws in private browsing for localStorage
              localStorage.SS_deltaBuffer = deltaBuffer.join(',');
          } catch (e) { }  
      }, 1000);
      return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
  } 
  
  function isDivisible(n, divisor) {
      return (Math.floor(n / divisor) == n / divisor);
  }
  
  function allDeltasDivisableBy(divisor) {
      return (isDivisible(deltaBuffer[0], divisor) &&
              isDivisible(deltaBuffer[1], divisor) &&
              isDivisible(deltaBuffer[2], divisor));
  }
  
  function isInsideYoutubeVideo(event) {
      var elem = event.target;
      var isControl = false;
      if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
          do {
              isControl = (elem.classList && 
                           elem.classList.contains('html5-video-controls'));
              if (isControl) break;
          } while (elem = elem.parentNode);
      }
      return isControl;
  }
  
  var requestFrame = (function () {
        return (window.requestAnimationFrame       || 
                window.webkitRequestAnimationFrame || 
                window.mozRequestAnimationFrame    ||
                function (callback, element, delay) {
                   window.setTimeout(callback, delay || (1000/60));
               });
  })();
  
  var MutationObserver = (window.MutationObserver || 
                          window.WebKitMutationObserver ||
                          window.MozMutationObserver);  
  
  var getScrollRoot = (function() {
    var SCROLL_ROOT;
    return function() {
      if (!SCROLL_ROOT) {
        var dummy = document.createElement('div');
        dummy.style.cssText = 'height:10000px;width:1px;';
        document.body.appendChild(dummy);
        var bodyScrollTop  = document.body.scrollTop;
        var docElScrollTop = document.documentElement.scrollTop;
        window.scrollBy(0, 3);
        if (document.body.scrollTop != bodyScrollTop)
          (SCROLL_ROOT = document.body);
        else 
          (SCROLL_ROOT = document.documentElement);
        window.scrollBy(0, -3);
        document.body.removeChild(dummy);
      }
      return SCROLL_ROOT;
    };
  })();
  
  
  /***********************************************
   * PULSE (by Michael Herf)
   ***********************************************/
   
  /**
   * Viscous fluid with a pulse for part and decay for the rest.
   * - Applies a fixed force over an interval (a damped acceleration), and
   * - Lets the exponential bleed away the velocity over a longer interval
   * - Michael Herf, http://stereopsis.com/stopping/
   */
  function pulse_(x) {
      var val, start, expx;
      // test
      x = x * options.pulseScale;
      if (x < 1) { // acceleartion
          val = x - (1 - Math.exp(-x));
      } else {     // tail
          // the previous animation ended here:
          start = Math.exp(-1);
          // simple viscous drag
          x -= 1;
          expx = 1 - Math.exp(-x);
          val = start + (expx * (1 - start));
      }
      return val * options.pulseNormalize;
  }
  
  function pulse(x) {
      if (x >= 1) return 1;
      if (x <= 0) return 0;
  
      if (options.pulseNormalize == 1) {
          options.pulseNormalize /= pulse_(1);
      }
      return pulse_(x);
  }
  
  
  /***********************************************
   * FIRST RUN
   ***********************************************/
  
  var userAgent = window.navigator.userAgent;
  var isEdge    = /Edge/.test(userAgent); // thank you MS
  var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
  var isSafari  = /safari/i.test(userAgent) && !isEdge; 
  var isMobile  = /mobile/i.test(userAgent);
  var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
  var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
  var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
  
  var wheelEvent;
  if ('onwheel' in document.createElement('div'))
      wheelEvent = 'wheel';
  else if ('onmousewheel' in document.createElement('div'))
      wheelEvent = 'mousewheel';
  
  if (wheelEvent && isEnabledForBrowser) {
      addEvent(wheelEvent, wheel);
      addEvent('mousedown', mousedown);
      addEvent('load', init);
  }
  
  
  /***********************************************
   * PUBLIC INTERFACE
   ***********************************************/
  
  function SmoothScroll(optionsToSet) {
      for (var key in optionsToSet)
          if (defaultOptions.hasOwnProperty(key)) 
              options[key] = optionsToSet[key];
  }
  SmoothScroll.destroy = cleanup;
  
  if (window.SmoothScrollOptions) // async API
      SmoothScroll(window.SmoothScrollOptions);
  
  if (typeof define === 'function' && define.amd)
      define(function() {
          return SmoothScroll;
      });
  else if ('object' == typeof exports)
      module.exports = SmoothScroll;
  else
      window.SmoothScroll = SmoothScroll;
  
  })();


/*!
 * jQuery.localScroll
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 2.0.0
 */
;(function(plugin) {
	// AMD Support
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], plugin);
	} else {
		plugin(jQuery);
	}
}(function($) {
	var URI = location.href.replace(/#.*/, ''); // local url without hash

	var $localScroll = $.localScroll = function(settings) {
		$('body').localScroll(settings);
	};

	// Many of these defaults, belong to jQuery.ScrollTo, check it's demo for an example of each option.
	// @see http://demos.flesler.com/jquery/scrollTo/
	// The defaults are public and can be overriden.
	$localScroll.defaults = {
		duration: 1000, // How long to animate.
		axis: 'y', // Which of top and left should be modified.
		event: 'click', // On which event to react.
		stop: true, // Avoid queuing animations
		target: window, // What to scroll (selector or element). The whole window by default.
		autoscroll: true // If true, applies the scrolling at initial page load.
		/*
		lock: false, // ignore events if already animating
		lazy: false, // if true, links can be added later, and will still work.
		filter: null, // filter some anchors out of the matched elements.
		hash: false, // if true, the hash of the selected link, will appear on the address bar.
		onBefore: null // called before scrolling, "this" contains the settings and gets 3 arguments
		*/
	};

	$.fn.localScroll = function(settings) {
		settings = $.extend({}, $localScroll.defaults, settings);

		if (settings.autoscroll && settings.hash && location.hash) {
			if (settings.target) window.scrollTo(0, 0);
			scroll(0, location, settings);
		}

		return settings.lazy ?
			// use event delegation, more links can be added later.
			this.on(settings.event, 'a,area', function(e) {
				if (filter.call(this)) {
					scroll(e, this, settings);
				}
			}) :
			// bind concretely, to each matching link
			this.find('a,area')
				.filter(filter).bind(settings.event, function(e) {
					scroll(e, this, settings);
				}).end()
			.end();

		function filter() {// is this a link that points to an anchor and passes a possible filter ? href is checked to avoid a bug in FF.
			return !!this.href && !!this.hash && this.href.replace(this.hash,'') === URI && (!settings.filter || $(this).is(settings.filter));
		}
	};

	// Not needed anymore, kept for backwards compatibility
	$localScroll.hash = function() {};

	function scroll(e, link, settings) {
		var id = link.hash.slice(1),
			elem = document.getElementById(id) || document.getElementsByName(id)[0];

		if (!elem) return;

		if (e) e.preventDefault();

		var $target = $(settings.target);

		if (settings.lock && $target.is(':animated') ||
			settings.onBefore && settings.onBefore(e, elem, $target) === false)
			return;

		if (settings.stop) {
			$target.stop(true); // remove all its animations
		}

		if (settings.hash) {
			var attr = elem.id === id ? 'id' : 'name',
				$a = $('<a> </a>').attr(attr, id).css({
					position:'absolute',
					top: $(window).scrollTop(),
					left: $(window).scrollLeft()
				});

			elem[attr] = '';
			$('body').prepend($a);
			location.hash = link.hash;
			$a.remove();
			elem[attr] = id;
		}

		$target
			.scrollTo(elem, settings) // do scroll
			.trigger('notify.serialScroll',[elem]); // notify serialScroll about this change
	}

	// AMD requirement
	return $localScroll;

}));

/*!
 * jQuery.scrollTo
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * https://github.com/flesler/jquery.scrollTo
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($) {
	'use strict';

	var $scrollTo = $.scrollTo = function(target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
	}

	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target,
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $(targ) : $(targ, elem);
					/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $(targ)).offset();
					}
			}

			var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function(i, axis) {
				var Pos	= axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function() {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;

		if (!isWin(elem))
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return $.isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
	}

	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft =
	$.Tween.propHooks.scrollTop = {
		get: function(t) {
			return $(t.elem)[t.prop]();
		},
		set: function(t) {
			var curr = this.get(t);
			// If interrupt is true and user scrolled, stop animating
			if (t.options.interrupt && t._last && t._last !== curr) {
				return $(t.elem).stop();
			}
			var next = Math.round(t.now);
			// Don't waste CPU
			// Browsers don't render floating point scroll
			if (curr !== next) {
				$(t.elem)[t.prop](next);
				t._last = this.get(t);
			}
		}
	};

	// AMD requirement
	return $scrollTo;
});

/*! WOW - v1.0.2 - 2014-09-24
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function () { var a, b, c, d, e, f = function (a, b) { return function () { return a.apply(b, arguments) } }, g = [].indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a) return b; return -1 }; b = function () { function a() { } return a.prototype.extend = function (a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function (a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.addEvent = function (a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function (a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function () { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function () { function a() { this.keys = [], this.values = [] } return a.prototype.get = function (a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function (a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)if (d = g[c], d === a) return void (this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () { function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function () { }, a }()), d = this.getComputedStyle || function (a) { return this.getPropertyValue = function (b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function () { function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c } return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 }, e.prototype.init = function () { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function () { var b, c, d, e; if (this.stopped = !1, this.boxes = function () { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b); return e }.call(this), this.all = function () { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)b = d[a], e.push(b); return e }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else { for (e = this.boxes, c = 0, d = e.length; d > c; c++)b = e[c], this.applyStyle(b, !0); this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50) } return this.config.live ? new a(function (a) { return function (b) { var c, d, e, f, g; for (g = [], e = 0, f = b.length; f > e; e++)d = b[e], g.push(function () { var a, b, e, f; for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++)c = e[a], f.push(this.doSync(c)); return f }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function () { return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function () { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function (a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function (a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass }, e.prototype.applyStyle = function (a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) { return function () { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function () { return "requestAnimationFrame" in window ? function (a) { return window.requestAnimationFrame(a) } : function (a) { return a() } }(), e.prototype.resetStyle = function () { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.customStyle = function (a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) { var c, d, e, f; f = []; for (c in b) d = b[c], a["" + c] = d, f.push(function () { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++)e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this)); return f }, e.prototype.vendorCSS = function (a, b) { var c, e, f, g, h, i; for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++)f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b); return c }, e.prototype.animationName = function (a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function (a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function (a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function () { return this.scrolled = !0 }, e.prototype.scrollCallback = function () { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function () { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function (a) { for (var b; void 0 === a.offsetTop;)a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;)b += a.offsetTop; return b }, e.prototype.isVisible = function (a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function () { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function () { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);

