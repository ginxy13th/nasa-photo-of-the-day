import React from "react";



const Card = ({img, title, date}) => {
    return (
        <div class='card'>
        <img alt='space of the day'src={img}></img>
           <h3>{title}</h3>
           <p>{date}</p>
        </div>
    )
    }
export default Card;