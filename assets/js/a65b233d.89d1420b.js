"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[88614],{23412:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var o=a(83117),i=a(80102),n=(a(67294),a(3905)),s=a(13904),l=["components"],r={title:"Moodle App Overview",sidebar_label:"Overview",sidebar_position:1,tags:["Moodle App"]},d=void 0,p={unversionedId:"moodleapp/overview",id:"moodleapp/overview",title:"Moodle App Overview",description:"The Moodle App is a mobile application that helps users make the best of their Moodle sites on handheld devices. It has some additional features like offline access, and a dedicated interface adapted to mobile. It's focused on student functionality, so you won't find all the features you have on the web for teachers and admins. You can learn more about the features available in the user documentation.",source:"@site/docs/moodleapp/overview.md",sourceDirName:"moodleapp",slug:"/moodleapp/overview",permalink:"/devdocs/docs/moodleapp/overview",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/overview.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle App Overview",sidebar_label:"Overview",sidebar_position:1,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Moodle App",permalink:"/devdocs/docs/moodleapp"},next:{title:"Accessibility",permalink:"/devdocs/docs/moodleapp/accessibility"}},h={},u=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Web services and caching",id:"web-services-and-caching",level:3},{value:"Delegates and handlers",id:"delegates-and-handlers",level:3},{value:"Site plugins",id:"site-plugins",level:3},{value:"Platform Support",id:"platform-support",level:2},{value:"Where to go next",id:"where-to-go-next",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,o.Z)({frontMatter:r},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("p",null,"The Moodle App is a mobile application that helps users make the best of their Moodle sites on handheld devices. It has some additional features like offline access, and a dedicated interface adapted to mobile. It's focused on student functionality, so you won't find all the features you have on the web for teachers and admins. You can learn more about the features available in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/"},"the user documentation"),"."),(0,n.kt)("p",null,"On a technical level, it's a completely different codebase from the Moodle LMS, and interacts with a Moodle site using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/web_services"},"web services"),". You can find the source code of the application in github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp"},"github.com/moodlehq/moodleapp"),"."),(0,n.kt)("p",null,"Before embarking into any Moodle-specific documentation, we recommend that you are at least familiar with ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," and ",(0,n.kt)("a",{parentName:"p",href:"https://ionicframework.com/"},"Ionic Framework"),". These are the core technologies used in the application. We'll reference any relevant concepts, but having a basic idea will take you a long way in understanding the Moodle App."),(0,n.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,n.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"When you are accessing a Moodle site on the web, you are only capable of using one site at a time. In contrast to that, the Moodle App can be used with multiple sites at once. However, you will need to switch sessions to interact with each site, so you won't be able to use multiple sites simultaneously (but you'll continue receiving push notifications and reminders for all the sites connected in the app)."),(0,n.kt)("p",null,"This works because the app is not coupled to any specific Moodle site, it acts as a client that will connect with a site after logging in; using the site url and user credentials. Compared to the Moodle LMS, users can always use the latest version of the app even if the site is running an old version. Some features may be missing or change depending on the version of the site, but it will work the same way for the most part."),(0,n.kt)("p",null,"The app can also be compiled to work with a single site, or a list of approved sites. Which may be desirable for building custom applications. For most people though, ",(0,n.kt)("a",{parentName:"p",href:"https://moodle.com/app/"},"the official app from MoodleHQ")," will be sufficient because it's not restricted to any site."),(0,n.kt)("p",null,"Keep in mind that the application only works with moodle sites that allow it, and this is disabled by default. If you want to allow users to log into your site using the app, make sure to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Moodle_app_guide_for_admins#Enable_mobile_services_on_your_site"},"enable it in the settings"),". If you are not the site owner, reach out to the administrators."),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The code of the application follows an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"hexagonal architecture"),", with core modules that include the main functionality and addon modules that provide additional features."),(0,n.kt)("p",null,"Class names are prefixed by their module, so that you can identify whether you're working with something in core or an addon. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"CoreCourseProvider")," is a core service implementing course features, while ",(0,n.kt)("inlineCode",{parentName:"p"},"AddonMessagesProvider")," is an addon service related with messaging."),(0,n.kt)("p",null,"These modules are defined as ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-modules"},"Angular Modules"),", and they are resolved at runtime using ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-services"},"Angular's dependency injection framework"),"."),(0,n.kt)("p",null,"Pages and navigation are defined using ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/guide/routing-overview"},"Angular Router"),", making heavy use of ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/guide/lazy-loading-ngmodules"},"lazy loading"),"."),(0,n.kt)("h3",{id:"web-services-and-caching"},"Web services and caching"),(0,n.kt)("p",null,"The entire communication between the app and a site happens through a layer of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web_services"},"web services"),'. Each time a user logs into the application, a new session starts and that session is what the concept of a "site" encapsulates in the application. For this reason, you could log multiple times into the same site and from the point of view of the application those would be different sites.'),(0,n.kt)("p",null,'For performance reasons, the data retrieved from some web services is cached automatically. For example, the list of courses that a user is enrolled in. This is also useful so that the application works offline. However, not everything is cached automatically, and some things like entire courses can be downloaded manually. This is referred to as "prefetching".'),(0,n.kt)("p",null,"When a user logs out from a site, or their session expires, this data will remain in the device but won't be accessible without logging in again. In order to remove all the data, they should delete the site from the list of sites the app is connected to."),(0,n.kt)("p",null,"In some situations, the cached data can also be refreshed. For example, many screens support the pull-to-refresh gesture, and downloaded data can be refreshed using similar controls to the ones used to prefetch in the first place."),(0,n.kt)("h3",{id:"delegates-and-handlers"},"Delegates and handlers"),(0,n.kt)("p",null,"Delegates and handlers are what allows some parts of the app to be easily extendable. This system allows addons to be as independent from core as possible. Since the core features don't know which addons will be active, each addon is responsible to tell core which functionality they extend."),(0,n.kt)("p",null,"A delegate is an Angular service that allows other instances to be registered. The instances registered in a delegate are called handlers. Each feature that can be extended will have a delegate service."),(0,n.kt)("p",null,"For example, the tabs displayed at the bottom or left of the app are extendable, addons can add their own tabs. To do so, the app defines a delegate named ",(0,n.kt)("inlineCode",{parentName:"p"},"CoreMainMenuDelegate")," that will contain the list of handlers that want to display a tab. Each addon that wants to display a tab will need to create a handler and register it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"CoreMainMenuDelegate")," during the ",(0,n.kt)("a",{parentName:"p",href:"https://angular.io/api/core/APP_INITIALIZER"},"Angular initialisation process"),"."),(0,n.kt)("p",null,"The app has two types of delegates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Delegates that return an array of handlers. Features related to this delegates will display a list, and so the handlers are placed in an array and ordered by priority. For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"CoreMainMenuDelegate")," belongs to this type since we have a list of tabs to display."),(0,n.kt)("li",{parentName:"ul"},"Delegates where the handlers are indexed by a unique key. In this case, delegates will return the handler associated with the key instead of a list of handlers. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"CoreCourseModuleDelegate")," is a delegate to handle course modules (activities or resources). Each handler needs to indicate which module it handles with the key, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"quiz"),". When the app needs to open a module, it will use the right handler.")),(0,n.kt)("h3",{id:"site-plugins"},"Site plugins"),(0,n.kt)("p",null,"Moodle plugins can also be adapted to work with the mobile app. Given that more than one site can be used with the app, the plugins that are activated depend on the site the app is connected to. That's why they are called site plugins."),(0,n.kt)("p",null,"When the application connects with a site, it will fetch information about which plugins have mobile support and register their functionality using ",(0,n.kt)("a",{parentName:"p",href:"#delegates-and-handlers"},"the delegates system"),". Plugins can be written using only PHP, but JavaScript is also supported for some advanced use-cases."),(0,n.kt)("h2",{id:"platform-support"},"Platform Support"),(0,n.kt)("p",null,"The Moodle App only works with Moodle sites running version 3.1 or newer."),(0,n.kt)("p",null,"The minimum platforms supported by the application are Android 5.1 (with Webview 61 or higher) and iOS 11."),(0,n.kt)("p",null,"Browsers are not officially supported, but you can use a Chromium-based browser for development if you don't need any native functionality. However, there are ",(0,n.kt)("a",{parentName:"p",href:"./development/setup/app-in-browser"},"some caveats")," you should be aware of."),(0,n.kt)("h2",{id:"where-to-go-next"},"Where to go next"),(0,n.kt)("p",null,"Now that you are familiar with the basic concepts, you understand how the application works, and you've got your development environment set up; you're ready to embark into the particulars of what you're trying to achieve."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do you want to contribute to the core? Read the ",(0,n.kt)("a",{parentName:"li",href:"./development/development-guide"},"Moodle App Development guide"),"."),(0,n.kt)("li",{parentName:"ul"},"Do you want to adapt a plugin to mobile? Read the ",(0,n.kt)("a",{parentName:"li",href:"./development/plugins-development-guide"},"Moodle App Plugins development guide"),"."),(0,n.kt)("li",{parentName:"ul"},"Do you want to customise your site in the app? Read the ",(0,n.kt)("a",{parentName:"li",href:"./customisation"},"Moodle App Customisation")," page."),(0,n.kt)("li",{parentName:"ul"},"Do you want to make a custom app? Read the ",(0,n.kt)("a",{parentName:"li",href:"./customisation/custom-apps"},"Custom Moodle Apps")," page.")),(0,n.kt)("p",null,"If you have any further questions, check out ",(0,n.kt)("a",{parentName:"p",href:"./faq"},"Moodle App FAQ|the FAQ"),". If there's anything you want to share, you can do it in ",(0,n.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=7798"},"the forum")," or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Chat"},"the Telegram developer room"),". You can also report any bugs that you find in ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE"},"the tracker"),"."))}m.isMDXComponent=!0}}]);