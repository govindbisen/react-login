import React from "react";
import { User } from "./User";

export function Alluser({ users, setUsers }) {
  return (
    <div className="user-container">
      {users.map((user) => (
        <User
          users={users}
          key={user.id}
          id={user.id}
          name={user.name}
          avatar={user.avatar}
          description={user.description}
          setUsers={setUsers}
        />
      ))}
    </div>
  );
}
