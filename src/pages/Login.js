import React ,{useState}from "react";
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"

function Login({navigation }){
    const user = useSelector(state => state.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleRegister(){
        navigation.navigate('RegisterPage')
    }
    const dispatch = useDispatch()
    const handleLogin = async () => {
        fetch('http://10.0.2.2:8071/products/authenticate', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
               password:password,
            }),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(blob => {
            var reader = new FileReader();
            reader.onload = () => {
              console.log(reader.result); // burada sunucudan gelen veriye erişebilirsiniz
              dispatch({ type: 'SET_TOKEN', payload: { user:(reader.result)} })
              //AsyncStorage.setItem('token', reader.result);
              //AsyncStorage.getItem('token').then(userSession => {
               //   console.log("tokennn"+ userSession);
              //});
             //s navigation.navigate('home'); // Navigate to home screen
            };
            reader.readAsText(blob);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

      }
  
    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Register" onPress={handleRegister} />
      </View>
    );
  };
export default Login;