import React, { useState } from "react";
import axios from "axios";

function Chat() {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("hhhhhnujcheviu");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;
    // const prompt = inputText;

    const API_KEY = "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";
    console.log(API_KEY)

    try {
      const response = await axios.post(
        // "https://api.openai.com/v1/engines/davinci-codex/completions",

        "https://api.openai.com/v1/chat/completions",

        {
          prompt: "fdgfdf",
          model: "gpt-3.5-turbo-16k-0613",
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      setResponseText(response.data.choices[0].text);
    // setResponseText("Jess");
      setInputText("");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="chatbot text-white">
      <h1>GPT Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputText">Enter your query:</label>
        <input
          className="text-black"
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Response:</h3>
      <p className="p-5 bg-white text-black">{responseText}</p>
    </div>
  );
}

export default Chat;
