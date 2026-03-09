const Emptyy = () => {
  return (
    <div className="text-[#000000] text-center  h-full flex items-center justify-center">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Shadow --> */}
        <ellipse cx="80" cy="120" rx="35" ry="8" fill="#d1d5db" opacity="0.5">
          <animate
            attributeName="ry"
            values="8;6;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* <!-- 3D Box --> */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -6; 0 0"
            dur="2s"
            repeatCount="indefinite"
          />

          {/* <!-- Front --> */}
          <rect x="45" y="60" width="70" height="40" rx="6" fill="#007f24" />

          {/* <!-- Top --> */}
          <polygon points="45,60 80,40 115,60 80,80" fill="#009933" />

          {/* <!-- Side --> */}
          <polygon points="115,60 115,100 80,120 80,80" fill="#00661d" />
        </g>

        {/* <!-- Text --> */}
        <text
          x="80"
          y="145"
          text-anchor="middle"
          font-size="12"
          fill="#9ca3af"
          font-family="Arial, sans-serif"
        >
          No Products
        </text>
      </svg>
    </div>
  );
};
export default Emptyy;
