"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[89154],{41289:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 2.0.2",tags:["Release notes","Moodle 2.0"],sidebar_position:2,moodleVersion:"2.0.2"},d=void 0,m={unversionedId:"releases/2.0/2.0.2",id:"releases/2.0/2.0.2",title:"Moodle 2.0.2",description:"Release date: 21st February 2011",source:"@site/general/releases/2.0/2.0.2.md",sourceDirName:"releases/2.0",slug:"/releases/2.0/2.0.2",permalink:"/devdocs/general/releases/2.0/2.0.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.0/2.0.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.0",permalink:"/devdocs/general/tags/moodle-2-0"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653898853,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.0.2",tags:["Release notes","Moodle 2.0"],sidebar_position:2,moodleVersion:"2.0.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.0.1",permalink:"/devdocs/general/releases/2.0/2.0.1"},next:{title:"Moodle 2.0.3",permalink:"/devdocs/general/releases/2.0/2.0.3"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Performance improvements",id:"performance-improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,o.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 21st February 2011"),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20617"},"MDL-20617")," - Options to show feedback, averages, range and other data in the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/User_report"},"user report")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26109"},"MDL-26109")," - All standard blocks have option to dock"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25616"},"MDL-25616")," - Recent messages and recent notifications interfaces")),(0,s.kt)("h2",{id:"performance-improvements"},"Performance improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17201"},"MDL-17201")," - Add index on user_info_data"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25669"},"MDL-25669")," - fix_course_sortorder() does way too many UPDATE queries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25837"},"MDL-25837")," - disasterous caching bug in course_overview block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22970"},"MDL-22970")," - Glossary import displays too many items in recent activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25677"},"MDL-25677")," - Differences between upgraded and installed sites detected in blocks subsystem"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-24125"},"MDL-24125")," - Add in-memory cache of admin_category child objects")),(0,s.kt)("h2",{id:"fixes"},"Fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25501"},"MDL-25501")," - Wikis with pages with the same title now upgrade from 1.9"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25932"},"MDL-25932")," - Upgrade fails for wikis with the same title"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25850"},"MDL-25850")," - Scorm score not checking for mod/scorm:viewscores"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25215"},"MDL-25215"),' - File extension lost when using "Save As" field'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26071"},"MDL-26071")," - Upgrade fails when adding fields to tag_instance table"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26236"},"MDL-26236")," - Random essay questions give error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25321"},"MDL-25321")," - sqlsrv_native's limit_to_top_n function destroys queries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25626"},"MDL-25626"),' - Error in "Course completion status" block'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25863"},"MDL-25863")," - Automated course backup function duplicates old versions when saved to non-default location"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26098"},"MDL-26098")," - Manual grading pop-up is confused between id and uniqueid"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25841"},"MDL-25841")," - Cloze question feedback appears in the wrong place"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26299"},"MDL-26299")," - Numerical questions units handling setting reverts to default upon editing")),(0,s.kt)("p",null,"And many more ... see the ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10421"},"full list of bug fixes and improvements in 2.0.2"),"."),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170003"},"MSA-11-0003")," Cross-site scripting vulnerability in tag autocomplete"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170004"},"MSA-11-0004")," $CFG->forceloginforprofiles setting ignored in course profiles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170005"},"MSA-11-0005")," Cross-site scripting vulnerability in spikephpcoverage"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170006"},"MSA-11-0006")," Cross-site request forgery and missing access control in course completion"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170008"},"MSA-11-0007")," Cross-site scripting vulnerability in course tags"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170009"},"MSA-11-0008")," IMS enterprise enrolment file may disclose sensitive information"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170010"},"MSA-11-0009")," My profile block may disclose private information if used in user context"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170011"},"MSA-11-0010")," Incorrect default for moodle/course:delete capability in teacher role"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=170012"},"MSA-11-0011")," Multiple cross-site scripting problems in media filter")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_2.0.2_Versionsinformationen"},"Moodle 2.0.2 Versionsinformationen")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.0.2"},"Notas de Moodle 2.0.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.0.2"},"Notes de mise \xe0 jour de Moodle 2.0.2"))))}k.isMDXComponent=!0}}]);