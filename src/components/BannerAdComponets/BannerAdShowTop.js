import { BannerAdCategoryList } from '../../helpers/BannerAdManage';

const BannerAdShowTop = ({widthSize,heightSize}) => {

 
    return (
        <>
          <BannerAdCategoryList
          categoryName={'Top'}
          widthSize={widthSize} 
          heightSize={heightSize}  
          />  
        </> 
    );
};

export default BannerAdShowTop;