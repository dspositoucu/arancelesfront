import {  Route, Redirect } from 'react-router-dom'
import React, { FC,ReactNode } from 'react'
import { getDataLocalStorage, getDecodeTokenLocalStorage } from '../../helpers/LocalStorage'

interface Props {
  children?:ReactNode 
  path?: string;
  exact?: boolean;
}

const AuthRoute: FC<Props> = (props) => {

  const { children, exact, path} = props

  const isLogin = getDataLocalStorage('access_token')
   if(!isLogin) return <Redirect to="/login"/> 
  const checkExiperd = () =>{
    const {exp} = getDecodeTokenLocalStorage()
    console.log(exp)
    return  exp > new Date().getTime()/1000  

  }

 /*  console.log('TOKEN', checkExiperd()) */

  console.log(checkExiperd(), isLogin)

  return (
    <Route
      exact={exact}
      path={path}>
         { (checkExiperd() && isLogin) ? [children] : <Redirect to="/login"/> }
    </Route>
  )
}

export default AuthRoute