import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

// const events = [
//     { name: "Child Support",
//     pic: "https://i.ibb.co/wSmV09v/refuse-Shelter.png"
// },  
// { name: "Animal shelter",
// pic: "https://i.ibb.co/t8RBsJn/animal-Shelter.png"
// },
// { name: "Bird House",
// pic: "https://i.ibb.co/Fxt80Cn/bird-House.png"
// },
// { name: "Good Education",
// pic: "https://i.ibb.co/Tmt001K/good-Education.png"
// }
// ]


const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className="row">

            {
                events.map(event=> <Event event={event}></Event>)
            }
            
        </div>
    );
};

export default Home;