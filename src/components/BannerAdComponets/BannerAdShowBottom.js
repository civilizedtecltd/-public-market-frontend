import { BannerAdCategoryList } from '../../helpers/BannerAdManage';

const BannerAdShowBottom = ({widthSize,heightSize}) => {
    
  
  return (
        <>
          <BannerAdCategoryList 
          categoryName={'Bottom'}
          widthSize={widthSize} 
          heightSize={heightSize} 
          />
        </> 
    );
};

export default BannerAdShowBottom;