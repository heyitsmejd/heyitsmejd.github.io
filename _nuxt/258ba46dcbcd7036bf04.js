(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1fcd4353",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r=n(172);n.n(r).a},174:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".navbar{background:none!important}.navbar-burger{color:#e8e8e8}.is-faded{background:#1f1e1e!important}.is-logo{color:#fff;font-family:Quicksand;font-weight:400}@media screen and (max-width:1087px){.navbar-menu{background-color:#2b2828!important}.navbar-item,.navbar-link{color:#00d1b2}}@media screen and (max-width:992px){a.navbar-item.is-logo.nuxt-link-active{height:3.25em}}@media screen and (min-width:1088px){.nuxt-link-exact-active{color:#fff!important;border-bottom:3px solid #00d1b2}.navbar-item{color:#d3d3d3;font-weight:700;font-size:1em;margin-right:2em}.navbar-item:last-child{margin-right:0}.navbar-item:hover{color:#00d1b2!important}a.navbar-item.is-logo:hover{color:#fff!important}}",""])},175:function(t,e,n){"use strict";var r={mounted:function(){var t=document.getElementById("burger"),e=document.getElementById("navMenu");t.addEventListener("click",function(){t.classList.toggle("is-active"),e.classList.toggle("is-active")});var n=document.querySelector("#navScroll");window.onscroll=function(){window.pageYOffset>=50?(n.classList.add("is-faded"),n.classList.remove("navScroll")):(n.classList.add("navScroll"),n.classList.remove("is-faded"))}},data:function(){return{startY:120}}},o=(n(173),n(18)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-fixed-top is-transparent navScroll",attrs:{id:"navScroll",role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("nuxt-link",{staticClass:"navbar-item is-logo",attrs:{to:"/"}},[n("span",{staticClass:"is-size-3"},[t._v("JD"),n("span",{staticClass:"has-text-primary"},[t._v("K")])])]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"navbar-menu navbar-end",attrs:{id:"navMenu"}},[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/projects"}},[t._v("\n        Projects\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/contact"}},[t._v("\n        Contact\n      ")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger",attrs:{role:"button",id:"burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=component.exports},176:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("38a4b1a7",content,!0,{sourceMap:!1})},179:function(t,e,n){"use strict";var r=n(176);n.n(r).a},180:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".is-medium-size{max-width:600px}.work-check{display:none}",""])},192:function(t,e,n){"use strict";n.r(e);n(34);var r=n(175),o=(n(91),{components:{Navbar:r.a},head:function(){return{title:"Heyitsmejd - Contact"}},data:function(){return{contacted:!1,message:"",email:"",name:""}},methods:{contact:function(){var t=this;this.$axios.post("https://submit-form.com/KMxEtMJueiyLfz_272i6p",{name:this.name,email:this.email,message:this.message}).then(function(e){t.contacted=!0,t.name="",t.email="",t.message=""})},resetForm:function(){this.contacted=!1}}}),l=(n(179),n(18)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"body-bg"}),t._v(" "),n("Navbar"),t._v(" "),n("section",{staticClass:"container is-medium-size fixed-top"},[t.contacted?n("div",{staticClass:"middle-content full-h"},[n("div",{staticClass:"is-size-4 has-text-grey-lighter has-text-centered mb-2"},[t._m(0),t._v(" "),n("p",{staticClass:"has-text-primary has-text-weight-bold is-size-5 mt-2"},[t._v("\n            Need to send another message?\n          ")]),t._v(" "),n("button",{staticClass:"button is-primary has-text-weight-bold mt-2 is-medium",on:{click:t.resetForm}},[t._v("Contact Me")])])]):n("div",{staticClass:"middle-content full-h"},[t._m(1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.contact(e)}}},[n("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:"_honeypot",tabindex:"-1",autocomplete:"off"}}),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label has-text-grey-lighter"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label has-text-grey-lighter"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label has-text-grey-lighter"},[t._v("Message")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{id:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._v(" "),t._m(2)])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"has-text-weight-bold"},[this._v("Thanks for the message! "),e("br"),this._v(" I'll contact you as soon as possible.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-size-4 has-text-grey-lighter has-text-centered mb-2"},[e("p",{staticClass:"has-text-weight-bold"},[this._v("Have something in mind?")]),this._v(" "),e("p",{staticClass:"has-text-primary has-text-weight-bold"},[this._v("Contact Me")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{type:"submit",id:"submit"}},[this._v("Submit")])])])}],!1,null,null,null);e.default=component.exports}}]);