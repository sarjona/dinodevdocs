"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27451],{56685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var o=a(83117),r=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 2.0.3",tags:["Release notes","Moodle 2.0"],sidebar_position:3,moodleVersion:"2.0.3"},d=void 0,m={unversionedId:"releases/2.0/2.0.3",id:"releases/2.0/2.0.3",title:"Moodle 2.0.3",description:"Release date: 5th May 2011",source:"@site/general/releases/2.0/2.0.3.md",sourceDirName:"releases/2.0",slug:"/releases/2.0/2.0.3",permalink:"/devdocs/general/releases/2.0/2.0.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.0/2.0.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.0",permalink:"/devdocs/general/tags/moodle-2-0"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 2.0.3",tags:["Release notes","Moodle 2.0"],sidebar_position:3,moodleVersion:"2.0.3"},sidebar:"releaseNotes",previous:{title:"Moodle 2.0.2",permalink:"/devdocs/general/releases/2.0/2.0.2"},next:{title:"Moodle 2.0.4",permalink:"/devdocs/general/releases/2.0/2.0.4"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"User interface changes",id:"user-interface-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Changes to APIs",id:"changes-to-apis",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 5th May 2011"),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-9376"},"MDL-9376")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Forum_module#Question_and_Answer_forum"},"Q and A forum")," editing time allows students to see other posts and modify their own"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-4633"},"MDL-4633")," - The description field is now a required ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/User_profile_fields"},"user profile field")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26697"},"MDL-26697")," - Multiple ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Multimedia_plugins"},"multimedia plugin filter")," fixes and improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-24724"},"MDL-24724")," - There is now a link to send ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Messaging_2.0"},"messages")," on basic profile pages")),(0,s.kt)("h2",{id:"user-interface-changes"},"User interface changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26388"},"MDL-26388")," - Duplicate files uploaded through the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/File_picker"},"file picker")," are now handled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26535"},"MDL-26535")," - New capability ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/mod/workshop/viewauthorpublished"},"mod/workshop:viewauthorpublished")," for controlling visibility of workshop published submission authors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25834"},"MDL-25834")," - Fixes to ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Themes"},"themes")," for IE")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("p",null,"For details of resolved security issues, see ",(0,s.kt)("a",{parentName:"p",href:"http://moodle.org/security/"},"http://moodle.org/security/"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26803"},"MDL-26803"),' - "Force password change" not happening'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25122"},"MDL-25122")," - Quiz review page does not check and enforce separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26621"},"MDL-26621")," - System user profile leaks email when maildisplay == 2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26838"},"MDL-26838")," - Ability to fill a database with invalid records through ratings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26854"},"MDL-26854")," - Ability to generate invalid records in the comments table in the database")),(0,s.kt)("h2",{id:"changes-to-apis"},"Changes to APIs"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Multiple fixes to ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Ratings_2.0"},"ratings"),"\n:Modules etc wanting to make use of ratings are now required to implement two callback functions, modname_rating_permissions() and modname_rating_validate(). Full details of the callbacks are available in the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Ratings_2.0#Module_callbacks"},"rating 2.0 documentation"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Comments_2.0"},"Comments API")," improvements\n:Plugins intending to use comments are required to implement two callback functions: pluginname_comment_validate(), and pluginname_comment_permissions. Please read full details in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Comments_2.0#Moodle_modules_callback"},"Comments documentation"),"."))),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26643"},"MDL-26643")," - Fixed blog visibility issue after update"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26768"},"MDL-26768")," - Grades from Lessons are now correctly set to null on non-attempt"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26798"},"MDL-26798")," - Fixes to Dropbox repository integration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27116"},"MDL-27116")," - Fixed theme directory linking"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27246"},"MDL-27246")," - Able to checkout strings in the language customisation tool"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27251"},"MDL-27251")," - Added optional timeout estimation to file downloads based on file size as it can blocks upgrade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27394"},"MDL-27394")," - Backup and restore might sometimes have scrambled the order of choices in question types.")),(0,s.kt)("p",null,"A total of over 200 changes were made. See the ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/ReleaseNote.jspa?projectId=10011&version=10537"},"full list of fixed issues in 2.0.3"),"."),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_2.0.3_Versionsinformationen"},"Moodle 2.0.3 Versionsinformationen")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.0.3"},"Notas de Moodle 2.0.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.0.3"},"Notes de mise \xe0 jour de Moodle 2.0.3"))))}c.isMDXComponent=!0}}]);