webpackJsonp([33],{436:function(n,a,s){n.exports={basic:s(923)}},488:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n};a.getComponentLocale=function(n,a,s,e){var p={};if(a&&a.antLocale&&a.antLocale[s])p=a.antLocale[s];else{var o=e();p=o.default||o}var c=t({},p);n.locale&&(c=t({},c,n.locale),n.locale.lang&&(c.lang=t({},p.lang,n.locale.lang)));return c},a.getLocaleCode=function(n){var a=n.antLocale&&n.antLocale.locale;if(n.antLocale&&n.antLocale.exist&&!a)return"zh-cn";return a}},521:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a.default},637:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=r(s(0)),o=r(s(3)),c=s(696),l=r(s(521)),u=r(s(76)),i=s(488);function r(n){return n&&n.__esModule?n:{default:n}}function k(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var f=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onSubmit=function(n){n.preventDefault(),s.props.onSubmit&&s.props.onSubmit(s.state.value),s.inputRef.blur()},s.onChange=function(n){s.state.focus||s.setState({focus:!0});var a=n.target.value;"value"in s.props||s.setState({value:a}),s.props.onChange&&s.props.onChange(a)},s.onFocus=function(){s.setState({focus:!0}),s.firstFocus=!0,s.props.onFocus&&s.props.onFocus()},s.onBlur=function(){s.onBlurTimeout=setTimeout(function(){s.blurFromOnClear||document.activeElement!==s.inputRef&&s.setState({focus:!1}),s.blurFromOnClear=!1},50),s.props.onBlur&&s.props.onBlur()},s.onClear=function(){s.doClear()},s.doClear=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s.blurFromOnClear=n,"value"in s.props||s.setState({value:""}),s.props.onClear&&s.props.onClear(""),s.props.onChange&&s.props.onChange(""),n&&s.focus()},s.onCancel=function(){s.props.onCancel?s.props.onCancel(s.state.value):s.doClear(!1)},s.focus=function(){s.inputRef.focus()};var t=void 0;return t="value"in n?n.value||"":"defaultValue"in n?n.defaultValue:"",s.state={value:t,focus:!1},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),e(a,[{key:"componentDidMount",value:function(){var n=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=n["margin-left"],this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var n=this.syntheticPhContainerRef.getBoundingClientRect().width;this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1?(this.syntheticPhRef.style.width=Math.ceil(n)+"px",this.props.showCancelButton||(this.rightBtnRef.style.marginRight=0)):(this.syntheticPhRef.style.width="100%",this.props.showCancelButton||(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+parseInt(this.rightBtnInitMarginleft,10))+"px"))}},{key:"componentWillReceiveProps",value:function(n){"value"in n&&n.value!==this.state.value&&this.setState({value:n.value})}},{key:"componentWillUnmount",value:function(){this.onBlurTimeout&&(clearTimeout(this.onBlurTimeout),this.onBlurTimeout=null)}},{key:"render",value:function(){var n,a=this,e=this.props,c=e.prefixCls,r=e.showCancelButton,f=e.disabled,h=e.placeholder,g=e.className,d=e.style,m=e.maxLength,v=(0,i.getComponentLocale)(this.props,this.context,"SearchBar",function(){return s(697)}).cancelText,b=this.state,y=b.value,C=b.focus,w=(0,o.default)(c,g,k({},c+"-start",!!(C||y&&y.length>0))),B=(0,o.default)(c+"-clear",k({},c+"-clear-show",!!(C&&y&&y.length>0))),S=(0,o.default)(c+"-cancel",(k(n={},c+"-cancel-show",r||C||y&&y.length>0),k(n,c+"-cancel-anim",this.firstFocus),n));return p.default.createElement("form",{onSubmit:this.onSubmit,className:w,style:d,ref:function(n){return a.inputContainerRef=n},action:"#"},p.default.createElement("div",{className:c+"-input"},p.default.createElement("div",{className:c+"-synthetic-ph",ref:function(n){return a.syntheticPhRef=n}},p.default.createElement("span",{className:c+"-synthetic-ph-container",ref:function(n){return a.syntheticPhContainerRef=n}},p.default.createElement("i",{className:c+"-synthetic-ph-icon"}),p.default.createElement("span",{className:c+"-synthetic-ph-placeholder",style:{visibility:h&&!y?"visible":"hidden"}},h))),p.default.createElement("input",t({type:"search",className:c+"-value",value:y,disabled:f,placeholder:h,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(n){return a.inputRef=n},maxLength:m},(0,l.default)(this.props))),p.default.createElement(u.default,{activeClassName:c+"-clear-active"},p.default.createElement("a",{onClick:this.onClear,className:B}))),p.default.createElement("div",{className:S,onClick:this.onCancel,ref:function(n){return a.rightBtnRef=n}},this.props.cancelText||v))}}]),a}();a.default=f,f.defaultProps=c.defaultProps,n.exports=a.default},638:function(n,a,s){"use strict";s(29),s(698)},696:function(n,a,s){"use strict";function t(){}Object.defineProperty(a,"__esModule",{value:!0});a.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:t,onChange:t,onFocus:t,onBlur:t,onClear:t,showCancelButton:!1,disabled:!1}},697:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={cancelText:"\u53d6\u6d88"},n.exports=a.default},698:function(n,a){},923:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/search-bar/demo/basic.md",id:"components-search-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SearchBar<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SearchBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange<span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  clear <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token string">\'\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">maxLength</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>AutoFocus when enter page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>autoFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Focus by operation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807<span class="token punctuation">"</span></span>\n        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ref <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>manualFocusInst <span class="token operator">=</span> ref<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>click to focus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show cancel button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onSubmit\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClear</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">\'onClear\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onFocus</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onFocus\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onBlur</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onBlur\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">showCancelButton</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0);s(0);s(638);var a=m(s(637)).default;s(134);var t=m(s(135)).default;s(128);var e=m(s(129)).default;s(134);var p=m(s(135)).default;s(132);var o=m(s(133)).default;s(128);var c=m(s(129)).default;s(638);var l=m(s(637)).default;s(134);var u=m(s(135)).default;s(128);var i=m(s(129)).default;s(638);var r=m(s(637)).default;s(134);var k=m(s(135)).default;s(128);var f=m(s(129)).default;s(638);var h=m(s(637)).default;s(134);var g=m(s(135)).default,d=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}();function m(n){return n&&n.__esModule?n:{default:n}}function v(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var b=function(s){function m(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,m);for(var t=arguments.length,e=Array(t),p=0;p<t;p++)e[p]=arguments[p];return a=s=v(this,(n=m.__proto__||Object.getPrototypeOf(m)).call.apply(n,[this].concat(e))),s.state={value:"\u7f8e\u98df"},s.onChange=function(n){s.setState({value:n})},s.clear=function(){s.setState({value:""})},s.handleClick=function(){s.manualFocusInst.focus()},v(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(m,n.Component),d(m,[{key:"componentDidMount",value:function(){this.autoFocusInst.focus()}},{key:"render",value:function(){var s=this;return n.createElement("div",null,n.createElement(g,null,n.createElement("div",{className:"sub-title"},"Normal")),n.createElement(h,{placeholder:"Search",maxLength:8}),n.createElement(f,null),n.createElement(k,null,n.createElement("div",{className:"sub-title"},"AutoFocus when enter page")),n.createElement(r,{placeholder:"\u81ea\u52a8\u83b7\u53d6\u5149\u6807",ref:function(n){return s.autoFocusInst=n}}),n.createElement(i,null),n.createElement(u,null,n.createElement("div",{className:"sub-title"},"Focus by operation")),n.createElement(l,{placeholder:"\u624b\u52a8\u83b7\u53d6\u83b7\u53d6\u5149\u6807",ref:function(n){return s.manualFocusInst=n}}),n.createElement(c,null),n.createElement(p,null,n.createElement(o,{onClick:this.handleClick},"click to focus")),n.createElement(e,null),n.createElement(t,null,n.createElement("div",{className:"sub-title"},"Show cancel button")),n.createElement(a,{value:this.state.value,placeholder:"Search",onSubmit:function(n){return console.log(n,"onSubmit")},onClear:function(n){return console.log(n,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return console.log("onCancel")},showCancelButton:!0,onChange:this.onChange}))}}]),m}();return n.createElement(b,null)},style:".am-search {\n  border-bottom: 1px solid #ddd;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.am-search</span> </span><span class="token punctuation">{</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> <span class="token number">1</span>px solid <span class="token hexcode">#ddd</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});