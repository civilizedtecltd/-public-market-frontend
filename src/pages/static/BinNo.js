import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 

const BinNo = () => {
    return (
        <>
        
        <Header /> 
        <section className="location_area pt-40 pb-120 mb-120" id="privacypolicy">
            <div className="container pt-60">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title pb-15">
                            <h3 className="title">Bin No</h3>
                        </div>
                    </div>
                </div>
                <div className="mt-40">
                    <div className="post_form mt-50">
                        <div className="post_title">
                            <h5 className="title">Bin No</h5>
                        </div>
                        <div className="row justify-content-center termconditon">
                            
                            PM EXPERT LIMITED BIN NO : 004474509-0202
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/> 

        
        <Footer />
        </>
    );
};

export default BinNo;