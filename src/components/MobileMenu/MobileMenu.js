/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss}>
      <Content>
        <UnstyledButton onClick={onDismiss} className="modal__close-button">
          <Icon id="close" strokeWidth={2} />
        </UnstyledButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  position: relative;
  background: white;

  display: flex;
  flex-direction: column;

  & button {
    flex-shrink: 0;
    width: fit-content;
  }

  .modal__close-button {
    position: absolute;
    top:20px;
    right:20px;
  }

  @media ${QUERIES.tabletAndUp} {
    position: relative;
    border-radius: 8px;
    width: 65%;
  }

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  margin: 30px 20px;
  padding-top:60px;
  flex-direction: column;
  align-items: center;
  flex: 10;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Footer = styled.footer`
  flex: 1;
  margin-top: auto;

  padding: 15px 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-self:center;
  text-align: center;
  gap: 15px;
  font-size: .75rem
`;
