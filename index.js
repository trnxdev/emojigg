const axios = require('axios');

class Exports {
    constructor() {}

    /** 
     * @param {string | number} arg
     * Returns an emoji from the emoji.gg api
    */
    static get(arg) {
        return new Promise(async (resolve) => {
            if(typeof arg === 'number')
                resolve((await axios.get(`https://emoji.gg/api/`)).data.find(emoji => emoji.id === arg));
            else if(typeof arg === 'string')
                resolve((await axios.get(`https://emoji.gg/api/`)).data.filter(g => g.title.includes(arg)));
        })
    }

    static stats() {
        return new Promise(async (resolve) => {
            resolve((await axios.get(`https://emoji.gg/api/stats`)).data);
        })
    }
}

module.exports = Exports;