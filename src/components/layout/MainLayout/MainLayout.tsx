import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
`;

export { MainLayout };
