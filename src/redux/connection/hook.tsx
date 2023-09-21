import { useDispatch, useSelector } from 'react-redux';
import {

  setCharacterSelected,
  setEmail,

  setLocation,

} from './reducer';
import { useCallback } from 'react';
import { RootState } from '../index';



export const useConnection = () => {
  const connection = useSelector((state: RootState) => state.connection);
  const dispatch = useDispatch();





  const onSetLocation = useCallback(
    (loading: any) => {
      dispatch(setLocation(loading));
    },
    [dispatch],
  );

  const onSetEmail = useCallback(
    (loading: any) => {
      dispatch(setEmail(loading));
    },
    [dispatch],
  );

  const onSetCharacterSelected = useCallback(
    (loading: any) => {
      dispatch(setCharacterSelected(loading));
    },
    [dispatch],
  );





  return {
    connection,

    onSetLocation,
    onSetEmail,


    onSetCharacterSelected,
  };
};
