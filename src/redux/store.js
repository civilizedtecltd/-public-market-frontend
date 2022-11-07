import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getDivisionReducer, getDistrictReducer} from './reducers/coreReducer';
import {postPaymentsReducer, getPaymentsReducer} from './reducers/userProfileReducer/paymentReducer/paymentReducer';
import { 
    getJobCategoryReducer,
    getJobPositionReducer,
    getJobTypeReducer,
    getJobEducationalReducer,
    getJobEditReducer,
    getJobDetailsReducer,
    postJobSubmitReducer,
    getAllJobReducer,
    postJobDeleteReducer,
    postJobUpdateReducer,
    getMyJobReducer,
    postApplyJobReducer
} from './reducers/userProfileReducer/profileJobReducer';
import {
    postRegisterVerifySubmitReducer,
    postRegisterSubmitReducer,
    postResetPasswordSubmitReducer,
    postChangePasswordSubmitReducer,
    postForgetPasswordVerifySubmitReducer,
    postLoginSubmitReducer
} from './reducers/userProfileReducer/authReducer/authReducer'
import {
    getProfileSettingReducer,
    postProfileSettingUpdateReducer,
    postProfileSettingChangePasswordReducer 
} from './reducers/userProfileReducer/profileUpdateReducer/profileSettingReducer';
import {
    postBasicInfoReducer,
    getBasicInfoReducer,
    patchBasicInfoReducer,
    postAdditionalInfoReducer,
    patchAdditionalInfoReducer,
    getAdditionalInfoReducer, 
    postPastEmploymentsReducer,
    getPastEmploymentsReducer,
    deletePastEmploymentsReducer,
    patchPastEmploymentsReducer,
    getSinglePastEmploymentsReducer
} from
'./reducers/userProfileReducer/profileUpdateReducer/professionalProfileReducer.js';
import {
    getAdCategoryReducer,
    getAdDetailsReducer, getAdDistrictNameReducer, getAdEditReducer, getAdSubCategoryNameReducer,
    getAdSubCategoryReducer,
    getAllAdReducer,
    getMyAdReducer, getSubCategoryNameAndDistrictNameReducer,
    postAdDeleteReducer,
    postAdStoreReducer,patchAdUpdateReducer
} from './reducers/userProfileReducer/profileAdReducer';
import {
    getEditTvcReducer,
    patchUpdateTvcReducer,
    getAllTvcReducer,
    deleteSingleTvcReducer,
    postTvcSubmitReducer,
    getMyTvcReducer, getDetailsTvcReducer
} from './reducers/userProfileReducer/profileTvcReducer';
import {getAdBannerCategoryReducer,getPricingReducer} from './reducers/commonsReducer/commonsReducer';
import {
    postAdBannerSubmitReducer,
    getAllAdBannerReducer,
    deleteSingleAdBannerReducer,
    getEditAdBannerReducer,
    patchUpdateAdBannerReducer,
    getMyAdBannerReducer,
    getAdBannerDetailsAdBannerReducer
} from './reducers/userProfileReducer/profileAdBannerReducer';
import {getPaginationReducer,deletePaginationReducer} from './reducers/paginationReducer';
import {getDistrictItems, getDivisionItems, getJobCategoryItems} from "../Utilities/Utilities";


const AllReducers = combineReducers({
    //  all district and division reducers  
    getDivisionReducer: getDivisionReducer,
    getDistrictReducer: getDistrictReducer,

    //  all commons reducers
    getAdBannerCategoryReducer: getAdBannerCategoryReducer,

    //  profile setting
    getProfileSettingReducer: getProfileSettingReducer,
    postProfileSettingUpdateReducer: postProfileSettingUpdateReducer,
    postProfileSettingChangePasswordReducer: postProfileSettingChangePasswordReducer,
    
    // professional profile
    postBasicInfoReducer:postBasicInfoReducer,
    getBasicInfoReducer:getBasicInfoReducer,
    patchBasicInfoReducer:patchBasicInfoReducer, 
    postPastEmploymentsReducer:postPastEmploymentsReducer,
    getPastEmploymentsReducer:getPastEmploymentsReducer,
    deletePastEmploymentsReducer:deletePastEmploymentsReducer,
    patchPastEmploymentsReducer:patchPastEmploymentsReducer,
    getSinglePastEmploymentsReducer:getSinglePastEmploymentsReducer,
     

    patchAdditionalInfoReducer:patchAdditionalInfoReducer,
    getAdditionalInfoReducer:getAdditionalInfoReducer,
    postAdditionalInfoReducer:postAdditionalInfoReducer,
     
    //  all job  reducers  
    getJobCategoryReducer: getJobCategoryReducer,
    getJobPositionReducer: getJobPositionReducer,
    getJobTypeReducer: getJobTypeReducer,
    getJobEducationalReducer: getJobEducationalReducer,
    postJobSubmitReducer: postJobSubmitReducer,
    getAllJobReducer: getAllJobReducer,
    postJobDeleteReducer: postJobDeleteReducer,
    getJobEditReducer: getJobEditReducer,
    postJobUpdateReducer: postJobUpdateReducer,
    getJobDetailsReducer: getJobDetailsReducer,
    getMyJobReducer: getMyJobReducer,

    // apply job 
    postApplyJobReducer:postApplyJobReducer,

    // all tvc reducer
    postTvcSubmitReducer: postTvcSubmitReducer,
    getAllTvcReducer: getAllTvcReducer,
    deleteSingleTvcReducer: deleteSingleTvcReducer,
    getEditTvcReducer: getEditTvcReducer,
    patchUpdateTvcReducer: patchUpdateTvcReducer,
    getMyTvcReducer: getMyTvcReducer,
    getDetailsTvcReducer: getDetailsTvcReducer,

    // all my ad banner 
    postAdBannerSubmitReducer: postAdBannerSubmitReducer,
    getAllAdBannerReducer: getAllAdBannerReducer,
    deleteSingleAdBannerReducer: deleteSingleAdBannerReducer,
    getEditAdBannerReducer: getEditAdBannerReducer,
    patchUpdateAdBannerReducer: patchUpdateAdBannerReducer,
    getMyAdBannerReducer: getMyAdBannerReducer,
    getAdBannerDetailsAdBannerReducer: getAdBannerDetailsAdBannerReducer,


    //  all ad reducer
    getAdCategoryReducer: getAdCategoryReducer,
    getAdSubCategoryReducer: getAdSubCategoryReducer,
    postAdStoreReducer: postAdStoreReducer,
    getAdEditReducer: getAdEditReducer,
    getAdSubCategoryNameReducer: getAdSubCategoryNameReducer,
    getAdDistrictNameReducer: getAdDistrictNameReducer,
    getMyAdReducer:getMyAdReducer,
    postAdDeleteReducer:postAdDeleteReducer,
    getAllAdReducer:getAllAdReducer,
    getAdDetailsReducer:getAdDetailsReducer,
    patchAdUpdateReducer:patchAdUpdateReducer,


    // pagination reducer
    getPaginationReducer: getPaginationReducer,
    deletePaginationReducer:deletePaginationReducer,

    // pricing reducer
    getPricingReducer:getPricingReducer,

    // payment reducer
    postPaymentsReducer:postPaymentsReducer,
    getPaymentsReducer:getPaymentsReducer,

    //  all authentication reducers  
    postRegisterVerifySubmitReducer: postRegisterVerifySubmitReducer,
    postRegisterSubmitReducer: postRegisterSubmitReducer,
    postResetPasswordSubmitReducer: postResetPasswordSubmitReducer,
    postChangePasswordSubmitReducer: postChangePasswordSubmitReducer,
    postForgetPasswordVerifySubmitReducer: postForgetPasswordVerifySubmitReducer,
    postLoginSubmitReducer: postLoginSubmitReducer
});


// this reducers use  only localStorage initially
const divisionItem = getDivisionItems();


let districtItem = getDistrictItems();
const jobCategoryItem = getJobCategoryItems();


const init = {
    getDivisionReducer: {
        divisionItem: divisionItem
    },
    getDistrictReducer: {
        districtItem: districtItem
    },
    getJobCategoryReducer: {
        jobCategoryItem: jobCategoryItem
    }
}


const composeEnhancers = composeWithDevTools({});
const store = createStore(AllReducers, init, composeEnhancers(applyMiddleware(thunk)));
export default store;