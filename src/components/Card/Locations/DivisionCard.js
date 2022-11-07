import React,{useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {languageCheck, titlecConvertToSlug} from '../../../helpers/Helpers';

const DivisionCard = ({allData,allAdCountCategory}) => { 
  
    const adCategoryCountLocation =  
    allAdCountCategory && allAdCountCategory?.filter((allAd) => allAd?.division === allData?.id)
   
    // const totalLength = useRef();
    // <span ref={totalLength} value={adCategoryCountLocation?.length}
    //                 >{adCategoryCountLocation?.length}</span>
    // console.log(totalLength?.current?.value);
     
 
    
    return (  
        <>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="single_locations mt-30">
             <Link to={{pathname: "/" + titlecConvertToSlug(allData?.name)+"/districts/"+allData?.id+"/"}} >
                <div className="locations_image"><img src={allData?.image} alt="Locations" /></div>
                </Link>
                <div className="locations_content">
                    <h5 className="title"> 
                        <Link  to={{pathname: "/" + titlecConvertToSlug(allData?.name)+"/districts/"+allData?.id+"/"}}  >
                            <i className="far fa-map-marker-alt"></i>{allData?.name}
                        </Link>
                    </h5>
                     
                    <Link className="view" state={{type: 'division',id: allData?.id}}
                     to={{pathname:'/allads/'+titlecConvertToSlug(allData?.name)+"/districts/categories/sub-categories"}}  >
                        {languageCheck() === 'bn' ? 
                        "এখানে সব বিজ্ঞাপন দেখুন" : 
                        "View All Ads Here"} <i className="fa fa-angle-right">  </i></Link>
                    <p>{allData?.published_ad_count} {" "}
                    {languageCheck() === 'bn' ? 
                    "বিজ্ঞাপন এই অবস্থানে পোস্ট" : 
                    "ads posted in this location"} </p>
                </div>
            </div>
        </div> 
        </>
    );
};

export default DivisionCard;