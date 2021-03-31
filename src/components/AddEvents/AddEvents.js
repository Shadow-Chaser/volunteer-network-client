import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddEvents = () => {
    
        const { register, handleSubmit, watch, errors } = useForm();
        const [imageURL, setImageURL] = useState(null);
      
      
        const onSubmit = data => {
          const eventData = {
            name: data.name,
            imageURL: imageURL
          };
          const url = `http://localhost:8000/addEvent`;
          
          fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
          })
          .then(res => console.log('server side response', res))
        };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'dae1f2e63803aaa4446fc6453177f462');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    return (
        <div>
             <h1>Add Event</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
              <input name="eventName" defaultValue="New Event" ref={register} />
      
             <input name="exampleRequired" type="file" onChange={handleImageUpload} i/>
      
             {/* {errors.exampleRequired && <span>This field is required</span>} */}
      
             <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;