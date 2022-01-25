var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,c;function l(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function a(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function v(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function w(t){c=t}const x=[],k=[],j=[],H=[],T=Promise.resolve();let S=!1;function E(t){j.push(t)}const D=new Set;let _=0;function q(){const t=c;do{for(;_<x.length;){const t=x[_];_++,w(t),A(t.$$)}for(w(null),x.length=0,_=0;k.length;)k.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];D.has(e)||(D.add(e),e())}j.length=0}while(x.length);for(;H.length;)H.pop()();S=!1,D.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const C=new Set;let I;function L(){I={r:0,c:[],p:I}}function M(){I.r||s(I.c),I=I.p}function P(t,e){t&&t.i&&(C.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(C.has(t))return;C.add(t),I.c.push((()=>{C.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function J(t){t&&t.c()}function z(t,n,i,r){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,i),r||E((()=>{const n=l.map(e).filter(o);a?a.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(E)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,T.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,i,r,l,a,u,p=[-1]){const f=c;w(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:o.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=i?i(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&B(e,t)),n})):[],m.update(),h=!0,s(m.before_update),m.fragment=!!r&&r(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();o.intro&&P(e.$$.fragment),z(e,o.target,o.anchor,o.customElement),q()}w(f)}class V{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n,o,i,r,c,l,a,f,h,b,w,x;return{c(){n=m("div"),o=m("span"),o.innerHTML='<h2 class="svelte-c2ma29">TheSudarsanDev</h2>',i=g(),r=m("span"),c=m("button"),c.textContent="Home",l=g(),a=m("button"),a.textContent="About",f=g(),h=m("button"),h.textContent="Projects",$(o,"class","pre-header-content"),y(o,"display","inline-block"),$(c,"class","pre-header-content svelte-c2ma29"),$(a,"class","pre-header-content svelte-c2ma29"),$(h,"class","pre-header-content svelte-c2ma29"),$(r,"class","buttons svelte-c2ma29"),$(n,"class",b="header font-changa text-white position-fixed "+(e[0]?"scrolled-header":"")+" svelte-c2ma29")},m(t,e){p(t,n,e),u(n,o),u(n,i),u(n,r),u(r,c),u(r,l),u(r,a),u(r,f),u(r,h),w||(x=[v(c,"click",Y),v(a,"click",F("about")),v(h,"click",F("projects"))],w=!0)},p(t,[e]){1&e&&b!==(b="header font-changa text-white position-fixed "+(t[0]?"scrolled-header":"")+" svelte-c2ma29")&&$(n,"class",b)},i:t,o:t,d(t){t&&d(n),w=!1,s(x)}}}function F(t){return()=>{let e=document.getElementById(t).getBoundingClientRect().top-document.body.getBoundingClientRect().top;window.scrollTo({top:e,behavior:"smooth"})}}function Y(){window.scrollTo({top:0,behaviour:"smooth"})}function Z(t,e,n){let{scrolledHeader:s}=e;return t.$$set=t=>{"scrolledHeader"in t&&n(0,s=t.scrolledHeader)},[s]}class K extends V{constructor(t){super(),O(this,t,Z,R,i,{scrolledHeader:0})}}const Q={GitHub:"fab fa-github",NPM:"fab fa-npm",Docs:"fas fa-book",Link:"fas fa-link",Deno:"fas fa-archive"};function U(t,e){return{name:e,href:t,svg:Q[e]}}const W=[["javascript","plain"],["go","original"],["python","original"],["html5","original"],["css3","original"],["rust","plain"]],X=[{name:"github",url:"https://github.com/scientific-dev",color:"211f1f"},{name:"twitter",url:"https://twitter.com/ScientificDev",color:"1da1f2"},{name:"discord",url:"https://discord.gg/FrduEZd",color:"7298da"}],tt=[{name:"Spotify-api.js",description:"A npm package to interact with spotify api with node.js with oauth support. This package also supports caching!",languages:["Javascript","Typescript"],link:"https://npmjs.com/package/spotify-api.js",buttons:[U("https://github.com/spotify-api/spotify-api.js","GitHub"),U("https://npmjs.com/package/spotify-api.js","NPM")]},{name:"Instant.db",description:"Instant.db helps you to make database instantly using json files for Node.js!",languages:["Javascript"],link:"https://npmjs.com/package/instant.db",buttons:[U("https://github.com/Scientific-Dev/instant.db","GitHub"),U("https://npmjs.com/package/instant.db","Link")]},{name:"Ludo",description:"An awesome site to play singleplayer ludo for fun even with bots!",link:"https://scientific-dev.github.io/ludo?game",languages:["Svelte","Javascript"],buttons:[U("https://github.com/scientific-dev/ludo","GitHub")]},{name:"TimelineOfIndia",description:"Timeline of India is a website which shows the events from the very first of the Indus civilization of the Indian subcontinent to the current state of the Indian subcontinent.",languages:["Svelte","Javascript"],link:"https://timelineofindia.github.io",buttons:[U("https://github.com/timelineofindia","GitHub")]},{name:"EvtManager",description:"Simple to use eventemitter to manage your events synchronously and asynchronously too for Deno, Node and browser with a typesafe environment!",link:"https://github.com/scientific-dev/evtmanager",languages:["Javascript","Typescript"],buttons:[U("https://github.com/scientific-dev/evtmanager","GitHub"),U("https://npmjs.com/package/evtmanager","NPM"),U("https://deno.land/x/evtmanager","Deno")]},{name:"Templatify",description:"A cli to create local templates and copy templates from github which is saved within your pc and used easily!",languages:["Go"],link:"https://github.com/Scientific-Dev/templatify",buttons:[U("https://github.com/Scientific-Dev/templatify","GitHub")]},{name:"Emoji Canvas",description:"An easy to use module to write text with parsed emojis (supports discord emojis too) in canvas for deno!",languages:["Javascript","Typescript","Deno"],link:"https://github.com/Scientific-Dev/emoji-canvas",buttons:[U("https://github.com/Scientific-Dev/emoji-canvas","GitHub"),U("deno.land/x/emoji_canvas","Deno")]},{name:"Deno Headers Socket",description:"A custom socket for deno to add custom headers which lacks in the standard library!",link:"https://github.com/scientific-dev/custom-socket",languages:["Javascript","Typescript"],buttons:[U("https://github.com/scientific-dev/custom-socket","GitHub"),U("https://deno.land/x/custom_socket","Deno")]},{name:"Enhanced.db",description:"A npm package which is a wrapper for better-sqlite3! Currently not maintained...",languages:["Javascript"],link:"https://npmjs.com/package/enhanced.db",buttons:[U("https://github.com/Scientific-Dev/enhanced.db","GitHub"),U("https://npmjs.com/package/enhanced.db","Link")]},{name:"Spotify Types",description:"All the typings for the various Spotify API Object typings written in typescript.",languages:["Typescript"],link:"https://npmjs.com/package/spotify-types",buttons:[U("https://github.com/spotify-api/spotify-types","GitHub"),U("https://npmjs.com/package/spotify-types","NPM")]},{name:"Portfolio",description:"The site which you are watching now!",languages:["Javascript","Svelte"],link:"https://thesudarsandev.xyz/",buttons:[U("https://github.com/scientific-dev/portfolio","GitHub")]}];function et(t,e,n){const s=t.slice();return s[0]=e[n],s}function nt(e){let n,s,o,i,r,c;return{c(){n=m("a"),s=m("i"),i=g(),$(s,"class",o="fab fa-"+e[0].name+" svelte-1m23si5"),y(n,"--color","#"+e[0].color),$(n,"class",r="pre-socialcard socialcard social-"+e[0].name+" cursor-pointer svelte-1m23si5"),$(n,"href",c=e[0].url)},m(t,e){p(t,n,e),u(n,s),u(n,i)},p:t,d(t){t&&d(n)}}}function st(e){let n,s,o,i,r=X,c=[];for(let t=0;t<r.length;t+=1)c[t]=nt(et(e,r,t));return{c(){n=m("div"),s=m("div"),s.innerHTML='<h1 class="pre-intro-content svelte-1m23si5">TheSudarsanDev</h1> \n\t\t<h2 class="pre-intro-content svelte-1m23si5">Yet Another Random Developer</h2> \n\t\t<p class="pre-intro-content svelte-1m23si5">I&#39;m Sudarsan, a high school student who likes to do programming and stuff. I am a full stack developer and i mostly build user interfaces with the prominent programming language as Javascript.</p>',o=g(),i=m("div");for(let t=0;t<c.length;t+=1)c[t].c();$(s,"class","content"),$(i,"class","socialcards svelte-1m23si5"),$(n,"class","intro text-white font-changa flex svelte-1m23si5"),$(n,"id","intro")},m(t,e){p(t,n,e),u(n,s),u(n,o),u(n,i);for(let t=0;t<c.length;t+=1)c[t].m(i,null)},p(t,[e]){if(0&e){let n;for(r=X,n=0;n<r.length;n+=1){const s=et(t,r,n);c[n]?c[n].p(s,e):(c[n]=nt(s),c[n].c(),c[n].m(i,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&d(n),f(c,t)}}}class ot extends V{constructor(t){super(),O(this,t,null,st,i,{})}}function it(t){let e,n,s,o,i,r,c,a,f,v;const y=t[5].default,w=function(t,e,n,s){if(t){const o=l(t,e,n,s);return t[0](o)}}(y,t,t[4],null);return{c(){e=m("div"),n=m("h1"),s=m("span"),o=h("0"),i=h(t[2]),r=h("."),c=g(),a=h(t[3]),f=g(),w&&w.c(),$(s,"class","svelte-1qgrnyl"),$(n,"class","section-title m-0 svelte-1qgrnyl"),$(e,"class","section-inner svelte-1qgrnyl")},m(t,l){p(t,e,l),u(e,n),u(n,s),u(s,o),u(s,i),u(s,r),u(n,c),u(n,a),u(e,f),w&&w.m(e,null),v=!0},p(t,e){(!v||4&e)&&b(i,t[2]),(!v||8&e)&&b(a,t[3]),w&&w.p&&(!v||16&e)&&function(t,e,n,s,o,i){if(o){const r=l(e,n,s,i);t.p(r,o)}}(w,y,t,t[4],v?function(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}(y,t[4],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[4]),null)},i(t){v||(P(w,t),v=!0)},o(t){G(w,t),v=!1},d(t){t&&d(e),w&&w.d(t)}}}function rt(t){let e,n,s,o=t[1]&&it(t);return{c(){e=m("div"),o&&o.c(),$(e,"class",n="section font-changa text-white "+t[0]+" svelte-1qgrnyl"),$(e,"id",t[0])},m(t,n){p(t,e,n),o&&o.m(e,null),s=!0},p(t,[i]){t[1]?o?(o.p(t,i),2&i&&P(o,1)):(o=it(t),o.c(),P(o,1),o.m(e,null)):o&&(L(),G(o,1,1,(()=>{o=null})),M()),(!s||1&i&&n!==(n="section font-changa text-white "+t[0]+" svelte-1qgrnyl"))&&$(e,"class",n),(!s||1&i)&&$(e,"id",t[0])},i(t){s||(P(o),s=!0)},o(t){G(o),s=!1},d(t){t&&d(e),o&&o.d()}}}function ct(t,e,n){let{$$slots:s={},$$scope:o}=e,{id:i,display:r,i:c,name:l}=e;return t.$$set=t=>{"id"in t&&n(0,i=t.id),"display"in t&&n(1,r=t.display),"i"in t&&n(2,c=t.i),"name"in t&&n(3,l=t.name),"$$scope"in t&&n(4,o=t.$$scope)},[i,r,c,l,o,s]}class lt extends V{constructor(t){super(),O(this,t,ct,rt,i,{id:0,display:1,i:2,name:3})}}function at(t,e,n){const s=t.slice();return s[0]=e[n],s}function ut(e){let n,s,o;return{c(){var t,i;n=m("img"),t=n.src,i=s="https://raw.githubusercontent.com/devicons/devicon/master/icons/"+e[0][0]+"/"+e[0][0]+"-"+e[0][1]+".svg",r||(r=document.createElement("a")),r.href=i,t!==r.href&&$(n,"src",s),$(n,"draggable","false"),$(n,"alt",o=e[0][0]),$(n,"width","30"),$(n,"height","30"),$(n,"class","cursor-pointer")},m(t,e){p(t,n,e)},p:t,d(t){t&&d(n)}}}function pt(e){let n,s,o,i,r,c,l,a,v,b,w,x,k,j,H,T,S,E,D,_,q,A,C,I,L,M,P,G,J,z,N,B,O=W,V=[];for(let t=0;t<O.length;t+=1)V[t]=ut(at(e,O,t));return{c(){n=m("div"),s=m("div"),s.innerHTML='<div style="padding-right: 20px;"><div class="pfp cursor-pointer svelte-41fmc6"></div></div>',o=g(),i=m("div"),r=h("Hi, I'm "),c=m("strong"),c.textContent="Sudarsan",l=h(". I am a full stack web developer with "),a=m("strong"),a.textContent="TheSudarsanDev",v=h(" (abbrv. The Sudarsan Developer) as my internet username."),b=m("br"),w=m("br"),x=h("\r\n\t\tI am a high school student from "),k=m("strong"),k.textContent="India",j=h(" who started programming with "),H=m("strong"),H.textContent="Python",T=h(" in "),S=m("strong"),S.textContent="2018",E=h(" then consequently started with web development with "),D=m("strong"),D.textContent="Javascript",_=h(" and then started to learn programming languages such as \r\n\t\t"),q=m("strong"),q.textContent="Golang",A=h(", "),C=m("strong"),C.textContent="Rust",I=h(" and learning more. And i draw and animate rarely and one of the creation is my avatar."),L=m("br"),M=m("br"),P=h("\r\n\t\tThings i know:"),G=m("br"),J=g(),z=m("div");for(let t=0;t<V.length;t+=1)V[t].c();N=g(),B=m("div"),$(c,"class","svelte-41fmc6"),$(a,"class","svelte-41fmc6"),$(k,"class","svelte-41fmc6"),$(H,"class","svelte-41fmc6"),$(S,"class","svelte-41fmc6"),$(D,"class","svelte-41fmc6"),$(q,"class","svelte-41fmc6"),$(C,"class","svelte-41fmc6"),$(z,"class","flex flex-wrap"),y(z,"margin-top","6px"),y(B,"height","80px"),$(i,"class","text svelte-41fmc6"),$(n,"class","about-flex svelte-41fmc6")},m(t,e){p(t,n,e),u(n,s),u(n,o),u(n,i),u(i,r),u(i,c),u(i,l),u(i,a),u(i,v),u(i,b),u(i,w),u(i,x),u(i,k),u(i,j),u(i,H),u(i,T),u(i,S),u(i,E),u(i,D),u(i,_),u(i,q),u(i,A),u(i,C),u(i,I),u(i,L),u(i,M),u(i,P),u(i,G),u(i,J),u(i,z);for(let t=0;t<V.length;t+=1)V[t].m(z,null);u(i,N),u(i,B)},p(t,[e]){if(0&e){let n;for(O=W,n=0;n<O.length;n+=1){const s=at(t,O,n);V[n]?V[n].p(s,e):(V[n]=ut(s),V[n].c(),V[n].m(z,null))}for(;n<V.length;n+=1)V[n].d(1);V.length=O.length}},i:t,o:t,d(t){t&&d(n),f(V,t)}}}class dt extends V{constructor(t){super(),O(this,t,null,pt,i,{})}}function ft(t,e,n){const s=t.slice();return s[1]=e[n],s}function mt(t,e,n){const s=t.slice();return s[4]=e[n],s}function ht(t){let e,n,s=t[4]+"";return{c(){e=m("p"),n=h(s),$(e,"class","svelte-zpc6uo")},m(t,s){p(t,e,s),u(e,n)},p(t,e){1&e&&s!==(s=t[4]+"")&&b(n,s)},d(t){t&&d(e)}}}function gt(t){let e,n,s,o,i;return{c(){e=m("a"),n=m("i"),o=g(),$(n,"class",s=a(t[1].svg)+" svelte-zpc6uo"),$(e,"href",i=t[1].href),$(e,"class","cursor-pointer text-white svelte-zpc6uo")},m(t,s){p(t,e,s),u(e,n),u(e,o)},p(t,o){1&o&&s!==(s=a(t[1].svg)+" svelte-zpc6uo")&&$(n,"class",s),1&o&&i!==(i=t[1].href)&&$(e,"href",i)},d(t){t&&d(e)}}}function vt(e){let n,s,o,i,r,c,l,a,v,w,x,k,j,H,T,S,E,D=e[0].name+"",_=e[0].description+"",q=e[0].languages,A=[];for(let t=0;t<q.length;t+=1)A[t]=ht(mt(e,q,t));let C=e[0].buttons,I=[];for(let t=0;t<C.length;t+=1)I[t]=gt(ft(e,C,t));return{c(){n=m("div"),s=m("header"),o=m("div"),i=m("i"),r=g(),c=m("h3"),l=h(D),a=g(),v=m("p"),w=h(_),x=g(),k=m("div"),j=g(),H=m("footer"),T=m("span");for(let t=0;t<A.length;t+=1)A[t].c();S=g(),E=m("span");for(let t=0;t<I.length;t+=1)I[t].c();$(i,"class","far fa-folder-open fa-2x"),$(c,"class","svelte-zpc6uo"),$(o,"class","title svelte-zpc6uo"),$(v,"class","text-description m-0"),y(k,"height","10px"),$(T,"class","languages svelte-zpc6uo"),$(E,"class","svg-links svelte-zpc6uo"),$(n,"class","project-card pre-project-card flex svelte-zpc6uo")},m(t,e){p(t,n,e),u(n,s),u(s,o),u(o,i),u(o,r),u(o,c),u(c,l),u(s,a),u(s,v),u(v,w),u(s,x),u(s,k),u(n,j),u(n,H),u(H,T);for(let t=0;t<A.length;t+=1)A[t].m(T,null);u(H,S),u(H,E);for(let t=0;t<I.length;t+=1)I[t].m(E,null)},p(t,[e]){if(1&e&&D!==(D=t[0].name+"")&&b(l,D),1&e&&_!==(_=t[0].description+"")&&b(w,_),1&e){let n;for(q=t[0].languages,n=0;n<q.length;n+=1){const s=mt(t,q,n);A[n]?A[n].p(s,e):(A[n]=ht(s),A[n].c(),A[n].m(T,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=q.length}if(1&e){let n;for(C=t[0].buttons,n=0;n<C.length;n+=1){const s=ft(t,C,n);I[n]?I[n].p(s,e):(I[n]=gt(s),I[n].c(),I[n].m(E,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=C.length}},i:t,o:t,d(t){t&&d(n),f(A,t),f(I,t)}}}function $t(t,e,n){let{project:s}=e;return t.$$set=t=>{"project"in t&&n(0,s=t.project)},[s]}class bt extends V{constructor(t){super(),O(this,t,$t,vt,i,{project:0})}}function yt(t,e,n){const s=t.slice();return s[2]=e[n],s}function wt(t){let e,n;return e=new bt({props:{project:t[2]}}),{c(){J(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.project=t[2]),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function xt(t){let e,n,s,o,i,r,c,l,a,y=t[0]?"less":"all",w=tt.slice(0,t[0]?tt.length:6),x=[];for(let e=0;e<w.length;e+=1)x[e]=wt(yt(t,w,e));const k=t=>G(x[t],1,1,(()=>{x[t]=null}));return{c(){e=m("div");for(let t=0;t<x.length;t+=1)x[t].c();n=g(),s=m("p"),o=h("View "),i=h(y),r=h(" projects?"),$(e,"class","project-list flex flex-wrap svelte-r624wt"),$(s,"class","cursor-pointer project-card pre-project-card svelte-r624wt")},m(d,f){p(d,e,f);for(let t=0;t<x.length;t+=1)x[t].m(e,null);p(d,n,f),p(d,s,f),u(s,o),u(s,i),u(s,r),c=!0,l||(a=v(s,"click",t[1]),l=!0)},p(t,[n]){if(1&n){let s;for(w=tt.slice(0,t[0]?tt.length:6),s=0;s<w.length;s+=1){const o=yt(t,w,s);x[s]?(x[s].p(o,n),P(x[s],1)):(x[s]=wt(o),x[s].c(),P(x[s],1),x[s].m(e,null))}for(L(),s=w.length;s<x.length;s+=1)k(s);M()}(!c||1&n)&&y!==(y=t[0]?"less":"all")&&b(i,y)},i(t){if(!c){for(let t=0;t<w.length;t+=1)P(x[t]);c=!0}},o(t){x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)G(x[t]);c=!1},d(t){t&&d(e),f(x,t),t&&d(n),t&&d(s),l=!1,a()}}}function kt(t,e,n){let s=!1;return[s,()=>n(0,s=!s)]}class jt extends V{constructor(t){super(),O(this,t,kt,xt,i,{})}}const Ht={jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"};function Tt(t){return t.replace(/\[(.*?)\]\((.*?)\)/g,((t,e,n)=>("github"==n&&(n=`https://github.com/${e}`,e.includes("/")||(e=`@${e}`)),`<a href="${n}" target="_blank">${e}</a>`)))}function St(t,e,n){const s=t.slice();return s[1]=e[n],s}function Et(t){let e,n,s=t[1]+"";return{c(){e=m("p"),n=h(s),$(e,"class","label svelte-si4bh2")},m(t,s){p(t,e,s),u(e,n)},p(t,e){1&e&&s!==(s=t[1]+"")&&b(n,s)},d(t){t&&d(e)}}}function Dt(t){let e;return{c(){e=m("div"),$(e,"class","thumbnail svelte-si4bh2"),y(e,"background-image","url("+t[0].img+")")},m(t,n){p(t,e,n)},p(t,n){1&n&&y(e,"background-image","url("+t[0].img+")")},d(t){t&&d(e)}}}function _t(e){let n,s,o,i,r,c,l,a,v,w,x,k,j,H,T,S,E=e[0].name+"",D=Tt(e[0].description)+"",_=e[0].date+"",q=e[0].labels,A=[];for(let t=0;t<q.length;t+=1)A[t]=Et(St(e,q,t));let C=e[0].img&&Dt(e);return{c(){n=m("div"),s=m("div"),o=m("div"),i=m("div"),r=m("a"),c=m("h1"),l=h(E),v=g(),w=m("div");for(let t=0;t<A.length;t+=1)A[t].c();x=g(),k=m("p"),j=g(),C&&C.c(),H=g(),T=m("p"),S=h(_),$(c,"class","svelte-si4bh2"),$(r,"href",a=e[0].link),$(r,"target","_blank"),$(r,"class","svelte-si4bh2"),y(w,"margin-top","4px"),y(w,"margin-bottom","4px"),$(k,"class","text-description svelte-si4bh2"),$(i,"class","content svelte-si4bh2"),$(o,"class","flex svelte-si4bh2"),$(T,"class","date svelte-si4bh2"),$(s,"class","activity pre-activity"),$(n,"class","activity-wrapper")},m(t,e){p(t,n,e),u(n,s),u(s,o),u(o,i),u(i,r),u(r,c),u(c,l),u(i,v),u(i,w);for(let t=0;t<A.length;t+=1)A[t].m(w,null);u(i,x),u(i,k),k.innerHTML=D,u(o,j),C&&C.m(o,null),u(s,H),u(s,T),u(T,S)},p(t,[e]){if(1&e&&E!==(E=t[0].name+"")&&b(l,E),1&e&&a!==(a=t[0].link)&&$(r,"href",a),1&e){let n;for(q=t[0].labels,n=0;n<q.length;n+=1){const s=St(t,q,n);A[n]?A[n].p(s,e):(A[n]=Et(s),A[n].c(),A[n].m(w,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=q.length}1&e&&D!==(D=Tt(t[0].description)+"")&&(k.innerHTML=D),t[0].img?C?C.p(t,e):(C=Dt(t),C.c(),C.m(o,null)):C&&(C.d(1),C=null),1&e&&_!==(_=t[0].date+"")&&b(S,_)},i:t,o:t,d(t){t&&d(n),f(A,t),C&&C.d()}}}function qt(t,e,n){let{activity:s}=e;return t.$$set=t=>{"activity"in t&&n(0,s=t.activity)},[s]}class At extends V{constructor(t){super(),O(this,t,qt,_t,i,{activity:0})}}function Ct(t,e,n){const s=t.slice();return s[5]=e[n],s}function It(t){let e,n,s,o,i,r,c,l,a,y,w,x=t[3]?"more":"less",k=t[0].slice(0,5*t[1]),j=[];for(let e=0;e<k.length;e+=1)j[e]=Pt(Ct(t,k,e));const H=t=>G(j[t],1,1,(()=>{j[t]=null}));return{c(){e=m("div");for(let t=0;t<j.length;t+=1)j[t].c();n=g(),s=m("div"),o=m("div"),i=m("a"),r=h("View "),c=h(x),l=h("?"),$(i,"class","svelte-10rqvls"),$(o,"class","activity pre-activity"),$(s,"class","activity-wrapper"),$(e,"class","wrapper svelte-10rqvls")},m(d,f){p(d,e,f);for(let t=0;t<j.length;t+=1)j[t].m(e,null);u(e,n),u(e,s),u(s,o),u(o,i),u(i,r),u(i,c),u(i,l),a=!0,y||(w=v(i,"click",t[4]),y=!0)},p(t,s){if(3&s){let o;for(k=t[0].slice(0,5*t[1]),o=0;o<k.length;o+=1){const i=Ct(t,k,o);j[o]?(j[o].p(i,s),P(j[o],1)):(j[o]=Pt(i),j[o].c(),P(j[o],1),j[o].m(e,n))}for(L(),o=k.length;o<j.length;o+=1)H(o);M()}(!a||8&s)&&x!==(x=t[3]?"more":"less")&&b(c,x)},i(t){if(!a){for(let t=0;t<k.length;t+=1)P(j[t]);a=!0}},o(t){j=j.filter(Boolean);for(let t=0;t<j.length;t+=1)G(j[t]);a=!1},d(t){t&&d(e),f(j,t),y=!1,w()}}}function Lt(e){let n;return{c(){n=m("div"),n.innerHTML='<h1 class="svelte-10rqvls">Failed to load</h1> \n        <p class="svelte-10rqvls">Failed to load timeline.</p>',$(n,"class","loading svelte-10rqvls")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function Mt(e){let n;return{c(){n=m("div"),n.innerHTML='<h1 class="svelte-10rqvls">Loading Timeline</h1> \n        <p class="svelte-10rqvls">It takes us some time to load things.</p>',$(n,"class","loading svelte-10rqvls")},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function Pt(t){let e,n;return e=new At({props:{activity:t[5]}}),{c(){J(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},p(t,n){const s={};3&n&&(s.activity=t[5]),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Gt(t){let e,n,s,o;const i=[Mt,Lt,It],r=[];function c(t,e){return t[0]?t[2]?1:2:0}return e=c(t),n=r[e]=i[e](t),{c(){n.c(),s=h("")},m(t,n){r[e].m(t,n),p(t,s,n),o=!0},p(t,[o]){let l=e;e=c(t),e===l?r[e].p(t,o):(L(),G(r[l],1,1,(()=>{r[l]=null})),M(),n=r[e],n?n.p(t,o):(n=r[e]=i[e](t),n.c()),P(n,1),n.m(s.parentNode,s))},i(t){o||(P(n),o=!0)},o(t){G(n),o=!1},d(t){r[e].d(t),t&&d(s)}}}function Jt(t,e,n){let s=!1,o=!1,i=1,r=null;s||fetch("/activities.json").then((t=>t.json())).then((t=>n(0,s=function(t){let e=[],n=Object.entries(t);for(let t=0;t<n.length;t++){let[s,o]=n[t];s=` ${Ht[s.slice(0,3)]} 20${s.slice(3)}`;for(let t=0;t<o.length;t++)o[t].date+=s;e.push(...o)}return e}(t))),(t=>{console.log(t),n(2,o=!0)}));return t.$$.update=()=>{3&t.$$.dirty&&n(3,r=5*i<s?.length)},[s,i,o,r,()=>n(1,i=r?i+1:1)]}class zt extends V{constructor(t){super(),O(this,t,Jt,Gt,i,{})}}function Nt(t){let e,n;return e=new dt({}),{c(){J(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Bt(t){let e,n;return e=new jt({}),{c(){J(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ot(t){let e,n;return e=new zt({}),{c(){J(e.$$.fragment)},m(t,s){z(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Vt(t){let e,n,s,o,i,r,c,l,a,u,f,h,v,b;return s=new K({props:{scrolledHeader:t[0]}}),i=new ot({}),c=new lt({props:{i:"1",id:"about",name:"About me",display:t[1].about,$$slots:{default:[Nt]},$$scope:{ctx:t}}}),a=new lt({props:{i:"2",id:"projects",name:"Projects",display:t[1].projects,$$slots:{default:[Bt]},$$scope:{ctx:t}}}),f=new lt({props:{i:"3",id:"timeline",name:"Timeline",display:t[1].timeline,$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=g(),J(s.$$.fragment),o=g(),J(i.$$.fragment),r=g(),J(c.$$.fragment),l=g(),J(a.$$.fragment),u=g(),J(f.$$.fragment),h=g(),v=m("div"),v.textContent=`© TheSudarsanDev ${(new Date).getFullYear()}`,$(e,"class","background position-fixed svelte-1q5td74"),$(v,"class","footer text-white font-changa svelte-1q5td74")},m(t,d){p(t,e,d),p(t,n,d),z(s,t,d),p(t,o,d),z(i,t,d),p(t,r,d),z(c,t,d),p(t,l,d),z(a,t,d),p(t,u,d),z(f,t,d),p(t,h,d),p(t,v,d),b=!0},p(t,[e]){const n={};1&e&&(n.scrolledHeader=t[0]),s.$set(n);const o={};2&e&&(o.display=t[1].about),64&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const i={};2&e&&(i.display=t[1].projects),64&e&&(i.$$scope={dirty:e,ctx:t}),a.$set(i);const r={};2&e&&(r.display=t[1].timeline),64&e&&(r.$$scope={dirty:e,ctx:t}),f.$set(r)},i(t){b||(P(s.$$.fragment,t),P(i.$$.fragment,t),P(c.$$.fragment,t),P(a.$$.fragment,t),P(f.$$.fragment,t),b=!0)},o(t){G(s.$$.fragment,t),G(i.$$.fragment,t),G(c.$$.fragment,t),G(a.$$.fragment,t),G(f.$$.fragment,t),b=!1},d(t){t&&d(e),t&&d(n),N(s,t),t&&d(o),N(i,t),t&&d(r),N(c,t),t&&d(l),N(a,t),t&&d(u),N(f,t),t&&d(h),t&&d(v)}}}function Rt(t){return new Promise((e=>setTimeout(e,t)))}async function Ft(t,e){let n=document.querySelectorAll(`.${t}`);for(let s=0;s<n.length;s++)n[s][e]()&&(n[s].classList.remove(t),await Rt(1e3))}function Yt(t,e,n){const s=["about","projects","timeline"];let o=!1,i={about:!1,projects:!1};function r(){n(0,o=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>20)}async function c(){for(let t=0;t<s.length;t++){let e=s[t];!i[e]&&document.getElementById(e).hasPartInViewport()&&n(1,i=Object.defineProperty(i,e,{value:!0}))}Ft("pre-project-card","inViewport"),Ft("pre-activity","almostInViewport")}Element.prototype.inViewport=function(){var{top:t,bottom:e}=this.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t-n<=0&&e-n<=0},Element.prototype.hasPartInViewport=function(){var{top:t,height:e}=this.getBoundingClientRect();return t+e/3<=(window.innerHeight||document.documentElement.clientHeight)},Element.prototype.almostInViewport=function(){var{top:t,height:e}=this.getBoundingClientRect();return t+e/1.5<=(window.innerHeight||document.documentElement.clientHeight)};const l=()=>{c(),r()};return window.addEventListener("load",(async()=>{let t=document.querySelectorAll(".pre-header-content");for(let e=t.length-1;e>=0;e--)t[e].classList.remove("pre-header-content"),await Rt(200);!async function(){let t=document.querySelectorAll(".pre-intro-content");for(let e=0;e<t.length;e++)await Rt(200),t[e].classList.remove("pre-intro-content");await Rt(600);let e=document.querySelectorAll(".pre-socialcard");for(let t=0;t<e.length;t++)await Rt(200),e[t].classList.remove("pre-socialcard")}(),c(),r()})),window.addEventListener("scroll",l),window.addEventListener("resize",l),[o,i]}return new class extends V{constructor(t){super(),O(this,t,Yt,Vt,i,{})}}({target:document.body})}();
