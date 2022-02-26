import { FC } from 'react';
import styled, { css } from 'styled-components';

interface LogoProps {
  type: 'dashboard' | 'timeTracking' | 'invoices' | 'clients';
}

const Logo: FC<LogoProps> = ({ type }) => {
  return (
    <LogoWrapper type={type}>
      <span />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div<LogoProps>`
  ${({ type }) => css`
    background-color: #ccc;
    display: flex;
    height: 45px;
    overflow: hidden;
    position: relative;
    width: 45px;

    &::after,
    &::before,
    span::after,
    span::before {
      content: '';
      position: absolute;
      transition: all 0.25s ease-in-out;
    }

    span {
      display: block;
      position: absolute;
    }

    ${type === 'dashboard' &&
    css`
      &::before {
        background-color: #6466f0;
        border-radius: 3px;
        height: 14px;
        left: 3px;
        top: 3px;
        width: 18px;
      }

      &::after {
        background-color: #6466f0;
        border-radius: 3px;
        height: 14px;
        right: 3px;
        top: 3px;
        width: 18px;
      }

      span {
        background-color: #6466f0;
        border-radius: 3px;
        height: 14px;
        left: 3px;
        top: 20px;
        width: 18px;
      }

      span::after {
        background-color: #6466f0;
        border-radius: 3px;
        height: 14px;
        left: 21px;
        top: 0;
        width: 18px;
      }
    `}

    ${type === 'clients' &&
    css`
      &::before {
        background-color: #6466f0;
        border-radius: 50%;
        height: 25px;
        left: 10px;
        top: 10px;
        width: 25px;
      }

      span::after {
        background-color: #6466f0;
        border-radius: 50%;
        height: 45px;
        left: 0;
        opacity: 0.7;
        top: 30px;
        width: 45px;
      }
    `}

    ${type === 'timeTracking' &&
    css`
      &::before {
        background-color: #6466f0;
        height: 22px;
        left: 20px;
        top: 2px;
        width: 4px;
      }

      &::after {
        background-color: #6466f0;
        height: 4px;
        left: 34px;
        top: 20px;
        width: 8px;
      }

      span::after {
        background-color: #6466f0;
        height: 8px;
        left: 18px;
        top: 14px;
        width: 4px;
      }

      span::before {
        background-color: #6466f0;
        height: 14px;
        left: 14px;
        top: 0;
        transform: rotate(45deg);
        width: 4px;
      }

      span {
        background-color: #6466f0;
        height: 4px;
        left: 2px;
        top: 20px;
        width: 8px;
      }
    `}
  `}
`;

export { Logo };
