import React from 'react';
import "./EventCard.css"

const EventCard = ({data}) => {
    return (
        <div className="eventCard">
            <article className="eventCard">
                <div>{data._id}</div>
                <div>{data.hostId}</div>
                <div>{data.title}</div>
                <div>{data.date}</div>
                <div>{data.time}</div>
                <div>{data.location}</div>
            </article>
        </div>
    );
}

export default EventCard;
