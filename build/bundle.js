var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,c;function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function w(t){c=t}const x=[],k=[],j=[],H=[],S=Promise.resolve();let T=!1;function E(t){j.push(t)}const D=new Set;let C=0;function _(){const t=c;do{for(;C<x.length;){const t=x[C];C++,w(t),A(t.$$)}for(w(null),x.length=0,C=0;k.length;)k.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];D.has(e)||(D.add(e),e())}j.length=0}while(x.length);for(;H.length;)H.pop()();T=!1,D.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const I=new Set;let L;function P(){L={r:0,c:[],p:L}}function q(){L.r||o(L.c),L=L.p}function G(t,e){t&&t.i&&(I.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),L.c.push((()=>{I.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function J(t){t&&t.c()}function M(t,n,i,r){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,i),r||E((()=>{const n=a.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(x.push(t),T||(T=!0,S.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,s,i,r,a,l,u,p=[-1]){const f=c;w(e);const h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:s.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=i?i(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&N(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(d)}else h.fragment&&h.fragment.c();s.intro&&G(e.$$.fragment),M(e,s.target,s.anchor,s.customElement),_()}w(f)}class R{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,s,i,r,c,a,l,f,m,y,w,x;return{c(){n=h("div"),s=h("span"),s.innerHTML='<h2 class="svelte-c2ma29">TheSudarsanDev</h2>',i=g(),r=h("span"),c=h("button"),c.textContent="Home",a=g(),l=h("button"),l.textContent="About",f=g(),m=h("button"),m.textContent="Projects",b(s,"class","pre-header-content"),$(s,"display","inline-block"),b(c,"class","pre-header-content svelte-c2ma29"),b(l,"class","pre-header-content svelte-c2ma29"),b(m,"class","pre-header-content svelte-c2ma29"),b(r,"class","buttons svelte-c2ma29"),b(n,"class",y="header font-changa text-white position-fixed "+(e[0]?"scrolled-header":"")+" svelte-c2ma29")},m(t,e){p(t,n,e),u(n,s),u(n,i),u(n,r),u(r,c),u(r,a),u(r,l),u(r,f),u(r,m),w||(x=[v(c,"click",F),v(l,"click",Y("about")),v(m,"click",Y("projects"))],w=!0)},p(t,[e]){1&e&&y!==(y="header font-changa text-white position-fixed "+(t[0]?"scrolled-header":"")+" svelte-c2ma29")&&b(n,"class",y)},i:t,o:t,d(t){t&&d(n),w=!1,o(x)}}}function Y(t){return()=>{let e=document.getElementById(t).getBoundingClientRect().top-document.body.getBoundingClientRect().top;window.scrollTo({top:e,behavior:"smooth"})}}function F(){window.scrollTo({top:0,behaviour:"smooth"})}function Z(t,e,n){let{scrolledHeader:o}=e;return t.$$set=t=>{"scrolledHeader"in t&&n(0,o=t.scrolledHeader)},[o]}class K extends R{constructor(t){super(),O(this,t,Z,V,i,{scrolledHeader:0})}}const Q={GitHub:"fab fa-github",NPM:"fab fa-npm",Docs:"fas fa-book",Link:"fas fa-link",Deno:"fas fa-archive"};function U(t,e){return{name:e,href:t,svg:Q[e]}}const W=[["javascript","plain"],["go","original"],["python","original"],["html5","original"],["css3","original"],["rust","plain"]],X=[{name:"github",url:"https://github.com/scientific-dev",color:"211f1f"},{name:"twitter",url:"https://twitter.com/ScientificDev",color:"1da1f2"},{name:"discord",url:"https://discord.gg/FrduEZd",color:"7298da"}],tt=[{name:"Spotify-api.js",description:"A npm package to interact with spotify api with node.js with oauth support. This package also supports caching!",languages:["Javascript","Typescript"],link:"https://npmjs.com/package/spotify-api.js",buttons:[U("https://github.com/spotify-api/spotify-api.js","GitHub"),U("https://npmjs.com/package/spotify-api.js","NPM")]},{name:"Instant.db",description:"Instant.db helps you to make database instantly using json files for Node.js!",languages:["Javascript"],link:"https://npmjs.com/package/instant.db",buttons:[U("https://github.com/Scientific-Dev/instant.db","GitHub"),U("https://npmjs.com/package/instant.db","Link")]},{name:"Ludo",description:"An awesome site to play singleplayer ludo for fun even with bots!",link:"https://scientific-dev.github.io/ludo?game",languages:["Svelte","Javascript"],buttons:[U("https://github.com/scientific-dev/ludo","GitHub")]},{name:"TimelineOfIndia",description:"Timeline of India is a website which shows the events from the very first of the Indus civilization of the Indian subcontinent to the current state of the Indian subcontinent.",languages:["Svelte","Javascript"],link:"https://timelineofindia.github.io",buttons:[U("https://github.com/timelineofindia","GitHub")]},{name:"EvtManager",description:"Simple to use eventemitter to manage your events synchronously and asynchronously too for Deno, Node and browser with a typesafe environment!",link:"https://github.com/scientific-dev/evtmanager",languages:["Javascript","Typescript"],buttons:[U("https://github.com/scientific-dev/evtmanager","GitHub"),U("https://npmjs.com/package/evtmanager","NPM"),U("https://deno.land/x/evtmanager","Deno")]},{name:"Emoji Canvas",description:"An easy to use module to write text with parsed emojis (supports discord emojis too) in canvas for deno!",languages:["Javascript","Typescript","Deno"],link:"https://github.com/Scientific-Dev/emoji-canvas",buttons:[U("https://github.com/Scientific-Dev/emoji-canvas","GitHub"),U("deno.land/x/emoji_canvas","Deno")]},{name:"Templatify",description:"A cli to create local templates and copy templates from github which is saved within your pc and used easily!",languages:["Go"],link:"https://github.com/Scientific-Dev/templatify",buttons:[U("https://github.com/Scientific-Dev/templatify","GitHub")]},{name:"Deno Headers Socket",description:"A custom socket for deno to add custom headers which lacks in the standard library!",link:"https://github.com/scientific-dev/custom-socket",languages:["Javascript","Typescript"],buttons:[U("https://github.com/scientific-dev/custom-socket","GitHub"),U("https://deno.land/x/custom_socket","Deno")]},{name:"Enhanced.db",description:"A npm package which is a wrapper for better-sqlite3! Currently not maintained...",languages:["Javascript"],link:"https://npmjs.com/package/enhanced.db",buttons:[U("https://github.com/Scientific-Dev/enhanced.db","GitHub"),U("https://npmjs.com/package/enhanced.db","Link")]},{name:"Spotify Types",description:"All the typings for the various Spotify API Object typings written in typescript.",languages:["Typescript"],link:"https://npmjs.com/package/spotify-types",buttons:[U("https://github.com/spotify-api/spotify-types","GitHub"),U("https://npmjs.com/package/spotify-types","NPM")]},{name:"Portfolio",description:"The site which you are watching now...",languages:["Javascript","Svelte"],link:"https://thesudarsandev.xyz/",buttons:[U("https://github.com/scientific-dev/portfolio","GitHub")]}];function et(t,e,n){const o=t.slice();return o[0]=e[n],o}function nt(e){let n,o,s,i,r,c;return{c(){n=h("a"),o=h("i"),i=g(),b(o,"class",s="fab fa-"+e[0].name+" svelte-1m23si5"),$(n,"--color","#"+e[0].color),b(n,"class",r="pre-socialcard socialcard social-"+e[0].name+" cursor-pointer svelte-1m23si5"),b(n,"href",c=e[0].url)},m(t,e){p(t,n,e),u(n,o),u(n,i)},p:t,d(t){t&&d(n)}}}function ot(e){let n,o,s,i,r=X,c=[];for(let t=0;t<r.length;t+=1)c[t]=nt(et(e,r,t));return{c(){n=h("div"),o=h("div"),o.innerHTML='<h1 class="pre-intro-content svelte-1m23si5">TheSudarsanDev</h1> \n\t\t<h2 class="pre-intro-content svelte-1m23si5">Yet Another Random Developer</h2> \n\t\t<p class="pre-intro-content svelte-1m23si5">I&#39;m Sudarsan, a high school student who likes to do programming and stuff. I am a full stack developer and i mostly build user interfaces with the prominent programming language as Javascript.</p>',s=g(),i=h("div");for(let t=0;t<c.length;t+=1)c[t].c();b(o,"class","content"),b(i,"class","socialcards svelte-1m23si5"),b(n,"class","intro text-white font-changa flex svelte-1m23si5"),b(n,"id","intro")},m(t,e){p(t,n,e),u(n,o),u(n,s),u(n,i);for(let t=0;t<c.length;t+=1)c[t].m(i,null)},p(t,[e]){if(0&e){let n;for(r=X,n=0;n<r.length;n+=1){const o=et(t,r,n);c[n]?c[n].p(o,e):(c[n]=nt(o),c[n].c(),c[n].m(i,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&d(n),f(c,t)}}}class st extends R{constructor(t){super(),O(this,t,null,ot,i,{})}}function it(t){let e,n,o,s,i,r,c,l,f,v;const $=t[5].default,w=function(t,e,n,o){if(t){const s=a(t,e,n,o);return t[0](s)}}($,t,t[4],null);return{c(){e=h("div"),n=h("h1"),o=h("span"),s=m("0"),i=m(t[2]),r=m("."),c=g(),l=m(t[3]),f=g(),w&&w.c(),b(o,"class","svelte-1qgrnyl"),b(n,"class","section-title m-0 svelte-1qgrnyl"),b(e,"class","section-inner svelte-1qgrnyl")},m(t,a){p(t,e,a),u(e,n),u(n,o),u(o,s),u(o,i),u(o,r),u(n,c),u(n,l),u(e,f),w&&w.m(e,null),v=!0},p(t,e){(!v||4&e)&&y(i,t[2]),(!v||8&e)&&y(l,t[3]),w&&w.p&&(!v||16&e)&&function(t,e,n,o,s,i){if(s){const r=a(e,n,o,i);t.p(r,s)}}(w,$,t,t[4],v?function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}($,t[4],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[4]),null)},i(t){v||(G(w,t),v=!0)},o(t){z(w,t),v=!1},d(t){t&&d(e),w&&w.d(t)}}}function rt(t){let e,n,o,s=t[1]&&it(t);return{c(){e=h("div"),s&&s.c(),b(e,"class",n="section font-changa text-white "+t[0]+" svelte-1qgrnyl"),b(e,"id",t[0])},m(t,n){p(t,e,n),s&&s.m(e,null),o=!0},p(t,[i]){t[1]?s?(s.p(t,i),2&i&&G(s,1)):(s=it(t),s.c(),G(s,1),s.m(e,null)):s&&(P(),z(s,1,1,(()=>{s=null})),q()),(!o||1&i&&n!==(n="section font-changa text-white "+t[0]+" svelte-1qgrnyl"))&&b(e,"class",n),(!o||1&i)&&b(e,"id",t[0])},i(t){o||(G(s),o=!0)},o(t){z(s),o=!1},d(t){t&&d(e),s&&s.d()}}}function ct(t,e,n){let{$$slots:o={},$$scope:s}=e,{id:i,display:r,i:c,name:a}=e;return t.$$set=t=>{"id"in t&&n(0,i=t.id),"display"in t&&n(1,r=t.display),"i"in t&&n(2,c=t.i),"name"in t&&n(3,a=t.name),"$$scope"in t&&n(4,s=t.$$scope)},[i,r,c,a,s,o]}class at extends R{constructor(t){super(),O(this,t,ct,rt,i,{id:0,display:1,i:2,name:3})}}function lt(t,e,n){const o=t.slice();return o[0]=e[n],o}function ut(e){let n,o,s;return{c(){var t,i;n=h("img"),t=n.src,i=o="https://raw.githubusercontent.com/devicons/devicon/master/icons/"+e[0][0]+"/"+e[0][0]+"-"+e[0][1]+".svg",r||(r=document.createElement("a")),r.href=i,t!==r.href&&b(n,"src",o),b(n,"draggable","false"),b(n,"alt",s=e[0][0]),b(n,"width","30"),b(n,"height","30"),b(n,"class","cursor-pointer")},m(t,e){p(t,n,e)},p:t,d(t){t&&d(n)}}}function pt(e){let n,o,s,i,r,c,a,l,v,y,w,x,k,j,H,S,T,E,D,C,_,A,I,L,P,q,G,z,J,M,B,N,O=W,R=[];for(let t=0;t<O.length;t+=1)R[t]=ut(lt(e,O,t));return{c(){n=h("div"),o=h("div"),o.innerHTML='<div style="padding-right: 20px;"><div class="pfp cursor-pointer svelte-41fmc6"></div></div>',s=g(),i=h("div"),r=m("Hi, I'm "),c=h("strong"),c.textContent="Sudarsan",a=m(". I am a full stack web developer with "),l=h("strong"),l.textContent="TheSudarsanDev",v=m(" (abbrv. The Sudarsan Developer) as my internet username."),y=h("br"),w=h("br"),x=m("\r\n\t\tI am a high school student from "),k=h("strong"),k.textContent="India",j=m(" who started programming with "),H=h("strong"),H.textContent="Python",S=m(" in "),T=h("strong"),T.textContent="2018",E=m(" then consequently started with web development with "),D=h("strong"),D.textContent="Javascript",C=m(" and then started to learn programming languages such as \r\n\t\t"),_=h("strong"),_.textContent="Golang",A=m(", "),I=h("strong"),I.textContent="Rust",L=m(" and learning more. And i draw and animate rarely and one of the creation is my avatar."),P=h("br"),q=h("br"),G=m("\r\n\t\tThings i know:"),z=h("br"),J=g(),M=h("div");for(let t=0;t<R.length;t+=1)R[t].c();B=g(),N=h("div"),b(c,"class","svelte-41fmc6"),b(l,"class","svelte-41fmc6"),b(k,"class","svelte-41fmc6"),b(H,"class","svelte-41fmc6"),b(T,"class","svelte-41fmc6"),b(D,"class","svelte-41fmc6"),b(_,"class","svelte-41fmc6"),b(I,"class","svelte-41fmc6"),b(M,"class","flex flex-wrap"),$(M,"margin-top","6px"),$(N,"height","80px"),b(i,"class","text svelte-41fmc6"),b(n,"class","about-flex svelte-41fmc6")},m(t,e){p(t,n,e),u(n,o),u(n,s),u(n,i),u(i,r),u(i,c),u(i,a),u(i,l),u(i,v),u(i,y),u(i,w),u(i,x),u(i,k),u(i,j),u(i,H),u(i,S),u(i,T),u(i,E),u(i,D),u(i,C),u(i,_),u(i,A),u(i,I),u(i,L),u(i,P),u(i,q),u(i,G),u(i,z),u(i,J),u(i,M);for(let t=0;t<R.length;t+=1)R[t].m(M,null);u(i,B),u(i,N)},p(t,[e]){if(0&e){let n;for(O=W,n=0;n<O.length;n+=1){const o=lt(t,O,n);R[n]?R[n].p(o,e):(R[n]=ut(o),R[n].c(),R[n].m(M,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=O.length}},i:t,o:t,d(t){t&&d(n),f(R,t)}}}class dt extends R{constructor(t){super(),O(this,t,null,pt,i,{})}}function ft(t,e,n){const o=t.slice();return o[1]=e[n],o}function ht(t,e,n){const o=t.slice();return o[4]=e[n],o}function mt(t){let e,n,o=t[4]+"";return{c(){e=h("p"),n=m(o),b(e,"class","svelte-zpc6uo")},m(t,o){p(t,e,o),u(e,n)},p(t,e){1&e&&o!==(o=t[4]+"")&&y(n,o)},d(t){t&&d(e)}}}function gt(t){let e,n,o,s,i;return{c(){e=h("a"),n=h("i"),s=g(),b(n,"class",o=l(t[1].svg)+" svelte-zpc6uo"),b(e,"href",i=t[1].href),b(e,"class","cursor-pointer text-white svelte-zpc6uo")},m(t,o){p(t,e,o),u(e,n),u(e,s)},p(t,s){1&s&&o!==(o=l(t[1].svg)+" svelte-zpc6uo")&&b(n,"class",o),1&s&&i!==(i=t[1].href)&&b(e,"href",i)},d(t){t&&d(e)}}}function vt(e){let n,o,s,i,r,c,a,l,v,w,x,k,j,H,S,T,E,D=e[0].name+"",C=e[0].description+"",_=e[0].languages,A=[];for(let t=0;t<_.length;t+=1)A[t]=mt(ht(e,_,t));let I=e[0].buttons,L=[];for(let t=0;t<I.length;t+=1)L[t]=gt(ft(e,I,t));return{c(){n=h("div"),o=h("header"),s=h("div"),i=h("i"),r=g(),c=h("h3"),a=m(D),l=g(),v=h("p"),w=m(C),x=g(),k=h("div"),j=g(),H=h("footer"),S=h("span");for(let t=0;t<A.length;t+=1)A[t].c();T=g(),E=h("span");for(let t=0;t<L.length;t+=1)L[t].c();b(i,"class","far fa-folder-open fa-2x"),b(c,"class","svelte-zpc6uo"),b(s,"class","title svelte-zpc6uo"),b(v,"class","text-description m-0"),$(k,"height","10px"),b(S,"class","languages svelte-zpc6uo"),b(E,"class","svg-links svelte-zpc6uo"),b(n,"class","project-card pre-project-card flex svelte-zpc6uo")},m(t,e){p(t,n,e),u(n,o),u(o,s),u(s,i),u(s,r),u(s,c),u(c,a),u(o,l),u(o,v),u(v,w),u(o,x),u(o,k),u(n,j),u(n,H),u(H,S);for(let t=0;t<A.length;t+=1)A[t].m(S,null);u(H,T),u(H,E);for(let t=0;t<L.length;t+=1)L[t].m(E,null)},p(t,[e]){if(1&e&&D!==(D=t[0].name+"")&&y(a,D),1&e&&C!==(C=t[0].description+"")&&y(w,C),1&e){let n;for(_=t[0].languages,n=0;n<_.length;n+=1){const o=ht(t,_,n);A[n]?A[n].p(o,e):(A[n]=mt(o),A[n].c(),A[n].m(S,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=_.length}if(1&e){let n;for(I=t[0].buttons,n=0;n<I.length;n+=1){const o=ft(t,I,n);L[n]?L[n].p(o,e):(L[n]=gt(o),L[n].c(),L[n].m(E,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=I.length}},i:t,o:t,d(t){t&&d(n),f(A,t),f(L,t)}}}function bt(t,e,n){let{project:o}=e;return t.$$set=t=>{"project"in t&&n(0,o=t.project)},[o]}class yt extends R{constructor(t){super(),O(this,t,bt,vt,i,{project:0})}}function $t(t,e,n){const o=t.slice();return o[2]=e[n],o}function wt(t){let e,n;return e=new yt({props:{project:t[2]}}),{c(){J(e.$$.fragment)},m(t,o){M(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.project=t[2]),e.$set(o)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function xt(t){let e,n,o,s,i,r,c,a,l,$=t[0]?"less":"all",w=tt.slice(0,t[0]?tt.length:6),x=[];for(let e=0;e<w.length;e+=1)x[e]=wt($t(t,w,e));const k=t=>z(x[t],1,1,(()=>{x[t]=null}));return{c(){e=h("div");for(let t=0;t<x.length;t+=1)x[t].c();n=g(),o=h("p"),s=m("View "),i=m($),r=m(" projects?"),b(e,"class","project-list flex flex-wrap svelte-r624wt"),b(o,"class","cursor-pointer project-card pre-project-card svelte-r624wt")},m(d,f){p(d,e,f);for(let t=0;t<x.length;t+=1)x[t].m(e,null);p(d,n,f),p(d,o,f),u(o,s),u(o,i),u(o,r),c=!0,a||(l=v(o,"click",t[1]),a=!0)},p(t,[n]){if(1&n){let o;for(w=tt.slice(0,t[0]?tt.length:6),o=0;o<w.length;o+=1){const s=$t(t,w,o);x[o]?(x[o].p(s,n),G(x[o],1)):(x[o]=wt(s),x[o].c(),G(x[o],1),x[o].m(e,null))}for(P(),o=w.length;o<x.length;o+=1)k(o);q()}(!c||1&n)&&$!==($=t[0]?"less":"all")&&y(i,$)},i(t){if(!c){for(let t=0;t<w.length;t+=1)G(x[t]);c=!0}},o(t){x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)z(x[t]);c=!1},d(t){t&&d(e),f(x,t),t&&d(n),t&&d(o),a=!1,l()}}}function kt(t,e,n){let o=!1;return[o,()=>n(0,o=!o)]}class jt extends R{constructor(t){super(),O(this,t,kt,xt,i,{})}}function Ht(t){let e,n;return e=new dt({}),{c(){J(e.$$.fragment)},m(t,o){M(e,t,o),n=!0},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function St(t){let e,n;return e=new jt({}),{c(){J(e.$$.fragment)},m(t,o){M(e,t,o),n=!0},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Tt(t){let e,n,o,s,i,r,c,a,l,u,f,m;return o=new K({props:{scrolledHeader:t[0]}}),i=new st({}),c=new at({props:{i:"1",id:"about",name:"About me",display:t[1].about,$$slots:{default:[Ht]},$$scope:{ctx:t}}}),l=new at({props:{i:"2",id:"projects",name:"Projects",display:t[1].projects,$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){e=h("div"),n=g(),J(o.$$.fragment),s=g(),J(i.$$.fragment),r=g(),J(c.$$.fragment),a=g(),J(l.$$.fragment),u=g(),f=h("div"),f.textContent=`© TheSudarsanDev ${(new Date).getFullYear()}`,b(e,"class","background position-fixed svelte-1q5td74"),b(f,"class","footer text-white font-changa svelte-1q5td74")},m(t,d){p(t,e,d),p(t,n,d),M(o,t,d),p(t,s,d),M(i,t,d),p(t,r,d),M(c,t,d),p(t,a,d),M(l,t,d),p(t,u,d),p(t,f,d),m=!0},p(t,[e]){const n={};1&e&&(n.scrolledHeader=t[0]),o.$set(n);const s={};2&e&&(s.display=t[1].about),64&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const i={};2&e&&(i.display=t[1].projects),64&e&&(i.$$scope={dirty:e,ctx:t}),l.$set(i)},i(t){m||(G(o.$$.fragment,t),G(i.$$.fragment,t),G(c.$$.fragment,t),G(l.$$.fragment,t),m=!0)},o(t){z(o.$$.fragment,t),z(i.$$.fragment,t),z(c.$$.fragment,t),z(l.$$.fragment,t),m=!1},d(t){t&&d(e),t&&d(n),B(o,t),t&&d(s),B(i,t),t&&d(r),B(c,t),t&&d(a),B(l,t),t&&d(u),t&&d(f)}}}function Et(t){return new Promise((e=>setTimeout(e,t)))}function Dt(t,e,n){const o=["about","projects"];let s=!1,i={about:!1,projects:!1};function r(){n(0,s=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>20)}async function c(){for(let t=0;t<o.length;t++){let e=o[t];!i[e]&&document.getElementById(e).hasPartInViewport()&&n(1,i=Object.defineProperty(i,e,{value:!0}))}!async function(t,e){let n=document.querySelectorAll(`.${t}`);for(let o=0;o<n.length;o++)n[o][e]()&&(n[o].classList.remove(t),await Et(1e3))}("pre-project-card","inViewport")}Element.prototype.inViewport=function(){var{top:t,bottom:e}=this.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t-n<=0&&e-n<=0},Element.prototype.hasPartInViewport=function(){var{top:t,height:e}=this.getBoundingClientRect();return t+e/3<=(window.innerHeight||document.documentElement.clientHeight)},Element.prototype.almostInViewport=function(){var{top:t,height:e}=this.getBoundingClientRect();return t+e/1.5<=(window.innerHeight||document.documentElement.clientHeight)};const a=()=>{c(),r()};return window.addEventListener("load",(async()=>{let t=document.querySelectorAll(".pre-header-content");for(let e=t.length-1;e>=0;e--)t[e].classList.remove("pre-header-content"),await Et(200);!async function(){let t=document.querySelectorAll(".pre-intro-content");for(let e=0;e<t.length;e++)await Et(200),t[e].classList.remove("pre-intro-content");await Et(600);let e=document.querySelectorAll(".pre-socialcard");for(let t=0;t<e.length;t++)await Et(200),e[t].classList.remove("pre-socialcard")}(),c(),r()})),window.addEventListener("scroll",a),window.addEventListener("resize",a),[s,i]}return new class extends R{constructor(t){super(),O(this,t,Dt,Tt,i,{})}}({target:document.body})}();
