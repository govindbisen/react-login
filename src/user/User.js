import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function User({ name, avatar, description, id, users, setUsers }) {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <img className="user-image" src={avatar} alt={name} />
      <div>
        <button
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {isHidden ? "show less" : "show more"}
        </button>

        <button
          onClick={() => {
            navigate(`/user-detail/${id}`);
          }}
        >
          details
        </button>

        <button
          onClick={() => {
            console.log(id);
            const newarr = users.filter((i) => i.id !== id);
            console.log(newarr);
            setUsers(newarr);
          }}
        >
          delete
        </button>

        <button
          onClick={() => {
            console.log("button click", id);
            navigate(`/user-detail-edit/${id}`);
          }}
        >
          Edit
        </button>
      </div>
      {isHidden && <p>{description} </p>}
    </div>
  );
}
