"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[72247],{86832:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),i=["components"],l={title:"Moodle 2.9.1",tags:["Release notes","Moodle 2.9"],sidebar_position:1,moodleVersion:"2.9.1"},d=void 0,p={unversionedId:"releases/2.9/2.9.1",id:"releases/2.9/2.9.1",title:"Moodle 2.9.1",description:"Release date: 6 July 2015",source:"@site/general/releases/2.9/2.9.1.md",sourceDirName:"releases/2.9",slug:"/releases/2.9/2.9.1",permalink:"/devdocs/general/releases/2.9/2.9.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.9/2.9.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.9",permalink:"/devdocs/general/tags/moodle-2-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655203822,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 2.9.1",tags:["Release notes","Moodle 2.9"],sidebar_position:1,moodleVersion:"2.9.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.9",permalink:"/devdocs/general/releases/2.9"},next:{title:"Moodle 2.9.2",permalink:"/devdocs/general/releases/2.9/2.9.2"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 6 July 2015"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.9.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.9.1"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("p",null,"A lot of work has been done in dealing with unexpected grade changes in the gradebook which some users have experienced when upgrading from Moodle 2.7 to 2.8 or 2.9. See the user documentation ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/29/en/Grades_min_max"},"Grades min max")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/29/en/Gradebook_calculation_changes"},"Gradebook calculation changes")," for details."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48618"},"MDL-48618")," - Dealing with unexpected changes to grades after upgrading to Moodle 2.8"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49257"},"MDL-49257")," - Adjusting weights when extra credit item is present causes unexpected behaviour"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48239"},"MDL-48239")," - Changing the maximum grade of items with calculation to the value different from 100")),(0,s.kt)("p",null,"Another release highlight is the introduction of the authorised access to the YouTube repository. After upgrading you will need to enter an API key from YouTube into your site's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Youtube_videos_repository"},"YouTube repository settings"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50176"},"MDL-50176")," - Authenticated access to the YouTube repository")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50089"},"MDL-50089")," - Gradebook export now respects aggregate only non-empty grades for percentage and letter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48467"},"MDL-48467")," - Atto: Clean the html even if submitting the form when Atto is in html view mode")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49022"},"MDL-49022")," - sync_users must trigger event core\\event\\user_updated")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=316662"},"MSA-15-0026")," Possible phishing when redirecting to external site using referer header"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=316663"},"MSA-15-0027")," Capability 'mod/forum:canposttomygroups' is not respected when using 'Post a copy to all groups' in forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=316664"},"MSA-15-0028")," Possible XSS through custom text profile fields in Web Services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=316665"},"MSA-15-0029")," Javascript injection in SCORM module")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50177"},"MDL-50177")," - Upgrading assignments in 2.7/2.8 works even when conditional access is used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39353"},"MDL-39353")," - Connection to a hub from behind a proxy server"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49742"},"MDL-49742")," - Enrolled users page no longer displays sorting by fields that are not used in user identity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47787"},"MDL-47787")," - After deleting a quiz, its question categories and questions remain in the database"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49764"},"MDL-49764")," - Fixed gradebook UI inconsistencies in Internet Explorer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49885"},"MDL-49885")," - The course overview block can now be added to Dashboard"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50675"},"MDL-50675")," - Display Wikimedia repository thumbnails (caused by the change in Wikimedia API)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50091"},"MDL-50091")," - Fixed fatal error in gradebook singleview after a module has been uninstalled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48664"},"MDL-48664")," - Messaging contacts paging bar no longer expands and overlaps other text"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50092"},"MDL-50092")," - User unenrollment is now working with IMS Enterprise"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49560"},"MDL-49560")," - SOAP web service now works with token"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50004"},"MDL-50004")," - Fix coursename and enrolment icons in category combo on Frontpage"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50646"},"MDL-50646")," - Site default language should be set as the language for new users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50394"},"MDL-50394")," - Grade to pass no longer throws an error when a decimal point separator is used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50276"},"MDL-50276")," - Added missing new line separator in plain text e-mails from the forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49061"},"MDL-49061")," - The activity completion report in a course correctly shortens headers when multi language filter is used"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50275"},"MDL-50275")," - Added missing version bump after risk bitmap change in ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49941"},"MDL-49941")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50380"},"MDL-50380")," - Fixed missing parameter error when editing files in wiki")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.9.1"},"Notes de mise \xe0 jour de Moodle 2.9.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.9.1"},"Notas de Moodle 2.9.1"))))}c.isMDXComponent=!0}}]);