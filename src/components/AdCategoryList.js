import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirst, languageCheck, stringLimitShow, useWindowSize } from "../helpers/Helpers";
import {
    categoryAndSubCategoryWiseAdCount,
    getAdCategoryItems,
    getAdSubCategoryItems,
    isInvalid
} from "../Utilities/Utilities";
import axios from "axios";
import { getAdCategoryAction, getAdSubCategoryAction } from "../redux/action/userProfileAction/profileAdAction";
import Skeleton from 'react-loading-skeleton'

const AdCategoryList = (props) => {

    const dispatch = useDispatch();
    const [categoryActive, setCategoryActive] = useState();
    const [allAds, setAllAds] = useState();
    const [getAllAdsCategoryLocal, setGetAllAdsCategoryLocal] = useState();
    const [loading, setLoading] = useState(true);
    const { getAllAdsSubCategory } = useSelector((state) => state.getAdSubCategoryReducer);
    const { getAllAdsCategory } = useSelector((state) => state.getAdCategoryReducer);

    useEffect(() => {
        initSubCategory();
    }, [])

    useEffect(() => {
        initSubCategory();
    }, [getAllAdsSubCategory, getAllAdsCategory])

    const initSubCategory = () => {

        let allAdsCategoryLocal = getAdCategoryItems();
        let allAdsSubCategoryLocal = getAdSubCategoryItems();

        if (isInvalid(allAdsCategoryLocal)) {
            dispatch(getAdCategoryAction())
        }
        if (isInvalid(allAdsSubCategoryLocal)) {
            dispatch(getAdSubCategoryAction())
        }

        if (allAdsCategoryLocal && allAdsSubCategoryLocal) {
            allAdsCategoryLocal.forEach((category) => {
                category.subCategories = allAdsSubCategoryLocal.filter((subCategory) => category.id === subCategory.ad_category)
            })
            setLoading(false)
        }
        setGetAllAdsCategoryLocal(allAdsCategoryLocal);
    }

    useEffect(() => {
        if (getAllAdsCategoryLocal) {
            const allAdApi = async () => {
                try {
                    const response = (await axios.get('adpost/?limit=5000000000000000'))?.data?.results
                    setAllAds(response);
                } catch (err) {
                    console.log(err);
                }
            }
            allAdApi()
        }
    }, [getAllAdsCategoryLocal])

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    const [toggleCategory, setToggleCategory] = useState(false)
    const showHideAllAdCategory = () => {
        setToggleCategory(x => !x)
    }
    const toggleCategoryInit = useWindowSize().width < 770 ? toggleCategory : ""

    const changeRouteCategory = (category) => {
        props.setAdCategoryDefaultValue(category.id);
        props.setAdSubCategoryDefaultValue("");
    }
    const changeRouteSubCategory = (subCategory) => {
        props.setAdSubCategoryDefaultValue(subCategory.id);
        console.log('subCategory.ad_category check', subCategory.ad_category);
        props.setAdCategoryDefaultValue(subCategory.ad_category);
    }

    useEffect(() => {
        if (props?.getLocationData?.state?.id) {
            props.setAdCategoryDefaultValue(props?.getLocationData?.state?.id);
        }
    }, [props?.getLocationData?.state?.id])

    return (
        <>
            <div className="sidebar_categories">
                <div className="d-flex justify-content-between">
                    <div className="sidebar_title">
                        <h5 className="title"> {languageCheck() === 'bn' ? "ক্যাটাগরি" : "Categories"}</h5>
                    </div>
                    <div className="search__category__btn mt-2 category_list_btn">
                        <button type="button" onClick={showHideAllAdCategory} className="category__click__btn">
                            <i className={!toggleCategory ? "fa fa-minus fa_custom_card" : "fa fa-plus fa_custom_card"}></i>
                        </button>
                    </div>
                </div>

                {loading === false ?
                    <div className="sidebar_categories_content">
                        <div className="accordion" id="accordionExample">

                            <div className={toggleCategoryInit ? "category_list" : ''} >
                                {getAllAdsCategoryLocal?.map((category, i) => (
                                    <div className="card" key={i}>
                                        <div className="card-header" id="heading50">
                                            <a role={"button"} className="d-flex justify-content-between ad_category__name" onClick={() => onChange('ad_category', { value: category.id, title: category.name })}>
                                                <div >
                                                    <img src={category.image} alt="Icon" style={{ width: '25px' }} />
                                                    <span onClick={() => { showHideAllAdCategory(); changeRouteCategory(category); }}
                                                        className={props.getAdCategoryDefaultValue === category.id ?
                                                            "active__category_list" : ''} >
                                                        {capitalizeFirst(stringLimitShow(category.name, 17))}
                                                        <span className="red" onClick={() => { changeRouteCategory(category); }}>
                                                            ({categoryAndSubCategoryWiseAdCount(allAds, category?.id, 'category-ads-count')})
                                                        </span></span>
                                                </div>
                                                <div className="collapsed"
                                                    onClick={() => (setCategoryActive(categoryActive === i ? '' : i))}
                                                    data-bs-toggle="collapse" href={'#collapse' + i} role="button"
                                                    aria-expanded={categoryActive === i ? "true" : "false"}
                                                    aria-controls="collapse50">
                                                    <strong className="red">{categoryActive === i ? '-' : "+"}</strong>
                                                </div>
                                            </a>
                                        </div>
                                        <div className={categoryActive === i ? "collapse show" : "collapse"}
                                            id={'collapse' + i}>
                                            <div className="card-body">
                                                <ul className="sidebar_categories_list">
                                                    {category.subCategories?.map((subCategory, i) => (
                                                        <li key={'fgf' + i} onClick={() => onChange('ad_sub_category', {
                                                            value: subCategory.id,
                                                            title: subCategory.name
                                                        })}
                                                            className={props.activeSubCategory === subCategory.id ?
                                                                "active__category_list red" : 'red'} >
                                                            <a onClick={() => { showHideAllAdCategory(); changeRouteSubCategory(subCategory); }} role={"button"}
                                                            >{stringLimitShow(subCategory.name, 14)}
                                                                <span className="red" >
                                                                    ({categoryAndSubCategoryWiseAdCount(allAds, subCategory?.id, 'sub-category-ads-count')})
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                    : <Skeleton count={20} containerClassName={"loadingSkeletonWith"} />
                }
            </div>
        </>
    )
}

export default AdCategoryList;