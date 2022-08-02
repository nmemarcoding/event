import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Axios from"../../hook/axios"
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(() => {
        if(sessionStorage.getItem('loggedIn') && (sessionStorage.getItem('loggedIn')===true)){
            setLoggedIn(false)
        }
    });

    const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("/api/auth/signout", {})
            .then((res) =>{
                sessionStorage.setItem('loggedIn', false);
                setLoggedIn(true)
                window.alert(res.data.message)
                
            } ).catch((e)=>{
                
                window.alert(e.response.data.message);
            })
            
       
    }

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>EVENT</li>
                </ul>
                {loggedIn ? <><ul><li><Link to="/login">Login</Link></li><li><Link to="/signup">Sign Up</Link></li></ul></>:
                <ul>
                    <li onClick={handleClick}>Logout</li>
                    <li role="list" dir="rtl">
                        <a href="#" aria-haspopup="listbox">Profile</a>
                        <ul role="listbox">
                            <li><a>post new event</a></li>
                            <li><a>my events</a></li>
                            <li><a>joined events</a></li>
                        </ul>
                    </li>
                </ul>}
                
            </nav>
        </div>
    )
}
