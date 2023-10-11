import React from 'react';
import { Link } from 'react-scroll';
import * as S from './index.styled';
import list from '../../images/list.svg';

const Navbar: React.FC = () => {
  return (
    <S.NavbarWrapper>
      <S.Hamburger src={list} alt="list" />
      <Link to="about" smooth={true} duration={500}>
        <p>ABOUT</p>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        <p>PROJECTS</p>
      </Link>
      <Link to="tech-stack" smooth={true} duration={500}>
        <p>TECH STACK</p>
      </Link>
    </S.NavbarWrapper>
  );
};

export default Navbar;
