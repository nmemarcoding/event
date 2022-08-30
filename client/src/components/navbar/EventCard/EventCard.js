import React from 'react';
import "./EventCard.css"
import Axios from '../../../hook/axios'

const EventCard = ({data}) => {

    const delet = ()=>{
        
        Axios.delete(`/event/${data._id}`)
        .then((res) =>{
            
            console.log(res.data)
            window.alert("DELETED");
            window.location.reload();
           
        } ).catch((e)=>{
        window.alert(e.response.data.message);
        })
        
    }
    return (
        <div className="eventCard">
            <article className="eventCard">
                <div>{data._id}</div>
                <div>{data.hostId}</div>
                <div>{data.title}</div>
                <div>{data.date}</div>
                <div>{data.time}</div>
                <div>{data.location}</div>
                <br></br>
                
                <button onClick={delet}>Delete Event</button>
            </article>
        </div>
    );
}

export default EventCard;
