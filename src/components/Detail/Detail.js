import React from 'react'
import { SafeAreaView,Text, TouchableOpacity,View,Image, Button} from 'react-native'
import styles from './Detail.style'
const Detail = ({ name, price,unitInStock }) => {
    return (
        <TouchableOpacity onPress={null}>
        <View style={styles.container}>
            <Image
                style={styles.image} source={{ uri: 'https://cdn.akakce.com/ugur/ugur-ued-5168-dtk-nf-a-5-cekmeceli-z.jpg' }}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.bottom_info}>
                <Text style={styles.price}>{unitInStock}</Text>
                    <Text style={styles.price}>{price} TL</Text>
                    <Button title='ekle' onPress={null}/>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    );

    }

export default Detail;