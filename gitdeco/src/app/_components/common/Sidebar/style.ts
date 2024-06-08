"use client";

import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: relative;
  width: 5vw;
  height: 92vh;
  background-color: black;
  border-right: 1px solid #3d4145;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWraper = styled.div`
  margin-top: 5vh;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 10px 0;
    transition:
      color 0.3s ease,
      transform 0.3s ease;
  }
`;
