import React, { useState, useEffect} from "react";
import Card from './Card';
import axios from "axios";



const Makerpage = () => {
    const[data, setData]= useState([]);

    useEffect(() => {
        axios
         .get('https://api.nasa.gov/planetary/apod?api_key=CZtOXA5O8YsycSSTTSj53338NDbMBdhvjAF8yNs4&date=2020-07-12')
        .then(response => {
            console.log(response.data)
              setData([response.data])
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
             img={p.url}
             title={p.title}
             date={p.date}/>   
            ) 
        }
        )}   
    </div>
    )
}

 export default Makerpage;