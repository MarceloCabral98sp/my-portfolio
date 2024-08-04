import styled from "styled-components";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  // }

  return (
    <Nav>
      <Logo>MARCELO CABRAL</Logo>
      <MobileMenu
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </MobileMenu>
      <Menu className={menuOpen ? "open" : ""}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#sobre">Sobre</MenuItem>
        <MenuItem href="#resume">Projetos</MenuItem>
        <MenuItem href="#contact">Contato</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Logo = styled.h1`
  color: #333333;

  @media (max-width: 600px) {
    font-size: 16px
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 600px) {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 16px;
    transform: translateY(-10px);

    &.open {
      display: flex;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuItem = styled.a`
  display: block;
  color: #333333;
  text-decoration: none;
  border-radius: 0.5rem;

  &:hover {
    color: #087ea4;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;
  width: 36px;
  height: 32px;
  right: 24px;
  transition: transform 0.3s ease;

  div {
    width: 100%;
    height: 2px;
    margin: 8px;
    background: black;
    transition: all 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

export default Header;
