import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const validCode = "🐡🐠🐋";
  const [totalCode, setTotalCode] = useState('')
  
  function handleClick(e) {
    setTotalCode('')

    setTotalCode(totalCode + e.target.innerText);

    // totalCode.length <= 3
    //   ? setTotalCode(totalCode + e.target.innerText)
    //   : setTotalCode(totalCode);
  }
  // console.log(codeItem)
  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={()=>setTotalCode('')}>
        Reset
      </button>
      <h2>{totalCode}</h2>

      {totalCode === validCode && <p>Valid code!</p>}
    </div>
  );
}
