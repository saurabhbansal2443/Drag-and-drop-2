import React, { useEffect } from "react";
import { useState } from "react";

const DragAndDrop = ({ data: intialData }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("drag-item");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return intialData;
    }
  });
  useEffect(() => {
    localStorage.setItem("drag-item", JSON.stringify(data));
  }, [data]);
  const mainHeadings = Object.keys(data); // ["Office_Task","Home_Task","Sunday_Task"]

  console.log("mainHeadings", mainHeadings);
  return (
    <div>
      {mainHeadings.map((heading) => {
        return (
          <div>
            <p key={heading}>{heading}</p>
            {data[heading].map((taskObj) => {
              return <div key={taskObj.id}>{taskObj.title}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;
