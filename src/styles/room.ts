import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  max-width: 70.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 2.813rem;
  }
`;

export const ContentMain = styled.main`
  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: .5rem;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 8.125rem;
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #29292e;
  }

  span {
    margin-left: 1rem;
    background: #e559f9;
    border-radius: 624.938rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
    font-size: .875rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: .875rem;
      font-weight: 500;
      cursor: pointer;
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

  > span {
    margin-left: .5rem;
    color: #29292e;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;