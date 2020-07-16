import React from "react";
import {Card} from 'reactstrap';
import styled from 'styled-components';
import Calender from './datepicker.jsx'
const insidewrapperDiv = styled.div`
display:flex;
justify-content:center;
`;
const imageDiv = styled.div`
display:flex;
justify-content:center;
`;

const Cards = ({ img, title, date, copyright, explaination }) => {
    return (
    
    <Card body inverse style={{ backgroundColor: 'royalblue', color: 'white' }} class='card'>
         <h1>NASA PHOTO OF THE DAY</h1>
         <Calender />
         <imageDiv>
            <img width='80%' alt='space of the day'src={img}></img>
        </imageDiv>
        <insidewrapperDiv body inverse style={{ backgroundColor: 'blue', color: 'white' }}>
            <p>{title}</p>
            <p>{date}</p>
            <p>{copyright}</p>
            <p>{explaination}</p>
         </insidewrapperDiv>
    </Card>
    )
    }
export default Cards;