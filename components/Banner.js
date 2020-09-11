import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Banner = ( { banner, header } ) => {
    return(
        <View style={styles.container}>
        {
            header ? 
            <Text style={styles.headerText}>{banner}</Text> :
            <Text style={styles.footerText}>{banner}</Text>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 80,
        backgroundColor: 'rgb(0, 128, 134)',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    footerText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    }
})

export default Banner