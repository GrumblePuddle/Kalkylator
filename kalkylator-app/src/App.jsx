import { useState, useRef, useEffect } from "react";

function App() {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [input, setInput] = useState("");
  const [on, setOn] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(console.log(firstNum));
  }, []);

  const addNum = (num) => {
    setFirstNum((f) => f + num);
  };

  const handleOperator = (opr) => {
    setOperator(opr);
    setSecondNum(firstNum);
    setFirstNum("");
  };

  // const calculation = () => {
  //   let result;
  //   if (operator === "+") {
  //     result = firstNum + secondNum;
  //   } else if (operator === "-") {
  //     result = firstNum - secondNum;
  //   } else if (operator === "/") {
  //     result = firstNum / secondNum;
  //   } else if (operator === "x") {
  //     result = firstNum * secondNum;
  //   }
  // };

  const turnOn = () => {
    setOn(!on);
    if (on) {
      inputRef.current.value = "0";
    } else {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="kalkylator">
      <div className="input-container">
        <input type="text" className="input" ref={inputRef} />
      </div>
      <div className="container">
        <div className=" item item-1">
          <button>🥑</button>
        </div>
        <div className=" item item-2">
          <button>🎄</button>
        </div>
        <div className="item item-3">
          <button onClick={() => addNum("7")}>7</button>
        </div>
        <div className="item item-4">
          <button>8</button>
        </div>
        <div className="item item-5">
          <button>9</button>
        </div>
        <div className="item item-6">
          <button onClick={handleOperator}>/</button>
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
          <button onClick={handleOperator}>x</button>
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
          <button onClick={handleOperator}>-</button>
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
          <button onClick={handleOperator}>+</button>
        </div>
        <div className="item item-19">
          <button onClick={turnOn}>ON/C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
