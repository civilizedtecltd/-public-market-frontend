import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../asset/frontend/assets/images/logo/pmlogo.png';
import { getAdCategoryAction, getAllAdAction } from '../../redux/action/userProfileAction/profileAdAction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { languageCheck, localStorageClear, titlecConvertToSlug } from "../../helpers/Helpers";

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customer_dashbord_routes = [
        '/dashboard/',
        '/customer_professonal',
        '/my/profile/setting/',
        '/customer_professonal_create',
        '/customer_ads',
        '/customer_ads_create',
        '/my/adbanner/list/',
        '/my/adbanner/create/',
        '/my/tvc/list/',
        '/my/tvc/create/',
        '/my/job/create/',
        '/my/job/create/',
        '/customer_cv_upload',
        '/customer_cv_upload_create',
    ];

    const customer_auth_route = ['/customer/login/', '/customer/register/'];

    const customer_dashbord_route = customer_dashbord_routes.includes(
        window.location.pathname
    )
        ? 'activemenu'
        : '';

    const customer_login_route = customer_auth_route.includes(
        window.location.pathname
    )
        ? 'activemenu '
        : ' ';

    const [rotate, setRotate] = useState(false);
    const menuBarAnimation = (e) => {
        setRotate(!rotate);
    };

    // show all category
    const { getAllAdsCategory } = useSelector((state) => state.getAdCategoryReducer);

    useEffect(() => {
        dispatch(
            getAdCategoryAction(),
            getAllAdAction()
        );
        adTotalViewCount();
    }, [dispatch]);


    const token = localStorage.getItem('token');

    const profileRoute = '/dashboard/';
    const loginRoute = '/customer/login/';

    // show all view count
    const [adCountInfo, setAdCountInfo] = useState([])
    const [totalPost, setTotalPost] = useState([])
    const [totalPostView, setTotalPostView] = useState([])

    const adTotalViewCount = async () => {
        try {
            const response = (await axios.get('/core/navbar/'))?.data
            if (response) {
                setAdCountInfo(response)
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (adCountInfo.total_posts) {
            if (adCountInfo.total_posts > 1000000) {
                setTotalPost((adCountInfo.total_posts / 10000000).toFixed(1) + "M")
            } else if (adCountInfo.total_posts < 1000000 && adCountInfo.total_posts > 1000) {
                setTotalPost((adCountInfo.total_posts / 1000).toFixed(1) + "K")
            } else if (adCountInfo.total_posts < 1000) {
                setTotalPost(adCountInfo.total_posts)
            }
        } else {
            setTotalPost(adCountInfo.total_posts)
        }

    }, [adCountInfo.total_posts])

    useEffect(() => {
        if (adCountInfo.total_views_count) {
            if (adCountInfo.total_views_count > 1000000) {
                setTotalPostView((adCountInfo.total_views_count / 10000000).toFixed(1) + "M")
            } else if (adCountInfo.total_views_count < 1000000 && adCountInfo.total_views_count > 1000) {
                setTotalPostView((adCountInfo.total_views_count / 1000).toFixed(1) + "K")
            } else if (adCountInfo.total_views_count < 1000) {
                setTotalPostView(adCountInfo.total_views_count)
            }
        } else {
            setTotalPostView(adCountInfo.total_views_count)
        }

    }, [adCountInfo.total_views_count])

    const languageChecked = localStorage.getItem('language');
    if (!languageChecked) {
        localStorage.setItem('language', 'en');
    }

    const languageChange = () => {
        if (languageChecked === 'en') {
            localStorage.setItem('language', 'bn');
        }
        if (languageChecked === 'bn') {
            localStorage.setItem('language', 'en');
        }
        localStorageClear();
        navigate('/');
        window.location.reload();
    }

    return (
        <>
            <ToastContainer />
            <header className="header_area">
                <div className="header_navbar navbar_position">
                    <div className="container">
                        <div className="top_menu_mobile_wrap ">
                            <div className="top_menu_mobile"  >
                                <ul>
                                    <li>
                                        <Link to={token ? '/dashboard/' : loginRoute}>
                                            {token ?
                                                <>
                                                    <i className="fas fa-user"></i>
                                                    {" "}{languageCheck() === 'bn' ? 'প্রোফাইল' : 'Profile'}
                                                </> :
                                                languageCheck() === 'bn' ? 'লগ ইন ' : 'Login'
                                            }
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="view-count" to="/">
                                            {totalPost} <span className="line"></span>{' '}

                                            <i className="fas fa-ad show"></i>{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="view-count" to="/">
                                            {totalPostView} <span className="line"></span>{' '}

                                            <i className="fas fa-eye show"></i>{' '}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav">
                            <input
                                type="checkbox"
                                id="nav-check"
                                onClick={menuBarAnimation}
                            />
                            <div className="nav-btn">
                                <label htmlFor="nav-check">
                                    <span
                                        className={
                                            rotate ? 'first-bar first-bar-animation' : 'first-bar'
                                        } ></span>
                                    <span
                                        className={rotate ? 'first-bar d-none' : 'second-bar'}
                                    ></span>
                                    <span
                                        className={
                                            rotate ? 'first-bar third-bar-animation' : 'third-bar'
                                        }
                                    ></span>
                                </label>
                            </div>
                            <div className="nav-header">
                                <Link className="navbar-brand" to="/">
                                    {' '}
                                    <img
                                        src={logo}
                                        alt="logo"
                                        style={{ width: '100%', marginTop: '-1px' }}
                                    />{' '}
                                </Link>
                            </div>
                            <div style={{ marginTop: "-3px" }} className="nav-links">
                                <ul>
                                    <li>
                                        <NavLink to="/"
                                            className={window.location.pathname === '/' ? 'activemenu' : ''}>
                                            {languageCheck() === 'bn' ? 'হোম' : 'Home'} <span className="line"></span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/alladscategorys/"
                                            className={window.location.pathname === '/alladscategorys/' ? 'activemenu' : ''}>
                                            {languageCheck() === 'bn' ? 'ক্যাটাগরি' : 'Categories'}
                                            <i className="fa fa-angle-down navicon"></i>
                                        </NavLink>
                                        <ul className="sub-menu1 sub_menu_top">
                                            {getAllAdsCategory &&
                                                getAllAdsCategory?.map((category, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            state={{ type: 'ad_category', id: category?.id }}
                                                            to={{ pathname: '/allads/divisions/districts/' + titlecConvertToSlug(category?.name) + "/sub-categories" }}>
                                                            <img
                                                                src={category.image}
                                                                alt=""
                                                                style={{ width: '20px' }}
                                                                height="20px"
                                                            /> &nbsp;{category.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/alltvcs" className={window.location.pathname === '/alltvcs'
                                            ? 'activemenu' : ''}>
                                            {languageCheck() === 'bn' ? 'টিভিসি' : 'TVC'}
                                            <i className="fa fa-angle-down navicon"></i>
                                        </Link>
                                        <ul className="sub-menu2 sub_menu_top">
                                            <li>
                                                <Link to={token ? "/my/tvc/create/" : loginRoute}>
                                                    <i className="fal fa-upload"></i>&nbsp;
                                                    {languageCheck() === 'bn' ? 'টিভিসি আপলোড করুন' : 'Upload TVC'}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/alltvcs">
                                                    <i className="fal fa-tv-retro"></i>&nbsp;
                                                    {languageCheck() === 'bn' ? 'টিভিসি ভিডিও' : 'TVC Videos'}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            to={token ? profileRoute : loginRoute}
                                            className="nav_job_bank" >
                                            {languageCheck() === 'bn' ? 'জব ব্যাংক' : 'Job Bank'} <i
                                                className="fa fa-angle-down navicon"></i>
                                        </Link>
                                        <Link
                                            to={token ? "/alljobs/divisions/districts/categories" : loginRoute}
                                            className="nav_job_bank_mobile" >
                                            {languageCheck() === 'bn' ? 'চাকরির বিজ্ঞাপন' : 'Jobs'} <i
                                                className="fa fa-angle-down navicon"></i>
                                        </Link>
                                        <ul className="sub-menu2 sub_menu_top">
                                            <li>
                                                <Link to={token ? "/dashboard/postad/" : loginRoute}>
                                                    <i className="fal fa-bullhorn"></i>&nbsp;
                                                    {languageCheck() === 'bn' ? 'শূন্যপদের ঘোষণা' : 'Vacancy Announcement '}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/alljobs/divisions/districts/categories">
                                                    <i className="fal fa-briefcase"></i>{" "}
                                                    {languageCheck() === 'bn' ? 'চাকরির বিজ্ঞাপন' : 'Jobs'}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {token ? (
                                        <>
                                            {' '}
                                            <li className="loginlist">
                                                <NavLink to="/dashboard/" className={customer_dashbord_route} >
                                                    <i className="fas fa-user navusericon"></i>
                                                    {languageCheck() === 'bn' ? 'প্রোফাইল' : 'Profile'}
                                                </NavLink>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="loginlist">
                                            <NavLink to="/customer/login/" className={customer_login_route}  >
                                                {languageCheck() === 'bn' ? 'লগ ইন ' : 'Login'}
                                            </NavLink>
                                        </li>
                                    )}
                                    <li>
                                        <Link className="dddddd" to="/allads/divisions/districts/categories/sub-categories"  >
                                            {languageCheck() === 'bn' ? 'সমস্ত বিজ্ঞাপন' : 'All Ads'}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={languageChange} className="dddddd">
                                            <span className={languageChecked === 'bn' ? '' : 'd-none'}>English</span>
                                            <span className={languageChecked === 'en' ? '' : 'd-none'}>বাংলা</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="row restricted-li">
                                            <div className="col-12">
                                                <Link className="view-count" to="/">
                                                    {totalPostView} <span className="line"></span>
                                                    <i className="fas fa-eye show"></i>
                                                </Link>
                                            </div>
                                            <div className="col-12">
                                                <Link className="ad-count" to="/">
                                                    {totalPost} <span className="line"></span>
                                                    <i className="fas fa-ad show"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_btn">
                                <ul>
                                    <li>
                                        <button style={{ border: 'none', padding: "0 8px !important" }} className="sign-up invi-button customBtn"
                                            onClick={languageChange}>
                                            <span className={languageChecked === 'bn' ? '' : 'd-none'}>English</span>
                                            <span className={languageChecked === 'en' ? '' : 'd-none'}>বাংলা</span>
                                        </button>
                                    </li>
                                    <li>
                                        <Link className="sign-up invi-button customBtn" to="/allads/divisions/districts/categories/sub-categories" style={{ paddingRight: '8px !important', paddingLeft: '8px !important' }}>
                                            {languageCheck() === 'bn' ? 'সমস্ত বিজ্ঞাপন' : 'All Ads'}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <NavLink
                                to={token ? '/dashboard/postad/' : loginRoute}
                                className=" no-border ad__post__btn"  >
                                {languageCheck() === 'bn' ? 'আপনার বিজ্ঞাপন দিন' : 'POST YOUR AD'}
                            </NavLink>
                            <div className="right_menu_mobile">
                                <ul>
                                    <li>
                                        <Link className="view-count" to="/">
                                            {totalPost} <span className="line"></span>{' '}
                                            <i className="fas fa-ad show"></i>{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="view-count" to="/">
                                            {totalPostView} <span className="line"></span>{' '}
                                            <i className="fas fa-eye show"></i>{' '}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={token ? '/dashboard/' : loginRoute}>
                                            {token ?
                                                <>
                                                    <i className="fas fa-user"></i>
                                                    {" "}{languageCheck() === 'bn' ? 'প্রোফাইল' : 'Profile'}
                                                </> :
                                                languageCheck() === 'bn' ? 'লগ ইন ' : 'Login'
                                            }
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;