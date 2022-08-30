import React, { useState, useEffect } from 'react';
import "./MyEventPage.css"
import EventCard from '../../components/navbar/EventCard/EventCard'
import Axios from '../../hook/axios'

export default function MyEventPage() {
    const [input,setData] = useState([]);
    const [userId,setUser] = useState(sessionStorage.getItem('id'))
    

    useEffect(() => {
        Axios.get(`/event/hostid/${userId}`)
        .then((res) =>{
            setData(res.data.reverse())
            console.log(res.data)
            console.log(typeof input)
        } ).catch((e)=>{
        window.alert(e.response.data.message);
        })
        console.log(input)
    },[]);



    return (
        <div className="myEventPage">
            
            {input.map((datas,index)=><EventCard key={index} data ={{_id:datas._id,
                                                                     title: datas.title,
                                                                     date: datas.date,
                                                                     time: datas.time,
                                                                     location: datas.location,
                                                                     hostId: datas.hostId.username,
            }} />)}
        </div>
    )
}
