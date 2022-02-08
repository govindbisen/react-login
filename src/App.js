import "./App.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Alluser } from "./user/Alluser";
import { AddUser } from "./user/AddUser";
import { Counter } from "./fun/Counter";
import { Userdetail } from "./user/Userdetail";
import { UserdetailEdit } from "./user/UserdetailEdit";
import Product from "./product/Product";
import Login from "./login/Login";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

export default function App() {
  const InitialUsers = [
    {
      name: "Dragon",
      avatar:
        "https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/675px-Aegon_on_Balerion.jpg",
      id: "27",
      description: "a person who uses or operates something.",
    },
    {
      name: "The Hound",
      avatar:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-hound-azor-ahai-1500494048.png",
      id: "28",
      description:
        "any oral permission given within the prescription period would negative user as of right.",
    },
    {
      name: "Georgette",
      avatar: "http://placeimg.com/640/480/animals",
      id: "29",
      description: "a person who uses or operates something.",
    },
    {
      name: "Joaquin",
      avatar: "http://placeimg.com/640/480/animals",
      id: "30",
      description:
        "A user is a person or thing that uses something such as a place, facility, product, or machine.",
    },

    {
      name: "Dragon",
      avatar:
        "https://awoiaf.westeros.org/images/thumb/d/d4/Aegon_on_Balerion.jpg/675px-Aegon_on_Balerion.jpg",
      id: "32",
      description: "a person who uses or operates something.",
    },
  ];
  const [users, setUsers] = useState(InitialUsers);
  // const [Token, setToken] = useState("");
  const token = getToken();

  console.log("token in app.js", token);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  // useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home page</Link> |<Link to="/allusers">All Users</Link> |{" "}
          <Link to="/counter">counter</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Product />} />
          <Route
            path="/allusers"
            element={<Alluser users={users} setUsers={setUsers} />}
          />
          <Route
            path="/adduser"
            element={<AddUser users={users} setUsers={setUsers} />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/user-detail/:id"
            element={<Userdetail users={users} />}
          />
          <Route
            path="/user-detail-edit/:pid"
            element={<UserdetailEdit users={users} setUsers={setUsers} />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
