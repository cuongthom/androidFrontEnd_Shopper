import { IConnectionState } from '../../assest/Interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IConnectionState = {
  userProfile: null,
  jwtToken: null,
  location: {
    latitudeDelta: 0.182,
    longitudeDelta: 0.0621,
    latitude: 0,
    longitude: 0,
  },
  email: '',
  characterSelected: null,
};
const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {



    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCharacterSelected: (state, action) => {
      state.characterSelected = action.payload;
    },
  },
});
const { actions, reducer } = connectionSlice;
export const {

  setLocation,
  setEmail,

  setCharacterSelected,
} = actions;
export default reducer;
