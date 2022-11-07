import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Link,useNavigate,useParams } from 'react-router-dom';
import UserSidebar from '../../../components/UserSidebar'; 
import Swal from 'sweetalert2';
import {ClipLoader} from 'react-spinners';
import { getEditAdBannerAction } from "../../../redux/action/userProfileAction/profileAdBannerAction";
import { getAdBannerCategoryAction } from '../../../redux/action/commonsAction/commonsAction';
import { patchUpdateAdBannerAction } from '../../../redux/action/userProfileAction/profileAdBannerAction';
import CategoriesModal from "../../../components/CommonComponents/Modal/CategoriesModal";
import { getAdBannerCategory, getAdBannerCategoryItems, isInvalid } from "../../../Utilities/Utilities";
 
 
import {languageCheck} from "../../../helpers/Helpers";
import { useForm } from "react-hook-form";
import Input from "../../../components/CommonComponents/Input";
import translate from "../../../lang/translate";
import Key from "../../../lang/key";
import TextArea from "../../../components/CommonComponents/TextArea";
import { errorMessage } from "../../../Hooks/MessageHandling";

 
const AdBannerEdit = () => { 
  const { register,setValue, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
  });
      
  const AdBannerEdit = useParams(); 
  const dispatch = useDispatch(); 
  
  let navigate = useNavigate(); 
  const categoryLocal = getAdBannerCategory();
  // call for user id
  const { getAdBannerEditData } = useSelector(state => state.getEditAdBannerReducer);  
  
  const { loading } = useSelector(state => state.patchUpdateAdBannerReducer);    
  useEffect(() => {  
    dispatch(getEditAdBannerAction(AdBannerEdit?.id))
  }, []) 
       
 
  const [values,setValues] = useState([]); 
  const [image,setImage] = useState([])  
  const [category,setCategory] = useState('');
  const [imageview,setImageView] = useState(''); 
  
  useEffect(() => {   
    if(getAdBannerEditData){ 
      setValues(getAdBannerEditData)   
    }  
    setImage(getAdBannerEditData?.image)  
    setCategory(getAdBannerEditData?.category) 
  }, [dispatch,getAdBannerEditData]) 

  const bannerAd = (e) => { 
    setValues({ ...values,[e.target.name] : e.target.value}) 
  }  
   
  const submitTcvUpdate = (e) => {  
    const AdBannerEdit = getAdBannerEditData?.id 
     
    const formdata = new FormData();  
    formdata.append("title", values.title); 
    formdata.append("company_name", values.company_name); 
    formdata.append("description", values.description); 
       
    if(categoryLocal?.id !== category){
      formdata.append("category", categoryLocal?.id); 
    }
    if(category){
        formdata.append("category", category)
    }
    if(!categoryLocal?.id){
        formdata.append("category", category)
    }   

    if(imageview){
        formdata.append("image", image);  
    } 
    dispatch(patchUpdateAdBannerAction(formdata,AdBannerEdit,navigate))  
  }   
  
    // Ad Bannner Category Load Data
    const { adBannerCategoryItem } = useSelector(state => state.getAdBannerCategoryReducer) 
    const adBannerCategoryItemLocal = getAdBannerCategoryItems();
    useEffect(() => {  
     if(isInvalid(adBannerCategoryItemLocal)){
        dispatch(getAdBannerCategoryAction())  
     } 
    }, [dispatch,adBannerCategoryItem]) 

 

    const [categoryParam,setCategoryParam] = useState([]);  
    const [categorySelect,setCategorySelect] = useState(false); 
    const [categoryParamRoute,setCategoryParamRoute] = useState(''); 
    
    const [adBannerCategorySave,setAdBannerCategorySave] = useState(false); 
    const [activesCategory,setActivesCategory] = useState(categoryLocal)
    
    const [categoryName,setCategoryName] = useState('') 
    const postAdBanner = () => {    
        setCategoryParam(adBannerCategoryItemLocal) 
        setCategorySelect(true)
        setAdBannerCategorySave(true)
        setCategoryName('Ad Banner') 
    } 
     

   
  // condition for add Banner
  const categoryFilterForName = 
  adBannerCategoryItemLocal && adBannerCategoryItemLocal?.find((catgoryId) => catgoryId?.id === category)
   
  const showcategory = categoryFilterForName?.name?categoryFilterForName?.name:''
 
  const [getChangeFileSize,setChangeFileSize] = useState('')
  const topSize =  languageCheck() === 'bn' ? 'ব্যানারের সাইজ অবশ্যই (টপ- ১১১০x৩১৭) হতে হবে' : "Banner Size Must be (Top- 1110x317)"
  const leftSize =  languageCheck() === 'bn' ? 'ব্যানারের সাইজ অবশ্যই (লেফট- ২০০x২৩০) হতে হবে' : "Banner Size Must be (Left- 200x230)"
  const rightSize =  languageCheck() === 'bn' ? 'ব্যানারের সাইজ অবশ্যই (রাইট-  ১৬০x৪০০) হতে হবে' : "Banner Size Must be (Right- 160x400)"
  const bottomSize =  languageCheck() === 'bn' ? 'ব্যানারের সাইজ অবশ্যই (বোটম- ১১১০x২৪০) হতে হবে' : "Banner Size Must be (Bottom- 1110x240)"
  
    
  useEffect(() => { 
    if(showcategory === "Top"){
      setChangeFileSize(topSize)
    }else if(showcategory === "Left"){
      setChangeFileSize(leftSize)
    }else if(showcategory === "Right"){
      setChangeFileSize(rightSize)  
    }else if(showcategory === "Bottom"){
      setChangeFileSize(bottomSize)
    } 
  },[showcategory])
 
  
 
  const imageonChangeHandle = (e) => {  
    let img = new Image()
    img.src = window.URL.createObjectURL(e.target.files[0]) 
    img.onload = () => { 
      if(showcategory === "Top" || showcategory === "টপ" ){
        if(img.width !== 1110 && img.height !==  317){ 
           errorMessage(getChangeFileSize)  
           e.target.value = "";
        }else if(e.target.files[0].size > 1e+6){ 
           errorMessage(languageCheck() === 'bn' ? 'অনুগ্রহ করে ১ mb এর নিচে ফাইল আপলোড করুন' : "Please upload a file smaller than 1 MB")
           e.target.value = "";
        }else{ 
          setImage(e.target.files[0]);
          setImageView(URL.createObjectURL(e.target.files[0]))
        }
      }else if (showcategory === "Left" || showcategory === "লেফট"){
        if(img.width !== 200 && img.height !==  230){ 
          errorMessage(getChangeFileSize) 
          e.target.value = "";
        }else if(e.target.files[0].size > 1e+6){ 
          errorMessage(languageCheck() === 'bn' ? 'অনুগ্রহ করে ১ mb এর নিচে ফাইল আপলোড করুন' : "Please upload a file smaller than 1 MB")
          e.target.value = "";
        }else{ 
          setImage(e.target.files[0]);
          setImageView(URL.createObjectURL(e.target.files[0]))
        }
      }else if (showcategory === "Right" || showcategory === "রাইট"){
        if(img.width !== 160 && img.height !==  400){ 
          errorMessage(getChangeFileSize) 
          e.target.value = "";
        }else if(e.target.files[0].size > 1e+6){ 
          errorMessage(languageCheck() === 'bn' ? 'অনুগ্রহ করে ১ mb এর নিচে ফাইল আপলোড করুন' : "Please upload a file smaller than 1 MB")
          e.target.value = "";
        }else{ 
          setImage(e.target.files[0]);
          setImageView(URL.createObjectURL(e.target.files[0]))
        }
      }else if (showcategory === "Bottom" || showcategory === "বোটম"){
        if(img.width !== 1110 && img.height !==  240){ 
          errorMessage(getChangeFileSize)
          e.target.value = ""; 
        }else if(e.target.files[0].size > 1e+6){ 
          errorMessage(languageCheck() === 'bn' ? 'অনুগ্রহ করে ১ mb এর নিচে ফাইল আপলোড করুন' : "Please upload a file smaller than 1 MB")
           e.target.value = "";
        }else{ 
          setImage(e.target.files[0]);
          setImageView(URL.createObjectURL(e.target.files[0]))
        }
      }
    } 

  }


 
  
  return (
    <>
      <Header /> 
       <section className="dashboard_page pt-70 pb-120">
        <div className="container card__space">
          <div className="row mt-70 shadow-none p-3 mb-5 bg-white rounded">
             

                <div className="col-lg-12 m-auto">

                       <div className="row" >
                      <div className="col-md-6">  
                      <h5>{languageCheck() === 'bn' ? 'বিস্তারিত তথ্য এডিট করুন' : "Fill in the details edit"}</h5>  
                      </div>
                      <div className="col-md-6"> 
                          <div className="change__option d-flex"
                              style={{justifyContent: "end"}} >
                             {showcategory && <> <h5 className="mr-3" >
                              <i className="fas fa-briefcase"></i>
                                {' '} {showcategory.slice(0,20)}...
                                </h5></>}
                              <a  onClick={postAdBanner} href="/my/adbanner/create/"  
                              data-bs-toggle="modal" 
                            data-bs-target="#job__category">{languageCheck() === 'bn' ? 'পরিবর্তন' : "Change"}</a>
                          </div> 
                      </div>
                  </div>
                  
                  <hr />   
                    <div className="row mt-3"> 
                        <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto"> 
                          <h5>{languageCheck() === 'bn' ? 'ব্যানার বিজ্ঞাপন সম্পর্কে' : "About the Banner Ads"}</h5> 
                      </div>
                  </div>


                  <form onSubmit={handleSubmit(submitTcvUpdate)}>
                    <div className="row mt-3">
                      <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto">   


                        <div className="form-group"> 
                            <Input
                              name={'title'}
                              label={translate(Key.Ad_Title)}
                              placeholder={translate(Key.Ad_Title)}
                              value={values.title || ''}
                              required={true}
                              minLength={5}
                              maxLength={70}
                              onChange={bannerAd}
                              setValue={setValue}
                              register={register}
                              errors={errors}
                            /> 
                        </div> 


                        <div className="form-group"> 
                            <Input
                              name={'company_name'}
                              label={translate(Key.Company_Name)}
                              placeholder={translate(Key.Company_Name)}
                              value={values.company_name || ''}
                              required={true}
                              minLength={5}
                              maxLength={50}
                              onChange={bannerAd}
                              setValue={setValue}
                              register={register}
                              errors={errors}
                            /> 
                        </div>


                        <div className="form-group"> 
                          <TextArea
                            name={'description'}
                            label={translate(Key.Description)}
                            placeholder={translate(Key.Description)}
                            value={values.description || ''}
                            required={true}
                            minLength={30}
                            maxLength={5000}
                            onChange={bannerAd}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                          /> 
                        </div>
                        
  
                        <p style={{color:'red',fontWeight:'bold'}}>{getChangeFileSize ? getChangeFileSize : ""}</p>
                        <div className="form-group ">
                          <label htmlFor="video" className="control-label">
                          {languageCheck() === 'bn' ? 'ইমেজ' : "Image"}
                          </label>
                          <input  
                            type="file"
                            name="image"  
                            id="image"  
                            accept="image/png, image/jpg, image/jpeg"
                            onChange={imageonChangeHandle}
                            className="form-control" 
                          />      
                        </div>

                  
                              
                              <div className="row">
                                <div className="company__logo"  >
                                  { imageview ? 
                                  <img src={imageview} alt="" className="ad__banner__image"  /> : 
                                  <img src={getAdBannerEditData?.image} alt="" className="ad__banner__image"  /> 
                                  } 
                              </div>  


                              {/* <div className="col-md-6 mt-5"> */}
                        
                              <div className="login__btn">
                              <button disabled={loading} type="submit" 
                              className={loading?"loading__button mt-20 log-in disabled":"main-btn btn__small mt-20 log-in"}> 
                                {loading ?   
                                <><div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                                </div></>
                                :languageCheck() === 'bn' ? 'এডিট করুন':"Edit"}
                              </button>
                            </div>
                            {/* </div>  */}
                          </div>
    
                        </div>
                      </div>
                    </form> 
                  </div>
                </div>
              </div>
            </section>
            <br />


          <CategoriesModal
          categorySelect={categorySelect}
          categoryParam={categoryParam}
          categoryParamRoute={categoryParamRoute}
          adBannerCategorySave={adBannerCategorySave}
          setActivesCategory={setActivesCategory}
          activesCategory={activesCategory}
          categoryName={categoryName}
          setCategory={setCategory}
           />
      <Footer />
    </>
  );
};

export default AdBannerEdit;
