(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),c=n.n(l);n(8),n(9);var r=function(){return o.a.createElement("div",{className:"AppHeader"},o.a.createElement("h1",null,"AutoNote"))};var i=function(e){console.log("Note Prevent Default"),console.log(e),13!==e.charCode||e.shiftKey||(e.preventDefault(),d())},d=function(){var e=document.getElementById("note_list_holder"),t=document.getElementById("autonote_ta_note").value,n=[];document.getElementById("autonote_ta_note").value="",document.createElement("div").classList.add("note_container_list_main");var a=document.createElement("div");document.createElement("ul").classList.add("note_container_ul");var o=document.createElement("li"),l=document.createElement("p"),c=document.createTextNode(t);n.push(l),n.forEach(function(t){t.appendChild(c),t.classList.add("notation"),a.classList.add("note_container"),a.appendChild(t),o.appendChild(a),e.insertBefore(o,e.childNodes[0]),console.log(a.innerText)});var r=a.innerText;function i(e){e.clipboardData.setData("text/plain",r),e.preventDefault()}document.addEventListener("copy",i),document.execCommand("copy"),document.removeEventListener("copy",i),document.getElementById("autonote_ta_note").focus()},u=function(){return o.a.createElement("div",{className:"AppBody"},o.a.createElement("div",{className:"App-Body-Note-TextArea"},o.a.createElement("br",null),o.a.createElement("div",{className:"note_main_div"},o.a.createElement("label",null,"Note:"),o.a.createElement("br",null),o.a.createElement("textarea",{className:"an_ta_note",id:"autonote_ta_note",onKeyPress:i})),o.a.createElement("div",{className:"note_container_list_main"},o.a.createElement("div",{className:"note_container_ul"},o.a.createElement("ul",{id:"note_list_holder"})))))},m=function(){return o.a.createElement("div",{className:"AppFooter"},o.a.createElement("h3",null,"Created by ",o.a.createElement("a",{href:"https://github.com/ironfruit",target:"_blank",rel:"noopener noreferrer"},"@WesleyFranks")))};var s=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r,null),o.a.createElement(u,null),o.a.createElement(m,null))},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),l(e),c(e)})};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),E()}],[[3,1,2]]]);
//# sourceMappingURL=main.7d9c8970.chunk.js.map