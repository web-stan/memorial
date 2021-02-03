import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'
import mlHE from './he'
import mlEN from './en'
import axios from 'axios';

Vue.use(MLInstaller);

let initialLang = localStorage.getItem('vueml-lang');

if (!initialLang) {
    axios.get('http://api.master.eternity-backend.stag.stfalcon.com/api/v1.0/info/geoip')
        .then(({data}) => {
            if (data.preferredLanguage !== undefined) {
                initialLang = data.preferredLanguage;
            }
        })
        .catch(error => {
            console.log(error);
        });

    if (!initialLang) {
        initialLang = navigator.language || navigator.userLanguage;

        if(initialLang.toLowerCase().indexOf('iw') > -1 || initialLang.toLowerCase().indexOf('he')) {
            initialLang = 'he';
        }
    }

    if (initialLang != 'he') {
        initialLang = 'en';
    }
}

document.documentElement.setAttribute('lang', initialLang);
document.documentElement.setAttribute('dir', initialLang == 'he' ? 'rtl' : 'ltr');

export default new MLCreate({
    initial: initialLang,
    save: true, // process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('he').create(
            mlHE
        ),
        new MLanguage('en').create(
            mlEN
        ),
    ]
});
