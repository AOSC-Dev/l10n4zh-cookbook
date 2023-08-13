"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},l="1.3 \u7ffb\u8bd1",i={unversionedId:"Workflow/1-3_Translation",id:"Workflow/1-3_Translation",title:"1.3 \u7ffb\u8bd1",description:"\u672c\u7ae0\u8282\u63cf\u8ff0 Gettext PO \u6587\u4ef6\u7684\u7ffb\u8bd1\u65b9\u5f0f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u522b\u7684\u7ffb\u8bd1\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u8df3\u8fc7\u3002",source:"@site/docs/1_Workflow/1-3_Translation.md",sourceDirName:"1_Workflow",slug:"/Workflow/1-3_Translation",permalink:"/l10n4zh-cookbook/en/docs/Workflow/1-3_Translation",draft:!1,editUrl:"https://github.com/lwantao/l10n4zh-cookbook/blob/master/docs/1_Workflow/1-3_Translation.md",tags:[],version:"current",lastUpdatedBy:"LWanTao",lastUpdatedAt:1691933065,formattedLastUpdatedAt:"Aug 13, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1.2 \u534f\u8c03",permalink:"/l10n4zh-cookbook/en/docs/Workflow/1-2_Coordination"},next:{title:"1.4 \u63d0\u4ea4",permalink:"/l10n4zh-cookbook/en/docs/Workflow/1-4_Submit"}},c={},p=[{value:"1.3.1 \u68c0\u67e5\u7ffb\u8bd1\u683c\u5f0f",id:"131-\u68c0\u67e5\u7ffb\u8bd1\u683c\u5f0f",level:2},{value:"1.3.2 \u590d\u5ba1\u7ffb\u8bd1",id:"132-\u590d\u5ba1\u7ffb\u8bd1",level:2},{value:"1.3.3 \u683c\u5f0f\u5904\u7406",id:"133-\u683c\u5f0f\u5904\u7406",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"13-\u7ffb\u8bd1"},"1.3 \u7ffb\u8bd1"),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u63cf\u8ff0 Gettext PO \u6587\u4ef6\u7684\u7ffb\u8bd1\u65b9\u5f0f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u522b\u7684\u7ffb\u8bd1\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u8df3\u8fc7\u3002"),(0,o.kt)("p",null,"GNU Gettext \u7684\u4e00\u4e9b\u4fe1\u606f\u4f1a\u5728\u4e4b\u540e\u63d0\u5230\u3002\u4f5c\u4e3a\u51c6\u5907\u5de5\u4f5c\u7684\u4e00\u90e8\u5206\uff0c\u4f60\u9700\u8981\u5907\u597d gettext \u5de5\u5177\u96c6\uff1b\u6211\u4eec\u540c\u65f6\u5047\u5b9a\u4f60\u4f7f\u7528\u7c7b\u4f3c GNU/Linux \u7684\u547d\u4ee4\u73af\u5883\u3002\u5982\u679c\u4f60\u8981\u548c\u5404\u79cd XML \u6253\u4ea4\u9053\uff0c\u4f60\u53ef\u80fd\u8fd8\u9700\u8981 intltool\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u4fee\u6539 PO \u6587\u4ef6\u7684 msgid \u9879\uff0c\u5426\u5219\u8fd9\u6761\u7ffb\u4e86\u4e5f\u6ca1\u7528\uff0c\u5408\u5e76\u7684\u65f6\u5019\u8fd8\u53ef\u80fd\u88ab\u5ffd\u7565\u3002\u5982\u679c\u539f\u6587 msgid \u771f\u7684\u6709\u9519\uff0c\u4f60\u53ef\u4ee5\u5411\u9879\u76ee\u5f00\u53d1\u8005\u62a5\u544a\u3002")),(0,o.kt)("p",null,"\u8fdb\u884c\u7ffb\u8bd1\u672c\u8eab\u975e\u5e38\u7b80\u5355\uff0c\u7528\u7f16\u8f91\u5668\u6253\u5f00\u5c31\u597d\u4e86\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7eaf\u6587\u672c\u7f16\u8f91\u5668\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u9605\u8bfb\u4e0b\u4e00\u7ae0\u7684\u6587\u4ef6\u683c\u5f0f\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"131-\u68c0\u67e5\u7ffb\u8bd1\u683c\u5f0f"},"1.3.1 \u68c0\u67e5\u7ffb\u8bd1\u683c\u5f0f"),(0,o.kt)("p",null,"PO\u6587\u4ef6\u7ffb\u8bd1\u540e\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u683c\u5f0f\u68c0\u67e5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"msgfmt --statistics -cv foo.po")),(0,o.kt)("p",null,"\u6b64\u547d\u4ee4\u4f1a\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a\u540d\u4e3a messages.mo \u7684\u6587\u4ef6\uff0c\u6b64\u6587\u4ef6\u4fbf\u662f\u7f16\u8bd1\u540e\u7684\u673a\u8bfb\u6587\u4ef6\u3002\u5c06\u6b64\u6587\u4ef6\u590d\u5236\u5230 ",(0,o.kt)("strong",{parentName:"p"},"/usr/share/locale/\u8bed\u8a00\u540d/LC_MESSAGES/\u6d88\u606f\u57df\u540d.mo"),"\uff0c\u518d\u8fd0\u884c locale-gen\uff0c\u5c31\u53ef\u4ee5\u66ff\u6362\u76ee\u524d\u7684\u7ffb\u8bd1\u4e86\uff08\u5177\u4f53\u7684\u6d88\u606f\u76ee\u5f55\u4ecd\u7136\u53d6\u51b3\u4e8e\u7a0b\u5e8f\u672c\u8eab\uff09\u3002\u4f60\u4e5f\u8be5\u770b\u770b\u63a5\u4e0b\u6765\u5bf9\u4e8e --check-acclerator \u7684\u63cf\u8ff0\uff0c\u4f60\u7684 PO \u7f16\u8f91\u5668\u6709\u53ef\u80fd\u5df2\u7ecf\u5e2e\u4f60\u505a\u4e86\u8fd9\u4ef6\u4e8b\uff0c\u6240\u4ee5\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u7ba1\u8fd9\u4e2a\u3002"),(0,o.kt)("h2",{id:"132-\u590d\u5ba1\u7ffb\u8bd1"},"1.3.2 \u590d\u5ba1\u7ffb\u8bd1"),(0,o.kt)("p",null,"\u4f7f\u7528PO\u6587\u4ef6\u65f6\uff0c\u5e94\u76f4\u63a5\u590d\u5ba1PO\u6587\u4ef6\uff0c\u5e76\u5efa\u8bae\u7f16\u8bd1\u4e3aMO\u6587\u4ef6\u5b89\u88c5\u5728\u76f8\u5e94\u7a0b\u5e8f\u7684\u76ee\u5f55\u4e0b\u8fdb\u884c\u5b9e\u6d4b\uff1b\u5bf9\u4e8e\u6587\u6863\uff0c\u6784\u5efa\u6587\u6863\u540e\u7cbe\u8bfb\u7ed3\u679c\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53d1\u73b0\u95ee\u9898\uff0c\u56de\u5230\u7ffb\u8bd1\u6b65\u9aa4\u4fee\u6b63\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"133-\u683c\u5f0f\u5904\u7406"},"1.3.3 \u683c\u5f0f\u5904\u7406"),(0,o.kt)("p",null,"\u7ffb\u8bd1\u5de5\u5177\u4e92\u76f8\u4e4b\u95f4\u53ef\u80fd\u5728\u7ec6\u8282\u5904\u5b58\u5728\u4e0d\u540c\u7684\u683c\u5f0f\u8bbe\u5b9a\uff0c\u4f8b\u5982 POedit \u9ed8\u8ba4\u548c wine \u9879\u76ee\u8981\u6c42\u884c\u5bbd\u5ea6\u4e3a 79 \u5217\uff0c\u800c\u4e0d\u5c11\u5176\u4ed6\u9879\u76ee\u53c8\u5e72\u8106\u8ba9\u4f60\u4e0d\u8981\u534a\u8def\u6362\u884c\u3002\u8fd8\u6709\u4e0d\u5c11\u4eba\u548c\u7f16\u8f91\u5668\u4e3a\u4e86\u5bf9\u9f50\u4f1a\u628a msgid \u548c msgstr \u884c\u7684\u6587\u5b57\u5185\u5bb9\u7559\u7a7a\uff0c\u63a5\u4e0b\u6765\u7684\u51e0\u884c\u518d\u6162\u6162\u63a5\u4e0a\u3002"),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 msgmerge\uff0c\u4e00\u4e2a\u7528\u6765\u628a\u7ffb\u8bd1\u9002\u5e94\u5230\u6a21\u677f\u4e0a\u6216\u8005\u5408\u5e76\u8fdb\u65b0\u7ffb\u8bd1\u7684\u5de5\u5177\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"msgmerge \u2013no-wrap -U foo.po foo.po   # \u4e0d\u8981\u534a\u8def\u6362\u884c\uff0c\u548c\u81ea\u5df1\u9002\u5e94\uff08\u4e5f\u5c31\u662f\u4e0d\u53bb\u505a\u9002\u5e94\uff09\nmsgmerge -w 79 -U zh_CN.po drunk.pot # \u6700\u5927\u5bbd\u5ea6 79 \u5217\uff0c\u81ea\u52a8\u6362\u884c\uff0c\u9002\u5e94\u5230 drunk.pot\n")))}d.isMDXComponent=!0}}]);