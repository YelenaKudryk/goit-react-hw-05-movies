import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Container,
  HeaderStyles,
  HeaderList,
  HeaderLink,
} from './SharedLayout.styled';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
