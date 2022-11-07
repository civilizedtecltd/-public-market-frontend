import About from    '../pages/static/About';
import AdvertisingTrickled from '../pages/static/AdvertisingTrickled';
import BannerTvcAdvertising from '../pages/static/BannerTvcAdvertising';
import BinNo from '../pages/static/BinNo';
import BuySellQuickTip from '../pages/static/BuySellQuickTip';
import Faq from '../pages/static/Faq';
import MissionVision from '../pages/static/MissionVision';
import PricingTips from '../pages/static/PricingTips';
import RefundPolicy from '../pages/static/RefundPolicy';
import Safe from '../pages/static/Safe';
import SellingTips from '../pages/static/SellingTips';
import Strategy from '../pages/static/Strategy';
import PromoteAds from '../pages/static/PromoteAds';
import TermsConditions from '../pages/static/TermsConditions';
import CompanyLegalInfo from '../pages/static/CompanyLegalInfo';
import PrivacyPolicy from '../pages/static/PrivacyPolicy';
import SiteMap from '../pages/static/SiteMap';
import OurStrategy from '../pages/static/OurStrategy';
import OurManagement from '../pages/static/OurManagement';
import PostingAllowance from '../pages/static/PostingAllowance';
import PostingRules from '../pages/static/PostingRules';
import StuffingSolutions from '../pages/static/StuffingSolutions';
import PublicMarketContactInfo from '../pages/static/PublicMarketContactInfo';

    
 
const StaticRoute = [
  {
    path: '/about/',
    element: <About />,
    exact: true,
  },
  {
    path: '/sitemap/',
    element: <SiteMap />,
    exact: true,
  },
  {
    path: '/missionvision/',
    element: <MissionVision />,
    exact: true,
  }, 
  {
    path: '/ourstrategy/',
    element: <OurStrategy />,
    exact: true,
  }, 
  {
    path: '/ourmanagement/',
    element: <OurManagement />,
    exact: true,
  },


   
  
   
  {
    path: '/sellingtips/',
    element: <SellingTips />,
    exact: true,
  }, 
  {
    path: '/pricingtips/',
    element: <PricingTips />,
    exact: true,
  }, 
  {
    path: '/buysellquicktips/',
    element: <BuySellQuickTip />,
    exact: true,
  },  
  {
    path: '/bannerTvcadvertising/',
    element: <BannerTvcAdvertising />,
    exact: true,
  }, 
  {
    path: '/promoteads/',
    element: <PromoteAds />,
    exact: true,
  },




  
  {
    path: '/companylegalinfo/',
    element: <CompanyLegalInfo  />,
    exact: true
  },
  {
    path: '/postingallowance/',
    element: <PostingAllowance />,
    exact: true,
  },
  
  {
    path: '/postingrules/',
    element: <PostingRules />,
    exact: true,
  },
  
  {
    path: '/stuffingsolutions/',
    element: <StuffingSolutions />,
    exact: true,
  },
  
  {
    path: '/publicmarketcontactinfo/',
    element: <PublicMarketContactInfo />,
    exact: true,
  },


 
  {
    path: '/help/faq/',
    element: <Faq />,
    exact: true,
  }, 
  {
    path: '/help/safe/',
    element: <Safe />,
    exact: true,
  }, 
  {
    path: '/help/termsconditions/',
    element: <TermsConditions />,
    exact: true
  }, 
 
  {
    path: '/help/refundpolicy/',
    element: <RefundPolicy />,
    exact: true,
  }, 
  {
    path: '/help/privacypolicy/',
    element: <PrivacyPolicy  />,
    exact: true
  }
 ,
  



  {
    path: '/strategy',
    element: <Strategy />,
    exact: true,
  },   
  {
    path: '/bin_no',
    element: <BinNo />,
    exact: true,
  },
  {
    path: '/advertising_trickled',
    element: <AdvertisingTrickled />,
    exact: true,
  },   
];

export default StaticRoute;
