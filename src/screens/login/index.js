import React, {Component, useState} from 'react';
import {View, Text, Button, Dimensions, SafeAreaView} from 'react-native';
import FloatingLabelInput from 'react-native-floating-label-input';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FBARNTextInput
          label="Email"
          onChangeText={(value) => setEmail(value)}
        />
        <FBARNTextInput
          label="Password"
          isSecure={true}
          onChangeText={(value) => setPassword(value)}
        />
        <FBARNButton
          title="Sign In"
          onPress={() => props.navigation.navigate('Dashboard')}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.noAccount}>No account yet? Create one</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
