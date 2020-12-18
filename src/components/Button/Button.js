import React from "react";
import { OfferButton, ButtonSpan } from "./Button.elements";
import Person from "@material-ui/icons/Person";

const Button = ({ address }) => {
  return (
    <OfferButton href={address}>
      <ButtonSpan> Go to the course</ButtonSpan>
      <Person />
    </OfferButton>
  );
};

export default Button;
