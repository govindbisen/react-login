import React from "react";
import { useParams } from "react-router-dom";

export function Userdetail({ users }) {
  const { id } = useParams();
  const user = users.filter((i) => i.id === id);
  console.log(user[0].description);
  return <>{user[0].description}</>;
}
