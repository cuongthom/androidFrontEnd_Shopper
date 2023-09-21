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
function OnBoarding2() {
    const cuong = () => {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.fontTitle}>
                A wide range of goods
            </Text>
            <Text style={styles.fontText}>
                Shopper allows customers to choose a product or service of their choice from any supplier anywhere in the world.
            </Text>
            <Image source={require('../../assest/image/Products.png')} style={styles.image}/>
            <ButtonIcon onPress={cuong} title={'Next'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin:30,
    },
    fontTitle: {
        fontSize:30,
        fontWeight:'800',
        marginBottom:20
    },
    fontText: {
        fontSize:15
    },
    image: {
        marginTop:130,
        marginBottom:130
    }
});
export default OnBoarding2