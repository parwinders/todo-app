import React, { useState } from "react";

const Ratings = (props) => {
  const [active, setActive] = useState("");

  return (
    <div
      className='ratings'
      onClick={(e) => {
        props.calcPercentage(e, props.index);
        setActive(e.target.innerText);
        console.log(active);
      }}
    >
      <div className={active === "1" ? "active" : "inactive"}>1</div>
      <div className={active === "2" ? "active" : "inactive"}>2</div>
      <div className={active === "3" ? "active" : "inactive"}>3</div>
      <div className={active === "4" ? "active" : "inactive"}>4</div>
      <div className={active === "5" ? "active" : "inactive"}>5</div>
    </div>
  );
};

export default Ratings;
