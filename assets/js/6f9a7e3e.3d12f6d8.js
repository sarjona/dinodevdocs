"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[72434],{17696:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.5.1",tags:["Release notes","Moodle 2.5"],sidebar_position:1,moodleVersion:"2.5.1"},d=void 0,p={unversionedId:"releases/2.5/2.5.1",id:"releases/2.5/2.5.1",title:"Moodle 2.5.1",description:"Release date: 8 July 2013",source:"@site/general/releases/2.5/2.5.1.md",sourceDirName:"releases/2.5",slug:"/releases/2.5/2.5.1",permalink:"/devdocs/general/releases/2.5/2.5.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.5/2.5.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.5",permalink:"/devdocs/general/tags/moodle-2-5"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1655188563,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 2.5.1",tags:["Release notes","Moodle 2.5"],sidebar_position:1,moodleVersion:"2.5.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.5",permalink:"/devdocs/general/releases/2.5"},next:{title:"Moodle 2.5.2",permalink:"/devdocs/general/releases/2.5/2.5.2"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 8 July 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.5.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.5.1"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39824"},"MDL-39824")," - Simplification of themes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38434"},"MDL-38434")," - Functional tests added for the Chat activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39723"},"MDL-39723")," - Two unnecessary course queries were removed from most pages")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39790"},"MDL-39790")," - My Latest badges block appears on the course page")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40137"},"MDL-40137")," - Correct naming of functions in theme/clean/lib.php")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("p",null,"A number of security related issues were resolved."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232496"},"MSA-13-0025")," XSS vulnerability in YUI library"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232497"},"MSA-13-0026")," Personal information leak in IMS-LTI"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232498"},"MSA-13-0027")," Access issue in Chat module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232500"},"MSA-13-0028")," Answer information revealed in Lesson activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232501"},"MSA-13-0029")," XSS risk in conditional activities"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232502"},"MSA-13-0030")," Information leak through RSS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=232503"},"MSA-13-0031")," Personal information leak in Feedback activity")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39778"},"MDL-39778")," - Course deletion now functions with badges."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40120"},"MDL-40120")," - Issue when recent PostgreSQL versions retrieve the number of records from course table fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39697"},"MDL-39697")," - Bootstrap layouts now have 'Maintenance' layout and related options."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40065"},"MDL-40065"),' - Bootstrap Theme only sends content to "side-pre" if necessary.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40088"},"MDL-40088")," - Can now edit course settings if course is in a hidden category."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39979"},"MDL-39979")," - Teachers no longer see errors when Show Activity Reports is set to yes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39363"},"MDL-39363")," - SCORM pass/fail status is set for a grade of 0."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39227"},"MDL-39227")," - SCORM navigation panel is no longer hidden when a Bootstrap theme is active."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39177"},"MDL-39177"),' - Overwriting files always observes the "alias" attribute.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33719"},"MDL-33719")," - When overwriting a copy of a file with an alias/shortcut of a file, the file thumbnail is refreshed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40142"},"MDL-40142")," - No JavaScript error is caused by the navigation block in relation to course categories."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40289"},"MDL-40289")," - Badges capabilities now have correct risks, levels and archetypes. ",(0,s.kt)("em",{parentName:"li"},"Note for sites which are upgrading from 2.5"),": See the section 'Upgrading from Moodle 2.5 to 2.5.1' in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/25/en/Upgrading"},"Upgrading")," for details of how to correctly set badge permissions for each role archetype.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.5.1"},"Notas de Moodle 2.5.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.5.1"},"Notes de mise \xe0 jour de Moodle 2.5.1"))))}c.isMDXComponent=!0}}]);