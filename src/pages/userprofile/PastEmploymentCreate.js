import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { languageCheck } from "../../helpers/Helpers";
import { getJobCategoryAction } from "../../redux/action/userProfileAction/profileJobAction";
import { postPastEmploymentsAction } from "../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction";
import { getProfileSettingAction } from "../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import { getJobCategoryItems, isInvalid } from "../../Utilities/Utilities";

const PastEmploymentCreate = () => {
      
    const navigate = useNavigate();  
    const dispatch = useDispatch();      
    const [company_name, setCompanyName] = useState('');  
    const [past_job, setPastJob] = useState('');  
    const [start_date, setStartDate] = useState('');  
    const [end_date, setEndDate] = useState('');  
    const [about_job, setAboutJob] = useState('');  
       
    const { profileData } = useSelector(state => state.getProfileSettingReducer)   
    const { postPastEmploymentsError } = useSelector(state => state.postPastEmploymentsReducer)   
                             
    useEffect(() => {   
        dispatch(getProfileSettingAction()) 
    }, []); 

    // job Category load Data
    const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer)   
    const jobCategoryItemLocal = getJobCategoryItems();
     useEffect(() => {      
         if(isInvalid(jobCategoryItemLocal)){
            dispatch(getJobCategoryAction()) 
         }  
     }, [dispatch,jobCategoryItem])  

    const createAdditionalProfile = (e) => { 
        e.preventDefault();    
        const formdata = new FormData(); 
        formdata.append("user", profileData?.id);    
        formdata.append("company_name", company_name);    
        formdata.append("past_job", past_job);    
        formdata.append("start_date", start_date);    
        formdata.append("end_date", end_date);    
        formdata.append("about_job", about_job); 
        dispatch(postPastEmploymentsAction(formdata,navigate))  
    } 

    // const [title, setTitle] = useState("Public Market Bd");
    // useEffect(() => {
    //     document.title = title
    // },[title])
   
    return (
        <>
            <Header /> 
            <section className="dashboard_page pt-70 pb-120 mt-5">
                    <div className="container">
                        <div className="row mt-20">   

                              <div className="col-lg-10 m-auto pb-3">   
                                {/* breadcrumb__area */}

                                 <nav className="breadcrumb__area"  >
                                    <ul style={{display:'flex'}} > 
                                        <li><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম":"home"}</Link></li> 
                                        <li> 
                                        <Link to='/dashboard/' >
                                        <span>{">"}</span>  
                                        {languageCheck() === 'bn' ? "ড্যাশবোর্ড":"dashboard"}</Link></li>  
                                        <li> 
                                        <Link to='/dashboard/my/professional/profile/' 
                                        >
                                        <span>{">"}</span>  
                                        {languageCheck() === 'bn' ? "পেশাদারী বাক্তিত্ত":"professional profile"}</Link></li>  
                                        <li> 
                                        <Link to='/my/resume/add/employment_history/'  className={"active"} >
                                        <span>{">"}</span>  
                                        {languageCheck() === 'bn' ? "অতীত কর্মসংস্থান":"past employments"}</Link></li>   
                                    </ul>
                                  </nav>
                                </div>
         
    
                                 {/* Past Employments */}
                               <div className="shadows mb-5" id="past_employments">
                                <div className="col-lg-10 m-auto shadow-none p-4 bg-white rounded">   
                                    <div className="row" >
                                        <div className="col-md-6 col-sm-6 col-6"> 
                                        <h5 className="mt-2"> 
                                        {languageCheck() === 'bn' ? "অতীত কর্মসংস্থান":"Past Employments"}
                                        </h5> 
                                        </div>   
                                        <div className="col-md-6 col-sm-6 col-6">  
                                        </div> 
                                    </div> 
                                    <hr />     

                                 <form onSubmit={createAdditionalProfile}>    
                                       <p className='mb-3' >  
                                       {languageCheck() === 'bn' ? "আপনার আগের চাকরির বিবরণ যোগ করুন":
                                       "Add  details of your previous jobs"}
                                       </p>
                                        <div className="row mt-3">
                                        <div className="col-md-6">  
                                        <div className="form-group mt-2">
                                            <label htmlFor="company_employer" className="control-label"> 
                                                {languageCheck() === 'bn' ? "কোম্পানি / নিয়োগকর্তা":
                                                " Company / Employer "}
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
                                            {languageCheck() === 'bn' ? "শুরুর তারিখ":"Start Date"} </label>
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
                                            <label htmlFor="current_job" className="control-label">{languageCheck() === 'bn' ? "বিগত চাকরি":"Past job"}</label>
                                            <select required onChange={(e) => setPastJob(e.target.value)}  name="category_id" id="current_job" className="form-control">
                                                <option value="">{languageCheck() === 'bn' ? "বিগত চাকরি":"Past job"}</option>  
                                                {jobCategoryItemLocal?.map( (jobCatepositions)=>(
                                                    <option key={jobCatepositions?.id} value={jobCatepositions?.name}> {jobCatepositions?.name}</option>
                                                ))}
                                            </select>  
                                              {/* <span style={{color:'red'}}>{postPastEmploymentsError?.past_job?.map((error)=>(error?.message))}</span>  */}  
                                      
                                        </div>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="end__data" className="control-label">{languageCheck() === 'bn' ? "শেষ তারিখ":"End Date"}  </label>
                                            <input required type="date" name="job_title" 
                                            value={end_date} onChange={(e) => setEndDate(e.target.value)} 
                                            id="end__data" className="form-control" />
                                        </div>  
                                   {/* <span style={{color:'red'}}>{postPastEmploymentsError?.end_date?.map((error)=>(error?.message))}</span>  */}  
                                      
                                    </div> 
                                    </div>  
                                    <div className="row mt-3">
                                        <div className="col-md-12"> 
                                        <div className="form-group">  
                                           <label htmlFor="about_the_job" className="control-label"> 
                                           {languageCheck() === 'bn' ? "চাকরি সম্পর্কে (ঐচ্ছিক)":"About the job (optional)"}</label>
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
                                        <button type="submite" className="main-btn mr-4 bg-info">{languageCheck() === 'bn' ? "তৈরি করুন":"Create"}</button>
                                        <Link to="/dashboard/my/professional/profile/" className="main-btn">{languageCheck() === 'bn' ? "বাতিল করুন":"Cancel"}</Link> 
                                        </div>
                                    </div>
                                 </form>    
                                </div>    
                            </div> 
                        </div>
                    </div> 
                </section> 
  

            <Footer />
        </>
    );
};

export default PastEmploymentCreate;