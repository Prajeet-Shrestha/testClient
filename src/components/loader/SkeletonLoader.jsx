import React from "react";
import "./loader.css";
function SkeletonLoader({ height, width }) {
  return <div className='skeleton' style={{ height: height, width: width }}></div>;
}

export default SkeletonLoader;
