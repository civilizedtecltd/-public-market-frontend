import Header from "../../../components/Header/Header";
import React, {useState, useEffect, useRef} from "react";
import UserSidebar from "../../../components/UserSidebar";
import {Link} from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import {languageCheck} from "../../../helpers/Helpers";
import AdTables from "../../../components/Ad/AdTables";
import PaginateCustom from "../../../components/Paginate/PaginateCustom";
import MyFilterCVTables from "./MyFilterCVTables";
import {getPaginationAction} from "../../../redux/action/paginationAction";
import {useDispatch} from "react-redux";
import CvFilter from "./CvFilter";
 
const CVList = () => {
    const dispatch = useDispatch();
    const [getAllData, setAllData] = useState('');
    const [getJobs, setJobs] = useState('');
    const [getNewOffset, setNewOffset] = useState('');
    const [getFilter, setFilter] = useState({});

    const paginateInfo = {
        'path': 'job/application',
        'offset': '',
        'limit': 10,
        params: getFilter

    }
    useEffect(() => {
        dispatch(getPaginationAction(paginateInfo.path, paginateInfo.limit, paginateInfo.offset, getFilter));
    }, [dispatch, getFilter]);

    const getPaginateData = (paginateData, getNewOffset) => {
        setJobs(paginateData?.results);
    }

    const onFilterChange = (key, value) => {
        const obj = {...getFilter};
        obj[key] = value;
        paginateInfo.offset = 0;
        if (key === 'job__division') {
            obj.district = '';
        }
        key === "reset" ? setFilter({}) :setFilter(obj)
    }

    return <>
        <Header/>
        <section className="dashboard_page pt-70 pb-120">
            <div className="container">
                <div className="row" style={{padding:"0",margin:'0'}}>
                    {/* user dashbord sidebar */}
                    <UserSidebar my_membership={'active'}/>
                    <div className="col-lg-8 scroll_list_index_out">
                        <div className="row">
                            <div className="dashboard_content mt-50 scroll_list_index" id="myads">
                                <CvFilter onChange={onFilterChange}/>

                                <div className="post_title">
                                    <h5 className="title" style={{borderBottom: "none"}}>
                                        {languageCheck() === 'bn' ? 'আপনার বাছাই করা সব সিভি। এই সিভি গুলা আপনি ডাউনলোড করতে পারবেন' : 'All your selected CVs. You can download these CVs'}
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
                                        {getJobs && getJobs?.map((data, i) => (
                                            <MyFilterCVTables key={i} data={data} offset={getNewOffset} index={i}
                                            />
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <PaginateCustom paginateInfo={paginateInfo} onPaginateData={getPaginateData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <Footer/>
    </>
}
export default CVList;