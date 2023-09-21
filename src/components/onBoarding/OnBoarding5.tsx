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
import ButtonClick from '../button/ButtonClick';

function OnBoarding5() {
    const cuong = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../assest/image/LogoLogin.png')} />
            </View>
            <View style={styles.wrap}>
                <Image source={require('../../assest/image/Logo.png')} />
                <View style={styles.title}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.fontTitle}>
                            Welcome to Shop
                        </Text>
                        <Text style={[styles.fontTitle, { color: '#07BFA5' }]}>
                            per
                        </Text>
                    </View>
                    <Text style={styles.fontText}>
                        Make it your own. As you're setting up your online store, you have the ability to customize your retail store online to start selling products.
                    </Text>
                </View>
                <View>
                    <ButtonClick title={'Explore Us'} colorText={'white'} onPress={cuong} backgroundColorBT={'black'} />
                    <ButtonClick title={'Explore Us'} onPress={cuong} backgroundColorBT={'white'} />
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        // margin: 30,
    },
    wrap: {
        padding: 20
    },
    image: {
        alignItems: 'flex-end'
        // marginTop: 130,
        // marginBottom: 130
    },
    fontTitle: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 20
    },
    fontText: {
        fontSize: 15
    },
    title: {
        paddingBottom: 40,
        paddingTop: 40
    }
});
export default OnBoarding5