<template>
    <section class="create-memorial">
        <div class="create-memorial__container">

            <header class="create-memorial__header">
                <router-link :to="{ name: 'memorials.create.step1' }">
                    <button type="button" class="default-arrow-btn create-memorial__btn-header">
                        <img class="arrow-right" src="~@/assets/img/icon/arrow-right.svg">
                        {{ $ml.get('create.memorial.common.buttons.back') }}
                    </button>
                </router-link>

                <div class="create-memorial__header-wrapper">
                    <router-link :to="{ name: 'home' }">
                        <img class="create-memorial__img" src="~@/assets/img/icon/welcome-screen-logo.svg" alt="Logo">
                    </router-link>
                </div>
            </header>

            <div class="create-memorial__form__wrapper_desciption">
                <h1 class="create-memorial__title third-header">
                    {{ $ml.with('name', this.memorialCreated.name).get('create.memorial.step2.title') }}
                </h1>

                <div class="create-memorial__decor"></div>

                <p class="create-memorial__title-text second-text">
                    {{ $ml.get('create.memorial.step2.description') }}
                </p>
            </div>
            <div class="create-memorial__form">
                <div class="create-memorial__form__wrapper">

                    <div class="create-memorial__form__wrapper__inputs height">
                        <form class="form">
                            <h5 class="form__title form__mb">
                              {{ $ml.get('create.memorial.step2.form.title') }}
                            </h5>

                            <div class="form__middle">
                                <div class="form__middle-descr">{{ $ml.get('create.memorial.step2.form.input.description') }}</div>
                                <div class="form__middle-text" @input="saveText" contenteditable="true">
                                  {{ form.text }}
                                </div>
                                <a
                                    :href="form.link"
                                    class="form__middle-link"
                                    ref="link"
                                >{{ form.link }}</a>
                                <button type="button" class="form__middle-btn default-arrow-btn" @click.prevent="copyLink">
                                  <img src="~@/assets/img/icon/form-paper.svg" alt="">
                                  {{ $ml.get('create.memorial.step2.form.buttons.copy') }}
                                </button>
                            </div>

                            <div class="form__contact-icon">
                                <span>{{ $ml.get('create.memorial.step2.form.contacts.label') }}</span>
                                <a
                                    target="_blank"
                                    href="#"
                                    class="form__contact-item">
                                    <img src="~@/assets/img/icon/sign.svg" alt=""
                                    >
                                </a>
                                <a
                                    target="_blank"
                                    :href="`https://www.facebook.com/dialog/share?app_id=2062324473802315&display=popup&href=${encodeURIComponent(form.link)}&quote=${encodeURIComponent(form.text)}&redirect_uri=${encodeURIComponent(this.$siteUrl+'/memorials/create/step2')}`"
                                    class="form__contact-item"
                                >
<!--                                    :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(form.link)}&t=${encodeURIComponent(form.text)}`"-->
                                    <img src="~@/assets/img/icon/facebook.svg" alt="">
                                </a>
                                <a
                                    target="_blank"
                                    class="form__contact-item"
                                    href="#"
                                    @click.prevent="shareToMessenger()"
                                >
<!--                                    :href="`fb-messenger://share?app_id=2062324473802315&link=${encodeURIComponent(form.link)}`"-->
<!--                                    fb-messenger://share/?link= https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fsharing%2Freference%2Fsend-dialog&app_id=123456789-->

                                    <img src="~@/assets/img/icon/facebook-messenger-1.svg" alt="">
                                </a>
                                <a
                                    target="_blank"
                                    :href="`whatsapp://send?text=${encodeURIComponent(form.text + '\n' + form.link)}`"
                                    class="form__contact-item"
                                    data-action="share/whatsapp/share"
                                >
                                    <img src="~@/assets/img/icon/whatsapp.svg" alt="">
                                </a>
                                <a
                                        v-if="user"
                                    target="_blank"
                                    :href="`mailto:${user.email}?&body=${encodeURIComponent(form.text + '\n' + form.link)}`"
                                    class="form__contact-item"
                                >
                                    <img src="~@/assets/img/icon/envelope-blue.svg" alt="">
                                </a>
                            </div>

                            <div class="form__notice"><img src="~@/assets/img/icon/form-star.svg" alt="">{{ $ml.get('create.memorial.step2.form.contacts.clarification') }}</div>

                        </form>
                    </div>
                    <div class="form__btn-wrapper">
                        <button type="button" class="form__button-white default-second-btn" @click.prevent="goTo('memorials.create.step3')">
                          <img class="arrow-left" src="~@/assets/img/icon/arrow-left-blue.svg">
                          {{ $ml.get('create.memorial.step2.form.buttons.payment') }}
                        </button>

<!--                        todo: change goTo('route name to show memorial')-->
                        <button type="button" class="form__button default-second-btn"
                            @click.prevent="goTo('home')"
                        >
                          <img class="arrow-left" src="~@/assets/img/icon/arrow-left.svg">
                          {{ $ml.get('create.memorial.step2.form.buttons.start') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <sidebar :step="2" :memorial="memorialCreated" />
    </section>
</template>

<script>
    // @ is an alias to /src
    import { mapGetters, mapActions, mapMutations } from "vuex";
    import sidebar from '@/views/memorial-create/partials/sidebar';

    export default {
        name: 'MemorialCreateStep2',
        components: {
            sidebar,
        },
        data() {
            return {
              form: {
                  text: '',
                  link: ''
                },
            }
        },
        computed: {
            ...mapGetters({
                memorial: 'memorial/getMemorialFormData',
                memorialCreated: 'memorial/getMemorialCreated',
                step: 'memorial/getStep',
                user: 'profile/getUser',
            })
        },
        mounted() {
            this.getMe();
            this.$store.commit('memorial/setFormIsLoading', false);
            this.$store.commit('memorial/setStep', 2);

            //set share text
            this.form.link = `${this.$siteUrl}/${this.memorialCreated.slug}/invite`;
            this.form.text = this.memorialCreated.hasOwnProperty('shareText') ? this.memorialCreated.shareText : this.$ml.with('name', this.memorialCreated.name).get('create.memorial.step2.form.input.text');
        },
        methods: {

            ...mapActions({
                getMe: 'profile/me'
            }),

            shareToMessenger() {
                let url = window.mobileCheck()
                    ? `fb-messenger://share?link=${encodeURIComponent(this.form.link)}`
                    : `https://www.facebook.com/dialog/send?app_id=2062324473802315&display=popup&link=${encodeURIComponent(this.form.link)}&msg=${encodeURIComponent(this.form.text)}&redirect_uri=${encodeURIComponent(this.$siteUrl+'/memorials/create/step2')}`

                window.open(url, '_blank');
            },
            saveText(event) {
                this.$store.dispatch('memorial/saveShareText', event.target.innerText);
            },
            copyLink() {
                let link = this.$refs['link'];

                if(null !== link && typeof link !== 'undefined') {
                  let href = link.getAttribute('href');

                  if(null !== href && typeof href !== 'undefined') {
                    navigator.clipboard.writeText(link.getAttribute('href'));
                  }
                }
            },
            async goTo(route) {
                if(route == 'home') {
                    await this.$store.commit('memorial/setMemorialFormData', null);
                    await this.$store.commit('memorial/setMemorialCreated', null);
                    await this.$store.commit('memorial/setUploadedFile', null);
                    await this.$store.commit('memorial/setIsUpdated', false);
                }

                await this.$router.push({name: route});
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/assets/scss/pages/create-memorial.scss";
</style>