import React from 'react'
import {
    Pressable,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
function Splash() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assest/image/Logo.png')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#01221D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        
        width: 80,
        height: 80,
    },

});
export default Splash