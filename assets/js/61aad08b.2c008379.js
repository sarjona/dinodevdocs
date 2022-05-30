"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[70667],{51795:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.9.1",tags:["Release notes","Moodle 3.9"],sidebar_position:1,moodleVersion:"3.9.1"},d=void 0,m={unversionedId:"releases/3.9/3.9.1",id:"releases/3.9/3.9.1",title:"Moodle 3.9.1",description:"Release date: 13 July 2020",source:"@site/general/releases/3.9/3.9.1.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.1",permalink:"/devdocs/general/releases/3.9/3.9.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653898853,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:1,frontMatter:{title:"Moodle 3.9.1",tags:["Release notes","Moodle 3.9"],sidebar_position:1,moodleVersion:"3.9.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9",permalink:"/devdocs/general/releases/3.9"},next:{title:"Moodle 3.9.2",permalink:"/devdocs/general/releases/3.9/3.9.2"}},p={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 13 July 2020"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.1"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60827"},"MDL-60827"),' - OAuth 2 still expecting email verification after "Require email verification" has been disabled'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68436"},"MDL-68436")," - Atto RecordRTC (record audio/video) plugin only works in the first editor on a page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69049"},"MDL-69049")," - Moodle 3.9 upgrade fails due to missing column in privacy plugins if standalone GDPR plugins were used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69106"},"MDL-69106")," - convert_submissions task with asynchronous document conversion cannot be completed by cron"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69109"},"MDL-69109")," - Theme icons are lost after web upgrade in 3.9 or theme change in other versions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68992"},"MDL-68992")," - Update minimal age of digital consent according to current legislation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68215"},"MDL-68215")," - Make the Activity results block styling consistent with other blocks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69110"},"MDL-69110")," - Sorting does not work anymore in non-dynamic tables"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66899"},"MDL-66899")," - Regrading quiz attempts should be logged"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69077"},"MDL-69077"),' - The capabilities moodle/question:tag* are not visible in the "Check permissions" page in the activity context'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69021"},"MDL-69021")," - Alert links hard to distinguish"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69099"},"MDL-69099"),' - Some scheduled tasks are incorrectly labelled as "Disabled"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67294"},"MDL-67294")," - Choosing bulk removal of empty submissions causes an error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69031"},"MDL-69031")," - Missing Moodle app disable features settings for 3.9")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69008"},"MDL-69008")," - Accessibility issues in the pagination bar template")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69047"},"MDL-69047")," - Content bank status message should be hard coded")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407392"},"MSA-20-0008")," Reflected XSS in admin task logs filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407393"},"MSA-20-0009")," Course enrolments allowed privilege escalation from teacher role into manager role"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407394"},"MSA-20-0010")," yui_combo should mitigate denial of service risk")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.1"},"Notes de mise \xe0 jour de Moodle 3.9.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.1"},"Notas de Moodle 3.9.1"))))}k.isMDXComponent=!0}}]);