import React from "react";

const component1 = ({title, date, hdurl}) => {
    return (
        <div class= 'component1'>
           <h3>Title: {title}</h3>
           <p>Date: {date}</p> 
            <img alt="PictureOfTheDay">{hdurl} </img>
        </div>
    )
}
export default component1;