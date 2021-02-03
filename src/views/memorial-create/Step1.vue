<template>
    <section class="create-memorial">
        <div class="create-memorial__container">

            <header class="create-memorial__header">
                <router-link :to="{ name: 'memorials.create.welcome' }">
                    <button type="button" class="default-arrow-btn create-memorial__btn-header">
                        <img class="arrow-right" src="~@/assets/img/icon/arrow-right.svg">
                        {{ $ml.get('create.memorial.step1.header.button') }}
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
                    {{ $ml.get('create.memorial.step1.title') }}
                </h1>
                <div class="create-memorial__decor"></div>
                <p class="create-memorial__title-text second-text">
                    {{ $ml.get('create.memorial.step1.desc') }}
                </p>
            </div>

            <div class="create-memorial__form">
                <div class="create-memorial__form__wrapper">

                    <div class="create-memorial__form__wrapper__inputs">
                        <form class="form">
                            <h5 class="form__title form__mb">
                                {{ $ml.get('create.memorial.step1.form.title') }}
                            </h5>
                            <div class="form__group form__mb" :class="{'invalid': errors.name}">
                                <img class="form__icon" src="~@/assets/img/icon/close-input.svg"
                                    v-if="focusFields.name"
                                >
                                <img class="form__icon" src="~@/assets/img/icon/error-red.svg"
                                    v-else-if="errors.name && !focusFields.name"
                                >
                                <input v-model="model.name" type="text" class="inputText form__input" required
                                       :class="{'focus': focusFields.name || errors.name}"
                                       @focus="focusFields.name=true"
                                       @blur="focusFields.name=false"
                                >
                                <transition name="fade">
                                    <label class="form__floating-label" v-show="errors.name || focusFields.name || !model.name">
                                        {{ $ml.get('create.memorial.step1.form.name') }}
                                    </label>
                                </transition>
                                <span class="form__error" v-if="errors.name">{{ errors.name }}</span>
                            </div>

                            <div class="form__group form__mb" :class="{'invalid': errors.slug}">
                                <img class="form__icon" src="~@/assets/img/icon/close-input.svg"
                                     v-if="focusFields.slug"
                                >
                                <img class="form__icon" src="~@/assets/img/icon/error-red.svg"
                                     v-else-if="errors.slug && !focusFields.slug"
                                >
                                <input v-model="model.slug" type="text" class="inputText form__input" required
                                       :class="{'focus': focusFields.slug || errors.slug}"
                                       @focus="focusFields.slug=true"
                                       @blur="focusFields.slug=false"
                                >
                                <transition name="fade">
                                    <label class="form__floating-label" v-show="errors.slug || focusFields.slug || !model.slug">
                                        {{ $ml.get('create.memorial.step1.form.slug') }}
                                    </label>
                                </transition>
                                <span class="form__error" v-if="errors.slug">{{ errors.slug }}</span>
                            </div>

                            <div class="form__group form__mb" :class="{'invalid': errors.birthDate}">
                                <img slot="afterDateInput" class="form__icon" src="~@/assets/img/icon/calendar-24px.svg"
                                     v-if="!focusFields.birthDate"
                                >
                                <img slot="afterDateInput" class="form__icon" src="~@/assets/img/icon/close-input.svg"
                                     v-else-if="focusFields.birthDate"
                                >
                                <input v-model="birthDate" type="text" class="inputText form__input" required
                                       :class="{'focus': focusFields.birthDate || errors.birthDate}"
                                       @focus="focusFields.birthDate=true"
                                       @blur="closeBirthdayPicker"
                                       @click.prevent="openBirthdayPicker"
                                >
                                <transition name="fade">
                                    <label class="form__floating-label"
                                           v-show="errors.birthDate || focusFields.birthDate || !birthDate">
                                        {{ $ml.get('create.memorial.step1.form.birth') }}
                                    </label>
                                </transition>

                                <span class="form__error" v-if="errors.birthDate">{{ errors.birthDate }}</span>

                                <datepicker
                                        ref="birthday"
                                        :language="dtLocale"
                                        :required="true"
                                        :input-class="{'inputText form__input': true, 'focus': errors.birthDate || !focusFields.birthDate}"
                                        id="birthday"
                                        class="datepicker"
                                        @selected="birthdayPickerSelected"
                                >
                                </datepicker>
                            </div>

                            <div class="form__group form__mb" :class="{'invalid': errors.deathDate}">
                                <img slot="afterDateInput" class="form__icon" src="~@/assets/img/icon/calendar-24px.svg"
                                     v-if="!focusFields.deathDate"
                                >
                                <img slot="afterDateInput" class="form__icon" src="~@/assets/img/icon/close-input.svg"
                                     v-else-if="focusFields.deathDate"
                                >
                                <input v-model="deathDate" type="text" class="inputText form__input" required
                                       :class="{'focus': focusFields.deathDate || errors.deathDate}"
                                       @focus="focusFields.deathDate=true"
                                       @blur="closeDeathPicker"
                                       @click.prevent="openDeathPicker"
                                >
                                <transition name="fade">
                                    <label class="form__floating-label"
                                           v-show="errors.deathDate || focusFields.deathDate || !deathDate">
                                        {{ $ml.get('create.memorial.step1.form.death') }}
                                    </label>
                                </transition>

                                <span class="form__error" v-if="errors.deathDate">{{ errors.deathDate }}</span>

                                <datepicker
                                        ref="death"
                                        :language="dtLocale"
                                        :required="true"
                                        :input-class="{'inputText form__input': true, 'focus': errors.deathDate || !focusFields.deathDate}"
                                        id="death"
                                        class="datepicker"
                                        @selected="deathPickerSelected"
                                >
                                </datepicker>
                            </div>

                            <!-- load-photo -->

                            <div class="load-photo form__mb" v-if="avatarPreview">
                                <img class="load-photo__close" src="~@/assets/img/icon/close-white.svg" alt=""
                                    @click.prevent="avatarPreview=null">
                                <div class="load-photo__wrapper">

                                    <div class="load-photo__text-box">
                                        <div class="load-photo__title">
                                            {{ $ml.get('create.memorial.step1.form.photo.title') }}
                                        </div>
                                        <div class="load-photo__text">
                                            {{ $ml.get('create.memorial.step1.form.photo.desc') }}
                                        </div>
                                    </div>

                                    <div class="load-photo__img-box">
                                        <img :src="avatarPreview" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="form__photo-block form__mb" v-show="!avatarPreview">
                                <input @change="uploadAvatar" accept="image/*" id="avatar-file" ref="avatar" class="form__file" type="file">
                                <div class="form__photo-block-inner">
                                    <div>
                                        <p class="form__photo-block-title">
                                            {{ $ml.get('create.memorial.step1.form.photo.title') }}
                                        </p>
                                        <p class="form__photo-block-text">
                                            {{ $ml.get('create.memorial.step1.form.photo.desc') }}
                                        </p>
                                    </div>
                                    <img onclick="document.getElementById('avatar-file').click()" class="form__photo-plus"src="~@/assets/img/icon/form-plus.svg" alt="">
                                    <img src="~@/assets/img/icon/form-human.svg" alt="">
                                </div>
                            </div>

                            <div class="form__group form__mb" :class="{'invalid': errors.relationToMemorialPerson}">
                                <div class="form__box-img">
                                    <img src="~@/assets/img/icon/arrow-down-blue.svg" alt="">
                                </div>
                                <select type="text" class="form__select"
                                        :disabled="isUpdated"
                                        required
                                        v-model="model.relationToMemorialPerson" :class="{'not-selected': !model.relationToMemorialPerson}">
                                    <option selected value="0">{{ $ml.get('create.memorial.step1.form.relation') }}</option>
                                    <option
                                            v-for="(relation, rk) in $ml.get('create.memorial.step1.form.relations')"
                                            :key="`relation-${rk}`"
                                            :value="rk">{{ relation }}</option>
                                </select>
                                <span class="form__error" v-if="errors.relationToMemorialPerson">{{ errors.relationToMemorialPerson }}</span>
                            </div>

                            <button @click.prevent="submitForm" type="button" class="form__button default-second-btn">
                                <img class="arrow-left" src="~@/assets/img/icon/arrow-left.svg">
                                {{ $ml.get('create.memorial.step1.form.button') }}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <sidebar :step="1" />
    </section>
</template>

<script>
    // @ is an alias to /src
    import Datepicker from 'vuejs-datepicker';
    import {he} from 'vuejs-datepicker/dist/locale'
    import { mapGetters } from "vuex";
    import sidebar from '@/views/memorial-create/partials/sidebar';
    import memorial from "../../store/modules/memorial";

    export default {
        name: 'MemorialCreateStep1',
        components: {
            Datepicker,
            sidebar
        },
        data() {
            return {
                dtLocale: he,
                birthDateModPh: false,
                selectedAvatar: false,
                avatarPreview: null,
                birthDate: null,
                deathDate: null,
                model: {
                    name: null,
                    slug: null,
                    birthDate: null,
                    deathDate: null,
                    profilePhotoId: null,
                    relationToMemorialPerson: 0
                },
                focusFields: {
                    name: false,
                    slug: false,
                    birthDate: false,
                    deathDate: false,
                    relationToMemorialPerson: false
                },
            }
        },
        computed: {
            ...mapGetters({
                errors: 'memorial/getErrors',
                formIsLoading: 'memorial/formIsLoading',
                uploadedFile: 'memorial/getFile',
                memorial: 'memorial/getMemorialFormData',
                memorialCreated: 'memorial/getMemorialCreated',
                step: 'memorial/getStep',
                isUpdated: 'memorial/getIsUpdated',
            })
        },
        mounted() {
            this.$store.commit('memorial/setErrors');
            this.$store.commit('memorial/setFormIsLoading', false);
            this.$store.commit('memorial/setStep', 1);

            if(this.isUpdated) {
                this.model = Object.assign(this.model, this.memorial);
                this.model.editVersion = this.memorialCreated.editVersion;

                this.deathDate = this.$dateUtils.formatDate(new Date(this.model.deathDate), 'dd MMM yyyy', localStorage.getItem('vueml-lang'));
                this.birthDate = this.$dateUtils.formatDate(new Date(this.model.birthDate), 'dd MMM yyyy', localStorage.getItem('vueml-lang'));

                if(this.uploadedFile) {
                    this.avatarPreview = this.uploadedFile.url;
                }
            }
            else {
                this.$store.commit('memorial/setUploadedFile', null);
            }
        },
        methods: {
            closeBirthdayPicker() {
                this.focusFields.birthDate=false;
                this.$refs.birthday.close();
            },
            openBirthdayPicker() {
                this.$refs.birthday.showCalendar();
            },
            birthdayPickerSelected(value) {
                this.model.birthDate = this.$dateUtils.formatDate(value, 'yyyy-MM-dd', localStorage.getItem('vueml-lang'));
                this.birthDate = this.$dateUtils.formatDate(value, 'dd MMM yyyy', localStorage.getItem('vueml-lang'));
            },
            closeDeathPicker() {
                this.focusFields.deathDate=false;
                this.$refs.death.close();
            },
            openDeathPicker() {
                this.$refs.death.showCalendar();
            },
            deathPickerSelected(value) {
                this.model.deathDate = this.$dateUtils.formatDate(value, 'yyyy-MM-dd', localStorage.getItem('vueml-lang'));
                this.deathDate = this.$dateUtils.formatDate(value, 'dd MMM yyyy', localStorage.getItem('vueml-lang'));
            },
            async submitForm() {
                if(this.formIsLoading) { return; }

                let file = this.uploadedFile;

                if(this.$refs.avatar.files.length) {
                    let avatar = Array.from(this.$refs.avatar.files)[0];
                    await this.$store.dispatch('memorial/upload', avatar);
                    file = this.uploadedFile
                }

                if(this.isUpdated) {
                    if(!this.avatarPreview) {
                        file = null;
                        this.$store.commit('memorial/setUploadedFile', null);
                    }

                    await this.$store.dispatch('memorial/update', {id: this.memorialCreated.id, model: this.model, file});
                }
                else {
                    await this.$store.dispatch('memorial/create', {model: this.model, file});
                }

                if(this.step == 2) {
                    this.$router.push({ name: 'memorials.create.step2' });
                }
            },
            uploadAvatar() {
                this.selectedAvatar = true;
                let file = Array.from(this.$refs.avatar.files)[0];
                this.avatarPreview = URL.createObjectURL(file);
            },
        }
    }
</script>

<style lang="scss">
    .vdp-datepicker {
        position: absolute;
    }

    .datepicker {
        input {
            position: absolute;
            opacity: 0;
        }
    }
</style>

<style lang="scss">
    @import "~@/assets/scss/pages/create-memorial.scss";
</style>