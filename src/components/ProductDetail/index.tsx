
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Countitem, GetIdProduct } from 'store/actions/counter';
import { Link, Route,   BrowserRouter as Router,} from 'react-router-dom';
import { useQuery } from 'utils/comon';
import CartFashion from 'components/CartFashion';
import './style.scss';

import { Routes } from 'components/config';
const ProductDetail = () => {
    const counter = useSelector((state:any) => state.counter);
   

    const dispatch = useDispatch();
   
  interface Product {
    
        Id: number
        Title: string
        Price: number
        Photo: string
        Updated_At: unknown
        Category_Id: number
        Color: string
        Size: string
        Description: string
        Quantity:number
    
      }
    const query = useQuery();
    const id = query.get('Id');
    const IdD = useSelector((state:any) => state.getId);

  const handel=()=>{
    console.log("alooooooooooo")
  }
console.log(">>>>>>>>>>>>>"+IdD)
        
    
    const [productDetail, setProductDetail] = useState<Product>({
        Id: 0,
        Title: "",
        Price: 0,
        Photo: "",
        Updated_At: null,
        Category_Id: 0,
        Color: "",
        Size: "",
        Description: "",
        Quantity: 0,
    
    });
    useEffect(() => {
    
        fetch('http://localhost:8888/FindProduct?Id='+id)
            .then((res) => res.json())
            .then((data ) => {
                setProductDetail(data)   
            })
            .catch(function (error) {
                console.log(error);
            });  
    },[])  
 
    return (
        <div>
            {/* <!--breadcrumbs area start--> */}


            <div className="breadcrumbs_area product_bread">
           
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><a href="index.html">home </a></li>
                                    <li>/</li>
                                    <li>product details</li>
                                    
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--breadcrumbs area end-->
    
    <!--product details start--> */}
            <div className="product_details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5">
                            <div className="product-details-tab">

                                <div id="img-1" className="zoomWrapper single-zoom">
                                    <a href="#">
                                        <img id="zoom1" src="assets/img/product/product5.jpg" data-zoom-image="assets/img/product/product5.jpg" alt="big-1" />
                                    </a>
                                </div>

                                <div className="single-zoom-thumb">
                                    <ul className="s-tab-zoom owl-carousel single-product-active" id="gallery_01">
                                        <li>
                                            <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product4.jpg" data-zoom-image="assets/img/product/product4.jpg">
                                                <img src="assets/img/s-product/product3.jpg" alt="zo-th-1" />
                                            </a>

                                        </li>
                                        <li >
                                            <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product6.jpg" data-zoom-image="assets/img/product/product6.jpg">
                                                <img src="assets/img/s-product/product.jpg" alt="zo-th-1" />
                                            </a>

                                        </li>
                                        <li >
                                            <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product8.jpg" data-zoom-image="assets/img/product/product8.jpg">
                                                <img src="assets/img/s-product/product2.jpg" alt="zo-th-1" />
                                            </a>

                                        </li>
                                        <li >
                                            <a href="#" className="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product2.jpg" data-zoom-image="assets/img/product/product2.jpg">
                                                <img src="assets/img/s-product/product4.jpg" alt="zo-th-1" />
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       <div className="col-lg-7 col-md-7">
                            <div className="product_d_right">
                                <form action="#">

                                    <h1>{productDetail.Title || "Undefine"}</h1>
                                    <div className=" product_ratting">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            <li className="review"><a href="#"> 1 review </a></li>
                                            <li className="review"><a href="#"> Write a review </a></li>
                                        </ul>
                                    </div>
                                    <div className="product_price">
                                        <span className="current_price">$ {productDetail['Price'] || "Undefine"}</span>
                                    </div>
                                    <div className="product_desc">
                                        <p>{productDetail.Description || "Undefine"}</p>
                                    </div>

                                    <div className="product_variant color">
                                        <h3>color</h3>
                                        <select className="niceselect_option" id="color" name="produc_color">
                                            <option selected value="1">choose in option</option>
                                            <option value="2">choose in option2</option>
                                            <option value="3">choose in option3</option>
                                            <option value="4">choose in option4</option>
                                        </select>
                                    </div>
                                    <div className="product_variant size">
                                        <h3>size</h3>
                                        <select className="niceselect_option" id="color1" name="produc_color">
                                            <option selected value="1">size</option>
                                            <option value="2">x</option>
                                            <option value="2">xl</option>
                                            <option value="3">md</option>
                                            <option value="4">xxl</option>
                                            <option value="4">s</option>
                                        </select>
                                    </div>
                                    {/* ()=>dispatch(GetIdProduct(productDetail.Id)) */}
                                        
                                    {/* {`/${Routes.CART}`} */}
                                    <p onClick={()=>dispatch(GetIdProduct(productDetail.Id))}> Bấm vào đây</p>
                                    <Router>
                                    <Link to="/cart" > Oke You </Link>
                                    </Router>
                                  
                                    <div className=" product_d_action">
                                        <ul>
                                            <li><a href="#" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> Add to Wish List</a></li>
                                            <li><a href="#" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i> Compare this Product</a></li>
                                        </ul>
                                    </div>

                                </form>
                                <div className="priduct_social">
                                    <h3>Share on:</h3>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                                        <li><a href="#"><i className="fa fa-tumblr"></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!--product details end-->
    
    <!--product info start--> */}
            <div className="product_d_info">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product_d_inner">
                                <div className="product_info_button">
                                    <ul className="nav" role="tablist">
                                        <li >
                                            <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">More info</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Data sheet</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="info" role="tabpanel" >
                                        <div className="product_info_content">
                                            <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a womans wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="sheet" role="tabpanel" >
                                        <div className="product_d_table">
                                            <form action="#">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="first_child">Compositions</td>
                                                            <td>Polyester</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first_child">Styles</td>
                                                            <td>Girly</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="first_child">Properties</td>
                                                            <td>Short Dress</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </form>
                                        </div>
                                        <div className="product_info_content">
                                            <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a womans wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="reviews" role="tabpanel" >
                                        <div className="product_info_content">
                                            <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a womans wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                        </div>
                                        <div className="product_info_inner">
                                            <div className="product_ratting mb-10">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                </ul>
                                                <strong>Posthemes</strong>
                                                <p>09/07/2018</p>
                                            </div>
                                            <div className="product_demo">
                                                <strong>demo</strong>
                                                <p>Thats OK!</p>
                                            </div>
                                        </div>
                                        <div className="product_review_form">
                                            <form action="#">
                                                <h2>Add a review </h2>
                                                <p>Your email address will not be published. Required fields are marked </p>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label htmlFor="review_comment">Your review </label>
                                                        <textarea name="comment" id="review_comment" ></textarea>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <label htmlFor="author">Name</label>
                                                        <input id="author" type="text" />

                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <label htmlFor="email">Email </label>
                                                        <input id="email" type="text" />
                                                    </div>
                                                </div>
                                                <button type="submit">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--product info end-->
    
    <!--product section area start--> */}
            <section className="product_section related_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Related Products</h2>
                                <p>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">
                        <div className="row">
                            <div className="product_carousel product_three_column4 owl-carousel">
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product21.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product22.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product27.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product28.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product24.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product25.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product23.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product24.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--product section area end-->
    
    <!--product section area start--> */}
            <section className="product_section upsell_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Upsell Products</h2>
                                <p>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">
                        <div className="row">
                            <div className="product_carousel product_three_column4 owl-carousel">
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product24.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product25.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>

                                            <div className="product_sale">
                                                <span>-7%</span>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                            <span className="current_price">£60.00</span>
                                            <span className="old_price">£86.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="single_product">
                                        <div className="product_thumb">
                                            <a className="primary_img" href="product-details.html"><img src="assets/img/product/product23.jpg" alt="" /></a>
                                            <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product24.jpg" alt="" /></a>
                                            <div className="product_action">
                                                <div className="hover_action">
                                                    <a href="#"><i className="fa fa-plus"></i></a>
                                                    <div className="action_button">
                                                        <ul>

                                                            <li><a title="add to cart" href="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a></li>
                                                            <li><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>

                                                            <li><a href="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="quick_button">
                                                <a href="#" data-toggle="modal" data-target="#modal_box" title="quick_view">+ quick view</a>
                                            </div>
                                        </div>
                                        <div className="product_content">
                                            <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                            <span className="current_price">£60.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--product section area end--> */}
        </div>
    )
}

export default ProductDetail;  