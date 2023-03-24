import UnderHeaderAdmin from "components/UnderHeaderAdmin"
import React from "react"
const AdminTeacher=()=>{
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
                       
                        <tr className="table-info">
                            <th scope="row">1</th>
                            <td>GV01</td>
                            <td>Nguyễn Duy Trinh</td>
                     



                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>GV01</td>
                            <td>Nguyễn Duy Trinh</td>
             

                        </tr>
                        <tr className="table-info">
                            <th scope="row">3</th>
                            <td>GV02</td>
                            <td>Nguyễn Duy Trinh</td>
                   


                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>GV03</td>
                            <td>Nguyễn Duy Trinh</td>
                        


                        </tr>
                        <tr className="table-info">
                            <th scope="row">5</th>
                            <td>GV05</td>
                            <td>Nguyễn Duy Trinh</td>
                


                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>HV01</td>
                            <td>Nguyễn Duy Trinh</td>
        
                        </tr>
                       

                    </tbody>
                </table>

        </div>
    )
}
export default AdminTeacher