import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { loginAsync } from '../reducers/loginslice';
import {useNavigate} from 'react-router-dom'
import background from '../img/background.png'
function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        let temp;
        //console.log(e.target);
        if(e.target.username.value!='admin' && e.target.pswd.value!='admin'){
            temp='user';
        }
        else{
            temp='admin';
        }
        const user = {
            username: e.target.username.value,
            pswd: e.target.pswd.value,
            usertype:temp,

        };
        dispatch(loginAsync(user)); 
        navigate("/");
    }
    
    return(
        <div>
            <form onSubmit={handleOnSubmit} className='centered' style={{ backgroundImage: `url(${background})` }}>
                <h1 className='loghead'>Login Form</h1>
                <input type='text' placeholder='Enter the username' name='username' className='Linpt' required/><br />
                <input type='password' placeholder='Enter the password' name='pswd'  className='Linpt' required/><br />
                <button class="btn btn-info mt-3 ">Sign In</button><br />
                <p class="link-info mt-3">Don't have account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}
export default Login