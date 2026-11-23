import { NativeTabs } from 'expo-router/native-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="history">
        <NativeTabs.Trigger.Icon sf="clock" md="history" />
        <NativeTabs.Trigger.Label>History</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    </SafeAreaProvider>
  );
}
