import React from "react";
import parse from "html-react-parser";

const Description = ({ ...epData }) => {
  return (
    <div>
      <div className="text-sm">{parse(epData.description)}</div>
    </div>
  );
};

export default Description;
