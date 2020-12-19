import styled, { keyframes } from "styled-components";

const heartbeat = keyframes`
  
  20%
  {
    transform: scale( 1.5 );
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
  padding: 10px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bolder;
  min-width: 45px;
  min-height: 45px;
  color: ${(props) => (props.isFavourite ? "red" : "black")};

  &:hover {
    color: ${(props) => (props.isNumber ? "#257fea" : "red")};
    animation: 1s ${heartbeat} ease-in-out;
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
