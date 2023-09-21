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
// import { TouchableOpacity } from 'react-native-gesture-handler';
function ButtonClick({ onPress, title, colorText, backgroundColorBT, borderW }: any) {
    return (

        <TouchableOpacity onPress={onPress} style={{ paddingBottom: 20 }}>
            <View style={[styles.button, { backgroundColor: backgroundColorBT, borderWidth: borderW }]}>
                <Text style={[styles.buttonText, { color: colorText }]}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        width: 'auto',
        height: 80,
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 10,
        justifyContent: 'center',

    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },

});
export default ButtonClick