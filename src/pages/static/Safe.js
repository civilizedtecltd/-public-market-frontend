import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const Safe = () => {
    return (
        <> 
            
       <Header /> 

        <section className="location_area pt-40 pb-80" id="privacypolicy">
            <div className="container pt-20 section_title">
                  
                <h3 className="text-center mt-40 banner-ad-title"> 
                   {languageCheck() === 'bn' ?  
                    " কিভাবে নিরাপদ থাকবেন" :  
                    "How To Stay Safe"}
                </h3>
                
 
               <div className="mt-30">
              <div className="post_form mt-20"> 
                  <div className="row justify-content-center">
                      <p className='mt-2'>  
                      {languageCheck() === 'bn' ?  
                        "আপনার নিরাপত্তা আমাদের অগ্রাধিকার এবং আমরা আপনার সবচেয়ে সুরক্ষিত অভিজ্ঞতা নিশ্চিত করার জন্য নিয়মিত পদক্ষেপ নিই। কিন্তু প্রতারণামূলক কার্যকলাপ সম্পূর্ণরূপে অবরুদ্ধ করা যাবে না। তাই আমরা আপনার নিজের নিরাপত্তার জন্য বিভিন্ন পদক্ষেপ নিয়েছি।" :  
                        "Your Safety Is Our Priority and We Regularly Take Steps to Ensure Your Most Secured Experience. But Fraudulent Activity Can't be Completely Blocked. So We Have Assorted Some Steps For Your Own Safety."}
                      </p>  
                  </div> 
                 </div> 
               </div> 

               <h4 className="mt-40 text-center ad-product-title">
               {languageCheck() === 'bn' ?  
                "সাধারণ নিরাপত্তা পরামর্শ" :  
                "General safety advice"}
               </h4>

          <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title"> 
                       {languageCheck() === 'bn' ?  
                            "স্থানীয়ভাবে বিতরণ করুন" :  
                            "Get Delivered in local"}
                       </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>  
                        {languageCheck() === 'bn' ?  
                            "ব্যক্তিগতভাবে বিক্রেতার সাথে দেখা করুন, আইটেমটি পরীক্ষা করুন এবং আপনি অর্থপ্রদান করার আগে আপনি সন্তুষ্ট কিনা তা নিশ্চিত করুন।" :  
                            "Meet the seller in person, check the item and make sure you are satisfied before you make a payment."}
                      </p>  
                  </div> 
                 </div> 
          </div> 



          <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title"> 
                      {languageCheck() === 'bn' ?  
                            "বিনিময়ে চতুর হোন" :  
                            "Be clever on exchange"}
                    </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>  {languageCheck() === 'bn' ?  
                            "একই সময়ে আইটেম এবং পেমেন্ট বিনিময় করুন। ক্রেতার জন্য একটি আইটেম পাওয়ার আগে কোনো অর্থপ্রদান না করার জন্য একটি পরামর্শ আছে। পেমেন্ট পাওয়ার আগে বিক্রেতাদের তাদের আইটেম পাঠানো উচিত নয়।" :  
                            "Exchange items and payment at the same time. For Buyer have a suggestion to not to make any payments before receiving an item. Sellers should not send their item before receiving payment."}</p>  
                  </div> 
                 </div> 
          </div> 


          
          <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title"> 
                      {languageCheck() === 'bn' ?  
                            "প্রলোভন এড়িয়ে চলুন" :  
                            "Avoid temptation"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>
                      {languageCheck() === 'bn' ?  
                            "অবাস্তবভাবে কম দাম এবং দ্রুত অর্থের প্রতিশ্রুতি যেমন সত্য হতে খুব ভাল বলে মনে হয় এমন কিছু এড়াতে আপনার সাধারণ জ্ঞান ব্যবহার করুন।" :  
                            "Use your common sense to avoid anything that appears too good to be true, such as unrealistically low prices and promises of quick money."}
                     </p>  
                  </div> 
                 </div> 
          </div> 

          <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "আর্থিক তথ্য গোপন রাখুন " :  
                            "Keep financial information secret"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        "ব্যাঙ্ক অ্যাকাউন্টের বিশদ বিবরণ, eBay/PayPal তথ্য এবং অপব্যবহার হতে পারে এমন অন্যান্য তথ্য অন্তর্ভুক্ত আর্থিক তথ্য কখনই দেবেন না।" :  
                        "Never give out financial information which includes bank account details, eBay/PayPal info and other information that could be misused."}
                      </p>  
                  </div> 
                 </div> 
          </div> 

          <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "চাকরির ইন্টারভিউ সম্পর্কে সচেতন" :  
                            "Aware of job interview"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        "আপনি যখন চাকরির জন্য আবেদন করেন, আবেদন করার আগে চাকরি, নিয়োগকর্তা এবং কোম্পানি সম্পর্কে গবেষণা করুন। নিয়োগকর্তার সাথে ব্যক্তিগতভাবে দেখা করার আগে আপনার ব্যক্তিগত তথ্য কখনই দেবেন না। ইন্টারভিউয়ের জন্য কোম্পানির অবস্থান বা দূরবর্তী অবস্থানের বাইরে যাওয়া এড়িয়ে চলুন।" :  
                        "When you apply for a job, research about the job, the employer and the company before you apply. Never give out your personal information before meeting the employer in person. Avoid going out of the company location or remote location for an interview."}
                      </p>  
                  </div> 
                 </div> 
          </div> 

  
   
            
            <h4 className="mt-40 text-center ad-product-title">
                {languageCheck() === 'bn' ?  
            "স্ক্যাম এবং প্রতারণার জন্য সতর্ক থাকতে হবে" :  
            "Scams and frauds to watch out for"}
            </h4>


              

            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "জাল পেমেন্ট সেবা সম্পর্কে সচেতন" :  
                            "Aware of fake payment services"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        " Publicmarket.com.bd কোনো প্রকার পেমেন্ট স্কিম বা সুরক্ষা প্রদান করে না। আপনি যদি কিছু ভুল বা দূষিত লক্ষ্য করেন তাহলে অনুগ্রহ করে এই ধরনের পরিষেবা অফার করার দাবি করে এমন কোনো ইমেল রিপোর্ট করুন। অনলাইন পেমেন্ট পরিষেবা বা এসক্রো সাইটগুলি ব্যবহার করা এড়িয়ে চলুন যদি না আপনি 100% নিশ্চিত হন যে সেগুলি আসল।" :  
                        " Publicmarket.com.bd do not offer any form of payment scheme or protection. If you notice something wrong or malicious please report any emails claiming to offer such services. Avoid using online payment services or escrow sites unless you are 100% sure that they are genuine."}
                      </p>  
                  </div> 
                 </div> 
            </div> 


            
            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "ব্যক্তিগত তথ্য প্রদান এড়িয়ে চলুন" :  
                            "Avoid providing personal information"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        "যদি কোনো উৎস আপনার ব্যক্তিগত বিবরণের জন্য অনুরোধ করে, তাহলে অনুগ্রহ করে এড়িয়ে চলুন বা তথ্য প্রদানের বিষয়ে সচেতন থাকুন। আপনি যদি আপনার ব্যক্তিগত বিবরণ প্রদান করার জন্য আপনাকে জিজ্ঞাসা করে এমন কোনো ইমেল পান, দয়া করে কোনো লিঙ্ক খুলবেন না বা ক্লিক করবেন না। ইমেল রিপোর্ট করুন এবং অবিলম্বে এটি মুছে দিন." :  
                        "If any source requests for your personal details, please avoid or be aware of providing the information. If you get any email asking you to provide your personal details, please do not open or click to any links. Please report the email and delete it immediately."}
                      </p>  
                  </div> 
                 </div> 
            </div> 



            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "জাল ফি এড়িয়ে চলুন" :  
                            "Avoid Fake fees"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        " যে কোনো আইটেম বা পরিষেবা কেনা বা বিক্রি করার জন্য অতিরিক্ত ফি চাচ্ছে এমন কাউকে এড়িয়ে চলুন। Publicmarket.com.bd কখনই এর মৌলিক পরিষেবাগুলির জন্য অর্থপ্রদানের অনুরোধ করে না এবং বাংলাদেশে অবস্থিত নয় এমন আইটেমগুলিকে অনুমতি দেয় না, তাই আমদানি এবং ব্রোকারেজ ফি কখনই প্রয়োজন হবে না।" :  
                        "Avoid anyone who is asking for extra fees to buy or sell any item or service. Publicmarket.com.bd never asks payments for its basic services, and doesn't allow items that are not located in Bangladesh, so import and brokerage fees should never be required."}
                      </p>  
                  </div> 
                 </div> 
            </div> 


            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "ওয়েস্টার্ন ইউনিয়ন বা মানিগ্রামের মতো মানি ট্রান্সফার পরিষেবাগুলি ব্যবহার করা এড়িয়ে চলুন" :  
                            "Avoid using money transfer services such as Western Union or MoneyGram"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        "Publicmarket.com.bd অনলাইন পেমেন্ট গেটওয়ে SSL Commerz ব্যবহার করে তাই ওয়েস্টার্ন ইউনিয়ন বা মানিগ্রামের মাধ্যমে টাকা পাঠানো বা নেওয়ার অনুরোধগুলি কখনই ব্যবহার বা গ্রহণ করবেন না। কারণ এই পরিষেবাগুলি অপরিচিতদের মধ্যে লেনদেনের জন্য নিরাপদ নয় এবং তাদের অনেক কেলেঙ্কারী চলছে৷" :  
                        " Publicmarket.com.bd uses online payment gateway SSL Commerz so never use or accept requests to send or take money via Western Union or MoneyGram. Because these services are not safe for transactions between strangers and they have many scams running."}
                      </p>  
                  </div> 
                 </div> 
            </div> 

  
   
    

            

            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            " PublicMarket.com এর নিরাপত্তা ব্যবস্থা" :  
                            "PublicMarket.com's safety measures"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        <>
                        a) Publicmarket.com.bd-এ আপনার একটি নিরাপদ, উপভোগ্য অভিজ্ঞতা নিশ্চিত করতে আমরা অবিরাম কাজ করি <br />
                        b) স্প্যাম থেকে রক্ষা করার জন্য আপনাকে পোস্ট করা বিজ্ঞাপনগুলিতে আপনার ইমেল ঠিকানা লুকানো। <br />
                        c) আপনাকে স্প্যাম থেকে রক্ষা করতে আপনার পোস্ট করা বিজ্ঞাপনগুলিতে আপনার ফোন নম্বর লুকানোর বিকল্প দেওয়া হচ্ছে৷ <br />
                        d) পর্দার পিছনে সন্দেহজনক বা অনুপযুক্ত কার্যকলাপ সনাক্ত এবং প্রতিরোধ করতে আমাদের প্রযুক্তিতে ক্রমাগত উন্নতি করা। <br />
                        f) সন্দেহজনক বা বেআইনি কার্যকলাপের রিপোর্ট ট্র্যাকিং অপরাধীদের পুনরায় সাইট ব্যবহার করা থেকে আটকাতে।
                        </> :  
                        <>
                        a) We work continuously to ensure you have a safe, enjoyable experience on Publicmarket.com.bd <br />
                        b) Hiding your email address on ads that you were posted to protect you from spam. <br />
                        c) Giving you the option to hide your phone number on ads you post to protect you from spam. <br />
                        d) Making constant improvements to our technology to detect and prevent suspicious or inappropriate activity behind the scenes. <br />
                        f) Tracking reports of suspicious or illegal activity to prevent offenders from using the site again.
                        </>}
                      </p>  
                  </div> 
                 </div> 
            </div> 


            <div className="mt-30">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">  
                       {languageCheck() === 'bn' ?  
                            "ভিকটিমকে বলতে হবে" :  
                            "Victim should speak out"}
                      </h5>
                  </div>
                  <div className="row justify-content-center">
                      <p>   
                        {languageCheck() === 'bn' ?  
                        <>
                        a) আপনি যদি কোনও কেলেঙ্কারির শিকার হয়ে থাকেন, তাহলে অনুগ্রহ করে আপনার পরিস্থিতি অবিলম্বে আমাদের কাছে রিপোর্ট করার পরিবর্তে লুকাবেন না। আপনি যদি প্রতারিত হয়ে থাকেন তবে আমরা সুপারিশ করছি যে আপনাকে অবশ্যই আপনার স্থানীয় পুলিশ বিভাগের সাথে যোগাযোগ করতে হবে। <br />
                        b) Publicmarket.com.bd ব্যবহারকারীদের গোপনীয়তার জন্য প্রতিশ্রুতিবদ্ধ এবং আমরা কোনো ব্যবহারকারী সম্পর্কে কোনো ধরনের তথ্য প্রকাশ্যে শেয়ার করি না। পাশাপাশি আপনারা সচেতন হয়ে আমাদের সহযোগিতা করুন। <br /> 
                        </> :  
                        <>
                        a) If you have been the victim of a scam, please don’t hide rather than report your situation to us immediately. If you have been cheated, we recommend that you must contact your local police department. <br />
                        b) Publicmarket.com.bd is committed to the privacy of users and we do not share any kind of information about any user publicly. As well as you should cooperate with us by being conscious. <br />
                        
                        </>}
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

export default Safe;