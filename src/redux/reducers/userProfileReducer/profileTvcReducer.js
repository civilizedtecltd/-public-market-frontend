export const postTvcSubmitReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'POST_TVC_SUBMIT_REQUEST' : return {
         loading : true, 
       }
      case 'POST_TVC_SUBMIT_SUCCESS' : return { 
          loading : false,
          success : true, 
      } 
      case 'POST_TVC_SUBMIT_ERROR' : return {
          loading : false,
          tvcPostError : action.payload
      }
      default : return state
    }
   
} 
 
export const getAllTvcReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_ALL_TVC_REQUEST' : return {
         loading : true, 
         ...state
       }
      case 'GET_ALL_TVC_SUCCESS' : return { 
          loading : false,
          success : true, 
          getAllTvc : action.payload
      } 
      case 'GET_ALL_TVC_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
} 

export const getMyTvcReducer =(state={ },action)=>{
      
  switch(action.type){
    case 'DELETE_SINGLE_TVC_SUCCESS':
      if (state.getMyTvc?.length) {
        const index = state.getMyTvc.findIndex(x => x.id === action.id);
        if (index >= 0) {
          state.getMyTvc.splice(index, 1);
        }
      } 
    case 'GET_MY_TVC_REQUEST' : return {
       loading : true, 
       ...state
     } 
    case 'GET_MY_TVC_SUCCESS' : return { 
        loading : false,
        success : true, 
        getMyTvc : action.payload
    } 
    case 'GET_MY_TVC_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

} 

export const deleteSingleTvcReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'DELETE_SINGLE_TVC_REQUEST' : return {
         loading : true, 
       }
      case 'DELETE_SINGLE_TVC_SUCCESS' : return { 
          loading : false,
          success : true,  
      } 
      case 'DELETE_SINGLE_TVC_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }  
  
}
 
export const getEditTvcReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'GET_EDIT_TVC_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_EDIT_TVC_SUCCESS' : return { 
          loading : false,
          success : true, 
          getTvcEditData : action.payload 
      } 
      case 'GET_EDIT_TVC_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }
  
}
 
export const patchUpdateTvcReducer =(state={ },action)=>{
     
    switch(action.type){
      case 'PATCH_UPDATE_TVC_REQUEST' : return {
         loading : true,  
       }
      case 'PATCH_UPDATE_TVC_SUCCESS' : return { 
          loading : false,
          success : true,  
      } 
      case 'PATCH_UPDATE_TVC_ERROR' : return {
          loading : false,
          tvcPatchError : action.payload
      }
      default : return state
    }
  
}  
 
export const getDetailsTvcReducer =(state={ },action)=>{
     
  switch(action.type){
    case 'GET_DETAILS__TVC_REQUEST' : return {
       loading : true, 
       ...state
     }
    case 'GET_DETAILS_TVC_SUCCESS' : return { 
        loading : false,  
        getTvcDetails : action.payload 
    } 
    case 'GET_DETAILS_TVC_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

}
