import React, { useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';  
import { useDispatch ,useSelector} from 'react-redux'; 
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { getDistrictAction,getDivisionAction } from '../redux/action/coreAction';
import DistrictCard from '../components/Card/Locations/DistrictCard';
import { getDistrictItems, getDivisionItems, isInvalid } from '../Utilities/Utilities';
import axios from 'axios';
import { languageCheck } from '../helpers/Helpers';

const AllDistrictsPage = () => {
    const districtId = useParams()  
    // load data local storage  districtItem 
        const [districtItem, setDistrictItem] = useState("");
        useEffect(() => {
            districtItemAllApi(); 
        }, []);  
        const districtItemAllApi = async () => {
            try {
                const response = (await axios.get('core/district/')).data
                if (response) {
                    setDistrictItem(response)
                }
            } catch (err) {
            console.log(err);
            }
        }  
        const districtItems = districtItem && districtItem?.filter((districtItemz) =>  districtItemz?.division === districtId?.id) 
      
    
       // load data local storage  divisionItem
  
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


      const divisionName = divisionItem && divisionItem?.find((districtItemz) =>  districtItemz?.id === districtId?.id) 
      const divisionNameShow = divisionName?.name ? divisionName?.name : ' '




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
      }, [districtItem]);  




  
    return (
        <> 
          <Header />
          <div className="header_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="content_wrapper">
                                    <h3 className="title">
                                    {languageCheck() === 'bn' ?
                                    <>
                                   <span style={{color:'#FF4367'}}>{divisionNameShow}</span> {" "} মধ্যে সমস্ত অবস্থানগুলি
                                    </> : 
                                    <>
                                    All Districts Of <span style={{color:'#FF4367'}}>{divisionNameShow}</span>
                                    </> }
                                      </h3>
                                   
                                    <p>  
                                     {languageCheck() === 'bn' ?
                                    <>
                                   <span style={{color:'#FF4367'}}>{divisionNameShow}</span> {" "} মধ্যে  আমরা সমস্ত প্রধান শহর এবং জেলাগুলিতে আছে
                                    </> : 
                                    <>
                                     We Are Available In All Of The Major Cities And Districts In {' '}
                                        <span style={{color:'#FF4367'}}>{divisionNameShow}</span>
                                    </> }. 
                                     </p>
                                    <ul className="header_btn">
                                        {/* <li> <Link to="/" className="main-btn" >See All</Link></li>  */}
                                    </ul>
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
                                        <li ><Link to='/' className='' >
                                        {languageCheck() === 'bn' ? "হোম":"home"}    
                                        </Link></li> 
                                        <li> 
                                        <Link to={"/"+divisionNameShow+"/districts/"+districtId?.id+"/"}  
                                        className={"active"}><span>{">"}</span>
                                        {languageCheck() === 'bn' ? 
                                        <>{divisionNameShow} {" "} মধ্যে সমস্ত জেলার</> :
                                        <>All District of {" "} {divisionNameShow}</> 
                                         }</Link></li> 
                                    </ul>
                                </nav>    
                                <div className="section_title pb-15">
                                    <h3 className="title text-center"> 
                                    {languageCheck() === 'bn' ? "সমস্ত জেলা অনুসন্ধান করুন" : "Explore All District"}
                                    </h3></div>
                            </div>
                        </div>
                        <div className="locations_wrapper">
                            <div className="row"> 
                                {districtItems && districtItems?.map((allData,i) => (
                                    <DistrictCard key={i} index={i} allData={allData} division={divisionNameShow} allAdCountCategory={allAdCountCategory} />
                                )) }   
                            </div>
                        </div>
                    </div>
                </section> 

           <Footer />  
        </>
    );
};

export default AllDistrictsPage;