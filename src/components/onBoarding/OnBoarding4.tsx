import React from 'react'
import {
    Pressable,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Button,
} from 'react-native';
import ButtonIcon from '../button/ButtonIcon';

function OnBoarding4() {
    const cuong = () => {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.fontTitle}>
                Create your own store
            </Text>
            <Text style={styles.fontText}>
                Make it your own. As you're setting up your online store, you have the ability to customize your retail store online to start selling products.
            </Text>
            <Image source={require('../../assest/image/Delivery.png')} style={styles.image} />
            <ButtonIcon onPress={cuong} title={'Next'} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    fontTitle: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 20
    },
    fontText: {
        fontSize: 15
    },
    image: {
        marginTop: 130,
        marginBottom: 130
    }
});
export default OnBoarding4