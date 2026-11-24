import { View, Text, StyleSheet } from "react-native"
import HistoryCard from "@/components/HistoryCard"
import HistoryCalender from "@/components/HistoryCalender/HistoryCalender"
export default function history() {
  return (
    <View style={styles.container}>
      {/* History Heading */}
      <Text style={styles.text}>
        History
      </Text>
      <HistoryCalender />
      <HistoryCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});