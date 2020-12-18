import styled, { keyframes } from "styled-components";

const heartbeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( 1 );
  }

`;

export const IconWithInfoContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  align-self: ${(props) => (props.reversed ? "flex-end" : "center")};
  align-items: center;
`;

export const IconWrapper = styled.div`
  border: 1px solid #cfcbcb;
  padding: 1em;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  &:hover {
    color: red;
    animation: 1s ${heartbeat} ease-in;
    cursor: pointer;
  }
`;

export const IconInfo = styled.p`
  color: #635f5f;
  margin: ${(props) => (props.reversed ? "0 1em 0 0" : "0 0 0 1em")};
  display: block;
  width: 100%;
  font-size: 14px;
`;
