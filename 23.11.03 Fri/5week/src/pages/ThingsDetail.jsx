import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { ThingsDetailImage } from "../styles/Things.style.jsx";

export default function ThingsDetail() {
  const { title } = useParams();
  const location = useLocation();
  const imgPath = location.state.imgPath;

  console.log(location);
  console.log(location.state.imgPath);

  return (
    <>
      <ThingsDetailImage src={`${imgPath}`} alt={`${title}`} />
      <div>{title}</div>
    </>
  );
}
