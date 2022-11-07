import React, {useState, useEffect} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from "react-hook-form";
import {languageCheck, numberCheck} from '../../helpers/Helpers';
import axios from "axios";
import {successMessage, errorMessage, warningMsg, warningMessages} from "../../Hooks/MessageHandling";
import AddNumberVerifyCodeModal from '../../components/CommonComponents/AuthModal/AddNumberVerifyCodeModal';


const AddNumerVerifyCode = () => { 

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const [getPhoneAddResponse, setPhoneAddResponse] = useState('');
    const [getNumberVerifyBtnLoding, setNumberVerifyBtnLoding] = useState(false);
    const [getNumberStoreBtnLoding, setNumberStoreBtnLoding] = useState(false);
    const [getPhoneNumber, setPhoneNumber] = useState('')
    const [getSecurityCode, setSecurityCode] = useState('')


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {profileData} = useSelector(state => state.getProfileSettingReducer)
  
    const [phoneNunberError,setPhoneNunberError] = useState([])
    const NumberVerify = (e) => {
        // e.preventDefault();
        setNumberVerifyBtnLoding(true)

        const formdata = new FormData();
        formdata.append("phone_number", '+88' + getPhoneNumber);

        const checkNumberVerify = async () => {
            try {
                const response = await axios.post('custom_auth/phone/register', formdata).then((response) => {
                    // console.log("phone add response", response)
                    setNumberVerifyBtnLoding(false) 
                    setPhoneAddResponse(response?.data)
                });
            } catch (err) {
                console.log(err)
                // console.log(err.response?.data?.invalid_params);
                setPhoneNunberError(err?.response?.data?.invalid_params)
            }
        }

        checkNumberVerify()
    }

    // useEffect(() => {
    //     dispatch(getProfileSettingAction())
    // }, []);

    // if (profileData?.phone_number){
    //     window.location.pathname = "/"
    // }

    // call reducers
    // const {forgetToken,postForgetPasswordVerifySubmitError,postForgetPasswordVerifySubmitLoading} = useSelector(state => state.postForgetPasswordVerifySubmitReducer)
    // const {postResetPasswordSubmitError,postResetPasswordSubmitLoading} = useSelector(state => state.postResetPasswordSubmitReducer)


    useEffect(() => {
        if (getPhoneAddResponse) {
            document.getElementById("forget__button").click();
        }
    }, [getPhoneAddResponse])
    const PhoneNumberSetFunction = (e) => {
        setPhoneNumber(numberCheck(e))
    }

      
     
    const [securityCodeError, setSecurityCodeError] = useState([])
    const NumberStore = (e) => {
        setNumberStoreBtnLoding(true)

        const numberWithCode = {}
        numberWithCode['phone_number'] = '+88' + getPhoneNumber
        numberWithCode['security_code'] = getSecurityCode
        numberWithCode['session_token'] = getPhoneAddResponse?.session_token

        const updatePhoneNumber = async () => {
            const token = localStorage.getItem("token");
            // console.log("number, securety code, session token , token", numberWithCode, token)
            try {
                const response = await axios.patch('custom_auth/update-phone/', numberWithCode, {headers: {"Authorization": "token " + token}}).then((response) => {
                    setNumberStoreBtnLoding(false)
                    setPhoneAddResponse(response)
                  
                    if (response.status === 200) {
                        successMessage("Your Phone Number Add Successfully")
                        setTimeout( () => {
                            // navigate("/my/profile/setting/")
                            window.location.pathname = "/my/profile/setting/"
                        }, 1000)
                    }
 
                    // console.log("custom_auth/update-phone", response)
                });
            } catch (err) { 
                setSecurityCodeError(err?.response?.data?.invalid_params)
                // console.log('error', err?.response?.status);
                // console.log(err?.response?.data?.invalid_params);
                if (err?.response?.status === 401){
                    setNumberStoreBtnLoding(false)
                    const warningMessage = err?.response?.statusText
                    warningMsg(warningMessage)
                }
                if (err?.response?.status === 500){
                    setNumberStoreBtnLoding(false)
                    errorMessage("Internal Server Error")
                }
                if (err?.response?.status === 400){
                    setNumberStoreBtnLoding(false) 
                    warningMsg(err?.response?.invalid_params?.phone_number?.error?.message)
                }
            } 
        }

        updatePhoneNumber()
    }
  

    return (
        <>
            <Header/>
            <section className="sign_in_area mt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-5 col-md-7 col-sm-9 ">
                            <div className="sign_in_form ">
                                <div className="sign_title">
                                    <h5 className="title">
                                        {languageCheck() === 'bn' ? "আমাদের সকল সুবিধা পেতে আপনার ফোন নম্বরটি সেট করুন" : "Add your phone number to get all our benefits"}
                                    </h5>
                                </div>
                                <form onSubmit={handleSubmit(NumberVerify)}> 
                                    <div className="sign_form_wrapper">
                                        <div className="single_form">

                                            <i style={{top: "13px", left: "6px", color: "black"}} className="">+88</i>
                                            <input
                                                {...register("getPhoneNumber", {
                                                    required: true,
                                                    pattern: /^[0-9]+$/,
                                                    maxLength: 11,
                                                    minLength: 11,
                                                    onChange: PhoneNumberSetFunction,
                                                    value: getPhoneNumber
                                                })}
                                                value={getPhoneNumber}
                                                placeholder={languageCheck() === 'bn' ? "ফোন নম্বর" : "Phone Number"}
                                                type="text"
                                                // onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                                {errors.getPhoneNumber && errors.getPhoneNumber.type === "required" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                                'You must fill out this field'}  </span>)}
                                                {errors.getPhoneNumber && errors.getPhoneNumber.type === "pattern" && (
                                                <span style={{color: 'red'}}> 
                                                {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই নম্বর লিখতে হবে।' : 
                                                'You must enter number'}</span>)}
                                                {errors.getPhoneNumber && errors.getPhoneNumber.type === "minLength" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                                'Please enter a valid 11-digit phone number starting with 0.'} </span>)}
                                                {errors.getPhoneNumber && errors.getPhoneNumber.type === "maxLength" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                                'Please enter a valid 11-digit phone number starting with 0.'} </span>)}
                                            
                                            <span style={{color:'red'}}>
                                            {phoneNunberError && phoneNunberError?.map((error)=>(error?.message))}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
 
                                                <button
                                                    type="submit"
                                                    className={getNumberVerifyBtnLoding ? "loading__button mt-20 log-in disabled" : "main-btn auth__btn mt-20 log-in"}>
                                                    {getNumberVerifyBtnLoding ?
                                                        <>
                                                            <div className="spinner-border" role="status">
                                                                <span className="sr-only"></span>
                                                            </div>
                                                        </>
                                                        : languageCheck() === 'bn' ? "জমা দিন" : "Submit"}
                                                </button>

                                                <button id="forget__button"
                                                        data-bs-toggle={"modal"} hidden
                                                        data-bs-target={"#staticBackdrop"}
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
            </section>

           
               
             <AddNumberVerifyCodeModal 
             getSecurityCode={getSecurityCode}
             securityCodeError={securityCodeError}
             NumberStore={NumberStore}
             getNumberStoreBtnLoding={getNumberStoreBtnLoding}
             setSecurityCode={setSecurityCode}            
              />
            <Footer/>
        </>
    );
};

export default AddNumerVerifyCode;