"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[34114],{76678:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=a(87462),o=a(63366),l=(a(67294),a(3905)),n=a(13904),i=["components"],s={title:"Moodle 2.8",tags:["Release notes","Moodle 2.8"],sidebar_position:-208,moodleVersion:"2.8"},d=void 0,m={unversionedId:"releases/2.8",id:"releases/2.8",title:"Moodle 2.8",description:"Release date: 10 November, 2014",source:"@site/general/releases/2.8.md",sourceDirName:"releases",slug:"/releases/2.8",permalink:"/devdocs/general/releases/2.8",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.8.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.8",permalink:"/devdocs/general/tags/moodle-2-8"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:-208,frontMatter:{title:"Moodle 2.8",tags:["Release notes","Moodle 2.8"],sidebar_position:-208,moodleVersion:"2.8"},sidebar:"releaseNotes",previous:{title:"Moodle 2.9.9",permalink:"/devdocs/general/releases/2.9/2.9.9"},next:{title:"Moodle 2.8.1",permalink:"/devdocs/general/releases/2.8/2.8.1"}},p={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major Features",id:"major-features",level:2},{value:"Gradebook",id:"gradebook",level:3},{value:"New Grader report (the main interface showing all grades):",id:"new-grader-report-the-main-interface-showing-all-grades",level:4},{value:"New Natural weighting aggregation method",id:"new-natural-weighting-aggregation-method",level:4},{value:"New Grade history report",id:"new-grade-history-report",level:4},{value:"Improved Grader setup page (for defining items and categories)",id:"improved-grader-setup-page-for-defining-items-and-categories",level:4},{value:"Improved User report",id:"improved-user-report",level:4},{value:"Improved Grade import/export",id:"improved-grade-importexport",level:4},{value:"Forum",id:"forum",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Choice",id:"choice",level:3},{value:"External tool",id:"external-tool",level:3},{value:"Quiz",id:"quiz",level:3},{value:"New quiz-building page",id:"new-quiz-building-page",level:4},{value:"Other",id:"other",level:4},{value:"Lesson",id:"lesson",level:3},{value:"Workshop",id:"workshop",level:3},{value:"Analytics",id:"analytics",level:3},{value:"Usability",id:"usability",level:3},{value:"Cohorts",id:"cohorts",level:3},{value:"Other things",id:"other-things",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"For Developers",id:"for-developers",level:2},{value:"API changes",id:"api-changes",level:3},{value:"Upgrade notes for developers",id:"upgrade-notes-for-developers",level:3},{value:"Development numbers",id:"development-numbers",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,d=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,r.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 10 November, 2014"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.8%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.8"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/28/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 2.8 with screenshots."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.2 or later (if upgrading from earlier versions, you must upgrade to 2.2.11 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.4.4 (always use latest PHP 5.4.x or 5.5.x on Windows - ",(0,l.kt)("a",{parentName:"li",href:"http://windows.php.net/download/"},"http://windows.php.net/download/"),"), PHP 7 is NOT supported"),(0,l.kt)("li",{parentName:"ul"},"Ghostscript should be installed for pdf annotation.")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Browser"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended version"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.google.com/intl/en_au/chrome/browser/"},"Google Chrome")),(0,l.kt)("td",{parentName:"tr",align:null},"30.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mozilla.org/en-US/"},"Mozilla Firefox")),(0,l.kt)("td",{parentName:"tr",align:null},"25.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.apple.com/safari/"},"Apple Safari")),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie"},"Microsoft Internet Explorer")),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null},"Version 10 is required for drag-and-drop upload of content from outside the browser into Moodle")))),(0,l.kt)("h2",{id:"major-features"},"Major Features"),(0,l.kt)("h3",{id:"gradebook"},"Gradebook"),(0,l.kt)("p",null,"Our main focus has been on the Gradebook, with improved UI based on community workshops, surveys and bug reports."),(0,l.kt)("h4",{id:"new-grader-report-the-main-interface-showing-all-grades"},"New Grader report (the main interface showing all grades):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Uses the whole window"),(0,l.kt)("li",{parentName:"ul"},"Smooth, stable scrolling in all directions"),(0,l.kt)("li",{parentName:"ul"},"Works on all platforms, including phones and tablets"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18229"},"MDL-18229")," - A new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Single_view"},"Single view")," mode allows editing of any row or column on its own"),(0,l.kt)("li",{parentName:"ul"},"Allows quick editing of any cell without reloading.")),(0,l.kt)("h4",{id:"new-natural-weighting-aggregation-method"},"New Natural weighting aggregation method"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43378"},"MDL-43378")," - Combines grades simply"),(0,l.kt)("li",{parentName:"ul"},"Clearer interface for using weights"),(0,l.kt)("li",{parentName:"ul"},"Supports extra credit, excluded grades, hidden grades"),(0,l.kt)("li",{parentName:"ul"},"Can remove the need to use any other aggregations")),(0,l.kt)("h4",{id:"new-grade-history-report"},"New Grade history report"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46191"},"MDL-46191")," - A ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Grade_history"},"grade history report")," lists full details of all grade changes")),(0,l.kt)("h4",{id:"improved-grader-setup-page-for-defining-items-and-categories"},"Improved Grader setup page (for defining items and categories)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New design"),(0,l.kt)("li",{parentName:"ul"},"Easier terminology and clearer layout"),(0,l.kt)("li",{parentName:"ul"},"Bugs fixed relating to how grades are added in some scenarios"),(0,l.kt)("li",{parentName:"ul"},"Prevents loss of data when you leave the window"),(0,l.kt)("li",{parentName:"ul"},"Note! there are new admin settings that hide parts of the user interface. For example calculated grades are disabled by default (even if you were using them in Moodle 2.7 before you upgraded). If you use 'advanced' gradebook features, then after you upgrade, go to Site administration > Grades > Report settings > Grader report and check that the settings like Show calculations match your needs. (These settings affect the whole gradebook, not just the Grader report.)")),(0,l.kt)("h4",{id:"improved-user-report"},"Improved User report"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New design"),(0,l.kt)("li",{parentName:"ul"},"Clearer calculations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47064"},"MDL-47064")," - Contributions column explains grade calculations")),(0,l.kt)("h4",{id:"improved-grade-importexport"},"Improved Grade import/export"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improved interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46547"},"MDL-46547")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Grade_import"},"Copy/paste import direct from spreadsheet programs")),(0,l.kt)("li",{parentName:"ul"},"Robust handling of null data or bad data"),(0,l.kt)("li",{parentName:"ul"},"Locked grade items are now protected from imports"),(0,l.kt)("li",{parentName:"ul"},"Export to multiple display types (Letter, Percentage\u2026)")),(0,l.kt)("h3",{id:"forum"},"Forum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-1626"},"MDL-1626")," - You can subscribe to get email copies of individual discussions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-3714"},"MDL-3714")," - You can now reply to forum posts received by email, and even include attachments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-8501"},"MDL-8501")," - You can jump to the next and previous discussions easily"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36929"},"MDL-36929")," - New discussions are displayed in full recent activity report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41708"},"MDL-41708")," - Attachments are displayed in the same order as they were uploaded")),(0,l.kt)("h3",{id:"assignment"},"Assignment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39929"},"MDL-39929")," - Option of adding additional files for use in the assignment, such as answer templates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45965"},"MDL-45965")," - New capability that allows to control which grader receives notifications")),(0,l.kt)("h3",{id:"choice"},"Choice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-3034"},"MDL-3034")," - More than one choice can now be made")),(0,l.kt)("h3",{id:"external-tool"},"External tool"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45843"},"MDL-45843")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/LTI_2_support"},"LTI 2.0 support")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44902"},"MDL-44902")," - Various additions and bug fixes for the external tool")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("h4",{id:"new-quiz-building-page"},"New quiz-building page"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43089"},"MDL-43089")," - The page where you assemble your questions to make a quiz has been completely re-build to make it much easier an more efficient to use. For example you can now drag-and drop questions to re-order them or move them between pages.")),(0,l.kt)("h4",{id:"other"},"Other"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37993"},"MDL-37993")," - New completion options: Can apply when a passing grade achieved or all attempts are used"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47556"},"MDL-47556")," - For new installations, the auto-save setting defaults to on. If you are upgrading an existing installation, you may wish to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Quiz_settings#Site_administration_settings"},"turn this setting on"),".")),(0,l.kt)("h3",{id:"lesson"},"Lesson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38106"},"MDL-38106")," - Now includes Introduction like other modules"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38560"},"MDL-38560")," - Better handling of images in questions")),(0,l.kt)("h3",{id:"workshop"},"Workshop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31936"},"MDL-31936")," - Workshop submissions and/or assessments can be removed during the course reset")),(0,l.kt)("h3",{id:"analytics"},"Analytics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Event_monitoring"},"Event monitor"),": can look for patterns of events and send you notifications"),(0,l.kt)("li",{parentName:"ul"},"More detailed logging and events have been added, especially around grades")),(0,l.kt)("h3",{id:"usability"},"Usability"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45893"},"MDL-45893")," - New user menu in Clean theme: shows your profile on-screen in the header and allows quick access to personal pages."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47559"},"MDL-47559")," - New user menu can be customised by the admin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18014"},"MDL-18014")," - The Atto editor can now automatically save drafts of your texts so you don't lose anything if any unexpected disasters occur"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45897"},"MDL-45897")," - Improved My Home page: better default blocks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45884"},"MDL-45884")," - My Courses are collapsed by default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46022"},"MDL-46022")," - Possible to create dividers in custom menu")),(0,l.kt)("h3",{id:"cohorts"},"Cohorts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36014"},"MDL-36014")," - Teachers are now able to use enrol_cohort without having additional capabilities to view cohorts outside of the course. At the same time managers can define individual cohorts as not visible to prevent using them by teachers in enrolment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35618"},"MDL-35618")," - Teachers can manually enrol all cohort members without having capability to use cohort synchronisation enrolment method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41639"},"MDL-41639"),' - Cohort that do not yet exist will be created if specified in "Upload users" tool'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35468"},"MDL-35468")," - Admin or manager can bulk upload cohorts definitions from CSV file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34189"},"MDL-34189")," - Admin or system-wide manager can view all cohorts in the system on the same page even if they are defined in different contexts")),(0,l.kt)("h3",{id:"other-things"},"Other things"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16474"},"MDL-16474"),' - Single-item scales: now you can implement "Like" buttons with no downside!'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47197"},"MDL-47197")," - Users can add files to their ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Private_files"},"private files area")," by emailing them as attachments"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37812"},"MDL-37812")," - Admin can set defaults for user preferences such as Email display, Forum tracking, etc. They are also displayed now in a separate field-set on edit user profile page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44725"},"MDL-44725")," - The experimental setting 'Group members only' has been removed, with the group and grouping restrictions in conditional activities now providing this functionality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46481"},"MDL-46481")," - New faster backup method that just uses defaults"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42071"},"MDL-42071")," - Added support for split memcache/memcached stores"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46210"},"MDL-46210")," - Installed ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Language_packs"},"language packs")," can be updated as a scheduled task"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46921"},"MDL-46921")," - Sorting by ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Additional_name_fields"},"additional name fields")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40356"},"MDL-40356")," - A new setting 'Alternative full name format' relating to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Additional_name_fields"},"additional name fields")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20367"},"MDL-20367")," - Decimal numbers may be used to define boundaries for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/28/en/Grade_letters"},"grade letters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43472"},"MDL-43472")," - It is possible for manager to move courses on the Search courses result screen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40351"},"MDL-40351")," - Course categories can be displayed for courses on My home page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46450"},"MDL-46450")," - Activity names in the availability description now have links"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45991"},"MDL-45991")," - Ability to ignore users that are already in groups when auto-creating groups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46524"},"MDL-46524")," - Auto-create groups from existing group or grouping membership"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42609"},"MDL-42609")," - Added button to quickly add a course in course management interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45985"},"MDL-45985")," - New CLI tool to validate database structure admin/cli/check_database_schema.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32450"},"MDL-32450")," - DragMath is no longer distributed in Moodle")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275146"},"MSA-14-0035")," Headers not added to some AJAX scripts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275147"},"MSA-14-0036")," XSS in mapcourse script in Feedback module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275152"},"MSA-14-0037")," Weak temporary password generation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275153"},"MSA-14-0038")," Hidden grade information exposed by web services"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275154"},"MSA-14-0039")," Insufficient access check in LTI module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275155"},"MSA-14-0040")," Information leak in Database activity module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275157"},"MSA-14-0041")," Lack of capability check in tags list access"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275158"},"MSA-14-0042")," Lack of access check in IP lookup functionality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275159"},"MSA-14-0043")," Lack of group check in web service for Forum"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275160"},"MSA-14-0044")," Hardware path disclosed in the error message"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275161"},"MSA-14-0045")," XSS file upload possible through web service"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275162"},"MSA-14-0046")," CSRF in LTI module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275163"},"MSA-14-0047")," Possible data loss in Wiki activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275164"},"MSA-14-0048")," CSRF in forum tracking toggle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275165"},"MSA-14-0049")," Possible to print arbitrary message to user by modifying URL")),(0,l.kt)("h2",{id:"for-developers"},"For Developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47194"},"MDL-47194")," - Inbound email (such as already implemented for forums and files) can now easily be implemented by any plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43835"},"MDL-43835")," - Unit tests on posgres and mysql use random sequence values"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46585"},"MDL-46585")," - ",(0,l.kt)("a",{parentName:"li",href:"/general/projects/api/string-deprecation#how-to-deprecate-a-string-"},"Strings can now be deprecated")," to help translators"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39840"},"MDL-39840")," - Plugins can have their personal environment checks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41663"},"MDL-41663")," - Plugins renderers and renderables can be located in namespaces and autoloaded"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46207"},"MDL-46207")," - Scheduled tasks can control if they should run when plugin is disabled"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45513"},"MDL-45513")," - Unit tests can be executed against custom cache stores")),(0,l.kt)("h3",{id:"api-changes"},"API changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are new convenience functions to obtain ",(0,l.kt)("tt",null,"$cm")," objects that belong to the ",(0,l.kt)("tt",null,"cm_info")," class. ",(0,l.kt)("tt",null,"get_course_and_cm_from_cmid($cmorid, $modulename)")," and ",(0,l.kt)("tt",null,"get_course_and_cm_from_instance($instanceorid, $modulename)")," will efficiently obtain ",(0,l.kt)("tt",null,"$course")," and ",(0,l.kt)("tt",null,"$cm")," at the start of a module script in one line. Also, the new function ",(0,l.kt)("tt",null,"cm_info::create($cm)")," can be used when you need a ",(0,l.kt)("tt",null,"cm_info")," object, but only have a standard database record."),(0,l.kt)("li",{parentName:"ul"},"Choice event definitions have changed in ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-3034"},"MDL-3034")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47496"},"MDL-47496")," - The unused lib/pear/XML/ library was removed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36014"},"MDL-36014")," - Changes to functions retrieving list of available cohorts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28484"},"MDL-28484")," - New function is_https() that detects if page is served on https")),(0,l.kt)("h3",{id:"upgrade-notes-for-developers"},"Upgrade notes for developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/upgrade.txt"},"Activity modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/assign/upgrade.txt"},"Assignment module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/auth/upgrade.txt"},"Authentication plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/blocks/upgrade.txt"},"Blocks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/availability/upgrade.txt"},"Conditional availability system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/lib/upgrade.txt"},"Core")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/course/format/upgrade.txt"},"Course formats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/enrol/upgrade.txt"},"Enrolment plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/forum/upgrade.txt"},"Forum module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/glossary/upgrade.txt"},"Glossary module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/grade/export/upgrade.txt"},"Grade export plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/grade/report/upgrade.txt"},"Grade reports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/lti/upgrade.txt"},"LTI module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/upgrade.txt"},"Modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/question/upgrade.txt"},"Question system")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/quiz/upgrade.txt"},"Quiz module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/quiz/accessrule/upgrade.txt"},"Quiz access rules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/repository/upgrade.txt"},"Repositories")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/mod/scorm/upgrade.txt"},"SCORM module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/theme/upgrade.txt"},"Themes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.8.0/lib/editor/tinymce/upgrade.txt"},"TinyMCE"))),(0,l.kt)("h2",{id:"development-numbers"},"Development numbers"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"A summary of the developer inclusions in Moodle 2.7",src:a(76070).Z,width:"1280",height:"1724"})),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.8"},"Notas de Moodle 2.8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.8"},"Notes de mise \xe0 jour de Moodle 2.8"))))}k.isMDXComponent=!0},76070:function(e,t,a){t.Z=a.p+"assets/images/28devstats-c922a32762b78f96a78709d59040aafd.png"}}]);