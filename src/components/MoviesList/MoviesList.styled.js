import styled from '@emotion/styled';

export const MoviesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${p => p.theme.spacing(2)};
`;

export const MovieItem = styled.li`
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const MovieName = styled.h4`
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
`;

export const RealeseDate = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.secondaryText};
  text-align: center;
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;
