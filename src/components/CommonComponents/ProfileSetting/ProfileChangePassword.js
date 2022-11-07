import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { languageCheck } from '../../../helpers/Helpers';
import Key from '../../../lang/key';
import translate from '../../../lang/translate';
import Input from '../Input';

const ProfileChangePassword = ({
changePassword,current_password,setCurrentPassword,new_password,setNewPassword,
confirm_password,setConfirmPassword,postProfileSettingChangePasswordLoading
}) => {
    
    const { register, handleSubmit, watch, formState: { errors }  } = useForm({});

    const [oldPasswordHideIcon,setOldPasswordHideIcon] = useState(false) 
    const [passwordHideIcon,setPasswordHideIcon] = useState(false) 
   const [confirmPasswordHideIcon,setConfirmPasswordHideIcon] = useState(false) 
   
   const oldPasswordHideValues = () => { 
       setOldPasswordHideIcon(x => !x)   
   } 
   
   const passwordHideValues = () => {
       setPasswordHideIcon(x => !x)   
   } 

   const confirmPasswordHideValues = () => { 
       setConfirmPasswordHideIcon(x => !x)   
   }  

    return (
        <>
             <div className="post_form mt-50">
                <div className="post_title">
                    <h5 className="title">
                    {languageCheck() === 'bn' ? 'পাসওয়ার্ড পরিবর্তন করুন' : 'Change Password'}
                    </h5> 
                </div>
                <form  onSubmit={handleSubmit(changePassword)} > 
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="single_form">
                                <label htmlFor='old_password' >{translate(Key.old_password_leng)} </label>
                                <input 
                                required 
                                value={current_password} 
                                onChange={(e) => setCurrentPassword(e.target.value)}    
                                type={!passwordHideIcon ?"password":"text"}
                                id="old_password" 
                                placeholder={translate(Key.old_password_leng)} />  
                                
                                <div className='password_icon' onClick={passwordHideValues}>
                                    {!passwordHideIcon ?  
                                    <i className="fa fa-eye fa-eye-slash"></i>:
                                    <i  className="far fa-eye" ></i> }
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-12">
                        <div className="single_form">
                                <label htmlFor='new_password'>
                                {translate(Key.new_password_leng)}
                                </label>
                                <input  
                                {...register("password", { required: true, minLength: 8 })} 
                                value={new_password} 
                                onChange={(e) => setNewPassword(e.target.value)}   
                                type={!confirmPasswordHideIcon ?"password":"text"}  
                                id='new_password'  
                                placeholder={translate(Key.new_password_leng)} />
                                 <div className='password_icon' onClick={confirmPasswordHideValues}>
                                    {!confirmPasswordHideIcon ?  
                                    <i className="fa fa-eye fa-eye-slash"></i>:
                                    <i  className="far fa-eye" ></i> }
                                </div> 
     
                                {errors.password && <span style={{color:'red'}} className="error red">
                                {languageCheck() === 'bn' ? 'পাসওয়ার্ড ৮ অক্ষরের হতে হবে' : 'Password Must be 8 Character'}
                                </span>}
                            </div>
                        </div>
                        <div className="col-md-12">
                        <div className="single_form">
                                <label htmlFor='confirm_password'>   
                                    {translate(Key.confirm_password_leng)}
                                </label>
                            <input 
                            {...register("confirm_password", { required: true, validate: (value) => value === watch('password') })}
                            value={confirm_password} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            type={!oldPasswordHideIcon ?"password":"text"} 
                            id='confirm_password'
                            placeholder={translate(Key.confirm_password_leng)} 
                            /> 
                                <div className='password_icon' onClick={oldPasswordHideValues}>
                                    {!oldPasswordHideIcon ?  
                                    <i className="fa fa-eye fa-eye-slash"></i>:
                                    <i  className="far fa-eye" ></i> }
                                </div>


                            {errors.confirm_password && <span style={{color:'red'}} >
                                {languageCheck() === 'bn' ? 'পাসওয়ার্ড  মিল নেই' : "Passwords didn't match."}
                            </span>}
                        </div>
                        </div>



                        <div className="col-md-6">
                            <div className="single_form" style={{display: "flex", justifyContent: "center"}} > 
                                <button disabled={postProfileSettingChangePasswordLoading} type="submit" 
                                className={postProfileSettingChangePasswordLoading?"loading__button mt-20 log-in disabled":"main_btn_profile main-btn mt-20 log-in"}> 
                                {postProfileSettingChangePasswordLoading ?   
                                <><div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                                </div></>
                                :languageCheck() === 'bn' ? 'পাসওয়ার্ড আপডেট করুন':"Update Password"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileChangePassword;