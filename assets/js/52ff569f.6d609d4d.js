(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9498],{2483:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=(n(1302),["components"]),s={title:"Component Communication",description:"The Moodle Coding Style guidelines",tags:["Policies","Coding guidelines"]},r=void 0,c={unversionedId:"development/policies/component-communication/index",id:"development/policies/component-communication/index",title:"Component Communication",description:"The Moodle Coding Style guidelines",source:"@site/general/development/policies/component-communication/index.md",sourceDirName:"development/policies/component-communication",slug:"/development/policies/component-communication/",permalink:"/devdocs/general/development/policies/component-communication/",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/policies/component-communication/index.md",tags:[{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1650587721,formattedLastUpdatedAt:"22/04/2022",frontMatter:{title:"Component Communication",description:"The Moodle Coding Style guidelines",tags:["Policies","Coding guidelines"]},sidebar:"policies",previous:{title:"Coding style",permalink:"/devdocs/general/development/policies/codingstyle/"},next:{title:"Naming conventions",permalink:"/devdocs/general/development/policies/naming"}},u={},d=[{value:"Components",id:"components",level:2},{value:"Core",id:"core",level:3},{value:"Subsystems",id:"subsystems",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Plugin Types",id:"plugin-types",level:3},{value:"Sub-plugins",id:"sub-plugins",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Communication Channels",id:"communication-channels",level:2},{value:"General rules for inter-component communications",id:"general-rules-for-inter-component-communications",level:2},{value:"Direct php function calls",id:"direct-php-function-calls",level:3},{value:"External functions",id:"external-functions",level:3},{value:"Javascript Modules (AMD)",id:"javascript-modules-amd",level:3},{value:"get_string",id:"get_string",level:3},{value:"Templates (Mustache)",id:"templates-mustache",level:3},{value:"Event observers",id:"event-observers",level:3},{value:"Callback methods (component_callback, get_plugins_with_function\u2026)",id:"callback-methods-component_callback-get_plugins_with_function",level:3},{value:"FAQ",id:"faq",level:2},{value:"Ideal plugin design",id:"ideal-plugin-design",level:2},{value:"Low Level API",id:"low-level-api",level:3},{value:"Component API",id:"component-api",level:3},{value:"External API",id:"external-api",level:3},{value:"Webservice API",id:"webservice-api",level:3},{value:"Editing images in this doc page",id:"editing-images-in-this-doc-page",level:2}],p={toc:d};function m(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Components in Moodle",src:n(8139).Z,width:"601",height:"410"})),(0,i.kt)("p",null,"Moodle is code is split into different sections called ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),"."),(0,i.kt)("h3",{id:"core"},"Core"),(0,i.kt)("p",null,"The core libraries provide the base functionality that all other parts of moodle rely on. The component for core libraries is just referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"core"),". Core code is not optional and cannot be safely removed without breaking Moodle. This means that it is always available and can be safely called from anywhere. Core code sits directly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/")," folder, or in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/lib/classes/")," folder for autoloaded core classes."),(0,i.kt)("h3",{id:"subsystems"},"Subsystems"),(0,i.kt)("p",null,"Subsystems are groups of related functions and classes that are part of core, but are logically grouped together. Often they are tied to a particular feature in Moodle, and sometimes can be disabled/enabled via a single config setting - but the code is never removed. It is safe to call core subsystems from anywhere in Moodle - but the functions may return an error to indicate that a feature has been disabled. Each core subsystem has a defined location where its code is grouped together. As of Moodle 3.1 there are 66 subsystems in core and the comprehensive list can be found here:"),(0,i.kt)("p",null,"core_component::fetch_subsystems()"),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Plugins are optional components in Moodle that extend its functionality. M in Moodle stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"Modular")," and most of the code in Moodle belongs to plugins. There are many different types of plugins, and each plugin type supports a different way to extend core functionality. Information on the available plugins types in Moodle can be found here:"),(0,i.kt)("h3",{id:"plugin-types"},"Plugin Types"),(0,i.kt)("p",null,"Vanilla Moodle package contains over 370 plugins. Additional plugins can be downloaded from the Plugins directory, or installed manually - and all plugins in Moodle are considered ",(0,i.kt)("inlineCode",{parentName:"p"},"optional"),", even the ones included in vanilla package. This means that you can never assume a particular plugin will always exist on every Moodle site."),(0,i.kt)("h3",{id:"sub-plugins"},"Sub-plugins"),(0,i.kt)("p",null,"Some plugin types in Moodle support sub-plugins. This means that they can use other plugins to extend their own functionality. The only plugin types in Moodle that allow this are activity modules, editors, administration tools and local plugins. A sub-plugin can assume that its parent plugin is installed and does exist in Moodle - and can call its code directly, but it cannot assume anything about any other plugin or sub-plugin in Moodle."),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Some plugins in Moodle depend on other plugins. An example of a dependency relationship is a plugin that ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," sub-plugins - each of the sub-plugins depends on the parent. Another example is where the dependency is explicitly defined in the version.php of the plugin."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Component dependencies",src:n(7647).Z,width:"601",height:"410"})),(0,i.kt)("h2",{id:"communication-channels"},"Communication Channels"),(0,i.kt)("p",null,"There are different ways to call code in Moodle. Most of them are listed here and described in detail later on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Direct php function calls"),(0,i.kt)("li",{parentName:"ul"},"External functions"),(0,i.kt)("li",{parentName:"ul"},"Javascript Modules (AMD)"),(0,i.kt)("li",{parentName:"ul"},"Templates"),(0,i.kt)("li",{parentName:"ul"},"get_string calls"),(0,i.kt)("li",{parentName:"ul"},"Event observers"),(0,i.kt)("li",{parentName:"ul"},"Component callbacks")),(0,i.kt)("h2",{id:"general-rules-for-inter-component-communications"},"General rules for inter-component communications"),(0,i.kt)("p",null,"Because all plugins are optional, we can never rely on a plugin being installed in Moodle, unless there is a dependency relationship between the current component and the plugin. Core components and subsystems are always installed.\nThis means there are some strict rules about which types of communication are allowed in Moodle."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is always allowed to communicate with a ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," component. This includes core and all its subsystems."),(0,i.kt)("li",{parentName:"ul"},"Any component is allowed to communicate with itself."),(0,i.kt)("li",{parentName:"ul"},"It is allowed to communicate with another component if the calling component ",(0,i.kt)("inlineCode",{parentName:"li"},"depends")," on the other component (see description of dependencies above)."),(0,i.kt)("li",{parentName:"ul"},"Not shown in the diagram - but the same rules apply to sub-plugins. They can communicate with their parent and any plugin that they explicitly (version.php) depend on."),(0,i.kt)("li",{parentName:"ul"},"All other inter-component communications are forbidden.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Allowed communication",src:n(5129).Z,width:"601",height:"491"})),(0,i.kt)("h3",{id:"direct-php-function-calls"},"Direct php function calls"),(0,i.kt)("p",null,"This is the simplest type of communication - you know the name of a function so you just call it. Sometimes the name of the function is generated from the component name to allow different plugins to implement the same function with a different prefix or namespace."),(0,i.kt)("h3",{id:"external-functions"},"External functions"),(0,i.kt)("p",null,"External functions are functions defined in Moodle using the External API. These are functions suitable to call from webservices, or call directly from other parts of Moodle. Each external function follows a similar pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parse and validate arguments"),(0,i.kt)("li",{parentName:"ul"},"Perform security checks and setup the theme and language (from the context)"),(0,i.kt)("li",{parentName:"ul"},"Call an internal API"),(0,i.kt)("li",{parentName:"ul"},"Return and validate the response")),(0,i.kt)("p",null,"Calling external functions from another component in Moodle is no different to calling the php functions directly. This is allowed and encouraged."),(0,i.kt)("p",null,"One thing to think about when calling external functions from php though is that they are designed to be able to be called from a webservice, and so they will re-do all of the security checks and setup of the page theme and language that you have probably already done in your php page. To make sure this doesn\u2019t cause side-effects (like changing the theme halfway through a page), always use the wrapper in ",(0,i.kt)("inlineCode",{parentName:"p"},"external_api::call_external_function()")," instead of calling the external function directly."),(0,i.kt)("p",null,"Additional rules for calling external functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always use the ",(0,i.kt)("inlineCode",{parentName:"li"},"external_api::call_external_function()")," wrapper when calling from php.")),(0,i.kt)("h3",{id:"javascript-modules-amd"},"Javascript Modules (AMD)"),(0,i.kt)("p",null,"It is possible through the Javascript loader to load an AMD module from any component and call its functions. This is a form of inter-component communication and must obey the strict rules for which components AMD modules can be loaded from."),(0,i.kt)("h3",{id:"get_string"},"get_string"),(0,i.kt)("p",null,"It is possible to fetch strings from any component in Moodle. This is a form of inter-component communication and and must obey the strict rules for which components strings can be fetched from."),(0,i.kt)("h3",{id:"templates-mustache"},"Templates (Mustache)"),(0,i.kt)("p",null,"It is possible to fetch templates from any component in Moodle. This is a form of inter-component communication and and must obey the strict rules for which components templates can be fetched from."),(0,i.kt)("h3",{id:"event-observers"},"Event observers"),(0,i.kt)("p",null,"Any action in Moodle can trigger one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),"."),(0,i.kt)("p",null,"In Moodle it is possible to register observers for events. An observer is notified when an event happens and receives the data related to that event. An observer can only act on the information in the event. It cannot modify the data for the event or prevent the action from occurring. The component containing the observer is communicating with the component that declared the event class. The normal rules for inter-component communication apply."),(0,i.kt)("p",null,"In addition - event observers are a form of execution at a distance. It would be extremely difficult to read and maintain code heavily relying on event observers (especially if the observers perform actions that trigger more events)."),(0,i.kt)("p",null,"Additional rules for event observers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Events are not allowed to be observed by core or a core subsystem (there are some currently wrong observers in core that should be removed).")),(0,i.kt)("h3",{id:"callback-methods-component_callback-get_plugins_with_function"},"Callback methods (component_callback, get_plugins_with_function\u2026)"),(0,i.kt)("p",null,"The most common way (but not the only way) to implement a callback is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"component_callback()")," function. This function works by looping over the installed plugins and calling a function from each plugin based on appending the component name to the supplied function name. It then expects the function to be defined either in the plugins lib.php file, or in an autoloaded location (but not in a class!)."),(0,i.kt)("p",null,"",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Callbacks"},"List of callbacks in Moodle"),""),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: So how does plugin X call a function from plugin Y if they don\u2019t depend on each other?")),(0,i.kt)("p",null,"A: By communicating through a core API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: What? Really?")),(0,i.kt)("p",null,"A: Anytime one plugin wants to communicate to one other specific plugin - it\u2019s better to create a core API and channel all communication through that API. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"assignment online text")," uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Editor API")," to add a rich text field to the form. It does not directly add an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Atto")," to the form. This allows either plugin to be replaced by a different, (hopefully better) plugin without changing the API or the other plugin. Remember, any plugin in Moodle is optional and may be removed in the future."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How do I know if there is an API I can already use?")),(0,i.kt)("p",null,"A: Existing callbacks are listed ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Callbacks"},"here"),", major core APIs are listed ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can I change the data provided to a component_callback and maintain backwards compatibility.")),(0,i.kt)("p",null,"A: No it is not possible. You must implement a second callback with a new name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can I control the order in which plugins callbacks are executed?")),(0,i.kt)("p",null,"A: No it is not possible."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can I find all the plugins implementing a callback?")),(0,i.kt)("p",null,"A: You can grep the code or create a test script that executes ",(0,i.kt)("inlineCode",{parentName:"p"},"get_plugins_with_function()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: How can I ensure the name for my new callback is unique?")),(0,i.kt)("p",null,"A: Check ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Callbacks"},"list of existing callbacks"),". Consider prefixing with the component name the callback is defined in - but existing code does not do this much."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Will my callback function be called even if my plugin is disabled?")),(0,i.kt)("p",null,"A: Yes - you must manually check if your own plugin is disabled before responding to a component callback."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: I looked, there is no existing API I can use. How do I get a new one added to core?")),(0,i.kt)("p",null,"A: Create a tracker issue, post a patch (with unit tests) and explain your use case."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: When should I create a callback and when should I use event observers?")),(0,i.kt)("p",null,"A: Event observers should not be added to facilitate plugin communication. They are about notifying the system that a real event occurred. Use an event observer only if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is a real event occurring at the point you need to execute some additional code."),(0,i.kt)("li",{parentName:"ul"},"You are not cheating the inter-component communication rules."),(0,i.kt)("li",{parentName:"ul"},"You do not need to modify any of the data related to the event.")),(0,i.kt)("p",null,"Otherwise add a new callback and execute for each plugin implementing it, using ",(0,i.kt)("inlineCode",{parentName:"p"},"get_plugins_with_function()")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can I use one of the broadcast functions to provide a callback to some plugin types, but not all of them?")),(0,i.kt)("p",null,"A: It is better to allow all plugin types. Previously assumptions have been made about which plugins should be able to respond to an API and they have almost always turned out wrong."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Can create an API with callbacks that supports multiple stages?")),(0,i.kt)("p",null,"A: Not easily. You must create a separate callback for each stage and hope that consumers of your API create the correct function for each stage. An alternative is to create a callback that is expected to be returned an instance of an abstract class which defines your API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q: Global functions are bad. Can I implement a callback in a class instead?")),(0,i.kt)("p",null,"A: No. Sorry."),(0,i.kt)("h2",{id:"ideal-plugin-design"},"Ideal plugin design"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ideal plugin design",src:n(1443).Z,width:"601",height:"479"})),(0,i.kt)("p",null,"When building a new plugin for Moodle - it is good to think about how to best structure the code so that we separate our code into layers of functionality. This way we can provide a secure and comprehensive API that can be called from inside, or outside of our component, or from web-services (like the Mobile App or AJAX)."),(0,i.kt)("h3",{id:"low-level-api"},"Low Level API"),(0,i.kt)("p",null,"In this model, the DB tables are accessed through a low level API that knows about all the types, relationships and validation rules for the data in the tables. No permission checking is done at this level for performance and complexity reasons."),(0,i.kt)("h3",{id:"component-api"},"Component API"),(0,i.kt)("p",null,"The component API defines all the things this plugin can do. Every function in the API should perform permission checks and validation on the parameters and return types and be covered by unit tests. This is the useful API that can be used by pages in your plugin, or called directly by another component in Moodle (only if it depends on this plugin)."),(0,i.kt)("h3",{id:"external-api"},"External API"),(0,i.kt)("p",null,"The external API is a single class that wraps each function in the Component API. By exposing all the functions in the Component API we allow people to build new interfaces and apps that we have never even thought about without requiring changes to our plugin. Covering each external function with a unit test ensures that all our parameters and return types are correctly specified. Note: External API functions can be called directly from other dependant plugins or sub-plugins in Moodle - but you must use the external_api::call_external_function to do so or you will introduce problems with theme, language and context."),(0,i.kt)("h3",{id:"webservice-api"},"Webservice API"),(0,i.kt)("p",null,"This is not really an API, it is just a listing of all the functions in the external API in our plugins db/services.php file. This allows all these functions to be called from AJAX or webservices clients like the Mobile App."),(0,i.kt)("h2",{id:"editing-images-in-this-doc-page"},"Editing images in this doc page"),(0,i.kt)("p",null,"This page was created from a google doc. To edit the images in this page - re-export them from the original document here: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1Z-vRWztT05bsb9b5KbBpLRP26oa3KTx3thB52_BW5VY/edit#heading=h.ardt51j6brj1"},"https://docs.google.com/document/d/1Z-vRWztT05bsb9b5KbBpLRP26oa3KTx3thB52_BW5VY/edit#heading=h.ardt51j6brj1")))}m.isMDXComponent=!0},2798:function(e){e.exports={siteHome:"https://moodle.academy/",courses:{setup:{id:29,name:"Set up your Moodle Development Environment",summary:"Learn about the Moodle developer community and setting up a development environment",description:"This course is designed for PHP developers who want to start developing Moodle plugins. You will learn about the Moodle developer community and set up a Moodle development environment. This is the first course in the Developer Pathway. Subsequent courses in the the Developer Pathway will build on the knowledge gained in this course.",tags:["development","basics","setup"],archived:!1,series:[]},securityEssentials:{id:53,name:"Moodle Access and Security Essentials",summary:"A short course looking at access control and security aspects of plugins.",description:"In this course we look at access control and security aspects of a plugin. Through a set of tutorials, you will learn how to control access to your plugin using Moodle\u2019s Access API. You will learn how to define capabilities in your plugin and how to determine if the user has the permission to access a page. This course also covers common security threats that developers need to be aware of.\n\nThis is the fourth course in the Moodle Developer Basics program.",tags:["development","basic","essentials","security","api"],archived:!1,series:["basics"]},outputEssentials:{id:49,name:"Web Output Essentials",summary:"Learn how to use Moodle's Page and Output APIs to display content in a local plugin.",description:"This course builds on the knowledge gained in the Moodle development environment course. In this course, we learn how to use Moodle's Page and Output APIs to display content in a local plugin. An introduction to localisation using language strings is also covered in this course. This is the second course in the Moodle developer pathway.",tags:["development","basics","essentials","output","api"],archived:!1,series:["basics"]},architecture:{id:51,name:"Moodle's Modular Architecture and APIs",summary:"Take a deeper look at Moodle's architecture, exploring common APIs including Navigations, Forms, Database, Upgrade, Strings, and Output.",description:"In this course we take a deeper look at Moodle's modular architecture and explore the use of common Moodle APIs. Some of the APIs covered in this course include: Navigation, Forms, Database access, Upgrade, Strings and Output APIs. Learners get hands-on practise on using these APIs in the form of developing a local plugin.\n\nThis is the third course in the Moodle Developer Basics program.",tags:["development","api","architecture"],archived:!1,series:["basics"]},pluginBasics:{id:10,name:"Moodle Plugin Development Basics",summary:"Learn about the essential concepts in Moodle's moduel architecture.",description:"This course teaches you essential concepts related to Moodle's modular architecture, enabling you to develop a simple demo plugin.\n\nPlease note, this course is being migrated to form a new program of short courses on Moodle Academy (called 'Moodle Developer Basics'), which will all be available at the end of April 2022. For now you may still complete the course on Learn Moodle, or you might like to start the Moodle Academy developer short courses that are being released over the coming weeks and will form this new beginner level program.",tags:["development","basics","essentials","api","plugins","architecture"],archived:!1,series:["basics"]}}}},1302:function(e,t,n){"use strict";n.d(t,{dn:function(){return p.Z},vL:function(){return d},U6:function(){return s},E2:function(){return m.Z},mQ:function(){return h.Z},Zh:function(){return u}});n(6134);var o=n(7294),a=n(2659),i=n(3380),l=n(9960);function s(e){var t=e.versions.map((function(t){return r(t,e.issueNumber)}));return o.createElement(a.Z,{direction:"row",justifyContent:"flex-end",spacing:2},t)}var r=function(e,t){"number"==typeof e&&Number.isInteger(e)&&(e=e.toFixed(1));var n=o.createElement("span",null,"Since ",e),a=o.createElement(i.Z,{key:"Since"+e,label:n});return t?o.createElement(l.Z,{to:"https://tracker.moodle.org/browse/"+t},a):a};var c=n(6010);function u(e){return o.createElement("div",{className:(0,c.Z)(" alert alert--success margin-bottom--lg ")},o.createElement("span",{class:"badge badge--success"},"An example of correct behaviour"),e.children)}function d(e){return o.createElement("div",{className:(0,c.Z)(" alert alert--danger margin-bottom--lg ")},o.createElement("span",{class:"badge badge--danger"},"An example of incorrect behaviour"),e.children)}var p=n(8066),m=n(8215),h=n(9877)},6134:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(7294),a=n(3123),i=n(9960),l=n(8698),s=n(2798),r=n.n(s),c=n(3908);function u(e){var t=e.courseName;if(!r().courses[t])throw Error("Unknown course "+t);var n=r().courses[t];return o.createElement(a.Z,{type:"info",icon:o.createElement(l.Z,{fontSize:"inherit"}),title:"Learn more on Moodle Academy"},"You can learn more about"," ",o.createElement("strong",null,e.subject)," ","from the"," ",o.createElement(c.Z,{title:n.summary},o.createElement(i.Z,{to:r().siteHome+"course/view.php?id="+n.id},n.name))," ","on Moodle Academy.")}},5129:function(e,t,n){"use strict";t.Z=n.p+"assets/images/allowedcommunication-a18a08cc8737b318a5f1d88374255639.png"},7647:function(e,t,n){"use strict";t.Z=n.p+"assets/images/componentdependencies-07e6506c3efe608b3b05a31467e4ab22.png"},8139:function(e,t,n){"use strict";t.Z=n.p+"assets/images/componentsinmoodle-1b1a260c55a95a2636ffa703bfd9f450.png"},1443:function(e,t,n){"use strict";t.Z=n.p+"assets/images/idealplugindesign-7f188504c3df902b91a2afdb01ae30d4.png"}}]);