export const postAdBannerSubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_Ad_BANNER_SUBMIT_REQUEST' : return {
         loading : true
       }
      case 'POST_Ad_BANNER_SUBMIT_SUCCESS' : return { 
          loading : false,
          success : true,
      } 
      case 'POST_Ad_BANNER_SUBMIT_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
}

export const getAllAdBannerReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_ALL_AD_BANNER_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_ALL_AD_BANNER_SUCCESS' : return { 
          loading : false,
          success : true, 
          getAllAdBanner : action.payload
      } 
      case 'GET_ALL_AD_BANNER_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
}   
export const getMyAdBannerReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'DELETE_SINGLE_AD_BANNER_SUCCESS':
      if (state.getMyAdBanner?.length) {
        const index = state.getMyAdBanner.findIndex(x => x.id === action.id);
        if (index >= 0) {
          state.getMyAdBanner.splice(index, 1);
        }
      } 
    case 'GET_MY_AD_BANNER_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_MY_AD_BANNER_SUCCESS' : return { 
        loading : false,
        success : true, 
        getMyAdBanner : action.payload
    } 
    case 'GET_MY_AD_BANNER_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}   


export const deleteSingleAdBannerReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'DELETE_SINGLE_AD_BANNER_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'DELETE_SINGLE_AD_BANNER_SUCCESS' : return { 
          loading : false,
          success : true,  
      } 
      case 'DELETE_SINGLE_AD_BANNER_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }  
  
}

export const getEditAdBannerReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_EDIT_AD_BANNER_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_EDIT_AD_BANNER_SUCCESS' : return { 
          loading : false,
          success : true, 
          getAdBannerEditData : action.payload 
      } 
      case 'GET_EDIT_AD_BANNER_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
}
 
export const patchUpdateAdBannerReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'PATCH_UPDATE_AD_BANNER_REQUEST' : return {
          loading : true 
       }  
      case 'PATCH_UPDATE_AD_BANNER_SUCCESS' : return { 
          loading : false, 
          patchAdBannerEditData : action.payload 
      } 
      case 'PATCH_UPDATE_AD_BANNER_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
}


export const getAdBannerDetailsAdBannerReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_AD_BANNER_DETAILS_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_AD_BANNER_DETAILS_SUCCESS' : return { 
        loading : false,
        success : true,  
        adBannerDetails: action.payload
    } 
    case 'GET_AD_BANNER_DETAILS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}



 