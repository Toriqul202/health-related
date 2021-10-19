
import useAuth from '../../Hooks/useAuth';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth()

    if(isLoading){
      return <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    }
   
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
     user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;