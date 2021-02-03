<template>
    <div class="create-memorial__sidebar">
        <div class="create-memorial__sidebar__wrapper">
            <h2 class="create-memorial__sidebar-title">{{ $ml.get('create.memorial.sidebar.title') }}</h2>
            <div class="create-memorial__sidebar__wrapper__steps">
                <ul class="create-memorial__list">
                    <router-link tag="li" :to="{name: 'memorials.create.step1'}" class="create-memorial__list-item" :class="{'active': step == 1, 'visited': step > 1}"
                    >{{ $ml.get('create.memorial.sidebar.nav.step1') }}
                    </router-link>
                    <router-link tag="li" :to="{name: 'memorials.create.step2'}"
                        class="create-memorial__list-item" :class="{'active': step == 2, 'visited': step > 2}"
                    >
                      {{ $ml.get('create.memorial.sidebar.nav.step2') }}
                    </router-link>
                    <router-link tag="li" :to="{name: 'memorials.create.step3'}"
                        :class="['create-memorial__list-item', {'active': step === 3}]"
                    >
                      {{ $ml.get('create.memorial.sidebar.nav.step3') }}
                    </router-link>
                </ul>
            </div>
        </div>

        <div class="create-memorial__sidebar-main" v-if="step > 1">
            <div class="create-memorial__sidebar-img">
                <img  v-if="memorial.profilePhoto" :src="memorial.profilePhoto.url" alt="">
<!--                <img src="~@/assets/img/memorial.png" alt="">-->

                <div class="create-memorial__box">
                    <div class="create-memorial__name">{{ memorial.name }}<span>{{ $ml.get('create.memorial.sidebar.rip') }}</span></div>
                    <div class="create-memorial__years">{{ memorial.deathDate }} - {{ memorial.birthDate }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props: [ 'step', 'memorial' ]
    }
</script>

<style scoped>

</style>