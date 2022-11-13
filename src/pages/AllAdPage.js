import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AllAd from '../components/Ad/AllAd';
import AdFilter from '../components/Ad/AdFilter';
import PaginateCustom from '../components/Paginate/PaginateCustom';
import { getPaginationAction } from '../redux/action/paginationAction';
import BannerAdShowLeft from '../components/BannerAdComponets/BannerAdShowLeft';
import { debounce, getAdCategoryItems, getAdSubCategoryItems, getDistrictItems, getDivisionItems, getQueryParam, isInvalid, replaceWithSpace } from "../Utilities/Utilities";
import AdCategoryList from "../components/AdCategoryList";
import BannerAdShowTop from '../components/BannerAdComponets/BannerAdShowTop';
import BannerAdShowRight from '../components/BannerAdComponets/BannerAdShowRight';
import BannerAdShowBottom from '../components/BannerAdComponets/BannerAdShowBottom';
import { languageCheck, titlecConvertToSlug, useWindowSize } from '../helpers/Helpers';
import Breadcrumb from '../components/CommonComponents/Breadcrumb/Breadcrumb';

import { getDistrictRequest, getDivisionRequest } from "../redux/action/coreAction";
import { getAdCategoryRequest, getAdSubCategoryRequest } from "../redux/action/userProfileAction/profileAdAction";

const AllAdPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getBreadcrumbs, setBreadcrumbs] = useState([]);
    const [getAllData, setAllData] = useState('');
    const [getFilter, setFilter] = useState({});
    const filterRef = useRef();
    const refSearch = useRef();
    const [getSearch, setSearch] = useState('');
    const breadcrumbOrders = ["division", "district", "ad_category", "ad_sub_category", "search"];
    const keyPathMap = {
        division: "divisions",
        district: "districts",
        ad_category: "categories",
        ad_sub_category: "sub-categories"
    };
    const getLocationData = useLocation();

    const [getAdCategoryDefaultValue, setAdCategoryDefaultValue] = useState("");
    const [getDivisionDefaultValue, setDivisionDefaultValue] = useState("");
    const [getDistrictDefaultValue, setDistrictDefaultValue] = useState("");
    const [getAdSubCategoryDefaultValue, setAdSubCategoryDefaultValue] = useState("");
    const [adCategory, setAdCategory] = useState(getLocationData?.state?.id);

    const [canNavigate, setNavigate] = useState(true);
    const [oldFilter, setOldFilter] = useState({});
    const [firstCall, setFirstCall] = useState(false);
    const [loading, setLoading] = useState(true);

    const onSearch = (e) => {
        const obj = { ...getFilter };
        obj.search = {
            value: e.target.value,
            title: e.target.value
        };
        setFilter(obj);
    }

    const searchDebounce = debounce(onSearch);

    const onSearchTextChange = (e) => {
        setSearch(e.target.value);
        searchDebounce(e);
    }

    const getPaginateData = (paginateData, getNewOffset) => {
        setAllData(paginateData?.results);
    }

    const paginateInfo = {
        path: 'adpost/',
        offset: 0,
        limit: 10
    }

    const segmentValue = (value) => {
        value = decodeURIComponent(value);
        return replaceWithSpace(value);
    };

    const setValuesOnUriChanges = (uri, filter) => {
        const segments = uri?.split('/').filter(x => x?.trim());
        const len = segments.length;
        const _filter = {};
        setAdCategoryDefaultValue("");
        setAdSubCategoryDefaultValue("");
        setDivisionDefaultValue("");
        setDistrictDefaultValue("");
        setSearch("");
        if (len >= 2 && segments[1] !== "divisions") {
            // ad category
            const division = getDivisionItems()?.find(x => titlecConvertToSlug(x.name) === segmentValue(segments[1]));
            if (division) {
                _filter.division = {
                    value: division.id,
                    title: division.name
                }
                setDivisionDefaultValue(division.id);
            }
        }
        if (len >= 3 && segments[2] !== "districts") {
            const district = getDistrictItems()?.find(x => titlecConvertToSlug(x.name) === segmentValue(segments[2]));
            if (district) {
                _filter.district = {
                    value: district.id,
                    title: district.name
                }
            }
            setDistrictDefaultValue(district.id);
        }
        if (len >= 4 && segments[3] !== "categories") {
            const adCategory = getAdCategoryItems()?.find(x => titlecConvertToSlug(x.name) === segmentValue(segments[3]));
            if (adCategory) {
                _filter.ad_category = {
                    value: adCategory.id,
                    title: adCategory.name
                }
                setAdCategoryDefaultValue(adCategory.id);
            }
        }
        if (len >= 5 && segments[4] !== "sub-categories") {
            const adSubCategory = getAdSubCategoryItems()?.find(x => titlecConvertToSlug(x.name) === segmentValue(segments[4]));
            if (adSubCategory) {
                _filter.ad_sub_category = {
                    value: adSubCategory.id,
                    title: adSubCategory.name
                }
                setAdSubCategoryDefaultValue(adSubCategory.id);
            }
        }

        const search = replaceWithSpace(getQueryParam(getLocationData.search, 'search'));
        if (search) {
            _filter.search = {
                value: search,
                title: search
            }
            setSearch(search);
        }
        if (filter) {
            setFilter(_filter);
        }
    }

    const navigateToBreadcrumbs = (breadcrumbs) => {
        if (breadcrumbs?.length) {
            const paths = [];
            for (let i = 0; i < breadcrumbOrders.length; i++) {
                const x = breadcrumbOrders[i];
                if (x !== "search") {
                    const item = breadcrumbs.find(y => y.key === x);
                    if (!item) {
                        paths.push(keyPathMap[x]);
                    }
                    else {
                        const path = titlecConvertToSlug(item.title);
                        if (path) {
                            paths.push(path);
                        }
                    }
                }
            }
            const path = paths.join('/');
            if (path) {
                const searchValue = breadcrumbs.find(x => x.key === "search");
                let fullPath = `/allads/${path}`;
                if (searchValue?.title) {
                    fullPath += `?search=${replaceWithSpace(searchValue.title)}`;
                }
                let currentPath = replaceWithSpace(getLocationData?.pathname);
                if (getLocationData?.search) {
                    currentPath += replaceWithSpace(getLocationData?.search);
                }
                if (currentPath !== fullPath) {
                    if (canNavigate) {
                        navigate(fullPath);
                    }
                }
                else {
                    console.log('same uri, no need to navigate!')
                }
                setNavigate(true);
            }
        }
    }

    const onPopState = (e) => {
        setNavigate(false);
    }

    const generateBreadcrumbs = () => {
        // generate breadcrumbs
        let breadcrumbs = [];
        breadcrumbOrders.forEach(x => {
            const filterValue = getFilter[x];
            if (filterValue?.value) {
                breadcrumbs.push({
                    key: x,
                    title: filterValue.title
                });
            }
        });
        setBreadcrumbs(breadcrumbs);
        navigateToBreadcrumbs(breadcrumbs);
    }

    useEffect(() => {
        console.log('uri changed!');
        const divisions = getDivisionItems();
        const districts = getDistrictItems();
        const categories = getAdCategoryItems();
        const subCategories = getAdSubCategoryItems();
        if (loading
            && (isInvalid(divisions)
                || isInvalid(districts)
                || isInvalid(categories)
                || isInvalid(subCategories))) {
            Promise.all([
                getDivisionRequest(),
                getDistrictRequest(),
                getAdCategoryRequest(),
                getAdSubCategoryRequest(),
            ]).then(() => {
                setLoading(false);
                setValuesOnUriChanges(getLocationData.pathname, true);
            });
        }
        else {
            if (loading) {
                setLoading(false);
            }
            setValuesOnUriChanges(getLocationData.pathname, true);
        }
    }, [getLocationData]);

    useEffect(() => {
        setFirstCall(true);
        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const oldFilterStr = JSON.stringify(oldFilter);
            const newFilterStr = JSON.stringify(getFilter);
            const filterChecking = oldFilterStr !== newFilterStr;
            if (filterChecking) {
                setOldFilter(getFilter);
                const filter = {}
                const keys = Object.keys(getFilter);
                breadcrumbOrders.forEach(x => {
                    const key = keys.find(y => y === x);
                    if (key) {
                        const value = getFilter[key];
                        if (value.constructor.name === 'Object') {
                            filter[key] = value.value;
                        }
                        else {
                            filter[key] = value;
                        }
                    }
                });
                dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset, filter));
                generateBreadcrumbs();
                setFirstCall(false);
            }
            else if (firstCall) {
                setFirstCall(false);
                dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset, {}));
            }
        }, 0);
    }, [getFilter]);

    const onFilterChange = (key, value) => {
        const obj = { ...getFilter };
        obj[key] = value;
        paginateInfo.offset = 0;
        if (key === "division") {
            delete obj.district;
        }
        if (key === "ad_category") {
            delete obj.ad_sub_category;
        }
        setFilter(obj);
    }

    const handleBreadcrumbClick = (value) => {
        const slices = getBreadcrumbs.slice(0, value.index + 1);
        const filter = { ...getFilter };
        ["ad_category", "ad_sub_category", "division", "district"].forEach(x => {
            if (!slices.filter(y => y.key === x).length) {
                delete filter[x];
            }
        });
        setFilter(filter);
    }

    const filterAndSearchReset = () => {
        setBreadcrumbs([]);
        setFilter({});
        filterRef?.current?.reset();
        refSearch.current.value = "";
        setAdCategoryDefaultValue("");
        navigate('/allads/divisions/districts/categories/sub-categories');
        setAdSubCategoryDefaultValue("");
        setAdCategory("");
    }

    // search hide show condition 
    const [toggleCategory, setToggleCategory] = useState(false)
    const showHideAllAdCategory = () => {
        setToggleCategory(x => !x);
    }
    const toggleCategoryInit = useWindowSize().width < 770 ? toggleCategory : "";
    return (
        <>
            <Header />
            {loading ?
                <>
                    <div className="container mt-80 pt-50">Loading...</div>
                </> :
                <>
                    <div className="ad-container container mt-80 pt-50">
                        <BannerAdShowTop widthSize={"1110px"} heightSize={"317px"} />
                    </div>
                    <section className="product_page pt-70 pb-120" id="job">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="top-content">
                                        <div className="product_sidebar">
                                            <div className="d-flex justify-content-between">
                                                <div className="sidebar_title d-flex justify-content-between">
                                                    <h5 className="title">{languageCheck() === 'bn' ? "ফিল্টার করুন" : "Filter By"}</h5>
                                                    <button onClick={filterAndSearchReset}
                                                        className="px-2 ml-3 rounded bgRed text-white border-0">{languageCheck() === "bn" ? "রিসেট" : "Reset"}
                                                    </button>
                                                </div>
                                                <div className="search__category__btn mt-2 category_list_btn">
                                                    <button type="button" onClick={showHideAllAdCategory}
                                                        className="category__click__btn">
                                                        <i className={!toggleCategory ? "fa fa-minus fa_custom_card" : "fa fa-plus fa_custom_card"}></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <AdFilter
                                                ref={filterRef}
                                                data={getFilter}
                                                onChange={onFilterChange}
                                                getLocationData={getLocationData}
                                                toggleCategoryInit={toggleCategoryInit}
                                                setToggleCategory={setToggleCategory}
                                                getAdCategoryDefaultValue={getAdCategoryDefaultValue}
                                                setAdCategoryDefaultValue={setAdCategoryDefaultValue}
                                                getFilterRoute={getBreadcrumbs}
                                                getAdSubCategoryDefaultValue={getAdSubCategoryDefaultValue}
                                                setAdSubCategoryDefaultValue={setAdSubCategoryDefaultValue}
                                                setDivisionDefaultValue={setDivisionDefaultValue}
                                                getDivisionDefaultValue={getDivisionDefaultValue}
                                                getDistrictDefaultValue={getDistrictDefaultValue}
                                                setDistrictDefaultValue={setDistrictDefaultValue}
                                                setAdCategory={setAdCategory}
                                                adCategory={adCategory}
                                            />
                                            <div className="input-group form-group searchFieldCustomDesign">
                                                <span className="input-group-append">
                                                    <div className="input-group-text bg-transparent">
                                                        <i className="fa fa-search"></i>
                                                    </div>
                                                </span>
                                                <input
                                                    value={getSearch}
                                                    ref={refSearch}
                                                    type="text"
                                                    onChange={onSearchTextChange}
                                                    className="form-control"
                                                    placeholder={languageCheck() === 'bn' ? "শিরোনাম দ্বারা অনুসন্ধান করুন" : "Search by title"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* breadcrumb__area */}
                                <nav className="breadcrumb__area ">
                                    <ul style={{ display: 'flex', flexWrap: "wrap" }}>
                                        <li>
                                            <Link to='/'>
                                                {languageCheck() === 'bn' ? "হোম" : "home"}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/allads/divisions/districts/categories/sub-categories'>
                                                <span>{">"}</span> {languageCheck() === 'bn' ? "সমস্ত বিজ্ঞাপন" : "all ads"}
                                            </Link>
                                        </li>
                                        <Breadcrumb items={getBreadcrumbs} onClick={handleBreadcrumbClick} />
                                    </ul>
                                </nav>

                                <div className="col-lg-3">
                                    <div className="sidebar_price_range mt-30">
                                        <div className="pt-3">
                                            <AdCategoryList
                                                onChange={onFilterChange}
                                                getFilterRoute={getBreadcrumbs}
                                                getLocationData={getLocationData}
                                                getAdCategoryDefaultValue={getAdCategoryDefaultValue}
                                                setAdCategoryDefaultValue={setAdCategoryDefaultValue}
                                                getAdSubCategoryDefaultValue={getAdSubCategoryDefaultValue}
                                                setAdSubCategoryDefaultValue={setAdSubCategoryDefaultValue}
                                            />
                                        </div>

                                        <div className="small-ad banner__ad__left">
                                            <BannerAdShowLeft widthSize={"200px"} heightSize={"230px"} />
                                        </div>
                                    </div>
                                </div>

                                {/* all ad loop */}
                                <div className="col-lg-7">
                                    <div className="tab-content pt-3 " id="myTabContent">
                                        <div className="tab-pane fade show active tab_pane_card" id="list" role="tabpanel"
                                            aria-labelledby="list-tab">
                                            <div className="product_list">
                                                {getAllData && getAllData?.map((allData, i) => (
                                                    <AllAd key={i} allData={allData} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-2 mt-30 pt-3">
                                    <div className="sidebar-ad banner__ad__right">
                                        <BannerAdShowRight widthSize={"160px"} heightSize={"400px"} />
                                    </div>
                                </div>


                                <div className="col-lg-12 pt-40">
                                    <div className="bottom-ad">
                                        <BannerAdShowBottom widthSize={"1110px"} heightSize={"240px"} />
                                    </div>
                                </div>

                                <div className="col-lg-12 pt-10">
                                    <div className="pagination_wrapper mt-50">
                                        <ul className="pagination justify-content-center">
                                            <PaginateCustom initialDispatch={false} paginateInfo={paginateInfo}
                                                onPaginateData={getPaginateData} />
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <Footer />
                </>}
        </>
    );
};

export default AllAdPage;