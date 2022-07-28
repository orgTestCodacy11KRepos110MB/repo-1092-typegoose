"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7785],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||l[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return l}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],p={id:"change-id-type",title:"Change _id Type"},s=void 0,d={unversionedId:"guides/advanced/change-id-type",id:"guides/advanced/change-id-type",title:"Change _id Type",description:"You can easily change the type of the _id field by doing:",source:"@site/../docs/guides/advanced/changeIDType.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/change-id-type",permalink:"/typegoose/docs/guides/advanced/change-id-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/changeIDType.md",tags:[],version:"current",frontMatter:{id:"change-id-type",title:"Change _id Type"},sidebar:"guides",previous:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"},next:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"}},c={},l=[{value:"With the Base Class",id:"with-the-base-class",level:2}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can easily change the type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field by doing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeChangedID {\n  @prop()\n  public _id: string; // change the type of _id to string\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When the type is manually set (having an ",(0,r.kt)("inlineCode",{parentName:"p"},"@prop"),", even for ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectId"),"), then the value need to be always defined before saving, or using the ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#default"},(0,r.kt)("inlineCode",{parentName:"a"},"default"))," option")),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field altogether (useful in arrays of subdocuments), add option ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/prop#_id"},(0,r.kt)("inlineCode",{parentName:"a"},"@prop({ _id: false })"))," or on the subdocument class ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#_id"},(0,r.kt)("inlineCode",{parentName:"a"},"@modelOptions({ schemaOptions: { _id: false } })"))," (This option has no effect when the class / schema is the root schema)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { _id: false } }) // either with the schema option\nclass WithNoId {\n  @prop()\n  public someValue: string;\n}\n\nclass SomeChangedID {\n  @prop({ type: WithNoId, _id: false }) // or with the prop-option\n  public someField: WithNoId[];\n}\n")),(0,r.kt)("h2",{id:"with-the-base-class"},"With the Base Class"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," class's special ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," treatment (types), it can be used as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeChangedIDBase extends Base<string> {\n  @prop()\n  public _id: string;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," property needs to be duplicated, because the default class ",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," doesn't change anything at runtime (",(0,r.kt)("inlineCode",{parentName:"p"},"Base")," does not use ",(0,r.kt)("inlineCode",{parentName:"p"},"@prop"),")")),(0,r.kt)("admonition",{title:"Restriction",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This method (extending Base) can only be used with types that are in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefType")," (all of ",(0,r.kt)("inlineCode",{parentName:"p"},"mongoose.Schema.Types")," should work except ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mixed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),").")))}m.isMDXComponent=!0}}]);