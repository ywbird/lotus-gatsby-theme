"use strict";(self.webpackChunklotus=self.webpackChunklotus||[]).push([[902],{4084:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(259),i=o(1597),r=o(5893),n=(0,a.default)(i.Link).withConfig({displayName:"postCard__PostLinkItem",componentId:"sc-1jktgyi-0"})(["color:var(--theme-ui-colors-text);text-decoration:none;&:visited{color:var(--theme-ui-colors-text);}"]),d=a.default.article.withConfig({displayName:"postCard__Card",componentId:"sc-1jktgyi-1"})(["border:1px solid var(--theme-ui-colors-border);border-radius:4px;transition:color 0.15s ease-out,background 0.15s ease-out,transform 0.15s ease-out,box-shadow 0.15s ease-out,border 0.15s ease-out;display:flex;flex-direction:row;@media only screen and (max-device-width:600px){}"]),s=a.default.div.withConfig({displayName:"postCard__Frontmatter",componentId:"sc-1jktgyi-2"})(["padding:0.2em 0.5em;font-family:var(--main-font);h2{margin:0;padding:0;font-size:1.3em;}"]),l=a.default.h2.withConfig({displayName:"postCard__Title",componentId:"sc-1jktgyi-3"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-text);"]),c=a.default.p.withConfig({displayName:"postCard__Excerpt",componentId:"sc-1jktgyi-4"})(["display:-webkit-box;-moz-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden;word-break:break-all;color:var(--theme-ui-colors-mute);"]),p=a.default.div.withConfig({displayName:"postCard__Data",componentId:"sc-1jktgyi-5"})(["display:flex;flex-direction:column;justify-content:space-between;"]),m=function(e){var t=e.slug,o=e.title,a=(e.date,e.excerpt);return(0,r.jsx)(d,{children:(0,r.jsx)(s,{children:(0,r.jsxs)(n,{to:"/post/"+t,children:[(0,r.jsx)(l,{children:o}),(0,r.jsx)(p,{children:(0,r.jsx)(c,{children:a})})]})})})},u=a.default.div.withConfig({displayName:"pagination__PagenationWrapper",componentId:"sc-b6h10r-0"})(["display:flex;justify-content:center;margin:2em 0;"]),g=(0,a.default)(i.Link).withConfig({displayName:"pagination__PagenationLink",componentId:"sc-b6h10r-1"})(["width:30px;height:30px;border:0px;border-radius:2px;border:1px solid var(--theme-ui-colors-border);color:var(--theme-ui-colors-text);text-decoration:none;display:grid;place-items:center;margin:0.15em;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}"]),x=function(e){var t=e.numPages,o=e.tag;return(0,r.jsx)(u,{children:Array.from({length:t}).map((function(e,t){return(0,r.jsx)(g,{to:t+1===1?"/"+(o?"tag/"+o:""):"/"+(o?"tag/"+o+"/":"")+(t+1),children:t+1},t)}))})},f=a.default.div.withConfig({displayName:"postList__Posts",componentId:"sc-1xnmpxy-0"})(["grid-template-columns:repeat(auto-fill,minmax(400px,1fr));display:grid;gap:20px;@media only screen and (max-device-width:600px){grid-template-columns:1fr;}"]),h=function(e){var t=e.posts,o=e.numPages,a=e.usePagination,i=e.tag;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{children:t&&t.map((function(e,t){return(0,r.jsx)(m,{slug:e.frontmatter.slug,title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt||""},e.id)}))}),void 0===a&&o||a&&o?(0,r.jsx)(x,{tag:i,numPages:o}):""]})}},5848:function(e,t,o){o.r(t),o.d(t,{Head:function(){return d}});var a=o(4307),i=o(4001),r=o(4084),n=o(5893),d=function(e){var t=e.pageContext;return(0,n.jsx)(i.Z,{title:t.tag})};t.default=function(e){var t=e.pageContext,o=e.data,i={numPages:t.tagNumPages};return(0,n.jsx)(a.Z,{pageTitle:t.tag,children:(0,n.jsx)(r.Z,Object.assign({posts:o.allMarkdownRemark.nodes,tag:t.tag},i))})}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-9298025197d90b95d79a.js.map