(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{3072:function(e,t,r){"use strict";r.d(t,{j:function(){return s}});var n=r(5353),o=r(2677),i=r(5893),a=(0,o.zo)("div",{padding:"12px 16px",borderRadius:"12px",textAlign:"center",variants:{fullWidth:{true:{width:"100%"}},type:{alert:{backgroundColor:"$supportLightBlue",border:"1px solid $colors$coreBluesBlue"},warning:{backgroundColor:"$supportLightOrange",border:"1px solid $colors$supportOrange"},error:{backgroundColor:"$supportLightRed",border:"1px solid $colors$supportRed"}}},defaultVariants:{type:"alert"}}),s=function(e){var t=e.children,r=e.type,o=e.textSize,s=void 0===o?"medium":o,c=e.fullWidth;return(0,i.jsx)(a,{type:r,fullWidth:c,children:(0,i.jsx)(n.x.UIParagraph,{color:"inherit",size:s,children:t})})}},6650:function(e,t,r){"use strict";r.d(t,{f:function(){return p}});var n=r(2677),o=r(657),i=r(5893),a=(0,n.zo)("div",{position:"relative"}),s=(0,n.zo)("div",{width:"100%",height:"100%",position:"relative",transitionProperty:"opacity",transitionDuration:"0.2s"}),c=(0,n.zo)("div",{position:"absolute",height:"40px",width:"40px",top:"48px",left:"50%",transform:"translateX(-50%)"}),u=(0,n.F4)({from:{opacity:"0"},to:{opacity:"1"}}),l=(0,n.F4)({from:{opacity:"1"},to:{opacity:"0"}}),d=function(e){var t=e?"ease-in":"ease-out";return".2s ".concat(e?u:l," 1 normal forwards ").concat(t)},p=function(e){var t=e.isLoading,r=e.children,n=e.loadingOpacity,u=void 0===n?.2:n;return(0,i.jsxs)(a,{children:[(0,i.jsx)(c,{css:{animation:d(t)},children:(0,i.jsx)(o.$,{})}),(0,i.jsx)(s,{css:{backgroundColor:t?"white":"transparent",opacity:t?u:1,pointerEvents:t?"none":"initial"},children:r})]})}},4671:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ue},default:function(){return le}});var n=r(2809),o=r(9008),i=r(1752),a=r(1163),s=r(7294),c=r(485),u=r(2848),l=r(2677),d=r(6650),p=r(3937);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(3072),b=r(3602),y=r(5893),m=(0,l.F4)({from:{opacity:"0"},to:{opacity:"1"}}),v=(0,l.zo)("div",{marginBottom:"12px",animation:".3s ".concat(m," 1 normal forwards ease-in")}),x=function(e){var t=e.error,r=e.cta,n=function(e,t,r){var n=e.policyMap,o=t&&"string"===typeof t?t:"default",i=n.find((function(e){var t=e.match;return o.includes(t)}))||n[n.length-1],a=i.copy,s=i.ctaType;return{copy:a,cta:g(g(g({},e.ctaTypes[s]),r||{}),{},{copy:e.ctaTypes[s].copy})}}(e.errorPolicyMap,t,r),o=n.copy,i=n.cta;return(0,y.jsx)(v,{children:(0,y.jsxs)(h.j,{type:"warning",textSize:"large",children:[o,i&&(0,y.jsx)(b.h,{href:i.href,onClick:i.onClick,children:i.copy})]})})},w={email:function(e){return function(e){return!(e&&e.length>0)}(e)?"Email address must not be blank.":/\S+@\S+\.\S+/.test(e)?null:"Email address must be valid."},password:function(){return null}},j=r(5353),k=r(9938),O=(0,l.zo)("div",{display:"flex",flexGrow:1,textAlign:"center",justifyContent:"center",variants:{borders:{true:{"@tablet":{marginLeft:"-12px",paddingLeft:"12px",borderLeft:"1px solid $colors$grayscaleSilver"}}}}}),P=(0,l.zo)("div",{maxWidth:"377px",width:"100%",textAlign:"left",padding:"48px 0","> h2":{marginBottom:"6px"},"> p":{marginBottom:"24px"},"@tablet":{borderTop:"unset",maxWidth:"352px",textAlign:"center",padding:"unset"},"@desktop":{maxWidth:"432px",textAlign:"center",padding:"unset"},variants:{borders:{true:{borderTop:"1px solid $colors$grayscaleSilver","@tablet":{borderTop:"unset"}}}}}),C=(0,l.zo)("div",{textAlign:"center"}),S=function(e){var t=e.headerText,r=e.subHeaderText,n=e.children,o=e.cta,i=e.ctaClickHandler,a=e.borders;return(0,y.jsx)(O,{borders:a,children:(0,y.jsxs)(P,{borders:a,children:[t&&(0,y.jsx)(j.x.Header,{size:"medium",tag:"h2",children:t}),r&&(0,y.jsx)(j.x.Paragraph,{size:"large",children:r}),n,"text"===(null===o||void 0===o?void 0:o.type)&&(0,y.jsx)(C,{css:{marginTop:n?"24px":"0px"},children:(0,y.jsx)(b.h,{href:o.href,onClick:i,children:o.copy})}),o&&"text"!==(null===o||void 0===o?void 0:o.type)&&(0,y.jsx)(C,{css:{marginTop:n?"24px":"0px"},children:(0,y.jsx)(k.z,{href:o.href,onClick:i,fullWidth:!0,children:o.copy})})]})})},T=r(318),E=r(266),L=r(809),D=r.n(L),z=r(8216),_=r(5550);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var A="wp-springfield-db",H="code",R="__AUTH0_CONFIG",B=new function e(){var t=this;(0,z.Z)(this,e),(0,n.Z)(this,"getConfigFromAuth0",(function(){try{var e,t=null===(e=window)||void 0===e?void 0:e[R];if("undefined"!==typeof t)return t}catch(r){return console.warn(r),null}return console.warn("Auth0SDK initialization likely attempted outside Auth0 Hosted Environment."),null})),(0,n.Z)(this,"initializeAuth0SDK",(function(){var e=t.getConfigFromAuth0();if(e){var r=e.internalOptions.leeway;if(r){var o=parseInt(String(r),10);Number.isNaN(o)||(e.internalOptions.leeway=o)}var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({overrides:{__tenant:e.auth0Tenant,__token_issuer:e.authorizationServer.issuer},domain:e.auth0Domain,clientID:e.clientID,redirectUri:e.callbackURL,responseType:H},e.internalOptions);t.authSDK=new _.sO(i)}})),(0,n.Z)(this,"login",(function(e){var r=e.email,n=e.password;return new Promise((function(e,o){if(t.authSDK||o(new Error("Login Attempted without Auth0.js SDK Initialized.")),t.authSDK&&"object"===typeof t.authSDK)try{t.authSDK.login({realm:t.dbConnection,username:r,password:n,onRedirecting:function(t){console.log("onRedirecting!"),e({success:!0}),t()}},(function(t){if(t){var r,n;t&&t.original&&t.original.message&&(r=JSON.parse(t.original.message)),r&&r.message&&(n=r.message);var o=n||t.code||t.policy||t.description;return e({error:o})}return console.log("on no err!"),e({success:!0})}))}catch(i){o(i)}}))})),this.authSDK=null,this.dbConnection=A,this.initializeAuth0SDK()},W=r(343);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N,M,X=(0,l.zo)("div",{textAlign:"left"}),I=(0,l.F4)({from:{},to:{}}),K=(0,l.zo)("div",{transition:"$productiveP2S",transitionProperty:"margin-bottom",variants:{error:{false:{marginBottom:"12px"}}},"input, input:hover, input:focus, input:active":{"&:-webkit-autofill":{animationName:I,boxShadow:"0 0 0 1000px $grayscaleWhite inset",transition:"background-color 1s linear 5000s","-webkit-text-fill-color":"$grayscaleCharcoal",backgroundClip:"content-box"}}}),Y=(0,l.zo)("div",{display:"flex",justifyContent:"center",marginTop:"20px"}),J=(0,l.zo)("button",{position:"absolute",right:0,top:0,bottom:0,margin:"auto",background:"0 0",border:"none",padding:"0 16px",display:"none","-webkit-tap-highlight-color":"transparent",span:{color:"$coreBluesBlue"},variants:{visible:{true:{display:"block"}}}}),U=function(e){var t=(0,s.useRef)(null);return[(0,s.useCallback)((function(r){t.current&&t.current.removeEventListener&&t.current.removeEventListener("animationstart",e),r&&r.addEventListener("animationstart",e),t.current=r}),[e])]},G=function(e){var t=e.submitCallback,r=e.validationRequired,o=void 0!==r&&r,i=e.errorPolicyMap,a=e.errorMessageCta,c=(0,s.useState)({touched:{email:!1,password:!1},values:{email:"",password:""},errors:{email:void 0,password:void 0},submitBlocked:!0}),u=c[0],l=c[1],d=(0,s.useState)(!1),p=d[0],f=d[1],g=(0,s.useState)({email:"",password:""}),h=g[0],b=g[1],m=(0,s.useState)(!1),v=m[0],O=m[1],P=function(e,t){var r=e.email,n=e.password,o=(0,s.useState)(!1),i=o[0],a=o[1],c=(0,s.useState)(""),u=c[0],l=c[1],d=(0,s.useState)(!1),p=d[0],f=d[1],g=(0,s.useRef)({inProgress:i,loginSuccess:p,loginError:u});return(0,s.useEffect)((function(){r&&function(){var e=(0,E.Z)(D().mark((function e(){var t,o;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),l(""),f(!1),a(!0),e.prev=2,e.next=5,B.login({email:r,password:n});case 5:t=e.sent,(o=t.error)?l(o):(console.log("on no err from use auth0"),f(!0)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),l("Oops! Something went wrong, please try logging in again."),console.warn(e.t0);case 14:return e.prev=14,a(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}()()}),[r,n]),(0,s.useEffect)((function(){t&&(i!==g.current.inProgress&&t({inProgress:i}),p!==g.current.loginSuccess&&t({loginSuccess:p}),u!==g.current.loginError&&t({loginError:u}),g.current={inProgress:i,loginSuccess:p,loginError:u})}),[i,p,u,t]),[i,u,p]}({email:h.email,password:h.password},t),C=(0,T.Z)(P,2),S=C[0],L=C[1],z=u.submitBlocked,_=o&&!v&&z||!0===S,$=function(e){var t=e.id,r=e.value,o=u.errors,i=function(e){return w[e]||null}(t);if(i){var a=F(F({},o),{},(0,n.Z)({},t,i(r)||void 0)),s=Object.keys(a).some((function(e){return!!a[e]}));l((function(e){return F(F({},e),{},{errors:a,submitBlocked:s})}))}},A=function(e,t){var r=e.id,o=e.value;l((function(e){return F(F({},e),{},{values:F(F({},e.values),{},(0,n.Z)({},r,o))})})),(u.touched[r]||t)&&$({id:r,value:o})},H=function(e,t){var r=e.currentTarget,n=r.id,o=r.value;A({id:n,value:o},t)},R=function(e){var t=e.target,r=t.id,o=t.value;l((function(e){return F(F({},e),{},{touched:F(F({},e.touched),{},(0,n.Z)({},r,!0))})})),$({id:r,value:o})},Z=function(e){var t=e.animationName,r=e.currentTarget;if(t===I.name&&r){var n=r,o=n.id,i=n.value;A({id:o,value:i}),O(!0)}},N=U(Z),M=(0,T.Z)(N,1)[0],G=U(Z),V=(0,T.Z)(G,1)[0];return(0,y.jsxs)(X,{children:[L&&(0,y.jsx)(x,{errorPolicyMap:i,error:L,cta:a}),(0,y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!v&&_||(b({email:u.values.email,password:u.values.password}),$({id:"email",value:u.values.email}),$({id:"password",value:u.values.password}))},action:"#",noValidate:!0,children:[(0,y.jsx)(K,{error:!!u.errors.email,children:(0,y.jsx)(W.y,{id:"email",fieldLabel:"Email address",type:"email",autoComplete:"email",ref:M,onChange:function(e){return H(e)},onBlur:R,value:u.values.email,error:!!u.errors.email,errorMessage:u.errors.email,placeholder:v?" ":void 0})}),(0,y.jsx)(K,{children:(0,y.jsx)(W.y,{id:"password",fieldLabel:"Password",type:p?"text":"password",autoComplete:"password",ref:V,onChange:function(e){return H(e,!0)},rightContent:(0,y.jsx)(J,{type:"button",onClick:function(e){e.preventDefault(),f(!p)},visible:!!u.values.password,children:(0,y.jsx)(j.x.UIButton,{size:"xs",children:p?"Hide":"Show"})}),onBlur:R,value:u.values.password,error:!!u.errors.password,errorMessage:u.errors.password,placeholder:v?" ":void 0})}),(0,y.jsx)(Y,{children:(0,y.jsx)(k.z,{disabled:!v&&_,buttonType:"submit",fullWidth:!0,children:"Sign in"})})]})]})},V=r(9440),q=r(9126),Q=JSON.parse('{"px":{"policyMap":[{"match":"set up a password","copy":"It appears you haven\u2019t set up a password for your account yet.","ctaType":"createPassword"},{"match":"access_denied","copy":"The information you entered is incorrect. Try again or.","ctaType":"default"},{"match":"invalid_user_password","copy":"The information you entered is incorrect. Try again or","ctaType":"default"},{"match":"too_many_attempts","copy":"You\u2019ve reached the maximum number of login attempts. Please","ctaType":"default"},{"match":"password_leaked","copy":"Your password needs to be reset. Please","ctaType":"default"},{"match":"default","copy":"Oops! Something went wrong, please try logging in again or","ctaType":"default"}],"ctaTypes":{"default":{"copy":"reset your password.","href":"/account/forgot-password"},"createPassword":{"copy":"reset your password.","href":"/account/forgot-password"}}},"TJ":{"J":"reset your password."},"sW":{"$n":{"headerText":"Checkout as a guest","subHeaderText":"Easily track and manage your order (with the option to create an account later).","cta":{"type":"button","copy":"Continue","href":"/checkout/step"}},"y1":{"headerText":"Create account","subHeaderText":"Easily save and manage your prescriptions, addresses, and payment information.","cta":{"type":"button","copy":"Create account","href":"/login?isSignup=true"}},"zB":{"headerText":"Sign in","subHeaderText":"Access your saved prescriptions, addresses, and payment information for a fast checkout.","cta":{"type":"text","copy":"Forgot password?"}}}}');function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=null===(N=(0,i.default)())||void 0===N||null===(M=N.publicRuntimeConfig)||void 0===M?void 0:M.publicRootUrl,ne=function(){var e=Q.sW.$n,t=e.headerText,r=e.subHeaderText,n=e.cta,o=(0,c.r)().trackEvent;return(0,y.jsx)(S,{headerText:t,subHeaderText:r,cta:n,ctaClickHandler:function(){return o({action:u.ld.ClickGuestCheckoutLink,label:u.YX.ClickGuestCheckoutLink})}})},oe=function(){var e=Q.sW.y1,t=e.headerText,r=e.subHeaderText,n=e.cta,o=(0,c.r)().trackEvent;return(0,y.jsx)(S,{headerText:t,subHeaderText:r,cta:n,ctaClickHandler:function(){return o({action:u.ld.ClickCreateAccountLink,label:u.YX.ClickCreateAccountLink})}})},ie=function(e){var t=e.passwordResetLink,r=e.submitCallback,n=e.borders,o=Q.sW.zB,i=o.headerText,a=o.subHeaderText,s=o.cta,l=(0,c.r)().trackEvent;return(0,y.jsx)(S,{headerText:i,subHeaderText:a,cta:te(te({},s),{},{href:t}),ctaClickHandler:function(){return l({action:u.ld.ClickForgotPassword,label:u.YX.ClickForgotPassword})},borders:n,children:(0,y.jsx)(G,{submitCallback:r,errorPolicyMap:Q.px,errorMessageCta:{copy:Q.TJ.J,href:t,onClick:function(){return l({action:u.ld.ClickResetPassword,label:u.YX.ClickResetPassword})}},validationRequired:!0})})},ae=(0,l.zo)("div",{padding:"3px 0","@tablet":{padding:"68px 0"},"@desktop":{padding:"96px 0"}}),se=(0,l.zo)("div",{marginTop:"-97px",height:"97px",backgroundColor:"white"}),ce=(0,l.zo)("div",{marginBottom:"-500px",height:"500px",backgroundColor:"white"}),ue=!0,le=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],n=(0,a.useRouter)(),i=n.query.isCheckout,l=i?"Checkout Login":"Sign-in",f="/".concat(i?"checkout":"account","/forgot-password"),g=(0,c.r)().trackEvent,h=(0,s.useState)(u.$0.LoginPage),b=h[0],m=h[1],v=(0,s.useCallback)((function(e){var t=e.inProgress,n=e.loginSuccess,o=e.loginError;r(t),t&&g({action:u.ld.SubmitLoginForm,label:u.YX.SubmitLoginForm,category:b}),n&&g({action:u.ld.SubmitLoginSuccess,label:u.YX.SubmitLoginSuccess,category:b}),o&&g({action:u.ld.SubmitLoginError,label:u.YX.SubmitLoginError,category:b})}),[b]),x=(0,c.r)({category:u.$0.LoginPage}).Track,w=(0,c.r)({category:u.$0.CheckoutLoginPage}).Track,j=(0,s.useContext)(V.p).setHeaderVariant,k=(0,s.useContext)(q.f).setFooterVariant,O=(0,s.useState)(!1),P=O[0],C=O[1],S=(0,s.useState)(!0),T=S[0],E=S[1];(0,s.useEffect)((function(){n.isReady&&i?(j("minimal"),m(u.$0.CheckoutLoginPage),C(!0),E(!1)):n.isReady&&(m(u.$0.LoginPage),C(!0),E(!1)),k("minimal")}),[i,n,j,k,C]),(0,s.useEffect)((function(){b&&g({category:b,action:u.ld.LoginPageImpression,label:u.YX.LoginPageImpression})}),[b]);var L=function(){E(!1)},D=i?w:x;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.default,{children:[(0,y.jsxs)("title",{children:[l," | Warby Parker"]}),(0,y.jsx)("meta",{property:"og:title",content:"{pageTitle} | Warby Parker"},"title"),(0,y.jsx)("link",{rel:"icon",href:"/favicon.ico"}),re&&(0,y.jsx)("base",{href:re})]}),T&&(0,y.jsx)(se,{onClick:L}),(0,y.jsx)(d.f,{isLoading:t||!P,loadingOpacity:0,children:P&&(0,y.jsx)(D,{children:(0,y.jsx)(ae,{children:(0,y.jsxs)(p.k,{children:[(0,y.jsx)(p.M,{columns:{default:[1,4],tablet:[1,4],desktop:[1,6]},children:i?(0,y.jsx)(ne,{}):(0,y.jsx)(oe,{})}),(0,y.jsx)(p.M,{columns:{default:[1,4],tablet:[5,8],desktop:[7,12]},children:(0,y.jsx)(ie,{passwordResetLink:f,submitCallback:v,borders:!0})})]})})})}),T&&(0,y.jsx)(ce,{onClick:L})]})}},3883:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth0/login",function(){return r(4671)}])},9008:function(e,t,r){e.exports=r(639)}},function(e){e.O(0,[365,774,888,179],(function(){return t=3883,e(e.s=t);var t}));var t=e.O();_N_E=t}]);