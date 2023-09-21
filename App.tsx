/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import Router from './src/router/Router';
import { Provider } from 'react-redux';
import store from './src/redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider, Box } from "native-base";
import { LogBox } from 'react-native';

const queryClient = new QueryClient()
function App(): JSX.Element {

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Provider>
    </NativeBaseProvider>

  )
}


export default App;
