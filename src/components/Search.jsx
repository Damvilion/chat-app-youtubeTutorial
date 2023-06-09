import React from "react";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { UserList } from "./UserList";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [userListArr, setUserListArr] = useState([]);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    const databaseUsers = [];

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        databaseUsers.push(doc.data());
      });

      setUserListArr(databaseUsers);
    } catch (error) {
      setErr(true);
      console.log(error);
    }

    console.log(userListArr);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="find a user"
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {err && <span style={{ color: "White" }}>User not found!</span>}

      {user && (
        <ul>
          {userListArr.map((user) => (
            <UserList user={user} key={user.uid} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
