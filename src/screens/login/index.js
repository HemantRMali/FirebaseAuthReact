import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidEmail, isValidPassword} from '../../methods';
import ScreenTitle from '../../components/ScreenTitle';
import Loader from '../../components/Loader';

import auth from '@react-native-firebase/auth';
/**
 * This component is used to handled user login and validations activity.
 * @param {*} props
 */

export const showAlert = (message) => {
  setTimeout(() => {
    Alert.alert(message);
  }, 500);
};

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const loginUser = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false);
        props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        console.log('error:', error);
        if (error.code === 'auth/user-not-found') {
          showAlert('User not found!');
        }
        if (error.code === 'auth/invalid-email') {
          showAlert('That email address is invalid!');
        }
        if (error.code === 'auth/wrong-password') {
          showAlert(
            'The password is invalid or the user does not have a password',
          );
        }
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Loader isTransparent={true} loading={isLoading} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <ScreenTitle title="Login" />
          <FBARNTextInput
            label="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
          <FBARNTextInput
            label="Password"
            value={password}
            isSecure={true}
            onChangeText={(value) => setPassword(value)}
          />
          <FBARNButton
            title="Sign In"
            onPress={() => {
              console.log('Sign In');
              isValidEmail(email) && isValidPassword(password)
                ? loginUser()
                : Alert.alert('Invalid inputs');
            }}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.noAccount}>No account yet? Create one</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
