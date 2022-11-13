import React,{useEffect, useState} from 'react'; 
import HomePage from '../pages/HomePage';  
import StaticRoute from './StaticRoute'; 
// for ad demo test
import AdCreate from '../pages/customer/ad/AdCreate'; 
import AdBannerList from '../pages/customer/adbanner/AdBannerList';
import AdBannerCreate from '../pages/customer/adbanner/AdBannerCreate'; 
import ProfileSetting from '../pages/userprofile/ProfileSetting'; 
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register'; 
import {
  BrowserRouter,
  Routes,
  Route ,
  useLocation
} from "react-router-dom"; 
import NotFound from '../containers/NotFound';   
import ForgetPassword from '../pages/auth/ForgetPassword';  
import { AuthenticatedRoute, PrivateRoute } from './AuthRoute';
import AllJobsPage from '../pages/AllJobsPage' 
import AdBannerEdit from '../pages/customer/adbanner/AdBannerEdit';
import JobCreate from '../pages/customer/job/JobCreate';
import JobList from '../pages/customer/job/JobList';
import JobEdit from '../pages/customer/job/JobEdit'; 
import TvcList from '../pages/customer/tvc/TvcList';
import TvcCreate from '../pages/customer/tvc/TvcCreate';
import TvcEdit from '../pages/customer/tvc/TvcEdit'; 
import AllTvcPage from '../pages/AllTvcPage'; 
import AllAdsCategorysPage from '../pages/AllAdsCategorysPage';
import AllDistrictsPage from '../pages/AllDistrictsPage';
import AllDivisionsPage from '../pages/AllDivisionsPage';
import TvcDetailsPage from './../pages/TvcDetailsPage';
import PostAd from './../pages/customer/postAd/PostAd'; 
import AdEdit from "../pages/customer/ad/AdEdit";   
import Payment from '../pages/payment/Payment';
import MyAccount from '../pages/userprofile/MyAccount';  
import AllAdPage from '../pages/AllAdPage';
import AdDetailsPage from '../pages/AdDetailsPage';
import JobDetailsPage from '../pages/JobDetailsPage';
import MyApplyJobList from '../pages/customer/apply_job/MyApplyJobList';
import ProfessionalProfile from '../pages/userprofile/ProfessionalProfile';
import PastEmploymentCreate from '../pages/userprofile/PastEmploymentCreate';
import Dashboard from '../pages/userprofile/Dashboard';
import AdList from '../pages/customer/ad/AdList';
import PaymentError from '../pages/payment/PaymentError';
import PaymentSuccess from '../pages/payment/PaymentSuccess';
import PaymentFailure from '../pages/payment/PaymentFailure';
import AdBannerDetails from '../pages/AdBannerDetails';
import JobApplicant from '../pages/customer/job/JobApplicant';
import CVBank from '../pages/customer/CVBank/CVBank';
import CVList from '../pages/customer/CVBank/CVList';
import AddPhone from '../pages/auth/AddNumerVerifyCode';



const AppRoutes = () => { 
  
 
 
  return (
      <>   
         
        <Routes>    
          {/* customer authentication  */}   
          <Route path="customer/login/" exact element={<AuthenticatedRoute><Login /></AuthenticatedRoute>}/>  
          <Route path="customer/register/" exact element={<AuthenticatedRoute><Register /></AuthenticatedRoute>} />   
          <Route path="customer/forgetpassword/" exact element={<AuthenticatedRoute><ForgetPassword /></AuthenticatedRoute>} />  

          <Route path="/" exact element={<PrivateRoute />}>
              <Route path="dashboard/" element={<Dashboard />} />  
              {/* customer deshbord profile  */}      
              <Route path="dashboard/my/professional/profile/" element={<ProfessionalProfile />} /> 
              <Route path="my/resume/add/employment_history/" element={<PastEmploymentCreate />} /> 
              <Route path="my/profile/setting/" element={ <ProfileSetting />  } />  
              <Route path="my/account/" element={ <MyAccount />  } />  

              {/* payment page */}
              <Route path="/payment/fail" exact element={<PaymentFailure />} /> 
              <Route path="/payment/success" exact element={<PaymentSuccess />} /> 
              <Route path="/payment/cancel" exact element={<PaymentError />} /> 

              {/*membership*/}
              <Route path="my/CVBank/" element={ <CVBank /> } />
              <Route path="/my/CVBank/CVList" element={ <CVList /> } />
 
              <Route path="my/adbanner/list/" element={ <AdBannerList /> } />
              <Route path="my/adbanner/create/" element={ <AdBannerCreate /> } /> 
              <Route path="my/adbanner/update/:id/" element={ <AdBannerEdit /> } />   
              {/* customer deshbord Create Tvc */} 
              <Route path="my/tvc/list/" element={ <TvcList /> } />  
              <Route path="my/tvc/create/" element={ <TvcCreate /> } />  
              <Route path="my/tvc/update/:id/" element={ <TvcEdit /> } />    
              {/* customer deshbord Create Job */}
              <Route path="my/job/list/" element={ <JobList /> } />  
              <Route path="my/job/create/" element={ <JobCreate /> } /> 
              <Route path="my/job/update/:id/" element={ <JobEdit /> } />  
              <Route path="my/job/jobapplicant/:id/" element={ <JobApplicant /> } />  

              {/* ad for demo test */} 
              <Route path="ad/post" element={<AdCreate />} /> 
              <Route path="ad/edit/:id/" element={<AdEdit />} />
              <Route path="ad/my/list/" element={ <AdList /> } />    
              {/* my apply job */} 
              <Route path="my/appliedjob/list/" element={<MyApplyJobList />} />   
              {/* payment api  */}
              <Route path="payment/:id/" element={<Payment />} />  
              {/* post ads all   */}
              <Route path="dashboard/postad/" element={<PostAd />} />
          </Route> 
            <Route path="/customer/add/phone/" exact element={<AddPhone />} />

            {/*show all pages without users */}
           <Route path="/" index exact element={<HomePage />} />
           <Route path="/alljobs/:one/:two/:three/" element={<AllJobsPage />} />
           <Route path="/alljobs/" exact element={<AllJobsPage />} /> 
           <Route path="/alljobs/:id/" exact element={<AllJobsPage />} /> 
           <Route path="/alladscategorys/" exact element={<AllAdsCategorysPage />} /> 
           <Route path="/alltvcs/" exact element={<AllTvcPage />} />  
           <Route path="/alldivisions/" exact element={<AllDivisionsPage />} />  
           
           {/* details page */}
           <Route path="/:divisions/districts/:id/" exact element={<AllDistrictsPage />} />
           <Route path="/alltvcs/details/:title/:id/" exact element={<TvcDetailsPage />} />
           <Route path="/ad/details/:title/:id/" element={<AdDetailsPage />} /> 
           <Route path="/job/details/:title/:id/" element={<JobDetailsPage />} />  
           <Route path="/adbanner/details/:id/" element={ <AdBannerDetails /> } />

            <Route path="/allads/:one/:two/:three/:four/" element={<AllAdPage />} />
            <Route path="/allads/" element={<AllAdPage />} />
 
            {/* route all static pages */}
            {StaticRoute && StaticRoute?.map((route,i) => 
              <Route key={i} path={route.path} element={route.element} exact={route.exact} />
            )}   
            <Route  path='*' element={<NotFound />} />  
        </Routes>  
      </> 
  );
};

export default AppRoutes;
