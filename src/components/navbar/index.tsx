import React from 'react';
import * as S from './index.styled';

const Navbar: React.FC = () => {
  return <S.NavbarWrapper>
    <p>ABOUT</p>
    <p>PROJECTS</p>
    <p>TECH STACK</p>
    {/* <S.NavbarItem>ABOUT</S.NavbarItem> */}
    {/* <S.NavbarItem>PROJECTS</S.NavbarItem> */}
    {/* <S.NavbarItem>TECH STACK</S.NavbarItem> */}
  </S.NavbarWrapper>;
}

export default Navbar;
