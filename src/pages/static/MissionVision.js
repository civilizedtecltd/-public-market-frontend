import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const MissionVision = () => {
    return (
        <>  
        <Header /> 


        <section className="location_area pt-40  " id="about">
          <div className="container pt-60">
               <div className="row">
                       <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title pb-15">
                                <h3 className="title"> 
                                {languageCheck() === 'bn' ? 'উদ্দেশ্য এবং লক্ষ্য' : "Mission & Vision"}
                                </h3>
                            </div>
                      </div>
                  </div>
               </div>
           </div>  
        </section>   
 
         <section className="we-offer-area  " >
            <div className="container"> 
            <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center"> 
                        <div className="footer__mid__title">
                            <h2><span>{languageCheck() === 'bn' ? 'উদ্দেশ্য' : "Mission"}</span></h2> 
                        </div> 
                        </div>
                    </div>
                </div>
                <div className="">
                   <div className="post_form">
                         
                        <div className="row justify-content-center  pl-1 pr-1 pt-2">
                            <p> 
                             {languageCheck() === 'bn' ? 'আমাদের লক্ষ্য বিশ্বাস এবং নির্ভরযোগ্যতার সাথে যুক্ত আমাদের গ্রাহকদের একটি পরিষেবা প্রদান করা। একটি মার্কেটপ্লেস অভিজ্ঞতা উপভোগ করুন যেমন আগে কখনও হয়নি।' : 
                             "Our Mission is to provide a Service to Our Customers Paired with Trust and Reliability. Enjoy A Marketplace Experience Like Never before."}</p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? 'আপনার নিরাপত্তা' : "Your Safety"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            'publicmarket.com.bd ক্রেতা ও বিক্রেতাদের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেয়। publicmarket.com.bd যেকোন ধরণের বানোয়াট এবং অপ্রীতিকর কার্যকলাপ প্রতিরোধ করার জন্য একটি তীক্ষ্ণ ধারণা দেয়। publicmarket.com.bd এর স্বচ্ছতা এবং জবাবদিহিতার জন্য আপনাকে দায়বদ্ধ রাখতে প্রতিশ্রুতিবদ্ধ।' : 
                            "The publicmarket.com.bd places the highest importance on the safety of buyers and sellers. publicmarket.com.bd gives a sharp look to prevent any kind of fabricated and unpleasant activities. publicmarket.com.bd is committed to holding you accountable for its transparency and accountability."}
                            </p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? 'আপনার সুবিধার্থে' : "Your Convenience"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            "publicmarket.com.bd হল বাংলাদেশের বৃহত্তম C2C - ভোক্তা থেকে ভোক্তা অনলাইন মার্কেটপ্লেস। এখানে publicmarket.com.bd ক্রেতা-বিক্রেতাদের কথা চিন্তা করে ক্রয়-বিক্রয় প্রক্রিয়া সহজ করার চেষ্টা করছে।" : 
                            "publicmarket.com.bd is Bangladesh's largest C2C - Consumer to Consumer online marketplace. Here publicmarket.com.bd is trying to make the buying and selling process easier every moment by thinking about the buyers and sellers."}</p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? 'আপনার স্বস্তি' : "Your Comfort"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ?
                             "publicmarket.com.bd বিক্রেতার পণ্যগুলিকে চমৎকারভাবে উপস্থাপন করে এবং ক্রেতার কাছে সঠিক বর্ণনা সহ শিরোনাম ও বিবরণ বিস্তারিতভাবে প্রদর্শন করে।" : 
                             "publicmarket.com.bd presents the seller's products excellently and exhibits the titles & details in a detailed way with accurate descriptions to the buyer."}</p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title">
                            {languageCheck() === 'bn' ? "আমাদের সমাধান" : "Our Resolve"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ?
                             "আপনার জীবনকে সুন্দর করার জন্য প্রয়োজনীয় লক্ষ লক্ষ পণ্য থেকে সহজ ক্রয়ের সমাধান এবং বিক্রেতাদের বিক্রয়যোগ্য পণ্য publicmarket.com.bd এ বিক্রি করার প্রক্রিয়াকে সহজ করে" : 
                             "Easy purchase solutions from millions of products needed to make your life beautiful and simplifies the process of selling sellers' salable products to publicmarket.com.bd"}</p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title">{languageCheck() === 'bn' ? "আমাদের সামর্থ্য" :  "Our Affords"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ?
                             "লক্ষ লক্ষ ক্রেতা এবং বিক্রেতাদের বন্ধন সৃষ্টি করা, মেলা তৈরি করা এবং দেশের বৃহত্তম ভার্চুয়াল মার্কেটপ্লেস তৈরি করা।" : 
                             "Bridging millions of buyers and sellers, creating fairs & forming the country’s biggest virtual marketplace."}</p>
                        </div>
                    </div>
                    <div className="post_form mt-5">
                        <div className="post_title">
                            <h5 className="title">{languageCheck() === 'bn' ? "আমাদের অধ্যবসায়" :  "Our Perseverance"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            "ক্রেতা ও বিক্রেতাদের দৈনন্দিন জীবনকে সহজতর করতে, দক্ষ কর্মীদের একটি দল তৈরি করতে এবং বিশ্বের সাথে তাল মিলিয়ে একটি ডিজিটাল বাংলাদেশ তৈরি করতে।" :  
                            "To make the daily life of buyers and sellers easiest, to create a team of skilled workers & to create a digital Bangladesh in tandem with the world."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   

        <section className="we-offer-area mt-5 mb-5" id="vision">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <div className="footer__mid__title"> 
                               <h2><span>{languageCheck() === 'bn' ? "লক্ষ্য" : "Vision"}</span></h2> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="post_form">
                        <div className="post_title">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? "আপনার ধ্রুবক সহযোগী" : "Your Constant Associate"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            "publicmarket.com.bd 24/7 আপনার প্রতিটি প্রশংসা এবং অভিযোগের জন্য এক্টিভ থাকবে। যেকোনো কিছুর জন্য আমাদের সাথে যোগাযোগ করুন এবং আপনার যা কিছু প্রয়োজন বা চান, শুধু আমাদের জানান। আমরা যেকোন এবং প্রতিটি ধরণের প্রতারণামূলক বা বিরক্তিকর কার্যকলাপের জন্য সর্বদা কঠোর নজর রাখি তবে আপনি যদি কোনও সমস্যার সম্মুখীন হন তাহলে আমাদের জানান, আমরা অবিলম্বে ব্যবস্থা নেব। publicmarket.com.bd আপনার সার্বক্ষণিক সহযোগী।" : 
                            "publicmarket.com.bd is here 24/7 for your every compliment and complaint. Contact us for anything and everything you need or want, just let us know. We always keep a stern eye out for any and every kind of fraudulent or disturbing activity but if you face any problem let us know, we'll take immediate action. publicmarket.com.bd is your constant associate."}</p>
                        </div>
                    </div>
                    <div className="post_form">
                        <div className="post_title mt-5">
                            <h5 className="title"> 
                            {languageCheck() === 'bn' ? "আপনার প্ল্যাটফর্ম" : "Your Platform"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>{languageCheck() === 'bn' ? 
                            "publicmarket.com.bd সব বাংলাদেশীদের জন্য অনলাইন শ্রেণীবদ্ধ বিজ্ঞাপন এবং টিভিসিকে আরও সাশ্রয়ী করতে এখানে এসেছে। publicmarket.com.bd যখন আপনি আপনার পণ্য বিক্রি করবেন তখন আপনাকে প্রেসক্রাইব করবে, আপনি অপরিচিত জায়গায় যাবেন না, আপনি নিরাপদ জায়গায় দেখা করবেন এবং আপনি অগ্রিম অর্থ প্রদান করবেন না।" : 
                            "publicmarket.com.bd is here to make online classified Ads & TVCs more affordable for all Bangladeshis. publicmarket.com.bd will prescribe you when you sell your product, you won’t go to unfamiliar places, you'll meet safe places and you won't pay in advance."}</p>
                        </div>
                    </div>
                    <div className="post_form">
                        <div className="post_title mt-5">
                            <h5 className="title">{languageCheck() === 'bn' ? "আপনার ব্যক্তিগত ব্যবসায়ী" : "Your Personal Trader"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>
                            {languageCheck() === 'bn' ? 
                            "publicmarket.com.bd হল zero স্প্যামিং সহ সেরা মার্কেটপ্লেস অভিজ্ঞতা। আমরা প্রতিটি ব্যবহারকারীকে যাচাই করি এবং তারপর আপনার সুবিধার জন্য নিযুক্ত করি। Zero স্প্যামিং এবং প্রতারণাপূর্ণ ক্রেতা ও বিক্রেতাদের সম্পর্কে 100% উদ্বেগ সহ শ্রেণিবদ্ধ বিজ্ঞাপন এবং টিভিসি প্ল্যাটফর্মের মাধ্যমে ক্রেতা ও বিক্রেতাদের মধ্যে আপনার সেরা অনলাইন শপিং অ্যাডভেঞ্চার নিশ্চিত করতে আমরা আছি। publicmarket.com.bd আপনার ব্যক্তিগত ব্যবসার জায়গা।" : 
                            "publicmarket.com.bd is the Best marketplace experience with zero spamming. We verify each and every user and then add for your comfort. We are here to assure your best online shopping adventure among buyers & sellers by classified Ads & TVCs platform with zero spamming and 100% concern about fraudulent buyers & sellers. So that publicmarket.com.bd is your personal trader."}
                            </p>
                        </div>
                    </div>
                    <div className="post_form">
                        <div className="post_title mt-5">
                            <h5 className="title">{languageCheck() === 'bn' ? "আমাদের বৃদ্ধি" : "Our Growth"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>
                            {languageCheck() === 'bn' ?
                             "publicmarket.com.bd সততা, আস্থা এবং ক্রেতা-বিক্রেতার সন্তুষ্টি নিয়ে দিনরাত চিন্তা করে। publicmarket.com.bd একটি ডিজিটাল বাংলাদেশ গঠনের জন্য গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কাছে নিবেদিত।" : 
                             "publicmarket.com.bd thoughts day and night about honesty, trust and buyers-sellers satisfaction. publicmarket.com.bd is dedicated to the Government of the People's Republic of Bangladesh to assemble a digital Bangladesh."}
                            </p>
                        </div>
                    </div>
                    <div className="post_form">
                        <div className="post_title mt-5">
                            <h5 className="title">{languageCheck() === 'bn' ? "আমাদের সহনশীলতা" : "Our Resilience"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>
                            {languageCheck() === 'bn' ? 
                            "publicmarket.com.bd হল একটি প্ল্যাটফর্ম যেখানে ক্রেতারা বিক্রেতাদের দেওয়া আইটেম, পণ্য এবং পরিষেবার বিস্তৃত পরিসর খুঁজে পেতে পারেন। অনলাইনে কিছু কিনুন বা বিক্রি করুন! ব্যবহারকারী বান্ধব ইন্টারফেস, যাচাইকৃত বিক্রেতাদের কাছ থেকে সরাসরি আপনার আইটেম ক্রয় করে। publicmarket.com.bd সব সময় ভালো কিছু নিয়ে চিন্তা করে, যা আমাদের শক্তি এবং আমাদের স্থিতিস্থাপকতা।" : 
                            "publicmarket.com.bd is a platform where buyers can find a wide range of items, products and services offered by sellers. Buy or sell anything online! User friendly interface, directly buys your items from verified sellers. publicmarket.com.bd thinks all the time about something good, which is our strength & is our resilience."}
                            </p>
                        </div>
                    </div>
                    <div className="post_form">
                        <div className="post_title mt-5">
                            <h5 className="title">{languageCheck() === 'bn' ? "আমাদের রিজিক" : "Our Sustenance"}</h5>
                        </div>
                        <div className="row justify-content-center ">
                            <p>
                            {languageCheck() === 'bn' ? 
                            "publicmarket.com.bd এর সাথে হাজার হাজার মানুষ বিভিন্ন কর্মকান্ডে জড়িত। publicmarket.com.bd সর্বদা উপরের সকল মানুষের জীবন ও জীবিকা নিয়ে চিন্তা করে।" : 
                            "Thousands of people are involved with publicmarket.com.bd in various activities.  publicmarket.com.bd always thinks about the life and livelihood of all the above people."}
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

export default MissionVision;