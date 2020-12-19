import styled from "styled-components";

export const OfferContainer = styled.div`
  width: 350px;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 1em 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 0px lightgray;
  }

  > * {
    margin: 10px;
  }
`;

export const OfferHeading = styled.h1`
  font-size: 30px;
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 600;
`;

export const OfferPrice = styled.h2`
  margin-top: 5px;
  font-size: 28px;
  color: #257fea;
  text-align: center;

  &:hover {
    border-bottom: 3px solid #257fea;
    transition: border-bottom 0.1s ease-in;
  }
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
  margin-top: 0;
`;

export const CodeSpan = styled.span`
  color: gray;
  font-size: 14px;
`;

export const CodeFieldSet = styled.fieldset`
  margin-top: 1em;
  margin-bottom: 10px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid lightgray;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.1s ease-in;
  }
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
  letter-spacing: 0.3px;

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

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in;
    box-shadow: 0px 1px 5px 0px #257fea;
  }
`;

export const CountDownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
