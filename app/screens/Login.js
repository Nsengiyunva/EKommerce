import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './LoginStyles.js'

class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{ borderWidth: 1,borderRadius: 10, width: '25%',height: '10%',
          marginTop: '10%',backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ marginTop: '25%'}}>Logo</Text>
        </View>
        <View style={{ borderWidth: 1,borderRadius: 10, width: '25%',
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd'}}>
          <Text>Log in With</Text>
        </View>
        <View style={{ borderRadius: 2, borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', width: '25%'}}>
          <Text>Fb</Text>
        </View>
      </View>
    )
  }
}
export default Login;
