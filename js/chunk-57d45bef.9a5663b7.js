(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57d45bef"],{1558:function(t,e,a){},"30ad":function(t,e,a){t.exports=a.p+"img/arrow-right.62e72d4c.svg"},"52d0":function(t,e,a){t.exports=a.p+"img/arrow-left.14b4825e.svg"},"9cfa":function(t,e,a){t.exports=a.p+"img/ask-yelow.1bfb1d64.svg"},"9fa1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-memorial__sidebar"},[a("div",{staticClass:"create-memorial__sidebar__wrapper"},[a("h2",{staticClass:"create-memorial__sidebar-title"},[t._v(t._s(t.$ml.get("create.memorial.sidebar.title")))]),a("div",{staticClass:"create-memorial__sidebar__wrapper__steps"},[a("ul",{staticClass:"create-memorial__list"},[a("router-link",{staticClass:"create-memorial__list-item",class:{active:1==t.step,visited:t.step>1},attrs:{tag:"li",to:{name:"memorials.create.step1"}}},[t._v(t._s(t.$ml.get("create.memorial.sidebar.nav.step1"))+" ")]),a("router-link",{staticClass:"create-memorial__list-item",class:{active:2==t.step,visited:t.step>2},attrs:{tag:"li",to:{name:"memorials.create.step2"}}},[t._v(" "+t._s(t.$ml.get("create.memorial.sidebar.nav.step2"))+" ")]),a("router-link",{class:["create-memorial__list-item",{active:3===t.step}],attrs:{tag:"li",to:{name:"memorials.create.step3"}}},[t._v(" "+t._s(t.$ml.get("create.memorial.sidebar.nav.step3"))+" ")])],1)])]),t.step>1?a("div",{staticClass:"create-memorial__sidebar-main"},[a("div",{staticClass:"create-memorial__sidebar-img"},[t.memorial.profilePhoto?a("img",{attrs:{src:t.memorial.profilePhoto.url,alt:""}}):t._e(),a("div",{staticClass:"create-memorial__box"},[a("div",{staticClass:"create-memorial__name"},[t._v(t._s(t.memorial.name)),a("span",[t._v(t._s(t.$ml.get("create.memorial.sidebar.rip")))])]),a("div",{staticClass:"create-memorial__years"},[t._v(t._s(t.memorial.deathDate)+" - "+t._s(t.memorial.birthDate))])])])]):t._e()])},i=[],r={name:"sidebar",props:["step","memorial"]},n=r,m=a("2877"),l=Object(m["a"])(n,s,i,!1,null,"7dd04e12",null);e["a"]=l.exports},a76a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"create-memorial post-plan"},[s("div",{staticClass:"create-memorial__container"},[s("header",{staticClass:"create-memorial__header"},[s("router-link",{attrs:{to:{name:"memorials.create.step2"}}},[s("button",{staticClass:"default-arrow-btn create-memorial__btn-header",attrs:{type:"button"}},[s("img",{staticClass:"arrow-right",attrs:{src:a("30ad")}}),t._v(t._s(t.$ml.get("create.memorial.common.buttons.back")))])]),s("div",{staticClass:"create-memorial__header-wrapper"},[s("router-link",{attrs:{to:{name:"home"}}},[s("img",{staticClass:"create-memorial__img",attrs:{src:a("dd60"),alt:"Logo"}})])],1)],1),s("div",{staticClass:"post-plan__title-wrapper"},[s("h1",{staticClass:"post-plan__title third-header"},[t._v(t._s(t.$ml.get("create.memorial.step3.title")))]),s("div",{staticClass:"post-plan__decor"}),s("p",{staticClass:"create-memorial__title-text create-memorial__title-text--padding second-text"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.description"))+" ")])]),s("div",{staticClass:"create-memorial__form"},[s("div",{staticClass:"post-plan__wrapper"},[s("div",{staticClass:"post-plan__card-conatiner"},[s("div",{class:["payment-card","payment-card--another",{active:"monthly"===t.subscription.type}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionType("monthly")}}},[s("div",{staticClass:"payment-card__top"},[s("p",{staticClass:"payment-card__title second-text"},[t._v(t._s(t.$ml.get("payments.monthly.title")))])]),s("div",{staticClass:"payment-card__bottom"},[s("div",{staticClass:"payment-card__price-container"},[s("div",{staticClass:"payment-card__price-amount"},[t._v(t._s(t.$ml.get("payments.monthly.price")))]),s("div",{staticClass:"payment-card__price-payments"},[s("span",[t._v("/")]),t._v(t._s(t.$ml.get("payments.monthly.term")))])]),s("div",{staticClass:"payment-card__entirely"},[t._v(t._s(t.$ml.get("payments.monthly.desc")))]),s("ul",{staticClass:"payment-card__list"},[s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.0"))+" ")]),s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.1"))+" ")]),s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.monthly.features.2"))+" ")])])]),s("div",{staticClass:"payment-card__box-btn"},[s("button",{staticClass:"payment-card__btn"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.subscription.monthly.btn"))+" ")])])]),s("div",{class:["payment-card","payment-card--another",{active:"one-time"===t.subscription.type}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionType("one-time")}}},[s("div",{staticClass:"payment-card__top"},[s("p",{staticClass:"payment-card__title second-text"},[t._v(" "+t._s(t.$ml.get("payments.once.title"))+" ")])]),s("div",{staticClass:"payment-card__bottom"},[s("div",{staticClass:"payment-card__price-container"},[s("div",{staticClass:"payment-card__price-amount"},[t._v(t._s(t.$ml.get("payments.once.price")))]),s("div",{staticClass:"payment-card__price-payments"},[s("span",[t._v("/")]),t._v(" "+t._s(t.$ml.get("payments.once.term"))+" ")])]),s("div",{staticClass:"payment-card__entirely"},[t._v(t._s(t.$ml.get("payments.once.desc")))]),s("ul",{staticClass:"payment-card__list"},[s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.0"))+" ")]),s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.1"))+" ")]),s("li",{staticClass:"payment-card__item"},[s("img",{attrs:{src:a("43f0"),alt:""}}),t._v(" "+t._s(t.$ml.get("payments.once.features.2"))+" ")])])]),s("div",{staticClass:"payment-card__box-btn"},[s("button",{staticClass:"payment-card__btn"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.subscription.oneTime.btn"))+" ")])])])]),s("div",{staticClass:"post-plan__options"},[s("div",{staticClass:"post-plan__options-title"},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.subscription.options.title"))+" ")]),s("div",{staticClass:"post-plan__options-wrapper"},[s("div",{class:["post-plan__options-item","post-plan__options-second",{active:"independent"===t.subscription.installation}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionInstallation("independent")}}},[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.independent"))+" ")]),s("div",{class:["post-plan__options-item","post-plan__options-first",{active:"team"===t.subscription.installation}],on:{click:function(e){return e.preventDefault(),t.setSubscriptionInstallation("team")}}},[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.team.label"))+" "),s("span",[t._v(t._s(t.$ml.get("create.memorial.step3.subscription.options.team.info")))]),s("img",{staticClass:"post-plan__options-img",attrs:{src:a("9cfa"),alt:""}})])])]),s("div",{staticClass:"form__btn-wrapper"},[s("button",{staticClass:"form__button default-second-btn",attrs:{type:"button"}},[s("img",{staticClass:"arrow-left",attrs:{src:a("52d0")}}),t._v(" "+t._s(t.$ml.get("create.memorial.step3.buttons.start"))+" ")]),s("button",{staticClass:"form__button-white default-second-btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.goTo("home")}}},[t._v(" "+t._s(t.$ml.get("create.memorial.step3.buttons.plan"))+" ")])])])])]),s("sidebar",{attrs:{step:3,memorial:t.memorialCreated}})],1)},i=[],r=a("5530"),n=(a("96cf"),a("1da1")),m=a("2f62"),l=a("9fa1"),o={name:"MemorialCreateStep3",components:{sidebar:l["a"]},data:function(){return{}},methods:{setSubscriptionType:function(t){this.$store.dispatch("memorial/setSubscriptionType",t)},setSubscriptionInstallation:function(t){this.$store.dispatch("memorial/setSubscriptionInstallation",t)},goTo:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("home"!=t){a.next=11;break}return a.next=3,e.$store.dispatch("memorial/sendEmail");case 3:return a.next=5,e.$store.commit("memorial/setMemorialFormData",null);case 5:return a.next=7,e.$store.commit("memorial/setMemorialCreated",null);case 7:return a.next=9,e.$store.commit("memorial/setUploadedFile",null);case 9:return a.next=11,e.$store.commit("memorial/setIsUpdated",!1);case 11:return a.next=13,e.$router.push({name:t});case 13:case"end":return a.stop()}}),a)})))()}},computed:Object(r["a"])({},Object(m["c"])({memorial:"memorial/getMemorialFormData",memorialCreated:"memorial/getMemorialCreated",step:"memorial/getStep",subscription:"memorial/getSubscription"})),mounted:function(){this.$store.commit("memorial/setStep",3)}},c=o,p=(a("f5f1"),a("2877")),_=Object(p["a"])(c,s,i,!1,null,null,null);e["default"]=_.exports},dd60:function(t,e,a){t.exports=a.p+"img/welcome-screen-logo.c436be2b.svg"},f5f1:function(t,e,a){"use strict";a("1558")}}]);
//# sourceMappingURL=chunk-57d45bef.9a5663b7.js.map