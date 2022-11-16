import React, { Children, useEffect } from "react"
import { OverlayScreen, useNavigationContainer, ScreenProps } from "../shared"



function Navigator({ children }: { children: React.ReactElement<ScreenProps>[] }) {
  const { states, dispatch } = useNavigationContainer();

  useEffect(() => {
    dispatch({
      type: "INITIATE_SCREEN",
      payload: Children.map(children, (child) => child.props),
    })
  }, [])
  
  return (
    <>
      {
        states
          .activeScreens
          .map((child, index) =>  
            <OverlayScreen 
              key={child.name} 
              component={<child.component />}
              shouldAnimate={index!==0} 
            />
          )
      }
    </>
  )
}

export {
  Navigator
}