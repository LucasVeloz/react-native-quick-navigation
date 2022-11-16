import React, { createContext, useContext, useReducer } from "react";
import { ScreenProps } from "./dto";




interface IInitialState {
  screens: ScreenProps[];
  activeScreens: ScreenProps[];
}

interface IActionI {
  type: 'INITIATE_SCREEN'
  payload: ScreenProps[]
}

interface IActionII {
  type: 'ADD_ACTIVE_SCREEN' | 'REMOVE_ACTIVE_SCREEN';
  payload: ScreenProps;
}

type IAction = IActionI | IActionII;


interface INavigationState {
  states: IInitialState;
  dispatch: React.Dispatch<IAction>;
}

const navigationState = createContext<INavigationState | undefined>(undefined);




const INITIAL_STATE: IInitialState = {
  screens: [],
  activeScreens: []
}

const reducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case 'INITIATE_SCREEN':
      return {
        ...state,
        screens: action.payload,
        activeScreens: [action.payload[0]]
      }
    case 'ADD_ACTIVE_SCREEN':
      return {
        ...state,
        activeScreens: [...state.activeScreens, action.payload]
      }
    case 'REMOVE_ACTIVE_SCREEN':
      return {
        ...state,
        activeScreens: state.activeScreens.filter(screen => screen.name !== action.payload.name)
      }
    default:
      return state;
  }
}


const NavigationContainer = ({ children }: { children: React.ReactNode }) => {
  const [states, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log('---->', states)

  return (
    <navigationState.Provider value={{ states, dispatch }}>
      {children}
    </navigationState.Provider>
  );
};

const useNavigationContainer = () => {
  const context = useContext(navigationState);
  if (!context) {
    throw new Error('useNavigationContainer must be used within a NavigationContainer');
  }
  return context;
}

export {
  NavigationContainer,
  useNavigationContainer
}