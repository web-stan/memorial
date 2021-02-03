<template>
  <div v-click-outside="onClickOutside">
    <div class="help-center"
         :class="{'position': showHelpCenter}"
    >
    <div class="help-center__background">
      <span class="help-center__close"
            @click.prevent="showHelpCenter=false"
      ><img src="~@/assets/img/icon/help-center-close.svg" alt="Close"></span>
      <!-- help-icon -->
      <div class="help-icon">
        <img class="help-icon__img" src="~@/assets/img/icon/hover.svg" alt="lang">
      </div>
      <h3 class="help-center__title">{{ $ml.get('helpCenter.title') }}</h3>
      <div class="help-center__messenger-box">
        <div class="help-center__messenger-item help-center__messenger-item--4">
          <a class="help-center__link" :href="$ml.get('contacts.whatsapp.url')">
            <img src="~@/assets/img/icon/help-center-whatsup.svg" alt="Whatsup">
          </a>
          <span>{{ $ml.get('contacts.whatsapp.text') }}</span>
        </div>

        <div class="help-center__messenger-item help-center__messenger-item--3">
          <a class="help-center__link" :href="$ml.get('contacts.chat.url')">
            <img src="~@/assets/img/icon/help-center-message.svg" alt="Message">
          </a>
          <span>{{ $ml.get('contacts.chat.text') }}</span>
        </div>

        <div class="help-center__messenger-item help-center__messenger-item--2">
          <a class="help-center__link" :href="$ml.get('contacts.phone.url')">
            <img src="~@/assets/img/icon/help-center-phone.svg" alt="Phone">
          </a>
          <span>{{ $ml.get('contacts.phone.text') }}</span>
        </div>

        <div class="help-center__messenger-item help-center__messenger-item--1">
          <a class="help-center__link" :href="$ml.get('contacts.email.url')">
            <img src="~@/assets/img/icon/help-center-envelope.svg" alt="Envelope">
          </a>
          <span>{{ $ml.get('contacts.email.text') }}</span>
        </div>
      </div>

      <h3 class="help-center__second-title">{{ $ml.get('helpCenter.faq.title') }}</h3>
      <div class="help-center__line"></div>
      <div class="help-center__wrapper">
        <div class="help-center__item"
             v-for="item in faq" :key="item.id"
             :class="{'show': item.isActive}"
        >
          <div class="help-center__item-box"
               @click.prevent="item.isActive=!item.isActive"
          >
            <span class="help-center__item-text">
              {{ $ml.get(`helpCenter.faq.items.${item.id}.name`) }}
            </span>
            <div class="help-center-x"></div>
          </div>

          <div class="help-center__item-content">
            {{ $ml.get(`helpCenter.faq.items.${item.id}.desc`) }}
          </div>
        </div>
      </div>

    </div>
  </div>

    <!-- ---- message ---- -->
    <div class="message"
         @click.prevent="showHelpCenter=true"
         style="    color: #fff;"
    >
      <div class="message__wrapper">
        <div class="message__icon-box help-icon">
          <img class="help-icon__img" src="~@/assets/img/icon/hover.svg" alt="lang">
        </div>
        <div class="message__box">
          <p class="message__title">{{ $ml.get('helpCenter.message.title') }}</p>
          <p class="message__text">{{ $ml.get('helpCenter.message.desc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelpCenter',
    props: {},
    data() {
      return {
        showHelpCenter: false,
        faq: [
          {
            id: 1,
            isActive: false,
          },
          {
            id: 2,
            isActive: false,
          },
          {
            id: 3,
            isActive: false,
          },
          {
            id: 4,
            isActive: false,
          },
          {
            id: 5,
            isActive: false,
          },
          {
            id: 6,
            isActive: false,
          },
        ],
      }
    },
    methods: {
      onClickOutside() {
        this.showHelpCenter = false;
      },
    },
    mounted() {

    }
  }
</script>
