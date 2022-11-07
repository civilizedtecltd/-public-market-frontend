import React, { useState, useEffect } from "react"; 
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { deletePaginationAction } from "../../redux/action/paginationAction";
import { postAdDeleteAction } from '../../redux/action/userProfileAction/profileAdAction'; 
import DeleteModal from "../DeleteComponents/DeleteModal";
import {languageCheck, titlecConvertToSlug} from "../../helpers/Helpers";

const AdTables = ({data, offset, index}) => {
    let navigate = useNavigate();  
    const dispatch = useDispatch(); 
      
      const adDelete = (id) => {  
        localStorage.setItem("deleteItem",id) 
      }   
      const confirmDelete = () => {
        const path = "adpost/my/"
        const id =  localStorage.getItem("deleteItem") 
        dispatch(deletePaginationAction(path,id))
        
      }
  
    const serial = parseInt(offset+1)+parseInt(index);
    return (
        <> 
            <tr>
            <td>{serial}</td> 
            <td>{data.title}</td>  
            <td>{data.condition}</td>
            <td>{data.price}</td> 
            <td><div className="btn-group">
            {/* <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-warning" to={"/ad/edit/"+data.id+"/"} >
                <i className="fa fa-edit"></i>
            </Link>  */}
              

            {data?.is_editable === false ? 
            <button style={{padding:'8px 7px',marginLeft: "5px"}}
             className="btn btn-sm btn-warning" disabled >
            <i className="fa fa-edit"></i>
            </button>   
            : 
           <>
            <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-warning" to={"/ad/edit/"+data?.id+"/"} >
                <i className="fa fa-edit"></i>
            </Link> 
          </> }


                 <Link   style={{padding:'8px 7px',marginLeft: "8px"}} className="btn btn-sm btn-danger"
                 onClick={() => adDelete(data?.id)}  
                 data-bs-toggle="modal" data-bs-target="#delete_modal" to="/ad/my/list/" >
                <i className="fa fa-trash"></i></Link>

             <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-primary"  to={"/ad/details/"+titlecConvertToSlug(data?.title)+"/"+data?.id+"/"} >
             <i className="fa fa-eye"  ></i></Link>
            </div>
           </td> 
         </tr>    
    
          <DeleteModal confirmDelete={confirmDelete} />
        </> 
    );
};

export default AdTables;