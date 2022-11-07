import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';   
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';   
import AdsCategoryCard from '../components/Card/Ads/AdsCategoryCard';
import PaginateCustom from '../components/Paginate/PaginateCustom';
import axios from 'axios';
import { languageCheck } from '../helpers/Helpers';
import BannerAdShowTop from '../components/BannerAdComponets/BannerAdShowTop';
import BannerAdShowBottom from '../components/BannerAdComponets/BannerAdShowBottom';

const AllAdsCategorysPage = () => {   
    
     
    const [getAllData, setAllData] = useState('');  
 
    useEffect(() => { 
        const allAdCategoryApi = async () => {
            try {
                const response = (await axios.get('adpost/category/?limit=5000000000000000'))?.data
                if (response) {
                    setAllData(response)
                 }
            } catch (err) {
                console.log(err);
            }
        }  
        allAdCategoryApi();  
    }, []);
  
    const [allAdCountCategory,setAllAdCountCategory] = useState('')  
    useEffect(() => { 
        const allAdApi = async () => {
            try {
                const response = (await axios.get('adpost/?limit=5000000000000000'))?.data?.results
                if (response) {
                    setAllAdCountCategory(response)
                 }
            } catch (err) {
                console.log(err);
            }
        }  
        allAdApi();  
    }, [getAllData]);  
  
    
    
    return (
        <>
          <Header />
 
            <div className="ad-container container mt-80 pt-50">
                <BannerAdShowTop widthSize={"1110px"} heightSize={"317px"}/>
            </div>
            {/* <div className="header_content"> */}
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="content_wrapper">
                                    <h3 className="title"> 
                                    {languageCheck() === 'bn' ? 'বিজ্ঞাপন এর সমস্ত ক্যাটাগরি' : 'All Ad Categories'}</h3> 
                                    <p>
                                    {languageCheck() === 'bn' ? 
                                    'এখানে আপনি আপনার ইচ্ছার বিজ্ঞাপন এবং সমস্ত স্পেসিফিকেশন খুঁজে পেতে পারেন।' : 
                                    ' Here you can find your desire Ads and all specifications.'}
                                    </p>
                                    {/* <ul className="header_btn">
                                        <li> <Link to="/" className="main-btn" >See All</Link></li> 
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
              
                <section className="product_page pt-20 pb-120" id="job">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-12">
                                <nav className="breadcrumb__area"  >
                                    <ul style={{display:'flex'}} > 
                                        <li ><Link to='/' className='' > 
                                        {languageCheck() === 'bn' ? "হোম":"home"}</Link></li> 
                                        <li> 
                                        <Link to='/alladscategorys/'  
                                        className={"active"}><span>{">"}</span> 
                                        {languageCheck() === 'bn' ? "সমস্ত বিজ্ঞাপন ক্যাটাগরি":"All Ads Categorys"}
                                        </Link></li> 
                                    </ul>
                                </nav>
                            </div> 
 
                            {/* all job loop */}
                            <div className="category_wrapper d-flex flex-wrap justify-content-center pt-30" >
                            
                             {/* <AllAdsCategory />  */} 
                             {getAllData && getAllData?.map((allData,i) => (
                                <AdsCategoryCard 
                                key={i} 
                                allData={allData}
                                allAdCountCategory={allAdCountCategory}
                                /> 
                            ))}  
                            </div>  
                                
                            
                            <div className="col-lg-12 pt-80">
                                <div className="bottom-ad">
                                  <BannerAdShowBottom widthSize={"1110px"} heightSize={"240px"}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>   

             <Footer />
        </>
    );
};

export default AllAdsCategorysPage;