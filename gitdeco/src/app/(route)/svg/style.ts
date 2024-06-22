import styled from "styled-components";

export const HeaderTitle = styled.div`
  background-color: white;
  width: 100%;
  height: 50vh;
  background-color: white;
  background-size: cover;
  background-position: center;
  position: relative;

  svg {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text {
      font-family: "SBAggro", cursive;
      font-size: 6em;
      fill: #f1c164;
      stroke-width: 2px;
      stroke: white;
      stroke-dasharray: 500px;
      animation: stroke 3s linear;
    }
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
