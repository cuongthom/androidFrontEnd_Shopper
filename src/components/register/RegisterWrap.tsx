import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import ButtonClick from '../button/ButtonClick'
function RegisterWrap() {
    const cuong = () => {

    }
    const [selected, setSelected] = useState('+84');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.containerBt}>
                    <View style={styles.sectionStyle}>
                        <Image
                            source={require('../../assest/image/Email.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="email"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <Image
                            source={require('../../assest/image/Email.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="email"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.sectionStyle}>
                        <Image
                            source={require('../../assest/image/Email.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="email"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                 
                    <View style={styles.sectionStyle}>
                        <Image
                            source={require('../../assest/image/password.png')}
                            style={styles.imageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="password"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </SafeAreaView>
            <Text style={{ textAlign: 'right', fontWeight: '700', paddingRight: 20, marginBottom: 80 }}>
                Forgot password?
            </Text>
            <View>
                <ButtonClick onPress={cuong} title={'Sign in'} colorText={'white'} backgroundColorBT={'#07BFA5'} borderW={0} />
            </View>
        </>
    )
}
const styles = StyleSheet.create({


    containerBt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 53,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 20,
        width: 20,
        resizeMode: 'stretch',

    },
    wrapIcon: {
        backgroundColor: '#1a3834',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    }
});
export default RegisterWrap