import React from 'react'
import {useDispatch} from 'react-redux'
import { addUser } from '../reducers/loginslice';
import {Link} from 'react-router-dom'
function Register(){
    const dispatch=useDispatch();
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        //console.log(e.target.username.value)
        let newUser={
            username:e.target.username.value,
            pswd:e.target.pswd.value,
            usertype:e.target.usertype.value,
        }
        console.log(newUser);
        dispatch(addUser(newUser));
    }
    return(
        <div style={{backgroundImage:"url('https://thumbs.dreamstime.com/b/ecommerce-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-banner-87910929.jpg')"}} className='register'>
            <form onSubmit={handleOnSubmit} className='centered1'>
                <h1 className='head'>Registration Page</h1>
                <input type="text" placeholder='Enter the username' name='username' className='Linpt' /><br />
                <input type="password" name='pswd' placeholder="Enter the password" className='Linpt'/><br />
                <input type="hidden" name='usertype' value="user" className='Linpt'/><br />
                <button type='submit' class="btn btn-primary mb-3">Register</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}
export default Register