import React, { useState, useEffect ,useRef} from "react";
import { useDispatch,useSelector } from 'react-redux'; 
import { Link, NavLink,useNavigate } from "react-router-dom"; 
import { languageCheck } from "../../../helpers/Helpers";
import { getDistrictAction, getDivisionAction } from "../../../redux/action/coreAction";
import { getDistrictItems, getDistrict, getDivisionItems, getDivision, isInvalid } from "../../../Utilities/Utilities";

const DivisionAndDistrictModal = ({locationRoute,setShowDistrictName}) => {
    const dispatch = useDispatch(); 
    
    let navigate = useNavigate(); 
     
    const [divisionid, setDivisionid]= useState('');   
    const [districtName, setDistrictName]= useState('');   
    const [closeModal, setCloseModal]= useState(true);   
    
    const activesDivision = getDivision();
    const activesDistrict = getDistrict();

    // load data local storage  divisionItem
    const { divisionItem } = useSelector(state => state.getDivisionReducer)
    const divisionItemLocal = getDivisionItems();
    useEffect(() => {
        if(isInvalid(divisionItemLocal)){
           dispatch(getDivisionAction())
        } 
    }, [dispatch,divisionItem])
    
    // load data local storage  districtItem
    const { districtItem }  = useSelector(state => state.getDistrictReducer)
    const districtItemLocal = getDistrictItems();
    useEffect(() => {
        if(isInvalid(districtItemLocal)){
           dispatch(getDistrictAction())
        }
    }, [dispatch,districtItem])
   
    const [divisionSaveTime,setDivisionSaveTime] = useState('') 
    const handledivision = (division) => {  
        setDivisionSaveTime(division) 
        setDivisionid(division?.id); 
        setDistrictName(division?.name) 
        setCloseModal(true)   
    }  
    const closeModalBtn = () =>{ 
        setDivisionid([]); 
        setDistrictName([])
        setCloseModal(false)   
    } 
    const routeJobPage = (district) =>{ 
      const locationRouteHave = locationRoute ? locationRoute : ''
      navigate(locationRouteHave) 
      localStorage.setItem('district',JSON.stringify(district)) 
      if(divisionSaveTime){ 
        localStorage.setItem('division',JSON.stringify(divisionSaveTime))
      }  
      setShowDistrictName(district?.name)
    }
    const districtItems = districtItemLocal?.filter((districtItemz) =>  districtItemz.division === divisionid) 

    const totalActiveId = divisionSaveTime ?   divisionSaveTime : activesDivision 




    const myRef = useRef(null); 
    const executeScroll = () =>{
        setTimeout(()  => {
            myRef.current.scrollIntoView();
        },400)
    }
    return (
        <>
             <div className="modal fade " id="all__loacation" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  {/* <div className="modal-dialog   modal-dialog-scrollable location__width"> */}
                  <div className="modal-dialog location__width">
                    <div className="modal-content location__width">
                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Select a job</h5>
                         
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */} 
                      <div className="modal-body"> 
                      <div className="justify-content-between align-items-center d-flex">
                          <div className="row">
                               {/* <div className="col-md-6">Select City or Division</div>
                               <div className="col-md-6">Select City or Division</div> */}
                          </div> 
                          <button onClick={closeModalBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                      </div>    
                          <div className="row">
                               <div className="col-md-6 modal__content__scroll__loaction">
                                <h4 style={{fontSize:'18px'}} className="category__title mt-2" > 
                                {languageCheck() === 'bn' ? "বিভাগ নির্বাচন করুন" : "Select  Division" }</h4> 
                                    <div className="all__location category__all">   
                                       {divisionItemLocal && divisionItemLocal?.map((division,i) => (
                                           <div onClick={() => handledivision(division)} 
                                           className={totalActiveId?.id === division?.id?"location__active justify-content-between d-flex all__location":"justify-content-between d-flex all__location"}
                                           key={i}  >
                                            <p onClick={executeScroll} >{division?.name}</p> 
                                             <i className="fa fa-arrow-right"></i>  
                                           </div>  
                                       ))}   
                                   </div>   
                               </div>
                                {!districtName ? "" : <div className="modal__content__border" > 
                                 <hr />
                                </div> } 

                               <div ref={myRef} className={!districtName ? "col-md-6 district__select" :
                                   "col-md-6 district__select  modal__content__scroll__loaction__division"}>  
                                  {districtName ? <>
                                  {!closeModal ? " " :<h4 style={{fontSize:'18px'}} className="mt-2">
                                  {languageCheck() === 'bn' ? 
                                 <><span style={{color:'#ff4367',fontSize:'18px'}}>{districtName}</span> মধ্যে একটি জেলা নির্বাচন করুন</>  : 
                               <> Select a District within <span style={{color:'#ff4367'}}> {districtName}</span></>   }</h4>} 
                                   <div className="all__job_category"> 
                                     {districtItems && districtItems?.map((district,i) => ( 
                                      <p 
                                      className={activesDistrict?.id === district?.id?"location__active ":""}
                                      onClick={() => routeJobPage(district)} key={i} data-bs-dismiss="modal" aria-label="Close" >  
                                          {district?.name} 
                                      </p>))}   
                                   </div></>: " "} 
                               </div>


                           </div>  
                       </div> 
                    </div>
                </div>
            </div> 
        </> 
    );
};

export default DivisionAndDistrictModal;