export const getPaymentsReducer =(state={ },action)=>{
       
    switch(action.type){
      case 'GET_PAYMENT_REQUEST' : return {
         loading : true,
         ...state 
       }
      case 'GET_PAYMENT_SUCCESS' : return { 
          loading : false,
          getPayments : action.payload
      } 
      case 'GET_PAYMENT_ERROR' : return {
          loading : false,
          error : action.payload
      }
      default : return state
    } 
} 

export const postPaymentsReducer =(state={ },action)=>{
       
  switch(action.type){
    case 'POST_PAYMENT_REQUEST' : return {
       loading : true, 
     }
    case 'POST_PAYMENT_SUCCESS' : return { 
        loading : false,
        success: true
    } 
    case 'POST_PAYMENT_ERROR' : return {
        loading : false,
        error : action.payload
    }
    default : return state
  }

} 

  