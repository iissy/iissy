import axios from 'axios'
import config from "../conf/config";

let http = {
    get(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(config.base_url + url, {
                params: data
            }).then((response) => {
                if (response) {
                    resolve(response);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    },

    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(config.base_url + url, data).then((response) => {
                if (response) {
                    resolve(response);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    }
};

export default http;