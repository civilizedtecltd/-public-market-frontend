import React  from "react"; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';  
import { languageCheck, titlecConvertToSlug } from "../../helpers/Helpers";
import { deletePaginationAction } from "../../redux/action/paginationAction";
import DeleteModal from "../DeleteComponents/DeleteModal"; 

const JobTabeles = ({alljobsdata, offset, index}) => { 
    
    const dispatch = useDispatch();   
    const jobDelete = (id) => {  
      localStorage.setItem("deleteItem",id)   
    }   
    const confirmDelete = () => {
      const path = "job/my/"
      const id =  localStorage.getItem("deleteItem") 
      dispatch(deletePaginationAction(path,id))
    }
    const serial = parseInt(offset+1)+parseInt(index);
       
 
    return (
        <>
         <tr>
            <td>{serial}</td> 
            <td>{alljobsdata.job_title}</td> 
            <td>{alljobsdata.company_name}</td>
            {/* <td>{alljobsdata.job_position}</td> */}
            <td>{alljobsdata.salary_end_price}</td>
            <td>{alljobsdata.application_deadline}</td>
            {/* <td>{alljobsdata.job_type}</td>  */}
            <td><div className="btn-group">
            {alljobsdata?.is_editable === false ? 
             <button style={{padding:'8px 7px',marginLeft: "5px"}} disabled
              className="btn btn-sm btn-warning"   >
                <i className="fa fa-edit"></i>
            </button>: 
            <>   
            <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-warning" to={"/my/job/update/"+alljobsdata.id+"/"} >
                <i className="fa fa-edit"></i>
            </Link> 
             </> }   
            <Link style={{padding:'8px 7px',marginLeft: "8px"}} className="btn btn-sm btn-danger"
                 onClick={() => jobDelete(alljobsdata?.id)}
                 data-bs-toggle="modal" data-bs-target="#delete_modal" to="/my/job/list/" >
                <i className="fa fa-trash"></i></Link>
             <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-primary"   to={"/job/details/"+titlecConvertToSlug(alljobsdata?.job_title)+"/"+alljobsdata.id+"/"} >
             <i className="fa fa-eye"  ></i></Link>
             <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-primary"   to={"/my/job/jobapplicant/"+alljobsdata.id+"/"} >
              {languageCheck() === 'bn' ? "সিভিএস" : "CVS"}</Link>
            </div>
           </td> 
         </tr> 
  
 
         <DeleteModal confirmDelete={confirmDelete} /> 
        </>
    );
}; 

export default JobTabeles;