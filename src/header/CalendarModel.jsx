// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const CalendarModal = ({ selectedDate, handleDateChange, closeModal }) => {
//   const [startDate, setStartDate] = useState(selectedDate);

//   const handleSelectedDate = date => {
//     setStartDate(date);
//     handleDateChange(date);
//     closeModal(); // закрываем модальное окно после выбора даты
//   };

//   return (
//     <div>
//       <DatePicker
//         selected={startDate}
//         onChange={handleSelectedDate}
//         dateFormat="yyyy/MM/dd"
//       />
//     </div>
//   );
// };

// export default CalendarModal;