import React, { useState } from "react";
import { useParams } from "react-router-dom";

export function UserdetailEdit({ setUsers, users }) {
  const { pid } = useParams();

  console.table("pid", pid);
  let user = users.filter((i) => i.id === pid);
  console.log("user:", user[0].name);

  const [name, setName] = useState(user[0].name);
  const [avatar, setAvatar] = useState(user[0].avatar);
  const [id, setId] = useState(user[0].id);
  const [description, setDescription] = useState(user[0].description);

  function handleClickEdit() {
    const newUser = {
      name,
      avatar,
      id,
      description,
    };
    const userIndex = users.findIndex((u) => u.id === pid);
    if (userIndex !== -1) {
      const copyUsers = [...users];
      copyUsers[userIndex] = newUser;
      setUsers(copyUsers);
    }

    // const copyUsers = [...users];
    // user = newUser;
    // setUsers([...users, newUser]);
  }
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        value={name}
      ></input>
      <input
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="avatar"
        value={avatar}
      ></input>
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
        value={id}
      ></input>
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        value={description}
      ></input>
      <button onClick={handleClickEdit}>Save User</button>
    </div>
  );
}
