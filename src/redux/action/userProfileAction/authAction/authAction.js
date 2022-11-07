import axios from 'axios';
import {
  errorMessage,
  successMessage,
} from '../../../../Hooks/MessageHandling';

export const postLoginSubmitAction =  (formdata, Navigate) => async (dispatch) => {
    dispatch({ type: 'POST_LOGIN_REQUEST' });
    try {
      const response = await axios.post('custom_auth/login/',formdata);
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('loginMedia', "manual");
        dispatch({ type: 'POST_LOGIN_SUCCESS', payload: response }); 
        Navigate('/dashboard/');
        if (response) {
          document.getElementById('email__login_button__modal').click(); 
        }
      }
      else {
        localStorage.removeItem('token');
        console.log('login failed');
      }
    } catch (err) {
      dispatch({ type: 'POST_LOGIN_ERROR', payload: err });
    }
  };


// form fillup action area 
export const postRegisterVerifySubmitAction =
  (formdata,setRegisterTokenResponse) => async (dispatch) => {
    dispatch({ type: 'POST_REGISTER_VERIFY_SUBMIT_REQUEST' });
    try {
      const response = await axios.post('custom_auth/phone/register',formdata);
      dispatch({
        type: 'POST_REGISTER_VERIFY_SUBMIT_SUCCESS',
        payload: response?.data?.session_token,
      });
      if(response.data.session_token){
        setRegisterTokenResponse(response.data.session_token)
      } 
    } catch (err) {
      if (err.request.status === 500) {
        errorMessage('Something Went Wrong With Server');
      }
      const common = err?.response?.data?.invalid_params;
      dispatch({ type: 'POST_REGISTER_VERIFY_SUBMIT_ERROR', payload: common });
    }
};


// form verify action area
export const postRegisterSubmitAction =
  ( userInformation, navigate) => async (dispatch) => {
    dispatch({ type: 'POST_REGISTER_SUBMIT_REQUEST' });
    try {
      const response = await axios.post( 'custom_auth/register/',userInformation);
      const token = response.data.token;
      dispatch({ type: 'POST_REGISTER_SUBMIT_SUCCESS', payload: response });
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('loginMedia', "manual");
      }
      else {
        localStorage.removeItem('token');
      }


      if (response) {
        document.getElementById('button__modal').click();
        successMessage('Register create successfully');
      }
      if (response) {
        setTimeout(() => {
          navigate('/my/account/');
        }, 2000);
      }
    } catch (err) {
      if (err.request.status === 500) {
        errorMessage('Something Went Wrong With Server');
      }
      const common = err?.response?.data?.invalid_params;
      dispatch({ type: 'POST_REGISTER_SUBMIT_ERROR', payload: common });
    }
};

export const postForgetPasswordVerifySubmitAction = (formdata,setRegisterTokenResponse) => async (dispatch) => {
    dispatch({ type: 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_REQUEST' });
    try {
      const response = await axios.post('custom_auth/phone/register',formdata); 
       
      dispatch({ type: 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_SUCCESS',payload: response?.data});
      if(response?.data?.session_token){
        setRegisterTokenResponse(response?.data?.session_token)
      }  
    } catch (err) { 
      if (err.request.status === 500) {
        errorMessage('Something Went Wrong With Server');
      }
      const common = err?.response?.data?.invalid_params;
      dispatch({ type: 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_ERROR', payload: common}); 
    }
}; 

export const postResetPasswordSubmitAction =
  (formdata,navigate) => async (dispatch) => {
    dispatch({ type: 'POST_RESET_PASSWORD_SUBMIT_REQUEST' });
    try {
      const response = await axios.post('custom_auth/reset-password/',formdata);
      dispatch({
        type: 'POST_RESET_PASSWORD_SUBMIT_SUCCESS',
        payload: response.data.id,
      });  
      
      if (response) {
        document.getElementById('button__modal').click();
        successMessage('Password Reset successfully');
      }
      if (response) { 
        setTimeout(() => { 
          window.location.pathname = "/customer/login/"
        }, 500);
      } 
    } catch (err) { 
      if (err.request.status === 500) {
        errorMessage('Something Went Wrong With Server');
      }
      const common = err?.response?.data?.invalid_params
      dispatch({ type: 'POST_RESET_PASSWORD_SUBMIT_ERROR', payload: common});
    }
  };


export const postChangePasswordSubmitAction = (formdata) => async (dispatch) => {
    dispatch({ type: 'POST_CHANGE_PASSWORD_SUBMIT_REQUEST' });
    try {
      const response = await axios.post('custom_auth/reset-password/',formdata);  
      dispatch({ type: 'POST_CHANGE_PASSWORD_SUBMIT_SUCCESS',payload: response,});
     
    } catch (err) {
      const common = err?.response?.data?.invalid_params
      dispatch({ type: 'POST_CHANGE_PASSWORD_SUBMIT_ERROR', payload: common});
    }
};
