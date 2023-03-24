import React from "react"
import HeaderContainer from "components/Header-Container"
import './style.scss'
const GradeBook = () => {
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
              <th scope="col">Miệng</th>
              <th scope="col" colSpan={3}>15 phút</th>
              <th scope="col" colSpan={4}>1 Tiết</th>
              <th scope="col">Học kỳ</th>
              <th scope="col">Điểm TBHK</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr className="table-info">
              <th scope="row">1</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr className="table-info">
              <th scope="row">3</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr>
              <th scope="row">4</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr className="table-info">
              <th scope="row">5</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr>
              <th scope="row">6</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>
            <tr className="table-info">
              <th scope="row">7</th>
              <td>HV01</td>
              <td>Nguyễn Duy Trinh</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>8</td>

            </tr>

          </tbody>
        </table>

      </div>

    </div>)
}
export default GradeBook