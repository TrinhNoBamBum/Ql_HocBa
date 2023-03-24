import HeaderContainer from "components/Header-Container";
import React  from "react";
const FinalGrade=()=>{
    return (
        <div>
            <HeaderContainer />
             <div className="Header-table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã HSSV</th>
                            <th scope="col">Họ và tên</th>

                            <th scope="col">Học kỳ I</th>
                            <th scope="col">Học kỳ II</th>
                            <th scope="col">Cả năm</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>


                        </tr>
                        <tr className="table-info">
                            <th scope="row">1</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>



                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>


                        </tr>
                        <tr className="table-info">
                            <th scope="row">3</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>



                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>


                        </tr>
                        <tr className="table-info">
                            <th scope="row">5</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>


                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>

                        </tr>
                        <tr className="table-info">
                            <th scope="row">7</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                            <td>8 </td>
                            <td>9.5</td>
                            <td>9.9</td>


                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default FinalGrade