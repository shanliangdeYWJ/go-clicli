import{l as i,Y as t,A as p,p as r}from"./index.4557317b.js";function h(l,u){return new Promise(o=>{fetch(l,{method:"post",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(e=>{o(e)})})}function d(){const[l,u]=i(""),[o,e]=i("");function a(n){u(n)}function c(n){e(n)}function s(){console.log(l,o),h("https://api.clicli.cc/user/login",{name:l,pwd:o}).then(n=>{n.code===200?(window.localStorage.setItem("token",n.token),r("/")):alert(n.msg)})}return t("div",{class:"login"},t("li",null,t("h1",null,"\u767B\u5F55")),t("li",null,t("input",{type:"text",placeholder:"\u6635\u79F0",onInput:n=>a(n.target.value)})),t("li",null,t("input",{type:"text",placeholder:"\u5BC6\u7801",onInput:n=>c(n.target.value)})),t("li",null,t("button",{onClick:s},"\u6CE8\u518C")),t("li",null,t(p,{href:"/"},"\u6CE8\u518C")))}export{d as default};