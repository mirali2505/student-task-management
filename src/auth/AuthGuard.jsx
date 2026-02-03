import { Navigate } from "react-router-dom";
const AuthGuard = ({ children, required = true, redirect = "/login" }) => {
  const lData = JSON.parse(localStorage.getItem("lData"));
  const isAuthenticated = !!lData;

  if (required && !isAuthenticated) {
    return <Navigate to={redirect} replace></Navigate>;
  }

  if (!required && isAuthenticated) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }
  return children;
};
export default AuthGuard;
