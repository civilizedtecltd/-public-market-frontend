import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import { languageCheck, numberCheck } from "../../../helpers/Helpers";
import { getAdditionalInfoAction, patchAdditionalInfoAction, postAdditionalInfoAction } from "../../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction";
import { getProfileSettingAction } from "../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";


const AdditionalInformation = ({additionalInformationShow,additionalInformation}) => {
     

    const navigate = useNavigate()  
    const dispatch = useDispatch();    
    const [educational_specialization, setEducationalSpecialization]= useState(''); 
    const [institue, setInstitue]= useState(''); 
    const [about_yourself, setAboutYourself]= useState(''); 
    const [current_employer_name, setCurrentEmployerName]= useState(''); 
    const [current_salary, setCurrentSalary]= useState(''); 
    const [started_in, setStartedIn]= useState(''); 
    const [notice_period, setNoticePeriod]= useState(''); 
    const [about_current_job, setAboutCurrentJob]= useState(''); 
    const [linkedin_profile, setLinkedinProfile]= useState(''); 
    const [resume, setResume]= useState(''); 
    const [resumeUpdate, setResumeUpdate]= useState(''); 
    const [email, setEmail]= useState('');  
     
  
      
    
    const { profileData } = useSelector(state => state.getProfileSettingReducer)   
    const { postAdditionalInfoError } = useSelector(state => state.postAdditionalInfoReducer)
     
    const { getPostAdditionalInfo } = useSelector(state => state.getAdditionalInfoReducer)    
                                
    useEffect(() => {   
        dispatch(getProfileSettingAction()) 
    }, []); 
     

    useEffect(() => {
       dispatch(getAdditionalInfoAction())
    },[])
    const createAdditionalProfile = (e) => { 
        e.preventDefault();    
        const formdata = new FormData(); 
        formdata.append("user", profileData?.id); 
        formdata.append("educational_specialization", educational_specialization); 
        formdata.append("institue",institue); 
        formdata.append("about_yourself", about_yourself);   
        formdata.append("about_current_job", about_current_job);  
        formdata.append("started_in", started_in); 
        formdata.append("current_salary", current_salary); 
        formdata.append("current_employer_name", current_employer_name); 
        formdata.append("notice_period", notice_period); 
        formdata.append("linkedin_profile", linkedin_profile); 
        formdata.append("resume", resume); 
        formdata.append("email", email);   
        dispatch(postAdditionalInfoAction(formdata))  
    } 

    const updateAdditionalProfile = (e) => { 
        e.preventDefault();    
        const formdata = new FormData(); 
        formdata.append("user", profileData?.id); 
        formdata.append("educational_specialization", educational_specialization); 
        formdata.append("institue",institue); 
        formdata.append("about_yourself", about_yourself);   
        formdata.append("about_current_job", about_current_job);  
        formdata.append("started_in", started_in); 
        formdata.append("current_salary", current_salary); 
        formdata.append("current_employer_name", current_employer_name); 
        formdata.append("notice_period", notice_period); 
        formdata.append("linkedin_profile", linkedin_profile); 
        if(resumeUpdate){ 
         formdata.append("resume", resume);  
        } 
        formdata.append("email", email);   
        dispatch(patchAdditionalInfoAction(formdata))  
    }

     //    call all data in allofEidtData
     const AllOfEditData = () => {     
        setEducationalSpecialization(getPostAdditionalInfo?.educational_specialization); 
        setInstitue(getPostAdditionalInfo?.institue); 
        setAboutYourself(getPostAdditionalInfo?.about_yourself); 
        setCurrentEmployerName(getPostAdditionalInfo?.current_employer_name);   
        setCurrentSalary(getPostAdditionalInfo?.current_salary);   
        setStartedIn(getPostAdditionalInfo?.started_in); 
        setNoticePeriod(getPostAdditionalInfo?.notice_period);  
        setAboutCurrentJob(getPostAdditionalInfo?.about_current_job);  
        setLinkedinProfile(getPostAdditionalInfo?.linkedin_profile); 
        setResume(getPostAdditionalInfo?.resume);     
        setEmail(getPostAdditionalInfo?.email);     
    }   

    //    call all useEffact action
    useEffect(() => {  
    if(getPostAdditionalInfo)  {   
    AllOfEditData();  
    }  
    }, [getPostAdditionalInfo]);   
  
     

    return (
        <>
               <div className="shadows mb-5" id="additional_information">
                <div className="col-lg-10 m-auto shadow-none p-4 bg-white rounded">   
                <div className="row" >
                    <div className="col-md-6 col-sm-6 col-6"> 
                    <h5 className="mt-2"> 
                    {languageCheck() === 'bn' ? 'অতিরিক্ত তথ্য':"Additional Information"}
                    </h5> 
                    </div>   
                    <div className="col-md-6 col-sm-6 col-6"> 
                    <div className="profile__button text-right"> 
                    <button type="submit" onClick={additionalInformationShow} className="main__btn__mini bg-info"> 
                     <i className={additionalInformation ?"fa fa-minus fa_custom_card" : "fa fa-plus fa_custom_card"}></i></button>
                    </div>
                    </div> 
                </div> 
                <hr />   
                
                {additionalInformation?<form >   
                <p className='mb-3 mb-3'> 
                {languageCheck() === 'bn' ? 
                "আপনার শিক্ষা এবং পেশাগত অভিজ্ঞতার একটি সারসংক্ষেপ যোগ করুন":
                "Add a summary of your education and professional experience"}</p>    
                <div className="row">
                    <div className="col-md-6"> 
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">  
                        {languageCheck() === 'bn' ? "শিক্ষাগত বিশেষীকরণ":"Educational specialization"}
                        </label>  
                        <select required value={educational_specialization} onChange={(e) => setEducationalSpecialization(e.target.value)}   name="district_id" id="choose_gender" className="form-control">  
                                <option value="">{languageCheck() === 'bn' ? "শিক্ষাগত বিশেষীকরণ":"Educational specialization"}  </option>
                                <option value="art_humanities"> {languageCheck() === 'bn' ? "শিল্প এবং মানবিক":"Art & Humanities "}</option> 
                                <option value="business_management"> {languageCheck() === 'bn' ? "ব্যবসা এবং ব্যবস্থাপনা":"Business & Management "}</option>
                                <option value="accounting">{languageCheck() === 'bn' ? "হিসাববিজ্ঞান":"Accounting"}</option>
                                <option value="design_fashion">{languageCheck() === 'bn' ? "ডিজাইন এবং ফ্যাশন":"Design & Fashion "}</option>
                                <option value="engineering">{languageCheck() === 'bn' ? "প্রকৌশল":"Engineering"}</option>
                                <option value="events_hospitality">{languageCheck() === 'bn' ? "ইভেন্ট এবং আতিথেয়তা":"Events & Hospitality "}</option>
                                <option value="finance_commerce">{languageCheck() === 'bn' ? "অর্থ এবং বাণিজ্য":"Finance & Commerce"}</option>
                                <option value="human_resources">  {languageCheck() === 'bn' ? "মানব সম্পদ":"Human Resources"}</option>
                                <option value="info_technology"> {languageCheck() === 'bn' ? "তথ্য প্রযুক্তি":"Information Technology "}</option>
                                <option value="law">{languageCheck() === 'bn' ? "আইন":"Law"}</option>
                                <option value="marketing_sales">{languageCheck() === 'bn' ? "মার্কেটিং এবং বিক্রয়":"Marketing & Sales "}</option>
                                <option value="mass_comm">{languageCheck() === 'bn' ? "গণ যোগাযোগ":"Mass Communication"}</option>
                                <option value="medicine">{languageCheck() === 'bn' ? "ওষুধ":"Medicine"}</option>
                                <option value="sciences">{languageCheck() === 'bn' ? "বিজ্ঞান":"Sciences"}</option>
                                <option value="vocational">{languageCheck() === 'bn' ? "বৃত্তিমূলক এবং প্রযুক্তিগত":"Vocational & Technical"}</option>
                                <option value="others">{languageCheck() === 'bn' ? "অন্যান্য":"Others"}</option> 
                       </select> 
                       <span style={{color:'red'}}>{postAdditionalInfoError?.educational_specialization?.map((error)=>(error?.message))}</span> 
                    </div>  
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="job_title" className="control-label"> 
                        {languageCheck() === 'bn' ? "ইনস্টিটিউট / বিশ্ববিদ্যালয়":"Institute / University"}</label>
                        <input 
                        required 
                        type="text" 
                        name="job_title"  
                        value={institue} 
                        onChange={(e) => setInstitue(e.target.value)}
                        placeholder={languageCheck() === 'bn' ? "ইনস্টিটিউট / বিশ্ববিদ্যালয়":"Institute / University"}
                        id="job_title" 
                        className="form-control" />
                      <span style={{color:'red'}}>{postAdditionalInfoError?.institue?.map((error)=>(error?.message))}</span> 
                    </div> 
                    </div>
                </div>  
                
                <div className="row mt-3">
                    <div className="col-md-12"> 
                    <div className="form-group"> 
                    <label htmlFor="job_title" className="control-label"> 
                    {languageCheck() === 'bn' ? "নিজের সম্পর্কে (ঐচ্ছিক)":"About yourself (optional)"}</label> 
                    <textarea 
                    required 
                    name="job_description"   
                    value={about_yourself}
                    onChange={(e) => setAboutYourself(e.target.value)}
                    className="form-control" 
                    id="work_description" 
                    placeholder={languageCheck() === 'bn' ? "নিজের সম্পর্কে (ঐচ্ছিক)":"About yourself (optional)"}
                    rows="3"></textarea>
                    </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6"> 
                    <div className="form-group">
                        <label htmlFor="name" className="control-label"> 
                        {languageCheck() === 'bn' ? "বর্তমান নিয়োগকর্তার নাম (ঐচ্ছিক)":"Name of the current employer (optional)"} </label>
                        <input 
                        required 
                        type="text" 
                        name="name" 
                        placeholder={languageCheck() === 'bn' ? "বর্তমান নিয়োগকর্তার নাম (ঐচ্ছিক)":"Name of the current employer (optional)"} 
                        value={current_employer_name} onChange={(e) => setCurrentEmployerName(e.target.value)}
                        id="job_title" className="form-control" />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="name" className="control-label"> 
                        {languageCheck() === 'bn' ? "মধ্যে শুরু":"Started in"} </label>
                        <input required type="date" name="name" 
                        
                        value={started_in} onChange={(e) => setStartedIn(e.target.value)}
                        id="job_title" className="form-control" />
                    </div>  
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label"> 
                        {languageCheck() === 'bn' ? "বর্তমান বেতন (প্রতি মাসে) (ঐচ্ছিক)":"Current Salary (per month) (optional)"} </label>
                        <input required type="text" name="name" 
                        placeholder={languageCheck() === 'bn' ? "বর্তমান বেতন (প্রতি মাসে) (ঐচ্ছিক)":"Current Salary (per month) (optional)"}
                        value={current_salary} onChange={(e) => setCurrentSalary(numberCheck(e))}
                        id="job_title" className="form-control" />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="job_title" className="control-label"> 
                        {languageCheck() === 'bn' ? "নোটিশ পিরিয়ড (দিনে)":"Notice period (in days)"}</label>
                        <input required type="text" name="job_title" 
                        placeholder={languageCheck() === 'bn' ? "নোটিশ পিরিয়ড (দিনে)":"Notice period (in days)"}
                        value={notice_period} onChange={(e) => setNoticePeriod(numberCheck(e))}
                        id="job_title" className="form-control" />
                    </div> 
                    </div>
                </div>  

                
                <div className="row mt-3">
                    <div className="col-md-12"> 
                    <div className="form-group"> 
                        <label htmlFor="job_title" className="control-label"> 
                        {languageCheck() === 'bn' ? "বর্তমান চাকরি সম্পর্কে (ঐচ্ছিক)":"About the current job (optional)"}
                        </label> 
                        <textarea name="job_description"  required
                        placeholder={languageCheck() === 'bn' ? "বর্তমান চাকরি সম্পর্কে (ঐচ্ছিক)":"About the current job (optional)"}
                        value={about_current_job} onChange={(e) => setAboutCurrentJob(e.target.value)} 
                        className="form-control" id="work_description" rows="3"></textarea>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6"> 
                    <div className="form-group">
                        
                    <label htmlFor="name" className="control-label"> 
                    {languageCheck() === 'bn' ? "লিঙ্কডইন প্রোফাইল (ঐচ্ছিক)":"Linkedin profile (optional)"}</label>
                        <input type="text" name="name" required 
                        value={linkedin_profile} 
                        onChange={(e) => setLinkedinProfile(e.target.value)}
                        placeholder={languageCheck() === 'bn' ? "লিঙ্কডইন প্রোফাইল (ঐচ্ছিক)":"Linkedin profile (optional)"}
                        id="job_title" className="form-control" /> 
                    </div>  
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label"> 
                        {languageCheck() === 'bn' ? "ইমেল (ঐচ্ছিক)":"Email (optional)"}</label>
                        <input type="email"   required
                        placeholder={languageCheck() === 'bn' ? "ইমেল (ঐচ্ছিক)":"Email (optional)"}
                         value={email} onChange={(e) => setEmail(e.target.value)}
                        id="job_title" className="form-control" />
                    </div>  
                    </div>
                </div>  

                <div className="row">
                    <div className="col-md-6"> 
                    <div className="form-group">
                        <label htmlFor="upload_company_logo" className="control-label"> 
                        {languageCheck() === 'bn' ? "সিভি (pdf,doc,docx):":"Cv (pdf,doc,docx):"}</label>
                        <input type="file" required
                           onChange={(e) => {setResume(e.target.files[0]);setResumeUpdate(URL.createObjectURL(e.target.files[0]))}}
                        accept="application/pdf, application/doc, application/docx"
                            name="image" id="upload_company_logo" className="form-control" />  
                        <span style={{color:'red'}}>{postAdditionalInfoError?.resume?.map((error)=>(error?.message))}</span>  
                       <a href={resumeUpdate ? resumeUpdate : resume}>  
                       {languageCheck() === 'bn' ? "আমার জীবনবৃত্তান্ত":"my resume"}</a>
                    </div> 
                    </div> 
                </div>  
                
                


                <div className="row mt-2">
                    <div className="col-md-12">  
                    {getPostAdditionalInfo === undefined ?  
                    <button type="button" onClick={createAdditionalProfile} className="main-btn bg-info">
                    {languageCheck() === 'bn' ? "তৈরি করুন":"Create"}</button>:
                    <><button type="button" onClick={updateAdditionalProfile} className="main-btn mr-4 bg-info">
                    {languageCheck() === 'bn' ? "সংরক্ষণ":"Save"}</button> 
                      <Link to="/dashboard/" className="main-btn"> 
                      {languageCheck() === 'bn' ? "বাতিল করুন":"Cancel"}</Link>      
                      </>}  
                    </div>
                </div>
                </form>:''}
                 

                </div>  
            </div> 
        </>
    );
};

export default AdditionalInformation;