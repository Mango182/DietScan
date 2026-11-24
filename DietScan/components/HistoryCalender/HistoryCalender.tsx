import { useState } from 'react';


export default function HistoryCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={e => setSelectedDate(new Date(e.target.value))}
      />
    </div>
  );
}