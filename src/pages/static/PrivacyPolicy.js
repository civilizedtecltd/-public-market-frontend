import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';

const PrivacyPolicy = () => {
  
    return (
        <>
        <Header />
        <section className="location_area pt-40 pb-120 mb-5" id="privacypolicy">
                <div className="container pt-60">
                      
                    <div className="row"> 
                     <div className="col-lg-12">
                      <div className="section_title">
                      <h3 className="title">
                        {languageCheck() === 'bn' ?  
                        "গোপনীয়তা নীতি" :  
                        "Privacy Policy"} 
                        </h3>
                      </div>
                    </div>
                  </div>
                 
                    <div className="mt-40">
                        <div className="post_form">
                            <div className="post_title">
                                <h5 className="title">
                                {languageCheck() === 'bn' ?  
                                    "সঞ্চয়" :  
                                    "Accumulation"}
                                </h5>
                            </div>
                            <div className="row justify-content-center">
                             <p>
                             {languageCheck() === 'bn' ?  
                                "publicmarket.com.bd-এ পোস্ট করা ডেটা খোলাখুলিভাবে অ্যাক্সেসযোগ্য। আপনি আমাদের পৃথক ডেটা সরবরাহ করার সুযোগে, আপনি আমাদের সার্ভারগুলিতে সেই ডেটার বিনিময় এবং ক্ষমতার জন্য সম্মতি দিচ্ছেন। আমরা সহকারী পৃথক ডেটা সংগ্রহ করি এবং সংরক্ষণ করি: ইমেল ঠিকানা, যোগাযোগের ডেটা এবং (প্রশাসনের উপর নির্ভরশীল) এখানে এবং সেখানে বাজেটের ডেটা। পিসি সাইন-অন তথ্য, অনলাইন ভিজিটের পরিমাপ, publicmarket.com.bd-এ এবং থেকে চলাচল এবং প্রচারের প্রতিক্রিয়া। ক্লায়েন্টদের আইপি ঠিকানা এবং স্ট্যান্ডার্ড ওয়েব লগ ডেটা সহ অন্যান্য ডেটা। " :  
                                "Data posted on publicmarket.com.bd is openly accessible. On the off chance that you furnish us with individual data, you are consenting to the exchange and capacity of that data on our servers. We gather and store the accompanying individual data: Email address, contact data, and (contingent upon the administration utilized) here and there budgetary data. PC sign-on information, measurements on online visits, movement to and from publicmarket.com.bd and reaction to promotions. Other data, including clients' IP address and standard web log data. "}
                             </p>
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

export default PrivacyPolicy;