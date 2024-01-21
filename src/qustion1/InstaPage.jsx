import { useState } from 'react';
import './InstaPage.css'

function InstaPage() {
    const [login, setLogin] = useState(false);

    const switchLogin = ()=>{
        setLogin(!login);
    }
    return(
        <div className='content'>
            <img className='img' src='https://fontmeme.com/images/instagram-new-logo.png' alt="logo" />
            
            <input hidden={login} type="text" placeholder='Mobile Number or Email' />
            <input hidden={login} type="text" placeholder='Full Nmae' />
            <input type="text" placeholder='Phone number, username, or email' />
            <input type="password" placeholder='Password' name="" id="" />
            <button className='btn'>{login? 'Sign In' : 'Sign Up'}</button>

            <div className='footer'>
                {login ? 'Dont have account?': 'Have a account?'}
                <span onClick={switchLogin}>{!login ? 'Sign In':'Sign Up'}</span>
            </div>
        </div>
    )
    
}
export default InstaPage;