import React from 'react';

const CategoriesCard = () => {
    return (
        <>
        <div className="category-column">
            <div className="single_category text-center mt-30">
                <div className="icon"><img src="http://new.publicmarketbd.com/assets/admin/uploads/category/original/1649748807.png" alt="Locations" style={{width: "50px" ,height:"50px"}} /></div>
                <div className="content">
                    <h6 className="title" style={{fontSize: "12px"}}>Mobile</h6>
                    <p>Total Ads : 0</p>
                </div>
                <a href="http://new.publicmarketbd.com/category_ads/50"></a>
            </div>
        </div>
        </>
    );
};

export default CategoriesCard;