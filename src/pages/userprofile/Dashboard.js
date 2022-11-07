import React, {  useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import UserSidebar from '../../components/UserSidebar';  
import profile from '../../asset/frontend/assets/images/default.png'
import { getProfileSettingAction } from "../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import { getBasicInfoAction } from "../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction";
import { capitalizeFirst, languageCheck } from "../../helpers/Helpers";
import { getDistrictItems, getDivisionItems, isInvalid } from "../../Utilities/Utilities";
import { getDistrictAction, getDivisionAction } from "../../redux/action/coreAction";
import { getMyJobAction } from "../../redux/action/userProfileAction/profileJobAction";
import { getMyAdBannerAction } from "../../redux/action/userProfileAction/profileAdBannerAction"; 
import { getMyTvcAction } from "../../redux/action/userProfileAction/profileTvcAction"; 
import { getMyAdAction } from "../../redux/action/userProfileAction/profileAdAction";
 
const Dashboard = () => { 

    const dispatch = useDispatch();  
    const { profileData } = useSelector(state => state.getProfileSettingReducer); 
    useEffect(() => {  
        // document.title = "Profile"
        dispatch(getProfileSettingAction())
    }, [dispatch])
  
         
    const { getBasicInfoData } = useSelector(state => state.getBasicInfoReducer) 
    useEffect(() => { 
        dispatch(getBasicInfoAction()) 
    }, [])
 

        //  // load data local storage  divisionItem
    const { divisionItem } = useSelector(state => state.getDivisionReducer)
    const divisionItemLocal = getDivisionItems(); 
    useEffect(() => {
        if(isInvalid(divisionItemLocal)){
            dispatch(getDivisionAction())
        } 
    }, [dispatch,divisionItem]) 
  
       // load data local storage  districtItem
     const { districtItem }  = useSelector(state => state.getDistrictReducer)
     const districtItemLocal = getDistrictItems();
     useEffect(() => {
         if(isInvalid(districtItemLocal)){
            dispatch(getDistrictAction())
         }
     }, [dispatch,districtItem])  

    const showDivision = divisionItemLocal?.find((division) => division?.id === profileData?.division)
    const showDistrict = districtItemLocal?.find((district) => district?.id === profileData?.district)

 
    // my Ad data
    const { getMyAds } = useSelector(state => state.getMyAdReducer) 
    // my job data
    const { getMyjobs } = useSelector(state => state.getMyJobReducer) 
    // my ad banner data
    const { getMyAdBanner } = useSelector(state => state.getMyAdBannerReducer)   
    // my tvc data 
    const { getMyTvc } = useSelector(state => state.getMyTvcReducer)  
    useEffect(() => {   
        dispatch(getMyAdAction())   
        dispatch(getMyJobAction())  
        dispatch(getMyAdBannerAction())  
        dispatch(getMyTvcAction())     
    }, [profileData?.phone_number])
    // const [title, setTitle] = useState("Dashboard | Public Market Bd");
    // useEffect(() => {
    //     document.title = title
    // },[title])
     
    return (
        <> 
            <Header />
            
                <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row"> 
                           {/* user dashbord sidebar */} 
                           <UserSidebar /> 

                            <div className="col-lg-8">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="dashboard_content mt-50">
                                            <div className="post_title">
                                                <h5 className="title"> {languageCheck() === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard'}</h5>
                                            </div>
                                            <div className="row justify-content-center mt-60 mb-20">
                                                <div className="col-sm-10">
                                                    <div className="card" >
                                                        <div className="card-body user-card"> 
                                                            <div className="user-image-thumb" style={{justifyContent: "center",display: "flex"}}> 
                                                               {profileData?.thumbnail ?
                                                                <img style={{background:'white !important'}} src={profileData?.thumbnail} alt="" /> :
                                                                <img style={{background:'white !important'}} src={profile} alt="" />}  
                                                            </div>
                                                            <div className="user-content pt-30" >
                                                                {profileData?.name && <h5 className="text-center" >{profileData?.name ? capitalizeFirst(profileData?.name):'Jhon'}</h5>}
                                                                {profileData?.email && <p className="text-center" >{profileData?.email}</p>}
                                                                {profileData?.address && <p className="text-center pt-10"><i className="far fa-map-marker-alt"></i>{profileData?.address}</p>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dash-professional-div" style={{textAlign:'center'}}>
                                                         <Link to="/dashboard/my/professional/profile/">
                                                        {getBasicInfoData===undefined 
                                                        ? <button className="btn professional-btn text-center mt-20">
                                                        {languageCheck() === 'bn' ? 'পেশাদার প্রোফাইল তৈরি করুন' : 'Create Professional Profile'}
                                                        </button> :
                                                        <button className="btn professional-btn text-center mt-20">
                                                        {languageCheck() === 'bn' ? 'পেশাদার প্রোফাইল দেখুন' : 'View Professional Profile'}
                                                        </button> }
                                                        </Link> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="dashboard_content message-content mt-50" id="message">
                                            <div className="post_title">
                                                <h5 className="title"> 
                                                {languageCheck() === 'bn' ? 'গ্রাহক তথ্য' : 'Customer information'}
                                                </h5>
                                            </div>
                                            <div className="user_list message-list overflow-auto">
                                                <ul>
                                                    {profileData?.name &&<li style={{paddingLeft: "25px",fontSize:"15px",fontWeight:"bold",marginTop:'20px' }}  >{languageCheck() === 'bn' ? 'পুরো নাম' : 'Full Name'} : {profileData?.name ? capitalizeFirst(profileData?.name):'Jhon'}</li>}
                                                    {showDivision?.name && <li style={{paddingLeft: "25px",fontSize:"15px",fontWeight:"bold",marginTop:'20px' }} >{languageCheck() === 'bn' ? 'বিভাগ' : 'Division'} : {showDivision?.name?showDivision?.name:''}</li>}
                                                    {showDistrict?.name && <li style={{paddingLeft: "25px",fontSize:"15px",fontWeight:"bold",marginTop:'20px' }} >{languageCheck() === 'bn' ? 'জেলা' : 'District'} : {showDistrict?.name?showDistrict?.name:''}</li>}
                                                    {/* <li style={{paddingLeft: "25px",fontSize:"15px",fontWeight:"bold",marginTop:'20px' }} >Status: Active</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className="dashboard_content mt-50">
                                    <div className="post_title">
                                        <h5 className="title">
                                        {languageCheck() === 'bn' ? 'পরিসংখ্যান' : 'Statistics'}
                                        </h5>
                                    </div>
                                    <div className="row justify-content-around mt-10 mb-10">
                                        <div className="col-sm-3"> 
                                            <div className="equal-height card-1 text-center mt-10">
                                                <Link to="/ad/my/list/">
                                                    <div className="item">
                                                        <i className="far fa-check-circle stat-icon"></i>
                                                        <div className="my_all_ad">
                                                         <h4 className="pt-10">
                                                        {languageCheck() === 'bn' ? 'আমার বিজ্ঞাপন' : 'My Ads'}
                                                        </h4>  
                                                        </div>
                                                       
                                                        <h6 className="text-center pt-10">{getMyAds?.count}</h6>
                                                    </div>
                                                </Link>
                                            </div> 
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="equal-height card-2 text-center mt-10">
                                                <Link to="/my/adbanner/list/">
                                                    <div className="item">
                                                        <i className="far fa-rocket stat-icon"></i>
                                                        <div className="my_all_ad">
                                                        <h4 className="pt-10">
                                                        {languageCheck() === 'bn' ? 'আমার ব্যানার বিজ্ঞাপন' : 'My Banner Ads'} 
                                                        </h4>  
                                                        </div>
                                                       
                                                        <h6 className="text-center pt-10">{getMyAdBanner?.count}</h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="equal-height card-3 text-center mt-10" >
                                                <Link to="/my/tvc/list/">
                                                    <div className="item">
                                                        <i className="far fa-comment-alt-lines stat-icon"></i>
                                                        <div className="my_all_ad">
                                                        <h4 className="pt-10"> 
                                                        {languageCheck() === 'bn' ? 'আমার টিভিসি' : 'My Tvc'}
                                                        </h4> 
                                                        </div> 
                                                        <h6 className="text-center pt-10">{getMyTvc?.count}</h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="equal-height card-4 text-center mt-10" >
                                                <Link to="/my/job/list/">
                                                    <div className="item">
                                                        <i className="far fa-briefcase stat-icon"></i>
                                                        <div className="my_all_ad">
                                                        <h4 className="pt-10">
                                                        {languageCheck() === 'bn' ? 'আমার চাকরি' : 'My Job'}
                                                        </h4>  
                                                        </div> 
                                                        <h6 className="text-center pt-10">{getMyjobs?.count}</h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>

            <Footer />
        </>
    );
};

export default Dashboard;