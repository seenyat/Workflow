import{Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function NoPrivateRoute({children, ...rest}) {

  const Auth = useSelector(state => state.Auth)

  return <Route {...rest} >
     
      {!Auth ?
      children :
      <Redirect to="/todos" />}

  </Route>
}
