import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';  
import { useNavigate } from "react-router-dom";
import { languageCheck } from "../../../helpers/Helpers";
import { getJobPositionAction } from "../../../redux/action/userProfileAction/profileJobAction";
 
const CategoriesModal = ({categorySelect,categoryParam,categoryParamRoute,jobCategorySave,adBannerCategorySave,setActivesCategory,activesCategory,categoryName,setShowCategoryName,setCategory}) => { 
    
     
    const dispatch = useDispatch();  
    let navigate = useNavigate();   
    const [searchkey,setsearchkey] = useState([]);   
 
    // filter category
    const filterCategory = categoryParam && categoryParam?.filter(category => category?.name?.toLowerCase().includes(searchkey))
    const categoryall = !categoryParam?'':filterCategory  
  
 
    const categoryId = (category) => {    
        const categoryRouteHave = categoryParamRoute ? categoryParamRoute : '' 
        navigate(categoryRouteHave) 
        if(jobCategorySave){  
            setShowCategoryName(category?.name)
            localStorage.setItem('jobCategory',JSON.stringify(category)) 
        } 
        if(adBannerCategorySave){ 
            setCategory(category?.id)
            localStorage.setItem('adBannerCategory',JSON.stringify(category))  
        }
         setActivesCategory(category)  
        dispatch(getJobPositionAction(category?.id)) 
    }    
      

    return (
        <>
           <div className="modal fade mt-5" id="job__category" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog px-5 modal-dialog-scrollable">
                 <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                        {languageCheck() === 'bn' ? "একটি" : "Select a" }{" "}{categoryName} {" "}
                        {languageCheck() === 'bn' ? "ক্যাটাগরি নির্বাচন করুন" : "Category" }  </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <div className="form-group"> 
                        <input  onChange={(e)=>{setsearchkey(e.target.value)}}
                        value={searchkey}  type="text"  className="form-control" /> 
                       </div>   
                       <div className="all__job_category"> 
                        {categoryall && categoryall?.map((category,i) => (  
                        <p 
                        className={activesCategory?.id === category?.id? "location__active ":""}
                        onClick={() => categoryId(category)} data-bs-toggle={categorySelect?"":"modal"} data-bs-target="#all__loacation"  
                        data-bs-dismiss="modal" aria-label="Close" key={i}  >{category?.name}</p>))}   
                        </div>
                      </div> 
                   </div>
               </div>
            </div>  
        </>
    );
};

export default CategoriesModal;