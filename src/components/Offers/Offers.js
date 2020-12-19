import React from "react";
import Offer from "../Offer/Offer";
import { OffersContainer } from "./Offers.elements";

const Offers = ({ offers }) => {
  return (
    <OffersContainer id="offers">
      {offers.map((singleOffer) => (
        <Offer key={singleOffer.id} offer={singleOffer} />
      ))}
    </OffersContainer>
  );
};

export default Offers;
