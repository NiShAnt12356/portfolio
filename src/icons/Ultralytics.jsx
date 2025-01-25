import * as React from "react";
const SvgUltralytics = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 260 222"
    fill="none"
    {...props}
    style={{ filter: "grayscale(90%)" }}
  >
    <g clipPath="url(#ultralytics_svg__a)">
      <mask
        id="ultralytics_svg__b"
        width={262}
        height={224}
        x={-1}
        y={-1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M260.343-.25H-.344v222.5h260.687z" />
      </mask>
      <g mask="url(#ultralytics_svg__b)">
        <path
          fill="url(#ultralytics_svg__c)"
          d="m137.609 60.83-.032 31.114c.106 42.461-34.555 77.114-76.891 77.066-16.817-.026-32.124-5.141-44.53-14.091 22.254 40.001 64.937 67.015 113.468 67.042 70.504-.064 128.783-57.453 129.896-127.992l-.016-.294c.065-1.625.002-31.702.081-33.033-.089-33.467-27.456-60.97-60.935-60.88-33.634-.05-61.146 27.307-61.041 61.068"
        />
        <path
          fill="#0B23A9"
          d="M60.618 31.064c-33.615 0-60.962 27.338-60.962 60.942 0 33.601 27.347 60.94 60.962 60.94s60.963-27.339 60.963-60.94c0-33.604-27.347-60.942-60.963-60.942"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="ultralytics_svg__c"
        x1={73.207}
        x2={212.751}
        y1={219.868}
        y2={65.232}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09DBF0" />
        <stop offset={1} stopColor="#0B23A9" />
      </linearGradient>
      <clipPath id="ultralytics_svg__a">
        <path fill="#fff" d="M0 0h260v222H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgUltralytics;
