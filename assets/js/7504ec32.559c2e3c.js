"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[71523],{84907:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(13904),r=["components"],l={title:"Unit testing for the Moodle App",sidebar_label:"Unit testing",tags:["Quality Assurance","Testing","Moodle App"]},p=void 0,c={unversionedId:"moodleapp/development/testing/unit-testing",id:"moodleapp/development/testing/unit-testing",title:"Unit testing for the Moodle App",description:"Unit tests are written in JavaScript using Jest. If you want to create a new one, Jest is already configured and you only need to create a file ending with .test.ts within the project. If you're going to do so, remember to follow the file location conventions.",source:"@site/docs/moodleapp/development/testing/unit-testing.md",sourceDirName:"moodleapp/development/testing",slug:"/moodleapp/development/testing/unit-testing",permalink:"/devdocs/docs/moodleapp/development/testing/unit-testing",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/testing/unit-testing.md",tags:[{label:"Quality Assurance",permalink:"/devdocs/docs/tags/quality-assurance"},{label:"Testing",permalink:"/devdocs/docs/tags/testing"},{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653897451,formattedLastUpdatedAt:"30/05/2022",frontMatter:{title:"Unit testing for the Moodle App",sidebar_label:"Unit testing",tags:["Quality Assurance","Testing","Moodle App"]},sidebar:"docs",previous:{title:"Acceptance testing",permalink:"/devdocs/docs/moodleapp/development/testing/acceptance-testing"},next:{title:"Scripts",permalink:"/devdocs/docs/category/scripts"}},u={},d=[{value:"Running tests",id:"running-tests",level:2},{value:"Testing plain TypeScript",id:"testing-plain-typescript",level:2},{value:"Testing services",id:"testing-services",level:2},{value:"Testing components",id:"testing-components",level:2},{value:"What about integration tests?",id:"what-about-integration-tests",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,o.Z)({frontMatter:l},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Unit tests are written in JavaScript using ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),". If you want to create a new one, Jest is already configured and you only need to create a file ending with ",(0,i.kt)("inlineCode",{parentName:"p"},".test.ts")," within the project. If you're going to do so, remember to follow the ",(0,i.kt)("a",{parentName:"p",href:"../development-guide#test-files"},"file location conventions"),"."),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("p",null,"The easiest way to run the entire test suite is to execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm test")," command. This will run all the tests in the project. If you want to look at code coverage, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:coverage"),"."),(0,i.kt)("p",null,"You can also watch changes in your codebase to rerun tests using the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:watch")," command. In combination with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," flag, you can use this to work on a file while you see how your changes affect the tests. But keep in mind that this will be a partial match. For example, if you are working on ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.ts")," and you have tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.test.ts"),", you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:watch --filter foobar"),", but this will also run tests from ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar-somethingelse.test.ts"),"."),(0,i.kt)("p",null,"If you are using VSCode, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Docs/editor/debugging"},"the built-in debugger")," to run your tests and stop at breakpoints. The project comes with two tasks preconfigured:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Jest All")," will run your entire test suite. It's the equivalent of running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm test")," from the command line."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Jest Current File")," will run the test of the file you have opened in the editor. Like the ",(0,i.kt)("inlineCode",{parentName:"li"},"--watch")," filter, this will be a partial match based on the file name.")),(0,i.kt)("p",null,"If you are using the default key bindings, these can be re-run automatically pressing the F5 key."),(0,i.kt)("h2",{id:"testing-plain-typescript"},"Testing plain TypeScript"),(0,i.kt)("p",null,"When you are writing tests, a good part of those will be testing plain TypeScript code. You can use all the ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/using-matchers"},"common techniques used in Jest"),", and we also offer a couple of helpers."),(0,i.kt)("p",null,"If you need to create a mock object, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")," helper. This function creates a new object with mock properties and methods. You can use an existing instance, overriding some of its properties and methods if needed, or you can create a new object with only the properties and methods that you want."),(0,i.kt)("p",null,"For example, let's say we have the following classes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class User {\n\n    constructor(public name: string) {}\n\n    greet(): void {\n        // Method implementation\n    }\n\n}\n\nclass Greeter {\n\n    sayHello(user: User): string {\n        user.greet();\n\n        return `${user.name} was greeted.`;\n    }\n\n}\n")),(0,i.kt)("p",null,"If you want to write a test for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHello")," method, you need an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),". But maybe you don't want to use a real user because you want to test the ",(0,i.kt)("inlineCode",{parentName:"p"},"Greeter")," class in isolation."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")," helper, you can write the following test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('Greets users', () => {\n    const user = mock<User>({ name: 'John' }, ['greet']);\n    const greeter = new Greeter();\n    const result = greeter.sayHello(user);\n\n    expect(result).toEqual('John was greeted.');\n    expect(user.greet).toHaveBeenCalled();\n});\n")),(0,i.kt)("p",null,"Notice how we used the ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")," helper to create a mock that is properly typed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),", we indicated that we want to mock the ",(0,i.kt)("inlineCode",{parentName:"p"},"greet"),' method, and we initialised the mock instance to have a name of "John".'),(0,i.kt)("h2",{id:"testing-services"},"Testing services"),(0,i.kt)("p",null,"If you are testing some code that uses ",(0,i.kt)("a",{parentName:"p",href:"../development-guide#service-singletons"},"Service Singletons"),", it is likely that you want to mock some of them. You can achieve it by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mockSingleton")," helper. This method takes a Service Singleton and creates a mock for the instance underneath, mocking the methods and properties that you specify along the way."),(0,i.kt)("p",null,"For example, let's say that you have the following test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('App provider checks current platform', () => {\n    const appService = new CoreAppProvider();\n\n    expect(appService.isAndroid()).toBe(true);\n    expect(appService.isIOS()).toBe(false);\n});\n")),(0,i.kt)("p",null,"When you run it, it will fail because the testing platform is neither Android or iOS. You can make the test pass by providing a mock of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Platform")," singleton that uses the platform of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('App provider checks current platform', () => {\n    const platforms = ['android']('cordova',);\n    const appService = new CoreAppProvider();\n\n    mockSingleton(Platform, {\n        is: platform => platforms.includes(platform),\n    });\n\n    expect(appService.isAndroid()).toBe(true);\n    expect(appService.isIOS()).toBe(false);\n});\n")),(0,i.kt)("p",null,"Other than preparing the environment, this can also be useful to assert that other services have been used as expected. As you saw in this last example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mockSingleton")," method can be used to mock functions without needing to provide an explicit implementation. It uses the same api as the ",(0,i.kt)("inlineCode",{parentName:"p"},"mock")," helper we introduced in the previous section."),(0,i.kt)("p",null,"For example, in the following test you can see how we assert that copying text to the clipboard actually calls the native method and displays a confirmation message to the user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('Copies data to clipboard', async () => {\n    // Arrange.\n    const domUtils = new CoreUtilsProvider(mock<NgZone>());\n\n    mockSingleton(Clipboard, [   mockSingleton(CoreDomUtils, ['showToast']('copy']);\n));\n\n    // Act.\n    await domUtils.copyToClipboard('Foo bar');\n\n    // Assert.\n    expect(Clipboard.copy).toHaveBeenCalledWith('Foo bar');\n    expect(CoreDomUtils.showToast).toHaveBeenCalledWith('core.copiedtoclipboard', true);\n});\n")),(0,i.kt)("p",null,'Most services will be instantiated properly without mocks, but sometimes you may see the error "XX is not a function", or some service property that is undefined. This happens because if it\'s not possible to instantiate a service with an empty constructor, it will be provided as an empty object by default. If that happens, you just need to mock the methods and properties that are used in your test. Some basic services like ',(0,i.kt)("inlineCode",{parentName:"p"},"Platform")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Network")," already come with some basic mocks, but they are not exhaustive."),(0,i.kt)("h2",{id:"testing-components"},"Testing components"),(0,i.kt)("p",null,"Angular components have a strong graphical part, but that doesn't mean that you can't test their logic and markup rendering using unit tests with Jest. You can follow ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/testing-components-scenarios"},"Angular's best practices for testing components"),", and we also provide a couple of helpers that make things easier."),(0,i.kt)("p",null,"Let's say you want to test the following component that render a list of user names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Component({\n    selector: 'users-list',\n    template: `\n        <h1>Users List</h1>\n        <ul>\n            <li *ngFor=\"let user of users\">{{ user }}</li>\n        </ul>\n    `,\n})\nexport class UsersListComponent {\n\n    @Input() users: string[= [](]);\n\n}\n")),(0,i.kt)("p",null,"If the component is simple enough that you don't need to provide any inputs, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderComponent")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('Renders a header', async () => {\n    const fixture = await renderComponent(UsersListComponent);\n    const header = fixture.nativeElement.querySelector('h1');\n\n    expect(header).not.toBeNull();\n    expect(header.textContent).toBe('Users List');\n});\n")),(0,i.kt)("p",null,"In the more common scenario that you need to provide inputs, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderTemplate")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('Renders a list of users', async () => {\n    const fixture = await renderTemplate(\n        UsersListComponent,\n        `<users-list ['Amy'](users]=\"['John',)\"></users-list>`,\n    );\n    const list = fixture.nativeElement.querySelector('ul');\n\n    expect(list).not.toBeNull();\n    expect(list.children).toHaveLength(2);\n    expect(list.children[   expect(list.children[1](0].textContent).toEqual('John');\n).textContent).toEqual('Amy');\n});\n")),(0,i.kt)("p",null,"You can also achieve the same result the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderWrapperComponent")," helper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"it('Renders a list of users', async () => {\n    const fixture = await renderWrapperComponent(\n        UsersListComponent,\n        'users-list',\n        { users: ['Amy']('John',) },\n    );\n    const list = fixture.nativeElement.querySelector('ul');\n\n    expect(list).not.toBeNull();\n    expect(list.children).toHaveLength(2);\n    expect(list.children[   expect(list.children[1](0].textContent).toEqual('John');\n).textContent).toEqual('Amy');\n});\n")),(0,i.kt)("h2",{id:"what-about-integration-tests"},"What about integration tests?"),(0,i.kt)("p",null,"Although this guide talks about unit tests, we don't follow the strict definition of a unit test (which is that a unit test should test a single unit in isolation)."),(0,i.kt)("p",null,'We often write tests where multiple files (or "units") are involved, and sometimes that can be desirable because it is closer to how the app will behave in production. Technically, those would be considered integration tests, but you can use the same principles and techniques introduced in this document.'),(0,i.kt)("p",null,"If you want to write even more realistic tests, that are actually running the complete application and interacting with it like a real user would, you should check out the ",(0,i.kt)("a",{parentName:"p",href:"./acceptance-testing"},"Acceptance testing for the Moodle App")," page."))}h.isMDXComponent=!0}}]);