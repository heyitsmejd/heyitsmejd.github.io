(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(t,e,n){var content=n(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("1fcd4353",content,!0,{sourceMap:!1})},147:function(t,e,n){"use strict";var r=n(146);n.n(r).a},148:function(t,e,n){(t.exports=n(31)(!1)).push([t.i,".navbar{background:none!important}.navbar-burger{color:#e8e8e8}.is-logo{color:#fff;font-family:Quicksand;font-weight:400}@media screen and (max-width:1087px){.navbar-menu{background-color:#2b2828!important}.navbar-item,.navbar-link{color:#00d1b2}}@media screen and (max-width:992px){a.navbar-item.is-logo.nuxt-link-active{height:3.25em}.navScroll{transition:all .25s;background:#1f1e1e!important;z-index:2}.is-faded{background:rgba(31,30,30,.25098)!important}}@media screen and (min-width:1088px){.is-faded{background:#1f1e1e!important}.nuxt-link-exact-active{color:#fff!important;border-bottom:3px solid #00d1b2}.navbar-item{color:#d3d3d3;font-weight:700;font-size:1em;margin-right:2em}.navbar-item:last-child{margin-right:0}.navbar-item:hover{color:#00d1b2!important}a.navbar-item.is-logo:hover{color:#fff!important}}",""])},149:function(t,e,n){"use strict";var r={mounted:function(){var t=document.getElementById("burger"),e=document.getElementById("navMenu");t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")});var n=document.querySelector("#navScroll");window.onscroll=function(){window.pageYOffset>=50?(n.classList.add("is-faded"),n.classList.remove("navScroll")):(n.classList.add("navScroll"),n.classList.remove("is-faded"))}},data:function(){return{startY:120}}},o=(n(147),n(17)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-fixed-top is-transparent navScroll",attrs:{id:"navScroll",role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("nuxt-link",{staticClass:"navbar-item is-logo",attrs:{to:"/"}},[n("span",{staticClass:"is-size-3"},[t._v("JD"),n("span",{staticClass:"has-text-primary"},[t._v("K")])])]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-menu navbar-end",attrs:{id:"navMenu"}},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v("\n        Projects\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("\n        Contact\n      ")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger",attrs:{role:"button",id:"burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},165:function(t,e,n){"use strict";n.r(e);var r={components:{Navbar:n(149).a},data:function(){return{slideNumber:0,currentSlide:"",slides:[{image:"/images/projects/wow-db-1.jpg",mobile:!1,text:"A screenshot of a map search result on WoWDB."},{image:"/images/projects/wow-db-2.jpg",mobile:!1,text:"A screenshot of the main page showing recent news and active streamers."},{image:"/images/projects/wow-db-3.jpg",mobile:!1,text:"A screenshot of a quest result showing quest requirements and information."},{image:"/images/projects/wow-db-4.jpg",mobile:!1,text:"A screenshot of the admin panel which allows creation and editing of news posts."},{image:"/images/projects/wow-db-5.jpg",mobile:!1,text:"A screenshot of the admin panel which allows the adding of streamers using the Twitch API."}]}},mounted:function(){this.currentSlide=this.slides[0]},methods:{changeSlide:function(t){console.log(t),1==t&&this.slideNumber--,0==t&&(console.log("going right.."),this.slideNumber++),this.slideNumber<0&&(this.slideNumber=this.slides.length-1),this.slideNumber>this.slides.length-1&&(console.log("reset to 0.."),this.slideNumber=0),console.log(this.slideNumber),this.currentSlide=this.slides[this.slideNumber]}}},o=n(17),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"body-bg"}),t._v(" "),n("Navbar"),t._v(" "),n("section",{staticClass:"container fixed-top"},[n("div",{staticClass:"middle-content"},[n("div",{staticClass:"columns mt-2"},[t._m(0),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("div",{staticClass:"image is-16by9"},[n("img",{attrs:{src:t.currentSlide.image,width:"100%",height:"100%"}})])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content has-text-white-ter"},[n("div",{staticClass:"flex-content"},[n("div",{staticClass:"arrow-left"},[n("a",[n("i",{staticClass:"fas fa-chevron-left",on:{click:function(e){return t.changeSlide(1)}}})])]),t._v(" "),n("div",{staticClass:"project-content is-size-6 has-text-weight-bold"},[t._v("\n                  "+t._s(t.currentSlide.text)+"\n                ")]),t._v(" "),n("div",{staticClass:"arrow-right"},[n("a",[n("i",{staticClass:"fas fa-chevron-right",on:{click:function(e){return t.changeSlide(0)}}})])])])])])])])])])])],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-one-quarter"},[n("div",{staticClass:"project-title is-size-3 has-text-white"},[n("span",{staticClass:"green-underline"},[t._v("Classic Guru")])]),t._v(" "),n("div",{staticClass:"project-descript has-text-white-ter mt-2"},[t._v("\n                A one stop World of Warcraft Classic community portal featuring detailed game information, guides, and Twitch.tv integration.\n              ")]),t._v(" "),n("div",{staticClass:"mt-2 has-text-light"},[n("span",{staticClass:"has-text-primary has-text-weight-bold"},[t._v("Technologies")]),t._v(" "),n("ul",{staticClass:"project-stack "},[n("li",[t._v("Bulma")]),t._v(" "),n("li",[t._v("CSS")]),t._v(" "),n("li",[t._v("HTML")]),t._v(" "),n("li",[t._v("NodeJs")]),t._v(" "),n("li",[t._v("MySQL")]),t._v(" "),n("li",[t._v("Vue")])])]),t._v(" "),n("div",{staticClass:"project-links"},[n("a",{staticClass:"button is-primary mt-2"},[t._v("View Source")])])])}],!1,null,null,null);e.default=component.exports}}]);