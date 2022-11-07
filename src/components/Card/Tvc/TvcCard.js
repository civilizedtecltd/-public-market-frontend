import React,{useRef,useEffect} from 'react';
import {capitalizeFirst, convertToSlug, titlecConvertToSlug} from "../../../helpers/Helpers"
import { Link } from 'react-router-dom';
import  Moment  from 'react-moment';

const TvcCard = ({allData}) => {
    // video show
    const videoRef = useRef();

    useEffect(() => {    
      videoRef.current?.load();
    }, [allData?.video]);

    
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="single_blog mt-30">
                  <div className="blog_image" style={{display: "flex", justifyContent: "center"}}>
                    <video controls ref={videoRef} title="Our video player" 
                    width="360" height="240" className="tvc__video"   >
                        <source src={allData?.video} type="video/mp4" />
                    </video>
                </div>
                <div className="blog_content">
                    <h4 className="title"><Link to={"/alltvcs/details/"+titlecConvertToSlug(allData?.title)+"/"+allData?.id+'/'} className="tvc_count" rel1="8">{capitalizeFirst(allData?.title)}</Link>
                      </h4>
                       <ul className="meta d-flex justify-content-between">
                        <li><i className="fal fa-clock"></i> <Moment format="LL" >{allData?.created_at}</Moment>
                        </li>
                        <li>
                             <p className="tvc-view-count"><span className="line"></span> <i className="fas fa-eye show"></i> {allData?.views}</p>
                        </li>
                      </ul>
                   </div>
                </div>
            </div>
        </>
    );
};

export default TvcCard;