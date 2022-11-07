import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AdsPricingCard from '../components/Card/AdsPricing/AdsPricingCard';
import TvcCard from '../components/Card/Tvc/TvcCard';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import AdsCard from '../components/Card/Ads/AdsCard';
import {getAdCategoryAction, getAllAdAction} from '../redux/action/userProfileAction/profileAdAction';
import AdsCategoryCard from '../components/Card/Ads/AdsCategoryCard';
import {getAllTvcAction} from '../redux/action/userProfileAction/profileTvcAction';
import {getDistrictAction, getDivisionAction} from '../redux/action/coreAction';
import {getPricingAction} from '../redux/action/commonsAction/commonsAction';
import DivisionCard from '../components/Card/Locations/DivisionCard';
import {getDistrictItems, getDivisionItems, isInvalid} from "../Utilities/Utilities";

import payImage from "../asset/frontend/assets/images/payment/pay.png"
import jobImage from "../asset/frontend/assets/images/payment/job.png"
import {languageCheck} from "../helpers/Helpers";
import translate from "../lang/translate";
import Key from "../lang/key";
import {sortByAsc} from "../helpers/Helpers"


const HomePage = () => {
    // document.title = "Home | Public Market Bd"
    const videoRef = useRef(null);
    const dispatch = useDispatch();

    // show all ads category 
    const {getAllAdsCategory} = useSelector(state => state.getAdCategoryReducer)
    useEffect(() => {
        dispatch(getAdCategoryAction())
        // videoSetLocalStorage()
    }, [dispatch]);
    const getAllAdsCategorySliceData = getAllAdsCategory?.slice(0, 10)

    // show all ad 
    const {getAllAd} = useSelector(state => state.getAllAdReducer)
    useEffect(() => {
        dispatch(getAllAdAction())
    }, [dispatch]);

    const getAllAdSliceData = getAllAd?.results?.slice(0, 8)
    const [allAdCountCategory, setAllAdCountCategory] = useState('')

    useEffect(() => {
        const allAdApi = async () => {
            try {
                const response = (await axios.get('adpost/?limit=5000000000000000'))?.data?.results
                if (response) {
                    setAllAdCountCategory(response)
                }
            } catch (err) {
                console.log(err);
            }
        }
        allAdApi();
    }, [getAllAd]);


    //  show all tvc
    const {getAllTvc} = useSelector(state => state.getAllTvcReducer)
    useEffect(() => {
        dispatch(getAllTvcAction())
    }, [dispatch]);
    const getAllTvcSliceData = getAllTvc?.results?.slice(0, 3)

    //  show all location   

    // load data local storage  divisionItem
    const [divisionItem, setDivisionItem] = useState("");
    useEffect(() => {
        divisionItemAllApi();
    }, []);
    const divisionItemAllApi = async () => {
        try {
            const response = (await axios.get('core/division/')).data
            if (response) {
                setDivisionItem(response)
            }
        } catch (err) {
            console.log(err);
        }
    }

    // const getDivisionSliceData = sortByAsc(divisionItem)?.slice(0, 4)
    const getDivisionSliceData = divisionItem?.slice(0, 4)
    // console.log(getDivisionSliceData)

    // call for filter division to district
    // load data local storage  districtItem
    const {districtItem} = useSelector(state => state.getDistrictReducer)
    const districtItemLocal = getDistrictItems();
    useEffect(() => {
        if (isInvalid(districtItemLocal)) {
            dispatch(getDistrictAction())
        }
    }, [dispatch, districtItem])

    const [getVideo, setVideo] = useState(null);

    const onVideoEnded = () => {
        const localStorageVideos = localStorage.getItem('autoTvcVideos');

        if (!localStorageVideos) {
            videoSetLocalStorage();
        } else {
            const autoTvcAdParseArray = JSON.parse(localStorageVideos);
            const random = Math.floor(Math.random() * autoTvcAdParseArray.length);
            const videoSetVariable = autoTvcAdParseArray[random].video;
            setVideo(videoSetVariable);

            if (getVideo) {
                videoRef?.current?.load();
                videoRef?.current?.play();
            }

            autoTvcAdParseArray.splice(random, 1);
            if (autoTvcAdParseArray.length === 0) {
                localStorage.removeItem("autoTvcVideos")
            }
            if (autoTvcAdParseArray.length) {
                localStorage.setItem('autoTvcVideos', JSON.stringify(autoTvcAdParseArray))
            }
        }
    }

    const videoSetLocalStorage = () => {

        const localStorageAutoTvc = localStorage.getItem('autoTvcVideos');

        if (!localStorageAutoTvc) {
            const apiCallAutoTvc = async () => {
                const response = (await axios.get('tvc/auto/')).data
                // const response = (await axios.get('/')).data
                if (response?.length > 0) {
                    localStorage.setItem('autoTvcVideos', JSON.stringify(response))
                    onVideoEnded()
                } else {
                    apiCallAutoTvc();
                }
            }
            apiCallAutoTvc();
        } else {
            onVideoEnded()
        }
    }
    useEffect(() => {
        if (getVideo === null) {
            onVideoEnded()
        } else {
            try {
                const video = videoRef?.current;
                if (video) {
                    const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
                        && video.readyState > video.HAVE_CURRENT_DATA;

                    if (!isPlaying) {
                        video.load();
                        video.play();
                    }
                }

            } catch (e) {
                console.log(e)
            }
        }
    }, [getVideo])

    //  show all tvc
    const {getPricing} = useSelector(state => state.getPricingReducer)
    useEffect(() => {
        dispatch(getPricingAction())
    }, [dispatch]);
    const getPricingSliceData = getPricing 
    const token = localStorage.getItem('token');
   

    return (
        <>
            <Header/>

            <div className="header_content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row justify-content-around">
                                <div className="col-lg-7">
                                    <div className="content_wrapper">
                                        <h3 className="animate-charcter welcome-message-fbt">  
                                            {languageCheck() === 'bn' ? "পাবলিক মার্কেটে আপনাকে স্বাগতম" :"Welcome to Publicmarket.com.bd"}
                                            </h3>
                                        <p className="welcome-details">
                                            {languageCheck() === 'bn' ?
                                                <>
                                                নতুন এবং পুরাতন সব ধরণের পণ্য ক্রয় এবং বিক্রয় সহ চাকরী, প্রোপার্টি
                                                খুঁজে পেতে এখনই ক্লিক করুন Publicmarket.com.bd তে |
                                                এই সব সেবা নিয়ে আসা হয়েছে Publicmarket.com.bd এর 
                                                মাধ্যমে আপনাদের হাতের নাগালে।
                                                </> :
                                                <>
                                                    Buy and Sell everything from Used / New products &amp; all kind of
                                                    services Or Search for Property,
                                                    Jobs and more. Bringing all of these to your fingertips is
                                                    publicmarket.com.bd. The way toward
                                                    buying and selling is only one click away.
                                                </>}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <video ref={videoRef} onEnded={onVideoEnded} className="auto-tv" muted autoPlay
                                           controls>
                                        <source src={getVideo} type="video/mp4"/>
                                        Your browser does not support HTML video.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="category_area pt-50" id="Category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_title">
                                <h3 className="title">{languageCheck() === 'bn' ? 'জনপ্রিয় ক্যাটাগরি সমূহ' : 'Popular Categories'}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="category_wrapper d-flex flex-wrap justify-content-center">
                        {getAllAdsCategorySliceData && getAllAdsCategorySliceData?.map((allData, i) => (
                            <AdsCategoryCard key={i} index={i} allData={allData}
                                             allAdCountCategory={allAdCountCategory}/>
                        ))}
                        <div className="category_btn">
                            <Link className="main-btn" to="/alladscategorys/">
                                {translate(Key.All_Categories)}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="published_area pt-50" id="Ads">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_title pb-15">
                                <h3 className="title">{languageCheck() === 'bn' ? 'জনপ্রিয় বিজ্ঞাপন' : 'Popular Ads'}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="published_wrapper">
                        <div className="row">
                            {getAllAdSliceData && getAllAdSliceData?.map((allData, i) => (
                                <AdsCard key={i} allData={allData}/>
                            ))}
                        </div>
                        <div className="published_btn">
                            <Link to="/allads/divisions/districts/categories/sub-categories"
                                  className="main-btn">{languageCheck() === 'bn' ? 'জনপ্রিয় বিজ্ঞাপন' : 'Popular Ads'}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="locations_area pt-50 pb-120" id="Locations">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_title pb-15">
                                <h3 className="title">{languageCheck() === 'bn' ? 'জনপ্রিয় স্থানসমূহ' : 'Popular Locations'} </h3>
                            </div>
                        </div>
                    </div>
                    <div className="locations_wrapper">
                        <div className="row justify-content-center">
                            {getDivisionSliceData && getDivisionSliceData?.map((allData, i) => (
                                <DivisionCard key={i} allData={allData} allAdCountCategory={allAdCountCategory}/>
                            ))}
                        </div>
                        <div className="locations_btn text-center">
                            <Link className="main-btn" to="/alldivisions/">
                                {languageCheck() === 'bn' ? 'সমস্ত স্থানসমূহ' : 'All Locations'}
                            </Link></div>
                    </div>
                </div>
            </section>

            <section className="services_area pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_title pb-15">
                                <h3 className="title">{languageCheck() === 'bn' ? "পাবলিক মার্কেটের বিজ্ঞাপন মূল্য" : "PublicMarket Ads Pricing"}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {getPricingSliceData && getPricingSliceData?.map((allData, i) => (
                            <AdsPricingCard key={i} allData={allData}/>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog_area pt-50 pb-120" id="Blog">
                <div className="container">
                    <div className="row">
                        <div className="section_title pb-15">
                            <h3 className="title">
                                {languageCheck() === 'bn' ? "পাবলিক মার্কেটের সাথে চলুন" : "Walk With PublicMarket"}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 making_money_section p-4">
                            <div className="row">
                                <div className="col-3">
                                    <div className="">
                                        <img src={payImage} alt=""/>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <h4>
                                        {languageCheck() === 'bn' ? "অর্থ উপার্জন শুরু করুন!" : "Start Making Money!"}
                                    </h4>
                                    <p className="my-1">
                                        {languageCheck() === 'bn' ?
                                            "আপনার কি কিছু বিক্রি করবেন?" :
                                            "Do you have something to sell?"}<br/>
                                        {languageCheck() === 'bn' ?
                                            "আপনার প্রথম বিজ্ঞাপন পোস্ট করুন অর্থ উপার্জন শুরু করুন!" :
                                            "Post your first ad start  making money! "}
                                    </p>
                                    <Link to={token ? '/dashboard/postad/' : '/customer/login/'}
                                          className="post_your_ad_for_free_btn mt-3 sign-up no-border"
                                    ><i className="fas fa-plus-circle mr-1 "></i>
                                        {languageCheck() === 'bn' ?
                                            "এখানে আপনার বিজ্ঞাপন পোস্ট করুন " :
                                            "Post Your Ad Here"}
                                    </Link>
                                </div>
                                {/* <Link to={token ? '/dashboard/postad/' : '/customer/login/'}
                                          className="post_your_ad_for_free_btn mt-3 sign-up no-border"
                                    ><i className="fas fa-plus-circle mr-1 "></i> 
                                    {languageCheck() === 'bn' ? 
                                    "এখানে আপনার বিজ্ঞাপন পোস্ট করুন " : 
                                    "Post Your Ad Here"} 
                                    </Link> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 making_money_section p-4">
                            <div className="row">
                                <div className="col-3">
                                    <div className="">
                                        <img src={jobImage} alt=""/>
                                    </div>

                                </div>
                                <div className="col-9">
                                    <h4><i className="fa-solid fa-briefcase-blank"></i>
                                    {languageCheck() === 'bn' ?
                                        "পাবলিক মার্কেটের " :
                                        "PublicMarket "} 
                                    {languageCheck() === 'bn' ?
                                        " চাকরি" :
                                        " Jobs"} 
                                    </h4>
                                    <p className="my-1">
                                        {languageCheck() === 'bn' ?
                                            "বাংলাদেশে ভাড়া বা নিয়োগ পেতে চান? " :
                                            "Looking to hire or get hired in Bangladesh?"}<br/>
                                        {languageCheck() === 'bn' ?
                                            "এর মাধ্যমে লক্ষ লক্ষ সিভি ব্রাউজ চাকরির শূন্যপদগুলিতে অ্যাক্সেস পান" :
                                            "Get access to  millions of  CV   browse jobs vacancies through"} PublickMarket.com.bd
                                    </p>
                                    <Link to="/alljobs/" className="post_your_ad_for_free_btn mt-3 ">
                                        {languageCheck() === 'bn' ?
                                            "আরো অনুসন্ধান" :
                                            "Explore  More"}
                                        <i className="fas fa-arrow-right mr-1 ml-2"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br/>
            </section>

            {/* all tvc area */}
            <section className="blog_area pt-50 pb-120" id="Blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section_title pb-15">
                                <h3 className="title">
                                    {languageCheck() === 'bn' ? 'সর্বশেষ টিভিসি' : 'Latest TVC'}
                                </h3></div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {getAllTvcSliceData && getAllTvcSliceData?.map((allData, i) => (
                            <TvcCard key={i} index={i} allData={allData}/>
                        ))}
                    </div>
                    <div className="blog_btn text-center mt-50">
                        <Link to="/alltvcs" className="main-btn">
                            {languageCheck() === 'bn' ? 'সমস্ত টিভিসি দেখুন' : 'All  TVC'} </Link></div>
                </div>
                <br/>
            </section>

            <Footer/>
        </>
    );
};

export default HomePage;