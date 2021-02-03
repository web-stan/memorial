<template>
  <div>
      <section class="major-screen">

          <div class="container major-screen__container">
            <!-- ----- header ----- -->
            <Header />

            <!-- ---- title ---- -->
            <div class="memorial-title">
              <h2 class="memorial-title__title second-header" v-html="$ml.get('pages.home.mainScreen.title')"></h2>
              <p class="memorial-title__text">{{ $ml.get('pages.home.mainScreen.desc') }}</p>
              <router-link :to="{ name: 'memorials.create.welcome' }">
                <button type="button" class="default-btn memorial-title__btn">{{ $ml.get('pages.home.mainScreen.button') }}</button>
              </router-link>
            </div>

            <a class="major-screen__scroll-to scroll-to" href="#services" v-smooth-scroll>
              <span class="scroll-to__text">
                {{ $ml.get('pages.home.mainScreen.scrollTo') }}
              </span>
              <img class="scroll-to__arrow" src="~@/assets/img/icon/modal-arrow-down.svg" alt="Arrow Down">
            </a>
          </div>
      </section>

    <!-- ---- Section SERVICE ---- -->
    <section class="service" id="services">
      <div class="container">
        <!-- service__row 1 -->
        <div class="service__row"
             v-for="si in 4" :key="'service-'+si"
             :class="{'service__row--order': si == 2 || si == 4}"
        >
          <div class="service__block service__block--padding"
               :class="{'service__order': si == 2 || si == 4, 'service__inrow': si == 1 || si == 3}"
          >
            <div class="service__info info-block">
              <h3 class="info-block__header third-header">
                {{ $ml.get(`pages.home.services.items.${si}.name`) }}
              </h3>
              <p class="info-block__text first-text">
                {{ $ml.get(`pages.home.services.items.${si}.desc`) }}
              </p>
              <div v-if="si == 4">
                <router-link :to="{ name: 'memorials.create.welcome' }">
                  <button type="button" class="default-btn">{{ $ml.get(`pages.home.services.items.${si}.button`) }}</button>
                </router-link>
              </div>
              <div v-else>
                <button type="button" class="default-btn">{{ $ml.get(`pages.home.services.items.${si}.button`) }}</button>
              </div>
            </div>
          </div>

          <div class="service__block"
                :class="{'service__block-background': si == 3,'service__relative': si == 4}"
          >
            <div class="security-icon" v-if="si == 4">
              <img src="~@/assets/img/icon/security-icon.svg" class="service__icon" alt="Security">
            </div>
            <div class="service__content"
                 :class="{
                    'service__content--bg1': si == 1,
                    'service__content--bg2': si == 2 || si == 4,
                    ' service__content--image': si == 3
                  }"
            >
              <img :src="require(`../../assets/img/mask${si}.png`)" alt="" class="service__img">
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ---- Section EXAMPLES ---- -->
    <section class="examples">
      <div class="container">
        <div class="examples__title-wrapper">
          <h3 class="examples__header third-header">{{ $ml.get('pages.home.examples.title') }}</h3>
          <p class="examples__descr-text second-text">{{ $ml.get('pages.home.examples.subtitle') }}</p>
        </div>

        <div class="examples__row">
          <!-- card 4 -->
          <div class="card card--4">
            <!-- card__top -->
            <div class="card__top card__top--mod-2">
              <div class="card__header">
                <div class="card__header-box">
                  <span class="card__link">קרובים מספרים</span>
                  <span class="card__link">סיפור חיים</span>
                  <span class="card__link card__link--bigger">סא״ל יוסי קורקין</span>
                </div>
                <div class="card__header-logo">
                  <img class="card__logo" src="~@/assets/img/icon/card-logo.svg" alt="Logo">
                </div>
              </div>
              <img class="card__top-arrow" src="~@/assets/img/icon/card-arrow.svg" alt="">
              <div class="card__main">
                <div class="card__name card__name--mod">
                  <div>אריק</div>
                  <span>(ז״ל)</span>
                  איינשטיין
                </div>
                <div class="card__foto-years card__foto-years--mod">
                  1964 - 1967
                </div>
              </div>

              <div class="card__footer card__footer--mod">
                <div class="card__footer-small-foto">
                  <img src="~@/assets/img/card-small-foto.svg" alt="Foto">
                  <div class="card__footer-foto-caption">
                    <span>יעל בן חורין</span>
                    חברה
                  </div>
                </div>

                <div class="card__footer-left">
                  <div class="card__footer-quotes"><img src="~@/assets/img/icon/card-quotes.svg" alt="Quotes"></div>
                  <div class="card__footer-text">איש הים, שחצה ימים והנהיג לבבות</div>
                </div>
              </div>
            </div>

            <div class="card__bottom">
              <h4 class="fourth-header card__bottom-header">עופרה חזה</h4>
              <p class="card__bottom-text second-text">
                כאן נכנס טקסט תיאור קצר, כאן
                נכנס טקסט תיאור קצר, אן נכנס טקסט</p>
              <button type="button" class="default-btn card__button">
                {{ $ml.get('pages.home.examples.button') }}
              </button>
            </div>
          </div>

          <!-- card 3 -->
          <div class="card card--3">
            <!-- card__top -->
            <div class="card__top">
              <div class="card__header">
                <div class="card__header-box">
                  <span class="card__link">קרובים מספרים</span>
                  <span class="card__link">סיפור חיים</span>
                  <span class="card__link card__link--bigger">סא״ל יוסי קורקין</span>
                </div>
                <div class="card__header-logo">
                  <img class="card__logo" src="~@/assets/img/icon/card-logo.svg" alt="Logo">
                </div>
              </div>
              <img class="card__top-arrow" src="~@/assets/img/icon/card-arrow.svg" alt="">
              <div class="card__main">
                <div class="card__img-wrapper">
                  <img src="~@/assets/img/card-foto-1.svg" alt="Foto">
                </div>
                <div class="card__foto-caption">
                  אתר הנצחה
                </div>
                <div class="card__name">
                  <span>(ז״ל)</span>
                  עפרה חזה
                </div>
                <div class="card__foto-years">
                  1964 - 1967
                </div>
              </div>

              <div class="card__footer">
                <div class="card__footer-small-foto">
                  <img src="~@/assets/img/card-small-foto.svg" alt="Foto">
                  <div class="card__footer-foto-caption">
                    <span>יעל בן חורין</span>
                    חברה
                  </div>
                </div>

                <div class="card__footer-left">
                  <div class="card__footer-quotes"><img src="~@/assets/img/icon/card-quotes.svg" alt="Quotes"></div>
                  <div class="card__footer-text">איש הים, שחצה ימים והנהיג לבבות</div>
                </div>
              </div>
            </div>

            <div class="card__bottom">
              <h4 class="fourth-header card__bottom-header">עופרה חזה</h4>
              <p class="card__bottom-text second-text">
                כאן נכנס טקסט תיאור קצר, כאן
                נכנס טקסט תיאור קצר, אן נכנס טקסט</p>
              <button type="button" class="default-btn card__button">
                {{ $ml.get('pages.home.examples.button') }}
              </button>
            </div>
          </div>

          <!-- card 2 -->
          <div class="card card--2">
            <!-- card__top -->
            <div class="card__top card__top--mod">
              <div class="card__header">
                <div class="card__header-box">
                  <span class="card__link">קרובים מספרים</span>
                  <span class="card__link">סיפור חיים</span>
                  <span class="card__link card__link--bigger">סא״ל יוסי קורקין</span>
                </div>
                <div class="card__header-logo">
                  <img class="card__logo" src="~@/assets/img/icon/card-logo.svg" alt="Logo">
                </div>
              </div>
              <img class="card__top-arrow" src="~@/assets/img/icon/card-arrow.svg" alt="">
              <div class="card__main">
                <div class="card__name card__name--mod">
                  <div>סא״ל יוסי</div>
                  <span>(ז״ל)</span>
                  קורקין
                </div>
                <div class="card__foto-years card__foto-years--mod">
                  1964 - 1967
                </div>
              </div>

              <div class="card__footer card__footer--mod">
                <div class="card__footer-small-foto">
                  <img src="~@/assets/img/card-small-foto.svg" alt="Foto">
                  <div class="card__footer-foto-caption">
                    <span>יעל בן חורין</span>
                    חברה
                  </div>
                </div>

                <div class="card__footer-left">
                  <div class="card__footer-quotes"><img src="~@/assets/img/icon/card-quotes.svg" alt="Quotes"></div>
                  <div class="card__footer-text">איש הים, שחצה ימים והנהיג לבבות</div>
                </div>
              </div>
            </div>

            <div class="card__bottom">
              <h4 class="fourth-header card__bottom-header">עופרה חזה</h4>
              <p class="card__bottom-text second-text">
                כאן נכנס טקסט תיאור קצר, כאן
                נכנס טקסט תיאור קצר, אן נכנס טקסט</p>
              <button type="button" class="default-btn card__button">
                {{ $ml.get('pages.home.examples.button') }}
              </button>
            </div>
          </div>

          <!-- card 1 -->
          <div class="card card--1">
            <!-- card__top -->
            <div class="card__top">
              <div class="card__header">
                <div class="card__header-box">
                  <span class="card__link">קרובים מספרים</span>
                  <span class="card__link">סיפור חיים</span>
                  <span class="card__link card__link--bigger">סא״ל יוסי קורקין</span>
                </div>
                <div class="card__header-logo">
                  <img class="card__logo" src="~@/assets/img/icon/card-logo.svg" alt="Logo">
                </div>
              </div>
              <img class="card__top-arrow" src="~@/assets/img/icon/card-arrow.svg" alt="">
              <div class="card__main">
                <div class="card__img-wrapper">
                  <img src="~@/assets/img/card-foto-1.svg" alt="Foto">
                </div>
                <div class="card__foto-caption">
                  אתר הנצחה
                </div>
                <div class="card__name">
                  <span>(ז״ל)</span>
                  עפרה חזה
                </div>
                <div class="card__foto-years">
                  1964 - 1967
                </div>
              </div>

              <div class="card__footer">
                <div class="card__footer-small-foto">
                  <img src="~@/assets/img/card-small-foto.svg" alt="Foto">
                  <div class="card__footer-foto-caption">
                    <span>יעל בן חורין</span>
                    חברה
                  </div>
                </div>

                <div class="card__footer-left">
                  <div class="card__footer-quotes"><img src="~@/assets/img/icon/card-quotes.svg" alt="Quotes"></div>
                  <div class="card__footer-text">איש הים, שחצה ימים והנהיג לבבות</div>
                </div>
              </div>
            </div>

            <div class="card__bottom">
              <h4 class="fourth-header card__bottom-header">עופרה חזה</h4>
              <p class="card__bottom-text second-text">
                כאן נכנס טקסט תיאור קצר, כאן
                נכנס טקסט תיאור קצר, אן נכנס טקסט</p>
              <button type="button" class="default-btn card__button">
                {{ $ml.get('pages.home.examples.button') }}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Section PAYMENT -->
    <section class="payment">
      <div class="container">
        <div class="payment__header-wrapper">
          <h3 class="payment__header third-header">{{ $ml.get(`payments.title`) }}</h3>
          <p class="payment__text second-text">{{ $ml.get(`payments.desc`) }}</p>
        </div>
        <div class="payment__container">
          <!-- payment-card -->
          <div class="payment-card" v-for="pi in ['once','monthly']" :key="'payment-'+pi">
            <div class="payment-card__top">
              <p class="payment-card__title second-text">{{ $ml.get(`payments.${pi}.title`) }}</p>
            </div>
            <div class="payment-card__bottom">
              <div class="payment-card__price-container">
                <div class="payment-card__price-amount">{{ $ml.get(`payments.${pi}.price`) }}</div>
                <div class="payment-card__price-payments"><span>&#47;</span> {{ $ml.get(`payments.${pi}.term`) }} </div>
              </div>
              <div class="payment-card__entirely">{{ $ml.get(`payments.${pi}.desc`) }}</div>

              <ul class="payment-card__list">
                <li class="payment-card__item"
                    v-for="(feature, fk) in $ml.get(`payments.${pi}.features`)"
                    :key="'feature-'+fk"
                >
                  <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div class="payment__button-wrapper">
          <button class="default-btn payment__button">{{ $ml.get(`payments.button`) }}</button>
        </div>
      </div>
    </section>

    <HelpForm />

    <!-- FOOTER -->
    <div class="footer">
      <div class="container footer__container">
        <div class="footer__title-wrapper">
          <h3 class="footer__title">{{ $ml.get(`footer.title`) }}</h3>
          <p class="footer__name">{{ $ml.get(`footer.desc`) }}</p>
        </div>

        <div class="footer__nav">
          <a href="#" class="footer__link footer__link--1">{{ $ml.get(`footer.link1`) }}</a>
          <a href="#" class="footer__link footer__link--2">{{ $ml.get(`footer.link2`) }}</a>
          <a href="#" class="footer__link footer__link--3">{{ $ml.get(`footer.link3`) }}</a>
        </div>

        <div class="footer__logo"><img src="~@/assets/img/icon/footer-logo.svg" alt="" class="footer__logo-img"></div>
      </div>

    </div>

      <HelpCenter />
  </div>
</template>

<script>
// @ is an alias to /src

import HelpCenter from '@/components/HelpCenter.vue';
import HelpForm from '@/components/HelpForm.vue';
import Header from '@/views/home/partials/Header.vue';

export default {
  name: 'Home',
  components: {
    HelpCenter,
    Header,
    HelpForm
  }
}
</script>

<style lang="scss">
    @import "~@/assets/scss/pages/home.scss";
</style>