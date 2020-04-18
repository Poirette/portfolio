import * as React from "react";

function SvgSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 480"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width="1em"
      height="1em"
      {...props}
    >
      <g transform="translate(211.646 -31.057)">
        <circle
          r={74.89}
          transform="translate(113.731 271.057)"
          fill="#F1A420"
        />
        <g
          fill="none"
          stroke="#FFC875"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M110.148 157.857v-23.56M43.608 179.477l-13.84-19.06M6.071 232.437l-22.4-7.28M6.071 302.397l-22.4 7.28M47.191 362.637l-13.84 19.06M113.731 372.166v24.671M176.688 362.637l17.423 19.06M217.808 306.037l22.4 7.28M217.808 236.077l22.4-8.443M176.688 179.477l13.84-19.06" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSun;
