"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[5768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),a=r(2802),i=r(9960),c=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(2991);const i={title:"\u7b2c\u56db\u7ae0 \u5de5\u5177\u4f7f\u7528\u901f\u67e5"},c=void 0,l={unversionedId:"ToolsManual/overview",id:"ToolsManual/overview",title:"\u7b2c\u56db\u7ae0 \u5de5\u5177\u4f7f\u7528\u901f\u67e5",description:"Gettext \u662f\u4f60\u51e0\u4e4e\u4e0d\u53ef\u80fd\u907f\u514d\u4f7f\u7528\u7684\u5de5\u5177\uff0cInittools \u53c8\u662f Gnome \u7ffb\u8bd1\u7684\u91cd\u5934\u620f\u3002\u9664\u4e86\u8fd9\u4e9b\u4e4b\u5916\uff0c\u4f60\u4e5f\u5e94\u8be5\u77e5\u9053 Translate Toolkit \u7684\u51e0\u4e2a\u9ed1\u79d1\u6280\u5de5\u5177\uff08\u4f8b\u5982 pofilter \u67e5\u9519\uff09\uff0c\u4ee5\u53ca\u4e0d\u5c11 pot \u662f\u7528 po4a \u8f6c\u6362\u6765\u7684\u8fd9\u4ef6\u4e8b\u3002",source:"@site/docs/4_ToolsManual/overview.mdx",sourceDirName:"4_ToolsManual",slug:"/ToolsManual/overview",permalink:"/en/docs/ToolsManual/overview",draft:!1,editUrl:"https://github.com/lwantao/l10n4zh-cookbook/blob/master/docs/4_ToolsManual/overview.mdx",tags:[],version:"current",lastUpdatedBy:"LWanTao",lastUpdatedAt:1693236124,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{title:"\u7b2c\u56db\u7ae0 \u5de5\u5177\u4f7f\u7528\u901f\u67e5"},sidebar:"tutorialSidebar",previous:{title:"3.6 \u5176\u4ed6\u7ec6\u8282",permalink:"/en/docs/LanguageAndLayoutReq/3-6_"},next:{title:"4.1 Gettext",permalink:"/en/docs/ToolsManual/4-1_Gettext"}},s={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Gettext \u662f\u4f60\u51e0\u4e4e\u4e0d\u53ef\u80fd\u907f\u514d\u4f7f\u7528\u7684\u5de5\u5177\uff0cInittools \u53c8\u662f Gnome \u7ffb\u8bd1\u7684\u91cd\u5934\u620f\u3002\u9664\u4e86\u8fd9\u4e9b\u4e4b\u5916\uff0c\u4f60\u4e5f\u5e94\u8be5\u77e5\u9053 ",(0,o.kt)("a",{parentName:"p",href:"http://toolkit.translatehouse.org/"},"Translate Toolkit")," \u7684\u51e0\u4e2a\u9ed1\u79d1\u6280\u5de5\u5177\uff08\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/translate-toolkit/en/latest/commands/pofilter.html"},"pofilter")," \u67e5\u9519\uff09\uff0c\u4ee5\u53ca\u4e0d\u5c11 pot \u662f\u7528 po4a \u8f6c\u6362\u6765\u7684\u8fd9\u4ef6\u4e8b\u3002")),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);