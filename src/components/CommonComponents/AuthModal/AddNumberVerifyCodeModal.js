import React from 'react';
import { useForm } from 'react-hook-form';
import { languageCheck, numberCheck } from '../../../helpers/Helpers';

const AddNumberVerifyCodeModal = ({
    getSecurityCode,securityCodeError,NumberStore,getNumberStoreBtnLoding,setSecurityCode
}) => {
 
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

 

    const addNumberOtp = (e) => {
        setSecurityCode(numberCheck(e))
    }
 
    return (
        <>
 
          <div style={{marginTop: '100px'}} className="modal fade" id={"staticBackdrop"} data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body" style={{padding: "0rem 1rem"}}>
                            <div className="sign_in_form">
                                <div className="sign_title d-flex" style={{justifyContent: "space-between"}}>
                                    <h5 className="title varify__title" >
                                        {languageCheck() === 'bn' ? "৬ ডিজিটের ভেরিভিকেশন কোড দিন" : "Enter the 6 digit verification code"}</h5>
                                    <button type="button" style={{marginTop: '10px'}}
                                            id="button__modal" className="btn-close"
                                            data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <form  onSubmit={handleSubmit(NumberStore)} >


                                    <div className="sign_form_wrapper">
                                        <div className="single_form">
                                            <input 
                                                {...register("getSecurityCode", {
                                                    required: true,
                                                    pattern: /^[0-9]+$/,
                                                    maxLength: 6,
                                                    minLength: 6,
                                                    onChange: addNumberOtp,
                                                    value: getSecurityCode
                                                  })} 
                                                value={getSecurityCode} 
                                                type="text"
                                                placeholder={languageCheck() === 'bn' ? "আপনার otp কোড লিখুন" : "Enter your otp code"}
                                            />
                                            <i className="fal fa-barcode"></i>
                                        </div>
                                        {errors.getSecurityCode && errors.getSecurityCode.type === "required" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                        'You must fill out this field'}  </span>)}
                                        {errors.getSecurityCode && errors.getSecurityCode.type === "pattern" && (
                                        <span style={{color: 'red'}}> 
                                        {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই নম্বর লিখতে হবে।' : 
                                        'You must enter number'}</span>)}
                                        {errors.getSecurityCode && errors.getSecurityCode.type === "minLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আমাকে অবশ্যই ৬ সংখ্যার কোড ব্যবহার করতে হবে।' : 
                                        'Must be Use 6 Digit Code.'} </span>)}
                                        {errors.getSecurityCode && errors.getSecurityCode.type === "maxLength" && (
                                        <span style={{color: 'red'}}>
                                        {languageCheck() === 'bn' ? 'আমাকে অবশ্যই ৬ সংখ্যার কোড ব্যবহার করতে হবে।' : 
                                        'Must be Use 6 Digit Code.'} </span>)}
                                       
                                        {securityCodeError && <span style={{color:'red'}}>
                                            {securityCodeError?.phone_number?.security_code?.message}
                                        </span>} 
                                        {securityCodeError && <span style={{color:'red'}}>
                                            {securityCodeError?.phone_number?.error?.message}
                                        </span>}

                                    </div> 

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                            type="submit"
                                                            className={getNumberStoreBtnLoding ? "loading__button mt-20 log-in disabled" : "main-btn auth__btn mt-20 log-in"}>
                                                        {getNumberStoreBtnLoding ?
                                                            <>
                                                                <div className="spinner-border" role="status">
                                                                    <span className="sr-only"></span>
                                                                </div>
                                                            </>
                                                            : languageCheck() === 'bn' ? "জমা দিন" : "Submit"}
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

export default AddNumberVerifyCodeModal;