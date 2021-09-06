import { Route, Redirect } from 'react-router-dom'
import { getStoredAuthToken, tokenExpired } from '../../utils/authToken'

import PropTypes from 'prop-types';

const propTypes  = {
    children: PropTypes.element,
    path: PropTypes.string,
    exact: PropTypes.bool
}
const AuthRoute = ( { children, exact, path }) => {

  if (!getStoredAuthToken()) return <Redirect to="/login" />

  return (
    <Route
      exact={exact}
      path={path}>
      {tokenExpired() ? [children] : <Redirect to="/login" />}
    </Route>
  )
}

AuthRoute.propTypes = propTypes

export default AuthRoute