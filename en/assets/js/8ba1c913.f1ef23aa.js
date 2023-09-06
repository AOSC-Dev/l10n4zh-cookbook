"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[7142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(6010),i=r(2802),a=r(9960),c=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),i=r(2991);const a={title:"1 \u5de5\u4f5c\u6d41\u7a0b"},c=void 0,l={unversionedId:"Workflow/overview",id:"version-1.5.4/Workflow/overview",title:"1 \u5de5\u4f5c\u6d41\u7a0b",description:"\u81ea\u7531\u8f6f\u4ef6\u7ffb\u8bd1\u7684\u5de5\u4f5c\u6d41\u7a0b\u57fa\u672c\u5206\u4e3a\u51c6\u5907\u3001\u534f\u8c03\u3001\u7ffb\u8bd1\u3001\u63d0\u4ea4\u56db\u6b65\uff0c\u4e0d\u540c\u9879\u76ee\u5404\u6709\u4e0d\u540c\u3002",source:"@site/versioned_docs/version-1.5.4/1_Workflow/overview.mdx",sourceDirName:"1_Workflow",slug:"/Workflow/overview",permalink:"/en/docs/Workflow/overview",draft:!1,editUrl:"https://github.com/lwantao/l10n4zh-cookbook/blob/master/versioned_docs/version-1.5.4/1_Workflow/overview.mdx",tags:[],version:"1.5.4",lastUpdatedBy:"LWanTao",lastUpdatedAt:1693983175,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{title:"1 \u5de5\u4f5c\u6d41\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"\u5c01\u9762",permalink:"/en/docs/intro"},next:{title:"1.1 \u51c6\u5907",permalink:"/en/docs/Workflow/1-1_Preparation"}},s={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u81ea\u7531\u8f6f\u4ef6\u7ffb\u8bd1\u7684\u5de5\u4f5c\u6d41\u7a0b\u57fa\u672c\u5206\u4e3a\u51c6\u5907\u3001\u534f\u8c03\u3001\u7ffb\u8bd1\u3001\u63d0\u4ea4\u56db\u6b65\uff0c\u4e0d\u540c\u9879\u76ee\u5404\u6709\u4e0d\u540c\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u7ffb\u8bd1\u5e73\u53f0\uff0c\u5982 Launchpad\uff0cTransifex \u548c Crowdin\uff0c\u63d0\u4f9b\u57fa\u4e8e\u7f51\u9875\u7684\u63d0\u4ea4\u65b9\u5f0f\u3002\u8fd9\u79cd\u5e73\u53f0\u5728\u534f\u4f5c\u4e0a\u7684\u5206\u5757\u51b2\u7a81\u76f8\u5e94\u8f83\u5c11\uff0c\u4e14\u5e38\u63d0\u4f9b\u201c\u7ffb\u8bd1\u5efa\u8bae\u201d\u6682\u5b58\u533a\u7b49\u5f85\u5904\u7406\u3002\u8fd9\u79cd\u5e73\u53f0\u7684\u539f\u751f\u6570\u636e\u683c\u5f0f\u5e38\u4e3a XLIFF\u3002")),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);