import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { languageCheck, numberCheck } from "../../helpers/Helpers";
import {postApplyJobAction} from "../../redux/action/userProfileAction/profileJobAction";
import {getProfileSettingAction} from "../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction";

const JobApplyModal = ({jobDetailsId}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {profileData} = useSelector(state => state.getProfileSettingReducer)
    const {jobApplyError} = useSelector(state => state.postApplyJobReducer)

    useEffect(() => {
        dispatch(getProfileSettingAction()) 
    }, [jobDetailsId?.id]);

     

    // console.log(profileData);
    const [email, setEmail] = useState(profileData?.email)
    const [phone_number, setPhoneNumber] = useState(profileData?.phone_number)
    const [expected_salary, setExpectedSalary] = useState('')
    const [resume, setResume] = useState('')
    const [cover_letter, setCoverLetter] = useState('')
    const [photo, setPhoto] = useState('')

    const jobApplySubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("job", jobDetailsId?.id);
        formdata.append("user", profileData?.id);
        formdata.append("email", email);
        formdata.append("phone_number", phone_number);
        formdata.append("expected_salary", expected_salary);
        formdata.append("resume", resume);
        formdata.append("cover_letter", cover_letter);
        formdata.append("photo", photo);
        dispatch(postApplyJobAction(formdata, navigate))
    }

   
    useEffect(() => {  
        setEmail(profileData?.email) 
        setPhoneNumber(profileData?.phone_number)
    }, [profileData]);

    return (
        <>
            {/* bootstrap modal  */}
            <div className="modal fade " id="job_apply_modal" data-bs-backdrop="static" data-bs-keyboard="false"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content job__apply__modal">
                        <div className="modal-header" style={{border: 'none', padding: '0rem 1rem'}}>
                        </div>
                        <div className="modal-body" style={{padding: "0rem 1rem"}}>
                            <div className="sign_in_form">
                                <div className="sign_title d-flex" style={{justifyContent: "space-between"}}>
                                    <h5 className="title"> 
                                    {languageCheck() === 'bn' ? "এখনই আবেদন করা হচ্ছে" : "Applying Now"}</h5>
                                    <button type="button" id="job__apply__close" style={{marginTop: '10px'}}
                                            className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={jobApplySubmit} id="job_apply_now">
                                    <div className="sign_form_wrapper">
                                        <div className="single_form">
                                            <input 
                                            type="email" 
                                            required 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} 
                                            name="email" 
                                            id="email"
                                            placeholder={languageCheck() === 'bn' ? "ইমেইল" : "Email"}
                                             />
                                            <i className="fal fa-envelope"></i>
                                            <span style={{color: 'red'}}>{jobApplyError?.email?.map((error) => (error?.message))}</span> 
                                        </div>
                                    </div>
                                    <div className="sign_form_wrapper">
                                        <div className="single_form">
                                            <input 
                                            type="text" 
                                            required 
                                            value={profileData?.phone_number}
                                            // onChange={(e) => setPhoneNumber(e.target.value)} 
                                            name="phone"
                                            id="phone" 
                                            disabled
                                            // placeholder={languageCheck() === 'bn' ? "ফোন নম্বর" : "phone number"}
                                            />
                                            <i className="fal fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="sign_form_wrapper">
                                        <div className="single_form">
                                            <input 
                                            type="text" 
                                            required 
                                            value={expected_salary}
                                            onChange={(e) => setExpectedSalary(numberCheck(e))}
                                            name="expacted_salary" 
                                            id="expacted_salary"
                                            placeholder={languageCheck() === 'bn' ? "প্রত্যাশিত বেতন" : "Expacted salary"}
                                            />
                                            <i className="fal fa-dollar-sign"></i>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3" style={{marginBottom: '0'}}>
                                        <label htmlFor="upload_company_logo" className="control-label"> 
                                        {languageCheck() === 'bn' ? "সিভি / রিজুমে" : "Cv / Resume"}<span
                                            style={{fontSize: '14px'}}>(pdf,doc,docx)</span>:</label>
                                        <input type="file" required onChange={(e) => setResume(e.target.files[0])}
                                               name="company_logo"
                                               id="upload_company_logo" className="form-control"
                                               accept="application/pdf, application/doc, application/docx"/>
                                        <i className="fal fa-dollar"></i>
                                    </div>

                                    <div className="form-group" style={{marginBottom: '0'}}>
                                        <label htmlFor="upload_company_logo" className="control-label"> 
                                        {languageCheck() === 'bn' ? "কাভার লেটার" : "Cover Latter"}
                                             <span style={{fontSize: '14px'}}>(pdf,doc,docx)</span> :</label>
                                        <input type="file" required onChange={(e) => setCoverLetter(e.target.files[0])}
                                               name="company_logo"
                                               id="upload_company_logo" className="form-control"
                                               accept="application/pdf, application/doc, application/docx"
                                        />
                                        <i className="fal fa-dollar"></i>
                                    </div>
                                    <div className="form-group" style={{marginBottom: '0'}}>
                                        <label htmlFor="upload_company_logo" className="control-label"> 
                                        {languageCheck() === 'bn' ? "ছবি আপলোড" : "Upload Photo"}
                                             <span style={{fontSize: '14px'}}>(png,jpg,jpeg)</span>:</label>
                                        <input type="file" required onChange={(e) => setPhoto(e.target.files[0])}
                                               name="company_logo" id="upload_company_logo" className="form-control"
                                               accept="image/png, image/jpg, image/jpeg"
                                        />
                                        <i className="fal fa-dollar"></i>
                                    </div>

                                    <div className="row" style={{justifyContent: 'center'}}>
                                         
                                            <button className="main-btn mt-4" type="submit">
                                            {languageCheck() === 'bn' ? "আবেদন করুন" : "Apply"}
                                            </button>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobApplyModal;