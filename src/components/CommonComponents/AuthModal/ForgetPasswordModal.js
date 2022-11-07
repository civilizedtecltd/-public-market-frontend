import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { languageCheck, numberCheck } from '../../../helpers/Helpers';

const ForgetPasswordModal = ({
ResetPasswordSubmit,security_code,setSecurityCode,postResetPasswordSubmitError,phone_number,
setPhoneNumber,postResetPasswordSubmitLoading,setConfirmPassword,confirm_password,
setPassword,password}) => {

    const { register, handleSubmit, watch, formState: { errors }  } = useForm();

    const forgetOnChangeNumber = (e) => {
        // setPhoneNumber(numberCheck(e))
    }
    const forgetOnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const forgetOnChangeCPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const forgetOnChangeOtp = (e) => {
        setSecurityCode(numberCheck(e))
    }


    const [passwordHideIcon,setPasswordHideIcon] = useState(false) 
    const [confirmPasswordHideIcon,setConfirmPasswordHideIcon] = useState(false) 
    const passwordHideValues = () => {
        setPasswordHideIcon(x => !x)   
    } 

    const confirmPasswordHideValues = () => { 
        setConfirmPasswordHideIcon(x => !x)   
    } 
  
    
    return (
        <>
        
        <div  style={{marginTop:'100px'}} className="modal fade" id={"staticBackdrop"}   data-bs-backdrop="static" data-bs-keyboard="false"   
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header" style={{border:'none',padding:'0rem 1rem'}}>  
                    </div>
                        <div className="modal-body" style={{padding: "0rem 1rem"}}>
                        <div className="sign_in_form">
                            <div className="sign_title d-flex" style={{justifyContent: "space-between"}} > 
                               <h5 className="title"> 
                               {languageCheck() === 'bn' ? "পাসওয়ার্ড রিসেট করুন" : "Reset Password" }</h5>  
                            <button  type="button" style={{marginTop:'10px'}} 
                            id="button__modal" className="btn-close" 
                            data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> 
                                <form onSubmit={handleSubmit(ResetPasswordSubmit)} autoComplete="off"  >
                                     

                                    <div className="sign_form_wrapper">
                                        <div className="single_form">
                                            <input 
                                              {...register("security_code", {
                                                required: true,
                                                pattern: /^[0-9]+$/,
                                                maxLength: 6,
                                                minLength: 6,
                                                onChange: forgetOnChangeOtp,
                                                value: security_code
                                              })} 
                                            value={security_code}  
                                            type="text" 
                                            placeholder={languageCheck() === 'bn' ? "আপনার otp কোড লিখুন" : "Enter your otp code"} 
                                             />
                                            <i className="fal fa-barcode"></i> 
                                        </div> 

                                        {errors.security_code && errors.security_code.type === "required" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                        'You must fill out this field'}  </span>)}
                                        {errors.security_code && errors.security_code.type === "pattern" && (
                                        <span style={{color: 'red'}}> 
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই নম্বর লিখতে হবে।' : 
                                        'You must enter number'}</span>)}
                                        {errors.security_code && errors.security_code.type === "minLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আমাকে অবশ্যই ৬ সংখ্যার কোড ব্যবহার করতে হবে।' : 
                                        'Must be Use 6 Digit Code.'} </span>)}
                                        {errors.security_code && errors.security_code.type === "maxLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আমাকে অবশ্যই ৬ সংখ্যার কোড ব্যবহার করতে হবে।' : 
                                        'Must be Use 6 Digit Code.'} </span>)}
                                         
                                        {errors.security_code ? "" :<>
                                        {postResetPasswordSubmitError?.security_code && <span style={{color:'red'}}>
                                        {postResetPasswordSubmitError?.security_code?.map((error)=>(error?.message))}
                                        </span>}
                                        </>}
                                        
                                    </div> 

                                    <div className="sign_form_wrapper">
                                        <div className="single_form"> 
                                            <i style={{top:"13px",left:"6px",color:"black"}}  className="">+88</i> 
                                            <input 
                                            {...register("phone_number", {
                                                required: true,
                                                pattern: /^[0-9]+$/,
                                                maxLength: 11,
                                                minLength: 11,
                                                onChange: forgetOnChangeNumber,
                                                value: phone_number
                                            })}  
                                            placeholder={languageCheck() === 'bn' ? "ফোন নম্বর" : "Phone Number"}
                                            type="text" 
                                            value={phone_number} 
                                            autoFocus={true}
                                            autoComplete="off"
                                            />
                                        </div>
                                        {errors.phone_number && errors.phone_number.type === "required" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                        'You must fill out this field'}  </span>)}
                                        {errors.phone_number && errors.phone_number.type === "pattern" && (
                                        <span style={{color: 'red'}}> 
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই নম্বর লিখতে হবে।' : 
                                        'You must enter number'}</span>)}
                                        {errors.phone_number && errors.phone_number.type === "minLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                        'Please enter a valid 11-digit phone number starting with 0.'} </span>)}
                                        {errors.phone_number && errors.phone_number.type === "maxLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                        'Please enter a valid 11-digit phone number starting with 0.'} </span>)}

                                        
                                        {errors.phone_number ? "" :<>
                                        {postResetPasswordSubmitError?.phone_number && <span style={{color:'red'}}>
                                        {postResetPasswordSubmitError?.phone_number?.map((error)=>(error?.message))}
                                        </span>}
                                        </>}
                                    </div>
                                    
                                    <div className="sign_form_wrapper">
                                    <div className="single_form">
                                        <i className="fal fa-key"></i>
                                        <input  
                                        {...register("password", {
                                            required: true, 
                                            minLength: 8,
                                            onChange: forgetOnChangePassword,
                                            value: password
                                        })}    
                                        type={!passwordHideIcon ?"password":"text"}
                                        placeholder={languageCheck() === 'bn' ? 'পাসওয়ার্ড' : 'Password'}/>

                                        <div className='password_icon' onClick={passwordHideValues}>
                                            {!passwordHideIcon ?  
                                            <i className="fa fa-eye fa-eye-slash"></i>:
                                            <i  className="far fa-eye" ></i> }
                                        </div>
                                       
                                        {errors.password && errors.password.type === "required" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                        'You must fill out this field'}  </span>)} 
                                        {errors.password && errors.password.type === "minLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই ৮ টি অক্ষর ব্যবহার করতে হবে।' : 
                                        'You must use at least 8 characters.'}  </span>)}
                                    </div>
                                    </div>
                                    
                                    <div className="sign_form_wrapper"> 
                                    <div className="single_form">
                                        <i className="fal fa-key"></i>
                                        <input  
                                        {...register("confirm_password", {
                                            required: true, 
                                            validate: (value) => value === watch('password'),
                                            onChange: forgetOnChangeCPassword,
                                            value: confirm_password
                                        })}     
                                        type={!confirmPasswordHideIcon ?"password":"text"}    
                                        placeholder={languageCheck() === 'bn' ? 'পাসওয়ার্ড নিশ্চিত করুন' : 'Confirm Password'}/>
                                         <div className='password_icon' onClick={confirmPasswordHideValues}>
                                            {!confirmPasswordHideIcon ?  
                                            <i className="fa fa-eye fa-eye-slash"></i>:
                                            <i  className="far fa-eye" ></i> }
                                        </div> 
                                        {errors.confirm_password && <span style={{color:'red'}} >
                                        {languageCheck() === 'bn' ? 'পাসওয়ার্ড  মিলেনি' : "Passwords didn't match"}
                                        </span>}
                                         
                                    
                                     </div>
                                     </div>
                                     <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center"> 
                                            <button disabled={postResetPasswordSubmitLoading} 
                                            type="submit"
                                            className={postResetPasswordSubmitLoading?
                                            "loading__button mt-20 log-in disabled":"main-btn auth__btn mt-20 log-in"}> 
                                            {postResetPasswordSubmitLoading ?   
                                            <><div className="spinner-border" role="status">
                                            <span className="sr-only"></span>
                                            </div></>
                                            :languageCheck() === 'bn' ? "জমা দিন" : "Submit"}
                                            </button>
                                        </div>
                                    </div>  
                                 </div> 


                              </form>
                          </div>
                      </div> 
                  </div>
              </div>
          </div>  
        </>
    );
};

export default ForgetPasswordModal;