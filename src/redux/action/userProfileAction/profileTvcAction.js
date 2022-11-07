import axios from "axios";  
import { errorMessage, successMessage, warningMsg } from "../../../Hooks/MessageHandling";  
 
export const postTvcSubmitAction = (formdata,navigate) =>async dispatch=>{ 
   const token = localStorage.getItem("token"); 
    dispatch({type: 'POST_TVC_SUBMIT_REQUEST'}); 
    try{
       const response =  (await axios.post('tvc/',formdata,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'POST_TVC_SUBMIT_SUCCESS',payload: response});  
       if(response.status === 201){  
         successMessage('TVC create successfully')  
      } 
      if (response.status === 201) {
         setTimeout(() => {
            navigate("/payment/"+response?.data?.id+"/") 
         }, 500);
      } 
    }catch(err){  
      const common = err?.response?.data?.invalid_params 
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message 
         warningMsg(warningMessage)
      } 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      }
       dispatch({type: 'POST_TVC_SUBMIT_ERROR' ,payload : common}); 
    } 
} 


export const getAllTvcAction = () =>async dispatch=>{ 
   const token = localStorage.getItem("token");  
    dispatch({type: 'GET_ALL_TVC_REQUEST'}); 
    try{
       const response =  (await axios.get('tvc/?limit=5000000000000000')).data   
       dispatch({type: 'GET_ALL_TVC_SUCCESS',payload: response});  
    }catch(err){  
       dispatch({type: 'GET_ALL_TVC_ERROR' ,payload : err}); 
    }
}   
export const getMyTvcAction = (Swal) =>async dispatch=>{ 
   const token = localStorage.getItem("token");  
    dispatch({type: 'GET_MY_TVC_REQUEST'}); 
    try{
       const response =  (await axios.get('tvc/my/',{headers:{"Authorization":"token "+token}})).data   
       dispatch({type: 'GET_MY_TVC_SUCCESS',payload: response});  
    }catch(err){ 
       Swal.fire('OOps' , 'Something went Wrong', "error") 
       dispatch({type: 'GET_MY_TVC_ERROR' ,payload : err}); 
    }
}   
export const deleteSingleTvcAction = (Swal,id,navigate) =>async dispatch=>{ 
   const token = localStorage.getItem("token");
    dispatch({type: 'DELETE_SINGLE_TVC_REQUEST'});
    try{ 
       const response =  (await axios.delete('tvc/my/'+id,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'DELETE_SINGLE_TVC_SUCCESS',id: id});  
 
      if(response){ 
         successMessage('TVC delete successfully')   
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
       
       dispatch({type: 'DELETE_SINGLE_TVC_ERROR' ,payload : err}); 
    }
} 
export const getEditTvcAction = (tvcEditId) =>async dispatch=>{ 
    
   const token = localStorage.getItem("token"); 
    dispatch({type: 'GET_EDIT_TVC_REQUEST'});
    try{
       const response =  (await axios.get('tvc/'+tvcEditId,{headers:{"Authorization":"token "+token}})).data  
       dispatch({type: 'GET_EDIT_TVC_SUCCESS',payload: response});   
    }catch(err){  
       dispatch({type: 'GET_EDIT_TVC_ERROR' ,payload : err}); 
    }
}  
export const patchUpdateTvcAction = (formdata,editId,navigate) =>async dispatch=>{ 
   
    const token = localStorage.getItem("token");
    dispatch({type: 'PATCH_UPDATE_TVC_REQUEST'});
    try{
       const response =  (await axios.patch('tvc/my/'+editId+'/',formdata,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'PATCH_UPDATE_TVC_SUCCESS',payload: response}); 
       if (response.status === 200){
         successMessage('TVC updated successfully')  
      } 
       
      if (response.status === 200) {
         setTimeout(() => {
            navigate('/my/account/') 
         }, 500);
       } 
    }catch(err){   
      const common = err?.response?.data?.invalid_params 
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message
         warningMsg(warningMessage)
      } 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      }
       dispatch({type: 'PATCH_UPDATE_TVC_ERROR' ,payload : common}); 
    }
} 
export const getDetailsTvcAction = (id) =>async dispatch=>{ 
  
   const token = localStorage.getItem("token");
   dispatch({type: 'GET_DETAILS__TVC_REQUEST'}); 
   try{
      const response =  (await axios.get('tvc/'+id+'/',{headers:{"Authorization":"token "+token}})).data  
      dispatch({type: 'GET_DETAILS_TVC_SUCCESS',payload: response});   
   }catch(err){   
      dispatch({type: 'GET_DETAILS_TVC_ERROR' ,payload : err}); 
   }
}

