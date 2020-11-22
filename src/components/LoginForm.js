import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component {
  state = {text: ''};

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            underlineColorAndroid={'transparent'}
            style={{height: 40, width: 100, color: '#000', flex: 1, padding: 0}}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
