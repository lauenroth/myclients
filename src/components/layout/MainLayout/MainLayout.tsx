import { FC } from 'react';
import styled from 'styled-components';
import { MainNavigation } from '../MainNavigation/MainNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <>
      <MainNavigation />
      <Wrapper className={className}>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
`;

export { MainLayout };
