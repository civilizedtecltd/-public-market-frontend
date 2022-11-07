export const getAdCategoryReducer =(state={ },action)=>{  
    switch(action.type){
      case 'GET_Ad_CATEGORY_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_Ad_CATEGORY_SUCCESS' : return { 
          loading : false,
          getAllAdsCategory : action.payload 
      } 
      case 'GET_Ad_CATEGORY_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    } 
    
 }

export const getAdSubCategoryReducer =(state={ },action)=>{
    switch(action.type){
        case 'GET_Ad_SUB_CATEGORY_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_Ad_SUB_CATEGORY_SUCCESS' : return {
            loading : false,
            getAllAdsSubCategory : action.payload
        }
        case 'GET_Ad_SUB_CATEGORY_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }
}


export const postAdStoreReducer =(state={ },action)=>{

    switch(action.type){
        case 'POST_AD_SUBMIT_REQUEST' : return {
            loading : true, 
        }
        case 'POST_AD_SUBMIT_SUCCESS' : return {
            loading : false,
            success : true,
            adStoreSuccess: action.payload,
        }
        case 'POST_AD_SUBMIT_ERROR' : return {
            loading : false,
            adError : action.payload
        }
        default : return state
    }

} 

export const getAdEditReducer =(state={ },action)=>{

    switch(action.type){
        case 'GET_Ad_EDIT_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_AD_EDIT_SUCCESS' : return {
            loading : false,
            getAdEdit : action.payload
        }
        case 'GET_Ad_EDIT_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }
} 


export const patchAdUpdateReducer =(state={ },action)=>{

    switch(action.type){
        case 'PATCH_AD_UPDATE_REQUEST' : return {
            loading : true, 
        }
        case 'PATCH_AD_UPDATE_SUCCESS' : return {
            loading : false, 
        }
        case 'PATCH_AD_UPDATE_ERROR' : return {
            loading : false,
            adUpdateError : action.payload
        }
        default : return state
    }

} 

export const getAdSubCategoryNameReducer =(state={ },action)=>{

    switch(action.type){
        case 'GET_AD_SUB_CATEGORY_AND_NAME_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_AD_SUB_CATEGORY_NAME_SUCCESS' : return {
            loading : false,
            getAdSubCategoryName : action.payload
        }
        case 'GET_AD_SUB_CATEGORY_NAME_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }
}


export const getAdDistrictNameReducer =(state={ },action)=>{

    switch(action.type){
        case 'GET_AD_DISTRICT_NAME_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_AD_DISTRICT_NAME_SUCCESS' : return {
            loading : false,
            getAdDistrictName : action.payload
        }
        case 'GET_AD_DISTRICT_NAME_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }
}


export const getMyAdReducer =(state={ },action)=>{
     
    switch(action.type){ 
        case 'GET_AD_DELETE_SUCCESS':
      if (state.getMyAds?.length) {
        const index = state.getMyAds.findIndex(x => x.id === action.id);
        if (index >= 0) {
          state.getMyAds.splice(index, 1);
        }
      } 
      case 'GET_My_Ad_REQUEST' : return {
         loading : true,
         ...state    
       } 
      case 'GET_My_Ad_SUCCESS' : return { 
        loading : false, 
        getMyAds : action.payload
      }     
      case 'GET_My_Ad_ERROR' : return {
        loading : false,
        error : action.payload
      }
      default : return state
    }
  
  }
  export const postAdDeleteReducer =(state={ },action)=>{ 
    switch(action.type){
      case 'GET_AD_DELETE_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_AD_DELETE_SUCCESS' : return { 
          loading : false, 
          success: true,
          adDeleteRes: action.payload
      } 
      case 'GET_AD_DELETE_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  }

 

  export const getAllAdReducer =(state={ },action)=>{ 
    switch(action.type){
      case 'GET_All_Ad_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_All_Ad_SUCCESS' : return { 
          loading : false, 
          success: true,
          getAllAd: action.payload
      } 
      case 'GET_All_Ad_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  }

  export const getAdDetailsReducer =(state={ },action)=>{ 
    switch(action.type){
      case 'GET_AD_DETAILS_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_AD_DETAILS_SUCCESS' : return { 
          loading : false, 
          success: true,
          getAdDetails: action.payload
      } 
      case 'GET_AD_DETAILS_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  }