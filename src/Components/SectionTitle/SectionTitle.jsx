import React from "react";

function SectionTitle({ subTitle, title }) {
  return (
    <div className="text-center mx-auto px-8 lg:w-5/12">
      <p className="text-yellow-600 font-medium text-lg italic">
        ---{subTitle}---
      </p>
      <h1 className="uppercase text-4xl font-semibold border-t-4 border-y-4 border-gray-500 py-4 my-8">
        {title}
      </h1>
    </div>
  );
}

export default SectionTitle;
