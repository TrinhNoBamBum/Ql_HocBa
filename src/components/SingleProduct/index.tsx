import { Routes } from "components/config";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
function SingleProduct(_props: any) {






    return (

       
            <div className="col-lg-3" key={_props.key}>
                <div className="single_product" >
                    <div className="product_thumb">
                        <a className="primary_img" href="product-details.html"><img src="assets/img/product/product21.jpg" alt="xin chao" /></a>
                        <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product22.jpg" alt="" /></a>

                        <div className="quick_button">
                            <a href={`/${Routes.PRODUCT_DETAIL}?Id=${_props.objectProduct.Id}`} title="quick_view">Xem sản phẩm</a>
                        </div>

                        <div className="product_sale">
                            <span>{_props.objectProduct.quantity}%</span>
                        </div>
                    </div>
                    <div className="product_content">
                        <h3><a href="product-details.html">{_props.objectProduct.Title}</a></h3>
                        <span className="current_price">£{_props.objectProduct.Price}</span>
                        <span className="old_price">£86.00</span>
                    </div>

                </div>

            </div>
        
    )
}
export default SingleProduct