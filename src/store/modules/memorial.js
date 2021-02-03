import axios from 'axios';
import Vue from 'vue';

const state = {
    formIsLoading: false,
    step: 1,
    isUpdated: false,
    uploadedFile: null,
    viewedFile: null,
    memorialFormData: null,
    memorialCreated: null,
    errors: {
        name: null,
        slug: null,
        birthDate: null,
        deathDate: null,
        profilePhotoId: null,
        relationToMemorialPerson: null
    },
    subscription: {
        type: 'monthly', //['monthly', 'one-time']
        installation: 'independent', //['independent', 'team']
    },
};

const getters = {
    getErrors: state => {
        return state.errors;
    },
    getFile: state => {
        return state.uploadedFile;
    },
    getViewedFile: state => {
        return state.viewedFile;
    },
    getMemorialCreated: state => {
        return state.memorialCreated;
    },
    getMemorialFormData: state => {
        return state.memorialFormData;
    },
    formIsLoading: state => {
        return state.formIsLoading;
    },
    getStep: state => {
        return state.step;
    },
    getIsUpdated: state => {
        return state.isUpdated;
    },
    getSubscription: state => {
      return state.subscription;
    },
};

const actions = {
    sendEmail({ commit }) {
        return axios.post('/payments-support/email', { sendEmail: true })
            .then(({ data }) => {
                console.log(data);
                if(data.errorDescription !== undefined) {
                    alert(data.errorDescription);
                }
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            })
            .finally(() => {
            });
    },
    getFile({ commit }, file) {
        return axios.get('/files/'+file.id)
            .then(({ data }) => {
                console.log(data);
                commit('setViewedFile', data);
            })
            .catch(error => {
                // alert(error.message);
                console.log(error);
            })
            .finally(() => {
            });
    },
     upload({ commit }, file) {
        const form = new FormData();

        form.append('file', file);

        return axios.post('/files/image', form)
            .then(({ data }) => {
                console.log(data);
                commit('setUploadedFile', data);
            })
            .catch(error => {
                // alert(error.message);
                console.log(error);
                commit('setErrors', error.data);
            })
            .finally(() => {
            });
    },
    async update({ commit }, formData) {
        commit('setFormIsLoading', true);
        commit('setErrors');

        if(formData.file !== null) {
            formData.model.profilePhotoId = formData.file.id;
        }
        else {
            formData.model.profilePhotoId = null;
        }

        let removeVar = ({ relationToMemorialPerson, ...rest }) => rest;
        let model = removeVar(formData.model);

        await axios.put('/memorials/'+formData.id, model)
            .then(({ data }) => {
                commit('setMemorialCreated', data);
                commit('setMemorialFormData', formData.model);
                commit('setIsUpdated', true);
                commit('setStep', 2);
            })
            .catch(error => {
                if(error.response !== undefined && error.response.data.violations !== undefined && error.response.data.violations.violations === undefined) {
                    commit('setErrors', error.response.data.violations);
                }
                else if(error.response !== undefined && error.response.data.violations.violations !== undefined) {
                    commit('setErrorsType2', error.response.data.violations.violations);
                }
                else {
                    alert(error.message);
                }
            })
            .finally(() => {
                commit('setFormIsLoading', false);
            });
    },
    async create({ commit }, formData) {
        commit('setFormIsLoading', true);
        commit('setErrors');

        if(formData.file !== null) {
            formData.model.profilePhotoId = formData.file.id;
        }

        formData.model.relationToMemorialPerson = parseInt(formData.model.relationToMemorialPerson);

        await axios.post('/memorials', formData.model)
            .then(({ data }) => {
                commit('setMemorialCreated', data);
                commit('setMemorialFormData', formData.model);
                commit('setIsUpdated', true);
                commit('setStep', 2);
            })
            .catch(error => {
                if(error.response !== undefined && error.response.data.violations !== undefined && error.response.data.violations.violations === undefined) {
                    commit('setErrors', error.response.data.violations);
                }
                else if(error.response !== undefined && error.response.data.violations.violations !== undefined) {
                    commit('setErrorsType2', error.response.data.violations.violations);
                }
                else {
                    alert(error.message);
                }
            })
            .finally(() => {
                commit('setFormIsLoading', false);
            });
    },
    saveShareText({ commit }, text) {
        commit('setMemorialCreatedShareText', text);
    },
    setSubscriptionType({ commit }, type) {
        commit('setSubscriptionType', type);
    },
    setSubscriptionInstallation({ commit }, type) {
        commit('setSubscriptionInstallation', type);
    },
};

const mutations = {
    setErrorsType2(state, data) {

        if(data === undefined) {
            state.errors = {
                name: null,
                slug: null,
                birthDate: null,
                deathDate: null,
                profilePhotoId: null,
                relationToMemorialPerson: null
            };

            return;
        }

        for(let i in data) {
            let errorKey = data[i].propertyPath;

            if (errorKey && state.errors[errorKey] !== undefined) {
                state.errors[errorKey] = data[i].title;
            }
        }
    },
    setErrors(state, data) {

        if(data === undefined) {
            state.errors = {
                name: null,
                slug: null,
                birthDate: null,
                deathDate: null,
                profilePhotoId: null,
                relationToMemorialPerson: null
            };

            return;
        }

        for(let key in data) {
            for(let i in data[key]) {
                let error = data[key][i];
                let errorKey = Object.keys(error)[0];

                if (error && errorKey && state.errors[errorKey] !== undefined) {
                    state.errors[errorKey] = error[errorKey];
                }
            }
        }
    },
    setFormIsLoading(state, status) {
        state.formIsLoading = status;
    },
    setUploadedFile(state, file) {
        state.uploadedFile = file;
    },
    setViewedFile(state, file) {
        state.viewedFile = file;
    },
    setMemorialCreated(state, data) {
        state.memorialCreated = data;
    },
    setMemorialCreatedShareText(state, text) {
        Vue.set(state.memorialCreated, 'shareText', text);
    },
    setMemorialFormData(state, data) {
        state.memorialFormData = data;
    },
    setStep(state, step) {
        state.step = step;
    },
    setIsUpdated(state, cond) {
        state.isUpdated = cond;
    },
    setSubscriptionType(state, type) {
        Vue.set(state.subscription, 'type', type);
    },
    setSubscriptionInstallation(state, type) {
        Vue.set(state.subscription, 'installation', type);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
