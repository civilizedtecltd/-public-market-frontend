 
import axios from "axios"; 
import { errorMessage, successMessage } from "../../../../Hooks/MessageHandling";

// basic info  
export const postBasicInfoAction =  (formdata,navigate) =>async dispatch=>{ 
     
    const token = localStorage.getItem("token"); 
    dispatch({type: 'POST_BASIC_INFO_REQUEST'}); 
    try{
       const response =  (await axios.post('custom_auth/basic-info/create/',formdata,{headers:{"Authorization":"token "+token}})) 
      if(response){  
         successMessage('Basic Information create successfully')   
      }
      if (response.status === 201) {
        setTimeout(() => {
           navigate('/dashboard/my/professional/profile/') 
        }, 2000);
      }  
       dispatch({type: 'POST_BASIC_INFO_SUCCESS',payload: response}) 
       
    }catch(err){ 
      if (err.request.status === 500) {
            errorMessage('Something Went Wrong With Server')
      } 
       dispatch({type: 'POST_BASIC_INFO_ERROR' ,payload : err?.response?.data}); 
    }
 }   

 export const getBasicInfoAction =  () =>async dispatch=>{ 
      
    const token = localStorage.getItem("token"); 
    dispatch({type: 'GET_BASIC_INFO_REQUEST'}); 
    try{ 
      const response =  (await axios.get('custom_auth/basic-info/',{headers:{"Authorization":"token "+token}})).data   
       dispatch({type: 'GET_BASIC_INFO_SUCCESS',payload: response})  
     
    }catch(err){
       dispatch({type: 'GET_BASIC_INFO_ERROR' ,payload : err}); 
    } 
 }  

 export const patchBasicInfoAction =  (formdata,navigate) =>async dispatch=>{ 
     
    const token = localStorage.getItem("token"); 
    dispatch({type: 'PATCH_BASIC_INFO_REQUEST'}); 
    try{
       const response =  (await axios.patch('custom_auth/basic-info/',formdata,{headers:{"Authorization":"token "+token}})).data 
       dispatch({type: 'PATCH_BASIC_INFO_SUCCESS',payload: response}) 
       if (response){ 
         successMessage('Basic Information updated successfully')  
      }
      if (response) {
         setTimeout(() => {
           return navigate('/dashboard/my/professional/profile/') 
         }, 2000);
       }  
    }catch(err){  
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
       }
       dispatch({type: 'PATCH_BASIC_INFO_ERROR' ,payload : err?.response?.data}); 
     
    }
 } 
 


//  additional info 

 export const postAdditionalInfoAction =  (formdata) =>async dispatch=>{ 
     
    const token = localStorage.getItem("token"); 
    dispatch({type: 'POST_ADDITIONAL_INFO_REQUEST'}); 
    try{
       const response =  (await axios.post('custom_auth/additional-info/create/',formdata,{headers:{"Authorization":"token "+token}})) 
       dispatch({type: 'POST_ADDITIONAL_INFO_SUCCESS',payload: response}) 
       if(response.status === 201){   
         successMessage('Additional Information create successfully')   
        } 
    }catch(err){
      const common = err?.response?.data?.invalid_params 
       dispatch({type: 'POST_ADDITIONAL_INFO_ERROR' ,payload : common}); 
       
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
       }
    }
 }  

 export const getAdditionalInfoAction =  () =>async dispatch=>{ 
     
    const token = localStorage.getItem("token"); 
    dispatch({type: 'GET_ADDITIONAL_INFO_REQUEST'}); 
    try{
       const response =  (await axios.get('custom_auth/additional-info/',{headers:{"Authorization":"token "+token}})).data 
 
       dispatch({type: 'GET_ADDITIONAL_INFO_SUCCESS',payload: response}) 
    }catch(err){
       dispatch({type: 'GET_ADDITIONAL_INFO_ERROR' ,payload : err}); 
    }
 } 

 export const patchAdditionalInfoAction =  (formdata) =>async dispatch=>{ 
     
    const token = localStorage.getItem("token"); 
    dispatch({type: 'PATCH_ADDITIONAL_INFO_REQUEST'}); 
    try{
       const response =  (await axios.patch('custom_auth/additional-info/',formdata,{headers:{"Authorization":"token "+token}})) 
       if(response){  
         successMessage('Additional Information updated successfully')   
        } 
       dispatch({type: 'PATCH_ADDITIONAL_INFO_SUCCESS',payload: response})  
       
    }catch(err){ 
       if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
       }
       dispatch({type: 'PATCH_ADDITIONAL_INFO_ERROR' ,payload : err}); 
    }
 } 
 

 




 

//  Past Employments 


export const postPastEmploymentsAction =  (formdata,navigate) =>async dispatch=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'POST_PAST_EMPLOYMENTS_REQUEST'}); 
   try{
      const response =  (await axios.post('custom_auth/past-employment/',formdata,{headers:{"Authorization":"token "+token}})).data  
      dispatch({type: 'POST_PAST_EMPLOYMENTS_SUCCESS',payload: response})
       
      if(response){   
         successMessage('Past Employments create successfully')   
       }  
       if (response) {
         setTimeout(() => {
           return navigate('/dashboard/my/professional/profile/') 
         }, 2000);
       }  
   }catch(err){
      
      const common = err?.response?.data?.invalid_params 
      dispatch({type: 'POST_PAST_EMPLOYMENTS_ERROR' ,payload : common}); 
   }
}

export const getPastEmploymentsAction =  () =>async dispatch=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'GET_PAST_EMPLOYMENTS_REQUEST'}); 
   try{
      const response =  (await axios.get('custom_auth/past-employment/',{headers:{"Authorization":"token "+token}})).data  
      dispatch({type: 'GET_PAST_EMPLOYMENTS_SUCCESS',payload: response}) 
   }catch(err){
      dispatch({type: 'GET_PAST_EMPLOYMENTS_ERROR' ,payload : err}); 
   }
}  
 
export const deletePastEmploymentsAction =  (id) =>async dispatch=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'DELETE_PAST_EMPLOYMENTS_REQUEST'}); 
   try{
      const response =  (await axios.delete('custom_auth/past-employment/'+id+'/',{headers:{"Authorization":"token "+token}})).data  
      dispatch({type: 'DELETE_PAST_EMPLOYMENTS_SUCCESS',payload: id})  
   }catch(err){
      dispatch({type: 'DELETE_PAST_EMPLOYMENTS_ERROR',payload : err}); 
   }
}


export const patchPastEmploymentsAction =  (formdata,navigate,updateId) =>async dispatch=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'PATCH_PAST_EMPLOYMENTS_REQUEST'}); 
   try{ 
      const response =  (await axios.patch('custom_auth/past-employment/'+updateId+'/',formdata,{headers:{"Authorization":"token "+token}}))     
      dispatch({type: 'PATCH_PAST_EMPLOYMENTS_SUCCESS',payload: response}) 
      if(response){   
         successMessage('Past Employments updated successfully')   
       }  
       if (response) {
         setTimeout(() => {
           return navigate('/dashboard/my/professional/profile/') 
         }, 2000);
       }  
   }catch(err){
      dispatch({type: 'PATCH_PAST_EMPLOYMENTS_ERROR' ,payload : err}); 
   }
}
export const getSinglePastEmploymentsAction =  (id) =>async dispatch=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'GET_SINGLE_PAST_EMPLOYMENTS_REQUEST'}); 
   try{
      const response =  (await axios.get('custom_auth/past-employment/'+id,{headers:{"Authorization":"token "+token}})).data  
      dispatch({type: 'GET_SINGLE_PAST_EMPLOYMENTS_SUCCESS',payload: response}) 
   }catch(err){
      dispatch({type: 'GET_SINGLE_PAST_EMPLOYMENTS_ERROR' ,payload : err}); 
   }
}

