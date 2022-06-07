// import sum from "./sum.js";
// import mul from "./mul.js";

import React from "react";
import ReactDom from "react-dom/client";

import("./index.css");

// console.log(mul(6,2));
// console.log(mul(6,12));

// console.log(sum(6, 12));
// console.log(sum(6, 12));

// let h1 = document.createElement("h1");
// h1.textContent="Pallav Sharma";
// h1.classList.add("red-font")

// document.querySelector("#root").append(h1);

// let div = React.createElement("div",{},[
//     React.createElement("h1",{className:"red-font"},"Hello Pallav"),
//     React.createElement("p",{},"Welcome")
// ]);

// let h1 = React.createElement("h1", { className: "red-font" }, [
//     "Hello",
//     React.createElement("i",{},"Pallav"),

// ]);

// ReactDom.render(
// <h1 class="red-font">
//     Hello<i>Pallav</i>
// </h1>,
//    document.getElementById("root"));


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <h1 class="red-font">
 Hello<i>Pallav</i>
</h1>
)