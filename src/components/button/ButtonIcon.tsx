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
    TouchableOpacity
} from 'react-native';
function ButtonIcon({ onPress, title, size, backgroundColor }: any) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
                <Image source={require('../../assest/image/Back.png')} style={styles.iconBack} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'flex-end'
    },
    button: {
        width: '40%',
        backgroundColor: 'black',
        display: 'flex',
        padding: 15,
        paddingBottom: 20,
        paddingTop: 20,
        justifyContent: 'center',
        fontSize: 16,
        flexDirection:'row',
        borderRadius:20,

    },
    buttonText: {
        color: 'white',
        fontWeight: '800'
    },
    iconBack: {
        width: 20

    }

});
export default ButtonIcon