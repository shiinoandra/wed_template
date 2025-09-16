"use client";


import "./styles/loading.css"

export default function LoadingScreen() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="gunungan-spinner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <rect
    fill="#FFA85B"
    stroke="#FFA85B"
    strokeWidth={15}
    width={30}
    height={30}
    x={25}
    y={50}
  >
    <animate
      attributeName="y"
      calcMode="spline"
      dur={2}
      values="50;120;50;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin="-.4"
    />
  </rect>
  <rect
    fill="#FFA85B"
    stroke="#FFA85B"
    strokeWidth={15}
    width={30}
    height={30}
    x={85}
    y={50}
  >
    <animate
      attributeName="y"
      calcMode="spline"
      dur={2}
      values="50;120;50;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin="-.2"
    />
  </rect>
  <rect
    fill="#FFA85B"
    stroke="#FFA85B"
    strokeWidth={15}
    width={30}
    height={30}
    x={145}
    y={50}
  >
    <animate
      attributeName="y"
      calcMode="spline"
      dur={2}
      values="50;120;50;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin={0}
    />
  </rect>
</svg>


        </div>
        <div className="loader-text">
          Memuat
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
}