import React from 'react'

export default function CreatEvent() {
    
    const handleChange = ()=>{}

    const handleClick = () => {}

    return (
        <div className="creatEvent">
            <article>
                <body>
                        <form>
                            
                                <label for="eventName">
                                    Event Name
                                    <input type="text" id="eventName" name="eventName" placeholder="Event Name" onChange={handleChange} required/>
                                </label>

                                <label for="eventDate">
                                    Date
                                    <input type="date" id="eventDate" name="eventDate"  onChange={handleChange} required/>
                                </label>
                                <label for="eventDate">
                                    Time
                                    <input type="time" id="eventTime" name="eventTime"  onChange={handleChange} required/>
                                </label>
                                <label for="eventDate">
                                    Location
                                    <input type="location" id="eventLocation" name="eventLocation"  onChange={handleChange} required/>
                                </label>

                            
                            
                            <button type="submi"t onClick={handleClick}>Creat Event</button>
                        </form>
                    </body>
            </article>
        </div>
    )
}
