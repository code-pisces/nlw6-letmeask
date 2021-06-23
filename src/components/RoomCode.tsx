import styled from "styled-components";

import copyImg from "../assets/images/copy.svg";

export const Container = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  div {
    background: #835afd;
    padding: 0 0.75rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 14.375rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </Container>
  );
}
