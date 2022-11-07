import React from 'react';
import { Link } from 'react-router-dom';
import {languageCheck, titlecConvertToSlug} from '../../../helpers/Helpers';

const DistrictCard = ({allData,allAdCountCategory, division}) => {

    const adCategoryCountLocation =  
    allAdCountCategory && allAdCountCategory?.filter((allAd) => allAd?.district === allData?.id)
     
  
    return (
        <>
            <div className="district-column">
                <div className="single_district text-center mt-30">
                    <div className="icon"> 
                    <img src={allData?.image}
                        alt="Locations" /> </div>
                    <div className="content">
                        <h4 className="district-title">{allData?.name}</h4>
                        <h6 className="district-p">  
                        {languageCheck() === 'bn' ? "মোট বিজ্ঞাপন:" : "Total Ads:"}
                        {adCategoryCountLocation?.length}</h6>
                    </div>
                    <Link className="view" state={{type: 'district', id: allData?.id, optionalId: allData?.division }}
                     to={"/allads/"+titlecConvertToSlug(division)+"/"+titlecConvertToSlug(allData?.name)+"/categories/sub-categories"} >
                   </Link>
                </div>
            </div>
        </>
    );
};

export default DistrictCard;