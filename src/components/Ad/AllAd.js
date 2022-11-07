import React from 'react'; 
import  Moment  from 'react-moment'; 
import { Link } from 'react-router-dom';
import { capitalizeFirst, languageCheck, titlecConvertToSlug } from '../../helpers/Helpers';

const AllAd = ({allData}) => { 
    return (
        <>
            <div className="single_ads_card ads_list d-sm-flex mt-30"> 
               <Link className="like" to={"/ad/details/"+titlecConvertToSlug(allData?.title)+"/"+allData?.id+"/"}> 
                <div className="ads_card_image">
                    {allData.image_1 ?   <img src={allData.image_1} className="ads_img" alt="ads" /> :   <img src={allData.resize_image[0].cardImage} className="ads_img" alt="ads" />  }
                  
                </div>
                </Link>
                 
                <div className="ads_card_content media-body">
                   <Link className="like" to={"/ad/details/"+titlecConvertToSlug(allData?.title)+"/"+allData?.id+"/"}> 
                    <div className="meta d-flex justify-content-between">
                        <p>
                            {capitalizeFirst(allData.title)}</p>
                         {/* <i className="fal fa-heart"></i>  */}
                    </div>
                     <p><i className="far fa-map-marker-alt"></i>{allData.address},  
                     {languageCheck() === 'bn' ? "বাংলাদেশ" : "Bangladesh"}  </p>
                    {/* <p></p><p><strong style={{margin: "0px",padding: "0px",fontFamily:"&quot;Open Sans&quot;, Arial, sans-serif",fontSize: "14px", textAlign: "justify"}}>Lorem Ipsum</strong><span style={{fontFamily: "&quot;Open Sans&quot, Arial, sans-serif",fontSize: "14px",textAlign: "justify"}}>&nbsp;is simply dummy text of the printing...</span></p> */}
                    <p><i className="fas fa-calendar"></i><Moment format="LL" >{allData?.created_at}</Moment></p>
                    <div className="ads_price_date d-flex justify-content-between">
                      <span className="price">{allData.price}৳</span>
                    </div>
                   </Link> 
                </div>  
         </div> 
        </>
    );
};

export default AllAd;