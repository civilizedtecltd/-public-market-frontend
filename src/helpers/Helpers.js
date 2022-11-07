import moment from 'moment'
import { useEffect, useState } from 'react';

export const capitalizeFirst = (str = "test") => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
}

export const slugToLaval = (slug) => {
    return slug?.replace('--', '/').replace('-', ' ');
}

export const convertToSlug = (str = "test") => {
    str = str?.replace(' ', '')
    return str?.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

export const convertToSlugNormal = (slug = "test") => {
    var words = slug.split("-");
    return words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(' ');
}

export const titlecConvertToSlug = (str = "") => {
    if (str && str === /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g) {
        if (languageCheck() === 'en') {
            str = str?.replace(' ', '-')
            return str?.toLowerCase().replace(/ /g, '-').replace(/[-]+/g, '-').replace(/[^\w-]+/g, '')
        } else {
            return str;
        }
    } else {
        return str;
    }
}

export const agoDateTimeFormat = (date) => {
    return moment(date).fromNow();
}

export const countByAdCategory = async () => {

}

export const languageCheck = () => {
    return localStorage.getItem('language');
}

export const stringLimitShow = (sting = "test", limit) => {
    return sting.length > limit ? sting.substring(0, limit) + '...' : sting
}

export const sortByAsc = (array) => {
    if (Array.isArray(array)) {
        array.sort((a, b) => (a.published_ad_count - b.published_ad_count))
        return array;
    }
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export const allLocalStorageRemove = () => {
    const previousDate = localStorage.getItem("todayDate");
    if (previousDate) {
        if (previousDate !== moment().format("DD-MM-YYYY")) {
            const loginMedia = localStorage.getItem('loginMedia');
            const loginToken = localStorage.getItem('token');
            localStorage.clear();
            localStorage.setItem("todayDate", moment().format("DD-MM-YYYY"));
            if (loginToken) {
                localStorage.setItem('token', loginToken);
            }
            else {
                localStorage.removeItem('token');
            }
            localStorage.setItem('loginMedia', loginMedia);
            window.location.pathname = "/";
        }
    } else {
        localStorage.setItem("todayDate", moment().format("DD-MM-YYYY"));
    }
}

export const localStorageClear = () => {
    const languageCondition = languageCheck();
    const loginMedia = localStorage.getItem('loginMedia');
    const loginToken = localStorage.getItem('token');
    localStorage.clear();
    localStorage.setItem("todayDate", moment().format("DD-MM-YYYY"));
    if (loginToken) {
        localStorage.setItem('token', loginToken);
        localStorage.setItem('loginMedia', loginMedia);
    }
    else {
        localStorage.removeItem('token');
    }
    localStorage.setItem('language', languageCondition)
}

export const dynamicUrlChnage = (params, pathName, navigate) => {
    params = params || {};
    const _params = [];
    Object.keys(params)?.forEach(x => {
        const v = params[x]?.title;
        const mainValues = titlecConvertToSlug(v)
        if (mainValues) _params.push(`${mainValues}`);
    })
    if (_params?.length) {
        const path = `${pathName}?${_params.join('/')}`;
        if (path) {
            navigate(path)
            window.addEventListener('popstate', function (event) {
                console.log('popstate', event)
                if (_params?.length === 1) {
                    navigate('/')
                }
            }, false);
        }
    }
}

export const numberCheck = (e) => {
    return e.target.value.replace(/\D/g, "")
}