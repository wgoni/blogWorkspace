import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ROUTES from '../../constants/routes';

const StyledSidebar = styled.aside`
  top: ${({ adjustHeight }) => `${adjustHeight}px`};
  width: ${({ isOpen }) => (isOpen ? '200px' : '60px')};
  height: ${({ adjustHeight }) => `calc(100vh - ${adjustHeight}px)`};
  background-color: #2c3e50;
  color: white;
  transition: width 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 1rem;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    display: block;
  }

  &:hover {
    background-color: #34495e;
  }
`;

const Sidebar = ({ adjustHeight, isOpen }) => {
  return (
    <StyledSidebar adjustHeight={adjustHeight} isOpen={isOpen}>
      <MenuList>
        <MenuItem>
          <Link to={ROUTES.HOME}>🏠 홈</Link>
        </MenuItem>
        <MenuItem>
          <Link to={ROUTES.LOGIN}>🔑 로그인</Link>
        </MenuItem>
      </MenuList>
    </StyledSidebar>
  );
};

export default Sidebar;