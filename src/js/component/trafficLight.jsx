import React, {useState} from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [purpleOn, setPurpleOn] = useState(false);

  const handleClick = () => {
        if(color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else if (color === "green") {
            setColor("purple");
        }else {
            setColor("red");
        }
        
    };

    const handlePurpleClick = () => {
        setPurpleOn(!purpleOn);
      };

  return (
    <div>
      <div className="traffic-light bg-black p-20px m-auto d-inline-block">
        <div
          onClick={() => handleClick("red")}
          className={`light red ${color === "red" ? " glow" : ""}`}
        ></div>
        <div
          onClick={() => handleClick("yellow")}
          className={`light yellow ${color === "yellow" ? " glow" : ""}`}
        ></div>
        <div
          onClick={() => handleClick("green")}
          className={`light green ${color === "green" ? " glow" : ""}`}
        ></div>
        {purpleOn && (
          <div
            className={`light purple ${color === "purple" ? " glow" : ""}`}
          ></div>
        )}
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Color
      </button>
      <button className="btn btn-primary" onClick={handlePurpleClick}>
        {purpleOn ? "Hide purple light" : "Add purple light"}
      </button>
    </div>
  );
};

export default TrafficLight;