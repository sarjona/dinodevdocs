"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[43827],{77021:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=o(87462),r=o(63366),s=(o(67294),o(3905)),i=o(13904),n=["components"],l={title:"Moodle 1.9.7",tags:["Release notes","Moodle 1.9"],sidebar_position:7,moodleVersion:"1.9.7"},d=void 0,p={unversionedId:"releases/1.9/1.9.7",id:"releases/1.9/1.9.7",title:"Moodle 1.9.7",description:"Release date: 25th November 2009",source:"@site/general/releases/1.9/1.9.7.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.7",permalink:"/devdocs/general/releases/1.9/1.9.7",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653473544,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:7,frontMatter:{title:"Moodle 1.9.7",tags:["Release notes","Moodle 1.9"],sidebar_position:7,moodleVersion:"1.9.7"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.6",permalink:"/devdocs/general/releases/1.9/1.9.6"},next:{title:"Moodle 1.9.8",permalink:"/devdocs/general/releases/1.9/1.9.8"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language pack",id:"new-language-pack",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:l},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 25th November 2009"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important:"),"  Upgrading is very highly recommended!"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10360"},"the full list of fixed issues in 1.9.7"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20591"},"MDL-20591")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/IMS_Common_Cartridge_import"},"IMS Common Cartridge import")," (requires enabling in ",(0,s.kt)("em",{parentName:"li"},"Site Administration > Miscellaneous > ",(0,s.kt)("a",{parentName:"em",href:"https://docs.moodle.org/en/Experimental"},"Experimental")),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-13049"},"MDL-13049")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Workshop_module"},"Workshop module")," finally pushes grades into Gradebook during ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/grade/edit/simple_tree/index#Synchronize_legacy_grades"},"Synchronize legacy grades")," procedure"),(0,s.kt)("li",{parentName:"ul"},"Miscellaneous Workshop module fixes (",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20668"},"MDL-20668"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-7218"},"MDL-7218"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20827"},"MDL-20827"),")")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To force users to use stronger passwords that are less susceptible to being cracked the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_policy"},"password policy")," is enabled by default in new installs, and switched on when upgrading to 1.9.7.\n:Admins can review their password policy in ",(0,s.kt)("em",{parentName:"li"},"Site Administration > Security > ",(0,s.kt)("a",{parentName:"em",href:"https://docs.moodle.org/en/Site_policies"},"Site policies")),". The default policy requires passwords of at least 8 characters long and containing at least 1 digit, 1 lower case letter, 1 upper case letter and 1 non-alphanumeric character."),(0,s.kt)("li",{parentName:"ul"},"After upgrading to 1.9.7, admins will be asked to change their passwords next time they log in (manual or email based self-registration accounts only)."),(0,s.kt)("li",{parentName:"ul"},"To reduce the risk of password theft, a ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_salting"},"password salt")," is set in ",(0,s.kt)("em",{parentName:"li"},"config.php")," in new installs and for upgrades, admins are sent an email recommending that they do so."),(0,s.kt)("li",{parentName:"ul"},"Teachers lose permission to include ANY user data in a course backup or restore a course including user data due to new capabilities  ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo"},"moodle/backup:userinfo")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo"},"moodle/restore:userinfo")," which are not set for the default role of teacher.  Sites with custom roles should check permissions carefully.  Admins can restore those permissions but are informed of the risks in doing so."),(0,s.kt)("li",{parentName:"ul"},'Hashed user passwords are no longer saved in backup files containing user data. If a backup is restored to a new site, users will be asked to go through the "forgot my password" routine the first time they log in.'),(0,s.kt)("li",{parentName:"ul"},"Moodle will no longer serve any uploaded Flash files to browsers with old Flash plugins. Admins can set the minimum required Flash player version in ",(0,s.kt)("em",{parentName:"li"},"Site Administration > Security > HTTP Security"),".")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139100"},"MSA-09-0022")," - Multiple CSRF problems fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139102"},"MSA-09-0023")," - Fixed user account disclosure in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/LAMS_module"},"LAMS module")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139103"},"MSA-09-0024")," - Fixed insufficient access control in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Glossary_module"},"Glossary module")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139105"},"MSA-09-0025")," - Unneeded MD5 hashes removed from user table"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139106"},"MSA-09-0026")," - Fixed invalid application access control in MNET interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139107"},"MSA-09-0027")," - Ensured login information is always sent secured when using SSL for logins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139110"},"MSA-09-0028")," - Passwords and secrets are no longer ever saved in backups, new backup capabilities ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/backup/userinfo"},"moodle/backup:userinfo")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/userinfo"},"moodle/restore:userinfo")," for controlling who can backup/restore user data, new checks in the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Security_overview"},"security overview report")," help admins identify dangerous backup permissions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139111"},"MSA-09-0029")," - A strong ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_policy"},"password policy")," is now enabled by default, enabling ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Password_salting"},"password salt")," in encouraged in ",(0,s.kt)("em",{parentName:"li"},"config.php"),", admins are forced to change password after the upgrade and admins can force password change on other users via ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Bulk_user_actions"},"en")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139119"},"MSA-09-0030")," - New detection of insecure Flash player plugins, Moodle won't serve Flash to insecure plugins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=139120"},"MSA-09-0031")," - Fixed SQL injection in ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/SCORM_module"},"SCORM module"))),(0,s.kt)("h2",{id:"new-language-pack"},"New language pack"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Dhivehi - Ahmed Shareef, Moosa Ali, Amir Hussein")),(0,s.kt)("p",null,"(See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"Translation credits")," for additional details.)"),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.7"},"French version of this page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.9.7_Versionsinformationen"},"Moodle 1.9.7 Versionsinformationen")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.9.7"},"Notas de Moodle 1.9.7"))))}h.isMDXComponent=!0}}]);