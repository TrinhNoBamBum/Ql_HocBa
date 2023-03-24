import React, { useRef, useState } from "react";
import './style.scss'
import { Link, useHistory } from "react-router-dom";
const SideBarAdmin = () => {


    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3 sidebar-content">
                    <ul className="nav flex-column">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Nhập tên trường . . ." aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>
                        <div className="sidebar-content-inner">
                            <div className="sidebar-img">
                                <img src="./assets/img/school.jpg" alt=""  className="img-fluid" width={'50%'}/>
                                <h3>THPTBYT</h3>
                            </div>
                            <div className="sidebar-description">
                                
                                <div>
                                
                                <h6><i className="bi bi-person-fill"></i>Hiệu trưởng : <span>Nguyễn Văn A</span></h6>
                                </div>
                                <div>
                                <h6><i className="bi bi-house"></i>Địa chỉ : <span>Khối 3,TT Yên Thành</span></h6>
                                </div>
                                <div><h6><i className="bi bi-person-plus-fill"></i>Số lượng : <span>2000 học sinh</span></h6>
                                </div>
                                <div className="sidebar-email">
                                    <h6>
                                    <i className="bi bi-envelope-at"></i><span>byt@gmail.com</span>
                                    </h6>
                                </div>
                                <div>
                                    <h6>
                                    <i className="bi bi-telephone-forward"></i><span>0358261006</span>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </ul>


                </div>
            </nav>
        </>
    )
}
export default SideBarAdmin