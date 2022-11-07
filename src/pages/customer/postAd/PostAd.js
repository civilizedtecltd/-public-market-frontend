import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"
import CategoriesModal from "../../../components/CommonComponents/Modal/CategoriesModal";
import ProfileUpdateRedirectModal from "../../../components/CommonComponents/Modal/ProfileUpdateRedirectModal";
import DivisionAndDistrictModal from "../../../components/CommonComponents/Modal/DivisionAndDistrictModal";
import {Link, useNavigate} from "react-router-dom";
import {getJobCategoryAction} from "../../../redux/action/userProfileAction/profileJobAction";
import {
    getProfileSettingAction
} from "../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import {getAdBannerCategoryAction} from "../../../redux/action/commonsAction/commonsAction";
import {getAdCategoryAction, getAdSubCategoryAction} from "../../../redux/action/userProfileAction/profileAdAction";
import AdCategoryModal from "../../../components/CommonComponents/Modal/AdCategoryModal";
import {
    getAdBannerCategoryItems,
    getAdCategoryItems,
    getJobCategoryItems,
    isInvalid
} from "../../../Utilities/Utilities";

import {languageCheck} from "../../../helpers/Helpers";

const PostAd = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();

    // localStorage.getItem('jobCategoryItem')
    // if cache == null ( call api) else read form cache

    // Job Category Load Data
    const {jobCategoryItem} = useSelector(state => state.getJobCategoryReducer)
    const jobCategoryItemLocal = getJobCategoryItems();
    useEffect(() => {
        if (isInvalid(jobCategoryItemLocal)) {
            dispatch(getJobCategoryAction())
        }
    }, [dispatch, jobCategoryItem])
    // Ad Bannner Category Load Data
    const {adBannerCategoryItem} = useSelector(state => state.getAdBannerCategoryReducer)
    const adBannerCategoryItemLocal = getAdBannerCategoryItems()
    useEffect(() => {
        if (isInvalid(adBannerCategoryItemLocal)) {
            dispatch(getAdBannerCategoryAction())
        }
    }, [dispatch, adBannerCategoryItem])

    const adCategory = getAdCategoryItems();

    const [categoryParam, setCategoryParam] = useState([]);
    const [categorySelect, setCategorySelect] = useState(false);
    const [locationRoute, setLocationRoute] = useState('')

    const [categoryParamRoute, setCategoryParamRoute] = useState(false);
    const [jobCategorySave, setJobCategorySave] = useState(false);
    const [adBannerCategorySave, setAdBannerCategorySave] = useState(false);
    const [adCategorySave, setAdCategorySave] = useState(false);

    const [categoryName, setCategoryName] = useState('')
    const [activesCategory, setActivesCategory] = useState('')

    const [getShowCategoryName, setShowCategoryName] = useState('')

    const [getShowDistrictName, setShowDistrictName] = useState('')
    const [getCategory, setCategory] = useState('');
    const [getCheckBeforePostAd, setCheckBeforePostAd] = useState('');


    const postJob = () => {
        const nameSet = languageCheck() === 'bn' ? "চাকরি" : "Job"
        setCategoryParam(jobCategoryItemLocal)
        setLocationRoute('/my/job/create/')
        setCategoryParamRoute(true)
        setJobCategorySave(true)
        setJobCategorySave(true)
        setCategoryName(nameSet)
        setActivesCategory(jobCategoryItemLocal)
    }
    const postAdBanner = () => {
        const nameSet = languageCheck() === 'bn' ? "বিজ্ঞাপন ব্যানার" : "Ad Banner"
        setCategorySelect(true)
        setCategoryParam(adBannerCategoryItemLocal)
        setCategoryParamRoute('/my/adbanner/create/')
        setAdBannerCategorySave(true)
        setCategoryName(nameSet)
        setActivesCategory(adBannerCategoryItemLocal)
    }

    const adCategoryBtn = () => {
        setCategorySelect(true)
        setCategoryParam(adCategory)
        setCategoryParamRoute('/ad/post/')
        setAdCategorySave(true)
        setLocationRoute('/ad/post/')
    }


    // call profile id
    const {profileData} = useSelector(state => state.getProfileSettingReducer);

    useEffect(() => {
        dispatch(getProfileSettingAction())
    }, [dispatch])

    useEffect(() => {
        if (profileData) {
            if (!profileData.phone_number){
                document.getElementById("redirectButton").click()
            }
        }
    }, [profileData])

    const redirectToPhoneYpdate = () => {
        window.location.pathname = "/customer/add/phone/"
    }

    return (
        <>
            <Header/>
            <section className="dashboard_page pt-70 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="modal  fade" id="ProfileUpdateRedirectModal" data-bs-backdrop="static"
                                 data-bs-keyboard="false"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <strong className="flex pt-10">
                                                {languageCheck() === 'bn' ?
                                                    'প্রোফাইলে তথ্য সম্পূর্ণ করা ছাড়া আপনি কোন পোস্ট করতে পারবেন না'
                                                    : "You cannot post without completing the profile information"}
                                            </strong>
                                        </div>

                                        <button onClick={redirectToPhoneYpdate} style={{background: "red", color: '#fff'}}
                                                className="btn">{languageCheck() === 'bn' ?
                                            'আপনার সঠিক প্রোফাইল তথ্য আপডেট করুন'
                                            : "Update Your Proper Profile Information"}</button>
                                    </div>
                                </div>
                            </div>
                            <button className="d-none" id="redirectButton" data-bs-toggle="modal"
                                    data-bs-target="#ProfileUpdateRedirectModal">
                            </button>
                            <div className="post_form mt-70 pb-5" style={{textAlign: 'center'}}>
                             
                             <span className="mt-5 post__titles" style={{color: '#ff4367', fontWeight: "800"}}>
                             
                               {languageCheck() === 'bn' ? ' ' : "Welcome "}
                                 <span className="post__titles" style={{textTransform: 'capitalize', color: '#1C78AD'}}>
                                  <u><strong>{profileData?.name} </strong></u></span> {' '}
                                 {languageCheck() === 'bn' ? 'চলুন বিজ্ঞাপন, চাকুরি, টিভিসি এবং ব্যানার পোস্ট করি !!'
                                     : "Let's post an ad , job , tvc , banner ad !!"}
                                  </span>
                                <br/>
                                <span style={{color: 'black', fontSize: '14px', fontWeight: "normal"}}
                                      className="mt-2 mb-10 post__titles">
                                  {languageCheck() === 'bn' ? 'নিচের যেকোনো একটি অপশন নির্বাচন করুন' : "Choose any option below"}
                                 </span>

                                {jobCategoryItemLocal ? <div className="row">
                                    <div className="col-md-6 mt-4">
                                        <div className="ad_post_card">
                                            <div className="ad_post_head">
                                                <h4 className="d-flex align-items-center">
                                                    <i className="far mr-2 fa-ad post-ad-icon"
                                                       style={{fontSize: '25px', color: 'red'}}></i>
                                                    {languageCheck() === 'bn' ? 'কিছু একটা বিক্রি করুন' : "Sell something"}
                                                </h4>
                                            </div>
                                            <div className="ad_post_text">
                                                <p onClick={adCategoryBtn}
                                                   data-bs-toggle="modal"
                                                   data-bs-target="#ad__category">{languageCheck() === 'bn' ? 'বিজ্ঞাপন দিন' : "Post Ad"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mt-4">
                                        <div className="ad_post_card">
                                            <div className="ad_post_head">
                                                <h4 className="d-flex align-items-center">
                                                    <i className="fa fa-briefcase mr-2"
                                                       style={{fontSize: '25px', color: 'red'}}></i>
                                                    {languageCheck() === 'bn' ? ' খালি পদের জন্য চাকরি পোস্ট করুন' : "Post job for vacancy"}
                                                </h4>
                                            </div>
                                            <div className="ad_post_text">
                                                <p data-bs-toggle="modal"
                                                   data-bs-target="#job__category" onClick={postJob}>
                                                    {languageCheck() === 'bn' ? 'চাকরি পোস্ট করুন' : "Post Job"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6  mt-4">
                                        <div className="ad_post_card">
                                            <div className="ad_post_head">
                                                <h4 className="d-flex align-items-center">
                                                    <i className="fa fa-laptop mr-2"
                                                       style={{fontSize: '25px', color: 'red'}}></i>
                                                    {languageCheck() === 'bn' ? 'আপনার কোম্পানির প্রতিনিধিত্ব করুন' : "Represent your company"}
                                                </h4>
                                            </div>
                                            <div className="ad_post_text">
                                                <p><Link to="/my/tvc/create/">
                                                    {languageCheck() === 'bn' ? 'টিভিসি পোস্ট করুন' : "Post TVC"}
                                                </Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6  mt-4">
                                        <div className="ad_post_card">
                                            <div className="ad_post_head">
                                                <h4 className="d-flex align-items-center">
                                                    <i className="fa fa-window-maximize mr-2"
                                                       style={{fontSize: '25px', color: 'red'}}></i>
                                                    {languageCheck() === 'bn' ? 'আপনার কোম্পানি সমৃদ্ধ ' : "Rich your company"}
                                                </h4>
                                            </div>
                                            <div className="ad_post_text">
                                                <p
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#job__category"
                                                    onClick={postAdBanner}>
                                                    {languageCheck() === 'bn' ? 'ব্যানার বিজ্ঞাপন করুন' : "Post Banner Ad"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> : 'Loading Please Wait'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>


            {/* modal */}
            <CategoriesModal
                categorySelect={categorySelect}
                categoryParam={categoryParam}
                categoryParamRoute={categoryParamRoute}
                jobCategorySave={jobCategorySave}
                adBannerCategorySave={adBannerCategorySave}
                categoryName={categoryName}
                setActivesCategory={setActivesCategory}
                setShowCategoryName={setShowCategoryName}
                setCategory={setCategory}
            />
            <DivisionAndDistrictModal
                locationRoute={locationRoute}
                setShowDistrictName={setShowDistrictName}
            />
            <Footer/>

            <AdCategoryModal
                categorySelect={categorySelect}
                categoryParam={categoryParam}
                categoryParamRoute={categoryParamRoute}
                adCategorySave={adCategorySave}
            />
        </>
    );
};
export default PostAd;