

export const getDivisionReducer =(state={ },action)=>{
      
    switch(action.type){
      case 'GET_DIVISION_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_DIVISION_SUCCESS' : return { 
          loading : false,
          division : action.payload
      } 
      case 'GET_DIVISION_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }

}
  

export const getDistrictReducer =(state={ },action)=>{
      
    switch(action.type){
      case 'GET_DISTRICT_REQUEST' : return {
         loading : true,
         ...state
       }
      case 'GET_DISTRICT_SUCCESS' : return { 
          loading : false,
          district : action.payload
      } 
      case 'GET_DISTRICT_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    }

}
 