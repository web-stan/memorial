<template>
    <header id="header-screen" class="header-screen major-screen__header"
    >
        <img class="header-screen-hamburger" src="~@/assets/img/icon/hamburger.svg" alt=""
             @click.prevent="showHamburger = true"
        >

        <div class="header-screen__right"
             v-click-outside="vcoConfig"
        >

            <div class="header-screen__dropdown major-screen-about">
                <a href="https://eternity.co.il/about-us" target="_blank" class="header-screen__dropdown-text">{{
                    $ml.get('header.about') }}</a>
            </div>
            <div class="header-screen__dropdown major-screen-services"
                 @click.prevent="showServicesMenu=!showServicesMenu"
                 :class="{'show': showServicesMenu}"
            >
                <a href="#" class="header-screen__dropdown-text">{{ $ml.get('header.services') }}</a>
                <img class="major-screen-arrow" src="~@/assets/img/icon/modal-arrow-down.svg" alt="Arrow Down">

                <div class="major-screen-dropdown major-screen-services__dropdown">
                    <a class="major-screen-dropdown__item"
                       href="http://mixel.co.il/clients/eternity/"
                       @click.prevent="openUrl('http://mixel.co.il/clients/eternity/')"
                    >{{ $ml.get('header.servicesLink.link1') }}</a>
                    <a class="major-screen-dropdown__item"
                       href="#"
                       @click.prevent="openUrl('http://mixel.co.il/clients/eternity/obituaries')"
                    >{{ $ml.get('header.servicesLink.link2') }}</a>
                    <a class="major-screen-dropdown__item"
                       href="#"
                       @click.prevent="openUrl('http://mixel.co.il/clients/eternity/gravestones')"
                    >{{ $ml.get('header.servicesLink.link3') }}</a>
                </div>
            </div>
        </div>

        <div class="header-screen__logo" :class="{'mod-x': $store.getters['auth/isLoggedIn']}">
            <img src="~@/assets/img/major-logo.svg" alt="Logo">
        </div>

        <div class="header-screen__left"
             v-click-outside="vcoConfig"
        >

            <languages />

            <a v-if="!$store.getters['auth/isLoggedIn']" @click.prevent="login()" href="#" class="header-screen__button">{{ $ml.get('header.login') }}</a>
<!--            <a v-else @click.prevent="$store.dispatch('auth/logout')" href="#" class="header-screen__button">{{ $ml.get('header.logout') }}</a>-->
<!--            $store.dispatch('auth/login')-->
        </div>

        <transition name="fade">
            <div class="menu" v-if="showHamburger">
                <div class="menu__top">
                    <img class="menu__humburger" src="~@/assets/img/icon/humburger-close.svg"
                         @click.prevent="showHamburger = false"
                    >
                    <div class="menu__logo-box">
                        <img src="~@/assets/img/icon/menu-logo.png" alt="Logo">
                    </div>
                    <div class="menu__top-box">
                        <languages />
                        <button
                                v-if="!$store.getters['auth/isLoggedIn']"
                                @click.prevent="login()"
                                type="button" class="menu__btn"
                        >{{ $ml.get('menu.login') }}</button>
                        <!--                <button v-else @click.prevent="$store.dispatch('auth/logout')" type="button" class="menu__btn">-->
                        <!--                    {{ $ml.get('header.logout') }}-->
                        <!--                </button>-->
                    </div>
                </div>

                <div class="menu__middle">
                    <button type="button" class="menu__button default-btn">{{ $ml.get('menu.button1') }}<span>{{ $ml.get('menu.button1Span') }}</span></button>
                    <button type="button" class="menu__button default-btn">{{ $ml.get('menu.button2') }}</button>
                    <button type="button" class="menu__button default-btn menu__button--mod">{{ $ml.get('menu.button3') }}</button>

                    <a href="#" class="menu__link">{{ $ml.get('menu.link1') }}</a>
                    <a href="#" class="menu__link">{{ $ml.get('menu.link2') }}</a>
                    <a href="#" class="menu__link">{{ $ml.get('menu.link3') }}</a>
                    <a href="#" class="menu__link">{{ $ml.get('menu.link4') }}</a>
                </div>

                <div class="menu__bottom">
                    <div class="menu__title">{{ $ml.get('menu.contacts') }}</div>
                    <div class="menu__conection">
                        <div class="menu__conection-item">
                            <a class="menu__relink" :href="$ml.get('contacts.whatsapp.url')">
                                <img src="~@/assets/img/icon/menu-whatsap.svg" alt="">
                            </a>
                            <span>{{ $ml.get('contacts.whatsapp.text') }}</span>
                        </div>
                        <div class="menu__conection-item">
                            <a class="menu__relink" :href="$ml.get('contacts.camera.text')">
                                <img src="~@/assets/img/icon/menu-camera.svg" alt="">
                            </a>
                            <span>{{ $ml.get('contacts.camera.text') }}</span>

                        </div>
                        <div class="menu__conection-item">
                            <a class="menu__relink" :href="$ml.get('contacts.phone.text')">
                                <img src="~@/assets/img/icon/menu-phone.svg" alt="">
                            </a>
                            <span>{{ $ml.get('contacts.phone.text') }}</span>

                        </div>
                        <div class="menu__conection-item">
                            <a class="menu__relink" :href="$ml.get('contacts.email.url')">
                                <img src="~@/assets/img/icon/menu-envelope.svg" alt="">
                            </a>
                            <span>{{ $ml.get('contacts.email.text') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script>
    import Languages from "@/components/Languages";

    export default {
        name: 'Header',
        components: {Languages},
        props: {},
        data() {
            return {
                showHamburger: false,
                showServicesMenu: false,
                vcoConfig: {
                    handler: this.onClickOutside,
                    middleware: this.middleware,
                    events: ['dblclick', 'click'],
                    // Note: The default value is true, but in case you want to activate / deactivate
                    //       this directive dynamically use this attribute.
                    isActive: true,
                    // Note: The default value is true. See "Detecting Iframe Clicks" section
                    //       to understand why this behaviour is behind a flag.
                    detectIFrame: true
                }
            }
        },
        methods: {
            // Note: The middleware will be executed if the event was fired outside the element.
            //       It should have only sync functionality and it should return a boolean to
            //       define if the handler should be fire or not
            middleware(event) {
                // console.log(event.target.className);
                return event.target.className.indexOf('header-screen__arrow') == -1
                    && event.target.className.indexOf('header-screen__dropdown-text') == -1
                    && event.target.className.indexOf('major-screen-dropdown__item') == -1
                    && event.target.className.indexOf('icon-globe') == -1
                    && event.target.className.indexOf('major-screen-arrow') == -1
                    && event.target.className.indexOf('header-screen-hamburger') == -1
                    ;
            },
            openUrl(url) {
                window.open(url)
            },
            onClickOutside() {
                // console.log('Clicked outside (Using config), middleware returned true :)')
                this.showLangMenu = false;
                this.showServicesMenu = false;
            },
            async login() {
                await this.$store.dispatch('auth/loginTest');
                // let url = decodeURIComponent(this.$siteUrl+'/auth/handle');
                // location.href = 'https://eternity.co.il/sso?type=login&lang='+this.$ml.current+'&redirectURL='+url;
                // await this.$store.dispatch('auth/login');
            }
        }
    }
</script>
