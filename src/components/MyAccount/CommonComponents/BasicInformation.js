import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import profile from '../../../asset/frontend/assets/images/default.png'  
import { getDistrictAction, getDivisionAction } from "../../../redux/action/coreAction";
import { getProfileSettingAction } from '../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction';
import { postBasicInfoAction,getBasicInfoAction ,patchBasicInfoAction} from '../../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction';
import { getDistrictItems, getDivisionItems, getJobCategoryItems, isInvalid } from "../../../Utilities/Utilities";
import { getJobCategoryAction, getJobEducationalAction } from "../../../redux/action/userProfileAction/profileJobAction";
import { languageCheck, numberCheck } from "../../../helpers/Helpers";
import { useForm } from "react-hook-form";
 

const BasicInformation = ({basicInformationShow,basicInformation}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
        //    //  // load data local storage  divisionItem
       const { divisionItem } = useSelector(state => state.getDivisionReducer)
       const divisionItemLocal = getDivisionItems(); 
       useEffect(() => {
           if(isInvalid(divisionItemLocal)){
              dispatch(getDivisionAction())
           } 
       }, [divisionItem]) 
  
    //    // load data local storage  districtItem
     const { districtItem }  = useSelector(state => state.getDistrictReducer)
     const districtItemLocal = getDistrictItems();
     useEffect(() => {
         if(isInvalid(districtItemLocal)){
            dispatch(getDistrictAction())
         }
     }, [districtItem]) 
     
    // call all reducers  
     
    const { profileData } = useSelector(state => state.getProfileSettingReducer)    
    const { getBasicInfoData  } = useSelector(state => state.getBasicInfoReducer) 
    const { jobeducational }  = useSelector(state => state.getJobEducationalReducer) 
    const { basicInforCreateError }  = useSelector(state => state.postBasicInfoReducer) 
    const { basicInforUpdateError }  = useSelector(state => state.patchBasicInfoReducer) 
      
    // error show variable
    const basicInfoCreateError = basicInforCreateError?.invalid_params || basicInforUpdateError?.invalid_params
   
    //  call all state
    const navigate = useNavigate()  
    const dispatch = useDispatch();    
    const [divisionid, setDivisionid]= useState('');    
    const [division,setDivision] = useState(getBasicInfoData?.division)
    const [district,setDistrict] = useState(getBasicInfoData?.district)  
    const [gender,setGender] = useState(getBasicInfoData?.gender)  
    const [date_of_birth,setDateOfBirth] = useState(getBasicInfoData?.date_of_birth)  
    const [educational_qualification,setEducationalQualification] = useState(getBasicInfoData?.educational_qualification)  
    const [current_job,setCurrentJob] = useState(getBasicInfoData?.current_job)  
    const [work_exp_in_years,setWorkExpInYears] = useState(getBasicInfoData?.work_exp_in_years)  
    const [phone_number, setPhoneNumber] = useState(getBasicInfoData?.phone_number)  
    const [name, setName] = useState(getBasicInfoData?.name)
    const [thumbnail, setThumbnail] = useState('') 
    const [thumbnailview, setThumbnailView] = useState('') 

  

    
   
    const handledistict = (event) => {
        const jobdistictids= event.target.value;
        setDistrict(jobdistictids);  
    } 
    const [hideSelected,setHideSelected] = useState(false)
    const [hideSelectedChange,setHideSelectedChange] = useState(true) 
    const handledivision = (event) => {
        const jobdivisionids= event.target.value;
        setDivisionid(jobdivisionids);  
        setDivision(jobdivisionids); 
        setHideSelected(event.target.value) 
        setHideSelectedChange(!hideSelectedChange)
    }  
        
    const districtItemsFilter = districtItemLocal?.filter((districtItemz) => {
        const newData = districtItemz?.division ===  division;
        const oldData = districtItemz?.division ===  divisionid;
        if(hideSelectedChange ? newData : ''){ 
            return districtItemz; 
        }else if(hideSelectedChange ? '' : oldData){ 
            return districtItemz;
        }else  {
            return null;
        } 
    })    
      
    // call all useEffect   
    const salesAndMarketingCategoryId = localStorage.getItem('salesAndMarketing');  
 
     useEffect(() => {   
        dispatch(getProfileSettingAction()) 
    }, []); 
    useEffect(() => { 
       dispatch(getBasicInfoAction()) 
    }, [])
      // job Category load Data
    const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer)   
    const jobCategoryItemLocal = getJobCategoryItems();
    useEffect(() => {      
        if(isInvalid(jobCategoryItemLocal)){
            dispatch(getJobCategoryAction()) 
        }
    }, [dispatch])  
   
    useEffect(() => {      
        if(salesAndMarketingCategoryId){ 
           dispatch(getJobEducationalAction(salesAndMarketingCategoryId))  
        } 
    }, [dispatch]);   


    // number validatoin
    const basicInfoNumber = (e) =>{
        setPhoneNumber(numberCheck(e))
    }
   
 
 

    // call submit button
    const createBasicInfoProfile  = (e) =>{
        // e.preventDefault();    
        const formdata = new FormData(); 
        formdata.append("user", profileData?.id); 
        formdata.append("division", division); 
        formdata.append("district", district); 
        formdata.append("thumbnail", thumbnail); 
        formdata.append("name", name); 
        formdata.append("phone_number", phone_number);  
        formdata.append("gender",gender); 
        formdata.append("date_of_birth", date_of_birth);        
        formdata.append("educational_qualification", educational_qualification); 
        formdata.append("current_job", current_job); 
        formdata.append("work_exp_in_years", work_exp_in_years);  
       
        dispatch(postBasicInfoAction(formdata,navigate)) 
        
    }
 
 

        //    call all data in allofEidtData
        const AllOfEditData = () => {     
            setDivision(getBasicInfoData?.division); 
            setDistrict(getBasicInfoData?.district); 
            setCurrentJob(getBasicInfoData?.current_job); 
            setGender(getBasicInfoData?.gender);   
            setDateOfBirth(getBasicInfoData?.date_of_birth);   
            setEducationalQualification(getBasicInfoData?.educational_qualification); 
            setWorkExpInYears(getBasicInfoData?.work_exp_in_years);  
            setPhoneNumber(getBasicInfoData?.phone_number);  
            setName(getBasicInfoData?.name); 
            setThumbnail(getBasicInfoData?.thumbnail);     
        }  

        //    call all useEffact action
        useEffect(() => {  
        if(getBasicInfoData)  {   
        AllOfEditData();  
        }  
        }, [getBasicInfoData]);   
 

        // call submit button
    const updateBasicInfoProfile  = (e) =>{
        // e.preventDefault();    
        const formdata = new FormData(); 
        formdata.append("user", profileData?.id); 
        formdata.append("division", division); 
        formdata.append("district", district);  
        formdata.append("name", name); 
        formdata.append("phone_number", phone_number);  
        formdata.append("gender",gender); 
        formdata.append("date_of_birth", date_of_birth);        
        formdata.append("educational_qualification", educational_qualification); 
        formdata.append("current_job", current_job); 
        formdata.append("work_exp_in_years", work_exp_in_years);  
         if(thumbnailview){
             formdata.append("thumbnail", thumbnail); 
         }
        dispatch(patchBasicInfoAction(formdata,navigate)) 
   
    }     

    // all onchage 

    const imageonChange = (e) => { 
          setThumbnail(e.target.files[0]);
          setThumbnailView(URL.createObjectURL(e.target.files[0]))  
    }

    const nameonChange = (e) => {
        setName(e.target.value)
    }

    const genderonChange = (e) => {
        setGender(e.target.value)
    }


    const educationonChange = (e) => { 
        setEducationalQualification(e.target.value)
    }

    const dateOfBirthonChange = (e) => { 
        setDateOfBirth(e.target.value)
    }
  
    const currentJobonChange = (e) => { 
        setCurrentJob(e.target.value)
    }

    const workExpInYearsonChange = (e) => { 
        setWorkExpInYears(numberCheck(e))
    }


   
    return (
        <>
           <div className="shadows mb-5 mt-3"  >
               <div className="col-lg-10 m-auto shadow-none p-4 bg-white rounded">   
                  <div className="row" >
                    <div className="col-md-6 col-sm-6 col-6"> 
                    <h5 className="mt-2">
                    {languageCheck() === 'bn' ? 'মৌলিক তথ্য' : "Basic information"}
                    </h5> 
                    </div>   
                    <div className="col-md-6 col-sm-6 col-6"> 
                    <div className="profile__button text-right"> 
                    <button type="submit" onClick={basicInformationShow} className="main__btn__mini bg-info"> 
                     <i className={basicInformation ?"fa fa-minus fa_custom_card" : "fa fa-plus fa_custom_card"}></i></button>
                    </div>
                    </div> 
                </div> 
                <hr />    
                {basicInformation?<form >   
                    <div className="row mt-2">
                    <div className="col-md-12">  
                    <div className="single_form pro-setting-image">
                        <p> 
                        {languageCheck() === 'bn' ? 'প্রোফাইল ছবি' : "Profile Image"}
                        </p> 
                        <div className="pro-image pt-10"> 
                            {thumbnail ? 
                                thumbnailview ? <img src={thumbnailview} required alt="" style={{width: "100px",height:'100px'}} /> :
                            <img src={thumbnail} alt="" style={{width: "100px",height:'100px'}} />   :
                            <img src={profile} alt="" style={{width: "100px",height:'100px'}} />}
                        </div> 
                    </div>
                    </div>

                      <div className="col-md-12 mt-3">  
                             <div className="single_form pro-setting-image"> 
                             <label htmlFor="choose_profile_image" className="control-label">
                             {languageCheck() === 'bn' ? 'প্রোফাইল ইমেজ নির্বাচন করুন' : "Choose Profile Image"}
                             </label> <br />
                                <input 
                                // {...register("thumbnail", {
                                //     required: true, 
                                //     onChange: imageonChange, 
                                // })}   
                                onChange={(e) => imageonChange(e)}
                                accept="image/png, image/jpg, image/jpeg"
                                type="file"  
                                id="choose_profile_image"  
                                />
                             </div>
                             {/* {errors.thumbnail && errors.thumbnail.type === "required" && (
                            <span style={{color: 'red'}}>You must fill out this field.</span>)}  */}
                            <span style={{color:'red'}}>
                                {basicInfoCreateError?.thumbnail?.map((error)=>(error?.message))}
                            </span> 
                       </div>

                    </div>
                    <div className="row mt-3">
                    <div className="col-md-6"> 
                    <div className="form-group">
                        <label htmlFor="name_id" className="control-label">
                        {languageCheck() === 'bn' ? 'নাম' : " Name"}
                         </label>
                        <input  
                        {...register("name", {
                            required: true, 
                            onChange: nameonChange, 
                            value:name
                        })}  
                        type="text" 
                        value={name}  
                        id="name_id" 
                        className="form-control"
                        placeholder={languageCheck() === 'bn' ? 'নাম' : " Name"}
                        />
                        
                    {errors.name && errors.name.type === "required" && (
                    <span style={{color: 'red'}}>You must fill out this field.</span>)} 

                    <span style={{color:'red'}}>
                        {basicInfoCreateError?.name?.map((error)=>(error?.message))}
                    </span>   
                    </div> 
                    <div className="form-group">
                     <label htmlFor="choose_gender" className="control-label"> 
                     {languageCheck() === 'bn' ? 'লিঙ্গ' : "Gender"}
                     </label>
                      <select  
                      {...register("gender", {
                        required: true, 
                        onChange: genderonChange,  
                        value:gender
                      })}   
                      value={gender}   
                      id="choose_gender" 
                      className="form-control"> 
                            <option value=""> 
                            {languageCheck() === 'bn' ? 'লিঙ্গ নির্বাচন করুন' : "Choose Gender"}
                            </option> 
                            <option value="Male">{languageCheck() === 'bn' ? 'পুরুষ' : "Male"}</option> 
                            <option value="Female">{languageCheck() === 'bn' ? 'মহিলা' : "Female"}</option> 
                            <option value="Other">{languageCheck() === 'bn' ? 'অন্যান্য' : "Other"}</option> 
                     </select> 
                     {errors.gender && errors.gender.type === "required" && (
                    <span style={{color: 'red'}}>You must fill out this field.</span>)} 
                     
                    <span style={{color:'red'}}>
                        {basicInfoCreateError?.gender?.map((error)=>(error?.message))}
                    </span>   

                    </div>
                    <div className="form-group">
                      <label htmlFor="division_id" className="control-label"> 
                          {languageCheck() === 'bn' ? 'বিভাগ' : "Division"}
                       </label>
                        <select  
                        {...register("division", {
                          required: true, 
                          onChange: handledivision, 
                          value:division
                        })}   
                        value={division}   
                        id="division_id" 
                        className="form-control">
                        <option value=""> 
                        {languageCheck() === 'bn' ? 'বিভাগ নির্বাচন করুন' : "Choose Division"}
                        </option>
                         {divisionItemLocal?.map((jobdivision)=>( 
                         <option key={jobdivision?.id}  
                         value={jobdivision?.id}> {jobdivision.name}</option>   )) }
                        </select>
                         
                        {errors.division && errors.division.type === "required" && (
                       <span style={{color: 'red'}}>You must fill out this field.</span>)} 
                        <span style={{color:'red'}}>
                            {basicInfoCreateError?.division?.map((error)=>(error?.message))}
                        </span>   
                     </div> 
                    <div className="form-group">  
                        <label htmlFor="education_type" className="control-label">
                        {languageCheck() === 'bn' ? 'শিক্ষাগত যোগ্যতা' : "Educational Qualification"} 
                          </label>
                      <select  
                       {...register("educational_qualification", {
                        required: true, 
                        onChange: educationonChange,  
                        value:educational_qualification
                       })}   
                      value={educational_qualification}  
                      id="education_type" 
                      className="form-control">
                     <option value=""> 
                     {languageCheck() === 'bn' ? 'শিক্ষাগত যোগ্যতা নির্বাচন করুন' : "Choose Educational Qualification "}
                     </option>
                        {jobeducational?.map((jobEducationalQL)=>( 
                        <option key={jobEducationalQL?.id}  
                        value={jobEducationalQL?.id}> {jobEducationalQL.item_name}</option>   )) }
                     </select>

                     {errors.educational_qualification && errors.educational_qualification.type === "required" && (
                        <span style={{color: 'red'}}>You must fill out this field.</span>)}
                      
                    <span style={{color:'red'}}>
                        {basicInfoCreateError?.educational_qualification?.map((error)=>(error?.message))}
                    </span>   
                    </div>

                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="phone_number" className="control-label"> 
                        {languageCheck() === 'bn' ? 'ফোন' : "Phone"}
                        </label>
                        <input 
                         {...register("phone_number", {
                            required: true,
                            pattern: /^[0-9]+$/,
                            maxLength: 11,
                            minLength: 11,
                            onChange: basicInfoNumber,
                            value: phone_number
                        })}      
                        placeholder={languageCheck() === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                        type="text"  
                        value={phone_number}  
                        id="phone_number" 
                        className="form-control" 
                         />
                      {errors.phone_number && errors.phone_number.type === "required" && (
                        <span style={{color: 'red'}}>You must fill out this field.</span>)}
                      {errors.phone_number && errors.phone_number.type === "pattern" && (
                        <span style={{color: 'red'}}>You must enter number.</span>)}
                      {errors.phone_number && errors.phone_number.type === "minLength" && (
                        <span style={{color: 'red'}}>Please use must 11 characters.</span>)}
                      {errors.phone_number && errors.phone_number.type === "maxLength" && (
                        <span style={{color: 'red'}}>Please use must 11 characters.</span>)}
        
                         
                    <span style={{color:'red'}}>
                        {basicInfoCreateError?.phone_number?.map((error)=>(error?.message))}
                    </span>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="date_of_birth"  className="control-label"> 
                        {languageCheck() === 'bn' ? 'জন্ম তারিখ' : "Date of birth"}
                        </label>
                        <input  
                         {...register("date_of_birth", {
                            required: true, 
                            onChange: dateOfBirthonChange,  
                            value:date_of_birth
                          })}   
                        type="date" 
                        value={date_of_birth}  
                        id="date_of_birth" 
                        className="form-control"
                         />

                        {errors.date_of_birth && errors.date_of_birth.type === "required" && (
                       <span style={{color: 'red'}}>You must fill out this field.</span>)} 
                        <span style={{color:'red'}}>
                            {basicInfoCreateError?.date_of_birth?.map((error)=>(error?.message))}
                        </span>

                    </div>
                    <div className="form-group">
                    <label htmlFor="district_id" className="control-label">  
                    {languageCheck() === 'bn' ? 'জেলা' : "District"}
                    </label>
                    <select  
                    {...register("district", {
                    required: true, 
                    onChange: handledistict, 
                    value:district
                    })}  
                    value={district}     
                    id="district_id" 
                    className="form-control"> 
                    <option value=""> 
                    {languageCheck() === 'bn' ? 'জেলা নির্বাচন করুন' : "Choose District"}       
                    </option>
                    {districtItemsFilter?.map( (districts)=>(
                        <option key={districts?.id}  
                        value={districts?.id}> {districts?.name}</option>
                    ))} 
                    </select>

                      {errors.district && errors.district.type === "required" && (
                       <span style={{color: 'red'}}>You must fill out this field.</span>)} 
                    
                        <span style={{color:'red'}}>
                            {basicInfoCreateError?.district?.map((error)=>(error?.message))}
                        </span>
                     </div>
                    <div className="form-group"> 
                        <label htmlFor="current_job" className="control-label">
                        {languageCheck() === 'bn' ? 'বর্তমান চাকরি' : "Current Job"}
                        </label>
                        <select  
                        {...register("current_job", {
                        required: true, 
                        onChange: currentJobonChange,
                        value:current_job
                        })}   
                        value={current_job}   
                        id="current_job" 
                        className="form-control">
                        <option value=""> 
                        {languageCheck() === 'bn' ? 'বর্তমান চাকরি নির্বাচন করুন' : "Current Job"}
                        </option>  
                        {jobCategoryItemLocal?.map( (jobCatepositions)=>(
                            <option key={jobCatepositions?.id} value={jobCatepositions?.name}> {jobCatepositions?.name}</option>
                        ))}
                        </select> 

                        {errors.current_job && errors.current_job.type === "required" && (
                        <span style={{color: 'red'}}>You must fill out this field.</span>)} 

                        <span style={{color:'red'}}>
                            {basicInfoCreateError?.current_job?.map((error)=>(error?.message))}
                        </span>   
                    </div>

                    </div>
                </div>  
                <div className="row">
                    <div className="col-md-12"> 
                    <div className="form-group">
                        <label htmlFor="years_of_experience"   className="control-label">
                        {languageCheck() === 'bn' ? 'অভিজ্ঞতা মোট বছর' : "Total years of experience"}
                        </label>
                        <input  
                        {...register("work_exp_in_years", {
                        required: true, 
                        onChange: workExpInYearsonChange, 
                        value:work_exp_in_years
                        })}   
                        type="text" 
                        value={work_exp_in_years}  
                        id="years_of_experience" 
                        className="form-control"
                        placeholder={languageCheck() === 'bn' ? 'অভিজ্ঞতা মোট বছর' : "Total years of experience"}
                        />


                    {errors.work_exp_in_years && errors.work_exp_in_years.type === "required" && (
                    <span style={{color: 'red'}}>You must fill out this field.</span>)} 


                    <span style={{color:'red'}}>
                        {basicInfoCreateError?.work_exp_in_years?.map((error)=>(error?.message))}
                    </span>   
                    </div>
                    </div>
                </div>
                <div className="row mt-2">
                 <div className="col-md-12">  
                    {getBasicInfoData === undefined ?  
                    <button type="button" onClick={handleSubmit(createBasicInfoProfile)} className="main-btn bg-info">
                      {languageCheck() === 'bn' ? 'তৈরি করুন' : "Create"} 
                    </button>:
                    <><button type="button" onClick={handleSubmit(updateBasicInfoProfile)} className="main-btn mr-4 bg-info">
                    {languageCheck() === 'bn' ? 'সংরক্ষণ' : "Save"} 
                    </button> 
                      <Link to="/dashboard/" className="main-btn"> 
                      {languageCheck() === 'bn' ? 'বাতিল করুন' : "Cancel"} 
                      </Link>      
                      </>}
                    </div>
                 </div>
                </form>:''}   
                </div>  
            </div> 
        </>
    );
};

export default BasicInformation;