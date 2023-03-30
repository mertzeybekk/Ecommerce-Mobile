import React ,{useState}from "react";
import { SafeAreaView,TextInput ,Button, Alert} from "react-native";
import axios from "axios";
function Register({navigation}){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[role,setRole]=useState('USER');
    const[res,setResponse]=useState('');
      function handleLogin(){
        fetch('http://10.0.2.2:8071/products/new', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: name,
               password:password,
               roles:role
            }),
          })
          .then(response => setResponse((response.status)))
          .catch(err => console.error(err));
      }
      if(res==200){
        navigation.navigate('LoginPage')
      }
    return(
        <SafeAreaView>
        <TextInput
        placeholder="Username"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
       <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
            <Button title="Register" onPress={handleLogin}/>
        </SafeAreaView>
    )
}
export default Register;