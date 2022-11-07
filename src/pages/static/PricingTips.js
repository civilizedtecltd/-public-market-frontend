import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const PricingTips = () => {
    return (
        <>
          
        <Header /> 
        <section className="blog_details_page pt-40 pb-80" id="PricingTips">
            <div className="container pt-20 section_title">
                
                <h3 className="text-center mt-40 banner-ad-title">  
                    {languageCheck() === 'bn' ? "মূল্য নির্ধারণ পরামর্শ" :"Pricing Tips"}
                </h3>
                <div className="banner-ads-wrapper ">
                    <h4 className="mt-40 text-center ad-product-title">    
                    {languageCheck() === 'bn' ? "সঠিক দাম" :"Right pricing"}
                     </h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box pt-20 pb-20">
                        <div className=" banner-product-details ">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "দাম ঠিক থাকলে সব বিক্রি করা যায়! publicmarket.com.bd-এ তুলনামূলক বিজ্ঞাপন দেখুন এবং একটি যুক্তিসঙ্গত মূল্য চয়ন করুন। আপনি যদি আপনার পণ্যটি নিয়ে দরাদরি করতে চান তাহলে বিজ্ঞাপনটি পোস্ট করার সময় অবশ্যই Negotiable Option নির্বাচন করতে হবে তা নিশ্চিত করার জন্য।" :
                            "If the price is right, everything can be sold! On publicmarket.com.bd look for comparable ads and choose a reasonable price. Select the Negotiable option when placing the ad if you are willing to work out a deal."}
                            </p>
                        </div>
                    </div>
                    <h4 className="mt-40 text-center ad-product-title">  
                    {languageCheck() === 'bn' ? "প্রতিপক্ষের বা মার্কেট এর ব্যপারে সচেতন থাকুন" :"Know The Market"}
                     </h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box ">
                        <div className="banner-product-details ">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "আপনাকে অবশ্যই জানতে হবে আপনার ক্লায়েন্ট কী চায় সেই সাথে আপনার প্রতিযোগীরা একটি পণ্যের জন্য কতটা অফার করে। যেটি আপনাকে মূল্য এবং উপলব্ধ পণ্যের পরিসর, সেইসাথে আপনি কোথায় ফিট করবেন তা বের করার জন্য একটি ধারণা দিতে পারে।" :
                            "You must know what your client wants as well as how much your competitors offer for a product. Which can give you a starting point for figuring out the range of pricing and products available, as well as where you fit in."} 
                            </p> 
                        </div>
                    </div>
                    <h4 className="mt-40 text-center ad-product-title">  
                    {languageCheck() === 'bn' ? "আপনার মূল্য নির্ধারণের উদ্দেশ্যগুলি নির্ধারণ করা" :"Deciding Your Pricing Objectives"} </h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box ">
                        <div className="banner-product-details">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "নিজেকে জিজ্ঞাসা করুন আপনি আপনার মূল্য দিয়ে কী অর্জন করতে চান এবং তারপর একটি মূল্য নির্ধারণের পরিকল্পনা তৈরি করুন যা আপনাকে আপনার লক্ষ্যে পৌঁছাতে সহায়তা করবে। আপনি কি একটি নতুন পণ্য লঞ্চ করছেন? উদাহরণস্বরূপ, আপনি বাজারের অংশীদারিত্ব অর্জনে সহায়তা করার জন্য একটি কম মূল্য সেট করার সিদ্ধান্ত নিতে পারেন। বিকল্পভাবে, আপনি বিপরীত রুট নিতে পারেন এবং একটি প্রিমিয়াম মূল্য নির্ধারণ করতে পারেন যা প্রাথমিক গ্রহণকারীরা একটি নতুন এবং একচেটিয়া পণ্য হাতে পেতে দিতে ইচ্ছুক হবে।" :
                            "Ask yourself what do you want to achieve with your pricing and then establish a pricing plan that will help you reach your goals. If you're launching a new product, for example, you can decide to set a low price to assist you gain market share. Alternatively, you could take the opposite route and establish a premium price that early adopters will be willing to pay to get their hands on a new and exclusive product."}
                            </p>
                        </div>
                    </div>
                    <h4 className="mt-40 text-center ad-product-title">  
                     {languageCheck() === 'bn' ? "কস্ট-প্লাস প্রাইসিং বিবেচনা করুন" :"Consider Cost-plus Pricing"}  
                    </h4>

                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="banner-product-details ">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "আপনার নির্দিষ্ট খরচের কত হার পণ্যটি কভার করা উচিত তা গণনা করুন। একটি ইউনিট ব্রেক-ইভেন মান তৈরি করতে, এই সমস্ত খরচ একসাথে যোগ করুন এবং ভলিউম দ্বারা ভাগ করুন। আপনার ব্রেক-ইভেন পয়েন্টে, আপনাকে একটি মার্জিন বা মার্ক-আপ যোগ করতে হবে। সাধারণত, এটি ব্রেক-ইভেনের শতাংশ হিসাবে বর্ণনা করা হয়। মার্ক-আপের স্তরটি শিল্পের নিয়ম, অভিজ্ঞতা এবং বাজার বোঝার দ্বারা নির্ধারিত হবে। যদি মূল্য অত্যন্ত বেশি বলে মনে হয়, তাহলে আপনার খরচ এবং মূল্য নির্ধারণ করে ফেলুন।1" :
                            "Calculate what rate of your fixed costs the product should cover. To generate a unit break-even value, add all of these costs together and divide by volume. To your break-even point, you'll need to add a margin or mark-up. Typically, this is described as a percentage of break-even. The level of mark-up will be determined by industry norms, experience, and market understanding. If the price appears to be extremely high, cut off your costs and the pricing correspondingly."}  
                    
                            </p>
                        </div>
                    </div>
               </div>
            </div>
        </section>
        <br></br>
        
        <Footer />
            
        </>
    );
};

export default PricingTips;