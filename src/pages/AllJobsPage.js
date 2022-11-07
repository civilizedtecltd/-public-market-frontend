import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import JobFilter from '../components/Job/JobFilter';
import AllJob from '../components/Job/AllJob';
import Footer from '../components/Footer/Footer';
import PaginateCustom from '../components/Paginate/PaginateCustom';
import { useDispatch } from 'react-redux';
import { getPaginationAction } from '../redux/action/paginationAction';
import BannerAdShowLeft from '../components/BannerAdComponets/BannerAdShowLeft';
import { debounce, getDistrictItems, getDivisionItems, getJobCategoryItems, getQueryParam, replaceWithSpace } from "../Utilities/Utilities";
import BannerAdShowTop from '../components/BannerAdComponets/BannerAdShowTop';
import BannerAdShowRight from '../components/BannerAdComponets/BannerAdShowRight';
import BannerAdShowBottom from '../components/BannerAdComponets/BannerAdShowBottom';
import JobCategoryList from "../components/JobCategoryList";
import { languageCheck, titlecConvertToSlug, useWindowSize } from '../helpers/Helpers';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/CommonComponents/Breadcrumb/Breadcrumb';

const CustomerAllJobs = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [getJobs, setJobs] = useState('');
    const [getFilter, setFilter] = useState({});
    const filterRef = useRef();
    const refSearch = useRef();
    const [getBreadcrumbs, setBreadcrumbs] = useState([]);
    const getLocationData = useLocation();

    const [getCategoryDefaultValue, setCategoryDefaultValue] = useState("");
    const [getDivisionDefaultValue, setDivisionDefaultValue] = useState("");
    const [getDistrictDefaultValue, setDistrictDefaultValue] = useState("");

    const [canNavigate, setNavigate] = useState(true);
    const [oldFilter, setOldFilter] = useState({});
    const [firstCall, setFirstCall] = useState(false);
    const [getSearch, setSearch] = useState('');

    const breadcrumbOrders = ["division", "district", "category", "search"];
    const keyPathMap = {
        division: "divisions",
        district: "districts",
        category: "categories"
    };

    const paginateInfo = {
        path: 'job/',
        offset: 0,
        limit: 10
    }

    const getPaginateData = (paginateData, getNewOffset) => {
        setJobs(paginateData?.results);
    }

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

    const handleBreadcrumbClick = (value) => {
        const slices = getBreadcrumbs.slice(0, value.index + 1);
        const filter = { ...getFilter };
        ["category", "division", "district"].forEach(x => {
            if (!slices.filter(y => y.key === x).length) {
                delete filter[x];
            }
        });
        setFilter(filter);
    }

    const segmentValue = value => {
        value = decodeURIComponent(value);
        return replaceWithSpace(value);
    }

    const setValuesOnUriChanges = (uri, filter) => {
        const segments = uri?.split('/').filter(x => x?.trim());
        const len = segments.length;
        const _filter = {};
        setCategoryDefaultValue("");
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
            const jobCategory = getJobCategoryItems()?.find(x => titlecConvertToSlug(x.name) === segmentValue(segments[3]));
            if (jobCategory) {
                _filter.category = {
                    value: jobCategory.id,
                    title: jobCategory.name
                }
                setCategoryDefaultValue(jobCategory.id);
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
                let fullPath = `/alljobs/${path}`;
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
        setValuesOnUriChanges(getLocationData.pathname, true);
    }, [getLocationData]);

    useEffect(() => {
        setFirstCall(true);
        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        }
    }, []);

    useEffect(() => {
        if (JSON.stringify(oldFilter) !== JSON.stringify(getFilter)) {
            setOldFilter(getFilter);
            const filter = {}
            const keys = Object.keys(getFilter);
            keys.forEach(x => {
                const value = getFilter[x];
                if (value.constructor.name === 'Object') {
                    filter[x] = value.value;
                }
                else {
                    filter[x] = value;
                }
            });
            dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset, filter));
            generateBreadcrumbs();
        }
        else if (firstCall) {
            setFirstCall(false);
            dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset, {}));
        }
    }, [getFilter]);

    const onPopState = (e) => {
        setNavigate(false);
    }

    const onFilterChange = (key, value) => {
        const obj = { ...getFilter };
        obj[key] = value;
        paginateInfo.offset = 0;
        if (key === 'division') {
            delete obj.district;
        }
        setFilter(obj);
    }

    const filterAndSearchReset = () => {
        setBreadcrumbs([]);
        setFilter({});
        setSearch('');
        filterRef?.current?.reset();
        refSearch.current.value = "";
        navigate('/alljobs/divisions/districts/categories');
        setCategoryDefaultValue("");
    }

    const [toggleCategory, setToggleCategory] = useState(false)
    const showHideAllAdCategory = () => {
        setToggleCategory(x => !x)
    }

    const toggleCategoryInit = useWindowSize().width < 770 ? toggleCategory : ""

    return (
        <>
            <Header />
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
                                            <h5 className="title">
                                                {languageCheck() === 'bn' ? "ফিল্টার করুন" : "Filter By"}
                                            </h5>
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
                                    <JobFilter
                                        ref={filterRef}
                                        onChange={onFilterChange}
                                        toggleCategoryInit={toggleCategoryInit}
                                        setToggleCategory={setToggleCategory}

                                        getCategoryDefaultValue={getCategoryDefaultValue}
                                        setCategoryDefaultValue={setCategoryDefaultValue}
                                        getDivisionDefaultValue={getDivisionDefaultValue}
                                        setDivisionDefaultValue={setDivisionDefaultValue}
                                        getDistrictDefaultValue={getDistrictDefaultValue}
                                        setDistrictDefaultValue={setDistrictDefaultValue}
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
                        <nav className="breadcrumb__area"  >
                            <ul style={{ display: 'flex', flexWrap: "wrap" }} >
                                <li>
                                    <Link to='/'>
                                        {languageCheck() === 'bn' ? "হোম" : "home"}
                                    </Link>
                                </li>
                                <li >
                                    <Link to='/alljobs/divisions/districts/categories'>
                                        <span>{">"}</span>
                                        {languageCheck() === 'bn' ? "সমস্ত চাকরি" : "all jobs"}
                                    </Link>
                                </li>
                                <Breadcrumb items={getBreadcrumbs} onClick={handleBreadcrumbClick} />
                            </ul>
                        </nav>

                        <div className="col-lg-3">
                            <div className="product_sidebar pt-3">
                                <JobCategoryList
                                    onChange={onFilterChange}
                                    getCategoryDefaultValue={getCategoryDefaultValue}
                                    setCategoryDefaultValue={setCategoryDefaultValue}
                                />
                            </div>

                            <div className="sidebar-ad banner__ad__left mt-40 p-3">
                                <BannerAdShowLeft widthSize={"200px"} heightSize={"230px"} />
                            </div>
                        </div>

                        {/* all job loop */}
                        <div className="col-lg-7">
                            {getJobs && getJobs?.map((allJobsData, i) => (
                                <AllJob key={i} allJobsData={allJobsData} />
                            ))}
                        </div>

                        <div className="col-lg-2 mt-30 pt-3 banner__ad__right">
                            <div className="sidebar-ad ">
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
                                    <PaginateCustom initialDispatch={false} paginateInfo={paginateInfo} onPaginateData={getPaginateData} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CustomerAllJobs;