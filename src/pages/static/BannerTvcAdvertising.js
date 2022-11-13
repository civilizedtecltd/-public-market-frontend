import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import LeaderBoard from './../../asset/frontend/assets/images/StaticImage/leader-board.png'
import SkyScraper from './../../asset/frontend/assets/images/StaticImage/sky-scraper.png' 
import BaseLine from './../../asset/frontend/assets/images/StaticImage/bottom-border.png' 
import { languageCheck } from '../../helpers/Helpers';


const BannerTvcAdvertising = () => {
    return (
        <> 
            
         <Header /> 
            <div className="banner-ads pt-40 pb-80" id="banner-ads">
            <div className="container pt-20 section_title">
                 
                <h3 className="text-center mt-40 banner-ad-title"> 
                {languageCheck() === 'bn' ? "ব্যানার ও টিভিসি বিজ্ঞাপন" :"Banner & TVC Advertising"}  
                </h3>

                <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? 
                            "publicmarket.com.bd-এ আপনার ব্র্যান্ড প্রকাশ ও বিজ্ঞাপন দিন – বাংলাদেশের বৃহত্তম স্থানীয় ওয়েবসাইট! Publicmarket.com.bd এর প্রতি মাসে লক্ষাধিক ভিজিটর থাকে – তাদের মধ্যে আপনি কার কাছে পৌঁছাতে চান?" : 
                            "Publish & Advertise your brand on publicmarket.com.bd – the largest local website in Bangladesh! Publicmarket.com.bd has millions of visitors every month – which of them do you want to reach?"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            'publicmarket.com.bd ক্রেতা ও বিক্রেতাদের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেয়। publicmarket.com.bd যেকোন ধরণের বানোয়াট এবং অপ্রীতিকর কার্যকলাপ প্রতিরোধ করার জন্য একটি তীক্ষ্ণ চেহারা দেয়। publicmarket.com.bd এর স্বচ্ছতা এবং জবাবদিহিতার জন্য আপনাকে দায়বদ্ধ রাখতে প্রতিশ্রুতিবদ্ধ।' : 
                            "The publicmarket.com.bd places the highest importance on the safety of buyers and sellers. publicmarket.com.bd gives a sharp look to prevent any kind of fabricated and unpleasant activities. publicmarket.com.bd is committed to holding you accountable for its transparency and accountability."}
                            </p>
                        </div>
                    </div>
                <div className="banner-ads-wrapper mt-20 mb-40 pt-30 pb-30">
                    <p className="ml-15 mr-15 advertising-banner-title"> 
                    {languageCheck() === 'bn' ? "আমাদের বিজ্ঞাপন পণ্য" :"Our Advertising Products"}   
                    </p>
                    <h4 className="mt-40 text-center ad-product-title">  
                    {languageCheck() === 'bn' ? "লিডারবোর্ড" :"Leader Board"}   
                   
                    </h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="col-sm-6 banner-product-details  mt-2 mb-2">
                            <p className="">
                            {languageCheck() === 'bn' ?
                             "এই ধরনের ব্যানার ডিজাইনে বিজ্ঞাপন ব্যানারটি কৌশলগতভাবে মোবাইলে নেভিগেশন বারের ঠিক উপরে এবং ডেস্কটপে নীচে রাখা হয়। লিডার বোর্ড সাইটের প্রতিটি দর্শক দ্বারা আক্ষরিকভাবে চাপা হয়। প্রত্যেকের জন্য বা কোনো নির্দিষ্ট বিভাগে ব্র্যান্ড সচেতনতা তৈরির জন্য একটি দুর্দান্ত পছন্দ।" :
                             "In this type of banner design the ad banner is strategically placed right above the navigation bar on mobile and below on desktop. The leader board is buttressed literally by every visitor on the site. A great choice for building brand awareness for everyone or in any specific categories."}   
                            </p>
                        </div>
                        <div className="col-sm-6 mt-2 mb-2">
                            <img className="img-fluid h-100" src={LeaderBoard} alt="" />
                        </div>
                    </div>
                    <h4 className="mt-60 text-center ad-product-title">  
                    {languageCheck() === 'bn' ? "স্কাইস্ক্রেপার" :"Skyscraper"} </h4>
                    <div className="row mt-20 banner-product-wrapper justify-content-around ad-products-box  ">
                        <div className="col-sm-6 mt-2 mb-2">
                            <img className="img-fluid  h-100" src={SkyScraper} alt="" />
                        </div>
                        <div className="col-sm-6 banner-product-details mt-2 mb-2">
                            <p className="  ">
                            {languageCheck() === 'bn' ?
                             "আপনি যদি ন্যূনতম খরচের বিজ্ঞাপনের কথা ভাবছেন তাহলে আকাশচুম্বী ব্যানার বিজ্ঞাপন আপনার জন্য। স্কাইস্ক্র্যাপার উচ্চ নাগালের সাথে আমাদের অনুসন্ধান ফলাফল পৃষ্ঠায় স্থান নির্ধারণের সাথে সাশ্রয়ী। ব্র্যান্ড বিল্ডিং জন্য ভাল বিকল্প এক." :
                             "If you are thinking about advertisements with minimum cost then skyscraper banner Ad is for you. Skyscraper is cost effective with placement on our search result page with high reach. One of the better options for brand building."}   
                            
                            </p>
                        </div>
                    </div>
                    <h4 className="mt-60 text-center ad-product-title">  
                       {languageCheck() === 'bn' ? "বেস লাইন" :"Base line"} </h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="col-sm-6 banner-product-details mt-2 mb-2">
                            <p className="">
                            {languageCheck() === 'bn' ?
                             "এই ধরনের ব্যানার বিজ্ঞাপনের উচ্চতা লিডারবোর্ডের তুলনায় দ্বিগুণ হয় এবং প্রতিটি সার্চ ফলাফলের পৃষ্ঠায় পেজিং লিংকগুলির ঠিক আগে স্থাপন করা হয় যা প্রায় সবাই দেখে।" :
                             "This type of banner Ad has double the height compared to the leaderboard and is placed just before paging pagination links on each search results page it is viewed by almost everyone."}   
                            
                            </p>
                        </div>
                        <div className="col-sm-6 mt-2 mb-2">
                            <img className="img-fluid  h-100" src={LeaderBoard} alt="" />
                        </div>
                    </div>
                    <h4 className="mt-60 text-center ad-product-title">  
                       {languageCheck() === 'bn' ? "স্কোয়ার" :"Square"} </h4>
                    <div className="row mt-20 banner-product-wrapper justify-content-around ad-products-box   ">
                        <div className="col-sm-6 mt-2 mb-2">
                            <img className="img-fluid h-100" src={LeaderBoard} alt="" />
                        </div>
                        <div className="col-sm-6 mt-2 mb-2 banner-product-details">
                            <p className="">
                            {languageCheck() === 'bn' ?
                             "এই ধরনের ব্যানার বিজ্ঞাপনের উচ্চতা লিডারবোর্ডের তুলনায় দ্বিগুণ। দর্শকরা যখন বিজ্ঞাপনটি পড়ছেন, এটি একটি নির্দিষ্ট লক্ষ্যে পৌঁছানোর একটি উপায়।" :
                             "This type of banner Ad has double the height compared to the leaderboard.The time when audience are reading about the ad, it’s a way to reach a specific target."}   
                            
                            </p>
                        </div>
                    </div>

 
                    
                </div>
                
                <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? 
                            "TVC ভিডিও" : 
                            "TVC Videos"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            "অধিকাংশই আজকাল পণ্যের বর্ণনা পড়ে তাদের সময় নষ্ট করতে চায় না। ভোক্তারা পড়ার পরিবর্তে একটি ছোট ভিডিও পছন্দ করে। TVC ভিডিওগুলি প্রত্যক্ষ এবং পরোক্ষ উপায়ে অর্থ প্রদানের জন্য গ্রাহকের ইচ্ছা বাড়ায়। TVC ভিডিওগুলি অবশ্যই ব্র্যান্ডের সাথে গ্রাহকের সম্পৃক্ততাকে প্রভাবিত করে কারণ এটি গ্রাহকদের মতে বিজ্ঞাপনের সবচেয়ে কার্যকর এবং প্রাসঙ্গিক মাধ্যম হিসাবে বিবেচিত হয়।" : 
                            "Now-a-days no one wants to waste their time reading descriptions of products. Consumers prefer a short video instead of reading. TVC Videos increase consumer’s willingness to pay, in direct and indirect manner. TVC videos surely affect the customer engagement with the brand as it is considered as the most effective and relevant means of advertising according to the consumers."}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        
        <Footer />
        </>
    );
};

export default BannerTvcAdvertising;