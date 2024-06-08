"use client";

import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  background-color: black;
  box-sizing: border-box;
  border-bottom: 1px solid #3d4145;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoTxt = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.5vw;
  margin-top: 0.5vw;
  margin-left: 0.5vw;
`;

export const LogoImage = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

export const DownloadBtn = styled.button`
  width: 7vw;
  height: 1vh;
  padding: 15px;
  background-color: #2B64E7;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size:1vw;
  margin-bottom: 0.5vw;

  display:flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #6062AA;
  }
`;