"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[88979],{5248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),l=a(13904),i=["components"],s={title:"Moodle 2.7",tags:["Release notes","Moodle 2.7"],sidebar_position:-207,moodleVersion:"2.7"},d=void 0,p={unversionedId:"releases/2.7",id:"releases/2.7",title:"Moodle 2.7",description:"Release date: 12th May 2014",source:"@site/general/releases/2.7.md",sourceDirName:"releases",slug:"/releases/2.7",permalink:"/devdocs/general/releases/2.7",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.7",permalink:"/devdocs/general/tags/moodle-2-7"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:-207,frontMatter:{title:"Moodle 2.7",tags:["Release notes","Moodle 2.7"],sidebar_position:-207,moodleVersion:"2.7"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.12",permalink:"/devdocs/general/releases/2.8/2.8.12"},next:{title:"Moodle 2.7.1",permalink:"/devdocs/general/releases/2.7/2.7.1"}},m={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Screen reader support",id:"screen-reader-support",level:3},{value:"Before you upgrade",id:"before-you-upgrade",level:2},{value:"Questions engine upgrade",id:"questions-engine-upgrade",level:3},{value:"Themes",id:"themes",level:3},{value:"Headline features",id:"headline-features",level:2},{value:"Interface",id:"interface",level:3},{value:"Platform",id:"platform",level:3},{value:"Long-term support (LTS) until May 2017",id:"long-term-support-lts-until-may-2017",level:3},{value:"Much much more",id:"much-much-more",level:2},{value:"Administration",id:"administration",level:3},{value:"Quiz &amp; Question bank",id:"quiz--question-bank",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Database",id:"database",level:3},{value:"Forum",id:"forum",level:3},{value:"SCORM",id:"scorm",level:3},{value:"Cron",id:"cron",level:3},{value:"Badges",id:"badges",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Gradebook",id:"gradebook",level:3},{value:"Course and pages",id:"course-and-pages",level:3},{value:"Mobile",id:"mobile",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"Developer Notes",id:"developer-notes",level:2},{value:"API changes",id:"api-changes",level:3},{value:"Upgrade notes for developers",id:"upgrade-notes-for-developers",level:3},{value:"Development numbers",id:"development-numbers",level:2},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function g(e){var t=e.components,d=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,(0,r.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("p",null,"Release date: 12th May 2014"),(0,n.kt)("p",null,"Here is ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the complete list of fixed issues in 2.7"),". See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/27/en/New_features"},"New features")," for a user-friendly highlights tour with screenshots."),(0,n.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,n.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.2 or later (if upgrading from earlier versions, you must upgrade to 2.2.11 as a first step)"),(0,n.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.4.4 (always use latest PHP 5.4.x or 5.5.x on Windows - ",(0,n.kt)("a",{parentName:"li",href:"http://windows.php.net/download/"},"http://windows.php.net/download/"),"), PHP 7 is NOT supported"),(0,n.kt)("li",{parentName:"ul"},"Ghostscript should be installed for pdf annotation.")),(0,n.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,n.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,n.kt)("td",{parentName:"tr",align:null},"9.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,n.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,n.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,n.kt)("td",{parentName:"tr",align:null},"2008"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,n.kt)("td",{parentName:"tr",align:null},"10.2"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,n.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,n.kt)("h3",{id:"browser-support"},"Browser support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Browser"),(0,n.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended version"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.google.com/intl/en_au/chrome/browser/"},"Google Chrome")),(0,n.kt)("td",{parentName:"tr",align:null},"30.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.mozilla.org/en-US/"},"Mozilla Firefox")),(0,n.kt)("td",{parentName:"tr",align:null},"25.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.apple.com/safari/"},"Apple Safari")),(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie"},"Microsoft Internet Explorer")),(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest"),(0,n.kt)("td",{parentName:"tr",align:null},"Version 10 is required for drag-and-drop upload of content from outside the browser into Moodle")))),(0,n.kt)("h3",{id:"screen-reader-support"},"Screen reader support"),(0,n.kt)("p",null,"We now support and test on two screen reader configurations (",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-44002"},"MDL-44002"),")."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Browser"),(0,n.kt)("th",{parentName:"tr",align:null},"Screen reader"),(0,n.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,n.kt)("th",{parentName:"tr",align:null},"Recommended version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie"},"Microsoft Internet Explorer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.freedomscientific.com/products/fs/jaws-product-page.asp"},"Jaws")),(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.mozilla.org/en-US/"},"Mozilla Firefox")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.nvaccess.org/"},"NVDA")),(0,n.kt)("td",{parentName:"tr",align:null},"2014.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,n.kt)("h2",{id:"before-you-upgrade"},"Before you upgrade"),(0,n.kt)("h3",{id:"questions-engine-upgrade"},"Questions engine upgrade"),(0,n.kt)("p",null,"When upgrading to Moodle 2.1 or 2.2 it was possible to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/21/en/Upgrading_to_Moodle_2.1#Planning_the_question_engine_upgrade"},"delay part of the Question engine upgrade"),". You must complete this upgrade before upgrading to Moodle 2.7. You can check if this was completed at the bottom of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Environment"},"Environment page"),"."),(0,n.kt)("p",null,"For further information, see the upgrading notes to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/27/en/Upgrading#Questions_engine_upgrade"},"complete the Question engine upgrade before Moodle 2.7"),"."),(0,n.kt)("h3",{id:"themes"},"Themes"),(0,n.kt)("p",null,"All standard themes present in earlier versions, except ",(0,n.kt)("strong",{parentName:"p"},"Clean"),", have been removed from Moodle 2.7.  If you wish to continue using one of these themes then you will need to reinstall it explicitly before running the upgrade."),(0,n.kt)("p",null,"See the upgrading notes for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/27/en/Upgrading#Themes"},"theme upgrades in Moodle 2.7")," for further information."),(0,n.kt)("h2",{id:"headline-features"},"Headline features"),(0,n.kt)("h3",{id:"interface"},"Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42964"},"MDL-42964")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Standard_themes"},"Themes clean-up")," - Moodle is focussed on Bootstrap and improved responsive design.  Clean is now the default theme and most other old themes have been removed from core (still available from Plugins directory).  Many small improvements have been made all through the interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43786"},"MDL-43786")," - More theme - A completely new theme called More that provides easy configuration though the UI, while retaining the efficiency of LESS and the responsiveness of Bootstrap."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43841"},"MDL-43841")," - New ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Text_editor"},"text editor"),", Atto - Tightly integrated in Moodle and focussing on usability and accessibility (TinyMCE still available as an option)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44070"},"MDL-44070")," - Improved ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Conditional_activities_settings"},"conditional activities")," - Complex boolean combinations are now supported to control when activities are available to students, with a conditions plugin API and a better interface...and it's faster!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43855"},"MDL-43855")," - New mathematical equation editor for Atto, producing TeX using a GUI without needing Java.  Works everywhere, even tablets and phones."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43856"},"MDL-43856")," - New ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/MathJax_filter"},"MathJax filter")," for displaying mathematical equations without needing binaries on the server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44637"},"MDL-44637")," - New report listing all events possible on a site.")),(0,n.kt)("h3",{id:"platform"},"Platform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37658"},"MDL-37658")," - Logging - a new logging subsystem with plugins allowing Moodle logs to be very detailed and external. Log reports have been updated too.  ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Events_list"},"Many new events")," have been added which developers can take advantage of. These advancements will support better analytics in future as well as reporting standards like TinCan."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25499"},"MDL-25499")," - Scheduled Tasks - an improved ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Scheduled_tasks"},"scheduling system")," (like Unix cron) that allows precise scheduling of tasks even on complex clustered servers."),(0,n.kt)("li",{parentName:"ul"},"Performance - With improvements to logging and scheduled tasks, as well as many other small improvements, overall performance will be improved, particularly on large sites.")),(0,n.kt)("h3",{id:"long-term-support-lts-until-may-2017"},"Long-term support (LTS) until May 2017"),(0,n.kt)("p",null,"This release will have an extra-long period of support from Moodle HQ for ",(0,n.kt)("strong",{parentName:"p"},"3 years")," (instead of the usual 1.5 years)."),(0,n.kt)("p",null,"If you have been stuck on an old version like Moodle 1.9 then this might be the perfect time to join us in the future!"),(0,n.kt)("h2",{id:"much-much-more"},"Much much more"),(0,n.kt)("h3",{id:"administration"},"Administration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26680"},"MDL-26680")," - My home ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/My_home"},"reset to default")," button"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42932"},"MDL-42932")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Calendar_settings"},"Calendar type choice")," at system level"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43526"},"MDL-43526")," - Option to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Course_restore"},"restore a course from the course management pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43497"},"MDL-43497")," - New capability ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Capabilities/moodle/site:forcelanguage"},"moodle/site:forcelanguage")," to allow the course language to be overridden"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18633"},"MDL-18633")," - New capability ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Capabilities/moodle/user:viewlastip"},"moodle/user:viewlastip")," for viewing a last IP field on user profile pages"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36141"},"MDL-36141")," - New capability ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Capabilities/moodle/course:reviewotherusers"},"moodle/course:reviewotherusers")," for restricting access to the other users page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44505"},"MDL-44505")," - Subject line of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Forum_settings#Changing_the_subject_line_of_forum_notifications"},"forum notifications")," is configurable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43682"},"MDL-43682"),", ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43681"},"MDL-43681")," Log reports - User interfaces for the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Logs"},"Live logs and Log reports")," have been improved, with more information and filtering support."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35597"},"MDL-35597")," - Plugin types are now ordered in Plugins menu."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43117"},"MDL-43117")," - A release column has been added to the Plugins Overview page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40939"},"MDL-40939")," - Mimetex binary path is configurable.")),(0,n.kt)("h3",{id:"quiz--question-bank"},"Quiz & Question bank"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41727"},"MDL-41727")," - Quiz reports improved.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Responses from all tries are available for analysis when using or "Adaptive", "Interactive with multiple tries" or similar behaviours.'),(0,n.kt)("li",{parentName:"ul"},"Break-down by question variant, for question types like Calculated, STACK and Variable-numeric, which one question can have different random variants."),(0,n.kt)("li",{parentName:"ul"},"Progress bar during long calculations to prevent time-outs."),(0,n.kt)("li",{parentName:"ul"},"Low-level calculation code moved into the question component, where it could potentially be reused by other activities."),(0,n.kt)("li",{parentName:"ul"},"Much more automated testing of this complex area of code."))),(0,n.kt)("li",{parentName:"ul"},"Some minor improvements to the usability of the question bank - Some of ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40987"},"MDL-40987"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33653"},"MDL-33653")," - To duplicate a question, you now start by clicking the x2 icon, like for activities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33839"},"MDL-33839")," - The various different ways to move questions in the question bank have been rationalised."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33653"},"MDL-33653")," - There is now a 'Save changes and continue editing' button when editing questions. Useful when you are working on a complex question with the preview open in another window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32729"},"MDL-32729")," - The interface of the question type selector has been updated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40313"},"MDL-40313")," & ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40457"},"MDL-40457")," - New plugin point, so that plugins can add columns to the question bank, or new search conditions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39756"},"MDL-39756")," - Essay questions can now require an attachment, with the text optional, rather than the other way around."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27414"},"MDL-27414")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Random_Short-Answer_Matching_question_type"},"Random short-answer matching question type")," brought back from the dead. (This was in stable branches, but worth mentioning again.)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43478"},"MDL-43478")," - Option to show all tries in responses report.")),(0,n.kt)("h3",{id:"assignment"},"Assignment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33952"},"MDL-33952"),' - The old Assignment (2.2) module has been removed from core. It has been replaced by a stub to support transparently remapping urls and restoring course backups from the old module to the new one. If you are still using the old assignment module - all instances of the old assignment module will be hidden after upgrading to Moodle 2.7. Once the upgrade tool is run on those assignments they will become visible again. It is recommended to upgrade, and then convert any remaining assignments because logic has been added to the assignment upgrade code for Moodle 2.7 to transparently map urls from the old assignment module to the new one. If you really, really need to keep using the old module, you should update the code to Moodle 2.7, and then replace the "mod/assignment" folder with the one from ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-mod_assignment/releases"},"https://github.com/moodlehq/moodle-mod_assignment/releases")," before completing the upgrade."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28448"},"MDL-28448")," - A new capability ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Capabilities/mod/assign:editothersubmission"},"mod/assign:editothersubmission")," can be given to teachers to allow them to edit or delete student submissions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33600"},"MDL-33600")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Using_Assignment#Controlling_when_to_notify_students_of_graded_work"},"'Notify students'")," is available to control when to send feedback during the grading process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34432"},"MDL-34432")," - Teachers can comment directly on students' work on online text assignments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42585"},"MDL-42585")," - New capability ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Capabilities/mod/assign:viewgrades"},"mod/assign:viewgrades")," to allow grades to be viewed but not changed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44268"},"MDL-44268")," - Assignment grading table ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Using_Assignment#Filtering_submissions"},"filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35373"},"MDL-35373")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Assignment_settings#Online_text"},"Word limit")," feature added to online assignments."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44629"},"MDL-44629")," - Assignment plugins can display an introduction.")),(0,n.kt)("h3",{id:"database"},"Database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42842"},"MDL-42842")," - Availability can be set with ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Database_activity_settings"},"a time as well as a date."))),(0,n.kt)("h3",{id:"forum"},"Forum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44505"},"MDL-44505")," - Subject line of forum notifications can now be configured through language string customisation")),(0,n.kt)("h3",{id:"scorm"},"SCORM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43011"},"MDL-43011")," - SCORM new window now opens without headers/footers as expected.")),(0,n.kt)("h3",{id:"cron"},"Cron"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25499"},"MDL-25499")," - Cron has received a major update and now has support for both scheduled and adhoc tasks.\nThe benefits of these changes are:"),(0,n.kt)("li",{parentName:"ul"},"The schedule for every task can be configured by the admin"),(0,n.kt)("li",{parentName:"ul"},"Tasks can run in parallel"),(0,n.kt)("li",{parentName:"ul"},"Cron processes use locking to prevent the same task running at the same time by different processes")),(0,n.kt)("p",null,"A result of this is that cron can be run much more often, which means (for example) forum posts can be sent out sooner. It is now strongly recommended that administrators increase the frequency that cron is run to at least ",(0,n.kt)("em",{parentName:"p"},"once per minute"),", however it can be kept at it's previous schedule if desired if you do not wish to benefit from these changes."),(0,n.kt)("h3",{id:"badges"},"Badges"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40551"},"MDL-40551")," - Badges can be ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Managing_badges#Deleting_badges"},"deleted")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44264"},"MDL-44264")," - Badges are displayed on ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Badges_settings#Viewing_the_badges_of_other_users"},"course profile")," pages")),(0,n.kt)("h3",{id:"authentication"},"Authentication"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42816"},"MDL-42816")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Manual_accounts"},"Manual account authentication")," can now have password expiry enabled."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41115"},"MDL-41115")," - Users can ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Managing_authentication"},"log in")," with either their username or their email address."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33925"},"MDL-33925")," - Support for self-signed certificate without SSL in auth IMAP")),(0,n.kt)("h3",{id:"gradebook"},"Gradebook"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32888"},"MDL-32888")," - Gradebook search allows for ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Gradebook"},"filtering by student name.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31679"},"MDL-31679")," - The top of the grader report now also has a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Gradebook"},"horizontal scrollbar"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22999"},"MDL-22999")," - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Grade_points"},"Maximum marks")," in standard activities can now exceed 100.")),(0,n.kt)("h3",{id:"course-and-pages"},"Course and pages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38923"},"MDL-38923")," - Blocks can be docked while using the Clean theme."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44269"},"MDL-44269")," - Breadcrumbs moved below the logo image in Clean.")),(0,n.kt)("h3",{id:"mobile"},"Mobile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44342"},"MDL-44342")," - Airnotifier allows notifications to be sent to MoodleMobile app."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30085"},"MDL-30085"),", ",(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30106"},"MDL-30106")," Web services added for grades and forums.")),(0,n.kt)("h2",{id:"security-issues"},"Security issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260361"},"MSA-14-0014")," Cross-site request forgery possible in Assignment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260362"},"MSA-14-0015")," Web service token expiry issue for MoodleMobile"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260363"},"MSA-14-0016")," Anonymous student identity revealed in Assignment"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260364"},"MSA-14-0017")," File access issue in HTML block"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260365"},"MSA-14-0018")," Information leak in courses"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=260366"},"MSA-14-0019")," Reflected XSS in URL downloader repository")),(0,n.kt)("h2",{id:"developer-notes"},"Developer Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Logging and events: All plugins should convert their logging and triggering of events to the new API. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Migrating_logging_calls_in_plugins"},"Migrating logging calls in plugins"),"."),(0,n.kt)("li",{parentName:"ul"},"Reports: Reports that use log table should be updated to use the new logging framework. Old reports will continue to work as before as long as legacy logging is enabled in the site. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Migrating_log_access_in_reports"},"Migrating log access in reports")," for details."),(0,n.kt)("li",{parentName:"ul"},"Developers can now use the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Lock_API"},"Lock API")," to lock critical tasks (even across cluster nodes)."),(0,n.kt)("li",{parentName:"ul"},"Plugins can now use the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Task_API"},"Task API")," to schedule background tasks and developers are encouraged to convert to this API from legacy cron."),(0,n.kt)("li",{parentName:"ul"},"New plugin type for conditional availability. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Availability_conditions"},"Availability conditions"),"."),(0,n.kt)("li",{parentName:"ul"},"New plugin type for Atto editor. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Atto"},"Atto")),(0,n.kt)("li",{parentName:"ul"},"New plugin type for Logging store.")),(0,n.kt)("h3",{id:"api-changes"},"API changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39952"},"MDL-39952")," - Core events: All core events have been converted to the new ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Events_API"},"Events API"),'. The list of all events is available for admin in report "Events list". Writing observers to the new events is easier but old-style observers will continue to work. Moodle plans to add missing validation to core events before release of 2.7.1 (it will not affect plugins unless they directly trigger core events).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43040"},"MDL-43040")," - Activity modules should use $plugin instead of $module in mod/*/version.php."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45250"},"MDL-45250")," - add_to_log() has been deprecated and now generates debugging warnings\\"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44510"},"MDL-44510")," - PHPUnit 4.x is now supported."),(0,n.kt)("li",{parentName:"ul"},"New API for raising php time limit core_php_time_limit::raise()"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39337"},"MDL-39337")," - New html_writer::image() api")),(0,n.kt)("h3",{id:"upgrade-notes-for-developers"},"Upgrade notes for developers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/auth/upgrade.txt"},"Authentication plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/badges/upgrade.txt"},"Badges")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/blog/upgrade.txt"},"Blog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/cache/upgrade.txt"},"Cache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/lib/upgrade.txt"},"Core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/filter/upgrade.txt"},"Filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/mod/upgrade.txt"},"Modules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/question/upgrade.txt"},"Question system")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/report/upgrade.txt"},"Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/tag/upgrade.txt"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/theme/upgrade.txt"},"Themes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.7.0/webservice/upgrade.txt"},"Webservices"))),(0,n.kt)("h2",{id:"development-numbers"},"Development numbers"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A summary of the developer inclusions in Moodle 2.7",src:a(64433).Z,width:"1280",height:"1724"})),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Category:New_features"},"User documentation of new features in Moodle 2.7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/27/en/Upgrading_to_Moodle_2.7"},"Upgrading to Moodle 2.7")," - information for admins who are upgrading from earlier versions")),(0,n.kt)("h2",{id:"translations"},"Translations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.7"},"Notes de mise \xe0 jour de Moodle 2.7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.7"},"Notas de Moodle 2.7"))))}g.isMDXComponent=!0},64433:function(e,t,a){t.Z=a.p+"assets/images/27devstats-86b0652f653fd0d295c331d7017d8ecc.png"}}]);