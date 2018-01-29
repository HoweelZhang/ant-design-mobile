webpackJsonp([48],{1129:function(e,t){e.exports={content:["article",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," (Web project) / ",["a",{title:null,href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"],"(React Native project) is one of best React application development tool, we are going to use ",["code","antd-mobile"]," within it."],["h2","Web project"],["h3","Install and Initialization"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\n\n<span class="token comment" spellcheck="true"># Note: The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.</span>\n$ create-react-app my-app\n\n$ <span class="token function">cd</span> my-app\n$ <span class="token function">npm</span> start'},["code","$ npm install -g create-react-app\n\n# Note: The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.\n$ create-react-app my-app\n\n$ cd my-app\n$ npm start"]],["p","Then open ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," to see your app."],["h3","Integrate antd-mobile"],["p","First reference ",["a",{title:null,href:"/docs/react/introduce#3.-Usage"},"entry html page settings"],", configure your project's html page."],["h4","Use modularized antd-mobile"],["ul",["li",["p","Import ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," and modify the ",["code","scripts"]," field in package.json."]]],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> react-app-rewired --save-dev'},["code","$ npm install react-app-rewired --save-dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom",\n}']],["ul",["li",["p","Then create a ",["code","config-overrides.js"]," at root directory of your project for futher overriding."]]],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["ul",["li",["p","Use babel-plugin-import, ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is a babel plugin for importing components on demand\uff08",["a",{title:null,href:"https://ant.design/docs/react/getting-started#Import-on-Demand"},"How does it work?"],"\uff09\uff0cWe are now trying to install it and modify config-overrides.js."]]],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import --save-dev'},["code","npm install babel-plugin-import --save-dev"]],["pre",{lang:"diff",highlighted:"<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);</span>\n    return config;\n  };"},["code","+ const { injectBabelPlugin } = require('react-app-rewired');\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);\n    return config;\n  };"]],["ul",["li",["p","change importation like below:"]]],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import Button from 'antd-mobile/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd-mobile';</span>"},["code","- import Button from 'antd-mobile/lib/button';\n+ import { Button } from 'antd-mobile';"]],["h3","Complete example"],["p","Include ",["code","css-modules"]," and ",["code","customized theme"]," ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app"},"antd-mobile-sample/create-react-app"]],["h2","React Native project"],["p","The complete procedure please check the document here: ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app"},"antd-mobile-sample/create-react-native-app"]],["blockquote",["p","Note: a method of rewriting part of a single component can be found (1.x): ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831"},"ant-design-mobile/issues/1174"],"\uff0c(2.x): ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pull/1629"},"ant-design-mobile/pull/1629"]]]],meta:{order:3,title:"Use in create-react(-native)-app",filename:"docs/react/use-with-create-react-app.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Web-project",title:"Web project"},"Web project"]],["li",["a",{className:"bisheng-toc-h2",href:"#React-Native-project",title:"React Native project"},"React Native project"]]]}}});