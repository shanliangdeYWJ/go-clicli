import{Y as l,p as T,l as H,s as G}from"./index.049a8008.js";import{g as j}from"./post.f43b95e2.js";var I=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},F={exports:{}};(function(f){(function(d){function N(n,i){var t=(n&65535)+(i&65535),c=(n>>16)+(i>>16)+(t>>16);return c<<16|t&65535}function w(n,i){return n<<i|n>>>32-i}function b(n,i,t,c,s,p){return N(w(N(N(i,n),N(c,p)),s),t)}function u(n,i,t,c,s,p,g){return b(i&t|~i&c,n,i,s,p,g)}function m(n,i,t,c,s,p,g){return b(i&c|t&~c,n,i,s,p,g)}function v(n,i,t,c,s,p,g){return b(i^t^c,n,i,s,p,g)}function h(n,i,t,c,s,p,g){return b(t^(i|~c),n,i,s,p,g)}function A(n,i){n[i>>5]|=128<<i%32,n[(i+64>>>9<<4)+14]=i;var t,c,s,p,g,e=1732584193,r=-271733879,a=-1732584194,o=271733878;for(t=0;t<n.length;t+=16)c=e,s=r,p=a,g=o,e=u(e,r,a,o,n[t],7,-680876936),o=u(o,e,r,a,n[t+1],12,-389564586),a=u(a,o,e,r,n[t+2],17,606105819),r=u(r,a,o,e,n[t+3],22,-1044525330),e=u(e,r,a,o,n[t+4],7,-176418897),o=u(o,e,r,a,n[t+5],12,1200080426),a=u(a,o,e,r,n[t+6],17,-1473231341),r=u(r,a,o,e,n[t+7],22,-45705983),e=u(e,r,a,o,n[t+8],7,1770035416),o=u(o,e,r,a,n[t+9],12,-1958414417),a=u(a,o,e,r,n[t+10],17,-42063),r=u(r,a,o,e,n[t+11],22,-1990404162),e=u(e,r,a,o,n[t+12],7,1804603682),o=u(o,e,r,a,n[t+13],12,-40341101),a=u(a,o,e,r,n[t+14],17,-1502002290),r=u(r,a,o,e,n[t+15],22,1236535329),e=m(e,r,a,o,n[t+1],5,-165796510),o=m(o,e,r,a,n[t+6],9,-1069501632),a=m(a,o,e,r,n[t+11],14,643717713),r=m(r,a,o,e,n[t],20,-373897302),e=m(e,r,a,o,n[t+5],5,-701558691),o=m(o,e,r,a,n[t+10],9,38016083),a=m(a,o,e,r,n[t+15],14,-660478335),r=m(r,a,o,e,n[t+4],20,-405537848),e=m(e,r,a,o,n[t+9],5,568446438),o=m(o,e,r,a,n[t+14],9,-1019803690),a=m(a,o,e,r,n[t+3],14,-187363961),r=m(r,a,o,e,n[t+8],20,1163531501),e=m(e,r,a,o,n[t+13],5,-1444681467),o=m(o,e,r,a,n[t+2],9,-51403784),a=m(a,o,e,r,n[t+7],14,1735328473),r=m(r,a,o,e,n[t+12],20,-1926607734),e=v(e,r,a,o,n[t+5],4,-378558),o=v(o,e,r,a,n[t+8],11,-2022574463),a=v(a,o,e,r,n[t+11],16,1839030562),r=v(r,a,o,e,n[t+14],23,-35309556),e=v(e,r,a,o,n[t+1],4,-1530992060),o=v(o,e,r,a,n[t+4],11,1272893353),a=v(a,o,e,r,n[t+7],16,-155497632),r=v(r,a,o,e,n[t+10],23,-1094730640),e=v(e,r,a,o,n[t+13],4,681279174),o=v(o,e,r,a,n[t],11,-358537222),a=v(a,o,e,r,n[t+3],16,-722521979),r=v(r,a,o,e,n[t+6],23,76029189),e=v(e,r,a,o,n[t+9],4,-640364487),o=v(o,e,r,a,n[t+12],11,-421815835),a=v(a,o,e,r,n[t+15],16,530742520),r=v(r,a,o,e,n[t+2],23,-995338651),e=h(e,r,a,o,n[t],6,-198630844),o=h(o,e,r,a,n[t+7],10,1126891415),a=h(a,o,e,r,n[t+14],15,-1416354905),r=h(r,a,o,e,n[t+5],21,-57434055),e=h(e,r,a,o,n[t+12],6,1700485571),o=h(o,e,r,a,n[t+3],10,-1894986606),a=h(a,o,e,r,n[t+10],15,-1051523),r=h(r,a,o,e,n[t+1],21,-2054922799),e=h(e,r,a,o,n[t+8],6,1873313359),o=h(o,e,r,a,n[t+15],10,-30611744),a=h(a,o,e,r,n[t+6],15,-1560198380),r=h(r,a,o,e,n[t+13],21,1309151649),e=h(e,r,a,o,n[t+4],6,-145523070),o=h(o,e,r,a,n[t+11],10,-1120210379),a=h(a,o,e,r,n[t+2],15,718787259),r=h(r,a,o,e,n[t+9],21,-343485551),e=N(e,c),r=N(r,s),a=N(a,p),o=N(o,g);return[e,r,a,o]}function M(n){var i,t="",c=n.length*32;for(i=0;i<c;i+=8)t+=String.fromCharCode(n[i>>5]>>>i%32&255);return t}function C(n){var i,t=[];for(t[(n.length>>2)-1]=void 0,i=0;i<t.length;i+=1)t[i]=0;var c=n.length*8;for(i=0;i<c;i+=8)t[i>>5]|=(n.charCodeAt(i/8)&255)<<i%32;return t}function S(n){return M(A(C(n),n.length*8))}function B(n,i){var t,c=C(n),s=[],p=[],g;for(s[15]=p[15]=void 0,c.length>16&&(c=A(c,n.length*8)),t=0;t<16;t+=1)s[t]=c[t]^909522486,p[t]=c[t]^1549556828;return g=A(s.concat(C(i)),512+i.length*8),M(A(p.concat(g),512+128))}function k(n){var i="0123456789abcdef",t="",c,s;for(s=0;s<n.length;s+=1)c=n.charCodeAt(s),t+=i.charAt(c>>>4&15)+i.charAt(c&15);return t}function $(n){return unescape(encodeURIComponent(n))}function y(n){return S($(n))}function E(n){return k(y(n))}function D(n,i){return B($(n),$(i))}function U(n,i){return k(D(n,i))}function q(n,i,t){return i?t?D(i,n):U(i,n):t?y(n):E(n)}f.exports?f.exports=q:d.md5=q})(I)})(F);var L=F.exports;function P(f){return/^[0-9]+$/.test(f)?`http://q1.qlogo.cn/g?b=qq&nk=${f}&s=640`:`https://sdn.geekzu.org/avatar/${L(f)}?s=100&d=retro`}function R(f){let d=f.match(/suo(.+?)\)/i);return d?d[1].slice(2):"https://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg"}function z(){let f=JSON.parse(window.localStorage.getItem("user"));return l("header",null,l("div",{className:"wrap flex"},l("h1",null,"clicli!"),l("div",{className:"search"},l("input",{type:"text",placeholder:"\u641C\u4E00\u4E0B\u4E0B\u83CA\u82B1\u53C8\u4E0D\u4F1A\u574F\u{1F60F}"})),l("div",{className:"biu"},l("li",null,l("i",{className:"icon-font icon-download"}),l("div",{className:"download"},"Get APP")),l("li",null,l("i",{className:"icon-font icon-upload"}),l("div",{className:"download"},"Upload")),l("li",{className:"avatar"},l("img",{src:P(f.qq),alt:""})))))}function O(f,d,N,w,b,u){return j(`https://api.clicli.cc/posts?status=${b||"public"}&sort=${f}&tag=${d}&uid=${u||""}&page=${N}&pageSize=${w}`)}function J(){return j("https://api.clicli.cc/rank")}function V({posts:f}){return l("section",{className:"a"},f.length>0&&f.map(d=>l("li",{onClick:()=>T(`/play/gv${d.id}`),key:d.id},l("div",{className:"item"},l("div",{className:"cover"},l("img",{src:R(d.content)})),l("div",{className:"title"},d.title)))))}function Y({posts:f}){return l("section",{className:"b"},f.length>0&&f.map(d=>l("li",{onClick:()=>T(`/play/gv${d.id}`),key:d.id},l("div",{className:"item"},l("div",{className:"cover"},l("img",{src:R(d.content)})),l("div",{className:"title"},d.title)))))}function W(){const[f,d]=H([]),[N,w]=H([]);G(()=>{O("","\u63A8\u8350",1,8).then(u=>{d(u.posts),J().then(m=>{w(m.posts.splice(0,8))})})},[]);const b={home:"Home",list:"Index"};return l("div",null,l(z,null),l("div",{className:"wrap"},l("nav",null,Object.keys(b).map(u=>l("li",null,l("i",{className:`icon-font icon-${u}`}),b[u]))),l("main",null,l("h1",null,"UGC Videos"),l(V,{posts:f}),l("h1",null,"Top10 Animes"),l(Y,{posts:N}))))}export{W as default};