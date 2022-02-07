import React, { useState } from "react";

export function AddUser({ setUsers, users }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  function handleClick() {
    const newUser = {
      name,
      avatar,
      id,
      description,
    };
    console.log(newUser);
    setUsers([newUser, ...users]);
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
      <button onClick={handleClick}>Add User</button>
    </div>
  );
}
