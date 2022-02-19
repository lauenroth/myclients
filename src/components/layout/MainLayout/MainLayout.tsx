import styled from 'styled-components';
import { MainNavigation } from '../MainNavigation/MainNavigation';

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
`;

export { MainLayout };
