import { View, Text } from "react-native"
import HistoryCard from "./widgets/HistoryCard"

export default function history() {
  return (
    <View>
      {/* History Heading */}
      <Text>
        History
      </Text>
      <HistoryCard />
    </View>
  )
}