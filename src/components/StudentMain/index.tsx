import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './style.scss'
const StudentMain = () => {
    const history=useHistory();
   
    const LinkClass=(urlClass:any)=>{

        history.push(urlClass)
   //   console.log(urlClass)

    }
    return (
        <div className="container-fluid StudentMain">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                    <h5>Bạn đang là :</h5>
                </div>

                <div className="col-lg-6 ">
                    <div className="Title-Student"><h5>Học Sinh/Đã tốt nghiệp</h5></div>

                </div>
            </div>
            <div className="row information-Student">
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                    <h5>Thông tin cá nhân :</h5>
                </div>

                <div className="col-lg-5 table-infor">
                    <table className="table table-hover">

                        <tbody>
                            <tr>


                                <td>Họ tên </td>
                                <th>Nguyễn Duy Trinh</th>
                            </tr>
                            <tr>

                                <td>Giới tính </td>
                                <th>Nam</th>
                            </tr>

                            <tr>

                                <td>Ngày sinh </td>
                                <th>05/12/2000</th>
                            </tr>
                            <tr>

                                <td>Địa chỉ </td>
                                <th>Yên Thành, Nghệ An</th>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <div className="row class-Student">
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                    <h5>Quá trình học tập :</h5>
                </div>

                <div className="col-lg-5 listClass">
                    <button className="btn-Class" onClick={()=>LinkClass('/student/detailclass')}>
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 2</span>

                    </button>

                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 3</span>

                    </button>

                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 4</span>

                    </button>

                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 5</span>

                    </button>

                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 6</span>

                    </button>
                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 7</span>

                    </button>
                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 8</span>

                    </button>
                    <button className="btn-Class">
                        <i className="bi bi-star-half"></i>
                        <span>Lớp 9</span>

                    </button>
                 

                </div>
            </div>
            <div className="row iSshare">

                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                    <h5>Chế độ chia sẻ :</h5>
                </div>

                <div className="col-lg-6 iShare-Checkbox">
                    <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1"> Công khai </label>
                    </div>
                    <div>

                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" />
                    <label htmlFor="vehicle2"> Cá nhân</label>
                    </div>



                </div>
            </div>

        </div>

    )
}
export default StudentMain