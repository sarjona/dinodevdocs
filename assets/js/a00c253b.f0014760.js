"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[98181],{16787:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(87462),o=r(63366),l=(r(67294),r(3905)),s=r(13904),i=["components"],n={title:"Moodle 2.8.9",tags:["Release notes","Moodle 2.8"],sidebar_position:9,moodleVersion:"2.8.9"},d=void 0,p={unversionedId:"releases/2.8/2.8.9",id:"releases/2.8/2.8.9",title:"Moodle 2.8.9",description:"Release date: 9 November 2015",source:"@site/general/releases/2.8/2.8.9.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.9",permalink:"/devdocs/general/releases/2.8/2.8.9",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.9.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:9,frontMatter:{title:"Moodle 2.8.9",tags:["Release notes","Moodle 2.8"],sidebar_position:9,moodleVersion:"2.8.9"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.8",permalink:"/devdocs/general/releases/2.8/2.8.8"},next:{title:"Moodle 2.8.10",permalink:"/devdocs/general/releases/2.8/2.8.10"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 9 November 2015"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8.9%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.8.9"),"."),(0,l.kt)("h2",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42639"},"MDL-42639")," - Web service core_user_get_users_by_field should return username or idnumber to all managers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48861"},"MDL-48861"),' - Assignment: "Need grading" filter is not working properly within grading overview'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51552"},"MDL-51552"),' - "Single View" bulk insert for empty grades no longer overwrites non-empty grades'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46239"},"MDL-46239")," - Scheduled task manager handles timezones more properly"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51083"},"MDL-51083")," - Fixed undesired browser password autofilling in several forms (majority of forms were fixed in ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45772"},"MDL-45772")," in previous release)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36606"},"MDL-36606")," - AJAX Grader report now works correctly when uneditable cells are present")),(0,l.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49545"},"MDL-49545")," - Teachers without capability to change course full or short name should not be able to do it during restore as well"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50811"},"MDL-50811")," - Forum email replies update completion tracking information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51834"},"MDL-51834")," - Lock custom profile fields that are set to by synchronised with various auth plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44707"},"MDL-44707")," - Copy embedded files in HTML block when duplicating block (mostly affects adding HTML block with files to default Dashboard)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51467"},"MDL-51467")," - Changing course start date when resetting course now correctly adjusts Date Restrictions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43594"},"MDL-43594")," - Assignment: Resetting course start date now updates calendar events respectfully")),(0,l.kt)("h2",{id:"ui-changes"},"UI changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40710"},"MDL-40710")," - Better visualization of badges backpack icon"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51290"},"MDL-51290")," - Make adding a photo to a profile more obvious")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323229"},"MSA-15-0038")," DDoS possibility in Atto"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323230"},"MSA-15-0039")," CSRF in site registration form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323231"},"MSA-15-0040")," Student XSS in survey"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323232"},"MSA-15-0041")," XSS in flash video player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323233"},"MSA-15-0042")," CSRF in lesson login form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323234"},"MSA-15-0043")," Web service core_enrol_get_enrolled_users does not respect course group mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323235"},"MSA-15-0044")," Capability to view available badges is not respected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323236"},"MSA-15-0045")," SCORM module allows to bypass access restrictions based on date"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=323237"},"MSA-15-0046")," Choice module closing date can be bypassed")),(0,l.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51514"},"MDL-51514")," - Performance improvement in one of regrading queries on MySQL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51498"},"MDL-51498")," - Improve performance for regrading gradebook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50805"},"MDL-50805")," - Performance improvement in cron Messaging Cleanup Task"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26429"},"MDL-26429")," - Added missing criteria icons to completion report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51190"},"MDL-51190")," - Fixed MS Edge locking up when viewing embedded PDF"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46710"},"MDL-46710")," - LTI module correctly tracks completion when opened in a new window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46497"},"MDL-46497")," - Atto: clicking RTL button and then LTR button should not add additional HTML tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49032"},"MDL-49032")," - RFC2445_WSP defined incorrectly for Bennu iCal."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50892"},"MDL-50892")," - Fixed errors appearing when resource or activity was named '0' (zero)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51390"},"MDL-51390")," - Badges: fixed connection to external backpack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50079"},"MDL-50079"),' - Atto: Fixed bug when user was unable to select "open in new window" when linking to the file from repository')),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.9"},"Notes de mise \xe0 jour de Moodle 2.8.9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.9"},"Notas de Moodle 2.8.9"))))}k.isMDXComponent=!0}}]);