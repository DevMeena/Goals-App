import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

// flex enabled by default on views

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  const addGoal = (goal) => {
    if (goal.length < 3) {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    } else {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: goal, id: Math.random().toString() },
      ]);
    }

    setVisible(false);
  };

  const deleteGoal = (id) => {
    console.log(id);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add new Goal'
          color='#5e0acc'
          onPress={() => {
            setVisible(true);
          }}
        />
        {visible && (
          <GoalInput
            visible={visible}
            onAddGoal={addGoal}
            closeModal={() => {
              setVisible(false);
            }}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoal}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 20,
    flex: 5,
  },
});
