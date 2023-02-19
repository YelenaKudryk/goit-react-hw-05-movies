import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderStyles = styled.section`
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
`;

export const HeaderLink = styled(NavLink)`
  padding: ${p => p.theme.spacing(4)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primaryText};
  outline: none;

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
