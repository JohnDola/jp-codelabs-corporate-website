(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{69888:function(e,t,A){"use strict";A.d(t,{default:function(){return g}});var n=A(57437),r=A(2265),i=A(50551),l=A.n(i);A(56089);var a=Object.defineProperty,u=new Map,o=new WeakMap,s=0,d=void 0;r.Component;let c=l()(()=>A.e(782).then(A.bind(A,92782)),{loadableGenerated:{webpack:()=>[92782]},ssr:!1});var g=e=>{let{value:t}=e,[A,i]=(0,r.useState)(0),[l,a]=function(){var e;let{threshold:t,delay:A,trackVisibility:n,rootMargin:i,root:l,triggerOnce:a,skip:c,initialInView:g,fallbackInView:f,onChange:h}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[b,w]=r.useState(null),E=r.useRef(),[p,m]=r.useState({inView:!!g,entry:void 0});E.current=h,r.useEffect(()=>{let e;if(!c&&b)return e=function(e,t){let A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if(void 0===window.IntersectionObserver&&void 0!==n){let r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof A.threshold?A.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:i,elements:l}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var A;return"".concat(t,"_").concat("root"===t?(A=e.root)?(o.has(A)||(s+=1,o.set(A,s.toString())),o.get(A)):"0":e[t])}).toString(),A=u.get(t);if(!A){let n;let r=new Map,i=new IntersectionObserver(t=>{t.forEach(t=>{var A;let i=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(A=r.get(t.target))||A.forEach(e=>{e(i,t)})})},e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),A={id:t,observer:i,elements:r},u.set(t,A)}return A}(A),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),0===a.length&&(l.delete(e),i.unobserve(e)),0===l.size&&(i.disconnect(),u.delete(r))}}(b,(t,A)=>{m({inView:t,entry:A}),E.current&&E.current(t,A),A.isIntersecting&&a&&e&&(e(),e=void 0)},{root:l,rootMargin:i,threshold:t,trackVisibility:n,delay:A},f),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,b,l,i,a,c,n,f,A]);let M=null==(e=p.entry)?void 0:e.target,R=r.useRef();b||!M||a||c||R.current===M||(R.current=M,m({inView:!!g,entry:void 0}));let B=[w,p.inView,p.entry];return B.ref=B[0],B.inView=B[1],B.entry=B[2],B}();return(0,r.useEffect)(()=>{a&&setTimeout(()=>{i(t)},1e3)},[a,t]),(0,n.jsx)("span",{ref:l,children:a?(0,n.jsx)(c,{value:A,format:"(,ddd)",theme:"default"}):0})}},50551:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=A(99920);A(57437),A(2265);let r=n._(A(40148));function i(e,t){var A;let n={loading:e=>{let{error:t,isLoading:A,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let i={...n,...t};return(0,r.default)({...i,modules:null==(A=i.loadableGenerated)?void 0:A.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},10912:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let n=A(55592);function r(e){let{reason:t,children:A}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return A}},40148:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=A(57437),r=A(2265),i=A(10912),l=A(61481);function a(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},o=function(e){let t={...u,...e},A=(0,r.lazy)(()=>t.loader().then(a)),o=t.loading;function s(e){let a=o?(0,n.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(l.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(A,{...e})]}):(0,n.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(A,{...e})});return(0,n.jsx)(r.Suspense,{fallback:a,children:u})}return s.displayName="LoadableComponent",s}},61481:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let n=A(57437),r=A(58512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let A=(0,r.getExpectedRequestStore)("next/dynamic css"),i=[];if(A.reactLoadableManifest&&t){let e=A.reactLoadableManifest;for(let A of t){if(!e[A])continue;let t=e[A].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,n.jsx)(n.Fragment,{children:i.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:A.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},56089:function(){},21794:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/about-info.2ba3b379.png",height:56,width:56,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEW8vLyEhISwsLCLi4t7e3uZc21CAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgwA2YGBmZGRkZmRiYmFkYmZlZmPCoBQAE4gAjqrqtXwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},21925:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/counter-icon1.4e3c0a5c.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAC3RSTlMBMYlWP2YjR3YOE8R9qHIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicFcq3EcBAEAOxJc9//wVrhBhwmYqG25BK0GHb01xVZtXjxdRMHNo/r0COcgOk/eADJV4A++jzn4AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},64884:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/counter-icon2.a457b80e.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlNGBWsfO2EsVYh3wcPZmAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwFwYcBADAMwjADWf3/4UqoUusOQ6+3myw4PLjKa8Ota5rgd9RMUJXNCEl3kj4jFgDt1wpk+wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},18799:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/counter-icon3.e94d42ba.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////////////////////////8HBRbfAAAACXRSTlM4RgEMjh8lWFmANQrzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nB2IgQkAMAyDTNJ2+//i0YGISBqJDq0NGjgfQDP7Bp0rhiBJBJuqtZ2q2A8SwQCKq07rOQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},95163:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/counter-icon4.0077a2b5.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///////////////////////////////9MaXH////aRr4xAAAACnRSTlM/WjASa3kkSwAaQKQKugAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwFwYcBADAMwjADWf3/4UrQvtGEbh0qM/LGFWIoL/BWvWl4NioYHqU5oudS7gMfGQDgK9UCwQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},89263:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/section-title.2c0357ef.png",height:12,width:28,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEU0ZuI7cfkyYdYsVsA8cfw9cvtMaXE7cfsvXMsvXM07cftTTCXzAAAACXRSTlP8of6XbEEAgPim7GwzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgYWXkYmDiZGZgZwMzOBhgIgAF6ABwyhvr2QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},58169:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/counnter-bg-shape.48a45af6.png",height:207,width:458,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEU6b/06b/w9df8V1DM3AAAAA3RSTlMaEAJPC5EFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgYmBkZAABJgjFwMAIFQAzGJmYmAABTQAV+vr3dAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}}]);