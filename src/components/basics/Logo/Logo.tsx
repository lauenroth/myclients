import { FC } from 'react';
import styled, { css } from 'styled-components';

export type LogoType = 'dashboard' | 'clients' | 'invoices' | 'timeTracking';

interface LogoProps {
  type: LogoType;
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
    background-color: rgba(100, 100, 100, 0.3);
    border-radius: 4px;
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
      transition: all 0.25s ease-in-out;
    }

    ${type === 'dashboard' &&
    css`
      &::before {
        background-color: rgba(100, 102, 240, 0.5);
        border-radius: 3px;
        height: 15px;
        left: 5px;
        top: 5px;
        width: 15px;
      }

      &::after {
        background-color: #6466f0;
        border-radius: 3px;
        height: 15px;
        right: 5px;
        top: 5px;
        width: 15px;
      }

      span {
        background-color: #6466f0;
        border-radius: 3px;
        height: 15px;
        left: 5px;
        top: 25px;
        width: 15px;
      }

      span::after {
        background-color: rgba(100, 102, 240, 0.5);
        border-radius: 3px;
        height: 15px;
        left: 20px;
        top: 0;
        width: 15px;
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

      span {
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
        border-radius: 3px;
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
