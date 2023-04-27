import React from "react";

export default function sideBar(props) {
  const { data } = props;
  const handleChangeDivRef = (index) => {

    props.changeDiv(index);
  };
  return (
    <div className="xl:w-[25vw] md:w-[25vw] bg-bgSidebar text-primaryText hidden xl:block">
      <div className="my-28 flex justify-center">
        <img src={"https://contenterra.com/images/logo.png"} alt={"manoj"} />
      </div>
      <div className="flex justify-center text-14 font-700">Navigate To</div>
      <div className="h-[70vh] overflow-y-auto flex flex-col items-center">
        {data.children.map((item, index) => {
          return (
            <button
              className="text-center border-1 border-primary-main p-10 rounded-8 my-10 hover:border-hoverBorder "
              onClick={() => handleChangeDivRef(index)}
            >
              {item.data["title"]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
