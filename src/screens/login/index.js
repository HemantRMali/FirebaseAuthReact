import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidEmail, isValidPassword} from '../../methods';

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
          onPress={() =>
            isValidEmail(email) && isValidPassword(password)
              ? props.navigation.navigate('Dashboard')
              : Alert.alert('In valid inputs')
          }
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.noAccount}>No account yet? Create one</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
