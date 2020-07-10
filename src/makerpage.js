import React, { useState, useEffect} from "react";
import axios from "axios";
import component1 from "./component1.js";

export default function makerpage() {
    const [property, setProperty] = useState([]);

    useEffect(() => {
        axios
        //  .get('https://api.nasa.gov/planetary/apod')
        .then(response => {
            console.log(response);
            setProperty(response.data);
        })
        .catch(error => {
            console.log('error:', error)
        })
    }, []);

    return (
        <div class='componentmaker'>
            {property.map(eachProperty => {
              return (
              <component1 
                key = {eachProperty.id}
                title = {eachProperty.title}
                date = {eachProperty.date}
                hdurl = {eachProperty.hdurl}
                /> 
                    ) 
                })
            }
       </div> 
    )
}