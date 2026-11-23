import { Host, Icon } from "@expo/ui"
import { View, Text, Alert } from "react-native"
import { StyleSheet, Pressable } from "react-native"


function HistoryCard() {
  // View Icon
  const VIEW = Icon.select({
    ios: 'eye',
    android: require('@expo/material-symbols/eye.xml'),
  });

  // Delete Icon
  const DELETE = Icon.select({
    ios: 'trash',
    android: require('@expo/material-symbols/delete.xml'),
  });

  return (
    
    <View style={styles.container}>
      {/* History Date */}
      <Text style={styles.dateText}>
        (xx/xx/xxxx)
      </Text>

      {/* View History Button */}
      <Pressable 
        onPress={viewHistory}
        style={styles.button}
      >
        <Host matchContents>
          <Icon name={VIEW} color={"dodgerblue"}/>
        </Host>
      </Pressable>

      {/* Delete History Button */}
      <Pressable 
        onPress={deleteHistory} 
        style={styles.button}
      >
        <Host matchContents>
          <Icon name={DELETE} color={"red"}/>
        </Host>
      </Pressable>
    </View>
  )
}

function viewHistory() {
  Alert.alert("View History", "You clicked the view history button.");
}

// Delete history confirmation alert
function deleteHistory() {
  Alert.alert("Delete History", "Are you sure you want to delete this entry?", 
    [
      {text: "Cancel", style: "cancel"}, 
      {text: "Delete", style: "destructive", isPreferred: true}
    ]
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  dateText: {
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
  },
})

export default HistoryCard