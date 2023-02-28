// import React, {useState, useEffect} from "react";

// const TrafficLight = () =>{
//     const [ color, setColor] = useState("red");
    
//     return(
//         <div className="traffic-light bg-black p-10px m-auto d-inline-block">
//             <div 
//                 onClick={() => setColor("red")} 
//                 className={`light red ${color === "red" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 onClick={() => setColor("yellow")} 
//                 className={`light yellow ${color === "yellow" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 onClick={() => setColor("green")} 
//                 className={`light green ${color === "green" ? " glow" : ""}`}>
//             </div>
//         </div>
//     )
// }

// export default TrafficLight;



// import React, {useState, useEffect} from "react";

// const TrafficLight = ({color}) =>{
    
//     return(
//         <div className="traffic-light bg-black p-10px m-auto d-inline-block">
//             <div 
//                 className={`light red ${color === "red" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 className={`light yellow ${color === "yellow" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 className={`light green ${color === "green" ? " glow" : ""}`}>
//             </div>
//         </div>
//     )
// }

// const TrafficLightController = () => {
//     const [ color, setColor] = useState("red");
    
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if(color === "red") {
//                 setColor("yellow");
//             } else if (color === "yellow") {
//                 setColor("green");
//             } else {
//                 setColor("red");
//             }
//         }, 2000);
//         return () => clearInterval(intervalId);
//     }, [color]);
    
//     return (
//         <div>
//             <TrafficLight color={color} />
//         </div>
//     );
// };

// export default TrafficLightController;




import React, {useState, useEffect} from "react";

// const TrafficLight = () =>{
//     const [ color, setColor] = useState("red");
    
//     return(
//         <div className="traffic-light bg-black p-10px m-auto d-inline-block">
//             <div 
//                 onClick={() => setColor("red")} 
//                 className={`light red ${color === "red" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 onClick={() => setColor("yellow")} 
//                 className={`light yellow ${color === "yellow" ? " glow" : ""}`}>
//             </div>
//             <div 
//                 onClick={() => setColor("green")} 
//                 className={`light green ${color === "green" ? " glow" : ""}`}>
//             </div>
//         </div>
//     )
// }

const TrafficLightController = () => {
    const [ color, setColor] = useState("red");
    
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if(color === "red") {
    //             setColor("yellow");
    //         } else if (color === "yellow") {
    //             setColor("green");
    //         } else {
    //             setColor("red");
    //         }
    //     }, 2000);
    //     return () => clearInterval(intervalId);
    // }, [color]);
    
    const handleClick = () => {
        if(color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else {
            setColor("red");
        }
    };
    
    return (
        <>
        {/* // <div className="traffic-light bg-black p-10px m-auto d-inline-block">
        //     <div 
        //         onClick={() => setColor("red")} 
        //         className={`light red ${color === "red" ? " glow" : ""}`}>
        //     </div>
        //     <div 
        //         onClick={() => setColor("yellow")} 
        //         className={`light yellow ${color === "yellow" ? " glow" : ""}`}>
        //     </div>
        //     <div 
        //         onClick={() => setColor("green")} 
        //         className={`light green ${color === "green" ? " glow" : ""}`}>
        //     </div>
        // </div> */}

        <div>
            <div className="traffic-light bg-black p-10px m-auto d-inline-block">
                <div 
                    onClick={() => setColor("red")} 
                    className={`light red ${color === "red" ? " glow" : ""}`}>
                </div>
                <div 
                    onClick={() => setColor("yellow")} 
                    className={`light yellow ${color === "yellow" ? " glow" : ""}`}>
                </div>
                <div 
                    onClick={() => setColor("green")} 
                    className={`light green ${color === "green" ? " glow" : ""}`}>
                </div>
             </div>
            {/* <TrafficLight color={color} /> */}
            <button onClick={handleClick}>Change color</button>
        </div>
        </>
    );
};

export default TrafficLightController;