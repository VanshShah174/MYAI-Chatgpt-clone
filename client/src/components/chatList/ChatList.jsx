import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore MY AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
        <Link to="/">My chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo (1).png" alt="" />
        <div className="texts">
            <span>Upgrade to MY AI Pro</span>
            <span>Get Unlimited access to All Features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
