import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import profile from '../asset/frontend/assets/images/default.png';
import {capitalizeFirst, languageCheck} from '../helpers/Helpers';
import {GoogleLogout} from 'react-google-login';
// import CustomComponent from  "../components/CustomComponent"
import {FacebookLoginClient} from '@greatsumini/react-facebook-login';
import {getProfileSettingAction} from '../redux/action/userProfileAction/profileUpdateAction/profileSettingAction';

const UserSidebar = (props) => {
    const dispatch = useDispatch();
    const {profileData} = useSelector(
        (state) => state.getProfileSettingReducer
    );
    useEffect(() => {
        dispatch(getProfileSettingAction());
    }, [dispatch]);

    const googleClientId = () => {
        const googleClID = process.env.REACT_APP_SOCIAL_AUTH_GOOGLE_OAUTH2_KEY
        return googleClID
    }

    const [getSignOutBtnText, setSignOutBtnText] = useState("")
    const Navigate = useNavigate();
    const {my_account, applied_job, thumbnailview, my_membership} = props;
    const profile_setting =
        window.location.pathname === '/my/profile/setting/'
            ? 'activemenu'
            : '';

    const FbLogOut = () => {
        FacebookLoginClient.logout(() => {
            logOut()
        });
    }


    const logOut = () => {
        if (getLoginMediaCheck === 'facebook') {
            // console.log(getLoginMediaCheck)
            // window.FB.logout();
        }
        // console.log("google / manul", getLoginMediaCheck)
        localStorage.removeItem('token');
        localStorage.removeItem("loginMedia");
        Navigate('/customer/login/');
    };

    
    const [getLoginMediaCheck, setLoginMediaCheck] = useState("")
    useEffect(() => {
        setLoginMediaCheck(localStorage.getItem("loginMedia"))
    }, [])

    return (
        <>
            <div className="col-lg-4">
                <div className="sidebar_profile mt-50">
                    <div className="profile_user">
                        <div className="user_author d-flex align-items-center">
                            {thumbnailview ?
                                <div className="author">
                                    {thumbnailview ? (
                                        <img src={thumbnailview} alt=""/>
                                    ) : (
                                        <img src={profile} alt=""/>
                                    )}
                                </div> :
                                <div className="author">
                                    {profileData?.thumbnail ? (
                                        <img src={profileData?.thumbnail} alt=""/>
                                    ) : (
                                        <img src={profile} alt=""/>
                                    )}
                                </div>}
                            <div className="user_content media-body">
                                {profileData?.name &&
                                    <p className="author_name">{profileData?.name ? capitalizeFirst(profileData?.name) : 'Jhon'}</p>}
                                <p>{profileData?.phone_number}</p>
                            </div>
                        </div>
                        <div className="user_list">
                            <ul>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'}
                                             to="/dashboard/">
                                        <i className="fal fa-tachometer-alt-average"></i>
                                        {languageCheck() === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({isActive}) => isActive ? 'active' : 'inactive' ? my_account : ''
                                        }
                                        to="/my/account/"
                                    >
                                        <i className="fas fa-user "></i>
                                        {languageCheck() === 'bn' ? 'আমার অ্যাকাউন্ট' : 'My Account'}
                                    </NavLink>
                                </li>
                                {/*<li>*/}
                                {/*  <NavLink className={({ isActive })=>isActive ? 'active' : 'inactive' ? my_membership : ''*/}
                                {/*  }*/}
                                {/*           to="/my/CVBank/"*/}
                                {/*  >*/}
                                {/*    <i className="fa fa-file"></i>*/}
                                {/*    {languageCheck() === 'bn' ? 'সিভি ব্যাংক' : 'CV Bank'}*/}
                                {/*  </NavLink>*/}
                                {/*</li>*/}
                                <li>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? 'active' : 'inactive'
                                        }
                                        to="/my/profile/setting/"
                                    >
                                        <i className="fal fa-cog"></i>
                                        {languageCheck() === 'bn' ? 'আমার প্রোফাইল' : 'My Profile'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? 'active' : 'inactive' ? applied_job : ''
                                        }
                                        to="/my/appliedjob/list/"
                                    >
                                        <i className="fas fa-tasks"></i>
                                        {languageCheck() === 'bn' ? 'আমার প্রয়োগকৃত চাকরি' : 'My Applied Jobs'}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? 'active' : 'inactive' ? "inactive" : ''
                                        }
                                        to="/customer/add/phone/"
                                    >
                                        <i className="fa fa-phone"></i>
                                        {languageCheck() === 'bn' ? 'আপনার ফোন নম্বরটি সংযুক্ত' : 'Add Phone'}
                                    </NavLink>
                                </li>
                                <li className="signOutBtn">
                                    <i className="fal fa-sign-out mr-2"></i>
                                    {
                                        getLoginMediaCheck === "google" ?
                                            <GoogleLogout
                                                clientId={googleClientId()}
                                                buttonText={languageCheck() === "bn" ? "সাইন আউট" : "Sign Out"}
                                                onLogoutSuccess={logOut}
                                                icon={false}
                                            >
                                            </GoogleLogout> :

                                            <button onClick={FbLogOut} to="">
                                                {languageCheck() === 'bn' ? 'সাইন আউট' : 'Sign Out'}
                                            </button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UserSidebar;
