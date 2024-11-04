import React from "react";

function Button({ handleClick, count }) {
  return <button onClick={handleClick}>Clicked {count} Times</button>;
}

export default Button;