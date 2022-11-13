import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import { Link, useNavigate, useParams } from 'react-router-dom';

import profile from '../../asset/frontend/assets/images/default.png'

import sslBanner from "../../asset/frontend/assets/images/ssl-banner2.jpg"
import { getPaymentAction, postPaymentAction } from "../../redux/action/userProfileAction/paymentAction/paymentAction";
import { languageCheck } from "../../helpers/Helpers";

const Payment = () => {
   
    const paymentId = useParams();   
    const dispatch = useDispatch(); 
       
    let navigate = useNavigate();
    const { getPayments } = useSelector(state => state.getPaymentsReducer);     
    const { loading } = useSelector(state => state.postPaymentsReducer);     
    useEffect(() => {  
      dispatch(getPaymentAction(paymentId?.id))
    }, [paymentId?.id])
    
     const payment = () => { 
      const formdata = new FormData();  
      formdata.append("id", getPayments?.id);  
      dispatch(postPaymentAction(formdata,navigate))
     }
   


     const videoRef = useRef(); 
     useEffect(() => {    
       videoRef.current?.load();
     }, [getPayments?.tvc?.video]);
     

      
    return (
        <> 
          <Header />
          <section className="dashboard_page pt-70 pb-120 ">
                 <div className="container">
                   <div className="row mt-80 mb-5">
                        <div className="col-md-10  m-auto shadow-none p-3  bg-white rounded">
                          <div className="row">  
                             <div className="col-md-7"> 
                             <div className="paymemt__title"> 
                                <span>  {languageCheck() === 'bn' ? "আপনার প্রয়োগকৃত মূল্য" : "Your applied pricing" }</span>   
                                 
                                {/* {languageCheck() === 'bn' ? 
                                <>
                                <p className=''>{getPayments?.order_type} Promotions প্রয়োগ করে 20 গুণ বেশি প্রতিক্রিয়া পান ৷ </p>  
                                <p className='mt-2 mb-2'>এক বা একাধিক বিকল্প নির্বাচন করুন (Optional)</p>
                                </> :
                                <>
                                <p className=''>Get up to 20 times more responses by applying {getPayments?.order_type} Promotions.</p>  
                                <p className='mt-2 mb-2'>Select one or more options (Optional).</p> 
                                </>} */}
                             </div>  
                               
  

                              <div className="row shadow-none  pt-3 pb-3 mb-5 mt-2 bg-light rounded" style={{padding:"0",margin:'0'}}>
                                <div className="col-6  pt-1 pb-1">
                                 <div className="card__header"> 
                                 </div> 
                                <div className="payment__text"> 
                                 <p className='payment__text__more'
                                 style={{fontWeight:"800" }} >{getPayments?.pricing_title}</p>  
                                 <p>{getPayments?.pricing_in_words_desc}</p> 
                                </div>
                               </div>
                             <div className="col-6 text-right  pt-1 pb-1">  
                               {languageCheck() === 'bn' ?
                               <><span> টাকা থেকে {" "}{getPayments?.pricing_to_pay / 1.00}</span> </>  : 
                               <><span>From Tk {" "}{getPayments?.pricing_to_pay / 1.00}</span></>  }   
                             </div>
                             </div>  

                             </div>

 

                             <div className="col-md-5">

                               <div className="ad_review"> 
                                 <div className="check_icon">
                                 <i className="fa fa fa-check"></i>
                                 </div>

                                 <p> 
                                 {languageCheck() === 'bn' ? 
                                 <>আপনার {getPayments?.order_type} পর্যালোচনা করা হচ্ছে!</> : 
                                   <>Your {getPayments?.order_type}  is under review!</>}</p>

                                 
                                 {languageCheck() === 'bn' ? 
                                 <> 
                                  <span className='mt-2'> আপনার {getPayments?.order_type} প্রকাশের জন্য অর্থপ্রদানের প্রয়োজন হলে আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। </span>
                                 </> : 
                                <> 
                                <span className='mt-2'> We will contact you shortly if payment is required to publish your {getPayments?.order_type}.</span>
                                </> }  
                                  
                               </div>
   
     
                             {getPayments ? <> 
                               {getPayments?.tvc === null ? "":
                                <div className="ad__card_title d-flex shadow-sm p-2  mt-3 bg-white rounded">
                               <div className="card__image_payment">
                                <video width="150px" height="80px" className='mr-2' ref={videoRef} controls >
                                  <source  src={getPayments?.tvc?.video} type="video/mp4"  />
                                </video>
                               </div>
                               <div className="card__title_payment mt-1">
                                <h5>{getPayments?.tvc?.title}</h5>
                                <p>{getPayments?.tvc?.company_name}</p>
                                <p style={{fontSize:'14px'}}>{getPayments?.district},{getPayments?.address}</p> 
                               </div>
                             </div>}

                             {getPayments?.banner === null ? "" : <div className="ad__card_title d-flex shadow-sm p-2  mt-3 bg-white rounded">
                               <div className="card__image_payment">
                                  {getPayments?.banner?.image ?<img height="65px" className='mr-4'
                                  width="90px" src={getPayments?.banner?.image} alt="profile" /> : 
                                  <img height="65px" className='mr-4'
                                  width="90px"  src={profile} alt="profile" />}
                               </div>
                               <div className="card__title_payment mt-1">
                                <h5>{getPayments?.banner?.title}</h5>
                                <p>{getPayments?.banner?.company_name}</p>
                                <p style={{fontSize:'14px'}}>{getPayments?.district},{getPayments?.address}</p> 
                               </div>
                             </div>}

                             {getPayments?.job === null ? "" : <div className="ad__card_title d-flex shadow-sm p-2  mt-3 bg-white rounded">
                               <div className="card__image_payment">
                                  {getPayments?.job?.company_logo ?<img height="65px" className='mr-4'
                                  width="90px" src={getPayments?.job?.company_logo} alt="profile" /> : 
                                  <img height="65px" className='mr-4'
                                  width="90px"  src={profile} alt="profile" />}
                               </div>
                               <div className="card__title_payment mt-1">
                                <h5>{getPayments?.job?.job_title}</h5>
                                <p>{getPayments?.job?.company_name}</p>
                                <p style={{fontSize:'14px'}}>{getPayments?.district},{getPayments?.address}</p> 
                               </div>
                             </div>}

                             {getPayments?.ad === null ? "" : <div className="ad__card_title d-flex shadow-sm p-2  mt-3 bg-white rounded">
                               <div className="card__image_payment">
                               {
                                  
                                  getPayments?.ad?.image_1 ? <img height="65px" className='mr-4'
                                  width="90px" src={getPayments?.ad?.image_1} alt="profile" /> :  

                                  getPayments.ad.resize_image ? <img height="65px" className='mr-4'
                                  width="90xpx" src={getPayments?.ad?.resize_image[0].featuredImage} alt="profile" /> : 
                                  <img height="65px" className='mr-4'
                                  width="90px"  src={profile} alt="profile" />
                                  
                                  
                                  }
                               </div>
                               <div className="card__title_payment mt-1">
                                <h5>{getPayments?.ad?.title}</h5> 
                                <p style={{fontSize:'14px'}}>{getPayments?.district},{getPayments?.ad?.address}</p> 
                                <span>Tk {getPayments?.ad?.price / 1.00}</span> 
                               </div>
                             </div>}
                             </>:''}
 

                              

                             <div className="payment__summary shadow-none p-3 mt-3 bg-light rounded">
                             <p> 
                             {languageCheck() === 'bn' ? "পারিশ্রমিক সারসংক্ষেপ" : "Payment summary" }
                             </p>
                              <div className="urgent__payment d-flex">
                                <span>{getPayments?.pricing_title}</span>
                                <span>{languageCheck() === 'bn' ? "টাকা" : "Tk" }{" "}{getPayments?.total / 1.00}</span>
                              </div> 
                              <hr /> 
                              <div className="total__payment d-flex">
                                <p>{languageCheck() === 'bn' ? "সর্বমোট পরিমাণ" : "Total amount" }</p>
                                <p>{languageCheck() === 'bn' ? "টাকা" : "Tk" }{" "} {getPayments?.total / 1.00}</p>
                              </div>
                             </div> 

                             <div className="select__payment__method"> 
                               <h5 className='mt-3'> 
                               {languageCheck() === 'bn' ? "একটি পেমেন্ট পদ্ধতি নির্বাচন করুন" : "Select a payment method" }
                               </h5>

                              <div className="payment__select__radio mt-2 d-flex">
                                <input type="radio" checked={true} className='mr-2 mt-1'/>
                                 <div className="payment__online">
                                  <p>{getPayments?.payment_method}</p>
                                  {/* <img height="100px" width="90%" src={sslBanner} alt="sslBanner" /> */}
                                </div> 
                              </div> 

                             </div>
                          

                              {/* <button onClick={payment} className='main-btn mt-3 mb-5 w-100'>Continue</button> */}
                                  

                              <button onClick={payment} disabled={loading} type="button" className={loading?"loading__button mt-20 disabled w-100":"main-btn mt-20 w-100"}> 
                                {loading ?   
                                <><div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                                </div></>
                                :languageCheck() === 'bn' ? "চালিয়ে যান" : "Continue" }
                              </button>
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

export default Payment;