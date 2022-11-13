import React from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import MD from './../../asset/frontend/assets/images/StaticImage/Md-Ahsan-Habib-Hirak-Managing-Director.png' 
import CHAIRMAN from './../../asset/frontend/assets/images/StaticImage/Md-Sirajul-Haque-Chairman.png' 
import DIRECTOR from './../../asset/frontend/assets/images/StaticImage/Mohammad-Kamruzzaman-Director.png' 
import { languageCheck } from '../../helpers/Helpers';




const OurManagement = () => {
  return (  
    <>
        <Header /> 
         
            <section className="team-area team-sec pt-120 mt-5"  >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section_title text-center mb-5"  >
                                <h3 className="title" >{languageCheck() === 'bn' ?  
                                "আমাদের ব্যবস্থাপনা পরিচালক" :  
                                "Our Management"}</h3> 
                            </div>
                        </div>
                    </div>
                    <div className="row team-items">
                                    <div className="col-md-4 single-item">
                            <div className="item">
                                <div className="thumb">
                                    <img className="img-fluid" 
                                    src={MD}
                                     alt="Thumb" style={{width:"777px",height:"424px"}} />
                                    <div className="overlay">
                                        <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                        <p style={{textAlign:"center"}}> 
                                            {languageCheck() === 'bn' ? "প্রতিষ্ঠানটির ম্যানেজিং ডিরেক্টর" : "He is Managing Director of the company"}
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                            <span className="message">
                                                <a href="#"><i className="fas fa-envelope-open"></i></a>
                                            </span>
                                    <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                    <span> 
                                    {languageCheck() === 'bn' ? "ম্যানেজিং ডিরেক্টর" : "Managing Director"}
                                    </span>
                                </div>
                            </div>
                        </div>
                                    <div className="col-md-4 single-item">
                            <div className="item">
                                <div className="thumb">
                                    <img className="img-fluid" 
                                    src={CHAIRMAN} 
                                    alt="Thumb" style={{width:"777px",height:"424px"}} />
                                    <div className="overlay">
                                        <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                        <p style={{textAlign:"center"}}> 
                                            {languageCheck() === 'bn' ? "প্রতিষ্ঠানটির চেয়ারম্যান" : "He is Chairman of the company"}
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                            <span className="message">
                                                <a href="#"><i className="fas fa-envelope-open"></i></a>
                                            </span>
                                    <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                    <span>{languageCheck() === 'bn' ? "চেয়ারম্যান" : "Chairman"}</span>
                                </div>
                            </div>
                        </div>
                                    <div className="col-md-4 single-item">
                            <div className="item">
                                <div className="thumb">
                                    <img className="img-fluid"
                                     src={DIRECTOR} 
                                     alt="Thumb" style={{width:"777px",height:"424px"}} />
                                    <div className="overlay">
                                        <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                        <p style={{textAlign:"center"}}> 
                                            {languageCheck() === 'bn' ? "প্রতিষ্ঠানটির ডিরেক্টর" : "He is Director of the company"}
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="vimeo">
                                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                            <span className="message">
                                                <a href="#"><i className="fas fa-envelope-open"></i></a>
                                            </span>
                                    <h4>{languageCheck() === 'bn' ? "পাবলিক মার্কেট" : "Public Market"}</h4>
                                    <span>{languageCheck() === 'bn' ? "ডিরেক্টর" : "Director"}</span>
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

export default OurManagement;
