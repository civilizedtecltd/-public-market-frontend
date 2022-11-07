import React,{useState,useEffect} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { postForgetPasswordVerifySubmitAction, postResetPasswordSubmitAction } from '../../redux/action/userProfileAction/authAction/authAction';
import { useForm } from "react-hook-form";
import { languageCheck, numberCheck } from '../../helpers/Helpers';
import ForgetPasswordModal from '../../components/CommonComponents/AuthModal/ForgetPasswordModal';

const ForgetPassword = () => { 
        
    const { register, handleSubmit, watch, formState: { errors }  } = useForm();
    
    const navigate = useNavigate()  
    const dispatch = useDispatch()   
    
    const [getForgetTokenResponse, setForgetTokenResponse] = useState('');
     
    const ResetPasswordNumberSubmit = (e) =>{  
        const formdata = new FormData();    
        formdata.append("phone_number", '+88'+phone_number); 
        dispatch(postForgetPasswordVerifySubmitAction(formdata,setForgetTokenResponse))  
    } 
     // call reducers 
    const {forgetToken,postForgetPasswordVerifySubmitError,postForgetPasswordVerifySubmitLoading} = useSelector(state => state.postForgetPasswordVerifySubmitReducer) 
    const {postResetPasswordSubmitError,postResetPasswordSubmitLoading} = useSelector(state => state.postResetPasswordSubmitReducer) 
       
     

    useEffect(() => {
        if(getForgetTokenResponse){
            document.getElementById("forget__button").click();
        } 
    },[getForgetTokenResponse])
 
    const [phone_number, setPhoneNumber] = useState('')  
    const [security_code, setSecurityCode] = useState('') 
    const [password, setPassword] = useState('')  
    const [confirm_password,setConfirmPassword] = useState('')  
     
    const ResetPasswordSubmit = (e) =>{ 
        const formdata = new FormData();  
        formdata.append("phone_number", '+88'+phone_number); 
        formdata.append("security_code", security_code); 
        formdata.append("password", password); 
        formdata.append("session_token", getForgetTokenResponse); 
        dispatch(postResetPasswordSubmitAction(formdata,navigate))  
    }
   
    const forgetonChangeNumber = (e) => {
        setPhoneNumber(numberCheck(e)) 
    }

 
return (
        <>
          <Header/>
             <section className="sign_in_area mt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7 col-sm-9">
                            <div className="sign_in_form mt-5">
                                <div className="sign_title">
                                    <h5 className="title"> 
                                    {languageCheck() === 'bn' ? "পাসওয়ার্ড ভুলে গেছেন" : "Forget Password" }
                                    </h5>
                                </div>
                                <form onSubmit={handleSubmit(ResetPasswordNumberSubmit)} autoComplete="off" >
                                     <div className="sign_form_wrapper">
                                        <div className="single_form"> 
                                            <i style={{top:"13px",left:"6px",color:"black"}}  className="">+88</i> 
                                            <input   
                                                {...register("phone_number", {
                                                    required: true,
                                                    pattern: /^[0-9]+$/,
                                                    maxLength: 11,
                                                    minLength: 11,
                                                    onChange: forgetonChangeNumber,
                                                    value: phone_number
                                                })}   
                                                value={phone_number}
                                                placeholder={languageCheck() === 'bn' ? "ফোন নম্বর" : "Phone Number" }  
                                                type="text" 
                                                autoFocus={true}
                                                autoComplete="off"
                                               /> 
                                               {errors?.phone_number && errors?.phone_number.type === "required" && (
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
 
                                              
                                                {<span style={{color:'red'}}>
                                                {postForgetPasswordVerifySubmitError?.phone_number?.map((error)=>(error?.message))}
                                                </span>}
                                              
                                        </div>
                                    </div> 

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
 
                                            {/* <div className="login__btn"> */}
                                                <button disabled={postForgetPasswordVerifySubmitLoading} 
                                                type="submit" 
                                                className={postForgetPasswordVerifySubmitLoading?
                                                "loading__button mt-20 log-in disabled":"main-btn btn__small mt-20 log-in"}> 
                                                {postForgetPasswordVerifySubmitLoading ?   
                                                <><div className="spinner-border" role="status">
                                                <span className="sr-only"></span>
                                                </div></>
                                                : languageCheck() === 'bn' ? "জমা দিন" : "Submit" }  
                                                </button>
                                           {/* </div>     */} 

                                                <button id="forget__button"
                                                data-bs-toggle={"modal"} hidden data-bs-target={"#staticBackdrop"}
                                                 type='button'>btn</button>
                                            </div>
                                        </div>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

     
       
             <ForgetPasswordModal 
                ResetPasswordSubmit={ResetPasswordSubmit}
                security_code={security_code}
                setSecurityCode={setSecurityCode}
                postResetPasswordSubmitError={postResetPasswordSubmitError}
                phone_number={phone_number}
                setPhoneNumber={setPhoneNumber}
                postResetPasswordSubmitLoading={postResetPasswordSubmitLoading}
                setConfirmPassword={setConfirmPassword}
                confirm_password={confirm_password}
                setPassword={setPassword}
                password={password} 
             /> 
           <Footer />  
        </>
    );
};

export default ForgetPassword;