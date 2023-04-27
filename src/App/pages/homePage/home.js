import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import SideBar from "../../components/Sidebar";
import Slide from "@mui/material/Slide";
import { CircularProgress } from "@mui/material";
export default function home() {
  const [data, setData] = useState();
  const containerRef = useRef(null);
  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (!data)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );

  return (
    <div className="flex flex-row ">
      <SideBar
        data={data.data}
        changeDiv={(index) => {
          handleClickScroll(index);
        }}
      />
      <div className="flex flex-col items-center w-full text-primaryText text-20 font-500">
        <div>JSON TO UI</div>
        <div>{data.kind}</div>

        <div className="w-full flex flex-col items-center xl:h-[87vh] overflow-y-scroll">
          {data.data.children.map((item, index) => {
            return (
              <div ref={containerRef} className="my-32">
                {/* <Slide
                  direction="up"
                  // in={checked}
                  container={containerRef.current}
                > */}
                  <Card data={item} key={item} ind={index} />
                {/* </Slide> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
