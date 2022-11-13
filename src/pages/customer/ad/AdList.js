import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdTables from "../../../components/Ad/AdTables";
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header'; 
import UserSidebar from "../../../components/UserSidebar";
import PaginateCustom from './../../../components/Paginate/PaginateCustom'; 
 
import {languageCheck} from "../../../helpers/Helpers";
 
 
const AdList = () => {

    const dispatch = useDispatch(); 
    const [getAllData, setAllData] = useState(''); 
    const [getNewOffset, setNewOffset] = useState(''); 
     
    const getPaginateData = (paginateData, getNewOffset) => {
        setNewOffset(getNewOffset)
        setAllData(paginateData?.results); 
    }  
     // delete function for paginate
     const { deleteRes } = useSelector(state => state.deletePaginationReducer);
     if (getAllData?.length) {
         const index = getAllData.findIndex(x => x.id === deleteRes);
         if (index >= 0) {
          getAllData.splice(index, 1);
         } 
     }
    const paginateInfo = {
        'path': 'adpost/my/',
        'offset': '',
        'limit': 10,
    }     
 

    return (
        <>
         <Header />   

            <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row" style={{padding:"0",margin:'0'}} >   
                          {/* user dashbord sidebar */} 
                          <UserSidebar my_account={'active'} />  
                           <div className="col-lg-8 scroll_list_index_out">
                              <div className="row"> 
                                <div className="dashboard_content mt-50 scroll_list_index" id="myads">   
                                    <div className="post_title">
                                        <h5 className="title">{languageCheck() === 'bn' ? 'আমার বিজ্ঞাপন' : "My Ads"}</h5>
                                    </div> 
                                    <div className="warpper pt-20 scroll_list_index_in">
                                        <table id="data-table" className="table">
                                            <thead>
                                                <tr> 
                                                <th>{languageCheck() === 'bn' ? 'ক্রমিক নং' : "Sl No"}</th>
                                                <th>{languageCheck() === 'bn' ? 'বিজ্ঞাপনের শিরোনাম' : "Ad Title"}</th>
                                                <th>{languageCheck() === 'bn' ? 'শর্ত:' : "Condition:"}</th>
                                                <th>{languageCheck() === 'bn' ? 'মূল্য' : "price"}</th>  
                                                <th>{languageCheck() === 'bn' ? 'একশন' : "Actions"}</th>
                                                </tr>
                                             </thead> 
                                             <tbody>  
                                                {getAllData && getAllData?.map((data,i) =>(<AdTables key={i} data={data} offset={getNewOffset} index={i} />))} 
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

export default AdList;