import axios from 'axios';
import { EmojiGetArg, EmojiGgStats, EmojiResult } from './@types';

class Exports {
    constructor() {}

    static get(arg: EmojiGetArg): Promise<EmojiResult | EmojiResult[]> {
        return new Promise(async (resolve) => {
            if(typeof arg === 'number')
                resolve(<EmojiResult>(await axios.get(`https://emoji.gg/api/`)).data.find((emoji: EmojiResult) => emoji.id === arg));
            else if(typeof arg === 'string')
                resolve(<EmojiResult[]>(await axios.get(`https://emoji.gg/api/`)).data.filter((g: EmojiResult) => g.title.includes(arg)));
        })
    }

    static stats(): Promise<EmojiGgStats> {
        return new Promise(async (resolve) => {
            resolve((await axios.get(`https://emoji.gg/api/stats`)).data);
        })
    }
}

export default Exports;
export { EmojiGetArg, EmojiGgStats, EmojiResult };