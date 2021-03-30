import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: #ffffff33;

  .without-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background: transparent;
    }
    &::-webkit-scrollbar-button {
      background: transparent;
    }
    &::-webkit-scrollbar-track-piece {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;

const pulse = keyframes`
  from {
    transform: scale(0.5);
    opacity: 1;
  }
 to {
    transform: scale(0.4);
    opacity: 0.6;
  }
`;

export const Loader = styled.div`
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  display: flex;
  flex-direction: row;

  opacity: 0.8;

  span {
    display: inline-block;
    animation: ${pulse} 0.4s alternate infinite ease-in-out;
  }
`;
