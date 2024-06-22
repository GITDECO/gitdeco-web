"use client";

import styled from "styled-components";

export const HeaderTitle = styled.div`
  width: 100vw;
  height: 50vh;
  svg text {
    font-family: "SBAggro", cursive;
    font-size: 6em;
    fill: #f1c164;
    stroke-width: 2px;
    stroke: white;
    stroke-dasharray: 326px;
    animation: stroke 3s linear;
  }

  @keyframes stroke {
    0% {
      stroke-dashoffset: 326px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
`;
