import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const PromoteAds = () => {

 
    return (
        <> 
         
        <Header /> 
         <section className="blog_details_page pt-40 pb-80" id="ProfessionalHelp">
            <div className="container pt-20 section_title">
                  
                <h3 className="text-center mt-40 banner-ad-title"> 
                {languageCheck() === 'bn' ? "আপনার বিজ্ঞাপন প্রচার করুন" :"Promote Your Ad"}  
                </h3>
                <div className="banner-ads-wrapper mt-10 mb-40 pt-30 pb-30">
 
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className=" banner-product-details mb-2">
                            <p className="pt-2 pb-2"> 
                            {languageCheck() === 'bn' ? 
                            "সবচেয়ে ভালো দামে আপনার পণ্য দ্রুত বিক্রি করতে চান, তাহলে আপনি সঠিক স্থানে আছেন শুধু আপনার বিজ্ঞাপনগুলোকে প্রকাশ করতে হবে publicmarket.com.bd - বাংলাদেশের বৃহত্তম মার্কেটপ্লেসগুলোর একটি!! publicmarket.com.bd-এ বিজ্ঞাপন পোস্ট করা বিনামূল্যে, কিন্তু বিজ্ঞাপন প্রচার একটি অর্থপ্রদানের সরঞ্জাম যা আপনাকে আপনার বিজ্ঞাপনগুলিতে আরও প্রতিক্রিয়া দেয় এবং আপনাকে দ্রুত বিক্রি করতে সহায়তা করে। " :
                            "Want to sell your product quickly with the best price, then you are at the right place just need to make your ads stand out on publicmarket.com.bd - one of the largest marketplace in Bangladesh !! Posting ads on publicmarket.com.bd is free, but Promoting Ad is a paid tool that gets you more responses on your ads and helps you to sell faster. "}  
                            </p>
                        </div>
                    </div>

                    <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? "আরও ভিউ এবং প্রতিক্রিয়া পান" :"Get more views and responses"} </h4> 
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className=" banner-product-details mb-2">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "বিজ্ঞাপন প্রচারগুলি আপনার সময় এবং শ্রম বাঁচানোর সাথে সাথে আপনার বিজ্ঞাপনে আরও ভিউ এবং প্রতিক্রিয়া পাওয়ার জন্য ডিজাইন করা হয়েছে!" :
                            "Ad Promotions are designed to get more views and responses to your ad while saving you time and effort!"}
                            </p>
                        </div>
                    </div>

                    <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? "সেরা দামের জন্য দ্রুত বিক্রি করুন" :"Sell fast for the best price"} </h4> 
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="banner-product-details mb-2">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "আরও প্রতিক্রিয়া মানে আপনার বিজ্ঞাপনের জন্য আরও আগ্রহী ক্রেতা। আপনি সেরা সম্ভাব্য মূল্য আইটেম বিক্রি করার ক্ষমতা আছে!" :
                            "More responses means more interested buyers for your ad. You have the power to sell the item at the best possible price!"}
                            </p>
                        </div>
                    </div>



                    <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? "একাধিক বিজ্ঞাপন প্রচার থেকে চয়ন করুন!" :"Pick from multiple Ad Promotions!"} </h4> 
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="  banner-product-details mb-2">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "একাধিক বিজ্ঞাপন প্রচার আপনাকে আরও বেশি ভিউ এবং প্রতিক্রিয়া পেতে পারে যা 10 গুণ দ্রুত বিক্রি করতে পারে৷ সুতরাং আপনি যেকোন সংমিশ্রণে প্রচারগুলি প্রয়োগ করতে পারেন!!" :
                            "Multiple Ad Promotions can get you even more views and responses which can sell 10 times faster. So you can apply Promotions in any combination!!"}
                            </p>
                        </div>
                    </div>


                    


                    
                   
                  </div>
            </div>
        </section>
            <br />   
            
        <Footer />
        </>
    );
};

export default PromoteAds;