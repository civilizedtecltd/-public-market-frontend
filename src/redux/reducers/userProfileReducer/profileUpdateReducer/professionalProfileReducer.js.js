export const postBasicInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_BASIC_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'POST_BASIC_INFO_SUCCESS' : return { 
          loading : false, 
          profileData : action.payload
      } 
      case 'POST_BASIC_INFO_ERROR' : return {
          loading : false,
          basicInforCreateError : action.payload
      }
      default : return state
    }
  
  }


  export const getBasicInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_BASIC_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'GET_BASIC_INFO_SUCCESS' : return { 
          loading : false, 
          getBasicInfoData : action.payload
      } 
      case 'GET_BASIC_INFO_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
  }



  export const patchBasicInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'PATCH_BASIC_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'PATCH_BASIC_INFO_SUCCESS' : return { 
          loading : false, 
          profileData : action.payload
      } 
      case 'PATCH_BASIC_INFO_ERROR' : return {
          loading : false,
          basicInforUpdateError : action.payload
      }
      default : return state
    }
  
  }






//   additional info
  export const postAdditionalInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_ADDITIONAL_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'POST_ADDITIONAL_INFO_SUCCESS' : return { 
          loading : false,  
      } 
      case 'POST_ADDITIONAL_INFO_ERROR' : return {
          loading : false, 
          postAdditionalInfoError : action.payload
      }
      default : return state
    }
  
  } 


  export const getAdditionalInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_ADDITIONAL_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'GET_ADDITIONAL_INFO_SUCCESS' : return { 
          loading : false, 
          getPostAdditionalInfo : action.payload
      } 
      case 'GET_ADDITIONAL_INFO_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
  }



  export const patchAdditionalInfoReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'PATCH_ADDITIONAL_INFO_REQUEST' : return {
         loading : true,
         ...state  
       }
      case 'PATCH_ADDITIONAL_INFO_SUCCESS' : return { 
          loading : false, 
          profileData : action.payload
      } 
      case 'PATCH_ADDITIONAL_INFO_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
  }



  

   
//  Past Employments 
 
export const postPastEmploymentsReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'POST_PAST_EMPLOYMENTS_REQUEST' : return {
       loading : true,
       ...state  
     }
    case 'POST_PAST_EMPLOYMENTS_SUCCESS' : return { 
        loading : false,  
        success: true
    } 
    case 'POST_PAST_EMPLOYMENTS_ERROR' : return {
        loading : false,
        postPastEmploymentsError : action.payload
    }
    default : return state
  }

}

export const getPastEmploymentsReducer =(state={ },action)=>{

     
  switch(action.type){ 
    case 'GET_PAST_EMPLOYMENTS_REQUEST' : return {
       loading : true,
       ...state  
    } 
    case 'GET_PAST_EMPLOYMENTS_SUCCESS' : return { 
      loading : false,  
      getPastEmploymentsList: action.payload
    }   
    case 'GET_PAST_EMPLOYMENTS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
 

export const deletePastEmploymentsReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'DELETE_PAST_EMPLOYMENTS_REQUEST' : return {
       loading : true,
       ...state  
     }
    case 'DELETE_PAST_EMPLOYMENTS_SUCCESS' : return { 
        loading : false, 
        deleteRes : action.payload   
    } 
    case 'DELETE_PAST_EMPLOYMENTS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}


export const patchPastEmploymentsReducer =(state={ },action)=>{  
  switch(action.type){
    case 'PATCH_PAST_EMPLOYMENTS_REQUEST' : return {
       loading : true,
       ...state  
     }
    case 'PATCH_PAST_EMPLOYMENTS_SUCCESS' : return { 
        loading : false,  
        patchPastEmployments:action.payload
    } 
    case 'PATCH_PAST_EMPLOYMENTS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}

export const getSinglePastEmploymentsReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_SINGLE_PAST_EMPLOYMENTS_REQUEST' : return {
       loading : true,
       ...state  
     }
    case 'GET_SINGLE_PAST_EMPLOYMENTS_SUCCESS' : return { 
        loading : false,  
        getSinglePastEmployment: action.payload
    } 
    case 'GET_SINGLE_PAST_EMPLOYMENTS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}