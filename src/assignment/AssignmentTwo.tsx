/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const compressString = (str: string) => {
  let compressed = "";
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    // If next character is different than current, append this char to result
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed += str[i] + countConsecutive;
      countConsecutive = 0;
    }
  }

  return compressed.length < str.length ? compressed : str;
};

export default function AssignmentTwo() {
  const stringInput = "aabcccccaaa";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleCompress = () => {
    setOutput(compressString(input));
  };

  return (
    <div>
      <h1>Assignment Two</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleCompress}>Compress</button>
      <div>String input: {stringInput}</div>
      <div>Compressed string: {output}</div>
    </div>
  );
}
