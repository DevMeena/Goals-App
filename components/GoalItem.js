import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = (props) => {
  // we can also use helper function like used in GoalInput to get id
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#5f00ff' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
