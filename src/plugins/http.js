import axios from "axios";

const storageAuth = JSON.parse(localStorage.getItem('Eternity')).auth;
let apiUrl = "http://api.master.eternity-backend.stag.stfalcon.com/api/v1.0";

if(process.env.NODE_ENV === 'production') {
    apiUrl = "http://produiction:3000";
}

const commonConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Language': localStorage.getItem('vueml-lang'),
    'Authorization': `Bearer ${storageAuth.token}`,
};

const apiInstance = createInstance(apiUrl);

function createInstance(baseURL, token){
     let axiosApiInstance = axios.create({
        baseURL
    });

    axiosApiInstance.interceptors.request.use(
        async config => {
            config.headers = commonConfig;
            return config;
        },
        error => {
            Promise.reject(error)
        });

    axiosApiInstance.interceptors.response.use((response) => {
        return response
    }, async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            await axios.post(apiUrl+'/token/refresh', {
                    refreshToken: localStorage.getItem('refreshToken')
                }, { headers:  commonConfig })
                .then(async ({ data }) => {
                    await localStorage.setItem('refreshToken', data.refreshToken);
                    await localStorage.setItem('token', data.token);
                })
                .catch(error => {
                    console.log(error);
                });

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            return axiosApiInstance(originalRequest);
        }

        return Promise.reject(error);
    });

    return axiosApiInstance;
}

export default apiInstance;