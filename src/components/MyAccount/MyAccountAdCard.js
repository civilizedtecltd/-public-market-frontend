import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'; 
import { languageCheck, titlecConvertToSlug } from "../../helpers/Helpers";
import { postAdDeleteAction } from "../../redux/action/userProfileAction/profileAdAction";

const MyAccountAdCard = ({data}) => {
      
     
    return (
        <div>
             <div  className="my__account__card  " >
            <div className="my__item d-flex"  >
                <div className="item__thumb mr-3">
                    <img src={data?.image_1} 
                    style={{height:"80px",width:'150px'}}
                        alt="" />
                </div>
                <div className="item__content">
                    <p style={{fontWeight:'bold',color:'black'}} className="item__account">{data?.title}</p>
                    <p style={{fontSize:'13px',color:'#ff4367',fontWeight:'bold'}} className="item__loaction">{data?.price}</p>
                     <p style={{fontWeight:'bold',color:'black'}} className="item__info">{data?.description}</p>
                </div>
            </div>
             
 

             <div className="row justify-content-between">
            

                <div className="is__edit col-md-6">
                {data?.is_editable === false ? <button  disabled 
                className='btn btn-primary mt-3 mr-3'
                style={{color:'white'}} >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</button> : 
                <Link to={"/ad/edit/"+data?.id+'/'}
                    className='btn btn-primary mt-3 mr-3'
                style={{color:'white'}} >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</Link> }
            
                <Link to={"/ad/details/"+titlecConvertToSlug(data?.title)+"/"+data?.id+"/"}
                className='main__btn__mini mt-3 '
                style={{color:'white'}} >{languageCheck() === 'bn' ? 'দেখুন':"view"}</Link>
                </div>
                
                  <div className="is__pay col-md-6 text-right">
                      { data?.is_paid === false ? <Link to={"/payment/"+data?.id+'/'}
                     className='btn btn-primary mt-3 mr-3'
                      style={{color:'white'}} > 
                      {languageCheck() === 'bn' ? 'এখন পরিশোধ করুন':"Pay Now"}
                      </Link> : ""
                      } 
                  </div> 
 
                 </div> 
           
            
          </div>   
        </div>
    );
};

export default MyAccountAdCard;