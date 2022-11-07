import axios from "axios";
import {successMessage, errorMessage, warningMsg, warningMessages} from "../../../Hooks/MessageHandling";

export const getAdCategoryAction = () =>async (dispatch)=>{  
    dispatch({type: 'GET_Ad_CATEGORY_REQUEST'});  
    try{
       const response = (await axios.get('adpost/category/')).data
        if(response){
          localStorage.setItem('adCategoryItem' , JSON.stringify(response))
        }
       dispatch({type: 'GET_Ad_CATEGORY_SUCCESS' ,payload : response});
    }catch(err){
       dispatch({type: 'GET_Ad_CATEGORY_ERROR' ,payload : err}); 
    }
}


export const getAdSubCategoryAction = () =>async (dispatch)=>{
    dispatch({type: 'GET_Ad_SUB_CATEGORY_REQUEST'});
    try{
        const response = (await axios.get('adpost/sub-category')).data 
        localStorage.setItem('adSubCategoryItem' , JSON.stringify(response)) 
        dispatch({type: 'GET_Ad_SUB_CATEGORY_SUCCESS' ,payload : response});

    }catch(err){
        dispatch({type: 'GET_Ad_SUB_CATEGORY_ERROR' ,payload : err});
    }
}


export const postAdStoreAction = (formdata,images,navigate,toast) =>async dispatch=>{
    dispatch({type: 'POST_AD_SUBMIT_REQUEST'});
    const token = localStorage.getItem("token");
    try{
        
        console.log(`---------images------${images.length}`);

        const response =  (await axios.post('adpost/',formdata,{headers:{"Authorization":"token "+token}}
    ))
    if (response.status === 201){ 
        console.log(`---------------${response.data['id']}`);
        const formImageData = new FormData()
        formImageData.append('ad',response.data['id'])
        images.forEach(file=>{
            formImageData.append("images", file);
          });
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    
        const responseImage =  (await axios.post('resize/',formImageData,config))
        dispatch({type: 'POST_AD_SUBMIT_SUCCESS', payload:response});
        if (responseImage.status === 201) {
            
            successMessage('Ad create successfully')
        }
    }  
   
    }catch(err){
        const common = err?.response?.data?.invalid_params 
        dispatch({type: 'POST_AD_SUBMIT_ERROR' ,payload : common});
        console.log(err);
      
        if (err.request.status === 400){
            const warningMessage = err?.response?.data?.invalid_params?.error?.message
            warningMsg(warningMessage)
        }  
        if (err.request.status === 500) {
            errorMessage('Something Went Wrong With Server')
        } 
    }
}

export const getAdEditAction = (id) =>async dispatch=>{
    dispatch({type: 'GET_AD_EDIT_REQUEST'});
    try{
        const response =  (await axios.get('adpost/'+id+'/')).data

        dispatch({type: 'GET_AD_EDIT_SUCCESS',payload: response})
    }catch(err){
        dispatch({type: 'GET_AD_EDIT_ERROR' ,payload : err});
    }
}
export const getAdSubCategoryNameAction = (ad_sub_category_id) =>async dispatch=>{
    dispatch({type: 'GET_SUB_CATEGORY_NAME_REQUEST'});
    const token = localStorage.getItem("token");
    try{
        let ad_sub_category_name
        if (ad_sub_category_id){
            ad_sub_category_name = (await axios.get('adpost/sub-category/'+ad_sub_category_id+'/',{headers:{"Authorization":"token "+token}})).data?.name;
        }

        dispatch({type: 'GET_AD_SUB_CATEGORY_NAME_SUCCESS',payload: ad_sub_category_name})
    }catch(err){
        dispatch({type: 'GET_AD_SUB_CATEGORY_NAME_ERROR' ,payload : err});
    }
}

export const getAdDistrictNameAction = (ad_district_id) =>async dispatch=>{
    dispatch({type: 'GET_AD_DISTRICT_NAME_REQUEST'});
    const token = localStorage.getItem("token");
    let ad_district_name
    try{
        if (ad_district_id){
            ad_district_name = (await axios.get('core/district/'+ad_district_id+'/',{headers:{"Authorization":"token "+token}})).data?.name;
        }


        dispatch({type: 'GET_AD_DISTRICT_NAME_SUCCESS',payload: ad_district_name})
    }catch(err){
        dispatch({type: 'GET_AD_DISTRICT_NAME_ERROR' ,payload : err});
    }
}

export const postAdUpdateAction = (formdata,AdEditId,navigate) =>async dispatch=>{
    dispatch({type: 'PATCH_AD_UPDATE_REQUEST'});
    const token = localStorage.getItem("token");

    try{  
        const response =  (await axios.patch('adpost/my/'+AdEditId+'/',formdata,{headers:{"Authorization":"token "+token}}))

        dispatch({type: 'PATCH_AD_UPDATE_SUCCESS'})
        if (response.status === 200){
            successMessage('Ad update successfully')
        }
        if (response.status === 200) {
            setTimeout(() => {
               navigate("/my/account/") 
            }, 500);
          } 
    }catch(err){
        const common = err?.response?.data?.invalid_params 
        dispatch({type: 'PATCH_AD_UPDATE_ERROR' ,payload : common});
        if (err.request.status === 400){
            const warningMessage = err?.response?.data?.invalid_params?.error?.message
            warningMsg(warningMessage)
        }
        if (err.request.status === 500) {
            errorMessage('Something Went Wrong With Server')
        }
    }
}
 
 
export const getAllAdsForPaginateAction =  (categoryId,divisionID,districtId) =>async dispatch=>{
    // this is filter api
    const divisionIDEdit = divisionID===undefined?'':divisionID
    const categoryIdEdit = categoryId===undefined?'':categoryId
    const districtIdIDEdit = districtId===undefined?'':districtId
    const  filterApi = (categoryIdEdit?"&category="+categoryIdEdit:''+divisionIDEdit?"&division="+divisionIDEdit:''+districtIdIDEdit?"&district="+districtIdIDEdit:'')

    dispatch({type: 'GET_All_AD_PAGINATE_REQUEST'});
    try{
        const response =  (await axios.get('adpost/?'+filterApi)).data
        dispatch({type: 'GET_All_AD_PAGINATE_SUCCESS', payload: response});
    }catch(err){
        dispatch({type: 'GET_All_AD_PAGINATE_ERROR' ,payload : err});

    }
}
 
 

export const getAdDetailsAction =  (AdId) =>async dispatch=>{
     
    dispatch({type: 'GET_AD_DETAILS_REQUEST'});
    try{
        const response =  (await axios.get('adpost/'+AdId+'/')).data
        dispatch({type: 'GET_AD_DETAILS_SUCCESS',payload: response})
    }catch(err){
        dispatch({type: 'GET_AD_DETAILS_ERROR' ,payload : err});
    }
}


 

export const getMyAdAction =  () =>async dispatch=>{  
    dispatch({type: 'GET_My_Ad_REQUEST'});
    const token = localStorage.getItem("token");
    try{
       const response =  (await axios.get('adpost/my/',{headers:{"Authorization":"token "+token}})).data  
       dispatch({type: 'GET_My_Ad_SUCCESS', payload: response});  
    }catch(err){
       dispatch({type: 'GET_My_Ad_ERROR' ,payload : err}); 
    }
 }

 export const postAdDeleteAction =  (id,navigate) =>async dispatch=>{ 
    const token = localStorage.getItem("token");
    dispatch({type: 'GET_AD_DELETE_REQUEST'}); 
    try{ 
       const response =  (await axios.delete('adpost/my/'+id+'/',{headers:{"Authorization":"token "+token}})) 
        
       dispatch({type: 'GET_AD_DELETE_SUCCESS',id: id});
 
       if(response){  
          successMessage('Ad delete successfully')  
       } 
       if (response.status) {
          setTimeout(() => {
            return navigate('/my/account/') 
          }, 2000);
        }    
    }catch(err){  
       if (err.request.status === 400){
          const warningMessage = err?.response?.data?.invalid_params?.error?.message?.message
          warningMsg(warningMessage)
       } 
       if (err.request.status === 500) {
          errorMessage('Something Went Wrong With Server')
       }
       dispatch({type: 'GET_AD_DELETE_ERROR' ,payload : err});  
    }
 } 


 export const getAllAdAction =  () =>async dispatch=>{ 
    
    dispatch({type: 'GET_All_Ad_REQUEST'}); 
    try{
       const response =  (await axios.get('adpost/?limit=20')).data    
       dispatch({type: 'GET_All_Ad_SUCCESS', payload: response});  
    }catch(err){
       dispatch({type: 'GET_All_Ad_ERROR' ,payload : err}); 
    }
 }   
 
 