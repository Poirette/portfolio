import * as React from "react";

function SvgFlow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 317"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <defs>
        <linearGradient
          x1="16.107%"
          y1="58.187%"
          x2="72.709%"
          y2="72.89%"
          id="flow_svg__a"
        >
          <stop stopColor="#FFD441" offset="0%" />
          <stop stopColor="#FFB047" offset="100%" />
        </linearGradient>
        <linearGradient x1="70.213%" y1="65.797%" y2="0%" id="flow_svg__b">
          <stop stopColor="#FFD754" offset="0%" />
          <stop stopColor="#FFB532" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="22.178%"
          y1="66.138%"
          x2="22.178%"
          y2="9.316%"
          id="flow_svg__c"
        >
          <stop stopColor="#FFD642" offset="0%" />
          <stop stopColor="#FFD441" offset="0%" />
          <stop stopColor="#FFB532" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="88.953%"
          y1="24.298%"
          x2="12.579%"
          y2="6.966%"
          id="flow_svg__d"
        >
          <stop stopColor="#FFD441" offset="0%" />
          <stop stopColor="#FFA829" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M211.69 309.979V228.12h-81.201l81.2 81.858"
        fillOpacity={0.7}
        fill="#FFDF51"
      />
      <path
        d="M220.801 263.566v-88.533H132.98l87.822 88.533"
        fillOpacity={0.7}
        fill="#FF8900"
      />
      <path
        d="M167.467 228.118v88.534h87.822l-87.822-88.534"
        fillOpacity={0.7}
        fill="url(#flow_svg__a)"
      />
      <path
        d="M202.444 180.962v-70.027h-69.467l69.467 70.027"
        fillOpacity={0.7}
        fill="#FFDF4F"
      />
      <path
        d="M235.424 164.267V75.733h-87.822l87.822 88.534"
        fillOpacity={0.8}
        fill="url(#flow_svg__b)"
      />
      <path
        d="M85.735 0v88.533h87.822L85.735 0"
        fillOpacity={0.8}
        fill="url(#flow_svg__c)"
      />
      <path
        d="M106.334 138.667V50.133H.135l87.443 88.552 18.756-.018"
        fillOpacity={0.88}
        fill="url(#flow_svg__d)"
      />
      <path
        d="M106.334 316.175V209.067H.135l106.199 107.108"
        fillOpacity={0.7}
        fill="#FFB700"
      />
      <path
        d="M106.357 227.467v-88.534H18.535l87.822 88.534"
        fillOpacity={0.5}
        fill="#FFB700"
      />
      <path
        d="M132.976 110.933v88.534h87.823l-87.823-88.534"
        fillOpacity={0.7}
        fill="#FFCD25"
      />
      <path
        d="M106.135 120.9V32.365H18.313l87.822 88.533m24.354 107.22v88.534h87.822l-87.822-88.534"
        fillOpacity={0.7}
        fill="#FF8900"
      />
    </svg>
  );
}

export default SvgFlow;
