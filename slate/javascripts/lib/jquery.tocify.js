/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(e,t){var i=0,n=Array.prototype.slice,o=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(s){}o(t)},e.widget=function(i,n,o){var s,r,a,l,h={},c=i.split(".")[0];i=i.split(".")[1],s=c+"-"+i,o||(o=n,n=e.Widget),e.expr[":"][s.toLowerCase()]=function(t){return!!e.data(t,s)},e[c]=e[c]||{},r=e[c][i],a=e[c][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new a(e,i)},e.extend(a,r,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),l=new n,l.options=e.widget.extend({},l.options),e.each(o,function(i,o){return e.isFunction(o)?(h[i]=function(){var e=function(){return n.prototype[i].apply(this,arguments)},t=function(e){return n.prototype[i].apply(this,e)};return function(){var i,n=this._super,s=this._superApply;return this._super=e,this._superApply=t,i=o.apply(this,arguments),this._super=n,this._superApply=s,i}}(),t):(h[i]=o,t)}),a.prototype=e.widget.extend(l,{widgetEventPrefix:r?l.widgetEventPrefix:i},h,{constructor:a,namespace:c,widgetName:i,widgetFullName:s}),r?(e.each(r._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,a,i._proto)}),delete r._childConstructors):n._childConstructors.push(a),e.widget.bridge(i,a)},e.widget.extend=function(i){for(var o,s,r=n.call(arguments,1),a=0,l=r.length;l>a;a++)for(o in r[a])s=r[a][o],r[a].hasOwnProperty(o)&&s!==t&&(i[o]=e.isPlainObject(s)?e.isPlainObject(i[o])?e.widget.extend({},i[o],s):e.widget.extend({},s):s);return i},e.widget.bridge=function(i,o){var s=o.prototype.widgetFullName||i;e.fn[i]=function(r){var a="string"==typeof r,l=n.call(arguments,1),h=this;return r=!a&&l.length?e.widget.extend.apply(null,[r].concat(l)):r,this.each(a?function(){var n,o=e.data(this,s);return o?e.isFunction(o[r])&&"_"!==r.charAt(0)?(n=o[r].apply(o,l),n!==o&&n!==t?(h=n&&n.jquery?h.pushStack(n.get()):n,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var t=e.data(this,s);t?t.option(r||{})._init():e.data(this,s,new o(r,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var o,s,r,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},o=i.split("."),i=o.shift(),o.length){for(s=a[i]=e.widget.extend({},this.options[i]),r=0;o.length-1>r;r++)s[o[r]]=s[o[r]]||{},s=s[o[r]];if(i=o.pop(),n===t)return s[i]===t?null:s[i];s[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var s,r=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=s=e(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,s=this.widget()),e.each(o,function(o,a){function l(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof a?r[a]:a).apply(r,arguments):t}"string"!=typeof a&&(l.guid=a.guid=a.guid||l.guid||e.guid++);var h=o.match(/^(\w+)\s*(.*)$/),c=h[1]+r.eventNamespace,u=h[2];u?s.delegate(u,c,l):n.bind(c,l)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var o,s,r=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:t;o=o||{},"number"==typeof o&&(o={duration:o}),r=!e.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&e.effects&&e.effects.effect[a]?n[t](o):a!==t&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){e(this)[t](),s&&s.call(n[0]),i()})}})}(jQuery),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,i){"use strict";var n="tocify",o="tocify-focus",s="tocify-hover",r="tocify-hide",a="tocify-header",l="."+a,h="tocify-subheader",c="."+h,u="tocify-item",d="."+u,f="tocify-extend-page",p="."+f;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=e(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),e(t).load(function(){i._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var t,i,o=this,s=o.options.ignoreSelector;return t=e(this.options.context).find(-1!==this.options.selectors.indexOf(",")?this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(",")):this.options.selectors.replace(/ /g,"")),t.length?(o.element.addClass(n),void t.each(function(t){e(this).is(s)||(i=e("<ul/>",{id:a+t,"class":a}).append(o._nestElements(e(this),t)),o.element.append(i),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(o.options.selectors).length?e(this).filter(o.options.selectors).each(function(){e(this).is(s)||o._appendSubheaders.call(this,o,i)}):e(this).find(o.options.selectors).each(function(){e(this).is(s)||o._appendSubheaders.call(this,o,i)})}))})):void o.element.addClass(r)},_setActiveElement:function(e){var i=this,n=t.location.hash.substring(1),o=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),o.addClass(i.focusClass),i.options.showAndHide&&o.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&e&&i.options.highlightDefault&&i.element.find(d).first().addClass(i.focusClass)),i},_nestElements:function(t,i){var n,o,s;return n=e.grep(this.items,function(e){return e===t.text()}),this.items.push(n.length?t.text()+i:t.text()),s=this._generateHashValue(n,t,i),o=e("<li/>",{"class":u,"data-unique":s}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:s,"data-unique":s})),o},_generateHashValue:function(e,t,i){var n="",o=this.options.hashGenerator;if("pretty"===o){for(n=t.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof o?o(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(n+=""+i),n},_appendSubheaders:function(t,i){var n=e(this).index(t.options.selectors),o=e(t.options.selectors).eq(n-1),s=+e(this).prop("tagName").charAt(1),r=+o.prop("tagName").charAt(1);r>s?t.element.find(c+"[data-tag="+s+"]").last().append(t._nestElements(e(this),n)):s===r?i.find(d).last().after(t._nestElements(e(this),n)):i.find(d).last().after(e("<ul/>",{"class":h,"data-tag":s})).next(c).append(t._nestElements(e(this),n))},_setEventHandlers:function(){var n=this;this.element.on("click.tocify","li",function(){if(n.options.history&&(t.location.hash=e(this).attr("data-unique")),n.element.find("."+n.focusClass).removeClass(n.focusClass),e(this).addClass(n.focusClass),n.options.showAndHide){var i=e('li[data-unique="'+e(this).attr("data-unique")+'"]');n._triggerShow(i)}n._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(n.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==n.options.theme&&e(this).removeClass(n.hoverClass)}}),e(t).on("resize",function(){n.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var o,s,r,a,l=e(t).scrollTop(),h=e(t).height(),c=e(i).height(),u=e("body")[0].scrollHeight;if(n.options.extendPage&&(n.webkit&&l>=u-h-n.options.extendPageOffset||!n.webkit&&h+l>c-n.options.extendPageOffset)&&!e(p).length){if(s=e('div[data-unique="'+e(d).last().attr("data-unique")+'"]'),!s.length)return;r=s.offset().top,e(n.options.context).append(e("<div />",{"class":f,height:Math.abs(r-l)+"px","data-unique":f})),n.extendPageScroll&&(a=n.element.find("li.active"),n._scrollTo(e("div[data-unique="+a.attr("data-unique")+"]")))}setTimeout(function(){var s,r=null;if(0==n.cachedHeights.length&&n.calculateHeights(),n.cachedAnchors.each(function(i){return n.cachedHeights[i]-e(t).scrollTop()<0?void(r=i):!1}),s=e(n.cachedAnchors[r]).attr("data-unique"),o=e('li[data-unique="'+s+'"]'),n.options.highlightOnScroll&&o.length){n.element.find("."+n.focusClass).removeClass(n.focusClass),o.addClass(n.focusClass);var a=n.tocifyWrapper,l=e(o).closest(".tocify-header"),h=l.offset().top,c=a.offset().top,u=a.scrollTop(),d=h-c;if(d>=e(t).height()){var f=d+u;a.scrollTop(f)}else 0>d&&a.scrollTop(0)}n.options.scrollHistory&&t.location.hash!=="#"+s&&(history.replaceState?history.replaceState({},"","#"+s):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+s,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),n.options.showAndHideOnScroll&&n.options.showAndHide&&n._triggerShow(o,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var i=e(t.options.context).find("div[data-unique]");i.each(function(i){var n=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[i]=n}),t.cachedAnchors=i},show:function(t){var i=this;if(!t.is(":visible"))switch(t.find(c).length||t.parent().is(l)||t.parent().is(":visible")?t.children(c).length||t.parent().is(l)||(t=t.closest(c)):t=t.parents(c).add(t),i.options.showEffect){case"none":t.show();break;case"show":t.show(i.options.showEffectSpeed);break;case"slideDown":t.slideDown(i.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(i.options.showEffectSpeed);break;default:t.show()}return i.hide(e(c).not(t.parent().is(l)?t:t.closest(l).find(c).not(t.siblings()))),i},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var i=this;return e.parent().is(l)||e.next().is(c)?i.show(e.next(c),t):e.parent().is(c)&&i.show(e.parent(),t),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(l+","+c).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=s),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var i=this,n=i.options.smoothScroll||0,o=i.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(o)?o.call():o)+"px"},{duration:n})}),i}})});