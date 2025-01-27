import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(input);
    }, 3000);
    //console.log(id);
    return () => {
      clearTimeout(id);
    };
  }, [input]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Debouncing;
