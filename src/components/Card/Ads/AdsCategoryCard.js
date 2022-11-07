import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'; 
import { languageCheck, titlecConvertToSlug } from '../../../helpers/Helpers';

const AdsCategoryCard = ({allData, allAdCountCategory}) => {

    const adCategoryCount = allAdCountCategory && allAdCountCategory?.filter((allAd) => allAd?.ad_category === allData?.id)

  
    return (
        <>
           <div className="category-column"> 
                <div className="single_category text-center mt-30">  
                     <Link   
                      state={{type: 'ad_category', id: allData?.id}}
                      to={{pathname:'/allads/divisions/districts/'+titlecConvertToSlug(allData?.name)+"/sub-categories"}}>
                      <div className="icon">
                        <img src={allData?.image}
                             alt="Locations" style={{width: "50px", height: "50px"}}/></div>
                      <div className="content">
                        <h6 className="title" style={{fontSize: "17px"}}>{allData?.name}</h6>
                        <p>{languageCheck() === 'bn' ? "মোট বিজ্ঞাপন:" : "Total Ads: "}  {adCategoryCount?.length}</p>
                      </div>  
                    </Link> 
                 </div>    
            </div>
        </>
    );
};

export default AdsCategoryCard;