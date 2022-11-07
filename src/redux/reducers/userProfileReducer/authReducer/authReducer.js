export const postLoginSubmitReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'POST_LOGIN_REQUEST' : return {
       loading : true, 
     }
    case 'POST_LOGIN_SUCCESS' : return { 
        loading : false, 
        token: action.payload
    } 
    case 'POST_LOGIN_ERROR' : return {
        loading : false,
        loginError : action.payload
    }
    default : return state
  }
 
}
  
export const postRegisterVerifySubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_REGISTER_VERIFY_SUBMIT_REQUEST' : return {
         loadingVerify : true,
       }
      case 'POST_REGISTER_VERIFY_SUBMIT_SUCCESS' : return { 
          loadingVerify : false, 
          registerToken: action.payload
      } 
      case 'POST_REGISTER_VERIFY_SUBMIT_ERROR' : return {
          loadingVerify : false,
          RegisterVerifyError : action.payload
      }
      default : return state
    }
  
  }

export const postRegisterSubmitReducer =(state={},action)=>{
     
    switch(action.type){
      case 'POST_REGISTER_SUBMIT_REQUEST' : return {
         loading : true, 
       }
      case 'POST_REGISTER_SUBMIT_SUCCESS' : return { 
          loading : false,
          success : true, 
          loginToken: action.payload
      } 
      case 'POST_REGISTER_SUBMIT_ERROR' : return {
          loading : false,
          registerSubmitError : action.payload
      }
      default : return state
    }
  
  }
   
  export const postForgetPasswordVerifySubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_REQUEST' : return {
          postForgetPasswordVerifySubmitLoading : true, 
       }
      case 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_SUCCESS' : return { 
          postForgetPasswordVerifySubmitLoading : false,
          success : true, 
          forgetToken: action.payload
      } 
      case 'POST_FORGET_PASSWORD_VERIFY_SUBMIT_ERROR' : return {
          postForgetPasswordVerifySubmitLoading : false,
          postForgetPasswordVerifySubmitError : action.payload
      }
      default : return state
    }
  
  } 

  export const postResetPasswordSubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_RESET_PASSWORD_SUBMIT_REQUEST' : return {
          postResetPasswordSubmitLoading : true, 
       }
      case 'POST_RESET_PASSWORD_SUBMIT_SUCCESS' : return { 
          postResetPasswordSubmitLoading : false,
          success : true, 
          loginToken: action.payload
      } 
      case 'POST_RESET_PASSWORD_SUBMIT_ERROR' : return {
          postResetPasswordSubmitLoading : false,
          postResetPasswordSubmitError : action.payload
      }
      default : return state
    }
  
  }
 
  export const postChangePasswordSubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_CHANGE_PASSWORD_SUBMIT_REQUEST' : return {
         loading : true
       }
      case 'POST_CHANGE_PASSWORD_SUBMIT_SUCCESS' : return { 
          loading : false,
          success : true, 
          loginToken: action.payload
      } 
      case 'POST_CHANGE_PASSWORD_SUBMIT_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
  }
