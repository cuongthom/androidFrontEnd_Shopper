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
import WrapLogin from '../components/login/WrapLogin';
import RegisterWrap from '../components/register/RegisterWrap';
import PropTypes, { InferProps } from 'prop-types';
import ShopperApi from '../axios/ShopperApi';


function VerifyEmail({ navigation }: InferProps<typeof VerifyEmail.propTypes>): JSX.Element {
  const [account, setAccount] = useState(false)



  return (
    <View style={styles.container}>
      <Image source={require('../assest/image/BackgroundLogin.png')} style={styles.imageBg} />
      <View style={styles.wrap}>
        <View style={styles.image}>
          <Image source={require('../assest/image/LogoShoperDark.png')} />
        </View>
        <View style={styles.containerWrap}>
          <View style={styles.wrapLogin}>
            <Pressable onPress={() => setAccount(false)} style={{ width: '50%' }}>
              <Text style={account === false ? styles.textFontW : styles.textStyle}>Sign in</Text>
            </Pressable>
            <Pressable onPress={() => setAccount(true)} style={{ width: '50%' }}>
              <Text style={account === true ? styles.textFontW : styles.textStyle}>Register</Text>
            </Pressable>
          </View>
          {account ? <RegisterWrap /> : <WrapLogin navigation={navigation} />}
        </View>
        {!account &&
          <>
            <Text style={{ color: '#F4F5F6', textAlign: 'center', marginTop: 40, marginBottom: 25 }}>Or sign in with</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.wrapIcon}>
                <Image source={require('../assest/image/facebook.png')} style={{ alignContent: 'center' }} />
              </View>
              <View style={styles.wrapIcon}>
                <Image source={require('../assest/image/mail.png')} />
              </View>
              <View style={styles.wrapIcon}>
                <Image source={require('../assest/image/twitter.png')} />
              </View>
            </View>
          </>
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },

  wrap: {
    position: 'absolute',
    width: '100%',
  },
  containerWrap: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    // padding: 20,
    // margin: 20,
    borderRadius: 15
  },

  wrapLogin: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 25
  },
  wrapIcon: {
    backgroundColor: '#1a3834',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
  image: {
    alignItems: 'center',
    height: '20%',
    paddingVertical: 50
  },
  imageBg: {
    width: '100%',
    height: '100%'
  },
  textStyle: {
    fontSize: 25,
    textAlign: 'center'
  },
  textFontW: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '800'
  }
});

VerifyEmail.propTypes = {
  navigation: PropTypes.any.isRequired,
};
export default VerifyEmail