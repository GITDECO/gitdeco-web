"use client";

import React, { useState, useEffect, FC } from "react";
import { ClipLoader } from "react-spinners";
import * as S from "./style";
import { IconBaseProps } from "react-icons";

import { RiProfileLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import DetailSidebar from "./DetailSidebar";

const Sidebar: FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [iconsLoaded, setIconsLoaded] = useState<boolean>(false);
  const [showDetailSidebar, setShowDetailSidebar] = useState(false);

  useEffect(() => {
    setIconsLoaded(true);
  }, []);

  const handleIconClick = (icon: string) => {
    if (selectedIcon === icon) {
      setShowDetailSidebar(!showDetailSidebar);
    } else {
      setSelectedIcon(icon);
      setShowDetailSidebar(true);
    }
  };

  const getIconProps = (icon: string): IconBaseProps => ({
    color: selectedIcon === icon ? "#E7E7E8" : "#909294",
    size: selectedIcon === icon ? 38 : 34,
    onClick: () => handleIconClick(icon),
    style: { transform: selectedIcon === icon ? "scale(1.1)" : "scale(1)" },
  });

  if (!iconsLoaded) {
    return (
      <S.LoadingIcon>
        <ClipLoader color="#E7E7E8" loading={!iconsLoaded} size={50} />
      </S.LoadingIcon>
    );
  }

  return (
    <>
      {!iconsLoaded ? (
        <S.LoadingIcon>
          <ClipLoader color="#E7E7E8" loading={!iconsLoaded} size={50} />
        </S.LoadingIcon>
      ) : (
        <S.Container>
          <S.SidebarContainer>
            <S.IconWrapper>
              <FaRegAddressCard {...getIconProps("FaRegAddressCard")} />
              <RiProfileLine {...getIconProps("RiProfileLine")} />
              <AiOutlineFundProjectionScreen
                {...getIconProps("AiOutlineFundProjectionScreen")}
              />
            </S.IconWrapper>
          </S.SidebarContainer>
          <DetailSidebar option={selectedIcon} show={showDetailSidebar} />
        </S.Container>
      )}
    </>
  );
};

export default Sidebar;
