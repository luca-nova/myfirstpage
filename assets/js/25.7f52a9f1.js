(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{401:function(e,t,a){"use strict";a.r(t);var s=a(4),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dexa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dexa"}},[e._v("#")]),e._v(" dexa")]),e._v(" "),a("p",[e._v("A CLI tool that allows developers and teams to capture their preferred tech stacks as a project template and a set of code generators.")]),e._v(" "),a("p",[e._v("Each of these stacks is captured as a git repository. Create them in a publicly available service such as Github to encourage usage and sharing across the wider community. But you are also free to use dexa with private repositories.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("You can install it from "),a("a",{attrs:{href:"https://www.npmjs.com/package/dexa",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g dexa\n")])])]),a("p",[e._v("See the official documentation at "),a("a",{attrs:{href:"https://github.com/kaizendorks/dexa#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kaizendorks/dexa#readme"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"how-can-dexa-help-you"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-dexa-help-you"}},[e._v("#")]),e._v(" How can dexa help you?")]),e._v(" "),a("p",[e._v("Imagine you work in a team that frequently creates web applications with Vue3 and fastify. Over time you will develop an opinionated way of setting these up, which you can capture as a project template in a git repo. With dexa you can "),a("code",[e._v("dx stack add")]),e._v(" your repo as a "),a("em",[e._v("stack")]),e._v(", so you can later create projects with "),a("code",[e._v("dx init my-vue-fastify-template")]),e._v(".")]),e._v(" "),a("p",[e._v("You might sometimes use docker, you can then expand your stack repo with another template that adds docker and compose files so you can "),a("code",[e._v("dx add docker")]),e._v(". In some projects you might use postgre while in others you might use mongoDB, you can then capture 2 further templates that allow you to "),a("code",[e._v("dx add postgre")]),e._v(" or "),a("code",[e._v("dx add mongo")]),e._v(" to your project.")]),e._v(" "),a("p",[e._v("You will likely find yourself regularly creating elements like pages or apis when creating these applications. Dexa can also help you by expanding your "),a("em",[e._v("stack")]),e._v(" with template generators so you can "),a("code",[e._v("dx generate page new-page")]),e._v(" or "),a("code",[e._v("dx generate api new-api")]),e._v("!")]),e._v(" "),a("p",[e._v("In summary, you can capture your "),a("em",[e._v("stack")]),e._v(" as a git repository structured as a project template and optionally additional code generators, following a structure like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/stack-root\n|__ /init\n|   |__ fileA // can be any extension (and copied as is) or `.hbs` (a handlebars dynamic template)\n|   |__ /some/folder/fileB\n|   |__ ... more template files and folders\n|__ /add\n|   |__ /docker\n|   |   |__ ... template files. They are copied/generated as if this was the project root\n|   |__ /postgre\n|   |   |__ ...\n|   |__ /mongo\n|       |__ ...\n|__ /generate\n|   |__ /api\n|   |   |__ ...\n|   |__ /page\n|       |__ ...\n|__ dexa.js // optional file, defines additional metadata/options/arguments for each template\n")])])]),a("p",[e._v("Once the stack is defined in a git repo:")]),e._v(" "),a("ul",[a("li",[e._v("Install the stack using "),a("code",[e._v("dx stack add")]),e._v(" as in"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dx stack "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" git@github.com:DaniJG/my-stack.git\n")])])])]),e._v(" "),a("li",[e._v("Create new projects using the stack as the project template with the "),a("code",[e._v("dx init")]),e._v(" command, as in"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dx init my-stack my-project\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# project generated in ./my-project !")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Add features to a generated project with the "),a("code",[e._v("dx add")]),e._v(" commands, as in"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dx "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# dockerfile and compose files added to the project!")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("Generate code with the "),a("code",[e._v("dx generate")]),e._v(" commands, as in"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("dx generate page my-new-page\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# new Vue components and route added to the project!")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"is-it-limited-to-javascript-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-it-limited-to-javascript-projects"}},[e._v("#")]),e._v(" Is it limited to JavaScript projects?")]),e._v(" "),a("p",[e._v("Absolutely not! While dexa is written in JavaScript, you can define stack templates for any language. In a nutshell, dexa will render the templates you define, what those templates contain is entirely up to you.")]),e._v(" "),a("p",[e._v("For example, you could create a terraform stack so you can "),a("code",[e._v("dx init terraform")]),e._v(". This stack could define features such as S3 or azure blob remote storage so you can "),a("code",[e._v("dx add remote-aws-s3")]),e._v(" or "),a("code",[e._v("dx add remote-azure-blob")]),e._v(". In a similar fashion, you could then create generators for any common terraform modules you typically use, allowing you to "),a("code",[e._v("dx generate s3-bucket")]),e._v(" or "),a("code",[e._v("dx generate aws-kubernetes")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"can-i-use-a-project-template-without-generators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-a-project-template-without-generators"}},[e._v("#")]),e._v(" Can I use a project template without generators?")]),e._v(" "),a("p",[e._v("You can define a stack by pointing to a repo that contains just a project template like this "),a("a",{attrs:{href:"https://github.com/web2033/vite-vue3-tailwind-starter",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-vite-tailwind"),a("OutboundLink")],1),e._v(" starter")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dx stack add vue-vite https://github.com/web2033/vite-vue3-tailwind-starter\n")])])]),a("p",[e._v("You will be able to create new projects using that template as in "),a("code",[e._v("dx init vue-vite")]),e._v(", but here will be no "),a("code",[e._v("dx add")]),e._v(" or "),a("code",[e._v("dx generate")]),e._v(" commands available for those generated projects.")]),e._v(" "),a("p",[e._v("This is similar to using "),a("a",{attrs:{href:"https://github.com/Rich-Harris/degit",target:"_blank",rel:"noopener noreferrer"}},[e._v("degit"),a("OutboundLink")],1),e._v(", except you can keep track of these templates as dexa stacks.")]),e._v(" "),a("h2",{attrs:{id:"source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" Source")]),e._v(" "),a("p",[e._v("Check it on GitHub:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kaizendorks/dexa",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://gh-card.dev/repos/kaizendorks/dexa.svg?fullname=",alt:"kaizendorks/dexa - GitHub"}}),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);