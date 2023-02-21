import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SectionStyles = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
`;

export const MovieImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
`;

export const SectionAdditional = styled.div`
  padding-top: ${p => p.theme.spacing(5)};
  padding-bottom: ${p => p.theme.spacing(5)};
`;

export const AdditionalTitle = styled.h4`
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(6)};
  margin-bottom: ${p => p.theme.spacing(6)};
`;

export const StyledNavLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  color: ${p => p.theme.colors.primaryText};

  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.hoverColor};
    text-decoration: underline;
    text-decoration-color: #303f9f;
  }
`;

export const GoBackBtn = styled.button`
  margin-top: ${p => p.theme.spacing(3)};
  margin-bottom: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  background-color: transparent;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.m};

  :hover {
    color: ${p => p.theme.colors.hoverColor};
    text-decoration: underline;
    text-decoration-color: #303f9f;
  }
`;
