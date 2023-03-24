import React from "react";
import './style.scss'
const HeaderContainer = () => {
    return (

         <div className="container-fluid header-divContainer">
            <div className="row">
                <div className="col-lg-2">
                    <div className="headerContainer">
                        <form action="" className="formHeader">
                            <label htmlFor="cars" className="lable-select">Chọn Khối:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">7</option>
                                <option value="saab">8</option>
                                <option value="opel">9</option>
                                <option value="audi">10</option>
                            </select>
                            <br />

                        </form>
                    </div>

                </div>
                <div className="col-lg-2">
                    <div className="headerContainer">
                        <form action="" className="formHeader">
                            <label htmlFor="cars" className="lable-select">Chọn Lớp:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">7A</option>
                                <option value="saab">7B</option>
                                <option value="opel">7C</option>
                                <option value="audi">7D</option>
                            </select>
                            <br />

                        </form>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="headerContainer">
                        <form action="" className="formHeader">
                            <label htmlFor="cars" className="lable-select">Chọn môn học:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Tiếng Anh</option>
                                <option value="saab">Vật lý</option>
                                <option value="opel">Toán</option>
                                <option value="audi">Lịch sử</option>
                            </select>
                            <br />

                        </form>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="headerContainer">
                        <form action="" className="formHeader">
                            <label htmlFor="cars" className="lable-select">Chọn học kỳ:</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Học kỳ I</option>
                                <option value="saab">Học kỳ II</option>
                             
                            </select>
                            <br />

                        </form>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                <p className="headerContainer-Person">Giáo viên dạy :<span>Nguyễn Hoài Anh</span></p>
                </div>
                <div className="col-lg-4">
                <p className="headerContainer-Person">Quyền hạn :<span>Bạn có quyền nhập điểm</span></p>
                </div>
               

            </div>

        </div>
     
    )
}
export default HeaderContainer