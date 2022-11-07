import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';   
import  Moment  from 'react-moment'; 

import pmImage from "../../../asset/frontend/assets/images/logo/small-logo.png"
import { capitalizeFirst, languageCheck, titlecConvertToSlug } from '../../../helpers/Helpers';

const AdsCard = ({allData}) => { 
    
     
    return ( 
        <>  
          <div className="col-lg-3 col-md-4 col-sm-6 ad__banner__card" style={{display: "flex", justifyContent: "center"}} >
            
            <Link to={"/ad/details/"+titlecConvertToSlug(allData?.title)+"/"+allData?.id+"/"}
             state={{type: 'ad_category', id: allData?.ad_category }}
             >
                <div className="single_ads_card card mt-30" >
                        <div className="ads_card_image custom_ad_card_for_home_page">
                          {allData.image_1 ? <img src={allData.image_1} className="ads_card_image_big"  alt="ads"/> : <img src={allData.resize_image[1].thumbnail} className="ads_card_image_big"  alt="ads"/>  }  
                                <span style={{position: 'absolute',
                                        height: '2rem',
                                        width: '5.5rem',
                                        top: '15px',
                                        left: '15px', 
                                        borderRadius: '7px'}}>
                        <img className="public-market-tag img-fluid" width="50px" height="50px" src={pmImage} alt="" /></span>
                       </div>
                    
                    <div className="ads_card_content">
                        <div className="meta d-flex justify-content-between">
                            <p> {capitalizeFirst(allData.title)}</p>  
                            {/* <i className="fal fa-heart"></i>  */}
                            </div>
                        {/* <h4 className="title"><a href="#">{allData?.uncommon_fields_json?.brand_name}</a> */}
                        {/* </h4> */}
                        <p><i className="far fa-map-marker-alt"></i>{allData.address.slice(0,12)}, 
                        {languageCheck() === 'bn' ?  "বাংলাদেশ" :   "Bangladesh"} </p>
                        {/* <p><i className="fas fa-eye"></i> 124 </p> */}
                        <p>
                            <i className="fas fa-calendar"></i><Moment format="LL" >{allData?.created_at}</Moment>
                        </p>
                        <div className="ads_price_date d-flex justify-content-between">
                            <span className="price">{allData.price}৳</span>
                        </div>
                    </div>
                </div>
                </Link>
            </div> 

        </>
    );
};

export default AdsCard;