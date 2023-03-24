import React from "react";
import './style.scss'
const DetailClass = () => {
    return (
        <div className="container-fluid detailClass">



            <div className="row ResultStudent" >

                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h5>Kết quả học tập của học sinh Ngô Bảo Châu</h5>

                    <table className="table table-hover">

                        <tbody>
                            <tr style={{background:'#D4F8E6'}}>


                                <td>Lớp </td>
                                <th>1</th>
                            </tr>
                            <tr>

                                <td>Trường </td>
                                <th>Nam</th>
                            </tr>

                            <tr style={{background:'#D4F8E6'}}>

                                <td>Điểm TB </td>
                                <th>9.9</th>
                            </tr>
                            <tr>

                                <td>Học lực </td>
                                <th>Tèm tèm</th>
                            </tr>
                            <tr style={{background:'#D4F8E6'}}>

                                <td>Hạnh kiểm  </td>
                                <th>Kém</th>
                            </tr>
                            <tr>

                                <td>Danh hiệu </td>
                                <th>Học sinh ngu</th>
                            </tr>
                            <tr style={{background:'#D4F8E6'}}>

                                <td>Năm học </td>
                                <th>2003-2004</th>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row PointSubject">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h5>Bảng điểm môn học</h5>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Môn học</th>
                                <th scope="col">HKI</th>
                                <th scope="col">HKII</th>
                                <th scope="col">Cả năm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Ngữ Văn </th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Tiếng Anh</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                            <tr>
                                <th scope="row">Toán</th>
                                <td>9.8</td>
                                <td>9.5</td>
                                <td>9.9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row Note">
                <div className="col-lg-3"></div>
                <div className="col-lg-1 titleNote" ><i className="bi bi-card-checklist"></i><span>Ghi chú</span></div>
                <div className="col-lg-6 textNote">
                    
                    <textarea name="" id="" cols={50} rows={5}></textarea>
                </div>
            </div>

        </div>
    )
}
export default DetailClass