import axios from 'axios'
 

export const getAdBannerCategoryAction = () =>async dispatch=>{
    dispatch({type: 'GET_AD_BANNER_CATEGORY_REQUEST'});  
    try{
       const response = (await axios.get('adbanner/category/?limit=500')).data
       if(response){
         localStorage.setItem('adBannerCategoryItem',JSON.stringify(response))
       }
       dispatch({type: 'GET_AD_BANNER_CATEGORY_SUCCESS' ,payload : response}); 
    }catch(err){
       dispatch({type: 'GET_AD_BANNER_CATEGORY_ERROR' ,payload : err});
    } 
}

export const getPricingAction = () =>async dispatch=>{
   dispatch({type: 'GET_PRICING_REQUEST'});  
   try{
      const response = (await axios.get('pricing/')).data 
      dispatch({type: 'GET_PRICING_SUCCESS' ,payload : response}); 
   }catch(err){
      dispatch({type: 'GET_PRICING_ERROR' ,payload : err});
   }
}

 

