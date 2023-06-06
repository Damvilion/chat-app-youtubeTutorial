import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/15360894/pexels-photo-15360894/free-photo-of-woman-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/15360894/pexels-photo-15360894/free-photo-of-woman-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
