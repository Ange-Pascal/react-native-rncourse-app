import { View, Text, StyleSheet, Pressable } from "react-native";
export default function GoalItem({ text, onDeleteGoal, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteGoal.bind(this, id)} 
        style={({pressed}) => pressed && styles.presseItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  presseItem:{
    color: "#210644"
  }
});
