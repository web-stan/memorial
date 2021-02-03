<template>
    <div class="header-screen__left-box screen-lang"
         @click.prevent="showLangMenu=!showLangMenu"
         :class="{'show': showLangMenu, 'mod-x': $store.getters['auth/isLoggedIn']}"
    >
        <img class="icon-globe" src="~@/assets/img/icon/globe-icon.svg" alt="lang">
        <img class="header-screen__arrow major-screen-arrow" src="~@/assets/img/icon/modal-arrow-down.svg" alt="Arrow Down">

        <div class="major-screen-dropdown">
            <a href="#" class="major-screen-dropdown__item"
               v-for="language in languages"
               :key="language.code"
               @click.prevent="select(language)"
            >
                {{ language.label }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Languages",
        data() {
          return {
              showLangMenu: false,
              selectedLanguage: {},
              languages: [
                  {
                      code: 'he',
                      label: 'Hebrew',
                      shortLabel: 'Heb',
                  },
                  {
                      code: 'en',
                      label: 'English',
                      shortLabel: 'Eng',
                  },
              ],
          }
        },
        methods: {
            select(language) {
                this.selectedLanguage = language;
                this.$ml.change(language.code)

                document.documentElement.setAttribute('lang', language.code);
                document.documentElement.setAttribute('dir', language.code == 'he' ? 'rtl' : 'ltr');
            },
        },
        mounted() {
            this.selectedLanguage = this.languages.find(language => language.code === this.$ml.current);
        }
    }
</script>

<style scoped>

</style>