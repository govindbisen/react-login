import { useState } from "react";

import React from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };
  return { setToken: saveToken, token };
}

// i am following a standard approach outer function as normal syntax function and inner function as arrow function...
