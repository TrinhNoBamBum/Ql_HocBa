import React, { useRef, useState} from "react";
import './style.scss'
import { Link, useHistory } from "react-router-dom";
const SideBar = () => {
    const history =useHistory()

    const [selectButton, setselectButton] = useState('')
    const linkRef: any = useRef(null);
    const handle = (btn: string, link:any) => {
        setselectButton(btn)
        history.push(link)
    

    }

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item" onClick={(event) => {  handle('btn2','/main'); }}
                            style={{ background: selectButton === 'btn2' ? '#3FF0B9' : '#fff' }}>
                            {/* <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                            </a> */}
                            <i className="bi bi-pencil-square"  ></i>
                            <Link to='./'  >Sổ điểm</Link>

                        </li>
                        <li className="nav-item" onClick={() => handle('btn1','/main/morality')}
                            style={{ background: selectButton === 'btn1' ? '#3FF0B9' : '#fff' }}>
                            <i className="bi bi-lightbulb"></i>
                            <Link to='./morality'>Hạnh kiểm</Link>

                        </li>
                        <li className="nav-item" onClick={() => handle('btn3','/main/finalgrade')}
                            style={{ background: selectButton === 'btn3' ? '#3FF0B9' : '#fff' }}>
                            <i className="bi bi-journal-text"></i>
                            <Link to='./finalgrade'>Điểm tổng kết</Link>

                        </li>

                        <li className="nav-item" onClick={() => handle('btn4','/main/morality')}
                            style={{ background: selectButton === 'btn4' ? '#3FF0B9' : '#fff' }}>
                            <i className="bi bi-person-square"></i>
                            <Link to='./demo'>Giáo viên</Link>

                        </li>
                        <li className="nav-item" onClick={() => handle('btn5','/main/morality')}
                            style={{ background: selectButton === 'btn5' ? '#3FF0B9' : '#fff' }}>
                            <i className="bi bi-people"></i>
                            <Link to='./demo'>Học sinh</Link>

                        </li>
                        <li className="nav-item" onClick={() => handle('btn6','/main/morality')}
                            style={{ background: selectButton === 'btn6' ? '#3FF0B9' : '#fff' }}>
                            <i className="bi bi-search"></i>
                            <Link to='./demo'>Tra cứu điểm HS</Link>

                        </li>
                    </ul>


                </div>
            </nav>
        </>
    )
}
export default SideBar