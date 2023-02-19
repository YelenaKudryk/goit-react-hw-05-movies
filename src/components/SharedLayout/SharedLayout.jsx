import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { HeaderStyles, HeaderList, HeaderLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderStyles>
        <HeaderList>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </HeaderList>
      </HeaderStyles>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
