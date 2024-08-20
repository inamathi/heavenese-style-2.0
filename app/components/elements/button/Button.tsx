import React from "react";

export const CategoryButton = ({ buttonLabel }: any) => {
  return (
    <button className="block mx-auto mt-4 bg-slate-700 py-2 px-4 text-white">
      {buttonLabel}
    </button>
  );
};
