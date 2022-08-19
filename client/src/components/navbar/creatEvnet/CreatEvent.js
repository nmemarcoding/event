import React, { useState } from 'react'
import Axios from '../../../hook/axios'

export default function CreatEvent() {
    const [credentials,setCredentials] = useState({
        hostId:sessionStorage.getItem("id"),
        title: undefined, 
        date: undefined,
        guestsId: [],
        time: undefined,
        location: undefined

    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
        
    };
    
    

    const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("/event/creat", credentials)
            .then((res) =>{
                window.alert(res.data)
                
                
                
            } ).catch((e)=>{
                
                window.alert(e.response.data.message);
            })
            
       
    }

    return (
        <div className="creatEvent">
            <article>
                <body>
                        <form>
                            
                                <label for="eventName">
                                    Event Name
                                    <input type="text" id="title" name="title" placeholder="Event Name" onChange={handleChange} required/>
                                </label>

                                <label for="eventDate">
                                    Date
                                    <input type="date" id="date" name="date"  onChange={handleChange} required/>
                                </label>
                                <label for="eventTime">
                                    Time
                                    <input type="time" id="time" name="time"  onChange={handleChange} required/>
                                </label>
                                <label for="eventDate">
                                    Location
                                    <input type="location" id="location" name="location"  onChange={handleChange} required/>
                                </label>

                            
                            
                            <button type="submi"t onClick={handleClick}>Creat Event</button>
                        </form>
                    </body>
            </article>
        </div>
    )
}
