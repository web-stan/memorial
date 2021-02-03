(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59fc5335"],{"05b1":function(t,e,s){"use strict";s("defd")},"11e3":function(t,e,s){t.exports=s.p+"img/help-center-close.f2d9d420.svg"},"1f24":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:t.isShow,expression:"isShow"}],staticClass:"tooltip__overlay"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],ref:"modal",class:["tooltip__modal",{talk:t.withTalkLink}],attrs:{tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close(e)}}},[s("span",{staticClass:"icon icon__close icon__close-blue close-icon",on:{click:function(e){return e.preventDefault(),t.close(e)}}}),t._m(0),s("div",{staticClass:"tooltip__content"},[t._t("content")],2),t.withTalkLink?s("div",{staticClass:"tooltip__footer"},[t._t("link",[s("a",{attrs:{href:""}},[t._v(t._s(t.$ml.get("tooltip.talk")))])])],2):t._e()])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tooltip__header"},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:s("b2ba"),alt:"icon"}})])])}],n={name:"Tooltip",props:{label:{type:String,default:""},withTalkLink:{type:Boolean,default:!1}},data:function(){return{isShow:!0}},methods:{close:function(){this.isShow=!1,this.$emit("close")}},mounted:function(){this.$refs["modal"]&&this.$refs["modal"].focus()}},r=n,o=(s("05b1"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"e997308c",null);e["a"]=c.exports},"24c2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}]},[t.isLoggedIn||["home","memorials.show"].includes(t.$route.name)?a("div",[a("div",{staticClass:"help-center",class:{position:t.showHelpCenter}},[a("div",{staticClass:"help-center__background"},[a("span",{staticClass:"help-center__close",on:{click:function(e){e.preventDefault(),t.showHelpCenter=!1}}},[a("img",{attrs:{src:s("11e3"),alt:"Close"}})]),t._m(0),a("h3",{staticClass:"help-center__title"},[t._v(t._s(t.$ml.get("helpCenter.title")))]),a("div",{staticClass:"help-center__messenger-box"},[a("div",{staticClass:"help-center__messenger-item help-center__messenger-item--4"},[a("a",{staticClass:"help-center__link",attrs:{href:t.$ml.get("contacts.whatsapp.url")}},[a("img",{attrs:{src:s("e8e2"),alt:"Whatsup"}})]),a("span",[t._v(t._s(t.$ml.get("contacts.whatsapp.text")))])]),a("div",{staticClass:"help-center__messenger-item help-center__messenger-item--2"},[a("a",{staticClass:"help-center__link",attrs:{href:t.$ml.get("contacts.phone.url")}},[a("img",{attrs:{src:s("e4c8"),alt:"Phone"}})]),a("span",[t._v(t._s(t.$ml.get("contacts.phone.text")))])]),a("div",{staticClass:"help-center__messenger-item help-center__messenger-item--1"},[a("a",{staticClass:"help-center__link",attrs:{href:t.$ml.get("contacts.email.url")}},[a("img",{attrs:{src:s("8583"),alt:"Envelope"}})]),a("span",[t._v(t._s(t.$ml.get("contacts.email.text")))])])]),a("h3",{staticClass:"help-center__second-title"},[t._v(t._s(t.$ml.get("helpCenter.faq.title")))]),a("div",{staticClass:"help-center__line"}),a("div",{staticClass:"help-center__wrapper"},t._l(t.faq,(function(e){return a("div",{key:e.id,staticClass:"help-center__item",class:{show:e.isActive}},[a("div",{staticClass:"help-center__item-box",on:{click:function(t){t.preventDefault(),e.isActive=!e.isActive}}},[a("span",{staticClass:"help-center__item-text"},[t._v(" "+t._s(t.$ml.get("helpCenter.faq.items."+e.id+".name"))+" ")]),a("div",{staticClass:"help-center-x"})]),a("div",{staticClass:"help-center__item-content"},[t._v(" "+t._s(t.$ml.get("helpCenter.faq.items."+e.id+".desc"))+" ")])])})),0)])]),t.isLoggedIn||"memorials.show"!==t.$route.name?a("div",{class:["message",{withStoryBtn:t.withStoryBtn}],staticStyle:{color:"#fff"},on:{click:function(e){return e.preventDefault(),t.opened()}}},[a("div",{staticClass:"message__wrapper"},[t._m(1),a("div",{staticClass:"message__box"},[a("p",{staticClass:"message__title"},[t._v(t._s(t.$ml.get("helpCenter.message.title")))]),a("p",{staticClass:"message__text"},[t._v(t._s(t.$ml.get("helpCenter.message.desc")))])])])]):t._e()]):t._e(),t.withStoryBtn?a("router-link",{staticClass:"default-btn-plus float-button",attrs:{tag:"button",to:{name:t.isLoggedIn?"memorials.story.create":"memorials.story.auth",params:{slug:t.memorialSlug}},type:"button"}},[a("img",{attrs:{src:s("4f53"),alt:""}}),t._v(t._s(t.$ml.get("memorial.floatButton"))+" ")]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"help-icon"},[a("img",{staticClass:"help-icon__img",attrs:{src:s("93ca"),alt:"lang"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message__icon-box help-icon"},[a("img",{staticClass:"help-icon__img",attrs:{src:s("93ca"),alt:"lang"}})])}],n=s("4a9d"),r={name:"HelpCenter",props:{withStoryBtn:{type:Boolean,default:!1},memorialSlug:{type:String,default:""}},data:function(){return{showHelpCenter:!1,faq:[{id:1,isActive:!1},{id:2,isActive:!1},{id:3,isActive:!1},{id:4,isActive:!1},{id:5,isActive:!1},{id:6,isActive:!1}]}},methods:{closed:function(){this.showHelpCenter=!1,mobileCheck()&&document.querySelector("body").classList.remove("opened-help-center")},opened:function(){this.showHelpCenter=!0,mobileCheck()&&document.querySelector("body").classList.add("opened-help-center")},onClickOutside:function(){this.closed()}},computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"](["customer"])}},mounted:function(){var t=this;n["a"].$on("help-center-open",(function(){t.opened()}))}},o=r,c=s("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},"2a7d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[].concat(t.classList),on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.click(e)}}},[t._t("content",[t._t("icon-left"),s("span",{on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.click(e)}}},[t._v(t._s(t.label))]),t._t("icon-right")])],2)},i=[],n={name:"Button",props:{classList:{type:[Array,String],default:function(){return[]}},label:{type:String,default:""}},methods:{click:function(){this.$emit("clicked")}}},r=n,o=s("2877"),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"43f0":function(t,e,s){t.exports=s.p+"img/payment-card-checked.8cddcdb9.svg"},"52d0":function(t,e,s){t.exports=s.p+"img/arrow-left.14b4825e.svg"},"547a":function(t,e,s){t.exports=s.p+"img/payment-pop-close.ab0d765a.svg"},7451:function(t,e,s){"use strict";s("89a5")},8583:function(t,e,s){t.exports=s.p+"img/help-center-envelope.c6beb45d.svg"},"89a5":function(t,e,s){},"93ca":function(t,e,s){t.exports=s.p+"img/hover.188617da.svg"},"9cfa":function(t,e,s){t.exports=s.p+"img/ask-yelow.1bfb1d64.svg"},a1e7:function(t,e,s){"use strict";s("e6f7")},ae2a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"story"},[s(t.step,{tag:"component"}),t.memorial?s("Sidebar",{key:t.memorial.id,attrs:{relativeUsers:t.relativeUsers,step:t.step}}):t._e(),s("HelpCenter")],1)},i=[],n=(s("a434"),s("96cf"),s("1da1")),r=s("5530"),o=s("2f62"),c=s("24c2"),l=s("ea2c"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"story__content"},[a("header",{staticClass:"create"},[a("Button",{attrs:{classList:["btn","btn__primary-2","story__back"],label:t.$ml.get("create.memorial.common.buttons.back")},on:{clicked:t.back}},[a("span",{staticClass:"icon icon__arrow-3 btn-arrow",attrs:{slot:"icon-left"},slot:"icon-left"})]),a("router-link",{attrs:{to:{name:"home"}}},[a("img",{staticClass:"story__logo",attrs:{src:s("dd60"),alt:"Logo"}})])],1),a("div",[a("div",{staticClass:"post-plan__title-wrapper"},[a("h1",{staticClass:"post-plan__title third-header"},[t._v(t._s(t.$ml.get("create.memorial.step3.title")))]),a("div",{staticClass:"post-plan__decor"}),a("p",{staticClass:"create-memorial__title-text create-memorial__title-text--padding second-text"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.description"))+" ")])]),a("div",{staticClass:"create-memorial__form"},[a("div",{staticClass:"post-plan__wrapper"},[a("div",{staticClass:"post-plan__card-conatiner"},[a("div",{class:["payment-card","payment-card--another",{active:"monthly"===t.subscription.type}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionType("monthly")}}},[a("div",{staticClass:"payment-card__top"},[a("p",{staticClass:"payment-card__title second-text"},[t._v(t._s(t.$ml.get("payments.monthly.title")))])]),a("div",{staticClass:"payment-card__bottom"},[a("div",{staticClass:"payment-card__price-container"},[a("div",{staticClass:"payment-card__price-amount"},[t._v(t._s(t.$ml.get("payments.monthly.price")))]),a("div",{staticClass:"payment-card__price-payments"},[a("span",[t._v("/")]),t._v(t._s(t.$ml.get("payments.monthly.term")))])]),a("div",{staticClass:"payment-card__entirely"},[t._v(t._s(t.$ml.get("payments.monthly.desc")))]),a("ul",{staticClass:"payment-card__list"},[a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.0"))+" ")]),a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.1"))+" ")]),a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.2"))+" ")])])]),a("div",{staticClass:"payment-card__box-btn"},[a("button",{staticClass:"payment-card__btn"},[t._v(" "+t._s("monthly"===t.subscription.type?t.$ml.get("create.memorial.step3.subscription.oneTime.btn"):t.$ml.get("create.memorial.step3.subscription.monthly.btn"))+" ")])])]),a("div",{class:["payment-card","payment-card--another",{active:"once"===t.subscription.type}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionType("once")}}},[a("div",{staticClass:"payment-card__top"},[a("p",{staticClass:"payment-card__title second-text"},[t._v(" "+t._s(t.$ml.get("payments.once.title"))+" ")])]),a("div",{staticClass:"payment-card__bottom"},[a("div",{staticClass:"payment-card__price-container"},[a("div",{staticClass:"payment-card__price-amount"},[t._v(t._s(t.$ml.get("payments.once.price")))]),a("div",{staticClass:"payment-card__price-payments"},[a("span",[t._v("/")]),t._v(" "+t._s(t.$ml.get("payments.once.term"))+" ")])]),a("div",{staticClass:"payment-card__entirely"},[t._v(t._s(t.$ml.get("payments.once.desc")))]),a("ul",{staticClass:"payment-card__list"},[a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.0"))+" ")]),a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.1"))+" ")]),a("li",{staticClass:"payment-card__item"},[a("img",{attrs:{src:s("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.2"))+" ")])])]),a("div",{staticClass:"payment-card__box-btn"},[a("button",{staticClass:"payment-card__btn"},[t._v(" "+t._s("once"===t.subscription.type?t.$ml.get("create.memorial.step3.subscription.oneTime.btn"):t.$ml.get("create.memorial.step3.subscription.monthly.btn"))+" ")])])])]),a("div",{staticClass:"post-plan__options"},[a("div",{staticClass:"post-plan__options-title"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.subscription.options.title"))+" ")]),a("div",{staticClass:"post-plan__options-wrapper"},[a("div",{class:["post-plan__options-item","post-plan__options-second",{active:"independent"===t.subscription.installation}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionInstallation("independent")}}},[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.independent"))+" ")]),a("div",{class:["post-plan__options-item","post-plan__options-first",{active:"team"===t.subscription.installation}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionInstallation("team")}}},[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.team.label"))+" "),a("span",[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.team.info")))]),a("img",{staticClass:"post-plan__options-img",attrs:{src:s("9cfa"),alt:""},on:{click:function(e){t.isTooltipShow=!t.isTooltipShow}}})])])]),a("div",{staticClass:"form__btn-wrapper"},[a("button",{staticClass:"form__button default-second-btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.getIframe()}}},[a("img",{staticClass:"arrow-left",attrs:{src:s("52d0")}}),t._v(" "+t._s(t.$ml.get("create.memorial.step3.buttons.start"))+" ")])])])])]),t.showIframeModal&&t.iframeUrl?a("div",{staticClass:"payment-popup"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"payment-popup__content"},[a("div",{staticClass:"payment-popup__top"},[a("img",{attrs:{src:s("547a"),alt:""},on:{click:function(e){return e.preventDefault(),t.closeIframe()}}}),a("span",[t._v(t._s(t.$ml.get("create.memorial.step3.paymentTitle")))])]),a("div",{staticClass:"payment-popup__inner"},[a("iframe",{staticStyle:{height:"550px"},attrs:{src:t.iframeUrl}})])])]):t._e(),t.isTooltipShow?a("Tooltip",{attrs:{label:t.$ml.get("payments.help.label"),withTalkLink:!1},on:{close:function(e){t.isTooltipShow=!1}}},[a("div",{staticClass:"tooltip__description",attrs:{slot:"content"},slot:"content"},[a("span",[t._v(" "+t._s(t.$ml.get("payments.help.text"))+" ")])])]):t._e()],1)},m=[],u=s("2a7d"),_=s("1f24"),d={name:"Payment",components:{Button:u["a"],Tooltip:_["a"]},data:function(){return{showIframeModal:!1,isTooltipShow:!1}},computed:Object(r["a"])({},Object(o["b"])({memorial:"story/memorial",subscription:"memorial/getSubscription",iframeUrl:"memorial/getIframeUrl"})),methods:{back:function(){this.$router.push({name:"memorials.edit",params:{id:this.memorial.id}})},onClickOutside:function(){this.closeIframe()},getIframe:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("memorial/updatePaymentPlan",t.memorial.id);case 2:return e.next=4,t.showIframe();case 4:case"end":return e.stop()}}),e)})))()},showIframe:function(){this.showIframeModal=!0,document.querySelector("body").classList.add("payment-popup-open")},closeIframe:function(){this.showIframeModal=!1,document.querySelector("body").classList.remove("payment-popup-open")},setSubscriptionType:function(t){this.$store.dispatch("memorial/setSubscriptionType",t)},setSubscriptionInstallation:function(t){this.$store.dispatch("memorial/setSubscriptionInstallation",t)},goTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$router.push({name:t,params:e})},goToMemorial:function(){this.$router.push({name:"memorials.edit",params:{id:this.memorial.id}})}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("story/getOwnerMemorial",t.$route.params.slug);case 2:case"end":return e.stop()}}),e)})))()}},f=d,v=(s("a1e7"),s("2877")),h=Object(v["a"])(f,p,m,!1,null,null,null),g=h.exports,y={name:"MemorialPayment",components:{Sidebar:l["a"],HelpCenter:c["a"],Payment:g},data:function(){return{step:"payment"}},methods:{},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])({isMemorialExist:"story/isMemorialExist",memorial:"story/memorial"})),{},{relativeUsers:function(){var t=this.$store.getters["story/relativeUsers"];return{count:t.length,data:t.splice(0,4)}}}),created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("story/getOwnerMemorial",t.$route.params.slug);case 2:if(t.isMemorialExist){e.next=7;break}return e.next=5,t.$router.push({name:"home"});case 5:e.next=10;break;case 7:if(!t.memorial.paid){e.next=10;break}return e.next=10,t.$router.push({name:"memorials.edit",params:{id:t.memorial.id}});case 10:case"end":return e.stop()}}),e)})))()}},b=y,C=(s("7451"),Object(v["a"])(b,a,i,!1,null,"c47158e0",null));e["default"]=C.exports},b2ba:function(t,e,s){t.exports=s.p+"img/baseline-help-24px.2120df4e.svg"},defd:function(t,e,s){},e4c8:function(t,e,s){t.exports=s.p+"img/help-center-phone.52fa6895.svg"},e6f7:function(t,e,s){},e8e2:function(t,e,s){t.exports=s.p+"img/help-center-whatsup.ee349ff5.svg"}}]);
//# sourceMappingURL=chunk-59fc5335.d916e19a.js.map