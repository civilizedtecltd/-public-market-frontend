import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const Faq = () => {
    return ( 
        <>
         
        <Header /> 
        <section className="faq_area  pt-40 pb-120 mb-5" id="faq">
            <div className="container pt-60">  
                 <div className="section_title mb-3">
                      <h3 className="title"> 
                      {languageCheck() === 'bn' ?  
                        "সচরাচর জিজ্ঞাসিত প্রশ্ন" :  
                        "FAQ"}
                      </h3>
                  </div>
 
                
                <details>
                    <summary className="summary" > 
                       {languageCheck() === 'bn' ?  
                        "আমি কিভাবে আমার বিজ্ঞাপন পোস্ট করতে পারি?" :  
                        "How Can I Post My Ad?"}
                    </summary>
                    <div className="faq__content">
                        <p>  
                        {languageCheck() === 'bn' ?  
                        "publicmarket.com.bd-এ একটি বিজ্ঞাপন পোস্ট করতে আপনার Post Your Ad বোতামে একটি সাধারণ ক্লিক করতে হবে। এবং যদি আপনি লগ ইন না করে থাকেন তাহলে বিজ্ঞাপন পোস্ট করার প্রথম ধাপ হিসেবে আপনাকে লগ ইন বা নিবন্ধন করতে হবে। আপনার পোস্ট লাইভ হবে শুধু আপনার বিজ্ঞাপনের অনুমোদনের জন্য অপেক্ষা করুন।" :  
                        "To post an ad on publicmarket.com.bd you need a simple click on the Post Your Ad button. And if you are not logged in then you should log in or Register as a first step of posting an ad. Your post will go live just wait for approval of your ad."}
                        </p>
                    </div>
                </details>

                <details>
                    <summary className="summary"> 
                    {languageCheck() === 'bn' ?  
                        "আমি কিভাবে আমার বিজ্ঞাপন মুছতে এবং সম্পাদনা করতে পারি?" :  
                        "How Can I Delete & Edit My Ad?"}
                    </summary>
                    <div className="faq__content">
                        <p>  {languageCheck() === 'bn' ?  
                        "আপনি যদি আপনার বিজ্ঞাপন বা TVC মুছতে চান তবে আপনাকে প্রথমে আপনার প্রোফাইলে যেতে হবে। সেখানে আপনি My Account থেকে ডিলিট অপশন পাবেন।" :  
                        "If you want to delete your Ad or TVC you have to go to your Profile first. There you will get the delete option from My Account."}
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="summary" >  
                      {languageCheck() === 'bn' ?  
                        "আমি কিভাবে আমার TVC পোস্ট করতে পারি?" :  
                        "How Can I Post My TVC?"}
                    </summary>
                    <div className="faq__content">
                        <p> 
                         {languageCheck() === 'bn' ?  
                        "publicmarket.com.bd-এ একটি TVC পোস্ট করতে আপনার TVC Post Button একটি সাধারণ ক্লিক করতে হবে। এখানে আপনি টিভিসি পোস্ট করে আপনার কোম্পানির প্রতিনিধিত্ব করতে পারবেন। আপনি যদি লগ ইন না করে থাকেন তাহলে আপনাকে একটি টিভিসি পোস্ট করার প্রথম ধাপ হিসেবে লগ ইন বা নিবন্ধন করতে হবে। আপনার টিভিসি লাইভ হবে শুধু আপনার টিভিসির অনুমোদনের জন্য অপেক্ষা করুন।" :  
                        "To post a TVC on publicmarket.com.bd you need a simple click on the Post Your Ad button. Here you’ll get to represent your company by posting tvc. If you are not logged in then you should log in or Register as a first step of posting a tvc. Your TVC will go live just wait for approval of your tvc."}
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="summary" > 
                    {languageCheck() === 'bn' ?  
                        "publicmarket.com.bd-এ বিজ্ঞাপন ও টিভিসি কতক্ষণ থাকবে?" :  
                        "How Long Do Ads & TVCs Stay On publicmarket.com.bd?"}
                    </summary>
                    <div className="faq__content">
                        <p>  
                        {languageCheck() === 'bn' ?  
                        "বিজ্ঞাপন এবং টিভিসি 30 দিনের জন্য প্রদর্শিত হবে, তারপরে আপনি পরিষেবাটি চালিয়ে যেতে পুনর্নবীকরণ করতে পারেন।" :  
                        "Ads & TVCs will appear for 30 days, after that you can renew to continue the service."}
                        </p>
                    </div>
                </details>

                <details>
                    <summary className="summary" > 
                    {languageCheck() === 'bn' ?  
                        "কেন আমার বিজ্ঞাপন প্রত্যাখ্যান করা হয়েছে?" :  
                        "Why Has My Ad Been Rejected?"}
                    </summary>
                    <div className="faq__content">
                        <p>
                        {languageCheck() === 'bn' ?  
                        "সমস্ত বিজ্ঞাপন এবং টিভিসি ম্যানুয়ালি পর্যালোচনা করা হয়। যদি আমাদের পোস্ট করার নিয়ম লঙ্ঘন করে এমন কোনো বিষয়বস্তু বা ছবি থাকে, তাহলে বিজ্ঞাপনটি প্রত্যাখ্যান করা হবে। তারপর আপনার বিজ্ঞাপন অনুমোদন করার জন্য প্রয়োজনীয় পরিবর্তনগুলি পড়তে হবে যা আপনার ইমেলে পাঠানো হবে।" :  
                        "All of the ads and tvc are reviewed manually. If there is any content or image which violates our posting rules, then the ad would be rejected. Then you should read the changes needed to approve your ad which will be sent on your email."}
                        </p>
                    </div>
                </details>

                <details>
                    <summary className="summary" > 
                    {languageCheck() === 'bn' ?  
                        "publicmarket.com.bd এ বিজ্ঞাপন পোস্ট করার নিয়ম কি কি?" :  
                        "What Are The Rules For Posting Ads On publicmarket.com.bd?"}
                    </summary>
                    <div className="faq__content"> 
                        <p>
                        {languageCheck() === 'bn' ?  
                        "● একটি পণ্য বা পরিষেবা যা বাংলাদেশে অবৈধ" :  
                        "● A product or service that is illegal in Bangladesh"}  <br />
                            {languageCheck() === 'bn' ?  
                        "● একটি পণ্য বা পরিষেবা যা বাংলাদেশে অবস্থিত নয়" :  
                        "● A product or service which is not located in Bangladesh"}   <br />
                           {languageCheck() === 'bn' ?  
                        "● অবৈধ ফোন নম্বর বা ইমেল ঠিকানা" :  
                        "● Invalid phone Numbers or email addresses"}  <br />
                        {languageCheck() === 'bn' ?  
                        "● কোন অবাস্তব অফার" :  
                        "● Any unrealistic offers"}  <br />
                           {languageCheck() === 'bn' ?  
                        "● কলঙ্কজনক ভাষা, ছবি এবং বিষয়বস্তু" :  
                        "● Scandalous language, picture and content"}  <br />
                           {languageCheck() === 'bn' ?  
                        "● বর্ণনা এবং শিরোনাম যাতে প্রাসঙ্গিক বিষয়বস্তু নেই" :  
                        "● Description and title that does not contains relevant content "}  <br />
                           {languageCheck() === 'bn' ?  
                        "● যে ছবি অমিল, জাল বা অস্পষ্ট" :  
                        "● Picture which is Mismatched, fake or unclear"} <br />
                           {languageCheck() === 'bn' ?  
                        "● প্রথম ছবির জন্য টেক্সট (ব্র্যান্ড লোগো এবং পণ্য কোড ছাড়া)" :  
                        "● Text fo the First picture(except brand logo and product codes)"}  <br />
                           {languageCheck() === 'bn' ?  
                        "● একটি URL লিঙ্ক যা প্রাসঙ্গিক নয়।" :  
                        "● A URL Link which is not relevant."} <br /> 
                           {languageCheck() === 'bn' ?  
                        "● অন্যান্য বিজ্ঞাপনের মতো একই সামগ্রী রাখবেন না, 7 দিনের মধ্যে পুনরায় প্রকাশ করা হবে" :  
                        "● Don’t put same content as other ad, re-published within 7 days "}  <br />
                           {languageCheck() === 'bn' ?  
                        "● একাধিক বিজ্ঞাপন, ব্যানার এবং টিভিসি" :  
                        "● Multiple ads, banner & TVC"}
                             <br />{languageCheck() === 'bn' ?  
                        "● অন্য কোম্পানির পণ্য ও পরিষেবার নকল পণ্য বা প্রতিরূপ সংস্করণ।" :  
                        "● Counterfeit goods or replica versions of Others company's product & services."}  <br /> 
                        </p>
                    </div>
                </details>

                <details>
                    <summary className="summary" > 
                    {languageCheck() === 'bn' ?  
                        "আমার বিনামূল্যে পোস্টিং ভাতা কি?" :  
                        "What Is My Free Posting Allowance?"}
                    </summary>
                    <div className="faq__content">
                        <p>
                        {languageCheck() === 'bn' ?  
                        "সীমাহীন বিজ্ঞাপন পোস্ট অনুমোদিত তবে শেষটি অনুমোদিত হওয়া উচিত। একাধিক পোস্টিং সমাধানের জন্য আপনি আমাদের publicmarket.com.bd এর সাথে যোগাযোগ করতে পারেন। তবে স্পষ্টতই বিনামূল্যে নয়।" :  
                        "Unlimited ad posts are allowed but the last one should be approved. To solve multiple posting solutions you may contact our publicmarket.com.bd. But obviously not free."}
                        </p>
                    </div>
                </details>

                <details>
                    <summary className="summary" > 
                    {languageCheck() === 'bn' ?  
                        "কিভাবে একজন যাচাইকৃত নিয়োগকর্তা হবেন?" :  
                        "How To Become A Verified Employer?"}
                    </summary>
                    <div className="faq__content">
                        <p> 
                        {languageCheck() === 'bn' ?  
                        "ক্লায়েন্ট যারা গত 6 মাস ধরে publicmarket.com.bd-এ তাদের পণ্য বা পরিষেবা বিক্রি করছেন তারা যাচাইকৃত বিক্রেতা হওয়ার যোগ্য। তারা একটি যাচাইকৃত বিক্রেতা ব্যাজ পাবে। যাচাইকৃত বিক্রেতার কাছ থেকে কেনা মানে নিরাপদ উৎস থেকে কেনা। আমাদের দল বিক্রেতার ইমেল, ব্যবসার নাম এবং যোগাযোগের বিশদ বিবরণ নীচের নথি যাচাইকরণের সাথে যাচাই করবে: " :  
                        "Clients who have been selling their products or services on publicmarket.com.bd for the last 6 months are eligible to become a Verified Seller. They will get a Verified Seller Badge. Buying from Verified seller means buying from a secured source. Our team will verify seller’s email, business name and contact details with verifying documents below: "}
                        
                        <br />
                        {languageCheck() === 'bn' ?  
                        "a) বিক্রেতার জাতীয় পরিচয়পত্র এবং ব্যবসার ট্রেড লাইসেন্স।" :  
                        "b) The national ID of the seller and Trade License of the business."} <br />
                        {languageCheck() === 'bn' ?  
                        "a) সম্পত্তি দালালদের জন্য জাতীয় পরিচয়পত্র। publicmarket.com.bd কে নিরাপদ রাখতে আমরা এটা করি যেখানে ভোক্তাদের জানা উচিত যে তারা কোথায় পরিষেবা পাচ্ছেন।" :  
                        "b) National ID for property broakers. We do that to keep publicmarket.com.bd safe where consumers should know from where they are having service. "}
                        </p>
                    </div>
                </details>
            </div>
        </section>

        <br/>
        
        <Footer />
            
        </>
    );
};

export default Faq;