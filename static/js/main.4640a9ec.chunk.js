(this.webpackJsonpfoxford=this.webpackJsonpfoxford||[]).push([[0],{151:function(e,t,n){e.exports=n(237)},169:function(e,t,n){},170:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),l=n.n(c),o=n(43),u=n(42),s=n(120),i=n(147),m=n(47),d=n(61),b=Object(d.createAction)("employees/fetchEmployees")(),f=Object(d.createAction)("employees/toggleLoading")(),p=Object(d.createAction)("employees/toggleError")(),O=Object(d.createAction)("employees/setData")(),j=Object(d.createReducer)({loading:!1,error:!1,order:[],itemById:{}}).handleAction(f,(function(e,t){var n=t.payload;return Object(m.a)({},e,{loading:n})})).handleAction(p,(function(e,t){var n=t.payload;return Object(m.a)({},e,{error:n})})).handleAction(O,(function(e,t){var n=t.payload.results;return Object(m.a)({},e,{order:n.map((function(e){return e.login.uuid})),itemById:n.reduce((function(e,t){var n=t.name,r=n.first,a=n.last,c=t.login.uuid,l=t.dob.age;return e[c]={name:r,surname:a,id:c,age:l},e}),{})})})),_=Object(u.combineReducers)({employees:j}),g=n(28),E=n.n(g),v=n(50),h=n(48),y=n(121),x=function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("https://randomuser.me/api","?inc=dob,name,login&results=50")).json();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=E.a.mark(w),N=E.a.mark(I);function w(e){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.b)(p(!1));case 3:return e.next=5,Object(v.b)(f(!0));case 5:return e.next=7,Object(v.a)(x);case 7:return t=e.sent,e.next=10,Object(v.b)(O(t));case 10:return e.next=12,Object(v.b)(f(!1));case 12:e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(0),e.next=18,Object(v.b)(f(!1));case 18:return e.next=20,Object(v.b)(p(!0));case 20:case"end":return e.stop()}}),k,null,[[0,14]])}function I(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(b,w);case 2:case"end":return e.stop()}}),N)}var A=n(37),D=n(240),S=n(239),B=n(242),T=n(98),C=n(238),J=function(e){return e.employees},M=Object(A.a)(J,(function(e){return e.itemById})),R=Object(A.a)(J,(function(e){return e.order})),L=Object(A.a)(J,(function(e){return e.loading})),P=Object(A.a)(J,(function(e){return e.error})),U=n(64),W=n(73),q=[{title:"\u0418\u043c\u044f",dataIndex:"name"},{title:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",dataIndex:"surname"},{title:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",dataIndex:"age"}],z=n(241),F=n(2),G=n.n(F),H=n(95),K=r.memo((function(e){var t=e.children,n=e.className,a=Object(H.a)(e,["children","className"]);return r.createElement("td",Object.assign({className:G()("table__cell",n)},a),t)})),Q=r.memo((function(e){var t=e.children,n=e.className,a=Object(H.a)(e,["children","className"]);return r.createElement("tr",Object.assign({className:G()("table__row",n)},a),t)})),V=function(e){var t=e.columnsOrder,n=e.indetermined,a=e.checked;return r.createElement(Q,null,r.createElement(K,{className:G()("table__cell_sticky_top","table__cell_heading")},r.createElement(z.a,{indeterminate:n,checked:a,name:"every","data-row-id":"every"})),t.map((function(e){var t=e.title,n=e.dataIndex;return r.createElement(K,{key:n,scope:"col",className:G()("table__cell_sticky_top","table__cell_heading")},t)})))},X=Object(A.b)({rowData:Object(A.a)(M,(function(e,t){return t.rowId}),(function(e,t){return e[t]}))}),Y=Object(o.b)((function(){return X}))((function(e){var t=e.columnsOrder,n=e.rowData,a=e.checked;return r.createElement(Q,{className:G()({table__row_selected:a})},r.createElement(K,null,r.createElement(z.a,{checked:a,name:n.id,"data-row-id":n.id})),t.map((function(e){var t=e.dataIndex;return r.createElement(K,{key:t},n[t])})))})),Z=Object(A.b)({selectedNames:Object(A.a)(M,(function(e,t){return t.selected}),(function(e,t){return t.map((function(t){var n;return null===(n=e[t])||void 0===n?void 0:n.name})).filter(Boolean)}))}),$=Object(o.b)(Z)((function(e){var t=e.colSpan,n=e.selectedNames;return r.createElement(Q,null,r.createElement(K,{className:G()("table__cell_summary","table__cell_sticky_bottom")},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438:"),r.createElement(K,{className:G()("table__cell_summary","table__cell_sticky_bottom"),colSpan:t},n.join(", ")||"\u2267\u2609_\u2609\u2266"))})),ee=(n(169),Object(A.b)({columnsOrder:function(){return q},rowsOrder:R})),te=Object(o.b)(ee)((function(e){var t=e.columnsOrder,n=e.rowsOrder,a=r.useState([]),c=Object(W.a)(a,2),l=c[0],o=c[1],u=function(){o(l.length!==n.length?Object(U.a)(n):[])},s=function(e){var t=l.indexOf(e);if(-1!==t){var n=Object(U.a)(l);return n.splice(t,1),o(n)}o([].concat(Object(U.a)(l),[e]))};return r.createElement("table",{className:"table",onClick:function(e){var t=e.target,n=t.tagName,r=t.dataset;if("INPUT"===n){var a=r.rowId;return"every"===a?u():s(a)}}},r.createElement("thead",null,r.createElement(V,{indetermined:0!==l.length&&l.length!==n.length,checked:l.length===n.length,columnsOrder:t})),r.createElement("tbody",null,n.map((function(e){return r.createElement(Y,{key:e,rowId:e,columnsOrder:t,checked:l.includes(e)})}))),r.createElement("tfoot",null,r.createElement($,{colSpan:t.length,selected:l})))})),ne=(n(170),D.a.Text),re=Object(A.b)({loading:L,error:P}),ae={getData:b},ce=Object(o.b)(re,ae)((function(e){var t=e.loading,n=e.error,a=e.getData;return r.useEffect((function(){a()}),[a]),r.createElement("main",{className:"page"},r.createElement(S.a,{className:"page__header",title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432"}),r.createElement("section",{className:"page__table"},n&&r.createElement(B.a,{status:"error",title:"\u041c\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432",subTitle:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435",extra:[r.createElement(T.a,{key:"retry",onClick:a},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437")]}),t&&r.createElement("div",{className:"page__loading"},r.createElement("div",{className:"page__message"},r.createElement(ne,null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f"),r.createElement("br",null),r.createElement(ne,{type:"secondary"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0441\u043f\u043e\u043a\u043e\u0439\u0441\u0442\u0432\u0438\u0435 (\u1d54\u1d25\u1d54)")),r.createElement(C.a,null)),!t&&!n&&r.createElement(te,null)))})),le=function(){var e=Object(i.a)(),t=Object(s.composeWithDevTools)({}),n=Object(u.createStore)(_,t(Object(u.applyMiddleware)(e)));return e.run(I),n,n}(),oe=function(){return r.createElement(o.a,{store:le},r.createElement(ce,null))};n(235),n(236);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(oe,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.4640a9ec.chunk.js.map