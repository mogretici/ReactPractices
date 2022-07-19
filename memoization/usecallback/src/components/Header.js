import React from "react";

function Header({ number, increment }) {
  console.log("Header re-rendered");
  return <div>
    Header - {number} <br /> <br />
    <button onClick={increment}>Increase</button>
  </div>;
}

export default React.memo(Header);
