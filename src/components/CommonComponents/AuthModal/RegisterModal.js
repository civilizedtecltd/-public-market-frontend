import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { languageCheck, numberCheck } from '../../../helpers/Helpers';
 
const RegisterModal = ({
    RegisterSubmit,RegisterVerifySubmitNext,phoneNumberError,securityCodeError,sessionTokenError,
    security_code,setSecurityCode,clearErrorModalBtn
}) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
   

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
       <div style={{marginTop: '200px'}} className="modal fade" id={"staticBackdrop"} data-bs-backdrop="static"
                 data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content"> 
                        <div className="modal-header" style={{border: 'none', padding: '0rem 1rem'}}>
                        </div>
                        <div className="modal-body" style={{padding: "0rem 1rem"}}>
                            <div className="sign_in_form">
                                <div className="sign_title d-flex" style={{justifyContent: "space-between"}}>
                                    <h5 className="title">
                                        {languageCheck() === 'bn' ? 'এখন যাচাই করুন' : 'Please Verify Now'}</h5>
                                    <button onClick={clearErrorModalBtn} type="button" style={{marginTop: '10px'}}
                                            id="button__modal" className="btn-close"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form  onSubmit={handleSubmit(RegisterSubmit)}>
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
                                                placeholder={languageCheck() === 'bn' ? '6 সংখ্যার কোড লিখুন' : 'Enter 6 digits code'}

                                            />
                                            <i className="fas fa-barcode"></i>
                                        </div>
                                        {errors.security_code && errors.security_code.type === "required" && (
                                        <span style={{color: 'red'}}>You must fill out this field.</span>)}
                                        {errors.security_code && errors.security_code.type === "pattern" && (
                                        <span style={{color: 'red'}}>You must enter number.</span>)}
                                        {errors.security_code && errors.security_code.type === "minLength" && (
                                        <span style={{color: 'red'}}>Must be Use 6 Digit Code.</span>)}
                                        {errors.security_code && errors.security_code.type === "maxLength" && (
                                        <span style={{color: 'red'}}>Must be Use 6 Digit Code.</span>)}

                                         {errors.security_code ? "" :<>
                                        {sessionTokenError && <span style={{color: 'red'}}>{sessionTokenError}</span>}
                                        </>}
                                        {errors.security_code ? "" :<>
                                        {securityCodeError && <span style={{color: 'red'}}>{securityCodeError}</span>}
                                        </>}
                                        {errors.security_code ? "" :<>
                                        {phoneNumberError && <span style={{color: 'red'}}>{phoneNumberError}</span>}
                                        </>} 
                                        
                                        

                                    </div>

                                    <div className="row justify-content-space-between">
                                        {/* <div className="col-6">
                                            <button onClick={RegisterVerifySubmitNext} className="main-btn auth__btn mt-20 log-in"
                                                    id="resend_code" type="button">
                                                {languageCheck() === 'bn' ? 'পুনরায় পাঠানো কোড' : 'Resend Code'}
                                            </button>
                                            
                                        </div> */}
                                        <div className="col-12">
                                            <button  
                                                    className="main-btn auth__btn verifyButton mt-20 log-in" type="submit">
                                                {languageCheck() === 'bn' ? 'যাচাই করুন' : '  Verify'}
                                            </button>
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

export default RegisterModal;