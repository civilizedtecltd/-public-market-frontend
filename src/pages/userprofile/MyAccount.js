import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import UserSidebar from '../../components/UserSidebar';
import profile from '../../asset/frontend/assets/images/default.png' 
import MyAccountJobCard from '../../components/MyAccount/MyAccountJobCard';
import MyAccountTvcCard from '../../components/MyAccount/MyAccountTvcCard';
import MyAccountAdBannerCard from '../../components/MyAccount/MyAccountAdBannerCard';
import { getMyJobAction } from "../../redux/action/userProfileAction/profileJobAction";
import { getAllAdBannerAction, getMyAdBannerAction } from "../../redux/action/userProfileAction/profileAdBannerAction"; 
import { getAllTvcAction, getMyTvcAction } from "../../redux/action/userProfileAction/profileTvcAction";
import { Link } from "react-router-dom";
import { getProfileSettingAction } from "../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";
import { getMyAdAction } from "../../redux/action/userProfileAction/profileAdAction";
import MyAccountAdCard from "../../components/MyAccount/MyAccountAdCard";
import { languageCheck } from "../../helpers/Helpers";
  
const MyAccount = () => {
    const dispatch = useDispatch(); 

    // my Ad data
    const { getMyAds } = useSelector(state => state.getMyAdReducer)
    useEffect(() => {  
        dispatch(getMyAdAction())   
      },[])     
      const getMyAdsResults = getMyAds?.results
  

    // my job data
    const { getMyjobs } = useSelector(state => state.getMyJobReducer)
    useEffect(() => {  
        dispatch(getMyJobAction())   
     },[])    
     const getMyJobsResults = getMyjobs?.results
    
    // my ad banner data
    const { getMyAdBanner } = useSelector(state => state.getMyAdBannerReducer)  
    useEffect(() => {     
        dispatch(getMyAdBannerAction())   
     }, [])   
     const getMyAdBannerResults = getMyAdBanner?.results
    
       
    // my tvc data 
    const { getMyTvc } = useSelector(state => state.getMyTvcReducer)  
    useEffect(() => {     
       dispatch(getMyTvcAction())     
     }, []) 
     const getMyTvcResults = getMyTvc?.results
    
    
      // call profile id
    const { profileData } = useSelector(state => state.getProfileSettingReducer);   
    useEffect(() => {  
      dispatch(getProfileSettingAction())
    }, [dispatch])  
   
    // const [title, setTitle] = useState("My ads | Public Market Bd");
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
                           <UserSidebar my_account={'active'}  />
  
                              
                                       <div className="col-lg-8">
                                       <div className="post_form mt-50">
                                        <p className='pt-4 ml-4'>{profileData?.name}</p>
                                        <hr /> 

                                       {getMyAdsResults && getMyJobsResults && getMyTvcResults && getMyAdBannerResults ? <>


                                        {getMyAdsResults?.length === 0?'':<> 
                                        <div className="review__title shadow-none p-2 mb-2 rounded" style={{background:"red"}}>
                                        <h5 style={{color:'white',fontSize: "18px",background:"red"}}>
                                        {languageCheck() === 'bn' ? 'বিজ্ঞাপন' : 'Ads'}
                                         <span
                                        style={{color: "red",background:"white",
                                        padding: "0.1em 0.4em",borderRadius: "50%",fontSize: "14px"}}
                                        className="ml-1" >{getMyAds?.count}</span></h5>
                                        </div>  
                                         {getMyAdsResults && getMyAdsResults.slice(0,4).map((data,i) => (
                                        <MyAccountAdCard key={i} data={data} />))} 
                                        <div className="row">  
                                        <Link className="px4"  style={{color:'blue',textAlign:'right'}} to="/ad/my/list/" >
                                        {languageCheck() === 'bn' ? 'আরো দেখুন' : 'Show More'}
                                        </Link> 
                                        </div> 
                                        </> }

  

                                      {getMyJobsResults?.length === 0?'':<> 
                                        <div className="review__title shadow-none mt-3 p-2 mb-2 rounded" style={{background:"red"}}>
                                        <h5 style={{color:'white',fontSize: "18px"}}> 
                                           {languageCheck() === 'bn' ? 'চাকরি' : 'Jobs'}
                                           <span
                                        style={{color: "red",background:"white",
                                        padding: "0.1em 0.4em",borderRadius: "50%",fontSize: "14px"}}
                                        className="ml-1" >{getMyjobs?.count}</span></h5>
                                        </div>  
                                         {getMyJobsResults && getMyJobsResults.slice(0,4).map((data,i) => (
                                        <MyAccountJobCard key={i} data={data} />))} 
                                        <div className="row"> 
                                        <Link className="px4"  style={{color:'blue',textAlign:'right'}} to="/my/job/list/" >{languageCheck() === 'bn' ? 'আরো দেখুন' : 'Show More'}</Link> 
                                        </div> 
                                        </> }



                                       {getMyTvcResults?.length === 0?'':<><div className="review__title shadow-none mt-3 p-2 mb-2 rounded" style={{background:"red"}}>
                                        <h5 style={{color:'white',fontSize: "16px"}}>
                                        {languageCheck() === 'bn' ? 'টিভিসি' : 'TVCs'}
                                            <span
                                          style={{color: "red",background:"white",
                                          padding: "0.1em 0.4em",borderRadius: "50%",fontSize: "14px"}}
                                          className="ml-1" >{getMyTvc?.count}</span></h5>
                                          </div>   
                                          {getMyTvcResults && getMyTvcResults?.slice(0,4)?.map((data,i) => (
                                          <MyAccountTvcCard key={i}  data={data} /> ))} 
                                          <div className="row">  
                                            <Link className="px4"  style={{color:'blue',textAlign:'right'}} to="/my/tvc/list/" >{languageCheck() === 'bn' ? 'আরো দেখুন' : 'Show More'}</Link>
                                          </div>  
                                          </>}   
                                        
          
                                       {getMyAdBannerResults?.length === 0?'':<><div className="review__title shadow-none mt-3 p-2 mb-2 rounded" style={{background:"red"}}>
                                         <h5 style={{color:'white',fontSize: "16px"}}>  
                                         {languageCheck() === 'bn' ? 'ব্যানার বিজ্ঞাপন' : 'Banner Ads'}
                                         <span
                                           style={{color: "red",background:"white",
                                            padding: "0.1em 0.4em",borderRadius: "50%",fontSize: "14px"}}
                                            className="ml-1" >{getMyAdBanner?.count}</span></h5>
                                            </div>  
                                             {getMyAdBannerResults && getMyAdBannerResults?.slice(0,4)?.map((data,i) => (
                                            <MyAccountAdBannerCard key={i} data={data} /> ))} 
                                          <div className="row">  
                                            <Link className="px4"  style={{color:'blue',textAlign:'right'}} to="/my/adbanner/list/" >{languageCheck() === 'bn' ? 'আরো দেখুন' : 'Show More'}</Link>
                                          </div>  
                                            </>} 

                                           </> : 'Loading Please Wait'}
 
 
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

export default MyAccount;