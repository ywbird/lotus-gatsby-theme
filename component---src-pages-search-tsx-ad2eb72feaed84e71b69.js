"use strict";(self.webpackChunklotus=self.webpackChunklotus||[]).push([[334],{2507:function(e,t,s){var a=s(1883),r=s(5893);t.Z=e=>{let{post:t}=e;const{frontmatter:{title:s},excerpt:c,fields:{slug:l}}=t;return(0,r.jsx)("article",{className:"post-card",children:(0,r.jsxs)(a.rU,{to:l,children:[(0,r.jsx)("h2",{className:"post-card-title",children:s}),(0,r.jsx)("p",{className:"post-card-excerpt",children:c})]})})}},4681:function(e,t,s){s.r(t);var a=s(7294),r=s(2212),c=s(2507),l=s(1954),n=s(5893);t.default=e=>{let{data:t}=e;const{0:s,1:o}=(0,a.useState)([]),{0:i,1:u}=(0,a.useState)();(0,a.useEffect)((()=>{const e=(0,n.jsx)("div",{className:"search-result",children:s.length>0?s.map(((e,t)=>(0,n.jsx)(c.Z,{post:e},t))):(0,n.jsx)("div",{className:"condition",children:"No result..."})});u((()=>e))}),[s]);const d=(0,a.useRef)(null);return(0,n.jsxs)(r.Z,{w:"wide",pageTitle:"Search",children:[(0,n.jsxs)("div",{className:"search-wrapper",children:[(0,n.jsx)("input",{type:"text",className:"search-input",onChange:e=>{const s=t.allMarkdownRemark.nodes.filter((t=>{const{target:{value:s}}=e,a=t.frontmatter.title.toLowerCase(),r=t.excerpt.toLowerCase();let c=[];t.frontmatter.tags&&(c=t.frontmatter.tags.map((e=>e.toLowerCase())));const l=s.toLowerCase().split(" ");if(""===s)return!1;return l.map((e=>""===e||(a.includes(e)||r.includes(e)||c.includes(e)))).every((e=>!0===e))}));o((()=>s))},placeholder:"Search...(title, tag)",ref:d}),(0,n.jsx)(l.JO,{className:"search-icon",icon:"fa6-solid:magnifying-glass",onClick:()=>{var e;null===(e=d.current)||void 0===e||e.focus()}})]}),i]})}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-ad2eb72feaed84e71b69.js.map