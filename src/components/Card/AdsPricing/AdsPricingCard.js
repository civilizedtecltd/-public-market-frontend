import React,{useState} from 'react';
import {capitalizeFirst, languageCheck, stringLimitShow} from "../../../helpers/Helpers"
const AdsPricingCard = ({allData}) => { 
  
    const [hideContent,setShowContent] = useState(false)
    const readMoreContent = (title) => {
       if(title){
        setShowContent(x => !x)
       }
    }

    return (
        <>
          <div className="col-lg-4 col-md-4 col-sm-6 mt-4">
            <div className="card" >
                <div className="card-body price_card_body">
                    <div className="price_header">
                        <h5 className="card-title text-center">{capitalizeFirst(allData?.title)}</h5>
                    </div>
                    <div className="price_body">
                        <p className="text-center"  onClick={() =>readMoreContent(allData?.title)} > 
                            {!hideContent ? capitalizeFirst(stringLimitShow(allData?.in_words_desc,70)) :
                             capitalizeFirst(stringLimitShow(allData?.in_words_desc,1000000))} {" "} 
                             {allData?.in_words_desc?.length > 70 ?<>
                              {!hideContent ? <i style={{color:'red',cursor:'pointer'}} className="fas fa-arrow-right mr-1 ml-2"></i>
                                : <i style={{color:'red',cursor:'pointer'}} className="fas fa-arrow-left mr-1 ml-2"></i> } 
                             </> : ""} 
                        </p>
                    </div>
                </div>
            </div>
          </div> 
        </>
    );
};

export default AdsPricingCard;