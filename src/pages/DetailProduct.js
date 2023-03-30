import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import Detail from '../components/Detail';

function DetailProduct({ route }) {
    const [product, setProduct] = useState([]);
  
    const { id } = route.params;
    console.log(id + "idddd");
  
    function handleProduct() {
      const options = { method: 'GET' };
      const url = `http://10.0.2.2:8071/productAdd/getByIdProduct/${id}`;
  
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => setProduct([data])) // dizi olarak saklanmalı
        .catch((error) => console.error(error));
    }
  
    useEffect(() => {
      handleProduct();
    }, []);
  
    const renderProduct = ({ item }) => (
      <Detail name={item.productName} unitInStock={item.unitInStock} price={item.unitInPrice}/>
    );
  
    return (
      <View>
        <FlatList
          data={product}
          renderItem={renderProduct}
          keyExtractor={(item) => item.productId.toString()}
        />
      </View>
    );
  }
  
  export default DetailProduct;