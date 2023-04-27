import React from "react";

const Card = (props) => {
  const { data, ind } = props;
  let testHtml = `${data.data["selftext_html"]}`;
  const htmlDecode = () => {
    let e = document.createElement("div");
    e.innerHTML = testHtml;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };
  return (
    <div
      className=" w-[100vw] xl:w-[75vw]  bg-field rounded-xl text-primaryText text-10 m-16 pb-14 relative break-words p-20"
      id={ind}
    >
      <div className="text-secondaryText text-14 mb-20">
        Title: {data.data["title"]}
      </div>
      <div
        key={1}
        dangerouslySetInnerHTML={{
          __html: htmlDecode(),
        }}
      />
      <div className="flex items-center my-16 relative ">
        <div>Url: </div>
        <a
          href={data.data["url"]}
          target="_blank" rel="noopener noreferrer"
          className="w-[80vw] break-words ml-4 relative text-linkText"
        >
          {data.data["url"]}
        </a>
      </div>
      <div className="flex items-center my-16">
        <div>Score: </div>
        <div className="text-primary-main ml-4">{data.data["score"]}</div>
      </div>
    </div>
  );
};
export default Card;
