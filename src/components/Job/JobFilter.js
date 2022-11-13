import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getJobCategoryAction } from './../../redux/action/userProfileAction/profileJobAction';
import { getDivisionAction, getDistrictAction } from './../../redux/action/coreAction';
import { getDistrictItems, getDivisionItems, getJobCategoryItems, isInvalid } from "../../Utilities/Utilities";
import { languageCheck } from "../../helpers/Helpers";

const JobFilter = React.forwardRef((props, ref) => {

    const dispatch = useDispatch();
    const refCategory = useRef();
    const refDivision = useRef();
    const refDistrict = useRef();

    const { divisionItem } = useSelector(state => state.getDivisionReducer);
    const divisionItemLocal = getDivisionItems();

    const { districtItem } = useSelector(state => state.getDistrictReducer);
    const districtItemLocal = getDistrictItems();

    // Job Category Load Data
    const { jobCategoryItem } = useSelector(state => state.getJobCategoryReducer);
    const jobCategoryItemLocal = getJobCategoryItems();

    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        if (isInvalid(jobCategoryItemLocal)) {
            dispatch(getJobCategoryAction());
        }
    }, [dispatch, jobCategoryItem]);

    useEffect(() => {
        setDistricts(districtItemLocal?.filter(x => x.division === props.getDivisionDefaultValue) || []);
    }, [props.getDivisionDefaultValue]);

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    // call all onChange
    const handleJobCategory = (event) => {
        const categoryId = event.target.value;
        const routeJobCategory = jobCategoryItemLocal &&
            jobCategoryItemLocal.find((y) => y.id === event.target.value);
        onChange('category', {
            value: categoryId,
            title: routeJobCategory?.name || ""
        });
        props.setCategoryDefaultValue(categoryId);
        props.setToggleCategory(x => !x);
    }

    const handleDivision = (event) => {
        const divisionId = event.target.value;
        props.setDivisionDefaultValue(divisionId);
        props.setToggleCategory(x => !x);
        const routeDivision = divisionItemLocal &&
            divisionItemLocal.find((y) => y.id === event.target.value);
        onChange('division', {
            value: divisionId,
            title: routeDivision?.name || ""
        });
    }
    const handleDistrict = (event) => {
        const districtId = event.target.value;
        props.setDistrictDefaultValue(districtId);
        props.setToggleCategory(x => !x);
        const routeDistrict = districts &&
            districts.find((y) => y.id === event.target.value);
        onChange('district', {
            value: districtId,
            title: routeDistrict?.name || ""
        });
    }

    useEffect(() => {
        if (isInvalid(divisionItemLocal)) {
            dispatch(getDivisionAction())
        }
    }, [dispatch, divisionItem]);

    useEffect(() => {
        if (isInvalid(districtItemLocal)) {
            dispatch(getDistrictAction())
        }
    }, [dispatch, districtItem])

    //  filter district item
    // setDistricts(districtItemLocal?.filter(x => x.division === props.getDivisionDefaultValue) || []);

    useImperativeHandle(ref, () => {
        return {
            reset: () => {
                refCategory.current.value = "";
                refDivision.current.value = "";
                refDistrict.current.value = "";
            }
        }
    }, []);

    return (
        <>
            <div className={props?.toggleCategoryInit ? "category_list" : ""}>
                <div className="row justify-content-center">
                    <div className="col-md-4 form-group">
                        <select onChange={(e) => handleJobCategory(e)} ref={refCategory} name="category_id"
                            id="category_id" className="form-control w-100" value={props.getCategoryDefaultValue}>
                            <option value="">{languageCheck() === 'bn' ? "ক্যাটাগরি" : "Category"}</option>
                            {jobCategoryItemLocal && jobCategoryItemLocal?.map((x) => (
                                <option key={x?.id} value={x?.id}> {x?.name}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="col-md-4 form-group">
                        <select ref={refDivision} onChange={(e) => handleDivision(e)} name="category_id" id="division_id"
                            className="form-control w-100" value={props.getDivisionDefaultValue}>
                            <option value="">{languageCheck() === 'bn' ? "বিভাগ" : "Division"}</option>
                            {divisionItemLocal && divisionItemLocal?.map((x) => (
                                <option key={x?.id} value={x?.id}>{x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4 form-group">
                        <select ref={refDistrict} onChange={(e) => {
                            handleDistrict(e)
                        }} name="district_id" id="district_id" className="form-control w-100" value={props.getDistrictDefaultValue}>
                            <option value="">{languageCheck() === 'bn' ? "জেলা" : "District"}</option>
                            {districts && districts?.map((x) => (
                                <option key={x?.id} value={x?.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
});

export default JobFilter;