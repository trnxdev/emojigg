import lib from "./dist/emoji";

(async () => {
    const emoji = await lib.get(1);
    console.log(emoji);
    const emojis = await lib.get("emoji");
    console.log(emojis);
    const stats = await lib.stats();
    console.log(stats);
    // @ts-expect-error
    const error = await lib.get();
    console.log(error);
})();