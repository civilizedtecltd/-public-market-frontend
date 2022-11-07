

export const getSalesAndMarketingCategoryId = () => {
    return getData('salesAndMarketing', []);
}

export const getDivisionItems = () => {
    return getData('divisionItem', []);
}

export const getDivision = () => {
    return getData('division', {});
}

export const getDistrict = () => {
    return getData('district', {});
}

export const getAdCategoryItems = () => {
    return getData('adCategoryItem', []);
}

export const getAdCategory = () => {
    return getData('adCategory', {});
}

export const getAdBannerCategory = () => {
    return getData('adBannerCategory', {});
}

export const getAdBannerCategoryItems = () => {
    return getData('adBannerCategoryItem', []);
}

export const getAdSubCategoryItems = () => {
    return getData('adSubCategoryItem', []);
}

export const getAdSubCategories = () => {
    return getData('adSubCategory', []);
}

export const getSubCategory = () => {
    return getData('subCategory', {});
}

export const getDistrictItems = () => {
    return getData('districtItem', []);
}

export const getJobCategoryItems = () => {
    return getData('jobCategoryItem', []);
}

export const getJobCategory = () => {
    return getData('jobCategory', {});
}

export const getUserInformation = () => {
    return getData('userInformation', []);
}

export const getData = (key, _default) => {
    let data = _default;
    const json = localStorage.getItem(key);
    try {
        data = JSON.parse(json);
    } catch (e) {

    }
    return data;
}

export const isInvalid = (data) => {
    let result = data == null || data === undefined || data === 'undefined' || data === 'null' || data === '';
    if (!result) {
        const ctor = data?.constructor?.name;
        if (ctor === 'Array' && data.length <= 0) result = true;
        else if (ctor === 'Object' && Object.keys(data).length <= 0) result = true;
    }
    return result
}

export const debounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

export const categoryAndSubCategoryWiseAdCount = (allAdsOrJobs, categoryOrSubcategoryId, type) => {
    if (type === 'category-ads-count') {
        const countValue = allAdsOrJobs && allAdsOrJobs?.filter((ad) => ad?.ad_category === categoryOrSubcategoryId);
        return countValue?.length;
    }
    if (type === 'category-jobs-count') {
        const countValue = allAdsOrJobs && allAdsOrJobs?.filter((job) => job?.category === categoryOrSubcategoryId);
        return countValue?.length;
    }
    if (type === 'category-ads') {
        return allAdsOrJobs && allAdsOrJobs?.filter((ad) => ad?.ad_category === categoryOrSubcategoryId);
    }
    if (type === 'sub-category-ads-count') {
        const countValue = allAdsOrJobs && allAdsOrJobs?.filter((ad) => ad?.ad_sub_category === categoryOrSubcategoryId);
        return countValue?.length;
    }
}

export const getQueryParam = (query, key) => {
    if (query && key) {
        // query = query.trim();
        const arr = query.split('&').find(x => x.includes(key))?.split('=');
        if (arr?.length === 2) {
            return arr[1];
        }
    }
}

export const replaceWithSpace = (value) => {
    return value?.replaceAll("%20", " ");
}