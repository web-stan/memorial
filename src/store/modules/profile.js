import axios from 'axios';

const state = {
    user: null,
};

const getters = {
    getUser: state => {
        return state.user;
    },
};

const actions = {
    me({commit, dispatch}, userId) {
        axios.get('/customers/me')
            .then(({ data }) => {
                commit('setUser', data);
            })
            .catch(error => {
                if(error.response !== undefined) {
                    alert(error.response.data.errorDescription);
                }
                else {
                    alert(error.message);
                }
            })
    },
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
