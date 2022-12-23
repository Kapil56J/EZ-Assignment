import React from "react";
import Left from "./components/Left/Test";
import Right from "./components/Right/Right";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Left />
          </div>
          <div className="col-8">
            <div className="row">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
