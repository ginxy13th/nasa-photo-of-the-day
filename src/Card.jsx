import React from "react";
import styled from 'styled-components';
import Calender from './datepicker.jsx';
import ReactPlayer from 'react-player'

const Carddiv = styled.div`
background-color:royalblue;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 30px;
`;

const InsidewrapperDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin:10px;
font-size: 17px;
padding: 20px;
`;

const ImageDiv = styled.div`
max-width: 80%;
`;
 const Heading = styled.h1`
 font-family: 'Ranchers', cursive;
 font-size: 50px;
 `;

const CalenderDiv = styled.div`
margin:15px;
`;

const Cards = ({ img, title, date, media, copyright, explaination, setDate }) => {
    if (media === 'image'){
    return (
    <Carddiv>
         <Heading>NASA PHOTO OF THE DAY <span role="img" aria-label='go!'>🚀</span></Heading>
         <h2> PICK A DATE!!</h2>
         <CalenderDiv>
         <Calender setDate={setDate} date={date}/>
         </CalenderDiv>
         <ImageDiv>
            <img alt='space of the day'src={img}></img>
        </ImageDiv>
        <InsidewrapperDiv body inverse style={{ backgroundColor: 'blue', color: 'white' }}>
            <p>{title}</p>
            <p>{date}</p>
            <p>{copyright}</p>
            <p>{explaination}</p>
         </InsidewrapperDiv>
    </Carddiv>
    )}
    if (media === 'video'){
        return (
        <Carddiv>
        <Heading>NASA PHOTO OF THE DAY <span role="img" aria-label='go!'>🚀</span></Heading>
        <h2> PICK A DATE!!</h2>
        <CalenderDiv>
        <Calender setDate={setDate} date={date}/>
        </CalenderDiv>
           <ReactPlayer url={img}></ReactPlayer>
       <InsidewrapperDiv body inverse style={{ backgroundColor: 'blue', color: 'white' }}>
           <p>{title}</p>
           <p>{date}</p>
           <p>{copyright}</p>
           <p>{explaination}</p>
        </InsidewrapperDiv>
   </Carddiv>
    )}
        }
export default Cards;