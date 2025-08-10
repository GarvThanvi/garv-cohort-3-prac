import React, { useEffect, useReducer, useRef, useState } from "react";

const App = () => {
  const [messages, setMessages] = useState(["Hello!", "How are you!"]);
  const chatRef = useRef(null);
  const addMessage = () => {
    setMessages((prevMsg) => [...prevMsg, "New messsage!"]);
  };

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);
  return (
    <div
      ref={chatRef}
      style={{
        height: "200px",
        overflowY: "scroll",
        border: "1px solid black",
      }}
    >
      <button onClick={addMessage}></button>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
