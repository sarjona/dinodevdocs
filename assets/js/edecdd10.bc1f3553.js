"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2203],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6961:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"Setting up your development environment for the Moodle App",sidebar_label:"Setting up your environment",sidebar_position:3,tags:["Moodle App"]},d=void 0,s={unversionedId:"guides/moodleapp/development/setup",id:"guides/moodleapp/development/setup",title:"Setting up your development environment for the Moodle App",description:"The structure of this page is the following:",source:"@site/docs/guides/moodleapp/development/setup.md",sourceDirName:"guides/moodleapp/development",slug:"/guides/moodleapp/development/setup",permalink:"/devdocs/docs/guides/moodleapp/development/setup",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/development/setup.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1651240592,formattedLastUpdatedAt:"29/04/2022",sidebarPosition:3,frontMatter:{title:"Setting up your development environment for the Moodle App",sidebar_label:"Setting up your environment",sidebar_position:3,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Coding style",permalink:"/devdocs/docs/guides/moodleapp/development/coding-style"},next:{title:"Docker images",permalink:"/devdocs/docs/guides/moodleapp/development/docker-images"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Install a browser for development",id:"install-a-browser-for-development",level:3},{value:"Install git",id:"install-git",level:3},{value:"Install Node.js and Npm",id:"install-nodejs-and-npm",level:3},{value:"Install native SDKs",id:"install-native-sdks",level:3},{value:"Windows only: Native build dependencies",id:"windows-only-native-build-dependencies",level:3},{value:"Mac only: Push notifications",id:"mac-only-push-notifications",level:3},{value:"Linux only: <code>libsecret</code>",id:"linux-only-libsecret",level:3},{value:"Running the app in a browser",id:"running-the-app-in-a-browser",level:2},{value:"Running the app in Android and iOS",id:"running-the-app-in-android-and-ios",level:2},{value:"Developing using Live Reload",id:"developing-using-live-reload",level:3},{value:"Compiling using AOT",id:"compiling-using-aot",level:3},{value:"Using Android emulators",id:"using-android-emulators",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"General advice",id:"general-advice",level:3},{value:"I get a blank page when launching the app",id:"i-get-a-blank-page-when-launching-the-app",level:3},{value:"Strange NPM errors",id:"strange-npm-errors",level:3},{value:"I can&#39;t change the language",id:"i-cant-change-the-language",level:3},{value:"Error: <code>libsass</code> bindings not found. Try reinstalling node-sass?",id:"error-libsass-bindings-not-found-try-reinstalling-node-sass",level:3},{value:"com.android.dex.DexException: Multiple dex files define XXX",id:"comandroiddexdexexception-multiple-dex-files-define-xxx",level:3},{value:"Could not resolve all dependencies for configuration &#39;:_debugCompile&#39;.",id:"could-not-resolve-all-dependencies-for-configuration-_debugcompile",level:3},{value:"Could not find com.android.support:support-v4:XXX",id:"could-not-find-comandroidsupportsupport-v4xxx",level:3},{value:"ERROR: In <code>&lt;declare-styleable&gt;</code> FontFamilyFont, unable to find attribute android:font",id:"error-in-declare-styleable-fontfamilyfont-unable-to-find-attribute-androidfont",level:3},{value:"Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.",id:"error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-your-android-sdk",level:3},{value:"Could not find com.android.support:support-v4:27.1.0",id:"could-not-find-comandroidsupportsupport-v42710",level:3},{value:"Error: not found: make",id:"error-not-found-make",level:3},{value:"Current working directory is not a Cordova-based project.",id:"current-working-directory-is-not-a-cordova-based-project",level:3},{value:"ReferenceError: internalBinding is not defined",id:"referenceerror-internalbinding-is-not-defined",level:3},{value:"npm update check failed",id:"npm-update-check-failed",level:3},{value:"Unhandled rejection Error: Command failed: C:cygwin64\bingit.EXE ...",id:"unhandled-rejection-error-command-failed-ccygwin64bingitexe-",level:3},{value:"The product name change (<code>&lt;name&gt;</code> tag) in config.xml is not supported dynamically",id:"the-product-name-change-name-tag-in-configxml-is-not-supported-dynamically",level:3},{value:"Failed to install &#39;cordova-plugin-x&#39;",id:"failed-to-install-cordova-plugin-x",level:3},{value:"doc.find is not a function",id:"docfind-is-not-a-function",level:3},{value:"Mac: linker code failed with exit code 1",id:"mac-linker-code-failed-with-exit-code-1",level:3},{value:"Windows: <code>npm start</code> hangs after &quot;Starting &#39;watch&#39;&quot;",id:"windows-npm-start-hangs-after-starting-watch",level:3},{value:"See also",id:"see-also",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The structure of this page is the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first part, up to the point where you get the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm start")," command to work, includes the basics of what you need to work on the app."),(0,i.kt)("li",{parentName:"ul"},"The second part indicates how to build the app to run it on a native device (or emulator)."),(0,i.kt)("li",{parentName:"ul"},"The third part includes a list of troubleshooting advice. If you encounter a problem that is not already listed, please consider adding it.")),(0,i.kt)("p",null,"Most of your development can happen on a browser, you only need to use an emulator if you have to work on native functionality."),(0,i.kt)("p",null,"If you are just ",(0,i.kt)("a",{parentName:"p",href:"./plugins-development-guide"},"adding mobile support to plugins"),", you probably don't need to build the app yourself and you can skip reading this page."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"install-a-browser-for-development"},"Install a browser for development"),(0,i.kt)("p",null,"Most of the time we recommend that you use a browser for development; the app will work in any Chromium-based browser. We recommend using the Chromium browser (an open source alternative to Google Chrome). You can get it from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/download-chromium"},"official download page"),"."),(0,i.kt)("p",null,"To learn more about using a browser for development, and why it needs to be Chromium-based, read the ",(0,i.kt)("a",{parentName:"p",href:"./app-in-browser"},"Using the Moodle App in a browser")," page."),(0,i.kt)("h3",{id:"install-git"},"Install git"),(0,i.kt)("p",null,"You will need to install Git in order to get the source code and upload your changes. If you are not familiar with it, we recommend that you get started reading the following guide: ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Installing Git"),"."),(0,i.kt)("h3",{id:"install-nodejs-and-npm"},"Install Node.js and Npm"),(0,i.kt)("p",null,"We recommend using a version manager like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," to make this easier, you can prepare the correct environment running ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm install")," in the project root. Remember to run this every time you work with the app, or if you're not working on any other node projects in your computer you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"nvm alias default `node -v` ")," to make it the default."),(0,i.kt)("p",null,"It may seem simpler and easier to install directly from ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org"},"nodejs.org"),", but actually it is more tricky to get that to work. If you have previously installed Node directly, and want to switch to nvm, you need to uninstall node completely before installing nvm - or search for trouble-shooting instructions online."),(0,i.kt)("h3",{id:"install-native-sdks"},"Install native SDKs"),(0,i.kt)("p",null,"If you intend to run the application in a native device, you will need to install that platform's native SDKs. You can learn how to set up your environment by reading Ionic\u2019s documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developing/android"},"Android")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developing/ios"},"iOS"),"."),(0,i.kt)("h3",{id:"windows-only-native-build-dependencies"},"Windows only: Native build dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node-gyp")," requires native build tools for your platform. If you're developing on Mac or Linux, you'll probably have these already (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp/blob/master/README.md"},"refer to the docs if you don't"),"). On Windows, run the following command as administrator (in cmd or Powershell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global --production windows-build-tools\n")),(0,i.kt)("p",null,"Warning! This installer can take a very, very long time to run. We were seeing it take hours. Literally. Be prepared to be very patient. Don't just make the natural assumption that it has crashed."),(0,i.kt)("h3",{id:"mac-only-push-notifications"},"Mac only: Push notifications"),(0,i.kt)("p",null,"This is only be necessary if you intend to compile the native iOS application. The push notifications plugin requires CocoaPods to work on a Mac; you can find the complete installation instructions in ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"the official documentation"),", but it should work by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gem install cocoapods\npod setup\n")),(0,i.kt)("p",null,"Please note that for compiling the app in Mac you need to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Moodle.xcworkspace")," file, more information here: ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-1970"},"MOBILE-1970"),"."),(0,i.kt)("h3",{id:"linux-only-libsecret"},"Linux only: ",(0,i.kt)("inlineCode",{parentName:"h3"},"libsecret")),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"./scripts/gulp-push"},"the gulp push script"),", you need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"libsecret")," installed before running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),". Depending on your distribution, you will need to run one of the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Debian/Ubuntu"',title:'"Debian/Ubuntu"'},"sudo apt-get install libsecret-1-dev\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Red Hat"',title:'"Red','Hat"':!0},"sudo yum install libsecret-devel\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Arch Linux"',title:'"Arch','Linux"':!0},"sudo pacman -S libsecret\n")),(0,i.kt)("h2",{id:"running-the-app-in-a-browser"},"Running the app in a browser"),(0,i.kt)("p",null,"You can obtain a copy of the source code by cloning the public repository. If you want to work on the latest development version, you should check out the ",(0,i.kt)("inlineCode",{parentName:"p"},"integration")," branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:moodlehq/moodleapp.git\ncd moodleapp\ngit checkout integration\n")),(0,i.kt)("p",null,"Once you have the correct environment set up, you can run the application with the following two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm start\n")),(0,i.kt)("p",null,"This will launch the application in a browser and you should be ready to start coding (you may also want to ",(0,i.kt)("a",{parentName:"p",href:"./app-in-browser##configuring-the-default-browser"},"configure the default browser")," for future runs). This compiles the entire application and can take a while, so don't worry if it doesn't open the browser instantly. Keep in mind that this command may open the browser before the dev server is ready, and you could get a network error. If that happens, just wait until the dev server is ready and launch the application again. It should be ready when you see a \"Compiled successfully\" message in the console."),(0,i.kt)("p",null,"Congratulations, you have just completed the basics to become a Moodle App developer!"),(0,i.kt)("p",null,"If you need to work with native features or build packaged versions of the app, you can read the rest of this page."),(0,i.kt)("h2",{id:"running-the-app-in-android-and-ios"},"Running the app in Android and iOS"),(0,i.kt)("p",null,"The first time you want to run the application in a native device, this process will take a bit longer than usual because it needs to create the native projects and install native plugins. These will be created under the ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/")," folders respectively. If you ever run into issues during this process, try deleting both of these folders to get a clean start."),(0,i.kt)("p",null,"In order to run the application on a native device, you can use one of the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev:android  # Uses Live Reload, read below\nnpm run dev:ios      # Does NOT use Live Reload, read below\nnpm run prod:android # Uses AOT compilation, read below\nnpm run prod:ios     # Uses AOT compilation, read below\n")),(0,i.kt)("p",null,"If you get any errors while building, please see the ",(0,i.kt)("a",{parentName:"p",href:"#troubleshooting"},"Troubleshooting")," section below."),(0,i.kt)("p",null,"You can also inspect the HTML and look at the console logs by using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/remote-debugging/"},"Chrome's Remote Debugging for Android")," and ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/15.1/mac/12.0"},"Safari's Develop menu for iOS"),". This will only work with emulators or devices connected to your computer running with the development environment."),(0,i.kt)("h3",{id:"developing-using-live-reload"},"Developing using Live Reload"),(0,i.kt)("p",null,"Most of the time, it is recommended to develop using the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," command. Working in a browser is faster, easier, and doesn't have as much overhead. However, in some situations you may want to run the application in a native device. If you want a similar development experience, you'll want to enable ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload"),"."),(0,i.kt)("p",null,"In Android, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:android"),' command and the application will launch on a device or emulator. Whenever you make any changes to your code, the application will reload automatically. Keep in mind that this command may launch the application before the dev server is ready, and you could get a network error. If that happens, just wait until the dev server is ready and launch the application again (you should see "Compiled successfully" in the console).'),(0,i.kt)("p",null,"In iOS, there are some limitations using live reload and that's why the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," command doesn't enable it by default. You can still use it by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npx ionic cordova run ios --livereload --external"),", but keep in mind that this will serve your application on an IP and will expose it to anyone connected to the same Wi-Fi network. Other than privacy concerns, this may cause some problems if you are working with iframes or local files. If you have any problems with that, you'll have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," command to recompile the application every time you change the code."),(0,i.kt)("h3",{id:"compiling-using-aot"},"Compiling using AOT"),(0,i.kt)("p",null,"Angular has 2 ways of compiling: ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/glossary#jit"},"JIT")," and ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/glossary#aot"},"AOT"),"."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:android")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev:ios")," compiles using JIT, which is faster to compile but the app takes longer to start. This is acceptable during development because it allows you to use Live Reload."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prod:android")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prod:ios")," commands use AOT compilation because they generate production bundles."),(0,i.kt)("h3",{id:"using-android-emulators"},"Using Android emulators"),(0,i.kt)("p",null,"Most of the time, you should be using an emulator running recent versions of Android, and it should work fine. But sometimes, you may want to use an older version to test a specific behaviour."),(0,i.kt)("p",null,"If you want to run the application in an Android 5 emulator, you\u2019ll need to upgrade the system webview because emulators come with version 37 preinstalled. Your first idea may be to upgrade the webview using the Google Play store, but it will not work because the webview served by Google Play is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.google.android.webview")," whilst the system webview used in emulators is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.android.webview"),". You can do the following instead."),(0,i.kt)("p",null,"Once you have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds"},"created your Android 5 virtual device"),", you\u2019ll need to do download ",(0,i.kt)("a",{parentName:"p",href:"https://android.googlesource.com/platform/external/chromium-webview/+/refs/heads/oreo-m3-release/prebuilt/x86_64/"},"the apk for Webview 61")," and run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Open the folder where the \u201cemulator\u201d script is installed\ncd $(dirname `which emulator`)\n\n# Boot the emulator in write mode (you can get a list of device names running \u201cemulator -list-avds\u201d)\nemulator @DeviceName -writable-system\n\n# In a different shell, make /system writable\nadb remount\n\n# Uninstall the webview app manually and reboot the device\nadb shell\nrm -rf /data/data/com.android.webview\nrm -rf /system/app/webview\nreboot\n\n# Install the new version\nadb install webview.apk\n")),(0,i.kt)("p",null,"After doing this, remember to run the emulator in write mode for subsequent sessions, but you don't need to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"remount")," command every time."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"This section contains a list of common errors that have been found and how to solve them. However, keep in mind that these may be platform-dependent and could not fix the problem in your machine, even if you are seeing the same error message."),(0,i.kt)("h3",{id:"general-advice"},"General advice"),(0,i.kt)("p",null,"If you are stuck with an error and you can't find a way to continue, here's a list of things you can do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using git, look at the changes you have in your working directory and make sure that they aren't causing the problem. Be specially careful with changes in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),". You can see a list of the files you have modified running ",(0,i.kt)("inlineCode",{parentName:"li"},"git status"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure that you are using the proper node and npm versions. You can see it looking at the ",(0,i.kt)("inlineCode",{parentName:"li"},"engines")," key in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),". If you are using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm"),", just run ",(0,i.kt)("inlineCode",{parentName:"li"},"nvm install"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure that all dependencies have been installed properly. To be extra sure, run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci"),"; this will remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/")," folder and install all dependencies again exactly as described in your ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are having issues trying to build for Android or iOS, try removing the ",(0,i.kt)("inlineCode",{parentName:"li"},"www/"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins/")," folders and try again."),(0,i.kt)("li",{parentName:"ul"},"If you are using a development version, maybe the repository is broken and it's not your fault. Try checking out the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch and see if you're getting the same error."),(0,i.kt)("li",{parentName:"ul"},"Try cloning the repository in a new folder and run through the instructions in this page again. If you can, try doing it on a different computer to make sure that you're doing everything properly and it's not a problem in your machine."),(0,i.kt)("li",{parentName:"ul"},"Try creating ",(0,i.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/cli/commands/start"},"a blank Ionic application")," and see if you're having the same problems. Make sure that you are using the same version of the main dependencies (Angular, Cordova, Ionic CLI, etc.)."),(0,i.kt)("li",{parentName:"ul"},"If you are searching for help online, maybe your problem has nothing to do with the Moodle App in particular an it's related with Ionic, Cordova, Angular, etc. Searching using the proper context will give you better solutions.")),(0,i.kt)("h3",{id:"i-get-a-blank-page-when-launching-the-app"},"I get a blank page when launching the app"),(0,i.kt)("p",null,'This error can happen when the application is launched properly but there is a runtime error. If you get a network connection error, this may be the expected behaviour. Wait until you see "Compiled successfully" in the console and reload.'),(0,i.kt)("p",null,"If that's not the case and you really are getting a blank page, look at the console and you should see some error indicating why the application is not rendering properly. Keep in mind that at the moment the application is already logging some errors and warnings, so make sure that you're not stuck trying to fix something that isn't causing the problem. You can follow any updates about this on ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3854"},"MOBILE-3854"),"."),(0,i.kt)("p",null,"If you are not seeing any relevant logs, check out what to do on the ",(0,i.kt)("a",{parentName:"p",href:"#general-advice"},"General advice")," section."),(0,i.kt)("h3",{id:"strange-npm-errors"},"Strange NPM errors"),(0,i.kt)("p",null,"To get more debug output from npm commands, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/config"},"the available configuration flags"),". In particular try adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel verbose"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel info")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel silly")," to the command-line."),(0,i.kt)("h3",{id:"i-cant-change-the-language"},"I can't change the language"),(0,i.kt)("p",null,"If you're getting a network error for a url like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8100/assets/lang/es.json"),", this probably means that you haven't installed the language packs."),(0,i.kt)("p",null,"Currently, you can install them in your machine running the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/update_lang.sh")," script, but it may not work in your system if you don't have php installed. For future improvements, you can subscribe to ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3864"},"MOBILE-3864"),"."),(0,i.kt)("h3",{id:"error-libsass-bindings-not-found-try-reinstalling-node-sass"},"Error: ",(0,i.kt)("inlineCode",{parentName:"h3"},"libsass")," bindings not found. Try reinstalling node-sass?"),(0,i.kt)("p",null,"Most of the time, running the following command will fix the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm rebuild node-sass\n")),(0,i.kt)("h3",{id:"comandroiddexdexexception-multiple-dex-files-define-xxx"},"com.android.dex.DexException: Multiple dex files define XXX"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"configurations {\n    all*.exclude group: 'com.android.support', module: 'support-v4'\n}\n")),(0,i.kt)("h3",{id:"could-not-resolve-all-dependencies-for-configuration-_debugcompile"},"Could not resolve all dependencies for configuration ':","_","debugCompile'."),(0,i.kt)("p",null,"Open the Android SDK Manager and make sure you have installed: Android Support Repository, Android Support Library, Google Play Services and Google Repository."),(0,i.kt)("h3",{id:"could-not-find-comandroidsupportsupport-v4xxx"},"Could not find com.android.support:support-v4:XXX"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"configurations.all {\n    resolutionStrategy.force 'com.android.support:support-v4:24.0.0'\n}\n")),(0,i.kt)("h3",{id:"error-in-declare-styleable-fontfamilyfont-unable-to-find-attribute-androidfont"},"ERROR: In ",(0,i.kt)("inlineCode",{parentName:"h3"},"<declare-styleable>")," FontFamilyFont, unable to find attribute android:font"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'android {\n   compileSdkVersion 26\n   buildToolsVersion "26.0.1"\n}\n')),(0,i.kt)("h3",{id:"error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-your-android-sdk"},"Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK."),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/"},"Android Studio")," and copy the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"android-studio/plugins/android/lib/templates")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"android-sdk-folder/Sdk/tools"),"."),(0,i.kt)("h3",{id:"could-not-find-comandroidsupportsupport-v42710"},"Could not find com.android.support:support-v4:27.1.0"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and configure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'allprojects {\n    repositories {\n        jcenter()\n        maven {\n            url "https://maven.google.com"\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"error-not-found-make"},"Error: not found: make"),(0,i.kt)("p",null,"If you see this error in Ubuntu, run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential")," and retry."),(0,i.kt)("h3",{id:"current-working-directory-is-not-a-cordova-based-project"},"Current working directory is not a Cordova-based project."),(0,i.kt)("p",null,"If you see this error during ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir www")," and retry."),(0,i.kt)("h3",{id:"referenceerror-internalbinding-is-not-defined"},"ReferenceError: internalBinding is not defined"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53146394/node-app-fails-to-run-on-mojave-referenceerror-internalbinding-is-not-defined"},"seems to be")," an error with ",(0,i.kt)("inlineCode",{parentName:"p"},"natives")," prior to 1.1.6. It can be fixed by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install <natives@1.1.6>"),"."),(0,i.kt)("h3",{id:"npm-update-check-failed"},"npm update check failed"),(0,i.kt)("p",null,"You may get the following error on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," \u2502                   npm update check failed                     \u2502\n \u2502             Try running with sudo or get access               \u2502\n \u2502            to the local update config store via               \u2502\n \u2502 sudo chown -R $USER:$(id -gn $USER) C:\\Users\\username\\.config \u2502\n")),(0,i.kt)("p",null,"The suggested command does not work on Windows, so the solution is to manually check the ownership of all the files in ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users{username}.config\\configstore"),". In some cases, it can be ",(0,i.kt)("inlineCode",{parentName:"p"},"update-notifier-npm.json")," that got changed to be owned by Administrator."),(0,i.kt)("h3",{id:"unhandled-rejection-error-command-failed-ccygwin64bingitexe-"},"Unhandled rejection Error: Command failed: C:\\cygwin64\\bin\\git.EXE ..."),(0,i.kt)("p",null,"This is a common issue for Cygwin user running Node. However, you just need to ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"Msysgit")," is on your windows path and that the cygwin bin folder is not. Then always use another shell like Powershell for your Moodle App development."),(0,i.kt)("p",null,"You don't need your Cygwin bin folder on the Windows path because it automatically gets added to the path when you launch Cygwin bash."),(0,i.kt)("h3",{id:"the-product-name-change-name-tag-in-configxml-is-not-supported-dynamically"},"The product name change (",(0,i.kt)("inlineCode",{parentName:"h3"},"<name>")," tag) in config.xml is not supported dynamically"),(0,i.kt)("p",null,"This happens when you create the iOS platform with a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"<name>")," and then you change that name in config.xml. The solution seems to be removing and adding the iOS platform again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx ionic platform remove ios\nnpx ionic platform add ios\n")),(0,i.kt)("h3",{id:"failed-to-install-cordova-plugin-x"},"Failed to install 'cordova-plugin-x'"),(0,i.kt)("p",null,"Sometimes, you may see an error message similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CordovaError: Version of installed plugin: "cordova-plugin-x@x.x.x" does not satisfy dependency plugin requirement "cordova-plugin-x@>=x.x.x".\n')),(0,i.kt)("p",null,'This can happen when a cordova plugin (let\'s call it "X") is installed with an incorrect version. You can find this by removing the plugin and adding it again with the correct version:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx cordova plugin remove cordova-plugin-x\nnpx cordova plugin add cordova-plugin-x@x.x.x # Make sure to use the proper version here\n")),(0,i.kt)("p",null,"Please notice that if there is any plugin installed that depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-x")," you'll have to remove and re-add them too."),(0,i.kt)("h3",{id:"docfind-is-not-a-function"},"doc.find is not a function"),(0,i.kt)("p",null,"This happens in some environments, the solution is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx cordova platform add ios")," before running the failing command. You should do this in a clean environment, once you've seen the error running the command may not work. Try deleting ",(0,i.kt)("inlineCode",{parentName:"p"},"www/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/")," before trying again."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/47404622/edit-config-for-ios-usage-descriptions-doc-find-is-not-a-function"},"Find more about this in StackOverflow")),(0,i.kt)("h3",{id:"mac-linker-code-failed-with-exit-code-1"},"Mac: linker code failed with exit code 1"),(0,i.kt)("p",null,"If you get this error when trying to build the Moodle app with XCode, some dependencies might not have installed correctly."),(0,i.kt)("p",null,"Ensure you have followed the ","[#Mac_only:","_","Push_notifications Mac only: Push notifications][Mac only: Push notifications]","(#Mac_only:_Push_notifications) steps above (particularly opening the .xcworkspace file rather than the .xcodeproj file). Then run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd platforms/ios\npod install\n")),(0,i.kt)("p",null,"Now try running the build again in XCode."),(0,i.kt)("h3",{id:"windows-npm-start-hangs-after-starting-watch"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"h3"},"npm start")," hangs after \"Starting 'watch'\""),(0,i.kt)("p",null,"If you follow the above procedure to run the app on a Windows system and get repeated 'Waiting for connectivity with NPM' like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n\n> moodlemobile@3.9.5 start C:\\Users\\xxx\\workspace\\moodleapp\n> ionic serve\n\n> npm.cmd run ionic:serve:before\n\n> moodlemobile@3.9.5 ionic:serve:before C:\\Users\\xxx\\workspace\\moodleapp\n> gulp\n\n[Using gulpfile ~\\workspace\\moodleapp\\gulpfile.js\n[13:59:24](13:59:24]) Starting 'default'...\n[Starting 'lang'...\n[13:59:24](13:59:24]) Starting 'env'...\n[Finished 'env' after 802 ms\n[13:59:27](13:59:25]) Finished 'lang' after 3.4 s\n[Finished 'default' after 3.4 s\n> npm.cmd run ionic:serve -- --host=localhost --port=8100 --project=app\n[npm](13:59:27]) > moodlemobile@3.9.5 ionic:serve C:\\Users\\xxx\\workspace\\moodleapp\n[> gulp watch & NODE_OPTIONS=--max-old-space-size=4096 ng serve \"--host=localhost\" \"--port=8100\" \"--project=app\"\n[INFO](npm]) Waiting for connectivity with npm...\n[[13:59:46](npm]) Using gulpfile ~\\workspace\\moodleapp\\gulpfile.js\n[[13:59:46](npm]) Starting 'watch'...\n[Waiting for connectivity with npm...\n[INFO](INFO]) Waiting for connectivity with npm...\n[Waiting for connectivity with npm...\n[INFO](INFO]) Waiting for connectivity with npm...\n")),(0,i.kt)("p",null,"You can resolve the problem (sort of) by pressing ctrl-c to get out of it, then rerun the last command displayed, but this time with 'npx' before each of the 2 commands. (This assumes you are using a bash shell.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx gulp watch & NODE_OPTIONS=--max-old-space-size=4096 npx ng serve "--host=localhost" "--port=8100" "--project=app"\n')),(0,i.kt)("p",null,"There will be a pause (a few minutes) while building everything. It should finish with the line:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},": Compiled successfully.")),(0,i.kt)("p",null,"Then you can access it by running Chrome and connecting to localhost:8100."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./coding-style"},"Moodle App Coding Style")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./network-debug"},"Debugging network requests in the Moodle App")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-docker"},"Moodle Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://ionicframework.com/docs/cli/"},"Ionic CLI docs"))))}m.isMDXComponent=!0}}]);