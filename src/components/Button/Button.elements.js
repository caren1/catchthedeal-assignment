import styled from "styled-components";

export const OfferButton = styled.a`
  background-color: #257fea;
  color: #ffffff;
  outline: none;
  border: none;
  padding: 1em 1em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 15px;
  width: 75%;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 1px 5px 0px darkgray;
    transition: transform 0.1s ease-in;
  }
`;

export const ButtonSpan = styled.span``;
