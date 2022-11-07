import React  from "react"; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';  
import { titlecConvertToSlug } from "../../helpers/Helpers";
import { deletePaginationAction } from "../../redux/action/paginationAction";
import DeleteModal from "../DeleteComponents/DeleteModal"; 

const JobApplicantTables = ({alljobsdata, offset, index}) => { 
    
        
    const serial = parseInt(offset+1)+parseInt(index);
       
    return (
        <>
           <tr>
            <td>{serial}</td> 
            <td><Link to={"/job/details/"+titlecConvertToSlug(alljobsdata?.job_title)+"/"+alljobsdata?.job+"/"} >{alljobsdata.job_title}</Link></td>
            <td>{alljobsdata.expected_salary}</td> 
            <td>
              {alljobsdata?.photo===null?'not found':<img src={alljobsdata?.photo} alt="" width="50px" height="50px" />  } 
            </td>   
            <td>
            {alljobsdata?.resume===null?'not found':<a href={alljobsdata?.resume} style={{textDecoration: "underline"}} >View</a>} 
            </td>
            <td>
            {alljobsdata?.cover_letter===null?'not found':<a href={alljobsdata?.cover_letter} style={{textDecoration: "underline"}}>View</a>} 
            </td> 
         </tr>   
        </>
    );
}; 

export default JobApplicantTables;