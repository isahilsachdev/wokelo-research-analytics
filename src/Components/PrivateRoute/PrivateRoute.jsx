import { Navigate, Outlet  } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  // check if the token exists and is valid
  return !!token;
};

// rendering the component only if user is authenticated
const PrivateRoute = ({ component: Component, ...rest }) => (
  isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
);

export {PrivateRoute}