import React, { useState } from "react";
import { RotateLoader } from "react-spinners";
import "./Loading.css";

const Loading = (props) => {
  //   const [load, setLoad] = useState(false);
  console.log(props.name);
  return (
    <>
      {props.name == true ? (
        <>
          <div className="loading-main">
            <RotateLoader
              color="#1a0818"
              margin={0}
              size={15}
              speedMultiplier={0.6}
            />{" "}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
