import React, { useState } from 'react';
import './style.scss'
import { Link, useHistory } from 'react-router-dom';



const Login = () => {

  const history=useHistory()
  const hardcode ={
    user: 'TRINHNO',
    pass:'123'
  }

  const [user, setUser]=useState('');
  const [pass, setPass]=useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    if(user===hardcode.user && pass===hardcode.pass){
      // localStorage.setItem('pass',hardcode.pass)
      // localStorage.setItem('user',hardcode.user)
      history.push('/main')

    }
    else{
      alert('dkm khương duy ')
    }

  }

  const isTrue ={}
  return (
    <div className='container-fluid Login'>
      <div className='row login-row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6 login-Content' >
          <Link to='/demo'>
            <img src="assets/img/logoHighSchool.jpg" alt="" className='img-fluid logo' />
          </Link>
          <h1>Sing in</h1>
          <p>Sign in and start managing your candidates!</p>

          <div  >
            <form onSubmit={handleSubmit} className='form-Input'>
              <input type="text" placeholder='NOTE : *user:TRINHNO  pass:123*' className='login-pass' onChange={(e)=>setUser(e.target.value)}/>
              <br />
              <br />

              <input type="text" placeholder='password' className='login-pass' onChange={(e)=>setPass(e.target.value)} />
              <div className='checkbox'>

                <input type="checkbox" name='remember' checked={isChecked} onChange={(e)=>setIsChecked(!isChecked)} />
                <label htmlFor="remember" className='lable-checkbox'>Remember me</label>
                <span>Forgot password ?</span>
              </div>
              <button type='submit' className='btn-login'>Login</button>
            </form>
          </div>

        </div>
        <div className='col-lg-3'></div>
      </div>

      <div>
        <img src="assets/img/footer.jpg" alt="" />
      </div>
    </div>
  )
}

export default Login;