import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidEmail, isValidPassword} from '../../methods';
const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        <FBARNTextInput
          label="Confirm Password"
          isSecure={true}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <FBARNButton
          title="Sign Up"
          onPress={() => {
            if (
              isValidEmail(email) &&
              isValidPassword(password) &&
              isValidPassword(confirmPassword)
            ) {
              if (password === confirmPassword) {
                props.navigation.navigate('Dashboard');
              } else {
                Alert.alert('Password and confirm password does not match');
              }
            } else {
              Alert.alert('In valid inputs');
            }
          }}
        />
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.noAccount}>Already have account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
