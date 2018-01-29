webpackJsonp([54],{1123:function(n,t){n.exports={content:["article",["p",["code","antd-mobile"]," is the React implementation of the ",["a",{title:null,href:"http://ant.design"},"Ant Design"],"'s mobile specification, serving the ant and koubei wireless service."],["div",{class:"pic-plus"},["img",{width:"160",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pic-plus {\n  margin: 40px 0;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 40px;\n}\n"],["h2","Features and Advantages"],["ul",["li",["p","The UI is fully Configurable and Scalable, easily adapt to all kinds of product style."]],["li",["p","Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes."]],["li",["p",'Provide "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.']],["li",["p","Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development."]],["li",["p","Fully compatible with react / preact."]]],["h2","Applicable Scenes"],["ul",["li",["p","Medium-sized and large-scale applications."]],["li",["p","Multi-terminal applications based on react / preact / react-native."]],["li",["p","Custom UI-style applications."]]],["h2","Getting Started"],["blockquote",["p","Before delving into Ant Design React, a good knowledge of ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"]," is needed."],["p","Make sure that you had installed ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"],"(> v4.x) correctly."]],["h3","1. Create a New Project"],["p","Can be an existing project, or a newly created empty project with ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," / create-react(-native)-app, you can also copy and modify from the official example ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web"},"scaffolding"],"."],["blockquote",["p","More official ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples"},"examples"],".\nAlso, you can use any ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"scaffold"]," available in React ecosystem."]],["h3","2. Installation"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd-mobile --save'},["code","$ npm install antd-mobile --save"]],["h3","3. Usage"],["h4","Web usage"],["p","Entry html page settings:"],["blockquote",["p","Add ",["a",{title:null,href:"https://github.com/ftlabs/fastclick"},"FastClick"]," and set the html ",["code","meta"]," (more ref ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/576"},"#576"],")"],["p","Use Promise fallback support (some Android phones do not support Promise)"]],["pre",{lang:"html",highlighted:'<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n  <span class="token comment" spellcheck="true">&lt;!-- set `maximum-scale` for some compatibility issues --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width, initial-scale<span class="token punctuation">=</span>1, maximum-scale<span class="token punctuation">=</span>1, minimum-scale<span class="token punctuation">=</span>1, user-scalable<span class="token punctuation">=</span>no<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n    if (\'addEventListener\' in document) {\n      document.addEventListener(\'DOMContentLoaded\', function() {\n        FastClick.attach(document.body);\n      }, false);\n    }\n    if(!window.Promise) {\n      document.writeln(\'&lt;script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"\'+\'>\'+\'&lt;\'+\'/\'+\'script>\');\n    }\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>'},["code","<!DOCTYPE html>\n<html>\n<head>\n  \x3c!-- set `maximum-scale` for some compatibility issues --\x3e\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\" />\n  <script src=\"https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js\"><\/script>\n  <script>\n    if ('addEventListener' in document) {\n      document.addEventListener('DOMContentLoaded', function() {\n        FastClick.attach(document.body);\n      }, false);\n    }\n    if(!window.Promise) {\n      document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n    }\n  <\/script>\n</head>\n<body></body>\n</html>"]],["p","Example of usage:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd-mobile';\nReactDOM.render(<Button>Start</Button>, mountNode);"]],["p","And import stylesheets manually:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'antd-mobile/dist/antd-mobile.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'antd-mobile/dist/antd-mobile.less\'</span>'},["code","import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'"]],["h5","Use modularized antd-mobile"],["p",["strong","Note: Strongly recommended."]],["p","The following two ways used to load the ",["strong","only components you used"],", select one of the ways you like."],["ul",["li",["p","Use ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," (Recommended)"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// `style: true` for less</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { "libraryName": "antd-mobile", "style": "css" }] // `style: true` for less\n  ]\n}']],["p"," This allows you to import components from antd-mobile without having to manually import the corresponding stylesheet. The babel plugin will automatically import stylesheets."],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>'},["code","// import js and css modularly, parsed by babel-plugin-import\nimport { DatePicker } from 'antd-mobile';"]]],["li",["p","Manually import"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// for js</span>\n<span class="token keyword">import</span> <span class="token string">\'antd-mobile/lib/date-picker/style/css\'</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// for css</span>\n<span class="token comment" spellcheck="true">// import \'antd-mobile/lib/date-picker/style\';         // that will import less</span>'},["code","import DatePicker from 'antd-mobile/lib/date-picker';  // for js\nimport 'antd-mobile/lib/date-picker/style/css';        // for css\n// import 'antd-mobile/lib/date-picker/style';         // that will import less"]]]],["h5","More enhanced (optional):"],["blockquote",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/theme-config.en-US.md"},"Custom theme"],".\nYour custom UI library based on antd-mobile: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui"},"web-custom-ui"]," / ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro"},"web-custom-ui-pro"]]],["h4","React-Native usage"],["blockquote",["p","Note: ",["code","Menu"],"/",["code","NavBar"],"/",["code","Range"]," does not have React-Native implementation."]],["p","Example of usage:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/button\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">HelloWorldApp</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Start<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nAppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span><span class="token string">\'HelloWorldApp\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> HelloWorldApp<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport { AppRegistry } from 'react-native';\nimport Button from 'antd-mobile/lib/button';\n\nclass HelloWorldApp extends Component {\n  render() {\n    return <Button>Start</Button>;\n  }\n}\n\nAppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);"]],["h5","Use modularized antd-mobile"],["p","The following two ways used to load the ",["strong","only components you used"],", select one of the ways you like."],["ul",["li",["p","Use ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," (Recommended)"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> libraryName<span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// The difference with the Web platform is that you do not need to set the style</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { libraryName: "antd-mobile" }] // The difference with the Web platform is that you do not need to set the style\n  ]\n}']],["p"," Then just change the way of import modules from antd-mobile."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd-mobile';"]]],["li",["p","Manually import"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd-mobile/lib/button\'</span><span class="token punctuation">;</span>'},["code","import Button from 'antd-mobile/lib/button';"]]]],["h5","More enhanced (optional):"],["blockquote",["p",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui"},"Custom theme and single component style"]]],["h2","Version"],["ul",["li",["p","Stable: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","Next: ",["a",{title:null,href:"http://npmjs.com/package/antd-mobile"},["img",{title:null,src:"https://img.shields.io/npm/v/antd-mobile/next.svg",alt:"npm package"}]]]]],["h2","Size"],["ul",["li",["p","Components are loaded on demand, in other words, components that are not imported are not packed."]],["li",["p",["a",{href:"https://ant-design.github.io/ant-design-analysis/",target:"_blank"},"The size and dependency analysis"]," of `./dist/antd-mobile.min.js`"]]],["h2","Environment Support"],["ul",["li",["p",["code","iOS"]]],["li",["p",["code","Android 4.0+"]]]],["h2","Links"],["ul",["li",["p",["a",{title:null,href:"https://mobile.ant.design/"},"Home Page"]]],["li",["p",["a",{title:null,href:"http://github.com/ant-design/ant-design-mobile/blob/master/development.en-US.md"},"Developer Instruction"]]],["li",["p",["a",{title:null,href:"http://github.com/react-component"},"React components"]]]],["h2","Companies using antd-mobile"],["ul",["li",["p",["a",{title:null,href:"http://www.antgroup.com/index.htm?locale=en_US"},"Ant Financial"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"Alibaba"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"Koubei"]]]],["h2","Contributing"],["p","Please read our ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING.md"]," first."],["p","If you'd like to help us improve antd-mobile, just create a ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pulls"},"Pull Request"],". Feel free to report bugs and issues ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/new"},"here"],"."],["blockquote",["p","If you're new to posting issues, we ask that you read ",["a",{title:null,href:"http://www.catb.org/~esr/faqs/smart-questions.html"},["em","How To Ask Questions The Smart Way"]]," and ",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"How to Ask a Question in Open Source Community"]," and ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/~sgtatham/bugs.html"},"How to Report Bugs Effectively"]," prior to posting. Well written bug reports help us help you!"]],["h2","Need Help?"],["p","For questions on how to use antd, please post questions to ",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"stackoverflow"]," using the ",["code","antd"],"/",["code","antd-mobile"]," tag. If you're not finding what you need on stackoverflow, you can find us on ",["a",{title:null,href:"https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},"gitter"]," as well."],["p","As always, we encourage experienced users to help those who are not familiar with ",["code","antd"],"!"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"Stack Overflow"]]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},"Segment Fault"]]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]]]]]],meta:{order:0,title:"Ant Design Mobile of React",filename:"docs/react/introduce.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Features-and-Advantages",title:"Features and Advantages"},"Features and Advantages"]],["li",["a",{className:"bisheng-toc-h2",href:"#Applicable-Scenes",title:"Applicable Scenes"},"Applicable Scenes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Getting-Started",title:"Getting Started"},"Getting Started"]],["li",["a",{className:"bisheng-toc-h2",href:"#Version",title:"Version"},"Version"]],["li",["a",{className:"bisheng-toc-h2",href:"#Size",title:"Size"},"Size"]],["li",["a",{className:"bisheng-toc-h2",href:"#Environment-Support",title:"Environment Support"},"Environment Support"]],["li",["a",{className:"bisheng-toc-h2",href:"#Links",title:"Links"},"Links"]],["li",["a",{className:"bisheng-toc-h2",href:"#Companies-using-antd-mobile",title:"Companies using antd-mobile"},"Companies using antd-mobile"]],["li",["a",{className:"bisheng-toc-h2",href:"#Contributing",title:"Contributing"},"Contributing"]],["li",["a",{className:"bisheng-toc-h2",href:"#Need-Help?",title:"Need Help?"},"Need Help?"]]]}}});