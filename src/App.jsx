import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import LatihanDasarReact from "./components/LatihanDasarReact";
import SimpleForm from "./components/SimpleForm";
import ItemList from "./components/ItemList";
import AmbilDataAPI from "./components/AmbilDataAPI";

function App() {
  return (
    <>
      <div className="text-center">
        <Home />
        <LatihanDasarReact />
        <div className="text-green-500">Test from ChatGPT 1</div>
        <SimpleForm />
        <div className="text-green-500">Test from ChatGPT 2</div>
        <ItemList />
        <div className="text-green-500">Test from ChatGPT 3</div>
      </div>
    </>
  );
}

export default App;
