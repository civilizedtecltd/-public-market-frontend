import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import { languageCheck } from "../../../helpers/Helpers";
import { getJobCategoryAction } from "../../../redux/action/userProfileAction/profileJobAction";
import { patchPastEmploymentsAction,deletePastEmploymentsAction } from "../../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction";
import { getProfileSettingAction } from "../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import { getJobCategoryItems, isInvalid } from "../../../Utilities/Utilities";
import DeleteModal from "../../DeleteComponents/DeleteModal";

const PastEmployment = ({getData}) => {  
     const [formHide,setFormHide]= useState(false); 
     const showForm = () =>{
        setFormHide(!formHide)
     } 
   
     const navigate = useNavigate();  
     const dispatch = useDispatch();      
     const [company_name, setCompanyName] = useState(getData?.company_name);  
     const [past_job, setPastJob] = useState(getData?.past_job);  
     const [start_date, setStartDate] = useState(getData?.start_date);  
     const [end_date, setEndDate] = useState(getData?.end_date);  
     const [about_job, setAboutJob] = useState(getData?.about_job); 

     const [companyNameShow,setCompanyNameShow] = useState(getData?.company_name)
    //    call all data in allofEidtData
    const AllOfEditData = () => {     
    setCompanyName(getData?.company_name); 
    setPastJob(getData?.past_job); 
    setStartDate(getData?.start_date); 
    setEndDate(getData?.end_date);   
    setAboutJob(getData?.about_job);      
    }   
    //    call all useEffact action
    useEffect(() => {  
    if(getData)  {   
    AllOfEditData();  
    }  
    }, [getData]);   
        
     const { profileData } = useSelector(state => state.getProfileSettingReducer)      
     const { patchPastEmployments } = useSelector(state => state.patchPastEmploymentsReducer)      
                               
     useEffect(() => {   
         dispatch(getProfileSettingAction()) 
     }, []); 
     useEffect(() => {   
         if(patchPastEmployments){
            setCompanyNameShow(company_name) 
         }
    }, [patchPastEmployments]); 
 
     // job Category load Data
     const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer)   
     const jobCategoryItemLocal = getJobCategoryItems();
      useEffect(() => {      
          if(isInvalid(jobCategoryItemLocal)){
             dispatch(getJobCategoryAction()) 
          }  
      }, [dispatch,jobCategoryItem])  
 
     const updateAdditionalProfile = (e) => { 
         e.preventDefault();    
         const updateId = getData?.id;
         const formdata = new FormData(); 
         formdata.append("user", profileData?.id);    
         formdata.append("company_name", company_name);    
         formdata.append("past_job", past_job);    
         formdata.append("start_date", start_date);    
         formdata.append("end_date", end_date);    
         formdata.append("about_job", about_job); 
         dispatch(patchPastEmploymentsAction(formdata,navigate,updateId))  
     }  
     
     const deleteForm = (id) => {
       if(id){
           localStorage.setItem('deleteItem',id)
       } 
     }
     const confirmDelete = () => {
        const id = localStorage.getItem("deleteItem")
        dispatch(deletePastEmploymentsAction(id)) 
     }

     
    return (
        <>         
               <div className="row" >
                  <div className="col-md-6 col-sm-6 col-6"> 
                        <h5 className="mt-2">{companyNameShow}</h5> 
                        </div>   
                        <div className="col-md-6 col-sm-6 col-6"> 
                        <div className="profile__button text-right">  
                        <div className="profile__button text-right"> 
                            <button type="submit"
                            data-bs-toggle="modal" data-bs-target="#delete_modal"
                            onClick={() => deleteForm(getData?.id)}
                            className="main__btn__mini mr-3">  
                            {languageCheck() === 'bn' ? "মুছে ফেলুন":"Delete"}
                            </button>
                        <button type="submit" onClick={showForm} className="main__btn__mini bg-info"> 
                        <i className={formHide?"fa fa-minus fa_custom_card"
                        :"fa fa-plus fa_custom_card"}
                        ></i></button> 
                        </div>
                        </div>
                    </div> 
                   </div> 
                      <hr />     

                     {formHide ? <form >    
                        <p className='mb-3' >   
                        {languageCheck() === 'bn' ?
                         "আপনার আগের চাকরির বিবরণ যোগ করুন":
                         "Add  details of your previous jobs"} </p>
                        <div className="row mt-3">
                        <div className="col-md-6">  
                        <div className="form-group mt-2">
                            <label 
                            htmlFor="company_employer" 
                            className="control-label"> 
                            {languageCheck() === 'bn' ? "কোম্পানি / নিয়োগকর্তা":"Company / Employer"}
                            </label>
                            <input 
                            required 
                            type="text" 
                            name="name" 
                            value={company_name} 
                            onChange={(e) => setCompanyName(e.target.value)} 
                            id="company_employer" 
                            className="form-control"
                            placeholder={languageCheck() === 'bn' ? "কোম্পানি / নিয়োগকর্তা":"Company / Employer"} />
                            {/* <span style={{color:'red'}}>{postPastEmploymentsError?.company_name?.map((error)=>(error?.message))}</span>  */} 
                        </div>
                        <div className="form-group mt-2"> 
                            <label htmlFor="start__data" className="control-label">
                             {languageCheck() === 'bn' ? "শুরুর তারিখ":"Start Date"} 
                            </label>
                            <input 
                            required 
                            type="date" 
                            name="job_title"
                            value={start_date} 
                            onChange={(e) => setStartDate(e.target.value)}  
                            id="start__data" 
                            className="form-control"
                            />
                        {/* <span style={{color:'red'}}>{postPastEmploymentsError?.start_date?.map((error)=>(error?.message))}</span>  */}  
                        </div>  

                        </div>
                    <div className="col-md-6">
                        <div className="form-group mt-2">  
                        <div className="form-group"> 
                            <label htmlFor="current_job" className="control-label">
                              {languageCheck() === 'bn' ? "বিগত চাকরি":"Past job"}
                             </label>
                            <select required value={past_job} onChange={(e) => setPastJob(e.target.value)}  name="category_id" id="current_job" className="form-control">
                                <option value="">{languageCheck() === 'bn' ? "বিগত চাকরি":"Past job"}</option>  
                                {jobCategoryItemLocal?.map( (jobCatepositions)=>(
                                    <option key={jobCatepositions?.id} value={jobCatepositions?.name}> {jobCatepositions?.name}</option>
                                ))}
                            </select>  
                                {/* <span style={{color:'red'}}>{postPastEmploymentsError?.past_job?.map((error)=>(error?.message))}</span>  */}  
                        
                        </div>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="end__data" className="control-label">  
                            {languageCheck() === 'bn' ? "শেষ তারিখ":"End Date"}
                            </label>
                            <input 
                            required 
                            type="date" 
                            name="job_title" 
                            value={end_date} 
                            onChange={(e) => setEndDate(e.target.value)} 
                            id="end__data" 
                            className="form-control" />
                        </div>  
                    {/* <span style={{color:'red'}}>{postPastEmploymentsError?.end_date?.map((error)=>(error?.message))}</span>  */}  
                        
                    </div> 
                    </div>  
                    <div className="row mt-3">
                        <div className="col-md-12"> 
                        <div className="form-group">  
                            <label htmlFor="about_the_job" className="control-label">
                            {languageCheck() === 'bn' ? "চাকরি সম্পর্কে (ঐচ্ছিক)":"About the job (optional)"}
                            </label>
                            <textarea 
                            required 
                            name="job_description" 
                            value={about_job} 
                            onChange={(e) => setAboutJob(e.target.value)} 
                            placeholder={languageCheck() === 'bn' ? "চাকরি সম্পর্কে (ঐচ্ছিক)":"About the job (optional)"}
                            className="form-control" 
                            id="about_the_job" 
                            rows="3"></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                       <div className="col-md-12">  
                        <button type="button" onClick={updateAdditionalProfile} className="main-btn mr-4 bg-info">
                        {languageCheck() === 'bn' ? "সংরক্ষণ":"Save"}
                        </button>  
                        <button type="button" onClick={showForm} className="main-btn mr-4">
                        {languageCheck() === 'bn' ? "বাতিল করুন":"Cancel"}</button> 
                      </div> 
                    </div>
                    </form>   : ''}   

           <DeleteModal confirmDelete={confirmDelete} />
        </>
    );
};

export default PastEmployment;