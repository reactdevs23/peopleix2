import React from "react";

const Arrow = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 343 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M275.5 142.5C280.81 146.8 286.14 151.14 291.5 155.5C296.55 159.88 301.88 163.88 307.5 167.5C311.57 171.9 316.23 175.57 321.5 178.5C327.54 183.87 333.87 188.87 340.5 193.5C341.6 194.6 342.27 195.94 342.5 197.5C334.46 203.84 326.46 210.18 318.5 216.5C304.17 227.83 289.83 239.17 275.5 250.5C274.5 250.83 273.83 251.5 273.5 252.5C262.875 260.62 252.375 268.95 242 277.5C241.5 265.5 241.333 253.5 241.5 241.5C197.85 242.33 155.85 234.5 115.5 218C77.014 200.69 47.181 173.86 26 137.5C4.94703 94.18 -3.05298 48.52 2.00002 0.5C4.14902 24.28 11.483 46.28 24 66.5C46.798 99.35 77.298 122.18 115.5 135C156.421 148.37 198.421 154.53 241.5 153.5C241.168 141.15 241.501 128.82 242.5 116.5C253.519 125.19 264.52 133.86 275.5 142.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;