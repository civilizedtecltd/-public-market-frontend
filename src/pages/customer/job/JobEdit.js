import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"   
import { getDivisionAction,getDistrictAction } from '../../../redux/action/coreAction'; 
import { getJobCategoryAction ,getJobTypeAction,getJobEducationalAction,postJobUpdateAction,getJobEditAction,getJobPositionAction} from '../../../redux/action/userProfileAction/profileJobAction';
import { useNavigate,useParams } from 'react-router-dom'; 
import { getProfileSettingAction } from './../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction';
import CategoriesModal from "../../../components/CommonComponents/Modal/CategoriesModal";
import DivisionAndDistrictModal from "../../../components/CommonComponents/Modal/DivisionAndDistrictModal";
import { getDistrict, getDivision, getJobCategory, getJobCategoryItems, isInvalid } from "../../../Utilities/Utilities";


import {languageCheck} from "../../../helpers/Helpers";
import { useForm } from "react-hook-form";
import { errorMessage } from "../../../Hooks/MessageHandling";

const JobEdit = () => {  

  const { register, handleSubmit, watch, formState: { errors }  } = useForm();


    const jobEditId = useParams();  
    let navigate = useNavigate();     
    const [jobcategoryid, setJobCategoryid]= useState('');   
    const dispatch = useDispatch();  

    // call sessionStorage data for edit
    const categorySessionStorage = getJobCategory();
    const divisionSessionStorage = getDivision();
    const districtSessionStorage = getDistrict();
      
     // call profile id
     const { profileData } = useSelector(state => state.getProfileSettingReducer);   
  
     useEffect(() => {  
       dispatch(getProfileSettingAction())
     }, [dispatch])
 
    // call all reducers
    const { getsinglejob } = useSelector(state=> state.getJobEditReducer)  
    const { divisionItem } = useSelector(state => state.getDivisionReducer)  
    const { districtItem }  = useSelector(state => state.getDistrictReducer)  
    const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer)  
    const { jobposition } = useSelector(state => state.getJobPositionReducer)  
    const { jobtype }  = useSelector(state => state.getJobTypeReducer)   
    const { jobeducational }  = useSelector(state => state.getJobEducationalReducer)  
    const { loading } = useSelector(state => state.postJobUpdateReducer) 
   
    const jobCategoryItemLocal =  getJobCategoryItems();
    useEffect(() => {      
        if(isInvalid(jobCategoryItemLocal)){
           dispatch(getJobCategoryAction()) 
        } 
    }, [dispatch,jobCategoryItem])  
   
    // call all useStata for submite data
    const [category,setCategory] = useState('')  
    const [division,setDivision] = useState('')
    const [district,setDistrict] = useState('')
    const [job_title,setJobTitle] = useState('')
    const [number_of_vacancies,setNumberOfVacancies] = useState('')
    const [is_na_number_of_vacancies,setIsNaNumberOfVacancies] = useState('')
    const [job_position,setJobPosition] = useState('')
    const [job_type,setJobType] = useState('')
    const [application_deadline,setApplicationDeadline] = useState('')
    const [work_exp_in_years,setWorkExpInYears] = useState('')
    const [is_na_work_exp_in_years,setIsNaWorkExpInYears] = useState('')
    const [is_freshers,setIsFreshers] = useState('')
    const [educational_qualification,setEducationalQualification] = useState('')
    const [job_description,setJobDescription] = useState('')
    const [Job_area,setJobArea] = useState('')
    const [application_receiving_option,setApplicationReceivingOption] = useState('')
    const [salary_start_price,setSalaryStartPrice] = useState('')
    const [salary_end_price,setSalaryEndPrice] = useState('')
    const [photograph_in_resume,setPhotographInResume] = useState('')
    const [cover_letter,setCoverLetter] = useState('')
    const [company_name,setCompanyName] = useState('')
    const [compny_website_link,setCompnyWebsiteLink] = useState('')
    const [company_logo,setCompanyLogo] = useState('')
    const [companylogopreview,setCompanyLogoPreview] = useState('')
 
   
    
    const handleposition = (event) => {
      const jobpositions = event.target.value;
      setJobPosition(jobpositions); 
    }  
    const handletype = (event) => {
      const jobtypes = event.target.value;
      setJobType(jobtypes);  
    }  
    const handleeducationals = (event) => {
      const jobeducationalsids = event.target.value;
      setEducationalQualification(jobeducationalsids); 
    }   
     
  
   const submitJob = (e) =>{
      e.preventDefault();   
      const formdata = new FormData(); 
      formdata.append("user", profileData.id); 
        if(categorySessionStorage?.id !== category){
            formdata.append("category", categorySessionStorage?.id); 
        }  
        if(!categorySessionStorage?.id){
            formdata.append("category", category)
        } 
   
        if(divisionSessionStorage?.id !== division){
            formdata.append("division", divisionSessionStorage?.id); 
        } 
        if(!divisionSessionStorage?.id){
           formdata.append("division", division)
        }   
 
        if(districtSessionStorage?.id !== district){
            formdata.append("district", districtSessionStorage?.id);   
        } 
        if(!districtSessionStorage?.id){
            formdata.append("district", district);  
        }   

      formdata.append("job_title", job_title);  
      formdata.append("number_of_vacancies", number_of_vacancies);  
      formdata.append("is_na_number_of_vacancies", is_na_number_of_vacancies);  
      formdata.append("job_position", job_position);  
      formdata.append("job_type", job_type);  
      formdata.append("application_deadline", application_deadline);  
      formdata.append("work_exp_in_years", work_exp_in_years);  
      formdata.append("is_na_work_exp_in_years", is_na_work_exp_in_years);   
      formdata.append("is_freshers", is_freshers);   
      formdata.append("educational_qualification", educational_qualification);   
      formdata.append("job_description", job_description);  
      formdata.append("Job_area", Job_area);  
      formdata.append("application_receiving_option", application_receiving_option);  
      formdata.append("salary_start_price", salary_start_price);  
      formdata.append("salary_end_price", salary_end_price);  
      formdata.append("photograph_in_resume", photograph_in_resume);  
      formdata.append("cover_letter", cover_letter);  
      formdata.append("company_name", company_name);  
      formdata.append("compny_website_link", compny_website_link); 
      if(companylogopreview){ 
        formdata.append("company_logo", company_logo) 
      } 
      dispatch(postJobUpdateAction(formdata,jobEditId,navigate))   
       
   }  
   
   const [getShowCategoryName,setShowCategoryName] = useState('')  
   const [getShowDistrictName,setShowDistrictName] = useState('')  
 
//    call all data in allofEidtData 
   const AllOfEditData = () => {   
        setShowCategoryName(getsinglejob?.category?.name);  
        setShowDistrictName(getsinglejob?.district?.name);  
        setCategory(getsinglejob?.category?.id);  
        setDivision(getsinglejob?.division?.id); 
        setDistrict(getsinglejob?.district?.id); 
        setJobTitle(getsinglejob?.job_title); 
        setNumberOfVacancies(getsinglejob?.number_of_vacancies);   
        setIsNaNumberOfVacancies(getsinglejob?.is_na_number_of_vacancies);   
        setJobPosition(getsinglejob?.job_position); 
        setJobType(getsinglejob?.job_type);  
        setApplicationDeadline(getsinglejob?.application_deadline); 
        setWorkExpInYears(getsinglejob?.work_exp_in_years); 
        setIsNaWorkExpInYears(getsinglejob?.is_na_work_exp_in_years); 
        setIsFreshers(getsinglejob?.is_freshers);   
        setEducationalQualification(getsinglejob?.educational_qualification); 
        setJobDescription(getsinglejob?.job_description); 
        setJobArea(getsinglejob?.Job_area); 
        setApplicationReceivingOption(getsinglejob?.application_receiving_option); 
        setSalaryStartPrice(getsinglejob?.salary_start_price); 
        setSalaryEndPrice(getsinglejob?.salary_end_price); 
        setPhotographInResume(getsinglejob?.photograph_in_resume); 
        setCoverLetter(getsinglejob?.cover_letter); 
        setCompanyName(getsinglejob?.company_name); 
        setCompnyWebsiteLink(getsinglejob?.compny_website_link); 
        setCompanyLogo(getsinglejob?.company_logo);  
   }  

//    call all useEffact action
    useEffect(() => {  
    if(getsinglejob)  {   
      AllOfEditData();    
     }     
     setCategory(getsinglejob?.category?.id);
     setDivision(getsinglejob?.division?.id); 
     setDistrict(getsinglejob?.district?.id);   
    }, [getsinglejob]);   
    
    useEffect(() => {   
        dispatch(getDivisionAction()) 
    }, [dispatch,divisionItem]);  
    useEffect(() => {    
        dispatch(getDistrictAction())  
    }, [dispatch]);  
      
        
    useEffect(() => {   
        dispatch(getJobEditAction(jobEditId))  
     }, []); 
   
    
    useEffect(() => {  
        const jobcategoryid = category; 
        if(jobcategoryid){ 
            dispatch(getJobPositionAction(jobcategoryid))
        }    
    }, [category]); 
        
    
    useEffect(() => {   
    const salesAndMarketingCategoryId = localStorage.getItem('salesAndMarketing') 
    if(getsinglejob)  {   
        dispatch(getJobTypeAction(salesAndMarketingCategoryId)) 
        } 
    }, [getsinglejob]); 

    useEffect(() => {   
      const salesAndMarketingCategoryId = localStorage.getItem('salesAndMarketing') 
       if(getsinglejob)  {   
          dispatch(getJobEducationalAction(salesAndMarketingCategoryId)) 
        } 
      }, [getsinglejob]);
 
    // category pass paramister in category modal  
    const [categoryParam,setCategoryParam] = useState([]); 
    const [categorySelect,setCategorySelect] = useState(false);  
    
    const [activesCategory,setActivesCategory] = useState(categorySessionStorage);
    const [locationRoute,setLocationRoute] = useState('')  
    const [jobCategorySave,setJobCategorySave] = useState(false);   
    const [categoryName,setCategoryName] = useState('') 
 
    const postJob = () => { 
        setCategoryParam(jobCategoryItemLocal)
        setCategorySelect(true) 
        setLocationRoute('/my/job/create/') 
        setJobCategorySave(true)
        setCategoryName('Job')
    } 
       
  const showDistrict = getShowDistrictName ? getShowDistrictName :'' 
  const showCategory = getShowCategoryName ? getShowCategoryName :''
   
   
  const imageonChangeHandle = (e) => {
    if(e.target.files[0].size > 1e6){ 
      errorMessage("Please upload a file smaller than 1 MB")
      e.target.value = "";
   }else{ 
    setCompanyLogo(e.target.files[0])
    setCompanyLogoPreview(URL.createObjectURL(e.target.files[0])) 
   }   
  } 
 
  // data function
  const today = new Date().toISOString().split('T')[0]  
   
 
     
    return (
        <>
            <Header />   
              <section className="dashboard_page pt-70 pb-120">
                    <div className="container card__space">
                        <div className="row mt-70 shadow-none p-3 mb-5 bg-white rounded">
 
                           {/* user dashbord sidebar */} 
                           {/* <UserSidebar customer_job={"active"} /> */}
  
                           <div className="col-lg-12 m-auto">

                           <div className="row" >
                                 <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6"> 
                                 <h5>{languageCheck() === 'bn' ? 'বিস্তারিত তথ্য দিন' : "Fill in the details"}</h5>  
                                 </div>
                                 <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 category__location__select">
                                   
                                   <div className="row">
                                     <div className="col-md-6">
                                        <div className="change__option d-flex">
                                            <h5 className="mr-3" >
                                            <i className="fas fa-location"></i> 
                                            {' '}{showDistrict.slice(0,20)} </h5>
                                            <a 
                                            href="/my/job/create/"  
                                            data-bs-toggle="modal" 
                                            data-bs-target="#all__loacation" 
                                            >{languageCheck() === 'bn' ? 'পরিবর্তন' : "Change"}</a> 
                                      </div> 
                                     </div>
                                     <div className="col-md-6">
                                        <div className="change__option d-flex" 
                                         style={{justifyContent: "end !important"}} >
                                          <h5 className="mr-3" >
                                          <i className="fas fa-briefcase"></i>
                                           {' '} {showCategory.slice(0,20)}...
                                           </h5>
                                          <a
                                          onClick={postJob}
                                          href="/my/job/create/"  
                                          data-bs-toggle="modal" 
                                          data-bs-target="#job__category">{languageCheck() === 'bn' ? 'পরিবর্তন' : "Change"}</a>
                                     </div>
                                     </div>
                                   </div>
                                   
                                       
                                     
                                    
                                 </div>
                             </div>
                             
                             <hr />  

                             <div className="row mt-3"> 
                                  <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto"> 
                                    <h5>{languageCheck() === 'bn' ? 'চাকরি সম্পর্কে' : "About the job"}</h5> 
                                </div> 
                             </div>
                             
                             <form   id="customer_job_post" onSubmit={submitJob} > 
                                <div className="row mt-3"> 
                                    <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto"> 


                                       <div className="form-group">
                                             
                                            <label htmlFor="job_title" className="control-label">
                                            {languageCheck() === 'bn' ? 'কাজের বিবরণ' : "Job Title"}</label>  
                                            <input 
                                            required 
                                            onChange={(e) => setJobTitle(e.target.value)} 
                                            value={job_title} 
                                            type="text" 
                                            name="job_title" 
                                            id="job_title" 
                                            className="form-control" 
                                            placeholder={languageCheck() === 'bn' ? 'উদাহরণঃ  ঢাকা তে ড্রাইভার এর চাকরি' : "Example: Driver for hire in Dhaka"} 
                                            />
                                        </div>  

                                        <div className="form-group">
                                            <label htmlFor="work_description" className="control-label">
                                            {languageCheck() === 'bn' ? 'কাজের বিবরণ / ভূমিকা এবং কাজের দায়িত্ব' : "Job Description / Role & Job Responsibility"}</label>  
                                            <textarea 
                                            required 
                                            name="job_description"
                                            onChange={(e) => setJobDescription(e.target.value)} 
                                            value={job_description} 
                                            className="form-control" 
                                            id="work_description" 
                                            rows="3"
                                            placeholder={languageCheck() === 'bn' ? 'চাকরিটি বিস্তারিত বর্ণনা করুন' : "Describe the job in detail"}  
                                            ></textarea>
                                        </div>  
                                        
                                        <div className="form-group">
                                            <label htmlFor="job_position" className="control-label">
                                            {languageCheck() === 'bn' ? 'চাকরির অবস্থান' : "Job Position"}   
                                            </label> 
                                            <select   onChange={(e) => {handleposition(e)}} name="category_id" id="job_position" className="form-control"> 
                                            <option value="Na" >{languageCheck() === 'bn' ? 'চাকরির অবস্থান নির্বাচন করুন' : "Choose Job Position"}</option>
                                            {jobposition?.map( (jobpositions)=>(<option key={jobpositions?.id}  selected={jobpositions?.item_name === job_position ?? true} value={jobpositions?.item_name}> {jobpositions?.item_name}</option> ))}
                                            </select>  
                                        </div>

                                        <div className="form-group">
                                             <label htmlFor="job_type_id" className="control-label">
                                             {languageCheck() === 'bn' ? 'চাকরি ধরন' : "Job Type"}
                                             </label>
                                            <select onChange={(e) => handletype(e)} name="job_type_id" id="job_type_id" className="form-control"> 
                                            <option value="Na">{languageCheck() === 'bn' ? 'চাকরি ধরন নির্বাচন করুন' : "Choose Job Type"} </option> 
                                            {jobtype?.map( (jobtype)=>( <option key={jobtype?.id} selected={jobtype?.item_name ===  job_type ?? true}  value={jobtype?.item_name}> {jobtype?.item_name}</option>   ))}   
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="educational_qualification" className="control-label">
                                            {languageCheck() === 'bn' ? 'শিক্ষাগত যোগ্যতা' : "Educational Qualification"}
                                            </label> 
                                            <select onChange={(e) => {handleeducationals(e)}} name="category_id" id="educational_qualification" className="form-control"> 
                                            <option value="Na">{languageCheck() === 'bn' ? 'শিক্ষাগত যোগ্যতা নির্বাচন করুন' : "Choose Educational Qualification"}</option>
                                            {jobeducational?.map( (jobeducationals)=>( <option key={jobeducationals?.id} selected={jobeducationals?.item_name  === educational_qualification  ?? true} value={jobeducationals?.item_name}> {jobeducationals?.item_name}</option> ))}   
                                            </select>
                                        </div> 
 

                                        <div className="form-group job_input_filed">
                                             <label htmlFor="work_experiences_id" className="control-label">
                                             {languageCheck() === 'bn' ? 'চাকরি অভিজ্ঞতা' : "Work Experiences"}
                                             </label>

                                            <div className="work_experiences d-flex w-100" >
                                              <input  
                                              onChange={(e) => setWorkExpInYears(e.target.value)} 
                                              value={work_exp_in_years} 
                                              type="text" 
                                              name="work_exp_in_years" 
                                              id="work_experiences_id" 
                                              className="form-control w-50 mr-5"
                                              placeholder={languageCheck() === 'bn' ? 'বছরের অভিজ্ঞতা প্রবেশ করান' : "Enter number of year"}
                                              />
                                              
                                            <div className="form-check mt-1" >
                                              <input  
                                              onChange={(e) => 
                                              setIsFreshers(e.target.checked)}  
                                              checked={is_freshers}
                                              type="checkbox" 
                                              style={{display:'none'}} 
                                              id="fresher_status" />
                                              <label htmlFor="fresher_status">{languageCheck() === 'bn' ? 'ফ্রেশার' : "Fresher’s"}</label>
                                            </div>
 
                                            <div className="form-check mt-1" >
                                              <input 
                                              onChange={(e) => setIsNaWorkExpInYears(e.target.checked)}
                                              checked={is_na_work_exp_in_years}    
                                              type="checkbox" 
                                              style={{display:'none'}} 
                                              id="fresher_status_na" />
                                              <label htmlFor="fresher_status_na">{languageCheck() === 'bn' ? 'NA' : "NA"}</label>
                                            </div>
                                           </div> 
                                        </div>

                                        <div className="form-group job_input_filed">
                                              <label htmlFor="vacancy" className="control-label">
                                              {languageCheck() === 'bn' ? 'শূন্যপদের সংখ্যা' : "Number Of Vacancies"}  
                                              </label> 
                                              <div className="number_of_vancancies d-flex w-100">
                                              <input 
                                              onChange={(e) => setNumberOfVacancies(e.target.value)} 
                                              value={number_of_vacancies} 
                                              type="text"
                                              name="vacancy" 
                                              id="vacancy" 
                                              className="form-control w-75 mr-4"
                                              placeholder={languageCheck() === 'bn' ? 'শূন্যপদের সংখ্যা প্রবেশ করান' : "Enter number of year"} 
                                              /> 
                                              <div className="form-check mt-2 ml-3" >
                                              <input type="checkbox"  
                                              checked={is_na_number_of_vacancies} 
                                              onChange={(e) => setIsNaNumberOfVacancies(e.target.checked)} 
                                              style={{display:'none'}} 
                                              id="css" />
                                              <label htmlFor="css"  >
                                              {languageCheck() === 'bn' ? 'NA' : "NA"}
                                              </label> 
                                            </div> 
                                            </div>  
                                        </div>






                                        <div className="form-group job_input_filed">
                                             <label htmlFor="salary_per_month" className="control-label">
                                             {languageCheck() === 'bn' ? 'প্রতি মাসে বেতন' : "Salary Per Month"}
                                             </label>
                                              <div className="salary__input d-flex w-100">
                                              <div className="form-group  mr-2">
                                                <label htmlFor="salary_per_month" className="control-label">
                                                {languageCheck() === 'bn' ? 'হইতে' : "From"}
                                                </label>
                                                <input 
                                                required 
                                                onChange={(e) => setSalaryStartPrice(e.target.value)} 
                                                type="text" 
                                                value={salary_start_price} 
                                                name="work_place" 
                                                id="salary_per_month" 
                                                className="form-control" 
                                                placeholder={languageCheck() === 'bn' ? 'হইতে' : "From"}
                                                />
                                              </div>
                                              
                                              <div className="form-group ">
                                               <label htmlFor="salary_per_month_to" className="control-label">
                                               {languageCheck() === 'bn' ? 'পর্যন্ত' : "To"}
                                               </label>
                                               <input 
                                               required 
                                               onChange={(e) => setSalaryEndPrice(e.target.value)} 
                                               value={salary_end_price} 
                                               type="text" 
                                               name="salary_end_price" 
                                               id="salary_per_month_to" 
                                               className="form-control"
                                               placeholder={languageCheck() === 'bn' ? 'পর্যন্ত' : "To"}
                                               />
                                              </div>
                                            </div> 
                                        </div> 














                                        <div className="form-group">
                                             <label htmlFor="location_id" className="control-label">
                                             {languageCheck() === 'bn' ? 'চাকরির এলাকা / অবস্থান' : "Job Area / Location"}
                                             </label>
                                            <input 
                                            required 
                                            onChange={(e) => setJobArea(e.target.value)} 
                                            type="text" 
                                            name="Job_area" 
                                            value={Job_area} 
                                            id="location_id" 
                                            className="form-control"
                                            placeholder={languageCheck() === 'bn' ? 'চাকরির এলাকা / অবস্থান' : "Job Area / Location"}
                                            />
                                        </div> 

                                        <div className="form-group">
                                             <label htmlFor="work_application_receiving" className="control-label">
                                             {languageCheck() === 'bn' ? 'আবেদন গ্রহণের বিকল্প' : "Application Receiving Option"}
                                             </label>
                                            <input 
                                            required 
                                            onChange={(e) => setApplicationReceivingOption(e.target.value)} 
                                            value={application_receiving_option} 
                                            type="text" 
                                            name="application_receiving_option" 
                                            id="work_application_receiving" 
                                            className="form-control"
                                            placeholder={languageCheck() === 'bn' ? 'আবেদন গ্রহণের বিকল্প' : "Application Receiving Option"}
                                             />
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor="application_deadline" className="control-label">
                                            {languageCheck() === 'bn' ? 'আবেদনের সময়সীমা' : "Application Deadline"}</label> 
                                            <input  
                                            required 
                                            onChange={(e) => {setApplicationDeadline(e.target.value)}} 
                                            min={today} 
                                            value={application_deadline} 
                                            type="date" 
                                            name="application_deadline" 
                                            id="application_deadline " 
                                            className="form-control" 
                                            /> 
                                        </div>   
                                        
                                        <div className="form-group d-flex w-100">
                                             <label htmlFor="photograph_id" className="control-label  ">
                                             {languageCheck() === 'bn' ? 'ছবি (আপনার জীবনবৃত্তান্ত অন্তর্ভুক্ত করুন)' : "Photograph (Include your Resume)"}
                                               </label>    
                                            <div className="radio__no ml-5 mt-1">
                                                 <label htmlFor="photograph_yes" className="mr-2"> 
                                                    <input
                                                    onChange={(e) => setPhotographInResume(e.target.value)}   
                                                    checked={photograph_in_resume !== false}  
                                                    value={true} 
                                                    type="radio" 
                                                    name="fresher_status" 
                                                    id="photograph_yes" /> 
                                                </label> 
                                                <span className="mr-3" > {languageCheck() === 'bn' ? 'হ্যাঁ' : "Yes"}</span>
                                            </div>
                                                
                                            <div className="radio__no  ml-4 mt-1">
                                                 <label htmlFor="photograph_no" className="mr-2"> 
                                                    <input 
                                                    onChange={(e) => setPhotographInResume(e.target.value)} 
                                                    checked={photograph_in_resume !== true}  
                                                    value={false} 
                                                    type="radio" 
                                                    name="fresher_status" 
                                                    id="photograph_no" /> 
                                                </label> 
                                                <span   className=" "  > {languageCheck() === 'bn' ? 'না' : "No"}</span>
                                            </div> 
                                       </div>

                                       <div className="form-group d-flex">
                                             <label htmlFor="cover_letter" className="control-label mr-2"> {languageCheck() === 'bn' ? 'কাভার লেটার' : "Cover Letter"}</label> 
                                            <div className="radio__no mr-2">
                                                 <label htmlFor="cover_letter_yes" className="mr-2"> 
                                                    <input 
                                                    onChange={(e) => setCoverLetter(e.target.value)} 
                                                    checked={cover_letter !== false} 
                                                    value={true} 
                                                    type="radio" 
                                                    name="cover_letter" 
                                                    id="cover_letter_yes" /> 
                                                </label> 
                                                <span > {languageCheck() === 'bn' ? 'হ্যাঁ' : "Yes"}</span>
                                            </div> 
                                            <div className="radio__no  mr-2">
                                                 <label htmlFor="cover_letter_no" className="mr-2"> 
                                                    <input 
                                                    onChange={(e) => setCoverLetter(e.target.value)} 
                                                    checked={cover_letter !== true} 
                                                    value={false} 
                                                    type="radio" 
                                                    name="cover_letter" 
                                                    id="cover_letter_no" /> 
                                                </label> 
                                                <span> {languageCheck() === 'bn' ? 'না' : "No"}</span>
                                            </div>
                                        </div>  
                                        
                                        <div className="form-group">
                                            <label htmlFor="company_name" className="control-label">
                                            {languageCheck() === 'bn' ? 'কোম্পানির নাম' : "Company Name"}
                                            </label>
                                            <input 
                                            required 
                                            onChange={(e) => setCompanyName(e.target.value)} 
                                            value={company_name} 
                                            type="text" 
                                            name="company_name" 
                                            id="company_name" 
                                            className="form-control"
                                            placeholder={languageCheck() === 'bn' ? 'কোম্পানির নাম' : "Company Name"}
                                            />
                                        </div> 

                                        <div className="form-group">
                                            <label htmlFor="company_website_link" className="control-label">
                                            {languageCheck() === 'bn' ? 'কোম্পানির ওয়েবসাইট লিংক' : "Company Website Link"}
                                            </label>
                                            <input 
                                            required 
                                            onChange={(e) => setCompnyWebsiteLink(e.target.value)} 
                                            value={compny_website_link} 
                                            type="text" 
                                            name="compny_website_link" 
                                            id="company_website_link" 
                                            className="form-control"
                                            placeholder={languageCheck() === 'bn' ? 'কোম্পানির ওয়েবসাইট লিংক' : "Company Website Link"} /> 
                                        </div>  
   
                                        <div className="form-group">
                                            <label htmlFor="upload_company_logo" className="control-label">
                                              {languageCheck() === 'bn' ? 'কোম্পানির লোগো সংযুক্ত করুন' : "Upload Company Logo"}
                                            </label>
                                            <input  
                                            onChange={imageonChangeHandle} 
                                            type="file"
                                            accept="image/png, image/jpg, image/jpeg"
                                            name="company_logo" 
                                            id="upload_company_logo"  
                                            className="form-control" /> 
                                          <div id="image-holder" style={{textAlign: "center"}}></div> 
                                        </div>  
                                        
                                         
                                        
                                            <div className="row mb-5  mt-3"> 
                                               {/* <div className="col-md-6">  */}
                                               <div className="company__logo" > 
                                                { companylogopreview ? 
                                                (<img  className="ad__banner__image"  
                                                src={companylogopreview} alt="" /> )   : 
                                                <img  className="ad__banner__image"  
                                                src={company_logo} alt="" /> 
                                                } 
                                            </div> 

                                            {/* </div>  */} 

                                              {/* <div className="col-md-6 mt-5 "> */}
                                                <div className="login__btn">
                                                <button disabled={loading} type="submit"
                                                 className={loading?"loading__button mt-20 log-in disabled":"main-btn btn__small mt-20 log-in"}> 
                                                  {loading ?   
                                                  <><div className="spinner-border" role="status">
                                                  <span className="sr-only"></span>
                                                  </div></>
                                                  :languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}
                                                </button>
                                               </div>
                                            {/* </div> */} 
                                        </div> 
                                        
                                    </div>  
                                </div>  
                             </form> 
                            </div> 
                         </div>
                     </div>
                   </section>
                <br/>  

               
               <CategoriesModal 
               categorySelect={categorySelect}  
               categoryParam={categoryParam}  
               jobCategorySave={jobCategorySave}
               setActivesCategory={setActivesCategory}
               activesCategory={activesCategory}
               locationRoute={locationRoute}
               categoryName={categoryName}
               setShowCategoryName={setShowCategoryName}
               
               />
               
               <DivisionAndDistrictModal 
               showDivision={divisionSessionStorage} 
               showDistrict={districtSessionStorage}  
               setShowDistrictName={setShowDistrictName}
                 />
            <Footer /> 
        </>
    );
};

export default JobEdit;