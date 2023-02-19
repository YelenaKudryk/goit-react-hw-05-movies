import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
`;

export const ReviewsName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.spacing(2)};
`;
