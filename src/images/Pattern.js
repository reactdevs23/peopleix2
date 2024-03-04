import React from "react";

const Pattern = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={128}
      height={364}
      fill="none"
    >
      <path
        fill={color}
        d="M108.948 363.484v-19.046h19.047v19.046h-19.047ZM108.948 306.203v-19.047h19.047v19.047h-19.047ZM108.948 248.911v-19.046h19.047v19.046h-19.047ZM108.948 191.63v-19.047h19.047v19.047h-19.047ZM108.948 134.349v-19.047h19.047v19.047h-19.047ZM108.948 77.052V58.005h19.047v19.047h-19.047Z"
      />
      <mask
        id="a"
        width={20}
        height={21}
        x={108}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M108 .214h20V20h-20V.214Z" />
      </mask>
      <g mask="url(#a)">
        <path fill={color} d="M108.948 19.771V.724h19.047v19.047h-19.047Z" />
      </g>
      <path
        fill={color}
        d="M54.51 363.484v-19.046h19.047v19.046H54.51ZM54.51 306.203v-19.047h19.047v19.047H54.51ZM54.51 248.911v-19.046h19.047v19.046H54.51ZM54.51 191.63v-19.047h19.047v19.047H54.51ZM54.51 134.349v-19.047h19.047v19.047H54.51ZM54.51 77.052V58.005h19.047v19.047H54.51Z"
      />
      <mask
        id="b"
        width={22}
        height={21}
        x={53}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M53.333.214h21.334V20H53.333V.214Z" />
      </mask>
      <g mask="url(#b)">
        <path fill={color} d="M54.51 19.771V.724h19.047v19.047H54.51Z" />
      </g>
      <mask
        id="c"
        width={21}
        height={20}
        x={0}
        y={344}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 344H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#c)">
        <path fill={color} d="M.073 363.484v-19.046H19.12v19.046H.073Z" />
      </g>
      <mask
        id="d"
        width={21}
        height={21}
        x={0}
        y={286}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 286.667H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#d)">
        <path fill={color} d="M.073 306.203v-19.047H19.12v19.047H.073Z" />
      </g>
      <mask
        id="e"
        width={21}
        height={21}
        x={0}
        y={229}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 229.333H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#e)">
        <path fill={color} d="M.073 248.911v-19.046H19.12v19.046H.073Z" />
      </g>
      <mask
        id="f"
        width={21}
        height={20}
        x={0}
        y={172}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 172H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#f)">
        <path fill={color} d="M.073 191.63v-19.047H19.12v19.047H.073Z" />
      </g>
      <mask
        id="g"
        width={21}
        height={21}
        x={0}
        y={114}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 114.667H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#g)">
        <path fill={color} d="M.073 134.349v-19.047H19.12v19.047H.073Z" />
      </g>
      <mask
        id="h"
        width={21}
        height={21}
        x={0}
        y={57}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073 57.333H20v20H.073v-20Z" />
      </mask>
      <g mask="url(#h)">
        <path fill={color} d="M.073 77.052V58.005H19.12v19.047H.073Z" />
      </g>
      <mask
        id="i"
        width={21}
        height={21}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.073.214H20V20H.073V.214Z" />
      </mask>
      <g mask="url(#i)">
        <path fill={color} d="M.073 19.771V.724H19.12v19.047H.073Z" />
      </g>
    </svg>
  );
};

export default Pattern;
