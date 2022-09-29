"use strict";(self.webpackChunkLotus=self.webpackChunkLotus||[]).push([[430],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,o=!1,r=0;r<e.length;r++){var a=e[r];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,o=n,n=!0,r++):n&&o&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,r-1)+"-"+e.slice(r-1),o=n,n=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,o=n,n=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},6296:function(e,t,n){n.d(t,{G:function(){return T},L:function(){return p},M:function(){return k},P:function(){return x},S:function(){return A},_:function(){return l},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return s}});var o=n(7294),r=(n(4811),n(5697)),a=n.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t.indexOf(n=a[o])>=0||(r[n]=e[n]);return r}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n,o,r){return void 0===r&&(r={}),i({},n,{loading:o,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,n,o,r,a,l,s){var c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=o,c.height=r,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var f,g=["children"],m=function(e){var t=e.layout,n=e.width,r=e.height;return"fullWidth"===t?o.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?o.createElement("div",{style:{maxWidth:n,display:"block"}},o.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,n=l(e,g);return o.createElement(o.Fragment,null,o.createElement(m,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,r=e.loading,a=e.alt,s=void 0===a?"":a,c=e.shouldLoad,d=l(e,h);return o.createElement("img",i({},d,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},b=function(e){var t=e.fallback,n=e.sources,r=void 0===n?[]:n,a=e.shouldLoad,s=void 0===a||a,c=l(e,y),d=c.sizes||(null==t?void 0:t.sizes),u=o.createElement(v,i({},c,t,{sizes:d,shouldLoad:s}));return r.length?o.createElement("picture",null,r.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return o.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:d})})),u):u};v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],x=function(e){var t=e.fallback,n=l(e,w);return t?o.createElement(b,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):o.createElement("div",i({},n))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(f=b.propTypes)?void 0:f.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var k=function(e){return o.createElement(o.Fragment,null,o.createElement(b,i({},e)),o.createElement("noscript",null,o.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;var C,_,I=function(e,t,n){for(var o=arguments.length,r=new Array(o>3?o-3:0),i=3;i<o;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?a().string.apply(a(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:a().object.isRequired,alt:I},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],j=new Set,E=function(e){var t=e.as,r=void 0===t?"div":t,a=e.image,c=e.style,d=e.backgroundColor,u=e.className,f=e.class,g=e.onStartLoad,m=e.onLoad,p=e.onError,h=l(e,L),y=a.width,v=a.height,b=a.layout,w=function(e,t,n){var o={},r="gatsby-image-wrapper";return"fixed"===n?(o.width=e,o.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:o}}(y,v,b),x=w.style,k=w.className,I=l(w,N),S=(0,o.useRef)(),E=(0,o.useMemo)((function(){return JSON.stringify(a.images)}),[a.images]);f&&(u=f);var T=function(e,t,n){var o="";return"fullWidth"===e&&(o='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(o='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),o}(b,y,v);return(0,o.useEffect)((function(){C||(C=Promise.all([n.e(774),n.e(989)]).then(n.bind(n,5989)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return _=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,o=S.current.querySelector("[data-gatsby-image-ssr]");return o&&s()?(o.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){o.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){o.removeAttribute("data-gatsby-image-ssr")}),0)})),void j.add(E)):_&&j.has(E)?void 0:(C.then((function(n){var o=n.renderImageToString,r=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=o(i({isLoading:!0,isLoaded:j.has(E),image:a},h)),j.has(E)||(e=requestAnimationFrame((function(){S.current&&(t=r(S.current,E,j,c,g,m,p))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[a]),(0,o.useLayoutEffect)((function(){j.has(E)&&_&&(S.current.innerHTML=_(i({isLoading:j.has(E),isLoaded:j.has(E),image:a},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,o.createElement)(r,i({},I,{style:i({},x,c,{backgroundColor:d}),className:k+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,o.memo)((function(e){return e.image?(0,o.createElement)(E,e):null}));T.propTypes=S,T.displayName="GatsbyImage";var z,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],O=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(o)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),R={src:a().string.isRequired,alt:I,width:O,height:O,sizes:a().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(z=T,function(e){var t=e.src,n=e.__imageData,r=e.__error,a=l(e,q);return r&&console.warn(r),n?o.createElement(z,i({image:n},a)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=R},5301:function(e,t,n){n.d(t,{Z:function(){return T}});var o=n(3494),r=n(1597),a=n(7294),i=n(6296),l=n(5893),s=o.default.h1.withConfig({displayName:"header__SiteTitle",componentId:"sc-qbzbbh-0"})(["font-size:2rem;color:gray;font-weight:700;margin:1rem auto 1rem 0;display:flex;align-items:center;justify-content:space-between;"]),c=(0,o.default)(r.rU).withConfig({displayName:"header__SiteTitleLink",componentId:"sc-qbzbbh-1"})(["text-decoration:none;color:var(--font-color);font-family:var(--main-font);"]),d=(0,o.default)(r.rU).withConfig({displayName:"header__SiteLogo",componentId:"sc-qbzbbh-2"})(["display:flex;flex-direction:column;padding-right:7px;"]),u=o.default.ul.withConfig({displayName:"header__NavLinks",componentId:"sc-qbzbbh-3"})(["display:flex;list-style:none;padding-left:0;"]),f=o.default.li.withConfig({displayName:"header__NavItem",componentId:"sc-qbzbbh-4"})(["margin:0 2rem 0 0;&:first-child{padding-left:0;}&::after{content:'|';margin:0 0 0 2rem;white-space:pre;color:var(--font-color);pointer-events:none;}"]),g=(0,o.default)(r.rU).withConfig({displayName:"header__NavLink",componentId:"sc-qbzbbh-5"})(["color:var(--font-color);font-family:var(--main-font);text-decoration:none;"]),m=o.default.a.withConfig({displayName:"header__NavLinkA",componentId:"sc-qbzbbh-6"})(["color:var(--font-color);font-family:var(--main-font);text-decoration:none;"]),p=o.default.div.withConfig({displayName:"header__HeaderElement",componentId:"sc-qbzbbh-7"})(["border-bottom:1px solid var(--border-color);position:sticky;width:100%;top:0;z-index:2;opacity:90%;"]),h=o.default.header.withConfig({displayName:"header__HeaderLinks",componentId:"sc-qbzbbh-8"})(["margin:auto;max-width:1000px;margin-top:1rem;display:flex;flex-direction:row;background-color:var(--background-color);z-index:1;align-items:baseline;"]),y=o.default.div.withConfig({displayName:"header__ToggleColorTheme",componentId:"sc-qbzbbh-9"})(["font-family:var(--main-font);width:2.5em;cursor:pointer;"]),v=function(){var e,t,o,v,b,w="undefined"!=typeof window,x="undefined"!=typeof document,k=(0,a.useState)("dark"),C=k[0],_=k[1];(0,a.useEffect)((function(){if(_(w&&window.localStorage.getItem("darkMode")||"true"),x&&w){var e=window.localStorage.getItem("darkMode");"true"===e?document.body.className="dark-mode":"false"===e&&(document.body.className="light-mode")}}),[]);var I=(0,r.K2)("4226490459");return(0,l.jsx)(p,{children:(0,l.jsxs)(h,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)(d,{to:"/",children:(0,l.jsx)(i.S,{src:"../images/logo.svg",alt:"logo",width:40,__imageData:n(1832)})}),(0,l.jsx)(c,{to:"/",children:null===(e=I.site)||void 0===e||null===(t=e.siteMetadata)||void 0===t?void 0:t.title})]}),(0,l.jsx)("nav",{children:(0,l.jsx)(u,{children:null===(o=I.site)||void 0===o||null===(v=o.siteMetadata)||void 0===v||null===(b=v.navigation)||void 0===b?void 0:b.map((function(e,t){var n,o,r;return(0,l.jsx)(f,{children:null!=e&&null!==(n=e.url)&&void 0!==n&&n.startsWith("https://")?(0,l.jsx)(m,{href:null!==(o=null==e?void 0:e.url)&&void 0!==o?o:"/",children:null==e?void 0:e.name}):(0,l.jsx)(g,{to:null!==(r=null==e?void 0:e.url)&&void 0!==r?r:"/",children:null==e?void 0:e.name})},t)}))})}),(0,l.jsx)(y,{onClick:function(){if(x&&w){var e=window.localStorage.getItem("darkMode")||"false";"false"===e?(_("true"),window.localStorage.setItem("darkMode","true"),document.body.className="dark-mode"):"true"===e?(_("false"),window.localStorage.setItem("darkMode","false"),document.body.className="light-mode"):window.localStorage.setItem("darkMode","true")}},children:"true"===C?"Dark":"Light"})]})})},b={fonts:{main:"Noto Sans KR, Noto Sans CJK KR, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif",code:"Source Code Pro, monospace"},colors:{light:{text:"#111111",content:"#444444",link:"#fb718a",background:"#f0f0f0",border:"#aaaaaa",primary:"#fb718a",heading:"black",button:"#333333"},dark:{text:"#eeeeee",content:"#cccccc",link:"#e47588",background:"#222222",border:"#777777",primary:"#e47588",heading:"white",button:"#cccccc"}}},w=o.default.div.withConfig({displayName:"theme__Style",componentId:"sc-h3dlw-0"})(["margin:0;color:var(--font-color);background:var(--background-color);"]),x=(0,o.createGlobalStyle)([":root{--main-font:",";--code-font:",";--font-color:",";--content-color:",";--link-color:",";--background-color:",";--border-color:",";--primary-color:",";--heading-color:",";--button-color:",";}.light-mode{--font-color:",";--content-color:",";--link-color:",";--background-color:",";--border-color:",";--primary-color:",";--heading-color:",";--button-color:",";}.dark-mode{--font-color:",";--content-color:",";--link-color:",";--background-color:",";--border-color:",";--primary-color:",";--heading-color:",";--button-color:",";}body{margin:0;position:relative;background-color:var(--background-color);}html{height:100%;}"],(function(e){return e.fonts.main}),(function(e){return e.fonts.code}),(function(e){return e.colors.light.text}),(function(e){return e.colors.light.content}),(function(e){return e.colors.light.link}),(function(e){return e.colors.light.background}),(function(e){return e.colors.light.border}),(function(e){return e.colors.light.primary}),(function(e){return e.colors.light.heading}),(function(e){return e.colors.light.button}),(function(e){return e.colors.light.text}),(function(e){return e.colors.light.content}),(function(e){return e.colors.light.link}),(function(e){return e.colors.light.background}),(function(e){return e.colors.light.border}),(function(e){return e.colors.light.primary}),(function(e){return e.colors.light.heading}),(function(e){return e.colors.light.button}),(function(e){return e.colors.dark.text}),(function(e){return e.colors.dark.content}),(function(e){return e.colors.dark.link}),(function(e){return e.colors.dark.background}),(function(e){return e.colors.dark.border}),(function(e){return e.colors.dark.primary}),(function(e){return e.colors.dark.heading}),(function(e){return e.colors.dark.button})),k=function(e){var t=e.theme,n=e.children,o="undefined"!=typeof window,r=o&&window.localStorage.getItem("darkMode")||"none";return"none"===r&&o&&window.localStorage.setItem("darkMode","true"),"undefined"!=typeof document&&(document.body.className=("true"===r?"dark":"light")+"-mode"),(0,l.jsxs)(w,Object.assign({},t,{children:[(0,l.jsx)(x,Object.assign({},t)),n]}))},C=o.default.footer.withConfig({displayName:"footer__FooterElement",componentId:"sc-hw89ci-0"})(["display:grid;place-items:center;width:100%;height:140px;position:absolute;bottom:0;"]),_=o.default.div.withConfig({displayName:"footer__FooterInner",componentId:"sc-hw89ci-1"})(["height:140px;margin:auto;max-width:1000px;font-family:var(--main-font);font-size:13px;display:flex;flex-direction:column;color:var(--font-color);justify-content:space-evenly;"]),I=o.default.div.withConfig({displayName:"footer__CopyRight",componentId:"sc-hw89ci-2"})(["display:grid;place-items:center;width:600px;padding:1em 0;"]),S=function(){(0,r.K2)("731075137");return(0,l.jsx)(C,{children:(0,l.jsx)(_,{children:(0,l.jsx)(I,{children:"© 2022 ywbird powered by Lotus. All Rights Reserved."})})})},L=o.default.div.withConfig({displayName:"layout__Body",componentId:"sc-160sp1k-0"})(["margin:auto;min-height:100vh;"]),N=o.default.div.withConfig({displayName:"layout__Container",componentId:"sc-160sp1k-1"})(["margin:0 1em;padding-bottom:160px;"]),j=o.default.h1.withConfig({displayName:"layout__Heading",componentId:"sc-160sp1k-2"})(["color:var(--font-color);font-family:var(--main-font);"]),E=o.default.main.withConfig({displayName:"layout__Main",componentId:"sc-160sp1k-3"})(["max-width:","px;margin:auto;font-family:var(--main-font);"],(function(e){var t;return null!==(t=e.maxWidth)&&void 0!==t?t:"1000"})),T=function(e){var t=e.pageTitle,n=e.maxWidth,o=e.aside,r=e.children;return(0,l.jsx)(k,{theme:b,children:(0,l.jsxs)(L,{children:[(0,l.jsx)(v,{}),(0,l.jsxs)(N,{children:[(0,l.jsxs)(E,{maxWidth:n,children:[(0,l.jsx)(j,{children:t}),r]}),o&&(0,l.jsx)(o.node,Object.assign({},o.props))]}),(0,l.jsx)(S,{})]})})}},4001:function(e,t,n){var o=n(1597),r=n(5893);t.Z=function(e){var t=e.title,n=(0,o.K2)("3159585216");return(0,r.jsxs)("title",{children:[t," - ",n.site.siteMetadata.title]})}},1832:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/lotus/static/32d25744a68866fc82e2ff6c61319067/34190/logo.svg","srcSet":"/lotus/static/32d25744a68866fc82e2ff6c61319067/ca966/logo.svg 9w,\\n/lotus/static/32d25744a68866fc82e2ff6c61319067/a2464/logo.svg 18w,\\n/lotus/static/32d25744a68866fc82e2ff6c61319067/34190/logo.svg 36w","sizes":"(min-width: 36px) 36px, 100vw"},"sources":[{"srcSet":"/lotus/static/32d25744a68866fc82e2ff6c61319067/a8d60/logo.webp 9w,\\n/lotus/static/32d25744a68866fc82e2ff6c61319067/4f7ad/logo.webp 18w,\\n/lotus/static/32d25744a68866fc82e2ff6c61319067/9a807/logo.webp 36w","type":"image/webp","sizes":"(min-width: 36px) 36px, 100vw"}]},"width":40,"height":40}')}}]);
//# sourceMappingURL=ca9103ab496b433379e6dd0be99c2293bafa03ef-37f901db72ae58d9c535.js.map