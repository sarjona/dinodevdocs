"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[31636],{41203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=r(87462),o=r(63366),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 2.8.2",tags:["Release notes","Moodle 2.8"],sidebar_position:2,moodleVersion:"2.8.2"},d=void 0,m={unversionedId:"releases/2.8/2.8.2",id:"releases/2.8/2.8.2",title:"Moodle 2.8.2",description:"Release date: 12 January, 2015",source:"@site/general/releases/2.8/2.8.2.md",sourceDirName:"releases/2.8",slug:"/releases/2.8/2.8.2",permalink:"/devdocs/general/releases/2.8/2.8.2",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8/2.8.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.8.2",tags:["Release notes","Moodle 2.8"],sidebar_position:2,moodleVersion:"2.8.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.8.1",permalink:"/devdocs/general/releases/2.8/2.8.1"},next:{title:"Moodle 2.8.3",permalink:"/devdocs/general/releases/2.8/2.8.3"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"UI changes",id:"ui-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 12 January, 2015"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.8.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40241"},"MDL-40241")," - Default Manager and Teacher role are able to manually mark course as completed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46442"},"MDL-46442")," - Notifications about assignment re-submissions are sent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43462"},"MDL-43462")," - EditPDF correctly shows landscape PDFs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43679"},"MDL-43679"),' - Clicking link to Moodle in MS Word no longer results "You are already logged in" message')),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42717"},"MDL-42717")," - Ensure automated backup files are deleted when an error occurs because of directory permissions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47601"},"MDL-47601")," - Ensure old automated backups are deleted including the case when file name is renamed from language string"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48023"},"MDL-48023"),' - Changed "Cache-control: private" to "public" on public static files to increase performance'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48224"},"MDL-48224")," - In the Task API, each adhoc and scheduled task now has it's own SMTP buffer, and the legacy cron has one buffer for all tasks. Previously scheduled tasks had no buffer, and the legacy cron had a buffer only for tasks of activity modules."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33606"},"MDL-33606")," - Make distinction between all section course view and a single section course view log entry")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44657"},"MDL-44657")," - No more Javascript error when the form class is namespaced"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22309"},"MDL-22309")," - get_role_users() works correctly when a user is assigned more than one role"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48697"},"MDL-48697")," - Completion directory is recognized by Moodle as a valid component directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48495"},"MDL-48495")," - Limit protocols supported by curl by default")),(0,s.kt)("h2",{id:"ui-changes"},"UI changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35078"},"MDL-35078")," - End date for self enrolment on the bulk enrolment form now also contains time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42501"},"MDL-42501")," - Added help about deleting grades in the course reset form"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48206"},"MDL-48206")," - Wider textarea for the comments in the comments block")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278611"},"MSA-15-0001")," Insufficient access check in LTI module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278612"},"MSA-15-0002")," XSS vulnerability in course request pending approval page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278613"},"MSA-15-0003")," CSRF possible in Glossary module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278614"},"MSA-15-0004")," Information leak through messaging functions in web-services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278615"},"MSA-15-0005")," Insufficient access check in calendar functions in web-services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278616"},"MSA-15-0006")," Capability to grade Lesson module is missing XSS bitmask"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278617"},"MSA-15-0007")," ReDoS possible in the multimedia filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=278618"},"MSA-15-0008")," Forced logout through Shibboleth authentication plugin")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40097"},"MDL-40097")," - Course completion role criteria no longer causes fatal error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35494"},"MDL-35494")," - User is able to restore an activity even when they own only one course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20304"},"MDL-20304")," - Practice lesson does not appear in Gradebook (Patch)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45324"},"MDL-45324")," - Grading notifications are not sent before the grades are released to students"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47133"},"MDL-47133")," - Keyboard shortcuts in Atto do not interfere with regional keyboard settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37704"},"MDL-37704")," - Possible to lock Description field in users' profiles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36240"},"MDL-36240")," - Calendar events from activities are restored even without user data"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14908"},"MDL-14908")," - Parent Role can view courses for students that are in groups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46472"},"MDL-46472")," - Fixed upgrade loop caused by undeletable themes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31822"},"MDL-31822")," - Non-default section name is shown at the site level"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47475"},"MDL-47475")," - PDF annotation is visible by all students in the team and not only by the one who made a submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47993"},"MDL-47993"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48088"},"MDL-48088")," - Correctly parse dates with timezones when importing from Microsoft calendar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48150"},"MDL-48150")," - Fixed a bug whereby only the first post in a forum was sent with the correct headers on each run of cron"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48288"},"MDL-48288"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48191"},"MDL-48191")," - Grader report's floating headers work correctly when email or average row is hidden"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48179"},"MDL-48179")," - Backup progress no longer times out when compressing large backup"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48164"},"MDL-48164")," - 'Reply to email' does not result in out-of-office replies posted in forum")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8.2"},"Notes de mise \xe0 jour de Moodle 2.8.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8.2"},"Notas de Moodle 2.8.2"))))}h.isMDXComponent=!0}}]);