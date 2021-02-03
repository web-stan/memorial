import axios from 'axios';

const state = {
    helpFormIsLoading: 'ready'
};

const getters = {
    helpFormIsLoading: state => {
        return state.helpFormIsLoading;
    },
};

const actions = {
    sendFeedback({ commit }, formData) {
        commit('setFormIsLoading', 'loading');

        axios.post('/support/email', formData)
            .then(({ data }) => {
                console.log(data);

                if(data.status == 'sent') {
                    commit('setFormIsLoading', 'success');
                }
                else {
                    commit('setFormIsLoading', 'failed');
                }
            })
            .catch(error => {
                console.log(error);
                commit('setFormIsLoading', 'error');
            })
            .finally(() => {
                // commit('setFormIsLoading', 'ready');
            });
    },
};

const mutations = {
    setFormIsLoading(state, status) {
        state.helpFormIsLoading = status;
    }
};

export default {
  state, getters, actions, mutations,
};
