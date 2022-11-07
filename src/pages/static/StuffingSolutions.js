import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';

const StuffingSolutions = () => {

    return (
        <>
         <Header />
         <section className="blog_details_page pt-40 pb-80" id="ProfessionalHelp">
            <div className="container pt-20 section_title">
             
                <h3 className="text-center mt-40 banner-ad-title"> 
                {languageCheck() === 'bn' ? "কর্মসংস্থান" :"Stuffing Solutions"}
                </h3>

                <div className="banner-ads-wrapper mt-10 mb-40 pt-30 pb-30"> 
                   <h4 className="mt-40 text-center ad-product-title"> 
                   {languageCheck() === 'bn' ? "publicmarket.com.bd স্টাফিং সলিউশনের মাধ্যমে নিয়োগ করা খুবই সহজ!" :"Hiring is so easy with publicmarket.com.bd STAFFING SOLUTIONS!"}</h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className="  banner-product-details mb-2">
                            <p className="p-2"> 
                            {languageCheck() === 'bn' ? 
                            "publicmarket.com.bd স্টাফিং সলিউশনের মাধ্যমে নিয়োগ করা খুবই সহজ!" 
                            :"Hiring from a pool of shortlisted candidates by publicmarket.com.bd based on your requirement."}  
                            </p>
                        </div>
                    </div>


                    <div className="text-center mt-5"> 
                      <Link to="/dashboard/postad/" className='main-btn'>  
                          {languageCheck() === 'bn' ? "চাকরির পোস্ট" :"Job Post"}
                      </Link>
                    </div>

                    
                    <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? "কিভাবে এটা কাজ করে" :"How it works"}</h4>
                    <div className="row mt-20 banner-product-wrapper ad-products-box  ">
                        <div className=" banner-product-details mb-2">
                            <p className="p-2">
                             {languageCheck() === 'bn' ? "আমরা আপনার প্রয়োজনীয়তা অনুযায়ী প্রার্থীদের খুঁজে বের করি এবং বাছাই করি" :"We find and shortlist candidates upto your requirements"}<br />
                             {languageCheck() === 'bn' ? "আপনি সেরা প্রতিভা পাবেন যা থেকে বেছে নেওয়া হয়েছিল" :"You’ll get the best talent which was chosen from"}<br />
                             {languageCheck() === 'bn' ? "একটি সাক্ষাত্কারের ব্যবস্থা করুন বা অংশগ্রহণ করুন এবং তারপর প্রার্থী(দের) নিয়োগ করুন!" :"Arrange or attend an interview and then hire the candidate(s)!"}
                            </p>
                        </div>
                    </div>
                    <h4 className="mt-40 text-center ad-product-title"> 
                    {languageCheck() === 'bn' ? "আপনার নিয়োগের যাত্রায় সময় এবং শ্রম বাঁচান" 
                    :"Save time and effort in your hiring journey"}</h4>

                    <div className="text-center mt-5">
                         <Link to="/dashboard/postad/" className='main-btn'> 
                         {languageCheck() === 'bn' ? "চাকরির পোস্ট" :"Job Post"}
                      </Link> 
                    </div>
                     
                   
                   
                  </div>
            </div>
        </section>  




         <Footer /> 
        </>
    );
};

export default StuffingSolutions;