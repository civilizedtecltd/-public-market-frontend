import axios from "axios";
 
export const getPaymentAction = (id) =>async (dispatch)=>{  
   const token = localStorage.getItem("token"); 
    dispatch({type: 'GET_PAYMENT_REQUEST'});  
    try{
       const response = (await axios.get("payment/info/"+id+"/",{headers:{"Authorization":"token "+token}})).data 
       dispatch({type: 'GET_PAYMENT_SUCCESS' ,payload : response});
    }catch(err){
       dispatch({type: 'GET_PAYMENT_ERROR' ,payload : err}); 
    }
}
 
export const postPaymentAction = (formdata,navigate) =>async (dispatch)=>{  
   const token = localStorage.getItem("token"); 
   dispatch({type: 'POST_PAYMENT_REQUEST'});  
   try{
      const response = (await axios.post("payment/",formdata,{headers:{"Authorization":"token "+token}}))
      dispatch({type: 'POST_PAYMENT_SUCCESS' ,payload : response});
  
      if(response.status === 200){  
         window.location.href = (response?.data?.redirect_url)
      }

   }catch(err){
      dispatch({type: 'POST_PAYMENT_ERROR' ,payload : err}); 
   }
}

