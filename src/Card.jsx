import React from "react";
import {Card} from 'reactstrap';
import styled from 'styled-components';

const insidewrapperDiv = styled.div`
display:flex;
justify-content:center;
`;
const imageDiv = styled.div`
display:flex;
justify-content:center;
`;

const Cards = ({ img, title, copyright, date, explaination }) => {
    return (
    
    <Card body inverse style={{ backgroundColor: 'royalblue', color: 'white' }} class='card'>
        <imageDiv>
            <img width='80%' alt='space of the day'src={img}></img>
        </imageDiv>
        <insidewrapperDiv body inverse style={{ backgroundColor: 'blue', color: 'white' }}>
            <p>{title}</p>
            <p>{copyright}</p>
            <p>{date}</p>
            <p>{explaination}</p>
         </insidewrapperDiv>
    </Card>
    )
    }
export default Cards;