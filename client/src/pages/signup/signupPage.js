import React, { useState } from 'react'
import "./signupPage.css"
import { useNavigate } from 'react-router-dom'
import Axios from '../../hook/axios'

export default function SignupPage() {

    const navigate = useNavigate()

    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        roles: ["user"]  
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
    
      const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("/api/auth/signup", credentials)
            .then((res) =>{
                console.log(res.data)
                navigate('/login');
                
            } ).catch((e)=>{
                
                window.alert(e.response.data.message);
            })
            
       
    }

    return (
        <div className="signupPage">
            <article className="signupForm">
                <body>
                    <form>
                        
                            <label for="firstname">
                                Username
                                <input type="text" id="username" name="username" placeholder="username" onChange={handleChange} required/>
                             </label>

                            <label for="lastname">
                                Email
                                <input type="email" id="email" name="email" placeholder="email" onChange={handleChange} required/>
                             </label>
                      
                        <label for="email">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" onChange={handleChange} required/>
                        <small>We'll never share your email with anyone else.</small>
                        <button type="submit" onClick={handleClick}>SIGN UP</button>
                    </form>
                </body>
            </article>
        </div>
    )
}
