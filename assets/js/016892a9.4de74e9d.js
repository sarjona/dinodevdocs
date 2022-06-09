"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[60541],{51048:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.8.5",tags:["Release notes","Moodle 2.8"],sidebar_position:5,moodleVersion:"2.8.5"},d=void 0,p={unversionedId:"releases/2.8/2.8.5",id:"releases/2.8/2.8.5",title:"Moodle 2.8.5",description:"2.8.5 release date: Tuesday, 10 March 2015",source:"@site/general/releases/2.8/2.8.5.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.5",permalink:"/devdocs/general/releases/2.8/2.8.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654758094,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 2.8.5",tags:["Release notes","Moodle 2.8"],sidebar_position:5,moodleVersion:"2.8.5"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.3",permalink:"/devdocs/general/releases/2.8/2.8.3"},next:{title:"Moodle 2.8.6",permalink:"/devdocs/general/releases/2.8/2.8.6"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"2.8.5 release date: Tuesday, 10 March 2015"),(0,s.kt)("p",null,"This page also covers issues resolved in 2.8.4, released on Monday, 9 March 2015."),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20AND%20resolution%20%3D%20fixed%20AND%20fixVersion%20in%20%28%222.8.4%22%2C%20%222.8.5%22%29%20ORDER%20BY%20priority%20DESC"},"the full list of fixed issues in 2.8.4 and 2.8.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35392"},"MDL-35392")," - Feedback from module assign is now always shown in the gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31036"},"MDL-31036")," - No more truncating characters in assignment quick grading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46626"},"MDL-46626")," - Log report export no longer contains html"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-23273"},"MDL-23273")," - Limit of responses in choice module is respected in case of synchronous submissions")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31578"},"MDL-31578")," - Shibboleth can map attributes for all Moodle fields including custom attributes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47911"},"MDL-47911")," - Performance improvement on gradebook operations"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49240"},"MDL-49240")," - Web service core_get_string now functions correctly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45621"},"MDL-45621")," - It is possible to uninstall portfolio plugins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48670"},"MDL-48670")," - Standard behat tests now work properly regardless of user timezone")),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48533"},"MDL-48533")," - Backup report now links to the individual course backup summaries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49064"},"MDL-49064")," - left-align css class now has an RTL equivalent in bootstrap base")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307380"},"MSA-15-0010")," Personal contacts and number of unread messages can be revealed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307381"},"MSA-15-0011")," Authentication in mdeploy can be bypassed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307382"},"MSA-15-0012")," ReDoS Possible with Convert links to URLs filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307383"},"MSA-15-0013")," Block title not properly escaped and may cause HTML injection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307384"},"MSA-15-0014")," Potential information disclosure for the inaccessible courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307385"},"MSA-15-0015")," User without proper permission is able to mark the tag as inappropriate"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307386"},"MSA-15-0016")," Web services token can be created for user with temporary password"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=307387"},"MSA-15-0017")," XSS in quiz statistics report")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42138"},"MDL-42138")," - Required custom profile fields are always required on signup form even when user has logged in as guest"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49059"},"MDL-49059")," - Possible to embed YouTube videos with start time or playlist info"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48544"},"MDL-48544")," - Block region no longer disappears if all blocks in it were hidden"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48841"},"MDL-48841")," - Fixed bug with not being able to reset scheduled task to defaults"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49167"},"MDL-49167")," - Fixed regression with $CFG->yuislasharguments introduced by previous minor release"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47953"},"MDL-47953")," - Grader report shows correct number of students per page when suspended users are present"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48294"},"MDL-48294")," - enablemobilewebservice is no longer duplicated in Site admin"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48679"},"MDL-48679")," - Fixed bug with missing grade export URL when using grade publishing")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.5"},"Notes de mise \xe0 jour de Moodle 2.8.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.5"},"Notas de Moodle 2.8.5"))))}h.isMDXComponent=!0}}]);