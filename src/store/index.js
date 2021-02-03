import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

import auth from './modules/auth';
import profile from './modules/profile';
import help from './modules/help';
import memorial from './modules/memorial';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexPersist = new VuexPersist({
    key: 'Eternity',
    storage: window.localStorage
});

export default new Vuex.Store({
    modules: {
        help,
        memorial,
        auth,
        profile,
    },
    strict: debug,
    plugins: [vuexPersist.plugin]
});
