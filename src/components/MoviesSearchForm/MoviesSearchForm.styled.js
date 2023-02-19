import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  gap: ${p => p.theme.spacing(5)};
  justify-content: center;
  margin-bottom: ${p => p.theme.spacing(4)};
  margin-top: ${p => p.theme.spacing(4)};
`;

export const InputStyled = styled.input`
  padding: ${p => p.theme.spacing(2)};
  width: 200px;
  &:hover,
  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.hoverColor};
    border-radius: ${p => p.theme.radius.normal};
  }
`;

export const SearchBtn = styled.button`
  border: none;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radius.normal};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
