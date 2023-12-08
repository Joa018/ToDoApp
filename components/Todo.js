import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Checkbox from './Checkbox'

export default function Todo({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {
    return (
        <View style={styles.container}>
            <Checkbox id={id}
                text={text}
                isComplited={isCompleted}
                isToday={isToday}
                hour={hour}
            />
            <View>
                <Text style={isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>{text}</Text>
                <Text style={isCompleted ? [styles.time, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.time}>{hour}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        top: 24,
        marginTop: 5,
        marginBottom: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },

    time: {
        fontSize: 13,
        color: '#a3a3a3',
        fontWeight: '500'

    }

})