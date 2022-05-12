"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5113],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Configuration information leakage",sidebar_label:"Configuration leakage",sidebar_position:9,tags:["Coding guidelines","Policies","Security"]},s=void 0,d={unversionedId:"development/policies/security/configinfo-leakage",id:"development/policies/security/configinfo-leakage",title:"Configuration information leakage",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/configinfo-leakage.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/configinfo-leakage",permalink:"/devdocs/general/development/policies/security/configinfo-leakage",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/policies/security/configinfo-leakage.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652339309,formattedLastUpdatedAt:"12/05/2022",sidebarPosition:9,frontMatter:{title:"Configuration information leakage",sidebar_label:"Configuration leakage",sidebar_position:9,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Information leakage",permalink:"/devdocs/general/development/policies/security/info-leakage"},next:{title:"Session fixation",permalink:"/devdocs/general/development/policies/security/session-fixation"}},c={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page forms part of the ",(0,i.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,i.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,i.kt)("p",null,"Suppose it is well know, at least by Evil Hacker and their friends, that certain versions of  PHP have a critical security vulnerability. Suppose it is easy for Evil Hacker to find out which version of PHP (or Apache, Linux, Windows, Moodle, ...) you are running. Suppose you are running a version that is vulnerable, then you are big trouble."),(0,i.kt)("p",null,"For example, as I write this, the front page of MoodleDocs is announcing to the world (via the HTTP headers):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," HTTP/1.x 200 OK\n Date: Fri, 06 Nov 2009 15:15:29 GMT\n Server: Apache\n X-Powered-By: PHP/5.2.5\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," line is good. Many web sites use Apache. We are not revealing much there. The ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Powered-By")," line is not following good practice. It is revealing the exact version of PHP being used."),(0,i.kt)("p",null,"One very common method that lets users learn a lot about how your server is set up is error messages. It is not only exact version numbers that can help an attacker. For example knowing where things are stored on the server's hard disc can also be useful information, and error messages often include file paths."),(0,i.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,i.kt)("p",null,"Moodle makes it easy for you to hide error messages, or only have them sent to your log files."),(0,i.kt)("p",null,"There are warnings for administrators if errors are set to be displayed on-screen."),(0,i.kt)("p",null,"However, there are options in Moodle to display errors on-screen, for the benefit of developers working on development servers."),(0,i.kt)("p",null,"Similarly, Moodle provides easy access to the PHP info page, which reveals almost everything about your sever, but only if you are logged in as admin."),(0,i.kt)("p",null,"Moodle is naughty. With the standard theme, it is easy to find out exactly which version of Moodle is being used from the site home page."),(0,i.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only reveal technical information in the parts of error messages that go into the log files. The user-facing error message should describe the problem in more general terms.")),(0,i.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure your sever to only send out minimal information about which platform and Moodle version you are running."),(0,i.kt)("li",{parentName:"ul"},"Make sure technical error messages are only sent to log files, not displayed on screen.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}m.isMDXComponent=!0}}]);