(this.webpackJsonpreactfirst=this.webpackJsonpreactfirst||[]).push([[7],{106:function(e,r,t){e.exports={form:"AuthPage_form__tFsUp",login:"AuthPage_login__1hhS9",password:"AuthPage_password__3Wf72",checkBox:"AuthPage_checkBox__2k4Jg",button:"AuthPage_button__3ACkQ",preloader:"AuthPage_preloader__3MQ1o",warning:"AuthPage_warning__2pxpR",image:"AuthPage_image__2eLP1",warningBlock:"AuthPage_warningBlock__3PSiv"}},107:function(e,r,t){e.exports={input:"LoginInput_input__1fKD0",warning:"LoginInput_warning__2WVQ2",image:"LoginInput_image__TEkR3"}},111:function(e,r,t){"use strict";t.r(r);var n=t(1),a=t(0),c=t(106),i=t.n(c),o=t(89),s=t(2);function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(107),d=t.n(l),j=t.p+"static/media/warning.59a8d2ea.svg",g=function(e){var r=e.input,t=e.meta,a=u(e,["input","meta"]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",Object(s.a)(Object(s.a)({className:t.error&&t.touched||!t.touched&&a.hasError?d.a.input:void 0},r),a)),t.touched&&t.error?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:d.a.image,src:j}),Object(n.jsx)("span",{className:d.a.warning,children:t.error})]}):void 0]})},b=t(91),h=t(26);var m=function(e){return Object(n.jsx)(o.b,{onSubmit:function(r){e.logIn(r)},render:function(r){var t=r.handleSubmit;return Object(n.jsxs)("form",{onSubmit:t,className:i.a.form,children:[Object(n.jsx)("div",{className:i.a.login,children:Object(n.jsx)(o.a,{hasError:e.hasError,validate:b.a,component:g,name:"email",placeholder:"Email",type:"text"})}),Object(n.jsx)("div",{className:i.a.password,children:Object(n.jsx)(o.a,{hasError:e.hasError,validate:b.b,component:g,name:"password",placeholder:"Password",type:"password"})}),Object(n.jsx)("button",{className:i.a.button,children:"Log in"}),Object(n.jsxs)("div",{className:i.a.checkBox,children:[Object(n.jsx)(o.a,{name:"rememberMe",component:"input",type:"checkbox"}),"remember me"]})]})}})},p=function(e){return Object(n.jsxs)(n.Fragment,{children:[function r(){if(e.hasError)return Object(n.jsxs)("div",{className:i.a.warningBlock,children:[Object(n.jsx)("img",{alt:"",className:i.a.image,src:r}),Object(n.jsx)("span",{className:i.a.warning,children:"wrong email or password"})]})}(),e.isFetching?Object(n.jsx)("div",{className:i.a.preloader,children:Object(n.jsx)(h.a,{})}):Object(n.jsx)(m,{hasError:e.hasError,logIn:e.logIn})]})},f=t(17),O=t(5),_=t(18),x=t(20),v=t(19);var w={getProfile:_.d,logIn:x.c};r.default=Object(f.b)((function(e){return{isAuthorized:Object(v.b)(e),id:Object(v.d)(e),isFetching:Object(v.a)(e),hasError:Object(v.c)(e)}}),w)((function(e){return Object(a.useEffect)((function(){e.getProfile(e.id)}),[e.id]),e.isAuthorized?Object(n.jsx)(O.a,{to:"/profile"}):Object(n.jsx)(p,{hasError:e.hasError,isFetching:e.isFetching,logIn:e.logIn})}))},91:function(e,r,t){"use strict";t.d(r,"a",(function(){return n})),t.d(r,"b",(function(){return a}));var n=function(e){return e?e.includes("@")&&e.includes(".")?void 0:"Incorrect email":"Required"},a=function(e){return e?void 0:"Required"}}}]);
//# sourceMappingURL=7.5e00b4b4.chunk.js.map