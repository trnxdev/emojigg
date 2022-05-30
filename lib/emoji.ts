import axios from 'axios';
import { EmojiGetArg, EmojiGgStats, EmojiResult } from './@types';

class Exports {
    constructor() { }

    static async get(arg: EmojiGetArg): Promise<EmojiResult | EmojiResult[]> {
        if (typeof arg === 'number')
            return (await axios.get(`https://emoji.gg/api/`)).data.find((emoji: EmojiResult) => emoji.id === arg);
        else if (typeof arg === 'string')
            return (await axios.get(`https://emoji.gg/api/`)).data.filter((g: EmojiResult) => g.title.includes(arg));
        else throw new RangeError("Invalid argument type: " + typeof arg);
    }

    static async stats(): Promise<EmojiGgStats> {
        return (await axios.get(`https://emoji.gg/api/stats`)).data;
    }
}

export default Exports;
export { EmojiGetArg, EmojiGgStats, EmojiResult };