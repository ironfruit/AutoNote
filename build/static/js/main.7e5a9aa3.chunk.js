(this.webpackJsonpautonote=this.webpackJsonpautonote||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),a=n.n(c),l=n(3),d=n.n(l);n(9),n(10);var r=function(){return Object(o.jsx)("div",{className:"AppHeader",children:Object(o.jsx)("h1",{children:"AutoNote"})})};var i=function(e){console.log("Who Prevent Default"),13===e.charCode&&e.preventDefault()},s=function(e){console.log("Note Prevent Default"),console.log(e),13!==e.charCode||e.shiftKey||(e.preventDefault(),p())},u=function(e){var t=document.getElementById("templateselector"),n=document.getElementById("autonote_ta_note"),o=function(e){e.selectedIndex=0};"Printer"===t.value&&(n.value="PRINTER: \n\nBRAND: \nMODEL: \n\nIP   : \n\nISSUE: \n\nRESOLUTION: ",console.log(t),o(t),m("Printer")),"Scanner"===t.value&&(n.value="SCANNER: \n\nBRAND: \nMODEL: \n\nISSUE: \n\nRESOLUTION: ",console.log(t),o(t),m("Scanner")),"Pricing Calls"===t.value&&(n.value="Price Saved.",console.log(t),o(t),m("Pricing Callls"))},m=function(e){var t=document.getElementById("autonote_ta_note");console.log(t.value);var n=(t.value.match(/\n/g)||[]).length;t.style.height="0px",t.style.height=20+t.scrollHeight+20*n+12+2+"px"},p=function(){var e=document.getElementById("note_list_holder"),t=document.getElementById("autonote_ta_who").value,n=document.getElementById("autonote_ta_note").value,o=[];document.getElementById("autonote_ta_note").value="",document.getElementById("autonote_ta_who").value="",document.createElement("div").classList.add("note_container_list_main");var c=document.createElement("div");document.createElement("ul").classList.add("note_container_ul");var a=document.createElement("li"),l=document.createElement("span"),d=document.createElement("span"),r=document.createElement("span"),i=document.createElement("p"),s=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),p=document.createTextNode("Who: "),h=document.createTextNode(t),j=document.createTextNode("Note: "),v=document.createTextNode(n),x=document.createTextNode("======================"),b=document.createTextNode("----------------------"),_=document.createTextNode("======================");o.push(m),o.forEach((function(n){t&&(i.appendChild(p),i.appendChild(h),d.appendChild(b),u.appendChild(j)),l.appendChild(x),r.appendChild(_),n.appendChild(i),n.appendChild(s),n.appendChild(d),n.appendChild(u),n.appendChild(v),n.classList.add("notation"),c.classList.add("note_container"),c.appendChild(l),c.appendChild(n),c.appendChild(r),a.appendChild(c),e.insertBefore(a,e.childNodes[0]),console.log(c.innerText)}));var O=c.innerText;function g(e){e.clipboardData.setData("text/plain",O),e.preventDefault()}document.addEventListener("copy",g),document.execCommand("copy"),document.removeEventListener("copy",g),document.getElementById("autonote_ta_who").focus()},h=function(){return Object(o.jsx)("div",{className:"AppBody",children:Object(o.jsxs)("div",{className:"App-Body-Note-TextArea",children:[Object(o.jsx)("div",{className:"App-Body-Template-Selector",children:Object(o.jsxs)("select",{id:"templateselector",onChange:u,children:[Object(o.jsx)("option",{children:"Select Template"}),Object(o.jsx)("option",{value:"Printer",children:"Printer"}),Object(o.jsx)("option",{value:"Scanner",children:"Scanner"}),Object(o.jsx)("option",{value:"Pricing Calls",children:"Pricing Calls"})]})}),Object(o.jsxs)("div",{className:"who_main_div",children:[Object(o.jsx)("label",{children:"Who:"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{className:"an_ta_who",id:"autonote_ta_who",onKeyPress:i})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"note_main_div",children:[Object(o.jsx)("label",{children:"Note:"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{onChange:m,className:"an_ta_note",id:"autonote_ta_note",onKeyPress:s})]}),Object(o.jsx)("div",{className:"note_container_list_main",children:Object(o.jsx)("div",{className:"note_container_ul",children:Object(o.jsx)("ul",{id:"note_list_holder"})})})]})})},j=function(){return Object(o.jsx)("div",{className:"AppFooter",children:Object(o.jsxs)("h3",{children:["Created by ",Object(o.jsx)("a",{href:"https://github.com/ironFuturist",target:"_blank",rel:"noopener noreferrer",children:"@WesleyFranks"})]})})};var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(h,{}),Object(o.jsx)(j,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),o(e),c(e),a(e),l(e)}))};d.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),x()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.7e5a9aa3.chunk.js.map