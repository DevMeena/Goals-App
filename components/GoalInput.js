import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
  Text,
} from 'react-native';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');

  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal('');
  };

  return (
    <Modal visiblity={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />

        <Text style={styles.heading}>My Goals</Text>

        <TextInput
          value={goal}
          style={styles.textInput}
          placeholder='Enter your goals!'
          onChangeText={(value) => {
            setGoal(value);
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='cancel' onPress={props.closeModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#311b6b',
    borderRadius: 6,
    marginRight: 8,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  heading: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GoalInput;
