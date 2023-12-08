import * as React from 'react'
import { View,TouchableOpacity, Text, StyleSheet, TextInput, Switch } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function AddTodo(){
    const [name, setName]= React.useState('')
    const [date, setDate]= React.useState(new Date())
    const [isToday, setIsToday]= React.useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Add task</Text>
           <View style={styles.inputContainer}>
           <Text style={styles.inputTitle}>Name</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Task"
                placeholderTextColor={'#00000030'}
                onChangeText={(text)=>{setName(text)}}
            />
           </View>
           <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Hour</Text>
               <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                onChange={(event, selectDate) => setDate(selectDate)}
                style={{width:'80%'}}
               />
           </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7f8fa',
        paddingHorizontal:30
    },

    title:{
        fontSize:34,
        fontWeight:'bold',
        marginBottom:20,
        marginTop:30,
    },

      inputTitle:{
        fontSize:20,
        fontWeight:'600',
        lineHeight:24
    },
      textInput:{
          borderBottomColor:'#08080030',
          borderBottomWidth:1,
          width:'80%'
    },

      inputContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingBottom:30
      }


    })