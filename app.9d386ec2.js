parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vZyd":[function(require,module,exports) {
"use strict";var n=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function(a,i){function o(n){try{s(r.next(n))}catch(e){i(e)}}function c(n){try{s(r.throw(n))}catch(e){i(e)}}function s(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(o,c)}s((r=r.apply(n,e||[])).next())})},e=this&&this.__generator||function(n,e){var t,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(n,o)}catch(c){i=[6,c],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},t=document.getElementById("app"),r=100,a=function(){for(var n=1;n<=r;n++)i(n)},i=function(t){return n(void 0,void 0,void 0,function(){var n,r,a;return e(this,function(e){switch(e.label){case 0:return[4,fetch("https://pokeapi.co/api/v2/pokemon/"+t)];case 1:return[4,e.sent().json()];case 2:return n=e.sent(),r=n.types.map(function(n){return n.type.name}).join(", "),a={id:n.id,name:n.name,image:""+n.sprites.front_default,type:r},o(a),[2]}})})},o=function(n){var e='\n        <div class="card">\n            <span class="card--id">#'+n.id+'</span>\n            <img class="card--image" src='+n.image+" alt="+n.name+' />\n            <h1 class="card--name">'+n.name+'</h1>\n            <span class="card--details">'+n.type+"</span>\n        </div>\n    ";t.innerHTML+=e};a();
},{}]},{},["vZyd"], null)
//# sourceMappingURL=app.9d386ec2.js.map