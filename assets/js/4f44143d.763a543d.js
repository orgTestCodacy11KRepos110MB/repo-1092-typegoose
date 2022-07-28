"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(r,".").concat(u)]||d[u]||c[u]||i;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={id:"model-options",title:"@modelOptions"},r=void 0,p={unversionedId:"api/decorators/model-options",id:"api/decorators/model-options",title:"@modelOptions",description:"Typings:",source:"@site/../docs/api/decorators/modelOptions.md",sourceDirName:"api/decorators",slug:"/api/decorators/model-options",permalink:"/typegoose/docs/api/decorators/model-options",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/modelOptions.md",tags:[],version:"current",frontMatter:{id:"model-options",title:"@modelOptions"},sidebar:"docs",previous:{title:"@prop",permalink:"/typegoose/docs/api/decorators/prop"},next:{title:"@pre & @post",permalink:"/typegoose/docs/api/decorators/hooks"}},m={},c=[{value:"IModelOptions",id:"imodeloptions",level:2},{value:"schemaOptions",id:"schemaoptions",level:3},{value:"existingConnection",id:"existingconnection",level:3},{value:"existingMongoose",id:"existingmongoose",level:3},{value:"options",id:"options",level:3},{value:"customName",id:"customname",level:4},{value:"automaticName",id:"automaticname",level:4},{value:"allowMixed",id:"allowmixed",level:4},{value:"runSyncIndexes",id:"runsyncindexes",level:4}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Typings:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function modelOptions(options: IModelOptions): ClassDecorator\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("span",{class:"badge badge--secondary"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"#imodeloptions"},(0,i.kt)("inlineCode",{parentName:"a"},"IModelOptions"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Options to add to the Class")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@modelOptions")," is used to set options on a Class."),(0,i.kt)("h2",{id:"imodeloptions"},"IModelOptions"),(0,i.kt)("h3",{id:"schemaoptions"},"schemaOptions"),(0,i.kt)("p",null,"Please check the ",(0,i.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#options"},"Mongoose docs")," for more info about these options."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'NotSomething' } })\nclass Something {}\n")),(0,i.kt)("h3",{id:"existingconnection"},"existingConnection"),(0,i.kt)("p",null,"An existing Mongoose connection can also be passed down. If given, Typegoose uses this Mongoose instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," methods.  "),(0,i.kt)("h3",{id:"existingmongoose"},"existingMongoose"),(0,i.kt)("p",null,"An existing Mongoose instance can also be passed down. If given, Typegoose uses this Mongoose instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," methods.  "),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"Typegoose's custom options"),(0,i.kt)("h4",{id:"customname"},"customName"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customName")," can be used to set custom model names."),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('Something');\n")),(0,i.kt)("p",null,"You can generate more dynamic names, if ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," is given a function. The parameter object of the ",(0,i.kt)("inlineCode",{parentName:"p"},"modelOptions")," decorator is injected into the function for possible further use.  "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({\n  schemaOptions: { collection: 'SomethingDifferent' },\n  options: {\n    automaticName: false,\n    customName: (options) => `${options.schemaOptions?.collection}_someSuffix`\n  }\n})\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('SomethingDifferent_someSuffix');\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a function is used, ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," will be ignored. Also, if the function doesn't return a string, an error will be thrown.")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," is used with ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName"),", it will be a suffix of the class name."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,i.kt)("h4",{id:"automaticname"},"automaticName"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," can be used to automatically generate custom model names based on ",(0,i.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }"),(0,i.kt)("br",{parentName:"p"}),"\n","-> ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," will be prioritzed over ",(0,i.kt)("inlineCode",{parentName:"p"},"collection"),(0,i.kt)("br",{parentName:"p"}),"\n","-> if ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," is true, ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," will be a ",(0,i.kt)("em",{parentName:"p"},"suffix")," of the base class name\n-> if ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," is false, it will behave as if unset"),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// yes this is the same example as the one above\n@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'On request, this was made "opt-in" instead of "opt-out".')),(0,i.kt)("h4",{id:"allowmixed"},"allowMixed"),(0,i.kt)("p",null,"Set this to a Severity you want."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW"),": allow the use and execution of ",(0,i.kt)("inlineCode",{parentName:"li"},"mongoose.Schema.Types.Mixed"),", if the inferred type cannot be set otherwise"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WARN"),": ","[default]"," Warn for it in the logger, but still allow the use of it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ERROR"),": Error out when it comes to it")),(0,i.kt)("h4",{id:"runsyncindexes"},"runSyncIndexes"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"model.syncIndexes")," when model is finished compiling?"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Only run this while in development. It could cause race-conditions because ",(0,i.kt)("inlineCode",{parentName:"p"},"getModelForClass")," is not async.")))}u.isMDXComponent=!0}}]);