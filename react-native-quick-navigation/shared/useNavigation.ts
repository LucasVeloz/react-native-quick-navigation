import { useNavigationContainer } from "./NavigationContainer"

const useNavigation = () => {
  const { states, dispatch } = useNavigationContainer();

  const navigate = (name: string) => {
    const payload = states.screens.find((screen) => screen.name === name) 
    if (!payload) return;
    dispatch({ type: 'ADD_ACTIVE_SCREEN', payload })
  }

  const goBack = () => {
    const lastScreen = states.activeScreens[states.activeScreens.length - 1];
    dispatch({ type: 'REMOVE_ACTIVE_SCREEN', payload: lastScreen })
  }

  return {
    navigate,
    goBack,
  }
}

export {
  useNavigation
}