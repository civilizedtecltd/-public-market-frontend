import axios from "axios"; 
import { errorMessage, successMessage, warningMsg } from "../../../Hooks/MessageHandling";  
      
export const postAdBannerSubmitAction = (Swal,formdata,navigate) =>async dispatch=>{ 
      const token = localStorage.getItem("token");
    dispatch({type: 'POST_Ad_BANNER_SUBMIT_REQUEST' });
    try{
       const response =  (await axios.post('adbanner/',formdata,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'POST_Ad_BANNER_SUBMIT_SUCCESS',payload: response});
       if(response.status === 201){  
         successMessage('Banner Ad create successfully')   
      }
      if (response.status === 201) {
         setTimeout(() => {
            navigate("/payment/"+response?.data?.id+"/") 
         }, 500);
      } 
      
    }catch(err){  
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message
         warningMsg(warningMessage)
     } 
     if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
     }
       dispatch({type: 'POST_Ad_BANNER_SUBMIT_ERROR' ,payload : err}); 
    }
}  
export const getAllAdBannerAction = (Swal,formdata,navigate) =>async dispatch=>{ 
      const token = localStorage.getItem("token");
    dispatch({type: 'GET_ALL_AD_BANNER_REQUEST'});
    try{
       const response =  (await axios.get('adbanner/',{headers:{"Authorization":"token "+token}})).data    
       dispatch({type: 'GET_ALL_AD_BANNER_SUCCESS',payload: response});  
    }catch(err){ 
       Swal.fire('OOps' , 'Something went Wrong', "error") 
       dispatch({type: 'GET_ALL_AD_BANNER_ERROR' ,payload : err}); 
    }
}  
export const getMyAdBannerAction = () =>async dispatch=>{ 
   const token = localStorage.getItem("token");
 dispatch({type: 'GET_MY_AD_BANNER_REQUEST'});
 try{
    const response =  (await axios.get('adbanner/my/',{headers:{"Authorization":"token "+token}})).data    
    dispatch({type: 'GET_MY_AD_BANNER_SUCCESS',payload: response});  
 }catch(err){  
    dispatch({type: 'GET_MY_AD_BANNER_ERROR' ,payload : err}); 
 } 
} 
export const deleteSingleAdBannerAction = (id,navigate) =>async dispatch=>{ 
   const token = localStorage.getItem("token"); 
    dispatch({type: 'DELETE_SINGLE_AD_BANNER_REQUEST'}); 
    try{
       const response =  (await axios.delete('adbanner/my/'+id,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'DELETE_SINGLE_AD_BANNER_SUCCESS',id: id}); 
       if(response){ 
         successMessage('Banner Ad delete successfully')   
       } 
      if (response) {
         setTimeout(() => {
            navigate('/my/account/') 
         }, 500);
       } 
    }catch(err){  
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message
         warningMsg(warningMessage)
      } 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      }
       dispatch({type: 'DELETE_SINGLE_AD_BANNER_ERROR' ,payload : err}); 
    }
} 
export const getEditAdBannerAction = (AdBannerEdit) =>async dispatch=>{ 
    
   const token = localStorage.getItem("token");
    dispatch({type: 'GET_EDIT_AD_BANNER_REQUEST'});
    try{
       const response =  (await axios.get('adbanner/'+AdBannerEdit+"/",{headers:{"Authorization":"token "+token}})).data   
       dispatch({type: 'GET_EDIT_AD_BANNER_SUCCESS',payload: response});  
    }catch(err){  
       dispatch({type: 'GET_EDIT_AD_BANNER_ERROR' ,payload : err}); 
    }
}  
export const patchUpdateAdBannerAction = (formdata,AdBannerEdit,navigate) =>async dispatch=>{  
    const token = localStorage.getItem("token");
    dispatch({type: 'PATCH_UPDATE_AD_BANNER_REQUEST'});
    try{
       const response =  (await axios.patch('adbanner/my/'+AdBannerEdit+'/',formdata,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'PATCH_UPDATE_AD_BANNER_SUCCESS',payload: response}); 
       if (response.status === 200){
         successMessage('Banner Ad updated successfully')  
      }
      if (response.status === 200) {
         setTimeout(() => {
            navigate('/my/account/') 
         }, 500);
       } 
    }catch(err){  
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message
         warningMsg(warningMessage)
      } 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      }
       dispatch({type: 'PATCH_UPDATE_AD_BANNER_ERROR' ,payload : err}); 
    }
}
 

export const getAdBannerDetailsAdBannerAction = (id) =>async dispatch=>{ 
    dispatch({type: 'GET_AD_BANNER_DETAILS_REQUEST'});
 try{ 
    const response =  (await axios.get('adbanner/'+id+'/')).data    
    dispatch({type: 'GET_AD_BANNER_DETAILS_SUCCESS',payload: response});  
 }catch(err){  
    dispatch({type: 'GET_AD_BANNER_DETAILS_ERROR' ,payload : err}); 
 }
}  