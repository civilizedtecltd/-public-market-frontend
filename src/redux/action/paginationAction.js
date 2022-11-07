import axios from "axios";
import { successMessage } from "../../Hooks/MessageHandling";

export const getPaginationAction = (path, limit, offset, params) => async dispatch => {
    params = params || {};
    params.limit = limit;
    params.offset = offset;

    console.log('getPaginationAction', path, params)

    const _params = [];
    Object.keys(params)?.forEach(x => {
        const v = params[x];
        if (v) _params.push(`${x}=${v}`);
    })
    if (_params?.length) {
        path = `${path}?${_params.join('&')}`;
    }

    const token = localStorage.getItem("token");

    dispatch({ type: 'GET_PAGINATION_REQUEST' });
    const headers = token ? { headers: { "Authorization": "token " + token } } : null;

    try {
        const response = (await axios.get(path, headers)).data
        dispatch({ type: 'GET_PAGINATION_SUCCESS', payload: response })
    } catch (err) {
        dispatch({ type: 'GET_PAGINATION_ERROR', payload: err });
    }

}


export const deletePaginationAction = (path, id) => async dispatch => {
    const token = localStorage.getItem("token");
    dispatch({ type: 'DELETE_PAGINATION_REQUEST' });
    try {
        const response = (await axios.delete(path + id + '/', { headers: { "Authorization": "token " + token } }))
        dispatch({ type: 'DELETE_PAGINATION_SUCCESS', payload: id });
        if (response) {
            successMessage('delete item successfully')
        }
    } catch (err) {
        dispatch({ type: 'DELETE_PAGINATION_ERROR', payload: err });
    }
} 