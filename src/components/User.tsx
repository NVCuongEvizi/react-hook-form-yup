import { Link, useHistory } from "react-router-dom";
import UserTableContainer from "../styles/UserTable.css";

const User = () => {
  let user = localStorage.getItem("user");
  try {
    if (user) {
      user = JSON.parse(user);
    }
  } catch (error) {
    localStorage.removeItem("user");
  }

  let userData: any = localStorage.getItem("userData");
  try {
    if (userData) {
      userData = JSON.parse(userData);
    }
  } catch (error) {
    localStorage.removeItem("userData");
  }

  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <UserTableContainer>
      <h1>Welcome {user}</h1>
      <Link className="mx-3" to="/firebase">
        Firebase
      </Link>
      <Link to="/user/add">Add User</Link>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => localStorage.removeItem("userData")}>
        ClearAll
      </button>
      {userData && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Project Name</th>
              <th>Project Size</th>
              <th>Project Role</th>
              <th>Project Position</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item: string) => {
              const userItem = JSON.parse(item);
              return (
                <tr key={userItem.id}>
                  <td>{userItem.id}</td>
                  <td>{userItem.username}</td>
                  <td>{userItem?.age}</td>
                  <td>{userItem.gender ? "Male" : "Female"}</td>
                  <td>
                    {userItem.country === "Viet Nam"
                      ? "Viet Nam"
                      : userItem.otherCountry}
                  </td>
                  <td>{userItem.project[0].name}</td>
                  <td>{userItem.project[0].size}</td>
                  <td>{userItem.project[0].role}</td>
                  <td>{userItem.project[0].position}</td>
                  <td>
                    <Link to={`/user/edit/${userItem.id}`}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </UserTableContainer>
  );
};

export default User;
