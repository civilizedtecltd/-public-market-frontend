import React,{useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import Moment from 'react-moment';
import { getAdBannerDetailsAdBannerAction } from '../redux/action/userProfileAction/profileAdBannerAction';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AdBannerDetails = () => {

    const adBannerDetailsId = useParams(); 
    const id = adBannerDetailsId?.id
    const dispatch = useDispatch();
    const {adBannerDetails} = useSelector(state => state.getAdBannerDetailsAdBannerReducer) 
    useEffect(() => { 
      dispatch(getAdBannerDetailsAdBannerAction(id))
    },[adBannerDetailsId]);
   
    return (
        <> 
           <Header />
           <section className="pb-120 product_details_page pt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-50 product_details">
                                <div className="row">
                                    <div className="title_container mb-2">
                                        <div>
                                            <h3 className="title_container">{adBannerDetails?.title}</h3>
                                            <span className="sub_title">Posted on <Moment format="LL" >{adBannerDetails?.created_at}</Moment> 
                                            {/* <i className="fas fa-eye"></i> 1 */}
                                             </span>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="product_image">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="fade tab-pane active show" id="details-1" aria-labelledby="details-1-tab" role="tabpanel">
                                                  <img  src={adBannerDetails?.image} alt=""   
                                                  style={{width:"300px",height:"300"}} /> 
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="feature_details mt-4">
                                            <h6 className="mb-4">{adBannerDetails?.title}</h6>  
                                           {adBannerDetails?.description}
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    ); 
};

export default AdBannerDetails;