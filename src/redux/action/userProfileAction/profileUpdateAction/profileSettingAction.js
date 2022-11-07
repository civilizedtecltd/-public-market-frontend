import axios from "axios";
import {errorMessage, successMessage, warningMsg} from "../../../../Hooks/MessageHandling";

export const getProfileSettingAction = () => async dispatch => {

    const token = localStorage.getItem("token");

    try {
        if (token) {
            dispatch({type: 'GET_PROFILE_SETTING_REQUEST'});
            const response = (await axios.get('custom_auth/profile/',{headers: {"Authorization": "token " + token}})).data
            dispatch({type: 'GET_PROFILE_SETTING_SUCCESS', payload: response})
        }
    } catch (err) {
        dispatch({type: 'GET_PROFILE_SETTING_ERROR', payload: err});
    }
}


export const postProfileSettingUpdateAction = (formdata, navigate) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch({type: 'POST_PROFILE_SETTING_UPDATE_REQUEST'});
    try {
        const response = (await axios.patch('custom_auth/profile/',formdata,{headers: {"Authorization": "token " + token}}))
        dispatch({type: 'POST_PROFILE_SETTING_UPDATE_SUCCESS', payload: response})


        if (response.status === 200) {
            successMessage('Profile updated successfully')
            navigate("/my/profile/setting/")
        }
    } catch (err) {
        if (err.request.status === 400) {
            // const warningMessage = err?.response?.data?.invalid_params?.email[0]?.message
            // warningMsg(warningMessage)
        }
        if (err.request.status === 500) {
            errorMessage('Something Went Wrong With Server')
        }
        const common = err?.response?.data?.invalid_params
         
        dispatch({type: 'POST_PROFILE_SETTING_UPDATE_ERROR', payload: common});
    }
}


export const postProfileSettingChangePasswordAction = (formdata, navigate) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch({type: 'POST_PROFILE_SETTING_CHANGE_PASSWORD_REQUEST'});
    try {
        const response = (await axios.post('/custom_auth/change-password/',formdata,{headers: {"Authorization": "token " + token}}))
        dispatch({type: 'POST_PROFILE_SETTING_CHANGE_PASSWORD_SUCCESS', payload: response})
        if (response) {
            successMessage('Password updated successfully')
            navigate("/my/profile/setting/")
        }
    } catch (err) {

        if (err) {
            const warningMessage = err?.response?.data?.invalid_params?.current_password?.message
            warningMsg(warningMessage)
        }
        if (err.request.status === 500) {
            errorMessage('Something Went Wrong With Server')
        }
        dispatch({type: 'POST_PROFILE_SETTING_CHANGE_PASSWORD_ERROR', payload: err});
    }
} 