import React from "react";
import "./Images.css";
export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images">
        {props.images.map(function(image, index) {
          return (
            <span key={index}>
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img src={image.src.medium} alt="keyword" title={image.alt} />
              </a>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
