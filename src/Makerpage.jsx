import React, { useState, useEffect} from "react";
import Card from './Card';
import axios from "axios";



const Makerpage = () => {
    const[data, setData]= useState([]);

    useEffect(() => {
        axios
         .get('https://api.nasa.gov/planetary/apod')
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
        .catch(error => {
            console.log('error:', error)
        })
    }, [])

    return( 
    <div className='makerpage-container'>
        {data.map(p => {
            return (
             <Card 
             key={p.id} 
             img={p.hdurl}
             title={p.title}
             date={p.date}/>   
            ) 
        }
        )}   
    </div>
    )
}

 export default Makerpage;