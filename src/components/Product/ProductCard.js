import React from 'react'
import { SafeAreaView,Text, TouchableOpacity,View,Image, Button} from 'react-native'
import styles from './ProductCard.style'
const ProductCard = ({ name, price,onSelect}) => {
    return (
        <TouchableOpacity onPress={onSelect}>
        <View style={styles.container}>
            <Image
                style={styles.image} source={{ uri: 'https://cdn.akakce.com/ugur/ugur-ued-5168-dtk-nf-a-5-cekmeceli-z.jpg' }}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.bottom_info}>
                    <Text style={styles.price}>{price} TL</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    );

    }

export default ProductCard;