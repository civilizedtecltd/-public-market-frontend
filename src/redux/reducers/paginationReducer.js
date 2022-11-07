 
 
export const getPaginationReducer =(state={},action)=>{

    switch(action.type){ 
        
        case 'GET_PAGINATION_REQUEST' : return {
            loading : true,
            ...state 
        }
        case 'GET_PAGINATION_SUCCESS' : return {
            loading : false,
            paginationGetData : action.payload
        }
        case 'GET_PAGINATION_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }

}

export const deletePaginationReducer =(state={},action)=>{

    switch(action.type){ 
        case 'DELETE_PAGINATION_REQUEST' : return {
            loading : true,
            ...state 
        }
        case 'DELETE_PAGINATION_SUCCESS' : return { 
            loading : false, 
            success: true,
            deleteRes: action.payload
        }
        case 'DELETE_PAGINATION_ERROR' : return {
            loading : false,
            error : action.payload
        }
        default : return state
    }

}