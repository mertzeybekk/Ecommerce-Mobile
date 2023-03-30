import React, { useEffect,useState } from 'react';
import { View, Text, ActivityIndicator,Buttons } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import Login from './pages/Login';
import Register from './pages/Register';
import d from '../d';
import Product from './pages/Product';
import { useDispatch, useSelector } from "react-redux"
import DetailProduct from './pages/DetailProduct';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(state => state.user)
  const isAuthloading = useSelector(state => state.isAuthloading)
  console.log(userSession)
  const dispatch = useDispatch()
  return (
    <NavigationContainer>
      {!userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={Login}
              options={{
                headerShown: false
              }} />
                 <Stack.Screen
                name="RegisterPage"
                component={Register}
                options={{
                  title: "Shopping Mall",
                  headerStyle: { backgroundColor: "#64b5f6" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white",
                
                }} />
          </Stack.Navigator>)
          :
          (
            <Stack.Navigator>
           
              <Stack.Screen
                name="product"
                component={Product}
                options={{
                  title: "Product",
                  headerStyle: { backgroundColor: "orangr" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white"
                }}
              />
              <Stack.Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{
                  title: "DetailProduct",
                  headerStyle: { backgroundColor: "orange" },
                  headerTitleStyle: { color: "red" },
                  headerTintColor: "white"
                }}
              />

            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  );
};


export default Router;