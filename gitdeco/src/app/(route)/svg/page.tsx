"use client";
import * as S from "./style";
import bg from "../../assets/image/profilebg.svg";
import Image from "next/image";
const Svg = () => {
  return (
    <S.HeaderTitle>
      <svg width="1200" height="200" viewBox="0 0 1200 100">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          WEB Developer
        </text>
      </svg>
      <Image src={bg} alt="Background" style={{ zIndex: -1 }} />
    </S.HeaderTitle>
  );
};

export default Svg;
