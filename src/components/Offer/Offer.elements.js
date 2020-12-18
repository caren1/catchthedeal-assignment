import styled from "styled-components";

export const OfferContainer = styled.div`
  width: 350px;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin: 10px;
  }
`;
export const OfferHeading = styled.h1`
  font-size: 38px;
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const OfferPrice = styled.h2`
  margin-top: 5px;
  font-size: 30px;
  color: #257fea;
  text-align: center;
`;

export const OfferPromo = styled.h2`
  margin-top: 10px;
  font-size: 25px;
  text-align: center;
`;

export const OfferPromoSpan = styled.span`
  color: #257fea;
`;

export const OfferCodeContainer = styled.div`
  text-align: center;
`;

export const CodeSpan = styled.span`
  color: #383737;
  font-size: 14px;
`;

export const CodeFieldSet = styled.fieldset`
  margin-top: 1em;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
export const CodeLegend = styled.legend`
  text-align: left;
  font-size: 12px;
  padding: 0 8px;
`;
export const CodeInput = styled.input`
  text-align: center;
  font-size: 16px;
  border: none;
  padding: 6px 12px;
  font-weight: 600;
  color: grey;
  cursor: pointer;

  &::placeholder {
    text-transform: uppercase;
  }

  &:focus {
    outline: none;
  }
`;

export const OfferQuantityCounter = styled.p`
  font-weight: bolder;
  border: 1px solid lightgray;
  padding: 8px 16px;
  border-radius: 50px;
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
`;

export const CountDownContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`
export const TimeSpan = styled.div`
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 10px;

`