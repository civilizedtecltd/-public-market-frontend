import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
// Success.png

import SuccessPhoto from "../../asset/frontend/assets/images/payment/Success.png"
import { languageCheck } from '../../helpers/Helpers';
const PaymentSuccess = () => {
    return (
        <>
           <Header />
            
            <div className="container pt-150">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="col-md-5 shadow-sm p-3 mb-5 bg-white rounded text-center">
                       <div className="payment__fail pt-3"> 
                        <img src={SuccessPhoto} alt="" />
                        </div>

                        <h1> 
                        {languageCheck() === 'bn' ? 
                             "পেমেন্ট সফল" : 
                             "Payment Successfull" }
                        </h1>
                        <div className="text-center pb-5">
                         <p style={{fontSize: "14px",justifyContent: "center",display:'flex'}}> 
                            {languageCheck() === 'bn' ? 
                             "আপনাকে ধন্যবাদ,  আপনার পেমেন্ট সফল হয়েছে" : 
                             "Thanks you, your payment was successful" }
                              </p>
                        </div>
                        
                    </div> 
                </div>
            </div> 

           <Footer />  
        </>
    );
};

export default PaymentSuccess;