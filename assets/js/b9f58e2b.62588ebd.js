"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[4918],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"get-discriminator-model-for-class",title:"getDiscriminatorModelForClass"},s=void 0,d={unversionedId:"api/functions/get-discriminator-model-for-class",id:"api/functions/get-discriminator-model-for-class",title:"getDiscriminatorModelForClass",description:"Overload 1",source:"@site/../docs/api/functions/getDiscriminatorModelForClass.md",sourceDirName:"api/functions",slug:"/api/functions/get-discriminator-model-for-class",permalink:"/typegoose/docs/api/functions/get-discriminator-model-for-class",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getDiscriminatorModelForClass.md",tags:[],version:"current",frontMatter:{id:"get-discriminator-model-for-class",title:"getDiscriminatorModelForClass"},sidebar:"docs",previous:{title:"buildSchema",permalink:"/typegoose/docs/api/functions/build-schema"},next:{title:"addModelToTypegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose"}},p={},m=[{value:"Overload 1",id:"overload-1",level:3},{value:"Overload 2",id:"overload-2",level:3},{value:"Overload 3",id:"overload-3",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overload-1"},"Overload 1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  options?: IModelOptions\n): ReturnModelType<U, QueryHelpers>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"from")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite some Model options, only property ",(0,o.kt)("inlineCode",{parentName:"td"},"schemaOptions")," is merged with the existing options")))),(0,o.kt)("h3",{id:"overload-2"},"Overload 2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  value?: string\n): ReturnModelType<U, QueryHelpers>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"from")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite the discrimiantor value to register by")))),(0,o.kt)("h3",{id:"overload-3"},"Overload 3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getDiscriminatorModelForClass<U extends AnyParamConstructor<any>, QueryHelpers = BeAnObject>(\n  from: mongoose.Model<any, any>,\n  cl: U,\n  value?: string,\n  options?: IModelOptions\n): ReturnModelType<U, QueryHelpers>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"from")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongoose.Model")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Model to register a discriminator on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to build into a Model")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite the discrimiantor value to register by")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite some Model options, only property ",(0,o.kt)("inlineCode",{parentName:"td"},"schemaOptions")," is merged with the existing options")))),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getDiscriminatorModelForClass")," is used to compile a given Class (",(0,o.kt)("inlineCode",{parentName:"p"},"cl"),") into a Model and register it as a discriminator on a given Model (",(0,o.kt)("inlineCode",{parentName:"p"},"from"),")."),(0,o.kt)("p",null,"Option ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," is to overwrite the key the class is registered on as a discriminator, by default it is the generated model name, but can be overwritten with any string, recommended is to use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/enums.html#string-enums"},"string-",(0,o.kt)("inlineCode",{parentName:"a"},"enum"))," to keep track of names."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// The Base Class\nclass Event {\n  @prop({ required: true })\n  public name!: string;\n}\n\n// A Discriminator Class Variant\nclass ClickEvent extends Event {\n  @prop({ required: true, default: 0 })\n  public timesClicked!: number;\n}\n\nconst EventModel = getModelForClass(Event);\nconst ClickEventModel = getDiscriminatorModelForClass(EventModel, ClickEvent);\n")))}u.isMDXComponent=!0}}]);