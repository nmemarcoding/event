import React, { useState } from 'react'
import "./loginPage.css"
import { useNavigate } from 'react-router-dom'
import Axios from '../../hook/axios'

export default function LoginPage() {

    const navigate = useNavigate()
    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined, 
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        
    };
    
    const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("/auth/signin", credentials)
            .then((res) =>{
                console.log(res.data)
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('id', res.data.id);
                navigate('/');
                
            } ).catch((e)=>{
                
                window.alert(e.response.data.message);
            })
            
       
    }

    return (
        <div className="loginPage">
            <article className="loginForm">
                <body>
                    <form>
                        
                            <label for="firstname">
                                Username
                                <input type="username" id="username" name="username" placeholder="username" onChange={handleChange} required/>
                             </label>

                            <label for="lastname">
                                Password
                                <input type="password" id="password" name="password" placeholder="password" onChange={handleChange} required/>
                             </label>
                        
                        <small>We'll never share your email with anyone else.</small>
                        <button type="submi"t onClick={handleClick}>LOGIN</button>
                    </form>
                </body>
            </article>
        </div>
    )
}
