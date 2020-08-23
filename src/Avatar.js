import React from "react";

import "./Avatar.css";

export default function Avatar({ size, shape, sizeText }) {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/400/400"
        className={`${size} ${shape}`}
        alt="image"
      ></img>
      <p>
        size: <span>{`${size}`}</span> with {`${sizeText}`}px
      </p>
      <p>
        type: <span>{`${shape}`}</span>
      </p>
      {console.log(size)}
    </div>
  );
}
