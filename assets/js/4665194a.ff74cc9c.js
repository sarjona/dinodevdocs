"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1925],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},858:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={title:"Moodle App Accessibility",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},c=void 0,l={unversionedId:"guides/moodleapp/accessibility",id:"guides/moodleapp/accessibility",title:"Moodle App Accessibility",description:"Screen readers",source:"@site/docs/guides/moodleapp/accessibility.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/accessibility",permalink:"/devdocs/docs/guides/moodleapp/accessibility",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/accessibility.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Accessibility",permalink:"/devdocs/docs/tags/accessibility"},{label:"Compliance",permalink:"/devdocs/docs/tags/compliance"},{label:"Certification",permalink:"/devdocs/docs/tags/certification"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651109470,formattedLastUpdatedAt:"28/04/2022",sidebarPosition:2,frontMatter:{title:"Moodle App Accessibility",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},sidebar:"docs",previous:{title:"Overview",permalink:"/devdocs/docs/guides/moodleapp/overview"},next:{title:"Translation",permalink:"/devdocs/docs/guides/moodleapp/translation"}},d={},p=[{value:"Screen readers",id:"screen-readers",level:2},{value:"Tools and resources",id:"tools-and-resources",level:2}],u={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"screen-readers"},"Screen readers"),(0,i.kt)("p",null,"VoiceOver and TalkBack are the native applications for screen reading in iOS and Android devices. In order to make the code understandable to these applications we encourage the developers to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/%7CAccessible"},"Rich Internet Applications (WAI-ARIA) 1.1")," recommendations of W3C. Those documents includes a bunch of rules to be applied to the HTML code to add semantic information to it."),(0,i.kt)("p",null,"First step on that is to ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#role_definitions%7Cidentify"},"the role")," of the main elements of navigation and information of the page. Then, you should apply the correct aria attributes to the elements that conform that role."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/commit/b95de260ee46d6278d03cff294015aa11fd99a6b"},"Here you have some examples")," of how to apply these attributes."),(0,i.kt)("h2",{id:"tools-and-resources"},"Tools and resources"),(0,i.kt)("p",null,"These are some tools and resources that can be useful to improve accessibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck"},"ARIA DevTools browser extension")," \u2014 Navigate a site like a non-sighted user would."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi"},"headingMaps browser extension")," \u2014 Navigate page headings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"},"Landmarks Navigation browser extension")," \u2014 Navigate landmarks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/accessibility/reference/#pane"},"Accessibility Pane in Chrome")," \u2014 Inspect accessibility roles and values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HE2R86EZPMA"},"BingO Bakery: Headings, Landmarks, and Tabs")," \u2014 Video introducing some basic concepts.")))}m.isMDXComponent=!0}}]);