import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: any) => {
  let user = localStorage.getItem("user");
  try {
    if (user) {
      user = JSON.parse(user);
    }
  } catch (error) {
    localStorage.removeItem("user");
  }

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
