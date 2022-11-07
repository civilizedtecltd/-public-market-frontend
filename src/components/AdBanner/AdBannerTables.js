import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deletePaginationAction } from "../../redux/action/paginationAction";
import { deleteSingleTvcAction } from "../../redux/action/userProfileAction/profileTvcAction";
import DeleteModal from "../DeleteComponents/DeleteModal";
import { deleteSingleAdBannerAction } from '../../redux/action/userProfileAction/profileAdBannerAction';

const AdBannerTables = ({getAllAdBanner,index}) => {
    let navigate = useNavigate(); 
    const dispatch = useDispatch();  
     
    const bannerAdDelete = (id) => {  
      localStorage.setItem("deleteItem",id) 
    }   
    const confirmDelete = () => {
      const path = "adbanner/my/"
      const id =  localStorage.getItem("deleteItem") 
      dispatch(deletePaginationAction(path,id))
    }
     

 
    return (  
        <> 
         <tr>  
            <td>{index + 1}</td> 
            <td>{getAllAdBanner?.title}</td> 
            <td>{getAllAdBanner?.company_name}</td>
            <td>{getAllAdBanner?.description}</td> 
            <td>
            <div className="btn-group">
               
          {getAllAdBanner?.is_editable === false ? 
           <button style={{padding:'8px 7px',marginLeft: "5px"}} disabled
           className="btn btn-sm btn-warning"   >
               <i className="fa fa-edit"></i>
           </button>
          : 
            <> 
            <Link style={{padding:'8px 7px',marginLeft: "5px"}} 
              className="btn btn-sm btn-warning" to={"/my/adbanner/update/"+getAllAdBanner.id+"/"} >
                  <i className="fa fa-edit"></i>
              </Link> 
              </> } 
             <Link style={{padding:'8px 7px',marginLeft: "8px"}} className="btn btn-sm btn-danger"  
                to="/my/adbanner/list/"  onClick={()  => bannerAdDelete(getAllAdBanner?.id)}
                data-bs-toggle="modal" data-bs-target="#delete_modal">
                  <i className="fa fa-trash"></i></Link>
              <Link style={{padding:'8px 7px',marginLeft: "5px"}} className="btn btn-sm btn-primary"   to={"/adbanner/details/"+getAllAdBanner.id+"/"} >
              <i className="fa fa-eye"  ></i></Link>
              </div> 
            </td> 
          </tr>   
 
     
         <DeleteModal confirmDelete={confirmDelete} />  
        </>
    );
};

export default AdBannerTables;