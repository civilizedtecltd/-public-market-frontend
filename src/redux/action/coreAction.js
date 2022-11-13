import axios from "axios";

export const getDivisionRequest = async () => {
   const response = (await axios.get('core/division/')).data
   if (response) {
      localStorage.setItem('divisionItem', JSON.stringify(response));
   }
   return response;
}

export const getDistrictRequest = async () => {
   const response = (await axios.get('core/district/')).data
   if (response) {
      localStorage.setItem('districtItem', JSON.stringify(response))
   }
   return response;
}

export const getDivisionAction = () => async (dispatch) => {
   dispatch({ type: 'GET_DIVISION_REQUEST' });
   try {
      await getDivisionRequest();
      // dispatch({type: 'GET_DIVISION_SUCCESS' ,payload : response}); 
   } catch (err) {
      dispatch({ type: 'GET_DIVISION_ERROR', payload: err });
   }
}

export const getDistrictAction = () => async dispatch => {
   dispatch({ type: 'GET_DISTRICT_REQUEST' });
   try {
      await getDistrictRequest();
      // dispatch({type: 'GET_DISTRICT_SUCCESS' ,payload : response});
   } catch (err) {
      dispatch({ type: 'GET_DISTRICT_ERROR', payload: err });
   }
}