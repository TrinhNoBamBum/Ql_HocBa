import React from "react"
import UnderHeaderAdmin from "components/UnderHeaderAdmin"

const AdminStudent=()=>{
    return (
        <div>
            <UnderHeaderAdmin/>
            <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã HSSV</th>
                            <th scope="col">Họ và tên</th>

                      
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                         

                        </tr>
                        <tr className="table-info">
                            <th scope="row">1</th>
                            <td>HV01</td>
                            <td>Trịnh Khắc Tuấn</td>
                     



                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>HV01</td>
                            <td>Lê Thủy Ngân</td>
             

                        </tr>
                        <tr className="table-info">
                            <th scope="row">3</th>
                            <td>HV01</td>
                            <td>Trần Văn Tùng</td>
                   


                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>HV01</td>
                            <td>Hòa Đinh</td>
                        


                        </tr>
                        <tr className="table-info">
                            <th scope="row">5</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
                


                        </tr>
                     
                       

                    </tbody>
                </table>

        </div>
    )
}
export default AdminStudent