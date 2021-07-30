"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[6251],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7503:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),s=["components"],i={id:"using-with-class-transformer",title:"Using with class-transformer"},l=void 0,c={unversionedId:"guides/advanced/using-with-class-transformer",id:"guides/advanced/using-with-class-transformer",isDocsHomePage:!1,title:"Using with class-transformer",description:"This guide shows how to use typegoose with class-transformer.",source:"@site/../docs/guides/advanced/class-transformer.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/using-with-class-transformer",permalink:"/typegoose/docs/guides/advanced/using-with-class-transformer",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/class-transformer.md",version:"current",frontMatter:{id:"using-with-class-transformer",title:"Using with class-transformer"},sidebar:"guides",previous:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"},next:{title:"Non-Nested Discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators"}},p=[{value:"Implementation",id:"implementation",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide shows how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"typegoose")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer"),"."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Suppose you have this ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," class decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Exclude, Expose, Transform } from 'class-transformer';\nimport { getModelForClass, mongoose, prop } from 'typegoose';\n\n// re-implement base Document to allow class-transformer to serialize/deserialize its properties\n// This class is needed, otherwise \"_id\" and \"__v\" would be excluded from the output\nclass DocumentCT {\n  @Expose()\n  // makes sure that when deserializing from a Mongoose Object, ObjectId is serialized into a string\n  @Transform((value: any) => {\n    if ('value' in value) {\n      return value.value instanceof mongoose.Types.ObjectId ? value.value.toHexString() : value.value.toString();\n    }\n\n    return 'unknown value';\n  })\n  public _id: string;\n\n  @Expose()\n  public __v: number;\n}\n\n@Exclude()\nclass Account extends DocumentCT {\n  @prop()\n  @Expose()\n  public email: string;\n\n  @prop()\n  @Expose({ groups: ['admin'] })\n  public password: string;\n}\n\nconst AccountModel = getModelForClass(Account);\n")),(0,o.kt)("p",null,"Side-Note: Typegoose dosnt provide an class like ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentCT")," by default, because this would require adding ",(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," as an dependency"),(0,o.kt)("p",null,"You can then use, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"lean()")," on the query:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// lean return a Plain Old Javascript Object\nconst pojo = await AccountModel.findById(id).orFail().lean().exec();\n// deserialize Plain Old Javascript Object into an instance of the Account class\nconst deserialized = plainToClass(Account, pojo);\n// serialize Account instance back to a Plain Old Javascript Object, applying class-transformer's magic\nconst serialized = classToPlain(deserialized);\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"or a normal document:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// exec return a Mongoose Object\nconst mo = await AccountModel.findById(id).orFail().exec();\n// deserialize Mongoose Object into an instance of the Account class\nconst deserialized = plainToClass(Account, mo);\n// serialize Account instance back to a Plain Old Javascript Object, applying class-transformer's magic\nconst serialized = classToPlain(deserialized);\n")))),(0,o.kt)("p",null,"As you can see from these examples, there is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a redundant step to first turn the output of the query into a full instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," : ",(0,o.kt)("inlineCode",{parentName:"li"},"plainToClass(..., ...)")),(0,o.kt)("li",{parentName:"ul"},"before being able to benefit from its features for serialization: ",(0,o.kt)("inlineCode",{parentName:"li"},"classToPlain(...)"))),(0,o.kt)("p",null,"The reson for doing this is so queries will output ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentType<Account>")," (Mongoose Document) instead of required ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," (Plain Object / instance of the Class) in this example."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"class-transformer")," can only operate its magic on instances of annotated classes."),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information, you can always look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/test/tests/classTransformer.test.ts"},"typegoose Class-Transformer tests")))))}d.isMDXComponent=!0}}]);