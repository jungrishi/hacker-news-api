(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},25:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},31:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(21),s=n.n(o),i=(n(30),n(31),n(13)),r=n(5),l=n(7),m=n(8),u=n(10),d=n(9),h=n(11),f=n(22),p=n.n(f),E=(n(14),{display:"block",position:"absolute",top:"50%",left:"50%",transform:"transition(-50%, -50%)"}),v={display:"flex",justifyContent:"center",alignItems:"center"};var b=function(e){return c.a.createElement("div",{style:1==e.i?E:v},c.a.createElement(p.a,{name:"ball-pulse-sync",color:"blue",fadeIn:"half"}))},k="https://hacker-news.firebaseio.com/v0/";var j=function(e){return k+e},y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={data:[],kids:void 0,isLoaded:!1,depth:3},n.i=0,n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchComment(this.props.id)}},{key:"fetchComment",value:function(e){var t=this;fetch(j("item/".concat(e,".json"))).then(function(e){return e.json()}).then(function(e){var n;e&&(n=e.kids||[],t.setState({data:e,kids:n,isLoaded:!t.isLoaded}))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"hello"},this.state.isLoaded?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,this.state.data.by),c.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:this.state.data.text}}),c.a.createElement("div",{className:"child"},this.state.kids&&this.state.kids.length>0&&this.state.kids.map(function(e,n){return c.a.createElement("div",{key:n,className:"descendant-comment"},c.a.createElement(t,{id:e}))}))):c.a.createElement(b,null))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={commentID:n.props.location.state.data.kids},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.state.commentID),c.a.createElement("div",{className:"pageWrapper"},c.a.createElement("h2",null,this.props.location.state.data.title),c.a.createElement("ul",null,c.a.createElement("li",{className:"comments"},this.state.commentID&&this.state.commentID.length>0&&this.state.commentID.map(function(e,t){return c.a.createElement(y,{key:t,id:e})}))))}}]),t}(a.Component);var w,O,I=(w=function(e){return c.a.createElement(c.a.Fragment,null,e.passState.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(i.b,{to:{pathname:"/stories/".concat(e.id),state:{data:e}}},e.title))}))},O="topstories.json",console.log(O),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={stories:[],isLoaded:!1,i:0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(j(O)).then(function(e){return e.json()}).then(function(t){t=t.slice(0,10),e.fetchStory(t)})}},{key:"fetchStory",value:function(e,t){var n=this,a=e.map(function(e){return fetch(j("/item/".concat(e,".json"))).then(function(e){return e.json()})});Promise.all(a).then(function(e){n.setState({stories:e,isLoaded:!0,i:n.state.i}),console.log("img")})}},{key:"render",value:function(){return console.log(O),c.a.createElement("div",null,c.a.createElement("ul",{className:"listing"},!1===this.state.isLoaded?c.a.createElement(b,{i:"1"}):c.a.createElement(w,Object.assign({passState:this.state.stories},this.props))))}}]),t}(a.Component));function N(){return c.a.createElement("div",null,c.a.createElement("p",null,"Click Hacker News to continue"))}var L=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{basename:"/hacker-news-api"},c.a.createElement("h1",null,c.a.createElement(i.b,{to:"/"},"Hacker News")),c.a.createElement(r.c,null,c.a.createElement(r.a,{exact:!0,path:"/",component:I}),c.a.createElement(r.a,{exact:!0,path:"/stories/:storyId",component:g}),c.a.createElement(r.a,{path:"*",component:N})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.d7a22d10.chunk.js.map