"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[5646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),N=T.tabGroupChoices,w=T.setTabGroupChoices,x=(0,r.useState)(v),O=x[0],E=x[1],C=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var j=N[b];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&E(j)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==O&&(D(t),E(a),null!=b&&w(b,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(5488),i=n(5162),s=["components"],u={id:"test",title:"Docusaurus Testing"},c=void 0,p={unversionedId:"test",id:"test",title:"Docusaurus Testing",description:"This file is meant to show what Docusaurus is capable of and how it looks in this projects styles",source:"@site/../docs/test.mdx",sourceDirName:".",slug:"/test",permalink:"/typegoose/docs/test",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/test.mdx",tags:[],version:"current",frontMatter:{id:"test",title:"Docusaurus Testing"}},d={},m=[{value:"Callouts / Admonitions",id:"callouts--admonitions",level:2},{value:"Specify type and title",id:"specify-type-and-title",level:3},{value:"Badges",id:"badges",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Extra Code Block Styling",id:"extra-code-block-styling",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This file is meant to show what Docusaurus is capable of and how it looks in this projects styles"),(0,o.kt)("p",null,"Sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/"},"Docusaurus Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://infima.dev/docs/getting-started/introduction"},"infima Documentation"))),(0,o.kt)("h2",{id:"callouts--admonitions"},"Callouts / Admonitions"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The content and title ",(0,o.kt)("em",{parentName:"p"},"can")," include markdown.")),(0,o.kt)("admonition",{title:"You can specify an optional title",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Heads up! Here's a pro-tip.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Useful information.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Warning! You better pay attention!")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Danger danger, mayday!")),(0,o.kt)("h3",{id:"specify-type-and-title"},"Specify type and title"),(0,o.kt)("admonition",{title:"Your Title",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The content and title ",(0,o.kt)("em",{parentName:"p"},"can")," include markdown.")),(0,o.kt)("h2",{id:"badges"},"Badges"),(0,o.kt)("span",{class:"badge badge--primary"},"Primary"),(0,o.kt)("span",{class:"badge badge--secondary"},"Secondary"),(0,o.kt)("span",{class:"badge badge--success"},"Success"),(0,o.kt)("span",{class:"badge badge--info"},"Info"),(0,o.kt)("span",{class:"badge badge--warning"},"Warning"),(0,o.kt)("span",{class:"badge badge--danger"},"Danger"),(0,o.kt)("h2",{id:"tabs"},"Tabs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Tabs")),(0,o.kt)(l.Z,{groupId:"test-tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"tab1",label:"Tab 1",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Hello Tab 1, text first"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Code in Tab 1\n"))),(0,o.kt)(i.Z,{value:"tab2",label:"Tab 2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Code in Tab 2\n")),(0,o.kt)("p",null,"Hello Tab 2, text last"))),(0,o.kt)("h2",{id:"extra-code-block-styling"},"Extra Code Block Styling"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"Extra Code Block Styling")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting"},"Highlighting lines"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import something from "some";\n\n// highlight-start\nclass SomeClass {\n  public hello?: string\n}\n// highlight-end\n\nexport SomeClass;\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-numbering"},"Line Numbering"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},'import something from "some";\n\nclass SomeClass {\n  public hello?: string\n}\n\nexport SomeClass;\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#npm2yarn-remark-plugin"},"Yarn & NPM"),":"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install somepackage\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add somepackage\n")))))}b.isMDXComponent=!0}}]);