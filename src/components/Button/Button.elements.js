import styled, { keyframes } from "styled-components";

const onhover = keyframes`
    from { transform: scale(1); }
    to   { transform: scale(1.02); }
  `;

export const OfferButton = styled.a`
  background-color: #257fea;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 1em 2em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 75%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 1px 5px 0px #676767;
    animation: 0.2s ${onhover} ease-in;
  }
`;

export const ButtonSpan = styled.span``;
