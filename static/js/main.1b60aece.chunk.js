(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),i=(a(44),a(10));function s(){return r.a.createElement("div",{className:"main-nav"},r.a.createElement(i.b,{className:"nav-btn",to:"/"},"Home"),r.a.createElement(i.b,{className:"nav-btn",to:"/favorites"},"Favorites"))}var l=a(2),u=a(8),m=a.n(u),v=a(13),d=a(21),h=a(11),f=a(14),y=a(15),p=a(17),E=a(16);function g(e){var t=e.cities,a=e.onAddCity;return r.a.createElement("div",null,t&&r.a.createElement("ul",{className:"cities-list"},t.map((function(e,t){return r.a.createElement("button",{className:"city-btn",onClick:function(){a(e)},key:t},e.LocalizedName)}))))}function w(e){var t=e.day;function a(e){return(5*(e-32)/9).toFixed(0)}return r.a.createElement("div",{className:"day-card"},r.a.createElement("p",{className:"date"},function(){var e=t.Date,a=e.split("T");return a=(e=a[0]).split("-"),e=a.reverse().join("."),console.log("date",e),e}()),r.a.createElement("hr",null),r.a.createElement("img",{src:function(){var e=t.Day.Icon;return e<10&&(e="0"+e),"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png")}(),alt:""}),r.a.createElement("hr",null),r.a.createElement("p",null,t.Day.IconPhrase),r.a.createElement("p",null,a(t.Temperature.Minimum.Value),"\xb0c - ",a(t.Temperature.Maximum.Value),"\xb0c"))}function C(e){var t=e.days,a=e.city;return r.a.createElement("div",{className:"days-list-box"},r.a.createElement("h3",null,a.LocalizedName),r.a.createElement("div",{className:"days-list"},t&&t.map((function(e,t){return r.a.createElement(w,{key:t,day:e,city:a})}))))}var S=a(22),b=a.n(S),F={saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var T={getWeather:function(e){return b.a.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&language=en-us&details=false&metric=false")).then((function(e){return e.data}))},getCities:function(e){return b.a.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&q=".concat(e,"&language=en-us")).then((function(e){return e.data}))},saveCity:function(e){F.saveToStorage("CITY",e)},loadCity:function(e){F.loadFromStorage(e)},saveFavCity:function(e){N.push(e),F.saveToStorage("FAV_CITIES",N)},loadFavCity:function(e){return F.loadFromStorage(e)}},N=[];var k=a(37),O=a(38);function A(){return r.a.createElement("div",{className:"modal-box"},r.a.createElement("p",null,"Added to Favorites"))}var j=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,isFav:!1,value:"",cityToShow:"",cityToSave:"",cities:[]},e.onHandleInput=function(){var t=Object(h.a)(m.a.mark((function t(a){var n,r,c,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target,r=n.name,c=n.value,e.setState((function(e){return{city:Object(d.a)(Object(d.a)({},e.city),{},Object(v.a)({},r,c)),value:c}})),t.next=6,T.getCities(c);case 6:o=t.sent,console.log("cities",o),e.setState({cities:o});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onAddCity=function(){var t=Object(h.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getWeather(a.Key);case 2:n=t.sent,console.log("city",n.DailyForecasts),e.setState({cityToSave:a,cityToShow:n,value:"",cities:[]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addToFavorites=function(t){T.saveFavCity(t),console.log("city added to favs",t),e.setState({isFav:!e.state.isFav,showModal:!e.state.showModal}),setTimeout((function(){e.setState({showModal:!e.state.showModal})}),2e3)},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{class:"stars small"}),r.a.createElement("div",{class:"stars medium"}),r.a.createElement("div",{class:"stars large"}),r.a.createElement("div",{className:"home-box"},r.a.createElement("h1",{className:"home-heading"},"Weather-Center"),r.a.createElement("input",{className:"home-input",type:"text",name:"days",autoComplete:"off",placeholder:"Type a Place",onChange:this.onHandleInput,value:this.state.value}),r.a.createElement(g,{onAddCity:this.onAddCity,cities:this.state.cities}),r.a.createElement(k.a,{onClick:function(){e.addToFavorites(e.state.cityToSave)},className:this.state.isFav?"fav-icon-active":"fav-icon",icon:O.a}),r.a.createElement(C,{days:this.state.cityToShow.DailyForecasts,city:this.state.cityToSave}),this.state.showModal&&r.a.createElement(A,null)))}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={favCities:[],cityToShow:"",cityToSave:""},e.loadFavCities=function(){return T.loadFavCity("FAV_CITIES")},e.onAddCity=function(){var t=Object(h.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getWeather(a.Key);case 2:n=t.sent,console.log("city",n.DailyForecasts),e.setState({cityToSave:a,cityToShow:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this.loadFavCities();console.log("favCities",e),this.setState({favCities:e})}},{key:"render",value:function(){var e=this,t=this.state.favCities;return t?r.a.createElement("div",{className:"favorite-box"},r.a.createElement("h1",null,"Your Favorite Places"),r.a.createElement("ul",{className:"favorite-list"},t.map((function(t,a){return r.a.createElement("h3",{onClick:function(){e.onAddCity(t)},key:a,className:"city-name"},t.LocalizedName)}))),r.a.createElement(C,{days:this.state.cityToShow.DailyForecasts,city:this.state.cityToSave})):r.a.createElement("h1",null,"No Favorites Cities Here")}}]),a}(n.Component);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s,null)),r.a.createElement("main",null,r.a.createElement(l.c,null,r.a.createElement(l.a,{component:x,path:"/favorites"}),r.a.createElement(l.a,{component:j,path:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1b60aece.chunk.js.map