import * as S from "./style";
import React, { FC } from "react";

interface DetailSidebarProps {
  option: string | null;
  show: boolean;
}

const DetailSidebar: FC<DetailSidebarProps> = ({ option, show }) => {
  console.log(show);
  return (
    <S.DetailSidebarContainer show={show}>
      <div style={{ color: "#ffffff" }}>{option}</div>
    </S.DetailSidebarContainer>
  );
};

export default DetailSidebar;
