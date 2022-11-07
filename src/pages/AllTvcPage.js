import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';  
import { useDispatch ,useSelector} from 'react-redux'; 
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'; 
import { getAllTvcAction } from '../redux/action/userProfileAction/profileTvcAction';
import TvcCard from '../components/Card/Tvc/TvcCard';
import PaginateCustom from '../components/Paginate/PaginateCustom';
import { languageCheck } from '../helpers/Helpers';
import BannerAdShowTop from '../components/BannerAdComponets/BannerAdShowTop';
import BannerAdShowBottom from '../components/BannerAdComponets/BannerAdShowBottom';

const AllTvcPage = () => {
   
       
    const [getAllData, setAllData] = useState(''); 
    const [getNewOffset, setNewOffset] = useState('');

    const getPaginateData = (paginateData, getNewOffset) => {
        setNewOffset(getNewOffset)
        setAllData(paginateData?.results);
    }
    const paginateInfo = {
        'path': 'tvc/',
        'offset': '',
        'limit': 10,
    }   
 

    
    return (
        <>
          <Header />
           <div className="ad-container container mt-80 pt-50">
                <BannerAdShowTop widthSize={"1110px"} heightSize={"317px"}/>
            </div>
            {/* <div className="header_content"> */}
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="content_wrapper">
                                    <h3 className="title"> 
                                    {languageCheck() === 'bn' ? 'সমস্ত টিভিসি' : 'All Television Commercials'}</h3>
                                    <p> 
                                    {languageCheck() === 'bn' ? 
                                    'আমাদের সমস্ত বাণিজ্যিক এক জায়গায়। আপনি যা চান তা দেখে নিন' : 
                                    'All Our Commercials In One Place. Take A Look At Regarding Anything You Want'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
              
                <section className="product_page pt-20 pb-120" id="job">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-12">
                               <nav className="breadcrumb__area"  >
                                    <ul style={{display:'flex'}} > 
                                        <li ><Link to='/' className='' >{languageCheck() === 'bn' ? "হোম":"home"}</Link></li> 
                                        <li> 
                                        <Link to={'/alltvcs/'}  
                                        className={"active"}><span>{">"}</span> 
                                        {languageCheck() === 'bn' ? "সমস্ত টিভিসি":"All Television Commercials"}</Link></li> 
                                    </ul>
                                </nav>
                            </div> 
 
                            {/* all job loop */}
                            <div className="category_wrapper d-flex flex-wrap justify-content-center pt-30" >
                             {/* <AllAdsCategory />  */} 
                             {getAllData && getAllData?.map((allData,i) => (
                                <TvcCard key={i}  allData={allData} offset={getNewOffset} index={i} /> 
                            )) } 
                             
                            </div>   
                            <div className="col-lg-12 pt-10">
                                <div className="pagination_wrapper mt-50">
                                    <ul className="pagination justify-content-center">
                                    <PaginateCustom paginateInfo={paginateInfo} onPaginateData={getPaginateData}/>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-12 pt-10">
                                <div className="bottom-ad">
                                  <BannerAdShowBottom widthSize={"1110px"} heightSize={"240px"}/>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>    
           <Footer />   
        </>
    );
};

export default AllTvcPage;