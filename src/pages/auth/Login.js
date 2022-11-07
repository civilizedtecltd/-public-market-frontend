import React, {useState, useEffect, useRef} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {NavLink, useNavigate, Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postLoginSubmitAction} from '../../redux/action/userProfileAction/authAction/authAction';
import {useForm} from "react-hook-form";
import DivisionAndDistrictModal from '../../components/CommonComponents/Modal/DivisionAndDistrictModal';
import EmailWithLogin from '../../components/CommonComponents/AuthModal/EmailWithLogin';
import axios from "axios";
import facebook from "../../asset/frontend/assets/css/font/svg/facebook-square-white.svg"
import emailSVG from "../../asset/frontend/assets/css/font/svg/envelope-white.svg"
import FacebookLogin from "@greatsumini/react-facebook-login";
import ReactGoogleLogin from "react-google-login";
import { languageCheck,numberCheck } from '../../helpers/Helpers';
import {successMessage} from "../../Hooks/MessageHandling";

 
const Login = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    useEffect(() => {
        // document.title = "Login | Public Market Bd"
    }, [])
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const {loginError, loading} = useSelector(state => state.postLoginSubmitReducer)
    const userError = loginError?.response?.data?.invalid_params
 
    //  phone number login state
    const [phone_numberS, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    // email login state
    const [email, setEmail] = useState('')
    const [ePassword, setEPassword] = useState('')

    const LoginSubmitEmail = (e) => {
        const formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", ePassword);
        dispatch(postLoginSubmitAction(formdata, Navigate))
    }

    const LoginSubmitNumber = (e) => {
        const concactNumber = '+88'
        const phone_number = concactNumber + phone_numberS
        const formdata = new FormData();
        formdata.append("username", phone_number);
        formdata.append("password", password);
        dispatch(postLoginSubmitAction(formdata, Navigate))
    }
    const locationRoute = "/customer/register/"

    const googleClientId = () => {
        const googleClID = process.env.REACT_APP_SOCIAL_AUTH_GOOGLE_OAUTH2_KEY
        return googleClID
    }
    // email phone number onChange
    const loginOnChangeNumber = (e) => {  
        setPhoneNumber(numberCheck(e))
    }
    const loginOnChangePassword = (e) => { 
        setPassword(e.target.value) 
    }
     
    // email login onChange
    const loginOnChangeEamil = (e) => {
        setEmail(e.target.value)
    }
    const loginOnChangeEPassword = (e) => {
        setEPassword(e.target.value)
    }

    const [getErrorState, setErrorState] = useState("")

    useState(() => {
        if (email) {
            setErrorState(true)
        } else if (phone_numberS) {
            setErrorState(true)
        }
    }, [])

    const responseFb = (response) => {
        loginWithFacebook(response.accessToken);
    }

    const loginWithFacebook = (accessToken) => {
        const fbLogin = async (accessToken) => {
            try {
                const response = (await axios.post('custom_auth/convert-token/', {
                        token: accessToken,
                        backend: "facebook",
                        grant_type: "convert_token",
                        client_id: process.env.REACT_APP_APPLICATION_CLIENT_ID,
                        client_secret: process.env.REACT_APP_APPLICATION_CLIENT_SECRET,

                    }).then((res) => {
                        const token = res.data.token;
                        if (token) {
                            localStorage.setItem('token', token);
                            localStorage.setItem('loginMedia', "facebook");
                        }
                        else {
                            localStorage.removeItem('token');
                        }

                        if (res?.data?.phone){
                                successMessage("Login With Facebook Successfully")
                                setTimeout( () => {
                                    Navigate("/")
                                }, 1000)
                             
                        }else{
                            Navigate("/customer/add/phone/")
                        }
                    })
                )
            } catch (err) {
                console.log(err);
            }
        }
        fbLogin(accessToken);
    }

    const responseGoogle = (response) => {
        loginWithGoogle(response.accessToken)
    }

    const loginWithGoogle = (accessToken) => {
        const googleLogin = async (accessToken) => {
            try {
                const response = (await axios.post('custom_auth/convert-token/', {
                        token: accessToken,
                        backend: "google-oauth2",
                        grant_type: "convert_token",
                        client_id: process.env.REACT_APP_APPLICATION_CLIENT_ID,
                        client_secret: process.env.REACT_APP_APPLICATION_CLIENT_SECRET,

                    }).then((res) => {
                        const token = res.data.token;
                        if (token) {
                            localStorage.setItem('token', token);
                            localStorage.setItem('loginMedia', "google");
                        }
                        else {
                            localStorage.removeItem('token');
                        }

                        console.log("google convert token respone",res)
                        if (res?.data?.phone){
                            successMessage("Login With Google Successfully")
                            setTimeout( () => {
                                Navigate("/")
                            }, 1000)
                        }else{
                            window.location.pathname = "/customer/add/phone/"
                        }
                    })
                )
            } catch (err) {
                console.log(err);
            }
        }
        googleLogin(accessToken);
    }
   
     
     
      
    const [passwordHideIcon,setPasswordHideIcon] = useState(false) 
    const passwordHideValues = () => {
        setPasswordHideIcon(x => !x)  
    }

       
    useEffect(() => { 
    //   if (modalClose === true) {
    //     document.getElementById('email__login_button__modal').click(); 
    //   } 
    }, []);
    
      
    
    return (
        <>
            <Header/>

            <section className="sign_in_area mt-120 pb-120">
                <div className="container ">
                    <div className="row justify-content-center">

                        <div className="col-lg-5 col-md-7 col-sm-9">
                            <div className="sign_in_form mt-5">
                                <div id="error_message"></div>
                                <div className="sign_title">
                                    <h5 className="title">
                                    {languageCheck() === 'bn' ? 'এখন লগ ইন করুন' : 'Login Now'}</h5>
                                </div>
                                <div id="email_input_login_form">
                                    <form onSubmit={handleSubmit(LoginSubmitNumber)}>
 
                                        <div className="sign_form_wrapper">
                                            <div className="single_form">
                                                <i style={{top: "13px", left: "6px", color: "black"}}
                                                   className="">+88</i>
                                                <input 
                                                    {...register("phone_numberS", {
                                                        required: true,
                                                        pattern: /^[0-9]+$/,
                                                        maxLength: 11,
                                                        minLength: 11,
                                                        onChange: loginOnChangeNumber,
                                                        value: phone_numberS
                                                    })}    
                                                    value={phone_numberS} 
                                                    placeholder={languageCheck() === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                                                    type="text" 
                                                /> 
                                                {errors.phone_numberS && errors.phone_numberS.type === "required" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                                                'You must fill out this field'}  </span>)}
                                                {errors.phone_numberS && errors.phone_numberS.type === "pattern" && (
                                                <span style={{color: 'red'}}> 
                                                {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই নম্বর লিখতে হবে।' : 
                                                'You must enter number'}</span>)}
                                                {errors.phone_numberS && errors.phone_numberS.type === "minLength" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                                'Please enter a valid 11-digit phone number starting with 0.'} </span>)}
                                                {errors.phone_numberS && errors.phone_numberS.type === "maxLength" && (
                                                <span style={{color: 'red'}}>
                                                {languageCheck() === 'bn' ? 'অনুগ্রহ করে ০ দিয়ে শুরু করে ১১ সংখ্যার সঠিক ফোন নাম্বারটি দিন।' : 
                                                'Please enter a valid 11-digit phone number starting with 0.'} </span>)}

                                            </div>
                                            <div className="single_form" >
                                                <i className="fal fa-key"></i> 
                                                <input
                                                    {...register("password", {
                                                        required: true,
                                                        minLength: 8,
                                                        onChange: loginOnChangePassword,
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
 

                                                { userError?.error &&  userError?.error.map((err,i) =>
                                                     <div className="mt-1" key={i} >
                                                       <span style={{color: 'red'}}>{err.message}</span>
                                                    </div>
                                                 )}
                                               
                                                 { userError?.username	 &&  userError?.username.map((err,i) =>
                                                     <div className="mt-1" key={i} >
                                                       <span style={{color: 'red'}}>{err.message}</span>
                                                    </div>
                                                 )}
                                            </div>

                                             

                                            <div className="single_form  ">
                                                {/* <div className="sign_checkbox">
`                                                <input type="checkbox" id="checkbox" />
                                                <label htmlFor="checkbox"></label>
                                                <span>Keep me logged in</span>
                                                </div> */}
                                                <div className="row justify-content-between">
                                                    <div className="col-6 sign_new_area">
                                                        <div className="sign_new">
                                                            <NavLink to="/customer/login/"  data-bs-toggle="modal"  data-bs-target="#all__loacation">
                                                                {languageCheck() === 'bn' ? 'পাবলিক মার্কেটে নতুন?' : 'New To PublicMarket?'}
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 sign_new_area">
                                                        <div className="sign_forgot text-right">
                                                            <Link to="/customer/forgetpassword/">
                                                                 {languageCheck() === 'bn' ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot Password?'}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="text-center">
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
                                                <span className="text-center login__token">
                                                {languageCheck() === 'bn' ? 'একটি অ্যাকাউন্টের জন্য সাইন আপ করে আপনি আমাদের সাথে সম্মত হন' :
                                                 'By signing up for an account you agree to our'} 
                                                 </span>
                                            </div>
                                        </div>
                                        <div className="login__btn">
                                        <button disabled={loading} type="submit"
                                                className={loading ? "loading__button mt-20 log-in disabled" : "main-btn btn__small mt-20 log-in"}>
                                            {loading ?
                                                <>
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                </>
                                                : languageCheck() === 'bn' ? 'লগ ইন' : 'Login'}
                                        </button>
                                        </div>
                                        </form>

                                        <div className="  mt-20 mb-20">
                                            <div className="row">
                                                <div className="col-5">
                                                    <hr/>
                                                </div>
                                                <div className="col-2">
                                                    <p>{languageCheck() === 'bn' ? 'অথবা' : 'Or'} </p>
                                                </div>
                                                <div className="col-5">
                                                    <hr/>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="social-media-sign">
                                            <div className="row">
                                                <div className="col-xl-12">

                                                    <div className="d-flex flex-column media-login">
                                                        <FacebookLogin
                                                            appId={process.env.REACT_APP_SOCIAL_AUTH_FACEBOOK_KEY}
                                                            fields="name, email, phone"
                                                            autoLoad={false}
                                                            // size="small"
                                                            // textButton={languageCheck() === 'bn' ? 'ফেসবুক দিয়ে লগইন করুন' : 'Login With Facebook'}
                                                            // cssClass="social-login-item-facebook social-login-item"
                                                            // icon="facebook"
                                                            // icon="fa-facebook-square"
                                                             children={
                                                                 <div>

                                                                     <img src={facebook} style={{width:"30px",height: "30px", marginRight: "5px", marginLeft: '4px'}}/>
                                                                     <span>{languageCheck() === 'bn' ? 'ফেসবুক দিয়ে লগইন করুন' : 'Login With Facebook'}</span></div> }

                                                            onSuccess={responseFb}
                                                        />
                                                        <ReactGoogleLogin
                                                            clientId={googleClientId()}
                                                            buttonText={languageCheck() === 'bn' ? 'গুগল দিয়ে লগইন করুন' : 'Login With Google'}
                                                            onSuccess={responseGoogle}
                                                            className="social-login-item-google"
                                                            icon={"fa-google"}
                                                            redirectUri={process.env.REACT_APP_SOCIAL_AUTH_GOOGLE_OAUTH2_REDIRECT_URI}
                                                            cookiePolicy={"single_host_origin"}
                                                        />
 
                                                    
                                                        <button className="email_login">
                                                            <div
                                                                id="email__login__button"
                                                                data-bs-toggle={"modal"}
                                                                data-bs-target={"#email__login"}
                                                                className="social-login-item justify-content-center align-content-center"
                                                                style={{
                                                                    background: 'red',
                                                                    fill: '#fff',
                                                                    color: '#fff',
                                                                }}
                                                            >

                                                                <img src={emailSVG} style={{width:"30px",height: "30px", marginRight: "5px", marginLeft: '-17px'}}/>

                                                                <span>{languageCheck() === 'bn' ? 'ইমেইল দিয়ে লগইন করুন' : 'Login With Email'}</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EmailWithLogin
            loginOnChangeEamil={loginOnChangeEamil}
            email={email}
            loginOnChangeEPassword={loginOnChangeEPassword}
            ePassword={ePassword}
            userError={userError}
            LoginSubmitEmail={LoginSubmitEmail}
            loading={loading}
            />
            <DivisionAndDistrictModal locationRoute={locationRoute}/>
            <Footer/>
        </>
    );
};

export default Login;
