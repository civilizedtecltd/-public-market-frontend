import React, { useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';  
import { useDispatch ,useSelector} from 'react-redux'; 
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'; 
import DivisionCard from '../components/Card/Locations/DivisionCard';
import { getDivisionAction } from '../redux/action/coreAction';
import { getDivisionItems, isInvalid } from '../Utilities/Utilities';
import axios from "axios";
import { languageCheck } from '../helpers/Helpers';

const AllDivisionsPage = () => { 
       
  
    const [divisionItem, setDivisionItem] = useState("");
    useEffect(() => {
        divisionItemAllApi(); 
    }, []);  
    const divisionItemAllApi = async () => {
        try {
            const response = (await axios.get('core/division/')).data
            if (response) {
                setDivisionItem(response)
            }
        } catch (err) {
        console.log(err);
        }
    }   
   
    const [allAdCountCategory,setAllAdCountCategory] = useState('')  
    useEffect(() => { 
        const allAdApi = async () => {
            try {
                const response = (await axios.get('adpost/?limit=5000000000000000'))?.data?.results
                if(response){
                    setAllAdCountCategory(response)
                }
            } catch (err) {
                console.log(err);
            }
        }  
        allAdApi();  
    }, [divisionItem]);  
 
   
    return (
        <> 
           <Header />
           <div className="header_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="content_wrapper">
                                    <h3 className="title">  
                                    {languageCheck() === 'bn' ? "সমস্ত অবস্থানগুলি" : "All Location"}</h3>
                                    <p> 
                                    {languageCheck() === 'bn' ?
                                     "আমরা বর্তমানে সমস্ত বিভাগে নির্ভরযোগ্য শ্রেণীবদ্ধ প্ল্যাটফর্ম হিসাবে অ্যাক্সেসযোগ্য।" : 
                                     "We Are Currently Accessible As Reliable Classified Platform In All Of The Divisions."}
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <section className="location_area pt-40 pb-120 mb-120" id="location">
                    <div className="container  ">
                        <div className="row">
                            <div className="col-lg-12">

                                 <nav className="breadcrumb__area"  >
                                    <ul style={{display:'flex'}} > 
                                        <li ><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম":"home"}</Link></li> 
                                        <li> 
                                        <Link to='/alldivisions/'  
                                        className={"active"}><span>{">"}</span> 
                                        {languageCheck() === 'bn' ? "সমস্ত অবস্থান":"All Location"}</Link></li> 
                                    </ul>
                                </nav>
                                <div className="section_title pb-15">
                                    <h3 className="title text-center"> 
                                    {languageCheck() === 'bn' ? "সমস্ত অবস্থান অনুসন্ধান করুন" : "Explore All Locations"}</h3></div>
                            </div>
                        </div>
                        <div className="locations_wrapper">
                            <div className="row"> 
                                {divisionItem && divisionItem?.map((allData,i) => (
                                    <DivisionCard 
                                    key={i}
                                    allData={allData}
                                    allAdCountCategory={allAdCountCategory}   
                                    /> 
                                )) }  
                            </div>
                        </div>
                    </div>
                </section>
           <Footer /> 
        </>
    );
};

export default AllDivisionsPage;