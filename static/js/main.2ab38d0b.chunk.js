(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,n){t.exports={list:"Statistics_list__HtOWM",item:"Statistics_item__3nf2r",numbers:"Statistics_numbers__2dOxZ",good:"Statistics_good__3gjs8",neutral:"Statistics_neutral__Hqipn",bad:"Statistics_bad__PuI82",visible:"Statistics_visible__2cMyE",hidden:"Statistics_hidden__1mfWF"}},,,,,function(t,e,n){t.exports={container:"Container_container__3w_fJ",title:"Container_title__3Sk39"}},,function(t,e,n){t.exports={button:"Feedback_button__3i_vg"}},function(t,e,n){t.exports={text:"Notification_text__2iOUX"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),s=n(7),a=n.n(s),r=(n(15),n(16),n(3)),o=n(5),l=n(10),j=(n(17),n(6)),b=n.n(j),d=n(0);var u=function(t){var e=t.title,n=void 0===e?"":e,c=t.children;return Object(d.jsxs)("div",{className:b.a.container,children:[n&&Object(d.jsx)("h2",{className:b.a.title,children:n}),c]})},_=n(8),O=n.n(_);var h=function(t){var e=t.options,n=t.addVoice;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:e.map((function(t){return Object(d.jsx)("button",{type:"button",className:O.a.button,onClick:function(){n(t)},children:t},t)}))})})},m=n(1),x=n.n(m);var f=function(t){var e=t.options,n=t.total,c=t.positivePercentage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{className:x.a.list,children:[Object.keys(e).map((function(t){return Object(d.jsxs)("li",{className:x.a.item,children:[t,": ",Object(d.jsx)("span",{className:"".concat(x.a.numbers," ").concat(x.a[t]),children:e[t]})]},t)})),Object(d.jsxs)("li",{className:"".concat(x.a.item," "),children:["Total: ",Object(d.jsx)("span",{className:"".concat(x.a.numbers," "),children:n})]}),Object(d.jsxs)("li",{className:x.a.item,children:["Positive feedback:"," ",Object(d.jsxs)("span",{className:"".concat(x.a.numbers," "),children:[c,"%"]})]})]})})},p=n(9),v=n.n(p);var g=function(t){var e=t.message,n=void 0===e?"":e;return Object(d.jsx)(d.Fragment,{children:n&&Object(d.jsx)("p",{className:v.a.text,children:n})})};function k(){var t=Object(c.useState)({good:0,neutral:0,bad:0}),e=Object(l.a)(t,2),n=e[0],i=e[1],s=Object.keys(n),a=s.reduce((function(t,e){return t+n[e]}),0),j=Math.round(n.good/a*100);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{title:"Please leave feedback",children:Object(d.jsx)(h,{options:s,addVoice:function(t){i((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},t,e[t]+1))}))}})}),Object(d.jsx)(u,{title:"Statistics",children:a>0?Object(d.jsx)(f,{options:n,total:a,positivePercentage:j}):Object(d.jsx)(g,{message:"There is no feedback"})})]})}a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.2ab38d0b.chunk.js.map