"use strict";(self.webpackChunklotus=self.webpackChunklotus||[]).push([[139],{4084:function(e,t,i){i.d(t,{Z:function(){return g}});var o=i(259),r=i(1082),a=i(5893),n=(0,o.default)(r.Link).withConfig({displayName:"postCard__PostLinkItem",componentId:"sc-1jktgyi-0"})(["color:var(--theme-ui-colors-text);text-decoration:none;&:visited{color:var(--theme-ui-colors-text);}"]),s=o.default.article.withConfig({displayName:"postCard__Card",componentId:"sc-1jktgyi-1"})(["border:1px solid var(--theme-ui-colors-border);border-radius:4px;transition:color 0.15s ease-out,background 0.15s ease-out,transform 0.15s ease-out,box-shadow 0.15s ease-out,border 0.15s ease-out;display:flex;flex-direction:row;@media only screen and (max-device-width:600px){}"]),d=o.default.div.withConfig({displayName:"postCard__Frontmatter",componentId:"sc-1jktgyi-2"})(["padding:0.2em 0.5em;font-family:var(--main-font);h2{margin:0;padding:0;font-size:1.3em;}"]),l=o.default.h2.withConfig({displayName:"postCard__Title",componentId:"sc-1jktgyi-3"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-text);"]),c=o.default.p.withConfig({displayName:"postCard__Excerpt",componentId:"sc-1jktgyi-4"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-mute);"]),p=o.default.div.withConfig({displayName:"postCard__Data",componentId:"sc-1jktgyi-5"})(["display:flex;flex-direction:column;justify-content:space-between;"]),u=function(e){var t=e.slug,i=e.title,o=(e.date,e.excerpt);return(0,a.jsx)(s,{children:(0,a.jsx)(d,{children:(0,a.jsxs)(n,{to:"/post/"+t,children:[(0,a.jsx)(l,{children:i}),(0,a.jsx)(p,{children:(0,a.jsx)(c,{children:o})})]})})})},m=o.default.div.withConfig({displayName:"pagination__PagenationWrapper",componentId:"sc-b6h10r-0"})(["display:flex;justify-content:center;margin:2em 0;"]),f=(0,o.default)(r.Link).withConfig({displayName:"pagination__PagenationLink",componentId:"sc-b6h10r-1"})(["width:30px;height:30px;border:0px;border-radius:2px;border:1px solid var(--theme-ui-colors-border);color:var(--theme-ui-colors-text);text-decoration:none;display:grid;place-items:center;margin:0.15em;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}"]),x=function(e){var t=e.numPages,i=e.tag,o=e.series;return(0,a.jsx)(m,{children:Array.from({length:t}).map((function(e,t){return(0,a.jsx)(f,{to:t+1===1?"/"+(i?"tag/"+i:o?"series/"+o:null):"/"+(i?"tag/"+i+"/":o?"series/"+o+"/":null)+(t+1),children:t+1},t)}))})},h=o.default.div.withConfig({displayName:"postList__Posts",componentId:"sc-1xnmpxy-0"})(["grid-template-columns:repeat(auto-fill,minmax(400px,1fr));display:grid;gap:20px;@media only screen and (max-device-width:600px){grid-template-columns:1fr;}"]),g=function(e){var t=e.posts,i=e.numPages,o=e.usePagination,r=e.tag,n=e.series;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{children:t&&t.map((function(e,t){return(0,a.jsx)(u,{slug:e.frontmatter.slug,title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt||""},e.id)}))}),void 0===o&&i||o&&i?(0,a.jsx)(x,{tag:r,series:n,numPages:i}):""]})}},4001:function(e,t,i){var o=i(1082),r=i(5893);t.Z=function(e){var t=e.title,i=e.date,a=e.description,n=e.slug,s=(0,o.useStaticQuery)("684682641");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("title",{children:[t," | ",s.site.siteMetadata.title]}),(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{name:"description",content:s.site.siteMetadata.description}),(0,r.jsx)("meta",{httpEquiv:"Author",content:s.site.siteMetadata.nickname}),(0,r.jsx)("meta",{property:"og:image",content:s.site.siteMetadata.logo}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:s.site.siteMetadata.title}),i&&(0,r.jsx)("meta",{name:"Date",content:i}),a&&(0,r.jsx)("meta",{property:"og:description",content:a}),n&&(0,r.jsx)("meta",{property:"og:url",content:s.site.siteMetadata.siteUrl+n})]})}},7512:function(e,t,i){i.r(t),i.d(t,{Head:function(){return u}});var o=i(7294),r=i(259),a=i(4307),n=i(4084),s=i(4001),d=i(5893),l=r.default.input.withConfig({displayName:"search__SearchInput",componentId:"sc-1iyf28w-0"})(["background-color:transparent;border:0;color:var(--theme-ui-colors-text);font-family:var(--main-font);font-size:1em;width:380px;&:focus{outline:0;}&::placeholder{color:var(--theme-ui-colors-mute);opacity:80%;font-style:italic;}"]),c=r.default.div.withConfig({displayName:"search__SearchDiv",componentId:"sc-1iyf28w-1"})(["width:380px;position:relative;display:flex;&::after{content:' ';background-color:var(--theme-ui-colors-text);transform:translateX(0px);width:381px;height:1px;bottom:-4px;position:absolute;}"]),p=r.default.div.withConfig({displayName:"search__SearchWapper",componentId:"sc-1iyf28w-2"})(["display:grid;place-items:center;padding:3em 0;"]);t.default=function(e){var t=e.data,i=(0,o.useState)(),r=i[0],s=i[1];(0,o.useEffect)((function(){s((function(e){return t.allMarkdownRemark.nodes}))}),[]);return(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(p,{children:(0,d.jsx)(c,{children:(0,d.jsx)(l,{type:"text",onChange:function(e){var i=t.allMarkdownRemark.nodes.filter((function(t){var i,o=e.target.value,r=t.frontmatter.title.toLowerCase(),a=(null===(i=t.rawMarkdownBody)||void 0===i?void 0:i.toLowerCase())||"",n=o.toLowerCase().split(" ");return""===o||n.map((function(e){return""!==e&&(-1!==r.search(e)||-1!==a.search(e))})).includes(!0)}));s((function(e){return i}))},placeholder:"Search..."})})}),(0,d.jsx)(n.Z,{posts:r})]})};var u=function(){return(0,d.jsx)(s.Z,{title:"Search"})}}}]);
//# sourceMappingURL=component---src-templates-search-tsx-99e141f3d04385ab121e.js.map