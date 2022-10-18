import React from "react";
import ReactDOM from "react-dom/client";
// import ToDoList from "./ToDoList";
// import CoinTracker from "./CoinTracker";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/movie/route/Home";
import Detail from "../src/movie/route/Detail";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <ToDoList /> */}
//     {/* <CoinTracker /> */}
//   </React.StrictMode>
// );

function App() {
  return (
    <Router>
      <Routes>
        <Route pate="detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
