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
function OnBoarding() {
    const cuong = () => {
        console.log('cuong');

    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assest/image/BackgroundLogin.png')} style={styles.bg}>
                <Image source={require('../../assest/image/LogoShoper.png')} />

            </ImageBackground>
            <ButtonClick title={'Explore Us'} onPress={cuong} colorBt={'black'} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    },
    bg: {
        position: 'relative',
        width: 'auto',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 80,
        height: 80,
    },

});
export default OnBoarding