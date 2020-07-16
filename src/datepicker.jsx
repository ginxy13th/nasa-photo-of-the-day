import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Calender = ({setDate, date}) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={date} onChange={date => setDate(date)} />
    );
  };

  export default Calender;