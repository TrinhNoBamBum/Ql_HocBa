import React from "react";
const Login=()=>{
    return(
        <div>
                {/* <!--breadcrumbs area start--> */}
    <div className="breadcrumbs_area other_bread">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>/</li>
                            <li>sign</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    {/* <!--breadcrumbs area end-->
    
    <!-- customer login start --> */}
    <div className="customer_login">
        <div className="container">
            <div className="row">
               {/* <!--login area start--> */}
                <div className="col-lg-6 col-md-6">
                    <div className="account_form">
                        <h2>login</h2>
                        <form action="#">
                            <p>   
                                <label>Username or email <span>*</span></label>
                                <input type="text"/>
                             </p>
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                             </p>   
                            <div className="login_submit">
                               <a href="#">Lost your password?</a>
                                <label htmlFor="remember">
                                    <input id="remember" type="checkbox"/>
                                    Remember me
                                </label>
                                <button type="submit">login</button>
                                
                            </div>

                        </form>
                     </div>    
                </div>
                {/* <!--login area start-->

                <!--register area start--> */}
                <div className="col-lg-6 col-md-6">
                    <div className="account_form register">
                        <h2>Register</h2>
                        <form action="#">
                            <p>   
                                <label>Email address  <span>*</span></label>
                                <input type="text"/>
                             </p>
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                             </p>
                            <div className="login_submit">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>    
                </div>
                {/* <!--register area end--> */}
            </div>
        </div>    
    </div>
    {/* <!-- customer login end --> */}
        </div>
    )
}

export default Login