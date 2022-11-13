import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { getAdCategoryItems, getAdSubCategoryItems, getDistrictItems, getDivisionItems, isInvalid } from "../../Utilities/Utilities";
import { languageCheck } from "../../helpers/Helpers";
import { getDistrictRequest, getDivisionRequest } from "../../redux/action/coreAction";
import { getAdCategoryRequest, getAdSubCategoryRequest } from "../../redux/action/userProfileAction/profileAdAction";

const AdFilter = React.forwardRef((props, ref) => {
    const refCategory = useRef();
    const refDivision = useRef();
    const refDistrict = useRef();
    const refSubCategory = useRef();

    const [allDivisions, setAllDivisions] = useState([]);
    const [allDistricts, setAllDistricts] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [allSubCategories, setSubAllCategories] = useState([]);

    const [districts, setDistricts] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    let _allDivisions = getDivisionItems();
    let _allDistricts = getDistrictItems();
    let _allCategories = getAdCategoryItems();
    let _allSubCategories = getAdSubCategoryItems();

    const init = () => {
        setAllDivisions(_allDivisions);
        setAllDistricts(_allDistricts);
        setAllCategories(_allCategories);
        setSubAllCategories(_allSubCategories);
        setDistricts(_allDistricts?.filter(x => x.division === props.getDivisionDefaultValue) || []);
        setSubCategories(_allSubCategories?.filter(x => x.ad_category === props.getAdCategoryDefaultValue) || []);
    }

    useEffect(() => {
        if (isInvalid(_allDivisions)
            || isInvalid(_allDistricts)
            || isInvalid(_allCategories)
            || isInvalid(_allSubCategories)) {
            Promise.all([
                getDivisionRequest(),
                getDistrictRequest(),
                getAdCategoryRequest(),
                getAdSubCategoryRequest(),
            ]).then(() => {
                _allDivisions = getDivisionItems();
                _allDistricts = getDistrictItems();
                _allCategories = getAdCategoryItems();
                _allSubCategories = getAdSubCategoryItems();
                init();
            });
        }
        else {
            init();
        }
    }, []);

    const onChange = (key, value) => {
        if (props?.onChange) props?.onChange(key, value);
    }

    const handleCategory = (event) => {
        const categoryId = event.target.value;
        props.setAdCategoryDefaultValue(categoryId);
        const routeCategory = allCategories && allCategories.find((y) => y.id === categoryId);
        onChange('ad_category', {
            value: categoryId,
            title: routeCategory?.name || ""
        });
        setSubCategories(allSubCategories?.filter(x => x.ad_category === categoryId) || []);
        props.setToggleCategory(x => !x);
    }

    const handleSubCategory = (event) => {
        const subCategoryId = event.target.value;
        props.setAdSubCategoryDefaultValue(subCategoryId);
        const routeSubCategory = subCategories && subCategories.find((y) => y.id === subCategoryId);
        onChange('ad_sub_category', {
            value: subCategoryId,
            title: routeSubCategory?.name || ""
        });
        props.setToggleCategory(x => !x);
    }

    const handleDivision = (event) => {
        const divisionId = event.target.value;
        props.setDivisionDefaultValue(divisionId);
        const routeDivision = allDivisions && allDivisions.find((y) => y.id === divisionId);
        onChange('division', {
            value: divisionId,
            title: routeDivision?.name || ""
        });
        setDistricts(allDistricts?.filter(x => x.division === divisionId) || []);
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
                            {allCategories && allCategories?.map(x => (
                                <option key={x.id} value={x.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <select ref={refSubCategory} value={props.getAdSubCategoryDefaultValue}
                            onChange={(e) => handleSubCategory(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "সাব ক্যাটাগরি" : "Sub Cetegory"}</option>
                            {subCategories && subCategories?.map(x => (
                                <option key={x.id} value={x.id}> {x.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3 form-group">
                        <select ref={refDivision} value={props.getDivisionDefaultValue}
                            onChange={(e) => handleDivision(e)} className="form-control w-100">
                            <option value="">{languageCheck() === 'bn' ? "বিভাগ" : "Division"}</option>
                            {allDivisions && allDivisions?.map(x => (
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