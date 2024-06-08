"use client";

import React, { useState } from "react";
import * as S from "./style";
import { RiProfileLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const handleIconClick = (icon: string) => {
    setSelectedIcon(icon);
  };

  const getIconProps = (icon) => ({
    color: selectedIcon === icon ? "#E7E7E8" : "#909294",
    size: selectedIcon === icon ? 38 : 34,
    onClick: () => handleIconClick(icon),
    style: { transform: selectedIcon === icon ? "scale(1.1)" : "scale(1)" },
  });

  return (
    <S.SidebarContainer>
      <S.IconWraper>
        <FaRegAddressCard {...getIconProps("FaRegAddressCard")} />
        <RiProfileLine {...getIconProps("RiProfileLine")} />
        <AiOutlineFundProjectionScreen
          {...getIconProps("AiOutlineFundProjectionScreen")}
        />
      </S.IconWraper>
    </S.SidebarContainer>
  );
};

export default Sidebar;
