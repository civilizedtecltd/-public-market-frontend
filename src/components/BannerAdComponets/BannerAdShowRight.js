import { BannerAdCategoryList } from '../../helpers/BannerAdManage';

const BannerAdShowRight = ({widthSize,heightSize}) => {
    return (
        <>
          <BannerAdCategoryList
          categoryName={'Right'} 
          widthSize={widthSize} 
          heightSize={heightSize} 
          />
        </> 
    );
};

export default BannerAdShowRight;