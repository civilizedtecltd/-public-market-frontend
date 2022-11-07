import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'; 
import { languageCheck, titlecConvertToSlug } from "../../helpers/Helpers";
import {  getMyJobAction, postJobDeleteAction } from "../../redux/action/userProfileAction/profileJobAction";
import PaginateCustom from '../Paginate/PaginateCustom';

const MyAccountJobCard = ({data}) => { 
      
       
    return (  
        <>   
            <div className="my__account__card"  >
                    <div className="my__item d-flex"  >
                        <div className="item__thumb mr-3"> 
                            <img src={data?.company_logo} 
                            style={{height:"80px",width:'150px'}}
                                alt="" />
                        </div>
                        <div className="item__content">
                            <p style={{fontWeight:'bold',color:'black'}} className="item__account">{data?.job_title}</p>
                            <p style={{fontSize:'13px',color:'#ff4367',fontWeight:'bold'}} className="item__loaction">{data?.company_name}</p>
                            <p style={{fontWeight:'bold',color:'black'}} className="item__info">Tk {data?.salary_start_price} - {data?.salary_end_price}</p>
                        </div> 
                    </div>  

                <div className="row justify-content-between">
                
                    <div className="is__edit col-md-6">
                        {data?.is_editable === false ? <button  disabled
                        className='btn btn-primary mt-3 mr-3'
                        style={{color:'white'}} >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</button> : 
                        <Link to={"/my/job/update/"+data?.id+"/"} 
                        style={{color:'white'}} className='btn btn-primary mt-3 mr-3' >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</Link>} 
                        <Link to={"/job/details/"+titlecConvertToSlug(data?.job_title)+"/"+data?.id+"/"}
                        style={{color:'white'}} className='main__btn__mini mt-3' >{languageCheck() === 'bn' ? 'দেখুন':"view"}</Link> 
                    </div>


                     <div className="is__pay col-md-6 text-right">
                     { data?.is_paid === false ? <Link to={"/payment/"+data?.id+'/'}
                     className='btn btn-primary mt-3 mr-3'
                      style={{color:'white'}} >{languageCheck() === 'bn' ? 'এখন পরিশোধ করুন':"Pay Now"}</Link> : ""
                      } 
                    </div>  
              



                </div>


             
            </div>  
        </>
    );
};

export default MyAccountJobCard;