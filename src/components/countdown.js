import React, { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      {count === 0 && <p>Happy New Year!</p>}
    </div>
  );
}

export default Countdown;
