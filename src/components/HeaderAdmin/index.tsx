import React from 'react';

import './style.scss';


const HeaderAdmin = () => {

    return (
        <div>
            <nav className="navbar navbar-dark sticky-top  flex-md-nowrap p-0 justify-content-start navAdmin">
                <a className="navbar-brand col-md-3 col-lg-3 mr-0 px-3" href="#">
                    <img src="assets/img/logo1.jpg" alt="" className='img-fluid' width={200} />
                </a>
               
                

                <div className='NameSchool '>
                    <h5>Sở giáo dục và đào tạo TP Hà Nội</h5>
                    <p>22-22-2022 20h:21 pm</p>

                </div>
                <div className='div-Search'>
                    <input className="form-control input-header form-control-dark w-10" type="text" placeholder="Nhập giáo viên......." aria-label="Nhập giáo viên" />
                    <button type="button" className="btn-search">Tìm kiếm</button>


                </div>



            </nav>

        </div>


    )
}

export default HeaderAdmin;  