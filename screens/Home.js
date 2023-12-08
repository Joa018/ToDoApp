import * as React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TodoList from '../components/TodoList';
import { TodosData } from '../data/Todos';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const [localData , setLocalData] = React.useState(
        TodosData.sort((a, b) =>{return a.isCompleted - b.isCompleted})
    ) 

    const [isHidden, setIsHidden] = React.useState(false)

    const navigation = useNavigation()

    const handleHIdePress = () =>{
        if(isHidden){
            setIsHidden(false)
            setLocalData(TodosData.sort((a, b) =>{return a.isCompleted - b.isCompleted}))
            return
        }
        setIsHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    }
  return (
    <View style={styles.container}>
    <Image source={{uri:'https://fastly.picsum.photos/id/618/200/300.jpg?hmac=t4SGgbCgeW1bbJFjW8RY4vawWUkBDkj5AVuhzkvFEek'}}
            style={styles.pic}/>
    <View style={{flexDirection:'row', alignItems:'center' ,justifyContent:'space-between'}}>
    <Text style={styles.title}>Today</Text>
    <TouchableOpacity onPress={handleHIdePress}>
        <Text style={{color:'#3478f6'}}>{isHidden ? 'Show Completed': 'Hide Completed'}</Text>
    </TouchableOpacity>
    </View>
    <TodoList TodosData={localData.filter(todo => todo.isToday)}/>
    <Text style={styles.title}>Tomorrow</Text>
    <TodoList TodosData={TodosData.filter(todo => !todo.isToday)}/>
     <TouchableOpacity onPress={()=> navigation.navigate("Add")} style={styles.button}>
        <Text style={styles.plus}>+</Text>
     </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingBottom:10,
    paddingHorizontal:15
  },

  pic:{
    width:50,
    height:50,
    borderRadius:25,
    alignSelf:'flex-end'
  },

  title:{
    fontSize:34,
    fontWeight:'bold',
    marginBottom:20,
    marginTop:10
  },

  button:{
    width:55,
    height:55,
    borderRadius:30,
    backgroundColor:'#000',
    position:'absolute',
    bottom:50,
    right:20,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2
    },
    shadowOpacity:.5,
    shadowRadius:5,
    elevation:5
  },
  plus:{
    fontSize:55,
    color:'#fff',
    position:'absolute',
    top:-10,
    left:13
  }

});
