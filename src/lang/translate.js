import { languageCheck } from "../helpers/Helpers";
import bn from "./bn";

const langMap = {
    bn: bn
}

const translate = (key) => {
    try {
        const lang = languageCheck()
        return langMap[lang][key.trim()];
    } catch (_) { }
    return key;
}

export default translate;