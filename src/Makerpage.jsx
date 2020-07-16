import React, { useState, useEffect} from "react";
import Card from './Card';
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const Makerpage = () => {
    
    const[data, setData]= useState([]);
    const [date, setDate] = useState([])
    
    useEffect(() => {
        axios
         .get(`https://api.nasa.gov/planetary/apod?api_key=CZtOXA5O8YsycSSTTSj53338NDbMBdhvjAF8yNs4&date=${date}`)
        .then(response => {
            console.log(response.data)
              setData([response.data])
        })
        .catch(error => {
            console.log('error:', error)
        })
    }, [date])

    return( 
    <div className='makerpage-container'>
        {data.map(p => {
            return (
             <Card 
             key={p.id} 
             date={p.date}
             img={p.url}
             title={p.title}
             copyright={p.copyright}
             explaination={p.explanation}/>   
            ) 
        }
        )}   
    </div>
    )
}

 export default Makerpage;