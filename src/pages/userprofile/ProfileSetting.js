import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserSidebar from '../../components/UserSidebar'; 
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import profile from '../../asset/frontend/assets/images/default.png' 
import { getDistrictAction, getDivisionAction } from "../../redux/action/coreAction";
import { getProfileSettingAction, postProfileSettingUpdateAction,postProfileSettingChangePasswordAction } from '../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction';
import { useForm } from "react-hook-form";
import { getDistrictItems, getDivisionItems, isInvalid } from "../../Utilities/Utilities";
import { languageCheck } from "../../helpers/Helpers";
import ProfileChangePassword from "../../components/CommonComponents/ProfileSetting/ProfileChangePassword";
 
 
   

const CustomerProfileSetting = () => {
    
    const { register, handleSubmit, watch, formState: { errors }  } = useForm();
    
    const navigate = useNavigate()  
    const dispatch = useDispatch();    
    const [divisionid, setDivisionid]= useState('');    
    const [division,setDivision] = useState('')
    const [district,setDistrict] = useState('') 
    const [email, setEmail] = useState('')
    const [phone_number, setPhoneNumber] = useState('') 
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [thumbnail, setThumbnail] = useState('') 
    const [thumbnailview, setThumbnailView] = useState('') 
    
    const [new_password, setNewPassword] = useState('') 
    const [confirm_password,setConfirmPassword] = useState('')  
    const [current_password,setCurrentPassword] = useState('')  
     
     
    //  // load data local storage  divisionItem
     const { divisionItem } = useSelector(state => state.getDivisionReducer)
     const divisionItemLocal = getDivisionItems(); 
     useEffect(() => {
         if(isInvalid(divisionItemLocal)){
            dispatch(getDivisionAction())
         } 
     }, [dispatch,divisionItem]) 

     // load data local storage  districtItem
   const { districtItem }  = useSelector(state => state.getDistrictReducer)
   const districtItemLocal = getDistrictItems();
   useEffect(() => {
       if(isInvalid(districtItemLocal)){
          dispatch(getDistrictAction())
       }
   }, [dispatch,districtItem])
    
    // call all reducers    
      
    const { profileData } = useSelector(state => state.getProfileSettingReducer)   

    const { profileSettingUpdateError ,profileSettingUpdateLoading } = useSelector(state => state.postProfileSettingUpdateReducer)  
    const { postProfileSettingChangePasswordLoading,postProfileSettingChangePasswordSuccess
    } = useSelector(state => state.postProfileSettingChangePasswordReducer)  
 
    
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
        const districtSelceltedItemId = districtItemLocal?.find((districtItemz) =>  districtItemz?.id === district) 
    
   
    // call all useEffect
    useEffect(() => {   
        dispatch(getDivisionAction()) 
    }, []);  
    useEffect(() => {   
        dispatch(getDistrictAction()) 
    }, []);
     useEffect(() => {   
        dispatch(getProfileSettingAction()) 
    }, []); 


    const AllOfEditData = () => {  
        setDivision(profileData?.division); 
        setDistrict(profileData?.district); 
        setEmail(profileData?.email) 
        setAddress(profileData?.address)
        setName(profileData?.name)
        setThumbnail(profileData?.thumbnail)
        setPhoneNumber(profileData?.phone_number) 
     }  
      
     useEffect(() => {  
        if(profileData)  {   
        AllOfEditData(); 
        } 
    }, [profileData]);  
 
          
    const updateProfileData  = (e) =>{
        e.preventDefault();   
        const formdata = new FormData(); 
        formdata.append("division", division); 
        formdata.append("district", district); 
        formdata.append("address",address); 
        formdata.append("name", name);  
        if(email){
          formdata.append("email", email); 
        } 
        if(thumbnailview){
          formdata.append("thumbnail", thumbnail); 
        }  
        dispatch(postProfileSettingUpdateAction(formdata,navigate))  
     }

     const changePassword = () => {
        const formdata = new FormData(); 
        formdata.append("new_password", new_password); 
        formdata.append("current_password", current_password);   
        dispatch(postProfileSettingChangePasswordAction(formdata,navigate))  
     }
     
     useEffect(() => { 
        setNewPassword('')
        setConfirmPassword('')
        setCurrentPassword('')   
     },[postProfileSettingChangePasswordSuccess])
   
      
    const loginTypeForChangePassword = localStorage.getItem('loginMedia') 
  

    return (
        <>
            <Header /> 
            
                <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row"> 
                           {/* user dashbord sidebar */} 
                           <UserSidebar thumbnailview={thumbnailview}  /> 
                           <div className="col-lg-8">
                            <div className="post_form mt-50">
                                <div className="post_title">
                                    <h5 className="title">
                                    {languageCheck() === 'bn' ? 'প্রোফাইল সেটিংস' : 'Profile Settings'}
                                    </h5>
                                </div>
                                    <div className="pro-image pt-20"> 
                                        {thumbnail ? 
                                          thumbnailview ? <img src={thumbnailview} alt="" style={{width: "100px",height:'100px'}} /> :
                                        <img src={thumbnail} alt="" style={{width: "100px",height:'100px'}} />   :
                                        <img src={profile} alt="" style={{width: "100px",height:'100px'}} />}
                                    </div>
                                    <form onSubmit={updateProfileData} >
                                         
                                        <div className="row">
                                            <div className="col-md-12"> 
                                                <div className="single_form">
                                                    <label htmlFor="name">{languageCheck() === 'bn' ? 'পুরো নাম' : 'Full Name'}</label>
                                                    <input  
                                                     onChange={(e) => setName(e.target.value)}  
                                                     type="text" 
                                                     value={name} 
                                                     name="name" 
                                                     id="name" 
                                                     placeholder={languageCheck() === 'bn' ? 'পুরো নাম' : 'Full Name'} 
                                                    /> 
                                                    <span style={{color:'red'}}>{profileSettingUpdateError?.name?.map((error)=>(error?.message))}</span>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single_form">
                                                    <label htmlFor="email">{languageCheck() === 'bn' ? 'ইমেইল' : 'Email'}</label>
                                                    <input 
                                                    onChange={(e) => setEmail(e.target.value)} 
                                                    type="email" 
                                                    value={email} 
                                                    name="email" 
                                                    id="email" 
                                                    placeholder={languageCheck() === 'bn' ? 'ই-মেইল' : 'E-mail'}
                                                     />
                                                    <span style={{color:'red'}}>{profileSettingUpdateError?.email?.map((error)=>(error?.message))}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single_form">
                                                    <label htmlFor="phone" >{languageCheck() === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}</label>
                                                    <input 
                                                    type="text"  
                                                    disabled 
                                                    value={phone_number} 
                                                    name="phone" 
                                                    id="phone"  
                                                    placeholder={languageCheck() === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                                                    />
                                                </div>
                                            </div> 
                                            <div className="col-md-6">
                                                <div className="single_form">
                                                    <label htmlFor="address">{languageCheck() === 'bn' ? 'স্থানীয় ঠিকানা' : 'Local Address'}</label>
                                                    <input 
                                                    onChange={(e) => setAddress(e.target.value)}  
                                                    type="text" 
                                                    value={address} 
                                                    name="address" 
                                                    id="address"  
                                                    placeholder={languageCheck() === 'bn' ? 'ফ্ল্যাট নং, রোড নং' : 'Flat No. Road No.'} 
                                                    />
                                                </div>
                                            </div>
                                             
                                          <div className="col-md-6">
                                             <div className="mt-20"> 
                                               <div className="form-group">
                                             <label htmlFor="division_id" className="control-label">{languageCheck() === 'bn' ? 'বিভাগ' : 'Division'}</label>
                                            <select value={division} onChange={(e) => handledivision(e)} id="division_id" className="form-control">
                                            <option value="Choose Division">{languageCheck() === 'bn' ? 'বিভাগ নির্বাচন করুন' : 'Choose Division'}</option>
                                            { divisionItemLocal?.map((jobdivision)=>(<option key={jobdivision?.id} value={jobdivision?.id}> {jobdivision.name}</option> ))}
                                             </select>
                                             <span style={{color:'red'}}>{profileSettingUpdateError?.division?.map((error)=>(error?.message))}</span>
                                              
                                                 </div> 
                                             </div>
                                           </div>

                                        
                                            <div className="col-md-6">
                                              <div className="mt-20"> 
                                               <div className="form-group">
                                                    <label htmlFor="district_id" className="control-label">{languageCheck() === 'bn' ? 'জেলা' : 'District'} </label>
                                                <select value={districtSelceltedItemId?.id}  onChange={(e) => handledistict(e)}   name="district_id" id="district_id" className="form-control"> 
                                                <option value=""> {languageCheck() === 'bn' ? 'জেলা নির্বাচন করুন' : 'Choose District'} </option>
                                                    {districtItemsFilter?.map( (districts)=>(  <option key={districts?.id} value={districts?.id}> {districts?.name}</option> ))} 
                                                </select>
                                                </div>
                                              </div>
                                            </div>
 
                                            <div className="col-md-6">
                                                <div className="single_form pro-setting-image">
                                                    <label htmlFor="image"> {languageCheck() === 'bn' ? 'প্রোফাইল ছবি' : 'Profile Image'}</label>
                                                    <input  
                                                    onChange={(e) => {setThumbnail(e.target.files[0]);setThumbnailView(URL.createObjectURL(e.target.files[0]))}}
                                                    accept="image/png, image/jpg, image/jpeg"   
                                                    type="file" 
                                                    name="image" 
                                                    id="image" />
                                                </div>
                                            </div> 
                                            <div className="col-md-12">
                                                <div className="single_form w-50 m-auto mt-3" style={{display: "flex", justifyContent: "center"}}  >  
                                                    <button disabled={profileSettingUpdateLoading} type="submit" 
                                                    className={profileSettingUpdateLoading?
                                                    "loading__button mt-20 log-in disabled":"main_btn_profile main-btn mt-20 log-in"}> 
                                                    {profileSettingUpdateLoading ?   
                                                    <><div className="spinner-border" role="status">
                                                    <span className="sr-only"></span>
                                                    </div></>
                                                    :languageCheck() === 'bn' ? 'প্রোফাইল আপডেট করুন':"Update Profile"}
                                                    </button>
                                                </div>
                                            </div> 
                                        </div>
                                    </form>
                                </div>

 
 

                               {loginTypeForChangePassword === "manual"
                                 ? <ProfileChangePassword 
                                changePassword={changePassword}
                                current_password={current_password}
                                setCurrentPassword={setCurrentPassword}
                                new_password={new_password}
                                setNewPassword={setNewPassword}
                                confirm_password={confirm_password}
                                setConfirmPassword={setConfirmPassword}
                                postProfileSettingChangePasswordLoading={postProfileSettingChangePasswordLoading}
                                /> : null}



                                </div> 
                            </div>
                        </div>
                    </section>
                 <br/> 
            <Footer />
        </>
    );
};

export default CustomerProfileSetting;