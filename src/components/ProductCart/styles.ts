import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  padding: 5px 15px;
  margin-top: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #bce899;
  padding: 5px;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 35%;

  img {
    width: 80%;
    height: 80%;
    border-radius: 2px;
  }

  svg {
    position: absolute;
    padding: 1px;
    border-radius: 50%;
    background: #fe6a7a;
    color: #fff;
    transform: rotate(45deg);
    top: -5px;
    right: 7px;
    cursor: pointer;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-weight: bold;
    color: #333;
    font-size: 18px;

    & + span {
      font-size: 16px;
    }
  }

  span {
    color: #333;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const InputNumber = styled.input`
  height: 100%;
  width: 55px;
  border-radius: 5px;
  padding: 10px;
  background: white;
  border: none;
  color: #333;
  margin-left: auto;
`;
