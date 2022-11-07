import { languageCheck } from "../helpers/Helpers";

const version = "v2";

const envMap = {
    production: process.env.REACT_APP_PRO_MODE,
    development: process.env.REACT_APP_LOCAL_MODE
}
// console.log(window.location.hostname)
const lang = languageCheck() || "en";

export const baseUrl = (env) => {
    // console.log('envMap[env]', envMap[env]);
    const host = envMap[env];
    const url = `${host}/${version}/${lang}/api/`;
    // console.log('url', url);
    return url;
}