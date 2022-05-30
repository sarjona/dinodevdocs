"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[48406],{75669:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=a(87462),o=a(63366),s=(a(67294),a(3905)),n=a(13904),l=["components"],i={title:"Moodle 2.5.5",tags:["Release notes","Moodle 2.5"],sidebar_position:5,moodleVersion:"2.5.5"},d=void 0,m={unversionedId:"releases/2.5/2.5.5",id:"releases/2.5/2.5.5",title:"Moodle 2.5.5",description:"Release date: 10 March 2014",source:"@site/general/releases/2.5/2.5.5.md",sourceDirName:"releases/2.5",slug:"/releases/2.5/2.5.5",permalink:"/devdocs/general/releases/2.5/2.5.5",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.5/2.5.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.5",permalink:"/devdocs/general/tags/moodle-2-5"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:5,frontMatter:{title:"Moodle 2.5.5",tags:["Release notes","Moodle 2.5"],sidebar_position:5,moodleVersion:"2.5.5"},sidebar:"releaseNotes",previous:{title:"Moodle 2.5.4",permalink:"/devdocs/general/releases/2.5/2.5.4"},next:{title:"Moodle 2.5.6",permalink:"/devdocs/general/releases/2.5/2.5.6"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,r.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 March 2014"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.5.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.5.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43733"},"MDL-43733")," - Auto-saved responses are used when a quiz attempt is submitted automatically"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27414"},"MDL-27414")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/25/en/Random_Short-Answer_Matching_question_type%7C"},"Random short answer matching question type")," now works again (with thanks to Jean-Michel V\xe9drine)")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40821"},"MDL-40821")," - Language menu in Clean shows language used")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43882"},"MDL-43882"),' - "Time spent waiting for the database" value added to performance info')),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44425"},"MDL-44425")," - Skydrive, Box.net and Google Docs are renamed OneDrive, Box and Google Drive respectively to reflect these remote service name changes.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256416"},"MSA-14-0004")," Incorrect filtering in Quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256417"},"MSA-14-0005")," Access issue in Feedback activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256418"},"MSA-14-0006")," Capability issue in Chat"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256419"},"MSA-14-0007")," Access issue in Wiki"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256420"},"MSA-14-0008")," Cross site scripting potential in Flowplayer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256421"},"MSA-14-0009")," Identity information leak in Forum and Quiz"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256422"},"MSA-14-0010")," Identity information leak in Alfresco Repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256423"},"MSA-14-0011")," Cross site request forgery potential in IMS enrolments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=256424"},"MSA-14-0012")," Access issue in Badges")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40705"},"MDL-40705")," - Long course names are truncated in navigation menu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40205"},"MDL-40205")," - Long block titles are truncated in Clean"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42882"},"MDL-42882")," - Performance improvement to missing root directory upgrade step"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40849"},"MDL-40849")," - Assignment marking guide screen fixed in Clean"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44217"},"MDL-44217")," - The link colour in Bootstrapbase (and Clean) is now WCAG compliant"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44029"},"MDL-44029")," - Quiz user overrides no longer deleted by group event handler"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44018"},"MDL-44018")," - Variant field of question_attempts is backed up by Moodle backup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43941"},"MDL-43941")," - Activity show/hide toggle fixed in hidden and orphaned sections"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43306"},"MDL-43306")," - Backup no longer introduces duplicate gradeitem sortorders when restoring")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.5.5"},"Notes de mise \xe0 jour de Moodle 2.5.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.5.5"},"Notas de Moodle 2.5.5"))))}h.isMDXComponent=!0}}]);