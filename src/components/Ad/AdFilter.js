import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDistrictAction, getDivisionAction } from "../../redux/action/coreAction";
import { getAdCategoryAction, getAdSubCategoryAction } from "../../redux/action/userProfileAction/profileAdAction";
import { getAdCategoryItems, getAdSubCategoryItems, getDistrictItems, getDivisionItems, isInvalid } from "../../Utilities/Utilities";
import { languageCheck } from "../../helpers/Helpers";

const AdFilter = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();

    const refCategory = useRef();
    const refDivision = useRef();
    const refDistrict = useRef();
    const refSubCategory = useRef();

    const [districts, setDistricts] = useState([]);

    // call all reducer
    const { getAllAdsCategory } = useSelector(state => state.getAdCategoryReducer);

    useEffect(() => {
        if (getAllAdsCategory) {
            dispatch(getAdCategoryAction());
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAdSubCategoryAction());
    }, [dispatch]);

    useEffect(() => {
        setDistricts(districtItemLocal?.filter(x => x.division === props.getDivisionDefaultValue) || []);
    }, [props.getDivisionDefaultValue]);

    const getAllAdsCategoryLocal = getAdCategoryItems();
    const getAllAdsSubCategoryLocal = getAdSubCategoryItems();

    const { divisionItem } = useSelector(state => state.getDivisionReducer);
    const divisionItemLocal = getDivisionItems();

    useEffect(() => {
        if (isInvalid(divisionItemLocal)) {
            dispatch(getDivisionAction());
        }
    }, [dispatch, divisionItem]);

    const { districtItem } = useSelector(state => state.getDistrictReducer);
    const districtItemLocal = getDistrictItems();

    useEffect(() => {
        if (isInvalid(districtItemLocal)) {
            dispatch(getDistrictAction());
        }
    }, [dispatch, districtItem])

    const adSubCategoryItems = getAllAdsSubCategoryLocal && getAllAdsSubCategoryLocal?.filter(x => x.ad_category === props?.adCategory || x.ad_category === props.getAdCategoryDefaultValue);
    const districtActiveId = districtItemLocal?.find(x => x.id === props.getLocationData?.state?.id);

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    useEffect(() => {
        if (props?.getLocationData?.state?.id) {
            props.setDivisionDefaultValue(props?.getLocationData?.state?.id);
        }
    }, [props?.getLocationData]);

    useEffect(() => {
        if (districtActiveId?.division) {
            props.setDistrictDefaultValue(districtActiveId?.division);
            props.setDistrictDefaultValue(props?.getLocationData?.state?.id);
        }
    }, [props?.getLocationData?.state?.id]);

    const handleCategory = (event) => {
        const categoryId = event.target.value;
        props.setAdCategoryDefaultValue(categoryId);
        const routeCategory = getAllAdsCategoryLocal && getAllAdsCategoryLocal.find((y) => y.id === event.target.value);
        onChange('ad_category', {
            value: categoryId,
            title: routeCategory?.name || ""
        });
        props.setToggleCategory(x => !x);
    }

    const handleSubCategory = (event) => {
        const subCategoryId = event.target.value;
        props.setAdSubCategoryDefaultValue(subCategoryId);
        const routeSubCategory = adSubCategoryItems && adSubCategoryItems.find((y) => y.id === event.target.value);
        onChange('ad_sub_category', {
            value: subCategoryId,
            title: routeSubCategory?.name || ""
        });
        props.setToggleCategory(x => !x);
    }

    const handleDivision = (event) => {
        const divisionID = event.target.value;
        props.setDivisionDefaultValue(divisionID);
        const routeDivision = divisionItemLocal && divisionItemLocal.find((y) => y.id === event.target.value);
        onChange('division', {
            value: divisionID,
            title: routeDivision?.name || ""
        });
        props.setToggleCategory(x => !x);
    }

    const handleDistrict = (event) => {
        const districtId = event.target.value;
        props.setDistrictDefaultValue(districtId);
        const routeDistrict = districts && districts.find((y) => y.id === event.target.value);
        onChange('district', {
            value: districtId,
            title: routeDistrict?.name || ""
        });
        props.setToggleCategory(x => !x);
    }

    useImperativeHandle(ref, () => {
        return {
            reset: () => {
                refCategory.current.value = "";
                refSubCategory.current.value = "";
                refDivision.current.value = "";
                refDistrict.current.value = "";
            }
        }
    }, []);

    return (
        <>
            <div className={props?.toggleCategoryInit ? "category_list" : ""}  >
                <div className="row justify-content-center">
                    <div className="col-md-3 form-group">
                        <select ref={refCategory} value={props.getAdCategoryDefaultValue}
                            onChange={(e) => handleCategory(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "ক্যাটাগরি" : "Category"}</option>
                            {getAllAdsCategoryLocal && getAllAdsCategoryLocal?.map(x => (
                                <option key={x.id} value={x.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <select ref={refSubCategory} value={props.getAdSubCategoryDefaultValue}
                            onChange={(e) => handleSubCategory(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "সাব ক্যাটাগরি" : "Sub Cetegory"}</option>
                            {adSubCategoryItems && adSubCategoryItems?.map(x => (
                                <option key={x.id} value={x.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <select ref={refDivision} value={props.getDivisionDefaultValue}
                            onChange={(e) => handleDivision(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "বিভাগ" : "Division"}</option>
                            {divisionItemLocal && divisionItemLocal?.map(x => (
                                <option key={x.id} value={x.id}>{x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <select ref={refDistrict} value={props.getDistrictDefaultValue}
                            onChange={(e) => handleDistrict(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "জেলা" : "District"}</option>
                            {districts && districts?.map(x => (
                                <option key={x.id} value={x.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
});

export default AdFilter;