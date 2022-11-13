import React, {useState, useEffact, useEffect} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useNavigate, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
    postRegisterSubmitAction,
    postRegisterVerifySubmitAction
} from './../../redux/action/userProfileAction/authAction/authAction';
import {getDivisionAction, getDistrictAction} from './../../redux/action/coreAction';
import {useForm} from "react-hook-form";  
import DivisionAndDistrictModal from '../../components/CommonComponents/Modal/DivisionAndDistrictModal'; 
import {getDistrict, getDivision} from '../../Utilities/Utilities';
import {languageCheck,numberCheck} from '../../helpers/Helpers';
import RegisterModal from '../../components/CommonComponents/AuthModal/RegisterModal';


 

const Register = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // call sessionStorage
    const division = getDivision();
    const district = getDistrict();
    const [getRegisterTokenResponse, setRegisterTokenResponse] = useState('');

    // call reducers
    const {registerSubmitError, loading} = useSelector(state => state.postRegisterSubmitReducer)

    const {
        registerToken,
        RegisterVerifyError,
        loadingVerify
    } = useSelector(state => state.postRegisterVerifySubmitReducer)

    const securityCodeError = registerSubmitError?.security_code && registerSubmitError?.security_code?.map((error) => {
        return (
            error.message
        )
    })
    const sessionTokenError = registerSubmitError?.session_token && registerSubmitError?.session_token?.map((error) => {
        return (
            error.message
        )
    })

    const phoneNumberError = registerSubmitError?.phone_number && registerSubmitError?.phone_number?.map((error) => {
        return (
            error.message
        )
    })

    const registerBeforeGetToken = RegisterVerifyError?.phone_number && RegisterVerifyError?.phone_number?.map((error) => {
        return (
            error.message
        )
    })

    useEffect(() => {
        if (getRegisterTokenResponse) {
            document.getElementById("submit__button").click();
        }
    }, [getRegisterTokenResponse])
  
    // call all of state
    const [security_code, setSecurityCode] = useState('') 

    const [phone_number, setPhoneNumber] = useState('') 
    const [password, setPassword] = useState('') 
    const [confirm_password, setConfirmPassword] = useState('') 
    const onChnageRegisterPhoneNumber = (e) => {   
        setPhoneNumber(numberCheck(e))
    } 
    const onChnageRegisterPassword = (e) => {   
        setPassword(e.target.value) 
    } 
    const onChnageRegisterConfirmPassword = (e) => {   
        setConfirmPassword(e.target.value) 
    }

// call submit button
    const RegisterVerifySubmit = (e) => { 
        const formdata = new FormData();
        formdata.append("phone_number", phone_number); 
        dispatch(postRegisterVerifySubmitAction(formdata,setRegisterTokenResponse))
    }
    const RegisterVerifySubmitNext = (e) => { 
        const formdata = new FormData();
        formdata.append("phone_number", phone_number); 
        dispatch(postRegisterVerifySubmitAction(formdata,setRegisterTokenResponse))
    }


    const RegisterSubmit = () => { 
        const session_token = getRegisterTokenResponse
        const userInformation = new FormData();
        userInformation.append("session_token", session_token);
        userInformation.append("phone_number",'+88'+phone_number);
        userInformation.append("security_code", security_code);
        userInformation.append("password", password);
        userInformation.append("division", division?.id);
        userInformation.append("district", district?.id);
        dispatch(postRegisterSubmitAction(userInformation, navigate)) 
    }

     

    const locationRoute = "/customer/register/"

    const clearErrorModalBtn = () => {

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
            <Header/>

            <section className="sign_in_area mt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7 col-sm-9">
                            <div className="sign_in_form mt-5">
                                <div id="error_message"></div>
                                <div className="sign_title">
                                    <div className="d-flex" style={{justifyContent: "space-between"}}>
                                        <h5 className="title">
                                            {languageCheck() === 'bn' ? 'এখন সাইন আপ করুন' : 'Sign Up Now'}</h5>
                                        <p className="mt-2" data-bs-toggle="modal"
                                           data-bs-target="#all__loacation">
                                            <span style={{color: 'red'}} className="mr-2">{district?.name}</span>
                                            {languageCheck() === 'bn' ? 'অবস্থান পরিবর্তন করুন' : 'Change Location'}</p>
                                    </div>
                                </div>
                                <div id="email_input_login_form">
                                    <form onSubmit={handleSubmit(RegisterVerifySubmit)}>
                                        <div className="sign_form_wrapper">

                                            <div className="single_form">
                                                <i style={{top: "13px", left: "6px", color: "black"}}
                                                   className="">+88</i>
                                                <input
                                                {...register("phone_number", {
                                                    required: true,
                                                    pattern: /^[0-9]+$/,
                                                    maxLength: 11,
                                                    minLength: 11,
                                                    onChange: onChnageRegisterPhoneNumber,
                                                    value: phone_number
                                                })}
                                                value={phone_number}     
                                                name="phone_number"
                                                type="text"
                                                placeholder={languageCheck() === 'bn' ? "ফোন নম্বর" : "Phone Number"}/>

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
                                                {registerBeforeGetToken && <span style={{color:'red'}}>
                                                {registerBeforeGetToken}
                                                </span>}
                                                </>}
                                                 
                                            </div>


                                            <div className="single_form">
                                                <i className="fal fa-key"></i>
                                                <input
                                                    {...register("password", {
                                                        required: true, 
                                                        minLength: 8,
                                                        onChange: onChnageRegisterPassword,
                                                        value: password
                                                    })} 
                                                    type={!passwordHideIcon ?"password":"text"}
                                                    placeholder={languageCheck() === 'bn' ? 'পাসওয়ার্ড' : 'Password'}
                                                />
                                                        
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
                                            <div className="single_form">
                                                <i className="fal fa-key"></i>
                                                <input
                                                    {...register("confirm_password", {
                                                        required: true, 
                                                        validate: (value) => value === watch('password'),
                                                        onChange: onChnageRegisterConfirmPassword,
                                                        value: confirm_password
                                                    })} 
                                                    name="confirm_password"
                                                    type={!confirmPasswordHideIcon ?"password":"text"}   
                                                    placeholder={languageCheck() === 'bn' ? 'পাসওয়ার্ড নিশ্চিত করুন' : 'Confirm Password'}
                                                />
                                                <div className='password_icon' onClick={confirmPasswordHideValues}>
                                                    {!confirmPasswordHideIcon ?  
                                                    <i className="fa fa-eye fa-eye-slash"></i>:
                                                    <i  className="far fa-eye" ></i> }
                                                </div>
  
                                                  {errors.confirm_password && <span style={{color:'red'}} >
                                                  {languageCheck() === 'bn' ? 'পাসওয়ার্ড  মিলেনি' : "Passwords didn't match"}
                                                  </span>}
                                            </div>


                                            <div className="text-center mt-2">
                                                <ul className="link media-tarms-condition"
                                                    style={{textAlign: "center"}}>
                                                    <li>
                                                        <Link to="/help/termsconditions/">
                                                            {languageCheck() === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions'}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/help/privacypolicy/">
                                                            {languageCheck() === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/help/refundpolicy/">
                                                            {languageCheck() === 'bn' ? 'প্রত্যর্পণ নীতি' : 'Refund Policy'} </Link>
                                                    </li>
                                                </ul>
                                                <span
                                                    className="text-center">By signing up for an account you agree to our</span>
                                            </div>
                                        </div>
                                        {/* registerToken */}

                                         
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center"> 
                                        <button disabled={loadingVerify} type="submit"
                                                className={loadingVerify ? 
                                                "loading__button mt-20 log-in disabled" :
                                                 "main-btn btn__small mt-20 log-in"}>
                                            {loadingVerify ?
                                                <>
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                </>
                                                : languageCheck() === 'bn' ? 'রেজিস্টার' : 'Register'}
                                        </button>
                                        <button id="submit__button"
                                                data-bs-toggle={"modal"} hidden data-bs-target={"#staticBackdrop"}
                                                  type='button'>btn
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
            </section> 


 


           
            <RegisterModal 
             RegisterSubmit={RegisterSubmit}
             RegisterVerifySubmitNext={RegisterVerifySubmitNext}
             phoneNumberError={phoneNumberError}
             securityCodeError={securityCodeError}
             sessionTokenError={sessionTokenError}
             security_code={security_code}
             setSecurityCode={setSecurityCode}
             clearErrorModalBtn={clearErrorModalBtn}
           
            />  
            <DivisionAndDistrictModal locationRoute={locationRoute}/>
            <Footer/>
        </>
    );
};

export default Register;
