import React, { useEffect, useState } from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAdCategoryAction } from '../../redux/action/userProfileAction/profileAdAction';
import { Link } from 'react-router-dom';

const SiteMap = () => { 
    const dispatch = useDispatch();



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
 
     
    // show all ads category 
    const {getAllAdsCategory} = useSelector(state => state.getAdCategoryReducer)
    useEffect(() => {
        dispatch(getAdCategoryAction())
        // videoSetLocalStorage()
    }, [dispatch]);

  

  return (   
    <>
     <Header /> 
        <section className="location_area pt-40 pb-120 "  >
            <div className="container pt-60">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title pb-15">
                            <h3 className="title"> 
                              {languageCheck() === 'bn' ? 'সাইট এ যা আছে/ সাইট মানচিত্র' : "Site Map"}
                            </h3>
                        </div>
                    </div>
                 </div>  
             </div> 
        </section>   
         
    <section className="blog_details_page pt-20 pb-120 pb-80 " id="overview">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row justify-content-between">
                    <div className="col-md-3 border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title">
                            {languageCheck() === 'bn' ? 'হোম' : "Home"}
                            </h5>
                            <ul className="link">
                                <li><Link  to ="/alladscategorys/"><i className="fal fa-list-ul"></i>&nbsp; {languageCheck() === 'bn' ? 'ক্যাটাগরি' : "Categories"}</Link></li>
                                <li><Link  to ="/allads"><i className="fal fa-sticky-note"></i>&nbsp; {languageCheck() === 'bn' ? 'জনপ্রিয় প্রকাশিত বিজ্ঞাপন' : "Popular Published Ads"}</Link></li>
                                <li><Link  to ="/allads"><i className="fab fa-hotjar"></i>&nbsp; {languageCheck() === 'bn' ? 'সম্প্রতি প্রকাশিত বিজ্ঞাপন' : "Recently Published Ads"}</Link></li>
                                <li><Link  to ="/alldivisions/"><i className="fal fa-history"></i>&nbsp; {languageCheck() === 'bn' ? 'অবস্থান অন্বেষণ করুন৷' : "Explore Locations"} </Link></li>
                                <li><Link  to ="/"><i className="fal fa-history"></i>&nbsp; {languageCheck() === 'bn' ? 'পাবলিক মার্কেট বিজ্ঞাপন মূল্য নির্ধারণ' : "Public Market Ads Pricing"} </Link></li>
                                <li><Link  to ="/alltvcs"><i className="fal fa-history"></i>&nbsp; {languageCheck() === 'bn' ? 'সর্বশেষ টিভিসি বাণিজ্যিক' : "Latest TVC Commercials"} </Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title">
                            {languageCheck() === 'bn' ? "অবস্থানসমূহ" : "Locations"}
                            </h5>
                            <ul className="link">
                                {divisionItem && divisionItem?.map((allData, i) => (
                                <div key={i}>
                                <li><Link to={"/divisions/alldistricts/"+allData?.id+"/"} >
                                     <i className="fal fa-map-marker-alt drop-image"></i>&nbsp; {allData?.name}</Link>
                                </li>
                                </div> 
                                ))}  
                            </ul>
                        </div>
                    </div>
 
                    <div className="col-md-3 border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title"> 
                                {languageCheck() === 'bn' ? "আমার অ্যাকাউন্ট" : "My Account"}
                            </h5>
                            <ul className="link">
                                <li><Link  to ="/dashboard/"><i className="fal fa-tachometer-alt-average"></i>&nbsp;   
                                {languageCheck() === 'bn' ? "ড্যাশবোর্ড" : "Dashboard"}
                                </Link></li> 
                                <li><Link  to ="/my/account/"><i className="fal fa-layer-group"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "আমার অ্যাকাউন্ট" : "My Account"}
                                </Link></li>
                                <li><Link  to ="/my/profile/setting/"><i className="fal fa-cog"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "প্রোফাইল সেটিংস" : "Profile Settings"}
                                 </Link></li> 
                                <li><Link  to ="/dashboard/my/professional/profile/"><i className="fal fa-star"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "প্রফেশনাল প্রোফাইল" : "Professional Profile"}
                                </Link></li>    
                                <li><Link  to ="/my/appliedjob/list/"><i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "চাকরির আবেদন " : "Applied Jobs"}
                                </Link></li> 
                                <li><Link  to ="/customer/login/"><i className="fal fa-sign-out"></i>&nbsp; 
                                {languageCheck() === 'bn' ? "সাইন ইন/ আউট" : "Sign In/ Out"}</Link></li>
                            </ul>
                        </div>
                    </div>
                 </div>









                  <div className="row justify-content-between">
                     <div className="col-lg-3 border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title"> 
                            {languageCheck() === 'bn' ? "ক্যাটাগরি" : "Categories"}</h5>
                            <ul className="link"> 
                            {getAllAdsCategory && getAllAdsCategory?.map((allData, i) => (
                            <div key={i}>
                            <li><Link state={{type: 'ad_category',id: allData?.id}} to={{pathname:'/allads/'}} > 
                             <img src={allData?.image} alt="" style={{width: "15px"}} />&nbsp;
                                 {allData?.name}</Link>
                            </li>
                            </div> 
                            ))} 
                            </ul>
                     </div>
                    </div>

  
                    <div className="col-lg-3 border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title">  
                            {languageCheck() === 'bn' ? "দ্রুত লিংক" : "Quick Links"}
                            </h5>
                            <ul className="link">
                                <li><Link to="/about/"><i className="fa fa-address-card"></i> &nbsp;  
                                {languageCheck() === 'bn' ? "আমাদের সম্পর্কে" : "About"}</Link></li>
                                <li><Link to="/sitemap/"><i className="fal fa-map-marker-alt drop-image"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "সাইট এ যা আছে/ সাইট মানচিত্র" : "Site Map"}</Link></li>
                                
                                <li><Link to="/missionvision"><i className="fas fa-bullseye footericon"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "উদ্দেশ্য এবং লক্ষ্য " : "Mission & Vision"}</Link></li>

                                <li><Link to="/ourstrategy/"><i className="fas fa-circle-notch footericon"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "আমাদের কৌশল" : "Our Strategy"}</Link></li> 

                                <li><Link to="/ourmanagement/"><i className="fal fa-user-friends"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "আমাদের ব্যবস্থাপনা পরিচালক" : "Our Management"}</Link></li>
  
                                <li><Link to="/sellingtips/"><i className="far fa-lightbulb-on"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "বিক্রয় পরামর্শ " : "Selling Tips"}</Link></li>
  
                                <li><Link to="/pricingtips/"><i className="fal fa-tags"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "মূল্য নির্ধারণ পরামর্শ " : "Pricing Tips"}</Link></li>

                                <li><Link to="/buysellquicktips/"><i className="fal fa-shipping-fast"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "দ্রুত ক্রয় ও বিক্রয় করুন" : "Buy & Sell Quickly"}</Link></li> 
 
                                <li><Link to="/bannerTvcadvertising/"><i className="fal fa-sign"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "Banner & TVC Advertising" : "Banner & TVC Advertising"}</Link></li>

                                <li><Link to="/promoteads/"><i className="fal fa-ad"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "আপনার বিজ্ঞাপন প্রচার করুন" : "Promote Your Ad"}</Link></li>

                                <li><Link to="/companylegalinfo/"> 
                                <i className="fa fa-id-badge"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "পাবলিক মার্কেট এর সাথে যোগাযোগ করুন" : "Company Legal Info"}</Link></li>

 
                                <li><Link to="/postingallowance/"> 
                                <i className="fa fa-flag"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "পোস্টিং এর অনুমতি" : "Posting Allowance "}</Link></li> 

                                <li><Link to="/postingrules/"><i className="fal fa-mail-bulk"></i>
                                <i className="fa fa-scale"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "পোস্টিং এর নিয়মনীতি" : "Posting Rules"}</Link></li>

                                
                                <li><Link to="/stuffingsolutions/">   
                                <i className="fal fa-lightbulb-on footericon"></i>&nbsp;
                                {languageCheck() === 'bn' ? "স্টাফিং সলিউশন" : "Stuffing Solutions"}</Link></li> 
                                 
                                <li><Link to="/publicmarketcontactinfo/"><i className="fal fa-address-book footericon"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "পাবলিক মার্কেট এর সাথে যোগাযোগ করুন" : "Public Market Contact Info"}</Link></li>
 
                                
                                <li><Link to="/help/faq/"><i className="fal fa-question-square"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "সচরাচর জিজ্ঞাসিত প্রশ্ন" : "FAQ"}</Link></li> 
                                <li><Link to="/help/safe/"><i className="fal fa-exclamation-triangle"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "কিভাবে নিরাপদ থাকবেন" : "How To Stay Safe"}</Link></li> 
                                <li><Link to="/help/termsconditions/"><i className="fal fa-file-contract"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "শর্তাবলী" : "Terms & Conditions"}</Link></li>
                                <li><Link to="/help/privacypolicy/"><i className="fal fa-user-secret"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "গোপনীয়তা নীতি" : "Privacy Policy"}</Link></li>   
                                <li><Link to="/help/refundpolicy/"><i className="fas fa-undo"></i>&nbsp;  
                                {languageCheck() === 'bn' ? "প্রত্যর্পণ নীতি" : "Refund Policy"}</Link></li>  
                                
                            </ul>
                        </div>
                    </div>

 
                    <div className="col-lg-3  border mt-30 mb-30 site_map">
                        <div className="footer_link">
                            <h5 className="site_map_title"> 
                            {languageCheck() === 'bn' ? "বিজ্ঞাপন পোস্ট করুন" : "Post Ad "}
                            </h5>
                            <ul className="link"> 
                            {getAllAdsCategory && getAllAdsCategory?.map((allData, i) => (
                            <div key={i}>
                            <li><Link state={{type: 'ad_category',id: allData?.id}} to={{pathname:'/allads/'}} > 
                             <img src={allData?.image} alt="" style={{width: "15px"}} />&nbsp;
                                 {allData?.name}</Link>
                            </li>
                            </div> 
                            ))} 
                            </ul>
                        </div>
                    </div> 
                </div>
                      









                    
                </div>
            </div>
            </div>
        </section>

        <Footer />     
    </>
  );
};

export default SiteMap;
