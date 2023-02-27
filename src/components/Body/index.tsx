import React, { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "components/SingleProduct";
import SingleBlog from "components/SingleBlog";

// const [product, setProduct] = useState<Record<string, unknown>[]>([]);

const Body = () => {
    const [product, setProduct] = useState<Record<string, unknown>[]>([]);
    const [blog, setBlog] = useState<Record<string, unknown>[]>([]);


    //lấy danh sách sản phẩm 
    useEffect(() => {
        fetch('http://localhost:8888/getProduct')
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        fetch('http://localhost:8888/getBlog')
            .then((res) => res.json())
            .then((data) => setBlog(data))
            .catch(function (err) {
                console.log(err)
            })

    })

    return (

        <div>
            <div className="slider_area slider_style home_three_slider owl-carousel">
                <div className="single_slider" data-bgimg="assets/img/slider/slider4.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="slider_content content_one">
                                    <img src="assets/img/slider/content3.png" alt="" />
                                    <p>the wooboom clothing summer collection is back at half price</p>
                                    <a href="shop.html">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single_slider" data-bgimg="assets/img/slider/slider5.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="slider_content content_two">
                                    <img src="assets/img/slider/content4.png" alt="" />
                                    <p>the wooboom clothing summer collection is back at half price</p>
                                    <a href="shop.html">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single_slider" data-bgimg="assets/img/slider/slider6.jpg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="slider_content content_three">
                                    <img src="assets/img/slider/content5.png" alt="" />
                                    <p>the wooboom clothing summer collection is back at half price</p>
                                    <a href="shop.html">Discover Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--slider area end-->

    <!--banner area start--> */}

            <div className="banner_section banner_section_three">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="banner_area">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner8.jpg" alt="#" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner_area">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner9.jpg" alt="#" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner_area bottom">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner10.jpg" alt="#" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--banner area end-->

    <!--product section area start--> */}
            <section className="product_section womens_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Sản phẩm của chúng tôi</h2>
                                <p>Các sản phẩm thiết kế hiện đại,mới nhất</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">
                        <div className="row">
                            <div className="col-12">
                                <div className="product_tab_button">
                                    <ul className="nav" role="tablist">
                                        <li>
                                            <a className="active" data-toggle="tab" href="#clothing" role="tab" aria-controls="clothing" aria-selected="true">Women’s</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#handbag" role="tab" aria-controls="handbag" aria-selected="false">Mens</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#shoes" role="tab" aria-controls="shoes" aria-selected="false">Kids</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#accessories" role="tab" aria-controls="accessories" aria-selected="false">Shoes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="clothing" role="tabpanel">
                                <div className="product_container">
                                    <div className="row product_column4">

                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="double_base">
                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="handbag" role="tabpanel">
                                <div className="product_container">
                                    <div className="row product_column4">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="shoes" role="tabpanel">
                                <div className="product_container">
                                    <div className="row product_column4">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Marshall Portable  Bluetooth</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo2 Solo 2</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Bose SoundLink Bluetooth</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="double_base">
                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="accessories" role="tabpanel">
                                <div className="product_container">
                                    <div className="row product_column4">
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Koss KPH7 Portable</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats EP Wired</a></h3>
                                                    <span className="current_price">£60.00</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPhone SE 16GB</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="double_base">
                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">JBL Flip 3 Portable</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>

                                                    <div className="product_sale">
                                                        <span>-7%</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Beats Solo Wireless</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                    <span className="old_price">£86.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
                                                    </div>
                                                    <div className="label_product">
                                                        <span>new</span>
                                                    </div>
                                                </div>
                                                <div className="product_content">
                                                    <h3><a href="product-details.html">Apple iPad with Retina</a></h3>
                                                    <span className="current_price">£60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="single_product">
                                                <div className="product_thumb">
                                                    <a className="primary_img" href="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></a>
                                                    <a className="secondary_img" href="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></a>

                                                    <div className="quick_button">
                                                        <a href="#" title="quick_view">Xem sản phẩm</a>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--product section area end-->
    
    <!--banner area start--> */}
            <section className="banner_section banner_section_three">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6">
                            <div className="banner_area">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner11.jpg" alt="#" /></a>
                                    <div className="banner_content">
                                        <h1>Handbag <br /> Mens Collection</h1>
                                        <a href="shop.html">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="banner_area">
                                <div className="banner_thumb">
                                    <a href="shop.html"><img src="assets/img/bg/banner12.jpg" alt="#" /></a>
                                    <div className="banner_content">
                                        <h1>Sneaker <br /> Mens Collection</h1>
                                        <a href="shop.html">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--banner area end-->
    
    <!--product section area start--> */}
            <section className="product_section womens_product bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Sản phẩm thịnh hành</h2>
                                <p>Sản phẩm ấn tượng và bán chạy nhất</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">

                        <div className="row">
                            {/* product_carousel product_three_column4 owl-carousel */}


                            {/* Single */}
                            {product.map((item, index) => (
                                <SingleProduct
                                    key={index}
                                    objectProduct={item}
                                ></SingleProduct>
                            ))}






                            {/* endSingle */}






                        </div>
                    </div>

                </div>
            </section>
            {/* <!--product section area end-->

    <!--blog section area start--> */}
            <section className="blog_section blog_section_three">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Bài viết mới nhất</h2>
                                <p>Cập nhật xu thế thời trang</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">


                        
                            {blog.map((item, index) =>(
                                <SingleBlog
                                    key={index}
                                    dataBlog={item}
                                >
                                </SingleBlog>

                            ))}
                    </div>
                </div>
            </section>
            {/* <!--blog section area end--> */}

            {/* <!-- modal area start--> */}
            <div className="modal fade" id="modal_box" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal_body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="modal_tab">
                                            <div className="tab-content product-details-large">
                                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" >
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/product4.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/product6.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/product8.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/product2.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab5" role="tabpanel">
                                                    <div className="modal_tab_img">
                                                        <a href="#"><img src="assets/img/product/product12.jpg" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal_tab_button">
                                                <ul className="nav product_navactive owl-carousel" role="tablist">
                                                    <li >
                                                        <a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/s-product/product3.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/s-product/product.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/s-product/product2.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="assets/img/s-product/product4.jpg" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false"><img src="assets/img/s-product/product5.jpg" alt="" /></a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12">
                                        <div className="modal_right">
                                            <div className="modal_title mb-10">
                                                <h2>Handbag feugiat</h2>
                                            </div>
                                            <div className="modal_price mb-10">
                                                <span className="new_price">$64.99</span>
                                                <span className="old_price" >$78.99</span>
                                            </div>
                                            <div className="modal_description mb-15">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae </p>
                                            </div>
                                            <div className="variants_selects">
                                                <div className="variants_size">
                                                    <h2>size</h2>
                                                    <select className="select_option">
                                                        <option selected value="1">s</option>
                                                        <option value="1">m</option>
                                                        <option value="1">l</option>
                                                        <option value="1">xl</option>
                                                        <option value="1">xxl</option>
                                                    </select>
                                                </div>
                                                <div className="variants_color">
                                                    <h2>color</h2>
                                                    <select className="select_option">
                                                        <option selected value="1">purple</option>
                                                        <option value="1">violet</option>
                                                        <option value="1">black</option>
                                                        <option value="1">pink</option>
                                                        <option value="1">orange</option>
                                                    </select>
                                                </div>
                                                <div className="modal_add_to_cart">
                                                    <form action="#">
                                                        <input min="0" max="100" step="2" value="1" type="number" />
                                                        <button type="submit">add to cart</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="modal_social">
                                                <h2>Share this product</h2>
                                                <ul>
                                                    <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                                    <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- modal area start--> */}



        </div>
    )
}
export default Body