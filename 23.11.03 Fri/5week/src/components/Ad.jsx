import React from "react";
import adImage from "../images/Untitled.svg";
import { Img } from "../styles/Ad.style";

export default function Ad({ showAd }) {
  if (showAd) {
    return (
      <div>
        <Img src={adImage} alt="광고 배너" />
      </div>
    );
  } else {
    return null;
  }
}
