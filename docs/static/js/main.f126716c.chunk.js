(this.webpackJsonpevaluacion=this.webpackJsonpevaluacion||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/rick-morty-error.ccd74382.png"},20:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/portal.861b1ceb.png"},24:function(e,t,a){e.exports=a.p+"static/media/logo.75509f2e.png"},26:function(e,t,a){e.exports=a.p+"static/media/come-in.10e10897.png"},27:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),l=a.n(c),s=a(7),i=(a(20),a(16)),o=a(2),m=a(3),u=a(11),h=a(5),p=a(4),d=a(1),f=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,t){return e.name.toUpperCase().localeCompare(t.name.toLowerCase())}))}))},_=function(){return fetch("http://loremricksum.com/api/?paragraphs=1&quotes=2").then((function(e){return e.json()})).then((function(e){return e}))},E=a(23),v=a.n(E),g=a(24),b=a.n(g),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"header wrapper"},n.a.createElement(s.b,{to:"/"},n.a.createElement("div",{className:"header__logo"},n.a.createElement("img",{src:b.a,alt:"Rick and Morty logo"})),n.a.createElement("p",{className:"header__name"},"Character Search")))}}]),a}(n.a.Component),y=a(26),k=a.n(y),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(s.b,{to:"/mainpage"},n.a.createElement(S,null),n.a.createElement("main",{className:"landing"},n.a.createElement("div",{className:"landing__imgs"},n.a.createElement("img",{className:"landing__imgs__portal",src:v.a,alt:"Rick and Morty"}),n.a.createElement("img",{className:"landing__imgs__morty",src:"https://media.giphy.com/media/dxP1UmiavDWDTR6yYd/giphy.gif",alt:"Rick and Morty"})),n.a.createElement("div",{className:"landing__imgs__come-in"},n.a.createElement("img",{src:k.a,alt:"Rick and Morty"}))))}}]),a}(n.a.Component),N=a(13),O=a.n(N),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"handleModalContent",value:function(e){e.preventDefault()}},{key:"renderStatusEmoji",value:function(e){return"Alive"===e?"\ud83c\udf1d":"Dead"===e?"\ud83d\udc80":"\u2753"}},{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.id,a=e.name,r=e.status,c=e.gender,l=e.species,i=e.image,o=e.origin,m=e.episodes;return n.a.createElement("div",{className:"character",id:t},n.a.createElement("div",{className:"character__card",onClick:this.handleModalContent},n.a.createElement("div",{className:"character__card__close-icon"},n.a.createElement(s.b,{to:"/mainpage"},n.a.createElement("i",{className:"fas fa-times-circle"}))),n.a.createElement("div",{className:"character__card__group"},n.a.createElement("div",{className:"character__card__group__img"},n.a.createElement("img",{src:i,alt:a})),n.a.createElement("div",{className:"character__card__group__info"},n.a.createElement("p",null,"Full Name: ",a),n.a.createElement("p",null,"Status: ",this.renderStatusEmoji(r)),n.a.createElement("p",null,"Gender: ",c),n.a.createElement("p",null,"Species: ","Alien"===l?"\ud83d\udc7d":"\ud83d\udd7a\ud83c\udffb"," "),n.a.createElement("p",null,"Origin: ",o),n.a.createElement("p",null,"Number of episodes: ",m))),n.a.createElement("ul",{className:"navigation"},n.a.createElement("li",{className:"navigation__left"},n.a.createElement(s.b,{to:"/character/".concat(t-1)},n.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"}))),n.a.createElement("li",{className:"navigation__img"},n.a.createElement(s.b,{to:"/mainpage"},n.a.createElement("img",{src:O.a,alt:"Back home"}))),n.a.createElement("li",{className:"navigation__right"},n.a.createElement(s.b,{to:"/character/".concat(t+1)},n.a.createElement("i",{className:"fa fa-arrow-right","aria-hidden":"true"}))))))}}]),a}(r.Component),x=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).renderSearchChild=r.renderSearchChild.bind(Object(u.a)(r)),r.handleFilterStatusChild=r.handleFilterStatusChild.bind(Object(u.a)(r)),r}return Object(m.a)(a,[{key:"renderSearchChild",value:function(e){e.preventDefault(),this.props.handleSearch({key:"searchText",value:e.target.value})}},{key:"handleFilterStatusChild",value:function(e){this.props.handleFilterStatus({key:"filterStatus",value:e.target.value})}},{key:"handleSubmit",value:function(e){"Enter"===e.key&&e.preventDefault()}},{key:"render",value:function(){return n.a.createElement("form",{className:"form"},n.a.createElement("div",{className:"form__search"},n.a.createElement("label",{htmlFor:"search",className:"form__search__label"},"Search for characters:"),n.a.createElement("input",{className:"form__search__input",type:"text",id:"search",placeholder:"Morty",onChange:this.renderSearchChild,value:this.props.searchText,onKeyPress:this.handleSubmit})),n.a.createElement("div",{className:"form__status"},n.a.createElement("label",{htmlFor:"filterStatus",className:"form__status__label"},"Status:"),n.a.createElement("select",{id:"filterStatus",className:"form__status__input",value:this.props.filterStatus,onChange:this.handleFilterStatusChild},n.a.createElement("option",{value:"All"},"\ud83d\udc6f\u200d\u2640\ufe0f All"),n.a.createElement("option",{value:"Alive"},"\ud83c\udf1d Alive"),n.a.createElement("option",{value:"Dead"},"\ud83d\udc80 Dead"),n.a.createElement("option",{value:"unknown"},"\u2753 Unknown"))),n.a.createElement("button",{className:"form__search__reset",value:"Reset form",onClick:this.props.resetAll},n.a.createElement("i",{className:"fas fa-times-circle"})))}}]),a}(r.Component),A=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.url,r=e.species,c=e.gender,l=e.id;return n.a.createElement(s.b,{to:"/character/".concat(l)},n.a.createElement("li",{key:l,id:l,className:"preview__card"},n.a.createElement("h2",{className:"preview__card__title"},t),n.a.createElement("div",{className:"preview__card__img"},n.a.createElement("img",{src:a,alt:t})),n.a.createElement("div",{className:"preview__card__info"},n.a.createElement("p",null,c),n.a.createElement("p",null,"Alien"===r?"\ud83d\udc7d":"\ud83d\udd7a\ud83c\udffb"))))}}]),a}(n.a.Component),F=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"error wrapper"},n.a.createElement("h2",{className:"error__title typewriter"},"Lick, lick, lick my balls!!"),n.a.createElement("p",{className:"error__text"},"Whatcha doin'? There's no character matching your search:",n.a.createElement("span",null," ".concat(this.props.searchText)),"."),n.a.createElement("h3",{className:"error__subtitle",onClick:this.props.resetAll},"Hit the sack, Jack!"),n.a.createElement("div",{className:"error__img"},n.a.createElement("img",{onClick:this.props.resetAll,src:O.a,alt:"Rick and Morty"})))}}]),a}(r.Component),T=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){if(0===this.props.characters.length)return n.a.createElement(F,{handleSearch:this.props.handleSearch,handleFilterStatus:this.props.handleFilterStatus,searchText:this.props.searchText,filterStatus:this.props.filterStatus,resetAll:this.props.resetAll});var e=this.props.characters.map((function(e){var t=e.name,a=e.id,r=e.species,c=e.image,l=e.status,s=e.gender;return n.a.createElement(A,{key:a,id:a,name:t,url:c,species:r,status:l,gender:s})}));return n.a.createElement("ul",{className:"character__list"},e)}}]),a}(n.a.Component),w=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(s.b,{to:"/mainpage"},n.a.createElement("div",{className:"footer__logo"})))}}]),a}(n.a.Component),M=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,null),n.a.createElement("main",{className:"main wrapper"},n.a.createElement("h1",{className:"main__title "},'"',this.props.randomQuote,'"'),n.a.createElement("div",{className:"main__img"},n.a.createElement("img",{src:"https://media.giphy.com/media/gJ2TzwqdRoKoZ0KWhW/giphy.gif",alt:"UFO"})),n.a.createElement(x,{handleSearch:this.props.handleSearch,handleFilterStatus:this.props.handleFilterStatus,searchText:this.props.searchText,filterStatus:this.props.filterStatus,resetAll:this.props.resetAll}),n.a.createElement(T,{characters:this.props.characters,handleSearch:this.props.handleSearch,handleFilterStatus:this.props.handleFilterStatus,searchText:this.props.searchText,filterStatus:this.props.filterStatus,resetAll:this.props.resetAll})),n.a.createElement(w,null))}}]),a}(n.a.Component),D=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={characters:[],searchText:"",filterStatus:"All",quote:""},r.renderCharacterInfo=r.renderCharacterInfo.bind(Object(u.a)(r)),r.handleSearch=r.handleSearch.bind(Object(u.a)(r)),r.handleFilterStatus=r.handleFilterStatus.bind(Object(u.a)(r)),r.getMain=r.getMain.bind(Object(u.a)(r)),r.resetAll=r.resetAll.bind(Object(u.a)(r)),r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({characters:t})})),_().then((function(t){e.setState({quote:t.data})}));var t=localStorage.getItem("userSearch");t&&this.setState({searchText:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("userSearch",this.state.searchText)}},{key:"resetAll",value:function(e){e.preventDefault(),this.setState({searchText:"",filterStatus:"All"})}},{key:"handleSearch",value:function(e){console.log(e),this.setState(Object(i.a)({},e.key,e.value))}},{key:"handleFilterStatus",value:function(e){this.setState(Object(i.a)({},e.key,e.value))}},{key:"renderSearch",value:function(){var e=this,t=this.state.characters,a=this.state.filterStatus;if(t)return t.filter((function(t){return t.name.toLowerCase().includes(e.state.searchText)})).filter((function(e){return"All"===a||e.status===a}))}},{key:"renderCharacterInfo",value:function(e){console.log(e.match.params.id);var t=e.match.params.id,a=this.state.characters.find((function(e){return e.id===parseInt(t)}));return console.log(a),a?n.a.createElement(C,{id:a.id,name:a.name,image:a.image,gender:a.gender,species:a.species,status:a.status,origin:a.origin.name,episodes:a.episode.length}):n.a.createElement("div",{className:"error"},n.a.createElement("h3",{className:"error__title"},"Hit the sack, and go home, Jack!"),n.a.createElement(s.b,{to:"/mainpage"},n.a.createElement("div",{className:"error__img"},n.a.createElement("img",{src:O.a,alt:"Rick and Morty"}))))}},{key:"getMain",value:function(){return n.a.createElement(M,{randomQuote:this.state.quote,handleSearch:this.handleSearch,handleFilterStatus:this.handleFilterStatus,filterStatus:this.state.filterStatus,searchText:this.state.searchText,characters:this.renderSearch(),resetAll:this.resetAll})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"twinkling"}),n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:j}),n.a.createElement(d.a,{exact:!0,path:"/mainpage",render:this.getMain}),n.a.createElement(d.a,{exact:!0,path:"/character/:id",render:this.renderCharacterInfo}))))}}]),a}(n.a.Component);l.a.render(n.a.createElement(s.a,null,n.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f126716c.chunk.js.map