import React, { useState } from "react"
import './style.scss'
const UnderHeaderAdmin=()=>{
    const [isTeacher,setIsTeacher]=useState('gv')
    const handleSetUser=(user:string)=>{
        setIsTeacher(user)

    }
    return(
        <div className="container-fluid header-divContainer">
        <div className="row">
            <div className="col-lg-2">
                <button className="btn-u btn-gv" onClick={()=>handleSetUser('gv')}   style={{background:isTeacher==='gv' ?'#3FF0B9' : '#fff' }}>Giáo viên</button>

            </div>
            <div className="col-lg-2">
               <button className="btn-u btn-hs"  onClick={()=>handleSetUser('hs')}   style={{background:isTeacher==='hs' ?'#3FF0B9' : '#fff' }}>Học sinh</button>

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