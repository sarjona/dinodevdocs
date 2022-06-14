"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99472],{79979:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),s=r(13904),n=["components"],i={title:"Moodle 3.7",tags:["Release notes","Moodle 3.7"],sidebar_position:-307,moodleVersion:"3.7"},m=void 0,p={unversionedId:"releases/3.7",id:"releases/3.7",title:"Moodle 3.7",description:"Release date: 20 May 2019",source:"@site/general/releases/3.7.md",sourceDirName:"releases",slug:"/releases/3.7",permalink:"/devdocs/general/releases/3.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.7",permalink:"/devdocs/general/tags/moodle-3-7"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1655203822,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:-307,frontMatter:{title:"Moodle 3.7",tags:["Release notes","Moodle 3.7"],sidebar_position:-307,moodleVersion:"3.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.8.9",permalink:"/devdocs/general/releases/3.8/3.8.9"},next:{title:"Moodle 3.7.1",permalink:"/devdocs/general/releases/3.7/3.7.1"}},d={},k=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Forum",id:"forum",level:3},{value:"Messaging",id:"messaging",level:3},{value:"Themes",id:"themes",level:3},{value:"LTI",id:"lti",level:3},{value:"Open Badges",id:"open-badges",level:3},{value:"Dashboard and Course Overview",id:"dashboard-and-course-overview",level:3},{value:"Learning Analytics",id:"learning-analytics",level:3},{value:"Usability improvements",id:"usability-improvements",level:3},{value:"Other Highlights",id:"other-highlights",level:2},{value:"Functional changes",id:"functional-changes",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"For developers",id:"for-developers",level:2},{value:"New web services",id:"new-web-services",level:3},{value:"Translations",id:"translations",level:2}],u={toc:k};function h(e){var t=e.components,r=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 20 May 2019"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.7"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/37/en/New_features"},"New features page")," in the user documentation for an introduction to Moodle 3.7 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from a previous version, please see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Upgrading"},"Upgrading")," in the user docs."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 3.2 or later"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 7.1.0 ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.6"),". PHP 7.2.x and 7.3.x are supported too. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP"},"Moodle and PHP")," for details."),(0,l.kt)("li",{parentName:"ul"},"PHP extension ",(0,l.kt)("strong",{parentName:"li"},"intl")," is required since Moodle 3.4 (it was recommended in 2.0 onwards)")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.4"),(0,l.kt)("td",{parentName:"tr",align:null},"11.x then 12.x in Moodle 3.7.5 onwards")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.6"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"11.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://whatbrowser.org"},"https://whatbrowser.org")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.7:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"forum"},"Forum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22077"},"MDL-22077")," - Private reply option"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65033"},"MDL-65033")," - Ability to star discussions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64956"},"MDL-64956")," - In-page forum post reply"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65032"},"MDL-65032")," - Ability to lock discussions manually"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65069"},"MDL-65069")," - Ability to create discussions without changing page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64820"},"MDL-64820")," - Forum display updated to use templates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65071"},"MDL-65071")," - List of discussions is sortable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65034"},"MDL-65034")," - Accessibility improvements to forum discussions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65394"},"MDL-65394")," - Forum rendering speed improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46881"},"MDL-46881")," - Forum scheduled task (cron) has been refactored into several smaller cron tasks")),(0,l.kt)("h3",{id:"messaging"},"Messaging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65015"},"MDL-65015"),' - HTML in messages is cleaned according to site/role "trusttext" configuration'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64715"},"MDL-64715")," - Personal space in messaging drawer for draft messages etc."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64495"},"MDL-64495")," - New settings page for messaging-related settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63620"},"MDL-63620")," - Group conversations can be created from both the auto-create groups edit page and the import groups tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63915"},"MDL-63915")," - Old messaging user interface removed and replaced with a new widget"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64773"},"MDL-64773")," - Messaging conversations can be muted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65132"},"MDL-65132")," - New capability for deleting messages for all users within group conversations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64017"},"MDL-64017")," - Message processors can identify and handle group messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64703"},"MDL-64703")," - Updated interface on the messaging index page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64137"},"MDL-64137")," - Searches highlight text that matches the search term"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65114"},"MDL-65114")," - Timestamps in the main conversation list include days and years"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64093"},"MDL-64093")," - New admin setting to set the site default for using enter key to send messages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60680"},"MDL-60680")," - Improved push notifications")),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58428"},"MDL-58428")," - All Boost templates moved to core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64505"},"MDL-64505")," - Classic theme introduced to core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64506"},"MDL-64506")," - Bootstrapbase and related themes (Clean/More) removed from core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65449"},"MDL-65449")," - Themes can override the course pattern used on the dashboard")),(0,l.kt)("h3",{id:"lti"},"LTI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62599"},"MDL-62599")," - LTI 1.3 support introduced")),(0,l.kt)("h3",{id:"open-badges"},"Open Badges"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63262"},"MDL-63262")," - Support added for Open Badges 2.0 platforms"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63876"},"MDL-63876")," - Moodle competencies can be linked to criteria for badges in Open Badges 2.0")),(0,l.kt)("h3",{id:"dashboard-and-course-overview"},"Dashboard and Course Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63794"},"MDL-63794")," - Course categories can be displayed on courses in the course overview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64855"},"MDL-64855")," - New admin setting to control the output of the course category in the myoverview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64376"},"MDL-64376")," - Scrolling improved in the recently accessed courses block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64903"},"MDL-64903")," - Course filters are logically grouped in the myoverview block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64898"},"MDL-64898")," - The completion progress bar is no longer displayed for teachers in the myoverview block")),(0,l.kt)("h3",{id:"learning-analytics"},"Learning Analytics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61667"},"MDL-61667")," - Improvements to the install/uninstall procedure the Analytics API offers to plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64783"},"MDL-64783"),' - New "upcoming activities due" model added'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65582"},"MDL-65582"),' - The "upcoming activities due" model is enabled by default'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64786"},"MDL-64786")," - Users can overwrite default model names"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64693"},"MDL-64693")," - New target added for course competencies achievement"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64636"},"MDL-64636")," - New target added for course completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65176"},"MDL-65176")," - New target added for students at risk of not getting the minimum grade to pass a course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64954"},"MDL-64954"),' - A "More info" link provides more information about different core analytics elements'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64777"},"MDL-64777")," - Default models can be restored"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64787"},"MDL-64787")," - Analytics models can be evaluated using a trained machine learning backend"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60944"},"MDL-60944")," - Models can be created, deleted, imported and exported"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64779"},"MDL-64779")," - Ability to choose whether to include trained model weights in an export"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65175"},"MDL-65175")," - When evaluating a model, the time-splitting method can be set using the web interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65177"},"MDL-65177"),' - It is possible to set the frequency of insight generation for models based on assumptions (e.g. the "upcoming activities due" model)'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60936"},"MDL-60936"),' - "Enabled time-splitting methods" analytics setting converted to a list of default time-splitting methods for a model\'s evaluation')),(0,l.kt)("h3",{id:"usability-improvements"},"Usability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-5311"},"MDL-5311")," - Choices can be cleared for single-answer multiple-choice questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43385"},"MDL-43385")," - Print output of books has been improved"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28505"},"MDL-28505")," - Course backup and restore can be performed asynchronously"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61537"},"MDL-61537")," - Ability to rotate pages when annotating PDFs in assignment feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63773"},"MDL-63773")," - Assignment settings form hides irrelevant options instead of disabling them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64552"},"MDL-64552")," - Moodle forms inside the admin top level directory hide irrelevant options instead of disabling them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64557"},"MDL-64557")," - Moodle forms inside the course directory hide irrelevant options instead of disabling them"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60474"},"MDL-60474")," - The student selection tool in the grading interface reflects the sorting order of the grading table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39261"},"MDL-39261")," - File support added to lesson essay questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60913"},"MDL-60913")," - Global search results can be split into tabs by category"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50793"},"MDL-50793")," - Teachers can see hidden pages in book activities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60059"},"MDL-60059")," - Workshop activity action events support drag and drop in the calendar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62142"},"MDL-62142")," - Accessibility improvements for Boost course landing page")),(0,l.kt)("h2",{id:"other-highlights"},"Other Highlights"),(0,l.kt)("h3",{id:"functional-changes"},"Functional changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31355"},"MDL-31355")," - Forum due dates are added to the calendar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36088"},"MDL-36088")," - Adding/modifying questions to/in the question bank is logged"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49673"},"MDL-49673")," - Assignment has an option to not display the grader to students"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31852"},"MDL-31852"),' - HTML tags allowed in the title of Lesson "content pages"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64377"},"MDL-64377")," - Ability to delete assignment file submissions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64243"},"MDL-64243"),' - Nextcloud serves "offline" files consistent with other integrations (e.g. OneDrive and Google Docs)'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53346"},"MDL-53346")," - User competencies in courses show the linked learning plans"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62223"},"MDL-62223")," - Improved submission statements for assignments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52828"},"MDL-52828")," - Competencies can be graded when grading an activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65154"},"MDL-65154")," - Course competencies page shows students which competencies are linked to an activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64414"},"MDL-64414"),' - "AND" and "OR" are available in if-conditions for grade calculations')),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-10965"},"MDL-10965")," - There is a new capability moodle/category:viewcourselist for controlling who can view the list of non-hidden courses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57898"},"MDL-57898")," - New custom field types plugin and course custom fields functionality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49399"},"MDL-49399")," - Output can be captured during cron and task runs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62869"},"MDL-62869")," - Global search can be configured to include all visible courses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64322"},"MDL-64322")," - New data privacy capability to restrict submission of deletion requests for other users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63569"},"MDL-63569")," - A constant can be added to the subject of all emails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62907"},"MDL-62907")," - The standard log table 'other' field can be set to store in JSON format"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64281"},"MDL-64281")," - Frame embedding is always allowed for requests coming from the Moodle app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61164"},"MDL-61164")," - Tasks using legacy cron functionality moved to scheduled tasks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57900"},"MDL-57900")," - Added fields to provide site metadata to support learning analytics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63623"},"MDL-63623")," - Plugins can be uninstalled via command line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64323"},"MDL-64323")," - Additional fields are included in user searches when making new data requests on behalf of a user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64347"},"MDL-64347")," - Improved processing of scheduled and ad-hoc tasks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65142"},"MDL-65142")," - Tables can be downloaded in PDF format (new dataformat)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64314"},"MDL-64314")," - Insights notification enable web notifications by default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65138"},"MDL-65138")," - Course sharing to Moodle.net is disabled by default (configured via a new setting)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64454"},"MDL-64454")," - Site administration page warns if cron does not run frequently"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62728"},"MDL-62728")," - The language packs page displays a warning when locales are not fully supported"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64071"},"MDL-64071")," - Improved diagnostics when testing LDAP settings"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64823"},"MDL-64823")," - Disabling mobile plugins works as expected"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44484"},"MDL-44484")," - Theme field available in the bulk upload users tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64477"},"MDL-64477")," - Learning analytics usage data is included with site usage data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64337"},"MDL-64337")," - Mobile app enabled sites prompt users that do not use the app to download it in notification emails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64339"},"MDL-64339")," - User names provided in the comments report are hyperlinked to the user's profile")),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54592"},"MDL-54592")," - MongoDB cache store upgraded to use PHP 7 compatible library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63977"},"MDL-63977")," - Behat testing available for mobile app features and plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63986"},"MDL-63986")," - Behat testing added for the messaging drawer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64449"},"MDL-64449")," - New debug feature to expose code issues with session locks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52167"},"MDL-52167")," - Core functionality added to enable site administration settings to be hidden if dependent on another disabled setting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63366"},"MDL-63366")," - Ability to specify filters for unit testing coverage"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65130"},"MDL-65130")," - Improved unit testing coverage generation by only respecting the @covers annotation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60470"},"MDL-60470"),' - New "after_require_login" hook introduced'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65204"},"MDL-65204")," - Phpunit upgraded to version 7.5.x"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64348"},"MDL-64348")," - Improved AJAX template fetching"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59986"},"MDL-59986")," - External database enrolment sync moved to a scheduled task"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63880"},"MDL-63880")," - Some templates common in dashboard blocks have been moved to increase reusability"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64587"},"MDL-64587")," - New option in the XMLDB editor to add the mandatory persistent fields"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64324"},"MDL-64324")," - ID collisions are avoided when forms are loaded from AJAX"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64684"},"MDL-64684")," - When JavaScript caching is disabled, jQuery and RequireJS are no longer minified")),(0,l.kt)("h3",{id:"new-web-services"},"New web services"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64252"},"MDL-64252")," - New SCORM web service to return user capabilities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64656"},"MDL-64656")," - New web service to return the tag associated with an element"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64655"},"MDL-64655")," - New forum web service to return user access information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64642"},"MDL-64642")," - New web service to call multiple external functions")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.7"},"Notes de mise \xe0 jour de Moodle 3.7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.7"},"Notas de Moodle 3.7"))))}h.isMDXComponent=!0}}]);