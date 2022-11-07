 export const getJobCategoryReducer =(state={ },action)=>{
      
   switch(action.type){
     case 'GET_JOB_CATEGORY_REQUEST' : return {
        loading : true,
        ...state
      }
     case 'GET_JOB_CATEGORY_SUCCESS' : return { 
         loading : false,
         jobCategoryItemResponse : action.payload
     } 
     case 'GET_JOB_CATEGORY_ERROR' : return {
         loading : false,
         error : action.payload
     }
     default : return state
   }

}
   
export const getJobPositionReducer =(state={ },action)=>{
     
   switch(action.type){
     case 'GET_JOB_POSISTION_REQUEST' : return {
        loading : true,
        ...state
      }
     case 'GET_JOB_POSISTION_SUCCESS' : return { 
         loading : false,
         jobposition : action.payload
     } 
     case 'GET_JOB_POSISTION_ERROR' : return {
         loading : false,
         error : action.payload
     }
     default : return state
   }

} 
 
export const getJobTypeReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_JOB_TYPE_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_JOB_TYPE_SUCCESS' : return { 
        loading : false,
        jobtype : action.payload
    } 
    case 'GET_JOB_TYPE__ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
  
export const getJobEducationalReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_JOB_EDUCATIONAL_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_JOB_EDUCATIONAL_SUCCESS' : return { 
        loading : false,
        jobeducational : action.payload
    } 
    case 'GET_JOB_EDUCATIONAL_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
  
export const getJobEditReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_JOB_EDIT_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_JOB_EDIT_SUCCESS' : return { 
        loading : false, 
        getsinglejob : action.payload
    } 
    case 'GET_JOB_EDIT_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
  
export const postJobUpdateReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'PATCH_JOB_UPDATE_REQUEST' : return {
       loading : true, 
     }
    case 'PATCH_JOB_UPDATE_SUCCESS' : return { 
        loading : false, 
       success: true
    } 
    case 'PATCH_JOB_UPDATE_ERROR' : return {
        loading : false,
        jobUpdateError : action.payload
    }
    default : return state
  }

}   
 
export const postJobSubmitReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'POST_JOB_SUBMIT_REQUEST' : return {
       loading : true
     }
    case 'POST_JOB_SUBMIT_SUCCESS' : return { 
        loading : false,
        success : true, 
        jobStoreSuccess: action.payload,
    } 
    case 'POST_JOB_SUBMIT_ERROR' : return {
        loading : false,
        jobPostError : action.payload
    }
    default : return state
  }

}
 
export const getAllJobReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_All_JOB_REQUEST' : return {
       loading : true,
       ...state
     } 
    case 'GET_All_JOB_SUCCESS' : return { 
      loading : false, 
      getalljobs : action.payload
    }     
    case 'GET_All_JOB_ERROR' : return {
      loading : false,
      error : action.payload
    }
    default : return state
  }

} 
 
export const getMyJobReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_JOB_DELETE_SUCCESS':
      if (state.getMyjobs?.length) {
        const index = state.getMyjobs.findIndex(x => x.id === action.id);
        if (index >= 0) {
          state.getMyjobs.splice(index, 1); 
        } 
      }
    case 'GET_My_JOB_REQUEST' : return {
       loading : true,
       ...state    
     } 
    case 'GET_My_JOB_SUCCESS' : return { 
      loading : false, 
      getMyjobs : action.payload
    }     
    case 'GET_My_JOB_ERROR' : return {
      loading : false,
      error : action.payload
    }
    default : return state
  }

}

 export const getAllJobsForPaginateReducer =(state={ },action)=>{

     switch(action.type){
         case 'GET_All_JOB_PAGINATE_REQUEST' : return {
             loading : true,
             ...state
         }
         case 'GET_All_JOB_PAGINATE_SUCCESS' : return {
             loading : false,
             getalljobpagination : action.payload
         }
         case 'GET_All_JOB_PAGINATE_ERROR' : return {
             loading : false,
             error : action.payload
         }
         default : return state
     }

 }
 
export const postJobDeleteReducer =(state={ },action)=>{ 
  switch(action.type){
    case 'GET_JOB_DELETE_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_JOB_DELETE_SUCCESS' : return { 
        loading : false, 
        success: true,
        jobDeleteRes: action.payload
    } 
    case 'GET_JOB_DELETE_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
 
export const getJobDetailsReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_JOB_DETAILS_REQUEST' : return {
       loading : true,
       ...state
     }
    case 'GET_JOB_DETAILS_SUCCESS' : return { 
        loading : false, 
        jobDetails : action.payload
    } 
    case 'GET_JOB_DETAILS_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
  
 
 

export const   postApplyJobReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_APPLY_JOB_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_APPLY_JOB_SUCCESS' : return { 
          loading : false, 
          success: true
      } 
      case 'GET_APPLY_JOB_ERROR' : return {
          loading : false,
          jobApplyError : action.payload
      }
      default : return state
    }
  
  }
    
  