import React from "react";
import {Card} from 'reactstrap';
import styled from 'styled-components';

const insidewrapperDiv = styled.div`
display:flex;
justify-content:center;
`;

const p = styled.p`
background:blue;
color:white;
`;
const Cards = ({img, title, date}) => {
    return (
    
    <Card body inverse style={{ backgroundColor: 'blue', color: 'white' }} class='card'>
        <insidewrapperDiv>
            <img width='80%' alt='space of the day'src={img}></img>
            <p>{title}</p>
            <p>{date}</p>
            </insidewrapperDiv>
        </Card>
    )
    }
export default Cards;