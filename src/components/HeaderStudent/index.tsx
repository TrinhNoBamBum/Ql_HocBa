import React from "react";
import './style.scss'
const HeaderStudent=()=>{
    return(
        <div>
             <nav className="navbar navbar-dark sticky-top  flex-md-nowrap p-0 ">
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                    <img src="assets/img/logo1.jpg" alt="" className='img-fluid' width={150} />
                </a>
               
                

                <div className='NameSchool '>
               
                    <h5> <i className="bi bi-person-badge"></i>Ngô Minh Thư</h5>
                

                </div>
                <div className='div-Search'>
                    <input className="form-control input-header form-control-dark w-10" type="text" placeholder="Nhập giáo viên......." aria-label="Nhập giáo viên" />
                    <button type="button" className="btn-search">Tìm kiếm</button>


                </div>



            </nav>
        </div>
    )
}
export default HeaderStudent