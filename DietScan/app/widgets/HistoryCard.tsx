import { View, Text, Button, Alert } from "react-native"

function HistoryCard() {
  return (
    <View>
      {/* History Date */}
      <Text>
        (xx/xx/xxxx)
      </Text>

      {/* View History Button */}
      <Button title="View History" onPress={() => {}} />

      {/* Delete History Button */}
      <Button 
        title="Delete History" 
        onPress={deleteHistory} 
      />
    </View>
  )
}

function deleteHistory() {
  Alert.alert("Delete History", "Are you sure you want to delete this entry?", [{text: "Cancel"}, {text: "Delete"}])
}

export default HistoryCard