// import { Link } from "react-router-dom";

import React, { useState } from "react";

const Home = () => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
      setShowText(!showText);
    };
 
  return (
    <div className="home">
      <div>
        <h1> Redux Challenge</h1>
        <button>start the work</button>
        <div
          onClick={handleClick}
          style={{ cursor: "pointer" ,color:"red",paddingTop:"10px"}}
        >
          Click for hint
        </div>
        {showText && (
          <div style={{ marginTop: "10px" }}>
          you should use a "Link" here of the react router dom so u link it to the crud component 
          <br/>
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Home