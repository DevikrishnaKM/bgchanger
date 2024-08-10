import React, { useState } from "react";
import Btn from "./components/Btn/Btn";


const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3
         shadow-lg bg-white rounded-3xl p-2"
        >
          
          <Btn onClick={()=>setColor("red")} text={"red"} boxColor={"red"} />
          <Btn onClick={()=>setColor("green")} text={"green"} boxColor={"green"} />
          <Btn onClick={()=>setColor("blue")} text={"blue"} boxColor={"blue"} />
          <Btn onClick={()=>setColor("white")} text={"white"} boxColor={"white"} />
          <Btn onClick={()=>setColor("black")} text={"black"} boxColor={"black"} />
          <Btn onClick={()=>setColor("grey")} text={"grey"} boxColor={"grey"} />
          <Btn onClick={()=>setColor("orange")} text={"orange"} boxColor={"orange"} />
          <Btn onClick={()=>setColor("olive")} text={"olive"} boxColor={"olive"} />
         
        </div>
      </div>
    </div>
  );
};

export default App;
