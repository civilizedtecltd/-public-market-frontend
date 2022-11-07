 
import axios from "axios"; 
import { errorMessage, successMessage, warningMsg } from "../../../Hooks/MessageHandling";  
    
 
export const getJobCategoryAction = () =>async (dispatch)=>{ 
     dispatch({type: 'GET_JOB_CATEGORY_REQUEST'});  
     try{   
       // if cache == null ( call api) else read form cache
        const response = (await axios.get('job/category/?limit=5000')).data  
      //   res check
      // system date check 
         if(response){ 
            localStorage.setItem('jobCategoryItem' , JSON.stringify(response)) 
            response.map((category) =>category.name === 'Sales & Marketing' ? 
            localStorage.setItem('salesAndMarketing',category.id) : '' )    
         }   
       dispatch({type: 'GET_JOB_CATEGORY_SUCCESS' ,payload : response}); 
     }catch(err){ 
        dispatch({type: 'GET_JOB_CATEGORY_ERROR' ,payload : err}); 
     }
}
  
export const getJobPositionAction = (jobcategoryid) =>async dispatch=>{    
     const dynamicCategoryAPi = ('job/category/dropdown-items/?field_name=job_position&category='+jobcategoryid)  
     dispatch({type: 'GET_JOB_POSISTION_REQUEST'});    
      try{
         const response =  (await axios.get(dynamicCategoryAPi)).data  
           
         dispatch({type: 'GET_JOB_POSISTION_SUCCESS' ,payload : response[0]?.jobcategorydropdownitem_set});   
      }catch(err){
         dispatch({type: 'GET_JOB_POSISTION_ERROR' ,payload : err});
   }  
}  
  
export const getJobTypeAction = (salesAndMarketingCategoryId) =>async dispatch=>{  
   const dynamicJobTypeAPi = ('job/category/dropdown-items/?field_name=job_type&category='+salesAndMarketingCategoryId) 
    dispatch({type: 'GET_JOB_TYPE_REQUEST'});
     try{
      const response =  (await axios.get(dynamicJobTypeAPi)).data   
      dispatch({type: 'GET_JOB_TYPE_SUCCESS' ,payload : response[0]?.jobcategorydropdownitem_set}); 
     }catch(err){
         dispatch({type: 'GET_JOB_TYPE__ERROR' ,payload : err});
     }  
} 

export const getJobEducationalAction = (salesAndMarketingCategoryId) =>async dispatch=>{
   const dynamicJobSalesAndMarketingAPi = ('job/category/dropdown-items/?field_name=educational_qualification&category='+salesAndMarketingCategoryId) 
    dispatch({type: 'GET_JOB_EDUCATIONAL_REQUEST'}); 
   try{
      const response =  (await axios.get(dynamicJobSalesAndMarketingAPi)).data  
       
      dispatch({type: 'GET_JOB_EDUCATIONAL_SUCCESS' ,payload : response[0]?.jobcategorydropdownitem_set});
   
   }catch(err){
      dispatch({type: 'GET_JOB_EDUCATIONAL_ERROR' ,payload : err});
   } 
} 
 
export const postJobSubmitAction = (formdata,navigate) =>async dispatch=>{  
    const token = localStorage.getItem("token");
    dispatch({type: 'POST_JOB_SUBMIT_REQUEST'});
    try{
       const response =  (await axios.post('job/',formdata,{headers:{"Authorization":"token "+token}}))  
       dispatch({type: 'POST_JOB_SUBMIT_SUCCESS',payload:response});  
       if(response.status === 201){  
          successMessage('Job create successfully')   
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
       dispatch({type: 'POST_JOB_SUBMIT_ERROR' ,payload : common}); 
    }
}

export const getJobEditAction = (jobEditId) =>async dispatch=>{ 
   const id = jobEditId.id
   dispatch({type: 'GET_JOB_EDIT_REQUEST'});
   try{
      const response =  (await axios.get('job/'+id+'/')).data    
      dispatch({type: 'GET_JOB_EDIT_SUCCESS',payload: response}) 
   }catch(err){
      dispatch({type: 'GET_JOB_EDIT_ERROR' ,payload : err}); 
   }
}

export const postJobUpdateAction = (formdata,jobEditId,navigate) =>async dispatch=>{ 
   const id = jobEditId.id 
    
   const token = localStorage.getItem("token");
   dispatch({type: 'PATCH_JOB_UPDATE_REQUEST'}); 
   try{
      const response =  (await axios.patch('/job/my/'+id+'/',formdata,{headers:{"Authorization":"token "+token}}))   
      dispatch({type: 'PATCH_JOB_UPDATE_SUCCESS'}) 
      if (response.status === 200){ 
         successMessage('Job updated successfully')  
      }
      if (response.status === 200) {
         setTimeout(() => {
           return navigate('/my/account/') 
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
      dispatch({type: 'PATCH_JOB_UPDATE_ERROR',payload : common}) 
   }
}    
  
export const getAllJobAction =  (categoryId,divisionID,districtId) =>async dispatch=>{ 
   // this is filter api 
   const divisionIDEdit = divisionID===undefined?'':divisionID 
   const categoryIdEdit = categoryId===undefined?'':categoryId
   const districtIdIDEdit = districtId===undefined?'':districtId 
   const  filterApi = (categoryIdEdit?"&category="+categoryIdEdit:''+divisionIDEdit?"&division="+divisionIDEdit:''+districtIdIDEdit?"&district="+districtIdIDEdit:'') 
 
   dispatch({type: 'GET_All_JOB_REQUEST'}); 
   try{
      const response =  (await axios.get('job/'+filterApi+"?limit=20")).data.results    
      dispatch({type: 'GET_All_JOB_SUCCESS', payload: response});  
   }catch(err){
      dispatch({type: 'GET_All_JOB_ERROR' ,payload : err}); 
   }
}  

export const getMyJobAction =  () =>async dispatch=>{  
   dispatch({type: 'GET_My_JOB_REQUEST'});
   const token = localStorage.getItem("token");
   try{
      const response =  (await axios.get('job/my/',{headers:{"Authorization":"token "+token}})).data   
      dispatch({type: 'GET_My_JOB_SUCCESS', payload: response});  
   }catch(err){
      dispatch({type: 'GET_My_JOB_ERROR' ,payload : err}); 
   }
}

export const getAllJobsForPaginateAction =  (categoryId,divisionID,districtId) =>async dispatch=>{
    // this is filter api
    const divisionIDEdit = divisionID===undefined?'':divisionID
    const categoryIdEdit = categoryId===undefined?'':categoryId
    const districtIdIDEdit = districtId===undefined?'':districtId
    const  filterApi = (categoryIdEdit?"&category="+categoryIdEdit:''+divisionIDEdit?"&division="+divisionIDEdit:''+districtIdIDEdit?"&district="+districtIdIDEdit:'')

    dispatch({type: 'GET_All_JOB_PAGINATE_REQUEST'});
    try{
        const response =  (await axios.get('job/?'+filterApi)).data
        dispatch({type: 'GET_All_JOB_PAGINATE_SUCCESS', payload: response});
    }catch(err){
        dispatch({type: 'GET_All_JOB_PAGINATE_ERROR' ,payload : err});

    }
}

export const postJobDeleteAction =  (id,navigate) =>async dispatch=>{ 
   const token = localStorage.getItem("token");
   dispatch({type: 'GET_JOB_DELETE_REQUEST'}); 
   try{ 
      const response =  (await axios.delete('job/my/'+id+'/',{headers:{"Authorization":"token "+token}})) 
       
      dispatch({type: 'GET_JOB_DELETE_SUCCESS',id: id});

      if(response){  
         successMessage('Job delete successfully')  
      } 
      if (response.status) {
         setTimeout(() => {
           return navigate('/my/account/') 
         }, 500);
       } 
      // navigate('/my/account/');   
   }catch(err){  
      if (err.request.status === 400){
         const warningMessage = err?.response?.data?.invalid_params?.error?.message
         warningMsg(warningMessage)
      } 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      }
      dispatch({type: 'GET_JOB_DELETE_ERROR' ,payload : err});  
   }
} 

export const getJobDetailsAction =  (jobDetailsId) =>async dispatch=>{ 
   const id  = jobDetailsId.id; 
   dispatch({type: 'GET_JOB_DETAILS_REQUEST'}); 
   try{ 
      const response =  (await axios.get('job/'+id+'/')).data    
      dispatch({type: 'GET_JOB_DETAILS_SUCCESS',payload: response}) 
   }catch(err){
      dispatch({type: 'GET_JOB_DETAILS_ERROR' ,payload : err}); 
   }
} 

  

 

  

export const postApplyJobAction =  (formdata,navigate) =>async dispatch=>{  
   dispatch({type: 'GET_APPLY_JOB_REQUEST'});
   const token = localStorage.getItem("token"); 
   try{
      const response =  (await axios.post('job/application/',formdata,{headers:{"Authorization":"token "+token}}))   
      dispatch({type: 'GET_APPLY_JOB_SUCCESS', payload: response});  
      
      document.getElementById("job__apply__close").click();
      if(response){  
         successMessage('Job apply successfully')  
      } 
      if (response.status) {
         setTimeout(() => {
           return navigate('/my/appliedjob/list/') 
         }, 500);
       }   
   }catch(err){ 
      if (err.request.status === 500) {
         errorMessage('Something Went Wrong With Server')
      } 
      const common = err?.response?.data?.invalid_params 
      dispatch({type: 'GET_APPLY_JOB_ERROR' ,payload : common}); 
   }
}
 