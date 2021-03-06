import React, { useState, useEffect} from "react";
import Card from './Card';
import axios from "axios";



const Makerpage = () => {
    
    const[data, setData]= useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        axios
         .get(`https://api.nasa.gov/planetary/apod?api_key=CZtOXA5O8YsycSSTTSj53338NDbMBdhvjAF8yNs4&date=${date}`)
        .then(response => {
            console.log(response.data)
              // setDate(response.data.date) 
                 setData([response.data])
              
        })
        .catch(error => {
            console.log('error:', error)
        })   
    }, [date])

console.log('date---->', date)

    return( 
    <div className='makerpage-container'>
        {data.map(p => {
            return (
             <Card 
             key={p.id} 
             date={date}
             media={p.media_type}
             img={p.url}
             title={p.title}
             copyright={p.copyright}
             explaination={p.explanation}
              setDate={setDate}
             />   
            ) 
        }
        )}   
    </div>
    )
}

 export default Makerpage;