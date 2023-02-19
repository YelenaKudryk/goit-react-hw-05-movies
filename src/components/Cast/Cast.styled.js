import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
`;

export const ActorItem = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radius.normal};
`;

export const ActorName = styled.p`
  text-align: center;
`;
