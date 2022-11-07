import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import { languageCheck } from '../../../helpers/Helpers';

const EmailWithLogin = ({loginOnChangeEamil,email,loginOnChangeEPassword,ePassword,userError,LoginSubmitEmail,loading}) => {
  
     
    const { register, handleSubmit, watch, formState: { errors }  } = useForm();
     
    const [passwordHideIcon,setPasswordHideIcon] = useState(false) 
    const passwordHideValues = () => {
        setPasswordHideIcon(x => !x)  
    }

    // const [modalClose,setModalClose] = useState('')
    // window.onpopstate = (e) =>{
    //   if (e) { 
    //     console.log(e);
    //     setModalClose(e?.isTrusted) 
    //   }
    // }   
    // useEffect(() => { 
    //   if (modalClose === true) {
    //     document.getElementById('email__login_button__modal').click(); 
    //   } 
    // }, [modalClose]);

 
      const closeEmailLoginModal = () => {
        document.getElementById("email__login_button__modal").click()
      }

      
    return (
        <div>
             {/* email login modal */} 
           <div  style={{marginTop:'100px'}} className="modal fade" id={"email__login"}   data-bs-backdrop="static" data-bs-keyboard="false"   
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header" style={{border:'none',padding:'0rem 1rem'}}>  
                    </div>
                        <div className="modal-body" style={{padding: "0rem 1rem"}}>
                        <div className="sign_in_form">
                            <div className="sign_title d-flex" style={{justifyContent: "space-between"}} > 
                               <h5 className="title"> 
                               {languageCheck() === 'bn' ? 'ইমেইল দিয়ে লগইন করুন' : 'Login With Email'}</h5>  
                            <button  type="button" style={{marginTop:'10px'}}   
                            id="email__login_button__modal" className="btn-close" 
                            data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> 
                         <form  onSubmit={handleSubmit(LoginSubmitEmail)} >
                                <div className="sign_form_wrapper">
                             <div className="single_form"> 
                             <i className="fal fa-envelope"></i> 
                              <input  
                              {...register("email",{required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i 
                              ,onChange:loginOnChangeEamil,value:email})} 
                              placeholder={languageCheck() === 'bn' ? 'ইমেইল' : 'Email'} 
                              type="email"      
                              /> 
                              {errors.email && errors.email.type === "required" && (
                              <span style={{color: 'red'}}>
                              {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                              'You must fill out this field'}  </span>)} 

                              {errors.email && errors.email.type === "pattern" && (  
                              <span style={{color:'red'}} > 
                              {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই বৈধ ইমেল লিখতে হবে' : 
                              'You must enter valid email'} 
                              </span>)} 


                            </div>
                            <div className="single_form">
                              <i className="fal fa-key"></i>
                              <input   
                              {...register("ePassword",{required: true,minLength: 8,onChange:loginOnChangeEPassword,value:ePassword})}   
                              type={!passwordHideIcon ?"password":"text"}
                              placeholder={languageCheck() === 'bn' ? 'পাসওয়ার্ড' : 'Password'} 
                              />   
                              <div className='password_icon' onClick={passwordHideValues}>
                                  {!passwordHideIcon ?  
                                  <i className="fa fa-eye fa-eye-slash"></i>:
                                  <i  className="far fa-eye" ></i> }
                              </div>
                                  
                              {errors.ePassword && errors.ePassword.type === "required" && (
                              <span style={{color: 'red'}}>
                              {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।' : 
                              'You must fill out this field'}  </span>)} 
                              {errors.ePassword && errors.ePassword.type === "minLength" && (
                              <span style={{color: 'red'}}>
                              {languageCheck() === 'bn' ? 'আপনাকে অবশ্যই ৮ টি অক্ষর ব্যবহার করতে হবে।' : 
                              'You must use at least 8 characters.'}  </span>)}

                               { userError?.error &&  userError?.error.map((err,i) => 
                                    <div className="mt-1" key={i} >
                                      <span style={{color: 'red'}}>{err.message}</span>
                                  </div>
                                )}

                              
                            </div> 


                            
                            <div className="single_form  ">
                              {/* <div className="sign_checkbox">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"></label>
                                <span>Keep me logged in</span>
                              </div> */}
                              <div className="row justify-content-between">
                                <div className="col-6 sign_new_area">
                                <div className="sign_new" > 
                                <NavLink to="/customer/login/"   
                                data-bs-toggle="modal" data-bs-target="#all__loacation"  
                                id="email__login_button__modal"  
                                data-bs-dismiss="modal" aria-label="Close"
                                >
                                   {languageCheck() === 'bn' ? 'পাবলিক মার্কেটে নতুন?' : 'New To PublicMarket?'}
                                </NavLink> 
                              </div>
                                </div>
                                <div className="col-6 sign_new_area">
                                <div className="sign_forgot text-right">
                                <NavLink to="/customer/forgetpassword/"  onClick={closeEmailLoginModal}> 
                                {languageCheck() === 'bn' ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot Password?'}</NavLink>
                              </div> 
                                </div>
                              </div>
                               
                            </div>

 
                            <div>
                            <ul className="link media-tarms-condition" style={{textAlign:"center"}}>
                            <li>
                              <Link to="/terms_conditions"> 
                              {languageCheck() === 'bn' ? 'শর্তাবলী' : 'Terms & Conditions'}</Link>
                            </li>
                            <li>
                              <Link to="/privacy_policy">
                              {languageCheck() === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
                              </Link>
                            </li>
                            <li>
                              <Link to="/refund_policy"> 
                              {languageCheck() === 'bn' ? 'প্রত্যর্পণ নীতি' : 'Refund Policy'}</Link>
                            </li>
                            </ul> 
                            </div>
                          </div>

                                <div className="login__btn">
                                <button disabled={loading} type="submit"  
                                className={loading?"loading__button mt-20 log-in disabled":"main-btn btn__small mt-20 log-in"}> 
                                {loading ?   
                                <><div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                                </div></>
                                :languageCheck() === 'bn' ? 'লগ ইন' : 'Login'}
                                </button> 
                                </div>


                              </form>
                            </div>
                        </div> 
                     </div>
                </div>
             </div> 
         </div>
    );
};

export default EmailWithLogin;