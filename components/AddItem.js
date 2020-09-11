import React, { useState } from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import uuidv4 from 'uuid'

const AddItem = ({ addHandler }) => {
    // State
    const [text, setText] = useState('')
    const onChange = textValue => setText(textValue)

    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Add Item..."
            style={styles.input}
            onChangeText={onChange}
            value={text}
        />
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    addHandler({id: uuidv4(), name: text})
                    setText('')
                }}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    input: {
        flex: 2,
        padding: 8,
        margin: 5,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'teal',
        borderWidth: 1,
        borderRadius: 40
    },
    button: {
        flex: 1,
        backgroundColor: 'teal',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 40
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default AddItem