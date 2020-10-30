import React from "react";
import { UsersContextProvider } from "./context";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";
import ExtraDetails from "./ExtraDetails";
import AddUser from "./AddUser";

const App = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Joanna" },
  ];
  return (
    <div className="app">
      <UsersContextProvider users={users}>
        <h2>Using context and hooks</h2>
        <p>
          'UsersList', 'UserDetails' and 'AddUser' are three different
          components which use the same shared state through a context called
          "UsersContext"
        </p>
        <div className="users-container">
          <UsersList />
          <UserDetails />
          <ExtraDetails />
        </div>
        <AddUser />
        <ExtraDetails />
      </UsersContextProvider>
    </div>
  );
};

export default App;
