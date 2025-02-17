import React from "react";

function Cover({ img, title, subTitle }) {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
