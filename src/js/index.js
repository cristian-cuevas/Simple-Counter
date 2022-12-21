//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
setInterval(() => {
    counter ++
    const uno = counter / 1;
    const dos = counter / 10;
    const tres = counter / 100;
    const cuatro = counter / 1000;
    const cinco = counter / 10000;
    const seis = counter / 100000;



    ReactDOM.render(<Home uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />, document.querySelector("#app"));
}, 1);
    
