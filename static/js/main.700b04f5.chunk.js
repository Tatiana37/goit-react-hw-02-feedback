(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),s=n.n(r),i=(n(15),n(4)),o=n(5),l=n(6),b=n(10),d=n(9),j=n(7),u=n.n(j),h=n(0);var O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{value:e,className:u.a.btns,type:"button",onClick:function(){return n(e)},children:e},e)}))})};var v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.percentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",a]}),Object(h.jsxs)("li",{children:["Positive feedback: ",r," %"]})]})})};var x=function(e){var t=e.children,n=e.title;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"title",children:n}),t]})};var f=function(e){var t=e.message;return Object(h.jsx)("p",{className:"title",children:t})},p=n(8),k=n.n(p);function g(e){var t=e.children;return Object(h.jsx)("div",{className:k.a.container,children:t})}var m=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.good,t=this.state.neutral,n=this.state.bad,c=e+t+n,a=Math.round(e/c*100),r=Object.keys(this.state);return Object(h.jsx)(g,{children:Object(h.jsxs)(x,{title:"Please leave feedback",children:[Object(h.jsx)(O,{options:r,onLeaveFeedback:this.onLeaveFeedback}),c?Object(h.jsx)(x,{title:"Statistics",children:Object(h.jsx)(v,{good:e,neutral:t,bad:n,total:c,percentage:a})}):Object(h.jsx)(f,{message:"No feedback given"})]})})}}]),n}(c.Component),N=m;s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btns:"FeedbackOptions_btns__3EsbY"}},8:function(e,t,n){e.exports={container:"Container_container__3xsaN"}}},[[17,1,2]]]);
//# sourceMappingURL=main.700b04f5.chunk.js.map