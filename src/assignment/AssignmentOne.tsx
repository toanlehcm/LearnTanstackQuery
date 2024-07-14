import React, { useEffect, useState } from "react";

export interface IAssignmentProps {}

type dataResponse = {
  name: string;
  tel: string;
  id: number;
};

export default function AssignmentOne() {
  const url = "https://6691200626c2a69f6e8e8da8.mockapi.io/api/testkit/user?id=5";
  const [stringResponse, setStringResponse] = useState<dataResponse[]>();
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStringResponse(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (stringResponse) {
      const resultTemp = [...stringResponse[0].name];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const objTemp: any = [];

      for (let i = 0; i < resultTemp.length; i++) {
        if (!objTemp.includes(resultTemp[i])) {
          objTemp.push(resultTemp[i]);
        } else {
          if (!(objTemp[objTemp.length - 1] === resultTemp[i])) {
            objTemp.push(resultTemp[i]);
          }
        }
      }

      setResult(objTemp);
    }
  }, [stringResponse]);

  return (
    <div>
      <h1>Assignment One</h1>
      <div>
        {stringResponse?.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </div>
      <div>result: {result}</div>
    </div>
  );
}
