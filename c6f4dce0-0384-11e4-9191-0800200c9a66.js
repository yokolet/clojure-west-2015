/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c,g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

var h,aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function ca(a){return"string"==typeof a}var da="closure_uid_"+(1E9*Math.random()>>>0),ga=0;function ha(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b}Math.random();function ka(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function la(a,b){null!=a&&this.append.apply(this,arguments)}h=la.prototype;h.Vb="";h.set=function(a){this.Vb=""+a};h.append=function(a,b,c){this.Vb+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Vb+=arguments[d];return this};h.clear=function(){this.Vb=""};h.Lc=function(){return this.Vb.length};h.toString=function(){return this.Vb};var ma=Array.prototype,na=ma.indexOf?function(a,b,c){return ma.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ca(a))return ca(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function oa(a,b){a.sort(b||pa)}function ra(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||pa;oa(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value}
function pa(a,b){return a>b?1:a<b?-1:0};var q={};function sa(){throw Error("No *print-fn* fn set for evaluation environment");}var ua=null;function wa(){return new xa(null,5,[q.$j,!0,q.uh,!0,q.yh,!1,q.nq,!1,q.rk,null],null)}function x(a){return null!=a&&!1!==a}function ya(a){return null==a}function za(a){return x(a)?!1:!0}function Ea(a,b){return a[ba(null==b?null:b)]?!0:a._?!0:q.C?!1:null}function Fa(a){return null==a?null:a.constructor}
function Ga(a,b){var c=Fa(b),c=x(x(c)?c.Yj:c)?c.Xj:ba(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Ha(a){var b=a.Xj;return x(b)?b:""+y.a(a)}function Ia(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}var Ja={},Ma={};function Pa(a){if(a?a.ea:a)return a.ea(a);var b;b=Pa[ba(null==a?null:a)];if(!b&&(b=Pa._,!b))throw Ga("ICounted.-count",a);return b.call(null,a)}
function Qa(a){if(a?a.ba:a)return a.ba(a);var b;b=Qa[ba(null==a?null:a)];if(!b&&(b=Qa._,!b))throw Ga("IEmptyableCollection.-empty",a);return b.call(null,a)}var Ra={};function Ta(a,b){if(a?a.W:a)return a.W(a,b);var c;c=Ta[ba(null==a?null:a)];if(!c&&(c=Ta._,!c))throw Ga("ICollection.-conj",a);return c.call(null,a,b)}
var Ua={},Va=function(){function a(a,b,c){if(a?a.Ta:a)return a.Ta(a,b,c);var g;g=Va[ba(null==a?null:a)];if(!g&&(g=Va._,!g))throw Ga("IIndexed.-nth",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.J:a)return a.J(a,b);var c;c=Va[ba(null==a?null:a)];if(!c&&(c=Va._,!c))throw Ga("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;
return c}(),Wa={};function Za(a){if(a?a.ka:a)return a.ka(a);var b;b=Za[ba(null==a?null:a)];if(!b&&(b=Za._,!b))throw Ga("ISeq.-first",a);return b.call(null,a)}function $a(a){if(a?a.ua:a)return a.ua(a);var b;b=$a[ba(null==a?null:a)];if(!b&&(b=$a._,!b))throw Ga("ISeq.-rest",a);return b.call(null,a)}
var ab={},bb={},cb=function(){function a(a,b,c){if(a?a.Q:a)return a.Q(a,b,c);var g;g=cb[ba(null==a?null:a)];if(!g&&(g=cb._,!g))throw Ga("ILookup.-lookup",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.P:a)return a.P(a,b);var c;c=cb[ba(null==a?null:a)];if(!c&&(c=cb._,!c))throw Ga("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=
b;c.b=a;return c}();function db(a,b){if(a?a.ed:a)return a.ed(a,b);var c;c=db[ba(null==a?null:a)];if(!c&&(c=db._,!c))throw Ga("IAssociative.-contains-key?",a);return c.call(null,a,b)}function fb(a,b,c){if(a?a.Ib:a)return a.Ib(a,b,c);var d;d=fb[ba(null==a?null:a)];if(!d&&(d=fb._,!d))throw Ga("IAssociative.-assoc",a);return d.call(null,a,b,c)}var gb={};function ib(a,b){if(a?a.gd:a)return a.gd(a,b);var c;c=ib[ba(null==a?null:a)];if(!c&&(c=ib._,!c))throw Ga("IMap.-dissoc",a);return c.call(null,a,b)}
var kb={};function mb(a){if(a?a.hd:a)return a.hd(a);var b;b=mb[ba(null==a?null:a)];if(!b&&(b=mb._,!b))throw Ga("IMapEntry.-key",a);return b.call(null,a)}function nb(a){if(a?a.jd:a)return a.jd(a);var b;b=nb[ba(null==a?null:a)];if(!b&&(b=nb._,!b))throw Ga("IMapEntry.-val",a);return b.call(null,a)}var ob={};function pb(a,b){if(a?a.jh:a)return a.jh(0,b);var c;c=pb[ba(null==a?null:a)];if(!c&&(c=pb._,!c))throw Ga("ISet.-disjoin",a);return c.call(null,a,b)}
function sb(a){if(a?a.Jb:a)return a.Jb(a);var b;b=sb[ba(null==a?null:a)];if(!b&&(b=sb._,!b))throw Ga("IStack.-peek",a);return b.call(null,a)}function tb(a){if(a?a.Kb:a)return a.Kb(a);var b;b=tb[ba(null==a?null:a)];if(!b&&(b=tb._,!b))throw Ga("IStack.-pop",a);return b.call(null,a)}var ub={};function xb(a,b,c){if(a?a.oc:a)return a.oc(a,b,c);var d;d=xb[ba(null==a?null:a)];if(!d&&(d=xb._,!d))throw Ga("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function yb(a){if(a?a.me:a)return a.me(a);var b;b=yb[ba(null==a?null:a)];if(!b&&(b=yb._,!b))throw Ga("IDeref.-deref",a);return b.call(null,a)}var zb={};function Cb(a){if(a?a.V:a)return a.V(a);var b;b=Cb[ba(null==a?null:a)];if(!b&&(b=Cb._,!b))throw Ga("IMeta.-meta",a);return b.call(null,a)}var Db={};function Fb(a,b){if(a?a.$:a)return a.$(a,b);var c;c=Fb[ba(null==a?null:a)];if(!c&&(c=Fb._,!c))throw Ga("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var Lb={},Mb=function(){function a(a,b,c){if(a?a.ma:a)return a.ma(a,b,c);var g;g=Mb[ba(null==a?null:a)];if(!g&&(g=Mb._,!g))throw Ga("IReduce.-reduce",a);return g.call(null,a,b,c)}function b(a,b){if(a?a.la:a)return a.la(a,b);var c;c=Mb[ba(null==a?null:a)];if(!c&&(c=Mb._,!c))throw Ga("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;
c.b=a;return c}();function Nb(a,b){if(a?a.L:a)return a.L(a,b);var c;c=Nb[ba(null==a?null:a)];if(!c&&(c=Nb._,!c))throw Ga("IEquiv.-equiv",a);return c.call(null,a,b)}function Ob(a){if(a?a.M:a)return a.M(a);var b;b=Ob[ba(null==a?null:a)];if(!b&&(b=Ob._,!b))throw Ga("IHash.-hash",a);return b.call(null,a)}var Sb={};function Tb(a){if(a?a.Z:a)return a.Z(a);var b;b=Tb[ba(null==a?null:a)];if(!b&&(b=Tb._,!b))throw Ga("ISeqable.-seq",a);return b.call(null,a)}var Ub={},bc={};
function cc(a){if(a?a.Dc:a)return a.Dc(a);var b;b=cc[ba(null==a?null:a)];if(!b&&(b=cc._,!b))throw Ga("IReversible.-rseq",a);return b.call(null,a)}function dc(a,b){if(a?a.vf:a)return a.vf(a,b);var c;c=dc[ba(null==a?null:a)];if(!c&&(c=dc._,!c))throw Ga("ISorted.-sorted-seq",a);return c.call(null,a,b)}function ec(a,b,c){if(a?a.wf:a)return a.wf(a,b,c);var d;d=ec[ba(null==a?null:a)];if(!d&&(d=ec._,!d))throw Ga("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}
function fc(a,b){if(a?a.uf:a)return a.uf(a,b);var c;c=fc[ba(null==a?null:a)];if(!c&&(c=fc._,!c))throw Ga("ISorted.-entry-key",a);return c.call(null,a,b)}function hc(a){if(a?a.tf:a)return a.tf(a);var b;b=hc[ba(null==a?null:a)];if(!b&&(b=hc._,!b))throw Ga("ISorted.-comparator",a);return b.call(null,a)}function ic(a,b){if(a?a.ph:a)return a.ph(0,b);var c;c=ic[ba(null==a?null:a)];if(!c&&(c=ic._,!c))throw Ga("IWriter.-write",a);return c.call(null,a,b)}var jc={};
function kc(a,b,c){if(a?a.K:a)return a.K(a,b,c);var d;d=kc[ba(null==a?null:a)];if(!d&&(d=kc._,!d))throw Ga("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function lc(a,b,c){if(a?a.yf:a)return a.yf(a,b,c);var d;d=lc[ba(null==a?null:a)];if(!d&&(d=lc._,!d))throw Ga("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}function mc(a,b,c){if(a?a.xf:a)return a.xf(a,b,c);var d;d=mc[ba(null==a?null:a)];if(!d&&(d=mc._,!d))throw Ga("IWatchable.-add-watch",a);return d.call(null,a,b,c)}
function nc(a){if(a?a.fd:a)return a.fd(a);var b;b=nc[ba(null==a?null:a)];if(!b&&(b=nc._,!b))throw Ga("IEditableCollection.-as-transient",a);return b.call(null,a)}function rc(a,b){if(a?a.mc:a)return a.mc(a,b);var c;c=rc[ba(null==a?null:a)];if(!c&&(c=rc._,!c))throw Ga("ITransientCollection.-conj!",a);return c.call(null,a,b)}function sc(a){if(a?a.nc:a)return a.nc(a);var b;b=sc[ba(null==a?null:a)];if(!b&&(b=sc._,!b))throw Ga("ITransientCollection.-persistent!",a);return b.call(null,a)}
function tc(a,b,c){if(a?a.ld:a)return a.ld(a,b,c);var d;d=tc[ba(null==a?null:a)];if(!d&&(d=tc._,!d))throw Ga("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function uc(a,b,c){if(a?a.oh:a)return a.oh(0,b,c);var d;d=uc[ba(null==a?null:a)];if(!d&&(d=uc._,!d))throw Ga("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}function Ac(a){if(a?a.gh:a)return a.gh();var b;b=Ac[ba(null==a?null:a)];if(!b&&(b=Ac._,!b))throw Ga("IChunk.-drop-first",a);return b.call(null,a)}
function Bc(a){if(a?a.rf:a)return a.rf(a);var b;b=Bc[ba(null==a?null:a)];if(!b&&(b=Bc._,!b))throw Ga("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function Cc(a){if(a?a.sf:a)return a.sf(a);var b;b=Cc[ba(null==a?null:a)];if(!b&&(b=Cc._,!b))throw Ga("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function Dc(a){if(a?a.qf:a)return a.qf(a);var b;b=Dc[ba(null==a?null:a)];if(!b&&(b=Dc._,!b))throw Ga("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function Ec(a){this.zl=a;this.G=0;this.s=1073741824}Ec.prototype.ph=function(a,b){return this.zl.append(b)};function Fc(a){var b=new la;a.K(null,new Ec(b),wa());return""+y.a(b)}function Gc(a,b){if(x(Hc.c?Hc.c(a,b):Hc.call(null,a,b)))return 0;var c=za(a.Na);if(x(c?b.Na:c))return-1;if(x(a.Na)){if(za(b.Na))return 1;c=Ic.c?Ic.c(a.Na,b.Na):Ic.call(null,a.Na,b.Na);return 0===c?Ic.c?Ic.c(a.name,b.name):Ic.call(null,a.name,b.name):c}return q.Bh?Ic.c?Ic.c(a.name,b.name):Ic.call(null,a.name,b.name):null}
function Pc(a,b,c,d,e){this.Na=a;this.name=b;this.Pb=c;this.lc=d;this.La=e;this.s=2154168321;this.G=4096}h=Pc.prototype;h.K=function(a,b){return ic(b,this.Pb)};h.M=function(){var a=this.lc;return null!=a?a:this.lc=a=Qc.c?Qc.c(Rc.a?Rc.a(this.Na):Rc.call(null,this.Na),Rc.a?Rc.a(this.name):Rc.call(null,this.name)):Qc.call(null,Rc.a?Rc.a(this.Na):Rc.call(null,this.Na),Rc.a?Rc.a(this.name):Rc.call(null,this.name))};h.$=function(a,b){return new Pc(this.Na,this.name,this.Pb,this.lc,b)};h.V=function(){return this.La};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return cb.b(c,this,null);case 3:return cb.b(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return cb.b(a,this,null)};h.c=function(a,b){return cb.b(a,this,b)};h.L=function(a,b){return b instanceof Pc?this.Pb===b.Pb:!1};h.toString=function(){return this.Pb};
var Sc=function(){function a(a,b){var c=null!=a?""+y.a(a)+"/"+y.a(b):b;return new Pc(a,b,c,null,null)}function b(a){return a instanceof Pc?a:c.c(null,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function z(a){if(null==a)return null;if(a&&(a.s&8388608||a.Lo))return a.Z(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Tc(a,0);if(Ea(Sb,a))return Tb(a);if(q.C)throw Error(""+y.a(a)+" is not ISeqable");return null}function D(a){if(null==a)return null;if(a&&(a.s&64||a.kd))return a.ka(null);a=z(a);return null==a?null:Za(a)}function G(a){return null!=a?a&&(a.s&64||a.kd)?a.ua(null):(a=z(a))?$a(a):Uc:Uc}
function I(a){return null==a?null:a&&(a.s&128||a.ne)?a.wa(null):z(G(a))}
var Hc=function(){function a(a,b){return null==a?null==b:a===b||Nb(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(b.c(a,d))if(I(e))a=d,d=D(e),e=I(e);else return b.c(d,D(e));else return!1}a.u=2;a.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};a.f=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.u=2;b.m=c.m;b.a=function(){return!0};b.c=a;b.f=c.f;return b}();Ma["null"]=!0;Pa["null"]=function(){return 0};Date.prototype.L=function(a,b){return b instanceof Date&&this.toString()===b.toString()};Nb.number=function(a,b){return a===b};zb["function"]=!0;Cb["function"]=function(){return null};Ja["function"]=!0;Ob._=function(a){return a[da]||(a[da]=++ga)};function Vc(a){return a+1}
var Wc=function(){function a(a,b,c,d){for(var l=Pa(a);;)if(d<l)c=b.c?b.c(c,Va.c(a,d)):b.call(null,c,Va.c(a,d)),d+=1;else return c}function b(a,b,c){for(var d=Pa(a),l=0;;)if(l<d)c=b.c?b.c(c,Va.c(a,l)):b.call(null,c,Va.c(a,l)),l+=1;else return c}function c(a,b){var c=Pa(a);if(0===c)return b.j?b.j():b.call(null);for(var d=Va.c(a,0),l=1;;)if(l<c)d=b.c?b.c(d,Va.c(a,l)):b.call(null,d,Va.c(a,l)),l+=1;else return d}var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,
d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.b=b;d.g=a;return d}(),Xc=function(){function a(a,b,c,d){for(var l=a.length;;)if(d<l)c=b.c?b.c(c,a[d]):b.call(null,c,a[d]),d+=1;else return c}function b(a,b,c){for(var d=a.length,l=0;;)if(l<d)c=b.c?b.c(c,a[l]):b.call(null,c,a[l]),l+=1;else return c}function c(a,b){var c=a.length;if(0===a.length)return b.j?b.j():b.call(null);for(var d=a[0],l=1;;)if(l<c)d=b.c?b.c(d,a[l]):b.call(null,d,a[l]),l+=1;else return d}
var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,g);case 4:return a.call(this,d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.b=b;d.g=a;return d}();function Yc(a){return a?a.s&2||a.Oj?!0:a.s?!1:Ea(Ma,a):Ea(Ma,a)}function Zc(a){return a?a.s&16||a.hh?!0:a.s?!1:Ea(Ua,a):Ea(Ua,a)}function Tc(a,b){this.i=a;this.D=b;this.s=166199550;this.G=8192}h=Tc.prototype;h.toString=function(){return Fc(this)};
h.J=function(a,b){var c=b+this.D;return c<this.i.length?this.i[c]:null};h.Ta=function(a,b,c){a=b+this.D;return a<this.i.length?this.i[a]:c};h.wa=function(){return this.D+1<this.i.length?new Tc(this.i,this.D+1):null};h.ea=function(){return this.i.length-this.D};h.Dc=function(){var a=Pa(this);return 0<a?new $c(this,a-1,null):null};h.M=function(){return ad.a?ad.a(this):ad.call(null,this)};h.L=function(a,b){return jd.c?jd.c(this,b):jd.call(null,this,b)};h.ba=function(){return Uc};
h.la=function(a,b){return Xc.g(this.i,b,this.i[this.D],this.D+1)};h.ma=function(a,b,c){return Xc.g(this.i,b,c,this.D)};h.ka=function(){return this.i[this.D]};h.ua=function(){return this.D+1<this.i.length?new Tc(this.i,this.D+1):Uc};h.Z=function(){return this};h.W=function(a,b){return kd.c?kd.c(b,this):kd.call(null,b,this)};
var ld=function(){function a(a,b){return b<a.length?new Tc(a,b):null}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),J=function(){function a(a,b){return ld.c(a,b)}function b(a){return ld.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}();function $c(a,b,c){this.je=a;this.D=b;this.p=c;this.s=32374990;this.G=8192}h=$c.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.wa=function(){return 0<this.D?new $c(this.je,this.D-1,null):null};h.ea=function(){return this.D+1};h.M=function(){return ad.a?ad.a(this):ad.call(null,this)};h.L=function(a,b){return jd.c?jd.c(this,b):jd.call(null,this,b)};h.ba=function(){return md.c?md.c(Uc,this.p):md.call(null,Uc,this.p)};
h.la=function(a,b){return nd.c?nd.c(b,this):nd.call(null,b,this)};h.ma=function(a,b,c){return nd.b?nd.b(b,c,this):nd.call(null,b,c,this)};h.ka=function(){return Va.c(this.je,this.D)};h.ua=function(){return 0<this.D?new $c(this.je,this.D-1,null):Uc};h.Z=function(){return this};h.$=function(a,b){return new $c(this.je,this.D,b)};h.W=function(a,b){return kd.c?kd.c(b,this):kd.call(null,b,this)};Nb._=function(a,b){return a===b};
var od=function(){function a(a,b){return null!=a?Ta(a,b):Ta(Uc,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(x(e))a=b.c(a,d),d=D(e),e=I(e);else return b.c(a,d)}a.u=2;a.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};a.f=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.u=2;b.m=c.m;b.c=a;b.f=c.f;return b}();function pd(a){if(null!=a)if(a&&(a.s&2||a.Oj))a=a.ea(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(Ea(Ma,a))a=Pa(a);else if(q.C)a:{a=z(a);for(var b=0;;){if(Yc(a)){a=b+Pa(a);break a}a=I(a);b+=1}a=void 0}else a=null;else a=0;return a}
var qd=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return z(a)?D(a):c;if(Zc(a))return Va.b(a,b,c);if(z(a))a=I(a),b-=1;else return q.C?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(z(a))return D(a);throw Error("Index out of bounds");}if(Zc(a))return Va.c(a,b);if(z(a)){var c=I(a),g=b-1;a=c;b=g}else{if(q.C)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),K=function(){function a(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(a&&(a.s&16||a.hh))return a.Ta(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(Ea(Ua,a))return Va.c(a,b);if(a?a.s&64||a.kd||(a.s?0:Ea(Wa,a)):Ea(Wa,a))return qd.b(a,b,c);if(q.C)throw Error("nth not supported on this type "+y.a(Ha(Fa(a))));
return null}function b(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.s&16||a.hh))return a.J(null,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(Ea(Ua,a))return Va.c(a,b);if(a?a.s&64||a.kd||(a.s?0:Ea(Wa,a)):Ea(Wa,a))return qd.c(a,b);if(q.C)throw Error("nth not supported on this type "+y.a(Ha(Fa(a))));return null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),rd=function(){function a(a,b,c){return null!=a?a&&(a.s&256||a.Sj)?a.Q(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:Ea(bb,a)?cb.b(a,b,c):q.C?c:null:c}function b(a,b){return null==a?null:a&&(a.s&256||a.Sj)?a.P(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:Ea(bb,a)?cb.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),td=function(){function a(a,b,c){return null!=a?fb(a,b,c):sd.c?sd.c([b],[c]):sd.call(null,[b],[c])}var b=null,c=function(){function a(b,d,k,l){var m=null;3<arguments.length&&(m=J(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,m)}function c(a,d,e,l){for(;;)if(a=b.b(a,d,e),x(l))d=D(l),e=D(I(l)),l=I(I(l));else return a}a.u=3;a.m=function(a){var b=D(a);a=I(a);var d=D(a);
a=I(a);var l=D(a);a=G(a);return c(b,d,l,a)};a.f=c;return a}(),b=function(b,e,f,g){switch(arguments.length){case 3:return a.call(this,b,e,f);default:return c.f(b,e,f,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.u=3;b.m=c.m;b.b=a;b.f=c.f;return b}(),ud=function(){function a(a,b){return null==a?null:ib(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==
a)return null;a=b.c(a,d);if(x(e))d=D(e),e=I(e);else return a}}a.u=2;a.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};a.f=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.u=2;b.m=c.m;b.a=function(a){return a};b.c=a;b.f=c.f;return b}();
function Hd(a){var b="function"==ba(a);return b?b:a?x(x(null)?null:a.Nj)?!0:a.qh?!1:Ea(Ja,a):Ea(Ja,a)}function Id(a,b){this.l=a;this.p=b;this.G=0;this.s=393217}h=Id.prototype;
h.call=function(){var a=null;return a=function(a,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb){switch(arguments.length){case 2:var v=a,v=this;return v.l.a?v.l.a(c):v.l.call(null,c);case 3:return v=a,v=this,v.l.c?v.l.c(c,d):v.l.call(null,c,d);case 4:return v=a,v=this,v.l.b?v.l.b(c,d,e):v.l.call(null,c,d,e);case 5:return v=a,v=this,v.l.g?v.l.g(c,d,e,f):v.l.call(null,c,d,e,f);case 6:return v=a,v=this,v.l.d?v.l.d(c,d,e,f,g):v.l.call(null,c,d,e,f,g);case 7:return v=a,v=this,v.l.F?v.l.F(c,d,e,f,g,k):v.l.call(null,
c,d,e,f,g,k);case 8:return v=a,v=this,v.l.ra?v.l.ra(c,d,e,f,g,k,l):v.l.call(null,c,d,e,f,g,k,l);case 9:return v=a,v=this,v.l.ta?v.l.ta(c,d,e,f,g,k,l,m):v.l.call(null,c,d,e,f,g,k,l,m);case 10:return v=a,v=this,v.l.pa?v.l.pa(c,d,e,f,g,k,l,m,r):v.l.call(null,c,d,e,f,g,k,l,m,r);case 11:return v=a,v=this,v.l.ya?v.l.ya(c,d,e,f,g,k,l,m,r,s):v.l.call(null,c,d,e,f,g,k,l,m,r,s);case 12:return v=a,v=this,v.l.za?v.l.za(c,d,e,f,g,k,l,m,r,s,u):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u);case 13:return v=a,v=this,v.l.Aa?
v.l.Aa(c,d,e,f,g,k,l,m,r,s,u,p):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p);case 14:return v=a,v=this,v.l.Ba?v.l.Ba(c,d,e,f,g,k,l,m,r,s,u,p,A):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A);case 15:return v=a,v=this,v.l.Ca?v.l.Ca(c,d,e,f,g,k,l,m,r,s,u,p,A,E):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E);case 16:return v=a,v=this,v.l.Da?v.l.Da(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F);case 17:return v=a,v=this,v.l.Ea?v.l.Ea(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):v.l.call(null,c,d,e,f,
g,k,l,m,r,s,u,p,A,E,F,B);case 18:return v=a,v=this,v.l.Fa?v.l.Fa(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q);case 19:return v=a,v=this,v.l.Ga?v.l.Ga(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C);case 20:return v=a,v=this,v.l.Ha?v.l.Ha(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y):v.l.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y);case 21:return v=a,v=this,v.l.Ia?v.l.Ia(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L):v.l.call(null,
c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L);case 22:return v=a,v=this,Jd.Rj?Jd.Rj(v.l,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb):Jd.call(null,v.l,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.l.a?this.l.a(a):this.l.call(null,a)};h.c=function(a,b){return this.l.c?this.l.c(a,b):this.l.call(null,a,b)};
h.b=function(a,b,c){return this.l.b?this.l.b(a,b,c):this.l.call(null,a,b,c)};h.g=function(a,b,c,d){return this.l.g?this.l.g(a,b,c,d):this.l.call(null,a,b,c,d)};h.d=function(a,b,c,d,e){return this.l.d?this.l.d(a,b,c,d,e):this.l.call(null,a,b,c,d,e)};h.F=function(a,b,c,d,e,f){return this.l.F?this.l.F(a,b,c,d,e,f):this.l.call(null,a,b,c,d,e,f)};h.ra=function(a,b,c,d,e,f,g){return this.l.ra?this.l.ra(a,b,c,d,e,f,g):this.l.call(null,a,b,c,d,e,f,g)};
h.ta=function(a,b,c,d,e,f,g,k){return this.l.ta?this.l.ta(a,b,c,d,e,f,g,k):this.l.call(null,a,b,c,d,e,f,g,k)};h.pa=function(a,b,c,d,e,f,g,k,l){return this.l.pa?this.l.pa(a,b,c,d,e,f,g,k,l):this.l.call(null,a,b,c,d,e,f,g,k,l)};h.ya=function(a,b,c,d,e,f,g,k,l,m){return this.l.ya?this.l.ya(a,b,c,d,e,f,g,k,l,m):this.l.call(null,a,b,c,d,e,f,g,k,l,m)};h.za=function(a,b,c,d,e,f,g,k,l,m,r){return this.l.za?this.l.za(a,b,c,d,e,f,g,k,l,m,r):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r)};
h.Aa=function(a,b,c,d,e,f,g,k,l,m,r,s){return this.l.Aa?this.l.Aa(a,b,c,d,e,f,g,k,l,m,r,s):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s)};h.Ba=function(a,b,c,d,e,f,g,k,l,m,r,s,u){return this.l.Ba?this.l.Ba(a,b,c,d,e,f,g,k,l,m,r,s,u):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u)};h.Ca=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p){return this.l.Ca?this.l.Ca(a,b,c,d,e,f,g,k,l,m,r,s,u,p):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p)};
h.Da=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A){return this.l.Da?this.l.Da(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A)};h.Ea=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E){return this.l.Ea?this.l.Ea(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E)};h.Fa=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F){return this.l.Fa?this.l.Fa(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F)};
h.Ga=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B){return this.l.Ga?this.l.Ga(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B)};h.Ha=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q){return this.l.Ha?this.l.Ha(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q)};
h.Ia=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C){return this.l.Ia?this.l.Ia(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):this.l.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C)};h.Nj=!0;h.$=function(a,b){return new Id(this.l,b)};h.V=function(){return this.p};function md(a,b){return Hd(a)&&!(a?a.s&262144||a.Po||(a.s?0:Ea(Db,a)):Ea(Db,a))?new Id(a,b):null==a?null:Fb(a,b)}function Kd(a){var b=null!=a;return(b?a?a.s&131072||a.Uj||(a.s?0:Ea(zb,a)):Ea(zb,a):b)?Cb(a):null}
function Ld(a){return null==a?null:sb(a)}
var Md=function(){function a(a,b){return null==a?null:pb(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.c(a,d);if(x(e))d=D(e),e=I(e);else return a}}a.u=2;a.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};a.f=c;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.f(b,
e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.u=2;b.m=c.m;b.a=function(a){return a};b.c=a;b.f=c.f;return b}(),Nd={},Od=0;function Rc(a){if(a&&(a.s&4194304||a.Io))a=a.M(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<Od&&(Nd={},Od=0);var b=Nd[a];"number"!==typeof b&&(b=ja(a),Nd[a]=b,Od+=1);a=b}else a=null==a?0:q.C?Ob(a):null;return a}
function Pd(a){return a?a.s&16777216||a.Mo?!0:a.s?!1:Ea(Ub,a):Ea(Ub,a)}function Qd(a){return null==a?!1:a?a.s&1024||a.Jo?!0:a.s?!1:Ea(gb,a):Ea(gb,a)}function Rd(a){return a?a.s&16384||a.Oo?!0:a.s?!1:Ea(ub,a):Ea(ub,a)}function Sd(a){return a?a.G&512||a.Fo?!0:!1:!1}function Td(a){var b=[];ka(a,function(a){return function(b,e){return a.push(e)}}(b));return b}function Ud(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var Vd={};
function Wd(a){return null==a?!1:a?a.s&64||a.kd?!0:a.s?!1:Ea(Wa,a):Ea(Wa,a)}function Xd(a){return x(a)?!0:!1}function Yd(a,b){return rd.b(a,b,Vd)===Vd?!1:!0}function Ic(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(Fa(a)===Fa(b))return a&&(a.G&2048||a.ke)?a.le(null,b):pa(a,b);if(q.C)throw Error("compare on non-nil objects of different types");return null}
var Zd=function(){function a(a,b,c,g){for(;;){var k=Ic(K.c(a,g),K.c(b,g));if(0===k&&g+1<c)g+=1;else return k}}function b(a,b){var f=pd(a),g=pd(b);return f<g?-1:f>g?1:q.C?c.g(a,b,f,0):null}var c=null,c=function(c,e,f,g){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,f,g)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.g=a;return c}();
function $d(a){return Hc.c(a,Ic)?Ic:function(b,c){var d=a.c?a.c(b,c):a.call(null,b,c);return"number"===typeof d?d:x(d)?-1:x(a.c?a.c(c,b):a.call(null,c,b))?1:0}}
var be=function(){function a(a,b){if(z(b)){var c=ae.a?ae.a(b):ae.call(null,b);ra(c,$d(a));return z(c)}return Uc}function b(a){return c.c(Ic,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),nd=function(){function a(a,b,c){for(c=z(c);;)if(c)b=a.c?a.c(b,D(c)):a.call(null,b,D(c)),c=I(c);else return b}function b(a,b){var c=z(b);return c?ce.b?ce.b(a,D(c),I(c)):ce.call(null,
a,D(c),I(c)):a.j?a.j():a.call(null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),ce=function(){function a(a,b,c){return c&&(c.s&524288||c.Wj)?c.ma(null,a,b):c instanceof Array?Xc.b(c,a,b):"string"===typeof c?Xc.b(c,a,b):Ea(Lb,c)?Mb.b(c,a,b):q.C?nd.b(a,b,c):null}function b(a,b){return b&&(b.s&524288||b.Wj)?b.la(null,a):b instanceof Array?Xc.c(b,a):"string"===
typeof b?Xc.c(b,a):Ea(Lb,b)?Mb.c(b,a):q.C?nd.c(a,b):null}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),de=function(){var a=null,b=function(){function a(c,f,g){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a<c)if(I(d))a=c,c=D(d),d=I(d);else return c<D(d);else return!1}
a.u=2;a.m=function(a){var c=D(a);a=I(a);var g=D(a);a=G(a);return b(c,g,a)};a.f=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.f(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.u=2;a.m=b.m;a.a=function(){return!0};a.c=function(a,b){return a<b};a.f=b.f;return a}(),fe=function(){var a=null,b=function(){function a(c,f,g){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,f,k)}function b(a,c,d){for(;;)if(a<=c)if(I(d))a=c,c=D(d),d=I(d);else return c<=D(d);else return!1}a.u=2;a.m=function(a){var c=D(a);a=I(a);var g=D(a);a=G(a);return b(c,g,a)};a.f=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.f(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.u=2;a.m=b.m;a.a=function(){return!0};a.c=function(a,b){return a<=b};a.f=b.f;return a}(),se=function(){var a=null,b=function(){function a(c,
f,g){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>c)if(I(d))a=c,c=D(d),d=I(d);else return c>D(d);else return!1}a.u=2;a.m=function(a){var c=D(a);a=I(a);var g=D(a);a=G(a);return b(c,g,a)};a.f=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.f(a,d,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.u=2;a.m=b.m;a.a=function(){return!0};a.c=
function(a,b){return a>b};a.f=b.f;return a}(),te=function(){var a=null,b=function(){function a(c,f,g){var k=null;2<arguments.length&&(k=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,f,k)}function b(a,c,d){for(;;)if(a>=c)if(I(d))a=c,c=D(d),d=I(d);else return c>=D(d);else return!1}a.u=2;a.m=function(a){var c=D(a);a=I(a);var g=D(a);a=G(a);return b(c,g,a)};a.f=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;default:return b.f(a,d,J(arguments,
2))}throw Error("Invalid arity: "+arguments.length);};a.u=2;a.m=b.m;a.a=function(){return!0};a.c=function(a,b){return a>=b};a.f=b.f;return a}();function ue(a){return 0<=a?Math.floor.a?Math.floor.a(a):Math.floor.call(null,a):Math.ceil.a?Math.ceil.a(a):Math.ceil.call(null,a)}function ve(a,b){return(a%b+b)%b}function we(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function xe(a){var b=1;for(a=z(a);;)if(a&&0<b)b-=1,a=I(a);else return a}
var y=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var k=null;1<arguments.length&&(k=J(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,k)}function c(a,d){for(var e=new la(b.a(a)),l=d;;)if(x(l))e=e.append(b.a(D(l))),l=I(l);else return e.toString()}a.u=1;a.m=function(a){var b=D(a);a=G(a);return c(b,a)};a.f=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.f(b,J(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.u=1;b.m=c.m;b.j=function(){return""};b.a=a;b.f=c.f;return b}(),ye=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.c=function(a,c){return a.substring(c)};a.b=function(a,c,d){return a.substring(c,d)};return a}();
function jd(a,b){return Xd(Pd(b)?function(){for(var c=z(a),d=z(b);;){if(null==c)return null==d;if(null==d)return!1;if(Hc.c(D(c),D(d)))c=I(c),d=I(d);else return q.C?!1:null}}():null)}function Qc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function ad(a){if(z(a)){var b=Rc(D(a));for(a=I(a);;){if(null==a)return b;b=Qc(b,Rc(D(a)));a=I(a)}}else return 0}
function ze(a){var b=0;for(a=z(a);;)if(a){var c=D(a),b=(b+(Rc(Ae.a?Ae.a(c):Ae.call(null,c))^Rc(Be.a?Be.a(c):Be.call(null,c))))%4503599627370496;a=I(a)}else return b}function Ce(a,b,c,d,e){this.p=a;this.first=b;this.Ob=c;this.count=d;this.w=e;this.s=65937646;this.G=8192}h=Ce.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.wa=function(){return 1===this.count?null:this.Ob};h.ea=function(){return this.count};h.Jb=function(){return this.first};h.Kb=function(){return $a(this)};
h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return Uc};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return this.first};h.ua=function(){return 1===this.count?Uc:this.Ob};h.Z=function(){return this};h.$=function(a,b){return new Ce(b,this.first,this.Ob,this.count,this.w)};h.W=function(a,b){return new Ce(this.p,b,this,this.count+1,null)};
function De(a){this.p=a;this.s=65937614;this.G=8192}h=De.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.wa=function(){return null};h.ea=function(){return 0};h.Jb=function(){return null};h.Kb=function(){throw Error("Can't pop empty list");};h.M=function(){return 0};h.L=function(a,b){return jd(this,b)};h.ba=function(){return this};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return null};h.ua=function(){return Uc};
h.Z=function(){return null};h.$=function(a,b){return new De(b)};h.W=function(a,b){return new Ce(this.p,b,null,1,null)};var Uc=new De(null);function Ee(a){return cc(a)}function Fe(a){return(a?a.s&134217728||a.Ko||(a.s?0:Ea(bc,a)):Ea(bc,a))?cc(a):ce.b(od,Uc,a)}
var Ge=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Tc&&0===a.D)b=a.i;else a:{for(b=[];;)if(null!=a)b.push(a.ka(null)),a=a.wa(null);else break a;b=void 0}a=b.length;for(var e=Uc;;)if(0<a){var f=a-1,e=e.W(null,b[a-1]);a=f}else return e}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();
function He(a,b,c,d){this.p=a;this.first=b;this.Ob=c;this.w=d;this.s=65929452;this.G=8192}h=He.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.wa=function(){return null==this.Ob?null:z(this.Ob)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return this.first};
h.ua=function(){return null==this.Ob?Uc:this.Ob};h.Z=function(){return this};h.$=function(a,b){return new He(b,this.first,this.Ob,this.w)};h.W=function(a,b){return new He(null,b,this,this.w)};function kd(a,b){var c=null==b;return(c?c:b&&(b.s&64||b.kd))?new He(null,a,b,null):new He(null,a,z(b),null)}function Ie(a,b,c,d){this.Na=a;this.name=b;this.Zb=c;this.lc=d;this.s=2153775105;this.G=4096}h=Ie.prototype;h.K=function(a,b){return ic(b,":"+y.a(this.Zb))};
h.M=function(){null==this.lc&&(this.lc=Qc(Rc(this.Na),Rc(this.name))+2654435769);return this.lc};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return rd.c(c,this);case 3:return rd.b(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return rd.c(a,this)};h.c=function(a,b){return rd.b(a,this,b)};h.L=function(a,b){return b instanceof Ie?this.Zb===b.Zb:!1};
h.toString=function(){return":"+y.a(this.Zb)};function Je(a){return a instanceof Ie}function Ke(a){if(a&&(a.G&4096||a.Vj))return a.Na;throw Error("Doesn't support namespace: "+y.a(a));}
var Me=function(){function a(a,b){return new Ie(a,b,""+y.a(x(a)?""+y.a(a)+"/":null)+y.a(b),null)}function b(a){if(a instanceof Ie)return a;if(a instanceof Pc)return new Ie(Ke(a),Le.a?Le.a(a):Le.call(null,a),a.Pb,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new Ie(b[0],b[1],a,null):new Ie(null,b[0],a,null)}return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.a=b;c.c=a;return c}();function Ne(a,b,c,d){this.p=a;this.fn=b;this.fa=c;this.w=d;this.G=0;this.s=32374988}h=Ne.prototype;h.toString=function(){return Fc(this)};function Oe(a){null!=a.fn&&(a.fa=a.fn.j?a.fn.j():a.fn.call(null),a.fn=null);return a.fa}h.V=function(){return this.p};h.wa=function(){Tb(this);return null==this.fa?null:I(this.fa)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};
h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){Tb(this);return null==this.fa?null:D(this.fa)};h.ua=function(){Tb(this);return null!=this.fa?G(this.fa):Uc};h.Z=function(){Oe(this);if(null==this.fa)return null;for(var a=this.fa;;)if(a instanceof Ne)a=Oe(a);else return this.fa=a,z(this.fa)};h.$=function(a,b){return new Ne(b,this.fn,this.fa,this.w)};h.W=function(a,b){return kd(b,this)};function Pe(a,b){this.of=a;this.end=b;this.G=0;this.s=2}
Pe.prototype.ea=function(){return this.end};Pe.prototype.add=function(a){this.of[this.end]=a;return this.end+=1};Pe.prototype.oa=function(){var a=new Qe(this.of,0,this.end);this.of=null;return a};function Re(a){return new Pe(Array(a),0)}function Qe(a,b,c){this.i=a;this.off=b;this.end=c;this.G=0;this.s=524306}h=Qe.prototype;h.la=function(a,b){return Xc.g(this.i,b,this.i[this.off],this.off+1)};h.ma=function(a,b,c){return Xc.g(this.i,b,c,this.off)};
h.gh=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Qe(this.i,this.off+1,this.end)};h.J=function(a,b){return this.i[this.off+b]};h.Ta=function(a,b,c){return 0<=b&&b<this.end-this.off?this.i[this.off+b]:c};h.ea=function(){return this.end-this.off};
var Se=function(){function a(a,b,c){return new Qe(a,b,c)}function b(a,b){return new Qe(a,b,a.length)}function c(a){return new Qe(a,0,a.length)}var d=null,d=function(d,f,g){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,g)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.b=a;return d}();function Te(a,b,c,d){this.oa=a;this.Eb=b;this.p=c;this.w=d;this.s=31850732;this.G=1536}h=Te.prototype;h.toString=function(){return Fc(this)};
h.V=function(){return this.p};h.wa=function(){if(1<Pa(this.oa))return new Te(Ac(this.oa),this.Eb,this.p,null);var a=Tb(this.Eb);return null==a?null:a};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.ka=function(){return Va.c(this.oa,0)};h.ua=function(){return 1<Pa(this.oa)?new Te(Ac(this.oa),this.Eb,this.p,null):null==this.Eb?Uc:this.Eb};h.Z=function(){return this};h.rf=function(){return this.oa};
h.sf=function(){return null==this.Eb?Uc:this.Eb};h.$=function(a,b){return new Te(this.oa,this.Eb,b,this.w)};h.W=function(a,b){return kd(b,this)};h.qf=function(){return null==this.Eb?null:this.Eb};function Ue(a,b){return 0===Pa(a)?b:new Te(a,b,null,null)}function ae(a){for(var b=[];;)if(z(a))b.push(D(a)),a=I(a);else return b}function Ve(a,b){if(Yc(a))return pd(a);for(var c=a,d=b,e=0;;)if(0<d&&z(c))c=I(c),d-=1,e+=1;else return e}
var Xe=function We(b){return null==b?null:null==I(b)?z(D(b)):q.C?kd(D(b),We(I(b))):null},Ye=function(){function a(a,b){return new Ne(null,function(){var c=z(a);return c?Sd(c)?Ue(Bc(c),d.c(Cc(c),b)):kd(D(c),d.c(G(c),b)):b},null,null)}function b(a){return new Ne(null,function(){return a},null,null)}function c(){return new Ne(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var f=null;2<arguments.length&&(f=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,
c,d,f)}function b(a,c,e){return function s(a,b){return new Ne(null,function(){var c=z(a);return c?Sd(c)?Ue(Bc(c),s(Cc(c),b)):kd(D(c),s(G(c),b)):x(b)?s(D(b),I(b)):null},null,null)}(d.c(a,c),e)}a.u=2;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=G(a);return b(c,d,a)};a.f=b;return a}(),d=function(d,g,k){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,g);default:return e.f(d,g,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};d.u=2;d.m=e.m;d.j=c;d.a=b;d.c=a;d.f=e.f;return d}(),Ze=function(){function a(a,b,c,d){return kd(a,kd(b,kd(c,d)))}function b(a,b,c){return kd(a,kd(b,c))}var c=null,d=function(){function a(c,d,e,m,r){var s=null;4<arguments.length&&(s=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,m,s)}function b(a,c,d,e,f){return kd(a,kd(c,kd(d,kd(e,Xe(f)))))}a.u=4;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var r=D(a);a=G(a);return b(c,d,e,r,a)};a.f=b;return a}(),
c=function(c,f,g,k,l){switch(arguments.length){case 1:return z(c);case 2:return kd(c,f);case 3:return b.call(this,c,f,g);case 4:return a.call(this,c,f,g,k);default:return d.f(c,f,g,k,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.u=4;c.m=d.m;c.a=function(a){return z(a)};c.c=function(a,b){return kd(a,b)};c.b=b;c.g=a;c.f=d.f;return c}(),$e=function(){var a=null,b=function(){function a(c,f,g,k){var l=null;3<arguments.length&&(l=J(Array.prototype.slice.call(arguments,3),0));return b.call(this,
c,f,g,l)}function b(a,c,d,k){for(;;)if(a=tc(a,c,d),x(k))c=D(k),d=D(I(k)),k=I(I(k));else return a}a.u=3;a.m=function(a){var c=D(a);a=I(a);var g=D(a);a=I(a);var k=D(a);a=G(a);return b(c,g,k,a)};a.f=b;return a}(),a=function(a,d,e,f){switch(arguments.length){case 3:return tc(a,d,e);default:return b.f(a,d,e,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.u=3;a.m=b.m;a.b=function(a,b,e){return tc(a,b,e)};a.f=b.f;return a}();
function pf(a,b,c){var d=z(c);if(0===b)return a.j?a.j():a.call(null);c=Za(d);var e=$a(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=Za(e),f=$a(e);if(2===b)return a.c?a.c(c,d):a.c?a.c(c,d):a.call(null,c,d);var e=Za(f),g=$a(f);if(3===b)return a.b?a.b(c,d,e):a.b?a.b(c,d,e):a.call(null,c,d,e);var f=Za(g),k=$a(g);if(4===b)return a.g?a.g(c,d,e,f):a.g?a.g(c,d,e,f):a.call(null,c,d,e,f);var g=Za(k),l=$a(k);if(5===b)return a.d?a.d(c,d,e,f,g):a.d?a.d(c,d,e,f,g):a.call(null,c,d,e,f,g);var k=Za(l),
m=$a(l);if(6===b)return a.F?a.F(c,d,e,f,g,k):a.F?a.F(c,d,e,f,g,k):a.call(null,c,d,e,f,g,k);var l=Za(m),r=$a(m);if(7===b)return a.ra?a.ra(c,d,e,f,g,k,l):a.ra?a.ra(c,d,e,f,g,k,l):a.call(null,c,d,e,f,g,k,l);var m=Za(r),s=$a(r);if(8===b)return a.ta?a.ta(c,d,e,f,g,k,l,m):a.ta?a.ta(c,d,e,f,g,k,l,m):a.call(null,c,d,e,f,g,k,l,m);var r=Za(s),u=$a(s);if(9===b)return a.pa?a.pa(c,d,e,f,g,k,l,m,r):a.pa?a.pa(c,d,e,f,g,k,l,m,r):a.call(null,c,d,e,f,g,k,l,m,r);var s=Za(u),p=$a(u);if(10===b)return a.ya?a.ya(c,d,e,
f,g,k,l,m,r,s):a.ya?a.ya(c,d,e,f,g,k,l,m,r,s):a.call(null,c,d,e,f,g,k,l,m,r,s);var u=Za(p),A=$a(p);if(11===b)return a.za?a.za(c,d,e,f,g,k,l,m,r,s,u):a.za?a.za(c,d,e,f,g,k,l,m,r,s,u):a.call(null,c,d,e,f,g,k,l,m,r,s,u);var p=Za(A),E=$a(A);if(12===b)return a.Aa?a.Aa(c,d,e,f,g,k,l,m,r,s,u,p):a.Aa?a.Aa(c,d,e,f,g,k,l,m,r,s,u,p):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p);var A=Za(E),F=$a(E);if(13===b)return a.Ba?a.Ba(c,d,e,f,g,k,l,m,r,s,u,p,A):a.Ba?a.Ba(c,d,e,f,g,k,l,m,r,s,u,p,A):a.call(null,c,d,e,f,g,k,l,m,r,
s,u,p,A);var E=Za(F),B=$a(F);if(14===b)return a.Ca?a.Ca(c,d,e,f,g,k,l,m,r,s,u,p,A,E):a.Ca?a.Ca(c,d,e,f,g,k,l,m,r,s,u,p,A,E):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E);var F=Za(B),Q=$a(B);if(15===b)return a.Da?a.Da(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):a.Da?a.Da(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F);var B=Za(Q),C=$a(Q);if(16===b)return a.Ea?a.Ea(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):a.Ea?a.Ea(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B);var Q=
Za(C),Y=$a(C);if(17===b)return a.Fa?a.Fa(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):a.Fa?a.Fa(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q);var C=Za(Y),L=$a(Y);if(18===b)return a.Ga?a.Ga(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):a.Ga?a.Ga(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C);Y=Za(L);L=$a(L);if(19===b)return a.Ha?a.Ha(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y):a.Ha?a.Ha(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y):a.call(null,c,d,e,f,g,
k,l,m,r,s,u,p,A,E,F,B,Q,C,Y);var lb=Za(L);$a(L);if(20===b)return a.Ia?a.Ia(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,lb):a.Ia?a.Ia(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,lb):a.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,lb);throw Error("Only up to 20 arguments supported on functions");}
var Jd=function(){function a(a,b,c,d,e){b=Ze.g(b,c,d,e);c=a.u;return a.m?(d=Ve(b,c+1),d<=c?pf(a,d,b):a.m(b)):a.apply(a,ae(b))}function b(a,b,c,d){b=Ze.b(b,c,d);c=a.u;return a.m?(d=Ve(b,c+1),d<=c?pf(a,d,b):a.m(b)):a.apply(a,ae(b))}function c(a,b,c){b=Ze.c(b,c);c=a.u;if(a.m){var d=Ve(b,c+1);return d<=c?pf(a,d,b):a.m(b)}return a.apply(a,ae(b))}function d(a,b){var c=a.u;if(a.m){var d=Ve(b,c+1);return d<=c?pf(a,d,b):a.m(b)}return a.apply(a,ae(b))}var e=null,f=function(){function a(c,d,e,f,g,p){var A=null;
5<arguments.length&&(A=J(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,f,g,A)}function b(a,c,d,e,f,g){c=kd(c,kd(d,kd(e,kd(f,Xe(g)))));d=a.u;return a.m?(e=Ve(c,d+1),e<=d?pf(a,e,c):a.m(c)):a.apply(a,ae(c))}a.u=5;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var f=D(a);a=I(a);var g=D(a);a=G(a);return b(c,d,e,f,g,a)};a.f=b;return a}(),e=function(e,k,l,m,r,s){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,l);case 4:return b.call(this,
e,k,l,m);case 5:return a.call(this,e,k,l,m,r);default:return f.f(e,k,l,m,r,J(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.u=5;e.m=f.m;e.c=d;e.b=c;e.g=b;e.d=a;e.f=f.f;return e}(),qf=function(){function a(a,b){return!Hc.c(a,b)}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return za(Jd.g(Hc,a,c,d))}a.u=2;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=G(a);return b(c,
d,a)};a.f=b;return a}(),b=function(b,e,f){switch(arguments.length){case 1:return!1;case 2:return a.call(this,b,e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.u=2;b.m=c.m;b.a=function(){return!1};b.c=a;b.f=c.f;return b}();function rf(a,b){for(;;){if(null==z(b))return!0;if(x(a.a?a.a(D(b)):a.call(null,D(b)))){var c=a,d=I(b);a=c;b=d}else return q.C?!1:null}}
function sf(a,b){for(;;)if(z(b)){var c=a.a?a.a(D(b)):a.call(null,D(b));if(x(c))return c;var c=a,d=I(b);a=c;b=d}else return null}function tf(a){return a}
function uf(a){return function(){var b=null,c=function(){function b(a,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,a,d,l)}function c(b,d,e){return za(Jd.g(a,b,d,e))}b.u=2;b.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};b.f=c;return b}(),b=function(b,e,f){switch(arguments.length){case 0:return za(a.j?a.j():a.call(null));case 1:return za(a.a?a.a(b):a.call(null,b));case 2:return za(a.c?a.c(b,e):a.call(null,b,e));default:return c.f(b,
e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.u=2;b.m=c.m;return b}()}
var vf=function(){function a(a,b,c){return function(){var d=null,l=function(){function d(a,b,c,e){var f=null;3<arguments.length&&(f=J(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,f)}function k(d,l,m,r){return a.a?a.a(b.a?b.a(Jd.d(c,d,l,m,r)):b.call(null,Jd.d(c,d,l,m,r))):a.call(null,b.a?b.a(Jd.d(c,d,l,m,r)):b.call(null,Jd.d(c,d,l,m,r)))}d.u=3;d.m=function(a){var b=D(a);a=I(a);var c=D(a);a=I(a);var d=D(a);a=G(a);return k(b,c,d,a)};d.f=k;return d}(),d=function(d,k,s,u){switch(arguments.length){case 0:return a.a?
a.a(b.a?b.a(c.j?c.j():c.call(null)):b.call(null,c.j?c.j():c.call(null))):a.call(null,b.a?b.a(c.j?c.j():c.call(null)):b.call(null,c.j?c.j():c.call(null)));case 1:return a.a?a.a(b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d))):a.call(null,b.a?b.a(c.a?c.a(d):c.call(null,d)):b.call(null,c.a?c.a(d):c.call(null,d)));case 2:return a.a?a.a(b.a?b.a(c.c?c.c(d,k):c.call(null,d,k)):b.call(null,c.c?c.c(d,k):c.call(null,d,k))):a.call(null,b.a?b.a(c.c?c.c(d,k):c.call(null,d,k)):b.call(null,
c.c?c.c(d,k):c.call(null,d,k)));case 3:return a.a?a.a(b.a?b.a(c.b?c.b(d,k,s):c.call(null,d,k,s)):b.call(null,c.b?c.b(d,k,s):c.call(null,d,k,s))):a.call(null,b.a?b.a(c.b?c.b(d,k,s):c.call(null,d,k,s)):b.call(null,c.b?c.b(d,k,s):c.call(null,d,k,s)));default:return l.f(d,k,s,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.u=3;d.m=l.m;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,f){var g=null;3<arguments.length&&(g=J(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,g)}function d(c,g,k,l){return a.a?a.a(Jd.d(b,c,g,k,l)):a.call(null,Jd.d(b,c,g,k,l))}c.u=3;c.m=function(a){var b=D(a);a=I(a);var c=D(a);a=I(a);var e=D(a);a=G(a);return d(b,c,e,a)};c.f=d;return c}(),c=function(c,g,r,s){switch(arguments.length){case 0:return a.a?a.a(b.j?b.j():b.call(null)):a.call(null,b.j?b.j():b.call(null));case 1:return a.a?a.a(b.a?b.a(c):b.call(null,c)):a.call(null,b.a?b.a(c):b.call(null,c));case 2:return a.a?a.a(b.c?b.c(c,g):b.call(null,c,g)):a.call(null,
b.c?b.c(c,g):b.call(null,c,g));case 3:return a.a?a.a(b.b?b.b(c,g,r):b.call(null,c,g,r)):a.call(null,b.b?b.b(c,g,r):b.call(null,c,g,r));default:return d.f(c,g,r,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.u=3;c.m=d.m;return c}()}var c=null,d=function(){function a(c,d,e,m){var r=null;3<arguments.length&&(r=J(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,r)}function b(a,c,d,e){return function(a){return function(){function b(a){var d=null;0<arguments.length&&
(d=J(Array.prototype.slice.call(arguments,0),0));return c.call(this,d)}function c(b){b=Jd.c(D(a),b);for(var d=I(a);;)if(d)b=D(d).call(null,b),d=I(d);else return b}b.u=0;b.m=function(a){a=z(a);return c(a)};b.f=c;return b}()}(Fe(Ze.g(a,c,d,e)))}a.u=3;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=G(a);return b(c,d,e,a)};a.f=b;return a}(),c=function(c,f,g,k){switch(arguments.length){case 0:return tf;case 1:return c;case 2:return b.call(this,c,f);case 3:return a.call(this,c,f,g);default:return d.f(c,
f,g,J(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.u=3;c.m=d.m;c.j=function(){return tf};c.a=function(a){return a};c.c=b;c.b=a;c.f=d.f;return c}(),wf=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return r.call(this,b)}function r(e){return Jd.d(a,b,c,d,e)}e.u=0;e.m=function(a){a=z(a);return r(a)};e.f=r;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=J(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return Jd.g(a,b,c,d)}d.u=0;d.m=function(a){a=z(a);return e(a)};d.f=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return Jd.b(a,b,c)}c.u=0;c.m=function(a){a=z(a);return d(a)};c.f=d;return c}()}var d=null,e=function(){function a(c,d,e,f,s){var u=null;4<arguments.length&&(u=J(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,f,u)}function b(a,c,d,e,f){return function(){function b(a){var c=null;0<arguments.length&&(c=J(Array.prototype.slice.call(arguments,0),0));return g.call(this,c)}function g(b){return Jd.d(a,c,d,e,Ye.c(f,b))}b.u=0;b.m=function(a){a=z(a);return g(a)};b.f=g;return b}()}a.u=4;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var f=D(a);a=G(a);return b(c,d,e,f,a)};a.f=b;return a}(),d=function(d,g,k,l,m){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,g);case 3:return b.call(this,d,g,k);case 4:return a.call(this,d,g,k,l);default:return e.f(d,g,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.u=4;d.m=e.m;d.a=function(a){return a};d.c=c;d.b=b;d.g=a;d.f=e.f;return d}(),yf=function xf(b,c){return new Ne(null,function(){var d=z(c);if(d){if(Sd(d)){for(var e=Bc(d),f=pd(e),g=Re(f),k=0;;)if(k<f){var l=b.a?b.a(Va.c(e,k)):b.call(null,Va.c(e,k));null!=l&&g.add(l);k+=1}else break;return Ue(g.oa(),xf(b,Cc(d)))}e=b.a?b.a(D(d)):b.call(null,
D(d));return null==e?xf(b,G(d)):kd(e,xf(b,G(d)))}return null},null,null)},zf=function(){function a(a,b,c,e){return new Ne(null,function(){var m=z(b),r=z(c),s=z(e);return m&&r&&s?kd(a.b?a.b(D(m),D(r),D(s)):a.call(null,D(m),D(r),D(s)),d.g(a,G(m),G(r),G(s))):null},null,null)}function b(a,b,c){return new Ne(null,function(){var e=z(b),m=z(c);return e&&m?kd(a.c?a.c(D(e),D(m)):a.call(null,D(e),D(m)),d.b(a,G(e),G(m))):null},null,null)}function c(a,b){return new Ne(null,function(){var c=z(b);if(c){if(Sd(c)){for(var e=
Bc(c),m=pd(e),r=Re(m),s=0;;)if(s<m){var u=a.a?a.a(Va.c(e,s)):a.call(null,Va.c(e,s));r.add(u);s+=1}else break;return Ue(r.oa(),d.c(a,Cc(c)))}return kd(a.a?a.a(D(c)):a.call(null,D(c)),d.c(a,G(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,f,s){var u=null;4<arguments.length&&(u=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,u)}function b(a,c,e,f,g){var u=function A(a){return new Ne(null,function(){var b=d.c(z,a);return rf(tf,b)?kd(d.c(D,b),A(d.c(G,b))):
null},null,null)};return d.c(function(){return function(b){return Jd.c(a,b)}}(u),u(od.f(g,f,J([e,c],0))))}a.u=4;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var f=D(a);a=G(a);return b(c,d,e,f,a)};a.f=b;return a}(),d=function(d,g,k,l,m){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,k);case 4:return a.call(this,d,g,k,l);default:return e.f(d,g,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.u=4;d.m=e.m;d.c=c;d.b=
b;d.g=a;d.f=e.f;return d}(),Bf=function Af(b,c){return new Ne(null,function(){if(0<b){var d=z(c);return d?kd(D(d),Af(b-1,G(d))):null}return null},null,null)};function Cf(a,b){return new Ne(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=z(b);if(0<a&&e){var f=a-1,e=G(e);a=f;b=e}else return e}}),null,null)}
function Df(a,b){return new Ne(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=z(b),f;f=(f=e)?a.a?a.a(D(e)):a.call(null,D(e)):f;if(x(f))f=a,e=G(e),a=f,b=e;else return e}}),null,null)}
var Ef=function(){function a(a,b){return Bf(a,c.a(b))}function b(a){return new Ne(null,function(){return kd(a,c.a(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Ff=function(){function a(a,c){return new Ne(null,function(){var f=z(a),g=z(c);return f&&g?kd(D(f),kd(D(g),b.c(G(f),G(g)))):null},null,null)}var b=null,c=function(){function a(b,d,k){var l=
null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return new Ne(null,function(){var c=zf.c(z,od.f(e,d,J([a],0)));return rf(tf,c)?Ye.c(zf.c(D,c),Jd.c(b,zf.c(G,c))):null},null,null)}a.u=2;a.m=function(a){var b=D(a);a=I(a);var d=D(a);a=G(a);return c(b,d,a)};a.f=c;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.u=2;b.m=c.m;b.c=a;b.f=c.f;return b}();function Gf(a){return function c(a,e){return new Ne(null,function(){var f=z(a);return f?kd(D(f),c(G(f),e)):z(e)?c(D(e),G(e)):null},null,null)}(null,a)}
var Hf=function(){function a(a,b){return Gf(zf.c(a,b))}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return Gf(Jd.g(zf,a,c,d))}a.u=2;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=G(a);return b(c,d,a)};a.f=b;return a}(),b=function(b,e,f){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.f(b,e,J(arguments,2))}throw Error("Invalid arity: "+arguments.length);
};b.u=2;b.m=c.m;b.c=a;b.f=c.f;return b}(),Jf=function If(b,c){return new Ne(null,function(){var d=z(c);if(d){if(Sd(d)){for(var e=Bc(d),f=pd(e),g=Re(f),k=0;;)if(k<f){if(x(b.a?b.a(Va.c(e,k)):b.call(null,Va.c(e,k)))){var l=Va.c(e,k);g.add(l)}k+=1}else break;return Ue(g.oa(),If(b,Cc(d)))}e=D(d);d=G(d);return x(b.a?b.a(e):b.call(null,e))?kd(e,If(b,d)):If(b,d)}return null},null,null)};function Kf(a,b){return Jf(uf(a),b)}
function Of(a,b){var c;null!=a?a&&(a.G&4||a.Ho)?(c=ce.b(rc,nc(a),b),c=sc(c)):c=ce.b(Ta,a,b):c=ce.b(od,Uc,b);return c}
var Pf=function(){function a(a,b,c,k){return new Ne(null,function(){var l=z(k);if(l){var m=Bf(a,l);return a===pd(m)?kd(m,d.g(a,b,c,Cf(b,l))):Ta(Uc,Bf(a,Ye.c(m,c)))}return null},null,null)}function b(a,b,c){return new Ne(null,function(){var k=z(c);if(k){var l=Bf(a,k);return a===pd(l)?kd(l,d.b(a,b,Cf(b,k))):null}return null},null,null)}function c(a,b){return d.b(a,a,b)}var d=null,d=function(d,f,g,k){switch(arguments.length){case 2:return c.call(this,d,f);case 3:return b.call(this,d,f,g);case 4:return a.call(this,
d,f,g,k)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.b=b;d.g=a;return d}(),eg=function(){function a(a,b,c,d,f,s){var u=K.b(b,0,null);return(b=xe(b))?td.b(a,u,e.F(rd.c(a,u),b,c,d,f,s)):td.b(a,u,c.g?c.g(rd.c(a,u),d,f,s):c.call(null,rd.c(a,u),d,f,s))}function b(a,b,c,d,f){var s=K.b(b,0,null);return(b=xe(b))?td.b(a,s,e.d(rd.c(a,s),b,c,d,f)):td.b(a,s,c.b?c.b(rd.c(a,s),d,f):c.call(null,rd.c(a,s),d,f))}function c(a,b,c,d){var f=K.b(b,0,null);return(b=xe(b))?td.b(a,f,e.g(rd.c(a,f),b,c,d)):td.b(a,
f,c.c?c.c(rd.c(a,f),d):c.call(null,rd.c(a,f),d))}function d(a,b,c){var d=K.b(b,0,null);return(b=xe(b))?td.b(a,d,e.b(rd.c(a,d),b,c)):td.b(a,d,c.a?c.a(rd.c(a,d)):c.call(null,rd.c(a,d)))}var e=null,f=function(){function a(c,d,e,f,g,p,A){var E=null;6<arguments.length&&(E=J(Array.prototype.slice.call(arguments,6),0));return b.call(this,c,d,e,f,g,p,E)}function b(a,c,d,f,g,k,A){var E=K.b(c,0,null);return(c=xe(c))?td.b(a,E,Jd.f(e,rd.c(a,E),c,d,f,J([g,k,A],0))):td.b(a,E,Jd.f(d,rd.c(a,E),f,g,k,J([A],0)))}a.u=
6;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var f=D(a);a=I(a);var g=D(a);a=I(a);var A=D(a);a=G(a);return b(c,d,e,f,g,A,a)};a.f=b;return a}(),e=function(e,k,l,m,r,s,u){switch(arguments.length){case 3:return d.call(this,e,k,l);case 4:return c.call(this,e,k,l,m);case 5:return b.call(this,e,k,l,m,r);case 6:return a.call(this,e,k,l,m,r,s);default:return f.f(e,k,l,m,r,s,J(arguments,6))}throw Error("Invalid arity: "+arguments.length);};e.u=6;e.m=f.m;e.b=d;e.g=c;e.d=b;e.F=a;e.f=
f.f;return e}();function fg(a,b){this.N=a;this.i=b}function gg(a){return new fg(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function hg(a){return new fg(a.N,Ia(a.i))}function ig(a){a=a.o;return 32>a?0:a-1>>>5<<5}function jg(a,b,c){for(;;){if(0===b)return c;var d=gg(a);d.i[0]=c;c=d;b-=5}}
var lg=function kg(b,c,d,e){var f=hg(d),g=b.o-1>>>c&31;5===c?f.i[g]=e:(d=d.i[g],b=null!=d?kg(b,c-5,d,e):jg(null,c-5,e),f.i[g]=b);return f};function mg(a,b){throw Error("No item "+y.a(a)+" in vector of length "+y.a(b));}function ng(a){var b=a.root;for(a=a.shift;;)if(0<a)a-=5,b=b.i[0];else return b.i}function og(a,b){if(b>=ig(a))return a.qa;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.i[b>>>d&31],d=e;else return c.i}function pg(a,b){return 0<=b&&b<a.o?og(a,b):mg(b,a.o)}
var rg=function qg(b,c,d,e,f){var g=hg(d);if(0===c)g.i[e&31]=f;else{var k=e>>>c&31;b=qg(b,c-5,d.i[k],e,f);g.i[k]=b}return g},tg=function sg(b,c,d){var e=b.o-2>>>c&31;if(5<c){b=sg(b,c-5,d.i[e]);if(null==b&&0===e)return null;d=hg(d);d.i[e]=b;return d}return 0===e?null:q.C?(d=hg(d),d.i[e]=null,d):null};function M(a,b,c,d,e,f){this.p=a;this.o=b;this.shift=c;this.root=d;this.qa=e;this.w=f;this.s=167668511;this.G=8196}h=M.prototype;h.toString=function(){return Fc(this)};
h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return"number"===typeof b?Va.b(this,b,c):c};h.J=function(a,b){return pg(this,b)[b&31]};h.Ta=function(a,b,c){return 0<=b&&b<this.o?og(this,b)[b&31]:c};
h.oc=function(a,b,c){if(0<=b&&b<this.o)return ig(this)<=b?(a=Ia(this.qa),a[b&31]=c,new M(this.p,this.o,this.shift,this.root,a,null)):new M(this.p,this.o,this.shift,rg(this,this.shift,this.root,b,c),this.qa,null);if(b===this.o)return Ta(this,c);if(q.C)throw Error("Index "+y.a(b)+" out of bounds  [0,"+y.a(this.o)+"]");return null};h.V=function(){return this.p};h.ea=function(){return this.o};h.hd=function(){return Va.c(this,0)};h.jd=function(){return Va.c(this,1)};
h.Jb=function(){return 0<this.o?Va.c(this,this.o-1):null};h.Kb=function(){if(0===this.o)throw Error("Can't pop empty vector");if(1===this.o)return Fb(ug,this.p);if(1<this.o-ig(this))return new M(this.p,this.o-1,this.shift,this.root,this.qa.slice(0,-1),null);if(q.C){var a=og(this,this.o-2),b=tg(this,this.shift,this.root),b=null==b?vg:b,c=this.o-1;return 5<this.shift&&null==b.i[1]?new M(this.p,c,this.shift-5,b.i[0],a,null):new M(this.p,c,this.shift,b,a,null)}return null};
h.Dc=function(){return 0<this.o?new $c(this,this.o-1,null):null};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.fd=function(){return new wg(this.o,this.shift,xg.a?xg.a(this.root):xg.call(null,this.root),yg.a?yg.a(this.qa):yg.call(null,this.qa))};h.ba=function(){return md(ug,this.p)};h.la=function(a,b){return Wc.c(this,b)};h.ma=function(a,b,c){return Wc.b(this,b,c)};
h.Ib=function(a,b,c){if("number"===typeof b)return xb(this,b,c);throw Error("Vector's key for assoc must be a number.");};h.Z=function(){return 0===this.o?null:32>=this.o?new Tc(this.qa,0):q.C?zg.g?zg.g(this,ng(this),0,0):zg.call(null,this,ng(this),0,0):null};h.$=function(a,b){return new M(b,this.o,this.shift,this.root,this.qa,this.w)};
h.W=function(a,b){if(32>this.o-ig(this)){for(var c=this.qa.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.qa[e],e+=1;else break;d[c]=b;return new M(this.p,this.o+1,this.shift,this.root,d,null)}c=(d=this.o>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=gg(null),d.i[0]=this.root,e=jg(null,this.shift,new fg(null,this.qa)),d.i[1]=e):d=lg(this,this.shift,this.root,new fg(null,this.qa));return new M(this.p,this.o+1,c,d,[b],null)};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.Ta(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.J(null,a)};h.c=function(a,b){return this.Ta(null,a,b)};
var vg=new fg(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),ug=new M(null,0,5,vg,[],0);function Ag(a){return sc(ce.b(rc,nc(ug),a))}function Bg(a,b,c,d,e,f){this.ja=a;this.gb=b;this.D=c;this.off=d;this.p=e;this.w=f;this.s=32243948;this.G=1536}h=Bg.prototype;h.toString=function(){return Fc(this)};
h.wa=function(){if(this.off+1<this.gb.length){var a=zg.g?zg.g(this.ja,this.gb,this.D,this.off+1):zg.call(null,this.ja,this.gb,this.D,this.off+1);return null==a?null:a}return Dc(this)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(ug,this.p)};h.la=function(a,b){return Wc.c(Cg.b?Cg.b(this.ja,this.D+this.off,pd(this.ja)):Cg.call(null,this.ja,this.D+this.off,pd(this.ja)),b)};
h.ma=function(a,b,c){return Wc.b(Cg.b?Cg.b(this.ja,this.D+this.off,pd(this.ja)):Cg.call(null,this.ja,this.D+this.off,pd(this.ja)),b,c)};h.ka=function(){return this.gb[this.off]};h.ua=function(){if(this.off+1<this.gb.length){var a=zg.g?zg.g(this.ja,this.gb,this.D,this.off+1):zg.call(null,this.ja,this.gb,this.D,this.off+1);return null==a?Uc:a}return Cc(this)};h.Z=function(){return this};h.rf=function(){return Se.c(this.gb,this.off)};
h.sf=function(){var a=this.D+this.gb.length;return a<Pa(this.ja)?zg.g?zg.g(this.ja,og(this.ja,a),a,0):zg.call(null,this.ja,og(this.ja,a),a,0):Uc};h.$=function(a,b){return zg.d?zg.d(this.ja,this.gb,this.D,this.off,b):zg.call(null,this.ja,this.gb,this.D,this.off,b)};h.W=function(a,b){return kd(b,this)};h.qf=function(){var a=this.D+this.gb.length;return a<Pa(this.ja)?zg.g?zg.g(this.ja,og(this.ja,a),a,0):zg.call(null,this.ja,og(this.ja,a),a,0):null};
var zg=function(){function a(a,b,c,d,l){return new Bg(a,b,c,d,l,null)}function b(a,b,c,d){return new Bg(a,b,c,d,null,null)}function c(a,b,c){return new Bg(a,pg(a,b),b,c,null,null)}var d=null,d=function(d,f,g,k,l){switch(arguments.length){case 3:return c.call(this,d,f,g);case 4:return b.call(this,d,f,g,k);case 5:return a.call(this,d,f,g,k,l)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.g=b;d.d=a;return d}();
function Dg(a,b,c,d,e){this.p=a;this.Za=b;this.start=c;this.end=d;this.w=e;this.s=166617887;this.G=8192}h=Dg.prototype;h.toString=function(){return Fc(this)};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return"number"===typeof b?Va.b(this,b,c):c};h.J=function(a,b){return 0>b||this.end<=this.start+b?mg(b,this.end-this.start):Va.c(this.Za,this.start+b)};h.Ta=function(a,b,c){return 0>b||this.end<=this.start+b?c:Va.b(this.Za,this.start+b,c)};
h.oc=function(a,b,c){var d=this,e=d.start+b;return Eg.d?Eg.d(d.p,td.b(d.Za,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):Eg.call(null,d.p,td.b(d.Za,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};h.V=function(){return this.p};h.ea=function(){return this.end-this.start};h.Jb=function(){return Va.c(this.Za,this.end-1)};
h.Kb=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return Eg.d?Eg.d(this.p,this.Za,this.start,this.end-1,null):Eg.call(null,this.p,this.Za,this.start,this.end-1,null)};h.Dc=function(){return this.start!==this.end?new $c(this,this.end-this.start-1,null):null};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(ug,this.p)};h.la=function(a,b){return Wc.c(this,b)};
h.ma=function(a,b,c){return Wc.b(this,b,c)};h.Ib=function(a,b,c){if("number"===typeof b)return xb(this,b,c);throw Error("Subvec's key for assoc must be a number.");};h.Z=function(){var a=this;return function(b){return function d(e){return e===a.end?null:kd(Va.c(a.Za,e),new Ne(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};h.$=function(a,b){return Eg.d?Eg.d(b,this.Za,this.start,this.end,this.w):Eg.call(null,b,this.Za,this.start,this.end,this.w)};
h.W=function(a,b){return Eg.d?Eg.d(this.p,xb(this.Za,this.end,b),this.start,this.end+1,null):Eg.call(null,this.p,xb(this.Za,this.end,b),this.start,this.end+1,null)};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.J(null,c);case 3:return this.Ta(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.J(null,a)};
h.c=function(a,b){return this.Ta(null,a,b)};function Eg(a,b,c,d,e){for(;;)if(b instanceof Dg)c=b.start+c,d=b.start+d,b=b.Za;else{var f=pd(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Dg(a,b,c,d,e)}}
var Cg=function(){function a(a,b,c){return Eg(null,a,b,c,null)}function b(a,b){return c.b(a,b,pd(a))}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}();function xg(a){return new fg({},Ia(a.i))}
function yg(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Ud(a,0,b,0,a.length);return b}var Gg=function Fg(b,c,d,e){d=b.root.N===d.N?d:new fg(b.root.N,Ia(d.i));var f=b.o-1>>>c&31;if(5===c)b=e;else{var g=d.i[f];b=null!=g?Fg(b,c-5,g,e):jg(b.root.N,c-5,e)}d.i[f]=b;return d};function wg(a,b,c,d){this.o=a;this.shift=b;this.root=c;this.qa=d;this.s=275;this.G=88}h=wg.prototype;
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return"number"===typeof b?Va.b(this,b,c):c};
h.J=function(a,b){if(this.root.N)return pg(this,b)[b&31];throw Error("nth after persistent!");};h.Ta=function(a,b,c){return 0<=b&&b<this.o?Va.c(this,b):c};h.ea=function(){if(this.root.N)return this.o;throw Error("count after persistent!");};
h.oh=function(a,b,c){var d=this;if(d.root.N){if(0<=b&&b<d.o)return ig(this)<=b?d.qa[b&31]=c:(a=function(){return function f(a,k){var l=d.root.N===k.N?k:new fg(d.root.N,Ia(k.i));if(0===a)l.i[b&31]=c;else{var m=b>>>a&31,r=f(a-5,l.i[m]);l.i[m]=r}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.o)return rc(this,c);if(q.C)throw Error("Index "+y.a(b)+" out of bounds for TransientVector of length"+y.a(d.o));return null}throw Error("assoc! after persistent!");};
h.ld=function(a,b,c){if("number"===typeof b)return uc(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
h.mc=function(a,b){if(this.root.N){if(32>this.o-ig(this))this.qa[this.o&31]=b;else{var c=new fg(this.root.N,this.qa),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.qa=d;if(this.o>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=jg(this.root.N,this.shift,c);this.root=new fg(this.root.N,d);this.shift=e}else this.root=Gg(this,this.shift,this.root,c)}this.o+=1;return this}throw Error("conj! after persistent!");};h.nc=function(){if(this.root.N){this.root.N=null;var a=this.o-ig(this),b=Array(a);Ud(this.qa,0,b,0,a);return new M(null,this.o,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function Hg(a,b,c,d){this.p=a;this.Va=b;this.Fb=c;this.w=d;this.G=0;this.s=31850572}h=Hg.prototype;
h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.ka=function(){return D(this.Va)};h.ua=function(){var a=I(this.Va);return a?new Hg(this.p,a,this.Fb,null):null==this.Fb?Qa(this):new Hg(this.p,this.Fb,null,null)};h.Z=function(){return this};h.$=function(a,b){return new Hg(b,this.Va,this.Fb,this.w)};h.W=function(a,b){return kd(b,this)};
function Ig(a,b,c,d,e){this.p=a;this.count=b;this.Va=c;this.Fb=d;this.w=e;this.s=31858766;this.G=8192}h=Ig.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.ea=function(){return this.count};h.Jb=function(){return D(this.Va)};h.Kb=function(){if(x(this.Va)){var a=I(this.Va);return a?new Ig(this.p,this.count-1,a,this.Fb,null):new Ig(this.p,this.count-1,z(this.Fb),ug,null)}return this};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};
h.L=function(a,b){return jd(this,b)};h.ba=function(){return Jg};h.ka=function(){return D(this.Va)};h.ua=function(){return G(z(this))};h.Z=function(){var a=z(this.Fb),b=this.Va;return x(x(b)?b:a)?new Hg(null,this.Va,z(a),null):null};h.$=function(a,b){return new Ig(b,this.count,this.Va,this.Fb,this.w)};h.W=function(a,b){var c;x(this.Va)?(c=this.Fb,c=new Ig(this.p,this.count+1,this.Va,od.c(x(c)?c:ug,b),null)):c=new Ig(this.p,this.count+1,od.c(this.Va,b),ug,null);return c};
var Jg=new Ig(null,0,null,ug,0);function Kg(){this.G=0;this.s=2097152}Kg.prototype.L=function(){return!1};var Lg=new Kg;function Mg(a,b){return Xd(Qd(b)?pd(a)===pd(b)?rf(tf,zf.c(function(a){return Hc.c(rd.b(b,D(a),Lg),D(I(a)))},a)):null:null)}
function Ng(a,b){var c=a.i;if(b instanceof Ie)a:{for(var d=c.length,e=b.Zb,f=0;;){if(d<=f){c=-1;break a}var g=c[f];if(g instanceof Ie&&e===g.Zb){c=f;break a}if(q.C)f+=2;else{c=null;break a}}c=void 0}else if(ca(b)||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(q.C)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Pc)a:{d=c.length;e=b.Pb;for(f=0;;){if(d<=f){c=-1;break a}g=c[f];if(g instanceof Pc&&e===g.Pb){c=f;break a}if(q.C)f+=2;else{c=null;break a}}c=
void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(q.C)e+=2;else{c=null;break a}}c=void 0}else if(q.C)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(Hc.c(b,c[e])){c=e;break a}if(q.C)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Og(a,b,c){this.i=a;this.D=b;this.La=c;this.G=0;this.s=32374990}h=Og.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.La};
h.wa=function(){return this.D<this.i.length-2?new Og(this.i,this.D+2,this.La):null};h.ea=function(){return(this.i.length-this.D)/2};h.M=function(){return ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.La)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return new M(null,2,5,vg,[this.i[this.D],this.i[this.D+1]],null)};h.ua=function(){return this.D<this.i.length-2?new Og(this.i,this.D+2,this.La):Uc};h.Z=function(){return this};
h.$=function(a,b){return new Og(this.i,this.D,b)};h.W=function(a,b){return kd(b,this)};function xa(a,b,c,d){this.p=a;this.o=b;this.i=c;this.w=d;this.s=16647951;this.G=8196}h=xa.prototype;h.toString=function(){return Fc(this)};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){a=Ng(this,b);return-1===a?c:this.i[a+1]};h.V=function(){return this.p};h.ea=function(){return this.o};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ze(this)};h.L=function(a,b){return Mg(this,b)};
h.fd=function(){return new Pg({},this.i.length,Ia(this.i))};h.ba=function(){return Fb(Qg,this.p)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.gd=function(a,b){if(0<=Ng(this,b)){var c=this.i.length,d=c-2;if(0===d)return Qa(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new xa(this.p,this.o-1,d,null);if(Hc.c(b,this.i[e]))e+=2;else if(q.C)d[f]=this.i[e],d[f+1]=this.i[e+1],f+=2,e+=2;else return null}}else return this};
h.Ib=function(a,b,c){a=Ng(this,b);if(-1===a){if(this.o<Sg){a=this.i;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new xa(this.p,this.o+1,e,null)}return Fb(fb(Of(Tg,this),b,c),this.p)}return c===this.i[a+1]?this:q.C?(b=Ia(this.i),b[a+1]=c,new xa(this.p,this.o,b,null)):null};h.ed=function(a,b){return-1!==Ng(this,b)};h.Z=function(){return 0<=this.i.length-2?new Og(this.i,0,null):null};h.$=function(a,b){return new xa(b,this.o,this.i,this.w)};
h.W=function(a,b){if(Rd(b))return fb(this,Va.c(b,0),Va.c(b,1));for(var c=this,d=z(b);;){if(null==d)return c;var e=D(d);if(Rd(e))c=fb(c,Va.c(e,0),Va.c(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};
h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};var Qg=new xa(null,0,[],null),Sg=8;function Ug(a){for(var b=a.length,c=0,d=nc(Qg);;)if(c<b)var e=c+2,d=tc(d,a[c],a[c+1]),c=e;else return sc(d)}function Pg(a,b,c){this.Hc=a;this.Mb=b;this.i=c;this.G=56;this.s=258}h=Pg.prototype;
h.ld=function(a,b,c){if(x(this.Hc)){a=Ng(this,b);if(-1===a)return this.Mb+2<=2*Sg?(this.Mb+=2,this.i.push(b),this.i.push(c),this):$e.b(Vg.c?Vg.c(this.Mb,this.i):Vg.call(null,this.Mb,this.i),b,c);c!==this.i[a+1]&&(this.i[a+1]=c);return this}throw Error("assoc! after persistent!");};
h.mc=function(a,b){if(x(this.Hc)){if(b?b.s&2048||b.Tj||(b.s?0:Ea(kb,b)):Ea(kb,b))return tc(this,Ae.a?Ae.a(b):Ae.call(null,b),Be.a?Be.a(b):Be.call(null,b));for(var c=z(b),d=this;;){var e=D(c);if(x(e))c=I(c),d=tc(d,Ae.a?Ae.a(e):Ae.call(null,e),Be.a?Be.a(e):Be.call(null,e));else return d}}else throw Error("conj! after persistent!");};h.nc=function(){if(x(this.Hc))return this.Hc=!1,new xa(null,ue((this.Mb-this.Mb%2)/2),this.i,null);throw Error("persistent! called twice");};
h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){if(x(this.Hc))return a=Ng(this,b),-1===a?c:this.i[a+1];throw Error("lookup after persistent!");};h.ea=function(){if(x(this.Hc))return ue((this.Mb-this.Mb%2)/2);throw Error("count after persistent!");};function Vg(a,b){for(var c=nc(Tg),d=0;;)if(d<a)c=$e.b(c,b[d],b[d+1]),d+=2;else return c}function oh(){this.val=!1}function ph(a,b){return a===b?!0:a===b||a instanceof Ie&&b instanceof Ie&&a.Zb===b.Zb?!0:q.C?Hc.c(a,b):null}
var qh=function(){function a(a,b,c,g,k){a=Ia(a);a[b]=c;a[g]=k;return a}function b(a,b,c){a=Ia(a);a[b]=c;return a}var c=null,c=function(c,e,f,g,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,g,k)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.d=a;return c}();function rh(a,b){var c=Array(a.length-2);Ud(a,0,c,0,2*b);Ud(a,2*(b+1),c,2*b,c.length-2*b);return c}
var sh=function(){function a(a,b,c,g,k,l){a=a.Ic(b);a.i[c]=g;a.i[k]=l;return a}function b(a,b,c,g){a=a.Ic(b);a.i[c]=g;return a}var c=null,c=function(c,e,f,g,k,l){switch(arguments.length){case 4:return b.call(this,c,e,f,g);case 6:return a.call(this,c,e,f,g,k,l)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.F=a;return c}();function th(a,b,c){this.N=a;this.da=b;this.i=c}h=th.prototype;
h.Ic=function(a){if(a===this.N)return this;var b=we(this.da),c=Array(0>b?4:2*(b+1));Ud(this.i,0,c,0,2*b);return new th(a,this.da,c)};h.ud=function(){return uh.a?uh.a(this.i):uh.call(null,this.i)};h.bc=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.da&e))return d;var f=we(this.da&e-1),e=this.i[2*f],f=this.i[2*f+1];return null==e?f.bc(a+5,b,c,d):ph(c,e)?f:q.C?d:null};
h.qb=function(a,b,c,d,e,f){var g=1<<(c>>>b&31),k=we(this.da&g-1);if(0===(this.da&g)){var l=we(this.da);if(2*l<this.i.length){a=this.Ic(a);b=a.i;f.val=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];l-=1;c-=1;f-=1}b[2*k]=d;b[2*k+1]=e;a.da|=g;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=vh.qb(a,b+5,c,d,e,f);for(e=d=0;;)if(32>
d)0!==(this.da>>>d&1)&&(k[d]=null!=this.i[e]?vh.qb(a,b+5,Rc(this.i[e]),this.i[e],this.i[e+1],f):this.i[e+1],e+=2),d+=1;else break;return new wh(a,l+1,k)}return q.C?(b=Array(2*(l+4)),Ud(this.i,0,b,0,2*k),b[2*k]=d,b[2*k+1]=e,Ud(this.i,2*k,b,2*(k+1),2*(l-k)),f.val=!0,a=this.Ic(a),a.i=b,a.da|=g,a):null}l=this.i[2*k];g=this.i[2*k+1];return null==l?(l=g.qb(a,b+5,c,d,e,f),l===g?this:sh.g(this,a,2*k+1,l)):ph(d,l)?e===g?this:sh.g(this,a,2*k+1,e):q.C?(f.val=!0,sh.F(this,a,2*k,null,2*k+1,xh.ra?xh.ra(a,b+5,l,
g,c,d,e):xh.call(null,a,b+5,l,g,c,d,e))):null};
h.pb=function(a,b,c,d,e){var f=1<<(b>>>a&31),g=we(this.da&f-1);if(0===(this.da&f)){var k=we(this.da);if(16<=k){g=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];g[b>>>a&31]=vh.pb(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.da>>>c&1)&&(g[c]=null!=this.i[d]?vh.pb(a+5,Rc(this.i[d]),this.i[d],this.i[d+1],e):this.i[d+1],d+=2),c+=1;else break;return new wh(null,k+1,g)}a=Array(2*(k+1));Ud(this.i,
0,a,0,2*g);a[2*g]=c;a[2*g+1]=d;Ud(this.i,2*g,a,2*(g+1),2*(k-g));e.val=!0;return new th(null,this.da|f,a)}k=this.i[2*g];f=this.i[2*g+1];return null==k?(k=f.pb(a+5,b,c,d,e),k===f?this:new th(null,this.da,qh.b(this.i,2*g+1,k))):ph(c,k)?d===f?this:new th(null,this.da,qh.b(this.i,2*g+1,d)):q.C?(e.val=!0,new th(null,this.da,qh.d(this.i,2*g,null,2*g+1,xh.F?xh.F(a+5,k,f,b,c,d):xh.call(null,a+5,k,f,b,c,d)))):null};
h.vd=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.da&d))return this;var e=we(this.da&d-1),f=this.i[2*e],g=this.i[2*e+1];return null==f?(a=g.vd(a+5,b,c),a===g?this:null!=a?new th(null,this.da,qh.b(this.i,2*e+1,a)):this.da===d?null:q.C?new th(null,this.da^d,rh(this.i,e)):null):ph(c,f)?new th(null,this.da^d,rh(this.i,e)):q.C?this:null};var vh=new th(null,0,[]);function wh(a,b,c){this.N=a;this.o=b;this.i=c}h=wh.prototype;h.Ic=function(a){return a===this.N?this:new wh(a,this.o,Ia(this.i))};
h.ud=function(){return yh.a?yh.a(this.i):yh.call(null,this.i)};h.bc=function(a,b,c,d){var e=this.i[b>>>a&31];return null!=e?e.bc(a+5,b,c,d):d};h.qb=function(a,b,c,d,e,f){var g=c>>>b&31,k=this.i[g];if(null==k)return a=sh.g(this,a,g,vh.qb(a,b+5,c,d,e,f)),a.o+=1,a;b=k.qb(a,b+5,c,d,e,f);return b===k?this:sh.g(this,a,g,b)};
h.pb=function(a,b,c,d,e){var f=b>>>a&31,g=this.i[f];if(null==g)return new wh(null,this.o+1,qh.b(this.i,f,vh.pb(a+5,b,c,d,e)));a=g.pb(a+5,b,c,d,e);return a===g?this:new wh(null,this.o,qh.b(this.i,f,a))};
h.vd=function(a,b,c){var d=b>>>a&31,e=this.i[d];if(null!=e){a=e.vd(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.o)a:{e=this.i;a=2*(this.o-1);b=Array(a);c=0;for(var f=1,g=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,g|=1<<c),c+=1;else{d=new th(null,g,b);break a}d=void 0}else d=new wh(null,this.o-1,qh.b(this.i,d,a));else d=q.C?new wh(null,this.o,qh.b(this.i,d,a)):null;return d}return this};function zh(a,b,c){b*=2;for(var d=0;;)if(d<b){if(ph(c,a[d]))return d;d+=2}else return-1}
function Ah(a,b,c,d){this.N=a;this.Lb=b;this.o=c;this.i=d}h=Ah.prototype;h.Ic=function(a){if(a===this.N)return this;var b=Array(2*(this.o+1));Ud(this.i,0,b,0,2*this.o);return new Ah(a,this.Lb,this.o,b)};h.ud=function(){return uh.a?uh.a(this.i):uh.call(null,this.i)};h.bc=function(a,b,c,d){a=zh(this.i,this.o,c);return 0>a?d:ph(c,this.i[a])?this.i[a+1]:q.C?d:null};
h.qb=function(a,b,c,d,e,f){if(c===this.Lb){b=zh(this.i,this.o,d);if(-1===b){if(this.i.length>2*this.o)return a=sh.F(this,a,2*this.o,d,2*this.o+1,e),f.val=!0,a.o+=1,a;c=this.i.length;b=Array(c+2);Ud(this.i,0,b,0,c);b[c]=d;b[c+1]=e;f.val=!0;f=this.o+1;a===this.N?(this.i=b,this.o=f,a=this):a=new Ah(this.N,this.Lb,f,b);return a}return this.i[b+1]===e?this:sh.g(this,a,b+1,e)}return(new th(a,1<<(this.Lb>>>b&31),[null,this,null,null])).qb(a,b,c,d,e,f)};
h.pb=function(a,b,c,d,e){return b===this.Lb?(a=zh(this.i,this.o,c),-1===a?(a=2*this.o,b=Array(a+2),Ud(this.i,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new Ah(null,this.Lb,this.o+1,b)):Hc.c(this.i[a],d)?this:new Ah(null,this.Lb,this.o,qh.b(this.i,a+1,d))):(new th(null,1<<(this.Lb>>>a&31),[null,this])).pb(a,b,c,d,e)};h.vd=function(a,b,c){a=zh(this.i,this.o,c);return-1===a?this:1===this.o?null:q.C?new Ah(null,this.Lb,this.o-1,rh(this.i,ue((a-a%2)/2))):null};
var xh=function(){function a(a,b,c,g,k,l,m){var r=Rc(c);if(r===k)return new Ah(null,r,2,[c,g,l,m]);var s=new oh;return vh.qb(a,b,r,c,g,s).qb(a,b,k,l,m,s)}function b(a,b,c,g,k,l){var m=Rc(b);if(m===g)return new Ah(null,m,2,[b,c,k,l]);var r=new oh;return vh.pb(a,m,b,c,r).pb(a,g,k,l,r)}var c=null,c=function(c,e,f,g,k,l,m){switch(arguments.length){case 6:return b.call(this,c,e,f,g,k,l);case 7:return a.call(this,c,e,f,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};c.F=b;c.ra=a;return c}();
function Bh(a,b,c,d,e){this.p=a;this.tb=b;this.D=c;this.fa=d;this.w=e;this.G=0;this.s=32374860}h=Bh.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return null==this.fa?new M(null,2,5,vg,[this.tb[this.D],this.tb[this.D+1]],null):D(this.fa)};
h.ua=function(){return null==this.fa?uh.b?uh.b(this.tb,this.D+2,null):uh.call(null,this.tb,this.D+2,null):uh.b?uh.b(this.tb,this.D,I(this.fa)):uh.call(null,this.tb,this.D,I(this.fa))};h.Z=function(){return this};h.$=function(a,b){return new Bh(b,this.tb,this.D,this.fa,this.w)};h.W=function(a,b){return kd(b,this)};
var uh=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Bh(null,a,b,null,null);var g=a[b+1];if(x(g)&&(g=g.ud(),x(g)))return new Bh(null,a,b+2,g,null);b+=2}else return null;else return new Bh(null,a,b,c,null)}function b(a){return c.b(a,0,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.b=a;return c}();
function Ch(a,b,c,d,e){this.p=a;this.tb=b;this.D=c;this.fa=d;this.w=e;this.G=0;this.s=32374860}h=Ch.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return D(this.fa)};
h.ua=function(){return yh.g?yh.g(null,this.tb,this.D,I(this.fa)):yh.call(null,null,this.tb,this.D,I(this.fa))};h.Z=function(){return this};h.$=function(a,b){return new Ch(b,this.tb,this.D,this.fa,this.w)};h.W=function(a,b){return kd(b,this)};
var yh=function(){function a(a,b,c,g){if(null==g)for(g=b.length;;)if(c<g){var k=b[c];if(x(k)&&(k=k.ud(),x(k)))return new Ch(a,b,c+1,k,null);c+=1}else return null;else return new Ch(a,b,c,g,null)}function b(a){return c.g(null,a,0,null)}var c=null,c=function(c,e,f,g){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,f,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.g=a;return c}();
function Dh(a,b,c,d,e,f){this.p=a;this.o=b;this.root=c;this.Ma=d;this.Ya=e;this.w=f;this.s=16123663;this.G=8196}h=Dh.prototype;h.toString=function(){return Fc(this)};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return null==b?this.Ma?this.Ya:c:null==this.root?c:q.C?this.root.bc(0,Rc(b),b,c):null};h.V=function(){return this.p};h.ea=function(){return this.o};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ze(this)};h.L=function(a,b){return Mg(this,b)};
h.fd=function(){return new Eh({},this.root,this.o,this.Ma,this.Ya)};h.ba=function(){return Fb(Tg,this.p)};h.gd=function(a,b){if(null==b)return this.Ma?new Dh(this.p,this.o-1,this.root,!1,null,null):this;if(null==this.root)return this;if(q.C){var c=this.root.vd(0,Rc(b),b);return c===this.root?this:new Dh(this.p,this.o-1,c,this.Ma,this.Ya,null)}return null};
h.Ib=function(a,b,c){if(null==b)return this.Ma&&c===this.Ya?this:new Dh(this.p,this.Ma?this.o:this.o+1,this.root,!0,c,null);a=new oh;b=(null==this.root?vh:this.root).pb(0,Rc(b),b,c,a);return b===this.root?this:new Dh(this.p,a.val?this.o+1:this.o,b,this.Ma,this.Ya,null)};h.ed=function(a,b){return null==b?this.Ma:null==this.root?!1:q.C?this.root.bc(0,Rc(b),b,Vd)!==Vd:null};
h.Z=function(){if(0<this.o){var a=null!=this.root?this.root.ud():null;return this.Ma?kd(new M(null,2,5,vg,[null,this.Ya],null),a):a}return null};h.$=function(a,b){return new Dh(b,this.o,this.root,this.Ma,this.Ya,this.w)};h.W=function(a,b){if(Rd(b))return fb(this,Va.c(b,0),Va.c(b,1));for(var c=this,d=z(b);;){if(null==d)return c;var e=D(d);if(Rd(e))c=fb(c,Va.c(e,0),Va.c(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};var Tg=new Dh(null,0,null,!1,null,0);function sd(a,b){for(var c=a.length,d=0,e=nc(Tg);;)if(d<c)var f=d+1,e=e.ld(null,a[d],b[d]),d=f;else return sc(e)}
function Eh(a,b,c,d,e){this.N=a;this.root=b;this.count=c;this.Ma=d;this.Ya=e;this.G=56;this.s=258}h=Eh.prototype;h.ld=function(a,b,c){return Fh(this,b,c)};h.mc=function(a,b){var c;a:{if(this.N){if(b?b.s&2048||b.Tj||(b.s?0:Ea(kb,b)):Ea(kb,b)){c=Fh(this,Ae.a?Ae.a(b):Ae.call(null,b),Be.a?Be.a(b):Be.call(null,b));break a}c=z(b);for(var d=this;;){var e=D(c);if(x(e))c=I(c),d=Fh(d,Ae.a?Ae.a(e):Ae.call(null,e),Be.a?Be.a(e):Be.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
h.nc=function(){var a;if(this.N)this.N=null,a=new Dh(null,this.count,this.root,this.Ma,this.Ya,null);else throw Error("persistent! called twice");return a};h.P=function(a,b){return null==b?this.Ma?this.Ya:null:null==this.root?null:this.root.bc(0,Rc(b),b)};h.Q=function(a,b,c){return null==b?this.Ma?this.Ya:c:null==this.root?c:this.root.bc(0,Rc(b),b,c)};h.ea=function(){if(this.N)return this.count;throw Error("count after persistent!");};
function Fh(a,b,c){if(a.N){if(null==b)a.Ya!==c&&(a.Ya=c),a.Ma||(a.count+=1,a.Ma=!0);else{var d=new oh;b=(null==a.root?vh:a.root).qb(a.N,0,Rc(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function Gh(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=od.c(d,a),a=b;else return d}function Hh(a,b,c,d,e){this.p=a;this.stack=b;this.ee=c;this.o=d;this.w=e;this.G=0;this.s=32374862}h=Hh.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.p};
h.ea=function(){return 0>this.o?pd(I(this))+1:this.o};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return Ld(this.stack)};h.ua=function(){var a=D(this.stack),a=Gh(this.ee?a.right:a.left,I(this.stack),this.ee);return null!=a?new Hh(null,a,this.ee,this.o-1,null):Uc};h.Z=function(){return this};
h.$=function(a,b){return new Hh(b,this.stack,this.ee,this.o,this.w)};h.W=function(a,b){return kd(b,this)};function Ih(a,b,c,d){return c instanceof Jh?c.left instanceof Jh?new Jh(c.key,c.val,c.left.Gb(),new Kh(a,b,c.right,d,null),null):c.right instanceof Jh?new Jh(c.right.key,c.right.val,new Kh(c.key,c.val,c.left,c.right.left,null),new Kh(a,b,c.right.right,d,null),null):q.C?new Kh(a,b,c,d,null):null:new Kh(a,b,c,d,null)}
function Lh(a,b,c,d){return d instanceof Jh?d.right instanceof Jh?new Jh(d.key,d.val,new Kh(a,b,c,d.left,null),d.right.Gb(),null):d.left instanceof Jh?new Jh(d.left.key,d.left.val,new Kh(a,b,c,d.left.left,null),new Kh(d.key,d.val,d.left.right,d.right,null),null):q.C?new Kh(a,b,c,d,null):null:new Kh(a,b,c,d,null)}
function Mh(a,b,c,d){if(c instanceof Jh)return new Jh(a,b,c.Gb(),d,null);if(d instanceof Kh)return Lh(a,b,c,d.Hd());if(d instanceof Jh&&d.left instanceof Kh)return new Jh(d.left.key,d.left.val,new Kh(a,b,c,d.left.left,null),Lh(d.key,d.val,d.left.right,d.right.Hd()),null);if(q.C)throw Error("red-black tree invariant violation");return null}function Kh(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.w=e;this.G=0;this.s=32402207}h=Kh.prototype;h.Xg=function(a){return a.bh(this)};
h.Hd=function(){return new Jh(this.key,this.val,this.left,this.right,null)};h.Gb=function(){return this};h.Wg=function(a){return a.ah(this)};h.replace=function(a,b,c,d){return new Kh(a,b,c,d,null)};h.ah=function(a){return new Kh(a.key,a.val,this,a.right,null)};h.bh=function(a){return new Kh(a.key,a.val,a.left,this,null)};h.P=function(a,b){return Va.b(this,b,null)};h.Q=function(a,b,c){return Va.b(this,b,c)};h.J=function(a,b){return 0===b?this.key:1===b?this.val:null};
h.Ta=function(a,b,c){return 0===b?this.key:1===b?this.val:q.C?c:null};h.oc=function(a,b,c){return(new M(null,2,5,vg,[this.key,this.val],null)).oc(null,b,c)};h.V=function(){return null};h.ea=function(){return 2};h.hd=function(){return this.key};h.jd=function(){return this.val};h.Jb=function(){return this.val};h.Kb=function(){return new M(null,1,5,vg,[this.key],null)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return ug};
h.la=function(a,b){return Wc.c(this,b)};h.ma=function(a,b,c){return Wc.b(this,b,c)};h.Ib=function(a,b,c){return td.b(new M(null,2,5,vg,[this.key,this.val],null),b,c)};h.Z=function(){return Ta(Ta(Uc,this.val),this.key)};h.$=function(a,b){return md(new M(null,2,5,vg,[this.key,this.val],null),b)};h.W=function(a,b){return new M(null,3,5,vg,[this.key,this.val,b],null)};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};function Jh(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.w=e;this.G=0;this.s=32402207}h=Jh.prototype;
h.Xg=function(a){return new Jh(this.key,this.val,this.left,a,null)};h.Hd=function(){throw Error("red-black tree invariant violation");};h.Gb=function(){return new Kh(this.key,this.val,this.left,this.right,null)};h.Wg=function(a){return new Jh(this.key,this.val,a,this.right,null)};h.replace=function(a,b,c,d){return new Jh(a,b,c,d,null)};
h.ah=function(a){return this.left instanceof Jh?new Jh(this.key,this.val,this.left.Gb(),new Kh(a.key,a.val,this.right,a.right,null),null):this.right instanceof Jh?new Jh(this.right.key,this.right.val,new Kh(this.key,this.val,this.left,this.right.left,null),new Kh(a.key,a.val,this.right.right,a.right,null),null):q.C?new Kh(a.key,a.val,this,a.right,null):null};
h.bh=function(a){return this.right instanceof Jh?new Jh(this.key,this.val,new Kh(a.key,a.val,a.left,this.left,null),this.right.Gb(),null):this.left instanceof Jh?new Jh(this.left.key,this.left.val,new Kh(a.key,a.val,a.left,this.left.left,null),new Kh(this.key,this.val,this.left.right,this.right,null),null):q.C?new Kh(a.key,a.val,a.left,this,null):null};h.P=function(a,b){return Va.b(this,b,null)};h.Q=function(a,b,c){return Va.b(this,b,c)};h.J=function(a,b){return 0===b?this.key:1===b?this.val:null};
h.Ta=function(a,b,c){return 0===b?this.key:1===b?this.val:q.C?c:null};h.oc=function(a,b,c){return(new M(null,2,5,vg,[this.key,this.val],null)).oc(null,b,c)};h.V=function(){return null};h.ea=function(){return 2};h.hd=function(){return this.key};h.jd=function(){return this.val};h.Jb=function(){return this.val};h.Kb=function(){return new M(null,1,5,vg,[this.key],null)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return ug};
h.la=function(a,b){return Wc.c(this,b)};h.ma=function(a,b,c){return Wc.b(this,b,c)};h.Ib=function(a,b,c){return td.b(new M(null,2,5,vg,[this.key,this.val],null),b,c)};h.Z=function(){return Ta(Ta(Uc,this.val),this.key)};h.$=function(a,b){return md(new M(null,2,5,vg,[this.key,this.val],null),b)};h.W=function(a,b){return new M(null,3,5,vg,[this.key,this.val,b],null)};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};
var Oh=function Nh(b,c,d,e,f){if(null==c)return new Jh(d,e,null,null,null);var g=b.c?b.c(d,c.key):b.call(null,d,c.key);return 0===g?(f[0]=c,null):0>g?(b=Nh(b,c.left,d,e,f),null!=b?c.Wg(b):null):q.C?(b=Nh(b,c.right,d,e,f),null!=b?c.Xg(b):null):null},Qh=function Ph(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof Jh){if(c instanceof Jh){var d=Ph(b.right,c.left);return d instanceof Jh?new Jh(d.key,d.val,new Jh(b.key,b.val,b.left,d.left,null),new Jh(c.key,c.val,d.right,c.right,null),null):
new Jh(b.key,b.val,b.left,new Jh(c.key,c.val,d,c.right,null),null)}return new Jh(b.key,b.val,b.left,Ph(b.right,c),null)}return c instanceof Jh?new Jh(c.key,c.val,Ph(b,c.left),c.right,null):q.C?(d=Ph(b.right,c.left),d instanceof Jh?new Jh(d.key,d.val,new Kh(b.key,b.val,b.left,d.left,null),new Kh(c.key,c.val,d.right,c.right,null),null):Mh(b.key,b.val,b.left,new Kh(c.key,c.val,d,c.right,null))):null},Sh=function Rh(b,c,d,e){if(null!=c){var f=b.c?b.c(d,c.key):b.call(null,d,c.key);if(0===f)return e[0]=
c,Qh(c.left,c.right);if(0>f)return b=Rh(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof Kh?Mh(c.key,c.val,b,c.right):new Jh(c.key,c.val,b,c.right,null):null;if(q.C){b=Rh(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof Kh)if(e=c.key,d=c.val,c=c.left,b instanceof Jh)c=new Jh(e,d,c,b.Gb(),null);else if(c instanceof Kh)c=Ih(e,d,c.Hd(),b);else if(c instanceof Jh&&c.right instanceof Kh)c=new Jh(c.right.key,c.right.val,Ih(c.key,c.val,c.left.Hd(),c.right.left),new Kh(e,d,c.right.right,b,null),
null);else{if(q.C)throw Error("red-black tree invariant violation");c=null}else c=new Jh(c.key,c.val,c.left,b,null);else c=null;return c}}return null},Uh=function Th(b,c,d,e){var f=c.key,g=b.c?b.c(d,f):b.call(null,d,f);return 0===g?c.replace(f,e,c.left,c.right):0>g?c.replace(f,c.val,Th(b,c.left,d,e),c.right):q.C?c.replace(f,c.val,c.left,Th(b,c.right,d,e)):null};function Vh(a,b,c,d,e){this.Pa=a;this.Rb=b;this.o=c;this.p=d;this.w=e;this.s=418776847;this.G=8192}h=Vh.prototype;h.toString=function(){return Fc(this)};
function Wh(a,b){for(var c=a.Rb;;)if(null!=c){var d=a.Pa.c?a.Pa.c(b,c.key):a.Pa.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(q.C)c=c.right;else return null}else return null}h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){a=Wh(this,b);return null!=a?a.val:c};h.V=function(){return this.p};h.ea=function(){return this.o};h.Dc=function(){return 0<this.o?new Hh(null,Gh(this.Rb,null,!1),!1,this.o,null):null};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ze(this)};
h.L=function(a,b){return Mg(this,b)};h.ba=function(){return md(Xh,this.p)};h.gd=function(a,b){var c=[null],d=Sh(this.Pa,this.Rb,b,c);return null==d?null==K.c(c,0)?this:new Vh(this.Pa,null,0,this.p,null):new Vh(this.Pa,d.Gb(),this.o-1,this.p,null)};h.Ib=function(a,b,c){a=[null];var d=Oh(this.Pa,this.Rb,b,c,a);return null==d?(a=K.c(a,0),Hc.c(c,a.val)?this:new Vh(this.Pa,Uh(this.Pa,this.Rb,b,c),this.o,this.p,null)):new Vh(this.Pa,d.Gb(),this.o+1,this.p,null)};
h.ed=function(a,b){return null!=Wh(this,b)};h.Z=function(){return 0<this.o?new Hh(null,Gh(this.Rb,null,!0),!0,this.o,null):null};h.$=function(a,b){return new Vh(this.Pa,this.Rb,this.o,b,this.w)};h.W=function(a,b){if(Rd(b))return fb(this,Va.c(b,0),Va.c(b,1));for(var c=this,d=z(b);;){if(null==d)return c;var e=D(d);if(Rd(e))c=fb(c,Va.c(e,0),Va.c(e,1)),d=I(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};h.vf=function(a,b){return 0<this.o?new Hh(null,Gh(this.Rb,null,b),b,this.o,null):null};
h.wf=function(a,b,c){if(0<this.o){a=null;for(var d=this.Rb;;)if(null!=d){var e=this.Pa.c?this.Pa.c(b,d.key):this.Pa.call(null,b,d.key);if(0===e)return new Hh(null,od.c(a,d),c,-1,null);if(x(c))0>e?(a=od.c(a,d),d=d.left):d=d.right;else if(q.C)0<e?(a=od.c(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new Hh(null,a,c,-1,null)}else return null};h.uf=function(a,b){return Ae.a?Ae.a(b):Ae.call(null,b)};h.tf=function(){return this.Pa};
var Xh=new Vh(Ic,null,0,null,0),Yh=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=z(a);for(var b=nc(Tg);;)if(a){var e=I(I(a)),b=$e.b(b,D(a),D(I(a)));a=e}else return sc(b)}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),Zh=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=z(a);for(var b=Xh;;)if(a){var e=
I(I(a)),b=td.b(b,D(a),D(I(a)));a=e}else return b}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();function $h(a,b){this.Ja=a;this.La=b;this.G=0;this.s=32374988}h=$h.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.La};h.wa=function(){var a=this.Ja,a=(a?a.s&128||a.ne||(a.s?0:Ea(ab,a)):Ea(ab,a))?this.Ja.wa(null):I(this.Ja);return null==a?null:new $h(a,this.La)};h.M=function(){return ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.La)};
h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return this.Ja.ka(null).hd(null)};h.ua=function(){var a=this.Ja,a=(a?a.s&128||a.ne||(a.s?0:Ea(ab,a)):Ea(ab,a))?this.Ja.wa(null):I(this.Ja);return null!=a?new $h(a,this.La):Uc};h.Z=function(){return this};h.$=function(a,b){return new $h(this.Ja,b)};h.W=function(a,b){return kd(b,this)};function ai(a){return(a=z(a))?new $h(a,null):null}function Ae(a){return mb(a)}
function bi(a,b){this.Ja=a;this.La=b;this.G=0;this.s=32374988}h=bi.prototype;h.toString=function(){return Fc(this)};h.V=function(){return this.La};h.wa=function(){var a=this.Ja,a=(a?a.s&128||a.ne||(a.s?0:Ea(ab,a)):Ea(ab,a))?this.Ja.wa(null):I(this.Ja);return null==a?null:new bi(a,this.La)};h.M=function(){return ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.La)};h.la=function(a,b){return nd.c(b,this)};h.ma=function(a,b,c){return nd.b(b,c,this)};h.ka=function(){return this.Ja.ka(null).jd(null)};
h.ua=function(){var a=this.Ja,a=(a?a.s&128||a.ne||(a.s?0:Ea(ab,a)):Ea(ab,a))?this.Ja.wa(null):I(this.Ja);return null!=a?new bi(a,this.La):Uc};h.Z=function(){return this};h.$=function(a,b){return new bi(this.Ja,b)};h.W=function(a,b){return kd(b,this)};function Be(a){return nb(a)}
var ci=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return x(sf(tf,a))?ce.c(function(a,b){return od.c(x(a)?a:Qg,b)},a):null}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();function di(a,b,c){this.p=a;this.uc=b;this.w=c;this.s=15077647;this.G=8196}h=di.prototype;h.toString=function(){return Fc(this)};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return db(this.uc,b)?b:c};
h.V=function(){return this.p};h.ea=function(){return Pa(this.uc)};h.M=function(){var a=this.w;if(null!=a)return a;a:{for(var a=0,b=z(this);;)if(b)var c=D(b),a=(a+Rc(c))%4503599627370496,b=I(b);else break a;a=void 0}return this.w=a};h.L=function(a,b){return(null==b?!1:b?b.s&4096||b.No?!0:b.s?!1:Ea(ob,b):Ea(ob,b))&&pd(this)===pd(b)&&rf(function(a){return function(b){return Yd(a,b)}}(this),b)};h.fd=function(){return new ei(nc(this.uc))};h.ba=function(){return md(fi,this.p)};
h.jh=function(a,b){return new di(this.p,ib(this.uc,b),null)};h.Z=function(){return ai(this.uc)};h.$=function(a,b){return new di(b,this.uc,this.w)};h.W=function(a,b){return new di(this.p,td.b(this.uc,b,null),null)};h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};
h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};var fi=new di(null,Qg,0);function gi(a){var b=a.length;if(b<=Sg)for(var c=0,d=nc(Qg);;)if(c<b)var e=c+1,d=tc(d,a[c],null),c=e;else return new di(null,sc(d),null);else for(c=0,d=nc(fi);;)if(c<b)e=c+1,d=rc(d,a[c]),c=e;else return sc(d)}function ei(a){this.Qb=a;this.s=259;this.G=136}h=ei.prototype;
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return cb.b(this.Qb,c,Vd)===Vd?null:c;case 3:return cb.b(this.Qb,c,Vd)===Vd?d:c}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return cb.b(this.Qb,a,Vd)===Vd?null:a};h.c=function(a,b){return cb.b(this.Qb,a,Vd)===Vd?b:a};h.P=function(a,b){return cb.b(this,b,null)};h.Q=function(a,b,c){return cb.b(this.Qb,b,Vd)===Vd?c:b};
h.ea=function(){return pd(this.Qb)};h.mc=function(a,b){this.Qb=$e.b(this.Qb,b,null);return this};h.nc=function(){return new di(null,sc(this.Qb),null)};function hi(a){a=z(a);if(null==a)return fi;if(a instanceof Tc&&0===a.D){a=a.i;a:{for(var b=0,c=nc(fi);;)if(b<a.length)var d=b+1,c=c.mc(null,a[b]),b=d;else{a=c;break a}a=void 0}return a.nc(null)}if(q.C)for(d=nc(fi);;)if(null!=a)b=a.wa(null),d=d.mc(null,a.ka(null)),a=b;else return d.nc(null);else return null}
function Le(a){if(a&&(a.G&4096||a.Vj))return a.name;if("string"===typeof a)return a;throw Error("Doesn't support name: "+y.a(a));}var ji=function ii(b,c){return new Ne(null,function(){var d=z(c);return d?x(b.a?b.a(D(d)):b.call(null,D(d)))?kd(D(d),ii(b,G(d))):null:null},null,null)};function ki(a,b,c){return function(d){var e=hc(a);return b.c?b.c(e.c?e.c(fc(a,d),c):e.call(null,fc(a,d),c),0):b.call(null,e.c?e.c(fc(a,d),c):e.call(null,fc(a,d),c),0)}}
var li=function(){function a(a,b,c,g,k){var l=ec(a,c,!0);if(x(l)){var m=K.b(l,0,null);return ji(ki(a,g,k),x(ki(a,b,c).call(null,m))?l:I(l))}return null}function b(a,b,c){var g=ki(a,b,c);return x(gi([se,te]).call(null,b))?(a=ec(a,c,!0),x(a)?(b=K.b(a,0,null),x(g.a?g.a(b):g.call(null,b))?a:I(a)):null):ji(g,dc(a,!0))}var c=null,c=function(c,e,f,g,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,g,k)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.d=
a;return c}(),mi=function(){function a(a,b,c,g,k){var l=ec(a,k,!1);if(x(l)){var m=K.b(l,0,null);return ji(ki(a,b,c),x(ki(a,g,k).call(null,m))?l:I(l))}return null}function b(a,b,c){var g=ki(a,b,c);return x(gi([de,fe]).call(null,b))?(a=ec(a,c,!1),x(a)?(b=K.b(a,0,null),x(g.a?g.a(b):g.call(null,b))?a:I(a)):null):ji(g,dc(a,!1))}var c=null,c=function(c,e,f,g,k){switch(arguments.length){case 3:return b.call(this,c,e,f);case 5:return a.call(this,c,e,f,g,k)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.d=a;return c}();function ni(a,b,c,d,e){this.p=a;this.start=b;this.end=c;this.step=d;this.w=e;this.s=32375006;this.G=8192}h=ni.prototype;h.toString=function(){return Fc(this)};h.J=function(a,b){if(b<Pa(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};h.Ta=function(a,b,c){return b<Pa(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};h.V=function(){return this.p};
h.wa=function(){return 0<this.step?this.start+this.step<this.end?new ni(this.p,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new ni(this.p,this.start+this.step,this.end,this.step,null):null};h.ea=function(){return za(Tb(this))?0:Math.ceil((this.end-this.start)/this.step)};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ad(this)};h.L=function(a,b){return jd(this,b)};h.ba=function(){return md(Uc,this.p)};h.la=function(a,b){return Wc.c(this,b)};
h.ma=function(a,b,c){return Wc.b(this,b,c)};h.ka=function(){return null==Tb(this)?null:this.start};h.ua=function(){return null!=Tb(this)?new ni(this.p,this.start+this.step,this.end,this.step,null):Uc};h.Z=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};h.$=function(a,b){return new ni(b,this.start,this.end,this.step,this.w)};h.W=function(a,b){return kd(b,this)};
var oi=function(){function a(a,b,c){return new ni(null,a,b,c,null)}function b(a,b){return e.b(a,b,1)}function c(a){return e.b(0,a,1)}function d(){return e.b(0,Number.MAX_VALUE,1)}var e=null,e=function(e,g,k){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,g);case 3:return a.call(this,e,g,k)}throw Error("Invalid arity: "+arguments.length);};e.j=d;e.a=c;e.c=b;e.b=a;return e}();
function pi(a){var b=qi.exec(a);return Hc.c(D(b),a)?1===pd(b)?D(b):Ag(b):null}function ri(a,b){var c=a.exec(b);return null==c?null:1===pd(c)?D(c):Ag(c)}function si(a){var b=ri(/^(?:\(\?([idmsux]*)\))?(.*)/,a);K.b(b,0,null);a=K.b(b,1,null);b=K.b(b,2,null);return RegExp(b,a)}
function ti(a,b,c,d,e,f,g){var k=ua;try{ua=null==ua?null:ua-1;if(null!=ua&&0>ua)return ic(a,"#");ic(a,c);z(g)&&(b.b?b.b(D(g),a,f):b.call(null,D(g),a,f));for(var l=I(g),m=q.rk.a(f)-1;;)if(!l||null!=m&&0===m){z(l)&&0===m&&(ic(a,d),ic(a,"..."));break}else{ic(a,d);b.b?b.b(D(l),a,f):b.call(null,D(l),a,f);var r=I(l);c=m-1;l=r;m=c}return ic(a,e)}finally{ua=k}}
var ui=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=z(b),f=null,g=0,k=0;;)if(k<g){var l=f.J(null,k);ic(a,l);k+=1}else if(e=z(e))f=e,Sd(f)?(e=Bc(f),g=Cc(f),f=e,l=pd(e),e=g,g=l):(l=D(f),ic(a,l),e=I(f),f=null,g=0),k=0;else return null}a.u=1;a.m=function(a){var d=D(a);a=G(a);return b(d,a)};a.f=b;return a}(),vi={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function wi(a){return'"'+y.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return vi[a]}))+'"'}
var zi=function xi(b,c,d){if(null==b)return ic(c,"nil");if(void 0===b)return ic(c,"#\x3cundefined\x3e");if(q.C){x(function(){var c=rd.c(d,q.yh);return x(c)?(c=b?b.s&131072||b.Uj?!0:b.s?!1:Ea(zb,b):Ea(zb,b))?Kd(b):c:c}())&&(ic(c,"^"),xi(Kd(b),c,d),ic(c," "));if(null==b)return ic(c,"nil");if(b.Yj)return b.Qo(b,c,d);if(b&&(b.s&2147483648||b.ca))return b.K(null,c,d);if(Fa(b)===Boolean||"number"===typeof b)return ic(c,""+y.a(b));if(null!=b&&b.constructor===Object)return ic(c,"#js "),yi.g?yi.g(zf.c(function(c){return new M(null,
2,5,vg,[Me.a(c),b[c]],null)},Td(b)),xi,c,d):yi.call(null,zf.c(function(c){return new M(null,2,5,vg,[Me.a(c),b[c]],null)},Td(b)),xi,c,d);if(b instanceof Array)return ti(c,xi,"#js ["," ","]",d,b);if(ca(b))return x(q.uh.a(d))?ic(c,wi(b)):ic(c,b);if(Hd(b))return ui.f(c,J(["#\x3c",""+y.a(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+y.a(b);;)if(pd(d)<c)d="0"+y.a(d);else return d};return ui.f(c,J(['#inst "',""+y.a(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",e(b.getUTCDate(),
2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?ui.f(c,J(['#"',b.source,'"'],0)):(b?b.s&2147483648||b.ca||(b.s?0:Ea(jc,b)):Ea(jc,b))?kc(b,c,d):q.C?ui.f(c,J(["#\x3c",""+y.a(b),"\x3e"],0)):null}return null};
function Ai(a,b){var c=new la;a:{var d=new Ec(c);zi(D(a),d,b);for(var e=z(I(a)),f=null,g=0,k=0;;)if(k<g){var l=f.J(null,k);ic(d," ");zi(l,d,b);k+=1}else if(e=z(e))f=e,Sd(f)?(e=Bc(f),g=Cc(f),f=e,l=pd(e),e=g,g=l):(l=D(f),ic(d," "),zi(l,d,b),e=I(f),f=null,g=0),k=0;else break a}return c}
var Bi=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return null==a||za(z(a))?"":""+y.a(Ai(a,wa()))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),$i=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=td.b(wa(),q.uh,!1);a=null==a||za(z(a))?"":""+y.a(Ai(a,b));sa.a?sa.a(a):sa.call(null,a);x(!0)?(a=
wa(),sa.a?sa.a("\n"):sa.call(null,"\n"),a=(rd.c(a,q.$j),null)):a=null;return a}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();function yi(a,b,c,d){return ti(c,function(a,c,d){b.b?b.b(mb(a),c,d):b.call(null,mb(a),c,d);ic(c," ");return b.b?b.b(nb(a),c,d):b.call(null,nb(a),c,d)},"{",", ","}",d,z(a))}Tc.prototype.ca=!0;Tc.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Ne.prototype.ca=!0;Ne.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Hh.prototype.ca=!0;
Hh.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Bh.prototype.ca=!0;Bh.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Kh.prototype.ca=!0;Kh.prototype.K=function(a,b,c){return ti(b,zi,"["," ","]",c,this)};Og.prototype.ca=!0;Og.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Bg.prototype.ca=!0;Bg.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};He.prototype.ca=!0;He.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};
$c.prototype.ca=!0;$c.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Dh.prototype.ca=!0;Dh.prototype.K=function(a,b,c){return yi(this,zi,b,c)};Ch.prototype.ca=!0;Ch.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Dg.prototype.ca=!0;Dg.prototype.K=function(a,b,c){return ti(b,zi,"["," ","]",c,this)};Vh.prototype.ca=!0;Vh.prototype.K=function(a,b,c){return yi(this,zi,b,c)};di.prototype.ca=!0;di.prototype.K=function(a,b,c){return ti(b,zi,"#{"," ","}",c,this)};
Te.prototype.ca=!0;Te.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};bi.prototype.ca=!0;bi.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Jh.prototype.ca=!0;Jh.prototype.K=function(a,b,c){return ti(b,zi,"["," ","]",c,this)};M.prototype.ca=!0;M.prototype.K=function(a,b,c){return ti(b,zi,"["," ","]",c,this)};Hg.prototype.ca=!0;Hg.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};De.prototype.ca=!0;De.prototype.K=function(a,b){return ic(b,"()")};
Ig.prototype.ca=!0;Ig.prototype.K=function(a,b,c){return ti(b,zi,"#queue ["," ","]",c,z(this))};xa.prototype.ca=!0;xa.prototype.K=function(a,b,c){return yi(this,zi,b,c)};ni.prototype.ca=!0;ni.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};$h.prototype.ca=!0;$h.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};Ce.prototype.ca=!0;Ce.prototype.K=function(a,b,c){return ti(b,zi,"("," ",")",c,this)};M.prototype.ke=!0;M.prototype.le=function(a,b){return Zd.c(this,b)};
Dg.prototype.ke=!0;Dg.prototype.le=function(a,b){return Zd.c(this,b)};Ie.prototype.ke=!0;Ie.prototype.le=function(a,b){return Gc(this,b)};Pc.prototype.ke=!0;Pc.prototype.le=function(a,b){return Gc(this,b)};function aj(a,b){if(a?a.ih:a)return a.ih(0,b);var c;c=aj[ba(null==a?null:a)];if(!c&&(c=aj._,!c))throw Ga("IReset.-reset!",a);return c.call(null,a,b)}
var bj=function(){function a(a,b,c,d,e){if(a?a.nh:a)return a.nh(0,b,c,d,e);var r;r=bj[ba(null==a?null:a)];if(!r&&(r=bj._,!r))throw Ga("ISwap.-swap!",a);return r.call(null,a,b,c,d,e)}function b(a,b,c,d){if(a?a.mh:a)return a.mh(0,b,c,d);var e;e=bj[ba(null==a?null:a)];if(!e&&(e=bj._,!e))throw Ga("ISwap.-swap!",a);return e.call(null,a,b,c,d)}function c(a,b,c){if(a?a.lh:a)return a.lh(0,b,c);var d;d=bj[ba(null==a?null:a)];if(!d&&(d=bj._,!d))throw Ga("ISwap.-swap!",a);return d.call(null,a,b,c)}function d(a,
b){if(a?a.kh:a)return a.kh(0,b);var c;c=bj[ba(null==a?null:a)];if(!c&&(c=bj._,!c))throw Ga("ISwap.-swap!",a);return c.call(null,a,b)}var e=null,e=function(e,g,k,l,m){switch(arguments.length){case 2:return d.call(this,e,g);case 3:return c.call(this,e,g,k);case 4:return b.call(this,e,g,k,l);case 5:return a.call(this,e,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};e.c=d;e.b=c;e.g=b;e.d=a;return e}();
function cj(a,b,c,d){this.state=a;this.p=b;this.Il=c;this.Sb=d;this.s=2153938944;this.G=16386}h=cj.prototype;h.M=function(){return this[da]||(this[da]=++ga)};h.yf=function(a,b,c){a=z(this.Sb);for(var d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f),k=K.b(g,0,null),g=K.b(g,1,null);g.g?g.g(k,this,b,c):g.call(null,k,this,b,c);f+=1}else if(a=z(a))Sd(a)?(d=Bc(a),a=Cc(a),k=d,e=pd(d),d=k):(d=D(a),k=K.b(d,0,null),g=K.b(d,1,null),g.g?g.g(k,this,b,c):g.call(null,k,this,b,c),a=I(a),d=null,e=0),f=0;else return null};
h.xf=function(a,b,c){this.Sb=td.b(this.Sb,b,c);return this};h.K=function(a,b,c){ic(b,"#\x3cAtom: ");zi(this.state,b,c);return ic(b,"\x3e")};h.V=function(){return this.p};h.me=function(){return this.state};h.L=function(a,b){return this===b};
var dj=function(){function a(a){return new cj(a,null,null,null)}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){var d=Wd(c)?Jd.c(Yh,c):c,e=rd.c(d,q.Hq),d=rd.c(d,q.yh);return new cj(a,d,e,null)}a.u=1;a.m=function(a){var c=D(a);a=G(a);return b(c,a)};a.f=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.f(b,J(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.u=1;b.m=c.m;b.a=a;b.f=c.f;return b}();function ej(a,b){if(a instanceof cj){var c=a.Il;if(null!=c&&!x(c.a?c.a(b):c.call(null,b)))throw Error("Assert failed: Validator rejected reference state\n"+y.a(Bi.f(J([Ge(new Pc(null,"validate","validate",1233162959,null),new Pc(null,"new-value","new-value",972165309,null))],0))));c=a.state;a.state=b;null!=a.Sb&&lc(a,c,b);return b}return aj(a,b)}function fj(){var a=gj();return yb(a)}
var hj=function(){function a(a,b,c,d){return a instanceof cj?ej(a,b.b?b.b(a.state,c,d):b.call(null,a.state,c,d)):bj.g(a,b,c,d)}function b(a,b,c){return a instanceof cj?ej(a,b.c?b.c(a.state,c):b.call(null,a.state,c)):bj.b(a,b,c)}function c(a,b){return a instanceof cj?ej(a,b.a?b.a(a.state):b.call(null,a.state)):bj.c(a,b)}var d=null,e=function(){function a(c,d,e,f,s){var u=null;4<arguments.length&&(u=J(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,f,u)}function b(a,c,d,e,f){return a instanceof
cj?ej(a,Jd.d(c,a.state,d,e,f)):bj.d(a,c,d,e,f)}a.u=4;a.m=function(a){var c=D(a);a=I(a);var d=D(a);a=I(a);var e=D(a);a=I(a);var f=D(a);a=G(a);return b(c,d,e,f,a)};a.f=b;return a}(),d=function(d,g,k,l,m){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,k);case 4:return a.call(this,d,g,k,l);default:return e.f(d,g,k,l,J(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.u=4;d.m=e.m;d.c=c;d.b=b;d.g=a;d.f=e.f;return d}();
function ij(a,b,c){return mc(a,b,c)}var jj=null,kj=function(){function a(a){null==jj&&(jj=dj.a(0));return Sc.a(""+y.a(a)+y.a(hj.c(jj,Vc)))}function b(){return c.a("G__")}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.j=b;c.a=a;return c}(),lj={};
function mj(a){if(a?a.Qj:a)return a.Qj(a);var b;b=mj[ba(null==a?null:a)];if(!b&&(b=mj._,!b))throw Ga("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function nj(a){return(a?x(x(null)?null:a.Pj)||(a.qh?0:Ea(lj,a)):Ea(lj,a))?mj(a):"string"===typeof a||"number"===typeof a||a instanceof Ie||a instanceof Pc?oj.a?oj.a(a):oj.call(null,a):Bi.f(J([a],0))}
var oj=function pj(b){if(null==b)return null;if(b?x(x(null)?null:b.Pj)||(b.qh?0:Ea(lj,b)):Ea(lj,b))return mj(b);if(b instanceof Ie)return Le(b);if(b instanceof Pc)return""+y.a(b);if(Qd(b)){var c={};b=z(b);for(var d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f),k=K.b(g,0,null),g=K.b(g,1,null);c[nj(k)]=pj(g);f+=1}else if(b=z(b))Sd(b)?(e=Bc(b),b=Cc(b),d=e,e=pd(e)):(e=D(b),d=K.b(e,0,null),e=K.b(e,1,null),c[nj(d)]=pj(e),b=I(b),d=null,e=0),f=0;else break;return c}if(null==b?0:b?b.s&8||b.Go||(b.s?0:Ea(Ra,b)):
Ea(Ra,b)){c=[];b=z(zf.c(pj,b));d=null;for(f=e=0;;)if(f<e)k=d.J(null,f),c.push(k),f+=1;else if(b=z(b))d=b,Sd(d)?(b=Bc(d),f=Cc(d),d=b,e=pd(b),b=f):(b=D(d),c.push(b),b=I(d),d=null,e=0),f=0;else break;return c}return q.C?b:null},qj=null;function gj(){null==qj&&(qj=dj.a(new xa(null,3,[q.bk,Qg,q.up,Qg,q.ek,Qg],null)));return qj}
var rj=function(){function a(a,b,f){var g=Hc.c(b,f);if(!g&&!(g=Yd(q.ek.a(a).call(null,b),f))&&(g=Rd(f))&&(g=Rd(b)))if(g=pd(f)===pd(b))for(var g=!0,k=0;;)if(g&&k!==pd(f))g=c.b(a,b.a?b.a(k):b.call(null,k),f.a?f.a(k):f.call(null,k)),k+=1;else return g;else return g;else return g}function b(a,b){return c.b(fj(),a,b)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),
sj=function(){function a(a,b){var c=rd.c(q.bk.a(a),b);return z(c)?c:null}function b(a){return c.c(fj(),a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function tj(a,b,c,d){hj.c(a,function(){return yb(b)});hj.c(c,function(){return yb(d)})}
var vj=function uj(b,c,d){var e=yb(d).call(null,b),e=x(x(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(x(e))return e;e=function(){for(var e=sj.a(c);;)if(0<pd(e))uj(b,D(e),d),e=G(e);else return null}();if(x(e))return e;e=function(){for(var e=sj.a(b);;)if(0<pd(e))uj(D(e),c,d),e=G(e);else return null}();return x(e)?e:!1};function wj(a,b,c){c=vj(a,b,c);return x(c)?c:rj.c(a,b)}
var yj=function xj(b,c,d,e,f,g,k){var l=ce.b(function(e,g){var k=K.b(g,0,null);K.b(g,1,null);if(rj.b(yb(d),c,k)){var l;l=(l=null==e)?l:wj(k,D(e),f);l=x(l)?g:e;if(!x(wj(D(l),k,f)))throw Error("Multiple methods in multimethod '"+y.a(b)+"' match dispatch value: "+y.a(c)+" -\x3e "+y.a(k)+" and "+y.a(D(l))+", and neither is preferred");return l}return e},null,yb(e));if(x(l)){if(Hc.c(yb(k),yb(d)))return hj.g(g,td,c,D(I(l))),D(I(l));tj(g,e,k,d);return xj(b,c,d,e,f,g,k)}return null};
function zj(a,b){throw Error("No method in multimethod '"+y.a(a)+"' for dispatch value: "+y.a(b));}function Aj(a,b,c,d,e,f,g,k){this.name=a;this.n=b;this.Ik=c;this.ze=d;this.Cd=e;this.xl=f;this.Fe=g;this.ie=k;this.s=4194305;this.G=256}h=Aj.prototype;h.M=function(){return this[da]||(this[da]=++ga)};function Bj(a,b,c){hj.g(a.Cd,td,b,c);tj(a.Fe,a.Cd,a.ie,a.ze)}
function Cj(a,b){Hc.c(yb(a.ie),yb(a.ze))||tj(a.Fe,a.Cd,a.ie,a.ze);var c=yb(a.Fe).call(null,b);if(x(c))return c;c=yj(a.name,b,a.ze,a.Cd,a.xl,a.Fe,a.ie);return x(c)?c:yb(a.Cd).call(null,a.Ik)}
h.call=function(){var a=null;return a=function(a,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb){switch(arguments.length){case 2:var v=a,v=this,U=v.n.a?v.n.a(c):v.n.call(null,c),w=Cj(this,U);x(w)||zj(v.name,U);return w.a?w.a(c):w.call(null,c);case 3:return v=a,v=this,U=v.n.c?v.n.c(c,d):v.n.call(null,c,d),w=Cj(this,U),x(w)||zj(v.name,U),w.c?w.c(c,d):w.call(null,c,d);case 4:return v=a,v=this,U=v.n.b?v.n.b(c,d,e):v.n.call(null,c,d,e),w=Cj(this,U),x(w)||zj(v.name,U),w.b?w.b(c,d,e):w.call(null,c,d,e);case 5:return v=
a,v=this,U=v.n.g?v.n.g(c,d,e,f):v.n.call(null,c,d,e,f),w=Cj(this,U),x(w)||zj(v.name,U),w.g?w.g(c,d,e,f):w.call(null,c,d,e,f);case 6:return v=a,v=this,U=v.n.d?v.n.d(c,d,e,f,g):v.n.call(null,c,d,e,f,g),w=Cj(this,U),x(w)||zj(v.name,U),w.d?w.d(c,d,e,f,g):w.call(null,c,d,e,f,g);case 7:return v=a,v=this,U=v.n.F?v.n.F(c,d,e,f,g,k):v.n.call(null,c,d,e,f,g,k),w=Cj(this,U),x(w)||zj(v.name,U),w.F?w.F(c,d,e,f,g,k):w.call(null,c,d,e,f,g,k);case 8:return v=a,v=this,U=v.n.ra?v.n.ra(c,d,e,f,g,k,l):v.n.call(null,
c,d,e,f,g,k,l),w=Cj(this,U),x(w)||zj(v.name,U),w.ra?w.ra(c,d,e,f,g,k,l):w.call(null,c,d,e,f,g,k,l);case 9:return v=a,v=this,U=v.n.ta?v.n.ta(c,d,e,f,g,k,l,m):v.n.call(null,c,d,e,f,g,k,l,m),w=Cj(this,U),x(w)||zj(v.name,U),w.ta?w.ta(c,d,e,f,g,k,l,m):w.call(null,c,d,e,f,g,k,l,m);case 10:return v=a,v=this,U=v.n.pa?v.n.pa(c,d,e,f,g,k,l,m,r):v.n.call(null,c,d,e,f,g,k,l,m,r),w=Cj(this,U),x(w)||zj(v.name,U),w.pa?w.pa(c,d,e,f,g,k,l,m,r):w.call(null,c,d,e,f,g,k,l,m,r);case 11:return v=a,v=this,U=v.n.ya?v.n.ya(c,
d,e,f,g,k,l,m,r,s):v.n.call(null,c,d,e,f,g,k,l,m,r,s),w=Cj(this,U),x(w)||zj(v.name,U),w.ya?w.ya(c,d,e,f,g,k,l,m,r,s):w.call(null,c,d,e,f,g,k,l,m,r,s);case 12:return v=a,v=this,U=v.n.za?v.n.za(c,d,e,f,g,k,l,m,r,s,u):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u),w=Cj(this,U),x(w)||zj(v.name,U),w.za?w.za(c,d,e,f,g,k,l,m,r,s,u):w.call(null,c,d,e,f,g,k,l,m,r,s,u);case 13:return v=a,v=this,U=v.n.Aa?v.n.Aa(c,d,e,f,g,k,l,m,r,s,u,p):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p),w=Cj(this,U),x(w)||zj(v.name,U),w.Aa?w.Aa(c,
d,e,f,g,k,l,m,r,s,u,p):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p);case 14:return v=a,v=this,U=v.n.Ba?v.n.Ba(c,d,e,f,g,k,l,m,r,s,u,p,A):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A),w=Cj(this,U),x(w)||zj(v.name,U),w.Ba?w.Ba(c,d,e,f,g,k,l,m,r,s,u,p,A):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A);case 15:return v=a,v=this,U=v.n.Ca?v.n.Ca(c,d,e,f,g,k,l,m,r,s,u,p,A,E):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E),w=Cj(this,U),x(w)||zj(v.name,U),w.Ca?w.Ca(c,d,e,f,g,k,l,m,r,s,u,p,A,E):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,
E);case 16:return v=a,v=this,U=v.n.Da?v.n.Da(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F),w=Cj(this,U),x(w)||zj(v.name,U),w.Da?w.Da(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F);case 17:return v=a,v=this,U=v.n.Ea?v.n.Ea(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B),w=Cj(this,U),x(w)||zj(v.name,U),w.Ea?w.Ea(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B);case 18:return v=a,v=this,
U=v.n.Fa?v.n.Fa(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q),w=Cj(this,U),x(w)||zj(v.name,U),w.Fa?w.Fa(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q);case 19:return v=a,v=this,U=v.n.Ga?v.n.Ga(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C),w=Cj(this,U),x(w)||zj(v.name,U),w.Ga?w.Ga(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C);case 20:return v=a,
v=this,U=v.n.Ha?v.n.Ha(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y),w=Cj(this,U),x(w)||zj(v.name,U),w.Ha?w.Ha(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y):w.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y);case 21:return v=a,v=this,U=v.n.Ia?v.n.Ia(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L):v.n.call(null,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L),w=Cj(this,U),x(w)||zj(v.name,U),w.Ia?w.Ia(c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L):w.call(null,c,d,e,f,g,k,l,m,r,s,u,
p,A,E,F,B,Q,C,Y,L);case 22:return v=a,v=this,U=Jd.f(v.n,c,d,e,f,J([g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb],0)),w=Cj(this,U),x(w)||zj(v.name,U),Jd.f(w,c,d,e,f,J([g,k,l,m,r,s,u,p,A,E,F,B,Q,C,Y,L,lb],0))}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){var b=this.n.a?this.n.a(a):this.n.call(null,a),c=Cj(this,b);x(c)||zj(this.name,b);return c.a?c.a(a):c.call(null,a)};
h.c=function(a,b){var c=this.n.c?this.n.c(a,b):this.n.call(null,a,b),d=Cj(this,c);x(d)||zj(this.name,c);return d.c?d.c(a,b):d.call(null,a,b)};h.b=function(a,b,c){var d=this.n.b?this.n.b(a,b,c):this.n.call(null,a,b,c),e=Cj(this,d);x(e)||zj(this.name,d);return e.b?e.b(a,b,c):e.call(null,a,b,c)};h.g=function(a,b,c,d){var e=this.n.g?this.n.g(a,b,c,d):this.n.call(null,a,b,c,d),f=Cj(this,e);x(f)||zj(this.name,e);return f.g?f.g(a,b,c,d):f.call(null,a,b,c,d)};
h.d=function(a,b,c,d,e){var f=this.n.d?this.n.d(a,b,c,d,e):this.n.call(null,a,b,c,d,e),g=Cj(this,f);x(g)||zj(this.name,f);return g.d?g.d(a,b,c,d,e):g.call(null,a,b,c,d,e)};h.F=function(a,b,c,d,e,f){var g=this.n.F?this.n.F(a,b,c,d,e,f):this.n.call(null,a,b,c,d,e,f),k=Cj(this,g);x(k)||zj(this.name,g);return k.F?k.F(a,b,c,d,e,f):k.call(null,a,b,c,d,e,f)};
h.ra=function(a,b,c,d,e,f,g){var k=this.n.ra?this.n.ra(a,b,c,d,e,f,g):this.n.call(null,a,b,c,d,e,f,g),l=Cj(this,k);x(l)||zj(this.name,k);return l.ra?l.ra(a,b,c,d,e,f,g):l.call(null,a,b,c,d,e,f,g)};h.ta=function(a,b,c,d,e,f,g,k){var l=this.n.ta?this.n.ta(a,b,c,d,e,f,g,k):this.n.call(null,a,b,c,d,e,f,g,k),m=Cj(this,l);x(m)||zj(this.name,l);return m.ta?m.ta(a,b,c,d,e,f,g,k):m.call(null,a,b,c,d,e,f,g,k)};
h.pa=function(a,b,c,d,e,f,g,k,l){var m=this.n.pa?this.n.pa(a,b,c,d,e,f,g,k,l):this.n.call(null,a,b,c,d,e,f,g,k,l),r=Cj(this,m);x(r)||zj(this.name,m);return r.pa?r.pa(a,b,c,d,e,f,g,k,l):r.call(null,a,b,c,d,e,f,g,k,l)};h.ya=function(a,b,c,d,e,f,g,k,l,m){var r=this.n.ya?this.n.ya(a,b,c,d,e,f,g,k,l,m):this.n.call(null,a,b,c,d,e,f,g,k,l,m),s=Cj(this,r);x(s)||zj(this.name,r);return s.ya?s.ya(a,b,c,d,e,f,g,k,l,m):s.call(null,a,b,c,d,e,f,g,k,l,m)};
h.za=function(a,b,c,d,e,f,g,k,l,m,r){var s=this.n.za?this.n.za(a,b,c,d,e,f,g,k,l,m,r):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r),u=Cj(this,s);x(u)||zj(this.name,s);return u.za?u.za(a,b,c,d,e,f,g,k,l,m,r):u.call(null,a,b,c,d,e,f,g,k,l,m,r)};h.Aa=function(a,b,c,d,e,f,g,k,l,m,r,s){var u=this.n.Aa?this.n.Aa(a,b,c,d,e,f,g,k,l,m,r,s):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s),p=Cj(this,u);x(p)||zj(this.name,u);return p.Aa?p.Aa(a,b,c,d,e,f,g,k,l,m,r,s):p.call(null,a,b,c,d,e,f,g,k,l,m,r,s)};
h.Ba=function(a,b,c,d,e,f,g,k,l,m,r,s,u){var p=this.n.Ba?this.n.Ba(a,b,c,d,e,f,g,k,l,m,r,s,u):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u),A=Cj(this,p);x(A)||zj(this.name,p);return A.Ba?A.Ba(a,b,c,d,e,f,g,k,l,m,r,s,u):A.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u)};
h.Ca=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p){var A=this.n.Ca?this.n.Ca(a,b,c,d,e,f,g,k,l,m,r,s,u,p):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p),E=Cj(this,A);x(E)||zj(this.name,A);return E.Ca?E.Ca(a,b,c,d,e,f,g,k,l,m,r,s,u,p):E.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p)};
h.Da=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A){var E=this.n.Da?this.n.Da(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A),F=Cj(this,E);x(F)||zj(this.name,E);return F.Da?F.Da(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A):F.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A)};
h.Ea=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E){var F=this.n.Ea?this.n.Ea(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E),B=Cj(this,F);x(B)||zj(this.name,F);return B.Ea?B.Ea(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E):B.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E)};
h.Fa=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F){var B=this.n.Fa?this.n.Fa(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F),Q=Cj(this,B);x(Q)||zj(this.name,B);return Q.Fa?Q.Fa(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F):Q.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F)};
h.Ga=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B){var Q=this.n.Ga?this.n.Ga(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B),C=Cj(this,Q);x(C)||zj(this.name,Q);return C.Ga?C.Ga(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B):C.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B)};
h.Ha=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q){var C=this.n.Ha?this.n.Ha(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q),Y=Cj(this,C);x(Y)||zj(this.name,C);return Y.Ha?Y.Ha(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q):Y.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q)};
h.Ia=function(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C){var Y=this.n.Ia?this.n.Ia(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):this.n.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C),L=Cj(this,Y);x(L)||zj(this.name,Y);return L.Ia?L.Ia(a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C):L.call(null,a,b,c,d,e,f,g,k,l,m,r,s,u,p,A,E,F,B,Q,C)};function Dj(a){this.Ve=a;this.G=0;this.s=2153775104}Dj.prototype.M=function(){return ja(Bi.f(J([this],0)))};Dj.prototype.K=function(a,b){return ic(b,'#uuid "'+y.a(this.Ve)+'"')};
Dj.prototype.L=function(a,b){return b instanceof Dj&&this.Ve===b.Ve};Dj.prototype.toString=function(){return this.Ve};var Ej=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){throw Error(Jd.c(y,b));}a.u=1;a.m=function(a){D(a);a=G(a);return b(0,a)};a.f=b;return a}();si("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");si("^([-+]?[0-9]+)/([0-9]+)$");si("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");si("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");si("^[0-9A-Fa-f]{2}$");si("^[0-9A-Fa-f]{4}$");
function Fj(a){if(Hc.c(3,pd(a)))return a;if(3<pd(a))return ye.b(a,0,3);if(q.C)for(a=new la(a);;)if(3>a.Lc())a=a.append("0");else return a.toString();else return null}var Gj=function(a,b){return function(c,d){return rd.c(x(d)?b:a,c)}}(new M(null,13,5,vg,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new M(null,13,5,vg,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),qi=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Hj(a){a=parseInt(a,10);return za(isNaN(a))?a:null}function Ij(a,b,c,d){a<=b&&b<=c||Ej.f(null,J([""+y.a(d)+" Failed:  "+y.a(a)+"\x3c\x3d"+y.a(b)+"\x3c\x3d"+y.a(c)],0));return b}
function Jj(a){var b=pi(a);K.b(b,0,null);var c=K.b(b,1,null),d=K.b(b,2,null),e=K.b(b,3,null),f=K.b(b,4,null),g=K.b(b,5,null),k=K.b(b,6,null),l=K.b(b,7,null),m=K.b(b,8,null),r=K.b(b,9,null),s=K.b(b,10,null);if(za(b))return Ej.f(null,J(["Unrecognized date/time syntax: "+y.a(a)],0));a=Hj(c);var b=function(){var a=Hj(d);return x(a)?a:1}(),c=function(){var a=Hj(e);return x(a)?a:1}(),u=function(){var a=Hj(f);return x(a)?a:0}(),p=function(){var a=Hj(g);return x(a)?a:0}(),A=function(){var a=Hj(k);return x(a)?
a:0}(),E=function(){var a=Hj(Fj(l));return x(a)?a:0}(),m=(Hc.c(m,"-")?-1:1)*(60*function(){var a=Hj(r);return x(a)?a:0}()+function(){var a=Hj(s);return x(a)?a:0}());return new M(null,8,5,vg,[a,Ij(1,b,12,"timestamp month field must be in range 1..12"),Ij(1,c,Gj.c?Gj.c(b,0===ve(a,4)&&(0!==ve(a,100)||0===ve(a,400))):Gj.call(null,b,0===ve(a,4)&&(0!==ve(a,100)||0===ve(a,400))),"timestamp day field must be in range 1..last day in month"),Ij(0,u,23,"timestamp hour field must be in range 0..23"),Ij(0,p,59,
"timestamp minute field must be in range 0..59"),Ij(0,A,Hc.c(p,59)?60:59,"timestamp second field must be in range 0..60"),Ij(0,E,999,"timestamp millisecond field must be in range 0..999"),m],null)}
var Kj=dj.a(new xa(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Jj(a),x(b)){a=K.b(b,0,null);var c=K.b(b,1,null),d=K.b(b,2,null),e=K.b(b,3,null),f=K.b(b,4,null),g=K.b(b,5,null),k=K.b(b,6,null);b=K.b(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,f,g,k)-6E4*b)}else b=Ej.f(null,J(["Unrecognized date/time syntax: "+y.a(a)],0));else b=Ej.f(null,J(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new Dj(a):Ej.f(null,J(["UUID literal expects a string as its representation."],
0))},"queue",function(a){return Rd(a)?Of(Jg,a):Ej.f(null,J(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(Rd(a)){var b=[];a=z(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e);b.push(f);e+=1}else if(a=z(a))c=a,Sd(c)?(a=Bc(c),e=Cc(c),c=a,d=pd(a),a=e):(a=D(c),b.push(a),a=I(c),c=null,d=0),e=0;else break;return b}if(Qd(a)){b={};a=z(a);c=null;for(e=d=0;;)if(e<d){var g=c.J(null,e),f=K.b(g,0,null),g=K.b(g,1,null);b[Le(f)]=g;e+=1}else if(a=z(a))Sd(a)?(d=Bc(a),a=Cc(a),c=
d,d=pd(d)):(d=D(a),c=K.b(d,0,null),d=K.b(d,1,null),b[Le(c)]=d,a=I(a),c=null,d=0),e=0;else break;return b}return q.C?Ej.f(null,J(["JS literal expects a vector or map containing only string or unqualified keyword keys"],0)):null}],null));dj.a(null);function Lj(a,b,c,d){this.na=a;this.va=b;this.p=c;this.w=d;this.G=0;this.s=2565220111}h=Lj.prototype;h.P=function(a,b){return rd.c(this.va,b)};h.Q=function(a,b,c){return rd.b(this.va,b,c)};h.K=function(a,b,c){return ti(b,function(){return function(a){return ti(b,zi,""," ","",c,a)}}(this),"#tailrecursion.priority-map {",", ","}",c,this)};h.V=function(){return this.p};h.ea=function(){return pd(this.va)};
h.Jb=function(){if(0===pd(this.va))return null;var a=D(this.na);return new M(null,2,5,vg,[D(nb(a)),mb(a)],null)};h.Kb=function(){if(0===pd(this.va))throw Error("Can't pop empty priority map");var a=D(this.na),b=nb(a),c=D(b),a=mb(a);return Hc.c(pd(b),1)?new Lj(ud.c(this.na,a),ud.c(this.va,c),this.p,null):new Lj(td.b(this.na,a,Md.c(b,c)),ud.c(this.va,c),this.p,null)};
h.Dc=function(){var a=this,b=this;return z(function(){return function(a){return function e(b){return new Ne(null,function(a){return function(){for(var c=b;;){var l=z(c);if(l){var m=l,r=D(m),s=K.b(r,0,null),u=K.b(r,1,null);if(l=z(function(a,b,c,e,f,g,k){return function L(l){return new Ne(null,function(a,b,c){return function(){for(;;){var a=z(l);if(a){if(Sd(a)){var b=Bc(a),e=pd(b),f=Re(e);a:{for(var g=0;;)if(g<e){var k=Va.c(b,g);f.add(new M(null,2,5,vg,[k,c],null));g+=1}else{b=!0;break a}b=void 0}return b?
Ue(f.oa(),L(Cc(a))):Ue(f.oa(),null)}f=D(a);return kd(new M(null,2,5,vg,[f,c],null),L(G(a)))}return null}}}(a,b,c,e,f,g,k),null,null)}}(c,r,s,u,m,l,a)(u)))return Ye.c(l,e(G(c)));c=G(c)}else return null}}}(a),null,null)}}(b)(cc(a.na))}())};h.M=function(){var a=this.w;return null!=a?a:this.w=a=ze(this)};h.L=function(a,b){return Nb(this.va,b)};h.ba=function(){return md(Mj,this.p)};
h.gd=function(a,b){var c=this.va.c?this.va.c(b,q.sh):this.va.call(null,b,q.sh);if(Hc.c(c,q.sh))return this;var d=this.na.a?this.na.a(c):this.na.call(null,c);return Hc.c(pd(d),1)?new Lj(ud.c(this.na,c),ud.c(this.va,b),this.p,null):new Lj(td.b(this.na,c,Md.c(d,b)),ud.c(this.va,b),this.p,null)};
h.Ib=function(a,b,c){a=rd.b(this.va,b,null);if(x(a)){if(Hc.c(a,c))return this;var d=rd.c(this.na,a);return Hc.c(pd(d),1)?new Lj(td.b(ud.c(this.na,a),c,od.c(rd.b(this.na,c,fi),b)),td.b(this.va,b,c),this.p,null):new Lj(td.f(this.na,a,Md.c(rd.c(this.na,a),b),J([c,od.c(rd.b(this.na,c,fi),b)],0)),td.b(this.va,b,c),this.p,null)}return new Lj(td.b(this.na,c,od.c(rd.b(this.na,c,fi),b)),td.b(this.va,b,c),this.p,null)};h.ed=function(a,b){return Yd(this.va,b)};
h.Z=function(){var a=this,b=this;return z(function(){return function(a){return function e(b){return new Ne(null,function(a){return function(){for(var c=b;;){var l=z(c);if(l){var m=l,r=D(m),s=K.b(r,0,null),u=K.b(r,1,null);if(l=z(function(a,b,c,e,f,g,k){return function L(l){return new Ne(null,function(a,b,c){return function(){for(;;){var a=z(l);if(a){if(Sd(a)){var b=Bc(a),e=pd(b),f=Re(e);a:{for(var g=0;;)if(g<e){var k=Va.c(b,g);f.add(new M(null,2,5,vg,[k,c],null));g+=1}else{b=!0;break a}b=void 0}return b?
Ue(f.oa(),L(Cc(a))):Ue(f.oa(),null)}f=D(a);return kd(new M(null,2,5,vg,[f,c],null),L(G(a)))}return null}}}(a,b,c,e,f,g,k),null,null)}}(c,r,s,u,m,l,a)(u)))return Ye.c(l,e(G(c)));c=G(c)}else return null}}}(a),null,null)}}(b)(a.na)}())};h.$=function(a,b){return new Lj(this.na,this.va,b,this.w)};h.W=function(a,b){return Rd(b)?fb(this,Va.c(b,0),Va.c(b,1)):ce.b(Ta,this,b)};
h.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.Q(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};h.a=function(a){return this.P(null,a)};h.c=function(a,b){return this.Q(null,a,b)};h.vf=function(a,b){return(x(b)?z:Ee).call(null,this)};
h.wf=function(a,b,c){var d=this,e=x(c)?li.b(this.na,te,b):mi.b(this.na,fe,b);return z(function(){return function(a,b){return function l(c){return new Ne(null,function(a,b){return function(){for(var d=c;;){var e=z(d);if(e){var f=e,g=D(f),F=K.b(g,0,null),B=K.b(g,1,null);if(e=z(function(a,b,c,d,e,f,g,l){return function vc(m){return new Ne(null,function(a,b,c){return function(){for(;;){var a=z(m);if(a){if(Sd(a)){var b=Bc(a),d=pd(b),e=Re(d);a:{for(var f=0;;)if(f<d){var g=Va.c(b,f);e.add(new M(null,2,5,
vg,[g,c],null));f+=1}else{b=!0;break a}b=void 0}return b?Ue(e.oa(),vc(Cc(a))):Ue(e.oa(),null)}e=D(a);return kd(new M(null,2,5,vg,[e,c],null),vc(G(a)))}return null}}}(a,b,c,d,e,f,g,l),null,null)}}(d,g,F,B,f,e,a,b)(B)))return Ye.c(e,l(G(d)));d=G(d)}else return null}}}(a,b),null,null)}}(e,d)(e)}())};h.uf=function(a,b){return nb(b)};h.tf=function(){return Ic};var Mj=new Lj(Zh(),Qg,Qg,null),Nj=""+y.a("tailrecursion.priority-map");rd.c(yb(Kj),Nj);
hj.g(Kj,td,Nj,function(a){return Qd(a)?Of(Mj,a):Ej.f(null,J(["Priority map literal expects a map for its elements."],0))});var Oj=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=z(a);for(var b=Mj;;)if(a){var e=I(I(a)),b=td.b(b,D(a),D(I(a)));a=e}else return b}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();var Pj=dj.a(0);function Qj(a,b){return function d(b){var f=Ld(b);return x(f)?new Ne(null,function(f){return function(){return kd(f,d(Of(null==b?null:tb(b),x(tf.a?tf.a(f):tf.call(null,f))?a.a?a.a(f):a.call(null,f):null)))}}(f,f),null,null):null}(od.c(Jg,b))}
function Rj(a){for(;;){var b=D(Ld(a));if(x(b)){var c=b,d=null==a?null:tb(a),e=c.prev,f=function(){var a=c.Re;return x(a)?a.j?a.j():a.call(null):c.state}(),g=qf.c(f,e);g&&(c.prev=f,lc(c,e,f));a=g?ce.b(function(){return function(a,b){return td.b(a,b,b.ub)}}(a,d,e,f,g,c,b),d,c.vb):d}else break}}function Sj(a){return x(Tj.a?Tj.a(a):Tj.call(null,a))?yb(a):a}function Uj(){return hj.c(Pj,Vc)}function Vj(a){x(null)?hj.g(null,td,a,a.ub):Rj(Oj.f(J([a,a.ub],0)));return a}
var Wj=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){var e=K.b(b,0,null),f=a.Jd;a.Jd=ug;a.update=null;a.Re=null;x(e)||(a.Sb=Qg);for(var e=z(f),f=null,g=0,k=0;;)if(k<g){var l=f.J(null,k);x(Tj.a?Tj.a(l):Tj.call(null,l))&&(l.vb=Md.c(l.vb,a));k+=1}else if(e=z(e))f=e,Sd(f)?(e=Bc(f),g=Cc(f),f=e,l=pd(e),e=g,g=l):(l=D(f),x(Tj.a?Tj.a(l):Tj.call(null,l))&&(l.vb=Md.c(l.vb,a)),e=I(f),f=null,g=0),k=0;else return null}
a.u=1;a.m=function(a){var d=D(a);a=G(a);return b(d,a)};a.f=b;return a}(),Xj=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){var e=K.b(b,0,null),f=K.b(b,1,null);Wj.f(a,J([!0],0));if(x(e)){a.Jd=od.c(Ag(f),e);for(var g=z(a.Jd),k=null,l=0,m=0;;)if(m<l){var r=k.J(null,m);if(x(Tj.a?Tj.a(r):Tj.call(null,r))&&(r.vb=od.c(r.vb,a),r.ub>a.ub))for(var r=z(Qj(function(){return function(a){return a.vb}}(g,k,l,m,r,
b,e,f),r)),s=null,u=0,p=0;;)if(p<u)s.J(null,p).ub=Uj(),p+=1;else if(r=z(r))s=r,Sd(s)?(r=Bc(s),p=Cc(s),s=r,u=pd(r),r=p):(D(s).ub=Uj(),r=I(s),s=null,u=0),p=0;else break;m+=1}else if(s=z(g)){r=s;if(Sd(r))g=Bc(r),m=Cc(r),k=g,l=pd(g),g=m;else{u=D(r);if(x(Tj.a?Tj.a(u):Tj.call(null,u))&&(u.vb=od.c(u.vb,a),u.ub>a.ub))for(g=z(Qj(function(){return function(a){return a.vb}}(g,k,l,m,u,r,s,b,e,f),u)),k=null,m=l=0;;)if(m<l)k.J(null,m).ub=Uj(),m+=1;else if(g=z(g))k=g,Sd(k)?(g=Bc(k),m=Cc(k),k=g,l=pd(g),g=m):(D(k).ub=
Uj(),g=I(k),k=null,l=0),m=0;else break;g=I(r);k=null;l=0}m=0}else break;a.Re=function(b){return function(){return a.state=b(a.Jd)}}(function(){return function(a){return Jd.c(Sj(Ld(a)),zf.c(Sj,null==a?null:tb(a)))}}(b,e,f),b,e,f)}return Vj(a)}a.u=1;a.m=function(a){var d=D(a);a=G(a);return b(d,a)};a.f=b;return a}();function Yj(a,b,c,d,e,f,g,k,l){this.p=a;this.state=b;this.ub=c;this.prev=d;this.Jd=e;this.vb=f;this.Re=g;this.Sb=k;this.update=l;this.G=98306;this.s=2147647488}h=Yj.prototype;
h.yf=function(a,b,c){a=z(this.Sb);for(var d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f),k=K.b(g,0,null),g=K.b(g,1,null);g.g?g.g(k,this,b,c):g.call(null,k,this,b,c);f+=1}else if(a=z(a))Sd(a)?(d=Bc(a),a=Cc(a),k=d,e=pd(d),d=k):(d=D(a),k=K.b(d,0,null),g=K.b(d,1,null),g.g?g.g(k,this,b,c):g.call(null,k,this,b,c),a=I(a),d=null,e=0),f=0;else return null};h.xf=function(a,b,c){return this.Sb=td.b(this.Sb,b,c)};h.kh=function(a,b){return ej(this,b.a?b.a(this.state):b.call(null,this.state))};
h.lh=function(a,b,c){return ej(this,b.c?b.c(this.state,c):b.call(null,this.state,c))};h.mh=function(a,b,c,d){return ej(this,b.b?b.b(this.state,c,d):b.call(null,this.state,c,d))};h.nh=function(a,b,c,d,e){return ej(this,Jd.d(b,this.state,c,d,e))};h.ih=function(a,b){if(x(Zj.a?Zj.a(this):Zj.call(null,this)))this.update.call(null,b);else if(x(ak.a?ak.a(this):ak.call(null,this)))this.state=b,Vj(this);else if(q.C)throw Error("can't swap! or reset! formula cell");return this.state};h.me=function(){return this.state};
h.V=function(){return this.p};h.K=function(a,b){return ui.f(b,J(["#\x3cCell: ",Bi.f(J([this.state],0)),"\x3e"],0))};function Tj(a){return Hc.c(Fa(a),Yj)?a:null}function Zj(a){var b=Tj(a);return x(x(b)?a.update:b)?a:null}function ak(a){var b=Tj(a);x(b)&&(b=Tj(a),b=za(x(x(b)?a.Re:b)?a:null));return x(b)?a:null}function bk(a){return Xj(new Yj(Qg,a,Uj(),a,ug,fi,null,Qg,null))};var ck=function(){function a(a,b){return Jd.c(y,Cf(1,Ff.c(Ef.a(a),b)))}function b(a){return Jd.c(y,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function dk(a,b){if(0>=b||b>=2+pd(a))return od.c(Ag(kd("",zf.c(y,z(a)))),"");if(x(Hc.c?Hc.c(1,b):Hc.call(null,1,b)))return new M(null,1,5,vg,[a],null);if(x(Hc.c?Hc.c(2,b):Hc.call(null,2,b)))return new M(null,2,5,vg,["",a],null);var c=b-2;return od.c(Ag(kd("",Cg.b(Ag(zf.c(y,z(a))),0,c))),ye.c(a,c))}
var ek=function(){function a(a,b,c){if(Hc.c(""+y.a(b),"/(?:)/"))b=dk(a,c);else if(1>c)b=Ag((""+y.a(a)).split(b));else a:{for(var g=c,k=ug;;){if(Hc.c(g,1)){b=od.c(k,a);break a}var l=ri(b,a);if(x(l)){var m=l,l=a.indexOf(m),m=a.substring(l+pd(m)),g=g-1,k=od.c(k,a.substring(0,l));a=m}else{b=od.c(k,a);break a}}b=void 0}if(Hc.c(0,c))a:{for(c=b;;)if(Hc.c("",Ld(c)))c=null==c?null:tb(c);else break a;c=void 0}else c=b;return c}function b(a,b){return c.b(a,b,0)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}();var fk=za(window.Node),gk=za(fk)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(q.C)throw b;return null}},hk=za(fk)?Rd:function(a){try{return Rd(a)}catch(b){if(b instanceof Error)return null;if(q.C)throw b;return null}},ik=za(fk)?Wd:function(a){try{return Wd(a)}catch(b){if(b instanceof Error)return null;if(q.C)throw b;return null}},sa=function(a){var b=console;return x(x(b)?console.log:b)?console.log(a):null},jk=function(){function a(a,
b){return window.setTimeout(a,b)}function b(a){return c.c(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),lk=function kk(b){return Hf.c(function(b){var d;d=ik.a?ik.a(b):ik.call(null,b);d=x(d)?d:hk.a?hk.a(b):hk.call(null,b);return x(d)?kk(b):new M(null,1,5,vg,[b],null)},b)};
function mk(a,b){return a instanceof Element?jk.a(function d(){return x(document.documentElement.contains(a))?b.j?b.j():b.call(null):jk.c(d,20)}):b.j?b.j():b.call(null)}
function nk(a){var b=K.b(a,0,null),c=xe(a),d=vf.c(Je,D),e=function(a){return function(b){return zf.c(Ag,ji(a,Pf.c(2,b)))}}(d,a,b,c,a),d=function(a){return function(b){return Hf.c(tf,Df(a,Pf.g(2,2,ug,b)))}}(d,e,a,b,c,a);return Qd(b)?new M(null,2,5,vg,[b,lk(c)],null):b instanceof Ie?new M(null,2,5,vg,[Of(Qg,e(a)),lk(d(a))],null):q.C?new M(null,2,5,vg,[Qg,lk(a)],null):null}
function ok(a,b){function c(a,b){var c;c=Le(b);var d;a:{for(d=c;;){var e=I(d);if(null!=e)d=e;else{d=D(d);break a}}d=void 0}c=Hc.c("\x3d",d)?c.slice(0,-1):c;d=c.substr(0,3);return Me.c(Ke(b),Hc.c(a,d)?c.substr(3):c)}for(var d=wf.c(c,"do-"),e=wf.c(c,"on-"),f=dj.a(Qg),g=dj.a(Qg),k=function(){return function(a,b){return ck.c(" ",Of(hi(ek.c(a,/ /)),ek.c(b,/ /)))}}(c,d,e,f,g),l=z(b),m=null,r=0,s=0;;)if(s<r){var u=m.J(null,s),p=K.b(u,0,null),u=K.b(u,1,null);x(Tj(u))?hj.g(f,td,d.a?d.a(p):d.call(null,p),u):
Hd(u)?hj.g(g,td,e.a?e.a(p):e.call(null,p),u):q.C&&(pk.b?pk.b(a,d.a?d.a(p):d.call(null,p),u):pk.call(null,a,d.a?d.a(p):d.call(null,p),u));s+=1}else if(l=z(l))Sd(l)?(r=Bc(l),l=Cc(l),m=r,r=pd(r)):(r=D(l),m=K.b(r,0,null),r=K.b(r,1,null),x(Tj(r))?hj.g(f,td,d.a?d.a(m):d.call(null,m),r):Hd(r)?hj.g(g,td,e.a?e.a(m):e.call(null,m),r):q.C&&(pk.b?pk.b(a,d.a?d.a(m):d.call(null,m),r):pk.call(null,a,d.a?d.a(m):d.call(null,m),r)),l=I(l),m=null,r=0),s=0;else break;z(yb(f))&&setTimeout(function(b,c,d,e,f,g){return function(){for(var k=
z(yb(e)),l=null,m=0,p=0;;)if(p<m){var r=l.J(null,p),s=K.b(r,0,null),u=K.b(r,1,null);pk.b?pk.b(a,s,yb(u)):pk.call(null,a,s,yb(u));ij(u,kj.j(),function(b,c,d,e,f,g){return function(b,c,d,e){return pk.b?pk.b(a,g,e):pk.call(null,a,g,e)}}(k,l,m,p,r,s,u,b,c,d,e,f,g));p+=1}else{var vc=z(k);if(vc){r=vc;if(Sd(r))k=Bc(r),p=Cc(r),l=k,m=pd(k),k=p;else{var ee=D(r),s=K.b(ee,0,null),u=K.b(ee,1,null);pk.b?pk.b(a,s,yb(u)):pk.call(null,a,s,yb(u));ij(u,kj.j(),function(b,c,d,e,f,g){return function(b,c,d,e){return pk.b?
pk.b(a,g,e):pk.call(null,a,g,e)}}(k,l,m,p,ee,s,u,r,vc,b,c,d,e,f,g));k=I(r);l=null;m=0}p=0}else return null}}}(c,d,e,f,g,k),0);z(yb(g))&&setTimeout(function(b,c,d,e,f){return function(){for(var b=z(yb(f)),c=null,d=0,e=0;;)if(e<d){var g=c.J(null,e),k=K.b(g,0,null),g=K.b(g,1,null);qk.b?qk.b(a,k,g):qk.call(null,a,k,g);e+=1}else if(b=z(b))Sd(b)?(c=Bc(b),b=Cc(b),k=c,d=pd(c),c=k):(c=D(b),k=K.b(c,0,null),g=K.b(c,1,null),qk.b?qk.b(a,k,g):qk.call(null,a,k,g),b=I(b),c=null,d=0),e=0;else return null}}(c,d,e,
f,g,k),0);return a}var rk=za(fk)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(q.C)throw c;return null}};function sk(a,b){jQuery(a).empty();return tk.c?tk.c(a,Pd(b)?b:new M(null,1,5,vg,[b],null)):tk.call(null,a,Pd(b)?b:new M(null,1,5,vg,[b],null))}
function tk(a,b){var c=K.b(b,0,null),d=xe(b);if(x(Tj(c)))sk(a,yb(c)),ij(c,kj.j(),function(){return function(b,c,d,e){return sk(a,e)}}(b,c,d,b));else for(var c=z(yf(function(){return function(a){return"string"===typeof a?uk.a?uk.a(a):uk.call(null,a):x(gk.a?gk.a(a):gk.call(null,a))?a:null}}(b,c,d,b),lk(b))),d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f);rk.c?rk.c(a,g):rk.call(null,a,g);f+=1}else if(c=z(c))d=c,Sd(d)?(c=Bc(d),f=Cc(d),d=c,e=pd(c),c=f):(c=D(d),rk.c?rk.c(a,c):rk.call(null,a,c),c=I(d),d=null,
e=0),f=0;else break;return a}h=Element.prototype;h.call=function(){function a(a,d){var e=null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,0,e)}function b(a,b){var e=nk(b),f=K.b(e,0,null),e=K.b(e,1,null);x(this.Tf)?this.Tf(f,e):(ok(this,f),tk(this,e));return this}a.u=1;a.m=function(a){D(a);a=G(a);return b(0,a)};a.f=b;return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ia(b)))};
h.c=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nk(a);a=K.b(b,0,null);b=K.b(b,1,null);x(this.Tf)?this.Tf(a,b):(ok(this,a),tk(this,b));return this}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();h.ca=!0;h.K=function(a,b){return ui.f(b,J(["#\x3cElement: ",this.tagName,"\x3e"],0))};
function vk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){var c=document.getElementsByTagName(a)[0],f=document.createElement(a);x(c)&&c.parentNode.replaceChild(f,c);return Jd.c(f,b)}b.u=0;b.m=function(a){a=z(a);return c(a)};b.f=c;return b}()}
function xk(a){return function(){function b(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Jd.c(document.createElement(a),b)}b.u=0;b.m=function(a){a=z(a);return c(a)};b.f=c;return b}()}
var yk=vk("body"),zk=vk("head"),Ak=vk("html"),N=xk("a"),O=xk("br"),Bk=xk("button"),Ck=xk("canvas"),Dk=xk("code"),P=xk("div"),Ek=xk("dl"),R=xk("dt"),Fk=xk("h2"),S=xk("h3"),V=xk("h4"),X=xk("img"),Z=xk("li"),Gk=xk("link"),Hk=xk("pre"),dl=xk("script"),el=xk("section"),fl=xk("span"),gl=xk("ul");function uk(a){return document.createTextNode(a)}var hl=dj.a(!1),il=dj.a(ug);function jl(a){x(yb(hl))?setTimeout(a,0):hj.b(il,od,a)}
function kl(){return setTimeout(function(){jQuery("body").on("submit",function(a){var b=jQuery(a.target),c=b.attr("action"),b=x(c)?c:b.attr("method");return x(b)?null:a.preventDefault()});ej(hl,!0);for(var a=z(yb(il)),b=null,c=0,d=0;;)if(d<c){var e=b.J(null,d);e.j?e.j():e.call(null);d+=1}else if(a=z(a))b=a,Sd(b)?(a=Bc(b),c=Cc(b),b=a,e=pd(a),a=c,c=e):(e=D(b),e.j?e.j():e.call(null),a=I(b),b=null,c=0),d=0;else return null},0)}
var ll=function(){function a(a,b){return a.val(""+y.a(b))}function b(a){return a.val()}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),ml=function(){function a(a,b){return a.prop("checked",Xd(b))}function b(a){return a.is(":checked")}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+
arguments.length);};c.a=b;c.c=a;return c}(),pk=function(){var a=dj.a(Qg),b=dj.a(Qg),c=dj.a(Qg),d=dj.a(Qg),e=rd.b(new xa(null,1,[q.Bh,q.md],null),q.nk,gj());return new Aj("do!",function(){return function(a,b){return b}}(a,b,c,d,e),q.md,e,a,b,c,d)}();Bj(pk,q.md,function(a,b,c){return pk.b?pk.b(a,q.wh,new Ug([b,c])):pk.call(null,a,q.wh,new Ug([b,c]))});
Bj(pk,q.$o,function(){function a(a,d,e){var f=null;2<arguments.length&&(f=J(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,0,f)}function b(a,b,e){a=jQuery(a);return Jd.b(Hc.c("checkbox",a.attr("type"))?ml:ll,a,e)}a.u=2;a.m=function(a){var d=D(a);a=I(a);D(a);a=G(a);return b(d,0,a)};a.f=b;return a}());
Bj(pk,q.wh,function(a,b,c){a=jQuery(a);c=z(c);b=null;for(var d=0,e=0;;)if(e<d){var f=b.J(null,e),g=K.b(f,0,null),f=K.b(f,1,null),g=Le(g);Hc.c(!1,f)?a.removeAttr(g):a.attr(g,Hc.c(!0,f)?g:f);e+=1}else if(c=z(c))Sd(c)?(g=Bc(c),c=Cc(c),b=g,d=g=pd(g)):(b=D(c),g=K.b(b,0,null),f=K.b(b,1,null),b=Le(g),Hc.c(!1,f)?a.removeAttr(b):a.attr(b,Hc.c(!0,f)?b:f),c=I(c),b=null,d=0),e=0;else return null});
Bj(pk,q.e,function(a,b,c){a=jQuery(a);b=function(){return function(a){var b;a:{var c=Ef.a(!0);b=nc(Qg);a=z(a);for(c=z(c);;)if(a&&c)b=$e.b(b,D(a),D(c)),a=I(a),c=I(c);else{b=sc(b);break a}b=void 0}return b}}(a);c=Qd(c)?c:b("string"===typeof c?c.split(/\s+/):z(c));c=z(c);for(var d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f);b=K.b(g,0,null);g=K.b(g,1,null);a.toggleClass(Le(b),Xd(g));f+=1}else if(c=z(c))Sd(c)?(d=Bc(c),c=Cc(c),b=d,e=pd(d),d=b):(d=D(c),b=K.b(d,0,null),g=K.b(d,1,null),a.toggleClass(Le(b),Xd(g)),
c=I(c),d=null,e=0),f=0;else return null});Bj(pk,q.bq,function(a,b,c){a=jQuery(a);c=z(c);for(var d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f);b=K.b(g,0,null);g=K.b(g,1,null);a.css(Le(b),""+y.a(g));f+=1}else if(c=z(c))Sd(c)?(d=Bc(c),c=Cc(c),b=d,e=pd(d),d=b):(d=D(c),b=K.b(d,0,null),g=K.b(d,1,null),a.css(Le(b),""+y.a(g)),c=I(c),d=null,e=0),f=0;else return null});Bj(pk,q.cq,function(a,b,c){return jQuery(a).toggle(Xd(c))});Bj(pk,q.dq,function(a,b,c){return x(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
Bj(pk,q.fq,function(a,b,c){return x(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});Bj(pk,q.xh,function(a,b,c){return setTimeout(function(){return x(c)?jQuery(a).focus():jQuery(a).focusout()},0)});Bj(pk,q.zh,function(a){return jQuery(a).select()});Bj(pk,q.gq,function(a,b,c){return x(c)?(pk.b?pk.b(a,q.xh,c):pk.call(null,a,q.xh,c),pk.b?pk.b(a,q.zh,c):pk.call(null,a,q.zh,c)):null});Bj(pk,q.hq,function(a,b,c){return jQuery(a).text(""+y.a(c))});Bj(pk,q.iq,function(a,b,c){return jQuery(a).html(c)});
Bj(pk,q.jq,function(a,b,c){return x(c)?(b=jQuery("body,html"),a=jQuery(a),b.animate(oj(new xa(null,1,[q.kq,a.offset().top],null)))):null});var qk=function(){var a=dj.a(Qg),b=dj.a(Qg),c=dj.a(Qg),d=dj.a(Qg),e=rd.b(new xa(null,1,[q.Bh,q.md],null),q.nk,gj());return new Aj("on!",function(){return function(a,b){return b}}(a,b,c,d,e),q.md,e,a,b,c,d)}();jQuery.Event.prototype.me=function(){return jQuery(this.target).val()};Bj(qk,q.md,function(a,b,c){return mk(a,function(){return jQuery(a).on(Le(b),c)})});var nl=bk("tired"),ol=function(a){return function(){function b(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)}function c(b){return Xj.f(bk.a?bk.a(q.fk):bk.call(null,q.fk),J([a,b],0))}b.u=0;b.m=function(a){a=z(a);return c(a)};b.f=c;return b}()}(function(a){return"img/"+y.a(a)+".png"}).call(null,nl);(function pl(b,c,d){function e(g,l){if(!c[g]){if(!b[g]){var m="function"==typeof require&&require;if(!l&&m)return m(g,!0);if(f)return f(g,!0);throw Error("Cannot find module '"+g+"'");}m=c[g]={S:{}};b[g][0].call(m.S,function(c){var d=b[g][1][c];return e(d?d:c)},m,m.S,pl,b,c,d)}return c[g].S}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e})({1:[function(a){var b={Zh:!0,navigator:navigator,window:window,document:document,ajax:function(a){var b=new XMLHttpRequest;b.open("GET",
a,!1);b.overrideMimeType&&b.overrideMimeType("text/plain");b.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");b.send(null);if(200!==b.status&&0!==b.status)throw"XMLHttpRequest failed, status code "+b.status;return b.responseText}};window.gf=a("./src/")(b)},{"./src/":27}],2:[function(a,b){b.S={name:"Processing.js",version:"1.4.8",dependencies:{argv:"~0.0.2",browserify:"~2.18.1",express:"~3.3.3","node-minify":"~0.7.3",nunjucks:"~0.1.9",open:"0.0.3"},devDependencies:{grunt:"~0.4.1",
"grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3"}}},{}],3:[function(a,b){b.S=function(a){if(a instanceof Array){var b=-1;this.xe=function(){return++b<a.length};this.next=function(){return a[b]}}else{if(a.zd instanceof Function)return a.zd();throw"Unable to iterate: "+a;}}},{}],4:[function(a,b){b.S={ce:0,de:1,Kn:2,cn:3,Am:4,Vl:5,Pl:6,An:7,Bn:8,Rm:9,Sm:10,Tm:11,qm:12,pn:13,hn:14,gn:15,en:16,qn:17,xn:18,yn:19,zn:20,En:21,Fn:22,Gn:23,Dn:24,Tl:25,Rl:26,Ql:27,nm:3,hm:4,fm:5,em:6,nn:28,ln:29,kn:30,jn:31,
ym:32,rm:33,pm:34,Xl:35,Cn:36,Xm:1,Hm:1,Rg:2,Ym:2,Um:2,Zm:0,om:0,Wm:0,Jn:1,Km:2,Jm:3,xm:1E-4,Lm:3.4028235E38,Nm:-3.4028235E38,Mm:2147483647,Dg:-2147483648,PI:Math.PI,Tb:2*Math.PI,tn:2*Math.PI,Cm:Math.PI/2,vn:Math.PI/3,bn:Math.PI/4,gm:Math.PI/180,Kg:180/Math.PI,In:" \t\n\r\f\u00a0",RGB:1,Wc:2,Vd:3,ALPHA:4,am:5,wn:0,sn:1,Im:2,Bm:3,Gi:11,ij:12,INVERT:13,qj:14,vj:15,Fj:16,Vi:17,Ni:18,REPLACE:0,BLEND:1,mg:2,Pg:4,Bg:8,sg:16,tg:32,wg:64,Eg:128,Ng:256,Hg:512,yg:1024,Og:2048,ug:4096,qg:8192,T:4278190080,ia:16711680,
ha:65280,ga:255,cm:0,Vm:2,$m:3,uj:2,POINTS:2,Cg:4,LINES:4,Gj:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,Bj:16,ae:16,Jg:17,Yc:20,bf:21,Lg:30,vg:31,Ei:32,Ej:40,Hi:41,xg:0,$d:1,hj:3,be:0,Rd:1,rg:2,Ze:3,$l:4,OPEN:1,Sd:2,yb:0,jc:1,Zc:2,Zl:2,Sa:3,im:3,Yl:3,og:0,Qg:101,pg:102,Pm:1,Qm:1,Ag:2,mj:4,Cj:5,hf:"butt",Mg:"round",Aj:"square",$e:"miter",Fi:"bevel",Sl:0,jm:1,mn:3,Wl:8,rn:9,wm:10,dn:13,zm:27,Mi:127,Ki:65535,Dj:16,Li:17,Di:18,Ji:20,sj:33,rj:34,Ui:35,jj:36,Xc:37,Hj:38,kc:39,Qi:40,Wi:112,$i:113,aj:114,
bj:115,cj:116,dj:117,ej:118,fj:119,gj:120,Xi:121,Yi:122,Zi:123,pj:144,lj:157,kj:155,Ul:"default",bm:"crosshair",Dm:"pointer",Om:"move",un:"text",Hn:"wait",nj:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d'), auto",Pi:1,Si:-1,Ti:2,um:3,Oi:4,Ri:-4,tm:5,lm:-5,mm:6,vm:-6,sm:7,km:-7,Em:10,jb:720,wj:15,Zd:32768,yj:32767,xj:9,zj:1,Fg:0,Gg:1,oj:2,Wd:8}},{}],5:[function(a,b){b.S=function(a){function b(){}function e(a,b,c){if(a.hasOwnProperty(b)&&"function"===
typeof a[b]){var d=a[b];if("$overloads"in d)d.Vc=c;else if("$overloads"in c||d.length!==c.length){var e;"$overloads"in c?(e=c.hc.slice(0),e[d.length]=d,d=c.Vc):(e=[],e[c.length]=c,e[d.length]=d);var f=function(){return(f.hc[arguments.length]||("$methodArgsIndex"in f&&arguments.length>f.Ac?f.hc[f.Ac]:null)||f.Vc).apply(this,arguments)};f.hc=e;"$methodArgsIndex"in c&&(f.Ac=c.Ac);f.Vc=d;f.name=b;a[b]=f}}else a[b]=c}function f(a,b){function c(d){g.defineProperty(a,d,{get:function(){return b[d]},set:function(a){b[d]=
a},enumerable:!0})}var d=[],f;for(f in b)"function"===typeof b[f]?e(a,f,b[f]):"$"===f.charAt(0)||f in a||d.push(f);for(;0<d.length;)c(d.shift());a.Ol=b}b.prototype=a.PConstants;var g=new b;Object.keys(a).forEach(function(b){g[b]=a[b]});g.defineProperty=function(a,b,c){"defineProperty"in Object?Object.defineProperty(a,b,c):(c.hasOwnProperty("get")&&a.__defineGetter__(b,c.get),c.hasOwnProperty("set")&&a.__defineSetter__(b,c.set))};g.Lr=function(a){for(var b=[a],c=a.Ci;c;c=c.Ci)f(c,a),b.push(c),a=c;
for(;0<b.length;)b.pop().Nl=a};g.Nr=function(a,b){f(a,b)};g.Mr=function(a,b){f(a,b)};g.ao=function(a,b,c,d){var e=a[b];if(e||d){var f=c.length;if("$overloads"in e)e.hc[f]=c;else{var g=function(){return(g.hc[arguments.length]||("$methodArgsIndex"in g&&arguments.length>g.Ac?g.hc[g.Ac]:null)||g.Vc).apply(this,arguments)},A=[];e&&(A[e.length]=e);A[f]=c;g.hc=A;g.Vc=e||c;d&&(g.Ac=f);g.name=b;a[b]=g}}else a[b]=c};g.Fk=function(a,b){var c=null,d=null;"string"===typeof a&&("boolean"===a?d=!1:("string"!==typeof a?
0:-1!=="byte int char color float long double".split(" ").indexOf(a))&&(d=0));if("number"===typeof b[0]){var e=0|b[0];if(1>=b.length){c=[];c.length=e;for(var f=0;f<e;++f)c[f]=d}else for(c=[],d=b.slice(1),f=0;f<e;++f)c.push(g.Fk(a,d))}return c};g.defineProperty(g,"screenWidth",{get:function(){return window.innerWidth}});g.defineProperty(g,"screenHeight",{get:function(){return window.innerHeight}});return g}},{}],6:[function(a,b){b.S=function(a,b){function e(){g.removeEventListener("DOMContentLoaded",
e,!1);processingInstances=[];a.Vk=processingInstances;for(var b=g.getElementsByTagName("canvas"),d,f=0,k=b.length;f<k;f++){var l=b[f].getAttribute("data-processing-sources");null===l&&(l=b[f].getAttribute("data-src"),null===l&&(l=b[f].getAttribute("datasrc")));if(l){d=l.split(/\s+/g);for(l=0;l<d.length;)d[l]?l++:d.splice(l,1);s(b[f],d)}}b=g.getElementsByTagName("script");k=[];for(f=b.length-1;0<=f;f--)k.push(b[f]);f=0;for(l=k.length;f<l;f++)if(d=k[f],d.getAttribute&&(b=d.getAttribute("type"))&&("text/processing"===
b.toLowerCase()||"application/processing"===b.toLowerCase())){var m=d.getAttribute("data-processing-target"),b=void 0;if(m)b=g.getElementById(m);else{for(m=d.nextSibling;m&&1!==m.nodeType;)m=m.nextSibling;m&&"canvas"===m.nodeName.toLowerCase()&&(b=m)}b&&(d.getAttribute("src")?(d=d.getAttribute("src").split(/\s+/),s(b,d)):(d=d.textContent||d.text,new a(b,d)))}}var f=b.window,g=b.document,k=f.XMLHttpRequest,l=b.noop,m=b.ls,r=b.version;a.version=r?r:"@DEV-VERSION@";a.Qa={};a.Pt=function(b,d){a.Qa[b]=
d;d.hasOwnProperty("init")&&ql(d,defaultScope)};a.Sketch=function(a){this.lf=a;this.options={ji:!1,Pf:!1};this.hl=this.il=this.jl=this.ll=this.ml=this.nl=this.kl=l;this.r={};this.Mc={Gd:0,images:{},ag:{},add:function(a,b){if(!this.images[a]&&(m||(this.images[a]=null),b||(b=new Image,b.onload=function(a){return function(){a.Gd--}}(this),this.Gd++,b.src=a),this.images[a]=b,f.opera)){var c=g.createElement("div");c.appendChild(b);c.style.position="absolute";c.style.opacity=0;c.style.width="1px";c.style.height=
"1px";this.ag[a]||(g.body.appendChild(c),this.ag[a]=c)}}};this.Pe=void 0;this.Zg=function(a){if("function"===typeof this.lf)this.lf(a);else if(this.Pe){var b=(new Function("return ("+this.Pe+");"))();b(a);this.lf=b}else throw"Unable to attach sketch to the processing instance";};this.toString=function(){var a,b;b="((function(Sketch) {\n"+("var sketch \x3d new Sketch(\n"+this.Pe+");\n");for(a in this.options)if(this.options.hasOwnProperty(a)){var c=this.options[a];b+="sketch.options."+a+" \x3d "+("string"===
typeof c?'"'+c+'"':""+c)+";\n"}for(a in this.Mc)this.options.hasOwnProperty(a)&&(b+='sketch.imageCache.add("'+a+'");\n');return b+"return sketch;\n})(Processing.Sketch))"}};var s=a.Ks=function(b,d){function e(a,b){var c=new k;c.onreadystatechange=function(){if(4===c.readyState){var a;200!==c.status&&0!==c.status?a="Invalid XHR status "+c.status:""===c.responseText&&(a="withCredentials"in new k&&!1===(new k).withCredentials&&"file:"===f.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":
"File is empty.");b(c.responseText,a)}};c.open("GET",a,!0);c.overrideMimeType&&c.overrideMimeType("application/json");c.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");c.send(null)}function l(d,f){function k(e,g){m[d]=e;++C;g&&r.push(f+" \x3d\x3d\x3e "+g);if(C===s)if(0===r.length)try{return new a(b,m.join("\n"))}catch(l){throw console.log("Processing.js: Unable to execute pjs sketch."),l;}else throw"Processing.js: Unable to load pjs sketch files: "+r.join("\n");}if("#"===f.charAt(0)){var p=
g.getElementById(f.substring(1));p?k(p.text||p.textContent):k("","Unable to load pjs sketch: element with id '"+f.substring(1)+"' was not found")}else e(f,k)}for(var m=[],r=[],s=d.length,C=0,Y=0;Y<s;++Y)l(Y,d[Y])};g.addEventListener("DOMContentLoaded",e,!1);a.reload=function(){if(0<processingInstances.length)for(var a=processingInstances.length-1;0<=a;a--)processingInstances[a]&&processingInstances[a].exit();e()};a.Ar=function(){g.removeEventListener("DOMContentLoaded",e,!1)};return a}},{}],7:[function(a,
b){b.S=function(a,b){return null===a||null===b?null===a&&null===b:"string"===typeof a||"object"!==typeof a?a===b:a.sc instanceof Function?a.sc(b):a===b}},{}],8:[function(a,b){b.S=function(a,b){if("string"===typeof a){for(var e=0,f=0;f<a.length;++f)e=31*e+a.charCodeAt(f)&4294967295;return e}if("object"!==typeof a)return a&4294967295;if(a.ye instanceof Function)return a.ye();a.lg===b&&(a.lg=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random()));return a.lg}},{}],9:[function(a,b){b.S=
function(a){function b(a){var c=-1;this.xe=function(){return c+1<a.length};this.next=function(){return a[++c]};this.remove=function(){a.splice(c--,1)}}function e(a){var c=[];a&&a.toArray&&(c=a.toArray());this.get=function(a){return c[a]};this.contains=function(a){return-1<this.indexOf(a)};this.indexOf=function(a){for(var b=0,d=c.length;b<d;++b)if(f(a,c[b]))return b;return-1};this.lastIndexOf=function(a){for(var b=c.length-1;0<=b;--b)if(f(a,c[b]))return b;return-1};this.add=function(){if(1===arguments.length)c.push(arguments[0]);
else if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=a&&a<=c.length)c.splice(a,0,arguments[1]);else throw a+" is not a valid index";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";};this.set=function(){if(2===arguments.length){var a=arguments[0];if("number"===typeof a)if(0<=a&&a<c.length)c.splice(a,1,arguments[1]);else throw a+" is not a valid index.";else throw typeof a+" is not a number";}else throw"Please use the proper number of parameters.";
};this.size=function(){return c.length};this.clear=function(){c.length=0};this.remove=function(a){if("number"===typeof a)return c.splice(a,1)[0];a=this.indexOf(a);return-1<a?(c.splice(a,1),!0):!1};this.Yf=function(){return!c.length};this.clone=function(){return new e(this)};this.toArray=function(){return c.slice(0)};this.zd=function(){return new b(c)}}var f=a.Uc;return e}},{}],10:[function(a,b){b.S=function(a,b){function e(f){this.code="string"===typeof f&&1===f.length?f.charCodeAt(0):"number"===
typeof f?f:f instanceof e?f:NaN;return a[this.code]===b?a[this.code]=this:a[this.code]}e.prototype.toString=function(){return String.fromCharCode(this.code)};e.prototype.valueOf=function(){return this.code};return e}({})},{}],11:[function(a,b){b.S=function(a){function b(){function a(b){b=e(b)%p.length;return 0>b?p.length+b:b}function c(){if(!(A<=u*p.length)){for(var b=[],d=0;d<p.length;++d)void 0!==p[d]&&(b=b.concat(p[d]));d=2*p.length;p=[];p.length=d;for(d=0;d<b.length;++d){var e=a(b[d].key),f=p[e];
void 0===f&&(p[e]=f=[]);f.push(b[d])}}}function l(a,b){function c(){for(;!f;)if(++e,d>=p.length)f=!0;else if(void 0===p[d]||e>=p[d].length)e=-1,++d;else break}var d=0,e=-1,f=!1,g;this.xe=function(){return!f};this.next=function(){g=a(p[d][e]);c();return g};this.remove=function(){void 0!==g&&(b(g),--e,c())};c()}function m(a,b,c){this.clear=function(){E.clear()};this.contains=function(a){return b(a)};this.Yf=function(){return E.Yf()};this.zd=function(){return new l(a,c)};this.remove=function(a){return this.contains(a)?
(c(a),!0):!1};this.size=function(){return E.size()};this.toArray=function(){for(var a=[],b=this.zd();b.xe();)a.push(b.next());return a}}function r(a){this.Jj=function(b){return b===E&&void 0===a.yc};this.sc=function(b){return f(a.key,b.getKey())};this.getKey=function(){return a.key};this.$b=function(){return a.value};this.ye=function(){return e(a.key)};this.eg=function(b){var c=a.value;a.value=b;return c}}if(1===arguments.length&&arguments[0]instanceof b)return arguments[0].clone();var s=0<arguments.length?
arguments[0]:16,u=1<arguments.length?arguments[1]:0.75,p=[];p.length=s;var A=0,E=this;this.clear=function(){A=0;p=[];p.length=s};this.clone=function(){var a=new b;a.yl(this);return a};this.Qk=function(){return new m(function(a){return new r(a)},function(a){return a instanceof r&&a.Jj(E)},function(a){return E.remove(a.getKey())})};this.get=function(b){var c=a(b),c=p[c];if(void 0===c)return null;for(var d=0;d<c.length;++d)if(f(c[d].key,b))return c[d].value;return null};this.Yf=function(){return 0===
A};this.put=function(b,d){var e=a(b),l=p[e];if(void 0===l)return++A,p[e]=[{key:b,value:d}],c(),null;for(e=0;e<l.length;++e)if(f(l[e].key,b)){var m=l[e].value;l[e].value=d;return m}++A;l.push({key:b,value:d});c();return null};this.yl=function(a){for(a=a.Qk().zd();a.xe();){var b=a.next();this.put(b.getKey(),b.$b())}};this.remove=function(b){var c=a(b),d=p[c];if(void 0===d)return null;for(var e=0;e<d.length;++e)if(f(d[e].key,b))return--A,b=d[e].value,d[e].yc=!0,1<d.length?d.splice(e,1):p[c]=void 0,b;
return null};this.size=function(){return A}}var e=a.Pd,f=a.Uc;return b}},{}],12:[function(a,b){b.S=function(a,b){function e(a,c){a===b&&(a="");this.name=a;c===b&&(c=0);this.size=c;this.Qf=!1;this.Gc=this.Bc=0;this.Be=1.2*c;var e=a.indexOf(" Italic Bold");-1!==e&&(a=a.substring(0,e));this.style="normal";e=a.indexOf(" Italic");-1!==e&&(a=a.substring(0,e),this.style="italic");this.wb="normal";e=a.indexOf(" Bold");-1!==e&&(a=a.substring(0,e),this.wb="bold");this.Wa="sans-serif";if(a!==b)switch(a){case "sans-serif":case "serif":case "monospace":case "fantasy":case "cursive":this.Wa=
a;break;default:this.Wa='"'+a+'", sans-serif'}var e=this.size/250,r=f.createElement("canvas");r.width=500;r.height=500;r.style.opacity=0;var s=this.Oh("250px","normal"),u=r.getContext("2d");u.font=s;r.width=u.measureText("dbflkhyjqpg").width;u.font=s;s=f.createElement("div");s.style.position="absolute";s.style.opacity=0;s.style.fontFamily='"'+this.name+'"';s.style.fontSize="250px";s.innerHTML="dbflkhyjqpg\x3cbr/\x3edbflkhyjqpg";f.body.appendChild(s);var p=r.width,A=r.height,r=A/2;u.fillStyle="white";
u.fillRect(0,0,p,A);u.fillStyle="black";u.fillText("dbflkhyjqpg",0,r);for(var A=u.getImageData(0,0,p,A).data,E=0,F=4*p,B=A.length;++E<B&&255===A[E];)g();p=Math.round(E/F);for(E=B-1;0<--E&&255===A[E];)g();A=Math.round(E/F);this.Bc=e*(r-p);this.Gc=e*(A-r);f.defaultView.getComputedStyle&&(r=f.defaultView.getComputedStyle(s,null).getPropertyValue("height"),r=e*r.replace("px",""),r>=2*this.size&&(this.Be=Math.round(r/2)));f.body.removeChild(s);e=this.fh?u:void 0;this.re=e;this.css=this.Oh();this.re&&(this.re.font=
this.css)}var f=a.ic.document,g=a.noop;e.prototype.fh=!0;e.prototype.Oh=function(a,c){a===b&&(a=this.size+"px");c===b&&(c=this.Be+"px");return[this.style,"normal",this.wb,a+"/"+c,this.Wa].join(" ")};e.prototype.Ce=function(a){return this.re.measureText(a).width};e.prototype.$k=function(a){var b=f.createElement("canvas").getContext("2d");b.font=this.css;return b.measureText(a).width};e.Ig={length:0};e.get=function(a,b){b=(10*b+0.5|0)/10;var c=e.Ig,d=a+"/"+b;if(!c[d]){c[d]=new e(a,b);c.length++;if(50===
c.length){e.prototype.Ce=e.prototype.$k;e.prototype.fh=!1;for(var f in c)"length"!==f&&(c[f].re=null);return new e(a,b)}if(400===c.length)return e.Ig={},e.get=e.Uk,new e(a,b)}return c[d]};e.Uk=function(a,b){return new e(a,b)};e.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};e.ki={yi:{},Xf:!1,Wf:function(){var a=f.createElement("style");a.setAttribute("type","text/css");a.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+
function(){return"#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#".replace(/[#237]/g,function(a){return"AAAAAAAA".substr(~~a?7-a:6)})}()+"')\n       format('truetype');\n}";f.head.appendChild(a);a=f.createElement("span");a.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
a.innerHTML="AAAAAAAA";f.body.appendChild(a);this.yi=a;this.Xf=!0},Rh:function(a){return f.defaultView.getComputedStyle(a,"").getPropertyValue("width")},Se:0,Gd:function(a){this.Xf||this.Wf();for(var b,c,d=this.Rh(this.yi),e=0;e<this.rd.length;e++){b=this.rd[e];c=this.Rh(b);if(4E3>this.Se&&c===d)return this.Se+=a,!0;f.body.removeChild(b);this.rd.splice(e--,1);this.Se=0}return 0===this.rd.length?!1:!0},rd:[],Yg:{},add:function(a){this.Xf||this.Wf();var b="object"===typeof a?a.Rr:a;a="object"===typeof a?
a.url:a;if(!this.Yg[b]){var c=f.createElement("style");c.setAttribute("type","text/css");c.innerHTML="@font-face{\n  font-family: '"+b+"';\n  src:  url('"+a+"');\n}\n";f.head.appendChild(c);this.Yg[b]=!0;a=f.createElement("span");a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";a.style.fontFamily='"'+b+'", "PjsEmptyFont", fantasy';a.innerHTML="AAAAAAAA";f.body.appendChild(a);this.rd.push(a)}}};return e}},{}],13:[function(a,b){b.S=function(a){function b(){0===arguments.length?this.reset():
1===arguments.length&&arguments[0]instanceof b?this.set(arguments[0].A()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}var e=a.bg;b.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof b?this.elements=arguments[0].A():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new b;
a.set(this.elements);return a},reset:function(){this.set([1,0,0,0,1,0])},A:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},yd:function(a,b){this.translate(-a,-b)},sa:function(){},Nb:function(a,b){var c,d;a instanceof PVector?(c=a.x,d=a.y,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*
c+this.elements[1]*d+this.elements[2],b[1]=this.elements[3]*c+this.elements[4]*d+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2],b.y=this.elements[3]*c+this.elements[4]*d+this.elements[5],b.z=0);return b},He:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},Ie:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},Ne:function(a){this.apply(1,0,1,a,0,0)},Oe:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,
0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},Hf:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},cc:function(){var a=this.Hf();if(Math.abs(a)>PConstants.Dg){var b=this.elements[0],c=this.elements[1],d=this.elements[2],e=this.elements[3],r=this.elements[4],s=this.elements[5];this.elements[0]=r/a;this.elements[3]=-e/a;this.elements[1]=-c/a;this.elements[4]=b/a;this.elements[2]=(c*s-r*d)/a;this.elements[5]=(e*d-b*s)/a;return!0}return!1},
scale:function(a,b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},xd:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof b?a=arguments[0].A():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var c=[0,0,this.elements[2],0,0,this.elements[5]],e=0,l=0;2>l;l++)for(var m=0;3>m;m++,e++)c[e]+=this.elements[3*
l+0]*a[m+0]+this.elements[3*l+1]*a[m+3];this.elements=c.slice()},Oa:function(){var a;1===arguments.length&&arguments[0]instanceof b?a=arguments[0].A():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var c=[0,0,a[2],0,0,a[5]];c[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];c[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];c[0]=this.elements[0]*a[0]+this.elements[3]*a[1];c[3]=this.elements[0]*a[3]+this.elements[3]*
a[4];c[1]=this.elements[1]*a[0]+this.elements[4]*a[1];c[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=c.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],d=this.elements[1];this.elements[0]=b*c+a*d;this.elements[1]=-a*c+b*d;c=this.elements[3];d=this.elements[4];this.elements[3]=b*c+a*d;this.elements[4]=-a*c+b*d},rotateZ:function(a){this.rotate(a)},wd:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=printMatrixHelper(this.elements),a=""+e.H(this.elements[0],
a,4)+" "+e.H(this.elements[1],a,4)+" "+e.H(this.elements[2],a,4)+"\n"+e.H(this.elements[3],a,4)+" "+e.H(this.elements[4],a,4)+" "+e.H(this.elements[5],a,4)+"\n\n";e.println(a)}};return b}},{}],14:[function(a,b){b.S=function(a,b){function e(){this.reset()}var f=a.bg;e.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof e?this.elements=arguments[0].A():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=
arguments[0].slice())},get:function(){var a=new e;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},A:function(){return this.elements.slice()},translate:function(a,c,e){e===b&&(e=0);this.elements[3]+=a*this.elements[0]+c*this.elements[1]+e*this.elements[2];this.elements[7]+=a*this.elements[4]+c*this.elements[5]+e*this.elements[6];this.elements[11]+=a*this.elements[8]+c*this.elements[9]+e*this.elements[10];this.elements[15]+=a*this.elements[12]+c*this.elements[13]+
e*this.elements[14]},sa:function(){var a=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},Nb:function(a,b){var c,
d,e,f;a instanceof PVector?(c=a.x,d=a.y,e=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],e=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*
e+this.elements[3]*f,b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*d+this.elements[14]*e+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*d+this.elements[10]*
e+this.elements[11]);return b},Oa:function(){var a;1===arguments.length&&arguments[0]instanceof e?a=arguments[0].A():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var f=0;4>f;f++,c++)b[c]+=this.elements[f+0]*a[4*d+0]+this.elements[f+4]*a[4*d+1]+this.elements[f+8]*a[4*d+2]+this.elements[f+12]*a[4*d+3];this.elements=b.slice()},apply:function(){var a;1===
arguments.length&&arguments[0]instanceof e?a=arguments[0].A():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var f=0;4>f;f++,c++)b[c]+=this.elements[4*d+0]*a[f+0]+this.elements[4*d+1]*a[f+4]+this.elements[4*d+2]*a[f+8]+this.elements[4*d+3]*a[f+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(c){var e=Math.cos(a);a=Math.sin(a);var f=1-e;this.apply(f*
b*b+e,f*b*c-a*d,f*b*d+a*c,0,f*b*c+a*d,f*c*c+e,f*c*d-a*b,0,f*b*d-a*c,f*c*d+a*b,f*d*d+e,0,0,0,0,1)}else this.rotateZ(a)},Wh:function(){inverseCopy===b&&(inverseCopy=new e);var a=arguments;inverseCopy.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!inverseCopy.cc())return!1;this.Oa(inverseCopy);return!0},rotateX:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=Math.cos(a);a=Math.sin(a);
this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&b&&!c&&(c=1):b=c=a;a&&b&&c&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},Ne:function(a){a=Math.tan(a);this.apply(1,a,
0,0,0,1,0,0,0,0,1,0,0,0,0,1)},Oe:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},He:function(a,b,c,d){return c?d?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*d:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},Ie:function(a,
b,c,d){return c?d?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*d:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},cc:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],d=this.elements[1]*this.elements[6]-this.elements[2]*
this.elements[5],e=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],u=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],p=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],A=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],E=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],F=this.elements[9]*this.elements[15]-this.elements[11]*
this.elements[13],B=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],Q=a*B-b*F+c*E+d*A-e*p+f*u;if(1E-9>=Math.abs(Q))return!1;var C=[];C[0]=+this.elements[5]*B-this.elements[6]*F+this.elements[7]*E;C[4]=-this.elements[4]*B+this.elements[6]*A-this.elements[7]*p;C[8]=+this.elements[4]*F-this.elements[5]*A+this.elements[7]*u;C[12]=-this.elements[4]*E+this.elements[5]*p-this.elements[6]*u;C[1]=-this.elements[1]*B+this.elements[2]*F-this.elements[3]*E;C[5]=+this.elements[0]*B-this.elements[2]*
A+this.elements[3]*p;C[9]=-this.elements[0]*F+this.elements[1]*A-this.elements[3]*u;C[13]=+this.elements[0]*E-this.elements[1]*p+this.elements[2]*u;C[2]=+this.elements[13]*f-this.elements[14]*e+this.elements[15]*d;C[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;C[10]=+this.elements[12]*e-this.elements[13]*c+this.elements[15]*a;C[14]=-this.elements[12]*d+this.elements[13]*b-this.elements[14]*a;C[3]=-this.elements[9]*f+this.elements[10]*e-this.elements[11]*d;C[7]=+this.elements[8]*
f-this.elements[10]*c+this.elements[11]*b;C[11]=-this.elements[8]*e+this.elements[9]*c-this.elements[11]*a;C[15]=+this.elements[8]*d-this.elements[9]*b+this.elements[10]*a;a=1/Q;C[0]*=a;C[1]*=a;C[2]*=a;C[3]*=a;C[4]*=a;C[5]*=a;C[6]*=a;C[7]*=a;C[8]*=a;C[9]*=a;C[10]*=a;C[11]*=a;C[12]*=a;C[13]*=a;C[14]*=a;C[15]*=a;this.elements=C.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=printMatrixHelper(this.elements),
a=""+f.H(this.elements[0],a,4)+" "+f.H(this.elements[1],a,4)+" "+f.H(this.elements[2],a,4)+" "+f.H(this.elements[3],a,4)+"\n"+f.H(this.elements[4],a,4)+" "+f.H(this.elements[5],a,4)+" "+f.H(this.elements[6],a,4)+" "+f.H(this.elements[7],a,4)+"\n"+f.H(this.elements[8],a,4)+" "+f.H(this.elements[9],a,4)+" "+f.H(this.elements[10],a,4)+" "+f.H(this.elements[11],a,4)+"\n"+f.H(this.elements[12],a,4)+" "+f.H(this.elements[13],a,4)+" "+f.H(this.elements[14],a,4)+" "+f.H(this.elements[15],a,4)+"\n\n";f.println(a)},
yd:function(a,b,c){this.Oa(1,0,0,-a,0,1,0,-b,0,0,1,-c,0,0,0,1)},Xh:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},Yh:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},wd:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},xd:function(a,b,c){this.Oa([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};return e}},{}],15:[function(a,b){b.S=function(a){function b(a){this.Wa=a||e.xg;this.style=
this.visible=!0;this.children=[];this.Ed=[];this.r=[];this.name="";this.parent=this.height=this.width=this.close=this.kind=this.aa=this.image=null}var e=a.PConstants,f=a.Xd,g=a.Yd;b.prototype={isVisible:function(){return this.visible},getName:function(){return this.name},draw:function(a){if(!a)throw"render context missing for draw() in PShape";this.visible&&(this.wl(a),this.Nk(a),this.post(a))},Nk:function(a){this.Wa===e.xg?this.Mk(a):this.Wa===e.$d?this.Pk(a):this.Wa===e.hj?this.Lk(a):this.Wa===
e.bf&&this.Ok(a)},Ok:function(a){var b,c;if(0!==this.t.length){a.beginShape();if(0===this.Ra.length)if(2===this.t[0].length)for(b=0,c=this.t.length;b<c;b++)a.vertex(this.t[b][0],this.t[b][1]);else for(b=0,c=this.t.length;b<c;b++)a.vertex(this.t[b][0],this.t[b][1],this.t[b][2]);else{var d=0;if(2===this.t[0].length)for(b=0,c=this.Ra.length;b<c;b++)this.Ra[b]===e.be?(a.vertex(this.t[d][0],this.t[d][1],this.t[d].moveTo),a.he=!1,d++):this.Ra[b]===e.Rd?(a.bezierVertex(this.t[d+0][0],this.t[d+0][1],this.t[d+
1][0],this.t[d+1][1],this.t[d+2][0],this.t[d+2][1]),d+=3):this.Ra[b]===e.rg?(a.curveVertex(this.t[d][0],this.t[d][1]),d++):this.Ra[b]===e.Ze&&(a.he=!0);else for(b=0,c=this.Ra.length;b<c;b++)this.Ra[b]===e.be?(a.vertex(this.t[d][0],this.t[d][1],this.t[d][2]),!0===this.t[d].moveTo?vertArray[vertArray.length-1].moveTo=!0:!1===this.t[d].moveTo&&(vertArray[vertArray.length-1].moveTo=!1),a.he=!1):this.Ra[b]===e.Rd?(a.bezierVertex(this.t[d+0][0],this.t[d+0][1],this.t[d+0][2],this.t[d+1][0],this.t[d+1][1],
this.t[d+1][2],this.t[d+2][0],this.t[d+2][1],this.t[d+2][2]),d+=3):this.Ra[b]===e.rg?(a.curveVertex(this.t[d][0],this.t[d][1],this.t[d][2]),d++):this.Ra[b]===e.Ze&&(a.he=!0)}a.endShape(this.close?e.Sd:e.OPEN)}},Lk:function(a){var b,c;a.beginShape(this.kind);if(this.style)for(b=0,c=this.t.length;b<c;b++)a.vertex(this.t[b]);else for(b=0,c=this.t.length;b<c;b++){var d=this.t[b];0===d[2]?a.vertex(d[0],d[1]):a.vertex(d[0],d[1],d[2])}a.endShape()},Mk:function(a){for(var b=0,c=this.children.length;b<c;b++)this.children[b].draw(a)},
Pk:function(a){if(this.kind===e.uj)a.point(this.r[0],this.r[1]);else if(this.kind===e.Cg)4===this.r.length?a.line(this.r[0],this.r[1],this.r[2],this.r[3]):a.line(this.r[0],this.r[1],this.r[2],this.r[3],this.r[4],this.r[5]);else if(this.kind===e.Gj)a.triangle(this.r[0],this.r[1],this.r[2],this.r[3],this.r[4],this.r[5]);else if(this.kind===e.Bj)a.quad(this.r[0],this.r[1],this.r[2],this.r[3],this.r[4],this.r[5],this.r[6],this.r[7]);else if(this.kind===e.Lg)if(null!==this.image){var b=imageModeConvert;
a.imageMode(e.yb);a.image(this.image,this.r[0],this.r[1],this.r[2],this.r[3]);imageModeConvert=b}else b=a.Dh,a.rectMode(e.yb),a.rect(this.r[0],this.r[1],this.r[2],this.r[3]),a.Dh=b;else this.kind===e.vg?(b=a.Hk,a.ellipseMode(e.yb),a.ellipse(this.r[0],this.r[1],this.r[2],this.r[3]),a.Hk=b):this.kind===e.Ei?(b=curEllipseMode,a.ellipseMode(e.yb),a.arc(this.r[0],this.r[1],this.r[2],this.r[3],this.r[4],this.r[5]),curEllipseMode=b):this.kind===e.Hi?1===this.r.length?a.box(this.r[0]):a.box(this.r[0],this.r[1],
this.r[2]):this.kind===e.Ej&&a.sphere(this.r[0])},wl:function(a){this.aa&&(a.pushMatrix(),a.transform(this.aa));this.style&&(a.pushStyle(),this.El(a))},post:function(a){this.aa&&a.popMatrix();this.style&&a.popStyle()},El:function(a){this.stroke?(a.stroke(this.strokeColor),a.strokeWeight(this.strokeWeight),a.strokeCap(this.strokeCap),a.strokeJoin(this.strokeJoin)):a.noStroke();this.fill?a.fill(this.fillColor):a.noFill()},getChild:function(a){var b,c;if("number"===typeof a)return this.children[a];var d;
if(""===a||this.name===a)return this;if(0<this.Ed.length){b=0;for(c=this.Ed.length;b<c||d;b++)if(this.Ed[b].getName===a){d=this.Ed[b];break}if(d)return d}b=0;for(c=this.children.length;b<c;b++)if(d=this.children[b].getChild(a))return d;return null},Ug:function(a){this.children.push(a);a.parent=this;null!==a.getName()&&this.Vg(a.getName(),a)},Vg:function(a,b){null!==this.parent?this.parent.Vg(a,b):this.Ed.push([a,b])},translate:function(){2===arguments.length?(this.Hb(2),this.aa.translate(arguments[0],
arguments[1])):(this.Hb(3),this.aa.translate(arguments[0],arguments[1],0))},Hb:function(a){null===this.aa?this.aa=2===a?new f:new g:3===a&&this.aa instanceof f&&(this.aa=new g)},rotateX:function(a){this.rotate(a,1,0,0)},rotateY:function(a){this.rotate(a,0,1,0)},rotateZ:function(a){this.rotate(a,0,0,1)},rotate:function(){1===arguments.length?(this.Hb(2),this.aa.rotate(arguments[0])):(this.Hb(3),this.aa.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?
(this.Hb(2),this.aa.scale(arguments[0],arguments[1])):3===arguments.length?(this.Hb(2),this.aa.scale(arguments[0],arguments[1],arguments[2])):(this.Hb(2),this.aa.scale(arguments[0]))},resetMatrix:function(){this.Hb(2);this.aa.reset()}};return b}},{}],16:[function(a,b){b.S=function(a){function b(){g.call(this);if(1===arguments.length){if(this.element=arguments[0],this.Ra=[],this.t=[],this.opacity=1,this.stroke=!1,this.strokeColor=f.T,this.strokeWeight=1,this.strokeCap=f.hf,this.strokeJoin=f.$e,this.Qe=
this.gg=this.fg=null,this.Kd=1,this.fill=!0,this.fillColor=f.T,this.Nf=this.Mf=this.Lf=null,this.qd=1,"svg"!==this.element.getName())throw"root is not \x3csvg\x3e, it's \x3c"+this.element.getName()+"\x3e";}else 2===arguments.length&&("string"===typeof arguments[1]?-1<arguments[1].indexOf(".svg")&&(this.element=new k(!0,arguments[1]),this.Ra=[],this.t=[],this.opacity=1,this.stroke=!1,this.strokeColor=f.T,this.strokeWeight=1,this.strokeCap=f.hf,this.strokeJoin=f.$e,this.Qe=this.gg=this.fg="",this.Kd=
1,this.fill=!0,this.fillColor=f.T,this.Mf=this.Lf=null,this.qd=1):arguments[0]&&(this.element=arguments[1],this.Ra=arguments[0].Ra.slice(),this.t=arguments[0].t.slice(),this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.fg=arguments[0].fg,this.gg=arguments[0].gg,this.Qe=arguments[0].Qe,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,
this.Lf=arguments[0].Lf,this.Mf=arguments[0].Mf,this.Nf=arguments[0].Nf,this.Kd=arguments[0].Kd,this.qd=arguments[0].qd,this.opacity=arguments[0].opacity));this.name=this.element.Bb("id");this.visible="none"!==this.element.Bb("display","inline");var a=this.element.getAttribute("transform");a&&(this.aa=this.sl(a));a=this.element.Bb("viewBox");null!==a&&(a=a.split(" "),this.width=a[2],this.height=a[3]);var a=this.element.Bb("width"),c=this.element.Bb("height");if(null!==a)this.width=this.cg(a),this.height=
this.cg(c);else if(0===this.width||0===this.height)throw this.height=this.width=1,"The width and/or height is not readable in the \x3csvg\x3e tag of this file.";this.ql(this.element);this.pl(this.element)}var e=a.Ud,f=a.PConstants,g=a.df,k=a.$c,l=a.zf;b.prototype=new g;b.prototype.sl=function(){function a(b){var c=[];b.replace(/\((.*?)\)/,function(){return function(a,b){c=b.replace(/,+/g," ").split(/\s+/)}}());return c}return function(b){this.Hb(2);var c=[];b.replace(/\s*(\w+)\((.*?)\)/g,function(a){c.push(e.trim(a))});
if(0===c.length)return null;b=0;for(var d=c.length;b<d;b++){var f=a(c[b]);if(-1!==c[b].indexOf("matrix"))this.aa.set(f[0],f[2],f[4],f[1],f[3],f[5]);else if(-1!==c[b].indexOf("translate"))this.aa.translate(f[0],2===f.length?f[1]:0);else if(-1!==c[b].indexOf("scale"))this.aa.scale(f[0],2===f.length?f[1]:f[0]);else if(-1!==c[b].indexOf("rotate")){var g=f[0];1===f.length?this.aa.rotate(e.radians(g)):3===f.length&&(this.aa.translate(f[1],f[2]),this.aa.rotate(e.radians(f[0])),this.aa.translate(-f[1],-f[2]))}else-1!==
c[b].indexOf("skewX")?this.aa.Ne(parseFloat(f[0])):-1!==c[b].indexOf("skewY")?this.aa.Oe(f[0]):-1!==c[b].indexOf("shearX")?this.aa.shearX(f[0]):-1!==c[b].indexOf("shearY")&&this.aa.shearY(f[0])}return this.aa}}();b.prototype.pl=function(a){a=a.Of();var b=new g,c,d;c=0;for(d=a.length;c<d;c++){var e=this.ol(a[c]);e&&b.Ug(e)}c=0;for(d=b.children.length;c<d;c++)this.children.push(b.children[c])};b.prototype.getName=function(){return this.name};b.prototype.ol=function(a){var c=a.getName(),e;"g"===c?e=
new b(this,a):"defs"===c?e=new b(this,a):"line"===c?(e=new b(this,a),e.rl()):"circle"===c?(e=new b(this,a),e.fi(!0)):"ellipse"===c?(e=new b(this,a),e.fi(!1)):"rect"===c?(e=new b(this,a),e.ul()):"polygon"===c?(e=new b(this,a),e.hi(!0)):"polyline"===c?(e=new b(this,a),e.hi(!1)):"path"===c?(e=new b(this,a),e.tl()):"radialGradient"===c?unimplemented("PShapeSVG.prototype.parseChild, name \x3d radialGradient"):"linearGradient"===c?unimplemented("PShapeSVG.prototype.parseChild, name \x3d linearGradient"):
"text"===c?unimplemented("PShapeSVG.prototype.parseChild, name \x3d text"):"filter"===c?unimplemented("PShapeSVG.prototype.parseChild, name \x3d filter"):"mask"===c&&unimplemented("PShapeSVG.prototype.parseChild, name \x3d mask");return e};b.prototype.tl=function(){this.Wa=f.bf;this.kind=0;var a=e.trim(this.element.Bb("d").replace(/[\s,]+/g," "));if(null!==a)for(var a=a.split(""),b=0,c=0,d=0,g=0,k=g=d=0,l=0,F=0,B=0,Q=B=g=F=d=0,C=0,Y="",L=[],lb=!1,v,U,w;Q<a.length;)if(C=a[Q].charCodeAt(0),65<=C&&90>=
C||97<=C&&122>=C){w=Q;Q++;if(Q<a.length)for(L=[],C=a[Q].charCodeAt(0);!(65<=C&&90>=C||97<=C&&100>=C||102<=C&&122>=C)&&!1===lb;)32===C?""!==Y&&(L.push(parseFloat(Y)),Y=""):45===C?101===a[Q-1].charCodeAt(0)?Y+=a[Q].toString():(""!==Y&&L.push(parseFloat(Y)),Y=a[Q].toString()):Y+=a[Q].toString(),Q++,Q===a.length?lb=!0:C=a[Q].charCodeAt(0);""!==Y&&(L.push(parseFloat(Y)),Y="");U=a[w];C=U.charCodeAt(0);if(77===C){if(2<=L.length&&0===L.length%2&&(b=L[0],c=L[1],this.gi(b,c),2<L.length))for(w=2,C=L.length;w<
C;w+=2)b=L[w],c=L[w+1],this.fc(b,c)}else if(109===C){if(2<=L.length&&0===L.length%2&&(b+=L[0],c+=L[1],this.gi(b,c),2<L.length))for(w=2,C=L.length;w<C;w+=2)b+=L[w],c+=L[w+1],this.fc(b,c)}else if(76===C){if(2<=L.length&&0===L.length%2)for(w=0,C=L.length;w<C;w+=2)b=L[w],c=L[w+1],this.fc(b,c)}else if(108===C){if(2<=L.length&&0===L.length%2)for(w=0,C=L.length;w<C;w+=2)b+=L[w],c+=L[w+1],this.fc(b,c)}else if(72===C)for(w=0,C=L.length;w<C;w++)b=L[w],this.fc(b,c);else if(104===C)for(w=0,C=L.length;w<C;w++)b+=
L[w],this.fc(b,c);else if(86===C)for(w=0,C=L.length;w<C;w++)c=L[w],this.fc(b,c);else if(118===C)for(w=0,C=L.length;w<C;w++)c+=L[w],this.fc(b,c);else if(67===C){if(6<=L.length&&0===L.length%6)for(w=0,C=L.length;w<C;w+=6)d=L[w],k=L[w+1],g=L[w+2],l=L[w+3],F=L[w+4],B=L[w+5],this.Ke(d,k,g,l,F,B),b=F,c=B}else if(99===C){if(6<=L.length&&0===L.length%6)for(w=0,C=L.length;w<C;w+=6)d=b+L[w],k=c+L[w+1],g=b+L[w+2],l=c+L[w+3],F=b+L[w+4],B=c+L[w+5],this.Ke(d,k,g,l,F,B),b=F,c=B}else if(83===C){if(4<=L.length&&0===
L.length%4)for(w=0,C=L.length;w<C;w+=4)"c"===v.toLowerCase()||"s"===v.toLowerCase()?(d=this.t[this.t.length-2][0],F=this.t[this.t.length-2][1],g=this.t[this.t.length-1][0],B=this.t[this.t.length-1][1],d=g+(g-d),k=B+(B-F)):(d=this.t[this.t.length-1][0],k=this.t[this.t.length-1][1]),g=L[w],l=L[w+1],F=L[w+2],B=L[w+3],this.Ke(d,k,g,l,F,B),b=F,c=B}else if(115===C){if(4<=L.length&&0===L.length%4)for(w=0,C=L.length;w<C;w+=4)"c"===v.toLowerCase()||"s"===v.toLowerCase()?(d=this.t[this.t.length-2][0],F=this.t[this.t.length-
2][1],g=this.t[this.t.length-1][0],B=this.t[this.t.length-1][1],d=g+(g-d),k=B+(B-F)):(d=this.t[this.t.length-1][0],k=this.t[this.t.length-1][1]),g=b+L[w],l=c+L[w+1],F=b+L[w+2],B=c+L[w+3],this.Ke(d,k,g,l,F,B),b=F,c=B}else if(81===C){if(4<=L.length&&0===L.length%4)for(w=0,C=L.length;w<C;w+=4)d=L[w],g=L[w+1],F=L[w+2],B=L[w+3],this.Le(b,c,d,g,F,B),b=F,c=B}else if(113===C){if(4<=L.length&&0===L.length%4)for(w=0,C=L.length;w<C;w+=4)d=b+L[w],g=c+L[w+1],F=b+L[w+2],B=c+L[w+3],this.Le(b,c,d,g,F,B),b=F,c=B}else if(84===
C){if(2<=L.length&&0===L.length%2)for(w=0,C=L.length;w<C;w+=2)"q"===v.toLowerCase()||"t"===v.toLowerCase()?(d=this.t[this.t.length-2][0],F=this.t[this.t.length-2][1],g=this.t[this.t.length-1][0],B=this.t[this.t.length-1][1],d=g+(g-d),g=B+(B-F)):(d=b,g=c),F=L[w],B=L[w+1],this.Le(b,c,d,g,F,B),b=F,c=B}else if(116===C){if(2<=L.length&&0===L.length%2)for(w=0,C=L.length;w<C;w+=2)"q"===v.toLowerCase()||"t"===v.toLowerCase()?(d=this.t[this.t.length-2][0],F=this.t[this.t.length-2][1],g=this.t[this.t.length-
1][0],B=this.t[this.t.length-1][1],d=g+(g-d),g=B+(B-F)):(d=b,g=c),F=b+L[w],B=c+L[w+1],this.Le(b,c,d,g,F,B),b=F,c=B}else if(90===C||122===C)this.close=!0;v=U.toString()}else Q++};b.prototype.Le=function(a,b,c,d,e,g){if(0<this.t.length)this.Fd(f.Rd),this.gc(a+2*(c-a)/3,b+2*(d-b)/3),this.gc(e+2*(c-e)/3,g+2*(d-g)/3),this.gc(e,g);else throw"Path must start with M/m";};b.prototype.Ke=function(a,b,c,d,e,g){if(0<this.t.length)this.Fd(f.Rd),this.gc(a,b),this.gc(c,d),this.gc(e,g);else throw"Path must start with M/m";
};b.prototype.fc=function(a,b){if(0<this.t.length)this.Fd(f.be),this.gc(a,b),this.t[this.t.length-1].moveTo=!1;else throw"Path must start with M/m";};b.prototype.gi=function(a,b){0<this.t.length&&this.Fd(f.Ze);this.Fd(f.be);this.gc(a,b);this.t[this.t.length-1].moveTo=!0};b.prototype.gc=function(a,b){var c=[];c[0]=a;c[1]=b;this.t.push(c)};b.prototype.Fd=function(a){this.Ra.push(a)};b.prototype.hi=function(a){this.Wa=f.bf;this.close=a;a=e.trim(this.element.Bb("points").replace(/[,\s]+/g," "));if(null!==
a)if(a=a.split(" "),0===a.length%2)for(var b=0,c=a.length;b<c;b++){var d=[];d[0]=a[b];d[1]=a[++b];this.t.push(d)}else throw"Error parsing polygon points: odd number of coordinates provided";};b.prototype.ul=function(){this.kind=f.Lg;this.Wa=f.$d;this.r=[];this.r[0]=this.element.Xa("x");this.r[1]=this.element.Xa("y");this.r[2]=this.element.Xa("width");this.r[3]=this.element.Xa("height");if(0>this.r[2]||0>this.r[3])throw"svg error: negative width or height found while parsing \x3crect\x3e";};b.prototype.fi=
function(a){this.kind=f.vg;this.Wa=f.$d;this.r=[];this.r[0]=this.element.Xa("cx")|0;this.r[1]=this.element.Xa("cy")|0;var b;if(a){if(a=b=this.element.Xa("r"),0>a)throw"svg error: negative radius found while parsing \x3ccircle\x3e";}else if(a=this.element.Xa("rx"),b=this.element.Xa("ry"),0>a||0>b)throw"svg error: negative x-axis radius or y-axis radius found while parsing \x3cellipse\x3e";this.r[0]-=a;this.r[1]-=b;this.r[2]=2*a;this.r[3]=2*b};b.prototype.rl=function(){this.kind=f.Cg;this.Wa=f.$d;this.r=
[];this.r[0]=this.element.Xa("x1");this.r[1]=this.element.Xa("y1");this.r[2]=this.element.Xa("x2");this.r[3]=this.element.Xa("y2")};b.prototype.ql=function(a){a.hasAttribute("opacity")&&this.oi(a.getAttribute("opacity"));a.hasAttribute("stroke")&&this.pi(a.getAttribute("stroke"));a.hasAttribute("stroke-width")&&this.si(a.getAttribute("stroke-width"));a.hasAttribute("stroke-linejoin")&&this.ri(a.getAttribute("stroke-linejoin"));a.hasAttribute("stroke-linecap")&&this.qi(a.Bb("stroke-linecap"));a.hasAttribute("fill")&&
this.ni(a.Bb("fill"));if(a.hasAttribute("style")){a=a.Bb("style").toString().split(";");for(var b=0,c=a.length;b<c;b++){var d=e.trim(a[b].split(":"));"fill"===d[0]?this.ni(d[1]):"fill-opacity"===d[0]?this.Al(d[1]):"stroke"===d[0]?this.pi(d[1]):"stroke-width"===d[0]?this.si(d[1]):"stroke-linecap"===d[0]?this.qi(d[1]):"stroke-linejoin"===d[0]?this.ri(d[1]):"stroke-opacity"===d[0]?this.Bl(d[1]):"opacity"===d[0]&&this.oi(d[1])}}};b.prototype.Al=function(a){this.qd=parseFloat(a);this.fillColor=255*this.qd<<
24|this.fillColor&16777215};b.prototype.ni=function(a){var b=this.fillColor&4278190080;"none"===a?this.fill=!1:0===a.indexOf("#")?(this.fill=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=b|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.fill=!0,this.fillColor=b|this.ii(a)):0===a.indexOf("url(#")?this.Nf=a.substring(5,a.length-1):l[a]&&(this.fill=!0,this.fillColor=b|parseInt(l[a].substring(1),16)&16777215)};b.prototype.oi=function(a){this.strokeColor=
255*parseFloat(a)<<24|this.strokeColor&16777215;this.fillColor=255*parseFloat(a)<<24|this.fillColor&16777215};b.prototype.pi=function(a){var b=this.strokeColor&4278190080;"none"===a?this.stroke=!1:"#"===a.charAt(0)?(this.stroke=!0,4===a.length&&(a=a.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=b|parseInt(a.substring(1),16)&16777215):0===a.indexOf("rgb")?(this.stroke=!0,this.strokeColor=b|this.ii(a)):0===a.indexOf("url(#")?this.Qe=a.substring(5,a.length-1):l[a]&&(this.stroke=!0,this.strokeColor=
b|parseInt(l[a].substring(1),16)&16777215)};b.prototype.si=function(a){this.strokeWeight=this.cg(a)};b.prototype.ri=function(a){"miter"===a?this.strokeJoin=f.$e:"round"===a?this.strokeJoin=f.Mg:"bevel"===a&&(this.strokeJoin=f.Fi)};b.prototype.qi=function(a){"butt"===a?this.strokeCap=f.hf:"round"===a?this.strokeCap=f.Mg:"square"===a&&(this.strokeCap=f.Aj)};b.prototype.Bl=function(a){this.Kd=parseFloat(a);this.strokeColor=255*this.Kd<<24|this.strokeColor&16777215};b.prototype.ii=function(a){a=a.substring(a.indexOf("(")+
1,a.indexOf(")")).split(", ");return a[0]<<16|a[1]<<8|a[2]};b.prototype.cg=function(a){var b=a.length-2;return 0>b?a:a.indexOf("pt")===b?1.25*parseFloat(a.substring(0,b)):a.indexOf("pc")===b?15*parseFloat(a.substring(0,b)):a.indexOf("mm")===b?3.543307*parseFloat(a.substring(0,b)):a.indexOf("cm")===b?35.43307*parseFloat(a.substring(0,b)):a.indexOf("in")===b?90*parseFloat(a.substring(0,b)):a.indexOf("px")===b?parseFloat(a.substring(0,b)):parseFloat(a)};return b}},{}],17:[function(a,b){b.S=function(a,
b){function e(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function f(a){return function(b,c){var d=b.get();d[a](c);return d}}var g=a.PConstants;e.Tk=function(a,c){if(c===b||null===c)c=new e;c.x=Math.cos(a);c.y=Math.sin(a);return c};e.Nt=function(a){return e.Tk(Math.random()*g.Tb,a)};e.Ot=function(a){var c=Math.random()*g.Tb,f=2*Math.random()-1,k=Math.sqrt(1-f*f),u=k*Math.cos(c),c=k*Math.sin(c);a===b||null===a?a=new e(u,c,f):a.set(u,c,f);return a};e.dist=function(a,b){return a.dist(b)};e.If=function(a,
b){return a.If(b)};e.se=function(a,b){return a.se(b)};e.sub=function(a,b){return new e(a.x-b.x,a.y-b.y,a.z-b.z)};e.eo=function(a,b){return Math.acos(a.If(b)/(a.mag()*b.mag()))};e.lerp=function(a,b,c){a=new e(a.x,a.y,a.z);a.lerp(b,c);return a};e.prototype={set:function(a,b,c){1===arguments.length?this.set(a.x||a[0]||0,a.y||a[1]||0,a.z||a[2]||0):(this.x=a,this.y=b,this.z=c)},get:function(){return new e(this.x,this.y,this.z)},mag:function(){var a=this.x,b=this.y,c=this.z;return Math.sqrt(a*a+b*b+c*c)},
add:function(a,b,c){1===arguments.length?(this.x+=a.x,this.y+=a.y,this.z+=a.z):(this.x+=a,this.y+=b,this.z+=c)},sub:function(a,b,c){1===arguments.length?(this.x-=a.x,this.y-=a.y,this.z-=a.z):(this.x-=a,this.y-=b,this.z-=c)},Nb:function(a){"number"===typeof a?(this.x*=a,this.y*=a,this.z*=a):(this.x*=a.x,this.y*=a.y,this.z*=a.z)},Jk:function(a){"number"===typeof a?(this.x/=a,this.y/=a,this.z/=a):(this.x/=a.x,this.y/=a.y,this.z/=a.z)},rotate:function(a){var b=this.x,c=Math.cos(a);a=Math.sin(a);this.x=
c*this.x-a*this.y;this.y=a*b+c*this.y},dist:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return Math.sqrt(b*b+c*c+a*a)},If:function(a,b,c){return 1===arguments.length?this.x*a.x+this.y*a.y+this.z*a.z:this.x*a+this.y*b+this.z*c},se:function(a){var b=this.x,c=this.y,d=this.z;return new e(c*a.z-a.y*d,d*a.x-a.z*b,b*a.y-a.x*c)},lerp:function(a,b,c,d){var e,f;2===arguments.length?(d=b,e=a.x,f=a.y,c=a.z):(e=a,f=b);this.x+=(e-this.x)*d;this.y+=(f-this.y)*d;this.z+=(c-this.z)*d},normalize:function(){var a=
this.mag();0<a&&this.Jk(a)},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},A:function(){return[this.x,this.y,this.z]}};for(var k in e.prototype)e.prototype.hasOwnProperty(k)&&!e.hasOwnProperty(k)&&(e[k]=f(k));return e}},{}],18:[function(a,b){b.S=function(){function a(b,c,f,g,k){this.tc=b||"";this.name=c||"";this.namespace=f||"";this.value=g;this.type=k}a.prototype={getName:function(){return this.name},$b:function(){return this.value},eg:function(a){this.value=a}};return a}},{}],
19:[function(a,b){b.S=function(a,b){function e(a,c,e){this.attributes=[];this.children=[];this.name=this.tc=null;this.namespace="";this.parent=this.content=null;this.type="ELEMENT";a&&("string"===typeof a?c===b&&-1<a.indexOf("\x3c")?this.parse(a):(this.tc=a,this.namespace=c,this.systemId=e):this.parse(c))}var f=a.ic,g=f.ajax,k=f.window.DOMParser,l=a.jf;e.prototype={parse:function(a){var b;try{var c=a.substring(a.length-4);if(".xml"===c||".svg"===c)a=g(a);b=(new k).parseFromString(a,"text/xml");var d=
b.documentElement;if(d)this.ei(null,d);else throw"Error loading document";return this}catch(e){throw e;}},ei:function(a,b){var c,d,f,g;a?(c=new e(b.nodeName),c.parent=a):(this.tc=b.localName,this.name=b.nodeName,c=this);if(3===b.nodeType&&""!==b.textContent)return this.Ch(b.textContent);if(4===b.nodeType)return this.Ek(b.textContent);if(b.attributes)for(f=0,g=b.attributes.length;f<g;f++)d=b.attributes[f],d=new l(d.Wr,d.nodeName,d.namespaceURI,d.nodeValue,d.nodeType),c.attributes.push(d);if(b.childNodes)for(f=
0,g=b.childNodes.length;f<g;f++)d=c.ei(c,b.childNodes[f]),null!==d&&c.children.push(d);return c},createElement:function(a,c,f){return f===b?new e(a,c):new e(a,c,f)},Ch:function(a){if(""===a.replace(/^\s+$/g,""))return null;var b=new e;b.type="TEXT";b.content=a;return b},Ek:function(a){var b=this.Ch(a);if(null===b)return null;b.type="CDATA";var c={"\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26apos;",'"':"\x26quot;"},d;for(d in c)Object.hasOwnProperty(c,d)||(a=a.replace(RegExp(d,"g"),c[d]));b.Mj=a;return b},
hasAttribute:function(){if(1===arguments.length)return null!==this.getAttribute(arguments[0]);if(2===arguments.length)return null!==this.getAttribute(arguments[0],arguments[1])},sc:function(a){if(!(a instanceof e))return!1;var b,c;if(this.tc!==a.tc||this.attributes.length!==a.attributes.length||this.attributes.length!==a.attributes.length)return!1;var d,f;b=0;for(c=this.attributes.length;b<c;b++)if(d=this.attributes[b].getName(),f=this.attributes[b].namespace,d=a.Jc(d,f),null===d||this.attributes[b].$b()!==
d.$b()||this.attributes[b].type!==d.type)return!1;if(this.children.length!==a.children.length)return!1;if(0<this.children.length){b=0;for(c=this.children.length;b<c;b++)if(d=this.getChild(b),f=a.getChild(b),!d.sc(f))return!1;return!0}return this.content===a.content},getAttribute:function(){var a;if(2===arguments.length)return(a=this.Jc(arguments[0]))?a.$b():arguments[1];if(1===arguments.length)return(a=this.Jc(arguments[0]))?a.$b():null;if(3===arguments.length)return(a=this.Jc(arguments[0],arguments[1]))?
a.$b():arguments[2]},Bb:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},Xa:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},Ug:function(a){null!==a&&(a.parent=this,this.children.push(a))},getChild:function(a){if("number"===
typeof a)return this.children[a];if(-1!==a.indexOf("/"))return this.Ph(a.split("/"),0);for(var b,c,d=0,e=this.children.length;d<e;d++)if(b=this.getChild(d),c=b.getName(),null!==c&&c===a)return b;return null},Of:function(){if(1===arguments.length){if("number"===typeof arguments[0])return this.getChild(arguments[0]);if(-1!==arguments[0].indexOf("/"))return this.Qh(arguments[0].split("/"),0);for(var a=[],b,c,d=0,e=this.children.length;d<e;d++)b=this.getChild(d),c=b.getName(),null!==c&&c===arguments[0]&&
a.push(b);return a}return this.children},Ph:function(a,b){if(b===a.length)return this;for(var c,d,e=a[b],f=0,g=this.children.length;f<g;f++)if(c=this.getChild(f),d=c.getName(),null!==d&&d===e)return c.Ph(a,b+1);return null},Qh:function(a,b){if(b===a.length-1)return this.Of(a[b]);for(var c=this.Of(a[b]),d=[],e=0;e<c.length;e++)d=d.concat(c[e].Qh(a,b+1));return d},removeChild:function(a){if(a)for(var b=0,c=this.children.length;b<c;b++)if(this.children[b].sc(a)){this.children.splice(b,1);break}},Jc:function(a,
b){this.namespace=b||"";for(var c=0,d=this.attributes.length;c<d;c++)if(this.attributes[c].getName()===a&&this.attributes[c].namespace===this.namespace)return this.attributes[c];return null},setAttribute:function(){var a;if(3===arguments.length){a=arguments[0].indexOf(":");var b=arguments[0].substring(a+1);(a=this.Jc(b,arguments[1]))?a.eg(arguments[2]):(a=new l(arguments[0],b,arguments[1],arguments[2],"CDATA"),this.attributes.push(a))}else(a=this.Jc(arguments[0]))?a.eg(arguments[1]):(a=new l(arguments[0],
arguments[0],null,arguments[1],"CDATA"),this.attributes.push(a))},getName:function(){return this.tc},toString:function(){if("TEXT"===this.type)return this.content;if("CDATA"===this.type)return this.Mj;var a=this.tc,b="\x3c"+a,c;for(c=0;c<this.attributes.length;c++)var d=this.attributes[c],b=b+(" "+d.getName()+'\x3d"'+d.$b()+'"');if(0===this.children.length)b=""===this.content?b+"/\x3e":b+("\x3e"+this.content+"\x3c/"+a+"\x3e");else{b+="\x3e";for(c=0;c<this.children.length;c++)b+=this.children[c].toString();
b+="\x3c/"+a+"\x3e"}return b}};e.parse=function(a){var b=new e;b.parse(a);return b};return e}},{}],20:[function(a,b){b.S={bo:"#f0f8ff",fo:"#faebd7",ho:"#00ffff",io:"#7fffd4",oo:"#f0ffff",ro:"#f5f5dc",so:"#ffe4c4",to:"#000000",uo:"#ffebcd",blue:"#0000ff",vo:"#8a2be2",Ao:"#a52a2a",Bo:"#deb887",Co:"#5f9ea0",Do:"#7fff00",Eo:"#d2691e",Sq:"#ff7f50",Tq:"#6495ed",Uq:"#fff8dc",Vq:"#dc143c",fr:"#00ffff",gr:"#00008b",hr:"#008b8b",ir:"#b8860b",jr:"#a9a9a9",kr:"#006400",lr:"#bdb76b",mr:"#8b008b",nr:"#556b2f",
or:"#ff8c00",pr:"#9932cc",qr:"#8b0000",rr:"#e9967a",sr:"#8fbc8f",tr:"#483d8b",ur:"#2f4f4f",vr:"#00ced1",wr:"#9400d3",xr:"#ff1493",yr:"#00bfff",zr:"#696969",Dr:"#1e90ff",Or:"#b22222",Qr:"#fffaf0",Sr:"#228b22",Ur:"#ff00ff",Vr:"#dcdcdc",Xr:"#f8f8ff",Yr:"#ffd700",Zr:"#daa520",as:"#808080",green:"#008000",cs:"#adff2f",ds:"#f0fff0",fs:"#ff69b4",hs:"#cd5c5c",js:"#4b0082",ms:"#fffff0",ns:"#f0e68c",os:"#e6e6fa",ps:"#fff0f5",qs:"#7cfc00",rs:"#fffacd",ts:"#add8e6",us:"#f08080",vs:"#e0ffff",ws:"#fafad2",ys:"#d3d3d3",
xs:"#90ee90",zs:"#ffb6c1",As:"#ffa07a",Bs:"#20b2aa",Cs:"#87cefa",Ds:"#778899",Es:"#b0c4de",Fs:"#ffffe0",Gs:"#00ff00",Hs:"#32cd32",Is:"#faf0e6",Ls:"#ff00ff",Ms:"#800000",Os:"#66cdaa",Ps:"#0000cd",Qs:"#ba55d3",Rs:"#9370d8",Ss:"#3cb371",Ts:"#7b68ee",Us:"#00fa9a",Vs:"#48d1cc",Ws:"#c71585",Xs:"#191970",Ys:"#f5fffa",Zs:"#ffe4e1",at:"#ffe4b5",ct:"#ffdead",dt:"#000080",it:"#fdf5e6",jt:"#808000",kt:"#6b8e23",lt:"#ffa500",mt:"#ff4500",nt:"#da70d6",ot:"#eee8aa",pt:"#98fb98",qt:"#afeeee",rt:"#d87093",st:"#ffefd5",
At:"#ffdab9",Et:"#cd853f",Ft:"#ffc0cb",Gt:"#dda0dd",It:"#b0e0e6",Jt:"#800080",red:"#ff0000",Rt:"#bc8f8f",St:"#4169e1",Ut:"#8b4513",Vt:"#fa8072",Wt:"#f4a460",Xt:"#2e8b57",Yt:"#fff5ee",cu:"#a0522d",du:"#c0c0c0",fu:"#87ceeb",hu:"#6a5acd",iu:"#708090",ju:"#fffafa",mu:"#00ff7f",ou:"#4682b4",tan:"#d2b48c",qu:"#008080",ru:"#d8bfd8",vu:"#ff6347",wu:"#40e0d0",Cu:"#ee82ee",Du:"#f5deb3",Eu:"#ffffff",Fu:"#f5f5f5",Gu:"#ffff00",Hu:"#9acd32"}},{}],21:[function(a,b){b.S=function(a,b,e){return function(f,g){f.Mn=
function(a,b){return"string"!==typeof a?a.contains.apply(a,g(arguments)):null!==a&&null!==b&&"string"===typeof b&&-1<a.indexOf(b)};f.Wn=function(a,b,c){return"string"!==typeof a?a.replaceAll.apply(a,g(arguments)):a.replace(RegExp(b,"g"),c)};f.Xn=function(a,b,c){return"string"!==typeof a?a.Qt.apply(a,g(arguments)):a.replace(RegExp(b,""),c)};f.Vn=function(a,b,c){if("string"!==typeof a)return a.replace.apply(a,g(arguments));if(b instanceof RegExp)return a.replace(b,c);"string"!==typeof b&&(b=b.toString());
if(""===b)return a;var d=a.indexOf(b);if(0>d)return a;var e=0,f="";do f+=a.substring(e,d)+c,e=d+b.length;while(0<=(d=a.indexOf(b,e)));return f+a.substring(e)};f.On=function(a,c){return a.sc instanceof Function?a.sc.apply(a,g(arguments)):b(a,c)};f.Pn=function(a,b){return"string"!==typeof a?a.Jr.apply(a,g(arguments)):a.toLowerCase()===b.toLowerCase()};f.$n=function(a){if("string"!==typeof a)return a.tu.apply(a,g(arguments));for(var b=[],c=0,d=a.length;c<d;++c)b[c]=new Char(a.charAt(c));return b};f.Yn=
function(a,b,c){if("string"!==typeof a)return a.split.apply(a,g(arguments));var d=RegExp(b);if(c===e||1>c)return a.split(d);for(var f=[],u=a,p;-1!==(p=u.search(d))&&f.length<c-1;){var A=d.exec(u).toString();f.push(u.substring(0,p));u=u.substring(p+A.length)}-1===p&&""===u||f.push(u);return f};f.Ln=function(a,b){var c=a.charCodeAt(b),d;return 55296<=c&&56319>=c?(d=a.charCodeAt(b+1),1024*(c-55296)+(d-56320)+65536):c};f.Tn=function(a,b){return RegExp(b).test(a)};f.Zn=function(a,b,c){if("string"!==typeof a)return a.nu.apply(a,
g(arguments));c=c||0;return 0>c||c>a.length?!1:""===b||b===a?!0:a.indexOf(b)===c};f.Nn=function(a,b){if("string"!==typeof a)return a.Hr.apply(a,g(arguments));var c=b?b.length:0;return""===b||b===a?!0:a.indexOf(b)===a.length-c};f.Qn=function(b){return b.ye instanceof Function?b.ye.apply(b,g(arguments)):a(b)};f.Un=function(a){f.println("Exception: "+a.toString())}}}},{}],22:[function(a,b){b.S=function(a,b){function e(){return Math.random()}function f(a,b){function c(){d=36969*(d&65535)+(d>>>16)&4294967295;
e=18E3*(e&65535)+(e>>>16)&4294967295;return((d&65535)<<16|e&65535)&4294967295}var d=a||362436069,e=b||521288629;this.Kk=function(){var a=c()/4294967296;return 0>a?1+a:a};this.Wk=c}function g(a){function c(a,b,d,e){a&=15;var f=8>a?b:d;b=4>a?d:12===a||14===a?b:e;return(0===(a&1)?f:-f)+(0===(a&2)?b:-b)}function e(a,b,c){b=0===(a&1)?b:c;return 0===(a&2)?-b:b}a=a!==b?new f(a):f.Gk();var g,k,l=new Uint8Array(512);for(g=0;256>g;++g)l[g]=g;for(g=0;256>g;++g){var r=l[k=a.Wk()&255];l[k]=l[g];l[g]=r}for(g=0;256>
g;++g)l[g+256]=l[g];this.gl=function(a,b,d){var e=Math.floor(a)&255,f=Math.floor(b)&255,g=Math.floor(d)&255;a-=Math.floor(a);b-=Math.floor(b);d-=Math.floor(d);var k=(3-2*a)*a*a,p=(3-2*b)*b*b,s=l[e]+f,r=l[s]+g,s=l[s+1]+g,f=l[e+1]+f,e=l[f]+g,g=l[f+1]+g;return c(l[r],a,b,d)+k*(c(l[e],a-1,b,d)-c(l[r],a,b,d))+p*(c(l[s],a,b-1,d)+k*(c(l[g],a-1,b-1,d)-c(l[s],a,b-1,d))-(c(l[r],a,b,d)+k*(c(l[e],a-1,b,d)-c(l[r],a,b,d))))+(3-2*d)*d*d*(c(l[r+1],a,b,d-1)+k*(c(l[e+1],a-1,b,d-1)-c(l[r+1],a,b,d-1))+p*(c(l[s+1],a,
b-1,d-1)+k*(c(l[g+1],a-1,b-1,d-1)-c(l[s+1],a,b-1,d-1))-(c(l[r+1],a,b,d-1)+k*(c(l[e+1],a-1,b,d-1)-c(l[r+1],a,b,d-1))))-(c(l[r],a,b,d)+k*(c(l[e],a-1,b,d)-c(l[r],a,b,d))+p*(c(l[s],a,b-1,d)+k*(c(l[g],a-1,b-1,d)-c(l[s],a,b-1,d))-(c(l[r],a,b,d)+k*(c(l[e],a-1,b,d)-c(l[r],a,b,d))))))};this.fl=function(a,b){var c=Math.floor(a)&255,d=Math.floor(b)&255;a-=Math.floor(a);b-=Math.floor(b);var f=(3-2*a)*a*a,g=l[c]+d,c=l[c+1]+d;return e(l[g],a,b)+f*(e(l[c],a-1,b)-e(l[g],a,b))+(3-2*b)*b*b*(e(l[g+1],a,b-1)+f*(e(l[c+
1],a-1,b-1)-e(l[g+1],a,b-1))-(e(l[g],a,b)+f*(e(l[c],a-1,b)-e(l[g],a,b))))};this.el=function(a){var b=Math.floor(a)&255;a-=Math.floor(a);return(0===(l[b]&1)?-a:a)+(3-2*a)*a*a*((0===(l[b+1]&1)?-(a-1):a-1)-(0===(l[b]&1)?-a:a))}}a.abs=Math.abs;a.ceil=Math.ceil;a.exp=Math.exp;a.floor=Math.floor;a.log=Math.log;a.pow=Math.pow;a.round=Math.round;a.sqrt=Math.sqrt;a.acos=Math.acos;a.asin=Math.asin;a.atan=Math.atan;a.atan2=Math.atan2;a.cos=Math.cos;a.sin=Math.sin;a.tan=Math.tan;a.constrain=function(a,b,c){return a>
c?c:a<b?b:a};a.dist=function(){var a,b,c;if(4===arguments.length)return a=arguments[0]-arguments[2],b=arguments[1]-arguments[3],Math.sqrt(a*a+b*b);if(6===arguments.length)return a=arguments[0]-arguments[3],b=arguments[1]-arguments[4],c=arguments[2]-arguments[5],Math.sqrt(a*a+b*b+c*c)};a.lerp=function(a,b,c){return(b-a)*c+a};a.mag=function(a,b,c){return c?Math.sqrt(a*a+b*b+c*c):Math.sqrt(a*a+b*b)};a.map=function(a,b,c,d,e){return d+(a-b)/(c-b)*(e-d)};a.max=function(){if(2===arguments.length)return arguments[0]<
arguments[1]?arguments[1]:arguments[0];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b<a[d]&&(b=a[d]);return b};a.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:arguments[1];var a=1===arguments.length?arguments[0]:arguments;if(!("length"in a&&0<a.length))throw"Non-empty array is expected";for(var b=a[0],c=a.length,d=1;d<c;++d)b>a[d]&&(b=a[d]);return b};
a.norm=function(a,b,c){return(a-b)/(c-b)};a.sq=function(a){return a*a};a.degrees=function(a){return 180*a/Math.PI};a.random=function(){if(0===arguments.length)return e();if(1===arguments.length)return e()*arguments[0];var a=arguments[0],b=arguments[1];return e()*(b-a)+a};f.Gk=function(){var a=new Date;return new f(a/6E4&4294967295,a&4294967295)};a.randomSeed=function(a){e=(new f(a)).Kk;this.Sf=!1};a.randomGaussian=function(){if(this.Sf)return this.Sf=!1,this.cl;var a,b,c;do a=2*e()-1,b=2*e()-1,c=
a*a+b*b;while(1<=c||0===c);c=Math.sqrt(-2*Math.log(c)/c);this.cl=b*c;this.Sf=!0;return a*c};var k=b,l=4,m=0.5,r=b;a.noise=function(a,c,e){k===b&&(k=new g(r));for(var f=k,E=1,F=1,B=0,Q=0;Q<l;++Q){E*=m;switch(arguments.length){case 1:B+=E*(1+f.el(F*a))/2;break;case 2:B+=E*(1+f.fl(F*a,F*c))/2;break;case 3:B+=E*(1+f.gl(F*a,F*c,F*e))/2}F*=2}return B};a.noiseDetail=function(a,c){l=a;c!==b&&(m=c)};a.noiseSeed=function(a){r=a;k=b}}},{}],23:[function(a,b){b.S=function(a){var b={trim:function(a){if(a instanceof
Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""));return b}return a.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")},radians:function(a){return a/180*Math.PI},ci:function(b,d,g,k,l,m){d=0>b?g:d;g=0===l;l=l===a||0>l?0:l;b=Math.abs(b);if(g)for(l=1,b*=10;1E-6<Math.abs(Math.round(b)-b)&&7>l;)++l,b*=10;else 0!==l&&(b*=Math.pow(10,l));g=2*b;Math.floor(b)===b?g=b:Math.floor(g)===g?(b=Math.floor(b),g=b+b%2):g=Math.round(b);b="";for(k+=l;0<
k||0<g;)k--,b=""+g%10+b,g=Math.floor(g/10);if(m!==a)for(k=b.length-3-l;0<k;)b=b.substring(0,k)+m+b.substring(k),k-=3;return 0<l?d+b.substring(0,b.length-l)+"."+b.substring(b.length-l,b.length):d+b},Je:function(a,c,g,k,l,m){if(a instanceof Array){for(var r=[],s=0,u=a.length;s<u;s++)r.push(b.ci(a[s],c,g,k,l,m));return r}return b.ci(a,c,g,k,l,m)},dl:function(a,c,g){return b.Je(a,"","-",c,g)},H:function(a,c,g){return b.Je(a," ","-",c,g)},ft:function(a,c,g){return b.Je(a,"+","-",c,g)},et:function(a,c){return b.Je(a,
"","-",0,c,",")},kg:function(a){"trim radians nf nfs nfp nfc".split(" ").forEach(function(c){a[c]=b[c]})}};return b}()},{}],24:[function(a,b){b.S=function(a,b,e,f,g,k){function l(b){var d=0;b.wheelDelta?(d=b.wheelDelta/120,window.opera&&(d=-d)):b.detail&&(d=-b.detail/3);(a.mouseScroll=d)&&"function"===typeof a.mouseScrolled&&a.mouseScrolled()}function m(b){var d=b,e=0,g=0;a.pmouseX=a.mouseX;a.pmouseY=a.mouseY;if(d.offsetParent){do e+=d.offsetLeft,g+=d.offsetTop;while(d=d.offsetParent)}d=b;do e-=d.scrollLeft||
0,g-=d.scrollTop||0;while(d=d.parentNode);var k,l,r,m;f.defaultView&&f.defaultView.getComputedStyle&&(k=parseInt(f.defaultView.getComputedStyle(b,null).paddingLeft,10)||0,l=parseInt(f.defaultView.getComputedStyle(b,null).paddingTop,10)||0,r=parseInt(f.defaultView.getComputedStyle(b,null).borderLeftWidth,10)||0,m=parseInt(f.defaultView.getComputedStyle(b,null).borderTopWidth,10)||0);e=e+k+r;g=g+l+m;e+=window.pageXOffset;g+=window.pageYOffset;return{X:e,Y:g}}function r(b,d){var e=m(b);a.mouseX=d.pageX-
e.ce;a.mouseY=d.pageY-e.de}function s(a){var b=m(a.changedTouches[0].target),c;for(c=0;c<a.touches.length;c++){var d=a.touches[c];d.offsetX=d.pageX-b.ce;d.offsetY=d.pageY-b.de}for(c=0;c<a.targetTouches.length;c++)d=a.targetTouches[c],d.offsetX=d.pageX-b.ce,d.offsetY=d.pageY-b.de;for(c=0;c<a.changedTouches.length;c++)d=a.changedTouches[c],d.offsetX=d.pageX-b.ce,d.offsetY=d.pageY-b.de;return a}e(b,"touchstart",function(f){b.setAttribute("style","-webkit-user-select: none");b.setAttribute("onclick",
"void(0)");b.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var l=0,m=eventHandlers.length;l<m;l++){var E=eventHandlers[l].type;"mouseout"!==E&&"mousemove"!==E&&"mousedown"!==E&&"mouseup"!==E&&"DOMMouseScroll"!==E&&"mousewheel"!==E&&"touchstart"!==E||detachEventHandler(eventHandlers[l])}a.touchStart!==k||a.touchMove!==k||a.touchEnd!==k||a.touchCancel!==k?(e(b,"touchstart",function(b){a.touchStart!==k&&(b=s(b),a.touchStart(b))}),e(b,"touchmove",function(b){a.touchMove!==k&&(b.preventDefault(),
b=s(b),a.touchMove(b))}),e(b,"touchend",function(b){a.touchEnd!==k&&(b=s(b),a.touchEnd(b))}),e(b,"touchcancel",function(b){a.touchCancel!==k&&(b=s(b),a.touchCancel(b))})):(e(b,"touchstart",function(e){r(b,e.touches[0]);a.__mousePressed=!0;a.Dd=!1;a.mouseButton=g.Xc;"function"===typeof a.mousePressed&&a.mousePressed()}),e(b,"touchmove",function(e){e.preventDefault();r(b,e.touches[0]);"function"!==typeof a.mouseMoved||a.__mousePressed||a.mouseMoved();"function"===typeof a.mouseDragged&&a.__mousePressed&&
(a.mouseDragged(),a.Dd=!0)}),e(b,"touchend",function(){a.__mousePressed=!1;"function"!==typeof a.mouseClicked||a.Dd||a.mouseClicked();"function"===typeof a.mouseReleased&&a.mouseReleased()}));b.dispatchEvent(f)});(function(){function f(a){a.preventDefault();a.stopPropagation()}var g=!0;a.Gh=function(){g&&(e(b,"contextmenu",f),g=!1)};a.Gr=function(){g||(detachEventHandler({Ih:b,type:"contextmenu",fn:f}),g=!0)}})();e(b,"mousemove",function(e){r(b,e);"function"!==typeof a.mouseMoved||a.__mousePressed||
a.mouseMoved();"function"===typeof a.mouseDragged&&a.__mousePressed&&(a.mouseDragged(),a.Dd=!0)});e(b,"mouseout",function(){"function"===typeof a.mouseOut&&a.mouseOut()});e(b,"mouseover",function(e){r(b,e);"function"===typeof a.mouseOver&&a.mouseOver()});b.onmousedown=function(){b.focus();return!1};e(b,"mousedown",function(b){a.__mousePressed=!0;a.Dd=!1;switch(b.which){case 1:a.mouseButton=g.Xc;break;case 2:a.mouseButton=g.Sa;break;case 3:a.mouseButton=g.kc}"function"===typeof a.mousePressed&&a.mousePressed()});
e(b,"mouseup",function(){a.__mousePressed=!1;"function"!==typeof a.mouseClicked||a.Dd||a.mouseClicked();"function"===typeof a.mouseReleased&&a.mouseReleased()});e(f,"DOMMouseScroll",l);e(f,"mousewheel",l)}},{}],25:[function(a,b){b.S=function(a,b){function e(){var b="abs acos alpha ambient ambientLight append applyMatrix arc arrayCopy asin atan atan2 background beginCamera beginDraw beginShape bezier bezierDetail bezierPoint bezierTangent bezierVertex binary blend blendColor blit_resize blue box breakShape brightness camera ceil Character color colorMode concat constrain copy cos createFont createGraphics createImage cursor curve curveDetail curvePoint curveTangent curveTightness curveVertex day degrees directionalLight disableContextMenu dist draw ellipse ellipseMode emissive enableContextMenu endCamera endDraw endShape exit exp expand externals fill filter floor focused frameCount frameRate frustum get glyphLook glyphTable green height hex hint hour hue image imageMode intersect join key keyCode keyPressed keyReleased keyTyped lerp lerpColor lightFalloff lights lightSpecular line link loadBytes loadFont loadGlyphs loadImage loadPixels loadShape loadXML loadStrings log loop mag map match matchAll max millis min minute mix modelX modelY modelZ modes month mouseButton mouseClicked mouseDragged mouseMoved mouseOut mouseOver mousePressed mouseReleased mouseScroll mouseScrolled mouseX mouseY name nf nfc nfp nfs noCursor noFill noise noiseDetail noiseSeed noLights noLoop norm normal noSmooth noStroke noTint ortho param parseBoolean parseByte parseChar parseFloat parseInt peg perspective PImage pixels PMatrix2D PMatrix3D PMatrixStack pmouseX pmouseY point pointLight popMatrix popStyle pow print printCamera println printMatrix printProjection PShape PShapeSVG pushMatrix pushStyle quad radians random randomGaussian randomSeed rect rectMode red redraw requestImage resetMatrix reverse rotate rotateX rotateY rotateZ round saturation save saveFrame saveStrings scale screenX screenY screenZ second set setup shape shapeMode shared shearX shearY shininess shorten sin size smooth sort specular sphere sphereDetail splice split splitTokens spotLight sq sqrt status str stroke strokeCap strokeJoin strokeWeight subset tan text textAlign textAscent textDescent textFont textLeading textMode textSize texture textureMode textWidth tint toImageData touchCancel touchEnd touchMove touchStart translate transform triangle trim unbinary unhex updatePixels use3DContext vertex width XMLElement XML year __contains __equals __equalsIgnoreCase __frameRate __hashCode __int_cast __instanceof __keyPressed __mousePressed __printStackTrace __replace __replaceAll __replaceFirst __toCharArray __split __codePointAt __startsWith __endsWith __matches".split(" ");
m&&Object.keys(m).forEach(function(a){b.push(a)});var d={},e,f;e=0;for(f=b.length;e<f;++e)d[b[e]]=null;for(var g in a.Qa)if(a.Qa.hasOwnProperty(g)&&a.Qa[g].S){var k=a.Qa[g].S;e=0;for(f=k.length;e<f;++e)d[k[e]]=null}return d}function f(a){function b(a,c,d,e){if(c||e)return a;ta=!0;return""}function c(a){var b=/^\s*/.exec(a);if(b[0].length===a.length)a={left:b[0],sb:"",right:""};else{var d=/\s*$/.exec(a);a={left:b[0],sb:a.substring(b[0].length,d.index),right:d[0]}}a.Ai=function(a){return this.left+
a+this.right};return a}function d(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")}function f(a,b){for(var c=0,d=b.length;c<d;++c)a[b[c]]=null;return a}function g(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function r(a){return a.substring(2,a.length-1)}function m(a,b){var c=Ca.length;Ca.push(a);return'"'+b+c+'"'}function Y(a){a=a.replace(n,function(a){return m(a,"E")});a=a.replace(t,function(a){return m(a,"D")});return a=a.replace(Gb,function(a){return m(a,"H")})}function L(a,b){return a.replace(vb,
function(a,c,d){return d!==b?a:m(a,"G")})}function lb(a){this.name=a}function v(a,b){this.r=a;this.Ee=b}function U(a){var b=d(a.substring(1,a.length-1));a=[];var c=null;if(""!==b)for(var b=b.split(","),e=0;e<b.length;++e){var f=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(b[e]);if(e===b.length-1&&0<=b[e].indexOf("...")){c=new lb(f[1]);break}a.push(new lb(f[1]))}return new v(a,c)}function w(a){function b(a,d,f,g){a=Ca[g];e=!0;a=c(a.substring(1,a.length-1));return"__"+f+(""===a.sb?m("("+d.replace(/\.\s*$/,
"")+")","B"):m("("+d.replace(/\.\s*$/,"")+","+a.sb+")","B"))}function d(a,b,c){e=!0;return"__instanceof"+m("("+b+", "+c+")","B")}a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(a,b,c){return c});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(a){return m(a,"F")});a=a.replace(Gb,function(a){return m(a,"H")});a=a.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,
function(a,b,c){a=c.replace(/"C(\d+)"/g,function(a,b){return Ca[b]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");b="('"+b+"', "+m("{"+a.substring(1,a.length-1)+"}","A")+")";return"$p.createJavaArray"+m(b,"B")});a=a.replace(/(\.\s*length)\s*"B\d+"/g,"$1");a=a.replace(/#([0-9A-Fa-f]{6})\b/g,function(a,b){return"0xFF"+b});a=a.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(a,b,c){b=Ca[b];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(b))return a;
if(/^\(\s*int\s*\)$/.test(b))return"(int)"+c;b=b.split(/"C(\d+)"/g);return 1<b.length&&!/^\[\s*\]$/.test(Ca[b[1]])?a:""+c});a=a.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(a,b){var d=c(b);return d.Ai("__int_cast("+d.sb+")")});a=a.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");a=a.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(a,b,c){return b===c?a:""===c?"0"+b:b});a=a.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");a=a.replace(/([^\s])%([^=\s])/g,
"$1 % $2");a=a.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");a=a.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(a,b){return"parse"+b.substring(0,1).toUpperCase()+b.substring(1)+'"B'});a=a.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(a,b,c,d,e,f){return c?(a=Ca[d],e?"pixels.setPixel"+m("("+a.substring(1,a.length-1)+","+f+")","B"):"pixels.getPixel"+m("("+a.substring(1,a.length-1)+")","B")):b?"pixels.getLength"+m("()","B"):e?"pixels.set"+
m("("+f+")","B"):"pixels.toArray"+m("()","B")});var e;do e=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,b);while(e);do e=!1,a=a.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,
d);while(e);return a=a.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function wk(a,b){this.body=b;b.Ka=this}function vc(a){var b=RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(a);a=oc;var c="class"+ ++Qf;oc=c;b=new wk(0,bf(Ca[b[2]],b[1]+"$"+c,"","implements "+b[1]));b.Cc=c;b.zc=a;wb[c]=b;oc=a;return b}function ee(a,b,c){this.name=a;this.r=b;this.body=c}function Vb(a){a=RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(a);return new ee("function"!==
a[1]?a[1]:null,U(Ca[a[2]]),Da(Ca[a[3]]))}function Lf(a){this.De=a}function Rg(a){a=a.split(",");for(var b=0;b<a.length;++b){var c=a[b].indexOf(":");a[b]=0>c?{value:Pb(a[b])}:{label:d(a[b].substring(0,c)),value:Pb(d(a[b].substring(c+1)))}}return new Lf(a)}function Wb(a){if("("===a.charAt(0)||"["===a.charAt(0))return a.charAt(0)+Wb(a.substring(1,a.length-1))+a.charAt(a.length-1);if("{"===a.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(a)?"{"+m(a.substring(1,a.length-1),"I")+"}":"["+Wb(a.substring(1,
a.length-1))+"]";a=c(a);var b=w(a.sb),b=b.replace(/"[ABC](\d+)"/g,function(a,b){return Wb(Ca[b])});return a.Ai(b)}function Xb(a){return a.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(a,b,c,d,e,f){return b?a:Sa({name:c,al:e,Lj:!!f})+(d===s?"":d)})}function Mf(a,b){this.Kf=a;this.Gl=b}function Nf(a,b){this.name=a;this.value=b}function ea(a,b){var c=a.indexOf("\x3d"),e;0>c?(e=a,c=b):(e=a.substring(0,c),c=Pb(a.substring(c+1)));return new Nf(d(e.replace(/(\s*"C\d+")+/g,
"")),c)}function qa(a){return"int"===a||"float"===a?"0":"boolean"===a?"false":"color"===a?"0x00000000":"null"}function W(a){this.Ua=a}function Na(a){this.Rk=a}function he(a){if(jb.test(a)){var b=Ka.exec(a);a=a.substring(b[0].length).split(",");for(var b=qa(b[2]),c=0;c<a.length;++c)a[c]=ea(a[c],b);return new W(a)}return new Na(Pb(a))}function Yg(a,b,c){this.vc=a;this.Zj=b;this.step=c}function Rf(a,b){this.vc=a;this.Gf=b}function yd(a,b){this.vc=a;this.Gf=b}function zd(a){if(/\bin\b/.test(a))return a=
a.substring(1,a.length-1).split(/\bin\b/g),new Rf(he(d(a[0])),Pb(a[1]));if(0<=a.indexOf(":")&&0>a.indexOf(";"))return a=a.substring(1,a.length-1).split(":"),new yd(he(d(a[0])),Pb(a[1]));a=a.substring(1,a.length-1).split(";");return new Yg(he(d(a[0])),Pb(a[1]),Pb(a[2]))}function Xa(a){a.sort(function(a,b){return b.wb-a.wb})}function Ya(a,b,c){this.name=a;this.body=b;this.rb=c;b.Ka=this}function La(a,b,c){this.name=a;this.body=b;this.rb=c;b.Ka=this}function hb(a){var b=n.exec(a);n.lastIndex=0;var c=
0<=b[1].indexOf("static"),d=Ca[r(b[6])];a=oc;var e="class"+ ++Qf;oc=e;b="interface"===b[2]?new Ya(b[3],Sf(d,b[3],b[4]),c):new La(b[3],bf(d,b[3],b[4],b[5]),c);b.Cc=e;b.zc=a;wb[e]=b;oc=a;return b}function Hb(a,b,c,d){this.name=a;this.r=b;this.body=c;this.rb=d}function gc(a){a=t.exec(a);t.lastIndex=0;var b=0<=a[1].indexOf("static"),c=";"!==a[6]?Ca[r(a[6])]:"{}";return new Hb(a[3],U(Ca[r(a[4])]),Da(c),b)}function Tf(a,b,c){this.Ua=a;this.rb=c}function Ad(a){var b=Ka.exec(a),c=0<=b[1].indexOf("static");
a=a.substring(b[0].length).split(/,\s*/g);for(var b=qa(b[2]),d=0;d<a.length;++d)a[d]=ea(a[d],b);return new Tf(a,0,c)}function bd(a,b){this.r=a;this.body=b}function Zg(a){a=RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(a);var b=U(Ca[a[1]]);return new bd(b,Da(Ca[a[2]]))}function cf(a,b,c,d,e,f){this.name=a;this.Nc=b;this.$f=c;this.mb=d;this.ob=e;this.ec=f;a=0;for(b=d.length;a<b;++a)d[a].Ka=this}function df(a,b,c,d,e,f,g,k,l){this.name=a;this.mf=b;this.Nc=c;this.Mh=d;this.Ge=e;this.mb=f;this.nd=g;this.ob=k;this.ec=
l;a=0;for(b=f.length;a<b;++a)f[a].Ka=this}function ie(a,b){this.name=a;this.body=b;b.Ka=this}function je(a,b){this.name=a;this.body=b;b.Ka=this}function wc(a){var b=n.exec(a);n.lastIndex=0;var c=Ca[r(b[6])];a=oc;var d="class"+ ++Qf;oc=d;b="interface"===b[2]?new ie(b[3],Sf(c,b[3],b[4])):new je(b[3],bf(c,b[3],b[4],b[5]));b.Cc=d;b.zc=a;wb[d]=b;oc=a;return b}function Zb(a,b,c){this.name=a;this.r=b;this.body=c}function ke(a){a=t.exec(a);t.lastIndex=0;return new Zb(a[3],U(Ca[r(a[4])]),Da(Ca[r(a[6])]))}
function Bd(a,b){this.Ub=a;this.ec=b}function $g(a,b){this.Ub=a;this.ec=b}function ef(a,b,c){this.name=a;this.Ub=b;this.ec=c}function Uf(a){this.Kf=a}function Cd(a){this.label=a}function ah(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c];e instanceof W?b=b.concat(e.Ab()):e instanceof Bd&&e.Ub.vc instanceof W?b=b.concat(e.Ub.vc.Ab()):(e instanceof Ya||e instanceof La||e instanceof ie||e instanceof je||e instanceof Zb||e instanceof ee)&&b.push(e.name)}return f({},b)}function le(a){this.Rc=a}function Vf(a){this.Rc=
a}var bh=e(),pc=[];a=a.replace(/\r\n?|\n\r/g,"\n").replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(a,b,c,d,e,f,g,k){return b||c?(b=pc.length,pc.push(a),"'"+b+"'"):d?(b=pc.length,pc.push(f),e+"'"+b+"'"):""!==k?" ":"\n"});a=a.replace(/__x([0-9A-F]{4})/g,function(a,b){return"__x005F_x"+b});a=a.replace(/\$/g,"__x0024");a=a.replace(/return\s*[\n\r]+/g,"return ");var ta;do ta=!1,
a=a.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,b);while(ta);var Ca=function(a){var b=[];a=a.split(/([\{\[\(\)\]\}])/);for(var c=a[0],d=[],e=1;e<a.length;e+=2){var f=a[e];if("["===f||"{"===f||"("===f)d.push(c),c=f;else if("]"===
f||"}"===f||")"===f){var g="}"===f?"A":")"===f?"B":"C",k=b.length;b.push(c+f);c=d.pop()+'"'+g+(k+1)+'"'}c+=a[e+1]}b.unshift(c);return b}(a),Sa,wb={},oc,Qf=0,bf,Sf,Da,ff,Pb,n=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,
t=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,jb=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,
vb=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,Ka=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,Gb=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;lb.prototype.toString=
function(){return this.name};v.prototype.Ab=function(){for(var a=[],b=0,c=this.r.length;b<c;++b)a.push(this.r[b].name);return a};v.prototype.Me=function(a){return this.Ee?"{\nvar "+this.Ee.name+" \x3d Array.prototype.slice.call(arguments, "+this.r.length+");\n"+a.substring(1):a};v.prototype.toString=function(){if(0===this.r.length)return"()";for(var a="(",b=0,c=this.r.length;b<c;++b)a+=this.r[b]+", ";return a.substring(0,a.length-2)+")"};wk.prototype.toString=function(){return"new ("+this.body+")"};
ee.prototype.toString=function(){var a=Sa,b=f({"this":null},this.r.Ab());Sa=function(c){return b.hasOwnProperty(c.name)?c.name:a(c)};var c="function";this.name&&(c+=" "+this.name);c+=this.r+" "+this.r.Me(this.body.toString());Sa=a;return c};Lf.prototype.toString=function(){var a=Sa;Sa=function(b){return"this"===b.name?"this":a(b)};for(var b="",c=0,d=this.De.length;c<d;++c)this.De[c].label&&(b+=this.De[c].label+": "),b+=this.De[c].value.toString()+", ";Sa=a;return b.substring(0,b.length-2)};Mf.prototype.toString=
function(){var a=this.Gl;return Xb(this.Kf).replace(/"!(\d+)"/g,function(b,c){return a[c].toString()})};Pb=function(a){var b=[];a=Wb(a);a=a.replace(/"H(\d+)"/g,function(a,c){b.push(Vb(Ca[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"F(\d+)"/g,function(a,c){b.push(vc(Ca[c]));return'"!'+(b.length-1)+'"'});a=a.replace(/"I(\d+)"/g,function(a,c){b.push(Rg(Ca[c]));return'"!'+(b.length-1)+'"'});return new Mf(a,b)};Nf.prototype.toString=function(){return this.name+" \x3d "+this.value};W.prototype.Ab=function(){for(var a=
[],b=0,c=this.Ua.length;b<c;++b)a.push(this.Ua[b].name);return a};W.prototype.toString=function(){return"var "+this.Ua.join(",")};Na.prototype.toString=function(){return this.Rk.toString()};Yg.prototype.toString=function(){return"("+this.vc+"; "+this.Zj+"; "+this.step+")"};Rf.prototype.toString=function(){var a=this.vc.toString();0<=a.indexOf("\x3d")&&(a=a.substring(0,a.indexOf("\x3d")));return"("+a+" in "+this.Gf+")"};yd.Yk=0;yd.prototype.toString=function(){var a=this.vc.toString(),b="$it"+yd.Yk++,
a=a.replace(/^\s*var\s*/,"").split("\x3d")[0];return"("+("var "+b+" \x3d new $p.ObjectIterator("+this.Gf+"), "+a+" \x3d void(0)")+"; "+(b+".hasNext() \x26\x26 (("+a+" \x3d "+b+".next()) || true)")+";)"};Ya.prototype.toString=function(){return""+this.body};La.prototype.toString=function(){return""+this.body};Hb.prototype.toString=function(){var a=f({},this.r.Ab()),b=Sa;Sa=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function "+this.bl+this.r+" "+this.r.Me(this.body.toString())+"\n";
Sa=b;return c};Tf.prototype.Ab=function(){for(var a=[],b=0,c=this.Ua.length;b<c;++b)a.push(this.Ua[b].name);return a};Tf.prototype.toString=function(){var a=Sa({name:"[this]"});if(this.rb){for(var b=this.Ka.name,c=[],d=0,e=this.Ua.length;d<e;++d){var f=this.Ua[d],g=f.name,k=b+"."+g;c.push("if("+k+" \x3d\x3d\x3d void(0)) {\n "+k+" \x3d "+f.value+"; }\n$p.defineProperty("+a+", '"+g+"', { get: function(){return "+k+";}, set: function(val){"+k+" \x3d val;} });\n")}return c.join("")}return a+"."+this.Ua.join("; "+
a+".")};bd.prototype.toString=function(){var a=f({},this.r.Ab()),b=Sa;Sa=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function $constr_"+this.r.r.length+this.r.toString(),d=this.r.Me(this.body.toString());/\$(superCstr|constr)\b/.test(d)||(d="{\n$superCstr();\n"+d.substring(1));Sa=b;return c+d+"\n"};cf.prototype.sd=function(a,b,c){this.Ka.lb&&this.Ka.lb.body.sd(a,b,c);var d,e,f,g;d=0;for(f=this.mb.length;d<f;++d){var k=this.mb[d].Ab();e=0;for(g=k.length;e<g;++e)a[k[e]]=this.mb[d]}d=
0;for(f=this.$f.length;d<f;++d)b[this.$f[d]]=!0;d=0;for(f=this.ob.length;d<f;++d)a=this.ob[d],c[a.name]=a};cf.prototype.toString=function(){var a=this.name,b="",c="";this.sd({},{},{});var d,e;if(this.Ka.Cb){var f=[],g;d=0;for(e=this.Nc.length;d<e;++d)this.Ka.Cb[d]&&(g=Sa({name:this.Nc[d]}),f.push(g),b+="$p.extendInterfaceMembers("+a+", "+g+");\n");c+=a+".$interfaces \x3d ["+f.join(", ")+"];\n"}c=c+(a+".$isInterface \x3d true;\n")+(a+".$methods \x3d ['"+this.$f.join("', '")+"'];\n");Xa(this.ob);d=
0;for(e=this.ob.length;d<e;++d)f=this.ob[d],f.rb&&(b+=a+"."+f.name+" \x3d "+f+";\n");d=0;for(e=this.mb.length;d<e;++d)f=this.mb[d],f.rb&&(b+=a+"."+f.Ua.join(";\n"+a+".")+";\n");return"(function() {\nfunction "+a+"() { throw 'Unable to create the interface'; }\n"+b+c+"return "+a+";\n})()"};Sf=function(a,b,d){a=a.substring(1,a.length-1);a=Y(a);a=L(a,b);var e=[],f=[];a=a.replace(/"([DE])(\d+)"/g,function(a,b,c){"D"===b?e.push(c):"E"===b&&f.push(c);return""});a=a.split(/;(?:\s*;)*/g);var g,k;d!==s&&(g=
d.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));d=0;for(k=e.length;d<k;++d){var l=gc(Ca[e[d]]);e[d]=l.name}d=0;for(k=a.length-1;d<k;++d)a[d]=Ad(c(a[d]).sb);l=a.pop();d=0;for(k=f.length;d<k;++d)f[d]=hb(Ca[f[d]]);return new cf(b,g,e,a,f,{qa:l})};df.prototype.sd=function(a,b,c){this.Ka.lb&&this.Ka.lb.body.sd(a,b,c);var d,e,f,g;d=0;for(f=this.mb.length;d<f;++d){var k=this.mb[d].Ab();e=0;for(g=k.length;e<g;++e)a[k[e]]=this.mb[d]}d=0;for(f=this.Ge.length;d<f;++d)a=this.Ge[d],b[a.name]=a;d=
0;for(f=this.ob.length;d<f;++d)b=this.ob[d],c[b.name]=b};df.prototype.toString=function(){var a="$this_"+function(a){for(var b=0;a;)++b,a=a.scope;return b}(this.Ka),b=this.name,c="var "+a+" \x3d this;\n",e="",f="",g={},k={},l={};this.sd(g,k,l);var p=Sa;Sa=function(c){var d=c.name;return"this"===d?c.Lj||!c.al?a+".$self":a:g.hasOwnProperty(d)?g[d].rb?b+"."+d:a+"."+d:l.hasOwnProperty(d)?a+"."+d:k.hasOwnProperty(d)?k[d].rb?b+"."+d:a+".$self."+d:p(c)};var n;this.mf?(n=p({name:this.mf}),c=c+("var $super \x3d { $upcast: "+
a+" };\n")+("function $superCstr(){"+n+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"),f+=b+".$base \x3d "+n+";\n"):c+="function $superCstr(){$p.extendClassChain("+a+")}\n";this.Ka.lb&&(e+="$p.extendStaticMembers("+b+", "+n+");\n");var r,m,s;if(this.Ka.Cb){m=[];n=0;for(r=this.Nc.length;n<r;++n)this.Ka.Cb[n]&&(s=p({name:this.Nc[n]}),m.push(s),e+="$p.extendInterfaceMembers("+b+", "+s+");\n");f+=b+".$interfaces \x3d ["+m.join(", ")+"];\n"}0<this.Mh.length&&(c+=this.Mh.join("\n")+
"\n");Xa(this.ob);n=0;for(r=this.ob.length;n<r;++n)m=this.ob[n],m.rb?(e+=b+"."+m.name+" \x3d "+m+";\n",c+=a+"."+m.name+" \x3d "+b+"."+m.name+";\n"):c+=a+"."+m.name+" \x3d "+m+";\n";n=0;for(r=this.mb.length;n<r;++n){var t=this.mb[n];if(t.rb)for(e+=b+"."+t.Ua.join(";\n"+b+".")+";\n",m=0,s=t.Ua.length;m<s;++m)var u=t.Ua[m].name,v=b+"."+u,c=c+("$p.defineProperty("+a+", '"+u+"', {get: function(){return "+v+"}, set: function(val){"+v+" \x3d val}});\n");else c+=a+"."+t.Ua.join(";\n"+a+".")+";\n"}m={};n=
0;for(r=this.Ge.length;n<r;++n)s=this.Ge[n],t=m[s.name],u=s.name+"$"+s.r.r.length,v=!!s.r.Ee,t?(++t,u+="_"+t):t=1,s.bl=u,m[s.name]=t,s.rb?(e+=s,e+="$p.addMethod("+b+", '"+s.name+"', "+u+", "+v+");\n"):c+=s,c+="$p.addMethod("+a+", '"+s.name+"', "+u+", "+v+");\n";c+=d(this.ec.qa);0<this.nd.length&&(c+=this.nd.join("\n")+"\n");c+="function $constr() {\n";m=[];n=0;for(r=this.nd.length;n<r;++n)s=this.nd[n].r.r.length,m.push("if(arguments.length "+(this.nd[n].r.Ee?"\x3e\x3d":"\x3d\x3d\x3d")+" "+s+") { $constr_"+
s+".apply("+a+", arguments); }");0<m.length&&(c+=m.join(" else ")+" else ");c+="$superCstr();\n}\n";c+="$constr.apply(null, arguments);\n";Sa=p;return"(function() {\nfunction "+b+"() {\n"+c+"}\n"+e+f+"return "+b+";\n})()"};bf=function(a,b,d,e){a=a.substring(1,a.length-1);a=Y(a);a=L(a,b);var f=[],g=[],k=[],l=[];a=a.replace(/"([DEGH])(\d+)"/g,function(a,b,c){"D"===b?f.push(c):"E"===b?g.push(c):"H"===b?l.push(c):k.push(c);return""});a=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var p,n;d!==s&&(p=
d.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1"));e!==s&&(n=e.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g));for(d=0;d<l.length;++d)l[d]=Vb(Ca[l[d]]);for(d=0;d<f.length;++d)f[d]=gc(Ca[f[d]]);for(d=0;d<a.length-1;++d)a[d]=Ad(c(a[d]).sb);e=a.pop();for(d=0;d<k.length;++d)k[d]=Zg(Ca[k[d]]);for(d=0;d<g.length;++d)g[d]=hb(Ca[g[d]]);return new df(b,p,n,l,f,a,k,g,{qa:e})};ie.prototype.toString=function(){return"var "+this.name+" \x3d "+this.body+";\n$p."+
this.name+" \x3d "+this.name+";\n"};je.prototype.toString=function(){return"var "+this.name+" \x3d "+this.body+";\n$p."+this.name+" \x3d "+this.name+";\n"};Zb.prototype.toString=function(){var a=f({},this.r.Ab()),b=Sa;Sa=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)};var c="function "+this.name+this.r+" "+this.r.Me(this.body.toString())+"\n$p."+this.name+" \x3d "+this.name+";\n"+this.name+" \x3d "+this.name+".bind($p);";Sa=b;return c};Bd.prototype.toString=function(){return this.ec.prefix+
this.Ub.toString()};$g.prototype.toString=function(){return this.ec.prefix+this.Ub.toString()};ef.prototype.toString=function(){var a=this.ec.prefix;this.Ub!==s&&(a+=this.Ub.toString());return a};Uf.prototype.toString=function(){return"case "+this.Kf+":"};Cd.prototype.toString=function(){return this.label};ff=function(a,b,e){var f=RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),
g=[];a=a.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");for(var k=0,l,p;null!==(l=f.exec(a));){if(l[1]!==s)p=a.lastIndexOf('"B',f.lastIndex),k=a.substring(k,p),"for"===l[1]?g.push(new Bd(zd(Ca[l[2]]),{prefix:k})):"catch"===l[1]?g.push(new $g(U(Ca[l[2]]),{prefix:k})):g.push(new ef(l[1],Pb(Ca[l[2]]),{prefix:k}));else if(l[3]!==s)g.push(new ef(l[3],s,{prefix:a.substring(k,f.lastIndex)}));else if(l[4]!==s){p=a.substring(k,f.lastIndex-l[4].length);if(0!==d(p).length)continue;
g.push(p);k=l[4].charAt(1);l=l[5];"D"===k?g.push(b(Ca[l])):"E"===k?g.push(e(Ca[l])):"H"===k?g.push(Vb(Ca[l])):g.push(Da(Ca[l]))}else if(l[6]!==s)g.push(new Uf(Pb(d(l[7]))));else if(l[8]!==s){p=a.substring(k,f.lastIndex-l[8].length);if(0!==d(p).length)continue;g.push(new Cd(a.substring(k,f.lastIndex)))}else l=c(a.substring(k,f.lastIndex-1)),g.push(l.left),g.push(he(l.sb)),g.push(l.right+";");k=f.lastIndex}b=c(a.substring(k));g.push(b.left);""!==b.sb&&(g.push(he(b.sb)),g.push(";"+b.right));return g};
le.prototype.toString=function(){var a=ah(this.Rc),b=Sa;g(a)||(Sa=function(c){return a.hasOwnProperty(c.name)?c.name:b(c)});var c="{\n"+this.Rc.join("")+"\n}";Sa=b;return c};Da=function(a){return new le(ff(c(a.substring(1,a.length-1)).sb))};Vf.prototype.toString=function(){for(var a=[],b=[],c,d=0,e=this.Rc.length;d<e;++d)c=this.Rc[d],c instanceof je||c instanceof ie?a.push(c):b.push(c);Xa(a);var f=ah(this.Rc);Sa=function(a){a=a.name;return f.hasOwnProperty(a)?a:bh.hasOwnProperty(a)||l.hasOwnProperty(a)||
k.hasOwnProperty(a)?"$p."+a:a};a="// this code was autogenerated from PJS\n(function($p) {\n"+a.join("")+"\n"+b.join("")+"\n})";Sa=null;return a};a=function(){var a=Y(Ca[0]),a=a.replace(/\bimport\s+[^;]+;/g,"");return new Vf(ff(a,ke,wc))}();(function(){function a(c,d){for(var e=d.split("."),f=c.scope,g;f;){if(f.hasOwnProperty(e[0])){g=f[e[0]];break}f=f.scope}g===s&&(g=b[e[0]]);for(var f=1,k=e.length;f<k&&g;++f)g=g.ac[e[f]];return g}var b={},c,d;for(c in wb)if(wb.hasOwnProperty(c)){d=wb[c];var e=d.zc,
f=d.name;e?(e=wb[e],d.scope=e,e.ac===s&&(e.ac={}),e.ac[f]=d):b[f]=d}for(c in wb)if(wb.hasOwnProperty(c)){d=wb[c];if(f=d.body.mf)if(f=a(d,f))d.lb=f,f.Xb||(f.Xb=[]),f.Xb.push(d);var f=d.body.Nc,e=[],g,k;if(f&&0<f.length){g=0;for(k=f.length;g<k;++g){var l=a(d,f[g]);e.push(l);l&&(l.Xb||(l.Xb=[]),l.Xb.push(d))}0<e.length&&(d.Cb=e)}}})(a);(function(){function a(b,d){var e=c[b];if(!e)return!1;var f=e.indexOf(d);if(0>f)return!1;e.splice(f,1);if(0<e.length)return!1;delete c[b];return!0}var b=[],c={},d,e,f;
for(d in wb)if(wb.hasOwnProperty(d))if(f=wb[d],f.ac||f.Xb){var g=[];if(f.ac)for(e in f.ac)f.ac.hasOwnProperty(e)&&g.push(f.ac[e]);f.Xb&&(g=g.concat(f.Xb));c[d]=g}else b.push(d),f.wb=0;for(;0<b.length;)if(d=b.shift(),f=wb[d],f.zc&&a(f.zc,f)&&(b.push(f.zc),wb[f.zc].wb=f.wb+1),f.lb&&a(f.lb.Cc,f)&&(b.push(f.lb.Cc),f.lb.wb=f.wb+1),f.Cb)for(d=0,e=f.Cb.length;d<e;++d)f.Cb[d]&&a(f.Cb[d].Cc,f)&&(b.push(f.Cb[d].Cc),f.Cb[d].wb=f.wb+1)})(a);a=a.toString();a=a.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n");a=a.replace(/__x([0-9A-F]{4})/g,
function(a,b){return String.fromCharCode(parseInt(b,16))});return function(a,b){return a.replace(/'(\d+)'/g,function(a,c){var d=b[c];return"/"===d.charAt(0)?d:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(d)?"(new $p.Character("+d+"))":d})}(a,pc)}function g(a,b){var c=RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(a);if(c&&2===c.length)for(var d=[],c=c.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(a,b){d.push(b);return"{"+(d.length-1)+"}"}}()).replace("\n","").replace("\r",
"").split(";"),e=function(a){return a.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},f=0,g=c.length;f<g;f++){var k=c[f].split("\x3d");if(k&&2===k.length){var l=e(k[0]),m=e(k[1]),k=[];if("preload"===l)for(k=m.split(","),l=0,m=k.length;l<m;l++){var r=e(k[l]);b.Mc.add(r)}else if("font"===l)for(k=m.split(","),l=0,m=k.length;l<m;l++){var r=e(k[l]),s=/^\{(\d*?)\}$/.exec(r);PFont.ki.add(s?JSON.parse("{"+d[s[1]]+"}"):r)}else"pauseOnBlur"===l?b.options.ji="true"===m:"globalKeyEvents"===l?b.options.Pf="true"===
m:"param-"===l.substring(0,6)?b.r[l.substring(6)]=m:b.options[l]=m}}return a}var k=b.od,l=k.PConstants,m=b.Kj,r=b.ic.document,s;a.compile=function(b){var d=new a.Sketch;b=g(b,d);b=f(b);d.Pe=b;return d};a.bi=new function(a){var b={Ii:200};b.xa=a.createElement("div");b.xa.setAttribute("style","opacity:.75;display:block;position:fixed;bottom:0px;left:0px;right:0px;height:50px;background-color:#aaa");b.Jf=a.createElement("div");b.Jf.setAttribute("style","display:block;border:3px black raised;cursor:n-resize;position:absolute;top:0px;left:0px;right:0px;height:5px;background-color:#333");
b.Wb=a.createElement("div");b.Wb.onmouseover=function(){b.Wb.style.setProperty("background-color","#ccc")};b.Wb.onmouseout=function(){b.Wb.style.setProperty("background-color","#ddd")};b.Wb.innerHTML="\x26#10006;";b.Wb.setAttribute("style","opacity:.5;display:block;border:3px black raised;position:absolute;top:10px;right:30px;height:20px;width:20px;background-color:#ddd;color:#000;line-height:20px;text-align:center;cursor:pointer;");b.dc=a.createElement("div");b.dc.setAttribute("style","overflow-x: auto;display:block;position:absolute;left:10px;right:0px;bottom:5px;top:10px;overflow-y:scroll;height:40px;");
b.xa.appendChild(b.Jf);b.xa.appendChild(b.dc);b.xa.appendChild(b.Wb);b.Jf.onmousedown=function(c){b.te=b.xa.style.height;a.selection?a.selection.empty():window.getSelection().removeAllRanges();var d=c.screenY;window.onmousemove=function(a){b.xa.style.height=parseFloat(b.te)+(d-a.screenY)+"px";b.dc.style.height=parseFloat(b.te)+(d-a.screenY)-10+"px"};window.onmouseup=function(c){a.selection?a.selection.empty():window.getSelection().removeAllRanges();b.xa.style.height=parseFloat(b.te)+(d-c.screenY)+
"px";b.dc.style.height=parseFloat(b.te)+(d-c.screenY)-10+"px";window.onmousemove=null;window.onmouseup=null}};b.$a=[];b.print=b.log=function(a){b.$a[b.$a.length-1]?b.$a[b.$a.length-1]+=a+"":b.$a.push(a);b.dc.innerHTML=b.$a.join("");"hidden"===b.xa.style.visibility&&(b.xa.style.visibility="visible");"hidden"===b.xa.style.visibility&&(b.xa.style.visibility="visible")};b.println=function(c){a.body.appendChild(b.xa);b.print(c);b.$a.push("\x3cbr/\x3e");b.dc.innerHTML=b.$a.join("");"hidden"===b.xa.style.visibility&&
(b.xa.style.visibility="visible");b.$a.length>b.Ii?b.$a.splice(0,1):b.dc.scrollTop=b.dc.scrollHeight;"hidden"===b.xa.style.visibility&&(b.xa.style.visibility="visible")};b.bu=function(){b.xa.style.visibility="visible"};b.Uh=function(){b.xa.style.visibility="hidden"};b.Wb.onclick=function(){b.Uh()};b.Uh();return b}(r);return a}},{}],26:[function(a,b){b.S=function(a,b){function e(a,b){return a in r?r[a]:"function"===typeof r[b]?r[b]:function(a){if(a instanceof Array)return a;if("number"===typeof a){var b=
[];b.length=a;return b}}}var f=a.od,g=a.extend,k=a.ic,l=k.ajax,m=k.navigator,r=k.window,s=k.document,u=a.noop,p=f.PConstants;PFont=f.cf;PShapeSVG=f.ef;PVector=f.ff;Char=Character=f.Td;ObjectIterator=f.af;XMLElement=f.$c;XML=f.Ij;var A=r.Fm,E=r.Gm,F=r.localStorage;s.head||(s.head=s.getElementsByTagName("head")[0]);var B=e("Float32Array","WebGLFloatArray"),Q=e("Int32Array","WebGLIntArray"),C=e("Uint16Array","WebGLUnsignedShortArray"),Y=e("Uint8Array","WebGLUnsignedByteArray");if(9<=s.documentMode&&
!s.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: \x3c!DOCTYPE html\x3e";var L=[],lb={},v=this.gf=function(a,c,e){function f(a,b){var c=0,d=b.pixels.Lc(),e=new Q(d),g,k,l,n,p,m,r,s,t,u,v,w;if(a)for(;c<d;)for(g=c,k=c+b.width;c<k;)l=n=b.pixels.getPixel(c),m=c-1,p=c+1,r=c-b.width,s=c+b.width,m<g&&(m=c),p>=k&&(p=c),0>r&&(r=0),s>=d&&(s=c),r=b.pixels.getPixel(r),m=b.pixels.getPixel(m),s=b.pixels.getPixel(s),p=b.pixels.getPixel(p),l=77*
(l>>16&255)+151*(l>>8&255)+28*(l&255),u=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),t=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),v=77*(r>>16&255)+151*(r>>8&255)+28*(r&255),w=77*(s>>16&255)+151*(s>>8&255)+28*(s&255),u<l&&(n=m,l=u),t<l&&(n=p,l=t),v<l&&(n=r,l=v),w<l&&(n=s),e[c++]=n;else for(;c<d;)for(g=c,k=c+b.width;c<k;)l=n=b.pixels.getPixel(c),m=c-1,p=c+1,r=c-b.width,s=c+b.width,m<g&&(m=c),p>=k&&(p=c),0>r&&(r=0),s>=d&&(s=c),r=b.pixels.getPixel(r),m=b.pixels.getPixel(m),s=b.pixels.getPixel(s),p=b.pixels.getPixel(p),
l=77*(l>>16&255)+151*(l>>8&255)+28*(l&255),u=77*(m>>16&255)+151*(m>>8&255)+28*(m&255),t=77*(p>>16&255)+151*(p>>8&255)+28*(p&255),v=77*(r>>16&255)+151*(r>>8&255)+28*(r&255),w=77*(s>>16&255)+151*(s>>8&255)+28*(s&255),u>l&&(n=m,l=u),t>l&&(n=p,l=t),v>l&&(n=r,l=v),w>l&&(n=s),e[c++]=n;b.pixels.set(e)}function k(a,b,c,d){if(a instanceof Vb||a.kf){if(!a.loaded)throw"Error using image in background(): PImage not loaded.";if(a.width!==n.width||a.height!==n.height)throw"Background image must be the same dimensions as the canvas.";
}else a=n.color(a,b,c,d);me=a}function Vb(a,b,c){this.zb=!1;if(a instanceof E)this.Kh(a);else if(b||c){this.width=a||1;this.height=b||1;a=this.ib=s.createElement("canvas");a.width=this.width;a.height=this.height;this.O=a.getContext("2d").createImageData(this.width,this.height);this.Kc=c===p.Wc||c===p.ALPHA?c:p.RGB;if(this.Kc===p.RGB)for(c=3,a=this.O.data,b=a.length;c<b;c+=4)a[c]=255;this.zb=!0;this.updatePixels()}else this.height=this.width=0,this.O=Pm.createImageData(1,1),this.Kc=p.Wc;this.pixels=
$g(this)}function Lf(){hf||(Wf=new ia,hf=new ia,Ik=!0);var a=Gi;Wf.set((a-1)/2,(a+3)/2,(-3-a)/2,(1-a)/2,1-a,(-5-a)/2,a+2,(a-1)/2,(a-1)/2,0,(1-a)/2,0,0,1,0,0);Rg(Hi,hf);Ii||(eh=new ia);eh.set(Wf);eh.Oa(Ii);hf.apply(Wf)}function Rg(a,b){var c=1/a,d=c*c,e=d*c;b.set(0,0,0,1,e,d,c,0,6*e,2*d,0,0,6*e,0,0,0)}function Wb(a,b,c,d){b="TRIANGLES"===b?t.TRIANGLES:"TRIANGLE_FAN"===b?t.TRIANGLE_FAN:t.TRIANGLE_STRIP;var e=new ia;e.scale(1,-1,1);e.apply(va.A());e.sa();t.useProgram(T);La("model3d",T,"uModel",[1,0,
0,0,0,1,0,0,0,0,1,0,0,0,0,1]);La("view3d",T,"uView",e.A());t.enable(t.POLYGON_OFFSET_FILL);t.polygonOffset(1,1);Xa("color3d",T,"uColor",[-1,0,0,0]);hb("vertex3d",T,"aVertex",3,Jk);t.bufferData(t.ARRAY_BUFFER,new B(a),t.STREAM_DRAW);Qb&&null!==Dd&&Ji(c);hb("aColor3d",T,"aColor",4,Ki);t.bufferData(t.ARRAY_BUFFER,new B(c),t.STREAM_DRAW);Hb("aNormal3d",T,"aNormal");Qb&&(Ya("uUsingTexture3d",T,"uUsingTexture",Qb),hb("aTexture3d",T,"aTexture",2,Kk),t.bufferData(t.ARRAY_BUFFER,new B(d),t.STREAM_DRAW));t.drawArrays(b,
0,a.length/3);t.disable(t.POLYGON_OFFSET_FILL)}function Xb(a,b,c){b="LINES"===b?t.LINES:"LINE_LOOP"===b?t.LINE_LOOP:t.LINE_STRIP;var d=new ia;d.scale(1,-1,1);d.apply(va.A());d.sa();t.useProgram(Ib);La("uViewUS",Ib,"uView",d.A());hb("aVertexUS",Ib,"aVertex",3,Li);t.bufferData(t.ARRAY_BUFFER,new B(a),t.STREAM_DRAW);hb("aColorUS",Ib,"aColor",4,Lk);t.bufferData(t.ARRAY_BUFFER,new B(c),t.STREAM_DRAW);t.drawArrays(b,0,a.length/3)}function Mf(a,b){var c=new ia;c.scale(1,-1,1);c.apply(va.A());c.sa();t.useProgram(Ib);
La("uViewUS",Ib,"uView",c.A());Ya("uSmoothUS",Ib,"uSmooth",af);hb("aVertexUS",Ib,"aVertex",3,fh);t.bufferData(t.ARRAY_BUFFER,new B(a),t.STREAM_DRAW);hb("aColorUS",Ib,"aColor",4,Ki);t.bufferData(t.ARRAY_BUFFER,new B(b),t.STREAM_DRAW);t.drawArrays(t.POINTS,0,a.length/3)}function Nf(a){for(var b=0,c=0;c<a.length;c++)b=0!==c?Math.max(b,Math.abs(a[c])):Math.abs(a[c]);a=(b+"").indexOf(".");0===a?a=1:-1===a&&(a=(b+"").length);return a}function ea(){}function qa(){}function W(){}function Na(){}function he(a,
b,c,d){return{x:a-c/2,y:b-d/2,We:c,we:d}}function Yg(a,b,c,d,e){return{x:a,y:b,We:e?c:c-a,we:e?d:d-b}}function Rf(a,b,c,d){return{x:a,y:b,We:c,we:d}}function yd(a,b,c){var d=a.createShader(a.VERTEX_SHADER);a.shaderSource(d,b);a.compileShader(d);if(!a.getShaderParameter(d,a.COMPILE_STATUS))throw a.getShaderInfoLog(d);b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,c);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw a.getShaderInfoLog(b);c=a.createProgram();a.attachShader(c,
d);a.attachShader(c,b);a.linkProgram(c);if(!a.getProgramParameter(c,a.LINK_STATUS))throw"Error linking shaders.";return c}function zd(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c);Pb.push({Ih:a,type:b,fn:c})}function Xa(a,c,e,f){var g=xc.wc[a];g===b&&(g=t.getUniformLocation(c,e),xc.wc[a]=g);null!==g&&(4===f.length?t.uniform4fv(g,f):3===f.length?t.uniform3fv(g,f):2===f.length?t.uniform2fv(g,f):t.uniform1f(g,f))}function Ya(a,c,e,f){var g=xc.wc[a];g===b&&(g=t.getUniformLocation(c,
e),xc.wc[a]=g);null!==g&&(4===f.length?t.uniform4iv(g,f):3===f.length?t.uniform3iv(g,f):2===f.length?t.uniform2iv(g,f):t.uniform1i(g,f))}function La(a,c,e,f){var g=xc.wc[a];g===b&&(g=t.getUniformLocation(c,e),xc.wc[a]=g);-1!==g&&(16===f.length?t.uniformMatrix4fv(g,!1,f):9===f.length?t.uniformMatrix3fv(g,!1,f):t.uniformMatrix2fv(g,!1,f))}function hb(a,c,e,f,g){var k=xc.attributes[a];k===b&&(k=t.getAttribLocation(c,e),xc.attributes[a]=k);-1!==k&&(t.bindBuffer(t.ARRAY_BUFFER,g),t.vertexAttribPointer(k,
f,t.FLOAT,!1,0,0),t.enableVertexAttribArray(k))}function Hb(a,c,e){var f=xc.attributes[a];f===b&&(f=t.getAttribLocation(c,e),xc.attributes[a]=f);-1!==f&&t.disableVertexAttribArray(f)}function gc(a,b,c,d){dd===p.Vd?(c=n.color.zi(a,b,c),a=c[0],b=c[1],c=c[2]):(a=Math.round(a/$b*255),b=Math.round(b/yc*255),c=Math.round(c/ac*255));d=Math.round(d/Ab*255);a=0>a?0:a;b=0>b?0:b;c=0>c?0:c;d=0>d?0:d;return(255<d?255:d)<<24&p.T|(255<a?255:a)<<16&p.ia|(255<b?255:b)<<8&p.ha|(255<c?255:c)&p.ga}function Tf(a){if(a<=
$b&&0<=a){if(dd===p.RGB)return gc(a,a,a,Ab);if(dd===p.Vd)return gc(0,0,a/$b*ac,Ab)}if(a)return 2147483647<a&&(a-=4294967296),a}function Ad(a){var b,c,d;b=((a&p.ia)>>>16)/255;c=((a&p.ha)>>>8)/255;d=(a&p.ga)/255;a=n.max(n.max(b,c),d);var e=n.min(n.min(b,c),d);if(e===a)return[0,0,a*ac];b=(b===a?(c-d)/(a-e):c===a?2+(d-b)/(a-e):4+(b-c)/(a-e))/6;0>b?b+=1:1<b&&(b-=1);return[b*$b,(a-e)/a*yc,a*ac]}function bd(){t.restore();wd=Wg=!0}function Zg(){var a=(Date.now()-Mi)/1E3;gh++;var b=gh/a;0.5<a&&(Mi=Date.now(),
gh=0,n.__frameRate=b);n.frameCount++}function cf(a){a=parseInt("0x"+a,16);2147483647<a&&(a-=4294967296);return a}function df(a){if("number"===typeof a)return 0!==a;if("boolean"===typeof a)return a;if("string"===typeof a)return"true"===a.toLowerCase();if(a instanceof Char)return 49===a.code||84===a.code||116===a.code}function ie(a){if("number"===typeof a)return a;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseFloat(a);if(a instanceof Char)return a.code}function je(a,b){if("number"===
typeof a)return a&4294967295;if("boolean"===typeof a)return a?1:0;if("string"===typeof a)return parseInt(a,b||10)&4294967295;if(a instanceof Char)return a.code}function wc(){Ka&&(wd&&(t.fillStyle=n.color.toString(vd),wd=!1),t.fill())}function Zb(){Aa&&(Wg&&(t.strokeStyle=n.color.toString(xd),Wg=!1),t.stroke())}function ke(){wc();Zb();t.closePath()}function Bd(a){var c=Mk.shift();c===b&&(c={},c.canvas=s.createElement("canvas"),c.context=c.canvas.getContext("2d"));Mk.push(c);var e=c.canvas,f=c.context,
g=a.width,k=a.height;e.width=g;e.height=k;a?"data"in a?f.putImageData(a,0,0):(f.clearRect(0,0,g,k),f.drawImage(a,0,0,g,k)):f.clearRect(0,0,g,k);return c}function $g(a){return{Lc:function(a){return function(){if(a.fb)throw"Image is loaded remotely. Cannot get length.";return a.O.data.length?a.O.data.length/4:0}}(a),getPixel:function(a){return function(b){b*=4;var c=a.O.data;if(a.fb)throw"Image is loaded remotely. Cannot get pixels.";return c[b+3]<<24&p.T|c[b]<<16&p.ia|c[b+1]<<8&p.ha|c[b+2]&p.ga}}(a),
setPixel:function(a){return function(b,c){var d=4*b,e=a.O.data;if(a.fb)throw"Image is loaded remotely. Cannot set pixel.";e[d+0]=(c&p.ia)>>>16;e[d+1]=(c&p.ha)>>>8;e[d+2]=c&p.ga;e[d+3]=(c&p.T)>>>24;a.zb=!0}}(a),toArray:function(a){return function(){var b=[],c=a.O.data,d=a.width*a.height;if(a.fb)throw"Image is loaded remotely. Cannot get pixels.";for(var e=0,f=0;e<d;e++,f+=4)b.push(c[f+3]<<24&p.T|c[f]<<16&p.ia|c[f+1]<<8&p.ha|c[f+2]&p.ga);return b}}(a),set:function(a){return function(b){var c,d,e;if(this.fb)throw"Image is loaded remotely. Cannot set pixels.";
d=a.O.data;for(var f=0,Oa=b.length;f<Oa;f++)e=b[f],c=4*f,d[c+0]=(e&p.ia)>>>16,d[c+1]=(e&p.ha)>>>8,d[c+2]=e&p.ga,d[c+3]=(e&p.T)>>>24;a.zb=!0}}(a)}}function ef(a,b,c,d){var e=new Vb(c,d,p.Wc);e.Lh(n.Tc(a,b,c,d));return e}function Uf(a,b,c,d,e){if(e.fb)throw"Image is loaded remotely. Cannot get x,y,w,h.";var f=new Vb(c,d,p.Wc),g=f.O.data,k=e.width,l=e.height;e=e.O.data;var n=Math.max(0,-b),m=Math.max(0,-a);d=Math.min(d,l-b);for(l=Math.min(c,k-a);n<d;++n)for(var r=4*((b+n)*k+(a+m)),s=4*(n*c+m),t=m;t<
l;++t)g[s++]=e[r++],g[s++]=e[r++],g[s++]=e[r++],g[s++]=e[r++];f.zb=!0;return f}function Cd(){Xf&&(t=Nk,Xf=!1,n.updatePixels())}function ah(){function a(b,c){b[c]=function(){Cd();t[c].apply(t,arguments)}}function b(a,c){n.defineProperty(a,c,{get:function(){Cd();return t[c]},set:function(a){Cd();t[c]=a}})}for(var c in t)"function"===typeof t[c]?a(this,c):b(this,c)}function le(a){return a instanceof String?a:"number"===typeof a?a===(0|a)?a.toString():n.dl(a,0,3):null===a||a===b?"":a.toString()}function Vf(a,
b,c,d){var e;0>a.indexOf("\n")?(a=[a],e=1):(a=a.split(/\r?\n/g),e=a.length);var f=0;ed===p.Qg?f=fd+Kc:ed===p.Sa?f=fd/2-(e-1)*qc/2:ed===p.pg&&(f=-(Kc+(e-1)*qc));for(var g=0;g<e;++g)vb.Ld(a[g],b,c+f,d,ne),f+=qc}function bh(a,b,c,d,e,f){if(0!==a.length&&0!==d&&0!==e&&!(Lc>e)){for(var g=-1,k=0,l=0,n=[],m=0,r=a.length;m<r;m++){var s=a[m],t=" "===s,u=qb.Ce(s);if("\n"!==s&&l+u<=d)t&&(g=m),l+=u;else{if(g+1===k)if(0<m)g=m;else return;"\n"===s?(n.push({text:a.substring(k,m),width:l}),k=m+1):(n.push({text:a.substring(k,
g+1),width:l}),k=g+1);l=0;m=k-1}}k<r&&n.push({text:a.substring(k),width:l});a=1;g=fd;ne===p.Sa?a=d/2:ne===p.kc&&(a=d);d=n.length;k=Math.min(d,Math.floor(e/qc));ed===p.Qg?g=fd+Kc:ed===p.Sa?g=e/2-qc*(k/2-1):ed===p.pg&&(g=Kc+qc);for(k=0;k<d;k++){m=k*qc;if(g+m>e-Kc)break;l=n[k];vb.Ld(l.text,b+a,c+g+m,f,ne)}}}function pc(a){vb="3D"===a?new qa:"2D"===a?new W:new ea;for(var b in ea.prototype)ea.prototype.hasOwnProperty(b)&&0>b.indexOf("$")&&(n[b]=vb[b]);vb.Xe()}function ta(a){return function(){pc("2D");
return vb[a].apply(this,arguments)}}function Ca(a){a=a.which||a.keyCode;switch(a){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return a}function Sa(a){"function"===typeof a.preventDefault?a.preventDefault():"function"===typeof a.stopPropagation&&a.stopPropagation();return!1}function wb(){for(var a in Ed)if(Ed.hasOwnProperty(a)){n.__keyPressed=!0;return}n.__keyPressed=!1}function oc(a,b){Ed[a]=b;oe=null;n.key=b;n.keyCode=a;n.keyPressed();
n.keyCode=0;n.keyTyped();wb()}function Qf(a){var b=Ca(a);if(b===p.Mi)oc(b,new Char(127));else if(0>Qm.indexOf(b))oe=b;else{var c=new Char(p.Ki);n.key=c;n.keyCode=b;Ed[b]=c;n.keyPressed();oe=null;wb();return Sa(a)}}function bf(a){if(null!==oe){var b=oe,c;c=a.which||a.keyCode;var d=a.shiftKey||a.ctrlKey||a.altKey||a.metaKey;switch(c){case 13:c=d?13:10;break;case 8:c=d?127:8}c=new Char(c);oc(b,c);return Sa(a)}}function Sf(a){a=Ca(a);var c=Ed[a];c!==b&&(n.key=c,n.keyCode=a,n.keyReleased(),delete Ed[a],
wb())}if(!(this instanceof v))throw"called Processing constructor as if it were a function: missing 'new'.";var Da={},ff=a===b&&c===b,Da=ff?s.createElement("canvas"):"string"===typeof a?s.getElementById(a):a;if(!("getContext"in Da))throw"called Processing constructor without passing canvas element reference or id.";var Pb=[],n=this;n.Td=n.dm=Char;g.kg(n);g.Jl(n);g.Kl(n,function(a){return Array.prototype.slice.call(a,1)});g.Ll(n,Da,zd,s,p);e&&Object.keys(e).forEach(function(a){n[a]=e[a]});n.Yb={canvas:Da,
context:b,Dl:b,window:r};n.name="Processing.js Instance";n.Hl=!1;n.focused=!1;n.he=!1;n.nb={};n.pmouseX=0;n.pmouseY=0;n.mouseX=0;n.mouseY=0;n.mouseButton=0;n.mouseScroll=0;n.mouseClicked=b;n.mouseDragged=b;n.mouseMoved=b;n.mousePressed=b;n.mouseReleased=b;n.mouseScrolled=b;n.mouseOver=b;n.mouseOut=b;n.touchStart=b;n.touchEnd=b;n.touchMove=b;n.touchCancel=b;n.key=b;n.keyCode=b;n.keyPressed=u;n.keyReleased=u;n.keyTyped=u;n.draw=b;n.setup=b;n.__mousePressed=!1;n.__keyPressed=!1;n.__frameRate=60;n.frameCount=
0;n.width=100;n.height=100;var t,jb,vb,Ka=!0,Gb=[1,1,1,1],vd=4294967295,wd=!0,Aa=!0,Yb=[0,0,0,1],xd=4278190080,Wg=!0,Eb=1,Xg=!1,af=!1,ge=!0,ch=0,cd=p.yb,Jc=p.Sa,Di=0,Ei=0,Fi=0,dh=p.Fg,Ci=60,Ok=1E3/Ci,Rm=Da.style.cursor,eb=p.Yc,Gi=0,Hi=20,Ik=!1,me=-3355444,Ni=20,Ab=255,$b=255,yc=255,ac=255,hh=0,ih=0,dd=p.RGB,Dd=null,Ji=null,Pk=Date.now(),Mi=Pk,gh=0,gd,Wf,eh,hf,jf,Ii,Oi,xc={attributes:{},wc:{}},T,fa,Ib,Pi,Qi,Ri,jh,Si,Yf,Li,Jk,Ki,Lk,fh,Kk,Qk,Rk,Sk=0,Tk=0,Uk=p.Ag,Qb=!1,Ti,Ui,Vi,ne=p.Xc,ed=p.og,kh=p.mj,
kf="Arial",Lc=12,fd=9,Kc=2,qc=14,qb=PFont.get(kf,Lc),Nk,Wi=null,Xf=!1,Vk,Wk=1E3,Ed=[],oe=null,Qm=[p.Dj,p.Li,p.Di,p.Ji,p.sj,p.rj,p.Ui,p.jj,p.Xc,p.Hj,p.kc,p.Qi,p.pj,p.kj,p.Wi,p.$i,p.aj,p.bj,p.cj,p.dj,p.ej,p.fj,p.gj,p.Xi,p.Yi,p.Zi,p.lj],rb=0,lh=0,pe=0,Mc=[],Nc=[],Oc=[],Zf=new B(p.jb),$f=new B(p.jb),Ba,ag,Fd,va,Bb,lf,mf,bg,zc,mh=Math.PI/180*60,Xi=n.width/2,qe=n.height/2,re=qe/Math.tan(mh/2),Xk=re/10,Yk=10*re,Zk=n.width/n.height,H=[],Rb=[],Jb=0,nf=!1,of=!1,Gd=!0,cg=p.yb,$k=[],al=new B([0.5,0.5,-0.5,0.5,
-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]),bl=new B([0.5,0.5,0.5,0.5,-0.5,
0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]),Sm=new B([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,
0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),Yi=new B([0,0,0,0,1,0,1,1,0,1,0,0]),Tm=new B([0,0,1,0,0,1,0,0,1,0,0,1]),Um="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index \x3d\x3d 0) return uLights0;  if(index \x3d\x3d 1) return uLights1;  if(index \x3d\x3d 2) return uLights2;  if(index \x3d\x3d 3) return uLights3;  if(index \x3d\x3d 4) return uLights4;  if(index \x3d\x3d 5) return uLights5;  if(index \x3d\x3d 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d \x3d length( light.position - ecPos );  float attenuation \x3d 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient +\x3d light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor \x3d 0.0;  float nDotVP \x3d max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH \x3d max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP !\x3d 0.0 ){    powerFactor \x3d pow( nDotVH, uShininess );  }  col +\x3d light.color * nDotVP;  spec +\x3d uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP \x3d light.position - ecPos;  float d \x3d length( VP );   VP \x3d normalize( VP );  float attenuation \x3d 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP \x3d max( 0.0, dot( vertNormal, VP ));  vec3 halfVector \x3d normalize( VP - normalize(ecPos) );  float nDotHV \x3d max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP \x3d\x3d 0.0 ) {    powerFactor \x3d 0.0;  }  else {    powerFactor \x3d pow( nDotHV, uShininess );  }  spec +\x3d uSpecular * powerFactor * attenuation;  col +\x3d light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor \x3d 0.0;  vec3 VP \x3d light.position - ecPos;  vec3 ldir \x3d normalize( -light.direction );  float d \x3d length( VP );  VP \x3d normalize( VP );  float attenuation \x3d 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot \x3d dot( VP, ldir );"+
(/Windows/.test(m.userAgent)?"  spotAttenuation \x3d 1.0; ":"  if( spotDot \x3e cos( light.angle ) ) {    spotAttenuation \x3d pow( spotDot, light.concentration );  }  else{    spotAttenuation \x3d 0.0;  }  attenuation *\x3d spotAttenuation;")+"  float nDotVP \x3d max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector \x3d normalize( VP - normalize(ecPos) );  float nDotHV \x3d max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP !\x3d 0.0 ) {    powerFactor \x3d pow( nDotHV, uShininess );  }  spec +\x3d uSpecular * powerFactor * attenuation;  col +\x3d light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient \x3d vec3( 0.0 );  vec3 finalDiffuse \x3d vec3( 0.0 );  vec3 finalSpecular \x3d vec3( 0.0 );  vec4 col \x3d uColor;  if ( uColor[0] \x3d\x3d -1.0 ){    col \x3d aColor;  }  vec3 norm \x3d normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 \x3d uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos \x3d (vec3(ecPos4))/ecPos4.w;  if( uLightCount \x3d\x3d 0 ) {    vFrontColor \x3d col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i \x3d 0; i \x3c 8; i++ ) {      Light l \x3d getLight(i);      if( i \x3e\x3d uLightCount ){        break;      }      if( l.type \x3d\x3d 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type \x3d\x3d 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type \x3d\x3d 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat \x3d\x3d false ) {     vFrontColor \x3d vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor \x3d vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy \x3d aTexture.xy;  gl_Position \x3d uProjection * uView * uModel * vec4( aVertex, 1.0 );}",
nh=Rf;W.prototype=new Na;W.prototype.constructor=W;qa.prototype=new Na;qa.prototype.constructor=qa;ea.prototype=new Na;ea.prototype.constructor=ea;Na.prototype.kb=u;n.shape=function(a,b,c,d,e){1<=arguments.length&&null!==arguments[0]&&a.isVisible()&&(n.pushMatrix(),cg===p.Sa?5===arguments.length?(n.translate(b-d/2,c-e/2),n.scale(d/a.width,e/a.height)):3===arguments.length?n.translate(b-a.width/2,-a.height/2):n.translate(-a.width/2,-a.height/2):cg===p.yb?5===arguments.length?(n.translate(b,c),n.scale(d/
a.width,e/a.height)):3===arguments.length&&n.translate(b,c):cg===p.jc&&(5===arguments.length?(d-=b,e-=c,n.translate(b,c),n.scale(d/a.width,e/a.height)):3===arguments.length&&n.translate(b,c)),a.draw(n),(1===arguments.length&&cg===p.Sa||1<arguments.length)&&n.popMatrix())};n.shapeMode=function(a){cg=a};n.loadShape=function(a){return 1===arguments.length&&-1<a.indexOf(".svg")?new PShapeSVG(null,a):null};n.loadXML=function(a){return new XML(n,a)};var hd=n.Xd=function(){0===arguments.length?this.reset():
1===arguments.length&&arguments[0]instanceof hd?this.set(arguments[0].A()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};hd.prototype={set:function(){if(6===arguments.length){var a=arguments;this.set([a[0],a[1],a[2],a[3],a[4],a[5]])}else 1===arguments.length&&arguments[0]instanceof hd?this.elements=arguments[0].A():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=new hd;a.set(this.elements);
return a},reset:function(){this.set([1,0,0,0,1,0])},A:function(){return this.elements.slice()},translate:function(a,b){this.elements[2]=a*this.elements[0]+b*this.elements[1]+this.elements[2];this.elements[5]=a*this.elements[3]+b*this.elements[4]+this.elements[5]},yd:function(a,b){this.translate(-a,-b)},sa:function(){},Nb:function(a,b){var c,d;a instanceof PVector?(c=a.x,d=a.y,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],b||(b=[]));b instanceof Array?(b[0]=this.elements[0]*c+this.elements[1]*
d+this.elements[2],b[1]=this.elements[3]*c+this.elements[4]*d+this.elements[5]):b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2],b.y=this.elements[3]*c+this.elements[4]*d+this.elements[5],b.z=0);return b},He:function(a,b){return a*this.elements[0]+b*this.elements[1]+this.elements[2]},Ie:function(a,b){return a*this.elements[3]+b*this.elements[4]+this.elements[5]},Ne:function(a){this.apply(1,0,1,a,0,0)},Oe:function(a){this.apply(1,0,1,0,a,0)},shearX:function(a){this.apply(1,
0,1,Math.tan(a),0,0)},shearY:function(a){this.apply(1,0,1,0,Math.tan(a),0)},Hf:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},cc:function(){var a=this.Hf();if(Math.abs(a)>p.Dg){var b=this.elements[0],c=this.elements[1],d=this.elements[2],e=this.elements[3],f=this.elements[4],g=this.elements[5];this.elements[0]=f/a;this.elements[3]=-e/a;this.elements[1]=-c/a;this.elements[4]=b/a;this.elements[2]=(c*g-f*d)/a;this.elements[5]=(e*d-b*g)/a;return!0}return!1},scale:function(a,
b){a&&!b&&(b=a);a&&b&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[3]*=a,this.elements[4]*=b)},xd:function(a,b){a&&!b&&(b=a);this.scale(1/a,1/b)},apply:function(){var a;1===arguments.length&&arguments[0]instanceof hd?a=arguments[0].A():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,this.elements[2],0,0,this.elements[5]],c=0,d=0;2>d;d++)for(var e=0;3>e;e++,c++)b[c]+=this.elements[3*d+0]*a[e+
0]+this.elements[3*d+1]*a[e+3];this.elements=b.slice()},Oa:function(){var a;1===arguments.length&&arguments[0]instanceof hd?a=arguments[0].A():6===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);var b=[0,0,a[2],0,0,a[5]];b[2]=a[2]+this.elements[2]*a[0]+this.elements[5]*a[1];b[5]=a[5]+this.elements[2]*a[3]+this.elements[5]*a[4];b[0]=this.elements[0]*a[0]+this.elements[3]*a[1];b[3]=this.elements[0]*a[3]+this.elements[3]*a[4];
b[1]=this.elements[1]*a[0]+this.elements[4]*a[1];b[4]=this.elements[1]*a[3]+this.elements[4]*a[4];this.elements=b.slice()},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements[0],d=this.elements[1];this.elements[0]=b*c+a*d;this.elements[1]=-a*c+b*d;c=this.elements[3];d=this.elements[4];this.elements[3]=b*c+a*d;this.elements[4]=-a*c+b*d},rotateZ:function(a){this.rotate(a)},wd:function(a){this.rotateZ(a-Math.PI)},print:function(){var a=Nf(this.elements),a=""+n.H(this.elements[0],a,
4)+" "+n.H(this.elements[1],a,4)+" "+n.H(this.elements[2],a,4)+"\n"+n.H(this.elements[3],a,4)+" "+n.H(this.elements[4],a,4)+" "+n.H(this.elements[5],a,4)+"\n\n";n.println(a)}};var ia=n.Yd=function(){this.reset()};ia.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof ia?this.elements=arguments[0].A():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var a=
new ia;a.set(this.elements);return a},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},A:function(){return this.elements.slice()},translate:function(a,c,e){e===b&&(e=0);this.elements[3]+=a*this.elements[0]+c*this.elements[1]+e*this.elements[2];this.elements[7]+=a*this.elements[4]+c*this.elements[5]+e*this.elements[6];this.elements[11]+=a*this.elements[8]+c*this.elements[9]+e*this.elements[10];this.elements[15]+=a*this.elements[12]+c*this.elements[13]+e*this.elements[14]},sa:function(){var a=
this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=a;a=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=a;a=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=a;a=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=a;a=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=a;a=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=a},Nb:function(a,b){var c,d,e,f;a instanceof PVector?(c=a.x,d=a.y,
e=a.z,f=1,b||(b=new PVector)):a instanceof Array&&(c=a[0],d=a[1],e=a[2],f=a[3]||1,!b||3!==b.length&&4!==b.length)&&(b=[0,0,0]);b instanceof Array&&(3===b.length?(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b[1]=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]):4===b.length&&(b[0]=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3]*f,b[1]=
this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7]*f,b[2]=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]*f,b[3]=this.elements[12]*c+this.elements[13]*d+this.elements[14]*e+this.elements[15]*f));b instanceof PVector&&(b.x=this.elements[0]*c+this.elements[1]*d+this.elements[2]*e+this.elements[3],b.y=this.elements[4]*c+this.elements[5]*d+this.elements[6]*e+this.elements[7],b.z=this.elements[8]*c+this.elements[9]*d+this.elements[10]*e+this.elements[11]);
return b},Oa:function(){var a;1===arguments.length&&arguments[0]instanceof ia?a=arguments[0].A():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var e=0;4>e;e++,c++)b[c]+=this.elements[e+0]*a[4*d+0]+this.elements[e+4]*a[4*d+1]+this.elements[e+8]*a[4*d+2]+this.elements[e+12]*a[4*d+3];this.elements=b.slice()},apply:function(){var a;1===arguments.length&&
arguments[0]instanceof ia?a=arguments[0].A():16===arguments.length?a=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(a=arguments[0]);for(var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=0,d=0;4>d;d++)for(var e=0;4>e;e++,c++)b[c]+=this.elements[4*d+0]*a[e+0]+this.elements[4*d+1]*a[e+4]+this.elements[4*d+2]*a[e+8]+this.elements[4*d+3]*a[e+12];this.elements=b.slice()},rotate:function(a,b,c,d){if(4>arguments.length)this.rotateZ(a);else{var e=new PVector(b,c,d),f=e.mag();
if(0!==f){1!=f&&(e.normalize(),b=e.x,c=e.y,d=e.z);var e=n.cos(a),f=n.sin(a),g=1-e;this.apply(g*b*b+e,g*b*c-f*d,g*b*d+f*c,0,g*b*c+f*d,g*c*c+e,g*c*d-f*b,0,g*b*d-f*c,g*c*d+f*b,g*d*d+e,0,0,0,0,1)}}},Wh:function(){bg===b&&(bg=new ia);var a=arguments;bg.set(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]);if(!bg.cc())return!1;this.Oa(bg);return!0},rotateX:function(a){var b=n.cos(a);a=n.sin(a);this.apply([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},rotateY:function(a){var b=
n.cos(a);a=n.sin(a);this.apply([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},rotateZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.apply([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},scale:function(a,b,c){!a||b||c?a&&b&&!c&&(c=1):b=c=a;a&&b&&c&&(this.elements[0]*=a,this.elements[1]*=b,this.elements[2]*=c,this.elements[4]*=a,this.elements[5]*=b,this.elements[6]*=c,this.elements[8]*=a,this.elements[9]*=b,this.elements[10]*=c,this.elements[12]*=a,this.elements[13]*=b,this.elements[14]*=c)},Ne:function(a){a=Math.tan(a);
this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},Oe:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(a){a=Math.tan(a);this.apply(1,a,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(a){a=Math.tan(a);this.apply(1,0,0,0,a,1,0,0,0,0,1,0,0,0,0,1)},He:function(a,b,c,d){return c?d?this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]*d:this.elements[0]*a+this.elements[1]*b+this.elements[2]*c+this.elements[3]:this.elements[0]*a+this.elements[1]*b+this.elements[3]},
Ie:function(a,b,c,d){return c?d?this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]*d:this.elements[4]*a+this.elements[5]*b+this.elements[6]*c+this.elements[7]:this.elements[4]*a+this.elements[5]*b+this.elements[7]},cc:function(){var a=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],b=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],c=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],d=this.elements[1]*this.elements[6]-
this.elements[2]*this.elements[5],e=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],f=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],g=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],k=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],l=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],n=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],p=this.elements[9]*this.elements[15]-
this.elements[11]*this.elements[13],m=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],r=a*m-b*p+c*n+d*l-e*k+f*g;if(1E-9>=Math.abs(r))return!1;var s=[];s[0]=+this.elements[5]*m-this.elements[6]*p+this.elements[7]*n;s[4]=-this.elements[4]*m+this.elements[6]*l-this.elements[7]*k;s[8]=+this.elements[4]*p-this.elements[5]*l+this.elements[7]*g;s[12]=-this.elements[4]*n+this.elements[5]*k-this.elements[6]*g;s[1]=-this.elements[1]*m+this.elements[2]*p-this.elements[3]*n;s[5]=+this.elements[0]*
m-this.elements[2]*l+this.elements[3]*k;s[9]=-this.elements[0]*p+this.elements[1]*l-this.elements[3]*g;s[13]=+this.elements[0]*n-this.elements[1]*k+this.elements[2]*g;s[2]=+this.elements[13]*f-this.elements[14]*e+this.elements[15]*d;s[6]=-this.elements[12]*f+this.elements[14]*c-this.elements[15]*b;s[10]=+this.elements[12]*e-this.elements[13]*c+this.elements[15]*a;s[14]=-this.elements[12]*d+this.elements[13]*b-this.elements[14]*a;s[3]=-this.elements[9]*f+this.elements[10]*e-this.elements[11]*d;s[7]=
+this.elements[8]*f-this.elements[10]*c+this.elements[11]*b;s[11]=-this.elements[8]*e+this.elements[9]*c-this.elements[11]*a;s[15]=+this.elements[8]*d-this.elements[9]*b+this.elements[10]*a;a=1/r;s[0]*=a;s[1]*=a;s[2]*=a;s[3]*=a;s[4]*=a;s[5]*=a;s[6]*=a;s[7]*=a;s[8]*=a;s[9]*=a;s[10]*=a;s[11]*=a;s[12]*=a;s[13]*=a;s[14]*=a;s[15]*=a;this.elements=s.slice();return!0},toString:function(){for(var a="",b=0;15>b;b++)a+=this.elements[b]+", ";return a+=this.elements[15]},print:function(){var a=Nf(this.elements),
a=""+n.H(this.elements[0],a,4)+" "+n.H(this.elements[1],a,4)+" "+n.H(this.elements[2],a,4)+" "+n.H(this.elements[3],a,4)+"\n"+n.H(this.elements[4],a,4)+" "+n.H(this.elements[5],a,4)+" "+n.H(this.elements[6],a,4)+" "+n.H(this.elements[7],a,4)+"\n"+n.H(this.elements[8],a,4)+" "+n.H(this.elements[9],a,4)+" "+n.H(this.elements[10],a,4)+" "+n.H(this.elements[11],a,4)+"\n"+n.H(this.elements[12],a,4)+" "+n.H(this.elements[13],a,4)+" "+n.H(this.elements[14],a,4)+" "+n.H(this.elements[15],a,4)+"\n\n";n.println(a)},
yd:function(a,b,c){this.Oa(1,0,0,-a,0,1,0,-b,0,0,1,-c,0,0,0,1)},Xh:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1])},Yh:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1])},wd:function(a){var b=Math.cos(-a);a=Math.sin(-a);this.Oa([b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1])},xd:function(a,b,c){this.Oa([1/a,0,0,0,0,1/b,0,0,0,0,1/c,0,0,0,0,1])}};var id=n.an=function(){this.xc=[]};id.prototype.load=function(){var a=vb.Qd();1===arguments.length?
a.set(arguments[0]):a.set(arguments);this.xc.push(a)};W.prototype.Qd=function(){return new hd};qa.prototype.Qd=function(){return new ia};id.prototype.push=function(){this.xc.push(this.vl())};id.prototype.pop=function(){return this.xc.pop()};id.prototype.vl=function(){var a=vb.Qd();a.set(this.xc[this.xc.length-1]);return a};id.prototype.Nb=function(a){this.xc[this.xc.length-1].apply(a)};n.split=function(a,b){return a.split(b)};n.lu=function(a,c){if(c===b)return a.split(/\s+/g);var e=c.split(/()/g),
f="",g=a.length,k,l,n=[];for(k=0;k<g;k++)l=a[k],-1<e.indexOf(l)?(""!==f&&n.push(f),f=""):f+=l;""!==f&&n.push(f);return n};n.append=function(a,b){a[a.length]=b;return a};n.concat=function(a,b){return a.concat(b)};n.sort=function(a,b){var c=[];if(0<a.length){for(var d=0<b?b:a.length,e=0;e<d;e++)c.push(a[e]);"string"===typeof a[0]?c.sort():c.sort(function(a,b){return a-b});if(0<b)for(d=c.length;d<a.length;d++)c.push(a[d])}return c};n.splice=function(a,b,c){if(0===b.length)return a;if(b instanceof Array)for(var d=
0;d<b.length;c++,d++)a.splice(c,0,b[d]);else a.splice(c,0,b);return a};n.pu=function(a,c,e){return a.slice(c,e!==b?c+e:a.length)};n.join=function(a,b){return a.join(b)};n.au=function(a){for(var b=[],c=a.length,d=0;d<c;d++)b[d]=a[d];b.pop();return b};n.expand=function(a,b){var c=a.slice(0);c.length=b||2*a.length;return c};n.jo=function(){var a,c=0,e,f=0,g;2===arguments.length?(a=arguments[0],e=arguments[1],g=a.length):3===arguments.length?(a=arguments[0],e=arguments[1],g=arguments[2]):5===arguments.length&&
(a=arguments[0],c=arguments[1],e=arguments[2],f=arguments[3],g=arguments[4]);for(var k=c;k<g+c;k++,f++)if(e[f]!==b)e[f]=a[k];else throw"array index out of bounds exception";};n.reverse=function(a){return a.reverse()};n.$s=function(a,b,c){return a+((b-a)*c>>8)};n.Bt=function(a){return 0>a?0:255<a?255:a};n.U=function(){function a(b,c,d,e,g,Oa,k,l){b=f(((b&4278190080)>>>24)+c,255)<<24;d+=(Oa-d)*c>>8;e+=(k-e)*c>>8;c=g+((l-g)*c>>8);return b|(0>d?0:255<d?255:d)<<16|(0>e?0:255<e?255:e)<<8|(0>c?0:255<c?255:
c)}var b=p.T,c=p.ia,d=p.ha,e=p.ga,f=Math.min,g=Math.max;return{replace:function(a,b){return b},blend:function(a,g){var Oa=(g&b)>>>24,k=a&c,l=a&d,n=a&e,p=g&c,m=g&d,r=g&e;return f(((a&b)>>>24)+Oa,255)<<24|k+((p-k)*Oa>>8)&c|l+((m-l)*Oa>>8)&d|n+((r-n)*Oa>>8)&e},add:function(a,g){var Oa=(g&b)>>>24;return f(((a&b)>>>24)+Oa,255)<<24|f((a&c)+((g&c)>>8)*Oa,c)&c|f((a&d)+((g&d)>>8)*Oa,d)&d|f((a&e)+((g&e)*Oa>>8),e)},wi:function(a,Oa){var k=(Oa&b)>>>24;return f(((a&b)>>>24)+k,255)<<24|g((a&c)-((Oa&c)>>8)*k,d)&
c|g((a&d)-((Oa&d)>>8)*k,e)&d|g((a&e)-((Oa&e)*k>>8),0)},ai:function(a,Oa){var k=(Oa&b)>>>24;return f(((a&b)>>>24)+k,255)<<24|g(a&c,((Oa&c)>>8)*k)&c|g(a&d,((Oa&d)>>8)*k)&d|g(a&e,(Oa&e)*k>>8)},Eh:function(a,g){var Oa=(g&b)>>>24,k=a&c,l=a&d,n=a&e,p=f(a&c,((g&c)>>8)*Oa),m=f(a&d,((g&d)>>8)*Oa),r=f(a&e,(g&e)*Oa>>8);return f(((a&b)>>>24)+Oa,255)<<24|k+((p-k)*Oa>>8)&c|l+((m-l)*Oa>>8)&d|n+((r-n)*Oa>>8)&e},Fh:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e,p=(g&c)>>16,m=(g&d)>>8,r=g&e;return a(f,(g&b)>>>24,k,
l,n,k>p?k-p:p-k,l>m?l-m:m-l,n>r?n-r:r-n)},Jh:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e,p=(g&c)>>16,m=(g&d)>>8,r=g&e;return a(f,(g&b)>>>24,k,l,n,k+p-(k*p>>7),l+m-(l*m>>7),n+r-(n*r>>7))},multiply:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e;return a(f,(g&b)>>>24,k,l,n,k*((g&c)>>16)>>8,l*((g&d)>>8)>>8,n*(g&e)>>8)},screen:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e;return a(f,(g&b)>>>24,k,l,n,255-((255-k)*(255-((g&c)>>16))>>8),255-((255-l)*(255-((g&d)>>8))>>8),255-((255-n)*(255-(g&e))>>8))},
Th:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e,p=(g&c)>>16,m=(g&d)>>8,r=g&e;return a(f,(g&b)>>>24,k,l,n,128>p?k*p>>7:255-((255-k)*(255-p)>>7),128>m?l*m>>7:255-((255-l)*(255-m)>>7),128>r?n*r>>7:255-((255-n)*(255-r)>>7))},ti:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e,p=(g&c)>>16,m=(g&d)>>8,r=g&e;return a(f,(g&b)>>>24,k,l,n,(k*p>>7)+(k*k>>8)-(k*k*p>>15),(l*m>>7)+(l*l>>8)-(l*l*m>>15),(n*r>>7)+(n*n>>8)-(n*n*r>>15))},di:function(f,g){var k=(f&c)>>16,l=(f&d)>>8,n=f&e,p=(g&c)>>16,m=(g&d)>>8,r=g&e;
return a(f,(g&b)>>>24,k,l,n,128>k?k*p>>7:255-((255-k)*(255-p)>>7),128>l?l*m>>7:255-((255-l)*(255-m)>>7),128>n?n*r>>7:255-((255-n)*(255-r)>>7))},Hh:function(f,g){var k=(g&b)>>>24,l=(f&c)>>16,n=(f&d)>>8,p=f&e,m=(g&c)>>16,r=(g&d)>>8,s=g&e,t=255;255!==m&&(t=(l<<8)/(255-m),t=0>t?0:255<t?255:t);m=255;255!==r&&(m=(n<<8)/(255-r),m=0>m?0:255<m?255:m);r=255;255!==s&&(r=(p<<8)/(255-s),r=0>r?0:255<r?255:r);return a(f,k,l,n,p,t,m,r)},eh:function(f,g){var k=(g&b)>>>24,l=(f&c)>>16,n=(f&d)>>8,p=f&e,m=(g&c)>>16,r=
(g&d)>>8,s=g&e,t=0;0!==m&&(t=(255-l<<8)/m,t=255-(0>t?0:255<t?255:t));m=0;0!==r&&(m=(255-n<<8)/r,m=255-(0>m?0:255<m?255:m));r=0;0!==s&&(r=(255-p<<8)/s,r=255-(0>r?0:255<r?255:r));return a(f,k,l,n,p,t,m,r)}}}();n.color=function(a,c,e,f){a!==b&&c!==b&&e!==b&&f!==b?a=gc(a,c,e,f):a!==b&&c!==b&&e!==b?a=gc(a,c,e,Ab):a!==b&&c!==b?a&p.T?(c=Math.round(c/Ab*255),c=255<c?255:c,a=a-(a&p.T)+((0>c?0:c)<<24&p.T)):a=dd===p.RGB?gc(a,a,a,c):dd===p.Vd?gc(0,0,a/$b*ac,c):void 0:a="number"===typeof a?Tf(a):gc($b,yc,ac,Ab);
return a};n.color.toString=function(a){return"rgba("+((a&p.ia)>>>16)+","+((a&p.ha)>>>8)+","+(a&p.ga)+","+((a&p.T)>>>24)/255+")"};n.color.uu=function(a,b,c,d){return d<<24&p.T|a<<16&p.ia|b<<8&p.ha|c&p.ga};n.color.toArray=function(a){return[(a&p.ia)>>>16,(a&p.ha)>>>8,a&p.ga,(a&p.T)>>>24]};n.color.Sc=function(a){return[((a&p.ia)>>>16)/255,((a&p.ha)>>>8)/255,(a&p.ga)/255,((a&p.T)>>>24)/255]};n.color.zi=function(a,b,c){a=a>$b?$b:a;b=b>yc?yc:b;c=c>ac?ac:c;a=a/$b*360;b=b/yc*100;c=c/ac*100;var d=Math.round(c/
100*255);if(0===b)return[d,d,d];a%=360;var e=a%60,f=Math.round(c*(100-b)/1E4*255),g=Math.round(c*(6E3-b*e)/6E5*255);b=Math.round(c*(6E3-b*(60-e))/6E5*255);switch(Math.floor(a/60)){case 0:return[d,b,f];case 1:return[g,d,f];case 2:return[f,d,b];case 3:return[f,g,d];case 4:return[b,f,d];case 5:return[d,f,g]}};n.brightness=function(a){return Ad(a)[2]};n.saturation=function(a){return Ad(a)[1]};n.hue=function(a){return Ad(a)[0]};n.red=function(a){return((a&p.ia)>>>16)/255*$b};n.green=function(a){return((a&
p.ha)>>>8)/255*yc};n.blue=function(a){return(a&p.ga)/255*ac};n.alpha=function(a){return((a&p.T)>>>24)/255*Ab};n.lerpColor=function(a,b,c){var d,e,f,g,k,l;a=n.color(a);b=n.color(b);if(dd===p.Vd)return f=Ad(a),a=((a&p.T)>>>24)/Ab,e=Ad(b),b=((b&p.T)>>>24)/Ab,l=n.lerp(f[0],e[0],c),d=n.lerp(f[1],e[1],c),f=n.lerp(f[2],e[2],c),f=n.color.zi(l,d,f),c=n.lerp(a,b,c)*Ab,c<<24&p.T|f[0]<<16&p.ia|f[1]<<8&p.ha|f[2]&p.ga;d=(a&p.ia)>>>16;e=(a&p.ha)>>>8;f=a&p.ga;a=((a&p.T)>>>24)/Ab;g=(b&p.ia)>>>16;k=(b&p.ha)>>>8;l=
b&p.ga;b=((b&p.T)>>>24)/Ab;d=n.lerp(d,g,c)|0;e=n.lerp(e,k,c)|0;f=n.lerp(f,l,c)|0;c=n.lerp(a,b,c)*Ab;return c<<24&p.T|d<<16&p.ia|e<<8&p.ha|f&p.ga};n.colorMode=function(){dd=arguments[0];1<arguments.length&&($b=arguments[1],yc=arguments[2]||arguments[1],ac=arguments[3]||arguments[1],Ab=arguments[4]||arguments[1])};n.blendColor=function(a,b,c){if(c===p.REPLACE)return n.U.replace(a,b);if(c===p.BLEND)return n.U.blend(a,b);if(c===p.mg)return n.U.add(a,b);if(c===p.Pg)return n.U.wi(a,b);if(c===p.Bg)return n.U.ai(a,
b);if(c===p.sg)return n.U.Eh(a,b);if(c===p.tg)return n.U.Fh(a,b);if(c===p.wg)return n.U.Jh(a,b);if(c===p.Eg)return n.U.multiply(a,b);if(c===p.Ng)return n.U.screen(a,b);if(c===p.yg)return n.U.Th(a,b);if(c===p.Og)return n.U.ti(a,b);if(c===p.Hg)return n.U.di(a,b);if(c===p.ug)return n.U.Hh(a,b);if(c===p.qg)return n.U.eh(a,b)};n.printMatrix=function(){va.print()};W.prototype.translate=function(a,b){va.translate(a,b);Bb.yd(a,b);t.translate(a,b)};qa.prototype.translate=function(a,b,c){va.translate(a,b,c);
Bb.yd(a,b,c)};W.prototype.scale=function(a,b){va.scale(a,b);Bb.xd(a,b);t.scale(a,b||a)};qa.prototype.scale=function(a,b,c){va.scale(a,b,c);Bb.xd(a,b,c)};W.prototype.transform=function(a){a=a.A();t.transform(a[0],a[3],a[1],a[4],a[2],a[5])};W.prototype.pushMatrix=function(){lf.load(va);mf.load(Bb);t.save()};qa.prototype.pushMatrix=function(){lf.load(va);mf.load(Bb)};W.prototype.popMatrix=function(){va.set(lf.pop());Bb.set(mf.pop());bd()};qa.prototype.popMatrix=function(){va.set(lf.pop());Bb.set(mf.pop())};
W.prototype.resetMatrix=function(){va.reset();Bb.reset();t.setTransform(1,0,0,1,0,0)};qa.prototype.resetMatrix=function(){va.reset();Bb.reset()};n.rotateX=function(a){va.rotateX(a);Bb.Xh(a)};W.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead.";};qa.prototype.rotateZ=function(a){va.rotateZ(a);Bb.wd(a)};n.rotateY=function(a){va.rotateY(a);Bb.Yh(a)};W.prototype.rotate=function(a){va.rotateZ(a);Bb.wd(a);t.rotate(a)};qa.prototype.rotate=function(a){4>
arguments.length?n.rotateZ(a):(va.rotate(a,arguments[1],arguments[2],arguments[3]),Bb.rotate(-a,arguments[1],arguments[2],arguments[3]))};W.prototype.shearX=function(a){va.shearX(a);t.transform(1,0,a,1,0,0)};qa.prototype.shearX=function(a){va.shearX(a)};W.prototype.shearY=function(a){va.shearY(a);t.transform(1,a,0,1,0,0)};qa.prototype.shearY=function(a){va.shearY(a)};n.pushStyle=function(){t.save();n.pushMatrix();$k.push({doFill:Ka,currentFillColor:vd,doStroke:Aa,currentStrokeColor:xd,curTint:Dd,
curRectMode:cd,curColorMode:dd,colorModeX:$b,colorModeZ:ac,colorModeY:yc,colorModeA:Ab,curTextFont:qb,horizontalTextAlignment:ne,verticalTextAlignment:ed,textMode:kh,curFontName:kf,curTextSize:Lc,curTextAscent:fd,curTextDescent:Kc,curTextLeading:qc})};n.popStyle=function(){var a=$k.pop();if(a)bd(),n.popMatrix(),Ka=a.Br,vd=a.dr,Aa=a.Cr,xd=a.er,Dd=a.cr,cd=a.Dh,dd=a.Wq,$b=a.To,ac=a.Vo,yc=a.Uo,Ab=a.So,qb=a.$q,kf=a.Xq,Lc=a.br,ne=a.es,ed=a.Bu,kh=a.textMode,fd=a.Yq,Kc=a.Zq,qc=a.ar;else throw"Too many popStyle() without enough pushStyle()";
};n.year=function(){return(new Date).getFullYear()};n.month=function(){return(new Date).getMonth()+1};n.day=function(){return(new Date).getDate()};n.hour=function(){return(new Date).getHours()};n.minute=function(){return(new Date).getMinutes()};n.second=function(){return(new Date).getSeconds()};n.millis=function(){return Date.now()-Pk};W.prototype.redraw=function(){Zg();t.lineWidth=Eb;var a=n.pmouseX,b=n.pmouseY;n.pmouseX=hh;n.pmouseY=ih;t.save();n.draw();bd();hh=n.mouseX;ih=n.mouseY;n.pmouseX=a;
n.pmouseY=b};qa.prototype.redraw=function(){Zg();var a=n.pmouseX,b=n.pmouseY;n.pmouseX=hh;n.pmouseY=ih;t.clear(t.DEPTH_BUFFER_BIT);xc={attributes:{},wc:{}};n.noLights();n.lightFalloff(1,0,0);n.shininess(1);n.ambient(255,255,255);n.specular(0,0,0);n.emissive(0,0,0);n.camera();n.draw();hh=n.mouseX;ih=n.mouseY;n.pmouseX=a;n.pmouseY=b};n.noLoop=function(){Xg=ge=!1;clearInterval(ch);jb.ml()};n.loop=function(){Xg||(Mi=Date.now(),gh=0,ch=r.setInterval(function(){try{jb.jl(),n.redraw(),jb.il()}catch(a){throw r.clearInterval(ch),
a;}},Ok),Xg=ge=!0,jb.ll())};n.frameRate=function(a){Ci=a;Ok=1E3/Ci;ge&&(n.noLoop(),n.loop())};n.exit=function(){r.clearInterval(ch);var a=n.Yb.canvas.id;L.splice(lb[a],1);delete lb[a];delete Da.onmousedown;for(var b in v.Qa)v.Qa.hasOwnProperty(b)&&v.Qa[b].hasOwnProperty("detach")&&v.Qa[b].detach(n);for(a=Pb.length;a--;){var c=Pb[a];b=c.Ih;var d=c.type,c=c.fn;b.removeEventListener?b.removeEventListener(d,c,!1):b.detachEvent&&b.detachEvent("on"+d,c)}jb.hl()};n.cursor=function(){if(1<arguments.length||
1===arguments.length&&arguments[0]instanceof n.tj){var a=arguments[0],b,c;if(3<=arguments.length){if(b=arguments[1],c=arguments[2],0>b||0>c||c>=a.height||b>=a.width)throw"x and y must be non-negative and less than the dimensions of the image";}else b=a.width>>>1,c=a.height>>>1;a='url("'+a.toDataURL()+'") '+b+" "+c+", default";Da.style.cursor=a}else 1===arguments.length?Da.style.cursor=arguments[0]:Da.style.cursor=Rm};n.noCursor=function(){Da.style.cursor=p.nj};n.link=function(a,c){c!==b?r.open(a,
c):r.location=a};n.beginDraw=u;n.endDraw=u;W.prototype.Tc=function(a,c,e,f){a=a!==b?a:0;c=c!==b?c:0;e=e!==b?e:n.width;f=f!==b?f:n.height;return t.getImageData(a,c,e,f)};qa.prototype.Tc=function(a,c,e,f){a=a!==b?a:0;c=c!==b?c:0;e=e!==b?e:n.width;f=f!==b?f:n.height;var g=s.createElement("canvas").getContext("2d").createImageData(e,f),k=new Y(e*f*4);t.readPixels(a,c,e,f,t.RGBA,t.UNSIGNED_BYTE,k);a=0;c=k.length;for(var l=g.data;a<c;a++)l[a]=k[(f-1-Math.floor(a/4/e))*e*4+a%(4*e)];return g};n.status=function(a){r.status=
a};n.binary=function(a,b){var c;if(0<b)c=b;else if(a instanceof Char)c=16,a|=0;else for(c=32;1<c&&!(a>>>c-1&1);)c--;for(var d="";0<c;)d+=a>>>--c&1?"1":"0";return d};n.unbinary=function(a){for(var b=a.length-1,c=1,d=0;0<=b;){var e=a[b--];if("0"!==e&&"1"!==e)throw"the value passed into unbinary was not an 8 bit binary number";"1"===e&&(d+=c);c<<=1}return d};n.hex=function(a,c){1===arguments.length&&(c=a instanceof Char?4:8);var e=a,f=c,f=f===b||null===f?f=8:f;0>e&&(e=4294967295+e+1);for(e=Number(e).toString(16).toUpperCase();e.length<
f;)e="0"+e;e.length>=f&&(e=e.substring(e.length-f,e.length));return e};n.unhex=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(cf(a[c]));return b}return cf(a)};n.loadStrings=function(a){if(F[a])return F[a].split("\n");a=l(a);if("string"!==typeof a||""===a)return[];a=a.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return a.split("\n")};n.saveStrings=function(a,b){F[a]=b.join("\n")};n.loadBytes=function(a){a=l(a);for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b};
n.Ns=function(a,b){for(var c=[],d,e=RegExp(b,"g");null!==(d=e.exec(a));)c.push(d),0===d[0].length&&++e.lastIndex;return 0<c.length?c:null};n.match=function(a,b){return a.match(b)};n.println=function(a){v.bi.println(a)};n.print=function(a){v.bi.print(a)};n.Pb=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString()+"");return b}return a.toString()+""};n.vt=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(df(a[c]));return b}return df(a)};n.wt=
function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(0-(a[c]&128)|a[c]&127);return b}return 0-(a&128)|a&127};n.xt=function(a){if("number"===typeof a)return new Char(String.fromCharCode(a&65535));if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(new Char(String.fromCharCode(a[c]&65535)));return b}throw"char() may receive only one argument of type int, byte, int[], or byte[].";};n.yt=function(a){if(a instanceof Array){for(var b=[],c=0;c<a.length;c++)b.push(ie(a[c]));
return b}return ie(a)};n.zt=function(a,b){if(a instanceof Array){for(var c=[],d=0;d<a.length;d++)"string"!==typeof a[d]||/^\s*[+\-]?\d+\s*$/.test(a[d])?c.push(je(a[d],b)):c.push(0);return c}return je(a,b)};n.Sn=function(a){return 0|a};n.Rn=function(a,b){if("function"!==typeof b)throw"Function is expected as type argument for instanceof operator";if("string"===typeof a)return b===Object||b===String;if(a instanceof b)return!0;if("object"!==typeof a||null===a)return!1;var c=a.constructor;if(b.Ml){for(var d=
[];c;)c.Ye&&(d=d.concat(c.Ye)),c=c.Bi;for(;0<d.length;){c=d.shift();if(c===b)return!0;c.Ye&&(d=d.concat(c.Ye))}return!1}for(;c.hasOwnProperty("$base");)if(c=c.Bi,c===b)return!0;return!1};Na.prototype.size=function(a,b){Aa&&n.stroke(0);Ka&&n.fill(255);var c={fillStyle:t.fillStyle,strokeStyle:t.strokeStyle,lineCap:t.lineCap,lineJoin:t.lineJoin};0<Da.style.length&&(Da.style.removeProperty("width"),Da.style.removeProperty("height"));Da.width=n.width=a||100;Da.height=n.height=b||100;for(var d in c)c.hasOwnProperty(d)&&
(t[d]=c[d]);n.textFont(qb);n.background();Wk=Math.max(1E3,a*b*0.05);n.Yb.context=t;for(c=0;c<p.jb;c++)Zf[c]=n.sin(p.PI/180*c*0.5),$f[c]=n.cos(p.PI/180*c*0.5)};W.prototype.size=function(a,c,e){t===b&&(t=Da.getContext("2d"),lf=new id,mf=new id,va=new hd,Bb=new hd);Na.prototype.size.apply(this,arguments)};qa.prototype.size=function(){var a=!1;return function(b,c,d){if(a)throw"Multiple calls to size() for 3D renders are not allowed.";a=!0;try{Da.width=n.width=b||100;Da.height=n.height=c||100;for(var e=
Da,f=["experimental-webgl","webgl","webkit-3d"],g,k=0,l=f.length;k<l&&!(g=e.getContext(f[k],{antialias:!1,preserveDrawingBuffer:!0}));k++);t=g;Qk=t.createTexture();Rk=t.createTexture()}catch(p){v.debug(p)}if(!t)throw"WebGL context is not supported on this browser.";t.viewport(0,0,Da.width,Da.height);t.enable(t.DEPTH_TEST);t.enable(t.BLEND);t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);fa=yd(t,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize \x3d uPointSize;  vFrontColor \x3d uColor;  gl_Position \x3d uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord \x3d aTextureCoord;}",
"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth \x3d\x3d true){    float dist \x3d distance(gl_PointCoord, vec2(0.5));    if(dist \x3e 0.5){      discard;    }  }  if(uIsDrawingText \x3d\x3d 1){    float alpha \x3d texture2D(uSampler, vTextureCoord).a;    gl_FragColor \x3d vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor \x3d vFrontColor;  }}");
Ib=yd(t,"varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor \x3d aColor;  gl_PointSize \x3d uPointSize;  gl_Position \x3d uProjection * uView * vec4(aVertex, 1.0);}","#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth \x3d\x3d true){    float dist \x3d distance(gl_PointCoord, vec2(0.5));    if(dist \x3e 0.5){      discard;    }  }  gl_FragColor \x3d vFrontColor;}");
n.strokeWeight(1);T=yd(t,Um,"#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor \x3d vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor \x3d vFrontColor;  }}");t.useProgram(T);Ya("usingTexture3d",T,"usingTexture",Qb);n.lightFalloff(1,0,0);n.shininess(1);n.ambient(255,255,255);n.specular(0,0,0);n.emissive(0,0,0);Pi=t.createBuffer();
t.bindBuffer(t.ARRAY_BUFFER,Pi);t.bufferData(t.ARRAY_BUFFER,al,t.STATIC_DRAW);Qi=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,Qi);t.bufferData(t.ARRAY_BUFFER,Sm,t.STATIC_DRAW);Ri=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,Ri);t.bufferData(t.ARRAY_BUFFER,bl,t.STATIC_DRAW);jh=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,jh);t.bufferData(t.ARRAY_BUFFER,Yi,t.STATIC_DRAW);Si=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,Si);t.bufferData(t.ARRAY_BUFFER,Tm,t.STATIC_DRAW);Yf=t.createBuffer();Li=t.createBuffer();
Jk=t.createBuffer();Ki=t.createBuffer();Lk=t.createBuffer();Kk=t.createBuffer();fh=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,fh);t.bufferData(t.ARRAY_BUFFER,new B([0,0,0]),t.STATIC_DRAW);Ti=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,Ti);t.bufferData(t.ARRAY_BUFFER,new B([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),t.STATIC_DRAW);Ui=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,Ui);t.bufferData(t.ARRAY_BUFFER,new B([0,0,1,0,1,1,0,1]),t.STATIC_DRAW);Vi=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,Vi);
t.bufferData(t.ELEMENT_ARRAY_BUFFER,new C([0,1,2,2,3,0]),t.STATIC_DRAW);ag=new ia;Fd=new ia;va=new ia;Bb=new ia;zc=new ia;n.camera();n.perspective();lf=new id;mf=new id;Wf=new ia;eh=new ia;hf=new ia;jf=new ia;Ii=new ia;Oi=new ia;Oi.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);Na.prototype.size.apply(this,arguments)}}();W.prototype.ambientLight=Na.prototype.kb;qa.prototype.ambientLight=function(a,b,c,d,e,f){if(rb===p.Wd)throw"can only create "+p.Wd+" lights";d=new PVector(d,e,f);e=new ia;e.scale(1,-1,
1);e.apply(va.A());e.Nb(d,d);a=gc(a,b,c,0);a=[((a&p.ia)>>>16)/255,((a&p.ha)>>>8)/255,(a&p.ga)/255];t.useProgram(T);Xa("uLights.color.3d."+rb,T,"uLights"+rb+".color",a);Xa("uLights.position.3d."+rb,T,"uLights"+rb+".position",d.A());Ya("uLights.type.3d."+rb,T,"uLights"+rb+".type",0);Ya("uLightCount3d",T,"uLightCount",++rb)};W.prototype.directionalLight=Na.prototype.kb;qa.prototype.directionalLight=function(a,b,c,d,e,f){if(rb===p.Wd)throw"can only create "+p.Wd+" lights";t.useProgram(T);var g=new ia;
g.scale(1,-1,1);g.apply(va.A());g=g.A();d=[g[0]*d+g[4]*e+g[8]*f,g[1]*d+g[5]*e+g[9]*f,g[2]*d+g[6]*e+g[10]*f];a=gc(a,b,c,0);Xa("uLights.color.3d."+rb,T,"uLights"+rb+".color",[((a&p.ia)>>>16)/255,((a&p.ha)>>>8)/255,(a&p.ga)/255]);Xa("uLights.position.3d."+rb,T,"uLights"+rb+".position",d);Ya("uLights.type.3d."+rb,T,"uLights"+rb+".type",1);Ya("uLightCount3d",T,"uLightCount",++rb)};W.prototype.lightFalloff=Na.prototype.kb;qa.prototype.lightFalloff=function(a,b,c){t.useProgram(T);Xa("uFalloff3d",T,"uFalloff",
[a,b,c])};W.prototype.lightSpecular=Na.prototype.kb;qa.prototype.lightSpecular=function(a,b,c){a=gc(a,b,c,0);a=[((a&p.ia)>>>16)/255,((a&p.ha)>>>8)/255,(a&p.ga)/255];t.useProgram(T);Xa("uSpecular3d",T,"uSpecular",a)};n.lights=function(){n.ambientLight(128,128,128);n.directionalLight(128,128,128,0,0,-1);n.lightFalloff(1,0,0);n.lightSpecular(0,0,0)};W.prototype.noLights=Na.prototype.kb;qa.prototype.noLights=function(){rb=0;t.useProgram(T);Ya("uLightCount3d",T,"uLightCount",rb)};n.camera=function(a,c,
e,f,g,k,l,p,m){a===b&&(Xi=n.width/2,qe=n.height/2,re=qe/Math.tan(mh/2),a=Xi,c=qe,e=re,f=Xi,g=qe,l=k=0,p=1,m=0);f=new PVector(a-f,c-g,e-k);var r=new PVector(l,p,m);f.normalize();m=PVector.se(r,f);r=PVector.se(f,m);m.normalize();r.normalize();l=m.x;p=m.y;m=m.z;g=r.x;k=r.y;var r=r.z,s=f.x,t=f.y;f=f.z;ag.set(l,p,m,0,g,k,r,0,s,t,f,0,0,0,0,1);ag.translate(-a,-c,-e);Fd.reset();Fd.Wh(l,p,m,0,g,k,r,0,s,t,f,0,0,0,0,1);Fd.translate(a,c,e);va.set(ag);Bb.set(Fd)};n.perspective=function(a,b,c,d){0===arguments.length&&
(qe=Da.height/2,re=qe/Math.tan(mh/2),Xk=re/10,Yk=10*re,Zk=n.width/n.height,a=mh,b=Zk,c=Xk,d=Yk);var e,f;e=c*Math.tan(a/2);f=-e;n.frustum(f*b,e*b,f,e,c,d)};W.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode";};qa.prototype.frustum=function(a,b,c,d,e,f){zc=new ia;zc.set(2*e/(b-a),0,(b+a)/(b-a),0,0,2*e/(d-c),(d+c)/(d-c),0,0,0,-(f+e)/(f-e),-(2*f*e)/(f-e),0,0,-1,0);a=new ia;a.set(zc);a.sa();t.useProgram(fa);La("projection2d",fa,"uProjection",a.A());t.useProgram(T);
La("projection3d",T,"uProjection",a.A());t.useProgram(Ib);La("uProjectionUS",Ib,"uProjection",a.A())};n.ortho=function(a,b,c,d,e,f){0===arguments.length&&(a=0,b=n.width,c=0,d=n.height,e=-10,f=10);var g=2/(b-a),k=2/(d-c),l=-2/(f-e),p=-(b+a)/(b-a),m=-(d+c)/(d-c),r=-(f+e)/(f-e);zc=new ia;zc.set(g,0,0,p,0,k,0,m,0,0,l,r,0,0,0,1);g=new ia;g.set(zc);g.sa();t.useProgram(fa);La("projection2d",fa,"uProjection",g.A());t.useProgram(T);La("projection3d",T,"uProjection",g.A());t.useProgram(Ib);La("uProjectionUS",
Ib,"uProjection",g.A())};n.printProjection=function(){zc.print()};n.printCamera=function(){ag.print()};W.prototype.box=Na.prototype.kb;qa.prototype.box=function(a,b,c){b&&c||(b=c=a);var d=new ia;d.scale(a,b,c);a=new ia;a.scale(1,-1,1);a.apply(va.A());a.sa();Ka&&(t.useProgram(T),La("model3d",T,"uModel",d.A()),La("view3d",T,"uView",a.A()),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1,1),Xa("color3d",T,"uColor",Gb),0<rb?(b=new ia,b.set(a),c=new ia,c.set(d),b.Nb(c),c=new ia,c.set(b),c.cc(),c.sa(),
La("uNormalTransform3d",T,"uNormalTransform",c.A()),hb("aNormal3d",T,"aNormal",3,Qi)):Hb("aNormal3d",T,"aNormal"),hb("aVertex3d",T,"aVertex",3,Pi),Hb("aColor3d",T,"aColor"),Hb("aTexture3d",T,"aTexture"),t.drawArrays(t.TRIANGLES,0,al.length/3),t.disable(t.POLYGON_OFFSET_FILL));0<Eb&&Aa&&(t.useProgram(fa),La("uModel2d",fa,"uModel",d.A()),La("uView2d",fa,"uView",a.A()),Xa("uColor2d",fa,"uColor",Yb),Ya("uIsDrawingText2d",fa,"uIsDrawingText",!1),hb("vertex2d",fa,"aVertex",3,Ri),Hb("aTextureCoord2d",fa,
"aTextureCoord"),t.drawArrays(t.LINES,0,bl.length/3))};n.sphereDetail=function(a,b){var c;1===arguments.length&&(a=b=arguments[0]);3>a&&(a=3);2>b&&(b=2);if(a!==pe||b!==lh){var d=p.jb/a,e=new B(a),f=new B(a);for(c=0;c<a;c++)e[c]=$f[c*d%p.jb|0],f[c]=Zf[c*d%p.jb|0];c=a*(b-1)+2;d=0;Mc=new B(c);Nc=new B(c);Oc=new B(c);var g=0.5*p.jb/b,k=g;for(c=1;c<b;c++){for(var l=Zf[k%p.jb|0],n=-$f[k%p.jb|0],m=0;m<a;m++)Mc[d]=e[m]*l,Nc[d]=n,Oc[d++]=f[m]*l;k+=g}pe=a;lh=b;Ba=[];for(e=0;e<pe;e++)Ba.push(0),Ba.push(-1),
Ba.push(0),Ba.push(Mc[e]),Ba.push(Nc[e]),Ba.push(Oc[e]);Ba.push(0);Ba.push(-1);Ba.push(0);Ba.push(Mc[0]);Ba.push(Nc[0]);Ba.push(Oc[0]);g=0;for(e=2;e<lh;e++){f=c=g;d=g+=pe;for(k=0;k<pe;k++)Ba.push(Mc[f]),Ba.push(Nc[f]),Ba.push(Oc[f++]),Ba.push(Mc[d]),Ba.push(Nc[d]),Ba.push(Oc[d++]);f=c;d=g;Ba.push(Mc[f]);Ba.push(Nc[f]);Ba.push(Oc[f]);Ba.push(Mc[d]);Ba.push(Nc[d]);Ba.push(Oc[d])}for(e=0;e<pe;e++)d=g+e,Ba.push(Mc[d]),Ba.push(Nc[d]),Ba.push(Oc[d]),Ba.push(0),Ba.push(1),Ba.push(0);Ba.push(Mc[g]);Ba.push(Nc[g]);
Ba.push(Oc[g]);Ba.push(0);Ba.push(1);Ba.push(0);t.bindBuffer(t.ARRAY_BUFFER,Yf);t.bufferData(t.ARRAY_BUFFER,new B(Ba),t.STATIC_DRAW)}};W.prototype.sphere=Na.prototype.kb;qa.prototype.sphere=function(a){(3>pe||2>lh)&&n.sphereDetail(30);var b=new ia;b.scale(a,a,a);a=new ia;a.scale(1,-1,1);a.apply(va.A());a.sa();if(Ka){if(0<rb){var c=new ia;c.set(a);var d=new ia;d.set(b);c.Nb(d);d=new ia;d.set(c);d.cc();d.sa();La("uNormalTransform3d",T,"uNormalTransform",d.A());hb("aNormal3d",T,"aNormal",3,Yf)}else Hb("aNormal3d",
T,"aNormal");t.useProgram(T);Hb("aTexture3d",T,"aTexture");La("uModel3d",T,"uModel",b.A());La("uView3d",T,"uView",a.A());hb("aVertex3d",T,"aVertex",3,Yf);Hb("aColor3d",T,"aColor");t.enable(t.POLYGON_OFFSET_FILL);t.polygonOffset(1,1);Xa("uColor3d",T,"uColor",Gb);t.drawArrays(t.TRIANGLE_STRIP,0,Ba.length/3);t.disable(t.POLYGON_OFFSET_FILL)}0<Eb&&Aa&&(t.useProgram(fa),La("uModel2d",fa,"uModel",b.A()),La("uView2d",fa,"uView",a.A()),hb("aVertex2d",fa,"aVertex",3,Yf),Hb("aTextureCoord2d",fa,"aTextureCoord"),
Xa("uColor2d",fa,"uColor",Yb),Ya("uIsDrawingText",fa,"uIsDrawingText",!1),t.drawArrays(t.LINE_STRIP,0,Ba.length/3))};n.modelX=function(a,b,c){var d=va.A(),e=Fd.A(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],k=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[0]*f+e[1]*g+e[2]*k+e[3]*b;e=e[12]*f+e[13]*g+e[14]*k+e[15]*b;return 0!==e?a/e:a};n.modelY=function(a,b,c){var d=va.A(),e=Fd.A(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],k=d[8]*a+d[9]*b+d[10]*c+d[11];b=
d[12]*a+d[13]*b+d[14]*c+d[15];a=e[4]*f+e[5]*g+e[6]*k+e[7]*b;e=e[12]*f+e[13]*g+e[14]*k+e[15]*b;return 0!==e?a/e:a};n.modelZ=function(a,b,c){var d=va.A(),e=Fd.A(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],k=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[8]*f+e[9]*g+e[10]*k+e[11]*b;e=e[12]*f+e[13]*g+e[14]*k+e[15]*b;return 0!==e?a/e:a};W.prototype.ambient=Na.prototype.kb;qa.prototype.ambient=function(a,b,c){t.useProgram(T);Ya("uUsingMat3d",T,"uUsingMat",!0);a=n.color(a,
b,c);Xa("uMaterialAmbient3d",T,"uMaterialAmbient",n.color.Sc(a).slice(0,3))};W.prototype.emissive=Na.prototype.kb;qa.prototype.emissive=function(a,b,c){t.useProgram(T);Ya("uUsingMat3d",T,"uUsingMat",!0);a=n.color(a,b,c);Xa("uMaterialEmissive3d",T,"uMaterialEmissive",n.color.Sc(a).slice(0,3))};W.prototype.shininess=Na.prototype.kb;qa.prototype.shininess=function(a){t.useProgram(T);Ya("uUsingMat3d",T,"uUsingMat",!0);Xa("uShininess3d",T,"uShininess",a)};W.prototype.specular=Na.prototype.kb;qa.prototype.specular=
function(a,b,c){t.useProgram(T);Ya("uUsingMat3d",T,"uUsingMat",!0);a=n.color(a,b,c);Xa("uMaterialSpecular3d",T,"uMaterialSpecular",n.color.Sc(a).slice(0,3))};n.screenX=function(a,b,c){var d=va.A();if(16===d.length){var e=d[0]*a+d[1]*b+d[2]*c+d[3],f=d[4]*a+d[5]*b+d[6]*c+d[7],g=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=zc.A();a=c[0]*e+c[1]*f+c[2]*g+c[3]*b;e=c[12]*e+c[13]*f+c[14]*g+c[15]*b;0!==e&&(a/=e);return n.width*(1+a)/2}return va.He(a,b)};n.screenY=function(a,b,c){var d=va.A();
if(16===d.length){var e=d[0]*a+d[1]*b+d[2]*c+d[3],f=d[4]*a+d[5]*b+d[6]*c+d[7],g=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];c=zc.A();a=c[4]*e+c[5]*f+c[6]*g+c[7]*b;e=c[12]*e+c[13]*f+c[14]*g+c[15]*b;0!==e&&(a/=e);return n.height*(1+a)/2}return va.Ie(a,b)};n.screenZ=function(a,b,c){var d=va.A();if(16!==d.length)return 0;var e=zc.A(),f=d[0]*a+d[1]*b+d[2]*c+d[3],g=d[4]*a+d[5]*b+d[6]*c+d[7],k=d[8]*a+d[9]*b+d[10]*c+d[11];b=d[12]*a+d[13]*b+d[14]*c+d[15];a=e[8]*f+e[9]*g+e[10]*k+e[11]*b;e=e[12]*
f+e[13]*g+e[14]*k+e[15]*b;0!==e&&(a/=e);return(a+1)/2};Na.prototype.fill=function(){var a=n.color.apply(this,arguments);a===vd&&Ka||(Ka=!0,vd=a)};W.prototype.fill=function(){Na.prototype.fill.apply(this,arguments);wd=!0};qa.prototype.fill=function(){Na.prototype.fill.apply(this,arguments);Gb=n.color.Sc(vd)};n.noFill=function(){Ka=!1};Na.prototype.stroke=function(){var a=n.color.apply(this,arguments);a===xd&&Aa||(Aa=!0,xd=a)};W.prototype.stroke=function(){Na.prototype.stroke.apply(this,arguments);
Wg=!0};qa.prototype.stroke=function(){Na.prototype.stroke.apply(this,arguments);Yb=n.color.Sc(xd)};n.noStroke=function(){Aa=!1};Na.prototype.strokeWeight=function(a){Eb=a};W.prototype.strokeWeight=function(a){Na.prototype.strokeWeight.apply(this,arguments);t.lineWidth=a};qa.prototype.strokeWeight=function(a){Na.prototype.strokeWeight.apply(this,arguments);t.useProgram(fa);Xa("pointSize2d",fa,"uPointSize",a);t.useProgram(Ib);Xa("pointSizeUnlitShape",Ib,"uPointSize",a);t.lineWidth(a)};n.strokeCap=function(a){vb.xb().lineCap=
a};n.strokeJoin=function(a){vb.xb().lineJoin=a};W.prototype.noSmooth=function(){af=!1;var a=Da.style;a.setProperty("image-rendering","optimizeSpeed","important");a.setProperty("image-rendering","-moz-crisp-edges","important");a.setProperty("image-rendering","-webkit-optimize-contrast","important");a.setProperty("image-rendering","optimize-contrast","important");a.setProperty("-ms-interpolation-mode","nearest-neighbor","important");t.hasOwnProperty("mozImageSmoothingEnabled")&&(t.bt=!1)};qa.prototype.noSmooth=
function(){af=!1};W.prototype.point=function(a,b){Aa&&(a=Math.round(a),b=Math.round(b),t.fillStyle=n.color.toString(xd),wd=!0,1<Eb?(t.beginPath(),t.arc(a,b,Eb/2,0,p.Tb,!1),t.fill()):t.fillRect(a,b,1,1))};qa.prototype.point=function(a,b,c){var d=new ia;d.translate(a,b,c||0);d.sa();a=new ia;a.scale(1,-1,1);a.apply(va.A());a.sa();t.useProgram(fa);La("uModel2d",fa,"uModel",d.A());La("uView2d",fa,"uView",a.A());0<Eb&&Aa&&(Xa("uColor2d",fa,"uColor",Yb),Ya("uIsDrawingText2d",fa,"uIsDrawingText",!1),Ya("uSmooth2d",
fa,"uSmooth",af),hb("aVertex2d",fa,"aVertex",3,fh),Hb("aTextureCoord2d",fa,"aTextureCoord"),t.drawArrays(t.POINTS,0,1))};n.beginShape=function(a){eb=a;H=[]};W.prototype.vertex=function(a,b,c){var d=[];Gd&&(Gd=!1);d.Ae=!0;d[0]=a;d[1]=b;d[2]=0;d[3]=0;d[4]=0;d[5]=vd;d[6]=xd;H.push(d);c&&(H[H.length-1].moveTo=c)};qa.prototype.vertex=function(a,c,e,f,g){var k=[];Gd&&(Gd=!1);k.Ae=!0;g===b&&Qb&&(g=f,f=e,e=0);f!==b&&g!==b&&(Uk===p.Ag&&(f/=Sk,g/=Tk),f=1<f?1:f,f=0>f?0:f,g=1<g?1:g,g=0>g?0:g);k[0]=a;k[1]=c;k[2]=
e||0;k[3]=f||0;k[4]=g||0;k[5]=Gb[0];k[6]=Gb[1];k[7]=Gb[2];k[8]=Gb[3];k[9]=Yb[0];k[10]=Yb[1];k[11]=Yb[2];k[12]=Yb[3];k[13]=Di;k[14]=Ei;k[15]=Fi;H.push(k)};W.prototype.endShape=function(a){if(0!==H.length){(a=a===p.Sd)&&H.push(H[0]);var c=[],e=[],f=[],g=[],k;Gd=!0;var l,m,r=H.length;for(l=0;l<r;l++)for(k=H[l],m=0;3>m;m++)c.push(k[m]);for(l=0;l<r;l++)for(k=H[l],m=5;9>m;m++)e.push(k[m]);for(l=0;l<r;l++)for(k=H[l],m=9;13>m;m++)f.push(k[m]);for(l=0;l<r;l++)k=H[l],g.push(k[3]),g.push(k[4]);if(!nf||eb!==
p.Yc&&eb!==b)if(!of||eb!==p.Yc&&eb!==b)if(eb===p.POINTS)for(l=0;l<r;l++)k=H[l],Aa&&n.stroke(k[6]),n.point(k[0],k[1]);else if(eb===p.LINES)for(l=0;l+1<r;l+=2)k=H[l],Aa&&n.stroke(H[l+1][6]),n.line(k[0],k[1],H[l+1][0],H[l+1][1]);else if(eb===p.TRIANGLES)for(l=0;l+2<r;l+=3)k=H[l],t.beginPath(),t.moveTo(k[0],k[1]),t.lineTo(H[l+1][0],H[l+1][1]),t.lineTo(H[l+2][0],H[l+2][1]),t.lineTo(k[0],k[1]),Ka&&(n.fill(H[l+2][5]),wc()),Aa&&(n.stroke(H[l+2][6]),Zb()),t.closePath();else if(eb===p.TRIANGLE_STRIP)for(l=
0;l+1<r;l++)k=H[l],t.beginPath(),t.moveTo(H[l+1][0],H[l+1][1]),t.lineTo(k[0],k[1]),Aa&&n.stroke(H[l+1][6]),Ka&&n.fill(H[l+1][5]),l+2<r&&(t.lineTo(H[l+2][0],H[l+2][1]),Aa&&n.stroke(H[l+2][6]),Ka&&n.fill(H[l+2][5])),ke();else if(eb===p.TRIANGLE_FAN){if(2<r)for(t.beginPath(),t.moveTo(H[0][0],H[0][1]),t.lineTo(H[1][0],H[1][1]),t.lineTo(H[2][0],H[2][1]),Ka&&(n.fill(H[2][5]),wc()),Aa&&(n.stroke(H[2][6]),Zb()),t.closePath(),l=3;l<r;l++)k=H[l],t.beginPath(),t.moveTo(H[0][0],H[0][1]),t.lineTo(H[l-1][0],H[l-
1][1]),t.lineTo(k[0],k[1]),Ka&&(n.fill(k[5]),wc()),Aa&&(n.stroke(k[6]),Zb()),t.closePath()}else if(eb===p.ae)for(l=0;l+3<r;l+=4){k=H[l];t.beginPath();t.moveTo(k[0],k[1]);for(m=1;4>m;m++)t.lineTo(H[l+m][0],H[l+m][1]);t.lineTo(k[0],k[1]);Ka&&(n.fill(H[l+3][5]),wc());Aa&&(n.stroke(H[l+3][6]),Zb());t.closePath()}else if(eb===p.Jg){if(3<r)for(l=0;l+1<r;l+=2)k=H[l],t.beginPath(),l+3<r?(t.moveTo(H[l+2][0],H[l+2][1]),t.lineTo(k[0],k[1]),t.lineTo(H[l+1][0],H[l+1][1]),t.lineTo(H[l+3][0],H[l+3][1]),Ka&&n.fill(H[l+
3][5]),Aa&&n.stroke(H[l+3][6])):(t.moveTo(k[0],k[1]),t.lineTo(H[l+1][0],H[l+1][1])),ke()}else{t.beginPath();t.moveTo(H[0][0],H[0][1]);for(l=1;l<r;l++)k=H[l],k.Ae&&(k.moveTo?t.moveTo(k[0],k[1]):t.lineTo(k[0],k[1]));ke()}else{t.beginPath();for(l=0;l<r;l++)k=H[l],H[l].Ae?H[l].moveTo?t.moveTo(k[0],k[1]):t.lineTo(k[0],k[1]):t.bezierCurveTo(H[l][0],H[l][1],H[l][2],H[l][3],H[l][4],H[l][5]);ke()}else if(3<r){c=[];e=1-Gi;t.beginPath();t.moveTo(H[1][0],H[1][1]);for(l=1;l+2<r;l++)k=H[l],c[0]=[k[0],k[1]],c[1]=
[k[0]+(e*H[l+1][0]-e*H[l-1][0])/6,k[1]+(e*H[l+1][1]-e*H[l-1][1])/6],c[2]=[H[l+1][0]+(e*H[l][0]-e*H[l+2][0])/6,H[l+1][1]+(e*H[l][1]-e*H[l+2][1])/6],c[3]=[H[l+1][0],H[l+1][1]],t.bezierCurveTo(c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]);ke()}of=nf=!1;Rb=[];Jb=0;a&&H.pop()}};qa.prototype.endShape=function(a){if(0!==H.length){var c=a===p.Sd;a=[];var e=[],f=[],g=[],k=[],l;Gd=!0;var n,m,r=H.length;for(n=0;n<r;n++)for(l=H[n],m=0;3>m;m++)e.push(l[m]);for(n=0;n<r;n++)for(l=H[n],m=5;9>m;m++)f.push(l[m]);
for(n=0;n<r;n++)for(l=H[n],m=9;13>m;m++)g.push(l[m]);for(n=0;n<r;n++)l=H[n],k.push(l[3]),k.push(l[4]);if(c){e.push(H[0][0]);e.push(H[0][1]);e.push(H[0][2]);for(n=5;9>n;n++)f.push(H[0][n]);for(n=9;13>n;n++)g.push(H[0][n]);k.push(H[0][3]);k.push(H[0][4])}if(!nf||eb!==p.Yc&&eb!==b)if(!of||eb!==p.Yc&&eb!==b){if(eb===p.POINTS){for(n=0;n<r;n++)for(l=H[n],m=0;3>m;m++)a.push(l[m]);Mf(a,g)}else if(eb===p.LINES){for(n=0;n<r;n++)for(l=H[n],m=0;3>m;m++)a.push(l[m]);for(n=0;n<r;n++)for(l=H[n],m=5;9>m;m++)f.push(l[m]);
Xb(a,"LINES",g)}else if(eb===p.TRIANGLES){if(2<r)for(n=0;n+2<r;n+=3){e=[];k=[];a=[];f=[];g=[];for(m=0;3>m;m++)for(c=0;3>c;c++)a.push(H[n+m][c]),e.push(H[n+m][c]);for(m=0;3>m;m++)for(c=3;5>c;c++)k.push(H[n+m][c]);for(m=0;3>m;m++)for(c=5;9>c;c++)f.push(H[n+m][c]),g.push(H[n+m][c+4]);Aa&&Xb(a,"LINE_LOOP",g);(Ka||Qb)&&Wb(e,"TRIANGLES",f,k)}}else if(eb===p.TRIANGLE_STRIP){if(2<r)for(n=0;n+2<r;n++){a=[];e=[];g=[];f=[];k=[];for(m=0;3>m;m++)for(c=0;3>c;c++)a.push(H[n+m][c]),e.push(H[n+m][c]);for(m=0;3>m;m++)for(c=
3;5>c;c++)k.push(H[n+m][c]);for(m=0;3>m;m++)for(c=5;9>c;c++)g.push(H[n+m][c+4]),f.push(H[n+m][c]);(Ka||Qb)&&Wb(e,"TRIANGLE_STRIP",f,k);Aa&&Xb(a,"LINE_LOOP",g)}}else if(eb===p.TRIANGLE_FAN){if(2<r){for(n=0;3>n;n++)for(l=H[n],m=0;3>m;m++)a.push(l[m]);for(n=0;3>n;n++)for(l=H[n],m=9;13>m;m++)g.push(l[m]);Aa&&Xb(a,"LINE_LOOP",g);for(n=2;n+1<r;n++){a=[];g=[];a.push(H[0][0]);a.push(H[0][1]);a.push(H[0][2]);g.push(H[0][9]);g.push(H[0][10]);g.push(H[0][11]);g.push(H[0][12]);for(m=0;2>m;m++)for(c=0;3>c;c++)a.push(H[n+
m][c]);for(m=0;2>m;m++)for(c=9;13>c;c++)g.push(H[n+m][c]);Aa&&Xb(a,"LINE_STRIP",g)}(Ka||Qb)&&Wb(e,"TRIANGLE_FAN",f,k)}}else if(eb===p.ae)for(n=0;n+3<r;n+=4){a=[];for(m=0;4>m;m++)for(l=H[n+m],c=0;3>c;c++)a.push(l[c]);Aa&&Xb(a,"LINE_LOOP",g);if(Ka){e=[];f=[];k=[];for(m=0;3>m;m++)e.push(H[n][m]);for(m=5;9>m;m++)f.push(H[n][m]);for(m=0;3>m;m++)e.push(H[n+1][m]);for(m=5;9>m;m++)f.push(H[n+1][m]);for(m=0;3>m;m++)e.push(H[n+3][m]);for(m=5;9>m;m++)f.push(H[n+3][m]);for(m=0;3>m;m++)e.push(H[n+2][m]);for(m=
5;9>m;m++)f.push(H[n+2][m]);Qb&&(k.push(H[n+0][3]),k.push(H[n+0][4]),k.push(H[n+1][3]),k.push(H[n+1][4]),k.push(H[n+3][3]),k.push(H[n+3][4]),k.push(H[n+2][3]),k.push(H[n+2][4]));Wb(e,"TRIANGLE_STRIP",f,k)}}else if(eb===p.Jg){if(3<r){for(n=0;2>n;n++)for(l=H[n],m=0;3>m;m++)a.push(l[m]);for(n=0;2>n;n++)for(l=H[n],m=9;13>m;m++)g.push(l[m]);Xb(a,"LINE_STRIP",g);4<r&&0<r%2&&(e.splice(e.length-3),H.pop());for(n=0;n+3<r;n+=2){a=[];g=[];for(m=0;3>m;m++)a.push(H[n+1][m]);for(m=0;3>m;m++)a.push(H[n+3][m]);for(m=
0;3>m;m++)a.push(H[n+2][m]);for(m=0;3>m;m++)a.push(H[n+0][m]);for(m=9;13>m;m++)g.push(H[n+1][m]);for(m=9;13>m;m++)g.push(H[n+3][m]);for(m=9;13>m;m++)g.push(H[n+2][m]);for(m=9;13>m;m++)g.push(H[n+0][m]);Aa&&Xb(a,"LINE_STRIP",g)}(Ka||Qb)&&Wb(e,"TRIANGLE_LIST",f,k)}}else if(1===r){for(m=0;3>m;m++)a.push(H[0][m]);for(m=9;13>m;m++)g.push(H[0][m]);Mf(a,g)}else{for(n=0;n<r;n++){l=H[n];for(m=0;3>m;m++)a.push(l[m]);for(m=5;9>m;m++)g.push(l[m])}Aa&&c?Xb(a,"LINE_LOOP",g):Aa&&!c&&Xb(a,"LINE_STRIP",g);(Ka||Qb)&&
Wb(e,"TRIANGLE_FAN",f,k)}Qb=!1;t.useProgram(T);Ya("usingTexture3d",T,"uUsingTexture",Qb)}else a=e,a.splice(a.length-3),g.splice(g.length-4),Aa&&Xb(a,null,g),Ka&&Wb(e,"TRIANGLES",f);else Aa&&Xb(e,null,g),Ka&&Wb(e,null,f);of=nf=!1;Rb=[];Jb=0}};W.prototype.bezierVertex=function(){of=!0;var a=[];if(Gd)throw"vertex() must be used at least once before calling bezierVertex()";for(var b=0;b<arguments.length;b++)a[b]=arguments[b];H.push(a);H[H.length-1].Ae=!1};qa.prototype.bezierVertex=function(){of=!0;if(Gd)throw"vertex() must be used at least once before calling bezierVertex()";
if(9===arguments.length){jf===b&&(jf=new ia);var a=H.length-1;Rg(Ni,jf);jf.apply(Oi);for(var c=jf.A(),e=H[a][0],f=H[a][1],a=H[a][2],g=c[4]*e+c[5]*arguments[0]+c[6]*arguments[3]+c[7]*arguments[6],k=c[8]*e+c[9]*arguments[0]+c[10]*arguments[3]+c[11]*arguments[6],l=c[12]*e+c[13]*arguments[0]+c[14]*arguments[3]+c[15]*arguments[6],m=c[4]*f+c[5]*arguments[1]+c[6]*arguments[4]+c[7]*arguments[7],p=c[8]*f+c[9]*arguments[1]+c[10]*arguments[4]+c[11]*arguments[7],r=c[12]*f+c[13]*arguments[1]+c[14]*arguments[4]+
c[15]*arguments[7],s=c[4]*a+c[5]*arguments[2]+c[6]*arguments[5]+c[7]*arguments[8],t=c[8]*a+c[9]*arguments[2]+c[10]*arguments[5]+c[11]*arguments[8],c=c[12]*a+c[13]*arguments[2]+c[14]*arguments[5]+c[15]*arguments[8],u=0;u<Ni;u++)e+=g,g+=k,k+=l,f+=m,m+=p,p+=r,a+=s,s+=t,t+=c,n.vertex(e,f,a);n.vertex(arguments[6],arguments[7],arguments[8])}};n.texture=function(a){var b=vb.xb();if(a.Sg)b.bindTexture(b.TEXTURE_2D,a.Sg);else{if("canvas"===a.localName)b.bindTexture(b.TEXTURE_2D,Qk),b.texImage2D(b.TEXTURE_2D,
0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR),b.generateMipmap(b.TEXTURE_2D);else{var c=b.createTexture(),d=s.createElement("canvas"),e=d.getContext("2d"),f;if(a.width&0===a.width-1)d.width=a.width;else{for(f=1;f<a.width;)f*=2;d.width=f}if(a.height&0===a.height-1)d.height=a.height;else{for(f=1;f<a.height;)f*=2;d.height=f}e.drawImage(a.ib,0,0,a.width,a.height,0,0,d.width,d.height);b.bindTexture(b.TEXTURE_2D,
c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR_MIPMAP_LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,d);b.generateMipmap(b.TEXTURE_2D);a.Sg=c}Sk=a.width;Tk=a.height}Qb=!0;b.useProgram(T);Ya("usingTexture3d",T,"uUsingTexture",Qb)};n.textureMode=function(a){Uk=a};W.prototype.curveVertex=
function(a,b){nf=!0;n.vertex(a,b)};qa.prototype.curveVertex=function(a,b,c){nf=!0;Ik||Lf();var d=[];d[0]=a;d[1]=b;d[2]=c;Rb.push(d);Jb++;if(3<Jb){var e=Rb[Jb-4][0],f=Rb[Jb-4][1],g=Rb[Jb-4][2],k=Rb[Jb-3][0],l=Rb[Jb-3][1],m=Rb[Jb-3][2],p=Rb[Jb-2][0],r=Rb[Jb-2][1],s=Rb[Jb-2][2],t=Rb[Jb-1][0],u=Rb[Jb-1][1],v=Rb[Jb-1][2];a=k;b=l;c=m;var w=hf.A(),d=w[4]*e+w[5]*k+w[6]*p+w[7]*t,A=w[8]*e+w[9]*k+w[10]*p+w[11]*t,e=w[12]*e+w[13]*k+w[14]*p+w[15]*t,k=w[4]*f+w[5]*l+w[6]*r+w[7]*u,p=w[8]*f+w[9]*l+w[10]*r+w[11]*u,
f=w[12]*f+w[13]*l+w[14]*r+w[15]*u,l=w[4]*g+w[5]*m+w[6]*s+w[7]*v,r=w[8]*g+w[9]*m+w[10]*s+w[11]*v,g=w[12]*g+w[13]*m+w[14]*s+w[15]*v;n.vertex(a,b,c);for(m=0;m<Hi;m++)a+=d,d+=A,A+=e,b+=k,k+=p,p+=f,c+=l,l+=r,r+=g,n.vertex(a,b,c)}};n.curveTightness=function(a){Gi=a};n.curveDetail=function(a){Hi=a;Lf()};n.rectMode=function(a){cd=a};n.imageMode=function(a){switch(a){case p.yb:nh=Rf;break;case p.jc:nh=Yg;break;case p.Sa:nh=he;break;default:throw"Invalid imageMode";}};n.ellipseMode=function(a){Jc=a};n.arc=
function(a,b,c,d,e,f){if(!(0>=c||f<e)){Jc===p.jc?(c-=a,d-=b):Jc===p.Zc?(a-=c,b-=d,c*=2,d*=2):Jc===p.Sa&&(a-=c/2,b-=d/2);for(;0>e;)e+=p.Tb,f+=p.Tb;f-e>p.Tb&&(e=0,f=p.Tb);c/=2;d/=2;a+=c;b+=d;e=0|0.5+e*n.Kg*2;f=0|0.5+f*n.Kg*2;var g,k;if(Ka){var l=Aa;Aa=!1;n.beginShape();n.vertex(a,b);for(g=e;g<=f;g++)k=g%p.jb,n.vertex(a+$f[k]*c,b+Zf[k]*d);n.endShape(p.Sd);Aa=l}if(Aa){l=Ka;Ka=!1;n.beginShape();for(g=e;g<=f;g++)k=g%p.jb,n.vertex(a+$f[k]*c,b+Zf[k]*d);n.endShape();Ka=l}}};W.prototype.line=function(a,c,e,
f){if(Aa)if(a=Math.round(a),e=Math.round(e),c=Math.round(c),f=Math.round(f),a===e&&c===f)n.point(a,c);else{for(var g=b,k=b,l=!0,g=va.A(),m=[1,0,0,0,1,0],p=0;6>p&&l;p++)l=g[p]===m[p];l&&(a===e?(c>f&&(g=c,c=f,f=g),f++,1===Eb%2&&t.translate(0.5,0)):c===f&&(a>e&&(g=a,a=e,e=g),e++,1===Eb%2&&t.translate(0,0.5)),1===Eb&&(k=t.lineCap,t.lineCap="butt"));t.beginPath();t.moveTo(a||0,c||0);t.lineTo(e||0,f||0);Zb();l&&(a===e&&1===Eb%2?t.translate(-0.5,0):c===f&&1===Eb%2&&t.translate(0,-0.5),1===Eb&&(t.lineCap=
k))}};qa.prototype.line=function(a,c,e,f,g,k){if(g===b||k===b)k=0,g=f,f=e,e=0;a===f&&c===g&&e===k?n.point(a,c,e):(a=[a,c,e,f,g,k],c=new ia,c.scale(1,-1,1),c.apply(va.A()),c.sa(),0<Eb&&Aa&&(t.useProgram(fa),La("uModel2d",fa,"uModel",[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),La("uView2d",fa,"uView",c.A()),Xa("uColor2d",fa,"uColor",Yb),Ya("uIsDrawingText",fa,"uIsDrawingText",!1),hb("aVertex2d",fa,"aVertex",3,Li),Hb("aTextureCoord2d",fa,"aTextureCoord"),t.bufferData(t.ARRAY_BUFFER,new B(a),t.STREAM_DRAW),t.drawArrays(t.LINES,
0,2)))};n.bezierDetail=function(a){Ni=a};n.bezierPoint=function(a,b,c,d,e){return(1-e)*(1-e)*(1-e)*a+3*(1-e)*(1-e)*e*b+3*(1-e)*e*e*c+e*e*e*d};n.bezierTangent=function(a,b,c,d,e){return 3*e*e*(-a+3*b-3*c+d)+6*e*(a-2*b+c)+3*(-a+b)};n.curvePoint=function(a,b,c,d,e){return 0.5*(2*b+(-a+c)*e+(2*a-5*b+4*c-d)*e*e+(-a+3*b-3*c+d)*e*e*e)};n.curveTangent=function(a,b,c,d,e){return 0.5*(-a+c+2*(2*a-5*b+4*c-d)*e+3*(-a+3*b-3*c+d)*e*e)};n.triangle=function(a,b,c,d,e,f){n.beginShape(p.TRIANGLES);n.vertex(a,b,0);
n.vertex(c,d,0);n.vertex(e,f,0);n.endShape()};n.quad=function(a,b,c,d,e,f,g,k){n.beginShape(p.ae);n.vertex(a,b,0);n.vertex(c,d,0);n.vertex(e,f,0);n.vertex(g,k,0);n.endShape()};W.prototype.rect=function(a,c,e,f,g,k,l,n){if(e||f)if(cd===p.jc?(e-=a,f-=c):cd===p.Zc?(e*=2,f*=2,a-=e/2,c-=f/2):cd===p.Sa&&(a-=e/2,c-=f/2),a=Math.round(a),c=Math.round(c),e=Math.round(e),f=Math.round(f),g!==b){n===b&&(n=l=k=g);var m=e/2,r=f/2;if(g>m||g>r)g=Math.min(m,r);if(k>m||k>r)k=Math.min(m,r);if(l>m||l>r)l=Math.min(m,r);
if(n>m||n>r)n=Math.min(m,r);Ka&&!Aa||t.translate(0.5,0.5);t.beginPath();t.moveTo(a+g,c);t.lineTo(a+e-k,c);t.quadraticCurveTo(a+e,c,a+e,c+k);t.lineTo(a+e,c+f-l);t.quadraticCurveTo(a+e,c+f,a+e-l,c+f);t.lineTo(a+n,c+f);t.quadraticCurveTo(a,c+f,a,c+f-n);t.lineTo(a,c+g);t.quadraticCurveTo(a,c,a+g,c);Ka&&!Aa||t.translate(-0.5,-0.5);wc();Zb()}else Aa&&1===Eb%2&&t.translate(0.5,0.5),t.beginPath(),t.rect(a,c,e,f),wc(),Zb(),Aa&&1===Eb%2&&t.translate(-0.5,-0.5)};qa.prototype.rect=function(a,c,e,f,g){if(g!==
b)throw"rect() with rounded corners is not supported in 3D mode";cd===p.jc?(e-=a,f-=c):cd===p.Zc?(e*=2,f*=2,a-=e/2,c-=f/2):cd===p.Sa&&(a-=e/2,c-=f/2);g=new ia;g.translate(a,c,0);g.scale(e,f,1);g.sa();c=new ia;c.scale(1,-1,1);c.apply(va.A());c.sa();0<Eb&&Aa&&(t.useProgram(fa),La("uModel2d",fa,"uModel",g.A()),La("uView2d",fa,"uView",c.A()),Xa("uColor2d",fa,"uColor",Yb),Ya("uIsDrawingText2d",fa,"uIsDrawingText",!1),hb("aVertex2d",fa,"aVertex",3,jh),Hb("aTextureCoord2d",fa,"aTextureCoord"),t.drawArrays(t.LINE_LOOP,
0,Yi.length/3));Ka&&(t.useProgram(T),La("uModel3d",T,"uModel",g.A()),La("uView3d",T,"uView",c.A()),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1,1),Xa("color3d",T,"uColor",Gb),0<rb?(a=new ia,a.set(c),c=new ia,c.set(g),a.Nb(c),g=new ia,g.set(a),g.cc(),g.sa(),La("uNormalTransform3d",T,"uNormalTransform",g.A()),hb("aNormal3d",T,"aNormal",3,Si)):Hb("normal3d",T,"aNormal"),hb("vertex3d",T,"aVertex",3,jh),t.drawArrays(t.TRIANGLE_FAN,0,Yi.length/3),t.disable(t.POLYGON_OFFSET_FILL))};W.prototype.ellipse=
function(a,b,c,d){a=a||0;b=b||0;if(!(0>=c&&0>=d))if(Jc===p.Zc?(c*=2,d*=2):Jc===p.jc?(c-=a,d-=b,a+=c/2,b+=d/2):Jc===p.yb&&(a+=c/2,b+=d/2),c===d)t.beginPath(),t.arc(a,b,c/2,0,p.Tb,!1),wc(),Zb();else{c/=2;d/=2;var e=0.5522847498307933*c,f=0.5522847498307933*d;n.beginShape();n.vertex(a+c,b);n.bezierVertex(a+c,b-f,a+e,b-d,a,b-d);n.bezierVertex(a-e,b-d,a-c,b-f,a-c,b);n.bezierVertex(a-c,b+f,a-e,b+d,a,b+d);n.bezierVertex(a+e,b+d,a+c,b+f,a+c,b);n.endShape()}};qa.prototype.ellipse=function(a,b,c,d){a=a||0;
b=b||0;if(!(0>=c&&0>=d)){Jc===p.Zc?(c*=2,d*=2):Jc===p.jc?(c-=a,d-=b,a+=c/2,b+=d/2):Jc===p.yb&&(a+=c/2,b+=d/2);c/=2;d/=2;var e=0.5522847498307933*c,f=0.5522847498307933*d;n.beginShape();n.vertex(a+c,b);n.bezierVertex(a+c,b-f,0,a+e,b-d,0,a,b-d,0);n.bezierVertex(a-e,b-d,0,a-c,b-f,0,a-c,b,0);n.bezierVertex(a-c,b+f,0,a-e,b+d,0,a,b+d,0);n.bezierVertex(a+e,b+d,0,a+c,b+f,0,a+c,b,0);n.endShape();if(Ka){for(e=d=c=0;e<H.length;e++)c+=H[e][0],d+=H[e][1];c/=H.length;d/=H.length;e=[];a=[];b=[];e[0]=c;e[1]=d;e[2]=
0;e[3]=0;e[4]=0;e[5]=Gb[0];e[6]=Gb[1];e[7]=Gb[2];e[8]=Gb[3];e[9]=Yb[0];e[10]=Yb[1];e[11]=Yb[2];e[12]=Yb[3];e[13]=Di;e[14]=Ei;e[15]=Fi;H.unshift(e);for(e=0;e<H.length;e++){for(c=0;3>c;c++)a.push(H[e][c]);for(c=5;9>c;c++)b.push(H[e][c])}Wb(a,"TRIANGLE_FAN",b)}}};n.normal=function(a,b,c){if(3!==arguments.length||"number"!==typeof a||"number"!==typeof b||"number"!==typeof c)throw"normal() requires three numeric arguments.";Di=a;Ei=b;Fi=c;0!==eb&&(dh===p.Fg?dh=p.Gg:dh===p.Gg&&(dh=p.oj))};n.save=function(a,
c){return c!==b?r.open(c.toDataURL(),"_blank"):r.open(n.Yb.canvas.toDataURL(),"_blank")};var Vm=0;n.saveFrame=function(a){a===b&&(a="screen-####.png");a=a.replace(/#+/,function(a){for(var b=""+Vm++;b.length<a.length;)b="0"+b;return b});n.save(a)};var Pm=s.createElement("canvas").getContext("2d"),Mk=[b,b,b];Vb.prototype={kf:!0,updatePixels:function(){var a=this.ib;a&&a instanceof A&&this.zb&&a.getContext("2d").putImageData(this.O,0,0);this.zb=!1},Kh:function(a){var b=Bd(a);try{var c=b.context.getImageData(0,
0,a.width,a.height);this.Lh(c)}catch(d){a.width&&a.height&&(this.fb=!0,this.width=a.width,this.height=a.height)}this.ib=a},get:function(a,b,c,d){if(!arguments.length)return n.get(this);if(2===arguments.length)return n.get(a,b,this);if(4===arguments.length)return n.get(a,b,c,d,this)},set:function(a,b,c){n.set(a,b,c,this);this.zb=!0},blend:function(a,b,c,d,e,f,g,k,l,m){9===arguments.length?n.blend(this,a,b,c,d,e,f,g,k,l,this):10===arguments.length&&n.blend(a,b,c,d,e,f,g,k,l,m,this);delete this.ib},
copy:function(a,b,c,d,e,f,g,k,l){8===arguments.length?n.blend(this,a,b,c,d,e,f,g,k,p.REPLACE,this):9===arguments.length&&n.blend(a,b,c,d,e,f,g,k,l,p.REPLACE,this);delete this.ib},filter:function(a,b){2===arguments.length?n.filter(a,b,this):1===arguments.length&&n.filter(a,null,this);delete this.ib},save:function(a){n.save(a,this)},loadPixels:u,Tc:function(){return this.fb?this.ib:this.zb?Bd(this.ib).context.getImageData(0,0,this.width,this.height):this.O},toDataURL:function(){if(this.fb)throw"Image is loaded remotely. Cannot create dataURI.";
return Bd(this.O).canvas.toDataURL()},Lh:function(a){var b=a.width,c=a.height,d=s.createElement("canvas"),e=d.getContext("2d");this.width=d.width=b;this.height=d.height=c;e.putImageData(a,0,0);this.Kc=p.Wc;this.O=a;this.ib=d}};n.tj=Vb;n.createImage=function(a,b,c){return new Vb(a,b,c)};n.loadImage=function(a,b,c){if(jb.Mc.images[a])return b=new Vb(jb.Mc.images[a]),b.loaded=!0,b;b=new Vb;var d=s.createElement("img");b.ib=d;d.onload=function(a,b,c){return function(){b.Kh(a);b.loaded=!0;c&&c()}}(d,b,
c);d.src=a;return b};n.requestImage=n.loadImage;n.get=function(a,b,c,d,e){if(void 0!==e)c=Uf(a,b,c,d,e);else if(void 0!==d)c=ef(a,b,c,d);else if(void 0!==c){if(c.fb)throw"Image is loaded remotely. Cannot get x,y.";a=b*c.width*4+4*a;c=c.O.data;c=c[a+3]<<24&p.T|c[a]<<16&p.ia|c[a+1]<<8&p.ha|c[a+2]&p.ga}else void 0!==b?a>=n.width||0>a||0>b||b>=n.height?c=0:Xf?(a=4*((0|a)+n.width*(0|b)),c=n.O.data,c=c[a+3]<<24&p.T|c[a]<<16&p.ia|c[a+1]<<8&p.ha|c[a+2]&p.ga):(c=n.Tc(0|a,0|b,1,1).data,c=c[3]<<24&p.T|c[0]<<
16&p.ia|c[1]<<8&p.ha|c[2]&p.ga):c=void 0!==a?Uf(0,0,a.width,a.height,a):ef(0,0,n.width,n.height);return c};n.createGraphics=function(a,b,c){var d=new v;d.size(a,b,c);d.background(0,0);return d};n.set=function(a,b,c,d){if(3===arguments.length)"number"===typeof c?a<n.width&&0<=a&&0<=b&&b<n.height&&(Xf||(n.loadPixels(),null===Wi&&(Nk=t,Wi=new ah),Xf=!0,t=Wi,Vk=0),n.pixels.setPixel((0|a)+n.width*(0|b),c),++Vk>Wk&&Cd()):(c instanceof Vb||c.kf)&&n.image(c,a,b);else if(4===arguments.length){if(d.fb)throw"Image is loaded remotely. Cannot set x,y.";
var e=n.color.toArray(c),f=b*d.width*4+4*a,g=d.O.data;g[f]=e[0];g[f+1]=e[1];g[f+2]=e[2];g[f+3]=e[3]}};n.O={};n.pixels={Lc:function(){return n.O.data.length?n.O.data.length/4:0},getPixel:function(a){a*=4;var b=n.O.data;return b[a+3]<<24&4278190080|b[a+0]<<16&16711680|b[a+1]<<8&65280|b[a+2]&255},setPixel:function(a,b){var c=4*a,d=n.O.data;d[c+0]=(b&16711680)>>>16;d[c+1]=(b&65280)>>>8;d[c+2]=b&255;d[c+3]=(b&4278190080)>>>24},toArray:function(){for(var a=[],b=n.O.width*n.O.height,c=n.O.data,d=0,e=0;d<
b;d++,e+=4)a.push(c[e+3]<<24&4278190080|c[e+0]<<16&16711680|c[e+1]<<8&65280|c[e+2]&255);return a},set:function(a){for(var b=0,c=a.length;b<c;b++)this.setPixel(b,a[b])}};n.loadPixels=function(){n.O=vb.xb().getImageData(0,0,n.width,n.height)};n.updatePixels=function(){n.O&&vb.xb().putImageData(n.O,0,0)};n.hint=function(a){var b=vb.xb();a===p.Oi?(b.disable(b.DEPTH_TEST),b.depthMask(!1),b.clear(b.DEPTH_BUFFER_BIT)):a===p.Ri?(b.enable(b.DEPTH_TEST),b.depthMask(!0)):a===p.Si||a===p.Ti?af=!0:a===p.Pi&&(af=
!1)};W.prototype.background=function(a,c,e,f){a!==b&&k(a,c,e,f);me instanceof Vb||me.kf?(t.save(),t.setTransform(1,0,0,1,0,0),n.image(me,0,0)):(t.save(),t.setTransform(1,0,0,1,0,0),n.alpha(me)!==Ab&&t.clearRect(0,0,n.width,n.height),t.fillStyle=n.color.toString(me),t.fillRect(0,0,n.width,n.height),wd=!0);bd()};qa.prototype.background=function(a,b,c,d){0<arguments.length&&k(a,b,c,d);var e=n.color.Sc(me);t.clearColor(e[0],e[1],e[2],e[3]);t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)};W.prototype.image=
function(a,b,c,d,e){b=Math.round(b);c=Math.round(c);if(0<a.width){var f=nh(b||0,c||0,d||a.width,e||a.height,4>arguments.length);if(a.ib&&null===Dd){var g=a.ib;a.zb&&a.updatePixels();t.drawImage(g,0,0,g.width,g.height,f.x,f.y,f.We,f.we)}else g=a.Tc(),null!==Dd&&(Dd(g),a.zb=!0),t.drawImage(Bd(g).canvas,0,0,a.width,a.height,f.x,f.y,f.We,f.we)}};qa.prototype.image=function(a,b,c,d,e){0<a.width&&(b=Math.round(b),c=Math.round(c),d=d||a.width,e=e||a.height,n.beginShape(n.ae),n.texture(a),n.vertex(b,c,0,
0,0),n.vertex(b,c+e,0,0,e),n.vertex(b+d,c+e,0,d,e),n.vertex(b+d,c,0,d,0),n.endShape())};n.tint=function(a,b,c,d){a=n.color(a,b,c,d);var e=n.red(a)/$b,f=n.green(a)/yc,g=n.blue(a)/ac,k=n.alpha(a)/Ab;Dd=function(a){var b=a.data;a=4*a.width*a.height;for(var c=0;c<a;)b[c++]*=e,b[c++]*=f,b[c++]*=g,b[c++]*=k};Ji=function(a){for(var b=0;b<a.length;)a[b++]=e,a[b++]=f,a[b++]=g,a[b++]=k}};n.noTint=function(){Ji=Dd=null};n.copy=function(a,c,e,f,g,k,l,m,r){r===b&&(r=m,m=l,l=k,k=g,g=f,f=e,e=c,c=a,a=n);n.blend(a,
c,e,f,g,k,l,m,r,p.REPLACE)};n.blend=function(a,c,e,f,g,k,l,m,p,r,s){if(a.fb)throw"Image is loaded remotely. Cannot blend image.";r===b&&(r=p,p=m,m=l,l=k,k=g,g=f,f=e,e=c,c=a,a=n);f=c+f;g=e+g;m=k+m;p=l+p;var t=s||n;s!==b&&r!==b||n.loadPixels();a.loadPixels();a===n&&n.Xk(c,e,f,g,k,l,m,p)?n.dh(n.get(c,e,f-c,g-e),0,0,f-c-1,g-e-1,t.O.data,t.width,t.height,k,l,m,p,r):n.dh(a,c,e,f,g,t.O.data,t.width,t.height,k,l,m,p,r);s===b&&n.updatePixels()};n.filter=function(a,c,e){var g,k,l,m;3===arguments.length?(e.loadPixels(),
g=e):(n.loadPixels(),g=n);c===b&&(c=null);if(g.fb)throw"Image is loaded remotely. Cannot filter image.";var r=g.pixels.Lc();switch(a){case p.Gi:var s=c||1,t=g,u,v,w,A,E,F,C,H,L;l=t.pixels.Lc();m=new B(l);r=new B(l);k=new B(l);l=new B(l);var Q=0,U,T,Y,s=n.floor(3.5*s),W,s=1>s?1:248>s?s:248;if(n.hb.ge!==s){n.hb.ge=s;n.hb.fe=1+(n.hb.ge<<1);n.hb.nf=new B(n.hb.fe);var ea=n.hb.nf,ia=n.hb.fe;for(W=0;W<ia;W++)ea[W]=0;ia=(s-1)*(s-1);for(W=1;W<s;W++)ea[s+W]=ea[void 0]=ia;ea[s]=s*s}s=t.height;W=t.width;ea=n.hb.fe;
H=n.hb.ge;var ia=n.hb.nf,fa=t.O.data;for(T=0;T<s;T++){for(U=0;U<W;U++){w=v=u=A=t=0;F=U-H;if(0>F)E=-F,F=0;else{if(F>=W)break;E=0}for(Y=E;Y<ea&&!(F>=W);Y++)C=4*(F+Q),E=ia[Y],A+=E*fa[C+3],u+=E*fa[C],v+=E*fa[C+1],w+=E*fa[C+2],t+=E,F++;C=Q+U;l[C]=A/t;m[C]=u/t;r[C]=v/t;k[C]=w/t}Q+=W}Q=0;H=-H;L=H*W;for(T=0;T<s;T++){for(U=0;U<W;U++){w=v=u=A=t=0;if(0>H)E=C=-H,F=U;else{if(H>=s)break;E=0;C=H;F=U+L}for(Y=E;Y<ea&&!(C>=s);Y++)E=ia[Y],A+=E*l[F],u+=E*m[F],v+=E*r[F],w+=E*k[F],t+=E,C++,F+=W;C=4*(U+Q);fa[C]=u/t;fa[C+
1]=v/t;fa[C+2]=w/t;fa[C+3]=A/t}Q+=W;L+=W;H++}break;case p.ij:if(g.Kc===p.ALPHA){for(m=0;m<r;m++)k=255-g.pixels.getPixel(m),g.pixels.setPixel(m,4278190080|k<<16|k<<8|k);g.Kc=p.RGB}else for(m=0;m<r;m++)k=g.pixels.getPixel(m),l=77*(k>>16&255)+151*(k>>8&255)+28*(k&255)>>8,g.pixels.setPixel(m,k&p.T|l<<16|l<<8|l);break;case p.INVERT:for(m=0;m<r;m++)g.pixels.setPixel(m,g.pixels.getPixel(m)^16777215);break;case p.vj:if(null===c)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";k=n.floor(c);
if(2>k||255<k)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)";l=k-1;for(m=0;m<r;m++)Q=g.pixels.getPixel(m)>>16&255,s=g.pixels.getPixel(m)>>8&255,W=g.pixels.getPixel(m)&255,Q=255*(Q*k>>8)/l,s=255*(s*k>>8)/l,W=255*(W*k>>8)/l,g.pixels.setPixel(m,4278190080&g.pixels.getPixel(m)|Q<<16|s<<8|W);break;case p.qj:for(m=0;m<r;m++)g.pixels.setPixel(m,g.pixels.getPixel(m)|4278190080);g.Kc=p.RGB;break;case p.Fj:null===c&&(c=0.5);if(0>c||1<c)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)";
k=n.floor(255*c);for(m=0;m<r;m++)l=n.max((g.pixels.getPixel(m)&p.ia)>>16,n.max((g.pixels.getPixel(m)&p.ha)>>8,g.pixels.getPixel(m)&p.ga)),g.pixels.setPixel(m,g.pixels.getPixel(m)&p.T|(l<k?0:16777215));break;case p.Vi:f(!0,g);break;case p.Ni:f(!1,g)}g.updatePixels()};n.hb={ue:0,Uf:0,ve:0,Vf:0,Ue:0,hg:0,ig:0,jg:0,Id:0,Tt:0,Zf:0,$h:0,Vh:0,Md:0,Ad:0,Od:0,Bd:0,cd:0,ad:0,dd:0,bd:0,vi:0,Qc:0,mi:0,Nh:0,$g:0,Tg:0,ui:null,ge:0,fe:0,nf:null};n.Xk=function(a,b,c,d,e,f,g,k){c=c-a+1;d=d-b+1;g=g-e+1;k=k-f+1;e<a?
(g+=e-a,g>c&&(g=c)):(a=c+a-e,g>a&&(g=a));f<b?(k+=f-b,k>d&&(k=d)):(b=d+b-f,k>b&&(k=b));return!(0>=g||0>=k)};var Kb={};Kb[p.BLEND]=n.U.blend;Kb[p.mg]=n.U.add;Kb[p.Pg]=n.U.wi;Kb[p.Bg]=n.U.ai;Kb[p.sg]=n.U.Eh;Kb[p.REPLACE]=n.U.replace;Kb[p.tg]=n.U.Fh;Kb[p.wg]=n.U.Jh;Kb[p.Eg]=n.U.multiply;Kb[p.Ng]=n.U.screen;Kb[p.Hg]=n.U.di;Kb[p.yg]=n.U.Th;Kb[p.Og]=n.U.ti;Kb[p.ug]=n.U.Hh;Kb[p.qg]=n.U.eh;n.dh=function(a,b,c,d,e,f,g,k,l,m,r,s,t){0>b&&(b=0);0>c&&(c=0);d>=a.width&&(d=a.width-1);e>=a.height&&(e=a.height-1);
d-=b;e-=c;r-=l;s-=m;if(!(0>=r||0>=s||0>=d||0>=e||l>=g||m>=k||b>=a.width||c>=a.height)){d=Math.floor(d/r*p.Zd);e=Math.floor(e/s*p.Zd);var u=n.hb;u.vi=Math.floor(0>l?-l*d:b*p.Zd);u.Qc=Math.floor(0>m?-m*e:c*p.Zd);0>l&&(r+=l,l=0);0>m&&(s+=m,m=0);r=Math.min(r,g-l);s=Math.min(s,k-m);b=m*g+l;var v;u.ui=a.O.data;u.Zf=a.width;u.$h=a.width-1;u.Vh=a.height-1;c=Kb[t];var w,A,E,F;l=p.T;m=p.ia;var C=p.ha,B=p.ga,H=p.yj,L=p.wj,Q=p.zj,U=p.xj,T=u.ui,W=Math.min;for(t=0;t<s;t++){u.Id=u.vi;u.ve=u.Qc&H;u.Vf=H-u.ve;u.ig=
(u.Qc>>L)*u.Zf;u.jg=W((u.Qc>>L)+1,u.Vh)*u.Zf;for(a=0;a<r;a++)k=4*(b+a),v=f[k+3]<<24&l|f[k]<<16&m|f[k+1]<<8&C|f[k+2]&B,u.ue=u.Id&H,u.Uf=H-u.ue,u.Md=u.Uf*u.Vf>>L,u.Ad=u.Uf*u.ve>>L,u.Od=u.ue*u.Vf>>L,u.Bd=u.ue*u.ve>>L,u.Ue=u.Id>>L,u.hg=W(u.Ue+1,u.$h),w=4*(u.ig+u.Ue),A=4*(u.ig+u.hg),E=4*(u.jg+u.Ue),F=4*(u.jg+u.hg),u.cd=T[w+3]<<24&l|T[w]<<16&m|T[w+1]<<8&C|T[w+2]&B,u.dd=T[A+3]<<24&l|T[A]<<16&m|T[A+1]<<8&C|T[A+2]&B,u.ad=T[E+3]<<24&l|T[E]<<16&m|T[E+1]<<8&C|T[E+2]&B,u.bd=T[F+3]<<24&l|T[F]<<16&m|T[F+1]<<8&C|
T[F+2]&B,u.mi=u.Md*((u.cd&m)>>16)+u.Ad*((u.ad&m)>>16)+u.Od*((u.dd&m)>>16)+u.Bd*((u.bd&m)>>16)<<Q&m,u.Nh=u.Md*(u.cd&C)+u.Ad*(u.ad&C)+u.Od*(u.dd&C)+u.Bd*(u.bd&C)>>>L&C,u.$g=u.Md*(u.cd&B)+u.Ad*(u.ad&B)+u.Od*(u.dd&B)+u.Bd*(u.bd&B)>>>L,u.Tg=u.Md*((u.cd&l)>>>24)+u.Ad*((u.ad&l)>>>24)+u.Od*((u.dd&l)>>>24)+u.Bd*((u.bd&l)>>>24)<<U&l,v=c(v,u.Tg|u.mi|u.Nh|u.$g),f[k]=(v&m)>>>16,f[k+1]=(v&C)>>>8,f[k+2]=v&B,f[k+3]=(v&l)>>>24,u.Id+=d;b+=g;u.Qc+=e}}};n.loadFont=function(a,c){if(a===b)throw"font name required in loadFont.";
if(-1===a.indexOf(".svg"))return c===b&&(c=qb.size),PFont.get(a,c);var e=n.Zk(a);return{name:a,css:"12px sans-serif",Qf:!0,Nd:e.Nd,td:1/e.Nd*e.td,Bc:e.Bc,Gc:e.Gc,width:function(b){for(var c=0,d=b.length,e=0;e<d;e++)try{c+=parseFloat(n.Sh(n.nb[a],b[e]).td)}catch(f){v.debug(f)}return c/n.nb[a].Nd}}};n.createFont=function(a,b){return n.loadFont(a,b)};n.textFont=function(a,c){c!==b&&(a.Qf||(a=PFont.get(a.name,c)),Lc=c);qb=a;kf=qb.name;fd=qb.Bc;Kc=qb.Gc;qc=qb.Be;vb.xb().font=qb.css};n.textSize=function(a){qb=
PFont.get(kf,a);Lc=a;fd=qb.Bc;Kc=qb.Gc;qc=qb.Be;vb.xb().font=qb.css};n.textAscent=function(){return fd};n.textDescent=function(){return Kc};n.textLeading=function(a){qc=a};n.textAlign=function(a,b){ne=a;ed=b||p.og};n.Sh=function(a,b){try{switch(b){case "1":return a.one;case "2":return a.xu;case "3":return a.su;case "4":return a.Tr;case "5":return a.Pr;case "6":return a.eu;case "7":return a.$t;case "8":return a.Fr;case "9":return a.gt;case "0":return a.Iu;case " ":return a.ku;case "$":return a.Er;
case "!":return a.Kr;case '"':return a.Lt;case "#":return a.ht;case "%":return a.Ct;case "\x26":return a.co;case "'":return a.Mt;case "(":return a.tt;case ")":return a.ut;case "*":return a.mo;case "+":return a.Ht;case ",":return a.Wo;case "-":return a.gs;case ".":return a.Dt;case "/":return a.gu;case "_":return a.yu;case ":":return a.Ro;case ";":return a.Zt;case "\x3c":return a.ss;case "\x3d":return a.Ir;case "\x3e":return a.bs;case "?":return a.Kt;case "@":return a.no;case "[":return a.yo;case "\\":return a.po;
case "]":return a.zo;case "^":return a.ko;case "`":return a.$r;case "{":return a.wo;case "|":return a.qo;case "}":return a.xo;case "~":return a.lo;default:return a[b]}}catch(c){v.debug(c)}};W.prototype.Ld=function(a,b,c,d,e){d=d=0;if(qb.Qf){d=n.nb[kf];t.save();t.translate(b,c+Lc);e!==p.kc&&e!==p.Sa||d.width(a);b=1/d.Nd*Lc;t.scale(b,b);b=0;for(c=a.length;b<c;b++)try{n.Sh(d,a[b]).draw()}catch(f){v.debug(f)}bd()}else if(a&&"fillText"in t){wd&&(t.fillStyle=n.color.toString(vd),wd=!1);if(e===p.kc||e===
p.Sa)d=qb.Ce(a),d=e===p.kc?-d:-d/2;t.fillText(a,b+d,c)}};qa.prototype.Ld=function(a,c,e,f,g){gd===b&&(gd=s.createElement("canvas"));var k=t;t=gd.getContext("2d");t.font=qb.css;var l=qb.Ce(a);gd.width=l;gd.height=Lc;t=gd.getContext("2d");t.font=qb.css;t.textBaseline="top";W.prototype.Ld(a,0,0,0,p.Xc);a=gd.width/gd.height;t=k;t.bindTexture(t.TEXTURE_2D,Rk);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,gd);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR);t.texParameteri(t.TEXTURE_2D,
t.TEXTURE_MIN_FILTER,t.LINEAR);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE);k=0;g===p.kc?k=-l:g===p.Sa&&(k=-l/2);g=new ia;l=0.5*Lc;g.translate(c+k-l/2,e-l,f);g.scale(-a*l,-l,l);g.translate(-1,-1,-1);g.sa();c=new ia;c.scale(1,-1,1);c.apply(va.A());c.sa();t.useProgram(fa);hb("aVertex2d",fa,"aVertex",3,Ti);hb("aTextureCoord2d",fa,"aTextureCoord",2,Ui);Ya("uSampler2d",fa,"uSampler",[0]);Ya("uIsDrawingText2d",fa,"uIsDrawingText",
!0);La("uModel2d",fa,"uModel",g.A());La("uView2d",fa,"uView",c.A());Xa("uColor2d",fa,"uColor",Gb);t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,Vi);t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)};n.text=function(){kh!==p.Cj&&(3===arguments.length?Vf(le(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?Vf(le(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?bh(le(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&bh(le(arguments[0]),
arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))};n.textMode=function(a){kh=a};n.Zk=function(a){function c(f){n.nb[a].td=f.getElementsByTagName("font")[0].getAttribute("horiz-adv-x");var g=f.getElementsByTagName("font-face")[0];n.nb[a].Nd=parseFloat(g.getAttribute("units-per-em"));n.nb[a].Bc=parseFloat(g.getAttribute("ascent"));n.nb[a].Gc=parseFloat(g.getAttribute("descent"));f=f.getElementsByTagName("glyph");for(var g=f.length,k=0;k<g;k++){var l=f[k].getAttribute("unicode"),m=f[k].getAttribute("glyph-name");
F=f[k].getAttribute("horiz-adv-x");null===F&&(F=n.nb[a].td);w=f[k].getAttribute("d");w!==b&&(B=e(w),n.nb[a][m]={name:m,zu:l,td:F,draw:B.draw})}}function e(a){var b=f("[A-Za-z][0-9\\- ]+|Z",a);B="return {draw:function(){var curContext\x3dbeforePathDraw();curContext.beginPath();";A=a=u=p=m=l=k=g=0;E="";C=b.length-1;for(var c=0;c<C;c++){var d=b[c][0];a=f("[0-9\\-]+",d);switch(d[0]){case "M":g=parseFloat(a[0][0]);k=parseFloat(a[1][0]);B+="curContext.moveTo("+g+","+-k+");";break;case "L":g=parseFloat(a[0][0]);
k=parseFloat(a[1][0]);B+="curContext.lineTo("+g+","+-k+");";break;case "H":g=parseFloat(a[0][0]);B+="curContext.lineTo("+g+","+-k+");";break;case "V":k=parseFloat(a[0][0]);B+="curContext.lineTo("+g+","+-k+");";break;case "T":p=parseFloat(a[0][0]);u=parseFloat(a[1][0]);"Q"===E||"T"===E?(a=Math.sqrt(Math.pow(g-l,2)+Math.pow(m-k,2)),A=Math.PI+Math.atan2(l-g,m-k),l=g+Math.sin(A)*a,m=k+Math.cos(A)*a):(l=g,m=k);B+="curContext.quadraticCurveTo("+l+","+-m+","+p+","+-u+");";g=p;k=u;break;case "Q":l=parseFloat(a[0][0]);
m=parseFloat(a[1][0]);p=parseFloat(a[2][0]);u=parseFloat(a[3][0]);B+="curContext.quadraticCurveTo("+l+","+-m+","+p+","+-u+");";g=p;k=u;break;case "Z":B+="curContext.closePath();"}E=d[0]}B+="afterPathDraw();";B+="curContext.translate("+F+",0);";B+="}}";return(new Function("beforePathDraw","afterPathDraw",B))(function(){t.save();return vb.xb()},function(){wc();Zb();bd()})}function f(a,b){var c=0,d=[],e,g=RegExp(a,"g");for(e=d[c]=g.exec(b);e;)c++,e=d[c]=g.exec(b);return d}var g,k,l,m,p,u,w,A,E,C,F,B;
n.nb[a]={};(function(){var b;try{b=s.implementation.createDocument("","",null)}catch(d){v.debug(d.message);return}try{b.async=!1,b.load(a),c(b.getElementsByTagName("svg")[0])}catch(e){v.debug(e);try{var f=new r.XMLHttpRequest;f.open("GET",a,!1);f.send(null);c(f.responseXML.documentElement)}catch(g){v.debug(e)}}})(a);return n.nb[a]};n.param=function(a){var b="data-processing-"+a;if(Da.hasAttribute(b))return Da.getAttribute(b);for(var b=0,c=Da.childNodes.length;b<c;++b){var d=Da.childNodes.item(b);
if(1===d.nodeType&&"param"===d.tagName.toLowerCase()&&d.getAttribute("name")===a)return d.getAttribute("value")}return jb.r.hasOwnProperty(a)?jb.r[a]:null};ea.prototype.translate=ta("translate");ea.prototype.transform=ta("transform");ea.prototype.scale=ta("scale");ea.prototype.pushMatrix=ta("pushMatrix");ea.prototype.popMatrix=ta("popMatrix");ea.prototype.resetMatrix=ta("resetMatrix");ea.prototype.rotate=ta("rotate");ea.prototype.rotateZ=ta("rotateZ");ea.prototype.shearX=ta("shearX");ea.prototype.shearY=
ta("shearY");ea.prototype.redraw=ta("redraw");ea.prototype.Tc=ta("toImageData");ea.prototype.ambientLight=ta("ambientLight");ea.prototype.directionalLight=ta("directionalLight");ea.prototype.lightFalloff=ta("lightFalloff");ea.prototype.lightSpecular=ta("lightSpecular");ea.prototype.noLights=ta("noLights");ea.prototype.frustum=ta("frustum");ea.prototype.box=ta("box");ea.prototype.sphere=ta("sphere");ea.prototype.ambient=ta("ambient");ea.prototype.emissive=ta("emissive");ea.prototype.shininess=ta("shininess");
ea.prototype.specular=ta("specular");ea.prototype.fill=ta("fill");ea.prototype.stroke=ta("stroke");ea.prototype.strokeWeight=ta("strokeWeight");ea.prototype.noSmooth=ta("noSmooth");ea.prototype.point=ta("point");ea.prototype.vertex=ta("vertex");ea.prototype.endShape=ta("endShape");ea.prototype.bezierVertex=ta("bezierVertex");ea.prototype.curveVertex=ta("curveVertex");ea.prototype.line=ta("line");ea.prototype.rect=ta("rect");ea.prototype.ellipse=ta("ellipse");ea.prototype.background=ta("background");
ea.prototype.image=ta("image");ea.prototype.Ld=ta("text$line");ea.prototype.xb=ta("$ensureContext");ea.prototype.Qd=ta("$newPMatrix");ea.prototype.size=function(a,b,c){pc(c===p.Rg?"3D":"2D");n.size(a,b,c)};ea.prototype.Xe=u;W.prototype.Xe=function(){n.size(n.width,n.height);t.lineCap="round";n.noSmooth();n.Gh()};qa.prototype.Xe=function(){n.Hl=!0;n.Gh()};Na.prototype.xb=function(){return t};Da.getAttribute("tabindex")||Da.setAttribute("tabindex",0);if(ff)jb=new v.Sketch,pc(),n.size=function(a,b,c){c&&
c===p.Rg?pc("3D"):pc("2D");n.size(a,b,c)};else{jb=c instanceof v.Sketch?c:"function"===typeof c?new v.Sketch(c):c?v.compile(c):new v.Sketch(function(){});n.Yb.Dl=jb;pc();Da.onfocus=function(){n.focused=!0};Da.onblur=function(){n.focused=!1;jb.options.Pf||(n.__keyPressed=!1,Ed=[],oe=null)};jb.options.ji&&(zd(r,"focus",function(){ge&&n.loop()}),zd(r,"blur",function(){ge&&Xg&&(n.noLoop(),ge=!0);n.__keyPressed=!1;Ed=[];oe=null}));var Zi=jb.options.Pf?r:Da;zd(Zi,"keydown",Qf);zd(Zi,"keypress",bf);zd(Zi,
"keyup",Sf);for(var dg in v.Qa)v.Qa.hasOwnProperty(dg)&&(v.Qa[dg].hasOwnProperty("attach")?v.Qa[dg].Zg(n):v.Qa[dg]instanceof Function&&v.Qa[dg].call(this));var cl=function(a){if(jb.Mc.Gd||PFont.ki.Gd(100))r.setTimeout(function(){cl(a)},100);else{if(r.opera){var b,c,d=jb.Mc.ag;for(b in d)d.hasOwnProperty(b)&&(c=d[b],null!==c&&s.body.removeChild(c),delete d[b])}jb.Zg(a);jb.kl(a);a.setup&&(a.setup(),a.resetMatrix(),jb.nl());Cd();a.draw&&(ge?a.loop():a.redraw())}};this.Yb.canvas.id!==b&&this.Yb.canvas.id.length||
(this.Yb.canvas.id="__processing"+L.length);lb[this.Yb.canvas.id]=L.length;L.push(this);cl(n)}};v.debug=function(){return"console"in r?function(a){r.console.log("Processing.js: "+a)}:u}();v.prototype=f;v.Vk=L;v.getInstanceById=function(a){return L[lb[a]]};(function(a){function b(a){return function(){throw"Processing.js does not support "+a+".";}}for(var c="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),
d=c.length,e,f;d--;)e=c[d],f=e.replace("()",""),a[f]=b(e)})(f);return v}},{}],27:[function(a,b){var c={Uc:a("./Helpers/virtEquals"),Pd:a("./Helpers/virtHashCode"),af:a("./Helpers/ObjectIterator"),PConstants:a("./Helpers/PConstants"),ng:a("./Objects/ArrayList"),zg:a("./Objects/HashMap"),ff:a("./Objects/PVector"),cf:a("./Objects/PFont"),Td:a("./Objects/Char"),jf:a("./Objects/XMLAttribute"),$c:a("./Objects/XMLElement"),Xd:a("./Objects/PMatrix2D"),Yd:a("./Objects/PMatrix3D"),df:a("./Objects/PShape"),
zf:a("./Objects/webcolors"),ef:a("./Objects/PShapeSVG"),Ud:a("./P5Functions/commonFunctions"),od:a("./Helpers/defaultScope"),gf:a("./Processing"),Cl:a("./Parser/Parser"),Sk:a("./Helpers/finalizeProcessing")};c.extend={Jl:a("./P5Functions/Math.js"),Kl:a("./P5Functions/JavaProxyFunctions")(c.Pd,c.Uc),Ll:a("./P5Functions/touchmouse"),kg:c.Ud.kg};b.S=function(b,e){function f(){}var g=c.Uc,k=c.Pd,l=c.PConstants,m=c.Ud,r=c.af,s=c.Td,u=c.jf(),p=c.ng({Pd:k,Uc:g}),g=c.zg({Pd:k,Uc:g}),k=c.ff({PConstants:l}),
A=c.cf({ic:b,noop:f}),u=c.$c({ic:b,jf:u}),E=c.Xd({bg:m}),F=c.Yd({bg:m}),E=c.df({PConstants:l,Xd:E,Yd:F}),m=c.ef({Ud:m,PConstants:l,df:E,$c:u,zf:c.zf}),l=c.od({ng:p,zg:g,ff:k,cf:A,ef:m,af:r,PConstants:l,Td:s,$c:u,Ij:u}),r=c.gf({od:l,ic:b,extend:c.extend,noop:f}),r=c.Cl(r,{ic:b,Kj:e,od:l});return r=c.Sk(r,{version:a("../package.json").version,Zh:b.Zh,window:b.window,document:b.document,noop:f})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,"./Helpers/defaultScope":5,"./Helpers/finalizeProcessing":6,
"./Helpers/virtEquals":7,"./Helpers/virtHashCode":8,"./Objects/ArrayList":9,"./Objects/Char":10,"./Objects/HashMap":11,"./Objects/PFont":12,"./Objects/PMatrix2D":13,"./Objects/PMatrix3D":14,"./Objects/PShape":15,"./Objects/PShapeSVG":16,"./Objects/PVector":17,"./Objects/XMLAttribute":18,"./Objects/XMLElement":19,"./Objects/webcolors":20,"./P5Functions/JavaProxyFunctions":21,"./P5Functions/Math.js":22,"./P5Functions/commonFunctions":23,"./P5Functions/touchmouse":24,"./Parser/Parser":25,"./Processing":26}]},
{},[1]);var rl,sl,tl,ul;function vl(){return aa.navigator?aa.navigator.userAgent:null}function wl(){return aa.navigator}ul=tl=sl=rl=!1;var xl;if(xl=vl()){var yl=wl();rl=0==xl.lastIndexOf("Opera",0);sl=!rl&&(-1!=xl.indexOf("MSIE")||-1!=xl.indexOf("Trident"));(tl=!rl&&-1!=xl.indexOf("WebKit"))&&xl.indexOf("Mobile");ul=!rl&&!tl&&!sl&&"Gecko"==yl.product}var zl=rl,Al=sl,Bl=ul,Cl=tl,Dl,El=wl();Dl=El&&El.platform||"";Dl.indexOf("Mac");Dl.indexOf("Win");Dl.indexOf("Linux");wl()&&(wl().appVersion||"").indexOf("X11");
var Fl=vl();Fl&&Fl.indexOf("Android");Fl&&Fl.indexOf("iPhone");Fl&&Fl.indexOf("iPad");function Gl(){var a=aa.document;return a?a.documentMode:void 0}var Hl;a:{var Il="",Jl;if(zl&&aa.opera)var Kl=aa.opera.version,Il="function"==typeof Kl?Kl():Kl;else if(Bl?Jl=/rv\:([^\);]+)(\)|;)/:Al?Jl=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Cl&&(Jl=/WebKit\/(\S+)/),Jl)var Ll=Jl.exec(vl()),Il=Ll?Ll[1]:"";if(Al){var Ml=Gl();if(Ml>parseFloat(Il)){Hl=String(Ml);break a}}Hl=Il}var Nl={};
function Ol(a){var b;if(!(b=Nl[a])){b=0;for(var c=String(Hl).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var r=l.exec(g)||["","",""],s=m.exec(k)||["","",""];if(0==r[0].length&&0==s[0].length)break;b=((0==r[1].length?0:parseInt(r[1],10))<(0==s[1].length?0:parseInt(s[1],10))?-1:(0==r[1].length?0:parseInt(r[1],
10))>(0==s[1].length?0:parseInt(s[1],10))?1:0)||((0==r[2].length)<(0==s[2].length)?-1:(0==r[2].length)>(0==s[2].length)?1:0)||(r[2]<s[2]?-1:r[2]>s[2]?1:0)}while(0==b)}b=Nl[a]=0<=b}return b}var Pl=aa.document,Ql=Pl&&Al?Gl()||("CSS1Compat"==Pl.compatMode?parseInt(Hl,10):5):void 0;!Bl&&!Al||Al&&Al&&9<=Ql||Bl&&Ol("1.9.1");Al&&Ol("9");var Rl=new xa(null,3,[q.lq,new M(null,2,5,vg,["2.0","Try :features [:present] for similar effect"],null),q.k,new M(null,2,5,vg,["2.0","Use :features [:keep-on-top] instead."],null),q.mq,new M(null,2,5,vg,["2.0","Use :features [:no-safe-fns] instead."],null)],null);function Sl(a){a=hi(a);x(a.a?a.a(q.Ah):a.call(null,q.Ah))&&$i.f(J(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."],0));return Md.c(a,q.Ah)}
function Tl(a){var b=eg.b(a,new M(null,1,5,vg,[q.pk],null),Sl);return Of(Qg,Kf(ya,function(){return function(a){return function e(b){return new Ne(null,function(){return function(){for(;;){var a=z(b);if(a){if(Sd(a)){var c=Bc(a),l=pd(c),m=Re(l);return function(){for(var a=0;;)if(a<l){var b=Va.c(c,a),e=K.b(b,0,null),f=K.b(b,1,null),b=m;var g=Rl.a?Rl.a(e):Rl.call(null,e);x(g)?(f=K.b(g,0,null),g=K.b(g,1,null),$i.f(J([e,"option was removed in Quil",f,".",g],0)),e=null):e=new M(null,2,5,vg,[e,f],null);
b.add(e);a+=1}else return!0}()?Ue(m.oa(),e(Cc(a))):Ue(m.oa(),null)}var r=D(a),s=K.b(r,0,null),u=K.b(r,1,null);return kd(function(){var a=Rl.a?Rl.a(s):Rl.call(null,s);if(x(a)){var b=K.b(a,0,null),a=K.b(a,1,null);$i.f(J([s,"option was removed in Quil",b,".",a],0));return null}return new M(null,2,5,vg,[s,u],null)}(),e(G(a)))}return null}}}(a),null,null)}}(b)(b)}()))};var Ul=!Al||Al&&9<=Ql,Vl=Al&&!Ol("9");!Cl||Ol("528");Bl&&Ol("1.9b")||Al&&Ol("8")||zl&&Ol("9.5")||Cl&&Ol("528");Bl&&!Ol("8")||Al&&Ol("9");function Wl(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.dg=!1}Wl.prototype.stopPropagation=function(){this.dg=!0};Wl.prototype.preventDefault=function(){this.defaultPrevented=!0};function Xl(a){Xl[" "](a);return a}Xl[" "]=function(){};function Yl(a,b){Yl.lb(this,"constructor",a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pd=this.state=null;a&&ql(this,a,b)}
(function(){var a=Yl;function b(){}b.prototype=Wl.prototype;a.xi=Wl.prototype;a.prototype=new b;a.prototype.constructor=a;a.lb=function(a,b,e){var f=Array.prototype.slice.call(arguments,2);return Wl.prototype[b].apply(a,f)}})();
function ql(a,b,c){var d=a.type=b.type;a.target=b.target||b.srcElement;a.currentTarget=c;if(c=b.relatedTarget){if(Bl){var e;a:{try{Xl(c.nodeName);e=!0;break a}catch(f){}e=!1}e||(c=null)}}else"mouseover"==d?c=b.fromElement:"mouseout"==d&&(c=b.toElement);a.relatedTarget=c;a.offsetX=Cl||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=Cl||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||0;a.screenY=
b.screenY||0;a.button=b.button;a.keyCode=b.keyCode||0;a.charCode=b.charCode||("keypress"==d?b.keyCode:0);a.ctrlKey=b.ctrlKey;a.altKey=b.altKey;a.shiftKey=b.shiftKey;a.metaKey=b.metaKey;a.state=b.state;a.pd=b;b.defaultPrevented&&a.preventDefault()}Yl.prototype.stopPropagation=function(){Yl.xi.stopPropagation.call(this);this.pd.stopPropagation?this.pd.stopPropagation():this.pd.cancelBubble=!0};
Yl.prototype.preventDefault=function(){Yl.xi.preventDefault.call(this);var a=this.pd;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Vl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Zl="closure_listenable_"+(1E6*Math.random()|0);function $l(a){try{return!(!a||!a[Zl])}catch(b){return!1}}var am=0;function bm(a,b,c,d,e){this.Oc=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Rf=e;this.key=++am;this.yc=this.pf=!1}function cm(a){a.yc=!0;a.Oc=null;a.proxy=null;a.src=null;a.Rf=null};function dm(a){this.src=a;this.Db={};this.Te=0}dm.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.Db[f];a||(a=this.Db[f]=[],this.Te++);var g=em(a,b,d,e);-1<g?(b=a[g],c||(b.pf=!1)):(b=new bm(b,this.src,f,!!d,e),b.pf=c,a.push(b));return b};dm.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Db))return!1;var e=this.Db[a];b=em(e,b,c,d);return-1<b?(cm(e[b]),ma.splice.call(e,b,1),0==e.length&&(delete this.Db[a],this.Te--),!0):!1};
function em(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.yc&&f.Oc==b&&f.capture==!!c&&f.Rf==d)return e}return-1};var fm="closure_lm_"+(1E6*Math.random()|0),gm={},hm=0;function im(){var a=jm,b=Ul?function(c){return a.call(b.src,b.Oc,c)}:function(c){c=a.call(b.src,b.Oc,c);if(!c)return c};return b}
function km(a,b,c,d,e){if("array"==ba(b))for(var f=0;f<b.length;f++)km(a,b[f],c,d,e);else if(c=lm(c),$l(a))a.Js(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=mm(a);g||(a[fm]=g=new dm(a));c=g.add(b,c,!0,d,e);c.proxy||(d=im(),c.proxy=d,d.src=a,d.Oc=c,a.addEventListener?a.addEventListener(b,d,f):a.attachEvent(b in gm?gm[b]:gm[b]="on"+b,d),hm++)}}
function nm(a,b,c,d){var e=1;if(a=mm(a))if(b=a.Db[b]){a=b.length;if(0<a){for(var f=Array(a),g=0;g<a;g++)f[g]=b[g];b=f}else b=[];for(a=0;a<b.length;a++)(f=b[a])&&f.capture==c&&!f.yc&&(e&=!1!==om(f,d))}return Boolean(e)}
function om(a,b){var c=a.Oc,d=a.Rf||a.src;if(a.pf&&"number"!=typeof a&&a&&!a.yc){var e=a.src;if($l(e))e.Au(a);else{var f=a.type,g=a.proxy;e.removeEventListener?e.removeEventListener(f,g,a.capture):e.detachEvent&&e.detachEvent(f in gm?gm[f]:gm[f]="on"+f,g);hm--;if(f=mm(e)){var g=a.type,k;if(k=g in f.Db){k=f.Db[g];var l=na(k,a),m;(m=0<=l)&&ma.splice.call(k,l,1);k=m}k&&(cm(a),0==f.Db[g].length&&(delete f.Db[g],f.Te--));0==f.Te&&(f.src=null,e[fm]=null)}else cm(a)}}return c.call(d,b)}
function jm(a,b){if(a.yc)return!0;if(!Ul){var c;if(!(c=b))a:{c=["window","event"];for(var d=aa,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Yl(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.dg&&0<=k;k--)c.currentTarget=e[k],d&=nm(e[k],f,!0,c);for(k=0;!c.dg&&k<e.length;k++)c.currentTarget=
e[k],d&=nm(e[k],f,!1,c)}return d}return om(a,new Yl(b,this))}function mm(a){a=a[fm];return a instanceof dm?a:null}var pm="__closure_events_fn_"+(1E9*Math.random()>>>0);function lm(a){return"function"==ba(a)?a:a[pm]||(a[pm]=function(b){return a.handleEvent(b)})};function qm(a,b){if(x(rd.c(b,a)))return rd.c(b,a);var c=gi([a]),d=z(b);if(x(sf(c,d?new bi(d,null):null)))return a;if(q.C)throw Error("Expecting a keyword, got: "+y.a(a)+". Expected one of: "+y.a(Ag(be.a(ai(b)))));return null};var rm=null,sm=new xa(null,4,[q.oq,Processing.prototype.PConstants.JAVA2D,q.qk,Processing.prototype.PConstants.P2D,q.pq,Processing.prototype.PConstants.P3D,q.qq,Processing.prototype.PConstants.OPENGL],null),tm=function(){function a(a,b,c){return rm.size(a|0,b|0,qm(c,sm))}function b(a,b){return rm.size(a|0,b|0)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}();
function um(a,b){for(var c=z(sd([q.rq,q.tq,q.uq,q.vq,q.rc,q.wq,q.xq,q.yq,q.zq,q.Aq,q.Bq,q.Cq,q.Fc],[q.sk,q.tk,q.Ef,q.uk,q.rc,q.vk,q.wk,q.xk,q.yk,q.zk,q.Ak,q.Bk,q.Fc])),d=null,e=0,f=0;;)if(f<e){var g=d.J(null,f),k=K.b(g,0,null),l=K.b(g,1,null),m=b.a?b.a(l):b.call(null,l);if(x(m)){var r=m;a[Le(k)]=function(b,c,d,e,f){return function(){var b=rm;try{return rm=a,f.j?f.j():f.call(null)}finally{rm=b}}}(c,d,e,f,r,m,g,k,l)}f+=1}else if(m=z(c)){g=m;if(Sd(g))c=Bc(g),f=Cc(g),d=c,e=pd(c),c=f;else{var r=D(g),k=
K.b(r,0,null),l=K.b(r,1,null),s=b.a?b.a(l):b.call(null,l);if(x(s)){var u=s;a[Le(k)]=function(b,c,d,e,f){return function(){var b=rm;try{return rm=a,f.j?f.j():f.call(null)}finally{rm=b}}}(c,d,e,f,u,s,r,k,l,g,m)}c=I(g);d=null;e=0}f=0}else break}
function vm(a){var b=ci.f(J([new xa(null,1,[q.oe,new M(null,2,5,vg,[500,300],null)],null),function(b){return b.a?b.a(a):b.call(null,a)}.call(null,Jd.c(vf,kd(Tl,q.Ck.c(a,ug))))],0)),c=function(){var a=q.oe.a(b);return x(a)?a:new M(null,2,5,vg,[200,200],null)}(),d=q.Dk.a(b),e=hi(q.pk.a(b)),f=eg.b(eg.b(b,new M(null,1,5,vg,[q.rc],null),function(a,b,c,d){return function(e){return function(a,b,c){return function(){Jd.c(tm,Ye.c(b,x(c)?new M(null,1,5,vg,[c],null):ug));return x(e)?e.j?e.j():e.call(null):null}}(a,
b,c,d)}}(b,c,d,e)),new M(null,1,5,vg,[q.Ef],null),function(a,b,c,d){return function(e){return x(e)?function(){return function(){return e.a?e.a(-1*rm.mouseScroll):e.call(null,-1*rm.mouseScroll)}}(a,b,c,d):null}}(b,c,d,e)),c=new Processing.Sketch(function(a,b,c,d,e){return function(a){um(a,e);a.Pc=dj.a(null);return a.Fl=dj.a(60)}}(b,c,d,e,f));Yd(e,q.Dq)&&(c.options.globalKeyEvents=!0);return c}
var wm=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=Jd.c(Yh,a);var b;b=q.Ff.a(a);var e=document;b=ca(b)?e.getElementById(b):b;e=q.Dk.a(a);e=x(e)?e:q.qk;return x(b)?(x(b.li)?Hc.c(e,b.li)||console.warn("WARNING: Using different context on one canvas!"):b.li=e,new Processing(b,vm(a))):console.warn("WARNING: Cannot create sketch. :host is not specified.")}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),
xm=dj.a(Uc);function ym(a){var b=document.createElement("canvas");b.setAttribute("id",a);document.body.appendChild(b)}km(window,"load",function(){for(var a=1>=document.body.childNodes.length,b=z(yb(xm)),c=null,d=0,e=0;;)if(e<d){var f=c.J(null,e);a&&ym(q.pe.a(f));q.qe.a(f).call(null);e+=1}else if(b=z(b))c=b,Sd(c)?(b=Bc(c),d=Cc(c),c=b,f=pd(b),b=d,d=f):(f=D(c),a&&ym(q.pe.a(f)),q.qe.a(f).call(null),b=I(c),c=null,d=0),e=0;else return null});function zm(){return x(null)?null:rm}
sd([q.Eq,q.Fq,q.Gq,q.Iq,q.Jq,q.Kq,q.Lq,q.Mq,q.Nq,q.Oq,q.Pq,q.Qq,q.Rq,q.Xo,q.Yo],[Processing.prototype.PConstants.BURN,Processing.prototype.PConstants.SCREEN,Processing.prototype.PConstants.DARKEST,Processing.prototype.PConstants.DODGE,Processing.prototype.PConstants.REPLACE,Processing.prototype.PConstants.OVERLAY,Processing.prototype.PConstants.DIFFERENCE,Processing.prototype.PConstants.EXCLUSION,Processing.prototype.PConstants.HARD_LIGHT,Processing.prototype.PConstants.MULTIPLY,Processing.prototype.PConstants.LIGHTEST,
Processing.prototype.PConstants.BLEND,Processing.prototype.PConstants.ADD,Processing.prototype.PConstants.SOFT_LIGHT,Processing.prototype.PConstants.SUBTRACT]);var Am=new xa(null,2,[q.rh,Processing.prototype.PConstants.RGB,q.ak,Processing.prototype.PConstants.HSB],null);
sd([q.ap,q.bp,q.cp,q.dp,q.ep,q.fp,q.gp,q.hp,q.ip,q.jp,q.kp,q.lp,q.mp,q.np,q.op,q.pp,q.qp,q.rp,q.sp,q.tp],[Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE,Processing.prototype.PConstants.ENABLE_RETINA_PIXELS,Processing.prototype.PConstants.DISABLE_DEPTH_MASK,Processing.prototype.PConstants.ENABLE_DEPTH_TEST,Processing.prototype.PConstants.ENABLE_DEPTH_SORT,Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS,Processing.prototype.PConstants.DISABLE_STROKE_PURE,Processing.prototype.PConstants.DISABLE_DEPTH_TEST,
Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE,Processing.prototype.PConstants.ENABLE_NATIVE_FONTS,Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE,Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS,Processing.prototype.PConstants.ENABLE_STROKE_PURE,Processing.prototype.PConstants.ENABLE_DEPTH_MASK,Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE,Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS,Processing.prototype.PConstants.DISABLE_RETINA_PIXELS,Processing.prototype.PConstants.DISABLE_DEPTH_SORT,
Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS,Processing.prototype.PConstants.DISABLE_NATIVE_FONTS]);
var Bm=sd([121,39,157,119,116,113,40,117,118,122,17,115,112,123,16,120,38,18,114,37],[q.vp,q.dk,q.wp,q.xp,q.yp,q.zp,q.Ap,q.Bp,q.Cp,q.Dp,q.Ep,q.Fp,q.Gp,q.Hp,q.Ip,q.Jp,q.Kp,q.Lp,q.Mp,q.ck]),Cm=function(){function a(a,b,c,d){return zm().background(a,b,c,d)}function b(a,b,c){return zm().background(a,b,c)}function c(a,b){return zm().background(a,b)}function d(a){return zm().background(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);
case 3:return b.call(this,e,g,k);case 4:return a.call(this,e,g,k,l)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}(),Dm=function(){function a(a,b,c,d){return Cm.g(a,b,c,d)}function b(a,b,c){return Cm.b(a,b,c)}function c(a,b){return zm().background(a,b)}function d(a){return zm().background(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 3:return b.call(this,e,g,k);case 4:return a.call(this,
e,g,k,l)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}(),Em=function(){function a(a,b,c,d,e){a=qm(a,Am);return zm().colorMode(a|0,b,c,d,e)}function b(a,b,c,d){a=qm(a,Am);return zm().colorMode(a|0,b,c,d)}function c(a,b){var c=qm(a,Am);return zm().colorMode(c|0,b)}function d(a){a=qm(a,Am);return zm().colorMode(a|0)}var e=null,e=function(e,g,k,l,m){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 4:return b.call(this,e,g,
k,l);case 5:return a.call(this,e,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.g=b;e.d=a;return e}(),Fm=function(){function a(a,b,c,d){return zm().fill(a,b,c,d)}function b(a,b,c){return zm().fill(a,b,c)}function c(a,b){return zm().fill(a,b)}function d(a){return zm().fill(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 3:return b.call(this,e,g,k);case 4:return a.call(this,e,g,k,l)}throw Error("Invalid arity: "+
arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}(),Gm=function(){function a(a,b,c,d){return Fm.g(a,b,c,d)}function b(a,b,c){return Fm.b(a,b,c)}function c(a,b){return Fm.c(a,b)}function d(a){return Fm.a(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 3:return b.call(this,e,g,k);case 4:return a.call(this,e,g,k,l)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}();
function Hm(){ej(rm.Fl,30);rm.frameRate(30)}var Im=function(){function a(a,b,c,d,l,m){return zm().line(a,b,c,d,l,m)}function b(a,b,c,d){return zm().line(a,b,c,d)}function c(a,b){return Jd.c(d,Ye.c(a,b))}var d=null,d=function(d,f,g,k,l,m){switch(arguments.length){case 2:return c.call(this,d,f);case 4:return b.call(this,d,f,g,k);case 6:return a.call(this,d,f,g,k,l,m)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.g=b;d.F=a;return d}();
function Jm(){var a=rm.mouseButton;return x(Hc.c?Hc.c(37,a):Hc.call(null,37,a))?q.ck:x(Hc.c?Hc.c(39,a):Hc.call(null,39,a))?q.dk:x(Hc.c?Hc.c(3,a):Hc.call(null,3,a))?q.Zo:null}
var Km=function(){function a(a,b,c,d){return zm().stroke(a,b,c,d)}function b(a,b,c){return zm().stroke(a,b,c)}function c(a,b){return zm().stroke(a,b)}function d(a){return zm().stroke(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 3:return b.call(this,e,g,k);case 4:return a.call(this,e,g,k,l)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}(),Lm=function(){function a(a,b,c,d){return Km.g(a,
b,c,d)}function b(a,b,c){return Km.b(a,b,c)}function c(a,b){return Km.c(a,b)}function d(a){return Km.a(a)}var e=null,e=function(e,g,k,l){switch(arguments.length){case 1:return d.call(this,e);case 2:return c.call(this,e,g);case 3:return b.call(this,e,g,k);case 4:return a.call(this,e,g,k,l)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.b=b;e.g=a;return e}(),Mm=function(){function a(a,b,c){return zm().translate(a,b,c)}function b(a,b){return zm().translate(a,b)}function c(a){return Jd.c(d,
a)}var d=null,d=function(d,f,g){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,f);case 3:return a.call(this,d,f,g)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.b=a;return d}();var Nm=new M(null,12,5,vg,[new xa(null,3,[q.ab,1,q.bb,"Durham, NC, USA",q.cb," April 4, 5, 2014"],null),new xa(null,3,[q.ab,2,q.bb,"San Francisco, CA, USA ",q.cb," May 2, 3 2014 and September 26, 27 2014"],null),new xa(null,3,[q.ab,3,q.bb,"Brisbane, Australia  ",q.cb," May 9, 10 2014"],null),new xa(null,3,[q.ab,4,q.bb,"Minneapolis, MN, USA ",q.cb," May 16, 17 2014"],null),new xa(null,3,[q.ab,5,q.bb,"Melbourne, Australia ",q.cb," August 15, 16 2014"],null),new xa(null,3,[q.ab,6,q.bb,"Edinburgh, UK ",
q.cb," September 26, 27 2014"],null),new xa(null,3,[q.ab,7,q.bb,"Sydney, Australia ",q.cb," December 19, 20 2014"],null),new xa(null,3,[q.ab,8,q.bb,"Austin, TX, USA ",q.cb," March 13, 14 2015"],null),new xa(null,3,[q.ab,9,q.bb,"London, UK ",q.cb," April 17, 18 2015"],null),new xa(null,3,[q.ab,10,q.bb,"Portland, OR, USA ",q.cb," April 17, 18 2015"],null),new xa(null,3,[q.ab,11,q.bb,"Solingen, Germany ",q.cb," June 12, 13 2015"],null),new xa(null,3,[q.ab,12,q.bb,"Berlin, Germany ",q.cb," July 10, 11 2015"],
null)],null),Om=new M(null,9,5,vg,"Detroit, MI USA;New York, NY, USA;Chicago, IL, USA;Washington, DC, USA;Denver, CO, USA;Tronto, Canada;Porto Alegre, Brazil;Helsinki, Finland;Bristol, UK".split(";"),null),Wm=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nk(a);K.b(a,0,null);a=K.b(a,1,null);var b=Wd(a)?Jd.c(Yh,a):a;a=rd.c(b,q.cb);var e=rd.c(b,q.bb),b=rd.c(b,q.ab);return R.d?R.d(q.e,"fragment",q.q,""+y.a(b),
P.g?P.g(q.e,"maroon6",e,fl.b?fl.b(q.e,"gray6",a):fl.call(null,q.e,"gray6",a)):P.call(null,q.e,"maroon6",e,fl.b?fl.b(q.e,"gray6",a):fl.call(null,q.e,"gray6",a))):R.call(null,q.e,"fragment",q.q,""+y.a(b),P.g?P.g(q.e,"maroon6",e,fl.b?fl.b(q.e,"gray6",a):fl.call(null,q.e,"gray6",a)):P.call(null,q.e,"maroon6",e,fl.b?fl.b(q.e,"gray6",a):fl.call(null,q.e,"gray6",a)))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();
function Xm(){var a=Of(ug,Bf(20,Ef.a(new xa(null,1,[q.e,"workshop"],null))));return Ek.a?Ek.a(zf.b(function(){return function(a,c){return Jd.b(Wm,a,c)}}(a),a,Nm)):Ek.call(null,zf.b(function(){return function(a,c){return Jd.b(Wm,a,c)}}(a),a,Nm))};function Ym(a){var b=a.href;if(x(b)){var c=""+y.a("___tailrecursion_hoplon_reload___\x3d")+y.a((new Date).getTime());a=a.ownerNode;if(0>b.indexOf("?"))b=""+y.a(b)+"?"+y.a(c);else if(0>b.indexOf("___tailrecursion_hoplon_reload___\x3d"))b=""+y.a(b)+"\x26"+y.a(c);else if(q.C){var d=si(""+y.a("___tailrecursion_hoplon_reload___\x3d")+"\\d+");if("string"===typeof d)b=b.replace(RegExp(String(d).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);else if(x(d.hasOwnProperty("source")))b=
b.replace(RegExp(d.source,"g"),c);else{if(q.C)throw"Invalid match arg: "+y.a(d);b=null}}else b=null;return a.href=b}return null}
function Zm(a,b){var c=dj.a(null),d=new xa(null,3,[q.Zp,a,q.eb,"HEAD",q.$p,"text"],null),e=function(){return function(a){return Hc.c("true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),f=function(){return function(a,b){return jQuery.ajax(oj(td.b(a,q.aq,b)))}}(c,d,e);(function(a,c,d,e,f){return function(){function s(a){var b=null;0<arguments.length&&(b=J(Array.prototype.slice.call(arguments,0),0));return u.call(this,b)}function u(p){var u=K.b(p,0,null),E=K.b(p,1,null),F=K.b(p,2,null);x(F)&&ej(a,f(F));
return za(F)||d(F)?setTimeout(function(a,b,c,d,e,f,g,k){return function(){return k(f,s)}}(p,u,E,F,a,c,d,e,f),b):null}s.u=0;s.m=function(a){a=z(a);return u(a)};s.f=u;return s}()})(c,d,e,f,function(){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,f)).call(null);return c}function $m(a,b,c){return ij(Zm(a,x(b)?b:100),null,function(a,b,f,g){return x(x(f)?qf.c(f,g):f)?c.j?c.j():c.call(null):null})}
var an=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=K.b(a,0,null);return $m(""+y.a("c6f4dce0-0384-11e4-9191-0800200c9a66")+".js",b,function(){return function(){return window.location.reload()}}(a,b))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),bn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=
K.b(a,0,null);return function(a,b){return function k(){var c=document.styleSheets,d=oi.c(0,c.length),r=yf(function(){return function(a){return a.href}}(c,d,a,b),function(){return function(a,b,c,d){return function vc(e){return new Ne(null,function(a){return function(){for(;;){var b=z(e);if(b){if(Sd(b)){var c=Bc(b),d=pd(c),f=Re(d);a:{for(var k=0;;)if(k<d){var l=Va.c(c,k);f.add(a[l]);k+=1}else{c=!0;break a}c=void 0}return c?Ue(f.oa(),vc(Cc(b))):Ue(f.oa(),null)}f=D(b);return kd(a[f],vc(G(b)))}return null}}}(a,
b,c,d),null,null)}}(c,d,a,b)(d)}());if(za(z(r)))return setTimeout(k,x(b)?b:100);for(var s=z(oi.c(0,c.length)),u=null,p=0,A=0;;)if(A<p){var E=u.J(null,A),F=c[E];if(x(F)){var B=F,Q=B.href;if(x(Q)){var C=Q;$m(C,b,function(a,b,c,d,e,f,k,l,m,p){return function(){return Ym(p[m])}}(s,u,p,A,C,Q,B,F,E,c,d,r,a,b))}}A+=1}else if(B=z(s)){F=B;if(Sd(F))s=Bc(F),A=Cc(F),u=s,p=pd(s),s=A;else{E=D(F);Q=c[E];if(x(Q)){var C=Q,Y=C.href;if(x(Y)){var L=Y;$m(L,b,function(a,b,c,d,e,f,k,l,m,p,r,s){return function(){return Ym(s[m])}}(s,
u,p,A,L,Y,C,Q,E,F,B,c,d,r,a,b))}}s=I(F);u=null;p=0}A=0}else return null}}(a,b).call(null)}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),cn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=K.b(a,0,null);an.f(J([a],0));return bn.f(J([a],0))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();var dn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nk(a);a=K.b(b,0,null);b=K.b(b,1,null);return el.c?el.c(ci.f(J([a,new xa(null,1,[q.jk,""],null)],0)),dl.b?dl.b(q.eb,"text/template",b):dl.call(null,q.eb,"text/template",b)):el.call(null,ci.f(J([a,new xa(null,1,[q.jk,""],null)],0)),dl.b?dl.b(q.eb,"text/template",b):dl.call(null,q.eb,"text/template",b))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=
b;return a}(),en=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nk(a);K.b(a,0,null);a=K.b(a,1,null);return Hc.c(pd(a),1)&&!Hc.c(D(a).nodeType,1)?ok(Fk.a?Fk.a(D(a)):Fk.call(null,D(a)),new xa(null,1,[q.e,"slide-title chapter"],null)):a}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),fn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,
d)}function b(a){a=nk(a);K.b(a,0,null);a=K.b(a,1,null);return Hc.c(pd(a),1)&&!Hc.c(D(a).nodeType,1)?ok(S.a?S.a(D(a)):S.call(null,D(a)),new xa(null,1,[q.e,"slide-title slide"],null)):a}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),gn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nk(a);a=K.b(b,0,null);var e=Wd(a)?Jd.c(Yh,a):a,f=rd.c(e,q.kk),g=rd.c(e,q.lk),k=rd.c(e,q.I);a=rd.c(e,q.mk);b=
K.b(b,1,null);e=ud.f(e,q.mk,J([q.I,q.lk,q.kk],0));g=x(g)?td.b(e,q.Up,g):e;f=x(f)?td.b(g,q.Vp,f):g;k=x(k)?Ye.c(new M(null,1,5,vg,[fn.f(J([k],0))],null),b):b;return x(a)?dn.f(J([f,k],0)):el.c?el.c(f,k):el.call(null,f,k)}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),hn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nk(a);var b=K.b(a,0,null),b=Wd(b)?Jd.c(Yh,b):b,b=rd.c(b,q.I);a=K.b(a,1,null);
return null==b||za(z(b))?gn.f(J([Qg,a],0)):gn.f(J([Qg,Ye.c(new M(null,1,5,vg,[gn.f(J([en.f(J([b],0))],0))],null),a)],0))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),jn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=nk(a);var b=K.b(a,0,null),e=Wd(b)?Jd.c(Yh,b):b,f=rd.b(e,q.Ec,"serif"),g=K.b(a,1,null);jl(function(a,b,c,d,e,f){return function(){return Reveal.Wf(oj(new xa(null,2,[q.Wp,!0,q.Xp,
new M(null,4,5,vg,[new xa(null,1,[q.B,"reveal.js/plugin/markdown/marked.js"],null),new xa(null,1,[q.B,"reveal.js/plugin/markdown/markdown.js"],null),new xa(null,3,[q.B,"reveal.js/plugin/highlight/highlight.js",q.ok,!0,q.Yp,function(){return function(){return hljs.ks()}}(a,b,c,d,e,f)],null),new xa(null,2,[q.B,"reveal.js/plugin/notes/notes.js",q.ok,!0],null)],null)],null)))}}(a,b,e,e,f,g));return P.ta?P.ta(ci.f(J([ud.c(e,q.Ec),new xa(null,1,[q.e,"reveal"],null)],0)),Gk.g?Gk.g(q.R,"stylesheet",q.h,"reveal.js/css/reveal.css"):
Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/css/reveal.css"),Gk.F?Gk.F(q.R,"stylesheet",q.h,"reveal.js/css/theme/"+y.a(f)+".css",q.pc,"theme"):Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/css/theme/"+y.a(f)+".css",q.pc,"theme"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"reveal.js/plugin/highlight/github.min.css"):Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/plugin/highlight/github.min.css"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"mozilla-theme.css"):Gk.call(null,q.R,"stylesheet",q.h,"mozilla-theme.css"),Gk.g?Gk.g(q.R,
"stylesheet",q.h,"custom.css"):Gk.call(null,q.R,"stylesheet",q.h,"custom.css"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"button.css"):Gk.call(null,q.R,"stylesheet",q.h,"button.css"),P.b?P.b(q.e,"slides",g):P.call(null,q.e,"slides",g)):P.call(null,ci.f(J([ud.c(e,q.Ec),new xa(null,1,[q.e,"reveal"],null)],0)),Gk.g?Gk.g(q.R,"stylesheet",q.h,"reveal.js/css/reveal.css"):Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/css/reveal.css"),Gk.F?Gk.F(q.R,"stylesheet",q.h,"reveal.js/css/theme/"+y.a(f)+".css",q.pc,"theme"):
Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/css/theme/"+y.a(f)+".css",q.pc,"theme"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"reveal.js/plugin/highlight/github.min.css"):Gk.call(null,q.R,"stylesheet",q.h,"reveal.js/plugin/highlight/github.min.css"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"mozilla-theme.css"):Gk.call(null,q.R,"stylesheet",q.h,"mozilla-theme.css"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"custom.css"):Gk.call(null,q.R,"stylesheet",q.h,"custom.css"),Gk.g?Gk.g(q.R,"stylesheet",q.h,"button.css"):Gk.call(null,q.R,
"stylesheet",q.h,"button.css"),P.b?P.b(q.e,"slides",g):P.call(null,q.e,"slides",g))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}(),kn=function(){function a(a){var d=null;0<arguments.length&&(d=J(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b=nk(a);a=K.b(b,0,null);b=K.b(b,1,null);return Hk.a?Hk.a(Dk.c?Dk.c(a,b):Dk.call(null,a,b)):Hk.call(null,Dk.c?Dk.c(a,b):Dk.call(null,a,b))}a.u=0;a.m=function(a){a=z(a);return b(a)};a.f=b;return a}();var ln,mn,nn,on;
ha("tailrecursion.hoplon.app_pages._clojure_west_DOT_html.hoploninit",function(){cn();ln=function(){return hn.f(J([q.I,"",gn.f(J([q.I,Fk.a?Fk.a("The Joys and Pains to Write a Clojure Curriculum for Beginners"):Fk.call(null,"The Joys and Pains to Write a Clojure Curriculum for Beginners"),O.j?O.j():O.call(null),O.j?O.j():O.call(null),P.a?P.a(S.b?S.b(q.e,"purple","Yoko Harada"):S.call(null,q.e,"purple","Yoko Harada")):P.call(null,S.b?S.b(q.e,"purple","Yoko Harada"):S.call(null,q.e,"purple","Yoko Harada")),
P.a?P.a(S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet")):P.call(null,S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet")),P.a?P.a(S.b?S.b(q.e,"ashgray","Clojure/West 2015"):S.call(null,q.e,"ashgray","Clojure/West 2015")):P.call(null,S.b?S.b(q.e,"ashgray","Clojure/West 2015"):S.call(null,q.e,"ashgray","Clojure/West 2015"))],0)),gn.f(J([q.I,"Who is Yoko?",O.j?O.j():O.call(null),gl.d?gl.d(Z.F?Z.F(q.e,"fragment",q.q,"1",S.a?S.a("Developer at Cognitect, Inc."):S.call(null,
"Developer at Cognitect, Inc."),P.a?P.a(S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"))):P.call(null,S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/",
"http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")))):Z.call(null,q.e,"fragment",q.q,"1",S.a?S.a("Developer at Cognitect, Inc."):S.call(null,"Developer at Cognitect, Inc."),P.a?P.a(S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,
"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"))):P.call(null,S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")))),Z.d?Z.d(q.e,"fragment",
q.q,"2",S.a?S.a("The First ClojureBridge TA"):S.call(null,"The First ClojureBridge TA")):Z.call(null,q.e,"fragment",q.q,"2",S.a?S.a("The First ClojureBridge TA"):S.call(null,"The First ClojureBridge TA")),Z.d?Z.d(q.e,"fragment",q.q,"3",S.a?S.a("ClojureBridge Board Member"):S.call(null,"ClojureBridge Board Member")):Z.call(null,q.e,"fragment",q.q,"3",S.a?S.a("ClojureBridge Board Member"):S.call(null,"ClojureBridge Board Member")),Z.d?Z.d(q.e,"fragment",q.q,"4",S.a?S.a("RailsGirls origanizer/RailsBridge TA"):
S.call(null,"RailsGirls origanizer/RailsBridge TA")):Z.call(null,q.e,"fragment",q.q,"4",S.a?S.a("RailsGirls origanizer/RailsBridge TA"):S.call(null,"RailsGirls origanizer/RailsBridge TA")),Z.d?Z.d(q.e,"fragment",q.q,"5",S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet")):Z.call(null,q.e,"fragment",q.q,"5",S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet"))):gl.call(null,Z.F?Z.F(q.e,"fragment",q.q,"1",S.a?S.a("Developer at Cognitect, Inc."):S.call(null,"Developer at Cognitect, Inc."),
P.a?P.a(S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"))):P.call(null,S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):
S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")))):Z.call(null,q.e,"fragment",q.q,"1",S.a?S.a("Developer at Cognitect, Inc."):S.call(null,"Developer at Cognitect, Inc."),P.a?P.a(S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/",
"http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"))):P.call(null,S.a?S.a(N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")):S.call(null,N.d?N.d(q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/"):N.call(null,q.k,"_blank",q.h,"http://cognitect.com/","http://cognitect.com/")))),Z.d?Z.d(q.e,"fragment",q.q,"2",S.a?S.a("The First ClojureBridge TA"):
S.call(null,"The First ClojureBridge TA")):Z.call(null,q.e,"fragment",q.q,"2",S.a?S.a("The First ClojureBridge TA"):S.call(null,"The First ClojureBridge TA")),Z.d?Z.d(q.e,"fragment",q.q,"3",S.a?S.a("ClojureBridge Board Member"):S.call(null,"ClojureBridge Board Member")):Z.call(null,q.e,"fragment",q.q,"3",S.a?S.a("ClojureBridge Board Member"):S.call(null,"ClojureBridge Board Member")),Z.d?Z.d(q.e,"fragment",q.q,"4",S.a?S.a("RailsGirls origanizer/RailsBridge TA"):S.call(null,"RailsGirls origanizer/RailsBridge TA")):
Z.call(null,q.e,"fragment",q.q,"4",S.a?S.a("RailsGirls origanizer/RailsBridge TA"):S.call(null,"RailsGirls origanizer/RailsBridge TA")),Z.d?Z.d(q.e,"fragment",q.q,"5",S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet")):Z.call(null,q.e,"fragment",q.q,"5",S.b?S.b(q.e,"purple","@yokolet"):S.call(null,q.e,"purple","@yokolet")))],0)),gn.f(J([q.I,"Think of ...",P.a?P.a("Your wife if she is not a (Clojure) programmer"):P.call(null,"Your wife if she is not a (Clojure) programmer"),P.a?
P.a("Your girlfriend if she is not a ..."):P.call(null,"Your girlfriend if she is not a ..."),P.a?P.a("Your female co-worker if ..."):P.call(null,"Your female co-worker if ..."),P.a?P.a("Your daughter if ..."):P.call(null,"Your daughter if ..."),P.a?P.a("Your mom if ..."):P.call(null,"Your mom if ..."),O.j?O.j():O.call(null),S.a?S.a("What if she tries Clojure?"):S.call(null,"What if she tries Clojure?")],0)),gn.f(J([q.I,"What is ClojureBridge?",P.a?P.a(V.a?V.a(N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.org/",
"http://clojurebridge.org/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/")):V.call(null,N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/"))):P.call(null,V.a?V.a(N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/")):V.call(null,N.d?
N.d(q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.org/","http://clojurebridge.org/"))),P.a?P.a("Free, beginner-friendly Clojure workshops for women"):P.call(null,"Free, beginner-friendly Clojure workshops for women"),P.a?P.a("To make this Clojure community diverse"):P.call(null,"To make this Clojure community diverse"),X.g?X.g(q.B,"img/clojurebridgedotorg.png",q.v,"border:0px"):X.call(null,q.B,"img/clojurebridgedotorg.png",
q.v,"border:0px")],0)),gn.f(J([q.I,"ClojureBridge Workshops",Xm()],0)),gn.f(J([q.I,"ClojureBridge Workshops Planning Now",Ek.a?Ek.a(zf.c(function(a){return R.a?R.a(P.b?P.b(q.e,"maroon6",a):P.call(null,q.e,"maroon6",a)):R.call(null,P.b?P.b(q.e,"maroon6",a):P.call(null,q.e,"maroon6",a))},Om)):Ek.call(null,zf.c(function(a){return R.a?R.a(P.b?P.b(q.e,"maroon6",a):P.call(null,q.e,"maroon6",a)):R.call(null,P.b?P.b(q.e,"maroon6",a):P.call(null,q.e,"maroon6",a))},Om))],0)),gn.f(J([q.I,"Local Community Event",
gl.c?gl.c(Z.a?Z.a("Local Clojure communities origanize it"):Z.call(null,"Local Clojure communities origanize it"),Z.c?Z.c("ClojureBridge (NPO) supports organizers",gl.b?gl.b(Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page")):gl.call(null,Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),
Z.a?Z.a("event page"):Z.call(null,"event page"))):Z.call(null,"ClojureBridge (NPO) supports organizers",gl.b?gl.b(Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page")):gl.call(null,Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page")))):
gl.call(null,Z.a?Z.a("Local Clojure communities origanize it"):Z.call(null,"Local Clojure communities origanize it"),Z.c?Z.c("ClojureBridge (NPO) supports organizers",gl.b?gl.b(Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page")):gl.call(null,Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),
Z.a?Z.a("event page"):Z.call(null,"event page"))):Z.call(null,"ClojureBridge (NPO) supports organizers",gl.b?gl.b(Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page")):gl.call(null,Z.a?Z.a("mentoring"):Z.call(null,"mentoring"),Z.a?Z.a("financial support (Bridge Foundry)"):Z.call(null,"financial support (Bridge Foundry)"),Z.a?Z.a("event page"):Z.call(null,"event page"))))],
0)),gn.f(J([q.I,"Like RailsBridge",gl.a?gl.a(Z.c?Z.c("Two-day workshop",gl.c?gl.c(Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party")):gl.call(null,Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party"))):Z.call(null,"Two-day workshop",gl.c?gl.c(Z.a?Z.a("Friday - Installation"):
Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party")):gl.call(null,Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party")))):gl.call(null,Z.c?Z.c("Two-day workshop",gl.c?gl.c(Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):
Z.call(null,"Saturday - Basics and App, After Party")):gl.call(null,Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party"))):Z.call(null,"Two-day workshop",gl.c?gl.c(Z.a?Z.a("Friday - Installation"):Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party")):gl.call(null,Z.a?Z.a("Friday - Installation"):
Z.call(null,"Friday - Installation"),Z.a?Z.a("Saturday - Basics and App, After Party"):Z.call(null,"Saturday - Basics and App, After Party"))))],0)),gn.f(J([q.I,"ClojureBridge Got Original Curriculum",V.b?V.b(q.e,"gray","Like RailsBridge (plus bit more)"):V.call(null,q.e,"gray","Like RailsBridge (plus bit more)"),Ek.F?Ek.F(R.d?R.d(q.e,"fragment",q.q,"1",P.a?P.a("A lot of slides for basic stuff"):P.call(null,"A lot of slides for basic stuff")):R.call(null,q.e,"fragment",q.q,"1",P.a?P.a("A lot of slides for basic stuff"):
P.call(null,"A lot of slides for basic stuff")),R.d?R.d(q.e,"fragment",q.q,"2",P.a?P.a("A lot of exercises"):P.call(null,"A lot of exercises")):R.call(null,q.e,"fragment",q.q,"2",P.a?P.a("A lot of exercises"):P.call(null,"A lot of exercises")),R.d?R.d(q.e,"fragment",q.q,"3",P.a?P.a("Capstone app which hits API"):P.call(null,"Capstone app which hits API")):R.call(null,q.e,"fragment",q.q,"3",P.a?P.a("Capstone app which hits API"):P.call(null,"Capstone app which hits API")),R.d?R.d(q.e,"fragment",q.q,
"4",P.a?P.a("Web app version of capstone app"):P.call(null,"Web app version of capstone app")):R.call(null,q.e,"fragment",q.q,"4",P.a?P.a("Web app version of capstone app"):P.call(null,"Web app version of capstone app")),R.d?R.d(q.e,"fragment",q.q,"5",P.a?P.a("Catalog-ish community-docs"):P.call(null,"Catalog-ish community-docs")):R.call(null,q.e,"fragment",q.q,"5",P.a?P.a("Catalog-ish community-docs"):P.call(null,"Catalog-ish community-docs")),R.F?R.F(q.e,"fragment",q.q,"6",O.j?O.j():O.call(null),
V.b?V.b(q.e,"maroon","PERFECT! Durham team was so happy."):V.call(null,q.e,"maroon","PERFECT! Durham team was so happy.")):R.call(null,q.e,"fragment",q.q,"6",O.j?O.j():O.call(null),V.b?V.b(q.e,"maroon","PERFECT! Durham team was so happy."):V.call(null,q.e,"maroon","PERFECT! Durham team was so happy."))):Ek.call(null,R.d?R.d(q.e,"fragment",q.q,"1",P.a?P.a("A lot of slides for basic stuff"):P.call(null,"A lot of slides for basic stuff")):R.call(null,q.e,"fragment",q.q,"1",P.a?P.a("A lot of slides for basic stuff"):
P.call(null,"A lot of slides for basic stuff")),R.d?R.d(q.e,"fragment",q.q,"2",P.a?P.a("A lot of exercises"):P.call(null,"A lot of exercises")):R.call(null,q.e,"fragment",q.q,"2",P.a?P.a("A lot of exercises"):P.call(null,"A lot of exercises")),R.d?R.d(q.e,"fragment",q.q,"3",P.a?P.a("Capstone app which hits API"):P.call(null,"Capstone app which hits API")):R.call(null,q.e,"fragment",q.q,"3",P.a?P.a("Capstone app which hits API"):P.call(null,"Capstone app which hits API")),R.d?R.d(q.e,"fragment",q.q,
"4",P.a?P.a("Web app version of capstone app"):P.call(null,"Web app version of capstone app")):R.call(null,q.e,"fragment",q.q,"4",P.a?P.a("Web app version of capstone app"):P.call(null,"Web app version of capstone app")),R.d?R.d(q.e,"fragment",q.q,"5",P.a?P.a("Catalog-ish community-docs"):P.call(null,"Catalog-ish community-docs")):R.call(null,q.e,"fragment",q.q,"5",P.a?P.a("Catalog-ish community-docs"):P.call(null,"Catalog-ish community-docs")),R.F?R.F(q.e,"fragment",q.q,"6",O.j?O.j():O.call(null),
V.b?V.b(q.e,"maroon","PERFECT! Durham team was so happy."):V.call(null,q.e,"maroon","PERFECT! Durham team was so happy.")):R.call(null,q.e,"fragment",q.q,"6",O.j?O.j():O.call(null),V.b?V.b(q.e,"maroon","PERFECT! Durham team was so happy."):V.call(null,q.e,"maroon","PERFECT! Durham team was so happy.")))],0)),gn.f(J([q.I,"At Durham Chapter",P.a?P.a("active, motivated and enjoying coding at first"):P.call(null,"active, motivated and enjoying coding at first"),X.g?X.g(q.B,"img/workshop.png",q.v,"border:0px"):
X.call(null,q.B,"img/workshop.png",q.v,"border:0px")],0)),gn.f(J([q.I,"Again, Think of ...",P.a?P.a("Your wife if she is not a (Clojure) programmer"):P.call(null,"Your wife if she is not a (Clojure) programmer"),P.a?P.a("Your girlfriend if she is not a ..."):P.call(null,"Your girlfriend if she is not a ..."),P.a?P.a("Your female co-worker if ..."):P.call(null,"Your female co-worker if ..."),P.a?P.a("Your daughter if ..."):P.call(null,"Your daughter if ..."),P.a?P.a("Your mom if ..."):P.call(null,
"Your mom if ..."),O.j?O.j():O.call(null),S.a?S.a("What if she tries all of those curriculum in a day?"):S.call(null,"What if she tries all of those curriculum in a day?")],0)),gn.f(J([q.I,"How It Went",Ek.b?Ek.b(R.d?R.d(q.e,"fragment",q.q,"1",X.g?X.g(q.B,"img/smiles.png",q.v,"border:0px"):X.call(null,q.B,"img/smiles.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"1",X.g?X.g(q.B,"img/smiles.png",q.v,"border:0px"):X.call(null,q.B,"img/smiles.png",q.v,"border:0px")),R.d?R.d(q.e,"fragment",q.q,
"2",X.g?X.g(q.B,"img/confused.png",q.v,"border:0px"):X.call(null,q.B,"img/confused.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"2",X.g?X.g(q.B,"img/confused.png",q.v,"border:0px"):X.call(null,q.B,"img/confused.png",q.v,"border:0px")),R.d?R.d(q.e,"fragment",q.q,"3",X.g?X.g(q.B,"img/tired.png",q.v,"border:0px"):X.call(null,q.B,"img/tired.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"3",X.g?X.g(q.B,"img/tired.png",q.v,"border:0px"):X.call(null,q.B,"img/tired.png",q.v,"border:0px"))):
Ek.call(null,R.d?R.d(q.e,"fragment",q.q,"1",X.g?X.g(q.B,"img/smiles.png",q.v,"border:0px"):X.call(null,q.B,"img/smiles.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"1",X.g?X.g(q.B,"img/smiles.png",q.v,"border:0px"):X.call(null,q.B,"img/smiles.png",q.v,"border:0px")),R.d?R.d(q.e,"fragment",q.q,"2",X.g?X.g(q.B,"img/confused.png",q.v,"border:0px"):X.call(null,q.B,"img/confused.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"2",X.g?X.g(q.B,"img/confused.png",q.v,"border:0px"):X.call(null,
q.B,"img/confused.png",q.v,"border:0px")),R.d?R.d(q.e,"fragment",q.q,"3",X.g?X.g(q.B,"img/tired.png",q.v,"border:0px"):X.call(null,q.B,"img/tired.png",q.v,"border:0px")):R.call(null,q.e,"fragment",q.q,"3",X.g?X.g(q.B,"img/tired.png",q.v,"border:0px"):X.call(null,q.B,"img/tired.png",q.v,"border:0px")))],0)),gn.f(J([q.I,"Sometimes Attendees Expressed",Ek.c?Ek.c(R.d?R.d(q.e,"fragment",q.q,"1",S.b?S.b(q.e,"bluekoi",'"Dropped from an airplane"'):S.call(null,q.e,"bluekoi",'"Dropped from an airplane"')):
R.call(null,q.e,"fragment",q.q,"1",S.b?S.b(q.e,"bluekoi",'"Dropped from an airplane"'):S.call(null,q.e,"bluekoi",'"Dropped from an airplane"')),R.d?R.d(q.e,"fragment",q.q,"2",S.b?S.b(q.e,"blue",'"Tears in my eyes"'):S.call(null,q.e,"blue",'"Tears in my eyes"')):R.call(null,q.e,"fragment",q.q,"2",S.b?S.b(q.e,"blue",'"Tears in my eyes"'):S.call(null,q.e,"blue",'"Tears in my eyes"'))):Ek.call(null,R.d?R.d(q.e,"fragment",q.q,"1",S.b?S.b(q.e,"bluekoi",'"Dropped from an airplane"'):S.call(null,q.e,"bluekoi",
'"Dropped from an airplane"')):R.call(null,q.e,"fragment",q.q,"1",S.b?S.b(q.e,"bluekoi",'"Dropped from an airplane"'):S.call(null,q.e,"bluekoi",'"Dropped from an airplane"')),R.d?R.d(q.e,"fragment",q.q,"2",S.b?S.b(q.e,"blue",'"Tears in my eyes"'):S.call(null,q.e,"blue",'"Tears in my eyes"')):R.call(null,q.e,"fragment",q.q,"2",S.b?S.b(q.e,"blue",'"Tears in my eyes"'):S.call(null,q.e,"blue",'"Tears in my eyes"')))],0)),gn.f(J([q.I,"Turned Out Curriculum Didn't Fit",P.a?P.a("Not attendees' fault"):P.call(null,
"Not attendees' fault"),P.a?P.a("Not instructors' fault"):P.call(null,"Not instructors' fault"),P.a?P.a("Not Clojure's fault"):P.call(null,"Not Clojure's fault"),O.j?O.j():O.call(null),V.b?V.b(q.e,"gray","The team was unexperienced..."):V.call(null,q.e,"gray","The team was unexperienced...")],0)),gn.f(J([q.I,"Must Change Curriculum!"],0))],0))};mn=function(){return hn.f(J([q.I,"The Road To Perfect Curriculum",gn.f(J([q.I,"At Cognation, August 2014",V.a?V.a("Two Sessions"):V.call(null,"Two Sessions"),
gl.c?gl.c(Z.a?Z.a("ClojureBridge Hackfest"):Z.call(null,"ClojureBridge Hackfest"),Z.a?Z.a("ClojureBridge Hacking"):Z.call(null,"ClojureBridge Hacking")):gl.call(null,Z.a?Z.a("ClojureBridge Hackfest"):Z.call(null,"ClojureBridge Hackfest"),Z.a?Z.a("ClojureBridge Hacking"):Z.call(null,"ClojureBridge Hacking")),O.j?O.j():O.call(null),O.j?O.j():O.call(null),V.b?V.b(q.e,"maroon",'"Making this Clojure community diverse is our mission!"'):V.call(null,q.e,"maroon",'"Making this Clojure community diverse is our mission!"')],
0)),gn.f(J([q.I,"The Birth of Drawing App",Ek.b?Ek.b(R.d?R.d(q.e,"fragment",q.q,"1",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good")):R.call(null,q.e,"fragment",q.q,"1",P.g?P.g(q.v,"vertical-align:top;",
X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good")),R.d?R.d(q.e,"fragment",q.q,"2",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,
"border:0px"),"Russ Olson - Start from very simple"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple")):R.call(null,q.e,"fragment",q.q,"2",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple"):P.call(null,q.v,
"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple")),R.d?R.d(q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon","Let's do it!"):S.call(null,q.e,"maroon","Let's do it!")):R.call(null,q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon","Let's do it!"):S.call(null,q.e,"maroon","Let's do it!"))):Ek.call(null,R.d?R.d(q.e,"fragment",q.q,"1",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,
"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good")):R.call(null,q.e,"fragment",q.q,"1",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good"):
P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/alexm_and_quil.png",q.v,"border:0px"):X.call(null,q.B,"img/alexm_and_quil.png",q.v,"border:0px"),"Alex Miller - Quil is good")),R.d?R.d(q.e,"fragment",q.q,"2",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):
X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple")):R.call(null,q.e,"fragment",q.q,"2",P.g?P.g(q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple"):P.call(null,q.v,"vertical-align:top;",X.g?X.g(q.B,"img/russ_and_verysimple.png",q.v,"border:0px"):X.call(null,q.B,"img/russ_and_verysimple.png",q.v,"border:0px"),"Russ Olson - Start from very simple")),
R.d?R.d(q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon","Let's do it!"):S.call(null,q.e,"maroon","Let's do it!")):R.call(null,q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon","Let's do it!"):S.call(null,q.e,"maroon","Let's do it!")))],0)),gn.f(J([q.I,"The Very Simple Quil App",P.b?P.b(q.e,"code",kn.f(J([q.e,"clojure",'(ns drawing.lines\n  (:require [quil.core :as q]))\n(defn setup []\n  (q/frame-rate 30)\n  (q/color-mode :rgb)\n  (q/stroke 255 0 0))\n(defn draw []\n  (q/line 0 0 (q/mouse-x) (q/mouse-y))\n  (q/line 200 0 (q/mouse-x) (q/mouse-y))\n  (q/line 0 200 (q/mouse-x) (q/mouse-y))\n  (q/line 200 200 (q/mouse-x) (q/mouse-y)))\n(q/defsketch hello-lines\n  :title "You can see lines"\n  :size [500 500]\n  :setup setup\n  :draw draw)'],
0))):P.call(null,q.e,"code",kn.f(J([q.e,"clojure",'(ns drawing.lines\n  (:require [quil.core :as q]))\n(defn setup []\n  (q/frame-rate 30)\n  (q/color-mode :rgb)\n  (q/stroke 255 0 0))\n(defn draw []\n  (q/line 0 0 (q/mouse-x) (q/mouse-y))\n  (q/line 200 0 (q/mouse-x) (q/mouse-y))\n  (q/line 0 200 (q/mouse-x) (q/mouse-y))\n  (q/line 200 200 (q/mouse-x) (q/mouse-y)))\n(q/defsketch hello-lines\n  :title "You can see lines"\n  :size [500 500]\n  :setup setup\n  :draw draw)'],0)))],0)),gn.f(J([q.I,"The Very Simple Quil App is..",
Ck.c?Ck.c(q.pc,"drawing"):Ck.call(null,q.pc,"drawing")],0)),gn.f(J([q.I,"Got Contribution on Quil App",P.a?P.a('"Add mouse-color function to set color of line based on mouse coordinates. Thanks @alandipert"'):P.call(null,'"Add mouse-color function to set color of line based on mouse coordinates. Thanks @alandipert"'),P.b?P.b(q.e,"code",kn.f(J([q.e,"clojure",'(defn mouse-color [x y]\n  "Calculate a color based on two values"\n  [(mod x 255)  (mod y 255) 0])\n\n(defn draw []\n  (apply q/stroke  (mouse-color (q/mouse-x) (q/mouse-y)))\n  .....\n  )'],
0))):P.call(null,q.e,"code",kn.f(J([q.e,"clojure",'(defn mouse-color [x y]\n  "Calculate a color based on two values"\n  [(mod x 255)  (mod y 255) 0])\n\n(defn draw []\n  (apply q/stroke  (mouse-color (q/mouse-x) (q/mouse-y)))\n  .....\n  )'],0)))],0)),gn.f(J([q.I,"The Very Simple Quil App Turns to..",Ck.c?Ck.c(q.pc,"colorful"):Ck.call(null,q.pc,"colorful")],0)),gn.f(J([q.I,"Report From San Francisco",Ek.b?Ek.b(R.d?R.d(q.e,"fragment",q.q,"1",V.b?V.b(q.e,"maroon",'"Energized by the strikingly different output"'):
V.call(null,q.e,"maroon",'"Energized by the strikingly different output"')):R.call(null,q.e,"fragment",q.q,"1",V.b?V.b(q.e,"maroon",'"Energized by the strikingly different output"'):V.call(null,q.e,"maroon",'"Energized by the strikingly different output"')),R.d?R.d(q.e,"fragment",q.q,"2",V.b?V.b(q.e,"darkorchid",'"Could modify their programs and compare the results"'):V.call(null,q.e,"darkorchid",'"Could modify their programs and compare the results"')):R.call(null,q.e,"fragment",q.q,"2",V.b?V.b(q.e,
"darkorchid",'"Could modify their programs and compare the results"'):V.call(null,q.e,"darkorchid",'"Could modify their programs and compare the results"')),R.d?R.d(q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon",'"This was fun"'):S.call(null,q.e,"maroon",'"This was fun"')):R.call(null,q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon",'"This was fun"'):S.call(null,q.e,"maroon",'"This was fun"'))):Ek.call(null,R.d?R.d(q.e,"fragment",q.q,"1",V.b?V.b(q.e,"maroon",'"Energized by the strikingly different output"'):
V.call(null,q.e,"maroon",'"Energized by the strikingly different output"')):R.call(null,q.e,"fragment",q.q,"1",V.b?V.b(q.e,"maroon",'"Energized by the strikingly different output"'):V.call(null,q.e,"maroon",'"Energized by the strikingly different output"')),R.d?R.d(q.e,"fragment",q.q,"2",V.b?V.b(q.e,"darkorchid",'"Could modify their programs and compare the results"'):V.call(null,q.e,"darkorchid",'"Could modify their programs and compare the results"')):R.call(null,q.e,"fragment",q.q,"2",V.b?V.b(q.e,
"darkorchid",'"Could modify their programs and compare the results"'):V.call(null,q.e,"darkorchid",'"Could modify their programs and compare the results"')),R.d?R.d(q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon",'"This was fun"'):S.call(null,q.e,"maroon",'"This was fun"')):R.call(null,q.e,"fragment",q.q,"3",S.b?S.b(q.e,"maroon",'"This was fun"'):S.call(null,q.e,"maroon",'"This was fun"')))],0)),gn.f(J([q.I,"Yes! Quil App is a Win",P.a?P.a("It is a game changer!"):P.call(null,"It is a game changer!"),
O.j?O.j():O.call(null),P.g?P.g(Bk.d?Bk.d(q.qc,function(){return ej(nl,"tired")},q.e,"btn btn-large","Before"):Bk.call(null,q.qc,function(){return ej(nl,"tired")},q.e,"btn btn-large","Before"),Bk.d?Bk.d(q.qc,function(){return ej(nl,"fun")},q.e,"btn btn-large","After"):Bk.call(null,q.qc,function(){return ej(nl,"fun")},q.e,"btn btn-large","After"),O.j?O.j():O.call(null),P.a?P.a(X.g?X.g(q.B,ol,q.v,"border:0px;"):X.call(null,q.B,ol,q.v,"border:0px;")):P.call(null,X.g?X.g(q.B,ol,q.v,"border:0px;"):X.call(null,
q.B,ol,q.v,"border:0px;"))):P.call(null,Bk.d?Bk.d(q.qc,function(){return ej(nl,"tired")},q.e,"btn btn-large","Before"):Bk.call(null,q.qc,function(){return ej(nl,"tired")},q.e,"btn btn-large","Before"),Bk.d?Bk.d(q.qc,function(){return ej(nl,"fun")},q.e,"btn btn-large","After"):Bk.call(null,q.qc,function(){return ej(nl,"fun")},q.e,"btn btn-large","After"),O.j?O.j():O.call(null),P.a?P.a(X.g?X.g(q.B,ol,q.v,"border:0px;"):X.call(null,q.B,ol,q.v,"border:0px;")):P.call(null,X.g?X.g(q.B,ol,q.v,"border:0px;"):
X.call(null,q.B,ol,q.v,"border:0px;")))],0)),gn.f(J([q.I,"Then, ... Another Problem Came In",gl.b?gl.b(Z.a?Z.a("Big gap between basic stuff and Quil app"):Z.call(null,"Big gap between basic stuff and Quil app"),Z.a?Z.a("No function learned in the morning session"):Z.call(null,"No function learned in the morning session"),Z.a?Z.a("more, more and MOAR"):Z.call(null,"more, more and MOAR")):gl.call(null,Z.a?Z.a("Big gap between basic stuff and Quil app"):Z.call(null,"Big gap between basic stuff and Quil app"),
Z.a?Z.a("No function learned in the morning session"):Z.call(null,"No function learned in the morning session"),Z.a?Z.a("more, more and MOAR"):Z.call(null,"more, more and MOAR"))],0))],0))};nn=function(){return hn.f(J([q.I,"ClojureBrdige Curriculum Team's Efforts",gn.f(J([q.I,"Improving Existing Curriculum",V.b?V.b(q.e,"gray","for example..."):V.call(null,q.e,"gray","for example..."),gl.b?gl.b(Z.d?Z.d(q.e,"fragment",q.q,"1",V.d?V.d(q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",
O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115")):V.call(null,q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):
N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"))):Z.call(null,q.e,"fragment",q.q,"1",V.d?V.d(q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115",
"https://github.com/ClojureBridge/curriculum/issues/115")):V.call(null,q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"))),Z.d?Z.d(q.e,"fragment",q.q,"2",V.d?V.d(q.e,"slateblue",
"Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140")):V.call(null,q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140",
"https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"))):Z.call(null,q.e,"fragment",q.q,"2",V.d?V.d(q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140",
"https://github.com/ClojureBridge/curriculum/issues/140")):V.call(null,q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"))),Z.d?Z.d(q.e,"fragment",q.q,"3",V.d?V.d(q.e,"maroon","more, more and MOAR",
O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues")):V.call(null,q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,
q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"))):Z.call(null,q.e,"fragment",q.q,"3",V.d?V.d(q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues")):V.call(null,
q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues")))):gl.call(null,Z.d?Z.d(q.e,"fragment",q.q,"1",V.d?V.d(q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,
"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115")):V.call(null,q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):
N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"))):Z.call(null,q.e,"fragment",q.q,"1",V.d?V.d(q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115",
"https://github.com/ClojureBridge/curriculum/issues/115")):V.call(null,q.e,"slateblue","Incorporate Quil throughout the entire curriculum #115",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/115","https://github.com/ClojureBridge/curriculum/issues/115"))),Z.d?Z.d(q.e,"fragment",q.q,"2",V.d?V.d(q.e,"slateblue",
"Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140")):V.call(null,q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140",
"https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"))):Z.call(null,q.e,"fragment",q.q,"2",V.d?V.d(q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140",
"https://github.com/ClojureBridge/curriculum/issues/140")):V.call(null,q.e,"slateblue","Remove expectations from curriculum #140",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues/140","https://github.com/ClojureBridge/curriculum/issues/140"))),Z.d?Z.d(q.e,"fragment",q.q,"3",V.d?V.d(q.e,"maroon","more, more and MOAR",
O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues")):V.call(null,q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,
q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"))):Z.call(null,q.e,"fragment",q.q,"3",V.d?V.d(q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues")):V.call(null,
q.e,"maroon","more, more and MOAR",O.j?O.j():O.call(null),N.d?N.d(q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"):N.call(null,q.k,"_blank",q.h,"https://github.com/ClojureBridge/curriculum/issues","https://github.com/ClojureBridge/curriculum/issues"))))],0)),gn.f(J([q.I,"Efforts Done So Far",X.g?X.g(q.B,"img/clojurebridge-commits-with-anno.png",q.v,"border:0px;"):X.call(null,q.B,"img/clojurebridge-commits-with-anno.png",q.v,
"border:0px;"),O.j?O.j():O.call(null),X.g?X.g(q.B,"img/drawing-commits-with-anno.png",q.v,"border:0px;"):X.call(null,q.B,"img/drawing-commits-with-anno.png",q.v,"border:0px;")],0)),gn.f(J([q.I,"Ongoing and Planned Enhancement",gl.c?gl.c(Z.pa?Z.pa(q.e,"fragment",q.q,"1",V.b?V.b(q.e,"gray","Curriculum for advanced attendees"):V.call(null,q.e,"gray","Curriculum for advanced attendees"),P.a?P.a("Big differences:"):P.call(null,"Big differences:"),P.a?P.a("* She is not a programmer."):P.call(null,"* She is not a programmer."),
P.a?P.a("* She is not a Clojure programmer."):P.call(null,"* She is not a Clojure programmer."),O.j?O.j():O.call(null)):Z.call(null,q.e,"fragment",q.q,"1",V.b?V.b(q.e,"gray","Curriculum for advanced attendees"):V.call(null,q.e,"gray","Curriculum for advanced attendees"),P.a?P.a("Big differences:"):P.call(null,"Big differences:"),P.a?P.a("* She is not a programmer."):P.call(null,"* She is not a programmer."),P.a?P.a("* She is not a Clojure programmer."):P.call(null,"* She is not a Clojure programmer."),
O.j?O.j():O.call(null)),Z.F?Z.F(q.e,"fragment",q.q,"2",V.b?V.b(q.e,"gray","After workshop support material"):V.call(null,q.e,"gray","After workshop support material"),P.a?P.a("Just one day workshop is not enough"):P.call(null,"Just one day workshop is not enough")):Z.call(null,q.e,"fragment",q.q,"2",V.b?V.b(q.e,"gray","After workshop support material"):V.call(null,q.e,"gray","After workshop support material"),P.a?P.a("Just one day workshop is not enough"):P.call(null,"Just one day workshop is not enough"))):
gl.call(null,Z.pa?Z.pa(q.e,"fragment",q.q,"1",V.b?V.b(q.e,"gray","Curriculum for advanced attendees"):V.call(null,q.e,"gray","Curriculum for advanced attendees"),P.a?P.a("Big differences:"):P.call(null,"Big differences:"),P.a?P.a("* She is not a programmer."):P.call(null,"* She is not a programmer."),P.a?P.a("* She is not a Clojure programmer."):P.call(null,"* She is not a Clojure programmer."),O.j?O.j():O.call(null)):Z.call(null,q.e,"fragment",q.q,"1",V.b?V.b(q.e,"gray","Curriculum for advanced attendees"):
V.call(null,q.e,"gray","Curriculum for advanced attendees"),P.a?P.a("Big differences:"):P.call(null,"Big differences:"),P.a?P.a("* She is not a programmer."):P.call(null,"* She is not a programmer."),P.a?P.a("* She is not a Clojure programmer."):P.call(null,"* She is not a Clojure programmer."),O.j?O.j():O.call(null)),Z.F?Z.F(q.e,"fragment",q.q,"2",V.b?V.b(q.e,"gray","After workshop support material"):V.call(null,q.e,"gray","After workshop support material"),P.a?P.a("Just one day workshop is not enough"):
P.call(null,"Just one day workshop is not enough")):Z.call(null,q.e,"fragment",q.q,"2",V.b?V.b(q.e,"gray","After workshop support material"):V.call(null,q.e,"gray","After workshop support material"),P.a?P.a("Just one day workshop is not enough"):P.call(null,"Just one day workshop is not enough")))],0))],0))};on=function(){return hn.f(J([q.I,"Conclusion",gn.f(J([q.I,"Make This Clojure Community Diverse!"],0)),gn.f(J([q.I,"Must Improve Curriculum",V.b?V.b(q.e,"gray","So that everyone from different background can enjoy"):
V.call(null,q.e,"gray","So that everyone from different background can enjoy"),V.b?V.b(q.e,"gray","So that attendees can keep studying"):V.call(null,q.e,"gray","So that attendees can keep studying")],0)),gn.f(J([q.I,"Help ClojureBridge",V.b?V.b(q.e,"gray","Go to..."):V.call(null,q.e,"gray","Go to..."),gl.b?gl.b(Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/",
"http://github.com/ClojureBridge/curriculum/")):Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/")),Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/")):
Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/")),Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/")):
Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/"))):gl.call(null,Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/")):
Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/curriculum/","http://github.com/ClojureBridge/curriculum/")),Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/")):Z.call(null,
N.d?N.d(q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/"):N.call(null,q.k,"_blank",q.h,"http://github.com/ClojureBridge/drawing/","http://github.com/ClojureBridge/drawing/")),Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/")):Z.call(null,
N.d?N.d(q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/"):N.call(null,q.k,"_blank",q.h,"http://clojurebridge.github.io/community-docs/","http://clojurebridge.github.io/community-docs/")))],0)),gn.f(J([q.I,"Shout You'll Organize ClojureBridge",V.b?V.b(q.e,"gray","Go to..."):V.call(null,q.e,"gray","Go to..."),gl.c?gl.c(Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved"):
N.call(null,q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved")):Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved"):N.call(null,q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved")),Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops"):
N.call(null,q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops")):Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops"):N.call(null,q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops"))):gl.call(null,
Z.a?Z.a(N.d?N.d(q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved"):N.call(null,q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved")):Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved"):N.call(null,q.k,"_blank",q.h,"http://www.clojurebridge.org/#get-involved","http://www.clojurebridge.org/#get-involved")),Z.a?Z.a(N.d?
N.d(q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops"):N.call(null,q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops")):Z.call(null,N.d?N.d(q.k,"_blank",q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops"):N.call(null,q.k,"_blank",
q.h,"http://groups.google.com/forum/#!forum/clojurebridge-workshops","http://groups.google.com/forum/#!forum/clojurebridge-workshops")))],0)),gn.f(J([q.I,"You are the Next ClojureBridge Organizer!"],0)),gn.f(J([q.I,"Thank You!"],0))],0))};Ak.c?Ak.c(zk.c?zk.c(Qg,new M(null,1,5,vg,[Gk.F?Gk.F(q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css):Gk.call(null,q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css)],null)):zk.call(null,Qg,new M(null,1,5,vg,[Gk.F?Gk.F(q.R,"stylesheet",q.eb,
"text/css",q.h,window._hoplon_main_css):Gk.call(null,q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css)],null)),yk.c?yk.c(Qg,function(){var a=ln(),b=mn(),c=nn(),d=on();return jn.f(J([q.Ec,"serif",a,b,c,d],0))}()):yk.call(null,Qg,function(){var a=ln(),b=mn(),c=nn(),d=on();return jn.f(J([q.Ec,"serif",a,b,c,d],0))}())):Ak.call(null,zk.c?zk.c(Qg,new M(null,1,5,vg,[Gk.F?Gk.F(q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css):Gk.call(null,q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css)],
null)):zk.call(null,Qg,new M(null,1,5,vg,[Gk.F?Gk.F(q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css):Gk.call(null,q.R,"stylesheet",q.eb,"text/css",q.h,window._hoplon_main_css)],null)),yk.c?yk.c(Qg,function(){var a=ln(),b=mn(),c=nn(),d=on();return jn.f(J([q.Ec,"serif",a,b,c,d],0))}()):yk.call(null,Qg,function(){var a=ln(),b=mn(),c=nn(),d=on();return jn.f(J([q.Ec,"serif",a,b,c,d],0))}()));return kl()});function pn(){Hm();Em.a(q.rh);return Lm.b(255,0,0)}function qn(){Jd.c(Lm,new M(null,3,5,vg,[ve(rm.mouseX,255),ve(rm.mouseY,255),0],null));Im.g(0,0,rm.mouseX,rm.mouseY);Im.g(200,0,rm.mouseX,rm.mouseY);Im.g(0,200,rm.mouseX,rm.mouseY);return Im.g(200,200,rm.mouseX,rm.mouseY)}function rn(){return wm.f(J([q.Fc,qn,q.rc,pn,q.I,"You can see colorful lines",q.oe,new M(null,2,5,vg,[500,500],null),q.Ff,"colorful"],0))}ha("hoplon.colorful.colorful",rn);
x(sf(function(a){return Hc.c(q.vh,a)},null))||hj.b(xm,od,new xa(null,2,[q.qe,rn,q.pe,"colorful"],null));Me.a(" ");function sn(a){var b=q.rc.c(a,function(){return null});return td.b(a,q.rc,function(a){return function(){return ej(rm.Pc,a.j?a.j():a.call(null))}}(b))}function tn(a){var b=q.Fc.c(a,function(){return null}),c=q.th.c(a,tf),b=function(a,b){return function(){return a.a?a.a(hj.c(rm.Pc,Hc.c(rm.frameCount,1)?tf:b)):a.call(null,hj.c(rm.Pc,Hc.c(rm.frameCount,1)?tf:b))}}(b,c);return td.b(ud.c(a,q.th),q.Fc,b)}function un(){return new xa(null,2,[q.Af,rm.mouseX,q.Bf,rm.mouseY],null)}
function vn(){return new xa(null,3,[q.Af,rm.mouseX,q.Bf,rm.mouseY,q.ik,Jm()],null)}function wn(){var a=q.Op,b;b=rm.key;var c=rm.keyCode;b=Hc.c(65535,(""+y.a(b)).charCodeAt())?rd.b(Bm,c,q.Np):Me.a(""+y.a(b));return new xa(null,3,[a,b,q.Pp,rm.keyCode,q.Qp,rm.key],null)}
var xn=function(){function a(a,b,c){var g=a.a?a.a(b):a.call(null,b);return x(g)?td.b(a,b,x(c)?function(a){return function(){return hj.b(rm.Pc,a,c.j?c.j():c.call(null))}}(g,g):function(a){return function(){return hj.c(rm.Pc,a)}}(g,g)):a}function b(a,b){return c.b(a,b,null)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.b=a;return c}(),yn=function(){function a(a,d){var e=
null;1<arguments.length&&(e=J(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return ce.b(function(a,b){return b instanceof Ie?xn.c(a,b):Jd.b(xn,a,b)},a,b)}a.u=1;a.m=function(a){var d=D(a);a=G(a);return b(d,a)};a.f=b;return a}();function zn(a){var b=q.Ef.a(a);return x(b)?td.b(a,q.Ef,function(a){return function(b){return hj.b(rm.Pc,a,b)}}(b,b)):a}
function An(a){return zn(yn.f(tn(sn(a)),J([q.Rp,q.Sp,new M(null,2,5,vg,[q.Ak,un],null),new M(null,2,5,vg,[q.tk,un],null),new M(null,2,5,vg,[q.yk,vn],null),new M(null,2,5,vg,[q.xk,un],null),new M(null,2,5,vg,[q.wk,vn],null),new M(null,2,5,vg,[q.zk,function(){return new xa(null,4,[q.Af,rm.mouseX,q.Bf,rm.mouseY,q.gk,rm.pmouseX,q.hk,rm.pmouseY],null)}],null),new M(null,2,5,vg,[q.uk,function(){return new xa(null,5,[q.Af,rm.mouseX,q.Bf,rm.mouseY,q.gk,rm.pmouseX,q.hk,rm.pmouseY,q.ik,Jm()],null)}],null),
new M(null,2,5,vg,[q.sk,wn],null),q.vk,new M(null,2,5,vg,[q.Bk,wn],null),q.Tp],0)))};function Bn(a){return An(a)};function Cn(){Hm();Em.a(q.ak);return new xa(null,2,[q.Cf,0,q.Df,0],null)}function Dn(a){return new xa(null,2,[q.Cf,ve(q.Cf.a(a)+0.7,255),q.Df,q.Df.a(a)+0.1],null)}function En(a){Dm.a(240);Gm.b(q.Cf.a(a),255,255);var b=q.Df.a(a);a=150*rm.cos(b);var b=150*rm.sin(b),c=new M(null,2,5,vg,[rm.width/2,rm.height/2],null);zm().pushMatrix();Mm.a(c);zm().ellipse(a,b,100,100);return zm().popMatrix()}
function Fn(){return wm.f(J([q.Fc,En,q.Ck,new M(null,1,5,vg,[Bn],null),q.rc,Cn,q.I,"You spin my circle right round",q.oe,new M(null,2,5,vg,[500,500],null),q.th,Dn,q.Ff,"circle"],0))}ha("hoplon.circle.circles",Fn);x(sf(function(a){return Hc.c(q.vh,a)},null))||hj.b(xm,od,new xa(null,2,[q.qe,Fn,q.pe,"circle"],null));function Gn(){Hm();Em.a(q.rh);return Lm.b(255,0,0)}function Hn(){Im.g(0,0,rm.mouseX,rm.mouseY);Im.g(200,0,rm.mouseX,rm.mouseY);Im.g(0,200,rm.mouseX,rm.mouseY);return Im.g(200,200,rm.mouseX,rm.mouseY)}function In(){return wm.f(J([q.Fc,Hn,q.rc,Gn,q.I,"You can see lines",q.oe,new M(null,2,5,vg,[500,500],null),q.Ff,"drawing"],0))}ha("hoplon.drawing.drawing",In);x(sf(function(a){return Hc.c(q.vh,a)},null))||hj.b(xm,od,new xa(null,2,[q.qe,In,q.pe,"drawing"],null));