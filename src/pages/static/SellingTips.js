import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const SellingTips = () => {
    return ( 
 
        <>   
          <Header /> 
            <section className="blog_details_page pt-40 pb-80 " id="SellingTips">
              <div className="container pt-20 section_title">
                <h3 className="text-center mt-40 banner-ad-title"> 
                        {languageCheck() === 'bn' ?  
                        "বিক্রয় পরামর্শ" :  
                        "Selling Tips"}
                </h3>
                
                 <div className="banner-ads-wrapper ">
                <h4 className="mt-40 text-center ad-product-title"> 
                        {languageCheck() === 'bn' ?  
                        "প্রডাক্ট এর সম্পর্কে যতটা বিস্তারিত সম্ভব যোগ করুন" :  
                        "Add as much details as you can"}
                </h4>

                <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                    <div className="  banner-product-details  ">
                        <p className="pt-2 pb-2">
                        {languageCheck() === 'bn' ?  
                        "স্পষ্ট বিবরণ সহ বিজ্ঞাপন, ব্যানার এবং টিভিসি প্রচুর ভিউ বাড়ায়! কীওয়ার্ড এবং তথ্য অন্তর্ভুক্ত করুন যা ক্রেতাদের আরও আগ্রহী করে তুলবে। তবে এই বিবরণগুলি প্রদান করার সময় সর্বদা সৎ হতে ভুলবেন না।" :  
                        "Ads, Banners & TVCs with clear details will get more views! Include keywords and information that will make buyers more interested. But always remember to be honest while providing these details."}
                        </p>
                    </div>
                </div>



                    <h4 className="mt-40 text-center ad-product-title">  
                        {languageCheck() === 'bn' ?  
                        "আকর্ষণীয় ছবি যোগ করুন" :  
                        "Add fantastic photos"}
                         </h4>
                <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                    <div className=" banner-product-details mb-4">
                        <p className="pt-2 pb-2">
                        {languageCheck() === 'bn' ?  
                        "আপনি যে পণ্যটি বিক্রি করছেন তার সঠিক ফটো বা ভিডিও ব্যবহার করুন। আসল ছবি সহ বিজ্ঞাপনগুলি ক্যাটালগ/স্টক ফটোগুলির বিজ্ঞাপনের চেয়ে 10 গুণ বেশি ভিউ নিয়ে আসে৷ বিভিন্ন কোণ থেকে ছবি তোলার সময় যথাযথ আলো ব্যবহার নিশ্চিত করুন।" :  
                        "Use the exact photo or video of the item you're selling. Ads with genuine photos bring up to 10 times more views than ads with catalog/ stock photos. Obiously make sure to use proper lighting while taking photos from different angles."}
                        </p>
                    </div>
                </div>
                <h4 className="mt-40 text-center ad-product-title">  
                {languageCheck() === 'bn' ? "সঠিক মূল্য" :"Right Pricing"}
                 </h4>
                <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                    <div className="banner-product-details mb-4">
                    <p className="pt-2 pb-2">
                        {languageCheck() === 'bn' ?  
                        "দাম ঠিক থাকলে সবকিছু বিক্রি করা যায় খুব সহজে। মূল্য দেওয়ার আগে আমাদের প্ল্যাটফর্মে অনুরূপ বিজ্ঞাপনগুলির জন্য publicmarket.com.bd -এ ব্রাউজ করুন এবং একটি উপযুক্ত মূল্য চয়ন করুন। কথায় আছে, দাম যত কম, চাহিদা তত বেশি। আপনি যদি আপনার পণ্যটি নিয়ে দরাদরি করতে চান তাহলে বিজ্ঞাপনটি পোস্ট করার সময় অবশ্যই Negotiable Option নির্বাচন করতে হবে তা নিশ্চিত করার জন্য।" :  
                        "Everything can be sold if the price is right. Before putting a price browse on publicmarket.com.bd for similar ads on our platform and choose a suitable price. There is a saying, the lower the price, the higher is the demand. If you are willing to negotiate to make sure you need to select the negotiable option must while posting the Ad."}
                        </p>
                    </div>
                </div>

                
                <h4 className="mt-40 text-center ad-product-title">  
                {languageCheck() === 'bn' ? "বিজ্ঞাপন প্রচার করা" :"Promoting Ad"}
                 </h4>
                <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                    <div className=" banner-product-details">
                    <p className="pt-2 pb-2">
                        {languageCheck() === 'bn' ?  
                        "একটি দুর্দান্ত বিজ্ঞাপন তৈরি করার পরে এটি দেখানোর সঠিক সময় !! যখন একটি বিজ্ঞাপন প্রচার করা হয় তখন এটি 10 ​​গুণ বেশি ভিউ পায় যা ক্রেতাদের আপনার বিজ্ঞাপনে আগ্রহী করে তোলে। চাহিদা যত বেশি হবে আপনার পছন্দের দামে দ্রুত বিক্রি হওয়ার সম্ভাবনা তত বেশি। আপনার বিজ্ঞাপনগুলিকে সর্বোত্তম মূল্যে দ্রুত বিক্রি করতে publicmarket.com.bd-এ আপনার বিজ্ঞাপনগুলিকে আলাদা করে তোলার জন্য যখন এটি বিনামূল্যে প্রচারের সময় মার্কেটপ্লেসে বিজ্ঞাপন পোস্ট করা যায় এটি একটি পৃষ্ঠা টুল যা আপনাকে আপনার বিজ্ঞাপনগুলিতে আরও প্রতিক্রিয়া দেয় এবং আপনাকে দ্রুত বিক্রি করতে সহায়তা করে ৷" :  
                        "After creating a great Ad it’s the high time to show it off !! When an Ad is promoted it gets higher views as high as 10x that make buyers interested in your Ad. The higher the demand the better the chances of selling fast for the price that you want. To sell your items quickly at the best price by making your ads stand out on publicmarket.com.bd while it's free to post Ads on the marketplace at promotions is a page tool that gets you more responses on your ads and helps you sell fast."}
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

export default SellingTips;