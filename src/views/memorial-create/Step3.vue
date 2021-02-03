<template>
    <section class="create-memorial post-plan">
        <div class="create-memorial__container">
            <header class="create-memorial__header">
                <router-link :to="{ name: 'memorials.create.step2' }">
                    <button type="button" class="default-arrow-btn create-memorial__btn-header"><img class="arrow-right" src="~@/assets/img/icon/arrow-right.svg">{{ $ml.get('create.memorial.common.buttons.back') }}</button>
                </router-link>


                <div class="create-memorial__header-wrapper">
                    <router-link :to="{ name: 'home' }">
                        <img class="create-memorial__img" src="~@/assets/img/icon/welcome-screen-logo.svg" alt="Logo">
                    </router-link>
                </div>
            </header>
            <div class="post-plan__title-wrapper">
                <h1 class="post-plan__title third-header">{{ $ml.get('create.memorial.step3.title') }}</h1>
                <div class="post-plan__decor"></div>
                <p class="create-memorial__title-text create-memorial__title-text--padding second-text">
                    {{ $ml.get('create.memorial.step3.description') }}
                </p>
            </div>
            <div class="create-memorial__form">
                <div class="post-plan__wrapper">

                    <div class="post-plan__card-conatiner">
                        <!-- payment-card -->
                        <div
                            :class="['payment-card', 'payment-card--another', {'active': 'monthly' === subscription.type}]"
                            @click.prevent="setSubscriptionType('monthly')"
                        >
                            <div class="payment-card__top">
                                <p class="payment-card__title second-text">{{ $ml.get('payments.monthly.title') }}</p>
                            </div>

                            <div class="payment-card__bottom">
                                <div class="payment-card__price-container">
                                    <div class="payment-card__price-amount">{{ $ml.get('payments.monthly.price') }}</div>
                                    <div class="payment-card__price-payments"><span>&#47;</span>{{ $ml.get('payments.monthly.term') }}</div>
                                </div>
                                <div class="payment-card__entirely">{{ $ml.get('payments.monthly.desc') }}</div>

                                <ul class="payment-card__list">
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.monthly.features.0') }}
                                    </li>
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.monthly.features.1') }}
                                    </li>
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.monthly.features.2') }}
                                    </li>
                                </ul>
                            </div>

                            <div class="payment-card__box-btn">
                                <button class="payment-card__btn">
                                    {{ $ml.get('create.memorial.step3.subscription.monthly.btn') }}
                                </button>
                            </div>
                        </div>

                        <!-- payment-card -->
                        <div
                            :class="['payment-card', 'payment-card--another', {'active': 'one-time' === subscription.type}]"
                            @click.prevent="setSubscriptionType('one-time')"
                        >
                            <div class="payment-card__top">
                                <p class="payment-card__title second-text">
                                    {{ $ml.get('payments.once.title') }}
                                </p>
                            </div>

                            <div class="payment-card__bottom">
                                <div class="payment-card__price-container">
                                    <div class="payment-card__price-amount">{{ $ml.get('payments.once.price') }}</div>
                                    <div class="payment-card__price-payments"><span>&#47;</span>
                                        {{ $ml.get('payments.once.term') }}
                                    </div>
                                </div>
                                <div class="payment-card__entirely">{{ $ml.get('payments.once.desc') }}</div>

                                <ul class="payment-card__list">
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.once.features.0') }}
                                    </li>
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.once.features.1') }}
                                    </li>
                                    <li class="payment-card__item">
                                        <img src="~@/assets/img/icon/payment-card-checked.svg" alt="">
                                        {{ $ml.get('payments.once.features.2') }}
                                    </li>
                                </ul>
                            </div>

                            <div class="payment-card__box-btn">
                                <button class="payment-card__btn">
                                    {{ $ml.get('create.memorial.step3.subscription.oneTime.btn') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="post-plan__options">
                        <div class="post-plan__options-title">
                            {{ $ml.get('create.memorial.step3.subscription.options.title') }}
                        </div>
                        <div class="post-plan__options-wrapper">
                            <div
                                @click.prevent="setSubscriptionInstallation('independent')"
                                :class="['post-plan__options-item', 'post-plan__options-second', {'active': 'independent' === subscription.installation}]"
                            >{{ $ml.get('create.memorial.step3.subscription.options.independent') }}
                            </div>
                            <div
                                @click.prevent="setSubscriptionInstallation('team')"
                                :class="['post-plan__options-item', 'post-plan__options-first', {'active': 'team' === subscription.installation}]"
                            >{{ $ml.get('create.memorial.step3.subscription.options.team.label') }}
                                <span>{{ $ml.get('create.memorial.step3.subscription.options.team.info') }}</span>
                                <img class="post-plan__options-img" src="~@/assets/img/icon/ask-yelow.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="form__btn-wrapper">
                        <button type="button" class="form__button default-second-btn">
                            <img class="arrow-left" src="~@/assets/img/icon/arrow-left.svg">
                            {{ $ml.get('create.memorial.step3.buttons.start') }}
                        </button>
                        <button type="button" class="form__button-white default-second-btn"
                            @click.prevent="goTo('home')"
                        >
                            {{ $ml.get('create.memorial.step3.buttons.plan') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <sidebar :step="3" :memorial="memorialCreated" />
    </section>
</template>

<script>
    // @ is an alias to /src
    import {mapGetters} from "vuex";
    import sidebar from '@/views/memorial-create/partials/sidebar';

    export default {
        name: 'MemorialCreateStep3',
        components: {
            sidebar,
        },
        data() {
            return {

            }
        },
        methods: {
            setSubscriptionType(type) {
                this.$store.dispatch('memorial/setSubscriptionType', type);
            },
            setSubscriptionInstallation(type) {
                this.$store.dispatch('memorial/setSubscriptionInstallation', type);
            },
            async goTo(route) {
                if(route == 'home') {
                    await this.$store.dispatch('memorial/sendEmail');
                    await this.$store.commit('memorial/setMemorialFormData', null);
                    await this.$store.commit('memorial/setMemorialCreated', null);
                    await this.$store.commit('memorial/setUploadedFile', null);
                    await this.$store.commit('memorial/setIsUpdated', false);
                }

                await this.$router.push({name: route});
            }
        },
        computed: {
            ...mapGetters({
                memorial: 'memorial/getMemorialFormData',
                memorialCreated: 'memorial/getMemorialCreated',
                step: 'memorial/getStep',
                subscription: 'memorial/getSubscription',
            })
        },
        mounted() {
            this.$store.commit('memorial/setStep', 3);
        },
    }
</script>

<style lang="scss">
    @import "~@/assets/scss/pages/create-memorial-plans.scss";
</style>