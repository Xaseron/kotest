"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[7797],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={id:"gens",title:"Generators",slug:"property-test-generators.html",sidebar_label:"Generators"},i=void 0,p={unversionedId:"proptest/gens",id:"proptest/gens",isDocsHomePage:!1,title:"Generators",description:"Generated values are provided by instances of the sealed class Gen. You can think of a Gen as kind of like an input",source:"@site/docs/proptest/gens.md",sourceDirName:"proptest",slug:"/proptest/property-test-generators.html",permalink:"/docs/proptest/property-test-generators.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/gens.md",tags:[],version:"current",frontMatter:{id:"gens",title:"Generators",slug:"property-test-generators.html",sidebar_label:"Generators"},sidebar:"proptest",previous:{title:"Test Functions",permalink:"/docs/proptest/property-test-functions.html"},next:{title:"Generators List",permalink:"/docs/proptest/property-test-generators-list.html"}},u=[{value:"Arbitrary",id:"arbitrary",children:[],level:2},{value:"Exhaustive",id:"exhaustive",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generated values are provided by instances of the sealed class ",(0,o.kt)("inlineCode",{parentName:"p"},"Gen"),". You can think of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gen")," as kind of like an input\nstream but for property test values. Each Gen will provide a (usually) infinite stream of these values for one\nparticular type."),(0,o.kt)("p",null,"Kotest has two types of generators - ",(0,o.kt)("inlineCode",{parentName:"p"},"Arb")," for generating arbitrary (random) values and ",(0,o.kt)("inlineCode",{parentName:"p"},"Exhaustive")," for generating a\nfinite set of values in a closed space."),(0,o.kt)("p",null,"Both types of gens can be mixed and matched in property tests. For example, you could test a function with 100 random\npositive integers (an arb) alongside every even number from 0 to 200 (exhaustive)."),(0,o.kt)("p",null,"Some generators are only available on the JVM. See the full list ",(0,o.kt)("a",{parentName:"p",href:"/docs/proptest/property-test-generators-list.html"},"here"),"."),(0,o.kt)("h2",{id:"arbitrary"},"Arbitrary"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Arb"),"s generate two types of values - a hard coded set of ",(0,o.kt)("em",{parentName:"p"},"edge cases")," and an infinite stream of ",(0,o.kt)("em",{parentName:"p"},"randomly chosen\nsamples"),"."),(0,o.kt)("p",null,"The samples may be repeated, and some values may never be generated at all. For example generating 1000\nintegers between 0 and Int.MAX cannot return all possible values, and some values may happen to be generated\nmore than once. Similarly, generating 1000 random integers between 0 and 500 will definitely result in some values\nappearing more than once."),(0,o.kt)("p",null,"Some common arbitraries include numbers with or without a range, strings in the unicode set, random lists,\ndata classes with random parameters, emails, codepoints, chars and so on."),(0,o.kt)("p",null,'In addition to the random values, arbs may provide edge cases. One of the design features of Kotest\'s property testing\nis that values for some types will always include "common" edge cases that you probably want to be included in your\ntests.'),(0,o.kt)("p",null,'For example, when testing a function that accepts an integer, you probably want to ensure that, at the very least, it is\ntested with zero, a positive number and a negative number. If only random values were provided, the chances of zero\nappearing would be fairly low, so Kotest will always provide some "edge cases" for integers (unless you specify\notherwise).'),(0,o.kt)("p",null,"When executing tests, the framework will alternate randomly between samples and edge cases. The split is determined\nby a configuration value which defaults to 2% edge cases."),(0,o.kt)("p",null,"Not all arbs have edge cases, but the arbs for the most common types do.\nHere are some examples of edge cases used by some arbs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ints: 0, 1, -1, Int.MAX_VALUE, Int.MIN_VALUE"),(0,o.kt)("li",{parentName:"ul"},"doubles: 0, 1, -1, Double.MAX_VALUE, Double.MIN_VALUE, Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY, Double.NaN"),(0,o.kt)("li",{parentName:"ul"},"strings: empty string, string of min length, lowest codepoint"),(0,o.kt)("li",{parentName:"ul"},"lists: empty list, list of a single element, list with duplicate elements"),(0,o.kt)("li",{parentName:"ul"},"maps: empty map"),(0,o.kt)("li",{parentName:"ul"},"nullable values: null")),(0,o.kt)("h2",{id:"exhaustive"},"Exhaustive"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Exhaustive"),"s generate all values from a given space. This is useful when you want to ensure every value in that space\nis used. For example, for enum values, it is usually more helpful to ensure each enum is used, rather than picking\nrandomly from the enums values and potentially missing some and duplicating others."),(0,o.kt)("p",null,"Typical exhaustives include small collections, enums, boolean values, powerset of a list or set, pre-defined integer\nranges, and predefined string ranges."),(0,o.kt)("p",null,"Once an exhaustive has provided all it's values, it will loop and start again, so an exhaustive can be used in a test\nthat requires any number of inputs."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enum class Season { Winter, Fall, Spring, Summer }\n\nforAll<Int, Season>(100) { a, season -> ... }\n")),(0,o.kt)("p",null,"Here we asked for 100 iterations, so each value of Season would be provided 25 times."))}d.isMDXComponent=!0}}]);