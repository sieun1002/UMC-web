import React from "react";
import adImage from "../images/Untitled.svg";

export default function Ad({ showAd }) {
  if (showAd) {
    return (
      <div>
        <img src={adImage} alt="광고 배너" />
      </div>
    );
  } else {
    return null;
  }
}
