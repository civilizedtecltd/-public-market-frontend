import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import UserSidebar from '../../../components/UserSidebar';
import Swal from 'sweetalert2';
import login from "../../auth/Login";
import EditSelectField from "../../../components/AdComponents/Form/Edit/EditSelectField";
import EditTextField from "../../../components/AdComponents/Form/Edit/EditTextField";
import EditTextAria from "../../../components/AdComponents/Form/Edit/EditTextAria";
import EditRadio from "../../../components/AdComponents/Form/Edit/EditRadio";
import {postTvcSubmitAction} from "../../../redux/action/userProfileAction/profileTvcAction";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const EditAdOld = () => {
    const [values, setValues] = useState([]);
    const [formData, setFormData] = useState([]);
    const [selectedOption, setSelectedOption] = useState([]);

    const [getAd, setGetAd] = useState([])
    const adId = useParams()

    useEffect(() => {

        const getAd = async () => {
            const res = await axios.get('/demo/ad/show/' + adId.id);

            // const formdata = new FormData();
            // const result = Object.keys(values);
            const editData = res.data;
           const editDataCommonKeys = Object.keys(editData);
            const unCommonFieldData = editDataCommonKeys.map(function (editDataCommonKey){
                if (editDataCommonKey === "unCommonFields"){
                    return JSON.parse(editData[editDataCommonKey])
                }
            })

           const unCommonFieldData1 = unCommonFieldData.filter(function( element ) {
                return element !== undefined;
            });

            //
            Object.keys(unCommonFieldData1[0]).map(function (key){
                setValues({...values, [key]: unCommonFieldData1[0][key]})
            })



            // for (let i = 0; i < result.length; i++) {
            //     formdata.append(`${result[i]}`, values[result[i]]);
            // }
            setGetAd(res.data)
        }
        getAd();


    }, [])

    // useEffect( () => {
    //     const priviousValueFormSet = () => {
    //         const formdata = new FormData();
    //         console.log(getAd, 'f')
    //         // const result = Object.keys(values);
    //         //
    //         // for (let i = 0; i < result.length; i++) {
    //         //     formdata.append(`${result[i]}`, values[result[i]]);
    //         // }
    //     }
    //
    //     priviousValueFormSet();
    //     // setFormData(formdata)
    // }, [])


    const subCategories = [
        {
            "name": "Mobile Phones",
            "un-common-field": [
                {
                    "Type select LName Brand Name": [
                        "Apple",
                        "Samsung",
                        "Nokia",
                        "Sony",
                        "OPPO",
                        "Huawei",
                        "Xiaomi",
                        "Vivo",
                    ],
                    "Type text LName Model Name": '',
                    "Type text LName Configuration / Layout": '',
                    "Type textaria LName Mobile Description": '',
                    "Type radio LName Authenticity ": [
                        "Original",
                        "Refurbished",
                    ],
                },
            ],
            "common-ad-field": [],
        },
        {
            "name": "Mobile Phone Accessories",
            "un-common-field": [
                {
                    "Type select Name Mobile Phone Accessories Type": [
                        "Screen Protector",
                        "Headphone",
                        "Selfie Stick",
                        "Power Bank",
                        "Pop Sockets",
                        "OtterBox",
                        "Wireless Chargers",
                        "Handset ",
                    ],
                    "Type textaria Name Accessories Description": '',
                },
            ],
            "common-ad-field": [],
        },
    ]
    const keyArray = [];

    function convertToSlug(fieldName) {
        fieldName = fieldName.replace(' ', '')
        return fieldName.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }

    const dataSet = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
        const formdata = new FormData();

        const result = Object.keys(values);
        for (let i = 0; i < result.length; i++) {
            formdata.append(`${result[i]}`, values[result[i]]);
        }
        setFormData(formdata)
    }

    const submitAd = async (e) => {
        e.preventDefault();

        const res = axios.post('demo/store',formData)
    }

    const dispatch = useDispatch();

    return (
        <>
            <Header/>
            <section className="dashboard_page pt-70 pb-120">
                <div className="container">
                    <Link to="/demo/ad/show/" className="btn btn-success">Ads</Link>
                    <div className="row">
                        <div className="col-lg-8 mt-50">
                            <h5>Ad</h5>
                            <hr/>
                            <form onSubmit={submitAd}>
                                <div className="row">
                                    <div className="col-md-12">

                                        <div className="form-group row">
                                            <label htmlFor="title" className="control-label">
                                                Title
                                            </label>
                                            <input
                                                onChange={dataSet}
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                value={getAd.title}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="unCommonFields">
                                    {subCategories.map((subCategory) => (
                                        subCategory?.name === "Mobile Phones" ?
                                            subCategory['un-common-field'].map((field, index1) => (
                                                    Object.keys(field).map(function (key, index) {
                                                        const inputFieldType = key.split(" ")[1];
                                                        const inputFieldLavelName = key.split("LName")[1];
                                                        var unCommonFieldsColumns = '';
                                                        if (getAd.unCommonFields) {
                                                            unCommonFieldsColumns = JSON.parse(getAd.unCommonFields)


                                                            if (inputFieldType === 'select') {
                                                                // console.log(getAd.unCommonFields.inputFieldLavelName)
                                                                // const unCommonFieldsColumnsList = Object.keys(unCommonFieldsColumns)
                                                                // console.log(unCommonFieldsColumnsList)

                                                                // unCommonFieldsColumnsList.map(function (key){
                                                                //      if (slugColumnName === key){
                                                                //          console.log(key)
                                                                //          // setSelectedOption(unCommonFieldsColumns[key])
                                                                //      }
                                                                //  })


                                                                return <EditSelectField key={index} index={index}
                                                                    dataBaseOptions={unCommonFieldsColumns}
                                                                    dataSet={dataSet}
                                                                    LName={inputFieldLavelName}
                                                                    options={field[key]}/>
                                                            }
                                                            if (inputFieldType === 'text') {
                                                                // const unCommonFieldsColumns = JSON.parse(getAd.unCommonFields)

                                                                return <EditTextField key={index} index={index}
                                                                    dataBaseOptions={unCommonFieldsColumns}
                                                                    dataSet={dataSet}
                                                                    LName={inputFieldLavelName}/>
                                                            }
                                                            if (inputFieldType === 'textaria') {
                                                                return <EditTextAria key={index} index={index}
                                                                                     dataBaseOptions={unCommonFieldsColumns}
                                                                                     dataSet={dataSet}
                                                                                     LName={inputFieldLavelName}/>
                                                            }
                                                            if (inputFieldType === 'radio') {
                                                                return <EditRadio key={index} index={index}
                                                                                  dataBaseOptions={unCommonFieldsColumns}
                                                                                  dataSet={dataSet}
                                                                                  LName={inputFieldLavelName}
                                                                                  options={field[key]}/>
                                                            }
                                                        }
                                                    })
                                                )
                                            )
                                            : ''
                                    ))}
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="main-btn mt-4">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <Footer/>
        </>
    );
};

export default EditAdOld;
