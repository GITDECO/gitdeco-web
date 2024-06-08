import * as S from "./style";
import Image from "next/image";
import LogoIco from "/public/gitdeco.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <S.LogoImage>
          <Image src={LogoIco} alt="Logo Img" layout="fill" objectFit="contain" />
        </S.LogoImage>
        <S.LogoTxt>GitDeco</S.LogoTxt>
      </S.Logo>
      <S.DownloadBtn>Download</S.DownloadBtn>
    </S.HeaderContainer>
  );
};

export default Header;
