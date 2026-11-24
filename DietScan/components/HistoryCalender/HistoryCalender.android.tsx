import { useState } from 'react';
import { Host, DateTimePicker } from '@expo/ui/jetpack-compose';

// Android version of HistoryCalender. The SwiftUI DatePicker in HistoryCalender.tsx (iOS)
// only exists on iOS, so Android uses the Material 3 (Jetpack Compose) picker instead.
export default function HistoryCalender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
      <DateTimePicker
        initialDate={selectedDate.toISOString()}
        displayedComponents="date"
        variant="input"
        onDateSelected={date => {
          if (date) setSelectedDate(date);
        }}
      />
    </Host>
  );
}
