import axios from "axios";

const state = {
    token: null,
    refreshToken: null,
    user: {},
};

const getters = {
    token: state => {
        return state.token;
    },
    refreshToken: state => {
        return state.refreshToken;
    },
    isLoggedIn: state => !!state.token,
};

const actions = {
    logout({commit, state}, token) {
        commit('setToken', {});
    },
    async login({commit, state}) {
        return await axios.post('/login/customers', {
                eternityToken: null
            }, { withCredentials: true })
            .then(({ data }) => {
                console.log(data);
                commit('setToken', data);
            })
            .catch(error => {
                console.log(error);
                if(error.response !== undefined) {
                    alert(error.response.data.errorDescription);
                }
                else {
                    alert(error.message);
                }
            })
    },
    loginTest({commit, state}) {
        axios.post('/login/customers', {
                eternityToken: 'c450beead210f85638a74bd87134b181'
            })
            .then(({ data }) => {
                console.log(data);
                commit('setToken', data);
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error);
                if(error.response !== undefined) {
                    alert(error.response.data.errorDescription);
                }
                else {
                    alert(error.message);
                }
            })
    },
    getToken({commit, state}) {
        axios.get('/token')
            .then(res => {
                commit('setToken', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    refreshToken({commit, state}) {
        axios.post('/token/refresh', {
                refreshToken: localStorage.getItem('refreshToken')
            })
            .then(res => {
                commit('setToken', res.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
};

const mutations = {
    setToken(state, data) {
        if(data.token === undefined) {
            state.token = null;
            state.refreshToken = null;
        }
        else {
            state.token = data.token;
            state.refreshToken = data.refreshToken;
        }
    },
    setAuthUser(state, user) {
        state.user = user;
    },
    authRequest(state) {
        state.status = 'loading'
    },
    authSuccess(state, token) {
        state.status = 'success'
        state.token = token
    },
    authError(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = {}
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
