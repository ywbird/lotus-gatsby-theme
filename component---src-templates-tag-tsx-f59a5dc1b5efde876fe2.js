"use strict";(self.webpackChunkLotus=self.webpackChunkLotus||[]).push([[902],{4084:function(t,e,a){a.d(e,{Z:function(){return w}});var o=a(259),r=a(1597),i=a(6296),n=a(5893),d=(0,o.default)(r.rU).withConfig({displayName:"postCard__PostLinkItem",componentId:"sc-8vvpmz-0"})(["color:var(--theme-ui-colors-text);text-decoration:none;&:visited{color:var(--theme-ui-colors-text);}"]),s=o.default.article.withConfig({displayName:"postCard__Card",componentId:"sc-8vvpmz-1"})(["height:200px;border:1px solid var(--theme-ui-colors-border);border-radius:4px;transition:color 0.15s ease-out,background 0.15s ease-out,transform 0.15s ease-out,box-shadow 0.15s ease-out,border 0.15s ease-out;display:flex;flex-direction:row;&:hover{}"]),l=o.default.div.withConfig({displayName:"postCard__Frontmatter",componentId:"sc-8vvpmz-2"})(["padding:0.2em 0.5em;font-family:var(--main-font);width:490px;h2{margin:0;padding:0;font-size:1.3em;}"]),p=o.default.p.withConfig({displayName:"postCard__Excerpt",componentId:"sc-8vvpmz-3"})(["overflow:hidden;display:-webkit-box;-webkit-line-clamp:6;-moz-box-orient:vertical;-webkit-box-orient:vertical;margin:0px 0 0 0;"]),c=o.default.p.withConfig({displayName:"postCard__MetaInner",componentId:"sc-8vvpmz-4"})(["margin:8px 0;"]),m=(0,o.default)(i.G).withConfig({displayName:"postCard__Image",componentId:"sc-8vvpmz-5"})(["width:200px;border-top-left-radius:2px;border-bottom-left-radius:2px;"]),u=o.default.div.withConfig({displayName:"postCard__Meta",componentId:"sc-8vvpmz-6"})(["display:flex;flex-direction:row;justify-content:space-between;font-family:var(--main-font);"]),f=o.default.div.withConfig({displayName:"postCard__Data",componentId:"sc-8vvpmz-7"})(["display:flex;flex-direction:column;justify-content:space-between;height:160px;"]),g=function(t){var e=t.slug,a=t.title,o=t.date,g=t.excerpt,x=t.cover,h=(0,i.c)(x);return(0,n.jsxs)(s,{children:[(0,n.jsx)(r.rU,{to:"/post/"+e,children:h&&(0,n.jsx)(m,{image:h,alt:"cover image"})}),(0,n.jsx)(l,{image:!!h,children:(0,n.jsxs)(d,{to:"/post/"+e,children:[(0,n.jsx)("h2",{children:a}),(0,n.jsxs)(f,{children:[(0,n.jsx)(p,{children:g}),(0,n.jsx)(u,{children:(0,n.jsx)(c,{children:o})})]})]})})]})},x=o.default.div.withConfig({displayName:"pagination__PagenationWrapper",componentId:"sc-akwb9g-0"})(["display:flex;justify-content:center;margin:2em 0;"]),h=(0,o.default)(r.rU).withConfig({displayName:"pagination__PagenationLink",componentId:"sc-akwb9g-1"})(["width:30px;height:30px;border:0px;border-radius:2px;border:1px solid var(--theme-ui-colors-border);color:var(--theme-ui-colors-text);text-decoration:none;display:grid;place-items:center;margin:0.15em;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}"]),v=function(t){var e=t.numPages,a=t.tag;return(0,n.jsx)(x,{children:Array.from({length:e}).map((function(t,e){return(0,n.jsx)(h,{to:e+1===1?"/"+(a?"tag/"+a:""):"/"+(a?"tag/"+a+"/":"")+(e+1),children:e+1},e)}))})},b=o.default.div.withConfig({displayName:"postList__Posts",componentId:"sc-19nacp1-0"})(["grid-template-columns:repeat(auto-fill,minmax(400px,1fr));display:grid;gap:20px;"]),w=function(t){var e=t.data,a=t.numPages,o=t.tag;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{children:e&&e.map((function(t,e){var a,o;return(0,n.jsx)(g,{slug:t.frontmatter.slug,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.frontmatter.description,cover:null!==(a=null===(o=t.frontmatter.cover)||void 0===o?void 0:o.childImageSharp.gatsbyImageData)&&void 0!==a?a:void 0},t.id)}))}),(0,n.jsx)(v,{tag:o,numPages:a})]})}},5848:function(t,e,a){a.r(e),a.d(e,{Head:function(){return d}});var o=a(5301),r=a(4001),i=a(4084),n=a(5893),d=function(t){var e=t.pageContext;return(0,n.jsx)(r.Z,{title:e.tag})};e.default=function(t){var e=t.pageContext,a=t.data,r={numPages:e.tagNumPages};return(0,n.jsx)(o.Z,{pageTitle:e.tag,children:(0,n.jsx)(i.Z,Object.assign({data:a.allMarkdownRemark.nodes,tag:e.tag},r))})}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-f59a5dc1b5efde876fe2.js.map