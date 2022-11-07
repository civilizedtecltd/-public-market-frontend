import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { getProfileSettingAction } from '../../../redux/action/userProfileAction/profileUpdateAction/profileSettingAction';
import { postTvcSubmitAction } from '../../../redux/action/userProfileAction/profileTvcAction';
import Swal from 'sweetalert2';
 
import { useForm } from "react-hook-form";
import translate from "../../../lang/translate";
import Key from "../../../lang/key";
import Input from "../../../components/CommonComponents/Input";
import TextArea from "../../../components/CommonComponents/TextArea";
import { errorMessage } from "../../../Hooks/MessageHandling";

const TvcCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'all',
  });
 

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { profileData } = useSelector(state => state.getProfileSettingReducer);
  const { loading } = useSelector(state => state.postTvcSubmitReducer);

  useEffect(() => {
    dispatch(getProfileSettingAction())
  }, [dispatch])

  const [values, setValues] = useState([]);
  const [video, setVideo] = useState([])
  const [videoView, setVideoView] = useState([])

  const tcvOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const submitTcv = (e) => {
    const formData = new FormData();
    formData.append("user", profileData.id);
    formData.append("title", values.title);
    formData.append("company_name", values.company_name);
    formData.append("description", values.description);
    formData.append("video", video);
    dispatch(postTvcSubmitAction(formData, navigate))
  }
  const videoRef = useRef();
  useEffect(() => {
    if (videoView) {
      videoRef.current?.load();
    }
  }, [videoView]);
  
  const onChangeVideo = (e) => {
    if (e.target.files[0].size > 1.09e+7) { 
      errorMessage("Please upload a file smaller than 10 MB")
      e.target.value = "";
    } else {
      setVideo(e.target.files[0]);
      setVideoView(URL.createObjectURL(e.target.files[0]))
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
                  <h5>{translate(Key.Fill_in_the_details)}</h5>
                </div>
                <div className="col-md-6">
                </div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto">
                  <h5>{translate(Key.About_the_TVC)}</h5>
                </div>
              </div>

              <form onSubmit={handleSubmit(submitTcv)}>
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
                        onChange={tcvOnChange}
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
                        onChange={tcvOnChange}
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
                        minLength={10}
                        maxLength={5000}
                        onChange={tcvOnChange}
                        register={register}
                        errors={errors}
                      /> 
                    </div>

                    <div className="form-group">
                      <label htmlFor="video" className="control-label">
                        {translate(Key.Video)}
                      </label>
                      <input
                        required={true}
                        type="file"
                        accept="video/*"
                        name="video"
                        id="fileUpload"
                        onChange={onChangeVideo}
                        className="form-control"
                      />
                    </div>

                  
                     <video  className="tvc__video" ref={videoRef} controls >
                      <source src={videoView} type="video/mp4" />
                    </video>
                   
                  </div>
                </div>


                <div className="login__btn">
                  <button disabled={loading} type="submit" 
                  className={loading ? "loading__button mt-20 log-in disabled" : "main-btn btn__small mt-20 log-in"}>
                    {loading ?
                      <><div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                      </div></>
                      : translate(Key.Submit)}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};

export default TvcCreate;
