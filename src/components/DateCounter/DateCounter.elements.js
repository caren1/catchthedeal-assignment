import styled from "styled-components";

export const DateCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const TimeSpan = styled.span`
  box-shadow: 0px 1px 5px 0px lightgray;
  border: 1px solid lightgray;
  padding: 12px;
  min-width: 50px;
`;

export const Separator = styled.p`
  &:last-of-type {
    display: none;
  }
`;

export const TimeInfo = styled.span`
  color: gray;
  font-size: 12px;
`;
