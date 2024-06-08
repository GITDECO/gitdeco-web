"use client";

import styled from "styled-components";

interface DetailSidebarContainerProps {
  show: boolean;
}

export const DetailSidebarContainer = styled.div<DetailSidebarContainerProps>`
  z-index: 0;
  position: relative;
  width: 16vw;
  height: 92vh;
  background-color: #090c10;
  border-right: 1px solid #3d4145;
  color: white;

  border-radius: 20px;

  transform: ${({ show }) =>
    show
      ? "translate(calc(var(--side-bar-width) * -0.8), 0)"
      : "translate(-100%, 0)"};
  transition: 0.5s;
`;
