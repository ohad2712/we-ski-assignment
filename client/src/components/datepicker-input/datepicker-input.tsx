import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput({ onChange }) {
  const [dateRange, setDateRange] = useState([null, null]);

  const onDatePickerChange = dates => {
    onChange(((!dates[0] || !dates[1]) ? undefined : { from: dates[0], to: dates[1] }));

    setDateRange(dates);
  };

  return (
    <div>
      <DatePicker
        selected={dateRange[0]}
        onChange={onDatePickerChange}
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        selectsRange
        className="react-datepicker__custom-input"
        calendarClassName='react-datepicker__calendar'
      />
    </div>
  );
}
