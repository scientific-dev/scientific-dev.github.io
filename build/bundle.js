var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a,c;function r(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function g(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function y(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function w(t){c=t}function v(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.after_update.push(t)}const k=[],$=[],j=[],x=[],C=Promise.resolve();let S=!1;function T(t){j.push(t)}let G=!1;const _=new Set;function E(){if(!G){G=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];w(n),H(n.$$)}for(w(null),k.length=0;$.length;)$.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];_.has(n)||(_.add(n),n())}j.length=0}while(k.length);for(;x.length;)x.pop()();S=!1,G=!1,_.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const L=new Set;function A(t,n){-1===t.$$.dirty[0]&&(k.push(t),S||(S=!0,C.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function I(s,a,r,l,p,d,f,g=[-1]){const h=c;w(s);const m=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:p,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:a.context||[]),callbacks:e(),dirty:g,skip_bound:!1,root:a.target||h.$$.root};f&&f(m.root);let b=!1;if(m.ctx=r?r(s,a.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&p(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),b&&A(s,t)),n})):[],m.update(),b=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();a.intro&&((y=s.$$.fragment)&&y.i&&(L.delete(y),y.i(v))),function(t,e,s,a){const{fragment:c,on_mount:r,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,s),a||T((()=>{const e=r.map(n).filter(i);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(T)}(s,a.target,a.anchor,a.customElement),E()}var y,v;w(h)}const N={GitHub:"fab fa-github",NPM:"fab fa-npm",Docs:"fas fa-book",Link:"fas fa-link",Deno:"fas fa-archive"};function M(t,n){return{name:n,href:t,svg:N[n]}}var D=[{name:"Spotify-api.js",description:"A npm package to interact with spotify api with node.js with oauth support. This package also supports caching!",languages:["Typescript","Javascript"],link:"https://npmjs.com/package/spotify-api.js",buttons:[M("https://github.com/spotify-api/spotify-api.js","GitHub"),M("https://npmjs.com/package/spotify-api.js","NPM"),M("https://spotify-api.js.org","Docs")]},{name:"Enhanced.db",description:"A npm package which is a wrapper for better-sqlite3! Currently not maintained...",languages:["Javascript"],link:"https://npmjs.com/package/enhanced.db",buttons:[M("https://github.com/Scientific-Guy/enhanced.db","GitHub"),M("https://npmjs.com/package/enhanced.db","Link")]},{name:"Instant.db",description:"Instant.db helps you to make database instantly using json files for Node.js!",languages:["React","Next.js","Javascript"],link:"https://npmjs.com/package/instant.db",buttons:[M("https://github.com/Scientific-Guy/instant.db","GitHub"),M("https://npmjs.com/package/instant.db","Link")]},{name:"Listcord",description:"Listcord is a discord botlist with a clean environment with many features with 100+ bots!",languages:["React","Next.js","Javascript"],link:"https://listcord.gg",buttons:[M("https://listcord.gg","Link")]},{name:"Templatify",description:"A cli to create local templates and copy templates from github which is saved within your pc and used easily!",languages:["Go"],link:"https://github.com/Scientific-Guy/templatify",buttons:[M("https://github.com/Scientific-Guy/templatify","GitHub")]},{name:"EvtManager",description:"Simple to use eventemitter to manage your events synchronously and asynchronously too for Deno, Node and browser with a typesafe environment!",link:"https://github.com/scientific-guy/evtmanager",languages:["Javascript","Typescript"],buttons:[M("https://npmjs.com/package/evtmanager","NPM"),M("https://deno.land/x/evtmanager","Deno"),M("https://github.com/scientific-guy/evtmanager","GitHub")]},{name:"Emoji Canvas",description:"An easy to use module to write text with parsed emojis (supports discord emojis too) in canvas for deno!",languages:["Javascript","Typescript"],link:"https://github.com/Scientific-Guy/emoji-canvas",buttons:[M("deno.land/x/emoji_canvas","Deno"),M("https://github.com/Scientific-Guy/emoji-canvas","GitHub")]},{name:"Deno Headers Socket",description:"A custom socket for deno to add custom headers which lacks in the standard library!",link:"https://github.com/scientific-guy/custom-socket",languages:["Javascript","Typescript"],buttons:[M("https://deno.land/x/custom_socket","Deno"),M("https://github.com/scientific-guy/custom-socket")]}];function B(t,n,e){const o=t.slice();return o[12]=n[e],o}function R(t,n,e){const o=t.slice();return o[15]=n[e],o}function J(t,n,e){const o=t.slice();return o[18]=n[e],o}function P(t,n,e){const o=t.slice();return o[21]=n[e],o}function O(t,n,e){const o=t.slice();return o[24]=n[e],o}function V(n){let e,o,i,s,a,c,p;return{c(){e=d("a"),o=d("i"),s=g(),m(o,"class",i=`fab fa-${n[24].name}`),m(e,"style",a=`background-color: #${n[24].color};`),m(e,"class",c=`socialcard social-${n[24].name}`),m(e,"href",p=n[24].url)},m(t,n){l(t,e,n),r(e,o),r(e,s)},p:t,d(t){t&&u(e)}}}function q(n){let e,o,i;return{c(){var t,s;e=d("img"),t=e.src,s=o=`https://raw.githubusercontent.com/devicons/devicon/master/icons/${n[21].split("-")[0]}/${n[21]}.svg`,a||(a=document.createElement("a")),a.href=s,t!==a.href&&m(e,"src",o),m(e,"alt",i=n[21].split("-")[0]),m(e,"draggable","false"),y(e,"cursor","pointer"),m(e,"class","diminished-devicon")},m(t,n){l(t,e,n)},p:t,d(t){t&&u(e)}}}function F(t){let n,e,o,i;return{c(){n=d("a"),e=d("i"),m(e,"class",o=t[18].svg),m(n,"href",i=t[18].href)},m(t,o){l(t,n,o),r(n,e)},p(t,s){1&s&&o!==(o=t[18].svg)&&m(e,"class",o),1&s&&i!==(i=t[18].href)&&m(n,"href",i)},d(t){t&&u(n)}}}function z(t){let n,e,o=t[15]+"";return{c(){n=d("p"),e=f(o),m(n,"class","lang")},m(t,o){l(t,n,o),r(n,e)},p(t,n){1&n&&o!==(o=t[15]+"")&&b(e,o)},d(t){t&&u(n)}}}function Y(t){let n,e,o,i,s,a,c,h,w,v,k,$,j,x,C,S,T,G,_=t[12].name+"",E=t[12].description+"",H=t[12].buttons,L=[];for(let n=0;n<H.length;n+=1)L[n]=F(J(t,H,n));let A=t[12].languages,I=[];for(let n=0;n<A.length;n+=1)I[n]=z(R(t,A,n));return{c(){n=d("div"),e=d("div"),o=d("i"),i=g(),s=d("span"),a=d("a"),c=d("i"),w=g();for(let t=0;t<L.length;t+=1)L[t].c();v=g(),k=d("h2"),$=f(_),j=g(),x=d("p"),C=f(E),S=g(),T=d("span");for(let t=0;t<I.length;t+=1)I[t].c();G=g(),m(o,"class","far fa-folder-open fa-2x"),m(c,"class","fas fa-external-link-alt"),m(a,"href",h=t[12].link),y(s,"float","right"),m(e,"class","svg-row"),m(x,"class","description"),y(T,"display","inline-block"),y(T,"margin-left","-2px"),y(T,"margin-bottom","-10px"),m(n,"class","project-card opacity-0")},m(t,u){l(t,n,u),r(n,e),r(e,o),r(e,i),r(e,s),r(s,a),r(a,c),r(s,w);for(let t=0;t<L.length;t+=1)L[t].m(s,null);r(n,v),r(n,k),r(k,$),r(n,j),r(n,x),r(x,C),r(n,S),r(n,T);for(let t=0;t<I.length;t+=1)I[t].m(T,null);r(n,G)},p(t,n){if(1&n&&h!==(h=t[12].link)&&m(a,"href",h),1&n){let e;for(H=t[12].buttons,e=0;e<H.length;e+=1){const o=J(t,H,e);L[e]?L[e].p(o,n):(L[e]=F(o),L[e].c(),L[e].m(s,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=H.length}if(1&n&&_!==(_=t[12].name+"")&&b($,_),1&n&&E!==(E=t[12].description+"")&&b(C,E),1&n){let e;for(A=t[12].languages,e=0;e<A.length;e+=1){const o=R(t,A,e);I[e]?I[e].p(o,n):(I[e]=z(o),I[e].c(),I[e].m(T,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=A.length}},d(t){t&&u(n),p(L,t),p(I,t)}}}function U(n){let e,i,s,a,c,w,v,k,$,j,x,C,S,T,G,_,E,H,L,A,I,N,M,D,R,J,F,z,U,Z,Q,K,X,tt,nt,et,ot,it,st,at,ct,rt,lt,ut,pt,dt=n[0].length<=6?"more":"less",ft=n[4],gt=[];for(let t=0;t<ft.length;t+=1)gt[t]=V(O(n,ft,t));let ht=n[3],mt=[];for(let t=0;t<ht.length;t+=1)mt[t]=q(P(n,ht,t));let bt=n[0],yt=[];for(let t=0;t<bt.length;t+=1)yt[t]=Y(B(n,bt,t));return{c(){e=d("div"),i=g(),s=d("div"),a=d("span"),a.innerHTML="<h2>Scientific Guy</h2>",c=g(),w=d("span"),v=d("button"),v.textContent="Home",k=g(),$=d("button"),$.textContent="About",j=g(),x=d("button"),x.textContent="Projects",S=g(),T=d("div"),G=d("div"),_=d("h1"),_.textContent="Scientific Guy",E=g(),H=d("p"),L=f(n[1]),A=g(),I=d("p"),I.textContent="I am a high school student who likes to do programming and stuff. I am a full stack developer and I mostly build user interfaces with the prominent programming language as Javascript.",N=g(),M=d("div");for(let t=0;t<gt.length;t+=1)gt[t].c();D=g(),R=d("div"),J=d("div"),J.innerHTML='<span class="section-title"><span>01.</span> About me</span> \n        <div class="section-content"><div><div><img class="pfp" src="/branding96.png?" alt="Scientific Guy"/></div></div> \n\n\t\t\t<div><span>Name:</span> Scientific Guy (Not real name though)<br/> \n\t\t\t\t<span>Mail:</span> scientificguy007@gmail.com<br/> \n\t\t\t\t<span>Aka:</span> NO U, Science Spot<br/> \n\t\t\t\t<span>Location:</span>  <img class="in-flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/in.svg" alt="Indian Flag"/> India<br/> \n\t\t\t\t<span>Favourite Languages:</span> Javascript, Rust and Golang<br/><br/> \n\n\t\t\t\t<p id="abt-content" style="display: inline-block; margin: 0;"></p></div></div>',F=g(),z=d("div"),U=d("span"),U.innerHTML="<span>02.</span> What do i know?",Z=g(),Q=d("div");for(let t=0;t<mt.length;t+=1)mt[t].c();K=g(),X=d("div"),tt=d("span"),tt.innerHTML="<span>03.</span> Projects",nt=g(),et=d("div");for(let t=0;t<yt.length;t+=1)yt[t].c();ot=g(),it=d("p"),st=f("Show "),at=f(dt),ct=f(" projects?"),rt=g(),lt=d("div"),lt.textContent="© Scientific-Guy 2021",m(e,"class","background"),y(a,"display","inline-block"),m(w,"class","buttons"),m(s,"class",C="header "+(n[2]?"scrolled-header":"")),m(G,"class","content"),m(M,"class","socialcards"),m(T,"class","cover"),m(J,"class","section abt-me"),m(J,"id","abt-me"),m(U,"class","section-title"),m(Q,"class","section-content"),y(Q,"margin-top","10px"),m(z,"class","section wdik"),y(z,"margin-top","20px"),m(z,"id","wdik"),m(tt,"class","section-title"),m(et,"class","section-content"),y(et,"margin-top","10px"),y(it,"font-family","Changa"),y(it,"color","white"),y(it,"font-size","18px"),y(it,"cursor","pointer"),m(X,"class","section projects"),y(X,"margin-top","20px"),m(X,"id","projects"),m(R,"class","rest-body"),m(lt,"class","footer")},m(t,o){l(t,e,o),l(t,i,o),l(t,s,o),r(s,a),r(s,c),r(s,w),r(w,v),r(w,k),r(w,$),r(w,j),r(w,x),l(t,S,o),l(t,T,o),r(T,G),r(G,_),r(G,E),r(G,H),r(H,L),r(G,A),r(G,I),r(T,N),r(T,M);for(let t=0;t<gt.length;t+=1)gt[t].m(M,null);l(t,D,o),l(t,R,o),r(R,J),r(R,F),r(R,z),r(z,U),r(z,Z),r(z,Q);for(let t=0;t<mt.length;t+=1)mt[t].m(Q,null);r(R,K),r(R,X),r(X,tt),r(X,nt),r(X,et);for(let t=0;t<yt.length;t+=1)yt[t].m(et,null);r(X,ot),r(X,it),r(it,st),r(it,at),r(it,ct),l(t,rt,o),l(t,lt,o),ut||(pt=[h(v,"click",n[5]),h($,"click",W("abt-me")),h(x,"click",W("projects")),h(it,"click",n[6])],ut=!0)},p(t,[n]){if(4&n&&C!==(C="header "+(t[2]?"scrolled-header":""))&&m(s,"class",C),2&n&&b(L,t[1]),16&n){let e;for(ft=t[4],e=0;e<ft.length;e+=1){const o=O(t,ft,e);gt[e]?gt[e].p(o,n):(gt[e]=V(o),gt[e].c(),gt[e].m(M,null))}for(;e<gt.length;e+=1)gt[e].d(1);gt.length=ft.length}if(8&n){let e;for(ht=t[3],e=0;e<ht.length;e+=1){const o=P(t,ht,e);mt[e]?mt[e].p(o,n):(mt[e]=q(o),mt[e].c(),mt[e].m(Q,null))}for(;e<mt.length;e+=1)mt[e].d(1);mt.length=ht.length}if(1&n){let e;for(bt=t[0],e=0;e<bt.length;e+=1){const o=B(t,bt,e);yt[e]?yt[e].p(o,n):(yt[e]=Y(o),yt[e].c(),yt[e].m(et,null))}for(;e<yt.length;e+=1)yt[e].d(1);yt.length=bt.length}1&n&&dt!==(dt=t[0].length<=6?"more":"less")&&b(at,dt)},i:t,o:t,d(t){t&&u(e),t&&u(i),t&&u(s),t&&u(S),t&&u(T),p(gt,t),t&&u(D),t&&u(R),p(mt,t),p(yt,t),t&&u(rt),t&&u(lt),ut=!1,o(pt)}}}function W(t){return()=>{let n=document.getElementById(t).getBoundingClientRect().top-document.body.getBoundingClientRect().top-100;window.scrollTo({top:n,behavior:"smooth"})}}function Z(t){return new Promise((n=>setTimeout(n,t)))}function Q(t,n,e){const o=["A Developer","An Animator"," A Youtuber"];let i=D.slice(0,6),s="A Developer",a=!1,c={projectCards:[],aboutContentViewed:!1,wdikContentViewed:!1};function r(){for(var t=0;t<c.projectCards.length;t++){var n=c.projectCards[t],{top:e,bottom:o}=n.getBoundingClientRect();e-window.innerHeight<=0&&o-window.innerHeight<=0&&n.classList.remove("opacity-0")}}async function l(){if(!c.aboutContentViewed){var t=document.getElementById("abt-content"),{top:n,bottom:e}=t.getBoundingClientRect();if(n-window.innerHeight<=0&&e-window.innerHeight<=0){c.aboutContentViewed=!0;const n=async n=>{let e=n.split("");for(let n=0;n<e.length;n++)await Z(50),t.innerHTML+=e[n]};await n("I started programming and making web apps in 2018 with python then learnt Node.js and Typescript then slowly started learning web frameworks such as React, Next.js, Svelte and then programming languages such as Rust, Golang, etc!\nI love making web apps so i always work on web application projects! I rarely make softwares and mobile apps. I animate and draw when i am at the peak of my boredom."),t.innerHTML+="<br/><br/><span>Warning: </span>",await n("The avatar which is been used here is made by me so kindly contact me before using it.")}}}async function u(){if(!c.wdikContentViewed){var t=document.getElementById("wdik"),{top:n,bottom:e}=t.getBoundingClientRect();if(n-window.innerHeight<=0&&e-window.innerHeight<=0){c.wdikContentViewed=!0;var o=document.querySelectorAll(".wdik img");for(let t=0;t<o.length;t++)await Z(250),o[t].classList.remove("diminished-devicon")}}}v((()=>{c.projectCards=document.querySelectorAll(".opacity-0"),r()})),window.addEventListener("load",(()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;e(2,a=t>20)})),window.addEventListener("resize",(()=>{c.projectCards=document.querySelectorAll(".project-card"),r(),l(),u()})),window.addEventListener("scroll",(()=>{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;e(2,a=t>20),r(),l(),u()})),setInterval((()=>e(1,s=o[Math.floor(Math.random()*o.length)])),5e4);return[i,s,a,["rust-plain","go-original","javascript-plain","python-original","html5-original","css3-original","bash-original"],[{name:"youtube",url:"https://www.youtube.com/channel/UCu6B4Z62fiCT_mwwHlc84iQ",color:"ff0000"},{name:"github",url:"https://github.com/Scientific-Guy",color:"211f1f"},{name:"twitter",url:"https://twitter.com/ScientificDev",color:"1da1f2"},{name:"discord",url:"https://discord.gg/FrduEZd",color:"7298da"}],()=>window.scrollTo({top:0,behaviour:"smooth"}),()=>e(0,i=i.length<=6?D:D.slice(0,6))]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length )&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),I(this,t,Q,U,s,{})}}({target:document.body})}();
