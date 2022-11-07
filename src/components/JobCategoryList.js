import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageCheck, stringLimitShow, useWindowSize } from "../helpers/Helpers";
import {
    categoryAndSubCategoryWiseAdCount, getJobCategoryItems,
    isInvalid
} from "../Utilities/Utilities";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import { getJobCategoryAction } from "../redux/action/userProfileAction/profileJobAction";

const JobCategoryList = (props) => {
    const dispatch = useDispatch();
    const [allJobs, setAllJobs] = useState();
    const [allJobCategories, setAllJobCategories] = useState();
    const [loading, setLoading] = useState(true);
    const { jobCategoryItemResponse } = useSelector((state) => state.getJobCategoryReducer);

    useEffect(() => {
        initSubCategory();
    }, [dispatch])

    useEffect(() => {
        initSubCategory();
    }, [jobCategoryItemResponse])

    const initSubCategory = () => {
        let getAllJobCategories = getJobCategoryItems();

        if (isInvalid(getAllJobCategories)) {
            dispatch(getJobCategoryAction())
        }
        if (getAllJobCategories) {
            setAllJobCategories(getAllJobCategories)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (allJobCategories) {
            const allJobApi = async () => {
                try {
                    const response = (await axios.get('/job/?limit=5000000000000000'))?.data?.results
                    setAllJobs(response);
                } catch (err) {
                    console.log(err);
                }
            }
            allJobApi()
        }
    }, [allJobCategories])

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    const [toggleCategory, setToggleCategory] = useState(false)
    const showHideAllAdCategory = () => {
        setToggleCategory(x => !x)
    }
    const toggleCategoryInit = useWindowSize().width < 770 ? toggleCategory : ""

    const changeRouteCategory = (category) => {
        props.setCategoryDefaultValue(category.id);
    }

    return (
        <>
            <div className="sidebar_categories">
                <div className="d-flex justify-content-between">
                    <div className="sidebar_title">
                        <h5 className="title">
                            {languageCheck() === 'bn' ? "ক্যাটাগরি" : "Categories"}</h5>
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


                            <div className={toggleCategoryInit ? "category_list" : ""} >
                                {allJobCategories?.map((category, i) => (
                                    <div className="card" key={i}>
                                        <div className="card-header" id="heading50">
                                            <a role={"button"} className={"d-flex justify-content-between"} onClick={() => onChange('category', {
                                                value: category.id,
                                                title: category.name
                                            })}>
                                                <div>
                                                    <img
                                                        src={category.image}
                                                        alt="Icon" style={{ width: '25px' }} />
                                                    <span
                                                        className={props.getCategoryDefaultValue === category.id ? "active__category_list" : ''}
                                                        onClick={() => changeRouteCategory(category)}
                                                    >{stringLimitShow(category.name, 17)} <span
                                                        className="red">({categoryAndSubCategoryWiseAdCount(allJobs, category?.id, 'category-jobs-count')})</span></span>
                                                </div>
                                            </a>
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

export default JobCategoryList;