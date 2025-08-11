"use client";
import { useState } from "react";

async function makePostRequest() {
  const res = await fetch("/api/hello", {
    // const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Geliet" }),
  });
  const data = await res.json();
  return { data };
}

const Friends = () => {
  const [message, setMessage] = useState("");

  const onClick = async () => {
    const { data } = await makePostRequest();
    setMessage(data.message);
  };
  return (
    <div>
      Hey Friends, {message}
      <button onClick={onClick}>Click Here</button>
    </div>
  );
};

export default Friends;
