import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'; 

const AdvertisingTrickled = () => {
    return (
        <>
         <Header /> 
         <section className="location_area pt-40 pb-120 mb-120" id="privacypolicy">
                <div className="container pt-60">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title pb-15">
                                <h3 className="title">Advertising Trickled</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mt-40">
                        <div className="post_form mt-50">
                            <div className="post_title">
                                <h5 className="title">Privacy Policy</h5>
                            </div>
                            <div className="row justify-content-center termconditon">
                            All together for the site to give a sheltered and valuable administration, 
                            it is essential for Publicmarket.com to gather, utilize, and share 
                            individual data.
                            </div>
                        </div>
                    </div>

                    <div className="mt-40">
                        <div className="post_form mt-50">
                            <div className="post_title">
                                <h5 className="title">Accumulation</h5>
                            </div>
                            <div className="row justify-content-center termconditon">
                            Data posted on Publicmarket.com is openly accessible. On the off 
                            chance that you furnish us with individual data, you are consenting to 
                            the exchange and capacity of that data on our servers. We gather and 
                            store the accompanying individual data:
                            Email address, contact data, and (contingent upon the administration 
                            utilized) here and there budgetary data
                            PC sign-on information, measurements on online visits, movement to 
                            and from Publicmarket.com and reaction to promotions
                            Other data, including clients' IP address and standard web log data
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

export default AdvertisingTrickled;