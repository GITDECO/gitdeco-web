"use client";

import styled from "styled-components";

export const HeaderTitle = styled.text`
  font-family: "Staatliches", cursive;
  font-size: 4em;
  stroke-width: 1px;
  stroke: #10132c;
  stroke-dasharray: 326px;
  animation: stroke 3s linear;

  @keyframes stroke {
    0% {
      stroke-dashoffset: 326px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }
`;
