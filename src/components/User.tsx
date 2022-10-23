import { Link } from "react-router-dom";

const User = () => {
  let user = localStorage.getItem("user");
  try {
    if (user) {
      user = JSON.parse(user);
    }
  } catch (error) {
    localStorage.removeItem("user");
  }

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Link to="/user/add">Add User</Link>
    </div>
  );
};

export default User;
