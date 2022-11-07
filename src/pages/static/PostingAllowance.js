import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';

const PostingAllowance = () => {

    return (
        <>
         <Header />
         <section className="blog_details_page pt-40 pb-80 " id="ProfessionalHelp">
            <div className="container pt-20 section_title">
                 
                <h3 className="text-center mt-40 banner-ad-title">  
                {languageCheck() === 'bn' ? "পোস্টিং এর অনুমতি" :"Posting Allowance"}
                </h3>


                <div className="banner-ads-wrapper mt-10 mb-40 pt-30 pb-30">
  
                    <div className="row mt-20 banner-product-wrapper ad-products-box ">
                        <div className="banner-product-details mb-2">
                            <p className="pt-2 pb-2">
                             {languageCheck() === 'bn' ? 
                             "সীমাহীন বিজ্ঞাপন পোস্ট অনুমোদিত তবে সর্বশেষ পোস্টটি অবশ্যই অনুমোদিত হতে হবে। একাধিক পোস্টিং সমাধানের জন্য আপনি আমাদের publicmarket.com.bd এর সাথে যোগাযোগ করতে পারেন।" :
                             "Unlimited ad posts are allowed but the last one should be approved. To solve multiple posting solutions you may contact our publicmarket.com.bd"}    
                            </p>
                        </div>
                    </div>

                   
                   
                  </div>
            </div>
        </section>  




         <Footer /> 
        </>
    );
};

export default PostingAllowance;