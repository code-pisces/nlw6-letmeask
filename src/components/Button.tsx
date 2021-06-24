import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonStyledProps = {
  isOutlined?: boolean;
};

export const MyButton = styled.button<ButtonStyledProps>`
  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background: #fff;
      border: 1px solid #835afd;
      color: #835afd;
    `}

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <MyButton isOutlined={isOutlined} {...props} />;
}
