import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';

const PostingRules = () => {

    return (  
        <>
         <Header />
         <section className="blog_details_page pt-40 pb-80" id="ProfessionalHelp">
            <div className="container pt-20 section_title">
                 
                <h3 className="text-center mt-40 banner-ad-title">  
                {languageCheck() === 'bn' ? "পোস্টিং এর নিয়মনীতি" :"Posting Rules"}
                </h3>


                <div className="banner-ads-wrapper mb-40 pb-30">
           
                <h4 className="mt-40 text-center ad-product-title"> 
                {languageCheck() === 'bn' ? "আমরা এমন বিজ্ঞাপনগুলিকে অনুমতি দিই না যাতে রয়েছে" :"We don't allow ads that contain"}</h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="  banner-product-details mb-2">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? "1. একটি পণ্য বা পরিষেবা যা বাংলাদেশে অবৈধ ।" :"1. A product or service that is illegal in Bangladesh."}  <br />
                            {languageCheck() === 'bn' ? "2. একটি পণ্য বা পরিষেবা যা বাংলাদেশে অবস্থিত নয় ।" :"2. A product or service which is not located in Bangladesh."} <br />
                            {languageCheck() === 'bn' ? "3. অবৈধ ফোন নম্বর বা ইমেল ঠিকানা ।" :"3. Invalid phone Numbers or email addresses."}  <br />
                            {languageCheck() === 'bn' ? "4. কোন অবাস্তব অফার ।" :"4. Any unrealistic offers."}  <br />
                            {languageCheck() === 'bn' ? "5. অশ্লীল ভাষা, ছবি এবং বিষয়বস্তু ।" :"5. Scandalous language, picture and content."}  <br />
                            {languageCheck() === 'bn' ? "6. বর্ণনা এবং শিরোনাম যাতে প্রাসঙ্গিক বিষয়বস্তু নেই ।" :"6. Description and title that does not contains relevant content."}  <br /> 
                            {languageCheck() === 'bn' ? "7. যে ছবি অমিল, জাল বা অস্পষ্ট ।" :"7. Picture which is Mismatched, fake or unclear."}  <br />
                            {languageCheck() === 'bn' ? "8. প্রথম ছবির জন্য টেক্সট (ব্র্যান্ড লোগো এবং পণ্য কোড ছাড়া) ।" :"8. Text fo the First picture(except brand logo and product codes)."}  <br />
                            {languageCheck() === 'bn' ? "9. একটি URL লিঙ্ক যা প্রাসঙ্গিক নয়।" :"9. A URL Link which is not relevant."}  <br />
                            {languageCheck() === 'bn' ? "10. অন্যান্য বিজ্ঞাপনের মতো একই সামগ্রী রাখবেন না, 7 দিনের মধ্যে পুনরায় প্রকাশ করুন ।" :"10. Don’t put same content as other ad, re-published within 7 days."}  <br />
                            {languageCheck() === 'bn' ? "11. একাধিক বিজ্ঞাপন, ব্যানার এবং টিভিসি ।" :"11. Multiple ads, banner & TVC."}  <br />
                            {languageCheck() === 'bn' ? "12. অন্য কোম্পানির পণ্য ও পরিষেবার নকল পণ্য বা প্রতিরূপ সংস্করণ ।" :"12. Counterfeit goods or replica versions of Others company's product & services.."} 
                              <br />
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

export default PostingRules;