import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'; 
import { deleteSingleTvcAction } from "../../redux/action/userProfileAction/profileTvcAction";
import Swal from 'sweetalert2';
import { languageCheck, titlecConvertToSlug } from "../../helpers/Helpers";

const MyAccountTvcCard = ({data}) => { 
    const videoRef = useRef();
     useEffect(() => {     
        videoRef.current?.load();
      }, [data?.video]); 
     
      
    return ( 
        <>   
         <div className="my__account__card"  >
            <div className="my__item d-flex p-2"  >
                <div className="item__thumb mr-5"> 
                <video width="150" height="100" ref={videoRef} controls >
                    <source  src={data?.video} type="video/mp4"  />
                    </video>   
                </div> 
                <div className="item__content">
                    <p style={{fontWeight:'bold',color:'black'}} className="item__account">{data?.title}</p>
                    <p style={{fontSize:'13px',color:'#ff4367',fontWeight:'bold'}} className="item__loaction">{data?.company_name}</p>
                    <p style={{fontWeight:'bold',color:'black'}} className="item__info">{data?.description}</p>
                </div>
            </div>
              
         
              <div className="row justify-content-between">
                   
                    <div className="is__edit col-md-6">
                    {data?.is_editable === false ? <button  disabled
                    className='btn btn-primary mt-3 mr-3'
                    style={{color:'white'}} >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</button> : 
                    <Link to={"/my/tvc/update/"+data?.id+'/'} 
                    className='btn btn-primary mt-3 mr-3'
                    style={{color:'white'}}  >{languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}</Link>}  
                       <Link to={"/alltvcs/details/"+titlecConvertToSlug(data?.title)+"/"+data?.id+'/'}
                        className='main__btn__mini mt-3 mr-3'
                        style={{color:'white'}} >{languageCheck() === 'bn' ? 'দেখুন':"view"}</Link>     
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

export default MyAccountTvcCard;