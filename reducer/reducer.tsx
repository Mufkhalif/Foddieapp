import React, {useReducer} from 'react';

import {NavigationContext} from '../context/context';

const initialState = '';
const reducer = (state: any, action: any) => {
  switch (action) {
    case 'SET_NAVIGATION':
      return {
        ...state,
        inActive: action.payload,
      };
    default:
      throw new Error('Unexpected action');
  }
};

export const ReciverProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavigationContext.Provider value={{state, dispatch}}>
      {props.children}
    </NavigationContext.Provider>
  );
};
