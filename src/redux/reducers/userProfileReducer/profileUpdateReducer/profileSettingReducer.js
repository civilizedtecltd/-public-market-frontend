export const getProfileSettingReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_PROFILE_SETTING_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_PROFILE_SETTING_SUCCESS' : return { 
          loading : false, 
          profileData : action.payload
      } 
      case 'GET_PROFILE_SETTING_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
  } 
    



export const postProfileSettingUpdateReducer =(state={ },action)=>{
      
    switch(action.type){
      case 'POST_PROFILE_SETTING_UPDATE_REQUEST' : return {
         profileSettingUpdateLoading : true 
       }
      case 'POST_PROFILE_SETTING_UPDATE_SUCCESS' : return { 
         profileSettingUpdateLoading : false,  
      } 
      case 'POST_PROFILE_SETTING_UPDATE_ERROR' : return {
        profileSettingUpdateLoading : false,
        profileSettingUpdateError : action.payload
      } 
      default : return state
    }
  
  }
    

  
export const postProfileSettingChangePasswordReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'POST_PROFILE_SETTING_CHANGE_PASSWORD_REQUEST' : return {
       postProfileSettingChangePasswordLoading : true 
     }
    case 'POST_PROFILE_SETTING_CHANGE_PASSWORD_SUCCESS' : return {  
        postProfileSettingChangePasswordSuccess : true, 
        postProfileSettingChangePasswordLoading : false,  
        jobDetails : action.payload
    } 
    case 'POST_PROFILE_SETTING_CHANGE_PASSWORD_ERROR' : return {
        postProfileSettingChangePasswordLoading : false,
        error : action.payload
    }
    default : return state
  }

}
  