import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/homeCreen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Updater } from '../service/Updater';
import OnBoarding from '../components/onBoarding/OnBoarding';
import OnBoarding2 from '../components/onBoarding/OnBoarding2';
import OnBoarding3 from '../components/onBoarding/OnBoarding3';
import OnBoarding4 from '../components/onBoarding/OnBoarding4';
import OnBoarding5 from '../components/onBoarding/OnBoarding5';
import VerifyEmail from '../screen/VerifyEmail';
const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
};
function Router(): JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={VerifyEmail} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="onboarding" component={OnBoarding} />
                <Stack.Screen name="onboarding2" component={OnBoarding2} />
                <Stack.Screen name="onboarding3" component={OnBoarding3} />
                <Stack.Screen name="onboarding4" component={OnBoarding4} />
                <Stack.Screen name="onboarding5" component={OnBoarding5} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Updater(Router)