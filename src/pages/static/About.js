import React from 'react'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 
import { languageCheck } from '../../helpers/Helpers';

import eCabLogo from '../../asset/frontend/assets/images/logo/logo2.png';
  

const About = () => {
  return (   
    <> 
     <Header />  
        <section className="location_area pt-40 pb-120 mb-5" id="about">
          <div className="container pt-60">
          <div className="row"> 
              <div className="col-lg-12">
                  <div className="section_title">
                      <h3 className="title"> {languageCheck() === 'bn' ? 'আমাদের সম্পর্কে' : "About"}</h3>
                  </div>
              </div>
          </div>
            
           <div className="post_form mt-20"> 
              <div className="row justify-content-center">
                  <p className='p-2'>  
                  {languageCheck() === 'bn' ?
                    'publicmarket.com.bd বাংলাদেশের একটি অনলাইন মার্কেটপ্লেস। এটি হল সবচেয়ে বড় ভার্চুয়াল শ্রেণীবদ্ধ বিজ্ঞাপন প্ল্যাটফর্ম, যেখানে ক্রেতা এবং বিক্রেতারা তাদের নতুন বা সেকেন্ড-হ্যান্ড পণ্য বিক্রি বা ক্রয় করে। publicmarket.com.bd এমন একটি প্ল্যাটফর্ম যেখানে আপনি প্রায় সবকিছুই কিনতে এবং বিক্রি করতে পারেন! আপনার কাছাকাছি ডিল খুঁজে পেতে অবস্থান নির্বাচক ব্যবহার করুন. publicmarket.com.bd তার ব্যবহারকারীদের কিছু নির্দিষ্ট পরিষেবা প্রদান করে যাতে তারা এই ওয়েবসাইটটিকে তাদের বৈধ বা অনুমোদিত পণ্য/বিষয়বস্তু বিক্রি বা ক্রয়ের জন্য একটি সাধারণ অঞ্চল হিসাবে ব্যবহার করতে পারে। publicmarket.com.bd হল ব্যক্তিগত টো-লেট, টিভিসি এবং চাকরির প্ল্যাটফর্মের জন্যও একটি জায়গা। নীচে বর্ণিত নিয়ম ও শর্তাবলী মেনে চলা সাপেক্ষে এটি দেশের প্রত্যেকের জন্য উপলব্ধ। তাই এই ওয়েবসাইট ব্যবহার করার আগে এই শর্তাবলী পড়ুন দয়া করে।' : 
                    "publicmarket.com.bd is an online marketplace in Bangladesh. It is the biggest virtual classified advertising platform, where buyers and sellers sell or buy their new or second-hand products. publicmarket.com.bd is a platform on which you can buy and sell almost everything! Use the location selector to find deals close to you. publicmarket.com.bd provides certain services to its users so that they can use this website as a common zone for selling or purchasing their lawful or permitted products/contents. publicmarket.com.bd is a place for personal To-let, TVC, and Jobs platforms also. It is available to everyone in the country subject to their compliance with the terms & conditions outlined below. Therefore please read these terms and conditions before using this website."}
                  </p>  
              </div>  
            </div>  

           
            <div className="row mt-4"> 
              <div className="col-lg-12">
                  <div className="section_title">
                      <h3 className="title"> {languageCheck() === 'bn' ? 'গর্বিত সদস্য' : "Proud Member Of"}</h3>
                  </div>
              </div>
          </div>

            <div className="post_form mt-20"> 
              <div className="row justify-content-center e_cab_logo">
                <div className="row">
                  <div className="col-md-3"> 
                  <img src={eCabLogo} alt="" height="200px" width="200px"  /> 
                  </div>
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

export default About;
