<template>
  <header :class="['dashboard-header', {'open': isShow}]">
    <div class="dashboard-header__main" dir="ltr">
      <div class="dashboard-header__user">
        <div class="dashboard-header__avatar">
          <img src="~@/assets/img/dashboard-avatar.svg" alt="avatar">
        </div>

        <div :class="['dashboard-header__notification', {'mobile-hide': !isShow}]">
          <span class="icon bell-icon"></span>
          <div class="count count__bg">
            <span class="count__value">6</span>
          </div>
        </div>
      </div>

      <router-link tag="div" :to="{name: 'home'}" :class="['dashboard-header__logo', {'menu-active': isShow}]"></router-link>

      <div :class="['menu-btn', {'menu-active': isShow}]" @click.stop.prevent="toggleMenu">
        <div :class="['hamburger', {'menu-active': isShow}]">
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="dashboard-header__menu">
        <div class="dashboard-header__options" @click.prevent="isShow = !isShow">
          <span class="icon caret"></span>
          <span>אתר הנצחה</span>
        </div>
        <div class="dashboard-header__account">
          <span>אזור אישי</span>
        </div>
      </div>
    </div>
    <div
      class="dashboard-header__sub"
      dir="ltr"
      v-if="isShow"
      v-click-outside="onClickOutside"
    >
      <div class="dashboard-header__links-mobile">
        <a href="#" class="link">מודעת אבל דיגיטלית</a>
        <a href="#" class="link">מצבה בהתאמה אישית</a>

        <div class="btn btn__primary btn-site">
          <span>אתר הנצחה</span>
        </div>
      </div>
      <div class="dashboard-header__links">
        <div class="btn btn__primary btn-advertising">
          <span>פרסום האתר</span>
        </div>
        <div class="btn btn__second btn-preview">
          <span>תצוגה מקדימה</span>
        </div>
      </div>

      <div class="dashboard-header__control">
        <div class="relatives-wrapper">
          <div class="btn-wrapper">
            <div class="payment-wrapper">
              <div class="btn btn__third btn-payment">
                <span>בחירת תכנית לתשלום</span>
              </div>
            </div>
            <div class="btn btn__third btn-add">
              <span>הזמן קרובים</span>
              <span class="icon icon__add-blue add-icon"></span>
            </div>
          </div>

          <div class="relatives">
            <div class="relatives__items">
              <div class="relatives__item">
                <img src="~@/assets/img/shirli.png" alt="relative 1">
              </div>
              <div class="relatives__item">
                <img src="~@/assets/img/roi.png" alt="relative 2">
              </div>
              <div class="relatives__item">
                <img src="~@/assets/img/jennifer.png" alt="relative 3">
              </div>
              <div class="relatives__item">
                <img src="~@/assets/img/elilevy.png" alt="relative 4">
              </div>
              <div class="relatives__item">
                <img src="~@/assets/img/shirli.png" alt="relative 5">
              </div>
              <div class="relatives__item">
                <img src="~@/assets/img/roi.png" alt="relative 6">
              </div>

              <div class="relatives__item count">
                <span>+12</span>
              </div>

              <span class="relatives__label-mobile">:קרובים מספרים</span>
            </div>

            <span class="relatives__label">:קרובים מספרים</span>
          </div>
        </div>

        <div class="dashboard-header__nav">
          <div class="languages">
            <Dropdown
              defaultText="עברית"
              :items="languages"
            >
              <span slot="dropdown__icon" class="icon icon__globe-blue"></span>
            </Dropdown>
          </div>

          <!--          fixme: fix image-->
          <div class="platform">
            <Dropdown
              defaultText=""
              :items="platforms"
            >
              <span slot='dropdown__text' class='icon icon__desktop-blue desktop-icon'></span>
            </Dropdown>
          </div>

          <div class="edit-wrapper">
            <div class="btn btn__primary-2 btn-edit">
              <span>עריכה</span>
              <span class="icon icon__edit edit-icon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "@/components/Dropdown";

export default {
  name: "Header",
  components: {
    Dropdown
  },
  data() {
    return {
      isShow: false,
      isMenuBtnDisabled: false,
      languages: [
        {
          value: 'he',
          label: 'Hebrew',
        },
        {
          value: 'en',
          label: 'English',
        },
      ],
      platforms: [
        {
          value: 'desktop',
          label: '<img src="~@/assets/img/icon/bell.svg"/>',
        },
      ],
    };
  },
  methods: {
    onClickOutside() {
      if(!this.isMobile) {
        this.isShow = false;
      }
    },
    toggleMenu(event) {
      event.stopPropagation();

      this.isShow = !this.isShow;
    },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/dashboard-header.scss";
</style>