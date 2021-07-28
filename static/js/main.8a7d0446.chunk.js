(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={container:"Container_container__108xP"}},14:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3Jv27"}},2:function(t,e,n){t.exports={Form:"ContactForm_Form__3GpzB",Label:"ContactForm_Label__3o9o1",LabelText:"ContactForm_LabelText__1wzCC",Input:"ContactForm_Input__1uYY6",Button:"ContactForm_Button__1bLfS"}},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),l=n(15),i=n(3);var s=n(13),u=n.n(s),b=n(0),m=function(t){var e=t.children;return Object(b.jsx)("div",{className:u.a.container,children:e})},d=function(t){var e=t.children;return Object(b.jsx)(m,{children:e})},j=n(5),h=n.n(j),f=n(2),p=n.n(f);function O(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],d=h.a.generate(),j=h.a.generate(),f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},O=function(){o(""),m("")};return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,u),!r&&u||r&&!u||O()},className:p.a.Form,children:[Object(b.jsxs)("label",{htmlFor:d,className:p.a.Label,children:[Object(b.jsx)("span",{className:p.a.LabelText,children:"Name"}),Object(b.jsx)("input",{id:d,type:"text",name:"name",value:r,onChange:f,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",maxLength:"40",className:p.a.Input})]}),Object(b.jsxs)("label",{htmlFor:j,className:p.a.Label,children:[Object(b.jsx)("span",{className:p.a.LabelText,children:"Number"}),Object(b.jsx)("input",{id:j,type:"tel",name:"number",value:u,onChange:f,placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",maxLength:"18",className:p.a.Input})]}),Object(b.jsx)("button",{type:"submit",className:p.a.Button,children:"Add contact"})]})}var x=n(9),_=n.n(x),C=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:_.a.Label,children:[Object(b.jsx)("span",{className:_.a.LabelText,children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",name:"name",value:e,onChange:n,placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:_.a.Input})]})},v=n(11),g=n(16),N=n(14),L=n.n(N),y=["children","onDeleteContact"],w=function(t){var e=t.children,n=t.onDeleteContact,a=Object(g.a)(t,y);return Object(b.jsx)("button",Object(v.a)(Object(v.a)({type:"button",className:L.a.IconButton,onClick:n},a),{},{children:e}))};w.defaultProps={onDeleteContact:function(){return null},children:null};var I,F,B=w,S=["title","titleId"];function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function k(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function z(t,e){var n=t.title,c=t.titleId,r=k(t,S);return a.createElement("svg",D({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,I||(I=a.createElement("style",null)),F||(F=a.createElement("g",{id:"icons"},a.createElement("path",{d:"M6.2 3.5L3.5 6.2c-.7.7-.7 1.9 0 2.7l9.2 9.2-9.2 9.2c-.7.7-.7 1.9 0 2.7l2.6 2.6c.7.7 1.9.7 2.7 0l9.2-9.2 9.2 9.2c.7.7 1.9.7 2.7 0l2.6-2.6c.7-.7.7-1.9 0-2.7L23.3 18l9.2-9.2c.7-.7.7-1.9 0-2.7l-2.6-2.6c-.7-.7-1.9-.7-2.7 0L18 12.7 8.8 3.5c-.7-.7-1.9-.7-2.6 0z",id:"close_1_"}))))}var A=a.forwardRef(z),E=(n.p,n(6)),T=n.n(E),J=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return Object(b.jsxs)("li",{className:T.a.ContactItem,children:[Object(b.jsxs)("p",{className:T.a.Contact,children:[Object(b.jsxs)("span",{className:T.a.ContactName,children:[e,":"]})," ",n]}),Object(b.jsx)(B,{onDeleteContact:a,"aria-label":"Delete contact",children:Object(b.jsx)(A,{width:15,height:15})})]})},P=function(t){var e=t.contacts,n=t.onDeleteContact;return 0===e.length?null:Object(b.jsx)("ul",{className:T.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsx)(J,{name:a,number:c,onDeleteContact:function(){return n(e)}},e)}))})};n(30);function Z(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,o]}("contacts",[]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],u=o[1];return Object(b.jsxs)(d,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(O,{onSubmit:function(t,e){var a={id:h.a.generate(),name:t,number:e};n.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):n.find((function(t){return t.number===e}))?alert("Number ".concat(e," is already in contacts")):t&&""!==t.trim()||e&&""!==e.trim()?t&&""!==t.trim()?e&&""!==e.trim()?c((function(t){return[a].concat(Object(l.a)(t))})):alert('Field "Number" is empty'):alert('Field "Name" is empty'):alert('Fill in the fields "Name" and "Number"')}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(C,{value:s,onChange:function(t){u(t.target.value)}}),0===n.length?Object(b.jsx)("p",{children:"There are no contacts in the list"}):Object(b.jsx)(P,{contacts:function(){var t=s.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}().sort((function(t,e){var n=t.name.toUpperCase(),a=e.name.toUpperCase();return n<a?-1:n>a?1:0})),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}n(31),n(32);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3Pi8n",ContactItem:"ContactList_ContactItem__3BxOU",Contact:"ContactList_Contact__3u_No",ContactName:"ContactList_ContactName__bWs4K",Button:"ContactList_Button__3qi8_"}},9:function(t,e,n){t.exports={Label:"Filter_Label__2xDNT",LabelText:"Filter_LabelText__1eo0j",Input:"Filter_Input__ws18D"}}},[[33,1,2]]]);
//# sourceMappingURL=main.8a7d0446.chunk.js.map