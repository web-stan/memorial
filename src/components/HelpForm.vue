<template>
    <!-- need-help-form -->
    <section class="need-help-form">
        <div class="container">
            <form id="help-form" class="help-form">
                <!-- help-form__right -->
                <div class="help-form__right help-form__right--order">
                    <h3 class="help-form__header third-header">{{ $ml.get('helpForm.title') }}</h3>
                    <p class="help-form__text second-text">{{ $ml.get('helpForm.desc') }}</p>
                    <div class="help-form__available">{{ $ml.get('helpForm.links') }}</div>
                    <!-- help-form__link-wrapper -->
                    <div class="help-form__link-wrapper">
                        <div class="help-form__link-box help-form__link-box-4">
                            <a class="help-form__link" :href="$ml.get('contacts.whatsapp.url')">
                                <img src="~@/assets/img/icon/help-form-whatsapp.svg" alt="Whatsapp">
                            </a>
                            <span>{{ $ml.get('contacts.whatsapp.text') }}</span>
                        </div>
                        <div class="help-form__link-box help-form__link-box-3">
                            <a class="help-form__link" :href="$ml.get('contacts.camera.url')">
                                <img src="~@/assets/img/icon/help-center-camera.svg" alt="Camera">
                            </a>
                            <span>{{ $ml.get('contacts.camera.text') }}</span>
                        </div>
                        <div class="help-form__link-box help-form__link-box-2">
                            <a class="help-form__link" :href="$ml.get('contacts.phone.url')">
                                <img src="~@/assets/img/icon/help-form-phone.svg" alt="Phone">
                            </a>
                            <span>{{ $ml.get('contacts.phone.text') }}</span>
                        </div>
                        <div class="help-form__link-box help-form__link-box-1">
                            <a class="help-form__link" :href="$ml.get('contacts.email.url')">
                                <img src="~@/assets/img/icon/help-form-envelope.svg" alt="Envelope">
                            </a>
                            <span>{{ $ml.get('contacts.email.text') }}</span>
                        </div>
                    </div>
                </div>

                <!-- help-form__left -->
                <div class="help-form__left">
                    <div class="help-form__title">{{ $ml.get('helpForm.form.title') }}</div>
                    <input class="help-form__input-name help-form__input" type="text" name="Name"
                           :placeholder="$ml.get('helpForm.form.name')"
                           v-model="helpFormData.name"
                    >
                    <input class="help-form__input-name help-form__input" type="email" name="Email"
                           :placeholder="$ml.get('helpForm.form.email')"
                           v-model="helpFormData.email"
                    >
                    <textarea class="help-form__textarea help-form__input"
                          :placeholder="$ml.get('helpForm.form.msg')"
                          v-model="helpFormData.content"
                    ></textarea>

                    <div class="help-form__checkbox-wrapper">
                        <input class="help-form__input-checkbox" type="checkbox" id="inputCheckbox"
                           v-model="helpFormData.agree"
                        >
                        <label for="inputCheckbox" class="help-form__label">
                            {{ $ml.get('helpForm.form.agree') }}
                        </label>
                    </div>

                    <button @click.prevent="sendFeedback()" type="submit" class="help-form__btn default-second-btn">{{ $ml.get('helpForm.form.button') }}</button>
                </div>
            </form>

        </div>
        <div class="need-help-form__decoration"></div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "HelpForm",
        data() {
            return {
                helpFormData: {
                    name: null,
                    email: null,
                    content: null,
                    agree: false,
                }
            }
        },
        computed: {
            ...mapGetters({
                helpFormIsLoading: 'helpFormIsLoading',
            }),
        },
        methods: {
            async sendFeedback() {
                if(this.helpFormIsLoading !== 'loading') {

                    await this.$store.dispatch('sendFeedback', this.helpFormData);

                    if (this.helpFormIsLoading == 'success') {
                        this.helpFormData = {
                            name: null,
                            email: null,
                            content: null,
                            agree: false,
                        };
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>