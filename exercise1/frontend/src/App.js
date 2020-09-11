import React, { useState, useEffect } from "react";
import "./assets/css/styles.css";

import Header from "./components/header/Header";
import Me from "./components/me/Me";
import Portofolio from "./components/portofolio/Portofolio";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  //states
  const [story, updateStory] = useState({
    me: { name: "my title", occupation: "my content" },
    portofolio: [
      { information: "here is the information", label: "love" },
      { information: "a whole new world", label: "world" },
      { information: "unvelievable size", label: "aladin" },
    ],
    about: { content: "this is the about" },
    location: { address: "address", city: "city", country: "country" },
    links: { fb: "fb", tw: "tw", lk: "lk" },
  });

  const [beforeCancel, updatebeforeCancel] = useState({ ...story });

  return (
    <div className="App">
      <Header></Header>
      <Me story={story} updateStory={updateStory}></Me>
      <Portofolio story={story} updateStory={updateStory}></Portofolio>
      <About story={story} updateStory={updateStory}></About>
      <Footer story={story} updateStory={updateStory}></Footer>
    </div>
  );
}

export default App;
