(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},31:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),i=(a(30),a(31),a(11)),o=a(10),l=a(5),u=a(6),m=a(8),h=a(7),d=a(9),f=a(22),p=a.n(f),g=(a(19),{display:"block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),E={display:"flex",justifyContent:"center",alignItems:"center"};var v=function(e){return r.a.createElement("div",{style:1==e.i?g:E},r.a.createElement(p.a,{name:"ball-pulse-sync",color:"blue",fadeIn:"half"}))},k="https://hacker-news.firebaseio.com/v0/",P=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},"Hacker News")),r.a.createElement("div",{className:"pagination"},r.a.createElement("i",{className:"fa fa-angle-left",onClick:function(){return e.props.handlePage("Prev")}}),r.a.createElement("span",null,this.props.currentPage,"/"),r.a.createElement("span",null,this.props.totalPage),r.a.createElement("i",{className:"fa fa-angle-right",onClick:function(){return e.props.handlePage("Next")}})))}}]),t}(n.Component);var b,y,j=(b=function(e){return r.a.createElement(r.a.Fragment,null,e.passState.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{to:{pathname:"/stories/".concat(e.id),state:{data:e}}},e.title))}))},y="topstories.json",function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handlePage=function(e){console.log(a.state.currentPage),"Next"==e?a.state.currentPage<a.state.totalPage&&a.setState({currentPage:a.state.currentPage+1}):a.state.currentPage>0&&a.setState({currentPage:a.state.currentPage-1})},a.state={stories:[],ids:[],isLoaded:!1,currentPage:0,totalPage:5},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log({BASEURL:k,url:y}),fetch(k+y).then(function(e){return e.json()}).then(function(t){e.setState({ids:t}),t=t.slice(15*e.state.currentPage,15*(e.state.currentPage+1)),e.fetchStory(t)})}},{key:"componentDidUpdate",value:function(e,t){if(this.state.currentPage!=t.currentPage){var a=this.state.ids.slice(15*this.state.currentPage,15*(this.state.currentPage+1));this.fetchStory(a)}}},{key:"fetchStory",value:function(e,t){var a=this;this.setState({isLoaded:!this.state.isLoaded});var n=e.map(function(e){return fetch(k+"item/".concat(e,".json")).then(function(e){return e.json()})});Promise.all(n).then(function(e){a.setState({stories:e,isLoaded:!0,i:a.state.i})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,{handlePage:this.handlePage,currentPage:this.state.currentPage,totalPage:this.state.totalPage}),r.a.createElement("ul",{className:"listing"}," ",!1===this.state.isLoaded?r.a.createElement(v,{i:"1"}):r.a.createElement(b,Object.assign({currentPage:this.state.currentPage,passState:this.state.stories},this.props))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={data:[],kids:void 0,isLoaded:!1,depth:3},a.i=0,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchComment(this.props.id)}},{key:"fetchComment",value:function(e){var t=this;fetch(k+"item/".concat(e,".json")).then(function(e){return e.json()}).then(function(e){var a;e&&(a=e.kids||[],t.setState({data:e,kids:a,isLoaded:!t.isLoaded}))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"hello"},this.state.isLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,this.state.data.by),r.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:this.state.data.text}}),r.a.createElement("div",{className:"child"},this.state.kids&&this.state.kids.length>0&&this.state.kids.map(function(e,a){return r.a.createElement("div",{key:a,className:"descendant-comment"},r.a.createElement(t,{id:e}))}))):r.a.createElement(v,null))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).getPageHistory=function(){console.log(a.props),a.props.history.goBack()},a.state={commentID:a.props.location.state.data.kids},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pageWrapper"},r.a.createElement("div",{className:"storyHeader",onClick:this.getPageHistory},r.a.createElement("i",{className:"fa fa-close",onClick:function(){return e.getPageHistory}})),r.a.createElement("h2",null," ",this.props.location.state.data.title," "),r.a.createElement("ul",null,r.a.createElement("li",{className:"comments"}," ",this.state.commentID&&this.state.commentID.length>0&&this.state.commentID.map(function(e,t){return r.a.createElement(O,{key:t,id:e})}))))}}]),t}(n.Component);function w(){return r.a.createElement("div",null,r.a.createElement("p",null,"Click Hacker News to continue"))}a(53);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{basename:"/hacker-news-api"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:j}),r.a.createElement(o.a,{exact:!0,path:"/stories/:storyId",component:N}),r.a.createElement(o.a,{path:"*",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.2060716f.chunk.js.map