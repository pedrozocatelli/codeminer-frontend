import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 15px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;

  img {
    width: 80%;
    height: 80%;
    border-radius: 2px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 5px;
  min-width: 300px;

  strong {
    font-weight: bold;
    color: #8cc152;
    font-size: 22px;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      color: #333;
      font-weight: 500;
      font-size: 18px;

      & + span {
        font-size: 14px;
      }
    }
  }
`;

interface BuyButtonProps {
  added?: boolean;
}

export const BuyButton = styled.button<BuyButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => (props.added ? '#648a3b' : '#8cc152')};
  padding: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  transition: background-color 0.2s;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: not-allowed;

  &:hover {
    ${(props) =>
      !props.added &&
      css`
        background: ${shade(0.1, '#8cc152')};
        cursor: pointer;
      `}
  }
`;
