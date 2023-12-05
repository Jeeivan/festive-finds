import { useEffect, useState } from 'react';

export default function Countdown() {
    const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
  
    function calculateDaysLeft(): number {
      const christmasDate: Date = new Date('December 25, 2023 00:00:00 GMT');
      const currentDate: Date = new Date();
      const differenceInTime: number = christmasDate.getTime() - currentDate.getTime();
      const daysLeft: number = Math.floor(differenceInTime / (1000 * 3600 * 24));
      return daysLeft >= 0 ? daysLeft : 0;
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDaysLeft(calculateDaysLeft());
      }, 86400000); // Update every 24 hours
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="countdown-container">
        <p>{daysLeft} days until Christmas</p>
      </div>
    );
  };