import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      a:10,
      flag:10,
      b:90,
      username:'',
    }

    console.log('Contructor');
  }

  UNSAFE_componentWillMount(){
    console.log('WillMount');


  }


  akhzarAction(){
    Alert.alert('Btn Pressed');
  }

  render(){
    console.log('Render');

    return (

      <View style={{flex:1, flexDirection:'column'}}>

      <Text style={{fontSize:26}}> SP19BSEC Testing State is = {this.state.username} </Text>

        <View style={{flex:0.20}}>
          <Text> Login Screen </Text>

        </View>
        <View style={{flex:0.40}}>

        <TextInput
        placeholder="Username *"
        style={{backgroundColor:'lightgrey', marginBottom:10}}
        value = {this.state.username}
        onChangeText = {(value) => this.setState({username : value})}
        />

        <TextInput
        placeholder="Password *"
        style={{backgroundColor:'lightgrey'}}
        value = {this.state.username}
        onChangeText = {(value) => this.setState({username : value})}/>

        </View>
        <View style={{flex:0.40}}>


        <TouchableOpacity style={{
          backgroundColor: 'green',
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30
          }}
         onPress = {() => this.akhzarAction()}>

            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
               LOG IN
            </Text>

        </TouchableOpacity>

          <Button
          title="Sin In"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />

          <Button
          title="Sin Up"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />

        </View>
      </View>

    );
  }

  componentDidMount(){
    console.log('DidMount');
    this.setState({flag:50000})
  }
}

const styles = StyleSheet.create({

});



// <View style={{backgroundColor:'grey', flex:1}}>
//
//   <View style={{backgroundColor:'red', flex:0.25}}>
//
//   <Text style={{color:'white'}}>
//                Usama Working SP19 BSE C First Commit Login
//   </Text>
//
//   </View>
//
//   <View style={{backgroundColor:'green', flex:0.35}}>
//
//
//   <TextInput style={{backgroundColor:'white'}}
//   />
//
//   </View>
//
//   <View style={{backgroundColor:'blue', flex:0.45}}>
//
//   <Button
//   title="Sin In"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
//   />
//
//   <Button
//   title="Sign Up"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
//   />
//
//   </View>
//
// </View>
