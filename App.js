import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView, Alert } from 'react-native';

// Components
import Banner from './components/Banner'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

export default function App() {
  // States
  const [items, setItem] = useState([])
  const [empty, setEmpty] = useState(true)

  const addHandler = (item) => {
    if (item.name != '') {
      setItem(prev => {
        setEmpty(false)
        return [...prev, item]
      })
    } else {
      Alert.alert(
        `Something's Wrong!`,
        'You did not enter anything.',
        [
          {
            text: 'Ok',
            type: 'cancel'
          }
        ],
        {cancelable: true}
      )
    }
    
  }

  const deleteHandler = (id) => {
    if (items.length == 1) {
      setEmpty(true)
    }
    setItem(prev => {
      return prev.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Banner 
      banner={'Shopping List'}
      header
      />
      <AddItem addHandler={addHandler}/>
      {
        empty ?
        <ScrollView>
          <Text style={styles.empty}>Nothing added yet.</Text>
        </ScrollView> :
        <FlatList 
        style={{marginTop: 10, marginBottom: 50, padding: 10}}
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            deleteHandler={deleteHandler}
          />
        )}
      />
      }
      <Banner banner='&copy; jrusmon'/>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  empty: {
    textAlign: 'center',
    marginTop: 150,
    fontSize: 22
  }
});
