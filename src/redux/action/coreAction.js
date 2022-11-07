import axios from "axios"; 


export const getDivisionAction = () =>async (dispatch)=>{ 
     dispatch({type: 'GET_DIVISION_REQUEST'}); 
     try{
        const response = (await axios.get('core/division/')).data
         

         if(response){
         localStorage.setItem('divisionItem' , JSON.stringify(response))
        }
        // dispatch({type: 'GET_DIVISION_SUCCESS' ,payload : response}); 
     }catch(err){ 
        dispatch({type: 'GET_DIVISION_ERROR' ,payload : err}); 
     } 
}
  
export const getDistrictAction = () =>async dispatch=>{
     dispatch({type: 'GET_DISTRICT_REQUEST'});
     
     try{
        const response = (await axios.get('core/district/')).data
         

         if(response){
          localStorage.setItem('districtItem' , JSON.stringify(response))
        } 
        // dispatch({type: 'GET_DISTRICT_SUCCESS' ,payload : response});
     }catch(err){
        dispatch({type: 'GET_DISTRICT_ERROR' ,payload : err});
     }
}