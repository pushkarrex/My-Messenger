import React, { useState, useEffect } from "react";
import Message from "./Message/Message";
import logo from "./assets/facebook-messenger.svg";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { TextField, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import classes from "./form.module.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messenger").add({
      msg: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    setUserName(prompt("Enter your name..... "));
  }, []);

  useEffect(() => {
    db.collection("messenger")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  return (
    <div className="App">
      <img
        src={logo}
        style={{ width: "100px", height: "100px" }}
        alt="mesenger-logo"
      />
      <h1>Connect your world with my messenger!</h1>
      <h2>{userName ? `Welcome ${userName}` : null}</h2>
      <form className={classes.form}>
        <TextField
          id="standard-basic"
          placeholder="Enter your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={classes.Text}
        />
        <IconButton
          color="primary"
          type="submit"
          onClick={sendMessage}
          className={classes.Button}
          disabled ={!input}
        >
          <SendIcon />
        </IconButton>
      </form>
      {/* <form>
        <input  />
        <button type="submit" onClick={sendMessage}>
          Send me a message
        </button>
      </form> */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          // <p>{`${userName}:${message}`}</p>
          <Message key={id} userName={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
