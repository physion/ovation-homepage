/**
 * WOW.js
 *
 * Reveal Animations When You Scroll
 *
 */

/*! WOW - v1.0.0 - 2014-07-30
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),this.WOW=function(){function f(a){null==a&&(a={}),this.scrollCallback=d(this.scrollCallback,this),this.scrollHandler=d(this.scrollHandler,this),this.start=d(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return f.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},f.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},f.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.getElementsByClassName(this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},f.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},f.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},f.prototype.doSync=function(a){var b,c,d,f,g;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,f=a.getElementsByClassName(this.config.boxClass),g=[],c=0,d=f.length;d>c;c++)b=f[c],e.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),g.push(this.scrolled=!0)):g.push(void 0);return g}},f.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},f.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},f.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),f.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},f.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},f.prototype.vendors=["moz","webkit"],f.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},f.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},f.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},f.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},f.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},f.prototype.scrollHandler=function(){return this.scrolled=!0},f.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},f.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},f.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,innerHeight)-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},f.prototype.util=function(){return null!=this._util?this._util:this._util=new b},f.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},f}()}).call(this);



if (window.matchMedia("(min-width: 480px)").matches) {
  new WOW().init();
}




/**
 * Short Codes
 *
 * Creates custom, easy to use shortcodes for
 * utilization in the COS rich text editors.
 *
 */
 //Note: escaped double and single quotes in Shortcode.prototype.matchTags to prevent conflicting with html attributes resulting in broken icons in IE.

var Shortcode=function(e,t){if(!e)return;this.el=e;this.tags=t;this.matches=[];this.regex="\\[{name}(.*?)?\\](?:([\\s\\S]*?)(\\[/{name}\\]))?";if(this.el.jquery)this.el=this.el[0];this.matchTags();this.convertMatchesToNodes();this.replaceNodes()};Shortcode.prototype.matchTags=function(){var e=this.el.outerHTML,t,n,r,i,s,o,u;for(var a in this.tags){if(!this.tags.hasOwnProperty(a))return;r=this.template(this.regex,{name:a});t=e.match(new RegExp(r,"g"))||[];for(var f=0,l=t.length;f<l;f++){n=t[f].match(new RegExp(r));i=n[3]?"":undefined;o=n[0].replace(/"/g,"\\$&").replace(/'/g,"\\$&");s=this.escapeTagRegExp(o);u=this.parseOptions(n[1]);if(n[2]){i=n[2].trim();o=o.replace(i,"");s=s.replace(i,"([\\s\\S]*?)")}this.matches.push({name:a,tag:o,regex:s,options:u,contents:i})}}};Shortcode.prototype.convertMatchesToNodes=function(){var e=this.el.innerHTML,t,n,r;r=function(e,t,n,r,i,s,o){if(t)return e;else{var u=document.createElement("span");u.setAttribute("data-sc-tag",this.tag);u.className="sc-node sc-node-"+this.name;return u.outerHTML}};for(var i=0,s=this.matches.length;i<s;i++){t='((data-sc-tag=")|(<pre.*)|(<code.*))?';n=new RegExp(t+this.matches[i].regex,"g");e=e.replace(n,r.bind(this.matches[i]))}this.el.innerHTML=e};Shortcode.prototype.replaceNodes=function(){var e=this,t,n,r,i,s,o,u,a=document.querySelectorAll(".sc-node");u=function(t){if(t.jquery)t=t[0];t=e.parseCallbackResult(t);s.parentNode.replaceChild(t,s)};for(var f=0,l=this.matches.length;f<l;f++){n=this.matches[f];s=document.querySelector(".sc-node-"+n.name);if(s&&s.dataset.scTag===n.tag){o=this.tags[n.name].bind(n);i=u.bind(n);r=o(i);if(r!==undefined)i(r)}}};Shortcode.prototype.parseCallbackResult=function(e){var t,n,r;switch(typeof e){case"function":e=document.createTextNode(e());break;case"string":t=document.createElement("div");n=document.createDocumentFragment();t.innerHTML=e;r=t.children;if(r.length){for(var i=0,s=r.length;i<s;i++)n.appendChild(r[i].cloneNode(true));e=n}else e=document.createTextNode(e);break;case"object":if(!e.nodeType){e=JSON.stringify(e);e=document.createTextNode(e)}break;case"default":break}return e};Shortcode.prototype.parseOptions=function(e){var t={},n;if(!e)return;n=e.replace(/(\w+=)/g,"\n$1").split("\n");n.shift();for(var r=0;r<n.length;r++){var i=n[r].split("=");t[i[0]]=i[1].replace(/\'|\"/g,"").trim()}return t};Shortcode.prototype.escapeTagRegExp=function(e){return e.replace(/[\[\]\/]/g,"\\$&")};Shortcode.prototype.template=function(e,t){for(var n in t)e=e.replace(new RegExp("{"+n+"}","g"),t[n]);return e};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};if(window.jQuery){var pluginName="shortcode";$.fn[pluginName]=function(e){this.each(function(){if(!$.data(this,pluginName))$.data(this,pluginName,new Shortcode(this,e))});return this}}

new Shortcode(document.querySelector('body'), {
  fa: function() {
    var icon = this.options.icon;
    var color = this.options.color;
    var size = this.options.size;

    switch(size){
        case 'xxs':
        size = "14px";
        break;

        case 'xs':
        size = "18px";
        break;

        case 's':
        size = "24px";
        break;

        case 'm':
        size = "30px";
        break;

        case 'l':
        size = "34px";
        break;

        case 'xl':
        size = "44px";
        break;

        case 'xxl':
        size = "64px";
        break;
    }

      var output = '<i class="fa fa-' + icon + '" style="font-size: ' + size + '; color: ' + color +';"></i>';
    return output;
  },

  button: function() {
    var text = this.options.text;
    var icon = this.options.icon;
    var url = this.options.url;

      var output = '<a class="button" href="' + url + '"><i class="fa fa-' + icon + '"></i>' + text + '</a>';
    return output;
  }
});