import React, { useEffect, useState } from "react";

export interface IAssignmentProps {}

const fetchData = async () => {
  try {
    const url = "https://6691200626c2a69f6e8e8da8.mockapi.io/api/testkit/user?id=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.error("error", error);
    return "";
  }
};

const removeConsecutiveDuplicates = (str: string) => {
  if (!str) return;

  let result = str[0]; // Start with the first character

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      result += str[i];
    }
  }

  return result;
};

export default function AssignmentOneWay2() {
  const [stringData, setStringData] = useState();
  const [stringResult, setStringResult] = useState<string | null>();

  const getDataAPI = async () => {
    const data = await fetchData();
    setStringData(data[0].name);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  useEffect(() => {
    if (stringData) {
      const result = removeConsecutiveDuplicates(stringData);
      setStringResult(result || "");
    }
  }, [stringData]);

  return (
    <div>
      <h1>Assignment One</h1>
      <div>String Data: {stringData}</div>
      <div>result: {stringResult}</div>
    </div>
  );
}
