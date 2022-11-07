import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';

const PublicMarketContactInfo = () => {

    return (
        <>
         <Header />
        <section className="contact_page pt-150 pb-120" id="contact">
            <div className="container">
            <h2 className="text-center mb-40 banner-ad-title"> 
            <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? 
                    "পাবলিক মার্কেট এ যোগাযোগ করুন" :
                    "Public Market Contact Info"}</h4>
            </h2>
                <div className="contact_map">
                    <div className="gmap_canvas">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d912.7674349124306!2d90.4226253!3d23.7805308!3m2!1i1024!2i768!4f13.1!2m1!1sTA-134%20(2nd%20Floor)%2C%20Boishakhi%20Shoroni%2C%20Middle%20Badda%2C%20Gulshan-01%2C%20Dhaka-1212!5e0!3m2!1sen!2sbd!4v1650432315149!5m2!1sen!2sbd" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
                </div> 
                <div className="row">
                    <div className="col-lg-8">
                        <div className="contact_form mt-30">
                            <div className="contact_title">
                                <h5 className="title"> 
                                {languageCheck() === 'bn' ? "আমাদের আপনার চিন্তা পাঠান":"Send Us Your Thoughts"}
                                 </h5>
                            </div>
                            <form  >
                              
                                <div className="contact_form_wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single_form">
                                                <input type="text" name="name" id="name" placeholder="Name"/>
                                                <i className="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single_form">
                                                <input type="email" name="email" id="email" placeholder="Email"/>
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_form">
                                                <input type="text" name="subject"   placeholder="Subject"/>
                                                <i className="far fa-i-cursor"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_form">
                                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                                <i className="fal fa-edit"></i>
                                            </div>
                                        </div>
                                        <p className="form-message"></p>
                                        <div className="col-md-12">
                                            <div className="single_form">
                                                <button type="button" disabled className="main-btn">Sand Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact_info">
                            <div className="contact_title mt-30">
                                <h5 className="title"> 
                                {languageCheck() === 'bn' ? "যোগাযোগ করুন":"Get In Touch"}</h5>
                            </div>
                            <p>  
                            {languageCheck() === 'bn' ? 
                            "আপনার যেকোনো প্রয়োজনের জন্য আমাদের সাথে যোগাযোগ করুন।":
                            "Contact Us For Your Any Need."}
                            </p>
                            <div className="single_info d-flex">
                                <div className="info_icon d-flex align-items-center">
                                    <i className="far fa-map-marker-alt"></i>
                                </div>
                                <div className="info_content media-body">
                                    <p> 
                                    {languageCheck() === 'bn' ? 
                                    <>
                                      <strong>নিবন্ধিত ঠিকানা:</strong> 
                                      মদিনা টাওয়ার (৪র্থ তলা), বাড়ি নং- ৪৬৪/১, পশ্চিম রামপুরা, ডিআইটি রোড ঢাকা ১২১৯। <br />
                                        <br />
                                        <strong>কর্পোরেট ঠিকানা: </strong>
                                        TA-134(2য় তলা), বৈশাখী শোরনী, মধ্য বাড্ডা গুলশান-01, ঢাকা-1212। 
                                    </>:
                                   <> 
                                     <strong>Registered Address:</strong> 
                                        Madina Tower (4th Floor), House No.- 464/1, West Rampura, DIT Road Dhaka 1219. <br />
                                        <br />
                                        <strong>Corporate Address: </strong>
                                        TA-134(2nd Floor), Boishakhi Shoroni, Middle Badda Gulshan-01, Dhaka-1212. 
                                   </>}
                                         
                                    </p>
                                </div>
                            </div>
                            <div className="single_info d-flex">
                                <div className="info_icon d-flex align-items-center">
                                    <i className="fal fa-phone"></i>
                                </div>
                                <div className="info_content media-body">
                                    <p>+880-1765-571919</p>
                                    <p>+88-01234567891</p>
                                </div>
                            </div>
                            <div className="single_info d-flex">
                                <div className="info_icon d-flex align-items-center">
                                    <i className="fal fa-envelope-open-text"></i>
                                </div>
                                <div className="info_content media-body">
                                    <p>info@publicmarket.com.bd</p>
                                    <p>contact@publicmarket.com.bd</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>

         <Footer />
            
        </>
    );
};

export default PublicMarketContactInfo;