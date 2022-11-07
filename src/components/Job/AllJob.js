import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import  Moment  from 'react-moment';
import {capitalizeFirst, languageCheck,stringLimitShow, titlecConvertToSlug} from "../../helpers/Helpers";

const AllJob = ({allJobsData}) => {
    return (
        <> 
               <div className="tab-content pt-3" id="myTabContent">
                <div className="tab-pane fade show active w-100" id="list" role="tabpanel" aria-labelledby="list-tab">
                    <div className="product_list">
                       <div className="single_ads_card ads_list d-sm-flex mt-30">
                            <div className="ads_card_content media-body single_ads_card_height justify-content-between">
                               
                               <div className="job__content_area">
                                 <div className="job__content__details">
                                  <div className="d-flex justify-content-between job__content__details__text">
                                    <h5><Link to={"/job/details/"+titlecConvertToSlug(allJobsData?.job_title)+"/"+allJobsData?.id+"/"} >{capitalizeFirst(allJobsData?.job_title)}</Link></h5>
                                  </div>
                                  <p>{capitalizeFirst(allJobsData?.company_name)}</p> 
                                  <p><i className="far fa-map-marker-alt"></i>{allJobsData?.Job_area}</p>
                                  <p><i className="fa fa-graduation-cap"></i>{allJobsData?.educational_qualification}</p> 
                                  <p><i className="fa fa-briefcase"></i> {allJobsData?.work_exp_in_years ? allJobsData?.work_exp_in_years+' Years' : "NA"} </p>
                                </div> 
                                </div>

                                <div className="job_image_area">
                                  <div className="img_company">
                                      <a target="_blank" href={allJobsData?.compny_website_link}>
                                      <img   src={allJobsData?.company_logo} alt="" />
                                      </a>
                                  </div>
                                  <div className="job_deadline"> 
                                    <span>  
                                    {languageCheck() === 'bn' ? "শেষ তারিখ:" : "Deadline:"}<Moment format="LL" >{allJobsData?.application_deadline}</Moment></span>
                                  </div> 
                                </div>
  
                            </div>
                        </div>  
                    </div>
                </div>
            </div> 
       </>
    );
};

export default AllJob;