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

function OnBoarding3() {
    const cuong = () => {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.fontTitle}>
            Get anything pickup & delivered at your doorstep
            </Text>
            <Text style={styles.fontText}>
            Order online to get groceries, medicines, laundry & may more delivered at doorstep.
            </Text>
            <Image source={require('../../assest/image/OpenStore.png')} style={styles.image} />
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
export default OnBoarding3