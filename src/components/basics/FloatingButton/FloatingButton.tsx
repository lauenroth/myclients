import { FC } from 'react';
import styled from 'styled-components';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <Wrapper className="fixed bottom-0 right-0 mb-4 mr-4 p-4 rounded-full shadow-lg" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" viewBox="0 0 24 24">
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: #6466f0;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export { FloatingButton };
