import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./components/User";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute exact path="/user/add">
          <AddUser />
        </ProtectedRoute>
        <ProtectedRoute exact path="/user/edit/:id">
          <EditUser />
        </ProtectedRoute>
        <ProtectedRoute path="*">
          <User />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
