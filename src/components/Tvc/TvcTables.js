import React, { useState, useEffect,useRef } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { titlecConvertToSlug } from "../../helpers/Helpers";
import { deletePaginationAction } from "../../redux/action/paginationAction";
import { deleteSingleTvcAction } from "../../redux/action/userProfileAction/profileTvcAction";
import DeleteModal from "../DeleteComponents/DeleteModal";

const TvcTables = ({allData,index}) => {
     let navigate = useNavigate(); 
     const dispatch = useDispatch();    
   
     const tvcDelete = (id) => {  
      localStorage.setItem("deleteItem",id) 
    }   
    const confirmDelete = () => {
      const path = "tvc/my/"
      const id =  localStorage.getItem("deleteItem") 
      dispatch(deletePaginationAction(path,id))
    }
    return ( 
        <>
         <tr>
            <td>{index + 1}</td> 
            <td>{allData?.title}</td> 
            <td>{allData?.company_name}</td>
            <td>{allData?.description}</td> 
            <td>
            <div className="btn-group">
               

           {allData?.is_editable === false ? 
            <button style={{padding:'8px 7px',marginLeft: "5px"}}  disabled
              className="btn btn-sm btn-warning"  >
                <i className="fa fa-edit"></i>
            </button> : 
           <> 
           <Link style={{padding:'8px 7px',marginLeft: "5px"}} 
            className="btn btn-sm btn-warning" to={"/my/tvc/update/"+allData.id+"/"} >
                <i className="fa fa-edit"></i>
            </Link>  
             </> } 

            <Link style={{padding:'8px 7px',marginLeft: "8px"}} 
             className="btn btn-sm btn-danger"   
             to="/my/tvc/list/" 
             onClick={() => tvcDelete(allData?.id)}
             data-bs-toggle="modal" data-bs-target="#delete_modal">
                <i className="fa fa-trash"></i></Link>
             <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-primary"   to={"/alltvcs/details/"+titlecConvertToSlug(allData?.title)+"/"+allData?.id+'/'} >
             <i className="fa fa-eye"  ></i></Link>
            </div> 
           </td> 
         </tr>  

     
         <DeleteModal confirmDelete={confirmDelete} />  
        </>
    );
};

export default TvcTables;