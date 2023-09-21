import React, { useState } from 'react'
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
    TextInput,
    SafeAreaView,
} from 'react-native';
import ButtonClick from '../button/ButtonClick';
import ShopperApi from '../../axios/ShopperApi';
import { Box, useToast } from 'native-base';
import PropTypes, { InferProps } from 'prop-types';

function WrapLogin({ navigation }: InferProps<typeof WrapLogin.propTypes>): JSX.Element {
    const toast = useToast();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [openSendCode, setOpenSendCode] = useState<any>('')
    const getCodeEmail = async () => {
        if (email === '') {

        }
        try {
            setLoading(true)
            const tx = await ShopperApi.getCode(email.trim().toLowerCase())
            console.log(tx.status);
            if (tx.status === 200) {
                setOpenSendCode(tx.status)
                toast.show({
                    render: () => {
                        return <Box style={styles.toast} background={'green.700'} rounded="sm" mb={5}>
                            {tx.data.message}
                        </Box>;
                    }
                });

            } else {
                toast.show({
                    render: () => {
                        return <Box style={styles.toast} background={'red.600'} rounded="sm" mb={5}>
                            lỗi rồi
                        </Box>;
                    }
                });
            }
            setLoading(false)
        } catch (err: any) {
            console.log("error", err);
            if (err) {
                toast.show({
                    render: () => {
                        return <Box style={styles.toast} background={'red.600'} rounded="sm" mb={5} color={'white'}>
                            lỗi rồi
                        </Box>;
                    }
                });
            }
        }
    }
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
                            onChangeText={setEmail}
                            style={{ flex: 1 }}
                            placeholder="email"
                            underlineColorAndroid="transparent"
                        />
                        <Text onPress={getCodeEmail}>{loading ? 'send code...' : 'send code'}</Text>
                    </View>
                    {openSendCode?.status === '200' &&
                        <View style={styles.sectionStyle}>
                            <Image
                                source={require('../../assest/image/password.png')}
                                style={styles.imageStyle}
                            />
                            <TextInput

                                style={{ flex: 1 }}
                                placeholder="code"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    }

                </View>
            </SafeAreaView>
            <Text style={{ textAlign: 'right', fontWeight: '700', paddingRight: 20, marginBottom: 80 }}>
                Forgot password?
            </Text>
            <View>
                <ButtonClick onPress={() => navigation.navigate('Home')} title={'Sign in'} colorText={'white'} backgroundColorBT={'#07BFA5'} borderW={0} />
            </View>
        </>
    )
}
WrapLogin.propTypes = {
    navigation: PropTypes.any.isRequired,
};
const styles = StyleSheet.create({
    wrapLogin: {
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 25
    },
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
    toast: {

        padding: 20,
        borderRadius: 20,
        fontSize: 15
    }

});
export default WrapLogin