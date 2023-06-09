import React from "react";

export const UserList = ({ user }) => {
  return (
    <li>
      <div className="userChat">
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <label>{user.displayName}</label>
        </div>
      </div>
    </li>
  );
};
