/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
    this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);

/* main.js */

"use strict";


jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    /*---------------------------------------------*
     * Execute photoswipe constructor
     ---------------------------------------------*/
    var initPhotoSwipeFromDOM = function(gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for(var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) {
                    continue;
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if(pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }

            };

            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    // parse real index when custom PIDs are used
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if( isNaN(options.index) ) {
                return;
            }

            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll( gallerySelector );

        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

    /*---------------------------------------------*
     * Menu Background Change
     ---------------------------------------------*/

    var windowWidth = $(window).width();
    if (windowWidth > 757) {



        $(window).scroll(function () {
            if ($(this).scrollTop() > window.innerHeight - 50) {
                $('.navbar').fadeIn(window.innerHeight - 50);
                $('.navbar').addClass('menu-bg');

            } else {

                $('.navbar').removeClass('menu-bg');
            }
        });

    }
    $('#bs-example-navbar-collapse-1').localScroll();


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    //        var wow = new WOW({
    //            mobile: false // trigger animations on mobile devices (default is true)
    //        });
    //        wow.init();


    //End
});

/* plugins.js */

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

/*! Lazy Load 2.0.0-beta.2 - MIT license - Copyright 2007-2017 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e(t)):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=r(s,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}const s={src:"data-src",srcset:"data-srcset",selector:".lazyload"},r=function(){let t={},e=!1,s=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],s++);for(;s<o;s++)!function(s){for(let o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e&&"[object Object]"===Object.prototype.toString.call(s[o])?t[o]=r(!0,t[o],s[o]):t[o]=s[o])}(arguments[s]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,s={root:null,rootMargin:"0px",threshold:[0]};this.observer=new IntersectionObserver(function(t){t.forEach(function(t){if(t.intersectionRatio>0){e.observer.unobserve(t.target);let s=t.target.getAttribute(e.settings.src),r=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(s&&(t.target.src=s),r&&(t.target.srcset=r)):t.target.style.backgroundImage="url("+s+")"}})},s),this.images.forEach(function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;this.images.forEach(function(e){let s=e.getAttribute(t.settings.src),r=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(s&&(e.src=s),r&&(e.srcset=r)):e.style.backgroundImage="url("+s+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,s){return new e(t,s)},t.jQuery){const s=t.jQuery;s.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(s.makeArray(this),t),this}}return e});
