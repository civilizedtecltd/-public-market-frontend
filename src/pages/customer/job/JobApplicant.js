import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from "../../../components/Header/Header"
import Footer from "../../../components/Footer/Footer"  
import UserSidebar from '../../../components/UserSidebar';   
import JobTables from '../../../components/Job/JobTables';
import PaginateCustom from './../../../components/Paginate/PaginateCustom';  
import { getJobCategoryAction } from "../../../redux/action/userProfileAction/profileJobAction";
  
import {languageCheck} from "../../../helpers/Helpers";
import JobApplicantTables from "../../../components/Job/JobApplicantTables";
import { getPaginationAction } from "../../../redux/action/paginationAction";
 
const JobApplicant = () => {     
    
    const dispatch = useDispatch();
    const jobApplicant = useParams();   
     
    const [getAllData, setAllData] = useState(''); 
    const [getNewOffset, setNewOffset] = useState(''); 
 
    // delete function for paginate
    const { deleteRes } = useSelector(state => state.deletePaginationReducer);
    if (getAllData?.length) {
        const index = getAllData.findIndex(x => x.id === deleteRes);
        if (index >= 0) {
         getAllData.splice(index, 1);
        } 
    }
     
    const getPaginateData = (paginateData, getNewOffset) => {
        setNewOffset(getNewOffset)
        setAllData(paginateData?.results); 
    }   
    
    const paginateInfo = {
        'path': 'job/application/',
        'offset': '', 
        'limit': 10,   
    }     

    useEffect(() => {
        const obj = {
            "job": jobApplicant?.id
        } 
        dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset,obj));
    }, [dispatch]);
   
    
    return (
        <>
            <Header />   
              <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row" style={{padding:"0",margin:'0'}}>   
                           {/* user dashbord sidebar */} 
                           <UserSidebar my_account={'active'} />  
                           <div className="col-lg-8 scroll_list_index_out">
                              <div className="row"> 
                                <div className="dashboard_content mt-50 scroll_list_index" id="myads">   
                                    <div className="post_title">
                                        <h5 className="title">{languageCheck() === 'bn' ? 'আমার চাকরির আবেদনকারী' : "My Jobs Applicant"}</h5>
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
                                              {getAllData && getAllData?.map((alljobsdata,i) => (
                                               <JobApplicantTables key={i}  alljobsdata={alljobsdata} offset={getNewOffset} index={i}  />))} 
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

export default JobApplicant;