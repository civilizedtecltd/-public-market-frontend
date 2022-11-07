import React, { useState, useEffect, useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { getJobCategoryAction } from '../../../redux/action/userProfileAction/profileJobAction';
import { getDivisionAction, getDistrictAction} from '../../../redux/action/coreAction';
import { getDistrictItems, getDivisionItems, getJobCategoryItems, isInvalid } from "../../../Utilities/Utilities";
import {languageCheck} from "../../../helpers/Helpers";

const CvFilter = (props) => {
    const dispatch = useDispatch();
    const [divisionid, setDivisionid]= useState('');

    const [getFilter, setFilter] = useState({});

    const refCategory = useRef();
    const refDivision = useRef();
    const refDistrict = useRef();

    // Job Category Load Data
    const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer)
    const jobCategoryItemLocal = getJobCategoryItems();
    useEffect(() => {
        if(isInvalid(jobCategoryItemLocal)){
            dispatch(getJobCategoryAction())
        }
    }, [dispatch,jobCategoryItem])

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    //    call all onChange
    const handlejobcategory = (event)  => {
        const categoryId = event.target.value
        onChange('job__category', categoryId);
    }
    const handledivision = (event) => {
        const divisionID = event.target.value
        setDivisionid(divisionID);
        onChange('job__division', divisionID);
    }
    const hendleDistrict = (event) =>{
        const districtId = event.target.value
        onChange('job__district', districtId);
    }

    const { divisionItem } = useSelector(state => state.getDivisionReducer)
    const divisionItemLocal = getDivisionItems();
    useEffect(() => {
        if(isInvalid(divisionItemLocal)){
            dispatch(getDivisionAction())
        }
    }, [dispatch,divisionItem])

    const { districtItem }  = useSelector(state => state.getDistrictReducer)
    const districtItemLocal = getDistrictItems()
    useEffect(() => {
        if(isInvalid(districtItemLocal)){
            dispatch(getDistrictAction())
        }
    }, [dispatch,districtItem])

//    filter district item
    const districtItems = districtItemLocal?.filter((districtItemz) =>  districtItemz.division === divisionid)

    const filterAndSearchReset = () => {
        onChange('reset', "reset");
        setFilter({});
        refCategory.current.value = "";
        refDivision.current.value = "";
        refDistrict.current.value = "";
    }


    return (
        <>
            <div className={props?.toggleCategoryInit ? "category_list" : "" } >
                <div className="row justify-content-center pt-2">
                    <div className="sidebar_title d-flex justify-content-between mb-2">
                        <h5 className="title">{languageCheck() === 'bn' ? "ফিল্টার করুন" : "Filter By"}</h5>
                        <button onClick={filterAndSearchReset}
                                className="px-2 ml-3 rounded bgRed text-white border-0">{languageCheck() === "bn" ? "রিসেট" : "Reset"}
                        </button>
                    </div>
                    <div className="col-md-4 form-group">
                        <select ref={refCategory} onChange={(e) => handlejobcategory(e)}  name="category_id" id="category_id" className="form-control w-100">
                            <option value="" >Category</option>
                            { jobCategoryItemLocal && jobCategoryItemLocal?.map( (jobcategorys)=>(
                                <option onClick={props.showHideAllAdCategory}  key={jobcategorys?.id} value={jobcategorys?.id}> {jobcategorys?.name}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 form-group">
                        <select ref={refDivision} onChange={(e) => handledivision(e)}  name="category_id" id="division_id" className="form-control w-100">
                            <option value="">Division</option>
                            {divisionItemLocal && divisionItemLocal?.map( (jobdivisions)=>(
                                <option onClick={props.showHideAllAdCategory}  key={jobdivisions?.id} value={jobdivisions?.id}>{jobdivisions.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4 form-group">
                        <select ref={refDistrict} onChange={(e) => {hendleDistrict(e)}} name="district_id" id="district_id" className="form-control w-100">
                            <option value="">District</option>
                            {districtItems && districtItems?.map( (districts)=>(
                                <option onClick={props.showHideAllAdCategory}  key={districts?.id} value={districts?.id}> {districts.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CvFilter;