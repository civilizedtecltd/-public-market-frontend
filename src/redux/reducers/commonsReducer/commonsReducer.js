export const getAdBannerCategoryReducer =(state={ },action)=>{
       
    switch(action.type){
      case 'GET_AD_BANNER_CATEGORY_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_AD_BANNER_CATEGORY_SUCCESS' : return { 
          loading : false,
          adBannerCategoryItem : action.payload
      } 
      case 'GET_AD_BANNER_CATEGORY_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
 
} 
  
export const getPricingReducer =(state={ },action)=>{
       
  switch(action.type){
    case 'GET_PRICING_REQUEST' : return {
       loading : true,
       ...state 
     }
    case 'GET_PRICING_SUCCESS' : return { 
        loading : false,
        getPricing : action.payload
    } 
    case 'GET_PRICING_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}


 