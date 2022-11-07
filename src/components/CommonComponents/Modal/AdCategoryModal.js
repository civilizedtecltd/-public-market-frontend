import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link, NavLink,useNavigate } from "react-router-dom";
import { languageCheck } from "../../../helpers/Helpers";
import { getDistrictAction, getDivisionAction } from "../../../redux/action/coreAction";
import {getAdCategoryAction, getAdSubCategoryAction} from "../../../redux/action/userProfileAction/profileAdAction";
import { getAdCategory, getAdCategoryItems, getAdSubCategories, getAdSubCategoryItems } from "../../../Utilities/Utilities";

const AdCategoryModal = ({locationRoute, adCategorySelect}) => {
    const dispatch = useDispatch();

    let navigate = useNavigate();
 
    const [adCategoryName, setAdCategoryName]= useState('');
    const [adCategoryId, setAdCategoryId]= useState('');
    const [subCategoryName, setSubCategoryName]= useState('');
    const [subCategoryId, setSubCategoryId]= useState('');
    const [closeModal, setCloseModal]= useState(true);
    // const [activesDivision, setActivesDivision]= useState('');
    // const [activesDistrict, setActivesDistrict]= useState('');
 
    const activesAdCategory = getAdCategory();
    const activesSubCategory = getAdSubCategories();
     
    // call all reducre
    const { getAllAdsCategory } = useSelector(state => state.getAdCategoryReducer)
    const { getAllAdsSubCategory }  = useSelector(state => state.getAdSubCategoryReducer)

    useEffect(() => {
        if(getAllAdsCategory){
            dispatch(getAdCategoryAction())
        }
    }, [dispatch]);

    useEffect(() => { 
     dispatch(getAdSubCategoryAction()) 
    }, [dispatch]);

    const handleAdCategory = (adCategory) => {
        localStorage.setItem('adCategory',JSON.stringify(adCategory))
        setAdCategoryId(adCategory?.id);
        setAdCategoryName(adCategory?.name);
        setCloseModal(true)
        // setActivesDivision(division?.id)
    }
    const closeModalBtn = () =>{
        setAdCategoryName([]);
        setAdCategoryId([])
        setSubCategoryName([])
        setSubCategoryId([])
        setCloseModal(false)
    }
    const routeJobPage = (subCategory) =>{
        const locationRouteHave = locationRoute ? locationRoute : ''
        navigate(locationRouteHave)
        localStorage.setItem('subCategory',JSON.stringify(subCategory))
        //   setActivesDistrict(district?.id)
    }
    const getAllAdsCategoryLocal = getAdCategoryItems();
    const getAllAdsSubCategoryLocal = getAdSubCategoryItems();

    const adSubCategoryItems = getAllAdsSubCategoryLocal?.filter((adSubCategoryItem) =>  adSubCategoryItem.ad_category === adCategoryId)
   



    const myRef = useRef(null); 
    const executeScroll = () =>{
        setTimeout(()  => {
            myRef.current.scrollIntoView();
        },400)
    }

    return (
        <>
            <div className="modal  fade" id="ad__category" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog location__width">
                    <div className="modal-content location__width">
                        {/* <div className="modal-header"> 
                        <h5 className="modal-title" id="staticBackdropLabel">EditSelectField a job</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                        <div className="modal-body">
                            <div className="justify-content-between align-items-center d-flex">
                                <div className="row">
                                    {/* <div className="col-md-6">EditSelectField City or Division</div>
                               <div className="col-md-6">EditSelectField City or Division</div> */}
                                </div>
                                <button onClick={handleAdCategory} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="row">
                                <div className="col-md-6 modal__content__scroll">
                                    <h4 style={{fontSize:'18px'}} className="category__title"> 
                                    {languageCheck() === 'bn' ? "ক্যাটাগরি নির্বাচন করুন" : "Select  Category" }</h4>
                                    <div className="all__location category__all">
                                        {getAllAdsCategoryLocal && getAllAdsCategoryLocal?.map((adCategory,i) => (
                                            <div onClick={() => handleAdCategory(adCategory)}
                                                 className={activesAdCategory?.id === adCategory?.id?"location__active justify-content-between d-flex all__location":"justify-content-between d-flex all__location"}
                                                 key={i}  >
                                                <p onClick={executeScroll} >{adCategory?.name}</p>
                                                <i className="fa fa-arrow-right"></i>
                                            </div>
                                        ))}
                                    </div>  
                                </div>   
                                {!adCategoryName ? "" : <div className="modal__content__border" > 
                                 <hr />
                                </div> } 
                                <div ref={myRef} className={!adCategoryName ? "col-md-6 district__select" :"col-md-6 district__select modal__content__scroll"}>
                                    {adCategoryName ? <>
                                        {!closeModal ? " " :<h4  > 
                                        {languageCheck() === 'bn' ? 
                                         <><p style={{color:'black',fontWeight:'bold'}}><span style={{color:'#ff4367'}}> {adCategoryName}</span> মধ্যে একটি সাব-ক্যাটাগরি নির্বাচন করুন</p></>  : 
                                        <> <p style={{color:'black',fontWeight:'bold'}}>Select a Sub-Category within  <span style={{color:'#ff4367'}}> {adCategoryName}</span></p></>   }
                                        </h4>} 
                                         
                                        <div className="all__job_category">
                                            {adSubCategoryItems && adSubCategoryItems?.map((adSubCategory,i) => (
                                                <p
                                                    data-bs-toggle={adCategorySelect?"":"modal"} data-bs-target="#all__loacation"
                                                    className={activesSubCategory?.id === adSubCategory?.id?"location__active ":""}
                                                    onClick={() => routeJobPage(adSubCategory)} key={i} data-bs-dismiss="modal" aria-label="Close" >
                                                    {adSubCategory?.name}
                                                </p>))}
                                        </div></>: " "}
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdCategoryModal;