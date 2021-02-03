<template>
  <section class="welcome-screen">
    <div class="welcome-screen__container">

      <header class="welcome-screen__header">
        <div class="welcome-screen__header-wrapper">
          <router-link :to="{ name: 'home' }">
            <img class="welcome-screen__img" src="@/assets/img/icon/welcome-screen-logo.svg" alt="Logo">
          </router-link>
        </div>
        <p class="welcome-screen__header-text">{{ $ml.get('create.memorial.welcome.subtitle') }}</p>
      </header>
      <h3 class="welcome-screen__title third-header">{{ $ml.get('create.memorial.welcome.title') }}</h3>
      <div class="welcome-screen__decor"></div>
      <p class="welcome-screen__sub-title second-text"
         v-html="$ml.get('create.memorial.welcome.desc')"
      ></p>

      <div class="welcome-screen__scroll">
        <div class="welcome-screen__middle">
          <!-- welcome-screen__item -->
          <div class="welcome-screen__item">
            <div class="welcome-screen__img-box">
              <img src="~@/assets/img/welcome-screen-1.png" alt="">
            </div>
            <p class="welcome-screen__item-text">{{ $ml.get('create.memorial.welcome.img1') }}</p>
          </div>

          <!-- welcome-screen__item -->
          <div class="welcome-screen__item">
            <div class="welcome-screen__img-box">
              <img src="~@/assets/img/welcome-screen-2.png" alt="">
            </div>
            <p class="welcome-screen__item-text">{{ $ml.get('create.memorial.welcome.img2') }}</p>
          </div>

          <!-- welcome-screen__item -->
          <div class="welcome-screen__item">
            <div class="welcome-screen__img-box">
              <img src="~@/assets/img/welcome-screen-3.png" alt="">
            </div>
            <p class="welcome-screen__item-text">{{ $ml.get('create.memorial.welcome.img3') }}</p>
          </div>
        </div>
      </div>

      <router-link :to="{ name: 'memorials.create.step1' }">
        <button class=" welcome-screen__button default-second-btn">
          <img class="arrow-left" src="~@/assets/img/icon/arrow-left.svg">
          {{ $ml.get('create.memorial.welcome.button') }}
        </button>
      </router-link>

    </div>

    <HelpCenter />
  </section>
</template>

<script>
  // @ is an alias to /src
  import HelpCenter from '@/components/HelpCenter.vue';
  import { mapGetters } from "vuex";

  export default {
    name: 'MemorialCreate',
    components: {
      HelpCenter
    },
  }
</script>

<style lang="scss">
  @import "~@/assets/scss/pages/welcome.scss";
</style>