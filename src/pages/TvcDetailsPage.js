import React, {useRef, useEffect, useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';   
import  Moment  from 'react-moment';   
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'; 
import {getAllTvcAction, getDetailsTvcAction} from '../redux/action/userProfileAction/profileTvcAction';
import { languageCheck, capitalizeFirst } from '../helpers/Helpers';
import axios from "axios";

const TvcDetailsPage = () => {
   
    const jobDetailsId = useParams(); 
    const id = jobDetailsId?.id
    const dispatch = useDispatch();
    const [video, setVideo] = useState(null)
    const [getTvcDetails, setTevcDetails] = useState(null)
    useEffect(() => {
        const tvcDetails = async () => {
            try {
               const response = (await axios.get('tvc/'+id))?.data
                if (response) {
                    setTevcDetails(response)
                    setVideo(response.video)
                }
            } catch (err) {
                console.log(err);
            }
        }
        tvcDetails();
    }, [id]);
    // console.log(getTvcDetails)

    // const {getAllTvc} = useSelector(state => state.getAllTvcReducer)
    // useEffect(() => {
    //     dispatch(getAllTvcAction())
    // }, [dispatch]);


    // useEffect(() => {
    //   dispatch(getDetailsTvcAction(id))
    // },[jobDetailsId]);
   
    //  video show
     const videoRef = useRef(null);

   
   
     useEffect(() => {
         if (video){
             videoRef.current?.load();
             videoRef?.current?.play();
         }
     }, [video]);


    return ( 
        <>  
            <Header />
            <section className="pb-120 product_details_page pt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-50 product_details">
                                <div className="row">
                                    <div className="title_container mb-2">
                                        <div>
                                            <h3 className="title_container">{capitalizeFirst(getTvcDetails?.title)}</h3>
                                            <span className="sub_title">
                                           <strong> {languageCheck() === 'bn' ? "পোস্ট করা হয়েছে " : "Posted on "}</strong>
                                            <Moment format="LL" >{getTvcDetails?.created_at}</Moment>
                                           {" "} <i className="fas fa-eye"></i> {getTvcDetails?.views}
                                             </span>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="product_video">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="fade tab-pane active show" id="details-1" aria-labelledby="details-1-tab" role="tabpanel">
                                                    <video controls autoPlay ref={videoRef} title="Our video player" width="100%" height="600">
                                                        <source src={video} type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="feature_details">
                                           {capitalizeFirst(getTvcDetails?.description)}
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

export default TvcDetailsPage;