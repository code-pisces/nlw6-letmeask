import { ReactNode } from "react";
import styled, { css } from "styled-components";

type ButtonStyledProps = {
  isLiked?: boolean;
};

export const Container = styled.div`
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + & {
    margin-top: 0.5rem;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    color: #737380;
    font-size: 0.875rem;
  }
`;

export const LikeButton = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: flex-end;
  color: #737380;
  gap: 0.5rem;

  ${({ isLiked }) =>
    isLiked &&
    css`
      color: #835afd;

      svg path {
        stroke: #835afd;
      }
    `}
`;

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export function Question({ content, children, author }: QuestionProps) {
  return (
    <Container>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </Container>
  );
}
