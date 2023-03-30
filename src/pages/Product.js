import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import ProductCard from '../components/Product';
import appliances from '../Appliances.json'

function Product({ navigation }) {
  const [product, setProduct] = useState([]);

  function handleProduct() {
    fetch('http://10.0.2.2:8071/productAdd/getAllProduct')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    // Update the document title using the browser API
   handleProduct();
  },[]);
  const handleProductSelect = (id) => {
   navigation.navigate('DetailProduct',{id:id});

}

  const renderProduct = ({ item }) => (
    <ProductCard name={item.productName} price={item.unitInPrice} onSelect={() => handleProductSelect(item.productId)} />
   
  );
  return (
    <View>
      <FlatList
        data={product}
        renderItem={renderProduct}
  
      />
  
    </View>
  );
}

export default Product;