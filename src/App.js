import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQcaogmYXWqACW1QIhHOs29aBxPMwkd5U',
      authDomain: 'authentication-68d72.firebaseapp.com',
      databaseURL: 'https://authentication-68d72.firebaseio.com',
      projectId: 'authentication-68d72',
      storageBucket: 'authentication-68d72.appspot.com',
      messagingSenderId: '840313907111',
      appId: '1:840313907111:web:79c6861d338d8e4a0af882',
      measurementId: 'G-JY98SRKEWJ',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
