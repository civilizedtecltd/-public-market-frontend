import { BannerAdCategoryList } from '../../helpers/BannerAdManage';

const BannerAdShowLeft = ({widthSize,heightSize}) => {
    return (
        <>
          <BannerAdCategoryList
          categoryName={'Left'} 
          widthSize={widthSize} 
          heightSize={heightSize} 
          />
        </> 
    );
};

export default BannerAdShowLeft;