import { useState } from 'react';
import { Host, DatePicker } from '@expo/ui/swift-ui';

export default function HistoryCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
      <DatePicker
        title="Select a date"
        selection={selectedDate}
        displayedComponents={['date']}
        onDateChange={date => {
          setSelectedDate(date);
        }}
      />
    </Host>
  );
}
