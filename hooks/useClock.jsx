import { useState, useEffect } from 'react';

const useClock = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [amPm, setAmPm] = useState('');
  const [weekday, setWeekday] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const dateObj = new Date();
      let hours = dateObj.getHours();
      const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., 'Fri'
      const day = dateObj.getDate();
      const month = dateObj.toLocaleDateString('en-US', { month: 'long' }); // e.g., 'July'
      const year = dateObj.getFullYear();
      const minutes = dateObj.getMinutes().toString().padStart(2, '0');
      const seconds = dateObj.getSeconds().toString().padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      hours = hours.toString().padStart(2, '0');

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setAmPm(amPm);
      setWeekday(weekday);
      setDay(day);
      setMonth(month);
      setYear(year);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return { hours, minutes, seconds, amPm, weekday, day, month, year };
};

export default useClock;
