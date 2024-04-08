import React, { useState } from 'react'
import '../header/SearchBox.css'
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";

export const SearchBox = () => {

    const [room, setRoom] = useState(1);
    const [adult, setAdult] = useState(1);

    const incrementRoom = () =>{
        setRoom(prevRooms=> prevRooms+1);
    }
    const incrementAdult=()=>{
        setAdult(prevAd=>prevAd+1);
    }

    const decrementRoom=()=>{
        if(room >1){
            setRoom(prevRooms => prevRooms-1);
        }
    }
    const decrementAdult=()=>{
        if(adult>1){
            setAdult(prevAd=>prevAd-1)
        }
    }
    

  return (
    <div className="search_box">
            <div className="search">
                <div className='images'>{<CiSearch className='glasses'/>}</div>
                <div className="input_check"><input type='text' placeholder='Search destination, hotels' /></div>
            </div>
            <div className="check_in">
                <div className="images_calendar">{<CiCalendar className='calendar'/>}</div>
                <div className="input_calendar" >Check in</div>
                
            </div>

            <div className="check_out">
                <div className="images_calendar">{<CiCalendar className='calendar'/>}</div>
                <div className="input_calendar">Check out</div>
            </div>

            <div className="room_adults">
                <div className="images_persone">{<IoIosPerson className='persone'/>}</div>
                <div className="room_selector">
                    <button onClick={decrementRoom}>-</button>
                    <span>{room} {room>1? 'rooms' : 'room'}</span>
                    <button onClick={incrementRoom}>+</button>
                </div>
                <div className="adults">
                <button onClick={decrementAdult}>-</button>
                    <span>{adult} {adult>1? 'adults' : 'adult'}</span>
                    <button onClick={incrementAdult}>+</button>
                </div>
            </div>

            <div className="button_search">
                <button className='search_button'>Search</button>
            </div>

        </div>
  )
}
