import React from "react";
import { tves } from "../tvDummy.js";
import Things from "../components/Things.jsx";
import { Div } from "../styles/Things.style.jsx";

export default function TV() {
  return (
    <Div>
      {tves.results.map((tv, index) => (
        <Things key={index} things={tv} media="TV" />
      ))}
    </Div>
  );
}
