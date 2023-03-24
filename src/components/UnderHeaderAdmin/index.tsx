import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import './style.scss'
const UnderHeaderAdmin=()=>{
    const history=useHistory()
    const [isTeacher,setIsTeacher]=useState('gv')
    const handleSetUser=(user:string,url:any)=>{
        setIsTeacher(user)
        history.push(url)

    }
    return(
        <div className="container-fluid header-divContainer">
        <div className="row">
            <div className="col-lg-2">
                <button className="btn-u btn-gv" onClick={()=>handleSetUser('gv','/admin')}   style={{background:isTeacher==='gv' ?'#3FF0B9' : '#fff' }}>Giáo viên</button>

            </div>
            <div className="col-lg-2">
               <button className="btn-u btn-hs"  onClick={()=>handleSetUser('hs','admin/student')}   style={{background:isTeacher==='hs' ?'#3FF0B9' : '#fff' }}>Học sinh</button>

            </div>
           
        </div>
        <div className="row">
            <form className="form-admin">
                <input type="text" className="input-search" placeholder="Tìm kiếm ..."/>
                <button className="btn-search"><i className="bi bi-search"></i></button>
            </form>

        </div>

      

    </div>
    )
}
export default UnderHeaderAdmin