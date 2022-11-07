import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserSidebar from '../../../components/UserSidebar';
import {
  getEditTvcAction, 
  patchUpdateTvcAction,
} from '../../../redux/action/userProfileAction/profileTvcAction';
 
import { languageCheck } from '../../../helpers/Helpers';
import Input from '../../../components/CommonComponents/Input';
import translate from '../../../lang/translate';
import Key from '../../../lang/key';
import { errorMessage } from '../../../Hooks/MessageHandling';
import { useForm } from 'react-hook-form';
import TextArea from '../../../components/CommonComponents/TextArea';

const TvcEdit = () => {
  const tvcEditId = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit, 
    setValue,
    formState: { errors },
  } = useForm();

  const { getTvcEditData } = useSelector((state) => state.getEditTvcReducer);
  const { loading, tvcPatchError } = useSelector(
    (state) => state.patchUpdateTvcReducer
  );

  useEffect(() => {
    dispatch(getEditTvcAction(tvcEditId?.id));
  }, []);

  const [values, setValues] = useState([]);
  const [video, setVideo] = useState('');
  const [videoview, setVideoView] = useState('');
  useEffect(() => {
    if (getTvcEditData) {
      setValues(getTvcEditData);
    }
  }, [dispatch, getTvcEditData]);

  const tcvonChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitTcvUpdate = (e) => { 
    const editId = getTvcEditData?.id;
    const formdata = new FormData();
    formdata.append('title', values.title);
    formdata.append('company_name', values.company_name);
    formdata.append('description', values.description);
    if (video) {
      formdata.append('video', video);
    }
    dispatch(patchUpdateTvcAction(formdata, editId, navigate));
  };

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [getTvcEditData?.video]);

  const previewVideoRef = useRef();
  useEffect(() => {
    previewVideoRef.current?.load();
  }, [videoview]);

  const onChangeVideo = (e) => {
    if (e.target.files[0].size >  1.09e+7) {
      errorMessage('Please upload a file smaller than 10 MB');
      e.target.value = '';
    }else {
      setVideo(e.target.files[0]);
      setVideoView(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <Header />
      <section className="dashboard_page pt-70 pb-120">
        <div className="container card__space">
          <div className="row mt-70 shadow-none p-3 mb-5 bg-white rounded">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6">
                  <h5>
                    {languageCheck() === 'bn'
                      ? 'বিস্তারিত তথ্য এডিট করুন'
                      : 'Fill in the details edit'}
                  </h5>
                </div>
                <div className="col-md-6"></div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-md-12 col-lx-6 col-sm-12 col-lg-6 m-auto">
                  <h5>
                    {languageCheck() === 'bn'
                      ? 'টিভিসি সম্পর্কে'
                      : 'About the TVC'}
                  </h5>
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
                        onChange={tcvonChange}
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
                        onChange={tcvonChange}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                      /> 
                    </div>

                    <div className="form-group">
                    <div className="form-group"> 
                      <TextArea
                        name={'description'}
                        label={translate(Key.Description)}
                        placeholder={translate(Key.Description)}
                        value={values.description || ''}
                        required={true}
                        minLength={30}
                        maxLength={5000}
                        onChange={tcvonChange}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                      /> 
                    </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="video" className="control-label">
                        {languageCheck() === 'bn' ? 'ভিডিও' : 'Video'}
                      </label> 
                      <input
                        required
                        type="file"
                        name="video"
                        id="fileUpload"
                        accept="video/*"
                        onChange={onChangeVideo}
                        className="form-control"
                      /> 
                    </div>

                     {videoview ? (
                      <video className="tvc__video" ref={previewVideoRef} controls >
                        <source src={videoview} type="video/mp4" />
                      </video>
                      ) : (
                      <video  className="tvc__video" ref={videoRef} controls>
                        <source src={getTvcEditData?.video} type="video/mp4" />
                      </video>
                      )}
                     </div>
                </div>

                <div className="login__btn">
                  <button
                    disabled={loading}
                    type="submit"
                    className={
                      loading
                        ? 'loading__button mt-20 log-in disabled'
                        : 'main-btn btn__small mt-20 log-in'
                    }
                  >
                    {loading ? (
                      <>
                        <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div>
                      </>
                    ) : languageCheck() === 'bn' ? (
                      'এডিট করুন'
                    ) : (
                      'Edit'
                    )}
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

export default TvcEdit;
