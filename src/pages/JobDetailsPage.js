import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetailsAction } from '../redux/action/userProfileAction/profileJobAction';
import JobApplyModal from '../components/Job/JobApplyModal';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { capitalizeFirst, languageCheck, titlecConvertToSlug } from '../helpers/Helpers';



const JobDetailsPage = () => {
    const [jobDetailsId, setJobDetailsId] = useState(useParams());
    const [jobApplied, setJobApplied] = useState(false);
    const dispatch = useDispatch();
    const jobDetailsDatas = useSelector(state => state.getJobDetailsReducer)
    const { jobDetails } = jobDetailsDatas;
    useEffect(() => {
        dispatch(getJobDetailsAction(jobDetailsId))
    }, [jobDetailsId]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        divisionItemAllApi();
    }, [token]);

    const divisionItemAllApi = async () => {
        try {
            const response = (await axios.get('job/application/my/?limit=5000000000000000',
                { headers: { "Authorization": "token " + token } })).data.results
            if (response) {
                response?.map((job) => {
                    if (jobDetailsId.id === job.job) {
                        setJobApplied(true)
                    }
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    const division = titlecConvertToSlug(jobDetails?.division?.name) || "divisions";
    const district = titlecConvertToSlug(jobDetails?.district?.name) || "districts";
    const category = titlecConvertToSlug(jobDetails?.category?.name) || "categories";

    return (
        <>
            <Header />
            <br />
            <section className="pb-120 product_details_page pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* breadcrumb__area */}
                            <nav className="breadcrumb__area mt-30 mb-10"  >

                                <ul style={{ display: 'flex', flexWrap: "wrap" }} >
                                    <li><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম" : "home"}</Link></li>

                                    <li>
                                        <p> <span>{">"}</span>
                                            <Link to='/alljobs/divisions/districts/categories'  >
                                                {languageCheck() === 'bn' ? "সমস্ত চাকরি" : "All Jobs"}
                                            </Link>
                                        </p>
                                    </li>
                                    <li>
                                        <p> <span>{">"}</span>
                                            <Link
                                                state={{ type: 'division', id: jobDetails?.division?.id }}
                                                to={{ pathname: `/alljobs/${division}/districts/categories` }}
                                            >
                                                {jobDetails?.division?.name}
                                            </Link>
                                        </p>
                                    </li>

                                    <li>
                                        <p> <span>{">"}</span>
                                            <Link
                                                state={{ type: 'district', id: jobDetails?.district?.id }}
                                                to={{ pathname: `/alljobs/${division}/${district}/categories` }}
                                            >
                                                {jobDetails?.district?.name}
                                            </Link>
                                        </p>
                                    </li>

                                    <li>
                                        <p> <span>{">"}</span>
                                            <Link
                                                state={{ type: 'category', id: jobDetails?.category.id }}
                                                to={{ pathname: `/alljobs/${division}/${district}/${category}` }} >
                                                {jobDetails?.category?.name}
                                            </Link>
                                        </p>
                                    </li>

                                    <li>
                                        <p className='active'> <span>{">"}</span>
                                            {jobDetails ? capitalizeFirst(jobDetails?.job_title) : ''}
                                        </p>
                                    </li>
                                </ul>
                            </nav>

                            <div className="product_details">
                                <div className="row">

                                    <div className="col-lg-8 job__details_left mt-3">
                                        <div className="title_container mt-10 mb-2">
                                            <div>
                                                <h5 className="title_container"
                                                    style={{ color: "#0056B3" }}>{jobDetails?.job_title}</h5>
                                                <p className="title_container"
                                                    style={{ color: "#0056B3" }}>{jobDetails?.company_name}</p>
                                            </div>
                                        </div>
                                        <div className="vacancy">
                                            <h6>{languageCheck() === 'bn' ? "শূন্যপদ:" : "Vacancy:"} </h6>
                                            <p>&emsp;  {jobDetails?.number_of_vacancies}</p>
                                        </div>
                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "শিক্ষাগত প্রয়োজনীয়তা:" : "Educational Requirements:"}  </h6>

                                            <ul className="pl-3">
                                                <li>{jobDetails?.educational_qualification} </li>
                                            </ul>
                                        </div>
                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "অভিজ্ঞতার প্রয়োজনীয়তা:" : "Experience Requirements:"}</h6>
                                            <ul className="pl-3">
                                                <li> {jobDetails?.work_exp_in_years ? jobDetails?.work_exp_in_years : "NA"}</li>
                                            </ul>
                                        </div>
                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "চাকুরি স্থান:" : "Job Location:"}</h6>
                                            <ul className="pl-3">
                                                <li>{jobDetails?.Job_area ? jobDetails?.Job_area : "NA"} </li>
                                            </ul>
                                        </div>
                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "বেতন:" : "Salary: "}</h6>
                                            <ul className="">
                                                <li>{jobDetails?.salary_start_price}
                                                    {languageCheck() === 'bn' ? "টাকা প্রতি" : "Tk. To"} {jobDetails?.salary_end_price}
                                                    {languageCheck() === 'bn' ? "টাকা (মাসিক):" : "Tk (Monthly)"}</li>
                                            </ul>
                                        </div>

                                        <div className="feature_details mt-4">
                                            <h6>
                                                {languageCheck() === 'bn' ? "আবেদন গ্রহণের বিকল্প :" : " Application Receiving Option : "}</h6>
                                            <ul className="pl-3">
                                                <li> {jobDetails?.application_receiving_option ? jobDetails?.application_receiving_option : ""} </li>
                                            </ul>
                                        </div>

                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "কাভার লেটার: " : "Cover Letter: "}</h6>
                                            <ul className="pl-3">
                                                <li> {jobDetails?.cover_letter ? jobDetails?.cover_letter : "NA"}</li>
                                            </ul>
                                        </div>

                                        <div className="feature_details mt-4">
                                            <h6>{languageCheck() === 'bn' ? "আবেদন পাঠাবার শেষ তারিখ: " : "Application Deadline: "}</h6>
                                            <ul className="pl-3">
                                                <li> {jobDetails?.application_deadline}</li>
                                            </ul>
                                        </div>

                                        <div className="feature_details mt-4">
                                            <h6> {languageCheck() === 'bn' ? "চাকুরীর বিবরণী: " : "Job Description: "}</h6>
                                            <ul className="pl-3">
                                                <li> {jobDetails?.job_description ? jobDetails?.job_description : "NA"}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="product_details_sidebar">
                                            <div className="product_sidebar_owner mt-4">

                                                <div className="card">
                                                    <div className="card-header" style={{ fontWeight: "bold" }}>
                                                        {languageCheck() === 'bn' ? "চাকুরীর শ্রেণীবিভাগ" : "Job Classification "}</div>
                                                    <div className="job_summary p-2">
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরীর ক্যাটাগরি : " : "Job Category: "}</span>{jobDetails?.category?.name}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরীর অবস্থানগুলি" : "Job Division: "}</span>{jobDetails?.division?.name}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরীর জেলা" : "Job District:"}</span>{jobDetails?.district?.name}
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="card mt-3">
                                                    <div className="card-header" style={{ fontWeight: "bold" }}>
                                                        {languageCheck() === 'bn' ? "চাকুরীর সংক্ষিপ্ত বিবরণ" : "Job Summary"}</div>
                                                    <div className="job_summary p-2">
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরী পদমর্যাদা:" : "Job Position:"}</span>{jobDetails?.job_position}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরীর ধরন:" : "Job Type:"}</span>{jobDetails?.job_type}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "শিক্ষাগত যোগ্যতা:" : "Educational Qualification:"}</span> {jobDetails?.educational_qualification}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "শূন্যপদ:" : "Vacancy:"}</span> {jobDetails?.number_of_vacancies}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "অভিজ্ঞতা:" : "Experience:"}</span> {jobDetails?.work_exp_in_years ? jobDetails?.work_exp_in_years : "NA"}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "চাকুরি স্থান:" : "Job Location:"} </span> {jobDetails?.Job_area ? jobDetails?.Job_area : "NA"}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "বেতন:" : "Salary: "}</span>{jobDetails?.salary_start_price} Tk.
                                                            To {jobDetails?.salary_end_price}{languageCheck() === 'bn' ? "টাকা (মাসিক)" : "Tk (Monthly)"}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "আবেদন পাঠাবার শেষ তারিখ:" : "Application Deadline: "}</span> {jobDetails?.application_deadline}
                                                        </li>
                                                    </div>
                                                </div>

                                                <div className="card mt-3">
                                                    <div className="card-header" style={{ fontWeight: "bold" }}>
                                                        {languageCheck() === 'bn' ? "কোম্পানি বিবরণ" : "Company Details"}</div>
                                                    <div className="job_summary p-2">
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "কোমপানির নাম:" : "Company Name:"}</span> {jobDetails?.company_name}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "কোম্পানির ওয়েবসাইট লিংক:" : "Company Website Link:"}</span> {jobDetails?.compny_website_link}
                                                        </li>
                                                        <li>
                                                            <span>{languageCheck() === 'bn' ? "কোম্পানী লোগো:" : "Company Logo:"}</span>
                                                        </li>
                                                        <li className='mt-3 mb-3'>
                                                            <div style={{ textAlign: 'center' }}>
                                                                <img src={jobDetails?.company_logo} alt=""
                                                                    style={{
                                                                        width: "180px",
                                                                        height: "180px",
                                                                        borderRadius: "20px"
                                                                    }} />
                                                            </div>
                                                        </li>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className={jobApplied === true ? 'd-none' : 'col text-center'}>
                                    <div className="jobtext text-center">
                                        <h5 style={{ color: "#FF4367" }}>
                                            {languageCheck() === 'bn' ? "আবেদন করার আগে পড়ুন" : "Read Before Apply"}</h5>
                                        <hr style={{ color: "#FF4367" }} />
                                        <p><span>
                                            {languageCheck() === 'bn' ? "ছবি*" : "Photograph*"} </span>{" "}
                                            {languageCheck() === 'bn' ? "জীবনবৃত্তান্তের সাথে অবশ্যই সংযুক্ত থাকতে হবে।" : "must be enclosed with the resume."}
                                        </p>
                                        <h6 className="pt-1">
                                            {languageCheck() === 'bn' ? "কার্যপ্রণালী প্রয়োগ করুন" : "Apply The Procedure"}</h6>
                                        {token ?
                                            <button
                                                data-bs-toggle="modal"
                                                data-bs-target="#job_apply_modal" className="main-btn mt-3 mb-1"
                                                id="apply_now">
                                                {languageCheck() === 'bn' ? "অনলাইনে আবেদন" : "Apply Online"}</button>
                                            : <Link to="/customer/login/"
                                                className="aplon">
                                                {languageCheck() === 'bn' ? "আবেদনের জন্য লগইন করুন" : "Login For Apply"}</Link>}


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <JobApplyModal jobDetailsId={jobDetailsId} />

            <Footer />
        </>
    );
};

export default JobDetailsPage;