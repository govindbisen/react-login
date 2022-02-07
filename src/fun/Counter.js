import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>{" "}
    </div>
  );
}
