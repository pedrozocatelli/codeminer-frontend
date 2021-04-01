import { shade } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
}

export const Container = styled.div<ContainerProps>``;

export const Content = styled.div`
  flex: 1;
  border-radius: 5px;
  background: #daf5bc;
`;

export const Title = styled.div`
  color: #fff;
  background: #8cc152;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  h2 {
    margin: 0px;
    font-size: 25px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #b9cca5;
  padding: 15px;

  strong {
    color: #333;
    font-weight: bolder;
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #8cc152;
  width: 100%;
  padding: 15px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  transition: background-color 0.2s;
  border-radius: 5px;

  &:hover {
    background: ${shade(0.1, '#8cc152')};
  }

  :disabled {
    cursor: not-allowed;
    background: ${shade(0.3, '#8cc152')};
  }
`;

export const EmptyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;

  img {
    max-height: 100%;
    width: auto;
  }
`;

export const DiscountContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;

  input {
    width: 65%;

    :disabled {
      cursor: not-allowed;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #8cc152;
    color: #fff;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
    border-radius: 5px;

    &:hover {
      background: ${shade(0.1, '#8cc152')};
    }

    :disabled {
      cursor: not-allowed;
      background: ${shade(0.3, '#8cc152')};
    }
  }
`;
