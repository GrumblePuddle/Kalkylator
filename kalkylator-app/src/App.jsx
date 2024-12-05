import { useState } from "react";

function App() {
  return (
    <div className="kalkylator">
      <div className="input-container">
        <input type="text" className="input" />
      </div>
      <div className="container">
        <div className=" item item-1">
          <button>CE</button>
        </div>
        <div className=" item item-2">
          <button>%</button>
        </div>
        <div className="item item-3">
          <button>7</button>
        </div>
        <div className="item item-4">
          <button>8</button>
        </div>
        <div className="item item-5">
          <button>9</button>
        </div>
        <div className="item item-6">
          <button>/</button>
        </div>
        <div className="item item-7">
          <button>4</button>
        </div>
        <div className="item item-8">
          <button>5</button>
        </div>
        <div className="item item-9">
          <button>6</button>
        </div>
        <div className="item item-10">
          <button>x</button>
        </div>
        <div className="item item-11">
          <button>1</button>
        </div>
        <div className="item item-12">
          <button>2</button>
        </div>
        <div className="item item-13">
          <button>3</button>
        </div>
        <div className="item item-14">
          <button>-</button>
        </div>
        <div className="item item-15">
          <button>0</button>
        </div>
        <div className="item item-16">
          <button>.</button>
        </div>
        <div className="item item-17">
          <button>=</button>
        </div>
        <div className="item item-18">
          <button>+</button>
        </div>
        <div className="item item-19">
          <button>ON/C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
