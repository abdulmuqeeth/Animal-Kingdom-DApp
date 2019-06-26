(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,a){e.exports=a(590)},254:function(e,t,a){},255:function(e,t,a){},265:function(e,t){},266:function(e,t){},286:function(e,t){},288:function(e,t){},509:function(e,t){},579:function(e,t,a){},580:function(e,t,a){},581:function(e,t,a){},584:function(e,t,a){},585:function(e,t,a){},586:function(e,t,a){},587:function(e,t,a){},590:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(248),i=a.n(s),c=a(593),o=(a(254),a(12)),l=a(13),m=a(15),u=a(14),d=a(16),p=(a(255),a(28)),h=new p.AppConfig(["store_write","publish_data"]),b=[{id:"cat",name:"Cat",superpower:"Has 9 lives."},{id:"dog",name:"Dog",superpower:"Catching frisbees."},{id:"lion",name:"Lion",superpower:"Roaring loudly."}],g=[{id:"forest",name:"Forest",superpower:"Trees!"},{id:"tundra",name:"Tundra",superpower:"Let it snow!"},{id:"westeros",name:"westeros",superpower:"Let it begin!"}],v="me.json",f="subjects.json",E=[{app:"https://animal-kingdom-1.firebaseapp.com",ruler:"larry.id"},{app:"http://localhost:3001",ruler:"larz.id"},{app:"https://decentralised-islands.netlify.com",ruler:"yannael_leborgne.id"},{app:"https://thirsty-jang-0c0a17.netlify.com",ruler:"ma1222042.id.blockstack"},{app:"https://animalkingdoms.netlify.com",ruler:"moxiegirl.id.blockstack"}],j=(a(579),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).userSession=new p.UserSession({appConfig:h}),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"signIn",value:function(e){e.preventDefault(),this.userSession.redirectToSignIn()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Landing"},r.a.createElement("div",{className:"form-signin"},r.a.createElement("h1",{className:"h1 mb-3 font-weight-normal"},"Animal Kingdom"),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",onClick:this.signIn.bind(this)},"Sign in with Blockstack")))}}]),t}(n.Component)),y=a(20),k=a(594),O=a(596),w=a(595),S=a(592),N=(a(580),a(581),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.selected,t=this.props.path,a=this.props.item,n=this.props.select;return r.a.createElement("div",{className:"card ".concat(e?"border-primary":""),onClick:function(e){return n(e,a)}},r.a.createElement("img",{className:"card-img-top",src:"".concat(t).concat(a.id,".jpg"),alt:a.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},a.name),r.a.createElement("p",{className:"card-text"},a.superpower),r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:e},e?"Selected":"Select")))}}]),t}(n.Component)),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).selectAnimal=a.selectAnimal.bind(Object(y.a)(a)),a.selectTerritory=a.selectTerritory.bind(Object(y.a)(a)),a.state={selectedAnimal:!1,selectedTerritory:!1},a.loadMe=a.loadMe.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.loadMe()}},{key:"loadMe",value:function(){this.props.me?this.setState({selectedAnimal:!0,selectedTerritory:!0}):this.setState({selectedAnimal:!1,selectedTerritory:!1})}},{key:"selectAnimal",value:function(e,t){e.preventDefault(),this.setState({selectedAnimal:!0}),this.props.saveMe(Object.assign({},this.props.me,{animal:t}))}},{key:"selectTerritory",value:function(e,t){e.preventDefault(),this.setState({selectedTerritory:!0}),this.props.saveMe(Object.assign({},this.props.me,{territory:t}))}},{key:"render",value:function(){var e=this,t=this.props.me,a=null,n=null;t&&(a=this.props.me.animal,n=this.props.me.territory);var s=this.state.selectedAnimal,i=this.state.selectedTerritory,c=s&&i,o=this.props.username;return r.a.createElement("div",{className:"EditMe container"},r.a.createElement("h2",null,"Your animal persona"),r.a.createElement("p",null,"You are the ruler of your kingdom! Pick your animal persona and its home!"),r.a.createElement("h3",null,"Select your animal"),r.a.createElement("div",{className:"row card-deck"},b.map(function(t,n){var s=a&&a.id===t.id;return r.a.createElement(N,{path:"/animals/",key:n,item:t,select:e.selectAnimal,selected:s})})),r.a.createElement("h3",{className:"select-territory"},"Select your territory"),r.a.createElement("div",{className:"card-deck"},g.map(function(t,a){var s=n&&n.id===t.id;return r.a.createElement(N,{path:"/territories/",key:a,item:t,select:e.selectTerritory,selected:s})})),r.a.createElement("div",{className:"container row"},r.a.createElement("div",{className:"col-lg-12 done"},r.a.createElement("p",null,r.a.createElement(S.a,{to:c?"/kingdom/".concat(o):"/me",className:"btn btn-primary"},"Done")))))}}]),t}(n.Component);function C(e){return JSON.parse(JSON.stringify(e))}function M(e,t,a){a.map(function(n,r){var s={decrypt:!1,app:n.app,username:n.username};return t.getFile(v,s).then(function(t){return t?(a[r]=Object.assign({},n,{missing:!1},JSON.parse(t)),e.setState({subjects:a}),a):(a[r]=Object.assign({},n,{missing:!0}),e.setState({subjects:a}),a)})})}function T(e,t,a){var n={decrypt:!1,username:t,app:a};return e.getFile(v,n).then(function(e){if(e)return JSON.parse(e);return null})}function K(e,t,a){var n={decrypt:!1,username:t,app:a};return e.getFile(f,n).then(function(e){return e?JSON.parse(e):[]})}var x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.index,a=this.props.subject.username,n=this.props.selected,s=this.props.subject.app,i=this.props.subject.animal,c=this.props.myKingdom,o=this.props.currentUsername;return i?r.a.createElement("div",{className:"card ".concat(n?"border-primary":"")},r.a.createElement("img",{className:"card-img-top",src:"".concat(s,"/animals/").concat(i.id,".jpg"),alt:i.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},a," the ",i.name),r.a.createElement("p",{className:"card-text"},i.superpower,r.a.createElement("br",null),"It hails from the planet ",s,"."),c?r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(a){return e.props.removeSubject(a,t)}},"Banish from kingdom"):r.a.createElement("a",{className:"btn btn-primary btn-block",href:"".concat(window.location.origin,"/kingdom/").concat(o,"?add=").concat(s,"/kingdom/").concat(a)},"Add to my kingdom"))):null}}]),t}(n.Component),U=(a(584),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={ruler:{animal:{},territory:{}},subjects:[],value:"",app:"".concat(e.protocol,"//").concat(e.realm),rulerUsername:e.ruler,clickAdd:!1},a.userSession=new p.UserSession({appConfig:h}),a.addSubject=a.addSubject.bind(Object(y.a)(a)),a.removeSubject=a.removeSubject.bind(Object(y.a)(a)),a.handleChange=a.handleChange.bind(Object(y.a)(a)),a.loadKingdom=a.loadKingdom.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.state.app,t=this.props.ruler;this.loadKingdom(t,e);var a=window.location.search;if(a){var n=a.split("=")[1];this.setState({value:n,clickAdd:!0})}}},{key:"componentWillReceiveProps",value:function(e){var t=e.subjects;t&&(t.length!==this.state.subjects.length&&this.setState({subjects:C(t)}),M(this,this.userSession,t))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"loadKingdom",value:function(e,t){var a=this;T(this.userSession,e,t).then(function(e){e&&a.setState({ruler:e})}),K(this.userSession,e,t).then(function(e){a.setState({subjects:e}),M(a,a.userSession,e)})}},{key:"addSubject",value:function(e){e.preventDefault();var t=function(e){var t=e.split("/kingdom");return{app:t[0],username:t[1].split("/")[1]}}(this.state.value),a=C(this.state.subjects);this.setState({value:"",clickAdd:!1}),a.push(t),this.setState({subjects:a}),this.saveSubjects(a)}},{key:"removeSubject",value:function(e,t){e.preventDefault();var a=C(this.state.subjects);a.splice(t,1),this.setState({subjects:a}),this.saveSubjects(a)}},{key:"saveSubjects",value:function(e){var t=this;this.userSession.putFile(f,JSON.stringify(e),{encrypt:!1}).finally(function(){window.location.search&&window.history.pushState(null,"",window.location.href.split("?")[0]),M(t,t.userSession,e)})}},{key:"render",value:function(){var e=this,t=this.props.myKingdom,a=this.state.ruler,n=a.animal,s=a.territory,i=this.state.rulerUsername,c=this.state.subjects,o=this.props.myKingdom,l=this.state.app,m=this.state.clickAdd,u=this.props.currentUsername;return r.a.createElement("div",{className:"Kingdom"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 territory",style:{backgroundImage:"url('".concat(l,"/territories/").concat(s.id,".jpg')")}},n&&n.name?r.a.createElement("img",{className:"rounded-circle",src:"".concat(l,"/animals/").concat(n.id,".jpg"),alt:n.name}):r.a.createElement("img",{className:"rounded-circle",src:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",alt:"The Ruler"}))),r.a.createElement("div",{className:"row ruler"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h2",null,"Ruler ",i),n?r.a.createElement("p",null,r.a.createElement("a",{href:"".concat("https://explorer.blockstack.org","/name/").concat(i),target:"_blank",rel:"noopener noreferrer"},i)," is a ",n.name," that rules over the ",s.name,"."):r.a.createElement("p",null,i," is an unknown animal that hails from an unknown land."),r.a.createElement("p",null,t?r.a.createElement(S.a,{className:"btn btn-primary",to:"/me",role:"button"},"Edit my animal"):r.a.createElement("a",{className:"btn btn-primary",href:"".concat(window.location.origin,"/kingdom/").concat(u,"?add=").concat(l,"/kingdom/").concat(i)},"Add ruler to my kingdom")),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Subjects"),t?r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{id:"addSubject",className:"add-frame col-lg-8",style:{borderColor:m?"red":"#f8f9fa"}},r.a.createElement("form",{onSubmit:this.addSubject,className:"input-group"},r.a.createElement("input",{className:"form-control",type:"url",onChange:this.handleChange,value:this.state.value,required:!0,placeholder:"https://example.com/kingdom/ruler.id"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Add subject"}))))):null,r.a.createElement("div",{className:"card-deck"},c.map(function(t,a){return r.a.createElement(x,{key:a,index:a,subject:t,removeSubject:e.removeSubject,myKingdom:o,currentUsername:u})}))))))}}]),t}(n.Component)),I=(a(585),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.username;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-blue fixed-top"},r.a.createElement(S.a,{className:"navbar-brand",to:"/"},"Animal Kingdom"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{className:"nav-link",to:"/kingdom/".concat(e)},"Your Kingdom")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{className:"nav-link",to:"/animals"},"Animals")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{className:"nav-link",to:"/territories"},"Territories")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{className:"nav-link",to:"/others"},"Other Kingdoms")))),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(S.a,{className:"nav-link",to:"/me"},e))),r.a.createElement("button",{className:"btn btn-primary",onClick:this.props.signOut.bind(this)},"Sign out"))}}]),t}(n.Component)),D=(a(586),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.type,t=b;return"territories"===e&&(t=g),r.a.createElement("div",{className:"OptionsList container"},r.a.createElement("h2",null,"Available ",e," on this planet"),r.a.createElement("div",{className:"card-deck"},t.map(function(t,a){return r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},t.name),r.a.createElement("img",{className:"card-img-top",src:"/".concat(e,"/").concat(t.id,".jpg"),alt:t.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},t.superpower)))})))}}]),t}(n.Component)),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={kingdoms:[]},a.userSession=new p.UserSession({appConfig:h}),a.resolveKingdoms=a.resolveKingdoms.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.resolveKingdoms()}},{key:"resolveKingdoms",value:function(){var e=this,t=this.state.kingdoms;E.map(function(a,n){return T(e.userSession,a.ruler,a.app).then(function(r){return t[n]={ruler:{username:a.ruler,data:r},subjects:[],app:a.app},e.setState({kingdoms:t}),K(e.userSession,a.ruler,a.app).then(function(a){t[n].subjects=a,e.setState({subjects:a})}).catch(function(r){console.log("problem loading subjects"),console.log(r),t[n].subjects=[],t[n].error=!0,e.setState({kingdom:a})})}).catch(function(e){console.log("ruler not found"),console.log(e),t[n]={error:!0,ruler:{username:a.ruler,data:null},subjects:[],app:a.app}})})}},{key:"render",value:function(){var e=this.state.kingdoms;return r.a.createElement("div",{className:"OtherKingdoms container"},r.a.createElement("h2",null,"Other kingdoms"),r.a.createElement("div",{className:"list-group"},0===e.length?r.a.createElement("div",{className:"list-group-item list-group-item-action flex-column align-items-start"},r.a.createElement("div",{class:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{class:"mb-1"},"Loading other kingdoms...")),r.a.createElement("p",{class:"mb-1"},"\xa0")):r.a.createElement("div",null,e.map(function(e,t){var a=e.app.split("//")[0],n=e.app.split("//")[1],s=e.app,i=e.error?"":e.ruler,c=i?i.data:"",o=c?c.animal:"";return e.error?r.a.createElement("div",{className:"list-group-item list-group-item-action flex-column align-items-start",key:t},r.a.createElement("div",{class:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{class:"mb-1"},e.ruler.username,"'s kingdom can't be reached")),r.a.createElement("p",{class:"mb-1"},"Is the planet ",s," under siege?")):r.a.createElement(S.a,{className:"list-group-item list-group-item-action flex-column align-items-start",to:"/kingdom/".concat(a,"/").concat(n,"/").concat(e.ruler.username),key:t},r.a.createElement("div",{class:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{class:"mb-1"},e.ruler.username," the ",o?o.name:"","'s kingdom"),r.a.createElement("span",{class:"badge badge-primary badge-pill",title:"Subjects"},e.subjects.length)),r.a.createElement("p",{class:"mb-1"},"From planet ",s))}))))}}]),t}(n.Component),J=(a(587),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).userSession=new p.UserSession({appConfig:h}),a.state={me:{},savingMe:!1,savingKingdown:!1,redirectToMe:!1},a.loadMe=a.loadMe.bind(Object(y.a)(a)),a.saveMe=a.saveMe.bind(Object(y.a)(a)),a.signOut=a.signOut.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.loadMe()}},{key:"loadMe",value:function(){var e=this;this.userSession.getFile(v,{decrypt:!1}).then(function(t){if(t){var a=JSON.parse(t);e.setState({me:a,redirectToMe:!1})}else{e.setState({me:null,redirectToMe:!0})}})}},{key:"saveMe",value:function(e){var t=this;this.setState({me:e,savingMe:!0});this.userSession.putFile(v,JSON.stringify(e),{encrypt:!1}).finally(function(){t.setState({savingMe:!1,redirectToMe:!1})})}},{key:"signOut",value:function(e){e.preventDefault(),this.userSession.signUserOut(),window.location="/"}},{key:"render",value:function(){var e=this,t=this.userSession.loadUserData().username,a=this.state.me;return this.state.redirectToMe&&"/me"!==window.location.pathname?r.a.createElement(k.a,{to:"/me"}):"/"===window.location.pathname?r.a.createElement(k.a,{to:"/kingdom/".concat(t)}):r.a.createElement("div",{className:"SignedIn"},r.a.createElement(I,{username:t,signOut:this.signOut}),r.a.createElement(O.a,null,r.a.createElement(w.a,{path:"/animals",render:function(e){return r.a.createElement(D,Object.assign({type:"animals"},e))}}),r.a.createElement(w.a,{path:"/territories",render:function(e){return r.a.createElement(D,Object.assign({type:"territories"},e))}}),r.a.createElement(w.a,{path:"/others",render:function(e){return r.a.createElement(W,Object.assign({type:"territories"},e))}}),r.a.createElement(w.a,{path:"/me",render:function(n){return r.a.createElement(A,Object.assign({me:a,saveMe:e.saveMe,username:t},n))}}),r.a.createElement(w.a,{path:"/kingdom/".concat(t),render:function(e){return r.a.createElement(U,Object.assign({myKingdom:!0,protocol:window.location.protocol,ruler:t,currentUsername:t,realm:window.location.origin.split("//")[1]},e))}}),r.a.createElement(w.a,{path:"/kingdom/:protocol/:realm/:ruler",render:function(e){return r.a.createElement(U,Object.assign({myKingdom:!1,protocol:e.match.params.protocol,realm:e.match.params.realm,ruler:e.match.params.ruler,currentUsername:t},e))}})))}}]),t}(n.Component)),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).userSession=new p.UserSession,e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.userSession;!e.isUserSignedIn()&&e.isSignInPending()&&e.handlePendingSignIn().then(function(e){if(!e.username)throw new Error("This app requires a username.");window.location="/kingdom/".concat(e.username)})}},{key:"render",value:function(){return r.a.createElement("main",{role:"main"},this.userSession.isUserSignedIn()?r.a.createElement(J,null):r.a.createElement(j,null))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(589);i.a.render(r.a.createElement(c.a,null,r.a.createElement(L,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");F?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):B(e)})}}()}},[[249,1,2]]]);
//# sourceMappingURL=main.a92b6573.chunk.js.map