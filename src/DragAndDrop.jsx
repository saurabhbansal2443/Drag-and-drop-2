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
    <div style={style?.root}>
      {mainHeadings.map((heading) => {
        return (
          <div style={style?.container}>
            <p style={style?.heading} key={heading}>
              {heading.replace("_", " ")}
            </p>
            <div style={style?.box}>
              {data[heading].map((taskObj) => {
                return (
                  <div style={style?.taskContainer} key={taskObj.id}>
                    {taskObj.title}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;

const style = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    width: "25%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    width: "100%",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "#F5FBE6",
    borderRadius: 6,
    border: "1px solid #215E61",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
  taskContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,

    padding: "15px",
    margin: "10px",
    backgroundColor: "#FE7F2D",
    color: "white",
  },
};
