(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(12),c=n.n(r),o=n(13),s=n(2),i=n.n(s),u=n(6),d=n(7),h=n(8),l=n(4),p=n(10),b=n(9),f=n(1),m=(n(19),n(5)),v=n.n(m),j=n(0),O=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.content,a=e.isChecked,r=e.onCheckChange,c=e.onDelete;return Object(j.jsxs)("div",{className:"todo__item-wrapper ".concat(a?"todo__item-wrapper--checked":""),children:[Object(j.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return r(t)}}),Object(j.jsx)("div",{className:"todo__item-cotent",children:n}),Object(j.jsx)("button",{className:"todo__delete-btn",onClick:function(){return c(t)},children:"x"})]})}}]),n}(a.Component);O.defaultProps={content:"",isChecked:!1,onCheckChange:function(){},onDelete:function(){}};v.a.string.isRequired,v.a.bool.isRequired,v.a.func.isRequired,v.a.func.isRequired;var x=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onItemCheckChange,a=e.onItemDelete;return Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsx)(O,{id:e.id,content:e.content,isChecked:e.isChecked,onCheckChange:n,onDelete:a},e.id)}))})}}]),n}(a.Component);x.defaultProps={todos:[],onItemCheckChange:function(){},onItemDelete:function(){}};var C=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.textValue,n=e.submitBtnText,a=e.onTextChange,r=e.onSubmit;return Object(j.jsxs)("form",{onSubmit:r,className:"searchbar",children:[Object(j.jsx)("input",{className:"searchbar__text-input",type:"text",value:t,onChange:a}),Object(j.jsx)("button",{type:"submit",className:"searchbar__submit-btn",children:n})]})}}]),n}(a.Component);C.defaultProps={textValue:"",submitBtnText:"add",onTextChange:function(){},onSubmit:function(){}};v.a.string.isRequired,v.a.string.isRequired,v.a.func.isRequired,v.a.func.isRequired;var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(t,n,a){var r,c=Object(f.a)({method:a.method,headers:e.headers,cache:"no-cache",credentials:"same-origin",headers:{"user-agent":"Mozilla/4.0 MDN Example","content-type":"application/json"},mode:"cors",redirect:"follow",referrer:"no-referrer"},e),o=(null===e||void 0===e||null===(r=e.headers)||void 0===r?void 0:r.method)||a.method;return["GET","DELETE"].includes(o)||(c.body=JSON.stringify(n)),window.fetch("".concat(e.baseUrl||"").concat(t),c).then(function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.status>299||n.status<200)){t.next=2;break}throw new Error("\u8bf7\u6c42\u9519\u8bef");case 2:return t.next=4,n.json();case 4:if(a=t.sent,"function"!==typeof e.afterResponse){t.next=9;break}return t.abrupt("return",e.afterResponse(a));case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())};return{get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t(e,null,Object(f.a)({method:"GET"},n))},post:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(e,n,Object(f.a)({method:"POST"},a))},delete:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t(e,null,Object(f.a)({method:"DELETE"},n))},patch:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(e,n,Object(f.a)({method:"PATCH"},a))}}}({baseUrl:"http://localhost:3001/api",afterResponse:function(e){return e.data}}),y={getAllItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return k.get("/items?".concat(e))},postNewItem:function(e){var t=e.content;return k.post("/items",{content:t})},deleteItemById:function(e){return k.delete("/items/".concat(e))},patchItemIsCompleted:function(e){var t=e.id,n=e.isCompleted;return k.patch("/items/".concat(t,"/isCompleted"),{isCompleted:n})}},I=0,g=1,S=function(e){return e.reduce((function(e,t){return e.todos.push(t.id),e.todosById[t.id]=Object(f.a)(Object(f.a)({},t),{},{isChecked:t.isCompleted}),e}),{todos:[],todosById:{}})},w=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleOnTextChange=a.handleOnTextChange.bind(Object(l.a)(a)),a.handleOnSubmit=a.handleOnSubmit.bind(Object(l.a)(a)),a.handleOnItemDelete=a.handleOnItemDelete.bind(Object(l.a)(a)),a.handleOnItemCheckChange=a.handleOnItemCheckChange.bind(Object(l.a)(a)),a.getAllItemsFromServers=a.getAllItemsFromServers.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.searchByContent=a.searchByContent.bind(Object(l.a)(a)),a.handleSwitchInputModeBtnClick=a.handleSwitchInputModeBtnClick.bind(Object(l.a)(a)),a.state=function(){var e=localStorage.getItem("state");try{return JSON.parse(e)}catch(t){return void console.log(t)}}()||{todos:[],todosById:{},textValue:"",filteredResult:[],inputMode:I},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getAllItemsFromServers()}},{key:"componentDidUpdate",value:function(e,t){this.state!==t&&(!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(this.state),this.state.inputMode!==t.inputMode&&t.inputMode===g&&this.setState({filteredResult:[]}))}},{key:"getAllItemsFromServers",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getAllItems();case 3:t=e.sent,n=S(t),this.setState(Object(f.a)({},n)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSwitchInputModeBtnClick",value:function(){var e=this.state.inputMode;this.setState({inputMode:e===I?g:I})}},{key:"handleOnTextChange",value:function(e){this.setState({textValue:e.target.value})}},{key:"addItem",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.textValue,a=t.todos,r=t.todosById,e.prev=1,e.next=4,y.postNewItem({content:n});case 4:c=e.sent,this.setState({todos:[c.id].concat(Object(o.a)(a)),todosById:Object(f.a)(Object(f.a)({},r),{},{[c.id]:Object(f.a)(Object(f.a)({},c),{},{isChecked:c.isCompleted})}),textValue:""}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"searchByContent",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.textValue,a=t.todosById,e.prev=1,e.next=4,y.getAllItems("keyword=".concat(n));case 4:r=e.sent,c=S(r),this.setState({filteredResult:c.todos,todosById:Object(f.a)(Object(f.a)({},a),c.todosById),textValue:""}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleOnSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=this.state,a=n.textValue,r=n.inputMode,a){e.next=5;break}return this.setState({textValue:""}),e.abrupt("return",void 0);case 5:r===I?this.addItem():this.searchByContent();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleOnItemDelete",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state,a=n.todosById,r=n.todos,c=n.filteredResult,e.prev=1,e.next=4,y.deleteItemById(t);case 4:delete(o=Object(f.a)({},a))[t],this.setState({todos:r.filter((function(e){return e!==t})),todosById:o,filteredResult:c.filter((function(e){return e!==t}))}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleOnItemCheckChange",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.todosById,a=Object(f.a)({},n),r=a[t],c=a[t].isChecked,e.prev=4,e.next=7,y.patchItemIsCompleted({id:t,isCompleted:!c});case 7:r.isChecked=!c,this.setState({todosById:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.textValue,n=e.todos,a=e.filteredResult,r=e.inputMode,c=e.todosById,o=r===I?"add":"search",s=this.handleOnTextChange,i=this.handleOnSubmit,u=this.handleOnItemDelete,d=this.handleOnItemCheckChange,h=this.handleSwitchInputModeBtnClick,l=(r===I?n:a).map((function(e){return c[e]}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"page-header",children:[Object(j.jsx)("div",{className:"page-title",children:"Todo"}),Object(j.jsx)("button",{className:"header__switch-input-mode-btn",onClick:h,children:Object(j.jsx)("span",{role:"img","aria-label":"search",children:r===I?"\ud83d\udd0d":"\u2795"})})]}),Object(j.jsx)(C,{textValue:t,onSubmit:i,submitBtnText:o,onTextChange:s}),Object(j.jsx)(x,{todos:l,onItemCheckChange:d,onItemDelete:u})]})}}]),n}(a.Component),B=document.getElementById("root");c.a.render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(w,{})}),B)}},[[23,1,2]]]);
//# sourceMappingURL=main.0a4621a1.chunk.js.map