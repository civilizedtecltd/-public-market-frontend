import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const BuySellQuickTip = () => {
    return (
        <>
         
        <Header /> 
         <section className="blog_details_page pt-40 pb-80 " id="BuySellQuickly">
                <div className="container pt-20 section_title">
                    
                    <h3 className="text-center mt-40 banner-ad-title"> 
                    {languageCheck() === 'bn' ? "দ্রুত ক্রয় ও বিক্রয় করুন" :"Buy & Sell Quickly"}   
                    </h3>

                    <div className="banner-ads-wrapper  ">
                        <h4 className="mt-40 text-center ad-product-title">  
                        {languageCheck() === 'bn' ? "প্রতিযোগীকে জানুন" :"Know The Competitor"}   
                        </h4>
                        <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                            <div className="  banner-product-details mb-2">
                                <p className="pt-2 pb-2">
                                 {languageCheck() === 'bn' ? 
                                 "আপনার গ্রাহকরা কী খুঁজছেন তা খুঁজে বের করা উচিত। এবং সেইসাথে আপনার প্রতিযোগীরা কি অফার করছে এবং তারা কত টাকা নেয়। যা আপনাকে বিভিন্ন মূল্য এবং অফারে থাকা পণ্যের পরিসর এবং আপনি কোথায় মানানসই হবে তা বোঝার জন্য একটি ধারণা দিতে পারে। আপনি যে মূল্য সেট করতে চান তা আপনার গ্রাহকদের কাছে একটি 'সংকেত' পাঠাতে পারে। পণ্যের জন্য কম দাম পণ্যের নিম্ন মানের পরামর্শ দেয়। অন্যদিকে, আপনি যদি হস্তনির্মিত পণ্য বিক্রি করেন, তবে উচ্চ মূল্য গ্রাহকদের বোঝাতে সাহায্য করতে পারে যে তারা বিশেষ কিছু কিনছে।" :
                                 "You should find out what your customers are looking for. And as well as what your competitors are offering and how much they charge. Which can give you an idea for understanding the range of different prices and products on offer, and where you fit in. The price you want to set can also send a 'signal'’ to your customers. A low price for products suggests low quality of products. On the other hand, if you sell handmade products, higher prices can help convince customers that they are buying something special."} 
                                </p>
                            </div>
                        </div>
                        <h4 className="mt-40 text-center ad-product-title">    
                        {languageCheck() === 'bn' ? "সঠিক মূল্য নির্ধারণ করুন" :"Put Right Pricing"}   
                        </h4>
                        <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                            <div className="  banner-product-details mb-4">
                                <p className="pt-2 pb-2">
                                 {languageCheck() === 'bn' ? 
                                 "মূল্য সঠিক হলে সবকিছু বিক্রি করা যেতে পারে। মূল্য দেওয়ার আগে আমাদের প্ল্যাটফর্মে অনুরূপ বিজ্ঞাপনগুলির জন্য publicmarket.com.bd-এ ব্রাউজ করুন এবং একটি উপযুক্ত মূল্য চয়ন করুন। বিজ্ঞাপন পোস্ট করার সময় আপনাকে অবশ্যই আলোচনাযোগ্য বিকল্পটি নির্বাচন করতে হবে তা নিশ্চিত করার জন্য আপনি আলোচনা করতে ইচ্ছুক।" :
                                 "Everything can be sold if the price is right. Before putting a price browse on publicmarket.com.bd for similar ads on our platform and choose a suitable price. If you are willing to negotiate to make sure you need to select the negotiable option must while posting the Ad."} 
                                </p>
                            </div>
                        </div>
                        <h4 className="mt-40 text-center ad-product-title">  
                        {languageCheck() === 'bn' ? "বিজ্ঞাপন প্রচার করা" :"Promoting Ad"}    </h4>
                        <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                            <div className="  banner-product-details mb-4">
                                <p className="pt-2 pb-2">
                                {languageCheck() === 'bn' ? 
                                 "একটি দুর্দান্ত বিজ্ঞাপন তৈরি করার পরে এটি দেখানোর সঠিক সময় !! যখন একটি বিজ্ঞাপন প্রচার করা হয় তখন এটি 10 ​​গুণ বেশি ভিউ পায় যা ক্রেতাদের আপনার বিজ্ঞাপনে আগ্রহী করে তোলে। চাহিদা যত বেশি হবে আপনার পছন্দের দামে দ্রুত বিক্রি হওয়ার সম্ভাবনা তত বেশি।" :
                                 "After creating a great Ad it’s the high time to show it off !! When an Ad is promoted it gets higher views as high as 10x that make buyers interested in your Ad. The higher the demand the better the chances of selling fast for the price that you want."} 
                                    
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

export default BuySellQuickTip;