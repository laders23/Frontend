import './Calendar.css';

const Calendar = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  

  return (
    <div className="calendar-wrapper">
      <h3>July</h3>
      <table className="calendar">
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {daysOfWeek.map((_, dayIndex) => {
                const day = weekIndex * 7 + dayIndex + 1;
                return (
                  <td key={dayIndex} className={day > 31 ? 'inactive' : ''}>
                    {day <= 31 ? day : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
