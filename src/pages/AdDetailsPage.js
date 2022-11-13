import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { getAdDetailsAction, getAllAdAction } from '../redux/action/userProfileAction/profileAdAction';
import { agoDateTimeFormat, capitalizeFirst, languageCheck, stringLimitShow, titlecConvertToSlug } from "../helpers/Helpers";
import AdsCard from '../components/Card/Ads/AdsCard';
import pmImage from "../asset/frontend/assets/images/logo/small-logo.png"
import Moment from 'react-moment';
import translate from '../lang/translate';
import sslImage from "../asset/frontend/assets/images/ad_details/sslpng.png"
import verifyImage from "../asset/frontend/assets/images/ad_details/verify.png"
import axios from "axios"

const AdDetailsPage = () => {

    const [bigImageSet, setBigImageSet] = useState([]);
    const [activeClass, setActiveClass] = useState('image_1');

    const Adshow = useParams();
    const AdId = Adshow?.id

    const getLocationData = useLocation();
    const dispatch = useDispatch();
    const { getAdDetails } = useSelector(state => state.getAdDetailsReducer)

    useEffect(() => {
        if (getAdDetails?.image_1 === null) {
            
            setBigImageSet(getAdDetails?.resize_image[0].bigImage)
        }else{

            setBigImageSet(getAdDetails?.image_1)
        }
    }, [getAdDetails]);

    useEffect(() => {
        dispatch(getAdDetailsAction(AdId))
    }, [Adshow]);

    let unCommonKeys = [];
    if (getAdDetails) {
        unCommonKeys = getAdDetails ? Object.keys(getAdDetails?.uncommon_fields_json) : '';
    }

    // show all ad 
    const { getAllAd } = useSelector(state => state.getAllAdReducer)
    useEffect(() => {
        dispatch(getAllAdAction())
    }, [dispatch]);

    const getAllAdRelated = getAllAd?.results?.filter((ad) => ad?.ad_category === getLocationData?.state?.id)
    const getAllAdRelatedWithOutDisplayAd = getAllAdRelated?.filter((ad) => ad?.id !== AdId)
    const getAllAdSliceData = getAllAdRelatedWithOutDisplayAd?.slice(0, 4)

    const [getNumberHideShow, setGetNumberHideShow] = useState(false)
    const phoneNumberHideShow = () => {
        setGetNumberHideShow(x => !x)
    }

    // Safety area  
    const [showSafetyCard, setShowSafetyCard] = useState(false)
    const [showVerifyCard, setShowVerifyCard] = useState(false)

    const showSafetyCardBtn = () => {
        setShowSafetyCard(x => !x)
    }
    const showVerifyCardBtn = () => {
        setShowVerifyCard(x => !x)
    }

    // all ad category api call 
    const [getAllAdsCategory, setAllAdsCategory] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const response = (await axios.get('adpost/category/')).data
                if (response) {
                    setAllAdsCategory(response)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [getAdDetails])

    const [getAllAdsSubCategory, setAllAdsSubCategory] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const response = (await axios.get('adpost/sub-category/')).data
                if (response) {
                    setAllAdsSubCategory(response)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [getAdDetails])

    const [getDivisionItem, setDivisionItem] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const response = (await axios.get('core/division/')).data
                if (response) {
                    setDivisionItem(response)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [getAdDetails])

    const [getDistrictItem, setDistrictItem] = useState('')
    useEffect(() => {
        const getData = async () => {
            try {
                const response = (await axios.get('core/district/')).data
                if (response) {
                    setDistrictItem(response)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [getAdDetails])

    // show breadcrumb variable
    const breadcrumb_category = getAllAdsCategory && getAllAdsCategory?.find((c) =>
        c?.id === getAdDetails?.ad_category)
    const breadcrumb_sub_category = getAllAdsSubCategory && getAllAdsSubCategory?.find((c) =>
        c?.id === getAdDetails?.ad_sub_category)
    const breadcrumb_division = getDivisionItem && getDivisionItem?.find((d) =>
        d?.id === getAdDetails?.division)
    const breadcrumb_district = getDistrictItem && getDistrictItem?.find((d) =>
        d?.id === getAdDetails?.district);

    const division = titlecConvertToSlug(breadcrumb_division?.name) || "divisions";
    const district = titlecConvertToSlug(breadcrumb_district?.name) || "districts";
    const category = titlecConvertToSlug(breadcrumb_category?.name) || "categories";
    const subCategory = titlecConvertToSlug(breadcrumb_sub_category?.name) || "sub-categories";

    return (
        <>
            <Header />
            <br />
            <br />
            <section className="pb-120 product_details_page pt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            {/* breadcrumb__area */}
                            <nav className="breadcrumb__area mt-30 mb-10"  >
                                {breadcrumb_category && breadcrumb_sub_category &&
                                    breadcrumb_division && breadcrumb_district ?
                                    <ul style={{ display: 'flex', flexWrap: "wrap" }} >
                                        <li><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম" : "home"}</Link></li>
                                        <li>
                                            <p> <span>{">"}</span>
                                                <Link to='/allads/divisions/districts/categories/sub-categories'  >
                                                    {languageCheck() === 'bn' ? "সমস্ত বিজ্ঞাপন" : "all ads"}
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>{">"}</span>
                                                <Link
                                                    state={{ type: 'division', id: breadcrumb_division?.id }}
                                                    to={{ pathname: `/allads/${division}/districts/categories/sub-categories` }}
                                                >
                                                    {breadcrumb_division?.name}
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>{">"}</span>
                                                <Link
                                                    state={{ type: 'district', id: breadcrumb_district?.id }}
                                                    to={{ pathname: `/allads/${division}/${district}/categories/sub-categories` }}
                                                >
                                                    {breadcrumb_district?.name}
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>{">"}</span>
                                                <Link
                                                    state={{ type: 'ad_category', id: breadcrumb_category?.id }}
                                                    to={{ pathname: `/allads/${division}/${district}/${category}/sub-categories` }} >
                                                    {breadcrumb_category?.name}
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p> <span>{">"}</span>
                                                <Link
                                                    state={{ type: 'ad_sub_category', id: breadcrumb_sub_category?.id }}
                                                    to={{ pathname: `/allads/${division}/${district}/${category}/${subCategory}` }}
                                                >
                                                    {breadcrumb_sub_category?.name}
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p className='active'> <span>{">"}</span>
                                                {getAdDetails ? capitalizeFirst(getAdDetails?.title) : ''}
                                            </p>
                                        </li>
                                    </ul>

                                    : ""}
                            </nav>

                            <div className="product_details">
                                <div className="row">

                                    <div className="title_container title_container_ad_details mb-2">
                                        <div>
                                            <h4 className="title_container">{getAdDetails ? capitalizeFirst(getAdDetails?.title) : ''} .
                                                (<span className='condition'>{getAdDetails?.condition}</span>)</h4>
                                            <strong>{languageCheck() === 'bn' ? 'পোস্ট করা হয়েছে' : 'Posted on'}:{" "}</strong>
                                            <span className="sub_title">{agoDateTimeFormat(getAdDetails?.created_at)} </span>,
                                            {" "}{getAdDetails?.expiry_date === null ? "" :
                                                <>
                                                    <strong >{languageCheck() === 'bn' ? 'শেষ তারিখ' : 'Deadline'}:{" "}</strong>
                                                    <Moment format="LL" >{getAdDetails?.expiry_date}</Moment></>}
                                            <span className="product_details_view red" href="#" style={{ fontSize: "20px" }}>
                                                <span className="line" style={{ marginRight: '3px' }}> </span>
                                                (<i className="fas fa-eye show" style={{ fontSize: "15px" }} ></i> {getAdDetails?.views}) </span>

                                            <p><strong>{languageCheck() === 'bn' ? 'ঠিকানা' : 'Address'}:{" "}</strong>
                                                {getAdDetails?.address}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="product_image">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="fade tab-pane active show d-flex justify-content-center" id="details-1"
                                                    aria-labelledby="details-1-tab" role="tabpanel">
                                                    <img alt="product details"
                                                        src={bigImageSet} className="optim base_image ad__details__image" />
                                                    <ul className="sticker">
                                                        <span><img className="public-market-tag img-fluid" src={pmImage} alt="" /></span>
                                                    </ul>
                                                </div>
                                                <div className="fade tab-pane" id="details-2"
                                                    aria-labelledby="details-2-tab" role="tabpanel">
                                                    {/* <img alt="product details"
                                                         src=""/> */}
                                                </div>
                                            </div>

                                            <ul className="bnav productthmb mb-5 ad_details_small_images" id="myTab" role="tablist">
                                              { getAdDetails?.image_1 &&  (<li className={activeClass === 'image_1' ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                    {getAdDetails?.image_1 &&
                                                        <img onClick={() => {
                                                            setBigImageSet(getAdDetails?.image_1);
                                                            setActiveClass('image_1')
                                                        }} src={getAdDetails?.image_1} alt="product details"
                                                            className={activeClass === 'image_1' ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                </li>)}
                                                { getAdDetails?.image_2 && ( <li className={activeClass === 'image_2' ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                    {getAdDetails?.image_2 &&
                                                        <img onClick={() => { setBigImageSet(getAdDetails?.image_2); setActiveClass('image_2') }} src={getAdDetails?.image_2} alt="product details"
                                                            className={activeClass === 'image_2' ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                </li>) }
                                                {getAdDetails?.image_3 && (<li className={activeClass === 'image_3' ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                    {getAdDetails?.image_3 &&
                                                        <img onClick={() => { setBigImageSet(getAdDetails?.image_3); setActiveClass('image_3') }} src={getAdDetails?.image_3} alt="product details"
                                                            className={activeClass === 'image_3' ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                </li>)}
                                             { getAdDetails?.image_4  &&  (<li className={activeClass === 'image_4' ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                    {getAdDetails?.image_4 &&
                                                        <img onClick={() => { setBigImageSet(getAdDetails?.image_4); setActiveClass('image_4') }} src={getAdDetails?.image_4} alt="product details"
                                                            className={activeClass === 'image_4' ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                </li> )}
                                                 { getAdDetails?.image_5 && (
                                                     <li className={activeClass === 'image_5' ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                     {getAdDetails?.image_5 &&
                                                         <img  onClick={() => { setBigImageSet(getAdDetails?.image_5); setActiveClass('image_5') }} src={getAdDetails?.image_5} alt="product details"
                                                             className={activeClass === 'image_5' ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                 </li>)
                                                }

                                               {
                                                  getAdDetails?.resize_image && 
                                                        getAdDetails.resize_image.map( obj => (
                                                            <li className={activeClass === `${obj.id}` ?'nav-item ad__details__image activeImg': 'nav-item ad__details__image'}>
                                                            {obj &&
                                                                <img  onClick={() => { setBigImageSet(obj.bigImage); setActiveClass(`${obj.id}`) }} src={obj.featuredImage} alt="product details"
                                                                    className={activeClass === `${obj.id}` ? 'getBaseUrl' : 'getBaseUrl'} />}
                                                        </li>))
                                                    
                                               }
                                            </ul>
                                        </div>
                                        <br />

                                        <h3 className="product_details_price mt-5 ad_product_details">
                                            <strong style={{ color: 'black' }}>Price</strong>: {getAdDetails?.price}৳
                                            {' '}
                                            <span style={{ fontSize: '14px' }}>{getAdDetails?.is_price_on_call === true ? ' (Negotiable)' : ''}</span>

                                        </h3>
                                        <div className="about_produt mt-2 ad_product_details">
                                            {unCommonKeys?.map(function (key, i) {
                                                if (key !== 'advertisement_dateline_check') {
                                                    return <div className="d-flex flex-row my-2" key={i}>
                                                        <div><strong style={{ fontWeight: "bold", color: 'black', marginRight: '10px' }}>{translate(capitalizeFirst(key))}:</strong>{translate(getAdDetails?.uncommon_fields_json[key]) ?? getAdDetails?.uncommon_fields_json[key]}</div></div>
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="product_details_sidebar">
                                            <div className="product_sidebar_owner">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {languageCheck() === 'bn' ? 'কিনতে যোগাযোগ করুন' : 'Contact to buy'}</h5>
                                                        <hr />
                                                        {getAdDetails?.contact_number === null ? "" :
                                                            <h5 className="card-title" onClick={phoneNumberHideShow} >
                                                                <i className="fa fa-phone-square" aria-hidden="true" style={{ padding: "3px" }}>
                                                                </i>
                                                                {!getNumberHideShow ? <>{getAdDetails?.contact_number.slice(0, 8)}...</> :
                                                                    getAdDetails?.contact_number}
                                                            </h5>}
                                                        <span><strong>
                                                            {languageCheck() === 'bn' ? "দাম" : 'Price'}</strong>: {getAdDetails?.price}৳</span>
                                                        {' '}
                                                        <span style={{ fontSize: '12px' }}>{getAdDetails?.is_price_on_call === true ? ' (Negotiable)' : ''}</span>
                                                    </div>
                                                </div>


                                                <div className="card mt-4">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-center">
                                                            <img
                                                                src={verifyImage}
                                                                height="30px"
                                                                width="100px"
                                                                alt=''
                                                            />
                                                        </div>
                                                        <div>
                                                            <p onClick={showVerifyCardBtn} className='mt-2'>{languageCheck() === 'bn' ?
                                                                <>
                                                                    {!showVerifyCard
                                                                        ? <span>পেমেন্ট গেটওয়ের শর্ত অনুযায়ী<img
                                                                            alt=''
                                                                            src={sslImage}
                                                                            height="18px"
                                                                            width="100px"
                                                                        /> {" "} বিক্রেতার সব {" "} {"... "}
                                                                            <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-right mr-1 ml-2"></i>
                                                                        </span> :
                                                                        <>
                                                                            <span>পেমেন্ট গেটওয়ের শর্ত অনুযায়ী<img
                                                                                alt=''
                                                                                src={sslImage}
                                                                                height="18px"
                                                                                width="100px"
                                                                            /> {" "}
                                                                                বিক্রেতার সব ধরনের তথ্য প্রদান, পূরণ করার জন্য
                                                                                নাম এবং ঠিকানা, ফেসবুক, ইমেল এবং মোবাইল সহ প্রোফাইল
                                                                                নম্বরগুলি ওটিপির মাধ্যমে publicmarket.com.bd দ্বারা যাচাই করা হয় এবং
                                                                                বিক্রেতার বিজ্ঞাপন বা পরিষেবা তথ্য প্রকাশ করা হয়
                                                                                তাকে{" "}
                                                                                <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-left mr-1 ml-2"></i>
                                                                            </span> </>}
                                                                </>
                                                                :
                                                                <>
                                                                    {!showVerifyCard
                                                                        ? <span>According to the conditions of<img
                                                                            alt=''
                                                                            src={sslImage}
                                                                            height="18px"
                                                                            width="100px"
                                                                        /> {" "}Payment {" "} {"... "}
                                                                            <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-right mr-1 ml-2"></i>
                                                                        </span> :
                                                                        <>
                                                                            <span>According to the conditions of<img
                                                                                alt=''
                                                                                src={sslImage}
                                                                                height="18px"
                                                                                width="110px"
                                                                            /> {" "}Payment Gateway,
                                                                            </span>
                                                                            <span>
                                                                                by providing all kinds of information of the seller, in order to fill the profile with
                                                                                name and address, Facebook, Email and mobile numbers are verified by
                                                                                publicmarket.com.bd through OTP and the advertisement or service information of the seller is disclosed to him.
                                                                                {" "}  <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-left mr-1 ml-2"></i></span> </>}
                                                                </>}</p>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div className="card mt-4">
                                                    <div className="card-body">
                                                        <h5 className="card-title"><i className="fa fa-shield" aria-hidden="true" style={{ padding: "3px" }}></i>
                                                            {languageCheck() === 'bn' ? "নিরাপত্তা টিপস" : 'Safety tips'}</h5>
                                                        <p onClick={showSafetyCardBtn} >{languageCheck() === 'bn' ?
                                                            <>{stringLimitShow("এমন কিছু এড়াতে আপনার সাধারণ জ্ঞান ব্যবহার করুন যা সত্য হতে খুব ভাল বলে মনে হয়, যেমন অবাস্তবভাবে কম দাম এবং দ্রুত অর্থের প্রতিশ্রুতি।", !showSafetyCard ? 25 : 200)}</> :
                                                            <>{stringLimitShow(
                                                                "Use your common sense to avoid anything that appears too good to be true,  such as unrealistically low prices and promises of quick money.", !showSafetyCard ? 25 : 200)}
                                                            </>} {" "}
                                                            {!showSafetyCard ?
                                                                <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-right mr-1 ml-2"></i> :
                                                                <i style={{ color: 'red', cursor: 'pointer' }} className="fas fa-arrow-left mr-1 ml-2"></i>}</p>

                                                        <h6 className='mt-2 mb-2'>
                                                            {languageCheck() === 'bn' ? "রিপোর্ট ছবি বা শিরোনাম:" : "Report image or title:"}</h6>
                                                        <ul style={{ listStyle: "disc" }} className="ml-3">
                                                            <li>{languageCheck() === 'bn' ? "যৌন বিষয়বস্তু" : "Sexual content"}</li>
                                                            <li>{languageCheck() === 'bn' ? "হিংসাত্মক বা ঘৃণ্য বিষয়বস্তু" : 'Violent  or repulsive content'}</li>
                                                            <li>{languageCheck() === 'bn' ? "ঘৃণ্য বা অপমানজনক সামগ্রী" : 'Hateful or abusive content'}</li>
                                                            <li>{languageCheck() === 'bn' ? "ক্ষতিকারক বা বিপজ্জনক কাজ" : 'Harmful or dangerous acts'}</li>
                                                            <li>{languageCheck() === 'bn' ? "স্প্যাম বা বিভ্রান্তিকর" : "Spam or misleading"}</li>
                                                        </ul>
                                                        <Link
                                                            to="/help/safe/"
                                                            className='mt-2'
                                                        >See all safety tips</Link>
                                                    </div>
                                                </div>
                                                {/* <div className="mt-4 product_sidebar_map">
                                                    <div className="product_details_title">
                                                        <h5 className="title">{languageCheck() === 'bn' ? "অবস্থান মানচিত্র :" : "Location Map :"}</h5>
                                                    </div>
                                                    <div className="gmap_canvas">
                                                        <iframe aria-hidden="false"
                                                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58438.99370019598!2d90.37660034520664!3d23.73178733112072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755b9aaa7fb50d1%3A0x7a3104cb73a7058c!2ssetcolbd!3m2!1d23.7317127!2d90.4116198!5e0!3m2!1sen!2sbd!4v1609999884448!5m2!1sen!2sbd"
                                                                style={{border: "0"}} width="600" height="450"></iframe>
                                                    </div>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <br />


            <section className="related-product_section">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="related_product mt-45">
                            <div className="section_title">
                                <h3 className="title">{languageCheck() === 'bn' ? "সম্পর্কিত বিজ্ঞাপন" : "Related Ads"}</h3>
                            </div>
                            <div className="row">
                                {getAllAdSliceData && getAllAdSliceData?.map((allData, i) => (
                                    <AdsCard
                                        key={i}
                                        allData={allData}
                                    />))}
                            </div>
                            <div className="related_product_btn">
                                <Link to="/allads" >{languageCheck() === 'bn' ? "সমস্ত বিজ্ঞাপন দেখুন" : "View all Ads"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AdDetailsPage;