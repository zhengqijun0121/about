(this.webpackJsonpabout=this.webpackJsonpabout||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(0),i=n.n(c),a=n(2),r=n.n(a),l=(n(19),n(20),n(12)),s=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds();return"".concat(t).concat(n<10?":0":":").concat(n).concat(o<10?":0":":").concat(o)},u=["Welcome to squirrel.",{type:"system",label:"System",content:"cd /home/squirrel"},{type:"system",label:"System",content:"Thanks for your visit. Please let me introduce myself."},{time:s(),type:"info",label:"Name:",content:"Zhengqijun"},{time:s(),type:"info",label:"Sex:",content:"Male"},{time:s(),type:"info",label:"Age:",content:function(e){var t=e.slice(0,4),n=e.slice(5,7),o=new Date,c=o.getFullYear(),i=o.getMonth(),a=-1;return c>=t&&(a=c-t,i<n&&(a-=1)),a}("1997-01")},{time:s(),type:"info",label:"Email:",content:"zhengqijun0121@qq.com"},{time:s(),type:"info",label:"Aim:",content:"These goals as follows:"},{type:"black",label:"=> 1.",content:"To make outstanding contributions to open source."},{type:"black",label:"=> 2.",content:"To become a full stack engineer."},{type:"black",label:"=> 3.",content:"To find a good job."}],p={dynamicList:{intro:{description:"Introducting myself again.",run:function(e){var t=0;return new Promise((function(n){var o=setInterval((function(){e(u[t]),t++,u[t]||(clearInterval(o),n({type:"success",label:"Done",content:"Myself introduction is over!"}))}),500)}))}},echo:{description:"Echoes input.",run:function(e,t){return new Promise((function(n){e({time:s(),label:"Echo",type:"success",content:t}),n({type:"success",label:"",content:""})}))}},open:{description:"Open a specified url in a new tab.",run:function(e,t){return new Promise((function(n){t?t.startsWith("http")?(e({type:"success",label:"Success",content:"Opening"}),window.open(t,"_blank"),n({type:"success",label:"Done",content:"Page Opened!"})):n({type:"error",label:"Error",content:"Please add `http` prefix!"}):n({type:"error",label:"Error",content:"a url is required!"})}))}},blog:{description:"Open my blog in a new tab.",run:function(e){return new Promise((function(t){e({type:"success",label:"Success",content:"Opening"}),window.open("https://zhengqijun.gitee.io/blog","_blank"),t({type:"success",label:"Done",content:":)"})}))}},github:{description:"Open my github in a new tab.",run:function(e){return new Promise((function(t){e({type:"success",label:"Success",content:"Opening"}),window.open("https://www.github.com/zhengqijun0121","_blank"),t({type:"success",label:"Done",content:":)"})}))}},gitee:{description:"Open my gitee in a new tab.",run:function(e){return new Promise((function(t){e({type:"success",label:"Success",content:"Opening"}),window.open("https://www.gitee.com/zhengqijun","_blank"),t({type:"success",label:"Done",content:":)"})}))}}},staticList:{contact:{description:"Return a list of my contact information.",list:[{type:"info",label:"Email:",content:"`zhengqijun0121@qq.com`"},{type:"info",label:"Github:",content:"`https://github.com/zhengqijun0121`"},{type:"info",label:"Gitee:",content:"`https://gitee.com/zhengqijun`"}]},whoami:{description:"Return a piece of code about squirrel.",list:[{type:"success",label:"Compiled",content:"1    const"},{type:"success",label:"Compiled",content:'2    squirrel = "\u677e\u9f20",'},{type:"success",label:"Compiled",content:'3    squirral = "\u9177\u9177\u7684\u677e\u9f20";'},{type:"success",label:"Compiled",content:"4    const mySquirrel = new Promise((resolve, reject) => {"},{type:"warning",label:"Compiled",content:'5    squirrel === "\u677e\u9f20" ? resolve(squirral) : reject(squirrel)'},{type:"success",label:"Compiled",content:'6    }).then(() => "My squirrel, I\'m coming!")'},{type:"error",label:"SyntaxError",content:'7    .catch(() => "What the f*ck!");'}]},skill:{description:"Return a list of my skills and my rating of them.",list:[{type:"success",label:"A",content:"\xb7 JavaScript 99/100"},{type:"success",label:"A",content:"\xb7 Go 90/100"},{type:"success",label:"A",content:"\xb7 Java 80/100"},{type:"success",label:"A",content:"\xb7 Kotlin 80/100"},{type:"warning",label:"B",content:"\xb7 TypeScript 70/100"},{type:"warning",label:"B",content:"\xb7 Python 70/100"},{type:"warning",label:"B",content:"\xb7 C 70/100"},{type:"warning",label:"B",content:"\xb7 Shell 70/100"},{type:"error",label:"C",content:"\xb7 C# 60/100"},{type:"error",label:"C",content:"\xb7 Rust 60/100"},{type:"error",label:"C",content:"\xb7 Scala 60/100"},{type:"error",label:"C",content:"\xb7 Lua 60/100"},{type:"error",label:"C",content:"\xb7 Haskell 60/100"},{type:"error",label:"C",content:"\xb7 Ruby 60/100"},{type:"black",label:"D",content:"\xb7 CSS -999/100"}]},cartoon:{description:"Return a list of cartoons that I have watched.",list:[" \u300a \u6d77\u7ef5\u5b9d\u5b9d \u300b"," \u300a \u745e\u514b\u4e0e\u83ab\u8482 \u300b"," \u300a \u4e00\u4eba\u4e4b\u4e0b \u300b"," \u300a \u9547\u9b42\u8857 \u300b"," \u300a \u4e00\u62f3\u8d85\u4eba \u300b"," \u300a \u67d0\u79d1\u5b66\u7684\u8d85\u7535\u78c1\u70ae \u300b"," \u300a \u7f57\u5c0f\u9ed1\u6218\u8bb0 \u300b"," \u300a \u9b3c\u706d\u4e4b\u5203 \u300b"," \u300a \u8f89\u591c\u5927\u5c0f\u59d0\u60f3\u8ba9\u6211\u544a\u767d \u300b"," \u300a \u7b28\u5973\u5b69 \u300b"," \u300a \u57c3\u7f57\u8292\u963f\u8001\u5e08 \u300b"," \u300a Charlotte \u300b"," \u300a \u7075\u7b3c \u300b"," \u300a \u5e72\u7269\u59b9\uff01\u5c0f\u57cb \u300b"," \u300a \u8fd9\u4e2a\u52c7\u8005\u660e\u660e\u8d85\u5f3a\u5374\u8fc7\u5206\u614e\u91cd \u300b"]},book:{description:"Return a list of books that I have read.",list:[" \u300a JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1 \u300b--- Nicholas C.Zakas "," \u300a JavaScript \u6807\u51c6\u53c2\u8003\u6559\u7a0b \u300b--- \u962e\u4e00\u5cf0 "," \u300a ECMAScript 6 \u5165\u95e8 \u300b--- \u962e\u4e00\u5cf0 "," \u300a JavaScript DOM \u9ad8\u7ea7\u7a0b\u5e8f\u7f16\u7a0b\u827a\u672f \u300b--- Jeremy Keith "," \u300a \u950b\u5229\u7684 jQuery \u300b--- \u5355\u4e1c\u6797 "," \u300a CSS \u63ed\u79d8 \u300b--- LEA VEROU "," \u300a CSS \u6743\u5a01\u6307\u5357 \u300b--- Eric A.Meyer "," \u300a HTML5 \u9ad8\u6027\u80fd\u6307\u5357 \u300b--- \u5e03\u83b1\u6069\u7279/\u743c\u65af "," \u300a C# \u672c\u8d28\u8bba \u300b--- MarkMichaelis "," \u300a C# \u5165\u95e8\u7ecf\u5178 2015 \u300b--- karli "," \u300a C# \u591a\u7ebf\u7a0b\u7f16\u7a0b\u5b9e\u6218 \u300b--- \u963f\u683c\u4f5b\u6e29 "," \u300a C primer plus\uff08\u7b2c\u516d\u7248\uff09 \u300b--- Stephen Prata "," \u300a \u7b97\u6cd5\u5bfc\u8bba \u300b--- Thomas H.Cormen... "," \u300a \u7b97\u6cd5\u7ade\u8d5b\u5165\u95e8\u7ecf\u5178\uff08\u7b2c\u4e00\u7248\uff09 \u300b--- \u5218\u6c5d\u4f73 "," \u300a \u7b97\u6cd5\u7ade\u8d5b\u5165\u95e8\u7ecf\u5178\uff08\u7b2c\u4e8c\u7248\uff09 \u300b--- \u5218\u6c5d\u4f73 "," \u300a Vim \u5b9e\u6218\u6280\u5de7 \u300b--- Drew Neil "," \u300a \u4f60\u4e0d\u77e5\u9053\u7684 JavaScript-\u4e0b \u300b--- Kyle Simpson "," \u300a Linux \u547d\u4ee4\u884c\u5927\u5168 \u300b--- William E.shotts\uff0cJr "," \u300a \u5199\u7ed9\u5927\u5fd9\u4eba\u770b\u7684 Java \u6838\u5fc3\u6280\u672f \u300b--- CayS.Horstmann "," \u300a Python Cookbook \u300b--- Alex Martelli... "," \u300a \u6697\u65f6\u95f4 \u300b--- \u5218\u672a\u9e4f "," \u300a Haskell \u8da3\u5b66\u6307\u5357 \u300b--- \u65af\u6d1b\u6587\u5c3c\u4e9a "," \u300a \u6570\u5b66\u4e4b\u7f8e\uff08\u7b2c\u4e8c\u7248\uff09 \u300b--- \u5434\u519b "," \u300a Linux Bash \u7f16\u7a0b\u4e0e\u811a\u672c\u5e94\u7528\u5b9e\u6218 \u300b--- \u9a6c\u7389\u519b \u90dd\u519b "," \u300a \u7a0b\u5e8f\u5458\u7684\u5450\u558a \u300b--- Steve Yegge "," \u300a The way to go \u300b--- \u65e0\u95fb "," \u300a The Go Programming Language \u300b--- Brian W. Kernighan... "," \u300a Java \u7f16\u7a0b\u601d\u60f3\uff08\u7b2c4\u7248\uff09 \u300b--- Bruce Eckel "," \u300a Kotlin \u6838\u5fc3\u7f16\u7a0b \u300b--- \u6c34\u6ef4\u56e2\u961f "," \u300a Easy Kotlin \u300b--- JackChan "," \u300a HTTP \u56fe\u89e3 \u300b--- \u4e0a\u91ce\u5ba3 "," \u300a \u5218\u5927\u732b\u7684\u8d22\u5bcc\u4e4b\u65c5 \u300b--- \u5218\u6b23 "," \u300a ZOO \u300b--- \u4e59\u4e00 "]}}},b={prompt:"\u279c  ~ ",version:"1.0.0",initialDirectory:"/home/squirrel",bootCmd:"intro"};var y=document.querySelectorAll(".fade");window.addEventListener("load",(function(){y.forEach((function(e){return e.classList.add("in")}))})),window.addEventListener("beforeunload",(function(){y.forEach((function(e){return e.classList.remove("in")}))}));var m=function(){return Object(o.jsx)(l.a,{cmd:p,config:b})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()}},[[27,1,2]]]);
//# sourceMappingURL=main.3723a7f1.chunk.js.map