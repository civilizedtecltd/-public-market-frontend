import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,Link } from 'react-router-dom'; 
import BasicInformation from '../../components/MyAccount/CommonComponents/BasicInformation';
import AdditionalInformation from '../../components/MyAccount/CommonComponents/AdditionalInformation';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; 
import PastEmployment from '../../components/MyAccount/CommonComponents/PastEmployment';
import { getPastEmploymentsAction } from "../../redux/action/userProfileAction/profileUpdateAction/professionalProfileAction";
import { languageCheck } from "../../helpers/Helpers";

const ProfessionalProfile = () => { 

    const [basicInformation,setBasicInformation] = useState(false)
    const [additionalInformation,setAdditionalInformation] = useState(false) 
 
    const basicInformationShow = () => {
        setBasicInformation(!basicInformation)   
        setAdditionalInformation(false)
    }
    const additionalInformationShow = () => {
        setAdditionalInformation(!additionalInformation)
        setBasicInformation(false)
    }

    
    const dispatch = useDispatch(); 

    const { getPastEmploymentsList } = useSelector(state => state.getPastEmploymentsReducer)   
    const {deleteRes} = useSelector(state => state.deletePastEmploymentsReducer)   
                             
    useEffect(() => {   
        dispatch(getPastEmploymentsAction()) 
    }, []);
  
    if (getPastEmploymentsList?.length) {
        const index = getPastEmploymentsList.findIndex(x => x.id === deleteRes);
        if (index >= 0) {
         getPastEmploymentsList.splice(index, 1);
        } 
    }

 
      
    return ( 
        <>  
         <Header /> 
                <section className="dashboard_page pt-70 pb-120">
                    <div className="container">
                        <div className="row mt-50">   


                               <div className="col-lg-10 m-auto ">   
                                {/* breadcrumb__area */}

                                <nav className="breadcrumb__area"  >
                                    <ul style={{display:'flex'}} > 
                                        <li><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম":"home"}</Link></li> 
                                        <li  > 
                                        <Link to='/dashboard/' >
                                        <span>{">"}</span> {languageCheck() === 'bn' ? "ড্যাশবোর্ড":"dashboard"}</Link></li>  
                                        <li > 
                                        <Link to='/dashboard/my/professional/profile/' 
                                        className={"active"}>
                                        <span>{">"}</span> {languageCheck() === 'bn' ? "পেশাদারী বাক্তিত্ত":"professional profile"}</Link></li>    
                                    </ul>
                                </nav>
                                </div>


                                {/* Basic information */} 
                                 <BasicInformation
                                  basicInformationShow={basicInformationShow}
                                  basicInformation={basicInformation}
                                />   
 
                                 {/* Additional Information */}
                                <AdditionalInformation 
                                additionalInformationShow={additionalInformationShow}
                                additionalInformation={additionalInformation}
                                />
   
                                 {/* Past Employments */}
                               <div className="shadows mb-5" id="past_employments">
                                <div className="col-lg-10 m-auto shadow-none p-4 bg-white rounded">   
                                    <div className="row" >
                                        <div className="col-md-6 col-sm-6 col-6"> 
                                        <h5 className="mt-2"> 
                                        {languageCheck() === 'bn' ? "অতীত কর্মসংস্থান":"Past Employments"}
                                        </h5> 
                                        </div>   
                                        <div className="col-md-6 col-sm-6 col-6"> 
                                        <div className="profile__button text-right">  
                                        <Link to="/my/resume/add/employment_history/"
                                         className='main__btn__mini bg-info' style={{color:'white'}}>  
                                         {languageCheck() === 'bn' ? "নতুন তৈরী করুন":"Create New"}
                                        </Link>
                                        </div>
                                        </div> 
                                    </div> 
                                    <hr />     

                                {getPastEmploymentsList &&  getPastEmploymentsList?.map((getData,i) => ( 
                                <PastEmployment key={i} getData={getData} />))}
                                </div>    
                               </div>  
                        </div>
                    </div> 
                </section> 
         <Footer />
        </>
    );
};

export default ProfessionalProfile;