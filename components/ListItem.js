import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native'
import {Ionicons} from '@expo/vector-icons' 

const ListItem = ({ empty, item, deleteHandler }) => {

    const confirm = (item) => {
        Alert.alert(
            `Remove "${item.name}" from shopping list`, 
            'Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => deleteHandler(item.id)
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ],
            {cancelable: true}
        )
    }

    return(
        <TouchableOpacity style={styles.itemTouchable}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Ionicons 
                name='md-trash'
                size={22}
                color='white'
                onPress={() => confirm(item)}
                ></Ionicons>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemTouchable: {
        padding: 14,
        backgroundColor: 'teal',
        borderColor: '#eee',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    itemContainer: {   
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        color: 'white',
        fontSize: 18
    }
})

export default ListItem