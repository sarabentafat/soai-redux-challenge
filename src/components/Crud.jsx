import React from "react";

// import { useSelector, useDispatch } from "react-redux";

const Crud = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <div className="App">
        <div className="addUser">
          <input
            type="text"
            placeholder="Name..."

          />
          <input
            type="text"
            placeholder="Username..."
          />
          <button
          >
       
            Add User
          </button>
        </div>
        <div className="displayUsers">
            <h2>List of Users</h2>
          {/* {userList.map((user) => {
            return (
              <div key={user.id}>
                <h1> {user.name}</h1>
                <h1> {user.username}</h1>
                <input
                  type="text"
                  placeholder="New Username..."

                />
                <button
                >
                  {" "}
                  Update Username
                </button>
                <button
                >
                  Delete User
                </button>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Crud;
