import React, { useState } from "react";

// const InputElement = () => {
//   const [inputData, updateInputData] = useState("");
//   const [inputHistoryDataList, updateHistoryData] = useState([]);
//   const onChangeHandler = (event) => {
//     updateInputData(event.target.value);
//     updateHistoryData([...inputHistoryDataList, event.target.value]);
//   };
//   return (
//     <div>
//       <input
//         placeholder="Enter Text Here"
//         value={inputData}
//         onChange={onChangeHandler}
//         style={{display: "block"}}
//       ></input>
//       {inputData}
//       <br></br>
//       <br></br>
//         {inputHistoryDataList.map((item) =>  <div>{item}</div>)}
//     </div>
//   );
// };

const InputElement = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState([]);

  const onChnageHandler = (e) => {
    setInputValue(e.target.value);
    setInputValue1([...inputValue1, e.target.value]);
  }
  
  return (
    <div>
      <div>{inputValue}</div>
      <input
    onChange={onChnageHandler}
    placeholder="Enter some text"
    style={{display: "block"}}
  />
  {inputValue1.map((item) =>  <div>{item}</div>)}
  </div>
  );
  // return React.createElement(
  //   "input",
  //   {
  //     placeholder: "Enter some text",
  //     onChange: (e) => {
  //       setInputValue(e.target.value);
  //     },
  //   },
  //   null
  // );
};

export default InputElement;
