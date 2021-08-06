(function(t){function e(e){for(var r,a,s=e[0],u=e[1],i=e[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9256a2ca"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"cfb3231a"}[t]+".css",c=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],d=i.getAttribute("data-href");if(d===r||d===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/test-shop/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04d3":function(t,e,n){},"10b2":function(t,e,n){"use strict";n("a9e9")},"2cc4":function(t,e,n){"use strict";n("04d3")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header center"},[n("img",{staticClass:"logo",attrs:{src:t.getLogo(),alt:"logo"},on:{click:function(e){return t.goHome()}}}),n("div",{staticClass:"header-nav",class:{"header-nav_open":t.isOpenMenu}},[n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("Каталог")]),n("router-link",{staticClass:"nav__link",attrs:{to:"/basket"}},[t._v("Корзина")])],1),t._m(0)]),n("div",{staticClass:"header__basket",on:{click:function(e){return t.goBasket()}}},[n("font-awesome-icon",{staticClass:"header__basket-icon",style:{color:t.count<1?" #9e9e9e":"#f06d4c"},attrs:{icon:t.count<1?"shopping-cart":"cart-plus"}}),t.count>0?n("span",{staticClass:"header__basket-count"},[t._v(t._s(t.count))]):t._e()],1),n("font-awesome-icon",{staticClass:"burger-button",attrs:{icon:"bars"},on:{click:function(e){t.isOpenMenu=!t.isOpenMenu}}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("div",{staticClass:"contact__phone"},[n("div",{staticClass:"contact__phone-label"},[t._v("Телефон:")]),n("div",{staticClass:"contact__phone-number"},[t._v("8 (912) 123-45-67")])]),n("div",{staticClass:"contact__email"},[n("div",{staticClass:"contact__email-label"},[t._v("Почта:")]),n("div",{staticClass:"contact__email-address"},[t._v("info@gmail.com")])])])}],u=n("5530"),i=n("2f62"),d={data:function(){return{isOpenMenu:!1}},methods:{goBasket:function(){this.$router.push({name:"Basket"})},goHome:function(){this.$router.push({name:"Catalog"})},getLogo:function(){return n("cf05")}},computed:Object(u["a"])(Object(u["a"])({},Object(i["b"])({basket:"getBasket"})),{},{count:function(){return this.basket.length}})},l=d,p=(n("cc0b"),n("2877")),f=Object(p["a"])(l,o,s,!1,null,"43a23112",null),b=f.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer center"},[n("p",{staticClass:"footer-copy"},[t._v("©Все права защищены")])])}],m={},v=m,g=(n("2cc4"),Object(p["a"])(v,_,h,!1,null,"479dbf8e",null)),k=g.exports,C={name:"App",components:{Header:b,Footer:k}},y=C,O=(n("5c0b"),Object(p["a"])(y,a,c,!1,null,null,null)),w=O.exports,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog center"},[n("h1",{staticClass:"heading-h1"},[t._v("Каталог")]),n("Products")],1)},x=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[t.products.length<=0?n("div",{staticClass:"products-loading"},[t._v("Loading...")]):t._l(t.products,(function(t,e){return[n("ProductCard",{key:e,attrs:{product:t}})]}))],2)},E=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-card",class:{"green-border":t.count>0}},[n("img",{staticClass:"product-card__img",attrs:{src:"https://raw.githubusercontent.com/wowankz/static/master/shop/img/"+t.product.img,alt:""}}),n("h3",{staticClass:"product-card__name"},[t._v(t._s(t.product.name))]),n("p",{staticClass:"product-card__desc"},[t._v(t._s(t.product.desc))]),n("div",{staticClass:"product-card__price"},[t._v("Цена: "+t._s(t.product.price)+"р")]),n("div",{staticClass:"product-card__count"},[t._v("В корзине "+t._s(t.count)+" шт")]),n("div",{staticClass:"product-card__buttons"},[n("button",{staticClass:"product-card__button product-card__button_add",class:{"disabled-grey":t.count>98},on:{click:function(e){return t.updateBasket(t.product,"add")}}},[t._v(" Добавить ")]),n("button",{staticClass:"product-card__button product-card__button_del",class:{"disabled-grey":0==t.count},on:{click:function(e){return t.updateBasket(t.product,"del")}}},[t._v(" Удалить ")])])])},S=[],L=(n("7db0"),{name:"ProductCard",props:{product:{type:Object,default:{}}},methods:{updateBasket:function(t,e){this.$store.dispatch("updateBasket",{type:e,product:t})}},computed:Object(u["a"])(Object(u["a"])({},Object(i["b"])({basket:"getBasket"})),{},{count:function(){var t=this,e=this.basket.find((function(e){return e.id==t.product.id}));return"undefined"===typeof e?0:e.count}})}),M=L,T=(n("8e8a"),Object(p["a"])(M,$,S,!1,null,"2fdfccb6",null)),A=T.exports,H={name:"Product",components:{ProductCard:A},created:function(){this.$store.dispatch("loadProducts")},computed:Object(u["a"])({},Object(i["b"])({products:"getProducts",basket:"getBasket"}))},N=H,F=(n("ed25"),Object(p["a"])(N,B,E,!1,null,"27647bd0",null)),I=F.exports,q={name:"Catalog",components:{Products:I}},z=q,D=(n("10b2"),Object(p["a"])(z,P,x,!1,null,"77baf942",null)),J=D.exports;r["a"].use(j["a"]);var R=[{path:"/",name:"Catalog",component:J},{path:"/basket",name:"Basket",component:function(){return n.e("about").then(n.bind(null,"c00b"))}}],K=new j["a"]({mode:"history",base:"/test-shop/",routes:R}),U=K,G=n("2909"),Q=n("1da1");n("96cf"),n("c740"),n("a434");r["a"].use(i["a"]);var V=new i["a"].Store({state:{products:[],basket:[]},mutations:{setProducts:function(t,e){t.products=e},setBasket:function(t,e){t.basket=e}},actions:{loadProducts:function(t){return Object(Q["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch("https://raw.githubusercontent.com/wowankz/static/master/test-shop/catalog.json");case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,console.log("Products: ",a),n("setProducts",a),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},updateBasket:function(t,e){var n=t.commit,r=t.state,a=e.type,c=e.product,o=Object(G["a"])(r.basket);if("add"===a){var s=o.findIndex((function(t){return t.id===c.id}));-1!=s?o[s].count++:(c["count"]=1,o.push(c))}if("del"===a){var u=o.findIndex((function(t){return t.id===c.id}));-1!=u&&(o[u].count>1?o[u].count--:o.splice(u,1))}n("setBasket",o)}},getters:{getProducts:function(t){return t.products},getBasket:function(t){return t.basket}},modules:{}}),W=n("ecee"),X=n("c074"),Y=n("ad3d");W["c"].add(X["c"],X["b"],X["d"],X["a"]),r["a"].component("font-awesome-icon",Y["a"]),r["a"].config.productionTip=!1,new r["a"]({router:U,store:V,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6ac7":function(t,e,n){},8214:function(t,e,n){},"8e8a":function(t,e,n){"use strict";n("f6e9")},"9c0c":function(t,e,n){},a9e9:function(t,e,n){},cc0b:function(t,e,n){"use strict";n("6ac7")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ed25:function(t,e,n){"use strict";n("8214")},f6e9:function(t,e,n){}});
//# sourceMappingURL=app.5b7da69b.js.map