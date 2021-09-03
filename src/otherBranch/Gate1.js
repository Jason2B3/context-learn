import React from "react";
import Gate2 from "./Gate2";
import BBB from "../contexts/MultiplyContext";
export default function Gate1() {
  return (
    <BBB>
      <Gate2 />
    </BBB>
  );
}
