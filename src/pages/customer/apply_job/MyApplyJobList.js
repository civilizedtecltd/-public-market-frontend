import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MyApplyJobTables from "../../../components/ApplyJob/MyApplyJobTables";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PaginateCustom from "../../../components/Paginate/PaginateCustom";
import UserSidebar from "../../../components/UserSidebar";
import { languageCheck } from "../../../helpers/Helpers";
import { getProfileSettingAction } from "../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";

const MyApplyJobList = () => {
  
    const dispatch = useDispatch(); 
    const [getAllData, setAllData] = useState(''); 
    const [getNewOffset, setNewOffset] = useState('');  
    const getPaginateData = (paginateData, getNewOffset) => {
        setNewOffset(getNewOffset)
        setAllData(paginateData?.results); 
    }     
    const paginateInfo = { 
        'path': 'job/application/my/',
        'offset': '',
        'limit': 10, 
    }  
    // call profile id
    const { profileData } = useSelector(state => state.getProfileSettingReducer);  

    useEffect(() => {  
    dispatch(getProfileSettingAction())
    }, [dispatch])   

    
    return (
        <>
             <Header />   
              <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row" style={{padding:"0",margin:'0'}}>   
                           {/* user dashbord sidebar */} 
                           <UserSidebar applied_job={'active'} />  
                           <div className="col-lg-8 scroll_list_index_out"> 
                              <div className="row"> 
                                <div className="dashboard_content mt-50 scroll_list_index" id="myads">   
                                    <div className="post_title"> 
                                        <h5 className="title"> 
                                        {languageCheck() === 'bn' ? 'আমার প্রয়োগকৃত চাকরি' : 'My Applied Jobs'}
                                        </h5>
                                    </div> 
                                    <div className="warpper pt-20 scroll_list_index_in">
                                        <table id="data-table" className="table">
                                            <thead> 
                                                <tr>
                                                <th>{languageCheck() === 'bn' ? 'ক্রমিক নং' : "Sl No"}</th> 
                                                <th>{languageCheck() === 'bn' ? 'শিরোনাম' : "Title"}</th>  
                                                <th>{languageCheck() === 'bn' ? 'বেতন' : "Salary"}</th>  
                                                <th>{languageCheck() === 'bn' ? 'ছবি' : "Image"}</th> 
                                                <th>{languageCheck() === 'bn' ? 'জীবনবৃত্তান্ত' : "Resume"}</th> 
                                                <th>{languageCheck() === 'bn' ? 'কাভার লেটার' : "Cover Letter"}</th> 
                                               </tr>
                                             </thead>  
                                             <tbody>  
                                              {getAllData && getAllData?.map((data,i) => (
                                                    <MyApplyJobTables key={i}  data={data} offset={getNewOffset} index={i}
                                                      /> 
                                                )) } 
                                            </tbody>
                                        </table>
                                      </div> 
                                      <PaginateCustom   paginateInfo={paginateInfo} onPaginateData={getPaginateData}/>
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

export default MyApplyJobList;