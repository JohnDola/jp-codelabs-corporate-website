(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{15256:function(t,e){var n;(function(){var i,r,o,s,a,u,l,d,h,p,c,m,f,g,v,M,w,y,b,E,T,x,S,D=[].slice;r='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>',o='<span class="odometer-formatting-mark"></span>',i="(,ddd).dd",s=/^\(?([^)]*)\)?(?:(.)(d+))?$/,l="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",d=null!=(M=document.createElement("div").style).transition||null!=M.webkitTransition||null!=M.mozTransition||null!=M.oTransition,g=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,a=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,p=function(t){var e;return(e=document.createElement("div")).innerHTML=t,e.children[0]},f=function(t,e){return t.className=t.className.replace(RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi")," ")},h=function(t,e){return f(t,e),t.className+=" "+e},w=function(t,e){var n;if(null!=document.createEvent)return(n=document.createEvent("HTMLEvents")).initEvent(e,!0,!0),t.dispatchEvent(n)},m=function(){var t,e;return null!=(t=null!=(e=window.performance)&&"function"==typeof e.now?e.now():void 0)?t:+new Date},v=function(t,e){return(null==e&&(e=0),e)?(t*=Math.pow(10,e),t+=.5,(t=Math.floor(t))/Math.pow(10,e)):Math.round(t)},y=function(t){return t<0?Math.ceil(t):Math.floor(t)},c=function(t){return t-v(t)},E=!1,(b=function(){var t,e,n,i,r;if(!E&&null!=window.jQuery){for(e=0,E=!0,r=[],n=(i=["html","text"]).length;e<n;e++)t=i[e],r.push(function(t){var e;return e=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var n;return null==t||(null!=(n=this[0])?n.odometer:void 0)==null?e.apply(this,arguments):this[0].odometer.update(t)}}(t));return r}})(),setTimeout(b,0),(u=function(){function t(e){var n,i,r,o,s,a,u,l,d,h=this;if(this.options=e,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(n in this.el.odometer=this,u=t.options)r=u[n],null==this.options[n]&&(this.options[n]=r);null==(o=this.options).duration&&(o.duration=2e3),this.MAX_VALUES=this.options.duration/33.333333333333336/2|0,this.resetFormat(),this.value=this.cleanValue(null!=(l=this.options.value)?l:""),this.renderInside(),this.render();try{for(s=0,a=(d=["innerHTML","innerText","textContent"]).length;s<a;s++)i=d[s],null!=this.el[i]&&function(t){Object.defineProperty(h.el,t,{get:function(){var e;return"innerHTML"===t?h.inside.outerHTML:null!=(e=h.inside.innerText)?e:h.inside.textContent},set:function(t){return h.update(t)}})}(i)}catch(t){this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t=this;if(null!=a)try{return null==this.observer&&(this.observer=new a(function(e){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch(t){}},t.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var e;return"string"==typeof t&&(t=parseFloat(t=(t=(t=t.replace(null!=(e=this.format.radix)?e:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),10)||0),v(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,e,n,i,r,o,s=this;if(!this.transitionEndBound){for(n=0,this.transitionEndBound=!0,e=!1,r=l.split(" "),o=[],i=r.length;n<i;n++)t=r[n],o.push(this.el.addEventListener(t,function(){return!!e||(e=!0,setTimeout(function(){return s.render(),e=!1,w(s.el,"odometerdone")},0),!0)},!1));return o}},t.prototype.resetFormat=function(){var t,e,n,r,o,a,u,l;if((t=null!=(u=this.options.format)?u:i)||(t="d"),!(n=s.exec(t)))throw Error("Odometer: Unparsable digit format");return a=(l=n.slice(1,4))[0],o=l[1],r=(null!=(e=l[2])?e.length:void 0)||0,this.format={repeating:a,radix:o,precision:r}},t.prototype.render=function(t){var e,n,i,r,o,s,a;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",o=this.options.theme,e=this.el.className.split(" "),r=[],s=0,a=e.length;s<a;s++)if((n=e[s]).length){if(i=/^odometer-theme-(.+)$/.exec(n)){o=i[1];continue}/^odometer(-|$)/.test(n)||r.push(n)}return r.push("odometer"),d||r.push("odometer-no-transitions"),o?r.push("odometer-theme-"+o):r.push("odometer-auto-theme"),this.el.className=r.join(" "),this.ribbons={},this.formatDigits(t),this.startWatchingMutations()},t.prototype.formatDigits=function(t){var e,n,i,r,o,s,a,u,l;if(this.digits=[],this.options.formatFunction)for(r=0,s=(u=this.options.formatFunction(t).split("").reverse()).length;r<s;r++)(n=u[r]).match(/0-9/)?((e=this.renderDigit()).querySelector(".odometer-value").innerHTML=n,this.digits.push(e),this.insertDigit(e)):this.addSpacer(n);else for(o=0,i=!this.format.precision||!c(t),a=(l=t.toString().split("").reverse()).length;o<a;o++)"."===(e=l[o])&&(i=!0),this.addDigit(e,i)},t.prototype.update=function(t){var e,n=this;if(e=(t=this.cleanValue(t))-this.value)return f(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),e>0?h(this.el,"odometer-animating-up"):h(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return n.el.offsetHeight,h(n.el,"odometer-animating")},0),this.value=t},t.prototype.renderDigit=function(){return p(r)},t.prototype.insertDigit=function(t,e){return null!=e?this.inside.insertBefore(t,e):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,e,n){var i;return(i=p(o)).innerHTML=t,n&&h(i,n),this.insertDigit(i,e)},t.prototype.addDigit=function(t,e){var n,i,r,o;if(null==e&&(e=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(o=this.format.radix)?o:".",null,"odometer-radix-mark");if(e)for(r=!1;;){if(!this.format.repeating.length){if(r)throw Error("Bad odometer format without digits");this.resetFormat(),r=!0}if(n=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===n)break;this.addSpacer(n)}return(i=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,this.digits.push(i),this.insertDigit(i)},t.prototype.animate=function(t){return d&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var e,n,i,r,o,s=this;if(n=+t-this.value)return r=i=m(),e=this.value,(o=function(){var a,u;if(m()-r>s.options.duration){s.value=t,s.render(),w(s.el,"odometerdone");return}return((a=m()-i)>50&&(i=m(),u=a/s.options.duration*n,e+=u,s.render(Math.round(e))),null!=g)?g(o):setTimeout(o,50)})()},t.prototype.getDigitCount=function(){var t,e,n,i,r;for(n=1<=arguments.length?D.call(arguments,0):[],t=i=0,r=n.length;i<r;t=++i)e=n[t],n[t]=Math.abs(e);return Math.ceil(Math.log(Math.max.apply(Math,n)+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,e,n,i,r,o,s;for(r=1<=arguments.length?D.call(arguments,0):[],e=/^\-?\d*\.(\d*?)0*$/,t=o=0,s=r.length;o<s;t=++o)i=r[t],r[t]=i.toString(),null==(n=e.exec(r[t]))?r[t]=0:r[t]=n[1].length;return Math.max.apply(Math,r)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var e,n,i,r,o,s,a,u,l,d,p,c,m,f,g,v,M,w,b,E,T,x,S,D,L,C,F;if(v=this.value,(u=this.getFractionalDigitCount(v,t))&&(t*=Math.pow(10,u),v*=Math.pow(10,u)),i=t-v){for(this.bindTransitionEnd(),r=this.getDigitCount(v,t),o=[],e=0,p=b=0;0<=r?b<r:b>r;p=0<=r?++b:--b){if(M=y(v/Math.pow(10,r-p-1)),Math.abs(s=(a=y(t/Math.pow(10,r-p-1)))-M)>this.MAX_VALUES){for(d=[],c=s/(this.MAX_VALUES+this.MAX_VALUES*e*.5),n=M;s>0&&n<a||s<0&&n>a;)d.push(Math.round(n)),n+=c;d[d.length-1]!==a&&d.push(a),e++}else d=(function(){F=[];for(var t=M;M<=a?t<=a:t>=a;M<=a?t++:t--)F.push(t);return F}).apply(this);for(p=E=0,x=d.length;E<x;p=++E)l=d[p],d[p]=Math.abs(l%10);o.push(d)}for(this.resetDigits(),C=o.reverse(),p=T=0,S=C.length;T<S;p=++T)for(d=C[p],this.digits[p]||this.addDigit(" ",p>=u),null==(w=this.ribbons)[p]&&(w[p]=this.digits[p].querySelector(".odometer-ribbon-inner")),this.ribbons[p].innerHTML="",i<0&&(d=d.reverse()),m=L=0,D=d.length;L<D;m=++L)l=d[m],(g=document.createElement("div")).className="odometer-value",g.innerHTML=l,this.ribbons[p].appendChild(g),m===d.length-1&&h(g,"odometer-last-value"),0===m&&h(g,"odometer-first-value");if(M<0&&this.addDigit("-"),null!=(f=this.inside.querySelector(".odometer-radix-mark"))&&f.parent.removeChild(f),u)return this.addSpacer(this.format.radix,this.digits[u-1],"odometer-radix-mark")}},t}()).options=null!=(x=window.odometerOptions)?x:{},setTimeout(function(){var t,e,n,i,r;if(window.odometerOptions){for(t in i=window.odometerOptions,r=[],i)e=i[t],r.push(null!=(n=u.options)[t]?(n=u.options)[t]:n[t]=e);return r}},0),u.init=function(){var t,e,n,i,r,o;if(null!=document.querySelectorAll){for(n=0,e=document.querySelectorAll(u.options.selector||".odometer"),o=[],i=e.length;n<i;n++)t=e[n],o.push(t.odometer=new u({el:t,value:null!=(r=t.innerText)?r:t.textContent}));return o}},(null!=(S=document.documentElement)?S.doScroll:void 0)!=null&&null!=document.createEventObject?(T=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==u.options.auto&&u.init(),null!=T?T.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){if(!1!==u.options.auto)return u.init()},!1),void 0!==(n=(function(){return u}).apply(e,[]))&&(t.exports=n)}).call(this)},92782:function(t,e,n){"use strict";n.r(e);var i=n(2265),r=n(15256),o=n.n(r);e.default=({animation:t,duration:e,format:n,theme:r,value:s,...a})=>{let u=(0,i.useRef)(null),l=(0,i.useRef)();return(0,i.useEffect)(()=>{l.current=new(o())({el:u.current,auto:!1,animation:t,duration:e,format:n,theme:r,value:s})},[]),(0,i.useEffect)(()=>{l.current?.update(s)},[s]),(0,i.createElement)("div",{...a,ref:u})}}}]);