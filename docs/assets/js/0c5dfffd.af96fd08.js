"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4149],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),o=n(7294),a=n(2389),s=n(9443);var l=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(3039),u=n(6010),p="tabItem_1uMI";function c(e){var t,n,r,a=e.lazy,s=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),b=k.tabGroupChoices,w=k.setTabGroupChoices,x=(0,o.useState)(y),N=x[0],T=x[1],O=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=b[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(j(t),T(r),null!=m&&w(m,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:P,onClick:P},null!=n?n:t)}))),a?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=n(5064),l=n(8215),i=["components"],u={id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},p=void 0,c={unversionedId:"proptest/index",id:"proptest/index",isDocsHomePage:!1,title:"Property-based Testing",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.",source:"@site/docs/proptest/index.mdx",sourceDirName:"proptest",slug:"/proptest/property-based-testing.html",permalink:"/docs/proptest/property-based-testing.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},sidebar:"proptest",next:{title:"Test Functions",permalink:"/docs/proptest/property-test-functions.html"}},d=[{value:"What is Property Testing?",id:"what-is-property-testing",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.\nYou do ",(0,a.kt)("strong",{parentName:"p"},"not")," need to be using Kotest as your test framework (although you should!) to benefit from the property test support."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.kotest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-property.svg?label=release",alt:"version badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-framework-engine.svg?label=snapshot",alt:"version badge"}))),(0,a.kt)("h2",{id:"what-is-property-testing"},"What is Property Testing?"),(0,a.kt)("p",null,"Developers typically write example-based tests. These are your garden variety unit tests you know and love.\nYou provide some inputs, and some expected results, and a test framework like Kotest or JUnit checks that the actual\nresults meet the expectations."),(0,a.kt)("p",null,"One problem with this approach is that it is very easy to miss errors due to edge cases that the developer didn't think about,\nor lack of coverage in the chosen inputs. Instead, with property testing, hundreds or thousands of values are fed into the same test,\nand the values are (usually) randomly generated by your property test framework."),(0,a.kt)("p",null,"For example, a good property test framework will include values like negative infinity, empty lists, strings with non-ascii characters, and so on.\nThings we often forget about when writing example based tests."),(0,a.kt)("p",null,"Property tests were originally conceived in frameworks like Quickcheck with the notion of testing a ",(0,a.kt)("em",{parentName:"p"},"property")," on some object,\nie. something that should hold true for all inputs. An invariant in other words.  An example of an invariant is given two strings,\na and b, then ",(0,a.kt)("em",{parentName:"p"},"length(a + b)")," should always be equal to ",(0,a.kt)("em",{parentName:"p"},"length(a) + length(b)"),"."),(0,a.kt)("p",null,"That is where the term ",(0,a.kt)("em",{parentName:"p"},"property testing")," originates."),(0,a.kt)("p",null,"However, you do not have to use property tests to only test things like monad laws or basic numeric functions. Any test that\nwould benefit from a wide array of input values is a good candidate. For example, we might have a function that validates usernames, and we want to test that valid emails are accepted. A property test would be useful here in generating 1000s of combinations to help harden our validation logic."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The property test framework is supported on all targets."),(0,a.kt)(s.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the following dependency to your build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n   testImplementation("io.kotest:kotest-property:$version")\n}\n'))),(0,a.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the following dependency to your build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,a.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,a.kt)("p",null,"   Add the following dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"commonTest")," sourceset:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-property:$version")\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Alternatively, add the dependency to a specific target.\nFor example, we could add to the Javascript target only be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"jsTest")," sourceset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"To create input values for tests, Kotest uses the term ",(0,a.kt)("em",{parentName:"p"},"generator"),". One generator per input argument is passed to a ",(0,a.kt)("em",{parentName:"p"},"test function"),",\nand the test will execute for a set number of ",(0,a.kt)("em",{parentName:"p"},"iterations"),"."),(0,a.kt)("p",null,"Read more about"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How ",(0,a.kt)("a",{parentName:"li",href:"/docs/proptest/property-test-functions.html"},"test functions")," are used."),(0,a.kt)("li",{parentName:"ul"},"The different types of ",(0,a.kt)("a",{parentName:"li",href:"/docs/proptest/property-test-generators.html"},"generators")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/proptest/generator-operations.html"},"operations")," on them."),(0,a.kt)("li",{parentName:"ul"},"How to write a ",(0,a.kt)("a",{parentName:"li",href:"/docs/proptest/custom-generators.html"},"custom generator"),"."),(0,a.kt)("li",{parentName:"ul"},"How to specify ",(0,a.kt)("a",{parentName:"li",href:"/docs/proptest/property-test-config.html"},"config")," for a test, including the seed.")))}f.isMDXComponent=!0}}]);