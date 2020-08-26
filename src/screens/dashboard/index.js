import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Dashboard Screen</Text>
        <Button
          title="Go to Login again"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
