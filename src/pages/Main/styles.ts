import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background: #8cc152;
`;

export const HeaderContent = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 150px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  span {
    color: #fff;
  }

  strong {
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1150px;
  margin: 64px auto;
  justify-content: space-between;
`;

export const ItemsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const CartContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
