(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{3072:function(e,t,r){"use strict";r.d(t,{j:function(){return s}});var o=r(5353),n=r(4449),i=r(5893),a=(0,n.zo)("div",{padding:"12px 16px",borderRadius:"12px",textAlign:"center",variants:{fullWidth:{true:{width:"100%"}},type:{alert:{backgroundColor:"$supportLightBlue",border:"1px solid $colors$coreBluesBlue"},warning:{backgroundColor:"$supportLightOrange",border:"1px solid $colors$supportOrange"},error:{backgroundColor:"$supportLightRed",border:"1px solid $colors$supportRed"}}},defaultVariants:{type:"alert"}}),s=function(e){var t=e.children,r=e.type,n=e.textSize,s=void 0===n?"medium":n,c=e.fullWidth;return(0,i.jsx)(a,{type:r,fullWidth:c,children:(0,i.jsx)(o.x.UIParagraph,{color:"inherit",size:s,children:t})})}},6650:function(e,t,r){"use strict";r.d(t,{f:function(){return p}});var o=r(4449),n=r(657),i=r(5893),a=(0,o.zo)("div",{position:"relative"}),s=(0,o.zo)("div",{width:"100%",height:"100%",position:"relative",transitionProperty:"opacity",transitionDuration:"0.2s"}),c=(0,o.zo)("div",{position:"absolute",height:"40px",width:"40px",top:"48px",left:"50%",transform:"translateX(-50%)"}),u=(0,o.F4)({from:{opacity:"0"},to:{opacity:"1"}}),l=(0,o.F4)({from:{opacity:"1"},to:{opacity:"0"}}),d=function(e){var t=e?"ease-in":"ease-out";return".2s ".concat(e?u:l," 1 normal forwards ").concat(t)},p=function(e){var t=e.isLoading,r=e.children,o=e.loadingOpacity,u=void 0===o?.2:o;return(0,i.jsxs)(a,{children:[(0,i.jsx)(c,{css:{animation:d(t)},children:(0,i.jsx)(n.$,{})}),(0,i.jsx)(s,{css:{backgroundColor:t?"white":"transparent",opacity:t?u:1,pointerEvents:t?"none":"initial"},children:r})]})}},7134:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ze}});var o=r(2809),n=r(9008),i=r(1752),a=r(1163),s=r(7294),c=r(485),u=r(2848),l=r(4449),d=r(6650),p=r(3937);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(3072),m=r(3602),b=r(5893),y=(0,l.F4)({from:{opacity:"0"},to:{opacity:"1"}}),v=(0,l.zo)("div",{marginBottom:"12px",animation:".3s ".concat(y," 1 normal forwards ease-in")}),x=function(e){var t=e.error,r=e.cta,o=function(e,t,r){var o=e.policyMap,n=t&&"string"===typeof t?t:"default",i=o.find((function(e){var t=e.match;return n.includes(t)}))||o[o.length-1],a=i.copy,s=i.ctaType;return{copy:a,cta:g(g(g({},e.ctaTypes[s]),r||{}),{},{copy:e.ctaTypes[s].copy})}}(e.errorPolicyMap,t,r),n=o.copy,i=o.cta;return(0,b.jsx)(v,{children:(0,b.jsxs)(h.j,{type:"warning",textSize:"large",children:[n,i&&(0,b.jsx)(m.h,{href:i.href,onClick:i.onClick,children:i.copy})]})})},w=function(e){return!(e&&e.length>0)},k={email:function(e){return w(e)?"Email address must not be blank.":/\S+@\S+\.\S+/.test(e)?null:"Email address must be valid."},password:function(e){return w(e)?"Password must not be blank.":null}},j=r(5353),O=r(9938),P=(0,l.zo)("div",{display:"flex",flexGrow:1,textAlign:"center",justifyContent:"center",variants:{borders:{true:{"@desktop":{marginLeft:"-12px",paddingLeft:"12px",borderLeft:"1px solid $colors$grayscaleSilver"}}}}}),S=(0,l.zo)("div",{width:"100%",textAlign:"left",padding:"48px 0","> svg":{display:"block",marginLeft:"auto",marginRight:"auto",width:"60px",height:"60px",marginBottom:"25px"},"> h2":{marginBottom:"4px"},"> p":{marginBottom:"24px"},"@tablet":{maxWidth:"498px"},"@desktop":{borderTop:"unset",maxWidth:"432px",textAlign:"center",padding:"unset"},variants:{borders:{true:{borderTop:"1px solid $colors$grayscaleSilver",borderBottom:"1px solid $colors$grayscaleSilver","@desktop":{borderTop:"unset",borderBottom:"unset"}}}}}),C=(0,l.zo)("div",{textAlign:"center"}),T=function(e){var t=e.headerText,r=e.subHeaderText,o=e.children,n=e.cta,i=e.ctaClickHandler,a=e.borders,s=e.iconComponent,c=e.css;return(0,b.jsx)(P,{borders:a,children:(0,b.jsxs)(S,{borders:a,css:c||void 0,children:[s&&(0,b.jsx)(s,{}),t&&(0,b.jsx)(j.x.Header,{size:"medium",tag:"h2",children:t}),r&&(0,b.jsx)(j.x.Paragraph,{size:"large",children:r}),o,"text"===(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(C,{css:{marginTop:o?"24px":"0px"},children:(0,b.jsx)(m.h,{href:n.href,onClick:i,children:n.copy})}),n&&"text"!==(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(C,{css:{marginTop:o?"24px":"0px"},children:(0,b.jsx)(O.z,{href:n.href,onClick:i,fullWidth:!0,children:n.copy})})]})})},E=r(318),D=r(5999),L=r(5471),z=r(266),B=r(809),H=r.n(B);var $=r(299);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var F="wp-springfield-db",R="code",W="__AUTH0_CONFIG",_=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,o.Z)(this,"getConfigFromAuth0",(function(){try{var e,t=null===(e=window)||void 0===e?void 0:e[W];if("undefined"!==typeof t)return t}catch(r){return console.warn(r),null}return console.warn("Auth0SDK initialization likely attempted outside Auth0 Hosted Environment."),null})),(0,o.Z)(this,"initializeAuth0SDK",(function(){var e=t.getConfigFromAuth0();if(e){var r=e.internalOptions.leeway;if(r){var n=parseInt(String(r),10);Number.isNaN(n)||(e.internalOptions.leeway=n)}var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({overrides:{__tenant:e.auth0Tenant,__token_issuer:e.authorizationServer.issuer},domain:e.auth0Domain,clientID:e.clientID,redirectUri:e.callbackURL,responseType:R},e.internalOptions);t.authSDK=new $.sO(i)}})),(0,o.Z)(this,"login",(function(e){var r=e.email,o=e.password;return new Promise((function(e,n){if(t.authSDK||n(new Error("Login Attempted without Auth0.js SDK Initialized.")),t.authSDK&&"object"===typeof t.authSDK)try{t.authSDK.login({realm:t.dbConnection,username:r,password:o,onRedirecting:function(t){e({success:!0}),t()}},(function(t){if(t){var r,o;t&&t.original&&t.original.message&&(r=JSON.parse(t.original.message)),r&&r.message&&(o=r.message);var n=o||t.code||t.policy||t.description;return e({error:n})}return e({success:!0})}))}catch(i){n(i)}}))})),(0,o.Z)(this,"changePassword",(function(e){var r=e.email;return new Promise((function(e,o){if(t.authSDK||o(new Error("Change Password Attempted without Auth0.js SDK Initialized.")),t.authSDK&&"object"===typeof t.authSDK)try{t.authSDK.changePassword({connection:t.dbConnection,email:r},(function(t){if(t){var r,o;t&&t.original&&t.original.message&&(r=JSON.parse(t.original.message)),r&&r.message&&(o=r.message);var n=o||t.code||t.policy||t.description;return e({error:n})}return e({success:!0})}))}catch(n){o(n)}}))})),this.authSDK=null,this.dbConnection=F,this.initializeAuth0SDK()},Z=new _,M=r(343);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={fontSize:D.c.mobile.uiParagraphLarge.fontSize,fontWeight:D.c.mobile.uiParagraphLarge.fontWeight,fontFamily:D.c.mobile.uiParagraphLarge.fontFamily,color:L.O.grayscaleCharcoal,"-webkit-text-fill-color":L.O.grayscaleCharcoal},V=(0,l.zo)("div",{textAlign:"left"}),X=(0,l.F4)({from:{},to:{}}),Y=(0,l.zo)("div",{transition:"$productiveP2S",transitionProperty:"margin-bottom",marginBottom:"12px",overflow:"hidden",padding:".5px 0","@tablet":{height:"61px"},variants:{error:{true:{height:"82px"}},isAutoFill:{true:{"input:-webkit-autofill":{transform:"scale(1.1)",transformOrigin:"top left",opacity:"0.83"}}},isHiddenAutofill:{true:{"@supports (-webkit-touch-callout: none)":{input:{letterSpacing:"3px",top:"27px"}},"@supports not (-webkit-touch-callout: none)":{"input, input:-webkit-autofill":{opacity:"0.9",transform:"scale(2.5) translate(-.25%, -37%)",transformOrigin:"top left",fontFamily:"Verdana !important",letterSpacing:"0.03em !important",width:"160px"}}}},isHidden:{true:{input:{letterSpacing:"3px",top:"27px"},"@supports not (-webkit-touch-callout: none)":{"input, input:-webkit-autofill, input:-webkit-autofill::first-line":{marginLeft:"-2px",marginTop:"-2px",fontFamily:"Verdana !important",fontSize:"23px !important"}}}}},"input, input:hover, input:focus, input:active":N(N({},K),{},{filter:"none","&:-webkit-autofill::first-line":N({},K),"&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":N(N({},K),{},{animationName:X,boxShadow:"0 0 0 1000px $grayscaleWhite inset",transition:"background-color 1s linear 5000s",backgroundClip:"content-box"})}),"input:autofill":{background:"transparent"}}),G=(0,l.zo)("div",{display:"flex",justifyContent:"center",marginTop:"24px"}),U=(0,l.zo)("button",{position:"absolute",right:0,top:0,bottom:0,margin:"auto",background:"0 0",border:"none",padding:"0 16px",display:"none","-webkit-tap-highlight-color":"transparent",span:{color:"$coreBluesBlue"},variants:{visible:{true:{display:"block"}}}}),J=function(e){var t=(0,s.useRef)(null);return[(0,s.useCallback)((function(r){t.current&&t.current.removeEventListener&&t.current.removeEventListener("animationstart",e),r&&r.addEventListener("animationstart",e),t.current=r}),[e])]},q=function(e){var t=e.submitCallback,r=e.validationRequired,n=void 0!==r&&r,i=e.errorPolicyMap,a=e.errorMessageCta,c=e.updateEmailValue,u=(0,s.useState)({touched:{email:!1,password:!1},values:{email:"",password:""},errors:{email:void 0,password:void 0},submitBlocked:!0}),l=u[0],d=u[1],p=(0,s.useState)(!1),f=p[0],g=p[1],h=(0,s.useState)({email:"",password:""}),m=h[0],y=h[1],v=(0,s.useState)(!1),w=v[0],P=v[1],S=!l.values.email&&!l.values.password,C=w&&S,T=function(e,t){var r=e.email,o=e.password,n=(0,s.useState)(!1),i=n[0],a=n[1],c=(0,s.useState)(""),u=c[0],l=c[1],d=(0,s.useState)(!1),p=d[0],f=d[1],g=(0,s.useRef)({inProgress:i,loginSuccess:p,loginError:u});return(0,s.useEffect)((function(){r&&o&&function(){var e=(0,z.Z)(H().mark((function e(){var t,n;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),l(""),f(!1),a(!0),e.prev=2,e.next=5,Z.login({email:r,password:o});case 5:t=e.sent,(n=t.error)?(l(n),a(!1)):f(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),l("Oops! Something went wrong, please try logging in again."),a(!1),console.warn(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()()}),[r,o]),(0,s.useEffect)((function(){t&&(i!==g.current.inProgress&&t({inProgress:i}),p!==g.current.loginSuccess&&t({loginSuccess:p}),u!==g.current.loginError&&t({loginError:u}),g.current={inProgress:i,loginSuccess:p,loginError:u})}),[i,p,u,t]),[i,u,p]}({email:m.email,password:m.password},t),D=(0,E.Z)(T,2),L=D[0],B=D[1],$=l.submitBlocked,A=n&&!w&&$||!0===L,F=function(e){var t=e.id,r=e.value,n=l.errors,i=function(e){return k[e]||null}(t);if(i){var a=N(N({},n),{},(0,o.Z)({},t,i(r)||void 0)),s=Object.keys(a).some((function(e){return!!a[e]}));d((function(e){return N(N({},e),{},{errors:a,submitBlocked:s})}))}},R=function(e,t){var r=e.id,n=e.value;d((function(e){return N(N({},e),{},{values:N(N({},e.values),{},(0,o.Z)({},r,n))})})),"email"===r&&c(n),(l.touched[r]||t)&&F({id:r,value:n})},W=function(e,t){var r=e.currentTarget,o=r.id,n=r.value;R({id:o,value:n},t)},_=function(e){var t=e.target,r=t.id,n=t.value;d((function(e){return N(N({},e),{},{touched:N(N({},e.touched),{},(0,o.Z)({},r,!0))})})),F({id:r,value:n})},I=function(e){var t=e.animationName,r=e.currentTarget;if(t===X.name&&r){var o=r,n=o.id,i=o.value;R({id:n,value:i}),P(!0)}},K=J(I),q=(0,E.Z)(K,1)[0],Q=J(I),ee=(0,E.Z)(Q,1)[0];return(0,b.jsxs)(V,{children:[B&&(0,b.jsx)(x,{errorPolicyMap:i,error:B,cta:a}),(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!w&&A||(y({email:l.values.email,password:l.values.password}),F({id:"email",value:l.values.email}),F({id:"password",value:l.values.password}))},action:"#",noValidate:!0,children:[(0,b.jsx)(Y,{error:!!l.errors.email,isAutoFill:C,children:(0,b.jsx)(M.y,{id:"email",fieldLabel:"Email address",type:"email",autoComplete:"email",ref:q,onChange:function(e){return W(e)},onBlur:_,value:l.values.email,error:!!l.errors.email,errorMessage:l.errors.email,placeholder:w?" ":void 0})}),(0,b.jsx)(Y,{error:!!l.errors.password,isHidden:!C&&!f,isHiddenAutofill:C&&!f,children:(0,b.jsx)(M.y,{id:"password",fieldLabel:"Password",type:f?"text":"password",autoComplete:"password",ref:ee,onChange:function(e){return W(e)},rightContent:(0,b.jsx)(U,{type:"button",onClick:function(e){e.preventDefault(),g(!f)},visible:!!l.values.password,children:(0,b.jsx)(j.x.UIButton,{size:"xs",children:f?"Hide":"Show"})}),onBlur:_,value:l.values.password,error:!!l.errors.password,errorMessage:l.errors.password,placeholder:w?" ":void 0})}),(0,b.jsx)(G,{children:(0,b.jsx)(O.z,{disabled:!w&&A,buttonType:"submit",fullWidth:!0,children:"Sign in"})})]})]})},Q=new _;function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=(0,l.F4)({from:{opacity:"0"},to:{opacity:"1"}}),oe=(0,l.zo)("div",{marginBottom:"12px",animation:".3s ".concat(re," 1 normal forwards ease-in")}),ne=function(e){var t=e.error,r=function(e,t,r){var o=e.policyMap,n=t&&"string"===typeof t?t:"default",i=o.find((function(e){var t=e.match;return n.includes(t)}))||o[o.length-1],a=i.copy,s=i.ctaType,c={copy:a};return e.ctaTypes&&s&&(c.cta=te(te(te({},e.ctaTypes[s]),r||{}),{},{copy:e.ctaTypes[s].copy})),c}(e.errorPolicyMap,t).copy;return(0,b.jsx)(oe,{children:(0,b.jsx)(h.j,{type:"warning",textSize:"large",children:r})})},ie=function(e){return!(e&&e.length>0)},ae={email:function(e){return ie(e)?"Email address must not be blank.":/\S+@\S+\.\S+/.test(e)?null:"Email address must be valid."},password:function(e){return ie(e)?"Password must not be blank.":null}};(0,l.zo)("div",{display:"flex",flexGrow:1,textAlign:"center",justifyContent:"center",variants:{borders:{true:{"@desktop":{marginLeft:"-12px",paddingLeft:"12px",borderLeft:"1px solid $colors$grayscaleSilver"}}}}}),(0,l.zo)("div",{width:"100%",textAlign:"left",padding:"48px 0","> h2":{marginBottom:"4px"},"> p":{marginBottom:"24px"},"@tablet":{maxWidth:"498px"},"@desktop":{borderTop:"unset",maxWidth:"432px",textAlign:"center",padding:"unset"},variants:{borders:{true:{borderTop:"1px solid $colors$grayscaleSilver",borderBottom:"1px solid $colors$grayscaleSilver","@desktop":{borderTop:"unset",borderBottom:"unset"}}}}}),(0,l.zo)("div",{textAlign:"center"});function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue,le,de={fontSize:D.c.mobile.uiParagraphLarge.fontSize,fontWeight:D.c.mobile.uiParagraphLarge.fontWeight,fontFamily:D.c.mobile.uiParagraphLarge.fontFamily,color:L.O.grayscaleCharcoal,"-webkit-text-fill-color":L.O.grayscaleCharcoal},pe=(0,l.zo)("div",{textAlign:"left"}),fe=(0,l.F4)({from:{},to:{}}),ge=(0,l.zo)("div",{transition:"$productiveP2S",transitionProperty:"margin-bottom",marginBottom:"12px",overflow:"hidden",padding:".5px 0","@tablet":{height:"61px"},variants:{error:{true:{height:"82px"}},isAutoFill:{true:{"input:-webkit-autofill":{transform:"scale(1.1)",transformOrigin:"top left",opacity:"0.83"}}}},"input, input:hover, input:focus, input:active":ce(ce({},de),{},{filter:"none","&:-webkit-autofill::first-line":ce({},de),"&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":ce(ce({},de),{},{animationName:fe,boxShadow:"0 0 0 1000px $grayscaleWhite inset",transition:"background-color 1s linear 5000s",backgroundClip:"content-box"})}),"input:autofill":{background:"transparent"}}),he=(0,l.zo)("div",{display:"flex",justifyContent:"center",marginTop:"24px"}),me=function(e){var t=e.submitCallback,r=e.validationRequired,n=void 0!==r&&r,i=e.errorPolicyMap,a=e.prepopulateValue,c=e.initialError,u=(0,s.useState)({touched:{email:!1},values:{email:a||""},errors:{email:void 0},submitBlocked:!0}),l=u[0],d=u[1],p=(0,s.useState)({email:""}),f=p[0],g=p[1],h=(0,s.useState)(!!a),m=h[0],y=h[1],v=!l.values.email,x=m&&v,w=function(e,t){var r=e.email,o=(0,s.useState)(!1),n=o[0],i=o[1],a=(0,s.useState)(""),c=a[0],u=a[1],l=(0,s.useState)(!1),d=l[0],p=l[1],f=(0,s.useRef)({inProgress:n,submitSuccess:d,submitError:c});return(0,s.useEffect)((function(){r&&function(){var e=(0,z.Z)(H().mark((function e(){var t,o;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!1),u(""),p(!1),i(!0),e.prev=2,e.next=5,Q.changePassword({email:r});case 5:t=e.sent,(o=t.error)?(u(o),i(!1)):p(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),u("Oops! Something went wrong, please try again."),i(!1),console.warn(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()()}),[r]),(0,s.useEffect)((function(){t&&(n!==f.current.inProgress&&t({inProgress:n}),d!==f.current.submitSuccess&&t({submitSuccess:d}),c!==f.current.submitError&&t({submitError:c}),f.current={inProgress:n,submitSuccess:d,submitError:c})}),[n,d,c,t]),[n,c,d]}({email:f.email},t),k=(0,E.Z)(w,2),j=k[0],P=k[1],S=l.submitBlocked,C=n&&!m&&S||!0===j,T=function(e){var t=e.id,r=e.value,n=l.errors,i=function(e){return ae[e]||null}(t);if(i){var a=ce(ce({},n),{},(0,o.Z)({},t,i(r)||void 0)),s=Object.keys(a).some((function(e){return!!a[e]}));d((function(e){return ce(ce({},e),{},{errors:a,submitBlocked:s})}))}},D=function(e,t){var r=e.id,n=e.value;d((function(e){return ce(ce({},e),{},{values:ce(ce({},e.values),{},(0,o.Z)({},r,n))})})),(l.touched[r]||t)&&T({id:r,value:n})},L=function(e){var t=(0,s.useRef)(null);return[(0,s.useCallback)((function(r){t.current&&t.current.removeEventListener&&t.current.removeEventListener("animationstart",e),r&&r.addEventListener("animationstart",e),t.current=r}),[e])]}((function(e){var t=e.animationName,r=e.currentTarget;if(t===fe.name&&r){var o=r,n=o.id,i=o.value;D({id:n,value:i}),y(!0)}})),B=(0,E.Z)(L,1)[0];return(0,b.jsxs)(pe,{children:[(P||c)&&(0,b.jsx)(ne,{errorPolicyMap:i,error:c||P}),(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!m&&C||(g({email:l.values.email}),T({id:"email",value:l.values.email}))},action:"#",noValidate:!0,children:[(0,b.jsx)(ge,{error:!!l.errors.email,isAutoFill:x,children:(0,b.jsx)(M.y,{id:"email",fieldLabel:"Email address",type:"email",autoComplete:"email",ref:B,onChange:function(e){return function(e,t){var r=e.currentTarget,o=r.id,n=r.value;D({id:o,value:n},t)}(e,!0)},onBlur:function(e){var t=e.target,r=t.id,n=t.value;d((function(e){return ce(ce({},e),{},{touched:ce(ce({},e.touched),{},(0,o.Z)({},r,!0))})})),T({id:r,value:n})},value:l.values.email,error:!!l.errors.email,errorMessage:l.errors.email,placeholder:m?" ":void 0})}),(0,b.jsx)(he,{children:(0,b.jsx)(O.z,{disabled:!m&&C,buttonType:"submit",fullWidth:!0,children:"Email me instructions"})})]})]})},be=r(9440),ye=r(9126),ve=r(7466),xe=JSON.parse('{"px":{"policyMap":[{"match":"set up a password","copy":"It appears you haven\u2019t set up a password for your account yet.","ctaType":"createPassword"},{"match":"access_denied","copy":"The information you entered is incorrect. Try again or.","ctaType":"default"},{"match":"invalid_user_password","copy":"The information you entered is incorrect. Try again or","ctaType":"default"},{"match":"too_many_attempts","copy":"You\u2019ve reached the maximum number of login attempts. Please","ctaType":"default"},{"match":"password_leaked","copy":"Your password needs to be reset. Please","ctaType":"default"},{"match":"default","copy":"Oops! Something went wrong, please try logging in again or","ctaType":"default"}],"ctaTypes":{"default":{"copy":"reset your password.","href":"/account/forgot-password"},"createPassword":{"copy":"reset your password.","href":"/account/forgot-password"}}},"id":{"policyMap":[{"match":"default","copy":"Oops! Something went wrong, please try again."}]},"TJ":{"J":"reset your password."},"sW":{"guestCheckout":{"headerText":"Checkout as a guest","subHeaderText":"Easily track and manage your order (with the option to create an account later).","cta":{"type":"button","copy":"Continue","href":"/checkout/step"}},"signUp":{"headerText":"Create account","subHeaderText":"Easily save and manage your prescriptions, addresses, and payment information.","cta":{"type":"button","copy":"Create account","href":"/login?isSignup=true"}},"signIn":{"headerText":"Sign in","subHeaderText":"Access your saved prescriptions, addresses, and payment information for a fast checkout.","cta":{"type":"text","copy":"Forgot password?"}},"forgotPassword":{"headerText":"Forgot your password?","subHeaderText":"No problem! We\u2019ll send instructions to your inbox so you can reset your passsword.","cta":{"type":"text","copy":"Go back to sign in"},"successConfig":{"headerText":"We received your request","subHeaderText":"If your email address has a Warby Parker account associated with it, you will receive an email in a few seconds.","cta":{"type":"button","copy":"Go back to sign in","href":"#"}}},"changePassword":{"headerText":"Change your password","subHeaderText":"We\u2019ll send instructions to your inbox so you can change your passsword.","cta":{"type":"text","copy":"Go back to profile","href":"/account/profile"},"successConfig":{"headerText":"Instructions sent","subHeaderText":"You should receive an email in a few seconds. Didn\u2019t get it? Check your spam folder.","cta":{"type":"button","copy":"Go back to profile","href":"/account/profile"}}}}}');function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=(null===(ue=(0,i.default)())||void 0===ue||null===(le=ue.publicRuntimeConfig)||void 0===le?void 0:le.nextPublicRootUrl)||null,Oe=function(){var e=xe.sW.guestCheckout,t=e.headerText,r=e.subHeaderText,o=e.cta,n=(0,c.r)().trackEvent;return(0,b.jsx)(T,{headerText:t,subHeaderText:r,cta:o,ctaClickHandler:function(){return n({action:u.ld.ClickGuestCheckoutLink,label:u.YX.ClickGuestCheckoutLink})}})},Pe=function(){var e=xe.sW.signUp,t=e.headerText,r=e.subHeaderText,o=e.cta,n=(0,c.r)().trackEvent;return(0,b.jsx)(T,{headerText:t,subHeaderText:r,cta:o,ctaClickHandler:function(){return n({action:u.ld.ClickCreateAccountLink,label:u.YX.ClickCreateAccountLink})}})},Se=function(e){var t=e.passwordResetLink,r=e.clickPasswordReset,o=e.submitCallback,n=e.borders,i=e.updateEmailValue,a=xe.sW.signIn,s=a.headerText,l=a.subHeaderText,d=a.cta,p=(0,c.r)().trackEvent;return(0,b.jsx)(T,{headerText:s,subHeaderText:l,cta:ke(ke({},d),{},{href:t}),ctaClickHandler:function(e){r(e),p({action:u.ld.ClickForgotPassword,label:u.YX.ClickForgotPassword})},borders:n,children:(0,b.jsx)(q,{submitCallback:o,errorPolicyMap:xe.px,errorMessageCta:{copy:xe.TJ.J,href:t,onClick:function(){return p({action:u.ld.ClickResetPassword,label:u.YX.ClickResetPassword})}},updateEmailValue:i,validationRequired:!0})})},Ce={textAlign:"center","svg, circle, path":{fill:"$coreBluesBlue"}},Te=function(e){var t=e.submitCallback,r=e.isForgotPassword,o=e.clickBackToSignIn,n=e.changePasswordSuccess,i=e.prepopulateValue,a=e.initialError,s=xe.sW,c=s.forgotPassword,u=s.changePassword,l=r?c:u,d=l.headerText,p=l.subHeaderText,f=l.cta,g=l.successConfig;return n?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(T,{headerText:g.headerText,subHeaderText:g.subHeaderText,cta:g.cta,css:Ce,iconComponent:function(){return(0,b.jsx)(ve.Z,{width:"60",height:"60"})},ctaClickHandler:function(e){e.preventDefault(),r?o(e):window.location.href=g.cta.href},borders:!1})}):(0,b.jsx)(T,{headerText:d,subHeaderText:p,cta:f,ctaClickHandler:function(e){r&&o(e)},borders:!1,children:(0,b.jsx)(me,{initialError:a,submitCallback:t,errorPolicyMap:xe.id,prepopulateValue:i,validationRequired:!0})})},Ee=(0,l.zo)("div",{padding:"3px 0","@tablet":{padding:"68px 0"},"@desktop":{padding:"96px 0"},variants:{showChangePassword:{true:{padding:"52px 0","@tablet":{padding:"73px 0"}}}}}),De=(0,l.zo)("div",{marginTop:"-97px",height:"97px",backgroundColor:"white"}),Le=(0,l.zo)("div",{marginBottom:"-1000px",height:"1000px",backgroundColor:"white"}),ze=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],o=(0,s.useState)(!1),i=o[0],l=o[1],f=(0,s.useState)(""),g=f[0],h=f[1],m=(0,s.useState)(!1),y=m[0],v=m[1],x=(0,s.useState)(!1),w=x[0],k=x[1],j=(0,a.useRouter)(),O=j.query,P=O.isCheckout,S=O.isForgotPassword,C=O.isChangePassword,T=O.expP,E=O.changePasswordError,D=P?"Checkout Sign-in":"Sign-in";D=S?"Forgot Password":D,D=C?"Change Password":D;var L="/".concat(P?"checkout":"account","/forgot-password"),z=(0,c.r)().trackEvent,B=(0,s.useState)(u.$0.LoginPage),H=B[0],$=B[1],A=(0,s.useCallback)((function(e){var t=e.inProgress,o=e.loginSuccess,n=e.loginError;t&&(r(t),z({action:u.ld.SubmitLoginForm,label:u.YX.SubmitLoginForm,category:H})),o&&z({action:u.ld.SubmitLoginSuccess,label:u.YX.SubmitLoginSuccess,category:H}),n&&(r(t),z({action:u.ld.SubmitLoginError,label:u.YX.SubmitLoginError,category:H}))}),[H]),F=(0,s.useCallback)((function(e){var t=e.inProgress,o=e.submitSuccess,n=e.submitError;t&&r(!0),o&&(r(!1),l(!0)),n&&r(!1)}),[]),R=(0,c.r)({category:u.$0.LoginPage}).Track,W=(0,c.r)({category:u.$0.CheckoutLoginPage}).Track,_=(0,s.useContext)(be.p).setHeaderVariant,Z=(0,s.useContext)(ye.f).setFooterVariant,M=(0,s.useState)(!1),I=M[0],N=M[1],K=(0,s.useState)(!0),V=K[0],X=K[1];(0,s.useEffect)((function(){j.isReady&&"true"===P?(_("minimal"),$(u.$0.CheckoutLoginPage),N(!0),X(!1)):j.isReady&&!P&&($(u.$0.LoginPage),N(!0),X(!1)),j.isReady&&S&&(_("minimal"),k(!0)),j.isReady&&C&&(_("minimal"),v(!0)),Z("minimal")}),[P,j,S,C,_,Z,N,k,v]),(0,s.useEffect)((function(){I&&H&&z({category:H,action:u.ld.LoginPageImpression,label:u.YX.LoginPageImpression})}),[I,H]);var Y=function(){X(!1)},G=P?W:R,U=T&&(y||w);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(n.default,{children:[(0,b.jsxs)("title",{children:[D," | Warby Parker"]}),(0,b.jsx)("meta",{property:"og:title",content:"{pageTitle} | Warby Parker"},"title"),(0,b.jsx)("link",{rel:"icon",href:"/favicon.ico"}),je&&(0,b.jsx)("base",{href:je})]}),V&&(0,b.jsx)(De,{onClick:Y}),(0,b.jsx)(d.f,{isLoading:t||!I,loadingOpacity:0,children:I&&(0,b.jsx)(G,{children:(0,b.jsxs)(Ee,{showChangePassword:!!U,children:[U&&(0,b.jsx)(p.k,{children:(0,b.jsx)(p.M,{columns:{default:[1,4],tablet:[2,7],desktop:[3,10]},children:(0,b.jsx)(Te,{submitCallback:F,isForgotPassword:w,clickBackToSignIn:function(e){e.preventDefault(),k(!1),l(!1)},changePasswordSuccess:i,prepopulateValue:g,initialError:E?"default":void 0})})}),!U&&(0,b.jsxs)(p.k,{children:[(0,b.jsx)(p.M,{columns:{default:[1,4],tablet:[2,7],desktop:[1,6]},children:P?(0,b.jsx)(Oe,{}):(0,b.jsx)(Pe,{})}),(0,b.jsx)(p.M,{columns:{default:[1,4],tablet:[2,7],desktop:[7,12]},children:(0,b.jsx)(Se,{passwordResetLink:L,clickPasswordReset:function(e){T&&(e.preventDefault(),k(!0))},submitCallback:A,updateEmailValue:function(e){h(e)},borders:!0})})]})]})})}),V&&(0,b.jsx)(Le,{onClick:Y})]})}},3883:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth0/login",function(){return r(7134)}])},9008:function(e,t,r){e.exports=r(639)}},function(e){e.O(0,[365,774,888,179],(function(){return t=3883,e(e.s=t);var t}));var t=e.O();_N_E=t}]);