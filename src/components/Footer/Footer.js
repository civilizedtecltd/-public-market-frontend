import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import facebook from "../../asset/frontend/assets/images/social_media_icon/facebook.png"
import instagram from "../../asset/frontend/assets/images/social_media_icon/instagram.png"
import linkedin from "../../asset/frontend/assets/images/social_media_icon/linkedin.png"
import pinterest from "../../asset/frontend/assets/images/social_media_icon/pinterest.png"
import twiter from "../../asset/frontend/assets/images/social_media_icon/twiter.png"
import whatsapp from "../../asset/frontend/assets/images/social_media_icon/whatsapp.png"
import youtube from "../../asset/frontend/assets/images/social_media_icon/youtube.png" 
import sslBanner from "../../asset/frontend/assets/images/ssl-banner2.jpg"
import appStore from "../../asset/frontend/assets/images/app-store1.png"
import appStore2 from "../../asset/frontend/assets/images/app-store2.png"
import basis from "../../asset/frontend/assets/images/StaticImage/BASIS.png"
import {allLocalStorageRemove, languageCheck} from "../../helpers/Helpers";
import moment from 'moment'

  
// import eCabLogo from '';

const Footer = () => {

    const [rotate,setRotate] = useState(false)  
    const sideBoxManage = (e) => {  
       setRotate(!rotate);  
    } 
    const token = localStorage.getItem('token');
    useEffect(() => {
        allLocalStorageRemove()
    }, [])

    return (
        <> 
            {/* <div   className={( "container text-center slide-left-box", rotate ? "fixedbuttom" : "d-none")}    onClick={e => sideBoxManage(e)}  id="side-box">
                <nav className="footerbutton">
                    <ul> 
                        <li><Link  to={token ? '/dashboard/post-ad/' : '/customer/login/'} 
                        style={{backgroundColor: "#FEC212",color:"white",border: "3px solid white"}} 
                        className="nav__logo" >Post Your Ad</Link></li>
                         <li><Link  to={token ? '/allads/' : '/customer/login/'} 
                        style={{backgroundColor: "red",color:"white",border: "3px solid white"}} 
                        className="nav__logo" >All Ads</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="right-side-box right-side-box-left" id="side-box-show" onClick={sideBoxManage}>
                <div className={( "box", rotate ? "rotate-left " : "rotate-right")}>
                    <div className="mouse_scroll">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                            <span className="m_scroll_arrows unu"></span>
                            <span className="m_scroll_arrows doi"></span>
                            <span className="m_scroll_arrows trei"></span>
                        </div>
                    </div>
                </div>  
            </div>   */}


                <footer className="footer_area mt-50"  >
                    <div className="footer_widget pt-10 pb-120"> 
                    <div className="footer__color pt-2 pb-4"
                     style={{backgroundColor:"#FEC212"}}> 
                    <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer_link mt-45">
                        <h5 className="footer_title">{languageCheck() === 'bn' ? 'পাবলিক মার্কেট' : 'PublicMarket'}</h5>
                        <ul className="link"> 
                        <li><Link to="/about/"><i className="fas fa-book footericon"></i>{languageCheck() === 'bn' ? ' আমাদের সম্পর্কে' : 'About'}</Link></li>
                        <li><Link to="/sitemap/"><i className="fas fa-map-marker-alt footericon"></i>{languageCheck() === 'bn' ? 'সাইট এ যা আছে / সাইট মানচিত্র' : 'Site Map'}</Link></li>
                        <li><Link to="/missionvision/"><i className="fas fa-circle-notch footericon"></i>{languageCheck() === 'bn' ? 'উদ্দেশ্য এবং লক্ষ্য' : 'Mission & Vision'}</Link></li>
                        <li><Link to="/ourstrategy/"><i className="fas fa-bullseye footericon"></i>{languageCheck() === 'bn' ? 'আমাদের কৌশল' : 'Our Strategy'}</Link></li>
                        <li><Link to="/ourmanagement/"><i className="fas fa-users footericon"></i>{languageCheck() === 'bn' ? 'আমাদের ব্যবস্থাপনা পরিচালক' : 'Our Management'}</Link></li>
                        </ul>
                        </div>  
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer_link mt-45">
                        <h5 className="footer_title">{languageCheck() === 'bn' ? 'কিভাবে দ্রুত বিক্রয় করবেন' : 'How To Sell Fast'}</h5>
                        <ul className="link">
                        <li><Link to="/sellingtips/"><i className="far fa-lightbulb-on footericon"></i>{languageCheck() === 'bn' ? 'বিক্রয় পরামর্শ ' : 'Selling Tip'}</Link></li>
                        <li><Link to="/pricingtips/"><i className="far fa-fighter-jet footericon"></i>{languageCheck() === 'bn' ? 'মূল্য নির্ধারণ পরামর্শ' : 'Pricing Tips'}</Link></li>
                        <li><Link to="/buysellquicktips/"><i className="far fa-lightbulb-on footericon"></i>{languageCheck() === 'bn' ? 'দ্রুত ক্রয় ও বিক্রয় করুন' : 'Buy & Sell Quickly'}</Link></li>
                        <li><Link to="/bannerTvcadvertising/"><i className="fas fa-eye-evil footericon"></i>{languageCheck() === 'bn' ? 'ব্যানার ও টিভিসি বিজ্ঞাপন' : 'Banner & TVC Advertising'}</Link></li>
                        <li><Link to="/promoteads/"><i className="fas fa-route-interstate footericon"></i>{languageCheck() === 'bn' ? 'আপনার বিজ্ঞাপন প্রচার করুন' : 'Promote Your Ad'}</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 justify-content-between">
                        <div className="footer_link mt-45">
                        <h5 className="footer_title">{languageCheck() === 'bn' ? 'তথ্যাবলি' : 'Information'}</h5>
                        <ul className="link">
                        <li><Link to="/companylegalInfo/"><i className="fal fa-address-book footericon"></i>{languageCheck() === 'bn' ? 'কোম্পানির আইনি তথ্য' : 'Company Legal Info'}</Link></li>
                        <li><Link to="/postingallowance/"><i className="fas fa-ad footericon"></i>{languageCheck() === 'bn' ? 'পোস্টিং এর অনুমতি' : 'Posting Allowance'}</Link></li>
                        <li><Link to="/postingrules/"><i className="fas fa-sticky-note footericon"></i>{languageCheck() === 'bn' ? 'পোস্টিং এর নিয়মনীতি' : 'Posting Rules'}</Link></li>
                        <li><Link to="/stuffingsolutions/"><i className="fal fa-lightbulb-on footericon"></i>{languageCheck() === 'bn' ? 'কর্মসংস্থান' : 'Stuffing Solutions'}</Link></li>
                        <li><Link to="/publicmarketcontactinfo"><i className="far fa-certificate footericon"></i>{languageCheck() === 'bn' ? 'পাবলিক মার্কেট এর সাথে যোগাযোগ করুন' : 'PublicMarket Contact Info'}</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer_link mt-45">
                        <h5 className="footer_title">{languageCheck() === 'bn' ? 'সাহায্য এবং সহায়তা' : 'Help & Supports'}</h5>
                        <ul className="link">
                        <li><Link to="/help/faq/"><i className="fa fa-question-circle footericon"></i>{languageCheck() === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্ন' : 'FAQ'}</Link></li>
                        <li><Link to="/help/safe/"><i className="fal fa-user-shield footericon"></i>{languageCheck() === 'bn' ? 'কিভাবে নিরাপদ থাকবেন' : 'How To Stay Safe'}</Link></li>
                        <li><Link to="/help/termsconditions/"><i className="fal fa-balance-scale footericon"></i>{languageCheck() === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions'}</Link></li>
                        <li><Link to="/help/privacypolicy/"><i className="fas fa-user-secret footericon"></i>{languageCheck() === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</Link></li>
                        <li><Link to="/help/refundpolicy/"><i className="fas fa-undo footericon"></i>{languageCheck() === 'bn' ? 'রিফান্ড নীতি' : 'Refund Policy'}</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                   </div>

                    <div className="footer__color2 pb-80" style={{backgroundColor:"#FEC212",marginBottom:'-2rem'}}>
                    <div className="container"> 
                    <br/> 
                    <div className="row">
                    <div className="col-md-5">
                        <h5 className="footer_title2"  >{languageCheck() === 'bn' ? 'সামাজিক যোগাযোগ মাধ্যম' : 'Social Media'}</h5>
                        <br/>
                        <a href="https://www.facebook.com/PublicMarketCombd-105622521987114" target="_blank"><img className="social_media mr-2" src={facebook} alt="social_media" /></a>
                        <a href="https://www.instagram.com/publicmarketbd" target="_blank"><img className="social_media mr-2" src={instagram} alt="social_media" /></a>
                        <a href="https://www.linkedin.com/company/public-market" target="_blank"><img className="social_media mr-2" src={linkedin} alt="social_media" /></a>
                        <a href="https://www.pinterest.com/publicmarketbd" target="_blank"><img className="social_media mr-2" src={pinterest} alt="social_media" /></a>
                        <a href="https://www.pinterest.com/publicmarketbd" target="_blank"><img className="social_media mr-2" src={twiter} alt="social_media" /></a>
                        <a href="" target="_blank"><img className="social_media mr-2" src={whatsapp} alt="social_media mr-2" /></a>
                        <a href="https://www.youtube.com/channel/UCOyI1_de1Xci8UE3EY1U3GA" target="_blank"><img className="social_media mr-2" src={youtube} alt="social_media" /></a>
                        <div className="footer-app-store mt-2">
                        <div className="">
                                <h4 className="my-3"> {languageCheck() === 'bn' ? 'মোবাইল অ্যাপ ডাউনলোড করুন' : 'Download Mobile App'}</h4>
                        </div>
                        <div className="d-flex ">
                            <a className="mr-2" href="#"><img src={appStore} /></a>
                            <a className="" target="_blank" href="https://play.google.com/store/apps/details?id=com.BD.publicmarket.app"><img src={appStore2} /></a>
                        </div>

                    </div>
                    </div> 

                    <div className="payment col-md-5">
                        <h5 className="footer_title2"> {languageCheck() === 'bn' ? 'আমরা গ্রহণ করি' : 'We Accept'}</h5>
                        <br/>
                        <ul>
                        <li className="mt-10" style={{marginLeft: '2px'}}>
                        <a className="pay-img" href="#"><img src={sslBanner} alt="payment" /></a>
                        </li>
                        <li>
                        <img src="" alt="" />
                        </li>
                        </ul>
                    </div>

 
                    {/* logo area */}
                    <div className="col-md-2">
                    <h5 className="footer_title2"> {languageCheck() === 'bn' ? 'সদস্য' : "Member Of"}</h5>
                    <div className='justify-content-center d-flex align-items-center flex-column' 
                    style={{marginTop:'14px'}}>
                       <img 
                        src="data:image/png;base64,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"
                        alt=""
                        />
                        <img style={{    height: '124px',
                            paddingLeft: '21px',
                        }} src={basis} />
                    </div>
                        
                    </div>

                    </div> 
                    </div>
                    
                    </div>

                    <br/> 

 
                    <div className="footer_copyright pt-20 pb-20">
                       <div className="container-fluid">
                         <div className="container">
                           <div className="d-flex justify-content-between footer__bottom__copy_right">
                                <div className="footer__bottom">
                                    <p className="copy-right-left">All Rights Reserved. Copy Right {(new Date().getFullYear())} © PM Expert Limited</p>
                                </div>
                                <div className="footer__bottom">
                                    <a  className="copy-right-right" href="http://setcolbd.com/"><span style={{fontSize: '12px'}}>Developed By</span> <i>SETCOLBD</i></a>
                                </div>
                               </div>
                             </div>
                           </div>
                        </div>


                    </div>
                </footer> 
        </>
    );
};

export default Footer;