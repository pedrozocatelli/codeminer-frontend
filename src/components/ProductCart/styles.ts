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
  background: #fff;
  padding: 5px;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;

  img {
    width: 80%;
    height: 80%;
    border-radius: 2px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-weight: bold;
    color: #8cc152;
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
  width: 100px;
  background: orange;
  border: none;
  color: #333;
  width: 15%;
  height: 100%;
  margin-left: auto;
`;
