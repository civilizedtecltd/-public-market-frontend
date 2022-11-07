import React from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

const OurStrategy = () => {
  return (  
    <> 
     <Header /> 
        <section className="location_area pt-40 pb-120 mb-5" id="about">
      <div className="container pt-60">
          <div className="row">
              <div className="col-lg-12">
                  <div className="section_title">
                      <h3 className="title">
                       {languageCheck() === 'bn' ?  "আমাদের কৌশল" :  "Our Strategy"}
                      </h3>
                  </div>
              </div>
          </div>
          <div className="">
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title"> 
                      {languageCheck() === 'bn' ?  "publicmarket.com.bd এর কৌশল" :  "Strategy of publicmarket.com.bd"}
                      </h5>
                  </div>
                  <div className="row justify-content-center ">
                      <p>   
                      {languageCheck() === 'bn' ?  
                      "আমরা স্বচ্ছতায় বিশ্বাস করি এবং সেই কারণেই আমরা আমাদের কৌশল সম্পর্কে সম্পূর্ণ উন্মুক্ত। যাতে আপনি একজন গ্রাহক হিসাবে সহজেই আমাদের সম্পর্কে জানতে পারেন। publicmarket.com.bd সর্বদা বিপণন কৌশল পণ্য, মূল্য, স্থান, প্রচারের ভাড়া বা কেনার সমাধান প্রদানের মাধ্যমে গ্রাহক এবং বিক্রেতাদের মধ্যে সমস্ত চাহিদা পূরণে মনোযোগী এবং দৃঢ়প্রতিজ্ঞ। publicmarket.com.bd হল একটি অনলাইন মার্কেটপ্লেস যেখানে আপনি প্রায় যেকোনো কিছু কিনতে এবং বিক্রি করতে পারেন। যেহেতু সেরা ডিলগুলি সাধারণত আপনার নিজের শহরে বা আপনার নিজের রাস্তায় বসবাসকারী লোকেদের সাথে করা হয়, তাই publicmarket.com.bd-এ স্থানীয়ভাবে কেনা-বেচা করা সহজ। বাংলাদেশে publicmarket.com.bd জনপ্রিয় সেকেন্ড-হ্যান্ড, নতুন, ব্যবহৃত এবং অব্যবহৃত জিনিসগুলির একটি বিশাল ভাণ্ডার নিয়ে গর্ব করে, যা আপনি যা খুঁজছেন ঠিক তা সনাক্ত করা সহজ করে তোলে। সুতরাং, আপনি একটি গাড়ি, একটি ফোন, একটি বাড়ি, একটি কম্পিউটার বা অন্য কিছু খুঁজছেন না কেন, publicmarket.com.bd আপনাকে সেরা অফারটি খুঁজে পেতে সহায়তা করতে পারে ৷" :  
                      "We believe in transparency & that is why we're completely open about Our Strategy. So that you as a customer can easily learn about us as a company. publicmarket.com.bd is always focused & determined to fulfill all needs between customers and sellers by providing a rental or buying solution of marketing strategy product, price, place, promotion. publicmarket.com.bd is an online marketplace where you can buy and sell nearly anything. Because the best deals are typically made with people who live in your own city or on your own street, it's simple to buy and sell locally on publicmarket.com.bd. publicmarket.com.bd in Bangladesh boasts an enormous assortment of popular second-hand, new, used and unused things, making it simple to locate exactly what you're looking for. So, whether you're looking for a car, a phone, a house, a computer or anything else, publicmarket.com.bd can help you find the best offer."}
                      </p>  
                  </div> 
              </div> 
     
       
              <div className="post_form mt-20">
                  <div className="post_title">
                      <h5 className="title">
                      {languageCheck() === 'bn' ?  "মূল্য কৌশল" :  "Pricing Strategy"}
                      </h5>
                  </div>
                  <div className="row justify-content-center ">
                      <p>  
                      {languageCheck() === 'bn' ?  
                      "মূল্য হল সেই পরিমাণ যা পণ্যের সহায়তার জন্য ভোক্তার বিনিময়ের জন্য সেই মূল্যের সাথে তুলনীয় বা এটি পরিষেবা দেওয়া যেতে পারে। ঐতিহাসিকভাবে, বিক্রেতারা বিক্রি করে এবং ক্রেতারা পণ্য বা পরিষেবা কিনতে আগ্রহী হওয়ার অন্যতম কারণ হল মূল্য। publicmarket.com.bd মূল্য নির্ধারণের কৌশলটি পরিষেবার মান, ব্যবহারকারীর পছন্দ, সন্তুষ্টি, ক্রেতা এবং বিক্রেতার বাজারের চাহিদা, publicmarket.com.bd ওয়েবসাইট এবং অ্যাপস পরিষেবার ব্যবহারকারীদের উপর ভিত্তি করে নির্বাচন করা হয়।" :  
                      "Price is the quantity that is comparable to that value for the exchange of the consumer for the assistance of the product or it can be serviced. Historically, price is one of the foremost reasons why sellers sell and buyers are interested to buy the product or services. The publicmarket.com.bd pricing strategy is selected based on service value, user preference, satisfaction, market demand by the buyer and seller, users of the publicmarket.com.bd website and apps services."}
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

export default OurStrategy;
