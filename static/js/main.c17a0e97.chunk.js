(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date,timerId:void 0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3);this.setState({timerId:e})}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(h.jsxs)("p",{children:["Current time:"," ",this.state.date.toLocaleTimeString()]})}}]),n}(u.a.Component),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!1,clockName:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(h.jsx)(b,{name:this.state.clockName}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({clockName:Math.floor(100*Math.random())})},children:"Set random name"})]})}}]),n}(u.a.Component),d=m;a.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c17a0e97.chunk.js.map