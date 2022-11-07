import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import ErrorPhoto from "../../asset/frontend/assets/images/payment/Error.PNG"
import { languageCheck } from '../../helpers/Helpers';
const PaymentFailure = () => {
    return (
        <> 
          <Header />

            <div className="container pt-150">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="col-md-5 shadow-sm p-3 mb-5 bg-white rounded text-center">
                       <div className="payment__fail pt-3"> 
                        <img src={ErrorPhoto} alt="" />
                        </div> 
                        <h1> 
                         {languageCheck() === 'bn' ? 
                        "পেমেন্ট ব্যর্থতা" : 
                        "Payment Failure " }
                        </h1>
                        <div className="text-center pb-5">
                         <p style={{fontSize: "14px",justifyContent: "center",display:'flex'}}>
                           {languageCheck() === 'bn' ? 
                             "দুঃখিত, আপনার পেমেন্ট ব্যর্থ হয়েছে." : 
                             "Sorry, your payment has failed." }{" "}
                            <Link to="/">{languageCheck() === 'bn' ? 
                             "এখানে ক্লিক করুন" : 
                             "click here " }</Link>{" "} 
                            {languageCheck() === 'bn' ? 
                            "কেনাকাটা চালিয়ে যেতে" : 
                            "to continue shoping" }
                        </p>
                        </div>
                        
                    </div> 
                </div>
            </div>
            



          <Footer />   
        </>
    );
};

export default PaymentFailure;