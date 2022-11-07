import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from '../../helpers/Helpers';
import treadLicense from '../../asset/frontend/assets/images/pdf/Trade-Licence-of-PM-Expert-Ltd-Renewal.pdf'


const CompanyLegalInfo = () => {
  
    return (
        <>
         <Header />
         <section className="blog_details_page pt-40 pb-80" id="ProfessionalHelp">
            <div className="container pt-20 section_title">
                <div className="modal  fade" id="tradeLicenseImageShow" data-bs-backdrop="static"
                     data-bs-keyboard="false"
                     aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <embed src={treadLicense} frameborder="0" width="100%" height="600px"/>
                                <br/>
                                {/*<img src={treadLicense}/>*/}
                                {/*<iframe src={treadLicense} width="100%" height="600px"></iframe>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-center mt-40 banner-ad-title"> 
                {languageCheck() === 'bn' ? "কোম্পানির আইনি তথ্য" :"Company Legal Info"}
                </h3>
                <div className="banner-ads-wrapper mt-10 mb-40 pt-30 pb-30">
  
                    <div className="row mt-20 banner-product-wrapper ad-products-box ">
                        <div className="  banner-product-details  ">
                            <p className="pt-2 pb-2">
                            {languageCheck() === 'bn' ? 
                            "আমাদের publicmarket.com.bd পিএম এক্সপার্ট লিমিটেডের মালিকানাধীন এবং পরিচালিত। publicmarket.com.bd হল বাংলাদেশের সবচেয়ে বড় C2C - ভোক্তা থেকে ভোক্তা অনলাইন মার্কেটপ্লেস। এখানে publicmarket.com.bd ক্রমাগত ক্রেতা-বিক্রেতাদের কথা চিন্তা করে ক্রয়-বিক্রয় প্রক্রিয়া সহজ করার চেষ্টা করছে। publicmarket.com.bd এর স্বচ্ছতা এবং জবাবদিহিতার জন্য সমস্ত ব্যবহারকারীকে দায়বদ্ধ রাখতে প্রতিশ্রুতিবদ্ধ। publicmarket.com.bd-এ বাংলাদেশের সরকারি অফিস থেকে সমস্ত আইনি নথি রয়েছে যেমন," :
                            "Our publicmarket.com.bd is owned & operated by PM Expert Limited.  publicmarket.com.bd is Bangladesh’s largest C2C - Consumer to Consumer  online marketplace. Here the publicmarket.com.bd is constantly trying to make  the buying and selling process easier by thinking about the buyer and sellers.  publicmarket.com.bd is committed to holding all users accountable for its  transparency and accountability. publicmarket.com.bd has all legal documents  from Government office of Bangladesh like,"}
 
                             {languageCheck() === 'bn' ? "ট্রেড লাইসেন্স নং:- 051660/2022," :"Trade license No:- 051660/2022,"} <span data-bs-toggle="modal" data-bs-target="#tradeLicenseImageShow"><i className="fas fa-eye show"></i> </span><br />
                                {languageCheck() === 'bn' ? "ইনকর্পোরেশনের সার্টিফিকেট নং:- C-174938/2021," :"Certificate of Incorporation No:- C-174938/2021,"} <br />
                             {languageCheck() === 'bn' ? "কপিরাইট রেজিস্ট্রেশন নম্বর:- CRA-25292," :"Copyright Registration No:- CRA-25292,"} <br />
                             {languageCheck() === 'bn' ? "ট্রেডমার্ক আবেদন নং:- BD/H/0001/267124," :"Trademark Application No:- BD/H/0001/267124,"} <br />
                             {languageCheck() === 'bn' ? "ডিজিটাল বিজনেস আইডেন্টিফিকেশন নম্বর (DBID):- নিবন্ধনের জন্য আবেদন করা হয়েছে এবং" :"Digital Business Identification Number (DBID) :- Applied for Registration and TIN"} <br /> 
                             {languageCheck() === 'bn' ? "টিআইএন নম্বর:- 334159200919," :"No:- 334159200919,"} <br />
                             {languageCheck() === 'bn' ? "বিন নম্বর:- 004474509-0202।" :"BIN No:- 004474509-0 "} <br />  
                             {languageCheck() === 'bn' ? "ই-ক্যাবের সদস্য, আইডি: 1763" :"Member of E-cab, ID: 1763"} <br />  
                             {languageCheck() === 'bn' ? "বেসিসের সদস্য, আইডি: AS-22-09-002" :"Basis membership, ID: AS-22-09-002"} <br />
                             {languageCheck() === 'bn' ? "সদস্য থেকে: Sep 30, 2022" :"Member Since: Sep 30, 2022"} <br />
                             {languageCheck() === 'bn' ? "নিবন্ধিত ঠিকানা: মদিনা টাওয়ার (৪র্থ তলা), বাড়ি নং- ৪৬৪/১, পশ্চিম  " :"Registered Address: Madina Tower (4Th Floor), House No.- 464/1, West "} <br />
                             {languageCheck() === 'bn' ? "রামপুরা, ডিআইটি রোড ঢাকা ১২১৯।" :"Rampura, DIT Road Dhaka 1219."} <br />
                             {languageCheck() === 'bn' ? "কর্পোরেট ঠিকানা: TA-134 (2য় তলা), বৈশাখী সরণী , মধ্য বাড্ডা গুলশান-01," :"Corporate Address: TA-134(2nd Floor), Boishakhi Shoroni, Middle Badda "} <br />
                             {languageCheck() === 'bn' ? "ঢাকা-1212।" :"Gulshan-01, Dhaka-1212."} <br />
                             {languageCheck() === 'bn' ? "আমরা সর্বদা সাধারণ জনগণকে পরামর্শ দিই যে ক্রেতা এবং বিক্রেতাদের নিরাপত্তা মানে সব ধরণের ব্যবহারকারী। আমাদের লক্ষ্য বাংলাদেশে নতুন কর্মসংস্থান সৃষ্টি করা।" :
                             "We always advise the general public that the safety of buyers and sellers means all kinds of users. Our goal is to create new employment in Bangladesh."} </p>
                        </div>
                    </div>

                   
                   
                  </div>
            </div>
        </section> 




         <Footer /> 
        </>
    );
};

export default CompanyLegalInfo;