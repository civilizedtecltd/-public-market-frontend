
import axios from 'axios';
import { useEffect, useState } from "react";
import { isInvalid } from '../Utilities/Utilities';

export const BannerAdCategoryList = (props) => {
     
    const [adSrc, setAdSrc] = useState('');

    const categoryName = props.categoryName;

    let bannerAdsLocal;
    const loadLocalBannerAds = () => {
        bannerAdsLocal = localStorage.getItem(categoryName);
        const loading = localStorage.getItem('banner_ad_loading');
        if (isInvalid(bannerAdsLocal)
            && (
                loading === null
                || loading === undefined
                || !JSON.parse(loading)
            )
        ) {
            load();
        }
    }

    useEffect(() => {
        loadLocalBannerAds();
        imageChange()
        const interval = setInterval(() => {
            imageChange()
        }, 5000);
        return () => clearInterval(interval);
      
    }, []);


    const imageChange = () => {
        if (bannerAdsLocal) {
            const bannerAdsLocalArray = JSON.parse(bannerAdsLocal)
            const random = Math.floor(Math.random() * bannerAdsLocalArray.length);
            const image = bannerAdsLocalArray[random]?.image;
            // console.log(image)
            setAdSrc(image);
            bannerAdsLocalArray.splice(random, 1);
            if (bannerAdsLocalArray?.length) {
                localStorage.setItem(categoryName, JSON.stringify(bannerAdsLocalArray))
            }
            else {
                localStorage.removeItem(categoryName);
                loadLocalBannerAds();
            }
        }
        else {
            loadLocalBannerAds();
        }
    }

    const load = () => {
        localStorage.setItem('banner_ad_loading', true);
        const req1 = axios.get('adbanner/?limit=5000000000000000');
        const req2 = axios.get('adbanner/category/');
        Promise.all([req1, req2]).then(x => {
            const _allBannerAds = x[0].data.results;
            const _allBannerAdCategories = x[1].data;
            if (categoryName && _allBannerAdCategories && _allBannerAds) {
                _allBannerAdCategories.forEach((category) => {
                    if (category?.name === categoryName) {
                        const categoryBannerAds = _allBannerAds.filter((bannerAd) => {
                            if (bannerAd?.category === category?.id) {
                                return bannerAd;
                            }
                            return [];
                        });
                        localStorage.removeItem(categoryName);
                        if (categoryBannerAds?.length > 0) {
                            localStorage.setItem(categoryName, JSON.stringify(categoryBannerAds));
                        }
                    }
                });
            }
            localStorage.setItem('banner_ad_loading', false);
        }).finally(() => localStorage.setItem('banner_ad_loading', false));
    }
    
    
    return (
        <> 
        {adSrc ?
        <img
        src={adSrc}
        key={adSrc}
        alt=""
        width={props?.widthSize}
        height={props?.heightSize}
        />
        : "Loading"} 
        </>
    );
}

