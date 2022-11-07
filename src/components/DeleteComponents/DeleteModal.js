import React from 'react';
import { languageCheck } from '../../helpers/Helpers';

const DeleteModal = ({confirmDelete}) => {
    return (
        <> 
             <div className="modal fade mt-5" id="delete_modal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> 
                    {languageCheck() === 'bn' ? "আইটেম মুছুন" : "Delete Item"}</h5>
                    <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body"> 
                    {languageCheck() === 'bn' ? "আপনি নিশ্চিত এই আইটেম মুছে ফেলবেন" : "Are you sure delete this item"}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    {languageCheck() === 'bn' ? "বাতিল করুন" : "Cancel"}    
                    </button>
                    <button type="button" style={{backgroundColor:'#ff4367'}}
                    data-bs-dismiss="modal" onClick={() => confirmDelete()} className="btn btn-secondary">
                    {languageCheck() === 'bn' ? "মুছে ফেলুন" : "Delete"}  
                    </button>
                </div>
                </div>
            </div> 
            </div> 
        </>
    );
};

export default DeleteModal;