import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Countitem, GetIdProduct } from "store/actions/counter";

const CartFashion=()=>{
   const ID = useSelector((state:any)=> state.getId);
const [cart, SetCart]=useState<Record<string, unknown>[]>([]);
const countItem=cart.length;
 
   useEffect(() => {   
    fetch('http://localhost:8888/GetCart')
        .then((res) => res.json())
        .then((data ) => {
            SetCart(data)   
        })
        .catch(function (error) {
            console.log(error);
        });  
        
},[])  
    return(
        <div>  
              <div className="breadcrumbs_area other_bread">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>/</li>
                            <li>cart</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    {/* <!--breadcrumbs area end-->
    
    <!-- shopping cart area start --> */}
    <div className="shopping_cart_area">
        <div className="container">  
            <form action="#"> 
                <div className="row">
                    <div className="col-12">
                        <div className="table_desc">
                            <div className="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product_remove">Delete</th>
                                            <th className="product_thumb">Image</th>
                                            <th className="product_name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product_quantity">Quantity</th>
                                            <th className="product_total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {cart.map((item, index) => (     
                               <><tr>
                                
                                            <td className="product_remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                            <td className="product_thumb"><a href="#"><img src="assets/img/s-product/product2.jpg" alt="" /></a></td>
                                            <td className="product_name"><a href="#">{" " && String(item.Title)}</a></td>
                                            <td className="product-price">{" " && String(item.Price)}</td>
                                            <td className="product_quantity"><input min="1" max="100" value={" " && String(item.Quantity)} type="number" /></td>
                                            <td className="product_total">{Number(item.Quantity)*Number(item.Price)}</td>
                                        </tr></>




                               
                            ))}




                                       
                                       
                                    </tbody>
                                </table>   
                            </div>  
                            <div className="cart_submit">
                                <button type="submit">update cart</button>
                            </div>      
                        </div>
                    </div>
                </div>
{/*                 
                <!--coupon code area start--> */}
                <div className="coupon_area">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="coupon_code left">
                                <h3>Coupon</h3>
                                <div className="coupon_inner">   
                                    <p>Enter your coupon code if you have one.</p>                                
                                    <input placeholder="Coupon code" type="text"/>
                                    <button type="submit">Apply coupon</button>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="coupon_code right">
                                <h3>Cart Totals</h3>
                                <div className="coupon_inner">
                                   <div className="cart_subtotal">
                                       <p>Subtotal</p>
                                       <p className="cart_amount">£215.00</p>
                                   </div>
                                   <div className="cart_subtotal ">
                                       <p>Shipping</p>
                                       <p className="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                   </div>
                                   <a href="#">Calculate shipping</a>

                                   <div className="cart_subtotal">
                                       <p>Total</p>
                                       <p className="cart_amount">£215.00</p>
                                   </div>
                                   <div className="checkout_btn">
                                       <a href="#">Proceed to Checkout</a>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--coupon code area end--> */}
                
            </form> 
        </div>     
    </div>
    {/* <!-- shopping cart area end --> */}
    
        </div>
    )
}
export default CartFashion;


