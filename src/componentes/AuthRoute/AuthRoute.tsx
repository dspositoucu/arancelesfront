import {  Route, Redirect } from 'react-router-dom'
import React, { FC,ReactNode } from 'react'
import { getDataLocalStorage, getDecodeTokenLocalStorage } from '../../helpers/LocalStorage'

interface Props {
  children:ReactNode 
  path: string;
  exact?: boolean;
}

const AuthRoute: FC<Props> = ({ children, exact, path }) => {
  const isLogin = !!getDataLocalStorage('access_token')
  
  const checkExiperd = () =>{
    const {exp} = getDecodeTokenLocalStorage()

    return  exp > new Date().getTime()/1000  
  }

  return (
    <Route
      exact={exact}
      path={path}>
         { (checkExiperd() && isLogin) ? [children] : <Redirect to="/"/> }
    </Route>
  )
}

export default AuthRoute